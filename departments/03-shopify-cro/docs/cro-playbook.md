# NoComfortDept — CRO Playbook
## Maintained by: Shopify CRO

The definitive guide to how NCD converts visitors into buyers. Every principle here is earned from testing, not guessed from theory.

---

## The NCD Conversion Funnel

```
TRAFFIC (TikTok / Paid / Direct)
     │
     ▼
LANDING PAGE / PRODUCT PAGE
     │ LCP < 2.5s
     │ Brand credibility established
     ▼
PRODUCT ENGAGEMENT
     │ Image viewed
     │ Description read
     │ Reviews scrolled
     ▼
SIZE SELECTION (Gate 1)
     │ ATC blocked without size
     │ Stock message updates per size
     ▼
ADD TO CART (Gate 2)
     │ Sticky ATC visible throughout
     │ Countdown timer creates urgency
     ▼
CHECKOUT
     │ Dynamic checkout (Shop Pay, Apple Pay)
     │ Trust signals on every page
     ▼
PURCHASE
```

---

## Conversion Principles (Proven)

### 1. The Price Reveal Sequence
Show value before price. Sequence:
`Construction detail → Identity signal → Feature list → Price`

Never lead with price. Never show price before the customer is sold on the product.

### 2. Size Selection as the Critical Gate
- Size selector must be visible without scrolling (on mobile)
- Sold-out sizes stay visible but disabled — they prove the product sells
- Low-stock dot (≤5 units) on a size increases selection rate on adjacent sizes
- If user hits ATC without selecting: grid shakes, "Select your size first" turns red

### 3. Urgency Must Be Real
- Countdown timer is session-based — it's real urgency (personalised to their visit)
- Stock counts pulled from actual inventory — never inflated
- "X people viewing" fluctuates naturally — no fixed fake number
- Social proof toasts use real product names and realistic cities

### 4. The Sticky ATC Bar
- Fires when the in-page price block exits the viewport
- Shows product name + selected size + price
- CTA scrolls to the ATC form (doesn't add to cart without size confirmation)
- Disappears when user scrolls back to price block

### 5. Mobile-First Always
- Size grid buttons: min 44×44px tap target
- ATC button: full width on mobile, min 56px height
- Sticky ATC: collapses to just button on very small screens
- Hero images: object-fit cover, portrait ratio, top-anchored

---

## Tested Wins (Archive)

| Test ID | Element | Control | Variant | Winner | Lift |
|---|---|---|---|---|---|
| — | — | — | — | — | — |

*(Populated after first A/B test cycle)*

---

## Component Reference

| Component | CSS Class | JS Init | Condition |
|---|---|---|---|
| Countdown | `.countdown-block` | `initCountdowns()` | `data-countdown="hours"` |
| Sticky ATC | `.sticky-atc` | `initStickyATC()` | `data-sticky-trigger` on price |
| Size selector | `.size-grid` | `initSizeSelector()` | `.size-btn` children |
| ATC gate | `[data-atc-btn]` | `initATCFeedback()` | No `.size-btn.active` |
| Stock dot | `.stock-dot--red/yellow/green` | `updateStockMessage()` | Post size selection |
| Social proof | `#social-proof-notif` | `initSocialProofNotifications()` | Container present in DOM |
| Live viewers | `[data-live-views]` | `initViewsCounter()` | Attribute present |
| Urgency badge | `snippets/urgency-badge.liquid` | Liquid render | `inventory` param ≤ 10 |
