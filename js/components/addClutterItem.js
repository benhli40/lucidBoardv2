// addClutterItem.js – Clutter form component (modular version)

export function addClutterItem(onAdd) {
  const wrapper = document.createElement('div');
  wrapper.className = 'add-form';

  const title = document.createElement('input');
  title.type = 'text';
  title.placeholder = 'Title or label...';

  const link = document.createElement('input');
  link.type = 'text';
  link.placeholder = 'Paste link or description...';

  const typeInput = document.createElement('input');
  typeInput.type = 'text';
  typeInput.placeholder = 'Type (e.g. link, file, note)';

  const button = document.createElement('button');
  button.textContent = '➕ Save Clutter';

  button.addEventListener('click', () => {
    const t = title.value.trim();
    const l = link.value.trim();
    const ty = typeInput.value.trim();

    if (t) {
      onAdd({
        text: `${t} - ${l}`,
        type: ty,
        addedAt: new Date().toISOString()
      });
      title.value = '';
      link.value = '';
      typeInput.value = '';
    }
  });

  wrapper.append(title, link, typeInput, button);
  return wrapper;
}