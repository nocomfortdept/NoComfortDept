# Workflow: Flow Builder
## Department: Retention & Email

Use this to build or audit any Klaviyo email flow.

---

## Flow Build Checklist

### Before Building
- [ ] Confirm platform: Klaviyo
- [ ] Confirm trigger event is firing correctly (test with real action)
- [ ] Copy briefs sent to `02-copywriting` for body copy needed
- [ ] Subject lines written (owned by retention, not copywriting)
- [ ] Segment filter defined and saved

---

## Welcome Series (3 emails)

```
TRIGGER: List joined (NCD Email List or checkout)

EMAIL 1 — "You're in."
  Delay: Immediate
  Subject: "You're in."
  Preheader: "Here's what NoComfortDept actually is."
  Goal: Brand identity. Set expectations.
  Copy: departments/02-copywriting/workflows/email-copy.md → Welcome 1

EMAIL 2 — "What we build."
  Delay: 2 days
  Subject: "What we build."
  Preheader: "Not hype. Heavyweight."
  Goal: Product philosophy, drop model
  Copy: departments/02-copywriting/workflows/email-copy.md → Welcome 2
  Filter: Has not purchased

EMAIL 3 — "Your first drop."
  Delay: 4 days from Email 2
  Subject: "Drop [#] — your first look."
  Preheader: "[#] units. While they last."
  Goal: First product intro, soft sell
  Copy: departments/02-copywriting/workflows/email-copy.md → Welcome 3
  Filter: Has not purchased
```

---

## Abandoned Cart Flow (2 emails)

```
TRIGGER: Added to cart → 1 hour no purchase

EMAIL 1 — "Still there."
  Delay: 1 hour after trigger
  Subject: "Still there."
  Preheader: "[#] units left in your size."
  Goal: Remind, provide inventory urgency
  Dynamic content: Product name, inventory count, variant (size)
  Filter: Has not purchased

EMAIL 2 — "This is the last email."
  Delay: 24 hours after Email 1
  Subject: "This is the last email."
  Preheader: "We're not going to keep asking."
  Goal: Final honest push — respect their intelligence
  Filter: Has not purchased, has not placed order
```

---

## Browse Abandonment Flow (1 email)

```
TRIGGER: Viewed product page → 4 hours no ATC

EMAIL 1 — "You were looking at something."
  Delay: 4 hours
  Subject: "Still thinking about it?"
  Preheader: "Here's the thing about Drop [#]."
  Goal: Re-engage with social proof + scarcity
  Dynamic content: Product viewed, inventory status
  Filter: Has not purchased
```

---

## Post-Purchase Flow (2 emails)

```
TRIGGER: Order placed

EMAIL 1 — "It's on its way."
  Delay: When order ships (hook to shipping confirmation event)
  Subject: "It's on its way."
  Preheader: "You made a good call."
  Goal: Confirm quality decision, reduce buyer's remorse
  Dynamic content: Product ordered, estimated delivery

EMAIL 2 — "How it's holding."
  Delay: 7 days after delivery
  Subject: "How's it holding up?"
  Preheader: "Care guide inside — and what's next."
  Goal: Care guide, build loyalty, tease next drop
  Filter: Order delivered
```

---

## Win-Back Flow (2 emails)

```
TRIGGER: Last purchase > 60 days ago

EMAIL 1 — "We kept building."
  Delay: 60 days after last purchase
  Subject: "We kept building."
  Preheader: "Drop [#] dropped while you were gone."
  Goal: Re-engagement with new drop
  Filter: Has not purchased in 60 days

EMAIL 2 — "Last one."
  Delay: 30 days after Email 1 (if no purchase)
  Subject: "Last one from us."
  Preheader: "We're not going to keep emailing."
  Goal: Final attempt, honest framing — then suppress
  Action on no-open: Add to suppression list
```

---

## Flow QA Checklist

- [ ] Trigger event confirmed firing
- [ ] Correct segment filter applied to each email
- [ ] Dynamic variables tested with sample profile
- [ ] Subject lines checked (no banned copy patterns)
- [ ] All links tested and UTM-tagged
- [ ] Unsubscribe link present on every email
- [ ] Sender name is "NCD" not "NoComfortDept Team"
- [ ] Reply-to is a monitored inbox
- [ ] Preview on mobile before activating
