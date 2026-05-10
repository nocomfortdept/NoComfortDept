# Workflow: Segment Build
## Department: Retention & Email

Reference for building and maintaining all Klaviyo segments.

---

## Master Segments

### VIP
```
Definition: Placed ≥ 3 orders (lifetime)
Name: NCD-VIP
Use: Early drop access, behind-scenes content, exclusive announcements
Campaign frequency: Up to 3/week during drop windows
```

### Active Customers
```
Definition: Placed ≥ 1 order AND last order < 90 days ago
Name: NCD-Active
Use: Standard drop announcements, product campaigns
Campaign frequency: Max 2/week outside drops
```

### At-Risk
```
Definition: Placed ≥ 1 order AND last order 60–90 days ago
Name: NCD-AtRisk
Use: Win-back sequence trigger, gentle nudge campaigns
Campaign frequency: Max 1/week
```

### Lapsed
```
Definition: Placed ≥ 1 order AND last order > 90 days ago
Name: NCD-Lapsed
Use: Final win-back attempt, then suppress
Campaign frequency: 1 campaign only before suppress
```

### Engaged Non-Buyers
```
Definition: Opened ≥ 3 emails AND has not placed any order
Name: NCD-EngagedNonBuyer
Use: Content-first nurture, social proof heavy, soft sell
Campaign frequency: Max 1/week
```

### Drop Waitlist
```
Definition: Signed up for specific drop waitlist (tag: waitlist-drop[#])
Name: NCD-Waitlist-Drop[#]
Use: Targeted drop announcement only — not general campaigns
Campaign frequency: Drop-day only
```

---

## Segment Build Process

1. Open Klaviyo → Segments → Create Segment
2. Name with convention: `NCD-[SegmentName]`
3. Build conditions (purchase count, date, email engagement)
4. Add exclusions: Unsubscribed, Bounced, Suppressed
5. Save and check estimated size
6. Document in this file with definition and use case

---

## Exclusion Protocol

Always exclude from campaigns:
- Global suppression list (unsubscribed)
- Hard bounces
- Soft bounce > 3 attempts

Before sending any campaign:
- Exclude suppressed + bounced first
- Review estimated send size before confirming

---

## Segment Health Check (monthly)

| Segment | Target Size | Current Size | Growth | Action |
|---|---|---|---|---|
| NCD-VIP | Growing | — | — | — |
| NCD-Active | > 40% of list | — | — | — |
| NCD-AtRisk | < 20% of list | — | — | — |
| NCD-Lapsed | < 15% of list | Suppress if > 20% | — | — |
| NCD-EngagedNonBuyer | — | — | — | — |

If NCD-Lapsed > 20% of list → audit acquisition source quality and welcome flow performance.
