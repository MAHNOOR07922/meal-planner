import { ToolEntry } from '../types';

export const TOOLS_DATA: ToolEntry[] = [
  {
    id: 'bill-splitter',
    name: 'Bill Splitter',
    description: 'Split a restaurant bill, tax, and tip fairly among friends with custom rounding.',
    student: 'Instructor',
    path: 'students/instructor/',
    category: 'Finance',
    tags: ['Restaurant', 'Dining', 'Expenses', 'Tip'],
    features: ['Custom tip percentage', 'Per-person itemized share', 'Round-up to nearest 10 PKR option', 'Summary breakdown table'],
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bill Splitter — Lahore Toolbox</title>
  <link rel="stylesheet" href="../../styles/shared.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <a href="../../index.html" class="back-link">&larr; Back to all tools</a>

    <div class="card">
      <div class="tool-header">
        <h1>Bill Splitter</h1>
        <p class="muted">Split food bills, service charges, and tips smoothly among friends.</p>
      </div>

      <div class="form-group">
        <label for="bill-amount">Total Bill Amount (PKR)</label>
        <input type="number" id="bill-amount" class="input" placeholder="e.g. 4800" min="0" step="10">
      </div>

      <div class="form-group">
        <label for="num-people">Number of People</label>
        <input type="number" id="num-people" class="input" value="4" min="1" max="50">
      </div>

      <div class="form-group">
        <label for="tip-select">Tip / Service Percentage</label>
        <select id="tip-select" class="input">
          <option value="0">0% (No tip)</option>
          <option value="5">5% (Casual café)</option>
          <option value="10" selected>10% (Standard service)</option>
          <option value="15">15% (Great service)</option>
          <option value="20">20% (Exceptional)</option>
        </select>
      </div>

      <div class="form-group checkbox-group">
        <label class="checkbox-label">
          <input type="checkbox" id="round-up" checked>
          <span>Round up each person's share to nearest 10 PKR</span>
        </label>
      </div>

      <button id="calculate-btn" class="btn">Calculate Share</button>

      <div id="result" class="result" hidden></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
    cssCode: `/* Custom styles for Bill Splitter */
.tool-header {
  margin-bottom: 24px;
}

.checkbox-group {
  margin-top: 8px;
  margin-bottom: 24px;
}

.checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
  color: var(--color-text-secondary);
}

.checkbox-label input[type="checkbox"] {
  width: 17px;
  height: 17px;
  accent-color: var(--color-accent);
  cursor: pointer;
}

.breakdown-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px dashed var(--color-border);
}

.breakdown-item {
  font-size: 13px;
  color: var(--color-muted);
}

.breakdown-item strong {
  display: block;
  font-size: 15px;
  color: var(--color-text);
  font-family: var(--font-family-mono);
}`,
    jsCode: `const billInput = document.getElementById('bill-amount');
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
  resultEl.innerHTML = \`
    <div>Each person pays: <strong>PKR \${perPerson.toLocaleString()}</strong></div>
    <div class="breakdown-grid">
      <div class="breakdown-item">
        Subtotal
        <strong>PKR \${bill.toLocaleString()}</strong>
      </div>
      <div class="breakdown-item">
        Tip (\${tipPercent}%)
        <strong>PKR \${tipTotal.toLocaleString()}</strong>
      </div>
      <div class="breakdown-item">
        Grand Total
        <strong>PKR \${grandTotal.toLocaleString()}</strong>
      </div>
      <div class="breakdown-item">
        Split Between
        <strong>\${people} \${people === 1 ? 'person' : 'people'}</strong>
      </div>
    </div>
  \`;
}

calculateBtn.addEventListener('click', calculate);`
  },
  {
    id: 'chai-calculator',
    name: 'Chai Calculator',
    description: 'Work out exact milk, water, Patti tea leaves, and sugar ratios for any number of guests.',
    student: 'Ayesha Khan',
    path: 'students/ayesha-khan/',
    category: 'Food & Life',
    tags: ['Chai', 'Tea', 'Lahore Culture', 'Cooking', 'Hospitality'],
    features: ['Karak / Doodh Patti / Light styles', 'Custom sugar sweetness slider', 'Cardamom & ginger measurements', 'Authentic tossing method tip'],
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chai Calculator — Lahore Toolbox</title>
  <link rel="stylesheet" href="../../styles/shared.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <a href="../../index.html" class="back-link">&larr; Back to all tools</a>

    <div class="card">
      <div class="tool-header">
        <h1>Chai Calculator</h1>
        <p class="muted">Calculate exact Karak Doodh Patti ingredients for your guests.</p>
      </div>

      <div class="form-group">
        <label for="guest-count">Number of Chai Cups</label>
        <input type="number" id="guest-count" class="input" value="4" min="1" max="100">
      </div>

      <div class="form-group">
        <label for="chai-style">Tea Style</label>
        <select id="chai-style" class="input">
          <option value="karak">Karak Chai (Traditional Lahore café style, 60% milk)</option>
          <option value="doodh-patti">Pure Doodh Patti (Rich & creamy, 90% milk)</option>
          <option value="light">Subtle Light Chai (50% water, 50% milk)</option>
        </select>
      </div>

      <div class="form-group">
        <label for="sweetness">Sweetness Level</label>
        <select id="sweetness" class="input">
          <option value="0">Sugar-free (Phiki)</option>
          <option value="0.75">Kam Meethi (0.75 tsp per cup)</option>
          <option value="1.5" selected>Standard (1.5 tsp per cup)</option>
          <option value="2.5">Tezz Meethi (2.5 tsp per cup)</option>
        </select>
      </div>

      <button id="calculate-btn" class="btn">Calculate Recipe</button>

      <div id="result" class="result" hidden></div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>`,
    cssCode: `.ingredient-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px dashed var(--color-border);
}

.ingredient-card {
  background: #ffffff;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
}

.ingredient-name {
  font-size: 13px;
  color: var(--color-muted);
}

.ingredient-qty {
  font-size: 16px;
  font-weight: 700;
  font-family: var(--font-family-mono);
  color: var(--color-accent);
}

.tip-box {
  margin-top: 16px;
  padding: 12px 14px;
  background-color: var(--color-accent-subtle);
  border-radius: var(--radius-sm);
  font-size: 13px;
  color: var(--color-accent-text);
  line-height: 1.5;
}`,
    jsCode: `const guestInput = document.getElementById('guest-count');
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
    milkMl = Math.round(totalVolume * 0.5);
    waterMl = Math.round(totalVolume * 0.5);
  }

  resultEl.hidden = false;
  resultEl.classList.remove('error');
  resultEl.innerHTML = \`
    <div>Ingredients for <strong>\${cups} cups of chai</strong>:</div>
    <div class="ingredient-list">
      <div class="ingredient-card">
        <div class="ingredient-name">Fresh Milk</div>
        <div class="ingredient-qty">\${milkMl} ml (\${(milkMl / 250).toFixed(1)} cups)</div>
      </div>
      <div class="ingredient-card">
        <div class="ingredient-name">Water</div>
        <div class="ingredient-qty">\${waterMl} ml (\${(waterMl / 250).toFixed(1)} cups)</div>
      </div>
      <div class="ingredient-card">
        <div class="ingredient-name">Danedar Tea Leaves (Patti)</div>
        <div class="ingredient-qty">\${pattiTbsp} tbsp</div>
      </div>
      <div class="ingredient-card">
        <div class="ingredient-name">White Sugar</div>
        <div class="ingredient-qty">\${sugarPerCup === 0 ? 'None' : totalSugar + ' tsp'}</div>
      </div>
    </div>
  \`;
}

calculateBtn.addEventListener('click', calculateChai);`
  },
  {
    id: 'rickshaw-fare',
    name: 'Rickshaw Fare Estimator',
    description: 'Estimate realistic auto rickshaw fare by distance across Lahore with day/night rates.',
    student: 'Bilal Ahmed',
    path: 'students/bilal-ahmed/',
    category: 'Daily Life',
    tags: ['Transport', 'Rickshaw', 'Lahore Roads', 'Bargaining', 'Commute'],
    features: ['Distance in km', 'Day vs 25% Late-night rate', 'Wait time tariff', 'Popular landmark presets (Gulberg, Liberty, Anarkali)'],
    htmlCode: `<!-- Bilal Ahmed: Rickshaw Fare Estimator HTML -->`,
    cssCode: `/* Bilal Ahmed: Rickshaw Fare Estimator CSS */`,
    jsCode: `// Bilal Ahmed: Rickshaw Fare Estimator JS`
  },
  {
    id: 'zakat-calculator',
    name: 'Zakat Calculator',
    description: 'Calculate annual 2.5% Zakat obligation across cash savings, gold, silver and trade assets against current Nisab.',
    student: 'Fatima Noor',
    path: 'students/fatima-noor/',
    category: 'Finance',
    tags: ['Zakat', 'Charity', 'Islamic Finance', 'Savings', 'Nisab'],
    features: ['Gold & Silver valuation', 'Cash & bank balance assets', 'Deductible short-term liabilities', 'Automatic Nisab eligibility check'],
    htmlCode: `<!-- Fatima Noor: Zakat Calculator HTML -->`,
    cssCode: `/* Fatima Noor: Zakat Calculator CSS */`,
    jsCode: `// Fatima Noor: Zakat Calculator JS`
  },
  {
    id: 'electricity-bill',
    name: 'Electricity Bill Estimator',
    description: 'Estimate monthly LESCO electricity bill with slab tariffs, fuel adjustment surcharge, and duties.',
    student: 'Usman Tariq',
    path: 'students/usman-tariq/',
    category: 'Utility',
    tags: ['Electricity', 'LESCO', 'Power Bill', 'Taxes', 'Slabs'],
    features: ['Protected vs unprotected slabs', 'Fuel Price Adjustment (FPA)', 'General Sales Tax (18%) and ED duty', 'Tiered unit calculator'],
    htmlCode: `<!-- Usman Tariq: Electricity Bill HTML -->`,
    cssCode: `/* Usman Tariq: Electricity Bill CSS */`,
    jsCode: `// Usman Tariq: Electricity Bill JS`
  },
  {
    id: 'eid-countdown',
    name: 'Countdown to Eid / Any Date',
    description: 'Live real-time countdown tracker for Eid-ul-Fitr, Eid-ul-Adha, Pakistan Day or custom milestones.',
    student: 'Zainab Ali',
    path: 'students/zainab-ali/',
    category: 'Daily Life',
    tags: ['Countdown', 'Eid', 'Clock', 'Celebration', 'Timer'],
    features: ['Ticking days, hours, mins, secs', 'Pre-configured Islamic & national holiday dates', 'Custom event date picker', 'Live arrival celebration'],
    htmlCode: `<!-- Zainab Ali: Countdown HTML -->`,
    cssCode: `/* Zainab Ali: Countdown CSS */`,
    jsCode: `// Zainab Ali: Countdown JS`
  },
  {
    id: 'grocery-budget',
    name: 'Grocery Budget Tracker',
    description: 'Track bazaar vegetable and kitchen shopping expenses against your target household budget.',
    student: 'Hamza Sheikh',
    path: 'students/hamza-sheikh/',
    category: 'Finance',
    tags: ['Groceries', 'Budget', 'Bazaar', 'Tracker', 'Shopping'],
    features: ['Live spending progress bar', 'Add/delete grocery items', 'Remaining budget alerts', 'Itemized receipt list'],
    htmlCode: `<!-- Hamza Sheikh: Grocery Budget HTML -->`,
    cssCode: `/* Hamza Sheikh: Grocery Budget CSS */`,
    jsCode: `// Hamza Sheikh: Grocery Budget JS`
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate body mass index and healthy weight range for height and weight in metric or imperial units.',
    student: 'Sara Malik',
    path: 'students/sara-malik/',
    category: 'Health & Math',
    tags: ['Health', 'Fitness', 'BMI', 'Weight', 'Wellness'],
    features: ['Instant BMI computation', 'Underweight/Normal/Overweight categorization', 'Ideal weight recommendations', 'Clear numerical results'],
    htmlCode: `<!-- Sara Malik: BMI Calculator HTML -->`,
    cssCode: `/* Sara Malik: BMI Calculator CSS */`,
    jsCode: `// Sara Malik: BMI Calculator JS`
  }
];

