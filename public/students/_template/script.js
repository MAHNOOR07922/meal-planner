// ========================================================
// Student JavaScript Logic (script.js)
// Plain JavaScript — no frameworks or build tools!
// ========================================================

const calculateBtn = document.getElementById('calculate-btn');
const resultEl = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const val1 = parseFloat(document.getElementById('example-input').value);
  const val2 = parseFloat(document.getElementById('second-input').value);

  // Validate inputs
  if (isNaN(val1) || isNaN(val2)) {
    resultEl.hidden = false;
    resultEl.classList.add('error');
    resultEl.textContent = 'Please enter valid numbers in both fields.';
    return;
  }

  // TODO: Implement your calculation logic here
  const calculatedAnswer = val1 + val2;

  // Display result
  resultEl.hidden = false;
  resultEl.classList.remove('error');
  resultEl.innerHTML = `Calculated total: <strong>${calculatedAnswer}</strong>`;
});
