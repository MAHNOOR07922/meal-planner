const guestInput = document.getElementById('guest-count');
const styleSelect = document.getElementById('chai-style');
const sweetnessSelect = document.getElementById('sweetness');
const calculateBtn = document.getElementById('calculate-btn');
const resultEl = document.getElementById('result');

function calculateChai() {
  const cups = parseInt(guestInput.value, 10);
  const style = styleSelect.value;
  const sugarPerCup = parseFloat(sweetnessSelect.value);

  if (isNaN(cups) || cups <= 0) {
    resultEl.hidden = false;
    resultEl.classList.add('error');
    resultEl.textContent = 'Please enter at least 1 cup.';
    return;
  }

  // Calculate liquid volumes in ml (standard cup is 200ml, with 10% evaporation allowance)
  const totalVolume = cups * 220;
  let milkMl = 0;
  let waterMl = 0;
  let pattiTbsp = (cups * 1.25).toFixed(1);
  let cardamoms = Math.max(1, Math.round(cups * 0.75));
  let totalSugar = (cups * sugarPerCup).toFixed(1);

  if (style === 'karak') {
    milkMl = Math.round(totalVolume * 0.6);
    waterMl = Math.round(totalVolume * 0.4);
  } else if (style === 'doodh-patti') {
    milkMl = Math.round(totalVolume * 0.9);
    waterMl = Math.round(totalVolume * 0.1);
    pattiTbsp = (cups * 1.5).toFixed(1);
  } else {
    // light
    milkMl = Math.round(totalVolume * 0.5);
    waterMl = Math.round(totalVolume * 0.5);
  }

  resultEl.hidden = false;
  resultEl.classList.remove('error');
  resultEl.innerHTML = `
    <div>Ingredients for <strong>${cups} cups of chai</strong>:</div>
    <div class="ingredient-list">
      <div class="ingredient-card">
        <div class="ingredient-name">Fresh Milk</div>
        <div class="ingredient-qty">${milkMl} ml (${(milkMl / 250).toFixed(1)} cups)</div>
      </div>
      <div class="ingredient-card">
        <div class="ingredient-name">Water</div>
        <div class="ingredient-qty">${waterMl} ml (${(waterMl / 250).toFixed(1)} cups)</div>
      </div>
      <div class="ingredient-card">
        <div class="ingredient-name">Danedar Tea Leaves (Patti)</div>
        <div class="ingredient-qty">${pattiTbsp} tbsp</div>
      </div>
      <div class="ingredient-card">
        <div class="ingredient-name">White Sugar</div>
        <div class="ingredient-qty">${sugarPerCup === 0 ? 'None' : totalSugar + ' tsp'}</div>
      </div>
      <div class="ingredient-card">
        <div class="ingredient-name">Green Cardamoms (Ilaichi)</div>
        <div class="ingredient-qty">${cardamoms} pods (cracked)</div>
      </div>
      <div class="ingredient-card">
        <div class="ingredient-name">Ginger (Adrak)</div>
        <div class="ingredient-qty">${cups > 2 ? '1 inch sliced' : '0.5 inch sliced'}</div>
      </div>
    </div>
    <div class="tip-box">
      <strong>Brewing Tip:</strong> Bring water, bruised cardamoms, and tea leaves to a vigorous boil first. Once deep amber, pour in milk. Reduce heat and simmer on low-medium for 4-5 minutes, tossing with a ladle for that authentic frothy Karak finish.
    </div>
  `;
}

calculateBtn.addEventListener('click', calculateChai);
guestInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') calculateChai();
});
