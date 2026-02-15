(function () {
  "use strict";

  // Theme toggle
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateSyntaxTheme(next);
    });
  }

  // Syntax highlight stylesheet switching
  function updateSyntaxTheme(theme) {
    var darkSheet = document.getElementById("syntax-dark");
    var lightSheet = document.getElementById("syntax-light");
    if (darkSheet && lightSheet) {
      darkSheet.disabled = theme !== "dark";
      lightSheet.disabled = theme !== "light";
    }
  }

  // Apply syntax theme on load (the data-theme attribute is already set by the inline script)
  var currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  updateSyntaxTheme(currentTheme);

  // Mobile hamburger menu
  var hamburger = document.querySelector(".hamburger");
  var navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
      });
    });
  }
})();
