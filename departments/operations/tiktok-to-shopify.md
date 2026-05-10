# TikTok Traffic → Shopify Sales
## The NCD Conversion Map

---

## The Core Problem

TikTok sends traffic. Shopify converts it. Between those two facts is a gap — and most brands lose the sale in that gap.

This document maps every step of the NCD conversion funnel from TikTok view to completed order, identifying where conversions are won, where they're lost, and what each department does to protect them.

---

## The Full Funnel

```
TikTok Video
    │
    ▼
Hook (frame 1) ────────────────────── LOST: scroll past (bad hook)
    │
    ▼
Watch (3s → 15s → full) ────────────── LOST: disengagement (weak content)
    │
    ▼
Action (comment / click link / save)
    │
    ├─► Comment triggers ManyChat → DM with link
    │        │
    └─► Link in bio → Landing Page
                 │
                 ▼
         TikTok LP ──────────────────── LOST: page doesn't load fast enough
                 │                      LOST: looks like any other store
                 │                      LOST: no mobile CTA
                 ▼
         Product resonates ────────────── LOST: wrong product shown
                 │                        LOST: no story, no reason to care
                 ▼
         Size selected ──────────────── LOST: inventory confusion
                 │                      LOST: size anxiety (no guide)
                 ▼
         Add to Cart ────────────────── LOST: CTA not visible on mobile
                 │                      LOST: no urgency to act now
                 ▼
         Checkout ───────────────────── LOST: unexpected shipping cost
                 │                      LOST: no trust signals at checkout
                 ▼
         Order Confirmed
                 │
                 ▼
         Post-Purchase Flow (Email)
                 │
                 ▼
         Repeat Customer
```

---

## Stage 1: The Hook (TikTok Growth)

The hook is the entire game. If it fails, everything else is irrelevant.

### Hook Performance Benchmarks
- **< 3s retention** → Hook failed. Stop push, audit hook type.
- **3–15s retention > 50%** → Hook working. Content must hold it.
- **Full-video completion > 40%** → Strong content. Candidate for paid amplification.

### Hook Types That Work for NCD

| Hook Type | Example | Why It Works |
|---|---|---|
| Identity challenge | "Most guys buy clothes. You're not most guys." | Speaks to "The Builder" persona |
| Scarcity reveal | "48 hours. Then it's gone." | Drop mechanics create urgency |
| Product truth | *Silent. Product filmed. No words.* | Confidence. Shows, doesn't sell. |
| Social proof | "We sold out in 4 hours. Here's why." | FOMO without desperation |
| Contrast | "Every other brand tells you to be comfortable. We don't." | NCD positioning in 6 words |

### What TikTok Growth Does Here
- Posts 3–5 times per week from the four content pillars
- Tests new hooks weekly (hook is the primary variable)
- Monitors 3-second retention and link click rate
- Kills hook formats that underperform; doubles down on winners
- Pre-drop: builds audience with no-link content ("something's coming") then converts with drop announcement

---

## Stage 2: The ManyChat Bridge

When a TikTok video drives comments ("link?" / "where?"), ManyChat intercepts and converts passive interest into direct contact.

### NCD ManyChat Setup

```
Trigger keyword: "link" / "where" / "how" / "drop" / "cop"

Response (DM):
"Here it is → [LP URL with UTM]

This drop has [X] units left. No restocks."

Follow-up (24h later if no purchase):
"Still thinking? [X] units. Once it's gone, it's gone."
```

### Why This Matters
TikTok's link in bio has friction (user must navigate away from video). ManyChat delivers the link in a DM, where the user is already engaged and in "conversation mode." Conversion rate from ManyChat DM link is typically 2–3x higher than bio link clicks.

**Owner:** TikTok Growth (setup and monitoring) / Copywriting (DM message copy)

---

## Stage 3: The Landing Page (Shopify CRO)

This is where TikTok traffic either converts or leaves. The LP must instantly communicate three things:

1. **You're in the right place** (this is the brand you just saw)
2. **This is worth $[price]** (brand authority, not discounting)
3. **Act now** (genuine urgency, not manufactured pressure)

### TikTok LP Architecture (tiktok-landing section)

```
[ Urgency Bar ]  ← Countdown + unit count (session-persistent)
[ Hero Visual ]  ← Same product from the TikTok (recognition)
[ Headline ]     ← Identity-led, not feature-led
[ Price ]        ← Stated with confidence (no apology, no comparison)
[ Size Grid ]    ← Inventory-aware (sold-out sizes grayed)
[ ATC Button ]   ← Large, bottom-anchored on mobile, single CTA
[ Social Proof ] ← Review count, star rating, 1–2 highlighted reviews
[ USP Grid ]     ← 3 facts (not 8). Quality, scarcity, shipping.
[ Sticky ATC ]   ← Always visible on scroll
[ Toast Notifs ] ← Real purchase activity (shuffled, not fake)
```

### LP Performance Targets

