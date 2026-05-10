# Workflow: Campaign Brief
## Department: Paid Ads

Fill this brief before launching any paid campaign. Never launch without a complete brief.

---

## Campaign Brief Template

```
CAMPAIGN BRIEF
Campaign ID: ADS-[###]
Date: [DATE]
Lead: Paid Media Strategist

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OBJECTIVE
[ ] Awareness (CPM optimization)
[ ] Traffic (CPC optimization)
[ ] Conversion — Purchase
[ ] Conversion — ATC
[ ] Retention — Existing customers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PRODUCT / OFFER
Product: ___
Price: $___
Inventory available for campaign: ___ units
Drop number: ___
Special angle / hook for this campaign: ___

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AUDIENCE STRATEGY
Cold audience:
  [ ] Broad (Meta-optimized)
  [ ] Interest stack: ___
  [ ] LLA seed: ___

Warm retargeting:
  [ ] Video viewers ___% (___-day window)
  [ ] Site visitors (___-day window)
  [ ] ATC / Initiate checkout (___-day window)

Hot retargeting:
  [ ] ATC (___-day window)
  [ ] Checkout initiated (___-day window)
  [ ] Past purchasers

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BUDGET
Total daily budget: $___
Cold allocation: $___/day
Warm allocation: $___/day
Hot allocation: $___/day

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CREATIVE REQUIREMENTS
Format(s) needed: [ ] Static / [ ] Carousel / [ ] Video / [ ] UGC
Quantity of ad creatives: ___
Brief sent to Creative Direction: [ ] Yes (CD-___) / [ ] No
Copy brief sent to Copywriting: [ ] Yes / [ ] No

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DESTINATION
Landing page URL: ___
UTM: utm_source=[platform]&utm_medium=paid&utm_campaign=[name]

Landing page audit completed by CRO: [ ] Yes / [ ] No

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUCCESS CRITERIA
Primary KPI: ___
Target: ___
Kill threshold: ___
Review date: [DATE + 3 days]
```

---

## Campaign Structure in Ads Manager

```
CAMPAIGN (CBO)
│
├── AD SET: Cold — Broad
│   └── Ads: A1, A2, A3 (creative variants)
│
├── AD SET: Cold — Interest
│   └── Ads: A1, A2 (best 2 creatives)
│
├── AD SET: Warm — Video + Site Visitors
│   └── Ads: B1, B2 (retargeting-angle copy)
│
└── AD SET: Hot — ATC + Checkout
    └── Ads: C1 (urgency copy, single creative)
```

---

## Launch Checklist

- [ ] Brief completed and approved
- [ ] Creative assets uploaded and checked in Ads Manager
- [ ] Copy approved (primary text, headline, description)
- [ ] Pixel firing on landing page (test with Pixel Helper)
- [ ] UTM parameters verified
- [ ] Conversion event set correctly (Purchase, not View Content)
- [ ] Budget caps set per ad set
- [ ] Schedule: [ ] Run always / [ ] Scheduled hours
- [ ] Campaign published ← do not do this until all above are checked
