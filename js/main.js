/**
 * ============================================================================
 * THE CREATIVE EDUCATOR ARCHIVE - MAIN APPLICATION ENTRY POINT
 * ============================================================================
 */

import { PORTFOLIO_DATA } from "./data.js";
import { initTheme } from "./theme.js";
import { initNavigation } from "./navigation.js";
import { initProjects } from "./projects.js";
import { initReflections } from "./reflections.js";
import { initDocuments } from "./documents.js";
import { initInteractions } from "./interactions.js";
import { initCourses } from "./courses.js";

function initApp() {
  try { populateStaticSections(); } catch (err) { console.error("populateStaticSections error:", err); }
  try { initTheme(); } catch (err) { console.error("initTheme error:", err); }
  try { initNavigation(); } catch (err) { console.error("initNavigation error:", err); }
  try { initCourses(); } catch (err) { console.error("initCourses error:", err); }
  try { initProjects(); } catch (err) { console.error("initProjects error:", err); }
  try { initReflections(); } catch (err) { console.error("initReflections error:", err); }
  try { initDocuments(); } catch (err) { console.error("initDocuments error:", err); }
  try { initInteractions(); } catch (err) { console.error("initInteractions error:", err); }

  console.log("THE CREATIVE EDUCATOR ARCHIVE initialized successfully.");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

function populateStaticSections() {
  const { profile, journey, skills, featuredProject, philosophy } = PORTFOLIO_DATA;

  // --- Hero Section ---
  const headlineEl = document.getElementById("hero-headline");
  if (headlineEl) {
    headlineEl.innerHTML = `
      ${profile.headlineLead} <br />
      <span class="highlight-box">${profile.headlineHighlight}</span>
    `;
  }

  const heroBioEl = document.getElementById("hero-bio");
  if (heroBioEl) heroBioEl.textContent = profile.tagline;

  const heroEditionEl = document.getElementById("hero-edition");
  if (heroEditionEl) heroEditionEl.textContent = profile.edition;

  const heroStatusEl = document.getElementById("hero-status");
  if (heroStatusEl) heroStatusEl.textContent = profile.status;

  // --- About Section Quick Facts ---
  const aboutFactsGrid = document.getElementById("about-facts-grid");
  if (aboutFactsGrid) {
    aboutFactsGrid.innerHTML = profile.quickFacts.map(fact => `
      <div class="about-fact-card">
        <div class="fact-label">${fact.label}</div>
        <div class="fact-value">${fact.value}</div>
      </div>
    `).join('');
  }

  // --- Principles Matrix ("What I Believe") ---
  const principlesMatrix = document.getElementById("principles-matrix");
  if (principlesMatrix) {
    principlesMatrix.innerHTML = profile.principles.map(p => `
      <div class="principle-card">
        <div class="principle-header">
          <span class="principle-num">${p.number}</span>
          <h4 class="principle-title">${p.title}</h4>
        </div>
        <p class="principle-desc">${p.desc}</p>
      </div>
    `).join('');
  }

  // --- Journey Timeline ---
  const timelineContainer = document.getElementById("timeline-container");
  if (timelineContainer) {
    timelineContainer.innerHTML = journey.map(item => `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="timeline-card">
          <div class="timeline-card-header">
            <span class="timeline-period">${item.period}</span>
            <span class="badge-editorial">${item.category}</span>
          </div>
          <h3 class="timeline-card-title">${item.title}</h3>
          <div class="timeline-institution">// ${item.institution}</div>
          <p class="timeline-desc">${item.desc}</p>
          <div class="timeline-outcome">
            <strong>Pembelajaran / Capaian:</strong> ${item.outcome}
          </div>
        </div>
      </div>
    `).join('');
  }

  // --- Skills Section ---
  const skillsContainer = document.getElementById("skills-container");
  if (skillsContainer) {
    skillsContainer.innerHTML = skills.map(cat => `
      <div class="skill-category-card">
        <div class="skill-category-header">
          <h3 class="skill-cat-title">${cat.category}</h3>
          <span style="font-size: 24px;">${cat.icon}</span>
        </div>
        <div class="skill-list">
          ${cat.items.map(item => `
            <div>
              <div class="skill-item-header">${item.name}</div>
              <p class="skill-item-desc">${item.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // --- Featured Project Deep Dive ---
  if (featuredProject) {
    const featuredTitleEl = document.getElementById("featured-title");
    if (featuredTitleEl) featuredTitleEl.textContent = featuredProject.title;

    const featuredTaglineEl = document.getElementById("featured-tagline");
    if (featuredTaglineEl) featuredTaglineEl.textContent = featuredProject.tagline;

    const featuredImgEl = document.getElementById("featured-img");
    if (featuredImgEl) featuredImgEl.src = featuredProject.heroImage;

    const featuredProblemEl = document.getElementById("featured-problem");
    if (featuredProblemEl) featuredProblemEl.textContent = featuredProject.problemStatement;

    const featuredNeedsEl = document.getElementById("featured-needs");
    if (featuredNeedsEl) featuredNeedsEl.textContent = featuredProject.studentNeeds;

    const featuredStepsContainer = document.getElementById("featured-steps-container");
    if (featuredStepsContainer && featuredProject.pedagogicalDecisions) {
      featuredStepsContainer.innerHTML = featuredProject.pedagogicalDecisions.map(step => `
        <div class="step-card">
          <div class="step-num">${step.phase}</div>
          <h4 class="step-title">${step.title}</h4>
          <p class="step-desc">${step.desc}</p>
        </div>
      `).join('');
    }

    const featuredTakeawayEl = document.getElementById("featured-takeaway");
    if (featuredTakeawayEl) featuredTakeawayEl.textContent = featuredProject.reflection;
  }

  // --- Teaching Philosophy ---
  const quoteTextEl = document.getElementById("philosophy-quote-text");
  if (quoteTextEl && philosophy?.quote) quoteTextEl.textContent = `"${philosophy.quote}"`;

  const quoteAuthorEl = document.getElementById("philosophy-quote-author");
  if (quoteAuthorEl && philosophy?.author) {
    quoteAuthorEl.textContent = philosophy.author.startsWith("—") ? philosophy.author : `— ${philosophy.author}`;
  }

  const philosophyPillars = document.getElementById("philosophy-pillars");
  if (philosophyPillars && philosophy?.pillars) {
    philosophyPillars.innerHTML = philosophy.pillars.map(pillar => `
      <div class="pillar-card">
        <div class="pillar-icon-box">${pillar.icon}</div>
        <h4 class="pillar-title">${pillar.title}</h4>
        <p class="pillar-desc">${pillar.desc}</p>
      </div>
    `).join('');
  }

  // --- Contact Direct Email ---
  const contactEmailEl = document.getElementById("contact-email-val");
  if (contactEmailEl) contactEmailEl.textContent = profile.email;

  // --- Refleksi PPG (Holistic, Paradigma, PTK, Evaluasi Diri, RTL, & Kutipan Estetik) ---
  const { ppgHolisticReflection } = PORTFOLIO_DATA;
  if (ppgHolisticReflection) {
    // 1. Paradigm Shift
    const paradigmGrid = document.getElementById("paradigm-shift-grid");
    if (paradigmGrid && ppgHolisticReflection.paradigmShift) {
      paradigmGrid.innerHTML = ppgHolisticReflection.paradigmShift.map(item => `
        <div class="paradigm-card">
          <div class="paradigm-card-header">
            <span class="paradigm-aspect">${item.aspect}</span>
            <span class="badge-editorial lime">${item.badge}</span>
          </div>
          <div class="paradigm-comparison">
            <div class="paradigm-col before">
              <span class="paradigm-col-label">Sebelum PPG</span>
              <p>${item.before}</p>
            </div>
            <div class="paradigm-col after">
              <span class="paradigm-col-label">Sesudah PPG (Paradigma Baru)</span>
              <p>${item.after}</p>
            </div>
          </div>
        </div>
      `).join('');
    }

    // 2. Riset Tindakan Kelas (PTK) PPL Mandiri SMAN 4 Semarang
    const pplContainer = document.getElementById("ppl-narrative-container");
    if (pplContainer && ppgHolisticReflection.ptkCaseStudy) {
      const ptk = ppgHolisticReflection.ptkCaseStudy;
      pplContainer.innerHTML = `
        <div class="ptk-showcase-box">
          <div class="ptk-header-badges">
            <span class="badge-editorial cobalt">RISET TINDAKAN KELAS (PTK)</span>
            <span class="badge-editorial lime">PPL MANDIRI // SMAN 4 SEMARANG</span>
            <span class="badge-editorial">${ptk.targetClass}</span>
          </div>
          
          <h3 class="ptk-title">${ptk.model}</h3>
          
          <p class="ptk-desc">
            ${ptk.problem} Untuk menjawab tantangan tersebut, diterapkan model kooperatif Think Pair Share (TPS) berbantuan media pertunjukan audiovisual.
          </p>

          <!-- Metric Stat Cards -->
          <div class="ptk-metrics-grid">
            ${ptk.metrics.map(m => `
              <div class="ptk-metric-card">
                <span class="metric-label">${m.label}</span>
                <div class="metric-val-row">
                  <span class="metric-start">${m.prasiklus}</span>
                  <span class="metric-arrow">➔</span>
                  <span class="metric-mid">${m.siklus1}</span>
                  <span class="metric-arrow">➔</span>
                  <span class="metric-final">${m.siklus2}</span>
                </div>
                <div class="metric-footer-row">
                  <span class="metric-growth">${m.growth}</span>
                  <span class="metric-badge">${m.status}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Siklus I & II Explanation -->
          <div class="ptk-cycles-row">
            <div class="ptk-cycle-card cycle-1">
              <div class="cycle-tag">SIKLUS I // REFLEKSI AWAL</div>
              <h4>Kendala yang Ditemukan:</h4>
              <p>Masih ada murid yang belum tuntas, beberapa pasangan belum berdiskusi secara optimal, dan butuh pertanyaan LKPD yang lebih analitis.</p>
            </div>
            <div class="ptk-cycle-card cycle-2">
              <div class="cycle-tag">SIKLUS II // TINDAKAN PERBAIKAN</div>
              <h4>Solusi Nyata yang Berhasil:</h4>
              <p>${ptk.cycleImprovement}</p>
            </div>
          </div>
        </div>
      `;
    }

    // 3. Evaluasi Diri PPG (Semester 2)
    const selfEvalContainer = document.getElementById("self-evaluation-container");
    if (selfEvalContainer && ppgHolisticReflection.selfEvaluation) {
      const evalData = ppgHolisticReflection.selfEvaluation;
      selfEvalContainer.innerHTML = `
        <div class="self-eval-grid">
          <div class="eval-card eval-strengths">
            <div class="eval-card-header">
              <span class="badge-editorial lime">PENCAPAIAN DIRI</span>
              <h4>✦ ${evalData.strengths.title}</h4>
            </div>
            <ul class="eval-list">
              ${evalData.strengths.points.map(pt => `
                <li>
                  <span class="eval-icon">✔</span>
                  <span>${pt}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="eval-card eval-growth">
            <div class="eval-card-header">
              <span class="badge-editorial cobalt">TITIK BERANGKAT</span>
              <h4>✦ ${evalData.areasForGrowth.title}</h4>
            </div>
            <ul class="eval-list">
              ${evalData.areasForGrowth.points.map(pt => `
                <li>
                  <span class="eval-icon">✎</span>
                  <span>${pt}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `;
    }

    // 4. Refleksi Akhir Perjalanan & Komitmen Tindak Lanjut
    const finalReflectionContainer = document.getElementById("final-reflection-container");
    if (finalReflectionContainer && ppgHolisticReflection.finalReflection) {
      const fr = ppgHolisticReflection.finalReflection;
      finalReflectionContainer.innerHTML = `
        <div class="final-narrative-card">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
            <span class="badge-editorial lime">SINTESIS DUA SEMESTER</span>
            <span class="badge-editorial">FIKO KURNIA PUTRA, S.Sn.</span>
          </div>
          <h3 style="font-size: var(--text-2xl); margin-bottom: 16px;">${fr.headline}</h3>
          <p style="font-size: var(--text-base); line-height: 1.8; color: var(--ink-secondary); white-space: pre-line;">
            ${fr.narrative}
          </p>
        </div>
      `;
    }

    // 5. Action Plan (Komitmen Tindak Lanjut)
    const actionGrid = document.getElementById("action-plan-grid");
    if (actionGrid && ppgHolisticReflection.finalReflection?.commitments) {
      actionGrid.innerHTML = ppgHolisticReflection.finalReflection.commitments.map(plan => `
        <div class="action-card">
          <div class="action-card-header">
            <span class="action-card-num">${plan.number}</span>
            <h4 class="action-card-title">${plan.title}</h4>
          </div>
          <p class="action-card-desc">${plan.desc}</p>
        </div>
      `).join('');
    }

    // 6. Kalimat Penutup Estetik (Special Aesthetic Quote)
    const aestheticQuoteContainer = document.getElementById("aesthetic-quote-container");
    if (aestheticQuoteContainer && ppgHolisticReflection.aestheticQuote) {
      const q = ppgHolisticReflection.aestheticQuote;
      aestheticQuoteContainer.innerHTML = `
        <div class="aesthetic-quote-card">
          <div class="quote-decorative-mark">“</div>
          <blockquote class="aesthetic-quote-text">
            “${q.text}”
          </blockquote>
          <div class="aesthetic-quote-meta">
            <div class="author-info">
              <strong class="author-name">${q.author}</strong>
              <span class="author-title">${q.role}</span>
            </div>
            <div class="quote-stamp">
              <span>✦ REFLEKSI UTUH PPG ✦</span>
            </div>
          </div>
        </div>
      `;
    }
  }
}

