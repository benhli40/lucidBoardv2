// insightItem.js – Renders a single insight card

export function insightItemCard(item, onDelete) {
  const card = document.createElement('div');
  card.className = 'card';

  const header = document.createElement('div');
  header.className = 'card-header';

  const tag = document.createElement('span');
  tag.className = 'tag';
  tag.textContent = item.tag || 'Insight';

  const delBtn = document.createElement('button');
  delBtn.className = 'delete-btn';
  delBtn.innerHTML = '✖';
  delBtn.title = 'Delete';

  delBtn.addEventListener('click', () => {
    if (confirm('Delete this insight?')) {
      onDelete();
    }
  });

  header.append(tag, delBtn);

  const body = document.createElement('p');
  body.textContent = item.text;

  const footer = document.createElement('div');
  footer.className = 'card-footer';
  footer.textContent = new Date(item.addedAt || Date.now()).toLocaleString();

  card.append(header, body, footer);
  return card;
}