export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: 'Clone the Repository',
    summary: 'Pull down the shared project repo to your local machine.',
    cmd: 'git clone https://github.com/AIPoweredWebDevClass/lahore-toolbox.git\ncd lahore-toolbox',
    tip: 'Make sure git is installed. Run git --version in your terminal.'
  },
  {
    step: 2,
    title: 'Create Your Personal Branch',
    summary: 'Branch names must be lowercase letters and dashes only, no spaces.',
    cmd: 'git checkout -b ayesha-khan',
    tip: 'Using your name makes it effortless for the instructor to review your pull request.'
  },
  {
    step: 3,
    title: 'Copy the Starter Template',
    summary: 'Duplicate students/_template into your own folder named students/<your-name>.',
    cmdMac: 'cp -r students/_template students/ayesha-khan',
    cmdWin: 'Copy-Item -Recurse students/_template students/ayesha-khan',
    tip: 'In VS Code: right-click _template -> Copy, right-click students -> Paste, then rename.'
  },
  {
    step: 4,
    title: 'Build Your Tool',
    summary: 'Edit your index.html, style.css, and script.js using shared styles.',
    cmd: '# Edit the 3 files in students/<your-name>/ only!',
    tip: 'Use shared classes: .container, .card, .btn, .input, .result, .muted, and .back-link.'
  },
  {
    step: 5,
    title: 'Register in tools.json (Mind the Commas!)',
    summary: 'Add exactly one single-line JSON entry to tools.json.',
    cmd: '{ "name": "Chai Calculator", "description": "Work out how much chai to make for any number of guests.", "student": "Ayesha Khan", "path": "students/ayesha-khan/" }',
    tip: 'Every entry except the last needs a comma after its closing }. Keep it on one line.'
  },
  {
    step: 6,
    title: 'Commit, Push & Open Pull Request',
    summary: 'Submit your branch to GitHub and run automated verification checks.',
    cmd: 'git add students/ayesha-khan tools.json\ngit commit -m "Add Chai Calculator"\ngit push -u origin ayesha-khan',
    tip: 'Click "Compare & pull request" on GitHub. The "Check tools.json" test will run automatically.'
  },
  {
    step: 7,
    title: 'Verify Netlify Deploy Preview',
    summary: 'Test your live tool on the deploy preview URL generated in PR comments.',
    cmd: '# Click Netlify deploy preview link in PR discussion',
    tip: 'Test search, verify "Open tool" works, and test the "← Back to all tools" navigation.'
  }
];
