const budgetInput = document.getElementById('monthly-budget');
const nameInput = document.getElementById('item-name');
const qtyInput = document.getElementById('item-qty');
const priceInput = document.getElementById('item-price');
const addBtn = document.getElementById('add-item-btn');
const spentDisplay = document.getElementById('spent-display');
const remainingDisplay = document.getElementById('remaining-display');
const progressBar = document.getElementById('progress-bar');
const itemsList = document.getElementById('items-list');

let items = [
  { id: 1, name: 'Guard Basmati Rice (5kg)', qty: 1, price: 1650 },
  { id: 2, name: 'Olper’s Milk (1 Liter x 3)', qty: 3, price: 340 },
  { id: 3, name: 'Fresh Farm Eggs (Dozen)', qty: 2, price: 380 }
];

function render() {
  const budget = parseFloat(budgetInput.value) || 0;
  let totalSpent = 0;

  itemsList.innerHTML = '';
  if (items.length === 0) {
    itemsList.innerHTML = '<div class="muted" style="text-align: center; padding: 16px;">No items added yet. Add an item above.</div>';
  } else {
    items.forEach(item => {
      const itemSubtotal = item.qty * item.price;
      totalSpent += itemSubtotal;

      const row = document.createElement('div');
      row.className = 'item-row';
      row.innerHTML = `
        <div class="item-info">
          <strong>${item.name}</strong>
          <span class="muted" style="margin-left: 8px;">(${item.qty} &times; PKR ${item.price.toLocaleString()})</span>
        </div>
        <div style="display: flex; align-items: center;">
          <span class="item-cost">PKR ${itemSubtotal.toLocaleString()}</span>
          <button class="delete-btn" onclick="removeItem(${item.id})" title="Remove item">&times;</button>
        </div>
      `;
      itemsList.appendChild(row);
    });
  }

  const remaining = budget - totalSpent;
  const pct = budget > 0 ? Math.min(100, (totalSpent / budget) * 100) : 0;

  spentDisplay.textContent = `PKR ${totalSpent.toLocaleString()}`;
  remainingDisplay.textContent = `PKR ${remaining.toLocaleString()}`;
  progressBar.style.width = `${pct}%`;

  if (remaining < 0) {
    remainingDisplay.style.color = 'var(--color-error)';
    progressBar.style.backgroundColor = 'var(--color-error)';
  } else {
    remainingDisplay.style.color = 'var(--color-text)';
    progressBar.style.backgroundColor = 'var(--color-accent)';
  }
}

window.removeItem = function(id) {
  items = items.filter(i => i.id !== id);
  render();
};

addBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const qty = parseInt(qtyInput.value, 10);
  const price = parseFloat(priceInput.value);

  if (!name || isNaN(qty) || qty <= 0 || isNaN(price) || price <= 0) {
    alert('Please enter a valid item name, quantity, and price.');
    return;
  }

  items.push({
    id: Date.now(),
    name,
    qty,
    price
  });

  nameInput.value = '';
  priceInput.value = '';
  nameInput.focus();
  render();
});

budgetInput.addEventListener('input', render);
render();
