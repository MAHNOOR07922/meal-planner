const heightInput = document.getElementById('height-cm');
const weightInput = document.getElementById('weight-kg');
const calculateBtn = document.getElementById('calculate-btn');
const resultEl = document.getElementById('result');

function calculateBmi() {
  const cm = parseFloat(heightInput.value);
  const kg = parseFloat(weightInput.value);

  if (isNaN(cm) || cm <= 50 || cm >= 300) {
    resultEl.hidden = false;
    resultEl.classList.add('error');
    resultEl.textContent = 'Please enter a realistic height between 50 and 300 cm.';
    return;
  }

  if (isNaN(kg) || kg <= 10 || kg >= 500) {
    resultEl.hidden = false;
    resultEl.classList.add('error');
    resultEl.textContent = 'Please enter a realistic weight between 10 and 500 kg.';
    return;
  }

  const heightM = cm / 100;
  const bmi = kg / (heightM * heightM);
  const roundedBmi = Math.round(bmi * 10) / 10;

  // Ideal weight range for normal BMI 18.5 - 24.9
  const minNormalWeight = Math.round(18.5 * heightM * heightM);
  const maxNormalWeight = Math.round(24.9 * heightM * heightM);

  let category = '';
  let badgeClass = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    badgeClass = 'bmi-warning';
  } else if (bmi < 25) {
    category = 'Normal / Healthy Weight';
    badgeClass = 'bmi-normal';
  } else if (bmi < 30) {
    category = 'Overweight';
    badgeClass = 'bmi-warning';
  } else {
    category = 'Obese';
    badgeClass = 'bmi-danger';
  }

  resultEl.hidden = false;
  resultEl.classList.remove('error');
  resultEl.innerHTML = `
    <div class="bmi-score-box">
      <div>Your Body Mass Index: <strong>${roundedBmi}</strong></div>
      <div class="bmi-badge ${badgeClass}">${category}</div>
    </div>
    <div style="font-size: 13px; color: var(--color-text-secondary); margin-top: 8px;">
      Recommended healthy weight for ${cm} cm height: <strong>${minNormalWeight} &ndash; ${maxNormalWeight} kg</strong>.
    </div>
  `;
}

calculateBtn.addEventListener('click', calculateBmi);
heightInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') calculateBmi();
});
weightInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') calculateBmi();
});
