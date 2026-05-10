# Retention & Email — Daily & Weekly Schedule
## Department: 07 | Employee: Retention Strategist

---

## Main Objective

Maximize customer lifetime value (LTV) by turning first-time buyers into repeat purchasers and loyal NCD community members. Own the post-purchase relationship through email and SMS. Make every NCD customer feel like they're part of something — not on a marketing list.

**North star metric:** Revenue per email recipient (target: ≥ $0.80). Secondary: Repeat purchase rate within 90 days.

---

## Daily Responsibilities

### Every Day (20–30 min)

| Time | Task | Output |
|---|---|---|
| Morning | Check Klaviyo dashboard: open rates, click rates, revenue from flows overnight | Daily metrics log |
| Morning | Review abandoned cart flow performance — recovery rate this week | Flag if below 12% |
| Morning | Check for any email deliverability issues (bounce rate, spam complaints) | System health |
| Ongoing | Monitor any active campaign send performance | Optimization if needed |
| EOD | Log any flow performance anomalies or wins | Optimization queue |

### Drop-Day Additions
- Send drop announcement to NCD-VIP segment first (24h early access)
- Send drop announcement to full list at drop time
- Monitor open rate in first 2 hours — if below 30%, consider subject line A/B
- Send "X units left" email when inventory hits 30% remaining

---

## Weekly Responsibilities

### Monday — Performance Review
- [ ] Pull weekly email metrics: open rate, click rate, revenue, unsubscribe rate
- [ ] Check flow performance: abandoned cart recovery, welcome series click rate
- [ ] Identify list segments that are drifting toward at-risk or lapsed
- [ ] Flag any deliverability issues for immediate attention

### Tuesday — Flow Optimization
- [ ] Review any flows in A/B test — call winners if data sufficient
- [ ] Brief Copywriting on any email body copy needed for upcoming flows
- [ ] Update email sequence timing if data shows different timing performs better

### Wednesday — Campaign Planning
- [ ] Plan this week's campaign send (if applicable)
- [ ] Write subject lines and preheaders for any pending emails
- [ ] Segment the list for the campaign send
- [ ] Review any drop-related emails needed next week

### Thursday — Segmentation & List Health
- [ ] Run at-risk segment — how many customers are 60–90 days without purchase?
- [ ] Trigger or check win-back flow for at-risk customers
- [ ] Clean lapsed segment — suppress 90-day non-openers from next campaign
- [ ] Check VIP segment growth — any new customers hit 3rd purchase?

### Friday — Reporting & Documentation
- [ ] Produce weekly retention report: open rate, recovery rate, revenue, LTV delta
- [ ] Update `docs/flow-library.md` with week's flow performance
- [ ] Update `docs/segment-guide.md` if segment health changed
- [ ] Plan next week: any flows to build, campaigns to plan, tests to run

---

## Example Daily Workflow (Standard Day)

```
08:00  Open Klaviyo dashboard
       Abandoned cart flow last 24h: 8 recoveries out of 41 abandoned carts = 19.5% ✓ (above 12%)
       Welcome series email 2 open rate (30d avg): 38% ✓
       Bounce rate this week: 0.08% ✓ (under 0.1% threshold)
       1 spam complaint in last 24h — review who reported. Remove from all lists.

08:20  Check active campaign from Tuesday (drop announcement email):
       Open rate: 42% (above 35% target) ✓
       Click rate: 5.1% (above 3.5% target) ✓
       Revenue attributed so far: $1,847 from 1 email to 3,400 recipients = $0.54/recipient
       (below $0.80 target for this email — but it's still early in the send window)

08:35  Log metrics in daily retention journal

08:40  Check at-risk segment
       → 47 customers entered the 60-day at-risk window today
       → Trigger win-back email 1 for these 47 automatically via Klaviyo flow
       → No manual action needed (flow is running)

08:50  Done
```

---

## Example Weekly Workflow (Drop Week)

```
MON  Metrics review: last week RPR (revenue per recipient) $0.92 — above $0.80 target.
     Abandoned cart recovery: 14.2% — healthy.
     At-risk segment: 234 customers. 89 in win-back flow.

TUE  Build Drop 5 VIP early access email (sends 24h before public drop):
     Subject: "Drop 5 — yours first."
     Brief body copy to Copywriting.
     Copywriting delivers in 4h. Approved. Scheduled.

WED  Build Drop 5 general announcement email:
     Subject: "Drop 5 is live."
     Configure: dynamic inventory counter in email body (pulls from Shopify metafield).
     Segment: NCD-Active + NCD-EngagedNonBuyer (not VIP — they already got theirs).
     Schedule: sends same time as public drop.

THU  Drop day. VIP email sent yesterday: 52% open rate, 8.1% click rate.
     Drop day public email: 44% open rate, 6.2% click rate.
     Revenue from email in first 24h: $4,411.
     At 30% inventory remaining → send "31 units left" email to clicked but didn't purchase.

FRI  Drop 5 email revenue total: $6,218. RPR: $1.83 — excellent.
     Post-purchase flow triggered for all Drop 5 buyers: "It's on its way."
     Update flow-library.md with Drop 5 email results.
     Plan: win-back campaign for 60-day lapsed customers next week.
```
