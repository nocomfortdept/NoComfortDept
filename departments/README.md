# NoComfortDept — AI Marketing Department System

Seven distinct AI employee departments, each with a defined system prompt, role, workflow library, and documentation. Every department knows what it owns, who it reports to, who it hands off to, and what success looks like.

---

## Department Index

| # | Department | AI Employee | Owns | Reports To |
|---|---|---|---|---|
| 01 | [Brand Strategy](#01-brand-strategy) | Brand Strategist | Brand bible, positioning, voice framework | Founder |
| 02 | [Copywriting](#02-copywriting) | Head Copywriter | All written output across every channel | Brand Strategy |
| 03 | [Shopify CRO](#03-shopify-cro) | CRO Specialist | Shopify theme, conversion elements, A/B tests | Founder |
| 04 | [TikTok Growth](#04-tiktok-growth) | TikTok Creative Director | Content strategy, hooks, landing page briefs | Founder |
| 05 | [Creative Direction](#05-creative-direction) | Creative Director | Visual standards, photo/video briefs, asset approval | Brand Strategy |
| 06 | [Paid Ads](#06-paid-ads) | Paid Media Strategist | Meta/TikTok campaigns, audience builds, creative testing | Founder |
| 07 | [Retention & Email](#07-retention-email) | Retention Strategist | Klaviyo flows, segments, SMS, win-back | Founder |

---

## How to Use This System

### Starting a New Task

1. Describe your task in plain language
2. Run it through the router: `node departments/routing/router.js "your task here"`
3. The router returns: primary department, lead employee, collaborators, workflow to load
4. Open the department's `system-prompt.md` — this is the AI employee's instruction set
5. Load the relevant workflow from `workflows/`
6. Deliver output in the format specified in the system prompt

### Example Routing

```
Task: "Write a product description for the Blackout Hoodie"
→ Primary: 02-copywriting
→ Lead: Head Copywriter
→ Load: departments/02-copywriting/system-prompt.md
→ Workflow: departments/02-copywriting/workflows/product-copy.md
```

```
Task: "We need a TikTok landing page for Drop 5"
→ Primary: 04-tiktok-growth (brief)
→ Collaborator: 03-shopify-cro (build)
→ Lead: TikTok Creative Director → hands to CRO Specialist
→ Workflow: departments/04-tiktok-growth/workflows/lp-brief.md
         → departments/03-shopify-cro/workflows/lp-brief.md
```

```
Task: "Run a brand audit — some of our emails feel off-brand"
→ Primary: 01-brand-strategy
→ Lead: Brand Strategist
→ Workflow: departments/01-brand-strategy/workflows/brand-audit.md
→ Output: Voice calibration memo to 02-copywriting
```

---

## Department Details

### 01 Brand Strategy

The north star. Every other department's output runs through this framework.

```
departments/01-brand-strategy/
  system-prompt.md          ← AI employee instructions
  role-definition.json      ← Structured role + KPIs
  workflows/
    brand-audit.md          ← How to audit all brand output
    voice-calibration.md    ← How to recalibrate copy voice
    positioning.md          ← How to position in new category
  docs/
    brand-bible.md          ← Single source of truth for NCD brand
    competitor-matrix.md    ← Competitive positioning map
```

**Load when:** Anything feels off-brand. New product category. Quarterly review.

---

### 02 Copywriting

Owns all words. Product descriptions, ad copy, email body, TikTok captions.

```
departments/02-copywriting/
  system-prompt.md
  role-definition.json
  workflows/
    product-copy.md         ← Full product copy workflow (tagline → SEO)
    ad-copy.md              ← Ad primary text / headline / description
    email-copy.md           ← Email templates for all flows
  docs/
    copy-vault.md           ← Approved copy by channel (pull before writing)
    headline-bank.md        ← Headline formulas + approved bank
```

**Load when:** Any writing task. Always check copy-vault before writing new.

---

### 03 Shopify CRO

Builds and optimizes the Shopify theme. Removes friction. Increases conversion.

```
departments/03-shopify-cro/
  system-prompt.md
  role-definition.json
  workflows/
    product-page-audit.md   ← Full checklist before any page goes live
    ab-test-brief.md        ← A/B test structure template
    lp-brief.md             ← TikTok landing page build intake
  docs/
    cro-playbook.md         ← Proven conversion principles + component ref
    test-log.md             ← A/B test history and backlog
```

**Load when:** Building or auditing any Shopify page. TikTok LP builds. ATC bugs.

---

### 04 TikTok Growth

Content strategy, hooks, captions, content calendar, and TikTok landing page briefs.

```
departments/04-tiktok-growth/
  system-prompt.md
  role-definition.json
  workflows/
    content-calendar.md     ← Monthly calendar structure + brief template
    hook-writing.md         ← Hook framework + swipe file
    lp-brief.md             ← Brief intake for CRO landing page builds
  docs/
    hook-vault.md           ← Performance-tiered hook library
    content-pillars.md      ← Four content pillars with rules
```

**Load when:** Any TikTok content, hook writing, LP brief, content calendar planning.

---

### 05 Creative Direction

Visual standards, photo/video briefs, moodboards. All visual assets approved here.

```
departments/05-creative-direction/
  system-prompt.md
  role-definition.json
  workflows/
    creative-brief.md       ← Master brief template for all shoots
    photo-brief.md          ← Photography-specific direction
    video-brief.md          ← Video production + color grade direction
  docs/
    visual-standards.md     ← The visual rulebook — what NCD looks like
    moodboard-guide.md      ← How to build moodboards per season
```

**Load when:** Any shoot planning, asset review, visual direction question.

---

### 06 Paid Ads

Meta and TikTok campaign structure, audience builds, creative testing, optimization.

```
departments/06-paid-ads/
  system-prompt.md
  role-definition.json
  workflows/
    campaign-brief.md       ← Full campaign brief before any launch
    audience-build.md       ← All audience definitions + targeting
    creative-rotation.md    ← Fatigue signals + rotation schedule
  docs/
    ad-playbook.md          ← Proven campaign structures + kill rules
    audience-matrix.md      ← Master audience map with performance log
```

**Load when:** Launching campaigns, building audiences, reviewing ad performance.

---

### 07 Retention & Email

Klaviyo flows, segments, win-back campaigns, SMS.

```
departments/07-retention-email/
  system-prompt.md
  role-definition.json
  workflows/
    flow-builder.md         ← All flow structures with checklist
    segment-build.md        ← Segment definitions + build process
    win-back-campaign.md    ← Win-back campaign 3-email structure
  docs/
    flow-library.md         ← All active flows + performance log
    segment-guide.md        ← Segment → communication map + benchmarks
```

**Load when:** Building flows, managing list health, running re-engagement campaigns.

---

## Routing System

```
departments/routing/
  router.js              ← Node.js task router (keyword + type matching)
  routing-rules.json     ← Keyword → department rules, collaboration triggers
  delegation.json        ← Handoff protocols, approval gates, priority matrix
```

Run: `node departments/routing/router.js "your task description"`

---

## Department Org Chart

```
                    FOUNDER / CEO
                         │
          ┌──────────────┼──────────────────┐
          │              │                  │
   01 Brand          03 Shopify         04 TikTok
   Strategy             CRO               Growth
     │ │                                     │
     │ └──→ 05 Creative                      │
     │       Direction                       │
     │           │                           │
     └──→ 02 Copywriting ←──────────────────┘
               │   │
    06 Paid Ads    07 Retention
```

---

## File Migration Map

Existing theme files mapped to their owning departments:

| File | Owner Department |
|---|---|
| `assets/nocomfort.css` | 03 Shopify CRO + 01 Brand Strategy (design system) |
| `assets/nocomfort.js` | 03 Shopify CRO |
| `assets/social-proof-notif.css` | 03 Shopify CRO |
| `sections/product-hero.liquid` | 03 Shopify CRO |
| `sections/tiktok-landing.liquid` | 03 Shopify CRO + 04 TikTok Growth |
| `sections/announcement-bar.liquid` | 03 Shopify CRO + 06 Paid Ads (messaging) |
| `snippets/urgency-badge.liquid` | 03 Shopify CRO |
| `snippets/social-proof.liquid` | 03 Shopify CRO |
| `config/product-copy-guide.json` | 02 Copywriting |
| `config/marketing-team.json` | 01 Brand Strategy |
| `config/settings_schema.json` | 03 Shopify CRO |
| `layout/theme.liquid` | 03 Shopify CRO |
