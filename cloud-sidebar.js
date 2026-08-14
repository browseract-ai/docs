(() => {
  const storageKey = "browseract-cloud-expanded-groups";
  const cloudPrefixes = [
    "/overview/",
    "/quick-start/",
    "/bot/",
    "/browser-proxy/",
    "/credential-center/",
    "/integrations/",
    "/account-billing/",
    "/support/",
    "/faq/",
  ];

  const isCloudPage = () =>
    cloudPrefixes.some((prefix) => window.location.pathname.startsWith(prefix));

  const readExpandedGroups = () => {
    try {
      return new Set(JSON.parse(window.sessionStorage.getItem(storageKey) || "[]"));
    } catch {
      return new Set();
    }
  };

  const writeExpandedGroups = (groups) => {
    try {
      window.sessionStorage.setItem(storageKey, JSON.stringify([...groups]));
    } catch {
      // Ignore storage failures; the sidebar still works for the current render.
    }
  };

  const applyCloudSidebar = () => {
    const enabled = isCloudPage();
    document.documentElement.dataset.browseractCloudNav = String(enabled);
    const expandedGroups = readExpandedGroups();

    document.querySelectorAll(".sidebar-group-header").forEach((header) => {
      const group = header.nextElementSibling;
      if (!(group instanceof HTMLElement) || !group.classList.contains("sidebar-group")) {
        return;
      }

      if (!enabled) {
        header.removeAttribute("data-expanded");
        header.removeAttribute("role");
        header.removeAttribute("tabindex");
        group.removeAttribute("data-cloud-collapsed");
        return;
      }

      if (header.dataset.cloudAccordion !== "ready") {
        const label = header.textContent.trim();
        const shouldExpand = expandedGroups.has(label);

        const toggle = () => {
          const expanded = header.dataset.expanded === "true";
          const nextExpanded = !expanded;
          const nextGroups = readExpandedGroups();

          if (nextExpanded) {
            nextGroups.add(label);
          } else {
            nextGroups.delete(label);
          }

          writeExpandedGroups(nextGroups);
          header.dataset.expanded = String(nextExpanded);
          header.setAttribute("aria-expanded", String(nextExpanded));

          if (nextExpanded) {
            group.removeAttribute("data-cloud-collapsed");
          } else {
            group.dataset.cloudCollapsed = "true";
          }
        };

        header.dataset.cloudAccordion = "ready";
        header.dataset.expanded = String(shouldExpand);
        header.setAttribute("aria-expanded", String(shouldExpand));
        header.setAttribute("role", "button");
        header.setAttribute("tabindex", "0");
        header.addEventListener("click", toggle);
        header.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggle();
          }
        });

        if (shouldExpand) {
          group.removeAttribute("data-cloud-collapsed");
        }
      }

      if (header.dataset.expanded !== "true") {
        group.dataset.cloudCollapsed = "true";
      }
    });
  };

  let scheduled = false;
  const scheduleApply = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      applyCloudSidebar();
    });
  };

  new MutationObserver(scheduleApply).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
  window.addEventListener("popstate", scheduleApply);
  scheduleApply();
})();
