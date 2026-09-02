# Celeste Artley - Portfolio & Systems Projects

Personal portfolio website showcasing games, emulation and systems projects, backend services, and web tools. Hosted statically on GitHub Pages with vanilla HTML, CSS, and JavaScript.

## Features

- **Zero Framework Bloat:** Built with plain HTML5, CSS3, and JavaScript - no heavy npm build steps or runtime frameworks.
- **Custom Tag Filtering:** Filter projects by languages and tools, with shareable URL parameters for custom views.
- **Accessible Dark Theme:** Clean dark palette with WCAG AA contrast, responsive layouts, and keyboard accessibility.

## Repository Structure

```
├── index.html                   # Central entrypoint and technical discipline navigation
├── about.html                   # Engineering background, credentials, and technical chronology
├── game-developer.html          # Gameplay AI, kinematics, and simulation projects
├── backend-developer.html       # Relational schemas, socket daemons, and microservices
├── web-developer.html           # Canvas visualization, DOM APIs, and accessible interfaces
├── fullstack-developer.html     # End-to-end distributed platforms and stack migrations
├── custom.html                  # Interactive multi-tag filter query generator
├── display.html                 # URL-driven curated project showcase
├── js/
│   ├── portfolioItems.js        # Core project dataset with technical breakdowns
│   ├── rolePages.js             # Role tag definitions, relevance scoring, and card rendering
│   ├── tagFilter.js             # Multi-select discipline filter logic and clipboard serialization
│   ├── displayPage.js           # Query parameter parsing and curated view renderer
│   ├── navigation.js            # Mobile navigation toggling and keyboard traps
│   └── tryableProjects.js       # Sticky navigation banner for embedded tools
└── css/
    ├── styles.css               # Import hub combining modular CSS partials
    ├── base/foundation.css      # Design tokens, color system, WCAG AA contrast, and typography
    ├── components/              # Project cards, buttons, tag selectors, and state indicators
    ├── layout/                  # Navigation bar, page headers, structure, and footer
    ├── pages/                   # Home, About, and Display page layouts
    └── utilities/               # Responsive media queries, scrollbar, and selection styles
```

## Running Locally

Because the platform is built with pure web standards, no package installations or compilation steps are required:

1. Clone the repository:
   ```bash
   git clone https://github.com/CelesteGiraffe/CelesteGiraffe.github.io.git
   ```
2. Open `index.html` in any modern web browser, or serve with a local static file server:
   ```bash
   python3 -m http.server 8000
   ```
3. Navigate to `http://localhost:8000`.

## Contact

- **Email:** [celestepersonalmail@gmail.com](mailto:celestepersonalmail@gmail.com)
- **LinkedIn:** [linkedin.com/in/celeste-artley](https://linkedin.com/in/celeste-artley)
- **GitHub:** [github.com/CelesteGiraffe](https://github.com/CelesteGiraffe)

