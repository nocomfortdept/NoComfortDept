# NCD Content Flow
## Idea → Creation → Publishing → Monetization

---

## Overview

Every piece of NCD content travels the same path. The path has six stages. Nothing skips a stage. The stages exist to protect the brand at every step and ensure every piece of content is built to convert.

```
IDEA → BRIEF → CREATE → REVIEW → PUBLISH → MONETIZE → LEARN
```

---

## Stage 1: Idea

**Owner:** Brand Strategy (narrative ideas) / TikTok Growth (content ideas) / Retention (email ideas)

Every idea enters the system through one of three sources:

### Source A — Drop Narrative (planned)
Brand Strategy generates a campaign narrative brief before every drop. This is the primary content driver for the company. It defines what everything — ads, emails, TikToks, PDPs — is saying for the next drop cycle.

```
Input: Drop product details, brand calendar, competitive context
Output: campaign-brief.md (Drop Narrative Brief)
Timeline: D-14 before drop
```

### Source B — Organic Content Opportunity (reactive)
TikTok Growth identifies a trend, hook format, or cultural moment worth responding to. They evaluate against the Trend Approval Framework and either pursue or pass.

```
Input: TikTok trend observation, hook idea, format opportunity
Output: Informal brief to Creative Direction (if visual needed) or self-produced
Timeline: Within 48h of opportunity identification
```

### Source C — Retention / Lifecycle Trigger (systematic)
Retention identifies a segment-based email need: win-back campaign, milestone sequence, at-risk intervention. These are data-triggered content ideas.

```
Input: Klaviyo segment data, flow performance gap, lifecycle stage
Output: Email campaign brief → Copywriting
Timeline: Weekly, driven by Thursday segment review
```

---

## Stage 2: Brief

**Owner:** Originating department briefs the production department(s).

All briefs use the standard inter-department brief format (see communication-system.md). Content type determines which departments receive the brief.

### Brief Routing by Content Type

| Content Type | Brief From | Brief To | Also Notify |
|---|---|---|---|
| Drop campaign | Brand Strategy | All departments | — |
| Paid ad creative | Paid Ads | Creative Direction + Copywriting | Brand Strategy |
| TikTok video | TikTok Growth | Creative Direction (for review) | Brand Strategy |
| Email campaign | Retention | Copywriting | Brand Strategy |
| Product page copy | Shopify CRO | Copywriting | Brand Strategy |
| Flow email | Retention | Copywriting | — |

**Brand Strategy approval is required before any drop-related brief is issued by any other department.** Non-drop content (standard TikTok posts, flow emails) does not require Brand Strategy pre-approval.

---

## Stage 3: Create

**Owner:** Production department(s)

### Creation by Content Type

**Campaign Content (Drop)**
```
Creative Direction    → Shoot. Deliver approved assets (D-10)
Copywriting          → All copy (D-7): PDP, emails, ads, captions
TikTok Growth        → Pre-drop build content (D-5), drop announcement (D-0)
Paid Ads             → Campaign built, not live (D-3)
Retention            → Email sequence built in Klaviyo (D-3)
Shopify CRO          → Drop LP built on staging (D-3)
```

**Standard TikTok Content**
```
TikTok Growth        → Film and edit (or brief Creator for filming)
                        Hook written (from hook-vault.md or new)
                        Caption written (from copy-vault.md or new)
                        Submit to Creative Direction for review
```

**Email Campaigns**
```
Retention            → Define segment, goal, send timing
Copywriting          → Write body copy (subject line owned by Retention)
Retention            → Load into Klaviyo, QA, schedule
```

**Paid Ad Creative**
```
Creative Direction   → Produce asset (photo/video) per brief
Copywriting          → Write hook overlay text / primary text / headline
Paid Ads             → Load into Ads Manager, configure targeting
```

---

## Stage 4: Review

**Owner:** Creative Direction (visual) / Brand Strategy (narrative) / Department head (technical)

### Review Gates by Content Type

