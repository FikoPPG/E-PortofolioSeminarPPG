/**
 * ============================================================================
 * THE CREATIVE EDUCATOR ARCHIVE - REFLECTIONS (LEARNING JOURNAL)
 * ============================================================================
 */

import { PORTFOLIO_DATA } from "./data.js";

export function initReflections() {
  const container = document.getElementById("reflections-grid");
  const modalOverlay = document.getElementById("reflection-modal");
  const modalCloseBtn = document.getElementById("reflection-modal-close");
  const modalBody = document.getElementById("reflection-modal-body");

  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.reflections.map(ref => `
    <article class="reflection-card" data-id="${ref.id}">
      <div class="reflection-date-meta">
        <span>${ref.date}</span>
        <span class="badge-editorial lime">${ref.category}</span>
      </div>
      <h3 class="reflection-title">${ref.title}</h3>
      <p class="reflection-excerpt">${ref.findings}</p>
      <div class="reflection-read-more">
        <span>Baca Refleksi Lengkap</span>
        <span>→</span>
      </div>
    </article>
  `).join('');

  // Attach click listener
  container.querySelectorAll(".reflection-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.id;
      const ref = PORTFOLIO_DATA.reflections.find(r => r.id === id);
      if (!ref || !modalBody || !modalOverlay) return;

      modalBody.innerHTML = `
        <div class="modal-header-meta" style="margin-bottom: 12px;">
          <span class="badge-editorial lime">${ref.category}</span>
          <span class="badge-editorial">${ref.date}</span>
        </div>
        <h2 class="modal-title">${ref.title}</h2>

        <div style="margin-top: 24px;">
          <h4 style="font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; color: var(--accent-cobalt); margin-bottom: 6px;">
            1. Konteks & Situasi Kelas
          </h4>
          <p style="background: var(--bg-secondary); padding: 14px 18px; border-left: 3px solid var(--accent-cobalt);">
            ${ref.situation}
          </p>

          <h4 style="font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; color: var(--accent-cobalt); margin-top: 20px; margin-bottom: 6px;">
            2. Temuan Utama & Kesadaran Baru
          </h4>
          <p>${ref.findings}</p>

          <h4 style="font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; color: var(--accent-cobalt); margin-top: 20px; margin-bottom: 6px;">
            3. Tantangan yang Dihadapi
          </h4>
          <p>${ref.challenges}</p>

          <h4 style="font-family: var(--font-mono); font-size: var(--text-xs); text-transform: uppercase; color: var(--accent-cobalt); margin-top: 20px; margin-bottom: 6px;">
            4. Rencana Perbaikan & Tindak Lanjut
          </h4>
          <div style="background-color: var(--accent-lime); color: #191919; padding: 16px 20px; border: var(--border-thick); box-shadow: var(--shadow-brutal-sm); border-radius: var(--radius-xs);">
            <strong style="font-family: var(--font-display); display: block; margin-bottom: 4px;">Aksi Pembelajaran Berikutnya:</strong>
            <p style="color: #191919; margin-bottom: 0; font-size: var(--text-sm);">${ref.actionPlan}</p>
          </div>
        </div>
      `;

      modalOverlay.classList.add("active");
      modalOverlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      modalCloseBtn?.focus();
    });
  });

  // Close handlers
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
