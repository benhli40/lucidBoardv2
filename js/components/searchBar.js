// searchBar.js – Reusable search input for vault/clutter

export function createSearchBar(onSearch) {
  const wrapper = document.createElement('div');
  wrapper.className = 'search-bar';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Search...';
  input.className = 'search-input';

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    onSearch(query);
  });

  wrapper.appendChild(input);
  return wrapper;
}