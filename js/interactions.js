/**
 * ============================================================================
 * THE CREATIVE EDUCATOR ARCHIVE - INTERACTIONS, TOAST, AND UTILITIES
 * ============================================================================
 */

import { PORTFOLIO_DATA } from "./data.js";

export function initInteractions() {
  const toastContainer = document.getElementById("toast-container");
  const copyEmailBtns = document.querySelectorAll(".btn-copy-email");
  const backToTopBtn = document.getElementById("back-to-top");
  const contactForm = document.getElementById("contact-form");
  const liveClockEl = document.getElementById("live-clock");
  const cvButtons = document.querySelectorAll(".btn-download-cv");

  // 1. Toast Notification Helper
  function showToast(message, duration = 3500) {
    if (!toastContainer) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <span class="toast-icon">✓</span>
        <span>${message}</span>
      </div>
      <button style="color: var(--ink-muted); font-size: 16px; cursor: pointer;" aria-label="Close Toast">×</button>
    `;

    toastContainer.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(() => toast.classList.add("show"));

    // Close button
    toast.querySelector("button")?.addEventListener("click", () => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    });

    // Auto remove
    setTimeout(() => {
      if (toast.isConnected) {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
      }
    }, duration);
  }

  // Global listener for custom events
  window.addEventListener("show-toast", (e) => {
    if (e.detail?.message) showToast(e.detail.message);
  });

  // 2. Copy Email to Clipboard
  copyEmailBtns.forEach(btn => {
    btn.addEventListener("click", async () => {
      const email = PORTFOLIO_DATA.profile.email;
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          // Fallback
          const textArea = document.createElement("textarea");
          textArea.value = email;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
        }
        showToast(`Alamat email (${email}) berhasil disalin ke clipboard!`);
      } catch (err) {
        showToast(`Email: ${email}`);
      }
    });
  });

  // 3. Back to Top Button
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }, { passive: true });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 4. Live Jakarta Time Clock
  function updateLiveClock() {
    if (!liveClockEl) return;
    try {
      const now = new Date();
      const options = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      const timeString = new Intl.DateTimeFormat("id-ID", options).format(now);
      liveClockEl.textContent = `${timeString} WIB (UTC+7)`;
    } catch (e) {
      liveClockEl.textContent = "WIB (UTC+7)";
    }
  }

  updateLiveClock();
  setInterval(updateLiveClock, 1000);

  // 5. Contact Form Submission Handling
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = contactForm.querySelector("#sender-name")?.value.trim();
      const email = contactForm.querySelector("#sender-email")?.value.trim();
      const message = contactForm.querySelector("#sender-message")?.value.trim();

      if (!name || !email || !message) {
        showToast("Mohon lengkapi semua bidang isian formulir.");
        return;
      }

      // Generate mailto link as direct functional fallback
      const subject = encodeURIComponent(`[Kolaborasi Pendidikan] Pesan dari ${name}`);
      const body = encodeURIComponent(`Halo Fiko,\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`;

      showToast(`Pesan siap dikirim! Membuka aplikasi email Anda...`);
      contactForm.reset();

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 1000);
    });
  }

  // 5b. Instagram DM Form Handling
  const dmForm = document.getElementById("dm-instagram-form");
  if (dmForm) {
    dmForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const topic = document.getElementById("dm-topic")?.value.trim();
      const text = document.getElementById("dm-text")?.value.trim();

      let compiledMessage = "";
      if (topic) compiledMessage += `[Topik: ${topic}]\n`;
      if (text) compiledMessage += `${text}`;

      if (compiledMessage && navigator.clipboard) {
        try {
          await navigator.clipboard.writeText(compiledMessage);
          showToast("Pesan telah disalin ke clipboard! Mengalihkan ke DM Instagram @fikokurnia_...");
        } catch (err) {
          showToast("Membuka Direct Message Instagram @fikokurnia_...");
        }
      } else {
        showToast("Membuka Direct Message Instagram @fikokurnia_...");
      }

      setTimeout(() => {
        window.open("https://ig.me/m/fikokurnia_", "_blank", "noopener,noreferrer");
      }, 600);
    });
  }

  // 6. CV Download Button Handler
  cvButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("Tautan Curriculum Vitae (CV) dapat disematkan pada data.js.");
    });
  });

  // 7. Interactive Lucu Kalcer Hero & Cursor Reaction Effects
  initKalcerHeroInteractions();

  // 8. Lively Opening Screen (Splash Animation)
  initOpeningScreen();

  // 9. Modern Scroll-Driven Reveal Engine
  initScrollReveal();
}

/**
 * Kalcer Hero & Cursor Reactions
 * - 3D Tilt on foreground photo card
 * - Parallax drift on background photos
 * - Bouncy spring wobble on kalcer stickers when cursor moves nearby
 */
function initKalcerHeroInteractions() {
  const heroSection = document.getElementById("hero");
  if (!heroSection) return;

  const photoCard = document.getElementById("foreground-fiko-card");
  const bgPhotos = document.querySelectorAll(".bg-photo-item");
  const stickers = document.querySelectorAll(".kalcer-sticker");

  let targetTiltX = 0, targetTiltY = 0;
  let currentTiltX = 0, currentTiltY = 0;

  heroSection.addEventListener("mouseleave", () => {
    targetTiltX = 0;
    targetTiltY = 0;
    bgPhotos.forEach(item => {
      const baseRot = item.style.getPropertyValue("--rot") || "0deg";
      item.style.transform = `rotate(${baseRot})`;
    });
  });

  heroSection.addEventListener("mousemove", (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const normX = (x - centerX) / (centerX || 1);
    const normY = (y - centerY) / (centerY || 1);

    targetTiltX = -normY * 12;
    targetTiltY = normX * 12;

    // Background photos parallax movement
    bgPhotos.forEach((item, idx) => {
      const speed = ((idx % 3) + 1) * 7;
      const baseRot = item.style.getPropertyValue("--rot") || "0deg";
      item.style.transform = `translate(${normX * speed}px, ${normY * speed}px) rotate(${baseRot})`;
    });

    // Proximity reaction for kalcer stickers (wobble when cursor is within 130px)
    stickers.forEach(sticker => {
      const sRect = sticker.getBoundingClientRect();
      const sCenterX = sRect.left + sRect.width / 2;
      const sCenterY = sRect.top + sRect.height / 2;
      const dist = Math.hypot(e.clientX - sCenterX, e.clientY - sCenterY);

      if (dist < 130 && !sticker.classList.contains("dancing")) {
        sticker.classList.add("dancing");
        const randomRot = (Math.random() - 0.5) * 26;
        const randomScale = 1.15 + Math.random() * 0.12;
        const inner = sticker.querySelector(".sticker-inner");
        if (inner) {
          inner.style.transform = `scale(${randomScale}) rotate(${randomRot}deg)`;
        }
        setTimeout(() => {
          sticker.classList.remove("dancing");
          if (inner && !sticker.matches(":hover")) {
            inner.style.transform = "";
          }
        }, 500);
      }
    });
  });

  // Smooth lerp loop for photo card 3D tilt
  function renderTilt() {
    if (photoCard) {
      currentTiltX += (targetTiltX - currentTiltX) * 0.12;
      currentTiltY += (targetTiltY - currentTiltY) * 0.12;
      photoCard.style.transform = `perspective(1000px) rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg)`;
    }
    requestAnimationFrame(renderTilt);
  }
  renderTilt();

  // 360 Spin funny click reaction on stickers
  stickers.forEach(sticker => {
    sticker.addEventListener("click", () => {
      const inner = sticker.querySelector(".sticker-inner");
      if (inner) {
        inner.style.transform = "scale(1.25) rotate(360deg)";
        inner.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
        setTimeout(() => {
          inner.style.transform = "";
          inner.style.transition = "";
        }, 550);
      }
    });
  });
}

/**
 * Lively Opening Screen (Splash Animation)
 */
function initOpeningScreen() {
  const openingEl = document.getElementById("opening-screen");
  if (!openingEl) return;

  const statusText = document.getElementById("opening-status-text");
  const enterBtn = document.getElementById("opening-enter-btn");

  const phrases = [
    "✨ Mempersiapkan Ruang Belajar...",
    "🎭 Menyelaraskan Seni & Inovasi...",
    "✦ Selamat Datang di E-Portofolio!"
  ];

  let phraseIdx = 0;
  const textInterval = setInterval(() => {
    phraseIdx = (phraseIdx + 1) % phrases.length;
    if (statusText) statusText.textContent = phrases[phraseIdx];
  }, 500);

  let isDismissed = false;
  function dismissOpening() {
    if (isDismissed) return;
    isDismissed = true;
    clearInterval(textInterval);
    if (typeof window.dismissOpeningScreen === "function") {
      window.dismissOpeningScreen();
    } else {
      openingEl.classList.add("is-hidden");
      setTimeout(() => {
        openingEl.style.display = "none";
      }, 500);
    }
  }

  // Auto-dismiss after 1.8 seconds so it's snappy, fun, and doesn't block the user
  const autoTimeout = setTimeout(dismissOpening, 1800);

  if (enterBtn) {
    enterBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      clearTimeout(autoTimeout);
      dismissOpening();
    });
  }

  openingEl.addEventListener("click", () => {
    clearTimeout(autoTimeout);
    dismissOpening();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === "Escape" || e.key === " ") {
      clearTimeout(autoTimeout);
      dismissOpening();
    }
  }, { once: true });
}

/**
 * Modern Scroll-Driven Fade-in & Reveal Engine
 */
function initScrollReveal() {
  const targets = document.querySelectorAll(`
    .section-header,
    .course-card,
    .timeline-item,
    .skill-category-card,
    .pillar-card,
    .ptk-showcase-box,
    .ptk-metric-card,
    .ptk-cycle-card,
    .pdf-drive-container,
    .about-fact-card,
    .paradigm-card,
    .philosophy-quote-box,
    .contact-social-card,
    .contact-dm-box,
    .academic-logos-strip
  `);

  if (!("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  });

  targets.forEach((el) => {
    el.classList.add("reveal-on-scroll");
    const siblingIndex = Array.from(el.parentNode?.children || []).indexOf(el);
    el.style.setProperty("--stagger-i", String(siblingIndex >= 0 ? siblingIndex % 6 : 0));
    observer.observe(el);
  });
}
