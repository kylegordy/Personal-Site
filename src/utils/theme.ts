export interface ThemeManager {
  STORAGE_KEY: string;
  THEMES: readonly string[];
  getSystemPreference(): string;
  getCurrentTheme(): string;
  setTheme(theme: string): void;
  announceThemeChange(theme: string): void;
  toggle(): void;
}

export const createThemeManager = (): ThemeManager => ({
  STORAGE_KEY: "theme",
  THEMES: ["light", "dark"] as const,

  getSystemPreference(): string {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  },

  getCurrentTheme(): string {
    try {
      return (
        localStorage.getItem(this.STORAGE_KEY) || this.getSystemPreference()
      );
    } catch (error) {
      console.warn("Failed to access localStorage:", error);
      return this.getSystemPreference();
    }
  },

  setTheme(theme: string): void {
    if (!this.THEMES.includes(theme)) return;

    document.documentElement.setAttribute("data-theme", theme);

    try {
      localStorage.setItem(this.STORAGE_KEY, theme);
    } catch (error) {
      console.warn("Failed to save theme to localStorage:", error);
    }

    // Update button state
    const button = document.getElementById("themeToggle");
    if (button) {
      button.setAttribute("aria-pressed", (theme === "dark").toString());
      button.setAttribute("data-theme", theme);
    }

    // Announce to screen readers
    this.announceThemeChange(theme);
  },

  announceThemeChange(theme: string): void {
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.className = "sr-only";
    announcement.textContent = `Switched to ${theme} theme`;

    document.body.appendChild(announcement);

    // Remove after announcement
    setTimeout(() => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  },

  toggle(): void {
    const currentTheme = this.getCurrentTheme();
    const newTheme = currentTheme === "light" ? "dark" : "light";
    this.setTheme(newTheme);
  },
});

export const initializeTheme = (): void => {
  const themeManager = createThemeManager();
  const theme = themeManager.getCurrentTheme();
  themeManager.setTheme(theme);
};

export const setupThemeListeners = (): void => {
  const themeManager = createThemeManager();

  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    themeManager.toggle();
  });

  // Listen for system preference changes
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", function (e) {
    // Only update if user hasn't explicitly set a preference
    if (!localStorage.getItem(themeManager.STORAGE_KEY)) {
      themeManager.setTheme(e.matches ? "dark" : "light");
    }
  });
};
