/**
 * Tag Filter functionality for custom.html
 * Handles URL parameters, tag selection, filtering, and URL generation
 */

let selectedTags = new Set();
let pageTitle = '';
const disciplineDisplayNames = {
  'game-developer': 'Game Development',
  'web-developer': 'Web Development',
  'backend-developer': 'Backend Development',
  'fullstack-developer': 'Full-Stack Development',
  'systems-programming': 'Systems & Low-Level',
  'devops-infrastructure': 'DevOps & Infrastructure',
  'skills-learning': 'Skills & Learning',
  'api-integrations': 'APIs & Integrations',
  'software-engineering': 'Software Engineering'
};

/**
 * Initialize tag filter from URL parameters
 */
function initializeTagFilter() {
  const urlParams = new URLSearchParams(window.location.search);
  const tagsParam = urlParams.get('tags');
  const titleParam = urlParams.get('title');
  
  if (tagsParam) {
    const tags = decodeURIComponent(tagsParam).split(',').map(t => t.trim()).filter(t => t);
    selectedTags = new Set(tags);
  }
  
  if (titleParam) {
    pageTitle = decodeURIComponent(titleParam);
    const titleInput = document.getElementById('page-title-input');
    if (titleInput) {
      titleInput.value = pageTitle;
    }
  }
  
  // Add event listener for title input
  const titleInput = document.getElementById('page-title-input');
  if (titleInput) {
    titleInput.addEventListener('input', function() {
      pageTitle = this.value.trim();
      updateUrl();
    });
  }
  
  renderTagSelector();
  updateGenerateButton();
  filterAndDisplayProjects();
}

/**
 * Get all unique tags from portfolio items
 * @returns {Array} Sorted array of unique tags
 */
function getAllAvailableTags() {
  const tagSet = new Set();
  portfolioItems.forEach(item => {
    item.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

/**
 * Build discipline sections with alphabetical tags
 * @param {Array} allTags - All available tags
 * @returns {Array} Sections with metadata
 */
function buildDisciplineSections(allTags) {
  const sections = [];
  const assignedTags = new Set();
  const roleEntries = roleTagSets 
    ? Object.entries(roleTagSets).map(([key, tags]) => ({
        key,
        title: getDisciplineTitle(key),
        tags
      }))
    : [];

  roleEntries.sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }));

  roleEntries.forEach(entry => {
    const uniqueSortedTags = Array.from(new Set(entry.tags))
      .filter(tag => allTags.includes(tag))
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

    if (uniqueSortedTags.length === 0) return;

    uniqueSortedTags.forEach(tag => assignedTags.add(tag));
    sections.push({
      key: entry.key,
      title: entry.title,
      tags: uniqueSortedTags
    });
  });

  const additionalTags = allTags
    .filter(tag => !assignedTags.has(tag))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

  if (additionalTags.length > 0) {
    sections.push({
      key: 'additional-tags',
      title: 'Additional Tags',
      tags: additionalTags
    });
  }

  if (sections.length === 0) {
    sections.push({
      key: 'all-tags',
      title: 'All Tags',
      tags: allTags
    });
  }

  return sections;
}

/**
 * Get a readable discipline title
 * @param {string} key - Discipline key
 * @returns {string} Display name
 */
function getDisciplineTitle(key) {
  if (disciplineDisplayNames[key]) {
    return disciplineDisplayNames[key];
  }
  return key
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Build the checkbox markup for a tag
 * @param {string} tag - Tag label
 * @param {boolean} isChecked - Whether the tag is selected
 * @returns {string} HTML string
 */
function renderTagCheckbox(tag, isChecked) {
  return `
    <label class="tag-checkbox-label">
      <input 
        type="checkbox" 
        value="${escapeHtml(tag)}" 
        ${isChecked ? 'checked' : ''}
        data-tag="${escapeHtml(tag)}"
      >
      <span class="tag-checkbox-text">${escapeHtml(tag)}</span>
    </label>
  `;
}

/**
 * Render tag selector with checkboxes
 */
function renderTagSelector() {
  const container = document.getElementById('tag-selector');
  if (!container) return;

  const allTags = getAllAvailableTags();
  const disciplineSections = buildDisciplineSections(allTags);
  
  const generateBtnDisabled = selectedTags.size === 0 ? 'disabled' : '';
  const generateBtnClass = selectedTags.size === 0 ? 'btn btn-primary btn-disabled' : 'btn btn-primary';
  
  container.innerHTML = `
    <div class="tag-selector-header">
      <h3>Select Tags</h3>
      <div class="tag-controls">
        <button type="button" class="btn btn-secondary" onclick="selectAllTags()">Select All</button>
        <button type="button" class="btn btn-secondary" onclick="deselectAllTags()">Clear All</button>
        <button type="button" id="generate-display-btn" class="${generateBtnClass}" onclick="generateDisplayPage()" ${generateBtnDisabled}>Generate Display Page</button>
        <button type="button" class="btn btn-secondary" onclick="copyUrlToClipboard(event)">Copy URL</button>
      </div>
    </div>
    <div class="tag-checkboxes-grouped" id="tag-checkboxes-container">
      ${disciplineSections.map(section => `
        <section class="tag-discipline-section" data-discipline="${escapeHtml(section.key)}">
          <h4 class="tag-discipline-title">${escapeHtml(section.title)}</h4>
          <div class="tag-checkboxes">
            ${section.tags.map(tag => renderTagCheckbox(tag, selectedTags.has(tag))).join('')}
          </div>
        </section>
      `).join('')}
    </div>
    <div class="selected-tags-count">
      <strong>${selectedTags.size}</strong> tag${selectedTags.size !== 1 ? 's' : ''} selected
    </div>
  `;
  
  // Add event listeners to checkboxes
  const checkboxes = container.querySelectorAll('#tag-checkboxes-container input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      toggleTag(this.dataset.tag);
    });
  });
}

