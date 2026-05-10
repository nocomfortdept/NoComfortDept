# Workflow: Landing Page Brief (TikTok → Shopify)
## Department: Shopify CRO ← TikTok Growth

Use this when `04-tiktok-growth` requests a TikTok-specific landing page build.

---

## Brief Intake (filled by TikTok Growth)

```
LP BRIEF
Requested by: TikTok Growth
Date: [DATE]

CAMPAIGN/DROP: [Name or drop number]
UTM CAMPAIGN: [utm_campaign value]
TIKTOK VIDEO: [Video URL or ID]
CONTENT PILLAR: [Product Truth / Identity Mirror / Drop Mechanics / Social Proof]

FEATURED PRODUCT: [Shopify product handle]

HERO MEDIA:
[ ] Video (provide .mp4 URL)
[ ] Image (provide Shopify image ID)
[ ] Description of visual: ___

HERO HEADLINE: [Max 4 words, uppercase]
SUBHEADLINE: [1 sentence]
EYEBROW TEXT: [e.g., "As Seen on TikTok" / "Drop 5"]
PRIMARY CTA: [Button text, e.g., "Shop the Drop"]

URGENCY SETTINGS:
Countdown hours: [__]
Stock text: [e.g., "47 units remaining — selling fast"]
Show stock indicator: [ ] Yes / [ ] No

REVIEWS TO SHOW: [List 3–4 review block texts and reviewer names]
```

---

## CRO Build Checklist

Once brief received, CRO Specialist:

- [ ] Confirm featured product is live and inventory-connected
- [ ] Set section settings in `sections/tiktok-landing.liquid` via `templates/page.tiktok-lp.json`
- [ ] Configure countdown to use session-based timer (not global clock)
- [ ] Add review blocks via theme editor
- [ ] Confirm UTM source is captured by `persistUTM()` in nocomfort.js
- [ ] Test ATC form submits correct variant to cart
- [ ] Test on mobile (primary device for TikTok traffic)
- [ ] Verify sticky ATC bar appears after scrolling past price
- [ ] Verify social proof notifications fire on `#social-proof-notif`
- [ ] Share live URL with TikTok Growth for link-in-bio

---

## LP QA Checklist (mobile)

- [ ] Hero video/image loads in < 1.5s
- [ ] Headline is visible without scrolling
- [ ] CTA button is tappable (min 48px height)
- [ ] Countdown timer is counting down correctly
- [ ] Size selector works — correct variants linked
- [ ] ATC submits to Shopify cart
- [ ] Urgency bar visible at top
- [ ] Reviews section loads below fold
- [ ] Social proof toasts fire after 4 seconds
- [ ] UTM parameters preserved through to checkout

---

## Output

```
LP BUILD COMPLETE
Page URL: /pages/[handle]
Template: page.tiktok-lp.json
UTM: utm_source=tiktok&utm_campaign=[campaign]

LIVE LINK (for TikTok bio): [full URL with UTM]
PREVIEW LINK (internal): [Shopify preview URL]

QA STATUS: [PASS / ISSUES — list below]
```
