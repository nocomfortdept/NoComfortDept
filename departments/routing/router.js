/**
 * NoComfortDept — Department Task Router
 *
 * Routes incoming task strings to the correct department based on
 * keyword matching, task type classification, and collaboration rules.
 *
 * Usage (Node.js):
 *   const router = require('./router');
 *   const result = router.route('write a product description for the Blackout Hoodie');
 *   console.log(result);
 */

'use strict';

const rules = require('./routing-rules.json');

// ─── PRIMARY ROUTE ────────────────────────────────────────────────────────────

/**
 * Route a task string to one or more departments.
 * Returns a routing result with primary department, collaborators, and workflow.
 */
function route(taskInput) {
  const task = taskInput.toLowerCase().trim();
  const scores = scoreKeywords(task);
  const primary = topDepartment(scores);
  const collab = getCollaborators(task, primary);
  const workflow = getWorkflow(task);

  return {
    task: taskInput,
    primary_department: primary,
    primary_lead: rules.departments[deptFolder(primary)]?.lead || 'Unknown',
    collaborating_departments: collab,
    workflow: workflow,
    scores,
    instructions: buildInstructions(primary, collab, workflow),
  };
}

// ─── MULTI-DEPARTMENT BROADCAST ───────────────────────────────────────────────

/**
 * Broadcast a task to all matching departments above a score threshold.
 */
function broadcast(taskInput, threshold = 1) {
  const task = taskInput.toLowerCase().trim();
  const scores = scoreKeywords(task);

  return Object.entries(scores)
    .filter(([, score]) => score >= threshold)
    .sort(([, a], [, b]) => b - a)
    .map(([dept, score]) => ({
      department: dept,
      score,
      lead: rules.departments[deptFolder(dept)]?.lead,
    }));
}

// ─── SCORING ──────────────────────────────────────────────────────────────────

function scoreKeywords(task) {
  const scores = {};

  Object.entries(rules.keyword_routes).forEach(([dept, keywords]) => {
    scores[dept] = keywords.reduce((acc, kw) => {
      return task.includes(kw.toLowerCase()) ? acc + 1 : acc;
    }, 0);
  });

  return scores;
}

function topDepartment(scores) {
  const top = Object.entries(scores).sort(([, a], [, b]) => b - a)[0];
  // Fall back to brand-strategy if no keyword matched
  return top && top[1] > 0 ? top[0] : rules.escalation_path.unresolved;
}

// ─── COLLABORATION ────────────────────────────────────────────────────────────

function getCollaborators(task, primary) {
  for (const collab of rules.collaboration_rules) {
    if (task.includes(collab.trigger.toLowerCase())) {
      return collab.departments.filter((d) => d !== primary);
    }
  }
  return [];
}

function getWorkflow(task) {
  for (const collab of rules.collaboration_rules) {
    if (task.includes(collab.trigger.toLowerCase())) {
      return collab.workflow;
    }
  }
  return null;
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function deptFolder(deptId) {
  return Object.keys(rules.departments).find(
    (key) => rules.departments[key].id === deptId
  ) || deptId;
}

function buildInstructions(primary, collabs, workflow) {
  const lines = [];
  const folder = deptFolder(primary);
  const lead = rules.departments[folder]?.lead || primary;

  lines.push(`Route to: departments/${folder}/`);
  lines.push(`Lead: ${lead}`);
  lines.push(`Load: departments/${folder}/system-prompt.md`);
  lines.push(`Load: departments/${folder}/role-definition.json`);

  if (workflow) {
    lines.push(`Run workflow: departments/${folder}/workflows/${workflow}.md`);
  }

  if (collabs.length > 0) {
    lines.push(`Collaborate with: ${collabs.join(', ')}`);
    collabs.forEach((c) => {
      const cf = deptFolder(c);
      lines.push(`  → Load: departments/${cf}/system-prompt.md`);
    });
  }

  return lines;
}

// ─── CLI MODE ─────────────────────────────────────────────────────────────────

if (require.main === module) {
  const task = process.argv.slice(2).join(' ');
  if (!task) {
    console.log('Usage: node router.js "your task description here"');
    process.exit(1);
  }

  const result = route(task);
  console.log('\n── NCD TASK ROUTER ──────────────────────────────────');
  console.log('Task:       ', result.task);
  console.log('Department: ', result.primary_department);
  console.log('Lead:       ', result.primary_lead);
  if (result.collaborating_departments.length)
    console.log('Collaborators:', result.collaborating_departments.join(', '));
  if (result.workflow)
    console.log('Workflow:   ', result.workflow);
  console.log('\nInstructions:');
  result.instructions.forEach((l) => console.log(' ', l));
  console.log('─────────────────────────────────────────────────────\n');
}

module.exports = { route, broadcast, scoreKeywords };
