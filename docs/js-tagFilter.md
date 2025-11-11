# `tagFilter.js`

Drives the interactive tag selector on `custom.html`. It keeps the UI, URL, and rendered project list in sync.

## Lifecycle
1. `initializeTagFilter()` reads `tags` and `title` query params, preselects any matching checkboxes, and hooks up the title input.
2. The tag selector is built dynamically from `portfolioItems` so new tags appear automatically.
3. Selecting or clearing tags updates an internal `Set`, refreshes the URL via `history.pushState`, and re-renders the project list.

## UI Controls
- **Select All / Clear All** buttons manage the `selectedTags` set in bulk.
- **Generate Display Page** builds a `display.html?tags=...&title=...` URL and navigates to it (disabled until at least one tag is chosen).
- **Copy URL** copies the current page URL for sharing.

## Discipline Buckets
- The checkbox list now reuses `roleTagSets` to group tags under headings such as “Game Development”, “Web Development”, “Systems & Low-Level”, “DevOps & Infrastructure”, “Skills & Learning”, “APIs & Integrations”, and “Software Engineering”.
- Tags appear in every discipline they belong to. Each input carries a `data-tag` attribute, and changes funnel through `toggleTag()` so duplicates stay synced.
- Any tag not claimed by a discipline is dropped into an “Additional Tags” bucket automatically, but with the expanded sets this should rarely happen.

## Filtering Logic
- Projects are scored by how many selected tags they include.
- Items with zero matches are hidden.
- Sorting mirrors the role pages: highest relevance first, then newest date.
- Each card displays a badge like “3 of 5 tags matched” so visitors know why it surfaced.

## Extending the Filter
- To add search inside the tag list, extend `renderTagSelector()` and keep the checkbox event handlers intact.
- To include additional metadata in the cards, modify `renderFilteredProjects()`; remember to update the other render helpers if you want consistent layouts.
- When adding new buttons, call `updateUrl()` if they change the selected tags or title so deep-linking remains accurate.

## Browser History
- Selections are stored in the URL, so hitting the back button will revert to the previous tag combination. The `popstate` listener re-runs `initializeTagFilter()` to refresh the UI.

Keep edits modular and the page will continue to feel responsive without needing a build step or framework.
