// home.js – Optional welcome view

export function renderHome(container) {
  const section = document.createElement('section');
  section.className = 'home-section center';

  section.innerHTML = `
    <h1 class="headline">Welcome to LucidBoard</h1>
    <p class="subtext">A space to reflect, declutter, and track your mind’s progress.</p>
    <p class="bio-line">Start with <a href="#dashboard">Dashboard</a>, or dive into your <a href="#vault">Vault</a>.</p>
  `;

  container.appendChild(section);
}