import { toggleTheme } from './themeToggle.js';

export function renderNavbar() {
  const header = document.querySelector('header');

  const nav = document.createElement('nav');
  nav.className = 'navbar';

  nav.innerHTML = `
    <div class="nav-left">
      <a href="#dashboard" class="logo">LucidBoard</a>
    </div>
    <div class="nav-center">
      <a href="#dashboard">Dashboard</a>
      <a href="#vault">Vault</a>
      <a href="#clutter">Clutter</a>
      <a href="#settings">Settings</a>
    </div>
    <div class="nav-right">
      <button id="theme-toggle" title="Toggle Theme">🌓</button>
    </div>
  `;

  header.appendChild(nav);

  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
}