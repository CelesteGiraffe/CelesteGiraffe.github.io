# Celeste Artley — Systems & Gameplay Portfolio

Personal engineering portfolio showcasing gameplay systems, discrete simulations, hardware emulation, and full-stack backend platforms. Hosted on GitHub Pages as a zero-dependency static web application.

## Architectural Overview

- **Zero-Dependency Architecture:** Pure client-side HTML5, CSS3, and ECMAScript. No runtime build dependencies or heavy frontend frameworks.
- **Dynamic Relevance Scoring & URL Serialization:** Custom multi-tag query engine (`js/tagFilter.js` and `js/displayPage.js`) matching technology constraints and serializing filter state directly into shareable URLs.
- **High-Density Technical Design System:** Strict WCAG AA contrast compliance across dark slate surfaces (`#0d1117`, `#161b22`), custom monospace/system typography, and responsive grid layouts.

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

