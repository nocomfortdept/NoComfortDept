# Workflow: Win-Back Campaign
## Department: Retention & Email

Use this when running a targeted re-engagement campaign outside of automated flows.

---

## When to Run a Win-Back Campaign

- Lapsed segment is > 15% of total list
- A major drop is launching and you want maximum reach
- 90+ days since last brand-wide campaign
- Before Q4 / holiday period

---

## Win-Back Campaign Structure

### Email 1 — Re-introduction (send to At-Risk + Lapsed)
```
Subject: "We kept building."
Preheader: "A lot happened while you were gone."

Body:
[From retention: subject + preheader]
[Body copy: 02-copywriting win-back template]

CTA: Current drop or collection
Segment: NCD-AtRisk + NCD-Lapsed
```

### Email 2 — What's New (send only to opens from Email 1)
```
Subject: "Drop [#] is different."
Preheader: "[Key differentiator] — here's why."

Body:
[Brief on specific drop highlight]
[Social proof — review or community pull]
[Unit count + CTA]

Segment: Opened Email 1 AND has not purchased
Send: 3 days after Email 1
```

### Email 3 — Last Chance (final send to non-opens from Email 1)
```
Subject: "Last one from us."
Preheader: "We respect your inbox too much to keep emailing."

Body:
[Honest, minimal — "If now's not the time, no problem."]
[One link, one CTA]
[Soft unsubscribe suggestion — show we respect their choice]

Segment: Did NOT open Email 1 AND has not purchased
Send: 7 days after Email 1
Action: After this email — if no open — move to suppression review
```

---

## Post-Campaign Actions

After win-back campaign completes:

1. Pull open rate, click rate, and conversion rate per email
2. Segment those who re-engaged (opened or clicked) → move back to Active
3. Segment those who didn't open Email 1 or 3 → flag for suppression
4. Suppress flagged profiles from future campaigns (keep in flows)
5. Log results in `docs/flow-library.md`

---

## Suppression Decision

**Suppress if:**
- Did not open any of the 3 win-back emails
- Last open > 120 days ago
- Appears in hard bounce list

**Do not suppress if:**
- Opened Email 1 but did not click — they're still reading
- Has purchased but not engaged with email recently
