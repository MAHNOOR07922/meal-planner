// scripts/home.js — Loads tools.json and dynamically renders cards

document.addEventListener('DOMContentLoaded', async () => {
  const toolsContainer = document.getElementById('tools-grid');
  const searchInput = document.getElementById('search-input');
  const countEl = document.getElementById('tools-count');

  if (!toolsContainer) return;

  let tools = [];

  try {
    const res = await fetch('tools.json');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    tools = await res.json();
  } catch (err) {
    toolsContainer.innerHTML = `
      <div class="card result error" style="grid-column: 1 / -1;">
        <strong>Could not load tools.json</strong>
        <p class="muted" style="margin-top: 6px;">
          If opening locally via file://, browser security blocks fetch. Please run with Live Server or a local HTTP server.
        </p>
      </div>
    `;
    console.error('Failed to load tools.json:', err);
    return;
  }

  // Validate tools list
  const validTools = tools.filter((t, i) => {
    if (!t.name || !t.description || !t.student || !t.path) {
      console.warn(`[tools.json validation warning] Entry index ${i} is missing one or more required fields (name, description, student, path):`, t);
      return false;
    }
    return true;
  });

  // Sort alphabetically by tool name
  validTools.sort((a, b) => a.name.localeCompare(b.name));

  function render(filterQuery = '') {
    const query = filterQuery.toLowerCase().trim();
    const filtered = validTools.filter(t => 
      t.name.toLowerCase().includes(query) ||
      t.description.toLowerCase().includes(query) ||
      t.student.toLowerCase().includes(query)
    );

    if (countEl) {
      countEl.textContent = `${filtered.length} ${filtered.length === 1 ? 'tool' : 'tools'} available`;
    }

    if (filtered.length === 0) {
      toolsContainer.innerHTML = `
        <div class="card" style="grid-column: 1 / -1; text-align: center; padding: 40px 20px;">
          <h3 style="margin-bottom: 8px;">No tools found matching "${filterQuery}"</h3>
          <p class="muted">Check spelling or search for another keyword like "chai", "bill", or "zakat".</p>
        </div>
      `;
      return;
    }

    toolsContainer.innerHTML = filtered.map(tool => `
      <div class="card tool-card">
        <div class="tool-meta">
          <span class="student-author">Built by ${escapeHtml(tool.student)}</span>
        </div>
        <h3 class="tool-title">${escapeHtml(tool.name)}</h3>
        <p class="tool-desc muted">${escapeHtml(tool.description)}</p>
        <div class="tool-footer">
          <a href="${escapeHtml(tool.path)}" class="btn">Open tool &rarr;</a>
        </div>
      </div>
    `).join('');
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[m]);
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => render(e.target.value));
  }

  render();
});
