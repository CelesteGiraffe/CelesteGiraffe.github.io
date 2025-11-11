# `rolePages.js`

Handles filtering and rendering projects for the dedicated role pages (`game-developer.html`, `web-developer.html`, etc.).

## Key Pieces

- `roleTagSets`: maps each role key to the tags that define it. Matching is case-insensitive and includes partial matches (e.g., `"Unity"` matches `"Unity 3D"`). The same sets also feed the discipline groupings in `custom.html`, so updates here automatically flow to the standalone tag selector.
- `filterByRole(roleKey)`: scores every project by tag overlap, filters out items with zero matches, and sorts by relevance then date.
- `renderPortfolioItems(items, container)`: builds the project cards, including tag chips, relevance badges, and “View Project” buttons.
- Helper utilities: `getAllTags`, `escapeHtml`, and `formatDate` keep rendering predictable across pages.

## How Role Pages Use It
Each `*-developer.html` file:
1. Loads `js/portfolioItems.js` and `js/rolePages.js`.
2. Calls `filterByRole('<role-key>')`.
3. Passes the result to `renderPortfolioItems` along with `.projects-grid`.

## Extending Role Coverage
1. Add a new entry to `roleTagSets` with the tags that define the new role.
2. Duplicate one of the existing role HTML pages, update headings/copy, and change the script call to `filterByRole('your-role-key')`.
3. Update navigation links on every page so the new role is reachable.

## Current Discipline Keys
- `game-developer`, `web-developer`, `backend-developer`, `fullstack-developer`
- Specialty sets such as `systems-programming`, `devops-infrastructure`, `skills-learning`, `api-integrations`, and `software-engineering`

These extras keep the custom tag filter organised even when a tag doesn’t belong to a traditional “developer” page yet.

## Relevance Scoring
- `relevanceScore` equals the number of overlapping tags.
- `matchingTags` is used for future enhancements or debugging.
- Sorting logic prioritizes higher scores, then newer dates.

## Rendering Notes
- Tag chips link to `display.html?tags=<tag>` so visitors can jump into related collections.
- Images fall back to an inline SVG placeholder if they fail to load.
- If a project’s `link` field is `"#"`, the “View Project” button is omitted automatically.

Lean on this file whenever you need to adjust how roles behave or how cards look on the dedicated role pages.
