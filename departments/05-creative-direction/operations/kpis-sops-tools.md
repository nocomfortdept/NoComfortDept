# Creative Direction — KPIs, SOPs, Tools & Automation
## Department: 05 | Employee: Creative Director

---

## KPI Dashboard

### Primary KPIs

| KPI | Target | Alert | Source |
|---|---|---|---|
| Asset first-pass approval rate | ≥ 80% | < 60% (brief quality issue) | Asset review log |
| Brief-to-approved-asset turnaround | ≤ 5 business days | > 10 days (production bottleneck) | Brief log |
| TikTok videos passing visual standard | 100% | Any video posting without review | TikTok content review log |
| Paid ad asset approval rate | 100% before launch | Any ad running with unreviewed creative | Ads Manager + review log |

### Secondary KPIs

| KPI | Target | Source |
|---|---|---|
| Top-performing creative style (by ROAS or views) | Track monthly — identify what visual style converts | Ads Manager + TikTok Analytics |
| Moodboard-to-shoot fidelity | ≥ 85% of shot list delivered | Post-shoot checklist |
| Visual consistency score (quarterly brand audit) | ≥ 8.5/10 | Brand Strategy quarterly audit |
| Editor revision rounds | ≤ 1.5 average rounds per asset | Editor revision log |

---

## Decision-Making Framework

### Asset Approval Matrix

Every asset reviewed against 5 criteria:

| Criterion | Pass | Fail → Action |
|---|---|---|
| Background: dark or controlled | Dark/industrial/studio | Bright/generic → revision |
| Light: single directional source | One clear light source | Multiple sources / flat → revision |
| Model direction: intentional | Purposeful, not posed | Smiling / over-posed → revision |
| Composition: product is clear subject | Product fills frame correctly | Awkward crop → revision or reject |
| Color grade: crushed blacks + accent | Dark tone, single warm/cool accent | Generic grade → revision |

3/5 fail → Reject (reshoot)
1–2/5 fail → Revision (fix in post if possible, reshoot if not)
5/5 pass → Approved

---

## SOPs

### SOP-CD-01: Asset Review Protocol

```
1. Receive submitted assets (Dropbox / Google Drive / WeTransfer)
2. Open each asset and score against 5-point approval matrix
3. Write review result:
   - APPROVED: no notes needed
   - REVISION: list specific changes (compositing, grade, crop, retouch)
   - REJECTED: explain why brief wasn't met, specify what reshoot needs

4. Communicate result to photographer/editor within 4 hours of submission
5. Log result in asset review log:
   Asset ID | Type | Submission date | Decision | Revision rounds | Approved date

6. On approval: transfer to asset library with naming convention:
   NCD-[ProductHandle]-[ShotType]-[ColorwayCode]-[YYYY-MM].jpg
```

---

### SOP-CD-02: Brief-to-Shoot Process

```
BRIEF PHASE (minimum 7 days before shoot):
1. Load campaign narrative from Brand Strategy
2. Complete creative-brief.md master template
3. Attach photo-brief.md or video-brief.md as applicable
4. Build moodboard (6 images minimum per moodboard-guide.md)
5. Send to photographer/videographer WITH moodboard

PRE-PRODUCTION (3–5 days before):
6. Location scout confirmation (or studio booking)
7. Model confirmation and call time
8. Wardrobe pull — confirm NCD product in correct colorway, pressed, on hangers
9. Equipment list confirmed with photographer

SHOOT DAY:
10. Arrive early — set up and test light before model arrives
11. Reference moodboard throughout shoot (keep it visible on set)
12. Call selects throughout — don't wait until editing
13. End-of-day: quick review of selects with photographer, confirm shot list delivered

POST-PRODUCTION:
14. Brief editor with color grade direction from video-brief.md
15. First review at 24 hours
16. Final approval within 5 business days
```

---

### SOP-CD-03: TikTok Content Review

```
Timing: Before every video posts (minimum 2 hours before scheduled post time)

1. Receive video draft from TikTok Growth
2. Watch in full on mobile (9:16, not desktop)
3. Check against visual standards:
   - Color grade: crushed blacks? ✓/✗
   - Subject clarity: product or man as intended focus? ✓/✗
   - Hook: visually stops scroll in frame 1? ✓/✗
   - Audio: consistent with brand aesthetic? ✓/✗
   - No bright backgrounds or generic stock feel? ✓/✗

4. Decision:
   - APPROVED → confirm to TikTok Growth, video posts as scheduled
   - REVISION → send specific notes, resubmit required before posting
   - REJECTED → video does not post. Notify Brand Strategy if pattern.

5. Log result: Video ID | Date | Decision | Notes
```

---

## Recommended Tools

| Tool | Purpose | Priority |
|---|---|---|
| **Adobe Lightroom** | Photo editing, color grading, asset library | Essential |
| **Adobe Premiere Pro** | Video editing, color grading with Lumetri | Essential |
| **DaVinci Resolve** | Advanced color grading (free, powerful) | Essential (alternative to Premiere) |
| **Dropbox / Google Drive** | Asset delivery and storage | Essential |
| **Figma** | Moodboard building, layout templates | High |
| **Frame.io** | Video review with timestamped comments | High |
| **Capture One** | Tethered shooting for product photography | Medium |
| **VSCO** | Mobile color reference and quick grade preview | Low |
| **Canva** | Quick text-overlay assets for TikTok (backup) | Low |

---

## Automation Opportunities

| Automation | Tool | Trigger | Impact |
|---|---|---|---|
| Asset submitted → review checklist created | Google Drive + Notion | New file in delivery folder | Never miss an asset |
| Asset approved → auto-move to asset library | Zapier + Google Drive | Director marks approved | Library always organized |
| TikTok video due → auto-reminder to Creative Director for review | Notion + Slack | 2h before scheduled post | Nothing posts unreviewed |
| Shoot brief accepted → auto-calendar event for director | Calendly + Notion | Photographer confirms | Schedule maintained |
| Asset usage logged → auto-update in ad performance tracker | Zapier + Airtable | Asset ID referenced in ad | Know which visuals convert |

### What NOT to Automate
- The creative direction call itself (judgment, not process)
- Asset approvals (requires aesthetic + brand standard judgment)
- Moodboard building (requires creative synthesis from brand narrative)
