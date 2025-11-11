# Celeste Artley Portfolio

Hi! This repo holds my role-based portfolio site. From here you can hop between Game, Web, Backend, and Full-Stack views or spin up your own curated project list with a few tag clicks.

## What you get

- `index.html` is the main hub with links to every role page.
- Each `*-developer.html` view auto-sorts projects that fit that specialty.
- `custom.html` lets you pick tags from job listings and instantly filter the portfolio, with checkboxes grouped by discipline (Game, Web, Backend, Full-Stack, Systems & Low-Level, DevOps & Infrastructure, Skills & Learning, APIs & Integrations, Software Engineering) so long lists stay scannable. Tags that live in multiple disciplines stay in sync, so toggling one toggles all of its twins.
- `display.html` turns those tag choices into a link you can share with anyone.
- The `Tierlist/` and `SortingAlgoVisualizer/` folders contain the live demos that power “Try it out” buttons.

## Try it locally

1. Clone or download the repo.
2. Open `index.html` in any modern browser.
3. Explore the pages. Everything runs in the browser so there is nothing to build.

If you want to tweak content, look at `js/portfolioItems.js` for project data, `js/rolePages.js` for role logic, and the CSS partials under `css/` (pulled together by `css/styles.css`) for the shared design language.

## CSS structure

Every HTML page still links to `css/styles.css`, but that file is now an import hub so you can work on focused style slices:

- `css/base/` – resets, root tokens, page-wide effects.
- `css/layout/` – navigation, containers, footer, and other structural pieces.
- `css/components/` – cards, buttons, tag/filter controls, and state helpers.
- `css/pages/` – page-specific sections such as Display, Home, and About.
- `css/utilities/` – shared responsive rules plus scroll/selection tweaks.

When you add a new chunk of styling, create the file in the matching folder and append `@import url('./path/to/file.css');` to `css/styles.css` so the bundle stays in sync without touching any HTML link tags.

## Behind the scenes docs

Need the full playbook for contributing, styling, or wiring up new features? Jump to the [docs table of contents](docs/README.md). Each section there breaks down standards, styling, and every JavaScript module in plain language.
