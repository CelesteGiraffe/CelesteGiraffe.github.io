# Styling Guide

Everything visual still funnels through `css/styles.css`, but that file is now an import hub that pulls in smaller partials from the `css/` subfolders. Edit the partials directly and only touch `css/styles.css` when you need to register a new `@import`.

## Folder Layout

1. **`css/base/`** – foundational pieces such as the reset, `:root` tokens, global body styles, and background animation keyframes.
2. **`css/layout/`** – structural rules for navigation, the tryable projects bar, `.container` / `.page-header`, and the footer.
3. **`css/components/`** – reusable UI like project cards, buttons, tag + form controls, loading/empty states, and other component-specific keyframes.
4. **`css/pages/`** – page-specific sections (Display, Home, About, profile hero) grouped so you can reason about one page at a time.
5. **`css/utilities/`** – responsive breakpoints plus shared tweaks such as scrollbar and selection styling.

`css/styles.css` lists the partials in cascade order via `@import url('./path/to/file.css');`. Keep new imports near related files so overrides behave the same way they did when everything lived in one file.

## Working With Colors and Fonts
- Use the CSS variables (for example `var(--primary-color)`, `var(--text-muted)`) instead of hex values.
- If a new color is required, add it to the variables block with a meaningful name, then reference it elsewhere.
- Typography uses system fonts for speed; keep new headings within the existing scale (`1rem`, `1.25rem`, `1.5rem`, etc.).

## Components Worth Reusing
- **Buttons**: `.btn`, `.btn-primary`, `.btn-secondary`, and `.btn-disabled` cover most states. Add modifiers like `.btn-success` if you need a new color, but keep the base class.
- **Cards**: `.project-card` handles spacing, drop shadows, and image ratios. When adding a new card type, start from this class and extend with an extra modifier.
- **Tags**: `.tag` and `.tag-link` already provide pill styling and hover states; keep tag lists consistent by reusing them.
- **Tryable bar**: `.tryable-projects-bar` includes keyframe animations. If you tweak the bar height, also update the `--tryable-bar-offset` logic in `tryableProjects.js`.

## Adding New Styles Safely
1. Identify whether an existing class can be extended before creating a brand new one.
2. Group related rules inside the same partial and add a short comment if the intent is not obvious.
3. When introducing a new partial, save it under the appropriate folder and append an `@import` entry to `css/styles.css`.
4. Test at `320px`, `768px`, and `1200px` widths to make sure new layouts do not break responsiveness.
5. Avoid using IDs for styling; stick to classes to keep specificity low.

## Assets
- Store shared images under `assets/images/` and reference them with relative paths (e.g., `/assets/images/Example.png`).
- Optimize images before adding them to keep the site fast on GitHub Pages.

Keep this guide nearby whenever you touch the CSS partials so the site keeps its clean, consistent look.
