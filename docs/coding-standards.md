# Coding Standards

These are the shared rules that keep the portfolio straightforward to maintain and pleasant to read.

## Voice and Copy
- Write descriptions in the first person when they refer to Celeste’s own work.
- Prefer short paragraphs and bullet lists over long blocks of text.
- Use simple punctuation (commas and periods); avoid em dashes and heavy jargon.
- When linking to live demos inside descriptions, keep links inline and descriptive (for example: `Try it out`).

## HTML Structure
- All pages start with the same `<nav>` and `<footer>` markup for consistency. Update every page when links change.
- Use semantic elements (`<section>`, `<article>`, `<header>`) when practical, but prioritize keeping the DOM shallow.
- Avoid inline styles except for one-off micro tweaks on landing text. Anything reusable should live in the CSS partials under `css/` (imported via `css/styles.css`).
- Keep image paths relative to the repo root (no absolute URLs) so GitHub Pages works under any username.

## CSS Approach
- `css/base/foundation.css` defines the CSS variables for colors, spacing, and typography and is pulled in through `css/styles.css`. Reuse those variables instead of hardcoding values.
- Class names follow a descriptive pattern (`project-card`, `tag-link`) instead of BEM. Keep new names short and readable.
- Media queries now live in `css/utilities/responsive.css`. Add new breakpoints there to keep them easy to find.

## JavaScript Style
- All scripts load with `<script src="..."></script>` tags placed just before `</body>` so the DOM is available without extra guards.
- Use `const`/`let`, arrow functions where short, and helper functions to avoid duplicating logic across files.
- Prefer plain objects and arrays for data (`portfolioItems`) instead of fetching external JSON files.
- Keep DOM queries scoped to the component (`document.getElementById('projects-container')`) to avoid unexpected side effects.

## Accessibility Considerations
- Provide `alt` text for every image and a text fallback for missing thumbnails (already handled in the render helpers).
- Buttons that act like links should still use `<a>` tags with `href`, and vice versa.
- Maintain focus styles and keyboard navigation by not stripping outlines.

Following these standards keeps the code approachable whether you are tweaking copy or shipping a new section.
