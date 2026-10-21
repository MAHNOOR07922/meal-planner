const unitsInput = document.getElementById('units-consumed');
const categorySelect = document.getElementById('consumer-category');
const fpaInput = document.getElementById('fpa-rate');
const calculateBtn = document.getElementById('calculate-btn');
const resultEl = document.getElementById('result');

function calculateLescoBill() {
  const units = parseFloat(unitsInput.value);
  const isProtected = categorySelect.value === 'protected';
  const fpaPerUnit = parseFloat(fpaInput.value) || 0;

  if (isNaN(units) || units <= 0) {
    resultEl.hidden = false;
    resultEl.classList.add('error');
    resultEl.textContent = 'Please enter valid monthly consumed units.';
    return;
  }

  // Base tariff calculation
  let costOfElectricity = 0;
  let activeRateDesc = '';

  if (isProtected && units <= 200) {
    if (units <= 50) {
      costOfElectricity = units * 3.95;
      activeRateDesc = 'Lifeline slab (1-50 units @ 3.95 PKR)';
    } else if (units <= 100) {
      costOfElectricity = 50 * 3.95 + (units - 50) * 7.74;
      activeRateDesc = 'Protected slab (51-100 units @ 7.74 PKR)';
    } else {
      costOfElectricity = 100 * 7.74 + (units - 100) * 10.06;
      activeRateDesc = 'Protected slab (101-200 units @ 10.06 PKR)';
    }
  } else {
    // Unprotected slabs
    if (units <= 100) {
      costOfElectricity = units * 16.48;
      activeRateDesc = 'Unprotected (1-100 units @ 16.48 PKR)';
    } else if (units <= 200) {
      costOfElectricity = units * 22.95;
      activeRateDesc = 'Unprotected (101-200 units @ 22.95 PKR)';
    } else if (units <= 300) {
      costOfElectricity = units * 27.14;
      activeRateDesc = 'Unprotected (201-300 units @ 27.14 PKR)';
    } else if (units <= 700) {
      costOfElectricity = units * 35.24;
      activeRateDesc = 'Unprotected (301-700 units @ 35.24 PKR)';
    } else {
      costOfElectricity = units * 42.72;
      activeRateDesc = 'Unprotected (>700 units @ 42.72 PKR)';
    }
  }

  const fpaTotal = units * fpaPerUnit;
  const electricityDuty = costOfElectricity * 0.015; // 1.5% ED
  const tvFee = 35; // Standard 35 PKR PTV fee
  const gst = (costOfElectricity + fpaTotal) * 0.18; // 18% General Sales Tax
  const grandTotal = Math.round(costOfElectricity + fpaTotal + electricityDuty + tvFee + gst);

  resultEl.hidden = false;
  resultEl.classList.remove('error');
  resultEl.innerHTML = `
    <div>Estimated Total Bill: <strong>PKR ${grandTotal.toLocaleString()}</strong></div>
    <div class="slab-indicator">${activeRateDesc}</div>
    <table class="bill-breakdown-list">
      <tr>
        <td>Cost of Electricity (${units} units)</td>
        <td>PKR ${Math.round(costOfElectricity).toLocaleString()}</td>
      </tr>
      <tr>
        <td>Fuel Price Adjustment (FPA)</td>
        <td>PKR ${Math.round(fpaTotal).toLocaleString()}</td>
      </tr>
      <tr>
        <td>Electricity Duty (1.5%)</td>
        <td>PKR ${Math.round(electricityDuty).toLocaleString()}</td>
      </tr>
      <tr>
        <td>General Sales Tax (18% GST)</td>
        <td>PKR ${Math.round(gst).toLocaleString()}</td>
      </tr>
      <tr>
        <td>PTV / License Fee</td>
        <td>PKR ${tvFee}</td>
      </tr>
    </table>
  `;
}

calculateBtn.addEventListener('click', calculateLescoBill);
