'use strict';

// ─── STATE ────────────────────────────────────────────────────────────────────

const state = {
  departments: [],
  tasks: [],
  kpis: {},
  activeView: 'overview',
  activeDept: null,
  lastRouteResult: null,
  editingTaskId: null,
  filterDept: '',
  filterPriority: '',
};

// ─── API ──────────────────────────────────────────────────────────────────────

const api = {
  async get(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error(await r.text());
    return r.json();
  },
  async post(url, body) {
    const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (!r.ok) throw new Error(await r.text());
    return r.json();
  },
  async patch(url, body) {
    const r = await fetch(url, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (!r.ok) throw new Error(await r.text());
    return r.json();
  },
  async delete(url) {
    const r = await fetch(url, { method: 'DELETE' });
    if (!r.ok) throw new Error(await r.text());
    return r.json();
  },
};

// ─── INIT ─────────────────────────────────────────────────────────────────────

async function init() {
  const [departments, tasks, kpis] = await Promise.all([
    api.get('/api/departments'),
    api.get('/api/tasks'),
    api.get('/api/kpis'),
  ]);
  state.departments = departments;
  state.tasks = tasks;
  state.kpis = kpis;

  renderSidebar();
  renderDeptGrid();
  populateDeptSelects();
  bindGlobalEvents();
  showView('overview');
}

// ─── SIDEBAR ─────────────────────────────────────────────────────────────────

function renderSidebar() {
  const nav = document.getElementById('dept-nav');
  nav.innerHTML = state.departments.map(dept => {
    const count = state.tasks.filter(t => t.department === dept.id && t.status !== 'done').length;
    return `
      <button class="dept-nav-item" data-dept="${dept.id}" style="--dept-color:${dept.color}">
        <span class="dept-nav-icon">${dept.emoji}</span>
        <span class="dept-nav-label">${dept.label}</span>
        ${count > 0 ? `<span class="dept-nav-count">${count}</span>` : ''}
      </button>`;
  }).join('');

  nav.querySelectorAll('.dept-nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const dept = state.departments.find(d => d.id === btn.dataset.dept);
      showDeptDetail(dept);
    });
  });
}

// ─── DEPT OVERVIEW GRID ───────────────────────────────────────────────────────

