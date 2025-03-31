// settings.js – Theme toggle & future features

import { toggleTheme } from '../components/themeToggle.js';

export function renderSettings(container) {
  const section = document.createElement('section');
  section.className = 'settings-section';

  section.innerHTML = `
    <h1>⚙️ Settings</h1>
    <p class="subtext">Customize your LucidBoard experience.</p>

    <div class="setting-group">
      <label for="theme-toggle">Toggle Theme:</label>
      <button id="theme-toggle-btn">🌓</button>
    </div>

    <div class="setting-group">
      <label>Export/Import (Coming Soon)</label>
      <p class="muted">Backup and restore your board data locally.</p>
    </div>
  `;

  container.appendChild(section);

  // Theme toggle logic
  document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);
}