const grid = document.getElementById('board');

for (let i = 0; i < 36; i++) {
  const card = document.createElement('div');
  card.className = 'card';

  grid.appendChild(card);
}
