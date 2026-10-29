/**
 * ============================================================================
 * THE CREATIVE EDUCATOR ARCHIVE - REFLEKSI MATA KULIAH PPG (11 COURSES + 4C)
 * ============================================================================
 */

import { PORTFOLIO_DATA } from "./data.js";

export function initCourses() {
  if (window.__COURSE_FILTER_INITIALIZED__) {
    console.log("Course interactions already initialized by course-filter.js.");
    return;
  }
  const container = document.getElementById("courses-grid");
  const filterButtons = document.querySelectorAll(".course-filter-btn");
  const modalOverlay = document.getElementById("course-modal");
  const modalCloseBtn = document.getElementById("course-modal-close");
  const modalBody = document.getElementById("course-modal-body");

  if (!container) return;

  // 1. Setup Category Filter Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      container.querySelectorAll(".course-card").forEach(card => {
        const cat = card.dataset.category || "";
        if (filter === "all") {
          card.style.display = "";
        } else if (filter === "sem1") {
          card.style.display = cat.includes("sem1") ? "" : "none";
        } else if (filter === "sem2") {
          card.style.display = cat.includes("sem2") ? "" : "none";
        } else if (filter === "practice") {
          card.style.display = cat.includes("practice") ? "" : "none";
        }
      });
    });
  });

  // 2. Setup Global Expand / Collapse All buttons
  const expandAllBtn = document.getElementById("btn-expand-all-courses");
  const collapseAllBtn = document.getElementById("btn-collapse-all-courses");

  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", () => {
      container.querySelectorAll(".course-card").forEach(card => {
        card.classList.remove("is-collapsed");
        card.classList.add("is-expanded");
        const toggleBtn = card.querySelector(".btn-card-toggle");
        if (toggleBtn) {
          toggleBtn.setAttribute("aria-expanded", "true");
          const textEl = toggleBtn.querySelector(".toggle-text");
          const iconEl = toggleBtn.querySelector(".toggle-icon");
          if (textEl) textEl.textContent = "Ringkas Refleksi";
          if (iconEl) iconEl.textContent = "↑";
        }
      });
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener("click", () => {
      container.querySelectorAll(".course-card").forEach(card => {
        card.classList.remove("is-expanded");
        card.classList.add("is-collapsed");
        const toggleBtn = card.querySelector(".btn-card-toggle");
        if (toggleBtn) {
          toggleBtn.setAttribute("aria-expanded", "false");
          const textEl = toggleBtn.querySelector(".toggle-text");
          const iconEl = toggleBtn.querySelector(".toggle-icon");
          if (textEl) textEl.textContent = "Jabarkan Refleksi";
          if (iconEl) iconEl.textContent = "↓";
        }
      });
    });
  }

  // 3. Setup Card Click for Expand / Collapse
  container.querySelectorAll(".course-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".btn-open-modal")) {
        e.stopPropagation();
        openCourseModal(card.dataset.id);
        return;
      }

      const isExpanded = card.classList.contains("is-expanded");
      if (isExpanded) {
        card.classList.remove("is-expanded");
        card.classList.add("is-collapsed");
      } else {
        card.classList.remove("is-collapsed");
        card.classList.add("is-expanded");
      }

      const toggleBtn = card.querySelector(".btn-card-toggle");
      if (toggleBtn) {
        toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
        const textEl = toggleBtn.querySelector(".toggle-text");
        const iconEl = toggleBtn.querySelector(".toggle-icon");
        if (textEl) textEl.textContent = isExpanded ? "Jabarkan Refleksi" : "Ringkas Refleksi";
        if (iconEl) iconEl.textContent = isExpanded ? "↓" : "↑";
      }
    });
  });

  function openCourseModal(courseId) {
    const course = (PORTFOLIO_DATA.ppgCourses || []).find(c => c.id === courseId);
    if (!course || !modalBody || !modalOverlay) return;

    modalBody.innerHTML = `
      <div class="modal-header-meta">
        <span class="badge-editorial ${course.category === 'core' ? 'lime' : 'cobalt'}">${course.categoryLabel}</span>
        <span class="badge-editorial">${course.semester}</span>
        <span class="badge-editorial">${course.credits}</span>
        <span class="mono-code">${course.code}</span>
      </div>

      <h2 class="modal-title" style="margin-top: 10px;">${course.name}</h2>
      
      <!-- Authentic Personal Reflection Block -->
      ${course.fullNarrative ? `
        <div class="modal-full-narrative" style="margin: 20px 0 24px; padding: 20px; background: var(--bg-surface-elevated); border-left: 4px solid var(--accent-cobalt); border-radius: var(--radius-xs);">
          <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--accent-cobalt); margin-bottom: 8px;">
            ✦ Refleksi Personal Mahasiswa:
          </div>
          <p style="font-size: var(--text-base); color: var(--ink-primary); line-height: 1.7; white-space: pre-line;">
            "${course.fullNarrative}"
          </p>
        </div>
      ` : `
        <p style="font-size: var(--text-base); color: var(--ink-secondary); margin-bottom: 24px;">
          ${course.summary}
        </p>
      `}

      <div class="reflection-4c-container">
        <h3 style="font-family: var(--font-display); font-size: var(--text-lg); margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span style="color: var(--accent-cobalt);">❖</span> Kerangka Refleksi 4C (Connection, Challenge, Concept, Change)
        </h3>

        <div class="grid-4c">
          <div class="card-4c">
            <div class="header-4c">
              <span class="pill-4c lime">01. CONNECTION</span>
              <h4>Keterkaitan Materi</h4>
            </div>
            <p>${course.reflection4C.connection}</p>
          </div>

          <div class="card-4c">
            <div class="header-4c">
              <span class="pill-4c orange">02. CHALLENGE</span>
              <h4>Tantangan Nyata</h4>
            </div>
            <p>${course.reflection4C.challenge}</p>
          </div>

          <div class="card-4c">
            <div class="header-4c">
              <span class="pill-4c cobalt">03. CONCEPT</span>
              <h4>Konsep Kunci</h4>
            </div>
            <p>${course.reflection4C.concept}</p>
          </div>

          <div class="card-4c">
            <div class="header-4c">
              <span class="pill-4c green">04. CHANGE</span>
              <h4>Perubahan Paradigma & Aksi</h4>
            </div>
            <p>${course.reflection4C.change}</p>
          </div>
        </div>
      </div>

      <div class="course-artifacts-section" style="margin-top: 32px; padding-top: 24px; border-top: var(--border-soft);">
        <h3 style="font-family: var(--font-display); font-size: var(--text-base); margin-bottom: 14px;">
          Bukti Artefak Pembelajaran Mata Kuliah:
        </h3>
        <div class="artifacts-grid-modal">
          ${course.artifacts.map((art, idx) => `
            <div class="artifact-card-modal">
              <div class="artifact-icon">📁</div>
              <div class="artifact-info">
                <strong>${art.title}</strong>
                <span class="type">// Format: ${art.type}</span>
              </div>
              <button class="btn btn-outline btn-xs btn-toast-preview" data-name="${art.title}">
                Pratinjau
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Attach toast listeners to preview buttons inside modal
    modalBody.querySelectorAll(".btn-toast-preview").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const artName = btn.dataset.name;
        showQuickToast(`Membuka artefak: "${artName}" (Tersedia dalam arsip dokumen)`);
      });
    });

    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalCloseBtn?.focus();
  }

  function closeModal() {
    modalOverlay?.classList.remove("active");
    modalOverlay?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  modalCloseBtn?.addEventListener("click", closeModal);
  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay?.classList.contains("active")) {
      closeModal();
    }
  });

}

function showQuickToast(msg) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✓</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
