(() => {
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

  const applyCloudSidebar = () => {
    const enabled = isCloudPage();
    document.documentElement.dataset.browseractCloudNav = String(enabled);

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
        const isFaqGroup = header.textContent.trim() === "FAQ";
        const containsActivePage =
          !isFaqGroup &&
          Boolean(group.querySelector('[data-active-nav-item="true"], [aria-current="page"]'));

        const toggle = () => {
          const expanded = header.dataset.expanded === "true";
          header.dataset.expanded = String(!expanded);
          header.setAttribute("aria-expanded", String(!expanded));
          group.dataset.cloudCollapsed = String(expanded);
        };

        header.dataset.cloudAccordion = "ready";
        header.dataset.expanded = String(containsActivePage);
        header.setAttribute("aria-expanded", String(containsActivePage));
        header.setAttribute("role", "button");
        header.setAttribute("tabindex", "0");
        header.addEventListener("click", toggle);
        header.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggle();
          }
        });

        if (containsActivePage) {
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
