const cashInput = document.getElementById('cash-amount');
const goldInput = document.getElementById('gold-amount');
const silverInput = document.getElementById('silver-amount');
const bizInput = document.getElementById('biz-amount');
const debtInput = document.getElementById('debt-amount');
const nisabInput = document.getElementById('nisab-threshold');
const calculateBtn = document.getElementById('calculate-btn');
const resultEl = document.getElementById('result');

function calculateZakat() {
  const cash = parseFloat(cashInput.value) || 0;
  const gold = parseFloat(goldInput.value) || 0;
  const silver = parseFloat(silverInput.value) || 0;
  const biz = parseFloat(bizInput.value) || 0;
  const debts = parseFloat(debtInput.value) || 0;
  const nisab = parseFloat(nisabInput.value) || 135000;

  const grossAssets = cash + gold + silver + biz;
  const netZakatable = Math.max(0, grossAssets - debts);

  resultEl.hidden = false;
  resultEl.classList.remove('error');

  if (netZakatable >= nisab) {
    const zakatDue = Math.round(netZakatable * 0.025);
    resultEl.innerHTML = `
      <div class="eligible-banner">
        &check; Nisab Threshold Met — Zakat Obligation Due
      </div>
      <div>Total Zakat to Pay: <strong>PKR ${zakatDue.toLocaleString()}</strong></div>
      <p class="muted" style="margin-top: 4px;">Calculated strictly at 2.5% (1/40th) of net qualifying wealth held for one lunar year.</p>
      
      <table class="zakat-summary-table">
        <tr>
          <td>Total Qualifying Assets</td>
          <td>PKR ${grossAssets.toLocaleString()}</td>
        </tr>
        <tr>
          <td>Less: Deductible Immediate Debts</td>
          <td>- PKR ${debts.toLocaleString()}</td>
        </tr>
        <tr>
          <td>Net Zakatable Wealth</td>
          <td>PKR ${netZakatable.toLocaleString()}</td>
        </tr>
        <tr>
          <td>Current Nisab Benchmark</td>
          <td>PKR ${nisab.toLocaleString()}</td>
        </tr>
      </table>
    `;
  } else {
    resultEl.innerHTML = `
      <div class="ineligible-banner">
        Notice: Net zakatable wealth (PKR ${netZakatable.toLocaleString()}) is below current Nisab threshold (PKR ${nisab.toLocaleString()}).
      </div>
      <div>Zakat Due: <strong>PKR 0</strong></div>
      <p class="muted" style="margin-top: 6px;">
        Zakat is only obligatory when net assets equal or surpass the Nisab value and have been retained for a full Hawl (lunar year). Optional voluntary charity (Sadaqah) may always be given.
      </p>
    `;
  }
}

calculateBtn.addEventListener('click', calculateZakat);
