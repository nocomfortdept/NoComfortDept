# Copywriting — KPIs, Deliverables, SOPs & Tools
## Department: 02 | Employee: Head Copywriter

---

## KPI Dashboard

### Primary KPIs

| KPI | Target | Source | Frequency |
|---|---|---|---|
| Product page add-to-cart rate | ≥ 8% | Shopify Analytics | Weekly |
| Email click rate | ≥ 3.5% | Klaviyo | Per send |
| Ad CTR (link click) | ≥ 1.2% | Meta Ads Manager | Weekly |
| TikTok caption engagement rate | ≥ 5% | TikTok Analytics | Weekly |
| Brand voice pass rate (first submission) | ≥ 90% | Calibration memo log | Weekly |
| Copy turnaround time (P1 requests) | < 4 hours | Request log | Per request |

### Secondary KPIs

| KPI | Target | Source |
|---|---|---|
| Abandoned cart email recovery rate | ≥ 12% | Klaviyo |
| Copy A/B test win rate | > 50% (at least as good as control) | CRO test log |
| Subject line open rate | ≥ 35% | Klaviyo |
| Ad primary text ROAS correlation | Positive (better copy = better ROAS) | Ads Manager |

---

## Deliverables

### Recurring Deliverables

| Deliverable | Frequency | Recipient | Turnaround |
|---|---|---|---|
| Product descriptions + taglines | Per product/drop | Shopify CRO | 48h from brief receipt |
| Ad primary text + headline | Per campaign | Paid Ads | 24h from brief |
| TikTok captions (week's batch) | Weekly (Wednesday) | TikTok Growth | Wednesday EOD |
| Email body copy | Per flow/campaign | Retention & Email | 48h from flow structure |
| Homepage/collection copy updates | Per season/drop | Shopify CRO | 72h from brief |
| Copy-vault update | Weekly (Friday) | Self / all depts | Friday EOD |
| Headline-bank update | Weekly (Friday) | Self / all depts | Friday EOD |

---

## Standard Operating Procedures

### SOP-CW-01: Product Copy Workflow

**Trigger:** New product needs copy. Brief received from founder or relevant department.

```
STEP 1 — Brief intake (5 min)
  Confirm: product name, category, specs (weight, fabric, construction),
  colorway, drop number, price, inventory qty, campaign narrative angle

STEP 2 — Copy-vault check (3 min)
  Open docs/copy-vault.md
  Is there pre-written copy for this product type?
  If yes → adapt rather than write from scratch

STEP 3 — Tagline (15 min)
  Write 3 options. Apply formula: [Spec] + [Identity implication]
  Choose strongest. Archive the other 2.

STEP 4 — Description (20 min)
  Sentence 1: Material/construction spec
  Sentences 2–3: Structural quality signal + identity statement
  Sentences 4–5: Differentiator + earned close
  Run cut test: remove every word that doesn't earn its place

STEP 5 — Features list (5 min)
  5 pipe-delimited specs for Shopify metafield
  Factual only. No adjectives without a spec behind them.

STEP 6 — Brand voice audit (5 min)
  Check against 8-point brand checklist
  Any fail → rewrite before submitting

STEP 7 — Deliver
  Format: COPY DELIVERABLE template
  Send to: Shopify CRO for implementation + Brand Strategy for approval

STEP 8 — Archive
  Add all copy to docs/copy-vault.md in correct category
```

---

### SOP-CW-02: Ad Copy Workflow

**Trigger:** Paid Ads sends ad creative brief (`departments/06-paid-ads/workflows/campaign-brief.md`)

```
STEP 1 — Read brief fully (5 min)
  Confirm: campaign objective, audience temperature (cold/warm/hot),
  product, visual format, platform, key angle

STEP 2 — Select angle by audience temperature
  Cold → identity or quality-spec angle
  Warm → objection-handling angle
  Hot → urgency angle (factual — units, price, time)

STEP 3 — Write to format specs (20 min)
  Meta static: 125-char primary text + 40-char headline + 30-char description
  Video: script framework (0:00–0:30 structure)
  Each word must serve the single conversion goal of the ad

STEP 4 — Write A/B variant (10 min)
  Alternate the lead angle — different hook, same close
  Makes testing possible without full creative rebuild

STEP 5 — Deliver (5 min)
  Format: AD COPY DELIVERABLE template
  Include: primary, headline, description, CTA + A/B variant
  Send to: Paid Ads

STEP 6 — Archive
  Add to docs/copy-vault.md under Ad Copy section
```

---

### SOP-CW-03: Email Copy Workflow

**Trigger:** Retention sends flow structure (trigger, email sequence, subject lines they've written)

```
STEP 1 — Receive structure from Retention (5 min)
  Confirm: flow type, email position in sequence, subject line (theirs),
  goal of this email, dynamic variables needed, CTA destination

STEP 2 — Write body copy to NCD email standards (20–30 min per email)
  Rules: < 200 words, one link, no passive voice, ends with statement not question
  Welcome → brand identity first, soft sell second
  Abandoned cart → honest, factual, non-desperate
  Win-back → earned, quiet, respectful of their time

STEP 3 — Audit against brand voice (5 min)
  Check: no banned words, no desperation, no generic "We thought you'd like this"

STEP 4 — Deliver to Retention
  Format: EMAIL COPY DELIVERABLE template
  Send to: Retention & Email for Klaviyo implementation

STEP 5 — Archive
  File in docs/copy-vault.md under Email Copy section
```

---

## Recommended Tools

| Tool | Purpose | Priority |
|---|---|---|
| **Notion** | Copy-vault, headline-bank, brief tracking | Essential |
| **Hemingway App** | Readability check — grade 7 or below is ideal for NCD | High |
| **Grammarly** | Catch passive voice, typos, basic grammar | High |
| **Google Docs** | Draft collaboration on longer pieces | High |
| **Airtable** | Copy request queue tracking + version history | Medium |
| **Copy.ai / Claude** | First-draft acceleration for high-volume requests | Medium |
| **Figma** | Preview copy in context of design (check character count visually) | Low |

---

## Automation Opportunities

| Automation | Tool | Trigger | Impact |
|---|---|---|---|
| Copy request form → auto-logged in queue | Typeform + Notion | Any dept submits brief | No requests lost |
| Copy approved → auto-sent to CRO for implementation | Notion + Zapier | Brand Strategy marks approved | Removes manual handoff |
| A/B test winner declared → auto-archive losing copy | Airtable + Zapier | CRO logs winner | Clean copy-vault |
| Copy-vault weekly digest → auto-sent to all depts | Notion + Zapier | Every Friday | All depts have latest bank |

### What NOT to Automate
- The writing itself (AI drafts are first-drafts only — always human-brand-reviewed)
- Brand voice audit (requires brand framework judgment)
- Tagline selection (requires editorial decision)
