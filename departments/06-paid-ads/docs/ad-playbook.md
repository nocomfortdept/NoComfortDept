# NoComfortDept — Ad Playbook
## Maintained by: Paid Ads

The NCD paid media bible. Tested frameworks, proven structures, and hard rules built from campaign data.

---

## The NCD Paid Media Philosophy

NCD doesn't compete on price. NCD doesn't discount. NCD doesn't spam retargeting audiences with desperation copy.

NCD runs ads the same way it runs the brand: quiet, specific, earned.

**The three jobs of an NCD ad:**
1. Stop the right person's scroll
2. Make them believe the product is worth more than the price
3. Send them to a page that closes the deal

---

## Campaign Architecture (Reference)

```
CAMPAIGN: NCD-[Drop#]-Purchase (CBO)
│
├─ AD SET 1: Cold-Broad-M2238
│  Budget: 30% | Bid: Lowest cost | Audience: No interest targeting
│  Creative: 3 variants (video hook test)
│
├─ AD SET 2: Cold-Interest-SelfImprovement
│  Budget: 20% | Bid: Lowest cost | Interests: stacked
│  Creative: 2 variants (best from broad)
│
├─ AD SET 3: Cold-LLA-Purchasers-1pct
│  Budget: 20% | Bid: Cost cap ($35 CAC)
│  Creative: 2 variants (best performers)
│
├─ AD SET 4: Warm-VideoViewers-SiteVisitors
│  Budget: 15% | Bid: Lowest cost
│  Creative: 2 retargeting variants (objection-handling copy)
│
└─ AD SET 5: Hot-ATC-Checkout
   Budget: 15% | Bid: Cost cap ($28 CAC)
   Creative: 1 urgency variant (unit count + price + CTA)
```

---

## Proven Copy Angles

| Angle | Audience | Performance |
|---|---|---|
| Identity — "For men who already decided" | Cold | TBD |
| Quality spec — "400gsm. Here's why that matters." | Cold | TBD |
| Objection — "You're not paying for the logo." | Warm | TBD |
| Urgency — "[#] units. Ships today." | Hot | TBD |
| Social proof — "47 orders in 24 hours." | Warm/Hot | TBD |

*(Populate with actual ROAS data after first campaign cycle)*

---

## Kill Rules (Non-Negotiable)

| Metric | Kill After |
|---|---|
| ROAS < 1.5 | 3 days |
| CTR < 0.6% | 5 days (check creative first) |
| CPM > $40 | 3 days (check audience size) |
| CPC > $3.00 | 3 days |
| Frequency > 4.0 | Immediately (creative fatigue) |

---

## Scale Rules

| Condition | Action |
|---|---|
| ROAS ≥ 3.0 for 3 consecutive days | Increase budget 20% |
| ROAS ≥ 4.0 for 5 consecutive days | Increase budget 30% |
| New creative beats control by 20%+ | Reallocate budget to winner |
| LLA performing above broad | Increase LLA allocation |

**Never increase budget more than 30% in a single day.** Meta penalizes large budget jumps by exiting the learning phase.
