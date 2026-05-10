# Paid Ads — KPIs, SOPs, Tools & Automation
## Department: 06 | Employee: Paid Media Strategist

---

## KPI Dashboard

### Primary KPIs (checked daily)

| KPI | Target | Kill Threshold | Scale Trigger |
|---|---|---|---|
| ROAS | ≥ 3.0 | < 1.5 for 3 days → kill | ≥ 3.0 for 3 days → +20% budget |
| CPM | ≤ $25 | > $40 → check creative/audience | N/A |
| CTR (link) | ≥ 1.2% | < 0.6% for 5 days → kill | N/A |
| CPC | ≤ $1.50 | > $3.00 → restructure | N/A |
| CAC | ≤ $28 | > $45 → pause scaling | N/A |
| Ad frequency | ≤ 3.0 | > 3.5 → refresh creative | N/A |

### Secondary KPIs (checked weekly)

| KPI | Target | Source |
|---|---|---|
| LP CVR from paid traffic | ≥ 2.5% | GA4 + UTM |
| Cold traffic → warm retargetable (video viewers, site visitors) | Growing pool weekly | Meta Audiences |
| Cost per landing page view | ≤ $0.80 | Meta Ads Manager |
| Revenue per $1 spent | ≥ $3.00 (ROAS) | Ads Manager |
| Creative winner hit rate | ≥ 1 new winner per month | Creative testing log |

---

## Priority Hierarchy

```
P1 — Revenue hemorrhage (ROAS < 1.0 on active campaign, spend is live, cash losing)
     → Pause campaigns immediately. Investigate. Notify founder.

P2 — Drop launch (new campaign must go live on drop day with correct assets and targeting)
     → Campaign build complete 48h before launch. Never day-of launch.

P3 — Creative refresh (winning creative fatiguing — frequency > 3.0)
     → Brief creative direction immediately. Rotation takes 5–7 days.

P4 — Ongoing optimization (scaling winners, killing losers, testing new creatives)
     → Daily. Systematic. Never skipped.

P5 — Reporting and documentation
     → Weekly. Builds institutional knowledge over time.
```

---

## Decision-Making Framework

### The Optimization Decision Tree

```
Check ROAS:
  < 1.5 for 3 days → KILL ad set immediately
  1.5–2.5 for 5 days → Investigate (creative? audience? LP?)
  2.5–3.0 → Maintain, don't scale yet
  3.0+ for 3 days → Scale +20% budget
  3.0+ for 7 days → Scale +30% budget

Check CPM:
  > $40 → Creative may be poor quality OR audience too small
  $25–40 → Acceptable. Watch trend.
  < $25 → Good. If CTR is also healthy, prioritize this ad set.

Check CTR:
  < 0.6% → Creative not connecting. Refresh hook or format.
  0.6–1.2% → Average. Test new hook.
  > 1.2% → Strong. Protect this creative.

Check Frequency:
  > 3.0 → Creative fatigue. Schedule fresh creative within 7 days.
  > 4.0 → Creative fatigue severe. Pause until new creative ready.
```

---

## SOPs

### SOP-ADS-01: New Campaign Launch

```
PRE-LAUNCH (minimum 48h before):
1. Complete campaign brief template (workflows/campaign-brief.md)
2. Confirm creative assets approved by Creative Direction
3. Confirm copy approved by Copywriting
4. Verify landing page is live and UTM-tagged
5. Set up campaign structure in Ads Manager:
   - Campaign: CBO (Cost Cap or Lowest Cost)
   - Ad sets: per allocation model (Cold broad / Cold LLA / Warm / Hot)
   - Ads: 3 creatives per ad set minimum

LAUNCH:
6. Publish campaign
7. Set calendar reminder for Day 3 performance review
8. Log campaign in tracking sheet: name, objective, budget, launch date

DAY 3 CHECK:
9. Pull ROAS per ad set
10. If no ad set above break-even (1.0 ROAS) → investigate creative/audience
11. If any ad set above 3.0 → flag for potential early scale

WEEKLY REVIEW:
12. Follow optimization decision tree
13. Kill underperformers, scale winners, refresh fatiguing creatives
```

---

### SOP-ADS-02: Drop Campaign Launch Protocol

```
D-7 (7 days before drop):
→ Brief Creative Direction on drop-specific ad creative (if needed)
→ Brief Copywriting on drop-specific copy angles (urgency, identity)
→ Confirm landing page will be ready (liaise with CRO and TikTok Growth)

D-3:
→ Receive creative assets and copy
→ Build campaign in Ads Manager — DO NOT PUBLISH YET
→ Set all targeting, budgets, bidding

D-1:
→ Final QA: all assets, copy, targeting, destination URL confirmed
→ Pixel confirmed firing on LP
→ Set campaign to "Start at scheduled time" for drop day AM

DROP DAY:
→ Verify campaign went live (check at 8:05am)
→ Increase hot retargeting budget by 2x immediately
→ Monitor first 3 hours closely: ROAS, CTR, LP CVR
→ Optimize same-day if anything is underperforming severely

DROP DAY +1:
→ If stock remaining: maintain campaign, reduce budget slightly
→ If sold out: pause cold/warm campaigns, run "Next drop waitlist" if applicable
```

---

## Recommended Tools

| Tool | Purpose | Priority |
|---|---|---|
| **Meta Ads Manager** | Campaign management, reporting | Essential |
| **Google Analytics 4** | UTM attribution, LP performance | Essential |
| **Triple Whale / Northbeam** | Multi-touch attribution, blended ROAS | High |
| **Meta Pixel Helper** | Chrome extension — verify pixel firing | Essential |
| **Looker Studio** | Custom dashboard connecting Meta + GA4 + Shopify | High |
| **TikTok Ads Manager** | TikTok paid campaign management | High |
| **Varos** | Benchmark ROAS/CPM against industry | Medium |
| **MadgicX / Revealbot** | Automated rules for budget scaling | Medium |
| **Airtable** | Campaign tracking, creative log | Medium |

---

## Automation Opportunities

| Automation | Tool | Trigger | Impact |
|---|---|---|---|
| ROAS < 1.5 for 3 days → auto-pause campaign | Revealbot / Meta rules | Threshold breach | Stop cash burn automatically |
| ROAS ≥ 3.0 for 3 days → alert to scale | Revealbot + Slack | Threshold hit | Scale faster |
| Frequency > 3.5 → pause creative, alert | Meta automated rules | Frequency check | Reduce fatigue automatically |
| Weekly performance data → auto-report to Notion | Zapier + Meta API | Every Sunday | Save reporting time |
| New product live on Shopify → trigger drop campaign checklist | Shopify webhook + Notion | Product published | Never miss a launch |
| Pixel stops firing → immediate alert | Meta Pixel monitoring | Pixel health check | Catch tracking gaps fast |