/**
 * Toggle a tag selection
 * @param {string} tag - Tag to toggle
 */
function toggleTag(tag) {
  if (selectedTags.has(tag)) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  syncCheckboxInstances(tag);
  
  updateUrl();
  updateSelectedCount();
  updateGenerateButton();
  filterAndDisplayProjects();
}

/**
 * Select all tags
 */
function selectAllTags() {
  const allTags = getAllAvailableTags();
  selectedTags = new Set(allTags);
  renderTagSelector();
  updateUrl();
  updateSelectedCount();
  updateGenerateButton();
  filterAndDisplayProjects();
}

/**
 * Keep duplicate checkboxes for a tag in sync
 * @param {string} tag - Tag label
 */
function syncCheckboxInstances(tag) {
  const container = document.getElementById('tag-checkboxes-container');
  if (!container) return;

  const shouldBeChecked = selectedTags.has(tag);
  const checkboxes = container.querySelectorAll('input[type="checkbox"][data-tag]');
  checkboxes.forEach(checkbox => {
    if (checkbox.dataset.tag === tag) {
      checkbox.checked = shouldBeChecked;
    }
  });
}

/**
 * Deselect all tags
 */
function deselectAllTags() {
  selectedTags.clear();
  renderTagSelector();
  updateUrl();
  updateSelectedCount();
  updateGenerateButton();
  filterAndDisplayProjects();
}

/**
 * Update URL with current selected tags and title
 */
function updateUrl() {
  const tagsArray = Array.from(selectedTags);
  const url = new URL(window.location);
  
  if (tagsArray.length > 0) {
    url.searchParams.set('tags', tagsArray.join(','));
  } else {
    url.searchParams.delete('tags');
  }
  
  if (pageTitle) {
    url.searchParams.set('title', pageTitle);
  } else {
    url.searchParams.delete('title');
  }
  
  // Update URL without reload
  window.history.pushState({ tags: tagsArray, title: pageTitle }, '', url);
  
  // Update Generate Display Page button state
  updateGenerateButton();
}

/**
 * Update Generate Display Page button state
 */
function updateGenerateButton() {
  const generateBtn = document.getElementById('generate-display-btn');
  if (generateBtn) {
    if (selectedTags.size === 0) {
      generateBtn.disabled = true;
      generateBtn.classList.add('btn-disabled');
    } else {
      generateBtn.disabled = false;
      generateBtn.classList.remove('btn-disabled');
    }
  }
}

/**
 * Generate display page URL and navigate to it
 */
function generateDisplayPage() {
  if (selectedTags.size === 0) {
    alert('Please select at least one tag to generate a display page.');
    return;
  }
  
  const tagsArray = Array.from(selectedTags);
  const params = new URLSearchParams();
  
  if (pageTitle) {
    params.set('title', pageTitle);
  }
  
  params.set('tags', tagsArray.join(','));
  
  window.location.href = 'display.html?' + params.toString();
}

/**
 * Filter projects by selected tags and display them
 */
function filterAndDisplayProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  if (selectedTags.size === 0) {
    container.innerHTML = '<p class="no-results">Please select one or more tags to filter projects.</p>';
    return;
  }

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

  renderFilteredProjects(filtered, container);
}

/**
 * Render filtered projects
 * @param {Array} items - Filtered portfolio items
 * @param {HTMLElement} container - Container element
 */
function renderFilteredProjects(items, container) {
  if (items.length === 0) {
    container.innerHTML = '<p class="no-results">No projects found matching the selected tags.</p>';
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
 * Update selected tags count display
 */
function updateSelectedCount() {
  const countElement = document.querySelector('.selected-tags-count');
  if (countElement) {
    countElement.innerHTML = `<strong>${selectedTags.size}</strong> tag${selectedTags.size !== 1 ? 's' : ''} selected`;
  }
}

/**
 * Copy current URL to clipboard
 */
async function copyUrlToClipboard(event) {
  const url = window.location.href;
  try {
    await navigator.clipboard.writeText(url);
    // Show feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.classList.add('btn-success');
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('btn-success');
    }, 2000);
  } catch (err) {
    console.error('Failed to copy URL:', err);
    // Fallback: select URL in an input field
    const input = document.createElement('input');
    input.value = url;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('URL copied to clipboard!');
  }
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

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
  initializeTagFilter();
});
