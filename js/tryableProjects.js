(function (global) {
  const tryableProjects = [
    {
      id: "tierlist-builder",
      name: "Tier List Builder",
      shortLabel: "Tier List",
      primaryUrl: "/Tierlist/Tierlist.html",
      routes: ["/Tierlist/Tierlist.html", "/Tierlist/pre-loader.html"],
      summary: "Drag-and-drop ranking board with custom image loading.",
    },
    {
      id: "sorting-visualizer",
      name: "Sorting Algo Visualizer",
      shortLabel: "Sorting Visualizer",
      primaryUrl: "/SortingAlgoVisualizer/Sort.html",
      routes: ["/SortingAlgoVisualizer/Sort.html"],
      summary: "Watch comparison-based sorts animate live on canvas.",
    },
  ];

  global.tryableProjects = tryableProjects;

  function normalizePath(path) {
    return decodeURIComponent(path || "").toLowerCase();
  }

  function getCurrentTryableProject(pathname) {
    const normalizedPath = normalizePath(pathname);
    return tryableProjects.find((project) =>
      (project.routes || [project.primaryUrl]).some((route) =>
        normalizedPath.endsWith(route.toLowerCase())
      )
    );
  }

  function buildTryableBar(currentProject) {
    const bar = document.createElement("div");
    bar.className = "tryable-projects-bar";
    bar.setAttribute("role", "navigation");
    bar.setAttribute("aria-label", "Tryable project shortcuts");

    const inner = document.createElement("div");
    inner.className = "container tryable-projects-inner";

    const labelWrapper = document.createElement("div");
    labelWrapper.className = "tryable-label-wrapper";

    const label = document.createElement("span");
    label.className = "tryable-projects-label";
    label.textContent = "Tryable Projects";

    const descriptor = document.createElement("span");
    descriptor.className = "tryable-projects-descriptor";
    descriptor.textContent = "Want more hands-on? Try the other hosted builds below.";

    labelWrapper.appendChild(label);
    labelWrapper.appendChild(descriptor);

    const list = document.createElement("div");
    list.className = "tryable-projects-list";

    tryableProjects.forEach((project) => {
      const link = document.createElement("a");
      link.className = "tryable-project-link";
      link.href = project.primaryUrl;
      link.textContent = project.shortLabel || project.name;
      link.title = project.summary || project.name;

      if (project.id === currentProject.id) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }

      list.appendChild(link);
    });

    inner.appendChild(labelWrapper);
    inner.appendChild(list);
    bar.appendChild(inner);

    requestAnimationFrame(() => {
      bar.classList.add("is-visible");
    });

    return bar;
  }

  function attachNavExitAnimation(bar, nav) {
    if (!bar || !nav) return;

    nav.addEventListener("click", (event) => {
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (typeof event.button === "number" && event.button !== 0) return;

      const link = event.target.closest("a[href]");
      if (!link || !nav.contains(link)) return;
      if (link.dataset.skipTryableTransition === "true") return;

      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      if (link.target && link.target !== "_self") return;

      let url;
      try {
        url = new URL(href, window.location.href);
      } catch (_error) {
        return;
      }

      const isSamePage = url.origin === window.location.origin && url.pathname === window.location.pathname;
      if (isSamePage) return;
      if (getCurrentTryableProject(url.pathname)) return;

      event.preventDefault();

      if (bar.classList.contains("is-transitioning")) return;

      bar.classList.add("is-transitioning");
      const fallbackTimeout = window.setTimeout(() => {
        window.location.href = url.href;
      }, 600);

      const handleAnimationEnd = () => {
        bar.removeEventListener("animationend", handleAnimationEnd);
        window.clearTimeout(fallbackTimeout);
        window.location.href = url.href;
      };

      bar.addEventListener("animationend", handleAnimationEnd);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const currentProject = getCurrentTryableProject(window.location.pathname);
    if (!currentProject) return;

    const bar = buildTryableBar(currentProject);
    const nav = document.querySelector("nav");
    const targetParent = nav?.parentNode || document.body;
    const referenceNode = nav ? nav.nextSibling : targetParent.firstChild;
    targetParent.insertBefore(bar, referenceNode);
    document.body.classList.add("has-tryable-bar");

    function syncOffset() {
      requestAnimationFrame(() => {
        const offset = nav ? nav.offsetHeight : 0;
        bar.style.setProperty("--tryable-bar-offset", `${offset}px`);
      });
    }

    syncOffset();
    window.addEventListener("resize", syncOffset);
    attachNavExitAnimation(bar, nav);
  });
})(window);
