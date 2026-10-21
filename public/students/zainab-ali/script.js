const presetSelect = document.getElementById('event-preset');
const customGroup = document.getElementById('custom-date-group');
const customDateInput = document.getElementById('custom-date');
const daysEl = document.getElementById('days-val');
const hoursEl = document.getElementById('hours-val');
const minsEl = document.getElementById('mins-val');
const secsEl = document.getElementById('secs-val');
const statusEl = document.getElementById('countdown-status');

let targetTimestamp = new Date(presetSelect.value).getTime();

// Default custom date to 30 days from now
const defaultCustom = new Date(Date.now() + 30 * 86400000);
customDateInput.value = defaultCustom.toISOString().slice(0, 16);

presetSelect.addEventListener('change', () => {
  if (presetSelect.value === 'custom') {
    customGroup.style.display = 'block';
    targetTimestamp = new Date(customDateInput.value).getTime();
  } else {
    customGroup.style.display = 'none';
    targetTimestamp = new Date(presetSelect.value).getTime();
  }
  updateCountdown();
});

customDateInput.addEventListener('change', () => {
  targetTimestamp = new Date(customDateInput.value).getTime();
  updateCountdown();
});

function updateCountdown() {
  const now = Date.now();
  const diff = targetTimestamp - now;

  if (isNaN(diff)) {
    statusEl.textContent = 'Please choose a valid target date.';
    return;
  }

  if (diff <= 0) {
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minsEl.textContent = '00';
    secsEl.textContent = '00';
    statusEl.innerHTML = '<strong style="color: var(--color-success)">The event has arrived! Mubarak!</strong>';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minsEl.textContent = String(minutes).padStart(2, '0');
  secsEl.textContent = String(seconds).padStart(2, '0');

  const selectedText = presetSelect.options[presetSelect.selectedIndex].text;
  statusEl.textContent = `Counting down to ${selectedText}...`;
}

// Tick every second
setInterval(updateCountdown, 1000);
updateCountdown();
