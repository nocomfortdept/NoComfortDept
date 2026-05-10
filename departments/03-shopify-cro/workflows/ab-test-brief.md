# Workflow: A/B Test Brief
## Department: Shopify CRO

Use this template to structure every A/B test before running it.

---

## Test Brief Template

```
A/B TEST BRIEF
Test ID: NCD-CRO-[###]
Date started: [DATE]
Lead: CRO Specialist

HYPOTHESIS:
"If we [change], then [metric] will [improve/decrease] because [reason]."

ELEMENT BEING TESTED:
[ ] CTA button copy
[ ] CTA button color
[ ] Product description
[ ] Price placement
[ ] Image order
[ ] Size selector layout
[ ] Countdown timer presence/absence
[ ] Social proof element
[ ] Trust strip position
[ ] Other: ___

CONTROL (A):
[Description of current state]

VARIANT (B):
[Description of proposed change]

PRIMARY METRIC:
[The one metric that determines the winner]

SECONDARY METRICS (observe, don't decide on):
[Other metrics to watch for unintended effects]

MINIMUM SAMPLE SIZE:
[Calculate: need ≥ 100 conversions per variant for statistical significance]

DURATION:
[Minimum 7 days, spanning full week cycle]

TRAFFIC SPLIT:
50% Control / 50% Variant

RISK LEVEL:
[ ] Low — cosmetic change, easy rollback
[ ] Medium — functional change, tested on staging
[ ] High — structural change, staged rollout

ROLLBACK PLAN:
[Exactly how to revert if variant underperforms]
```

---

## Active Tests Log

| Test ID | Element | Start Date | End Date | Winner | Lift |
|---|---|---|---|---|---|
| — | — | — | — | — | — |

*(Update as tests complete — archive to test-log.md)*

---

## Test Prioritization Framework (ICE Score)

Rate each potential test 1–10 on:
- **I**mpact — How much could this move conversion?
- **C**onfidence — How sure are we the variant will win?
- **E**ase — How fast can we build and run this?

**ICE Score = (I + C + E) / 3**

Run tests with score ≥ 7 first.

| Potential Test | I | C | E | Score |
|---|---|---|---|---|
| CTA copy: "Add to Cart" vs "Get Yours" | 6 | 7 | 9 | 7.3 |
| Countdown timer: present vs absent | 8 | 7 | 8 | 7.7 |
| Social proof toasts: on vs off | 7 | 6 | 9 | 7.3 |
| Price position: above vs below description | 7 | 5 | 7 | 6.3 |
