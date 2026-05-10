# Retention Systems → LTV Increase
## How NCD Turns a First Sale Into a Long-Term Customer

---

## The LTV Thesis

A customer who buys once costs money to acquire. A customer who buys three times is profitable. A customer who buys five times or more is the entire business model.

NCD's economics depend on repeat purchasing — not constant new customer acquisition. This means retention isn't a secondary function. It's the profit engine.

**The math:**
```
CAC (cost to acquire): $22–28 via paid ads
AOV (average order value): ~$80–120
Gross margin: ~55–65%

1st purchase: margin ~$55 - $25 CAC = $30 profit
2nd purchase (no acquisition cost): $55 profit
3rd purchase: $55 profit
→ Customer who buys 3x is worth ~3.5x more than 1-purchase customer
```

Every retention system built is a direct profit multiplier.

---

## The NCD Customer Lifecycle

Every customer passes through stages. Each stage has a different job for the retention system.

```
STAGE 0 — PROSPECT
  Never purchased. On email list (opt-in, TikTok DM, pop-up).
  Job: Welcome. Set the brand expectation. Create desire.
  Flow: Welcome Series (3 emails over 7 days)

STAGE 1 — FIRST BUYER
  Just purchased for the first time.
  Job: Confirm they made the right choice. Begin relationship.
  Flow: Post-Purchase Series (4 emails over 30 days)
  Goal: Second purchase within 60 days.

STAGE 2 — ACTIVE CUSTOMER
  2+ purchases. Engaged with emails. Opening, clicking.
  Job: Keep them in the NCD world. Build identity attachment.
  Strategy: Campaign sends (drops, content). Not too frequent.
  Goal: Third purchase. VIP qualification.

STAGE 3 — VIP
  3+ purchases. Tagged "VIP" in Klaviyo automatically.
  Job: Make them feel like insiders. Give them something no one else gets.
  Strategy: Early drop access (24h before public). VIP Welcome flow. Exclusive content.
  Goal: Evangelize. They bring others.

STAGE 4 — AT-RISK
  60+ days since last purchase. Engagement declining.
  Job: Intervene before they become lapsed.
  Flow: Win-Back Series (3 emails over 14 days)
  Target: 8% of at-risk customers make a purchase.

STAGE 5 — LAPSED
  90+ days, no purchase, low engagement.
  Job: One final attempt. Then suppress.
  Flow: Re-engagement ("Last one from us.")
  If no open → suppress. Protect deliverability.
```

---

## The Klaviyo Flow Architecture

### Flow 1: Welcome Series
**Trigger:** List join (pop-up, TikTok DM opt-in, checkout opt-in)
**Goal:** Brand immersion + first purchase

```
Email 1 (Immediate): "Welcome to NCD."
  → Brand statement. Who NCD is. What we stand for.
  → No heavy sell. One soft CTA: "See the current collection."

Email 2 (Day 2): "Why we don't discount."
  → Brand education. Value through scarcity, not price cuts.
  → Social proof: what customers say.
  → CTA: "Shop now."

Email 3 (Day 5): "The drop model."
  → How NCD releases products. Why limited quantities.
  → Creates anticipation + FOMO for next drop.
  → CTA: "You're on the list for the next one."

Performance target: 35%+ open rate. 8%+ click rate. 5%+ conversion to first purchase.
```

---

### Flow 2: Abandoned Cart
**Trigger:** Cart abandoned → 1h no purchase
**Goal:** Recover the near-conversion

```
Email 1 (1h): "You left something."
  → Product image, name, price. No guilt. No desperation.
  → Single CTA: "Complete your order."

Email 2 (24h): "Still available. Not for long."
  → Inventory signal added (if low stock, say so).
  → "We hold your cart for 48 hours."

Email 3 (48h): "This is the last reminder."
  → Clarity, not pressure. "It'll be gone soon. Or it'll still be here. Up to you."
  → No discount offered.

Performance target: 12%+ recovery rate. RPR ≥ $0.80.
```

---

### Flow 3: Browse Abandonment
**Trigger:** Product view → 4h no ATC
**Goal:** Bring back warm browsers before interest fades

```
Email 1 (4h): Product name + single image. No copy beyond subject line.
  Subject: "You were looking at [Product Name]."
  → Let the product speak. One CTA.

Performance target: 25%+ open rate. 4%+ click-through.
```

---

### Flow 4: Post-Purchase Series
**Trigger:** Order shipped
**Goal:** Reinforce purchase decision. Build identity bond. Prime for repeat.

```
Email 1 (Immediate): "It's on its way."
  → Order confirmation supplement. Tracking info.
  → Brand story: "Here's what you just became part of."

Email 2 (Day 3 after delivery): "How's it fitting?"
  → Casual. Not a review ask. Genuine.
  → Link to size guide / care instructions.
  → Soft mention of other products in the collection.

Email 3 (Day 14): "You've had it for two weeks."
  → Review request. One sentence ask. Loox / Okendo link.
  → Social proof angle: "Most guys who buy once, buy again."

Email 4 (Day 30): "Something new is coming."
  → Drop preview. No specific date. Builds anticipation.
  → "You're on the early list." (They're an existing customer — treat them that way.)

Performance target: 40%+ open rate (high intent list). 15% convert to second purchase within 60 days.
```

---

### Flow 5: VIP Welcome
**Trigger:** Customer tag "VIP" added (3rd purchase)
**Goal:** Acknowledge the milestone. Solidify loyalty.

