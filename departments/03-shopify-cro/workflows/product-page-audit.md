# Workflow: Product Page Audit
## Department: Shopify CRO

Run this audit on every product page before launch and quarterly thereafter.

---

## Audit Checklist

### Above the Fold (mobile)
- [ ] Product name visible without scrolling
- [ ] Primary product image loads in < 1.5s
- [ ] Price visible above fold
- [ ] ATC button visible or accessible within one scroll
- [ ] No broken images or layout shifts (CLS)

### Product Media
- [ ] Hero image is shoulder-and-above or full garment — never cropped awkwardly
- [ ] Minimum 3 images (front, back, detail)
- [ ] Images are compressed (< 200kb each)
- [ ] Alt text present on all images (for SEO + accessibility)
- [ ] Hover zoom enabled on desktop (`data-zoom-img`)

### Product Information
- [ ] Tagline present and passes brand voice check
- [ ] Description leads with material spec (not adjective)
- [ ] Feature list populated (pipe-delimited metafield)
- [ ] Size guide link active
- [ ] Shipping/returns copy present

### Conversion Elements
- [ ] Size selector functional — correct variant IDs mapped
- [ ] Low-stock dots showing on variants with ≤ 5 inventory
- [ ] Sold-out sizes disabled and visually crossed
- [ ] ATC gate fires (shakes grid if no size selected)
- [ ] Stock message updates dynamically on size selection
- [ ] Countdown timer initialized (if enabled in section settings)
- [ ] Live viewer counter initialized (if enabled)
- [ ] Sticky ATC bar triggers when price block leaves viewport
- [ ] Trust strip present (🔒 Secure, 📦 Returns, ⚡ Ships)

### Accordion / Details
- [ ] Materials & Construction block populated
- [ ] Sizing & Fit block populated
- [ ] Shipping & Returns block populated
- [ ] Care Instructions block populated

### Mobile Specific
- [ ] Size grid is tappable (min 44px tap target per button)
- [ ] ATC button is full width on mobile
- [ ] Images do not overflow viewport width
- [ ] Sticky ATC doesn't obscure important content on small screens

### Page Speed (run via Lighthouse on mobile)
- [ ] LCP ≤ 2.5s
- [ ] CLS ≤ 0.1
- [ ] FID / INP ≤ 200ms
- [ ] No render-blocking resources without `defer` or `async`

---

## Scoring

Count checkboxes. If < 85% pass → prioritize fixes before launch.

---

## Audit Output Format

```
PRODUCT PAGE AUDIT
Product: [Name]
Date: [DATE]
Auditor: CRO Specialist

SCORE: [X/Y checks passed]

CRITICAL FAILURES (must fix before launch):
- [Issue] → [Fix]

MINOR FAILURES (fix within 48h):
- [Issue] → [Fix]

PERFORMANCE METRICS:
LCP: [Xs] | CLS: [X] | INP: [Xms]

STATUS: [LAUNCH READY / NEEDS FIXES]
```
