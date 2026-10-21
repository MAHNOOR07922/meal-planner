const billInput = document.getElementById('bill-amount');
const peopleInput = document.getElementById('num-people');
const tipSelect = document.getElementById('tip-select');
const roundCheckbox = document.getElementById('round-up');
const calculateBtn = document.getElementById('calculate-btn');
const resultEl = document.getElementById('result');

function calculate() {
  const bill = parseFloat(billInput.value);
  const people = parseInt(peopleInput.value, 10);
  const tipPercent = parseFloat(tipSelect.value);

  if (isNaN(bill) || bill <= 0) {
    resultEl.hidden = false;
    resultEl.classList.add('error');
    resultEl.textContent = 'Please enter a valid bill amount greater than 0.';
    return;
  }

  if (isNaN(people) || people < 1) {
    resultEl.hidden = false;
    resultEl.classList.add('error');
    resultEl.textContent = 'Number of people must be at least 1.';
    return;
  }

  const tipTotal = (bill * tipPercent) / 100;
  const grandTotal = bill + tipTotal;
  let perPerson = grandTotal / people;

  if (roundCheckbox.checked) {
    perPerson = Math.ceil(perPerson / 10) * 10;
  } else {
    perPerson = Math.round(perPerson * 100) / 100;
  }

  resultEl.hidden = false;
  resultEl.classList.remove('error');
  resultEl.innerHTML = `
    <div>Each person pays: <strong>PKR ${perPerson.toLocaleString()}</strong></div>
    <div class="breakdown-grid">
      <div class="breakdown-item">
        Subtotal
        <strong>PKR ${bill.toLocaleString()}</strong>
      </div>
      <div class="breakdown-item">
        Tip (${tipPercent}%)
        <strong>PKR ${tipTotal.toLocaleString()}</strong>
      </div>
      <div class="breakdown-item">
        Grand Total
        <strong>PKR ${grandTotal.toLocaleString()}</strong>
      </div>
      <div class="breakdown-item">
        Split Between
        <strong>${people} ${people === 1 ? 'person' : 'people'}</strong>
      </div>
    </div>
  `;
}

calculateBtn.addEventListener('click', calculate);

// Allow Enter key to calculate
billInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') calculate();
});
peopleInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') calculate();
});
