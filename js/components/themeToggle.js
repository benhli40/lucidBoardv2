// themeToggle.js – Light/Dark mode toggle with persistence

const THEME_KEY = 'lucid-theme';

export function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark') {
    document.body.classList.add('dark');
  }
}

export function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
}