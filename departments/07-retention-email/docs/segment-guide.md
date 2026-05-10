# NoComfortDept — Segment Guide
## Maintained by: Retention & Email

Quick reference for which segment receives what communication.

---

## Segment → Communication Map

| Segment | Flows Active | Campaign Eligible | Max Freq/Week | Notes |
|---|---|---|---|---|
| NCD-VIP | All flows | Yes | 3 | Early access to drops, exclusive content |
| NCD-Active | All flows | Yes | 2 | Standard comms |
| NCD-AtRisk | Win-back flow | Limited (1/week) | 1 | Gentle — don't over-send |
| NCD-Lapsed | Win-back flow | Campaign only | 1 total then suppress | Final attempt before suppression |
| NCD-EngagedNonBuyer | Welcome (if not triggered) | Yes | 1 | Content-first, low-pressure |
| NCD-Waitlist-Drop[#] | None | Drop day only | 1 (drop-day only) | Drop launch only |
| Suppressed | None | No | 0 | Do not contact |

---

## VIP Treatment Protocol

VIP = 3+ orders lifetime.

VIP gets:
- Drop access 24 hours before general list
- Behind-the-scenes production content (exclusive)
- Priority response on support issues
- Optional: Early price lock before public inventory depletes

VIP does NOT get:
- Discounts (NCD does not discount — VIP privilege is access, not price)
- More than 3 emails/week (even VIPs have limits)

---

## Suppression Rules

| Condition | Action |
|---|---|
| Clicked unsubscribe | Immediate global suppress |
| Hard bounce | Immediate suppress |
| Soft bounce ≥ 3 | Flag for suppress review |
| No open in 90 days | Enter win-back flow → suppress if no re-engage |
| Spam complaint | Immediate global suppress + investigate |

---

## List Health Benchmarks

| Metric | Healthy | Warning | Critical |
|---|---|---|---|
| List open rate | ≥ 35% | 20–35% | < 20% |
| Unsubscribe rate | ≤ 0.2% | 0.2–0.5% | > 0.5% |
| Hard bounce rate | ≤ 0.1% | 0.1–0.3% | > 0.3% |
| Active % of list | ≥ 60% | 40–60% | < 40% |

If list open rate drops below 20%: run deliverability audit, review suppression hygiene, check subject line quality.