```
Email 1 (Immediate): "You're in."
  → Direct. Earned. Not celebratory — affirming.
  → "You've bought NCD three times. That means something."
  → What VIP means: early drop access. First to know. That's it. No gimmicks.

Performance target: 55%+ open rate. VIP segment LTV 2.5x non-VIP.
```

---

### Flow 6: Win-Back (At-Risk → Active)
**Trigger:** 60 days since last order, customer previously active
**Goal:** Return to active status before lapse is permanent

```
Email 1 (Day 60): "It's been a while."
  → No guilt. Acknowledgment. Show what's new.
  → CTA: "See what's in the collection."

Email 2 (Day 67): "We're dropping something soon."
  → Future-state hook. Builds anticipation.
  → Not a discount. Never a discount.

Email 3 (Day 74): "Last one from us for now."
  → Final attempt. No pressure. Respect.
  → "We'll still be here when you're ready."
  → If no open → move to suppression candidate list.

Performance target: 8%+ make a purchase. 25%+ re-engage (open).
```

---

### Flow 7: SMS Welcome
**Trigger:** SMS opt-in at checkout
**Goal:** Open an additional high-engagement channel

```
SMS 1 (Immediate): "NCD: You're in. Drop alerts go here. Opt out: STOP."
SMS 2 (Day 3 if no purchase): "Still thinking? [link]"

Note: SMS is for drop announcements and stock alerts only. Not campaigns.
Performance target: ≤ 1% opt-out rate. 25%+ click rate on drop alerts.
```

---

## Campaign Strategy (Non-Flow Emails)

Flows run automatically. Campaigns are sent deliberately.

### When to Send a Campaign

The NCD Email Test (from kpis-sops-tools.md):
1. Is there something worth saying?
2. Is the segment right?
3. Is the timing right? (Not within 3 days of last send unless drop)
4. Is the subject line NCD?
5. Does it have one job?

**Campaign types NCD sends:**
- Drop announcement (to Active + Engaged Non-Buyers — VIP got it yesterday)
- Stock alert (to "Clicked but didn't purchase" segment — manually triggered at 30% inventory)
- Sold-out notice (to drop email list — within 4h of sellout)
- Win-back campaign (to At-Risk segment — when win-back flow data shows timing opportunity)

**Campaign types NCD does not send:**
- "Just checking in" emails
- Holiday sales (no discounts)
- Generic "new arrivals" blasts to full list

---

## Segmentation and Its Role in LTV

The list is not one audience. It is five. Each segment receives different communication.

| Segment | Definition | Communication |
|---|---|---|
| VIP | 3+ purchases | Early drop access, VIP Welcome flow, all campaigns |
| Active | Purchased in last 90 days OR opened last 5 campaigns | All campaigns, drop emails |
| Engaged Non-Buyer | On list, opens emails, never purchased | Drop announcements, welcome series |
| At-Risk | Was active, 60–90 days no purchase | Win-back flow, not campaign blasts |
| Lapsed | 90+ days no purchase, low engagement | Re-engagement only. Then suppress. |

**Never blast the full list.** Segmentation protects deliverability. Deliverability protects revenue.

---

## List Health and Deliverability

High LTV requires high deliverability. Deliverability requires list hygiene.

### Monthly List Health Actions
1. Suppress hard bounces immediately
2. Suppress soft bounce pattern (3+ bounces) 
3. Run 90-day non-openers through re-engagement, then suppress
4. Review spam complaint rate — anything above 0.08% triggers acquisition audit
5. Monitor VIP open rate — should be highest of any segment

### Deliverability Thresholds
```
Green zone:  Bounce rate < 0.1% | Spam complaints < 0.08% | Unsubscribe < 0.2%
Yellow zone: Bounce 0.1–0.3% | Spam 0.08–0.1% | Unsub 0.2–0.5% → investigate
Red zone:    Bounce > 0.3% | Spam > 0.1% | Unsub > 0.5% → pause sends, fix immediately
```

---

## LTV Growth Metrics (Checked Monthly)

| Metric | Target | Source |
|---|---|---|
| Repeat purchase rate (90 days) | ≥ 25% | Shopify Analytics |
| Average orders per customer | Growing QoQ | Shopify Analytics |
| Customer LTV (12-month) | Growing MoM | Triple Whale / Shopify |
| VIP segment as % of total customers | Growing | Klaviyo |
| Win-back success rate | ≥ 8% | Klaviyo flow report |
| Post-purchase flow repeat purchase rate | ≥ 15% within 60 days | Klaviyo flow report |
| Revenue from flows vs. campaigns | ≥ 40% from flows | Klaviyo attribution |

---

## The LTV Compounding Effect

```
Month 1:  100 new customers acquired (TikTok + Paid Ads)
Month 2:  25 of those purchase again (25% repeat rate)
Month 3:  10 of those make a 3rd purchase → become VIP
Month 6:  VIP customers refer 1–2 new buyers each (organic word-of-mouth)
Month 12: Original 100 customers have generated 1.8x the revenue
           of a 100-customer cohort with no retention system

This is the compound interest of retention.
Every dollar spent on email flows, list health, and segmentation
returns more revenue than the equivalent dollar spent on new acquisition —
once the retention system is built and running.
```

The goal is not a longer list. The goal is a better list — where every customer on it is actively in a relationship with NCD, at the right stage, receiving the right communication at the right time.
