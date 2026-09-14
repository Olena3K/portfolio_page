(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile navigation toggle
  var menuToggle = document.getElementById("menu-toggle");
  var navMobile = document.getElementById("nav-mobile");

  if (menuToggle && navMobile) {
    menuToggle.addEventListener("click", function () {
      var isOpen = navMobile.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close mobile menu after a link is clicked
    navMobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMobile.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active navigation state on scroll
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    var scrollPos = window.scrollY + 100;
    var currentId = null;

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + currentId;
      link.classList.toggle("active", isActive);
    });
  }

  if (sections.length && navLinks.length) {
    window.addEventListener("scroll", setActiveLink, { passive: true });
    setActiveLink();
  }
})();