| Metric | Target | Below This → Investigate |
|---|---|---|
| Page CVR (TikTok organic) | ≥ 3% | < 1.5% → LP problem |
| ATC rate | ≥ 8% | < 4% → Copy or trust issue |
| Checkout completion | ≥ 60% | < 40% → UX or price barrier |
| Mobile LCP | ≤ 2.5s | > 4s → Performance emergency |

### UTM Persistence
`nocomfort.js` captures `utm_source=tiktok` on LP load and stores it in `sessionStorage`. This attribution survives internal navigation (LP → PDP → Checkout) so revenue is correctly attributed to TikTok, not "direct."

---

## Stage 4: The Product Decision (Copywriting + Creative Direction)

If the customer reaches the PDP, they are interested. They need one final confirmation: *"This is the right choice."*

### What Kills the Decision Here
- Price revealed without context (no value story)
- Generic product description (features not identity)
- No urgency signal (nothing to act on now vs. later)
- Size confusion (what if I'm between sizes?)

### What Saves It

**Headline formula:** *[Identity claim]. [Product name].*
> "Built to last. Blackout Hoodie."

**Description formula:** *What it is. Why it matters. One detail that proves quality.*
> "Heavyweight 450gsm French terry. The kind of hoodie you own for years, not seasons."

**Urgency formula:** *Real inventory signal, not fake countdown.*
> "⚫ 7 units remaining" (live from Shopify inventory via urgency-badge.liquid)

---

## Stage 5: The Add-to-Cart Moment (Shopify CRO)

The ATC is where intent becomes commitment. Every friction point between interest and cart is a conversion lost.

### NCD ATC Conversion Stack

| Element | Function | Component |
|---|---|---|
| Size grid | Inventory-aware, clear labels | `initSizeSelector()` |
| Size shake gate | Forces size selection before ATC | `initATCFeedback()` |
| Stock dot | Visual urgency by availability | `urgency-badge.liquid` |
| Sticky ATC bar | Always visible on scroll | `initStickyATC()` |
| Mobile bottom anchor | ATC visible without scroll on mobile | CSS: `position: fixed, bottom: 0` |
| Live viewer count | Social pressure, not fake | `initViewsCounter()` |
| Social proof toasts | Purchase activity signal | `initSocialProofNotifications()` |

---

## Stage 6: Checkout (Shopify Native)

NCD uses Shopify's native checkout. The conversion work here is about removing doubt, not adding features.

### What Shopify CRO Controls at Checkout
- Trust badges (configured in theme settings)
- Express checkout options (Shop Pay, Apple Pay, Google Pay) — reduces friction by ~15–20%
- Shipping threshold visibility ("Free shipping on orders over $X")
- Checkout page branding (dark theme, consistent with PDP)

### What Causes Checkout Abandonment
1. Unexpected shipping cost (solution: free shipping threshold prominently displayed)
2. No preferred payment method (solution: express checkout enabled)
3. Trust gap (solution: SSL badge, refund policy link, reviews visible)
4. Distraction (solution: no navigation in checkout — Shopify default)

Abandoned checkout → Klaviyo abandoned cart flow fires at 1h (see retention-ltv.md).

---

## Stage 7: Post-Purchase (Retention & Email)

The sale is not the end. It's the beginning of the LTV relationship.

```
Order confirmed
  → Klaviyo: Post-Purchase Flow triggers
      Email 1 (immediate): "It's on its way." + brand story + what's next
      Email 2 (Day 3): Product care / how to wear it / community
      Email 3 (Day 14): "How's it fitting?" → soft review ask
      Email 4 (Day 30): Next drop preview → re-engage

  → Customer data logged: first purchase date, product, source (TikTok)
  → At 3rd purchase: tagged VIP automatically in Klaviyo
  → At 60 days no second purchase: enters Win-Back flow
```

---

## The Full Attribution Loop

```
TikTok video → View → Link click → LP (UTM: tiktok/organic)
  → Purchase → Klaviyo post-purchase flow
  → 30 days later: next drop email → clicks → purchases again
  → Now attributed: Retention (email) — but original acquisition: TikTok

LTV calculation must account for TikTok as acquisition source.
Triple Whale cohort analysis: "First touch: TikTok organic" → LTV $[X]
This is the true ROAS of TikTok content.
```

**Owner:** Paid Ads (tracks paid TikTok attribution) / Retention (tracks LTV by source) / Shopify CRO (ensures UTM persists through funnel)

---

## Key Optimization Levers

| Lever | Department | Impact |
|---|---|---|
| Hook win rate | TikTok Growth | Top of funnel volume |
| LP CVR (organic TikTok traffic) | Shopify CRO | Direct revenue per view |
| ATC rate | Shopify CRO + Copywriting | Volume of checkout-eligible sessions |
| Abandoned cart recovery | Retention | Recovers 12–18% of lost revenue |
| Post-purchase repeat rate | Retention | LTV multiplier on all TikTok-acquired customers |
| TikTok paid amplification of top organic | Paid Ads | Scales what's already proven |
