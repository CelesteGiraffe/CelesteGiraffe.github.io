(() => {
  const NAV_SELECTOR = 'nav';
  const DESKTOP_QUERY = '(min-width: 769px)';
  const desktopMatch = window.matchMedia(DESKTOP_QUERY);
  const instances = [];

  const setExpandedState = (instance, expanded) => {
    instance.toggle.setAttribute('aria-expanded', String(expanded));
    instance.nav.classList.toggle('is-open', expanded);
  };

  const handleViewportChange = () => {
    instances.forEach((instance) => {
      if (desktopMatch.matches) {
        setExpandedState(instance, true);
        instance.toggle.disabled = true;
      } else {
        instance.toggle.disabled = false;
        setExpandedState(instance, false);
      }
    });
  };

  const initNav = (nav, index) => {
    const container = nav.querySelector('.container');
    const menu = container ? container.querySelector('ul') : null;

    if (!container || !menu || container.querySelector('.nav-toggle')) {
      return;
    }

    nav.classList.add('nav-collapsible');

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-expanded', 'true');

    const label = document.createElement('span');
    label.className = 'sr-only';
    label.textContent = 'Toggle navigation menu';
    toggle.appendChild(label);

    ['top', 'middle', 'bottom'].forEach((position) => {
      const bar = document.createElement('span');
      bar.className = `nav-toggle-bar nav-toggle-bar--${position}`;
      bar.setAttribute('aria-hidden', 'true');
      toggle.appendChild(bar);
    });

    const menuId = menu.id || `site-navigation-${index + 1}`;
    menu.id = menuId;
    toggle.setAttribute('aria-controls', menuId);

    container.insertBefore(toggle, menu);

    const instance = { nav, toggle };
    instances.push(instance);

    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      setExpandedState(instance, !isExpanded);
    });
  };

  const init = () => {
    document.querySelectorAll(NAV_SELECTOR).forEach((nav, index) => {
      initNav(nav, index);
    });

    if (!instances.length) {
      return;
    }

    handleViewportChange();

    if (typeof desktopMatch.addEventListener === 'function') {
      desktopMatch.addEventListener('change', handleViewportChange);
    } else if (typeof desktopMatch.addListener === 'function') {
      desktopMatch.addListener(handleViewportChange);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
