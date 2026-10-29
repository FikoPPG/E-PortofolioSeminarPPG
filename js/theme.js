/**
 * ============================================================================
 * THE CREATIVE EDUCATOR ARCHIVE - THEME CONTROLLER
 * ============================================================================
 */

export function initTheme() {
  const toggleButtons = document.querySelectorAll("#theme-toggle, .btn-theme-toggle");
  if (!toggleButtons.length) return;

  const currentTheme = localStorage.getItem("fiko_theme") || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  applyTheme(currentTheme);

  toggleButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const activeTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = activeTheme === "dark" ? "light" : "dark";
      
      applyTheme(newTheme);
      localStorage.setItem("fiko_theme", newTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeIcons(theme);
}

function updateThemeIcons(theme) {
  const iconElements = document.querySelectorAll("#theme-toggle-icon, .theme-toggle-icon");
  const toggleButtons = document.querySelectorAll("#theme-toggle, .btn-theme-toggle");

  const isDark = theme === "dark";
  const titleText = isDark ? "Ganti ke Mode Terang (Siang)" : "Ganti ke Mode Gelap (Malam)";

  toggleButtons.forEach(btn => {
    btn.setAttribute("title", titleText);
    btn.setAttribute("aria-label", titleText);
  });

  iconElements.forEach(iconElement => {
    if (isDark) {
      // Sun icon for switching back to light mode
      iconElement.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
    } else {
      // Moon icon for switching to dark mode
      iconElement.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
    }
  });
}
