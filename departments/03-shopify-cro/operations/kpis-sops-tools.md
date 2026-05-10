# Shopify CRO — KPIs, SOPs, Tools & Automation
## Department: 03 | Employee: CRO Specialist

---

## KPI Dashboard

### Primary KPIs (checked daily)

| KPI | Target | Kill/Alert | Source |
|---|---|---|---|
| Overall store CVR | ≥ 2.5% | < 1.5% (investigate) | Shopify Analytics |
| Add-to-cart rate | ≥ 8% | < 4% (P1 investigation) | Shopify Analytics |
| Checkout initiation from ATC | ≥ 60% | < 40% (checkout friction) | Shopify Analytics |
| Checkout completion | ≥ 75% | < 55% (payment/UX issue) | Shopify Analytics |
| Mobile CVR | ≥ 2.0% | < 1.0% (mobile UX issue) | Google Analytics |
| Page LCP (mobile) | ≤ 2.5s | > 4s (P1 fix) | Google PageSpeed |

### Secondary KPIs (checked weekly)

| KPI | Target | Source |
|---|---|---|
| Size selection rate (before ATC) | ≥ 80% of ATC attempts select size first | Hotjar / custom events |
| TikTok LP CVR | ≥ 3.0% (higher than main store — intent traffic) | Shopify + UTM |
| A/B test velocity | ≥ 1 test running at all times | Test log |
| Session duration on product page | ≥ 60 seconds | Google Analytics |
| Bounce rate (TikTok traffic) | ≤ 55% | GA4 + UTM |

---

## Decision-Making Framework

### The CRO Hypothesis Template

Before making any change to a page, complete:

```
HYPOTHESIS: "If we [change X], then [metric Y] will [increase/decrease]
             because [behavioral reason]."

CONFIDENCE: [High / Medium / Low]
EASE: [Easy / Medium / Hard]
ICE SCORE: [Average of Impact, Confidence, Ease — 1–10]

TEST DURATION: [Minimum 7 days, spanning Mon–Sun]
SAMPLE NEEDED: [≥ 100 conversions per variant for significance]

ROLLBACK: [How to undo this in < 10 minutes]
```

Never ship a change without a hypothesis. "I think this will look better" is not a hypothesis.

---

## Priority Hierarchy

```
P1 — Revenue-blocking bug (checkout broken, ATC non-functional, 404 on product pages)
     → Fix immediately. Everything else stops.
     → Notify founder if fix takes > 30 minutes.

P2 — Drop-launch readiness (LP not built, product page not updated before launch)
     → Fix before launch. Block the drop if needed.

P3 — Active A/B test management (call winner, kill loser, set up next test)
     → Daily attention. Don't let tests run past significance without acting.

P4 — Ongoing optimization (page speed, UX improvements, copy implementation)
     → Scheduled work. Important, not urgent.

P5 — Documentation (test-log, cro-playbook)
     → End of day or Friday. Never skip — these compound into knowledge.
```

---

## SOPs

### SOP-CRO-01: Daily System Health Check

```
1. Open Shopify Analytics → check CVR, ATC, checkout rate vs. yesterday
2. Open GA4 → check mobile vs. desktop split, bounce rates
3. Load product page on iPhone (actual device if possible)
   - Verify countdown timer ticking
   - Verify size selector works on tap
   - Verify sticky ATC appears on scroll
   - Verify social proof notifications fire
4. Check JS console for errors (open DevTools on product page)
5. If all clear → log "SYSTEM HEALTHY [date]" in ops journal
6. If any failure → classify P1/P2, fix immediately
```

---

### SOP-CRO-02: A/B Test Setup & Management

```
SETUP:
1. Complete hypothesis template
2. Calculate required sample size (use Evan Miller calculator)
3. Build variant in theme (duplicate section/snippet, not override)
4. Set up via Shopify A/B tool or Google Optimize / VWO
5. 50/50 split, no audience bias
6. Log in test-log.md: Test ID, start date, hypothesis, control, variant

DAILY MANAGEMENT:
1. Check conversion count per variant in analytics
2. Do NOT call a winner until ≥ 100 conversions per variant
3. Do NOT look at intermediate results and make decisions (peeking problem)
4. Check for external factors (drop launched, traffic spike) that could skew

CALLING A WINNER:
1. Reach ≥ 100 conversions per variant AND ≥ 7 days run
2. Calculate statistical significance (target ≥ 95%)
3. If variant wins → ship it, update cro-playbook.md
4. If control wins → keep control, log learnings
5. If inconclusive → extend or redesign test
6. Archive result in test-log.md
```

---

### SOP-CRO-03: TikTok Landing Page Build

```
1. Receive LP brief from TikTok Growth (departments/04-tiktok-growth/workflows/lp-brief.md)
2. Confirm all required fields completed
3. Create new Shopify page: /pages/drop-[#]-tiktok or /pages/[campaign-slug]
4. Assign template: page.tiktok-lp.json
5. Configure section settings:
   - Hero image/video
   - Headline and subheadline
   - Featured product (link correct Shopify product handle)
   - Countdown hours (session-based, not global clock)
   - Stock text and stock count
   - Review blocks (minimum 3)
   - UTM source configured
6. Test on real iPhone (not just simulator):
   - Hero loads in < 2s
   - ATC button full width and tappable
   - Size grid tap targets adequate
   - Countdown counting down correctly
   - Social proof toast fires at 4s
   - ATC form submits correct variant
7. Run QA checklist from workflows/lp-brief.md
8. Return live URL + UTM-appended link to TikTok Growth
```

---

## Recommended Tools

| Tool | Purpose | Priority |
|---|---|---|
| **Shopify Analytics** | Store CVR, ATC, checkout funnel | Essential |
| **Google Analytics 4** | Segmented traffic analysis, mobile vs. desktop | Essential |
| **Hotjar** | Session recordings, heatmaps, scroll depth | Essential |
| **Google PageSpeed Insights** | LCP, CLS, INP mobile scores | Essential |
| **Evan Miller A/B Calculator** | Statistical significance calculations | Essential |
| **VS Code + Shopify CLI** | Theme development, local preview | Essential |
| **BrowserStack** | Cross-device and cross-browser testing | High |
| **Lucky Orange** | Real-time visitor behavior | Medium |
| **Shopify Search & Discovery** | Product filter and search optimization | Medium |
| **Rebuy** | Post-purchase upsell and cross-sell | Low-medium |

---

## Automation Opportunities

| Automation | Tool | Trigger | Impact |
|---|---|---|---|
| CVR drops 20% → Slack alert | GA4 + Zapier | Daily analytics check | Catch regressions fast |
| New product added to Shopify → CRO audit checklist triggered | Shopify webhook + Notion | Founder adds product | Nothing ships unchecked |
| A/B test reaches 100 conversions → alert CRO to review | VWO/GA4 + Zapier | Conversion count | Don't leave tests running |
| Page LCP exceeds 3s → alert | PageSpeed API + cron | Daily automated check | Performance maintained |
| Checkout abandonment rate spikes → alert | GA4 + Zapier | Threshold breach | Fix friction fast |
