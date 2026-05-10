# Shopify CRO — Daily & Weekly Schedule
## Department: 03 | Employee: CRO Specialist

---

## Main Objective

Build and maintain the Shopify infrastructure that converts NCD's brand equity and TikTok traffic into completed orders. Every percentage point of conversion rate improvement is directly tied to revenue. Own the technical and behavioral layer between intent and purchase.

**North star metric:** Overall store conversion rate (target: ≥ 2.5%). Secondary: add-to-cart rate (≥ 8%).

---

## Daily Responsibilities

### Every Day (30–45 min)

| Time | Task | Output |
|---|---|---|
| Morning | Check Shopify Analytics — sessions, CVR, ATC rate, checkout rate | Daily dashboard note |
| Morning | Check Google Analytics / Hotjar — any anomalies in user behavior? | Flag or clear |
| Morning | Verify all conversion elements are firing: countdown, sticky ATC, size selector, social proof | System health check |
| Ongoing | Implement any approved copy from `02-copywriting` | Pages updated |
| Ongoing | Respond to any P1 bug reports (checkout broken, ATC failing) | Immediate fix |
| EOD | Log any changes made today in `docs/test-log.md` | Audit trail |

### Drop-Day Daily Additions
- Monitor real-time sessions every 30 minutes
- Watch ATC rate — if it drops > 20% from baseline, investigate immediately
- Verify countdown timer accuracy and social proof notifications firing
- Check mobile performance specifically (TikTok traffic = 80%+ mobile)

---

## Weekly Responsibilities

### Monday — Performance Review
- [ ] Pull weekly conversion report: CVR, ATC rate, checkout rate, exit rate by page
- [ ] Identify biggest friction point from last week's data
- [ ] Set one optimization hypothesis for the week
- [ ] Check if any A/B tests have enough data to call a winner

### Tuesday — Build Day
- [ ] Implement queued copy updates from Copywriting
- [ ] Build or update any sections needed for upcoming drop/campaign
- [ ] Complete any landing page builds requested by TikTok Growth

### Wednesday — Testing
- [ ] Set up or advance the week's A/B test
- [ ] Run through product page audit checklist for any updated pages
- [ ] Check page speed (Lighthouse mobile) on any modified pages

### Thursday — Collaboration Day
- [ ] Confirm TikTok landing page is QA'd and UTM-ready for any active campaigns
- [ ] Brief Paid Ads on any landing page changes that affect ad destinations
- [ ] Review Retention's email links — do they land on the right pages?

### Friday — Documentation & Planning
- [ ] Update `docs/test-log.md` with week's test results
- [ ] Update `docs/cro-playbook.md` with any new learnings
- [ ] Plan next week's optimization priority
- [ ] Check site speed benchmarks and log in performance record

---

## Example Daily Workflow (Standard Day)

```
08:00  Open Shopify Analytics
       CVR today: 2.3% (below 2.5% target)
       ATC rate: 7.1% (below 8% target)
       Checkout rate from ATC: 68% (healthy)
       → Friction is at ATC step, not checkout. Issue is upstream.

08:15  Open Hotjar → replay 10 sessions where user added no items
       Finding: 4 of 10 users clicked size button but didn't get active state
       → Bug: size selector not marking active on first tap on some iOS devices
       → P1 fix needed

08:30  Debug size selector in nocomfort.js
       → Issue: click event firing on parent, not button
       → Fix: change event delegation to target .size-btn directly
       → Test on Safari iOS simulator
       → Fix confirmed. Deploy.

09:15  Implement Copywriting's Combat Tee description update in product-hero section

09:30  Check A/B test running (countdown timer on vs off)
       Day 4. Control: 2.1% CVR. Variant (timer on): 2.7% CVR.
       Not enough data yet (< 100 conversions per variant). Continue.

09:45  Update test-log.md with today's debug fix and A/B status

10:00  QA TikTok landing page for Drop 5 on iPhone SE (smallest mobile)
       → Price block slightly overflowing viewport
       → Fix padding on .product-info mobile breakpoint

10:30  Done
```

---

## Example Weekly Workflow (Drop Launch Week)

```
MON  Review: last drop CVR was 3.1% — above target. Win: countdown timer.
     Set this week priority: TikTok LP for Drop 5.
     Start A/B test: social proof toasts on vs off.

TUE  Build Drop 5 TikTok landing page per LP brief from TikTok Growth.
     Implement product, reviews, countdown (8hr session), stock indicator.
     Test on mobile. QA checklist passed. Send URL to TikTok Growth.

WED  Implement Drop 5 product copy from Copywriting.
     Run product page audit: 42/44 checks pass.
     Fix: size guide link was 404. Updated.

THU  Brief Paid Ads: LP is live, UTM confirmed.
     Check Retention's drop announcement email — CTA link goes to LP. Confirmed.
     A/B test day 3: social proof variant showing +0.4% CVR. Continue.

FRI  Log week: LP built, product pages updated, A/B test running.
     Page speed: LCP 1.8s mobile. Under 2.5s target. Good.
     Plan next week: review A/B results, start checkout flow audit.
```
