# Brand Strategy — SOPs, Tools & Automation
## Department: 01 | Employee: Brand Strategist

---

## Standard Operating Procedures

### SOP-BS-01: Daily Brand Pulse Check

**Trigger:** Every morning, before any other work.
**Time:** 15 minutes max.

```
1. Open TikTok → review last 24h posts
   Check: hook language, caption voice, visual consistency
   Flag: anything using banned words or off-brand tone

2. Open Klaviyo / email preview
   Check: subject lines, preheaders, body copy tone
   Flag: any copy that sounds generic or desperate

3. Check active paid ads (Meta Ads Manager)
   Check: primary text voice, headline language
   Flag: any discount language or hype-forward copy

4. Open Shopify → product pages updated in last 24h
   Check: new descriptions, new variants, any copy changes
   Flag: anything added without brand approval

5. Log results in daily_pulse_log.txt (one line per channel: PASS / FLAG [detail])
6. Issue calibration memos for any flags before 9:30am
```

---

### SOP-BS-02: Voice Calibration Memo

**Trigger:** Any brand drift identified (any channel, any tier).
**Time:** 10–20 minutes.

```
1. Identify the failing piece
   - Exact quote or asset
   - Specific rule violation (banned word / passive voice / generic claim)

2. Classify tier
   - Tier 1: word swap (< 5 min fix)
   - Tier 2: paragraph rewrite (< 30 min fix)
   - Tier 3: full asset rewrite (> 30 min fix)

3. Write the memo
   - Use template: workflows/voice-calibration.md
   - Include: issue, reason, corrected version, rule added

4. Send to responsible department
   - Tag the specific person/bot/channel

5. Log in brand_audit_log.csv:
   Date | Department | Tier | Issue | Resolution
```

---

### SOP-BS-03: Campaign Narrative Brief

**Trigger:** New drop or campaign confirmed (minimum 7 days before launch).
**Time:** 60–90 minutes.

```
1. Define the four elements:
   - Enemy: what is this drop against?
   - Man: who exactly is this for?
   - Object: what does the product symbolize?
   - Outcome: who does the man become wearing it?

2. Write the one-sentence positioning:
   "Drop [#] is for [man] who refuses [enemy]. The [product] is [symbol]. Wear it to become [outcome]."

3. Derive copy direction for each department:
   - Copywriting: lead message, forbidden angles
   - Creative Direction: visual mood, enemy visualization
   - TikTok Growth: hook angle, content pillar balance
   - Paid Ads: cold angle vs. warm angle
   - Retention: subject line tone, drop announcement framing

4. Deliver to all departments simultaneously, 7+ days before launch.

5. Archive brief as: campaign-narratives/drop-[#]-[YYYY-MM].md
```

---

### SOP-BS-04: Quarterly Brand Audit

**Trigger:** End of every quarter. Set calendar reminder.
**Time:** Half-day.

```
1. Pull all published content from the quarter (TikTok, ads, email, site)
2. Sample 20 pieces per channel for brand voice audit
3. Score each sample on 8-point checklist
4. Calculate compliance rate per channel
5. Identify top 3 drift patterns (recurring issues)
6. Recommend rule additions for brand bible
7. Deliver audit report to founder
8. Brief each department on their specific findings
```

---

## Recommended Tools

| Tool | Purpose | Priority |
|---|---|---|
| **Notion** | Brand bible, competitor matrix, campaign archives — living docs | Essential |
| **Loom** | Voice calibration memos with video explanation (faster than text) | High |
| **Airtable** | Brand audit logs, decision tracking, deliverable schedule | High |
| **Brand24 / Mention** | Social listening — what customers say about NCD | Medium |
| **SimilarWeb** | Competitor traffic intelligence | Medium |
| **Semrush** | Competitor SEO and content strategy monitoring | Low-medium |
| **Google Alerts** | Passive brand mention monitoring | Low (free) |

---

## Automation Opportunities

### High-Value Automations

| Automation | Tool | Impact |
|---|---|---|
| Daily content scan → Slack/Notion alert | Zapier + brand keyword list | Eliminates manual daily scan |
| New content published → auto-trigger brand audit checklist | Zapier + Shopify/TikTok webhook | Ensures nothing skips review |
| Competitor new post detected → alert Brand Strategy | Brand24 + Slack | Passive competitive intelligence |
| Campaign narrative approved → auto-brief delivery to all depts | Notion + Zapier | Eliminates manual distribution |
| Brand bible edit → version-saved and all depts notified | Notion + automation | Keeps all depts current |

### What NOT to Automate

- Voice calibration memos (require judgment, not keyword matching)
- Positioning decisions (require synthesis, not pattern matching)
- Campaign narrative writing (requires creative strategy)
- Competitor response decisions (require nuanced competitive judgment)
