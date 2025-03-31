// form.js – Shared form creation for insights + clutter

export function createInsightForm(onAdd) {
  const form = document.createElement('form');
  form.className = 'form';

  form.innerHTML = `
    <input type="text" placeholder="Write your insight..." required />
    <input type="text" placeholder="Tag (optional)" />
    <button type="submit">➕ Add Insight</button>
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = form.elements[0].value.trim();
    const tag = form.elements[1].value.trim();

    if (text) {
      onAdd({
        text,
        tag,
        addedAt: new Date().toISOString()
      });
      form.reset();
    }
  });

  return form;
}

export function createClutterForm(onAdd) {
  const form = document.createElement('form');
  form.className = 'form';

  form.innerHTML = `
    <input type="text" placeholder="Enter title..." required />
    <input type="text" placeholder="Paste URL or short note..." />
    <input type="text" placeholder="Type (e.g. link, file, note)" />
    <button type="submit">➕ Add Clutter</button>
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = form.elements[0].value.trim();
    const url = form.elements[1].value.trim();
    const type = form.elements[2].value.trim();

    if (title) {
      onAdd({
        text: `${title} - ${url}`,
        type,
        addedAt: new Date().toISOString()
      });
      form.reset();
    }
  });

  return form;
}