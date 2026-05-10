# Workflow: Audience Build
## Department: Paid Ads

Reference for building and managing all Meta audience segments.

---

## Core Saved Audiences

### Cold — Interest Stack
**Name:** `NCD-Cold-Interest-[Date]`

Interest categories to stack:
- Streetwear / Menswear: `Streetwear`, `Menswear`, `Fashion`
- Self-improvement: `Self-improvement`, `Personal development`, `Motivation`
- Fitness identity: `Fitness`, `Weight training`, `Calisthenics`, `Combat sports`
- Luxury signals: `Luxury goods`, `High-end fashion`
- Content aligned: `David Goggins`, `Alex Hormozi`, `Andrew Huberman`

Gender: Male
Age: 22–38
Placements: Instagram Feed + Stories + Reels (exclude Audience Network)

---

### Cold — Broad
**Name:** `NCD-Cold-Broad-M2238`

No interests — let Meta's algorithm optimize.
Gender: Male | Age: 22–38
This ad set gets the highest budget allocation because Meta's broad targeting often outperforms interest stacks with enough conversion data.

---

### LLA Audiences (update monthly)

| Audience | Seed | Size |
|---|---|---|
| `NCD-LLA-Purchasers-1pct` | All purchasers (pixel) | 1% |
| `NCD-LLA-Purchasers-3pct` | All purchasers (pixel) | 3% |
| `NCD-LLA-HighAOV-1pct` | Purchasers > $150 AOV | 1% |
| `NCD-LLA-VidViewers-1pct` | 75%+ video viewers | 1% |

---

### Warm Retargeting

| Audience | Definition | Window |
|---|---|---|
| `NCD-Warm-VidView25` | Viewed any NCD video 25%+ | 30 days |
| `NCD-Warm-VidView75` | Viewed any NCD video 75%+ | 14 days |
| `NCD-Warm-SiteVisit` | All website visitors | 30 days |
| `NCD-Warm-ProductView` | Viewed any product page | 14 days |
| `NCD-Warm-ATC` | Added to cart, no purchase | 14 days |
| `NCD-Warm-InitCheckout` | Initiated checkout, no purchase | 7 days |

---

### Hot Retargeting

| Audience | Definition | Window |
|---|---|---|
| `NCD-Hot-ATC` | Added to cart, no purchase | 3 days |
| `NCD-Hot-Checkout` | Initiated checkout, no purchase | 1 day |

---

### Exclusions (always apply to cold traffic)

- All purchasers (lifetime)
- Current warm retargeting audiences

---

## Audience Sizing Guide

| Audience | Min Size for Performance |
|---|---|
| Cold broad | 1M+ (Meta-defined by geo) |
| Cold interest | 500k+ |
| LLA 1% | Geography-dependent — verify before launch |
| Warm retargeting | 1,000+ people minimum |
| Hot retargeting | 100+ people minimum |

If hot retargeting is under 100 people — expand window or combine ATC + checkout.

---

## Audience Refresh Schedule

| Audience | Refresh Frequency |
|---|---|
| LLA — Purchasers | Monthly (as seed grows) |
| LLA — Video viewers | Monthly |
| Saved interest stacks | Quarterly |
| All warm/hot | Automatic (rolling window) |
