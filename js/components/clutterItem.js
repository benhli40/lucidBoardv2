// clutterItem.js – Renders a single clutter item card

export function clutterItemCard(item, onDelete) {
  const card = document.createElement('div');
  card.className = 'card';

  const header = document.createElement('div');
  header.className = 'card-header';

  const type = document.createElement('span');
  type.className = 'type';
  type.textContent = item.type || 'Clutter';

  const delBtn = document.createElement('button');
  delBtn.className = 'delete-btn';
  delBtn.innerHTML = '✖';
  delBtn.title = 'Delete';

  delBtn.addEventListener('click', () => {
    if (confirm('Delete this clutter item?')) {
      onDelete();
    }
  });

  header.append(type, delBtn);

  const body = document.createElement('p');
  body.textContent = item.text;

  const footer = document.createElement('div');
  footer.className = 'card-footer';
  footer.textContent = new Date(item.addedAt || Date.now()).toLocaleString();

  card.append(header, body, footer);
  return card;
}