/**
 * ============================================================================
 * THE CREATIVE EDUCATOR ARCHIVE - DOCUMENTS & EVIDENCE ARCHIVE
 * ============================================================================
 */

import { PORTFOLIO_DATA } from "./data.js";

export function initDocuments() {
  const container = document.getElementById("documents-grid");
  const filterBtns = document.querySelectorAll(".doc-filter-btn");
  const modalOverlay = document.getElementById("doc-modal");
  const modalCloseBtn = document.getElementById("doc-modal-close");
  const modalBody = document.getElementById("doc-modal-body");

  if (!container) return;

  let activeFilter = "all";

  function render() {
    const filtered = PORTFOLIO_DATA.documents.filter(doc => {
      if (activeFilter === "all") return true;
      return doc.category.toLowerCase().includes(activeFilter.toLowerCase());
    });

    container.innerHTML = filtered.map(doc => `
      <article class="doc-card" data-id="${doc.id}">
        <div class="doc-icon-badge">
          <span>📄</span>
          <span>${doc.fileType} • ${doc.fileSize}</span>
        </div>
        <div style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-cobalt); margin-bottom: 4px;">
          // ${doc.number} [${doc.category}]
        </div>
        <h3 class="doc-title">${doc.title}</h3>
        <p class="doc-desc">${doc.desc}</p>
        <div class="doc-actions">
          <span class="badge-editorial">${doc.category}</span>
          <button class="btn btn-outline btn-sm view-doc-btn" data-id="${doc.id}">
            ${doc.actionLabel} →
          </button>
        </div>
      </article>
    `).join('');

    container.querySelectorAll(".view-doc-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        openDocModal(id);
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  function openDocModal(id) {
    const doc = PORTFOLIO_DATA.documents.find(d => d.id === id);
    if (!doc || !modalBody || !modalOverlay) return;

    modalBody.innerHTML = `
      <div class="modal-header-meta" style="margin-bottom: 12px;">
        <span class="badge-editorial lime">${doc.number}</span>
        <span class="badge-editorial">${doc.category}</span>
        <span class="badge-editorial cobalt">${doc.fileType}</span>
      </div>
      <h2 class="modal-title">${doc.title}</h2>
      <p style="color: var(--ink-secondary); font-size: var(--text-base);">${doc.desc}</p>

      <div class="modal-overview-grid" style="margin: 20px 0;">
        ${doc.previewData.author ? `
          <div class="overview-item">
            <div class="label">Penyusun / Penulis</div>
            <div class="val">${doc.previewData.author}</div>
          </div>
        ` : ''}
        ${doc.previewData.issuer ? `
          <div class="overview-item">
            <div class="label">Penerbit Sertifikat</div>
            <div class="val">${doc.previewData.issuer}</div>
          </div>
        ` : ''}
        ${doc.previewData.date || doc.previewData.year ? `
          <div class="overview-item">
            <div class="label">Tahun Terbit</div>
            <div class="val">${doc.previewData.date || doc.previewData.year}</div>
          </div>
        ` : ''}
        ${doc.previewData.scope ? `
          <div class="overview-item">
            <div class="label">Ruang Lingkup</div>
            <div class="val">${doc.previewData.scope}</div>
          </div>
        ` : ''}
      </div>

      <div style="background-color: var(--bg-secondary); border: var(--border-thin); padding: 20px; border-radius: var(--radius-xs); margin-bottom: 24px;">
        <h4 style="font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; margin-bottom: 8px; color: var(--accent-cobalt);">
          Sorotan Utama Dokumen:
        </h4>
        <p style="margin-bottom: 0; font-weight: 600; font-size: var(--text-sm);">
          ${doc.previewData.highlights || "Dokumen resmi tersimpan dalam arsip akademik."}
        </p>
      </div>

      <div style="padding: 16px; background: var(--accent-lime-muted); border-left: 3px solid var(--accent-lime); font-family: var(--font-mono); font-size: var(--text-xs); color: var(--ink-primary); margin-bottom: 24px;">
        📌 <strong>STATUS ARSIP:</strong> File dokumen asli dapat ditautkan secara langsung pada konfigurasi <code>js/data.js</code> untuk keperluan akreditasi, penilaian dosen, atau review asesor.
      </div>

      <div style="display: flex; gap: 12px; justify-content: flex-end; flex-wrap: wrap;">
        <button class="btn btn-outline btn-sm close-inner-btn">Tutup</button>
        <button class="btn btn-primary btn-sm simulate-doc-download-btn">
          Unduh Salinan Dokumen (.${doc.fileType})
        </button>
      </div>
    `;

    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalCloseBtn?.focus();

    modalBody.querySelector(".close-inner-btn")?.addEventListener("click", closeModal);
    modalBody.querySelector(".simulate-doc-download-btn")?.addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("show-toast", { 
        detail: { message: `Menyiapkan unduhan berkas: ${doc.title}` } 
      }));
    });
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

  render();
}
