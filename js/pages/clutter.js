// clutter.js – Digital Clutter view

import { getClutter, saveClutter } from '../storage.js';
import { createClutterForm } from '../components/form.js';
import { clutterItemCard } from '../components/clutterItem.js';
import { createSearchBar } from '../components/searchBar.js';

export function renderClutter(container) {
  const section = document.createElement('section');
  section.className = 'clutter-section';

  const title = document.createElement('h1');
  title.textContent = '📂 Digital Clutter';

  const sub = document.createElement('p');
  sub.className = 'subtext';
  sub.textContent = 'Links, notes, files — stash it here until you’re ready to organize it.';

  const list = document.createElement('div');
  list.className = 'clutter-list';

  let clutter = getClutter(); // full list

  const form = createClutterForm((newItem) => {
    clutter.unshift(newItem);
    saveClutter(clutter);
    renderClutter(container); // re-render
  });

  const searchBar = createSearchBar((query) => {
    const filtered = clutter.filter(item =>
      item.text.toLowerCase().includes(query)
    );
    list.innerHTML = ''; // clear previous list
    filtered.forEach((item, index) => {
      const card = clutterItemCard(item, () => {
        clutter.splice(index, 1);
        saveClutter(clutter);
        renderClutter(container);
      });
      list.appendChild(card);
    });
  });

  // Render initial list
  clutter.forEach((item, index) => {
    const card = clutterItemCard(item, () => {
      clutter.splice(index, 1);
      saveClutter(clutter);
      renderClutter(container);
    });
    list.appendChild(card);
  });

  section.append(title, sub, form, searchBar, list);
  container.appendChild(section);
}