function renderDeptGrid() {
  const grid = document.getElementById('dept-grid');
  grid.innerHTML = state.departments.map(dept => {
    const deptKpis = state.kpis[dept.id] || {};
    const activeTasks = state.tasks.filter(t => t.department === dept.id && t.status !== 'done');
    const kpiHtml = dept.kpis.slice(0, 4).map(kpi => {
      const val = deptKpis[kpi.key];
      return `
        <div class="kpi-mini">
          <div class="kpi-mini-name">${kpi.name}</div>
          <div class="kpi-mini-target">${kpi.target}</div>
          ${val != null
            ? `<div class="kpi-mini-value ${kpiColor(val, kpi)}">${val}${kpi.unit}</div>`
            : `<div class="kpi-mini-value empty">— not set</div>`}
        </div>`;
    }).join('');

    return `
      <div class="dept-card" data-dept="${dept.id}" style="--dept-color:${dept.color}">
        <div class="dept-card-header">
          <div class="dept-card-icon">${dept.emoji}</div>
          <div>
            <div class="dept-card-name">${dept.label}</div>
            <div class="dept-card-lead">${dept.lead}</div>
          </div>
        </div>
        <div class="dept-card-north-star">★ ${dept.north_star}</div>
        <div class="dept-card-kpis">${kpiHtml}</div>
        <div class="dept-card-footer">
          <div class="task-count-badge">
            <span>${activeTasks.length}</span> active task${activeTasks.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.dept-card').forEach(card => {
    card.addEventListener('click', () => {
      const dept = state.departments.find(d => d.id === card.dataset.dept);
      showDeptDetail(dept);
    });
  });
}

function kpiColor(val, kpi) {
  // Simple heuristic: parse number from val and target string
  const num = parseFloat(String(val));
  const target = kpi.target;
  if (isNaN(num)) return '';

  const isGte = target.includes('≥');
  const isLte = target.includes('≤');
  const targetNum = parseFloat(target.replace(/[^0-9.]/g, ''));
  if (isNaN(targetNum)) return '';

  if (isGte) return num >= targetNum ? 'green' : num >= targetNum * 0.75 ? 'yellow' : 'red';
  if (isLte) return num <= targetNum ? 'green' : num <= targetNum * 1.25 ? 'yellow' : 'red';
  return '';
}

// ─── DEPARTMENT DETAIL ────────────────────────────────────────────────────────

function showDeptDetail(dept) {
  state.activeDept = dept;

  // Update sidebar active state
  document.querySelectorAll('.dept-nav-item').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const navItem = document.querySelector(`.dept-nav-item[data-dept="${dept.id}"]`);
  if (navItem) navItem.classList.add('active');

  setTopbarTitle(dept.label);
  renderDeptDetailView(dept);
  showView('department');
}

function renderDeptDetailView(dept) {
  const deptKpis = state.kpis[dept.id] || {};
  const deptTasks = state.tasks.filter(t => t.department === dept.id);
  const activeTasks = deptTasks.filter(t => t.status !== 'done');

  const kpiCards = dept.kpis.map(kpi => {
    const val = deptKpis[kpi.key];
    return `
      <div class="kpi-card">
        <div class="kpi-card-header">
          <span class="kpi-card-name">${kpi.name}</span>
          <span class="kpi-card-target">Target: ${kpi.target}</span>
        </div>
        <div class="kpi-card-value ${val != null ? kpiColor(val, kpi) : 'empty'}">
          ${val != null ? `${val}${kpi.unit}` : '— not set'}
        </div>
        <div class="kpi-input-row">
          <input class="kpi-input" type="number" step="any" placeholder="Enter value" data-kpi="${kpi.key}" value="${val != null ? val : ''}">
          <button class="btn-xs" data-save-kpi="${kpi.key}" data-dept="${dept.id}">Save</button>
        </div>
      </div>`;
  }).join('');

  const docs = [
    { label: 'Autopilot', path: `departments/${dept.folder}/operations/autopilot.md` },
    { label: 'Daily Schedule', path: `departments/${dept.folder}/operations/daily-weekly-schedule.md` },
    { label: 'KPIs & SOPs', path: `departments/${dept.folder}/operations/kpis-sops-tools.md` || `departments/${dept.folder}/operations/kpis-and-deliverables.md` },
    { label: 'System Prompt', path: `departments/${dept.folder}/system-prompt.md` },
    { label: 'Role Definition', path: `departments/${dept.folder}/role-definition.json` },
  ];

  const taskListHtml = activeTasks.length === 0
    ? `<div class="empty-state">No active tasks. <a href="#" class="add-task-link" data-dept="${dept.id}">Add one →</a></div>`
    : activeTasks.map(t => taskCardHtml(t, dept)).join('');

  const detail = document.getElementById('dept-detail');
  detail.style.setProperty('--dept-color', dept.color);
  detail.innerHTML = `
    <div class="dept-detail-header">
      <div class="dept-detail-icon">${dept.emoji}</div>
      <div class="dept-detail-info">
        <div class="dept-detail-name">${dept.label}</div>
        <div class="dept-detail-lead">${dept.lead}</div>
        <div class="dept-detail-north-star">★ ${dept.north_star}</div>
      </div>
      <div class="dept-detail-actions">
        <button class="btn-ghost" id="dept-add-task-btn" data-dept="${dept.id}">+ Task</button>
      </div>
    </div>

    <div class="section-title">KPI Dashboard</div>
    <div class="dept-detail-grid">${kpiCards}</div>

    <div class="dept-docs-section">
      <div class="section-title">Reference Docs</div>
      <div class="doc-links">
        ${docs.map(d => `
          <button class="doc-link-btn" data-path="${d.path}">
            <span>${d.label}</span>
            <span class="file-type">.${d.path.split('.').pop()}</span>
          </button>`).join('')}
      </div>
    </div>

    <div class="dept-tasks-section">
      <div class="section-title">Active Tasks (${activeTasks.length})</div>
      <div class="dept-task-list">${taskListHtml}</div>
    </div>`;

  // KPI save buttons
  detail.querySelectorAll('[data-save-kpi]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const key = btn.dataset.saveKpi;
      const input = detail.querySelector(`[data-kpi="${key}"]`);
      const val = parseFloat(input.value);
      if (isNaN(val)) return;
      await api.post(`/api/kpis/${dept.id}`, { [key]: val });
      state.kpis[dept.id] = state.kpis[dept.id] || {};
      state.kpis[dept.id][key] = val;
      renderDeptDetailView(dept);
      renderDeptGrid();
    });
  });

  // Doc viewer
  detail.querySelectorAll('.doc-link-btn').forEach(btn => {
    btn.addEventListener('click', () => openDocViewer(btn.dataset.path));
  });

  // Add task
  const addBtn = detail.querySelector('#dept-add-task-btn');
  if (addBtn) addBtn.addEventListener('click', () => openNewTaskModal(dept.id));

  const addLink = detail.querySelector('.add-task-link');
  if (addLink) addLink.addEventListener('click', e => { e.preventDefault(); openNewTaskModal(dept.id); });

  // Task card clicks
  detail.querySelectorAll('.task-card').forEach(card => {
    card.addEventListener('click', () => openTaskModal(card.dataset.taskId));
  });
}

function taskCardHtml(task, dept) {
  return `
    <div class="task-card" data-task-id="${task.id}" style="--dept-color:${dept ? dept.color : '#888'}">
      <div class="task-card-priority priority-${task.priority}">${task.priority}</div>
      <div class="task-card-title">${escHtml(task.title)}</div>
      <div class="task-card-dept">
        ${dept ? `<span class="task-card-dept-icon">${dept.emoji}</span>` : ''}
        <span>${dept ? dept.label : task.department}</span>
        <span style="margin-left:auto;color:var(--text-muted);font-size:10px">${statusLabel(task.status)}</span>
      </div>
    </div>`;
}

function statusLabel(s) {
  return { pending: 'Pending', 'in-progress': 'In Progress', review: 'Review', done: 'Done' }[s] || s;
}

// ─── ROUTE VIEW ───────────────────────────────────────────────────────────────

function initRouteView() {
  const btn = document.getElementById('route-btn');
  const input = document.getElementById('route-input');

  btn.addEventListener('click', runRoute);
  input.addEventListener('keydown', e => { if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) runRoute(); });

  document.getElementById('route-assign-btn').addEventListener('click', assignRoutedTask);
}

async function runRoute() {
  const task = document.getElementById('route-input').value.trim();
  if (!task) return;

  const result = await api.post('/api/route', { task });
  state.lastRouteResult = result;

  const resultEl = document.getElementById('route-result');
  resultEl.classList.remove('hidden');

  // Primary badge
  const primaryDept = state.departments.find(d => d.id === result.primary_department);
  const badge = document.getElementById('route-primary-badge');
  badge.style.setProperty('--dept-color', primaryDept?.color || '#b8973a');
  badge.style.cssText = `background:${primaryDept?.color}22;border-color:${primaryDept?.color};color:${primaryDept?.color};font-size:13px;font-weight:700;padding:6px 14px;border-radius:4px;border:1px solid`;
  badge.textContent = `${primaryDept?.emoji || '◆'} ${primaryDept?.label || result.primary_department}`;

  const meta = document.getElementById('route-meta');
  const collabStr = result.collaborating_departments.length > 0
    ? `Collaborators: ${result.collaborating_departments.map(id => {
        const d = state.departments.find(x => x.id === id);
        return d ? `${d.emoji} ${d.label}` : id;
      }).join(' · ')}`
    : 'No cross-department collaboration needed';
  meta.innerHTML = `<strong>${result.primary_lead}</strong> owns this task<br><span style="color:var(--text-muted)">${collabStr}</span>`;

  // Scores
  const maxScore = Math.max(...result.department_scores.map(d => d.score), 1);
  const scoresEl = document.getElementById('route-scores');
  scoresEl.innerHTML = result.department_scores.map(d => {
    const cls = d.is_primary ? 'primary' : d.is_collaborator ? 'collaborator' : d.score === 0 ? 'zero' : '';
    const dept = state.departments.find(x => x.id === d.id);
    const pct = Math.round((d.score / maxScore) * 100);
    return `
      <div class="route-score-item ${cls}" style="--dept-color:${dept?.color || '#888'}">
        <span class="route-score-icon">${dept?.emoji || '◆'}</span>
        <span class="route-score-label">${dept?.label || d.id}</span>
        <div class="route-score-bar-wrap"><div class="route-score-bar" style="width:${pct}%;background:${dept?.color || '#888'}"></div></div>
        <span class="route-score-num">${d.score}</span>
      </div>`;
  }).join('');

  // Workflow
  const workflowEl = document.getElementById('route-workflow');
  if (result.workflow) {
    workflowEl.classList.remove('hidden');
    workflowEl.innerHTML = `<strong style="color:var(--text)">Workflow triggered:</strong> ${result.workflow}<br>
      <span style="color:var(--text-muted);font-family:var(--font-mono);font-size:11px">${result.instructions.join('<br>')}</span>`;
  } else {
    workflowEl.classList.add('hidden');
    workflowEl.innerHTML = `<span style="color:var(--text-muted);font-family:var(--font-mono);font-size:11px">${result.instructions.join('<br>')}</span>`;
    workflowEl.classList.remove('hidden');
  }

  // Pre-select correct dept in assign select
  document.getElementById('route-priority-select').value = 'P4';
}

async function assignRoutedTask() {
  if (!state.lastRouteResult) return;
  const title = state.lastRouteResult.task;
  const department = state.lastRouteResult.primary_department;
  const priority = document.getElementById('route-priority-select').value;
  const notes = state.lastRouteResult.instructions.join('\n');

  const task = await api.post('/api/tasks', { title, department, priority, notes, routed_from: 'router' });
  state.tasks.unshift(task);
  renderSidebar();
  renderDeptGrid();
  renderBoard();

  // Flash confirm
  const btn = document.getElementById('route-assign-btn');
  btn.textContent = 'Task Assigned ✓';
  btn.style.background = 'var(--green)';
  setTimeout(() => { btn.textContent = 'Assign to Department'; btn.style.background = ''; }, 2000);
}

// ─── TASK BOARD ───────────────────────────────────────────────────────────────

function renderBoard() {
  const deptFilter = state.filterDept;
  const priorityFilter = state.filterPriority;

  let tasks = state.tasks;
  if (deptFilter) tasks = tasks.filter(t => t.department === deptFilter);
  if (priorityFilter) tasks = tasks.filter(t => t.priority === priorityFilter);

  const statuses = ['pending', 'in-progress', 'review', 'done'];
  statuses.forEach(status => {
    const col = document.querySelector(`.kanban-cards[data-status="${status}"]`);
    const filtered = tasks.filter(t => t.status === status);
    col.innerHTML = filtered.length === 0
      ? `<div class="empty-state">—</div>`
      : filtered.map(t => {
          const dept = state.departments.find(d => d.id === t.department);
          return taskCardHtml(t, dept);
        }).join('');
    col.querySelectorAll('.task-card').forEach(card => {
      card.addEventListener('click', () => openTaskModal(card.dataset.taskId));
    });
  });
}

// ─── TASK MODAL ───────────────────────────────────────────────────────────────

function openTaskModal(taskId) {
  const task = state.tasks.find(t => t.id === taskId);
  if (!task) return;
  state.editingTaskId = taskId;

  const dept = state.departments.find(d => d.id === task.department);

  const badge = document.getElementById('task-modal-dept-badge');
  badge.style.cssText = `color:${dept?.color || '#888'};font-size:12px;font-weight:600`;
  badge.textContent = `${dept?.emoji || '◆'} ${dept?.label || task.department}`;

  document.getElementById('task-modal-title').textContent = task.title;
  document.getElementById('task-modal-meta').textContent =
    `Created ${fmtDate(task.created_at)} · Routed via ${task.routed_from || 'manual'} · ${task.priority}`;
  document.getElementById('task-status-select').value = task.status;
  document.getElementById('task-priority-edit').value = task.priority;
  document.getElementById('task-modal-notes').textContent = task.notes || '—';

  document.getElementById('task-modal-overlay').classList.remove('hidden');
}

async function saveTask() {
  const id = state.editingTaskId;
  if (!id) return;
  const status = document.getElementById('task-status-select').value;
  const priority = document.getElementById('task-priority-edit').value;
  const updated = await api.patch(`/api/tasks/${id}`, { status, priority });
  const idx = state.tasks.findIndex(t => t.id === id);
  if (idx !== -1) state.tasks[idx] = updated;
  closeTaskModal();
  refreshAfterTaskChange();
}

async function deleteTask() {
  const id = state.editingTaskId;
  if (!id) return;
  if (!confirm('Delete this task?')) return;
  await api.delete(`/api/tasks/${id}`);
  state.tasks = state.tasks.filter(t => t.id !== id);
  closeTaskModal();
  refreshAfterTaskChange();
}

function closeTaskModal() {
  document.getElementById('task-modal-overlay').classList.add('hidden');
  state.editingTaskId = null;
}

// ─── NEW TASK MODAL ───────────────────────────────────────────────────────────

function openNewTaskModal(deptId) {
  document.getElementById('task-title').value = '';
  document.getElementById('task-notes').value = '';
  document.getElementById('task-priority').value = 'P4';
  if (deptId) document.getElementById('task-dept').value = deptId;
  document.getElementById('modal-overlay').classList.remove('hidden');
}

async function createTask() {
  const title = document.getElementById('task-title').value.trim();
  const department = document.getElementById('task-dept').value;
  const priority = document.getElementById('task-priority').value;
  const notes = document.getElementById('task-notes').value.trim();
  if (!title || !department) return;

  const task = await api.post('/api/tasks', { title, department, priority, notes });
  state.tasks.unshift(task);
  document.getElementById('modal-overlay').classList.add('hidden');
  refreshAfterTaskChange();
}

function refreshAfterTaskChange() {
  renderSidebar();
  renderDeptGrid();
  renderBoard();
  if (state.activeDept) renderDeptDetailView(state.activeDept);
}

// ─── DOC VIEWER ───────────────────────────────────────────────────────────────

async function openDocViewer(filePath) {
  try {
    const { content, path: p } = await api.get(`/api/file?path=${encodeURIComponent(filePath)}`);
    document.getElementById('doc-modal-title').textContent = p;
    document.getElementById('doc-modal-content').textContent = content;
    document.getElementById('doc-modal-overlay').classList.remove('hidden');
  } catch {
    alert('File not found: ' + filePath);
  }
}

// ─── POPULATE SELECTS ────────────────────────────────────────────────────────

function populateDeptSelects() {
  const selects = [document.getElementById('task-dept'), document.getElementById('filter-dept')];
  state.departments.forEach(dept => {
    selects.forEach(sel => {
      if (!sel) return;
      const opt = document.createElement('option');
      opt.value = dept.id;
      opt.textContent = `${dept.emoji} ${dept.label}`;
      sel.appendChild(opt);
    });
  });
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────

function showView(viewName) {
  state.activeView = viewName;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${viewName}`).classList.add('active');

  if (viewName !== 'department') {
    state.activeDept = null;
    document.querySelectorAll('.dept-nav-item').forEach(b => b.classList.remove('active'));
  }

  if (viewName === 'board') renderBoard();
}

function setTopbarTitle(title) {
  document.getElementById('topbar-title').textContent = title;
}

// ─── GLOBAL EVENTS ───────────────────────────────────────────────────────────

function bindGlobalEvents() {
  // Sidebar nav buttons
  document.getElementById('btn-board').addEventListener('click', () => {
    setTopbarTitle('Task Board');
    showView('board');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-board').classList.add('active');
  });

  document.getElementById('btn-route').addEventListener('click', () => {
    setTopbarTitle('Route a Task');
    showView('route');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-route').classList.add('active');
    initRouteView();
  });

  // New task modal
  document.getElementById('new-task-btn').addEventListener('click', () => openNewTaskModal());
  document.getElementById('modal-close').addEventListener('click', () => document.getElementById('modal-overlay').classList.add('hidden'));
  document.getElementById('modal-cancel').addEventListener('click', () => document.getElementById('modal-overlay').classList.add('hidden'));
  document.getElementById('modal-save').addEventListener('click', createTask);

  // Task modal
  document.getElementById('task-modal-close').addEventListener('click', closeTaskModal);
  document.getElementById('task-save-btn').addEventListener('click', saveTask);
  document.getElementById('task-delete-btn').addEventListener('click', deleteTask);

  // Doc modal
  document.getElementById('doc-modal-close').addEventListener('click', () => {
    document.getElementById('doc-modal-overlay').classList.add('hidden');
  });

  // Click outside modals to close
  ['modal-overlay', 'task-modal-overlay', 'doc-modal-overlay'].forEach(id => {
    document.getElementById(id).addEventListener('click', function(e) {
      if (e.target === this) this.classList.add('hidden');
    });
  });

  // Board filters
  document.getElementById('filter-dept').addEventListener('change', e => {
    state.filterDept = e.target.value;
    renderBoard();
  });
  document.getElementById('filter-priority').addEventListener('change', e => {
    state.filterPriority = e.target.value;
    renderBoard();
  });

  // Logo → overview
  document.getElementById('logo').addEventListener('click', () => {
    setTopbarTitle('Overview');
    showView('overview');
    document.querySelectorAll('.nav-btn, .dept-nav-item').forEach(b => b.classList.remove('active'));
  });
  document.getElementById('logo').style.cursor = 'pointer';
}

// ─── UTILS ────────────────────────────────────────────────────────────────────

function escHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function fmtDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

// ─── BOOT ─────────────────────────────────────────────────────────────────────

init().catch(err => {
  document.body.innerHTML = `<div style="padding:40px;color:#e74c3c;font-family:monospace">Failed to load: ${err.message}<br><br>Make sure the server is running: <strong>npm run dashboard</strong></div>`;
});
