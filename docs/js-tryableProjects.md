# `tryableProjects.js`

Adds the slim navigation bar that appears on playable demos such as the Tier List Builder and Sorting Visualizer. It helps visitors jump between hosted builds without going back to the main site.

## Data Definition
- `tryableProjects`: array describing each demo with `id`, `name`, `shortLabel`, `primaryUrl`, optional `routes`, and a short `summary`.
- To add a new demo, push a new object and include every route that should trigger the bar (for instance, both `/Tierlist/pre-loader.html` and `/Tierlist/Tierlist.html`).

## Runtime Flow
1. On `DOMContentLoaded`, the script checks the current `window.location.pathname` against each project’s routes via `getCurrentTryableProject`.
2. If there is a match, it builds the bar markup (`buildTryableBar`) and inserts it right below the main `<nav>`.
3. `syncOffset()` keeps the bar pinned directly under the nav even when the nav height changes.
4. `attachNavExitAnimation()` watches nav links so transitions out of demo pages feel smooth and do not flash the bar on unrelated pages.

## Styling Hooks
- The bar relies on `.tryable-projects-bar`, `.tryable-project-link`, and related classes defined in `css/layout/tryable-projects-bar.css` (imported through `css/styles.css`).
- `document.body` receives `has-tryable-bar` so you can add page-level adjustments if needed.
- A CSS custom property `--tryable-bar-offset` lets the bar know how far it should sit below the site nav.

## Best Practices
- Keep link targets relative (`/SortingAlgoVisualizer/Sort.html`) so the bar works on GitHub Pages.
- Avoid opening nav links in new tabs from the bar; the script assumes same-tab navigation for its exit animation.
- When relocating demos, update both the `primaryUrl` and the `routes` array to avoid orphaned entries.

This file keeps hands-on projects discoverable. Update it whenever you add a new embedded build worth highlighting.
