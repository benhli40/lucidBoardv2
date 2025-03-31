import { renderNavbar } from './components/nav.js';
import { renderFooter } from './components/footer.js';
import { initTheme } from './components/themeToggle.js';

// View imports
import { renderDashboard } from './pages/dashboard.js';
import { renderVault } from './pages/vault.js';
import { renderClutter } from './pages/clutter.js';
import { renderSettings } from './pages/settings.js';
import { renderHome } from './pages/home.js'; // optional welcome screen

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderNavbar();
  renderFooter();
  handleRouteChange();
  window.addEventListener('hashchange', handleRouteChange);
});

function handleRouteChange() {
  const route = location.hash.slice(1) || 'dashboard';
  const app = document.getElementById('app');
  app.innerHTML = '';

  switch (route) {
    case 'dashboard':
      renderDashboard(app);
      break;
    case 'vault':
      renderVault(app);
      break;
    case 'clutter':
      renderClutter(app);
      break;
    case 'settings':
      renderSettings(app);
      break;
    case 'home':
      renderHome(app);
      break;
    default:
      app.innerHTML = '<h2>404 – Page Not Found</h2>';
  }
}