| Content | Visual Review | Copy Review | Technical QA |
|---|---|---|---|
| Paid ad creative | Creative Direction (required) | Copywriting self-review | Paid Ads (pixel, link, UTM) |
| TikTok video | Creative Direction (required) | TikTok Growth self-review | TikTok Growth (caption, link) |
| Email campaign | Creative Direction (optional) | Copywriting (required) | Retention (links, dynamic vars) |
| Product page | Creative Direction (optional) | Copywriting (required) | Shopify CRO (ATC, mobile) |
| Drop campaign (all) | Creative Direction (required) | Copywriting (required) | All departments |

**Nothing posts, launches, or goes live without its required review completed.**

---

## Stage 5: Publish

**Owner:** Channel department

### Publishing Checklist by Channel

**TikTok**
```
□ Creative Direction approval received
□ Caption finalized (hook + body + CTA)
□ Link in bio updated to correct LP
□ UTM parameters on LP URL: utm_source=tiktok&utm_medium=organic
□ ManyChat keyword trigger set (if drop content)
□ Scheduled in TikTok Creator Studio or posted manually
```

**Paid Ads**
```
□ Creative Direction approval on all assets
□ Copywriting approval on all copy
□ All UTMs tagged: utm_source=meta&utm_medium=paid&utm_campaign=[name]
□ Pixel confirmed firing on destination
□ Campaign structure: CBO, correct ad sets, 3+ creatives
□ Launch timing confirmed (especially for drop day)
```

**Email**
```
□ Copywriting approval on body copy
□ Subject line finalized (owned by Retention)
□ Segment configured and confirmed
□ Dynamic variables rendering correctly
□ All links working + UTM tagged
□ Mobile preview passed (iOS + Android)
□ Unsubscribe link present
□ Scheduled in Klaviyo
```

**Product Page**
```
□ Copy approved by Copywriting + Brand Strategy
□ Assets approved by Creative Direction
□ Mobile layout confirmed (size grid, ATC, images)
□ Inventory states configured (urgency badge live)
□ All schema fields populated (metafields: tagline, features, press)
□ UTM destination tested
```

---

## Stage 6: Monetize

Publishing is not the end. Every piece of content is monetized through the conversion infrastructure.

### The Monetization Stack

```
TikTok video publishes
  → Viewer watches → link in bio → UTM-tracked LP
  → LP: urgency bar, product hero, sticky ATC, social proof
  → ATC → Checkout → Order confirmed
  → Post-purchase flow triggered in Klaviyo
  → Customer enters retention system (see retention-ltv.md)

Paid ad runs
  → Cold audience sees ad → clicks → UTM-tracked LP or PDP
  → LP: optimized for paid traffic CVR
  → ATC → Checkout → Order confirmed
  → Customer added to post-purchase flow + email list
  → Retargeting audience updated (viewed LP, didn't purchase)

Email sends
  → Opens → Clicks → Lands on PDP or LP
  → Existing customer: streamlined ATC (no trust barrier)
  → Order confirmed → Next lifecycle email triggered
```

### Revenue Attribution by Channel

| Channel | Attribution Model | Tracked Via |
|---|---|---|
| TikTok organic | Last click (UTM) | GA4 + sessionStorage |
| TikTok paid | Last click + view-through | TikTok Ads Manager |
| Meta paid | 7-day click, 1-day view | Meta Ads Manager + Triple Whale |
| Email | Last click | Klaviyo built-in |
| Organic (direct) | Last click | GA4 |

---

## Stage 7: Learn

Every piece of content generates data. That data feeds back into Stage 1.

### What Gets Measured

| Content Type | Primary Metric | Secondary | Logged In |
|---|---|---|---|
| TikTok video | Views, link click rate | Comments, saves | content-pillars.md |
| Paid ad | ROAS, CTR | CPM, frequency | ad-playbook.md |
| Email campaign | Open rate, RPR | CTR, unsubscribes | flow-library.md |
| Email flow | Recovery rate, RPR | Click rate | flow-library.md |
| Product page | CVR, ATC rate | Exit rate | cro-playbook.md |

### Feedback Loops

```
TikTok high performer → Brief Paid Ads to test as paid creative
Paid ad winner → Brief TikTok Growth on the hook that worked
Email subject line winner → Apply formula to TikTok caption hooks
PDP copy A/B winner → Apply voice to all future product copy
Retention data (LTV by acquisition source) → Brief Paid Ads on best audiences
```

The loop closes. Every piece of content makes the next piece smarter.
