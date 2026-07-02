(function () {
  "use strict";

  const toc = document.querySelector(".table-of-content.blog #TableOfContents");
  const content = document.querySelector(".content");

  if (!toc || !content) {
    return;
  }

  const links = Array.from(toc.querySelectorAll('a[href^="#"]'));
  const headingMap = new Map();

  links.forEach((link) => {
    const id = decodeURIComponent(link.hash.slice(1));
    const heading = id ? document.getElementById(id) : null;

    if (heading && content.contains(heading)) {
      headingMap.set(heading, link);
    }
  });

  const headings = Array.from(headingMap.keys());

  if (!headings.length) {
    return;
  }

  function setActive(activeHeading) {
    links.forEach((link) => {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    });

    const activeLink = headingMap.get(activeHeading);

    if (activeLink) {
      activeLink.classList.add("is-active");
      activeLink.setAttribute("aria-current", "true");
    }
  }

  function updateActiveHeading() {
    const offset = 120;
    let activeHeading = headings[0];

    headings.forEach((heading) => {
      if (heading.getBoundingClientRect().top <= offset) {
        activeHeading = heading;
      }
    });

    setActive(activeHeading);
  }

  let ticking = false;

  function requestUpdate() {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(() => {
      updateActiveHeading();
      ticking = false;
    });
  }

  updateActiveHeading();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
})();
