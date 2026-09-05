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
      subtitleElement.textContent = `Showing projects matching ${tagCount} selected tag${tagCount !== 1 ? 's' : ''}.`;
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
        <p>Select at least one tag to filter matching projects.</p>
        <a href="custom.html" class="btn btn-primary" style="margin-top: 1rem;">Open Custom Filter</a>
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
        <p>No projects match all of the selected tags.</p>
        <a href="custom.html" class="btn btn-primary" style="margin-top: 1rem;">Adjust Tag Selection</a>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => {
    const discipline = getItemDiscipline(item);
    const genreClass = 'project-card--' + discipline;
    const buttonClass = 'btn btn-' + discipline;

    const tagsHtml = item.tags.map(tag => {
      const tagModifier = getTagDisciplineClass(tag);
      return `<a
        class="tag tag-link ${tagModifier}"
        href="display.html?tags=${encodeURIComponent(tag)}&title=${encodeURIComponent('Tag: ' + tag)}"
        title="Show all projects tagged ${escapeHtml(tag)}"
      >${escapeHtml(tag)}</a>`;
    }).join('');

    const imageHtml = item.image 
      ? `<img src="${item.image}" alt="${escapeHtml(item.title)}" class="project-image" onerror="this.style.display='none';">`
      : '';

    const linkHtml = item.link && item.link !== '#' 
      ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="${buttonClass}">Repository</a>`
      : '';

    const relevanceBadge = `<span class="relevance-badge">${item.relevanceScore} of ${selectedTags.size} tag${selectedTags.size !== 1 ? 's' : ''} matched</span>`;

    return `
      <div class="project-card ${genreClass}">
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
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

/**
 * Get discipline styling modifier for a tag
 * @param {string} tag - Tag name
 * @returns {string} CSS class name
 */
function getTagDisciplineClass(tag) {
  const t = (tag || '').toLowerCase();
  const gameTags = [
    'unity', 'c#', 'game design', 'state machine ai', 'navmesh',
    'player kinematics', 'input buffering', 'blender', 'mixamo',
    'animation pipelines', 'npc ai', 'inventory systems', 'rapid prototyping',
    '.net', 'grid systems', 'ui architecture', 'discrete simulation', 'toroidal grids'
  ];
  if (gameTags.some(gt => gt === t || t.includes(gt))) return 'tag--game';

  const backendTags = [
    'c++', 'rust', 'assembly', 'emulation', 'computer architecture',
    'lexical analysis', 'parsing', 'memory systems', 'memory management',
    'concurrency', 'systems programming', 'zero-cost abstractions',
    'sockets', 'networking', 'tcp/ip', 'rfc 1459', 'concurrent i/o',
    'linux', 'linux shell', 'bash', 'posix', 'cli', 'version control',
    'python', 'mysql', 'sql', 'database architecture', 'transactions', 'crud',
    'security', 'docker', 'apache2', 'dao pattern', 'php', 'backend development'
  ];
  if (backendTags.some(bt => bt === t || t.includes(bt))) return 'tag--backend';

  const webTags = [
    'html', 'css', 'javascript', 'typescript', 'bootstrap', 'web development',
    'dom api', 'drag-and-drop', 'algorithms', 'asynchronous execution',
    'accessibility', 'inclusive design', 'scss', 'jquery', 'canvas'
  ];
  if (webTags.some(wt => wt === t || t.includes(wt))) return 'tag--web';

  const fullstackTags = [
    'full-stack', 'flask', 'node.js', 'express', 'mongodb', 'oauth2', 'rest api'
  ];
  if (fullstackTags.some(ft => ft === t || t.includes(ft))) return 'tag--fullstack';

  return '';
}

/**
 * Determine the native discipline of a portfolio item
 * @param {Object} item - Portfolio item object
 * @returns {string} Discipline identifier ('game', 'backend', 'web', 'fullstack')
 */
function getItemDiscipline(item) {
  if (!item) return 'backend';
  const genre = (item.genre || '').toLowerCase();
  const tags = (item.tags || []).map(t => (t || '').toLowerCase());

  if (genre === 'game') return 'game';

  if (tags.some(t => t === 'full-stack development' || t === 'full-stack') ||
      (genre === 'website' && tags.some(t => ['node.js', 'express', 'mongodb', 'flask', 'php'].includes(t)))) {
    return 'fullstack';
  }

  if (genre === 'systems' || genre === 'backend' ||
      tags.some(t => ['c++', 'rust', 'assembly', 'linux shell', 'bash scripting', 'sql', 'mysql', 'database architecture'].includes(t))) {
    return 'backend';
  }

  if (genre === 'website' || genre === 'tool' ||
      tags.some(t => ['html', 'css', 'javascript', 'typescript', 'canvas', 'accessibility', 'bootstrap', 'jquery'].includes(t))) {
    return 'web';
  }

  return 'backend';
}

