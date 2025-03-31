// footer.js – Reusable site footer

export function renderFooter() {
  const footer = document.querySelector('footer');

  const wrapper = document.createElement('div');
  wrapper.className = 'footer-content';

  const year = new Date().getFullYear();

  wrapper.innerHTML = `
    <p>© ${year} LucidBoard by Benjamin Liles</p>
    <p>
      <a href="#dashboard">Dashboard</a> •
      <a href="#vault">Vault</a> •
      <a href="#clutter">Clutter</a>
    </p>
  `;

  footer.appendChild(wrapper);
}