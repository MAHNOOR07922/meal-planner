// Student JavaScript Logic (script.js)
const calculateBtn = document.getElementById('calculate-btn');
const resultEl = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const val1 = parseFloat(document.getElementById('example-input').value);
  const val2 = parseFloat(document.getElementById('second-input').value);

  if (isNaN(val1) || isNaN(val2)) {
    resultEl.hidden = false;
    resultEl.classList.add('error');
    resultEl.textContent = 'Please enter valid numbers in both fields.';
    return;
  }

  const calculatedAnswer = val1 + val2;
  resultEl.hidden = false;
  resultEl.classList.remove('error');
  resultEl.innerHTML = `Calculated total: <strong>${calculatedAnswer}</strong>`;
});
