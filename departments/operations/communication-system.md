# NCD Department Communication System
## How the 7 Departments Talk to Each Other

---

## Communication Principles

1. **Default async** — Everything that is not urgent is documented, not messaged.
2. **One source of truth** — Notion holds all briefs, docs, and logs. Slack is for alerts and handoffs only.
3. **No double-handling** — Each piece of work has one owner. The owner is responsible until handoff is confirmed.
4. **Structured requests** — No informal "can you write some copy for this?" All inter-department requests use the brief format below.

---

## Channel Architecture

| Channel | Purpose | Participants |
|---|---|---|
| `#brand-pulse` | Weekly brand calibration from Brand Strategy | All departments |
| `#drop-ops` | Drop-specific coordination (active during drop mode) | All departments |
| `#urgent` | P1 emergencies only | All departments |
| `#creative-review` | Asset submissions and approvals | Creative Direction, TikTok, Paid Ads |
| `#copy-requests` | Copy briefs and delivery | Copywriting + requester |
| `#cro-tests` | A/B test announcements and results | Shopify CRO, Brand Strategy |
| `#email-metrics` | Daily/weekly Klaviyo metrics | Retention, Paid Ads |
| `#ads-performance` | Daily Meta/TikTok ad metrics | Paid Ads, Brand Strategy |
| `#tiktok-drops` | TikTok content schedule and performance | TikTok Growth, Creative Direction |

---

## The Brief Format

Every cross-department request uses this format. No exceptions.

```
FROM: [Department]
TO: [Department]
REQUEST TYPE: [Copy / Creative / CRO / Flow / Campaign / Review]
PRIORITY: [P1 / P2 / P3 / P4]
DEADLINE: [specific date + time]

CONTEXT:
[What is this for? Drop? Campaign? Flow? LP?]

DELIVERABLE:
[Exactly what is needed — be specific]

REFERENCE:
[Link to relevant doc, brief, or asset]

APPROVED BY:
[Brand Strategy sign-off if needed]
```

---

## Cross-Department Request Matrix

### Who Requests What From Whom

| Requester | Receiver | Request Type | Typical Trigger |
|---|---|---|---|
| Paid Ads | Creative Direction | Ad creative assets | New campaign or creative fatigue (freq > 3.0) |
| Paid Ads | Copywriting | Ad copy (hooks, CTAs) | New test angle or copy fatigue |
| TikTok Growth | Creative Direction | Video review | Before every scheduled post |
| TikTok Growth | Copywriting | Caption + hook text | Weekly batch |
| Retention | Copywriting | Email body copy | New flow or campaign email |
| Shopify CRO | Copywriting | PDP copy variants | A/B test |
| Shopify CRO | Creative Direction | LP imagery | TikTok LP build |
| All departments | Brand Strategy | Narrative direction | Drop brief or new campaign |
| Brand Strategy | All departments | Voice calibration | Weekly or when drift detected |

---

## Handoff Protocol

When a department completes work for another department:

```
1. Post in relevant channel: "@[receiver] — [brief title] delivered. Link: [Notion/Drive]"
2. Mark task DELIVERED in Notion project board
3. Receiver has 4h (business hours) to acknowledge receipt
4. If no acknowledgment → sender follows up directly
5. Receiver reviews and responds: APPROVED / REVISION NEEDED / QUESTIONS
6. If revision: sender owns fix, not receiver
```

---

## SLA by Priority

| Priority | Response Time | Completion Time |
|---|---|---|
| P1 (emergency) | Immediate | As fast as possible — all else stops |
| P2 (drop-related) | Within 2h | Per drop timeline (see master-workflow.md) |
| P3 (urgent campaign) | Within 4h business hours | 24–48h |
| P4 (standard request) | Next business day | 3–5 business days |

---

## The Drop Communication Timeline

During drop mode, all communication follows this exact sequence:

```
D-14  Brand Strategy → ALL
      Delivers: Drop Narrative Brief (campaign-brief.md)
      Contains: narrative, customer emotion, product story, copy direction

D-10  Creative Direction → ALL
      Delivers: Shoot complete confirmation + asset library link
      Contains: approved assets organized by use case (PDP, ads, TikTok, email)

D-7   Copywriting → ALL
      Delivers: Drop copy package
      Contains: PDP headline + desc, email subjects, ad hooks, TikTok captions

D-7   Retention → Copywriting (request)
      Requests: Email body copy for VIP, announcement, stock alert, sold-out emails

D-5   Copywriting → Retention
      Delivers: All 4 drop email body copies

D-5   TikTok Growth → Creative Direction
      Delivers: Pre-drop content for review (build content)

D-3   All departments → #drop-ops
      Status update: "Build complete / On track / Issue flagged"

D-1   Paid Ads → #drop-ops
      Delivers: "Campaign QA complete. Scheduled for [time]."

D-1   Retention → #drop-ops
      Delivers: "VIP email scheduled. Drop email scheduled."

D-1   Shopify CRO → #drop-ops
      Delivers: "LP live on staging. QA passed. Publishing at [time]."

D-0   All → #drop-ops
      Morning check-in: Confirm everything fired. Flag anything that didn't.

SOLD OUT → All departments pivot immediately (see master-workflow.md Mode 2)
```

---

## Brand Strategy Communication Authority

Brand Strategy is the only department with universal broadcast rights. Any department can request a brand ruling, but Brand Strategy's response is final.

**Brand Decision Request format:**
```
DECISION NEEDED: [one sentence]
CONTEXT: [what's being built and why the question exists]
OPTIONS: [list the options]
DEADLINE: [when does this need to be resolved]
```

Brand Strategy responds within 4 business hours on all P2–P4 brand questions. P1 brand crises (e.g., published content that violates brand standards) receive immediate response.

---

## Escalation Path

```
1. Department attempts resolution internally
2. If blocked → notify relevant partner department directly
3. If still blocked → post in #urgent with context
4. Brand Strategy reviews and arbitrates if needed
5. Founder escalation only for: major drop delay, brand direction pivot, budget emergency
```

---

## What Never Goes Through Chat

| Item | Where It Lives |
|---|---|
| Brief documents | Notion (linked in Slack) |
| Creative assets | Google Drive / Dropbox (linked in Slack) |
| Campaign performance | Department docs (weekly report) |
| Brand decisions | Brand Decision Request → Notion log |
| A/B test results | cro-playbook.md |
| Flow performance | flow-library.md |
| Ad performance | ad-playbook.md |

Slack is for coordination. Notion is for knowledge. Drive is for assets. Keep them separate.
