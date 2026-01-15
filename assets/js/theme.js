const THEME_KEY = 'therafit-theme';
const THEMES = [
    { id: 'default', label: '', icon: '☀️' },
    { id: 'dark', label: '', icon: '🌙' },
    { id: 'high-contrast', label: '', icon: '👁️' }
];

const ThemeManager = {
    init() {
        const savedTheme = localStorage.getItem(THEME_KEY) || 'default';
        this.setTheme(savedTheme);
    },

    setTheme(themeId) {
        // Validate theme
        if (!THEMES.some(t => t.id === themeId)) themeId = 'default';

        document.documentElement.setAttribute('data-theme', themeId);
        localStorage.setItem(THEME_KEY, themeId);
        this.updateButtons(themeId);
    },

    cycleTheme() {
        const currentTheme = localStorage.getItem(THEME_KEY) || 'default';
        const currentIndex = THEMES.findIndex(t => t.id === currentTheme);
        // If current theme is invalid or not found, default to 0, so next is 1
        const index = currentIndex === -1 ? 0 : currentIndex;
        const nextIndex = (index + 1) % THEMES.length;
        this.setTheme(THEMES[nextIndex].id);
    },

    updateButtons(activeThemeId) {
        const theme = THEMES.find(t => t.id === activeThemeId) || THEMES[0];
        document.querySelectorAll('.theme-toggle').forEach(btn => {
            btn.innerHTML = `${theme.icon} ${theme.label}`;
            btn.setAttribute('aria-label', `Current theme: ${theme.label}. Click to cycle.`);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
});

window.ThemeManager = ThemeManager;
