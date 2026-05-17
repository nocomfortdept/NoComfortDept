'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');
const { route, broadcast, scoreKeywords } = require('../departments/routing/router');

const app = express();
const PORT = 3000;
const ROOT = path.join(__dirname, '..');
const TASKS_FILE = path.join(__dirname, 'tasks.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ─── TASKS PERSISTENCE ────────────────────────────────────────────────────────

function loadTasks() {
  if (!fs.existsSync(TASKS_FILE)) return [];
  try { return JSON.parse(fs.readFileSync(TASKS_FILE, 'utf8')); }
  catch { return []; }
}

function saveTasks(tasks) {
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

// ─── DEPARTMENT METADATA ──────────────────────────────────────────────────────

const DEPARTMENTS = [
  {
    id: 'brand-strategy',
    folder: '01-brand-strategy',
    label: 'Brand Strategy',
    lead: 'Brand Strategist',
    emoji: '◆',
    color: '#b8973a',
    north_star: 'Brand Voice Consistency ≥ 8.5/10',
    kpis: [
      { name: 'Voice Consistency Score', target: '≥ 8.5/10', unit: '/10', key: 'voice_score' },
      { name: 'Calibration Response Time', target: '< 4h', unit: 'h', key: 'response_time' },
      { name: 'Brand Pulse Memos Sent', target: 'Weekly', unit: '/wk', key: 'memos' },
      { name: 'Cross-Dept Audits Done', target: '1/week', unit: '/wk', key: 'audits' },
    ],
  },
  {
    id: 'copywriting',
    folder: '02-copywriting',
    label: 'Copywriting',
    lead: 'Head Copywriter',
    emoji: '✍',
    color: '#c0c0c0',
    north_star: 'ATC Rate ≥ 8%',
    kpis: [
      { name: 'ATC Rate', target: '≥ 8%', unit: '%', key: 'atc_rate' },
      { name: 'Email CTR', target: '≥ 3.5%', unit: '%', key: 'email_ctr' },
      { name: 'Ad CTR', target: '≥ 1.2%', unit: '%', key: 'ad_ctr' },
      { name: 'Brief Turnaround', target: '≤ 24h', unit: 'h', key: 'turnaround' },
    ],
  },
  {
    id: 'shopify-cro',
    folder: '03-shopify-cro',
    label: 'Shopify CRO',
    lead: 'CRO Specialist',
    emoji: '⬡',
    color: '#4a9eff',
    north_star: 'Store CVR ≥ 2.5%',
    kpis: [
      { name: 'Store CVR', target: '≥ 2.5%', unit: '%', key: 'store_cvr' },
      { name: 'ATC Rate', target: '≥ 8%', unit: '%', key: 'atc_rate' },
      { name: 'Checkout Completion', target: '≥ 60%', unit: '%', key: 'checkout_completion' },
      { name: 'Mobile LCP', target: '≤ 2.5s', unit: 's', key: 'lcp' },
    ],
  },
  {
    id: 'tiktok-growth',
    folder: '04-tiktok-growth',
    label: 'TikTok Growth',
    lead: 'TikTok Creative Director',
    emoji: '▲',
    color: '#ff4757',
    north_star: 'Avg Views ≥ 25K',
    kpis: [
      { name: 'Avg Video Views', target: '≥ 25K', unit: 'K', key: 'avg_views' },
      { name: 'Link Click Rate', target: '≥ 15%', unit: '%', key: 'link_click_rate' },
      { name: 'LP CVR (TikTok)', target: '≥ 3%', unit: '%', key: 'lp_cvr' },
      { name: '3s Retention Rate', target: '≥ 40%', unit: '%', key: 'retention_3s' },
    ],
  },
  {
    id: 'creative-direction',
    folder: '05-creative-direction',
    label: 'Creative Direction',
    lead: 'Creative Director',
    emoji: '◈',
    color: '#a855f7',
    north_star: 'First-Pass Approval ≥ 80%',
    kpis: [
      { name: 'Asset First-Pass Approval', target: '≥ 80%', unit: '%', key: 'approval_rate' },
      { name: 'Brief-to-Asset Turnaround', target: '≤ 5 days', unit: 'd', key: 'turnaround' },
      { name: 'Avg Revision Rounds', target: '≤ 1.5', unit: 'rds', key: 'revision_rounds' },
      { name: 'TikTok Videos Reviewed', target: '100%', unit: '%', key: 'tt_reviewed' },
    ],
  },
  {
    id: 'paid-ads',
    folder: '06-paid-ads',
    label: 'Paid Ads',
    lead: 'Paid Media Strategist',
    emoji: '◉',
    color: '#ff8c00',
    north_star: 'ROAS ≥ 3.0',
    kpis: [
      { name: 'ROAS', target: '≥ 3.0', unit: 'x', key: 'roas' },
      { name: 'CAC', target: '≤ $28', unit: '$', key: 'cac' },
      { name: 'Ad Frequency', target: '≤ 3.0', unit: 'x', key: 'frequency' },
      { name: 'CTR (Link)', target: '≥ 1.2%', unit: '%', key: 'ctr' },
    ],
  },
  {
    id: 'retention-email',
    folder: '07-retention-email',
    label: 'Retention & Email',
    lead: 'Retention Strategist',
    emoji: '⟳',
    color: '#2ed573',
    north_star: 'RPR ≥ $0.80',
    kpis: [
      { name: 'Revenue per Recipient', target: '≥ $0.80', unit: '$', key: 'rpr' },
      { name: 'Email Open Rate', target: '≥ 35%', unit: '%', key: 'open_rate' },
      { name: 'Cart Recovery Rate', target: '≥ 12%', unit: '%', key: 'recovery_rate' },
      { name: 'Repeat Purchase Rate', target: '≥ 25%', unit: '%', key: 'repeat_rate' },
    ],
  },
];

// ─── API: DEPARTMENTS ─────────────────────────────────────────────────────────

app.get('/api/departments', (req, res) => {
  res.json(DEPARTMENTS);
});

// ─── API: ROUTER ──────────────────────────────────────────────────────────────

app.post('/api/route', (req, res) => {
  const { task } = req.body;
  if (!task || !task.trim()) return res.status(400).json({ error: 'Task required' });

  const result = route(task.trim());
  const scores = scoreKeywords(task.toLowerCase().trim());

  const enriched = DEPARTMENTS.map(dept => ({
    ...dept,
    score: scores[dept.id] || 0,
    is_primary: dept.id === result.primary_department,
    is_collaborator: result.collaborating_departments.includes(dept.id),
  })).sort((a, b) => b.score - a.score);

  res.json({ ...result, department_scores: enriched });
});

// ─── API: TASKS ───────────────────────────────────────────────────────────────

app.get('/api/tasks', (req, res) => {
  res.json(loadTasks());
});

app.post('/api/tasks', (req, res) => {
  const { title, department, priority, notes, routed_from } = req.body;
  if (!title || !department) return res.status(400).json({ error: 'title and department required' });

  const tasks = loadTasks();
  const task = {
    id: Date.now().toString(),
    title,
    department,
    priority: priority || 'P4',
    status: 'pending',
    notes: notes || '',
    routed_from: routed_from || null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  tasks.unshift(task);
  saveTasks(tasks);
  res.json(task);
});

app.patch('/api/tasks/:id', (req, res) => {
  const tasks = loadTasks();
  const idx = tasks.findIndex(t => t.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Task not found' });

  tasks[idx] = { ...tasks[idx], ...req.body, updated_at: new Date().toISOString() };
  saveTasks(tasks);
  res.json(tasks[idx]);
});

app.delete('/api/tasks/:id', (req, res) => {
  const tasks = loadTasks();
  const filtered = tasks.filter(t => t.id !== req.params.id);
  saveTasks(filtered);
  res.json({ ok: true });
});

// ─── API: FILE READER (for autopilot / doc viewer) ───────────────────────────

app.get('/api/file', (req, res) => {
  const rel = req.query.path;
  if (!rel) return res.status(400).json({ error: 'path required' });

  // Restrict to departments/ directory only
  const abs = path.resolve(ROOT, rel);
  if (!abs.startsWith(path.resolve(ROOT, 'departments'))) {
    return res.status(403).json({ error: 'Access denied' });
  }

  if (!fs.existsSync(abs)) return res.status(404).json({ error: 'File not found' });
  res.json({ content: fs.readFileSync(abs, 'utf8'), path: rel });
});

// ─── API: KPI UPDATE ─────────────────────────────────────────────────────────

const KPI_FILE = path.join(__dirname, 'kpi-data.json');

function loadKPIs() {
  if (!fs.existsSync(KPI_FILE)) return {};
  try { return JSON.parse(fs.readFileSync(KPI_FILE, 'utf8')); }
  catch { return {}; }
}

function saveKPIs(data) {
  fs.writeFileSync(KPI_FILE, JSON.stringify(data, null, 2));
}

app.get('/api/kpis', (req, res) => {
  res.json(loadKPIs());
});

app.post('/api/kpis/:deptId', (req, res) => {
  const kpis = loadKPIs();
  kpis[req.params.deptId] = { ...kpis[req.params.deptId], ...req.body, updated_at: new Date().toISOString() };
  saveKPIs(kpis);
  res.json(kpis[req.params.deptId]);
});

// ─── START ────────────────────────────────────────────────────────────────────

const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`\n  NCD Dashboard running at http://${HOST}:${PORT}\n`);
});
