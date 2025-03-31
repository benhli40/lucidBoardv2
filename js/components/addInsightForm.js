// addInsightItem.js – Insight form component (modular version)

export function addInsightItem(onAdd) {
  const wrapper = document.createElement('div');
  wrapper.className = 'add-form';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Your insight...';

  const tagInput = document.createElement('input');
  tagInput.type = 'text';
  tagInput.placeholder = 'Tag (optional)';

  const button = document.createElement('button');
  button.textContent = '➕ Save Insight';

  button.addEventListener('click', () => {
    const text = input.value.trim();
    const tag = tagInput.value.trim();

    if (text) {
      onAdd({
        text,
        tag,
        addedAt: new Date().toISOString()
      });
      input.value = '';
      tagInput.value = '';
    }
  });

  wrapper.append(input, tagInput, button);
  return wrapper;
}