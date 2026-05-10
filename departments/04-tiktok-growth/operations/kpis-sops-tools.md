# TikTok Growth — KPIs, SOPs, Tools & Automation
## Department: 04 | Employee: TikTok Creative Director

---

## KPI Dashboard

### Primary KPIs (checked daily)

| KPI | Target | Alert Threshold | Source |
|---|---|---|---|
| Average views per video | ≥ 25K | < 5K for 3 consecutive videos | TikTok Analytics |
| Link-in-bio click rate (from profile visits) | ≥ 15% | < 8% | TikTok Analytics |
| TikTok → Shopify CVR (on LP) | ≥ 3.0% | < 1.5% (LP or offer issue) | GA4 + UTM |
| Watch time percentage | ≥ 40% avg completion | < 20% (hook is failing) | TikTok Analytics |
| Follower growth | ≥ 500/week | < 100/week (3 consecutive weeks) | TikTok Analytics |

### Secondary KPIs (checked weekly)

| KPI | Target | Source |
|---|---|---|
| Profile visits from content | ≥ 2,000/week | TikTok Analytics |
| TikTok-attributed revenue (UTM) | Growing MoM | GA4 + Shopify |
| Comment engagement rate | ≥ 3% of views | TikTok Analytics |
| Share rate | ≥ 1% of views (strong content) | TikTok Analytics |
| Drop-week link clicks | ≥ 2x normal weekly average | TikTok Analytics |
| Top-performing hook identification | 1 new hook formula validated/week | Hook-vault |

---

## Priority Hierarchy

```
P1 — Drop-day content (launch video must go live at scheduled time, LP must be live)
     → Nothing takes priority on drop day. Content posts on schedule.

P2 — Hook performance crisis (3+ consecutive videos under 5K views)
     → Pause scheduled content. Analyze and rebuild hook strategy.

P3 — Drop-week content calendar (content must be planned 5+ days before drop)
     → Schedule is locked by EOD Thursday of the prior week.

P4 — Standard weekly content (5–7 videos per week)
     → Maintain cadence. Never let the account go silent for > 36 hours.

P5 — Analytics review and hook-vault updates
     → Friday EOD. Non-negotiable but not urgent.
```

---

## Decision-Making Framework

### Hook Decision Matrix

For any new hook format or trend:

| Question | Yes → | No → |
|---|---|---|
| Does it stop the scroll without context? | Keep evaluating | Kill it |
| Does it fit one of the 4 content pillars? | Keep evaluating | Needs brand approval |
| Would a high-standard man feel called out by it? | Keep evaluating | Rewrite or kill |
| Is the audio/style consistent with NCD aesthetic? | Proceed | Get brand approval first |
| Does it have a clear reason to click the link? | Proceed | Add before posting |

### Trend Approval Decision

Before using any trending audio or format:

1. Play the audio in full — does it conflict with NCD's brand voice or aesthetic?
2. What creator type is using this trend? (Fitness/self-improvement → likely yes. Pop/dance → likely no.)
3. Is the trend peaking or dying? (Only jump on rising or peak trends — not declining)
4. Can NCD use this trend in a way that feels NCD-native, not trend-chasing?

If yes to all → proceed without approval.
If uncertain → brief Brand Strategy within 2 hours.

---

## SOPs

### SOP-TT-01: Weekly Content Batch Workflow

```
MONDAY:
1. Pull last week's performance. Identify top hook type and top pillar.
2. Load campaign narrative from Brand Strategy.
3. Plan 5–7 videos. Assign pillar to each:
   - 2–3 Product Truth
   - 2 Identity Mirror
   - 1–2 Drop Mechanics (if drop week) or evergreen
   - 0–1 Social Proof
4. Write hooks for each video (5 options per video → pick best).
5. Confirm creative assets are available or request from Creative Direction.

TUESDAY:
6. Film or direct filming. Following Visual Standards doc.
7. Edit or brief editor. Color grade: crushed blacks, single accent.
8. Write final captions from hook-writing workflow.
9. Add UTM to all relevant links.

WEDNESDAY:
10. Schedule videos in TikTok scheduler (or manual posting at optimal times).
11. Confirm link-in-bio is correct and LP is live.
12. Brief paid ads if any video is being amplified.

FRIDAY:
13. Pull analytics for week. Log in performance table.
14. Update hook-vault with any new top performers.
```

---

### SOP-TT-02: Drop Launch Content Protocol

```
D-7 (7 days before):
→ Post "Something is dropping." video. No product details. Tension only.
→ Comments: reply to speculation but don't confirm details.

D-3:
→ Post behind-the-scenes or fabric teaser. Confirm something is coming.
→ Caption: "[#] days. That's all we'll say."

D-1:
→ Post hero shot or dramatic product reveal. No price. No "buy now."
→ Caption: "Tomorrow."

DROP DAY (AM — 8am):
→ Post drop announcement video. Product shown. Price stated. Unit count stated.
→ Caption: "Drop 5 is live. [#] units. Link in bio."
→ Link-in-bio: update to LP with UTM.
→ Monitor every 30 min for first 3 hours.

DROP DAY (PM or when 50% sold):
→ Post stock update: "X units left."
→ This post alone typically converts last-minute hesitators.

SOLD OUT:
→ Post within 4 hours of sellout: "Gone. Archive."
→ Start waitlist content for next drop.
```

---

## Recommended Tools

| Tool | Purpose | Priority |
|---|---|---|
| **TikTok Creator Studio** | Analytics, scheduling, post management | Essential |
| **CapCut** | Fast mobile-first editing, TikTok-native | Essential |
| **Adobe Premiere Pro** | Professional edits for brand-quality content | High |
| **Notion** | Content calendar, hook-vault, brief tracking | High |
| **Later / Buffer** | Cross-platform scheduling if needed | Medium |
| **Loox / Stamped** | Pull UGC from customers for social proof content | Medium |
| **Canva** | Quick text overlay graphics for TikTok | Medium |
| **ManyChat** | Auto-reply to comments with link (DM automation) | Medium-high |
| **Sprout Social** | Cross-channel analytics including TikTok | Low |

---

## Automation Opportunities

| Automation | Tool | Trigger | Impact |
|---|---|---|---|
| Comment keyword → DM with LP link | ManyChat | User comments "link" or "where to buy" | Drives traffic without manual effort |
| New video published → log in Notion content calendar | Zapier + TikTok API | Post published | Auto-tracking |
| Video hits 50K views → alert team | TikTok API + Zapier + Slack | View milestone | Capitalize on viral moments |
| Weekly analytics summary → auto-report | TikTok Analytics export + Notion | Every Sunday midnight | Save manual reporting time |
| Drop day reminder → auto-send LP check to CRO | Notion + Slack | 24h before drop | LP always live on time |

### ManyChat Setup (High-Value Automation)

Configure ManyChat on TikTok:
- Keyword trigger: "link" / "where" / "buy" / "drop"
- Auto-DM: "Hey [name] — here's the link to Drop [#]: [LP URL with UTM]"
- This converts comment interest into direct traffic without requiring the viewer to navigate to bio
