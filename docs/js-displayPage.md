# `displayPage.js`

Renders the read-only curated view on `display.html`. Visitors land here after generating a link from the custom tag filter.

## Flow
1. `initializeDisplayPage()` reads the `tags` and `title` query parameters.
2. The page heading updates to the provided title (default: “Curated Portfolio”) and mentions how many tags were selected.
3. If no tags are present, a friendly empty state invites users back to `custom.html`.
4. Otherwise, the script filters `portfolioItems`, scores matches, sorts them, and calls `renderDisplayProjects()`.

## Rendering Details
- Tag chips again link to `display.html?tags=<tag>` so viewers can branch off to related collections.
- The relevance badge shows “X of Y tags matched” to remind people why each project is listed.
- Image fallback logic mirrors the role pages and custom filter to avoid broken thumbnails.

## Extending the Page
- To add hero content or author notes, update `display.html` and keep the `display-header` IDs so the script can still target them.
- For custom sorting (e.g., highest effort), adjust the `filtered.sort` comparison function.
- If you expose more metadata (effort, languages), add it inside `renderDisplayProjects()` so layout stays centralized.

## Error Handling
- Any missing tag data results in the “No projects found” block rather than a blank grid.
- Since everything runs client-side, the script assumes `portfolioItems.js` is loaded first. Ensure `<script src="js/portfolioItems.js"></script>` remains above `<script src="js/displayPage.js"></script>`.

Use this file whenever you need to tweak how shared links render or if you add new query parameters to the curated view.
