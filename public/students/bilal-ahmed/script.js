const presetSelect = document.getElementById('route-preset');
const distanceInput = document.getElementById('distance-km');
const timePeriodSelect = document.getElementById('time-period');
const waitInput = document.getElementById('wait-mins');
const calculateBtn = document.getElementById('calculate-btn');
const resultEl = document.getElementById('result');

presetSelect.addEventListener('change', () => {
  if (presetSelect.value) {
    distanceInput.value = presetSelect.value;
  }
});

function calculateFare() {
  const km = parseFloat(distanceInput.value);
  const timePeriod = timePeriodSelect.value;
  const waitMins = parseFloat(waitInput.value) || 0;

  if (isNaN(km) || km <= 0) {
    resultEl.hidden = false;
    resultEl.classList.add('error');
    resultEl.textContent = 'Please enter a valid travel distance in kilometers.';
    return;
  }

  // Base fare: 120 PKR for first km
  // Per km rate: 38 PKR / km after first km
  const baseFare = 120;
  const additionalKm = Math.max(0, km - 1);
  const distanceFare = additionalKm * 38;
  const waitFare = (waitMins / 15) * 50; // 50 PKR per 15 min wait

  let subtotal = baseFare + distanceFare + waitFare;
  let nightSurcharge = 0;

  if (timePeriod === 'night') {
    nightSurcharge = subtotal * 0.25;
  }

  const estimatedTotal = subtotal + nightSurcharge;
  const minFair = Math.round(estimatedTotal * 0.9 / 10) * 10;
  const maxFair = Math.round(estimatedTotal * 1.15 / 10) * 10;
  const recommendedOffer = Math.round(estimatedTotal / 10) * 10;

  resultEl.hidden = false;
  resultEl.classList.remove('error');
  resultEl.innerHTML = `
    <div class="fare-range-box">
      <div>Estimated Fair Range:</div>
      <div class="main-number">PKR ${minFair} &ndash; ${maxFair}</div>
    </div>
    <div style="font-size: 14px; margin-bottom: 8px;">
      Recommended Opening Offer: <strong>PKR ${recommendedOffer}</strong>
    </div>
    <table class="fare-table">
      <tr>
        <td>Base flag drop (first 1 km)</td>
        <td>PKR ${baseFare}</td>
      </tr>
      <tr>
        <td>Distance charge (${km} km @ ~38 PKR/km)</td>
        <td>PKR ${Math.round(distanceFare)}</td>
      </tr>
      ${waitMins > 0 ? `<tr><td>Waiting time (${waitMins} mins)</td><td>PKR ${Math.round(waitFare)}</td></tr>` : ''}
      ${nightSurcharge > 0 ? `<tr><td>Night time surcharge (25%)</td><td>PKR ${Math.round(nightSurcharge)}</td></tr>` : ''}
    </table>
    <div class="bargain-tip">
      <strong>Lahori Bargaining Tip:</strong> Start by politely quoting <strong>PKR ${minFair}</strong>. Drivers on Ring Road or Canal Road during peak traffic (5 PM - 8 PM) may ask closer to PKR ${maxFair}.
    </div>
  `;
}

calculateBtn.addEventListener('click', calculateFare);
distanceInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') calculateFare();
});
