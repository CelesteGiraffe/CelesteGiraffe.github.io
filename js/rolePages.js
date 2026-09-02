// Role-specific tag sets for filtering portfolio items
const roleTagSets = {
  'game-developer': [
    'Unity', 'C#', 'Game Design', 'State Machine AI', 'NavMesh',
    'Player Kinematics', 'Input Buffering', 'Blender', 'Mixamo',
    'Animation Pipelines', 'NPC AI', 'Inventory Systems', 'Rapid Prototyping',
    '.NET', 'Algorithms', 'Grid Systems', 'UI Architecture',
    'Discrete Simulation', 'Toroidal Grids', 'Emulation', 'Computer Architecture',
    'C++', 'Rust', 'Systems Programming'
  ],
  'web-developer': [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Bootstrap',
    'Web Development', 'DOM API', 'Drag-and-Drop', 'Algorithms',
    'Asynchronous Execution', 'Accessibility', 'Inclusive Design',
    'REST API', 'SCSS', 'jQuery'
  ],
  'backend-developer': [
    'PHP', 'MySQL', 'Flask', 'Python', 'Database Architecture',
    'Transactions', 'CRUD', 'Security', 'Backend Development',
    'OAuth2', 'DAO Pattern', 'Docker', 'REST API', 'Node.js',
    'Express', 'MongoDB', 'Sockets', 'Networking', 'TCP/IP',
    'RFC 1459', 'Concurrent I/O'
  ],
  'fullstack-developer': [
    'Full-Stack Development', 'Python', 'Flask', 'MySQL', 'Node.js',
    'Express', 'MongoDB', 'OAuth2', 'Database Architecture', 'Docker',
    'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'REST API',
    'Backend Development', 'Web Development', 'Accessibility',
    'Inclusive Design', 'DAO Pattern', 'Transactions', 'CRUD', 'Security'
  ],
  'systems-programming': [
    'C++', 'Rust', 'Assembly', 'Emulation', 'Computer Architecture',
    'Lexical Analysis', 'Parsing', 'Memory Systems', 'Memory Management',
    'Concurrency', 'Systems Programming', 'Zero-Cost Abstractions',
    'Data Structures', 'Discrete Simulation', 'Toroidal Grids',
    'Sockets', 'Networking', 'TCP/IP', 'RFC 1459', 'Concurrent I/O',
    'Linux Shell', 'Bash Scripting', 'POSIX Shell', 'Version Control', 'CLI'
  ],
  'devops-infrastructure': [
    'Docker', 'Linux', 'Linux Shell', 'Bash Scripting', 'POSIX Shell',
    'Apache2', 'Version Control', 'Networking', 'Security'
  ],
  'software-engineering': [
    'Java', 'JavaFX', 'OOP', 'SQL', 'MVC Architecture',
    'Software Engineering', 'NetBeans'
  ]
};

/**
 * Filter portfolio items by role tags and calculate relevance scores
 * @param {string} roleKey - The role key (e.g., 'game-developer')
 * @returns {Array} Filtered and sorted portfolio items
 */
function filterByRole(roleKey) {
  const roleTags = roleTagSets[roleKey] || [];
  if (roleTags.length === 0) return [];

  // Calculate relevance for each item
  const itemsWithScores = portfolioItems.map(item => {
    const matchingTags = item.tags.filter(tag => 
      roleTags.some(roleTag => 
        tag.toLowerCase() === roleTag.toLowerCase() ||
        tag.toLowerCase().includes(roleTag.toLowerCase()) || 
        roleTag.toLowerCase().includes(tag.toLowerCase())
      )
    );
    
    const relevanceScore = matchingTags.length;
    const matchPercentage = roleTags.length > 0 
      ? (matchingTags.length / roleTags.length) * 100 
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

  return filtered;
}

/**
 * Get all unique tags from portfolio items
 * @returns {Array} Sorted array of unique tags
 */
function getAllTags() {
  const tagSet = new Set();
  portfolioItems.forEach(item => {
    item.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

/**
 * Render portfolio items to the page
 * @param {Array} items - Filtered portfolio items to render
 * @param {HTMLElement} container - Container element to render into
 */
function renderPortfolioItems(items, container) {
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = '<p class="no-results">No projects match this role criteria.</p>';
    return;
  }

  container.innerHTML = items.map(item => {
    const tagsHtml = item.tags.map(tag =>
      `<a
        class="tag tag-link"
        href="display.html?tags=${encodeURIComponent(tag)}&title=${encodeURIComponent('Tag: ' + tag)}"
        title="Show all projects tagged ${escapeHtml(tag)}"
      >${escapeHtml(tag)}</a>`
    ).join('');

    const imageHtml = item.image 
      ? `<img src="${item.image}" alt="${escapeHtml(item.title)}" class="project-image" onerror="this.style.display='none';">`
      : '';

    const linkHtml = item.link && item.link !== '#' 
      ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Repository</a>`
      : '';

    const relevanceBadge = item.relevanceScore 
      ? `<span class="relevance-badge">${item.relevanceScore} matching tag${item.relevanceScore !== 1 ? 's' : ''}</span>`
      : '';

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
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}
