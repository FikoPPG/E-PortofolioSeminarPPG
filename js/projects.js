/**
 * ============================================================================
 * THE CREATIVE EDUCATOR ARCHIVE - PROJECTS & MODAL CONTROLLER
 * ============================================================================
 */

import { PORTFOLIO_DATA } from "./data.js";

export function initProjects() {
  const gridContainer = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".project-filter-btn");
  const searchInput = document.getElementById("project-search");
  const modalOverlay = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("project-modal-close");
  const modalBody = document.getElementById("project-modal-body");

  if (!gridContainer) return;

  let activeCategory = "all";
  let searchQuery = "";

  // Render projects
  function render() {
    const filtered = PORTFOLIO_DATA.projects.filter(p => {
      const matchCat = activeCategory === "all" || p.category.toLowerCase().replace(/\s+/g, "-") === activeCategory;
      const matchQuery = !searchQuery || 
        p.title.toLowerCase().includes(searchQuery) ||
        p.summary.toLowerCase().includes(searchQuery) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery));
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📂</div>
          <h3>Tidak Ada Proyek yang Sesuai</h3>
          <p>Coba gunakan kata kunci lain atau pilih kategori "Semua Proyek".</p>
          <button class="btn btn-outline btn-sm reset-filter-btn" style="margin-top: 16px;">Reset Filter</button>
        </div>
      `;
      gridContainer.querySelector(".reset-filter-btn")?.addEventListener("click", () => {
        activeCategory = "all";
        searchQuery = "";
        if (searchInput) searchInput.value = "";
        filterBtns.forEach(b => b.classList.toggle("active", b.dataset.filter === "all"));
        render();
      });
      return;
    }

    gridContainer.innerHTML = filtered.map((project, index) => {
      // Create asymmetric editorial layout
      let spanClass = "standard-span";
      if (index === 0) spanClass = "featured-span";
      else if (index === 1 || index === 2) spanClass = "half-span";

      return `
        <article class="project-card ${spanClass}" data-id="${project.id}">
          <div class="project-thumb-wrap">
            <div class="project-meta-strip">
              <span class="badge-editorial lime">${project.number}</span>
              <span class="badge-editorial">${project.year}</span>
            </div>
            <img src="${project.thumbnail}" alt="${project.title}" class="project-thumb" loading="lazy" />
          </div>
          <div class="project-content">
            <div class="project-header-meta">
              <span>// ${project.category}</span>
              ${project.isFlagship ? `<span class="badge-editorial cobalt">UNGGULAN</span>` : ''}
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-excerpt">${project.summary}</p>
            <div class="project-footer">
              <div class="project-tag-list">
                ${project.tags.slice(0, 3).map(t => `<span class="project-tag">#${t}</span>`).join('')}
              </div>
              <button class="btn btn-outline btn-sm view-project-btn" data-id="${project.id}">
                Detail Proyek →
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click listeners to view detail buttons
    gridContainer.querySelectorAll(".view-project-btn, .project-thumb-wrap").forEach(el => {
      el.addEventListener("click", (e) => {
        const card = el.closest(".project-card");
        const id = card?.dataset.id;
        if (id) openProjectModal(id);
      });
    });
  }

  // Filter click events
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.filter;
      render();
    });
  });

  // Search input events
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      render();
    });
  }

  // Modal open function
  function openProjectModal(id) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === id);
    if (!project || !modalBody || !modalOverlay) return;

    modalBody.innerHTML = `
      <div class="modal-header-meta" style="margin-bottom: 12px;">
        <span class="badge-editorial lime">${project.number}</span>
        <span class="badge-editorial">${project.category}</span>
        <span class="badge-editorial">${project.year}</span>
      </div>
      <h2 class="modal-title">${project.title}</h2>
      <p style="font-size: var(--text-base); color: var(--ink-secondary);">${project.summary}</p>

      <div class="modal-overview-grid">
        <div class="overview-item">
          <div class="label">Peran Pemilik</div>
          <div class="val">${project.role}</div>
        </div>
        <div class="overview-item">
          <div class="label">Tahun Pelaksanaan</div>
          <div class="val">${project.year}</div>
        </div>
        <div class="overview-item">
          <div class="label">Fokus Kompetensi</div>
          <div class="val">${project.category}</div>
        </div>
      </div>

      <div class="modal-img-container">
        <img src="${project.thumbnail}" alt="${project.title}" style="width: 100%; max-height: 400px; object-fit: cover;" />
      </div>

      <h3 class="modal-section-title">Latar Belakang & Tantangan</h3>
      <p>${project.problem}</p>

      <h3 class="modal-section-title">Tujuan Pembelajaran</h3>
      <p>${project.learningGoal}</p>

      <h3 class="modal-section-title">Proses & Solusi Pedagogis</h3>
      <p>${project.solution}</p>
      <div style="padding: 12px 16px; background: var(--bg-secondary); border-left: 3px solid var(--accent-cobalt); margin: 16px 0; font-family: var(--font-mono); font-size: var(--text-xs);">
        <strong>Alur Pengerjaan:</strong> ${project.process}
      </div>

      <h3 class="modal-section-title">Hasil & Bukti Dampak</h3>
      <p>${project.outcomes}</p>

      <h3 class="modal-section-title">Refleksi Pendidik</h3>
      <p style="font-style: italic; background-color: var(--accent-lime-muted); padding: 14px 18px; border-radius: var(--radius-xs);">
        "${project.reflection}"
      </p>

      <div style="margin-top: 28px; padding-top: 16px; border-top: 1px dashed var(--bg-muted); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
        <div class="project-tag-list">
          ${project.tags.map(t => `<span class="project-tag">#${t}</span>`).join('')}
        </div>
        <div style="font-family: var(--font-mono); font-size: var(--text-xs); color: var(--ink-muted);">
          ${project.artifactNote}
        </div>
      </div>
    `;

    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalCloseBtn?.focus();
  }

  // Modal close handlers
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

  // Initial render
  render();
}
