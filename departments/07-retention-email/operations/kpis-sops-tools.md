# Retention & Email — KPIs, SOPs, Tools & Automation
## Department: 07 | Employee: Retention Strategist

---

## KPI Dashboard

### Primary KPIs (checked daily)

| KPI | Target | Alert Threshold | Source |
|---|---|---|---|
| Email open rate | ≥ 35% | < 20% (deliverability issue) | Klaviyo |
| Email click rate | ≥ 3.5% | < 1.5% (content/relevance issue) | Klaviyo |
| Revenue per recipient (RPR) | ≥ $0.80 | < $0.30 (wrong segment or offer) | Klaviyo |
| Abandoned cart recovery rate | ≥ 12% | < 5% (flow timing or copy issue) | Klaviyo |
| Unsubscribe rate | ≤ 0.2% | > 0.5% (over-sending or relevance) | Klaviyo |
| Bounce rate | ≤ 0.1% | > 0.3% (list hygiene needed) | Klaviyo |

### Secondary KPIs (checked weekly)

| KPI | Target | Source |
|---|---|---|
| Repeat purchase rate (90 days) | ≥ 25% | Shopify Analytics |
| Average orders per customer | Growing QoQ | Shopify Analytics |
| Customer LTV (12-month) | Growing MoM | Shopify / Triple Whale |
| SMS opt-out rate | ≤ 1% | SMS platform |
| VIP segment growth | +5–10% MoM | Klaviyo |
| Win-back success rate (lapsed → purchase) | ≥ 8% | Klaviyo flow report |

---

## Priority Hierarchy

```
P1 — Deliverability emergency (bounce rate > 0.5%, spam complaints > 0.1%)
     → Pause all sends immediately. Audit list. Fix source of bad addresses.

P2 — Drop campaign email (must send at correct time with correct segment)
     → Confirmed built and tested 24h before drop. No surprises on drop day.

P3 — Abandoned cart flow issues (recovery rate below 5%)
     → Investigate within 24h. Check: trigger firing? Copy? Timing? Link?

P4 — Win-back and at-risk management
     → Weekly. Systematic. Keeps LTV growing.

P5 — Documentation and list health
     → Friday EOD. Non-negotiable.
```

---

## Decision-Making Framework

### When to Send an Email (The NCD Email Test)

Before scheduling any campaign send, answer:

