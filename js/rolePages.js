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
/**
 * Detect the active discipline from roleKey or current page URL
 * @param {string} [roleKey] - Optional role identifier
 * @returns {string} Discipline identifier ('game', 'backend', 'web', 'fullstack', or '')
 */
function getActivePageDiscipline(roleKey) {
  if (roleKey) {
    if (roleKey.startsWith('game')) return 'game';
    if (roleKey.startsWith('backend') || roleKey.startsWith('systems')) return 'backend';
    if (roleKey.startsWith('web')) return 'web';
    if (roleKey.startsWith('fullstack')) return 'fullstack';
  }
  const path = (window.location.pathname || '').toLowerCase();
  if (path.includes('web-developer')) return 'web';
  if (path.includes('fullstack-developer')) return 'fullstack';
  if (path.includes('game-developer')) return 'game';
  if (path.includes('backend-developer')) return 'backend';
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

  // Full-Stack check
  if (tags.some(t => t === 'full-stack development' || t === 'full-stack') ||
      (genre === 'website' && tags.some(t => ['node.js', 'express', 'mongodb', 'flask', 'php'].includes(t)))) {
    return 'fullstack';
  }

  // Backend & Systems check
  if (genre === 'systems' || genre === 'backend' ||
      tags.some(t => ['c++', 'rust', 'assembly', 'linux shell', 'bash scripting', 'sql', 'mysql', 'database architecture'].includes(t))) {
    return 'backend';
  }

  // Web check
  if (genre === 'website' || genre === 'tool' ||
      tags.some(t => ['html', 'css', 'javascript', 'typescript', 'canvas', 'accessibility', 'bootstrap', 'jquery'].includes(t))) {
    return 'web';
  }

  return 'backend';
}

/**
 * Render filtered portfolio items into the container
 * @param {Array} items - Array of portfolio items to render
 * @param {HTMLElement} container - Container element to render into
 * @param {string} [roleKey] - Optional role identifier
 */
function renderPortfolioItems(items, container, roleKey) {
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = '<p class="no-results">No projects match this role criteria.</p>';
    return;
  }

  const pageDiscipline = getActivePageDiscipline(roleKey);

  container.innerHTML = items.map(item => {
    const discipline = pageDiscipline || getItemDiscipline(item);
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

    const relevanceBadge = item.relevanceScore 
      ? `<span class="relevance-badge">${item.relevanceScore} matching tag${item.relevanceScore !== 1 ? 's' : ''}</span>`
      : '';

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
