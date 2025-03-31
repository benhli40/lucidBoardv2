// vault.js – Insight Vault view
// vault.js – Insight Vault view

import { getInsights, saveInsights } from '../storage.js';
import { createInsightForm } from '../components/form.js';
import { insightItemCard } from '../components/insightItem.js';
import { createSearchBar } from '../components/searchBar.js';

export function renderVault(container) {
  const section = document.createElement('section');
  section.className = 'vault-section';

  const title = document.createElement('h1');
  title.textContent = '🧠 Insight Vault';

  const sub = document.createElement('p');
  sub.className = 'subtext';
  sub.textContent = 'Save your best thoughts, quotes, and personal reflections.';

  const list = document.createElement('div');
  list.className = 'insight-list';

  let insights = getInsights(); // original full list

  const form = createInsightForm((newItem) => {
    insights.unshift(newItem);
    saveInsights(insights);
    renderVault(container); // re-render with updated list
  });

  // 🔍 Add the search bar after everything is defined
  const searchBar = createSearchBar((query) => {
    const filtered = insights.filter(item =>
      item.text.toLowerCase().includes(query)
    );
    list.innerHTML = ''; // clear previous cards
    filtered.forEach((item, index) => {
      const card = insightItemCard(item, () => {
        insights.splice(index, 1);
        saveInsights(insights);
        renderVault(container);
      });
      list.appendChild(card);
    });
  });

  // Initially show all insights
  insights.forEach((item, index) => {
    const card = insightItemCard(item, () => {
      insights.splice(index, 1);
      saveInsights(insights);
      renderVault(container);
    });
    list.appendChild(card);
  });

  section.append(title, sub, form, searchBar, list);
  container.appendChild(section);
}