1. **Is there something worth saying?** (A drop, a unit count, a story — not "just checking in")
2. **Is the segment right?** (Are we sending to people who care about this right now?)
3. **Is the timing right?** (Not within 3 days of the last send unless it's a drop event)
4. **Is the subject line NCD?** (Direct, earned, no emoji spam, no desperation)
5. **Does it have one job?** (One CTA, one link, one outcome)

If any answer is no → don't send. Wait until the answer is yes.

### Segmentation Decision Tree

```
Is this a drop announcement?
  YES → Send to: VIP first, then Active + Engaged Non-Buyers
  NO, it's a win-back → Send to: At-Risk + Lapsed (< 90 days)
  NO, it's evergreen content → Send to: Active only
  NO, it's a product story → Send to: Engaged Non-Buyers + Active

Is the full list warranted?
  Only for: major brand announcements, large drops, annual moments
  Never for: regular weekly sends (always segment)
```

---

## SOPs

### SOP-RET-01: Email Flow Setup (Klaviyo)

```
1. Define trigger event (list join / ATC / order / time-since-purchase)
2. Write subject lines and preheaders (owned by Retention)
3. Brief Copywriting for body copy (use email-copy workflow)
4. Build flow structure in Klaviyo:
   - Set trigger
   - Configure time delays between emails
   - Add segment filters on each email (e.g., "has not purchased since trigger")
   - Set up conditional splits if needed (purchased? → exit flow)
5. Receive body copy from Copywriting
6. Load copy into Klaviyo email builder
7. Preview on mobile (iOS + Android)
8. Run QA checklist:
   - Dynamic variables rendering correctly ✓
   - Links all working and UTM-tagged ✓
   - Unsubscribe link present ✓
   - Sender name "NCD" ✓
   - Reply-to is monitored ✓
9. Set flow to Live
10. Monitor first 48h closely — open rate, click rate, any errors
```

---

### SOP-RET-02: Drop Email Campaign Build

```
TIMELINE (7+ days before drop):
D-7: Write subject lines for all drop emails (VIP early access, drop announcement, stock alert)
D-5: Brief Copywriting on any body copy needed beyond templates
D-3: Receive copy. Build emails in Klaviyo.
D-2: QA all emails. Preview on mobile. Test dynamic variables.
     Segment configured. VIP segment confirmed.
D-1: Final check. Schedule VIP email for D-0 at 8am minus 24h (= D-1 at 8am).
     Schedule drop announcement for D-0 at 8am.
     Prepare stock alert email (do not schedule — send manually at trigger point).

DROP DAY:
→ VIP email went out yesterday at 8am
→ Drop announcement sends at 8am today — verify in Klaviyo (sent status)
→ Monitor: open rate at 1h, 2h, 4h
→ When inventory hits 30%: send stock alert manually to "Clicked drop email, no purchase" segment
→ When sold out: send sold-out email within 4h ("Gone. Next drop: when it's ready.")

POST-DROP:
→ Post-purchase flow triggered for all buyers (automatic)
→ Log all email metrics in flow-library.md
```

---

### SOP-RET-03: Monthly List Health Audit

```
1. Pull total list size and segment distribution
2. Check metrics by segment:
   - VIP: should have highest open + click rates
   - Active: baseline metrics
   - At-Risk: open rate declining — compare to 30 days ago
   - Lapsed: if > 15% of list → run win-back immediately

3. Identify 90-day non-openers
   → Move to suppression candidate list
   → Run one final re-engagement send ("Last one from us.")
   → If no open → suppress permanently

4. Check bounce rate against total sends
   → Hard bounces: suppress immediately
   → Soft bounce pattern (3+ times): suppress

5. Run spam complaint review
   → Any complaint rate > 0.08% → investigate acquisition source

6. Document in segment-guide.md: segment sizes, health score, actions taken
```

---

## Recommended Tools

| Tool | Purpose | Priority |
|---|---|---|
| **Klaviyo** | Email flows, campaigns, segments, analytics | Essential |
| **Postscript / Klaviyo SMS** | SMS flows and campaigns | High |
| **Triple Whale** | LTV tracking, cohort analysis, retention metrics | High |
| **Shopify Analytics** | Purchase frequency, repeat rate, AOV | Essential |
| **Typeform** | Post-purchase surveys for customer insight | Medium |
| **Loox / Okendo** | Review collection — feeds back into copy + social proof | Medium |
| **Privy** | Email capture pop-ups (exit-intent, scroll-trigger) | Medium |
| **Gorgias** | Customer support — replies to email responses | Medium |
| **Notion** | Flow library, segment guide, campaign calendar | High |

---

## Automation Opportunities

| Automation | Tool | Trigger | Impact |
|---|---|---|---|
| Order placed → post-purchase flow | Klaviyo | Order confirmed | Zero manual effort per order |
| Customer hits 3rd purchase → add to VIP | Klaviyo | Order count = 3 | VIP segment auto-grows |
| 60 days no purchase → enter win-back | Klaviyo | Last order date check | At-risk customers auto-addressed |
| Abandoned cart → flow triggers at 1h | Klaviyo | Cart abandoned | Recovery starts automatically |
| Bounce rate > 0.3% → Slack alert | Klaviyo + Zapier | Threshold breach | Catch deliverability issues fast |
| Post-purchase survey response → log in Notion | Typeform + Zapier | Survey submitted | Customer intelligence gathered |
| SMS opt-in at checkout → add to SMS list | Shopify + Postscript | Checkout | SMS list grows with each order |

### Key Klaviyo Automation Architecture

```
KLAVIYO FLOWS (all automated, no manual trigger):
  Welcome Series       → Trigger: List join
  Abandoned Cart       → Trigger: Cart add → 1h no purchase
  Browse Abandonment   → Trigger: Product view → 4h no ATC
  Post-Purchase        → Trigger: Order shipped
  Win-Back             → Trigger: 60 days since last order
  VIP Welcome          → Trigger: Customer tag "VIP" added
  SMS Welcome          → Trigger: SMS opt-in

KLAVIYO CAMPAIGNS (manually scheduled, but automated in delivery):
  Drop Announcement    → Scheduled per drop calendar
  Stock Alert          → Semi-manual (triggered at 30% inventory remaining)
  Sold-Out Notice      → Manual send within 4h of sellout
```
