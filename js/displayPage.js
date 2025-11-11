/**
 * Display Page functionality
 * Reads title and tags from URL parameters and displays filtered projects
 */

/**
 * Initialize display page from URL parameters
 */
function initializeDisplayPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const tagsParam = urlParams.get('tags');
  const titleParam = urlParams.get('title');

  // Get selected tags
  const selectedTags = new Set();
  if (tagsParam) {
    const tags = decodeURIComponent(tagsParam).split(',').map(t => t.trim()).filter(t => t);
    tags.forEach(tag => selectedTags.add(tag));
  }

  // Get page title
  let pageTitle = 'Curated Portfolio';
  if (titleParam) {
    pageTitle = decodeURIComponent(titleParam);
  }

  // Update page title and header
  updateDisplayHeader(pageTitle, selectedTags.size);
  document.title = pageTitle + ' - Celeste Artley Portfolio';

  // Filter and display projects
  if (selectedTags.size === 0) {
    displayNoTagsMessage();
    return;
  }

  filterAndDisplayProjects(selectedTags);
}

/**
 * Update display header with title and tag count
 * @param {string} title - Page title
 * @param {number} tagCount - Number of selected tags
 */
function updateDisplayHeader(title, tagCount) {
  const titleElement = document.getElementById('display-title');
  const subtitleElement = document.getElementById('display-subtitle');

  if (titleElement) {
    titleElement.textContent = title;
  }

  if (subtitleElement) {
    if (tagCount > 0) {
      subtitleElement.textContent = `Showing projects matching ${tagCount} selected tag${tagCount !== 1 ? 's' : ''}`;
    } else {
      subtitleElement.textContent = '';
    }
  }
}

/**
 * Display message when no tags are selected
 */
function displayNoTagsMessage() {
  const container = document.getElementById('projects-container');
  if (container) {
    container.innerHTML = `
      <div class="no-results" style="grid-column: 1 / -1;">
        <h2>No tags selected</h2>
        <p>Please select tags to view filtered projects.</p>
        <a href="custom.html" class="btn btn-primary" style="margin-top: 1rem;">Create Custom View</a>
      </div>
    `;
  }
}

/**
 * Filter projects by selected tags and display them
 * @param {Set} selectedTags - Set of selected tags
 */
function filterAndDisplayProjects(selectedTags) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  // Calculate relevance for each item
  const itemsWithScores = portfolioItems.map(item => {
    const matchingTags = item.tags.filter(tag => selectedTags.has(tag));
    const relevanceScore = matchingTags.length;
    const matchPercentage = selectedTags.size > 0 
      ? (matchingTags.length / selectedTags.size) * 100 
      : 0;

    return {
      ...item,
      relevanceScore,
      matchPercentage,
      matchingTags
    };
  });

  // Filter items with at least one matching tag
  const filtered = itemsWithScores.filter(item => item.relevanceScore > 0);

  // Sort by relevance score (descending), then by date (descending)
  filtered.sort((a, b) => {
    if (b.relevanceScore !== a.relevanceScore) {
      return b.relevanceScore - a.relevanceScore;
    }
    return new Date(b.date) - new Date(a.date);
  });

  renderDisplayProjects(filtered, container, selectedTags);
}

/**
 * Render filtered projects for display page
 * @param {Array} items - Filtered portfolio items
 * @param {HTMLElement} container - Container element
 * @param {Set} selectedTags - Set of selected tags for highlighting
 */
function renderDisplayProjects(items, container, selectedTags) {
  if (items.length === 0) {
    container.innerHTML = `
      <div class="no-results" style="grid-column: 1 / -1;">
        <h2>No projects found</h2>
        <p>No projects match the selected tags.</p>
        <a href="custom.html" class="btn btn-primary" style="margin-top: 1rem;">Try Different Tags</a>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => {
    const tagsHtml = item.tags.map(tag =>
      `<a
        class="tag tag-link"
        href="display.html?tags=${encodeURIComponent(tag)}&title=${encodeURIComponent('Tag: ' + tag)}"
        title="Show all projects with tag ${escapeHtml(tag)}"
      >${escapeHtml(tag)}</a>`
    ).join('');

    const imageHtml = item.image 
      ? `<img src="${item.image}" alt="${escapeHtml(item.title)}" class="project-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23999\' font-family=\'sans-serif\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3ENo Image%3C/text%3E%3C/svg%3E';">`
      : '';

    const linkHtml = item.link && item.link !== '#' 
      ? `<a href="${item.link}" target="_blank" class="btn btn-primary">View Project</a>`
      : '';

    const relevanceBadge = `<span class="relevance-badge">${item.relevanceScore} of ${selectedTags.size} tag${selectedTags.size !== 1 ? 's' : ''} matched</span>`;

    return `
      <div class="project-card">
        ${relevanceBadge}
        ${imageHtml}
        <div class="project-content">
          <h3 class="project-title">${escapeHtml(item.title)}</h3>
          <p class="project-description">${item.description}</p>
          <div class="project-tags">${tagsHtml}</div>
          <div class="project-meta">
            <span class="project-date">${formatDate(item.date)}</span>
            ${linkHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Escape HTML to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped HTML
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Format date string
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

