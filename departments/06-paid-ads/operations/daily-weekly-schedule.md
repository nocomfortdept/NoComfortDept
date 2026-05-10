# Paid Ads — Daily & Weekly Schedule
## Department: 06 | Employee: Paid Media Strategist

---

## Main Objective

Generate profitable, scalable revenue through paid media on Meta and TikTok. Build a campaign infrastructure that cold-prospects new buyers, retargets warm audiences, and converts hot audiences with minimal friction. Every dollar of ad spend must be accountable.

**North star metric:** ROAS (target: ≥ 3.0). Secondary: Customer Acquisition Cost (target: ≤ $28).

---

## Daily Responsibilities

### Every Day (30–45 min)

| Time | Task | Output |
|---|---|---|
| Morning | Check Meta Ads Manager: ROAS, CPM, CTR, spend per ad set | Daily optimization decisions |
| Morning | Kill any ad sets hitting kill thresholds (ROAS < 1.5 for 3 days, CPM > $40) | Spend protected |
| Morning | Scale any ad sets hitting scale triggers (ROAS ≥ 3.0 for 3 days) | Revenue growth |
| Morning | Check creative frequency — any ads hitting > 3.0 frequency? | Refresh or rotate |
| Ongoing | Monitor real-time performance during drop windows | Immediate optimization |
| EOD | Log performance metrics in daily optimization journal | Audit trail + patterns |

### Drop-Day Additions
- Increase retargeting budget by 2x for first 24 hours of drop
- Launch hot-audience campaign immediately when drop goes live
- Monitor CPA in real-time — TikTok traffic is warmer on drop days, adjust bids

---

## Weekly Responsibilities

### Monday — Performance Review
- [ ] Pull weekly summary: total spend, total revenue, ROAS, CAC, CPM, CTR per campaign
- [ ] Compare to prior week and same period last month
- [ ] Identify best-performing ad set and worst-performing
- [ ] Set week's optimization hypothesis (what will move the needle most?)

### Tuesday — Creative Testing
- [ ] Review creative testing ladder progress (`workflows/creative-rotation.md`)
- [ ] Kill underperforming ad creatives (below kill threshold for 5 days)
- [ ] Brief Creative Direction on new creative needs if rotation required
- [ ] Brief Copywriting on new copy angles if current copy is fatiguing

### Wednesday — Audience Management
- [ ] Refresh LLA audiences (monthly, but check on Wednesdays)
- [ ] Review warm retargeting audience sizes — are they healthy?
- [ ] Adjust retargeting window if audience is too small (< 1,000 people)
- [ ] Check exclusion lists — purchasers excluded from cold? ✓

### Thursday — Landing Page & Destination Audit
- [ ] Spot-check all ad destinations — are they live and loading fast?
- [ ] Check UTM tracking — all campaigns attributed correctly?
- [ ] Brief Shopify CRO if any landing page needs optimization
- [ ] Review LP CVR from paid traffic vs. organic

### Friday — Reporting & Planning
- [ ] Produce weekly paid media report (spend, ROAS, CAC, best creative)
- [ ] Update ad-playbook.md with any tested wins or kills
- [ ] Update audience-matrix.md with performance data
- [ ] Plan next week's campaign changes and creative needs

---

## Example Daily Workflow (Standard Day)

```
08:00  Open Meta Ads Manager
       → Campaign: NCD-Drop5-Purchase
       → Cold-Broad: ROAS 3.4 (above target) | CPM $18 | CTR 1.4% → HEALTHY
       → Cold-Interest: ROAS 2.1 (below target, day 2) → WATCH. Not kill yet.
       → Warm: ROAS 4.8 (excellent) → Scale +20% budget
       → Hot: ROAS 6.2 (excellent) → Maintain — already small budget

08:15  Action: Warm ad set budget $50/day → $60/day
       (20% increase — staying within safe scaling range)

08:20  Check creative frequency
       → Best performing cold creative: frequency 2.8 (approaching 3.0)
       → Action: prepare fresh creative brief for next week — this one has 7-10 days left

08:30  Check TikTok Ads (if running):
       → TikTok cold campaign: CPM $14 (cheap), CTR 0.9% (below 1.2% target)
       → Hook test variant B performing 40% better than A
       → Action: pause A, increase B budget

08:45  Log all changes in daily optimization journal

09:00  Review creative brief from Paid Ads queue:
       → Brief creative direction on next cold ad creative (hook test, 3 new hooks)

09:20  Done
```

---

## Example Weekly Workflow (Post-Drop Week)

```
MON  Drop 5 week review: Total spend $840. Revenue $3,210. ROAS 3.82. CAC $22.40.
     Best: Warm retargeting. ROAS 5.1.
     Worst: Cold-Interest. ROAS 1.9. → Kill this ad set.
     Hypothesis: Broad outperforms interest because NCD audience is too niche
     for Meta's interest graph. Increase broad budget next week.

TUE  Kill Cold-Interest ad set. Reallocate $200/day budget to Cold-Broad.
     Request new creative brief from Creative Direction:
     "Identity-led hook, 15-second video, new face/environment (avoid fatigue)."

WED  Refresh LLA audiences: export current purchasers from Shopify,
     upload to Meta as custom audience, create 1% LLA.
     New LLA is 30% larger than last month — audience growing.

THU  Spot-check all ad destinations:
     → Cold → product page: ✓ LCP 1.8s
     → Warm → same product page: ✓
     → Hot → TikTok LP: ✓ (confirmed with CRO)
     UTM tracking verified in GA4. All campaigns attributed.

FRI  Weekly report: ROAS 3.82. CAC $22.40. Best creative: identity-led cold video.
     Update ad-playbook.md: "Broad outperforms interest stacks for NCD.
     Recommend: 50% broad, 30% LLA, 20% retargeting going forward."
     Brief next week: test new creative from direction request. Launch Monday.
```
