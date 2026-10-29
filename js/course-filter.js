/**
 * ============================================================================
 * RESILIENT COURSE FILTER & ACCORDION CONTROLLER
 * Works across both local dev server and direct file:// protocol
 * ============================================================================
 */
(function() {
  function initCourseInteractions() {
    if (window.__COURSE_FILTER_INITIALIZED__) return;
    var grid = document.getElementById("courses-grid");
    if (!grid) return;
    window.__COURSE_FILTER_INITIALIZED__ = true;

    var cards = grid.querySelectorAll(".course-card");
    var filterBtns = document.querySelectorAll(".course-filter-btn");
    var btnExpandAll = document.getElementById("btn-expand-all-courses");
    var btnCollapseAll = document.getElementById("btn-collapse-all-courses");

    // 1. Category Filtering
    filterBtns.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        e.preventDefault();
        filterBtns.forEach(function(b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var filter = btn.getAttribute("data-filter") || "all";

        cards.forEach(function(card) {
          var cat = card.getAttribute("data-category") || "";
          if (filter === "all") {
            card.style.display = "";
          } else if (filter === "sem1") {
            card.style.display = cat.indexOf("sem1") !== -1 ? "" : "none";
          } else if (filter === "sem2") {
            card.style.display = cat.indexOf("sem2") !== -1 ? "" : "none";
          } else if (filter === "practice") {
            card.style.display = cat.indexOf("practice") !== -1 ? "" : "none";
          }
        });
      });
    });

    // 2. Expand All
    if (btnExpandAll) {
      btnExpandAll.addEventListener("click", function(e) {
        e.preventDefault();
        cards.forEach(function(card) {
          card.classList.remove("is-collapsed");
          card.classList.add("is-expanded");
          var textEl = card.querySelector(".toggle-text");
          var iconEl = card.querySelector(".toggle-icon");
          if (textEl) textEl.textContent = "Ringkas Refleksi";
          if (iconEl) iconEl.textContent = "↑";
        });
      });
    }

    // 3. Collapse All
    if (btnCollapseAll) {
      btnCollapseAll.addEventListener("click", function(e) {
        e.preventDefault();
        cards.forEach(function(card) {
          card.classList.remove("is-expanded");
          card.classList.add("is-collapsed");
          var textEl = card.querySelector(".toggle-text");
          var iconEl = card.querySelector(".toggle-icon");
          if (textEl) textEl.textContent = "Jabarkan Refleksi";
          if (iconEl) iconEl.textContent = "↓";
        });
      });
    }

    // 4. Individual Card Toggle (Click anywhere on card or button)
    cards.forEach(function(card) {
      card.addEventListener("click", function(e) {
        // If clicking on an internal modal button, let it bubble
        if (e.target.closest(".btn-open-modal")) return;

        var isExpanded = card.classList.contains("is-expanded");
        if (isExpanded) {
          card.classList.remove("is-expanded");
          card.classList.add("is-collapsed");
        } else {
          card.classList.remove("is-collapsed");
          card.classList.add("is-expanded");
        }

        var textEl = card.querySelector(".toggle-text");
        var iconEl = card.querySelector(".toggle-icon");
        if (textEl) textEl.textContent = isExpanded ? "Jabarkan Refleksi" : "Ringkas Refleksi";
        if (iconEl) iconEl.textContent = isExpanded ? "↓" : "↑";
      });
    });

    console.log("Course filter & accordion controller initialized for " + cards.length + " courses.");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCourseInteractions);
  } else {
    initCourseInteractions();
  }
})();
