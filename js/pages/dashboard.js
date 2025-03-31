// dashboard.js – LucidBoard overview

import { getInsights } from '../storage.js';
import { getClutter } from '../storage.js';
import { insightItemCard } from '../components/insightItem.js';
import { clutterItemCard } from '../components/clutterItem.js';

export function renderDashboard(container) {
  const insights = getInsights();
  const clutter = getClutter();

  const section = document.createElement('section');
  section.className = 'dashboard-section';

  section.innerHTML = `
    <h1>📊 Dashboard</h1>
    <p class="subtext">Your weekly overview of stored insights and digital clutter.</p>

    <div class="dashboard-stats">
      <div class="stat-card">
        <h2>${insights.length}</h2>
        <p>Insights</p>
        <a href="#vault">View Vault →</a>
      </div>
      <div class="stat-card">
        <h2>${clutter.length}</h2>
        <p>Clutter Items</p>
        <a href="#clutter">View Clutter →</a>
      </div>
    </div>

    <h3>🧠 Latest Insights</h3>
    <div class="dashboard-insights"></div>

    <h3>📂 Latest Clutter</h3>
    <div class="dashboard-clutter"></div>
  `;

  // Append top 3 insight items
  const insightList = section.querySelector('.dashboard-insights');
  insights.slice(0, 3).forEach(item => {
    insightList.appendChild(insightItemCard(item, () => {})); // read-only here
  });

  // Append top 3 clutter items
  const clutterList = section.querySelector('.dashboard-clutter');
  clutter.slice(0, 3).forEach(item => {
    clutterList.appendChild(clutterItemCard(item, () => {})); // read-only here
  });

  container.appendChild(section);
}