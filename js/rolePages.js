// Role-specific tag sets for filtering portfolio items
const roleTagSets = {
  'game-developer': [
    'Unity', 'C#', 'Game Design', 'State Machine AI', 'NavMesh',
    'Animation', 'Blender', 'Mixamo', 'Player Movement', 'GameJam',
    'State System', 'Time Manipulation', 'NPC Interaction',
    'Inventory Management', '.NET', 'Custom Graphics', 'Grid Systems',
    'C++', 'Rust', 'Console', 'Emergent Systems', 'Emulation'
  ],
  'web-developer': [
    'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Web Development',
    'jQuery', 'TypeScript', 'SCSS', 'Responsive Design', 'Frontend',
    'TailwindCSS', 'Accessibility', 'Inclusive Design'
  ],
  'backend-developer': [
    'PHP', 'MySQL', 'Flask', 'Database Design & Management',
    'Backend Development', 'CRUD', 'Python', 'OAuth2', 'Security',
    'Node.js', 'Express', 'MongoDB', 'Database Architecture',
    'API', 'Server-side', 'SQL', 'Apache2', 'Docker', 'Networking'
  ],
  'fullstack-developer': [
    'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Web Development',
    'PHP', 'MySQL', 'Flask', 'Database Design & Management',
    'Backend Development', 'Full-Stack Development', 'Node.js',
    'Express', 'MongoDB', 'OAuth2', 'EJS', 'API', 'Full-Stack',
    'TailwindCSS', 'Docker', 'SQL'
  ],
  'systems-programming': [
    'C++', 'Assembly', 'Compiler Design', 'Complexity Theory',
    'Concurrency', 'Emergent Systems', 'Emulation', 'File I/O',
    'Linux', 'Linux Shell', 'Memory Management', 'Parsing',
    'Regex', 'Rust', 'Sockets', 'Lexical Analysis'
  ],
  'devops-infrastructure': [
    'Docker', 'Apache2', 'Bash Scripting', 'Dotenv', 'Linux',
    'Linux Shell', 'Networking', 'IRC', 'Version Control'
  ],
  'skills-learning': [
    'Learning', 'OOP', 'Team Collaboration', 'Team Facilitation',
    'Inclusive Teams', 'Inclusive Design', 'Accessibility'
  ],
  'api-integrations': [
    'New York Times API', 'OMDB API'
  ],
  'software-engineering': [
    'Java', 'JavaFX', 'NetBeans', 'File I/O'
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
    container.innerHTML = '<p class="no-results">No projects found matching the selected criteria.</p>';
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
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
