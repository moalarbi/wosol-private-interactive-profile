# WOSOL Strategy Hub — Design System

> Use this file as the visual source of truth for any project that must match the look and feel of:  
> https://moalarbi.github.io/wosol-strategy-hub/

This is not a generic luxury UI system. It is a **cream-first executive strategy document system** for WOSOL Concierge: quiet corporate luxury, navy emphasis, muted gold, bilingual Arabic/English hierarchy, and boardroom-ready spacing.

---

## 1. Design Identity

### Core feeling
- Quiet corporate luxury.
- Executive strategy document, not a SaaS landing page.
- Cream-first layout with navy emphasis blocks.
- Premium, calm, confidential, and suitable for management review.
- Built for WOSOL Concierge, UHNW strategy, luxury concierge, private banking, membership strategy, market research hubs, and internal executive presentations.

### Design principles
- The page should feel like a refined strategic document ported to the web.
- Use generous spacing and calm reading rhythm.
- Use navy for authority and emphasis, not as the entire page background.
- Use muted gold/beige sparingly.
- Use bilingual structure: Arabic for explanation, English for executive labels and subtitles.
- Avoid generic SaaS UI, colorful dashboards, rounded app cards, emoji/icons, loud gradients, and over-designed landing-page behavior.

---

## 2. Color System

Use these variables as the primary token system:

```css
:root {
  --navy-deep:   #041026;
  --navy-mid:    #16304E;
  --navy-light:  #1F466D;
  --beige-warm:  #EDE9E3;
  --beige-sand:  #D1C7BA;
  --white-soft:  #F6F4F1;
  --text-body:   #2a3a50;
  --text-light:  #6b7e92;
  --border:      rgba(4, 16, 38, 0.09);
  --gold-muted:  #b0965a;
  --gold-light:  #d4b97a;

  /* Compatibility aliases */
  --n: var(--navy-deep);
  --n2: var(--navy-mid);
  --n3: var(--navy-light);
  --c: var(--beige-warm);
  --s: var(--beige-sand);
  --bg: var(--white-soft);
  --t: var(--text-body);
  --m: var(--text-light);
}
```

### Usage rules
| Token | Use | Avoid |
|---|---|---|
| `--white-soft` | Main page background | Do not use pure white as page background |
| `--navy-deep` | Executive summary, featured cards, strong headers, hover states | Do not turn entire project into dark SaaS |
| `--navy-mid` | Tier cards, dark variations, subtle emphasis | Do not overuse |
| `--navy-light` | Labels, accents, section cues | Do not use as main body text |
| `--beige-warm` | Soft sections, row alternation, text on navy | Do not use as CTA fill everywhere |
| `--beige-sand` | Muted premium accent, logo sub, small metadata | Do not use as main paragraph color |
| `--text-body` | Arabic body text | Avoid on dark backgrounds |
| `--text-light` | English subtitles, metadata, secondary notes | Avoid for main titles |
| `--border` | Cards, dividers, table lines | Keep subtle |
| `--gold-muted` | Membership premium accents, ribbons, pricing accents | Do not create loud gold buttons |

---

## 3. Typography System

### Font import
```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Font rules
- Arabic body: `IBM Plex Sans Arabic`.
- English labels, numbers, metadata, logo, and section subtitles: `Poppins`.
- English inside Arabic pages must use `.en` or a specific English class.
- Arabic is the main explanatory language.
- English is used for executive structure, document labels, page subtitles, and strategic terms.

### Base typography
```css
html { font-size: 16px; scroll-behavior: smooth; }
body {
  font-family: 'IBM Plex Sans Arabic', sans-serif;
  background-color: var(--white-soft);
  color: var(--navy-deep);
  line-height: 1.85;
  direction: rtl;
  -webkit-font-smoothing: antialiased;
}
.en { font-family: 'Poppins', sans-serif !important; direction: ltr; }
```

### Typical scale
```css
.logo-name       { font-size: 22px; font-weight: 600; letter-spacing: 0.18em; }
.logo-sub        { font-size: 8.5px; font-weight: 400; letter-spacing: 0.30em; }
.header-meta     { font-size: 11px; }
.doc-label       { font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; }
.page-title      { font-size: clamp(32px, 5vw, 52px); font-weight: 700; line-height: 1.25; }
.page-title-en   { font-size: clamp(12px, 2vw, 15px); font-weight: 300; letter-spacing: 0.14em; text-transform: uppercase; }
.exec-label      { font-size: 9px; letter-spacing: 0.28em; text-transform: uppercase; }
.exec-summary p  { font-size: 17px; font-weight: 300; line-height: 2; }
.section-num     { font-size: 11px; letter-spacing: 0.10em; }
.section-title   { font-size: 22px; font-weight: 700; }
.section-title-en{ font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; }
.section-body    { font-size: 15.5px; line-height: 2; }
.card-num        { font-size: 11px; letter-spacing: 0.14em; }
.card-title      { font-size: 16px; font-weight: 700; line-height: 1.45; }
.card-desc       { font-size: 13.5px; line-height: 1.8; }
.card-cta        { font-size: 12px; font-weight: 600; }
.footer-meta     { font-size: 11px; }
```

---

## 4. Default Page Structure

Use this structure for any new WOSOL Strategy Hub-style project:

```html
<div class="pattern-bg"></div>

<div class="page-wrapper">

  <header class="site-header">
    <div class="header-meta en">Brand Strategy Document · 2026</div>
    <div class="logo-block">
      <span class="logo-name">WOSOL</span>
      <span class="logo-sub">CONCIERGE</span>
    </div>
  </header>

  <div class="title-block">
    <span class="doc-label en">Strategy 01 of 07</span>
    <h1 class="page-title">العنوان العربي</h1>
    <p class="page-title-en en">English Page Title</p>
  </div>

  <div class="exec-summary">
    <span class="exec-label en">Executive Summary</span>
    <p>ملخص تنفيذي بالعربية مع <strong>نقاط تركيز مهمة</strong>.</p>
  </div>

  <section class="section">
    <div class="section-header">
      <span class="section-num en">01</span>
      <div>
        <h2 class="section-title">عنوان القسم</h2>
        <p class="section-title-en en">English Section Label</p>
      </div>
    </div>
    <div class="section-body">
      <!-- Cards / tables / content blocks -->
    </div>
  </section>

  <div class="closing-section">
    <span class="closing-label en">Final Insight</span>
    <h3>عنوان الخلاصة</h3>
    <p>النص الختامي.</p>
  </div>

  <footer class="site-footer">
    <div class="footer-logo">
      <span class="logo-name">WOSOL</span>
      <span class="logo-sub">CONCIERGE</span>
    </div>
    <div class="footer-meta en">Confidential · 2026</div>
  </footer>

</div>

<button class="back-btn" onclick="goBack()">→</button>
```

---

## 5. Actual Reference Class System

Use these class names as the default system. Do not replace them with unrelated names unless required.

### Global
- `.pattern-bg`: fixed low-opacity geometric pattern behind all content.
- `.page-wrapper`: centered document container.

### Header / identity
- `.site-header`: inner pages header; document-style, not dark sticky nav.
- `.top-bar`: hub homepage header variant.
- `.header-meta` / `.top-bar-meta`: English document metadata.
- `.logo-block`: stacked WOSOL wordmark; always LTR.
- `.logo-name`: WOSOL text.
- `.logo-sub`: CONCIERGE subtext.

### Title / intro
- `.title-block`: page title area for inner pages.
- `.doc-label`: small English document/strategy label.
- `.page-title`: main Arabic page title.
- `.page-title-en`: English subtitle.
- `.hero`, `.hero-tag`, `.hero-title`, `.hero-desc`, `.hero-en`: homepage hub hero variant.

### Executive summary
- `.exec-summary`: navy strategic summary block.
- `.exec-label`: small English label inside summary.

### Sections
- `.section`: major content section.
- `.section-header`: section number + Arabic title + English subtitle.
- `.section-num`: Poppins section number.
- `.section-title`: Arabic section title.
- `.section-title-en`: English subtitle.
- `.section-body`: paragraph area.

### Cards / grids
- `.cards-grid`: homepage strategy card grid.
- `.strategy-card`: primary card component.
- `.card-num`: English label/number.
- `.card-title`: Arabic card title.
- `.card-desc`: Arabic card description.
- `.card-cta`: CTA inside card.
- `.card-cta-arrow`: minimal arrow line.
- `.featured`: dark featured state.

### Footer / navigation
- `.closing-section`: final strategic insight block.
- `.closing-label`: English label.
- `.site-footer`: light document footer.
- `.footer-logo`: footer WOSOL wordmark.
- `.footer-meta` / `.footer-note`: English footer metadata.
- `.back-btn`: floating circular back button; the only rounded UI exception.

---

## 6. Global Pattern Background

```css
.pattern-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.022;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40Z' fill='none' stroke='%23041026' stroke-width='1'/%3E%3Cpath d='M40 20 L60 40 L40 60 L20 40Z' fill='none' stroke='%23041026' stroke-width='0.5'/%3E%3C/svg%3E");
}
```

Rules:
- Place it before `.page-wrapper`.
- Keep opacity between `0.022` and `0.025`.
- Do not apply it only in the hero.
- It must stay behind all content.
- It must feel barely visible.

---

## 7. Page Wrapper

```css
.page-wrapper {
  position: relative;
  z-index: 1;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 32px 80px;
}
```

Homepage variant can use `max-width: 1020px` and `padding: 0 36px 80px`.

Rules:
- Center the document.
- Keep readable executive width.
- Avoid full-width SaaS sections unless intentionally creating a special emphasis block.

---

## 8. Header System

```css
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 36px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 72px;
}
.header-meta {
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  color: var(--text-light);
}
```

Homepage variant:
```css
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 0 32px;
  border-bottom: 1px solid var(--border);
}
.top-bar-meta {
  font-family: 'Poppins', sans-serif;
  font-size: 10.5px;
  color: var(--text-light);
  letter-spacing: 0.06em;
}
```

Rules:
- Header is light/cream document header.
- Not a sticky dark nav by default.
- Contains metadata and WOSOL wordmark.
- On mobile, stack cleanly without breaking the logo.

---

## 9. WOSOL Logo / Wordmark Rules

Always render the wordmark as:

```text
WOSOL
CONCIERGE
```

```css
.logo-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  direction: ltr;
  text-align: center;
  gap: 3px;
}
.logo-name {
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: var(--navy-deep);
  line-height: 1;
}
.logo-sub {
  font-family: 'Poppins', sans-serif;
  font-size: 8.5px;
  font-weight: 400;
  letter-spacing: 0.30em;
  color: var(--navy-light);
  text-transform: uppercase;
}
```

Rules:
- Logo text must remain LTR even inside Arabic RTL pages.
- Use Poppins only.
- Allowed placement: center or left.
- Avoid placing WOSOL wordmark on the far right.
- If an official logo image is provided, use it but preserve scale, spacing, and placement.

---

## 10. Title Block

```css
.title-block { margin-bottom: 72px; }
.doc-label {
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  letter-spacing: 0.22em;
  color: var(--navy-light);
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--beige-sand);
}
.page-title {
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 700;
  color: var(--navy-deep);
  line-height: 1.25;
  margin-bottom: 10px;
}
.page-title-en {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(12px, 2vw, 15px);
  font-weight: 300;
  color: var(--navy-light);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
```

Rules:
- Arabic title is dominant.
- English title is secondary.
- Keep spacing calm and confident.

---

## 11. Executive Summary Block

```css
.exec-summary {
  background-color: var(--navy-deep);
  padding: 44px 48px;
  margin-bottom: 80px;
  position: relative;
  overflow: hidden;
}
.exec-summary::before {
  content: '';
  position: absolute;
  top: -50px;
  left: -50px;
  width: 220px;
  height: 220px;
  border: 1px solid rgba(237,233,227,0.06);
  border-radius: 50%;
}
.exec-summary::after {
  content: '';
  position: absolute;
  bottom: -80px;
  right: 60px;
  width: 300px;
  height: 300px;
  border: 1px solid rgba(237,233,227,0.04);
  border-radius: 50%;
}
.exec-label {
  font-family: 'Poppins', sans-serif;
  font-size: 9px;
  letter-spacing: 0.28em;
  color: var(--beige-sand);
  text-transform: uppercase;
  margin-bottom: 20px;
  display: block;
}
.exec-summary p {
  font-size: 17px;
  font-weight: 300;
  line-height: 2;
  color: var(--beige-warm);
  position: relative;
  z-index: 1;
}
.exec-summary strong { font-weight: 600; color: #fff; }
```

Rules:
- Use near the top of every strategic page.
- It should feel like a boardroom brief.
- Do not turn it into a promotional CTA.

---

## 12. Section System

```css
.section { margin-bottom: 80px; }
.section-header {
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 36px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border);
}
.section-num {
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  color: var(--beige-sand);
  font-weight: 400;
  letter-spacing: 0.1em;
  flex-shrink: 0;
}
.section-title { font-size: 22px; font-weight: 700; color: var(--navy-deep); }
.section-title-en {
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  color: var(--text-light);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-top: 4px;
}
.section-body {
  font-size: 15.5px;
  color: var(--text-body);
  line-height: 2;
  margin-bottom: 28px;
}
```

Rules:
- Every major section must use Arabic title + English subtitle.
- Section numbers are subtle, not decorative badges.

---

## 13. Strategy Cards

Homepage card grid:
```css
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 64px;
}
.strategy-card {
  background: #ffffff;
  border: 1px solid var(--border);
  padding: 32px 26px 28px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
  cursor: pointer;
}
.strategy-card::before {
  content: '';
  position: absolute;
  top: 0; right: 0; left: 0;
  height: 3px;
  background: var(--navy-light);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}
.strategy-card:hover {
  border-color: rgba(31, 70, 109, 0.25);
  box-shadow: 0 8px 32px rgba(4, 16, 38, 0.08);
  transform: translateY(-3px);
}
.strategy-card:hover::before { transform: scaleX(1); }
.card-num {
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: var(--beige-sand);
  letter-spacing: 0.14em;
  margin-bottom: 20px;
  display: block;
}
.card-title { font-size: 16px; font-weight: 700; color: var(--navy-deep); line-height: 1.45; margin-bottom: 14px; }
.card-desc { font-size: 13.5px; color: var(--text-light); line-height: 1.8; flex: 1; margin-bottom: 24px; }
```

Featured state:
```css
.strategy-card.featured { background: var(--navy-deep); }
.strategy-card.featured .card-num { color: rgba(209, 199, 186, 0.5); }
.strategy-card.featured .card-title { color: #fff; }
.strategy-card.featured .card-desc { color: rgba(237, 233, 227, 0.7); }
.strategy-card.featured::before { background: var(--beige-sand); }
```

Rules:
- Cards should feel like executive document tiles.
- No random icons/emojis.
- No colorful gradients.
- No generic SaaS cards.

---

## 14. Button / CTA System

### Card CTA
The homepage reference uses a beige CTA button inside each strategy card:

```css
.card-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'IBM Plex Sans Arabic', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #000000;
  background-color: var(--beige-sand);
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}
.strategy-card:hover .card-cta {
  background-color: var(--navy-deep);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(4, 16, 38, 0.15);
}
.card-cta-arrow {
  width: 20px;
  height: 1px;
  background: currentColor;
  position: relative;
  transition: width 0.25s ease;
}
.card-cta-arrow::after {
  content: '';
  position: absolute;
  left: 0;
  top: -3px;
  width: 6px;
  height: 6px;
  border-left: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  transform: rotate(45deg);
}
.strategy-card:hover .card-cta-arrow { width: 30px; }
```

### Rules
- Keep CTAs refined and small.
- Avoid Bootstrap style.
- Avoid large colorful buttons.
- Do not use rounded app-style pills.
- Card CTA may use `border-radius: 4px` because this is in the current reference.
- Do not over-round beyond 4px.

### Floating back button exception
The floating `.back-btn` is the only fully rounded UI element:

```css
.back-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(4,16,38,0.1);
  background: #ffffff;
  color: #041026;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(4,16,38,0.08);
  transition: all 0.2s ease;
}
.back-btn:hover {
  transform: translateY(-2px);
  background: #041026;
  color: #ffffff;
}
```

---

## 15. Homepage Hub Components

### Hero
```css
.hero {
  padding: 80px 0 64px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 72px;
}
.hero-tag {
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  letter-spacing: 0.28em;
  color: var(--navy-light);
  text-transform: uppercase;
  margin-bottom: 28px;
  display: block;
}
.hero-title {
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 700;
  color: var(--navy-deep);
  line-height: 1.2;
  margin-bottom: 28px;
  letter-spacing: -0.01em;
}
.hero-desc {
  font-size: 17px;
  font-weight: 300;
  color: var(--text-body);
  line-height: 2;
  max-width: 640px;
  margin-bottom: 20px;
}
.hero-en {
  font-family: 'Poppins', sans-serif;
  font-size: 11px;
  letter-spacing: 0.20em;
  color: var(--beige-sand);
  text-transform: uppercase;
}
```

### Summary strip
```css
.summary-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  margin-bottom: 64px;
}
.strip-cell { background: var(--white-soft); padding: 28px 22px; text-align: center; }
.strip-num { font-family: 'Poppins', sans-serif; font-size: 30px; font-weight: 300; color: var(--navy-deep); line-height: 1; margin-bottom: 8px; }
.strip-label { font-size: 12px; color: var(--text-light); line-height: 1.5; }
```

---

## 16. Footer System

```css
.site-footer {
  border-top: 1px solid var(--border);
  padding-top: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  direction: ltr;
  text-align: center;
  gap: 2px;
}
.footer-logo .logo-name { font-size: 14px; }
.footer-logo .logo-sub { font-size: 6px; }
.footer-note,
.footer-meta {
  font-size: 11px;
  color: var(--text-light);
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.04em;
}
```

Rules:
- Footer is usually light/cream, not a heavy dark footer.
- Use muted English metadata.
- Keep it quiet and confidential.

---

## 17. Closing Section

```css
.closing-section {
  margin-top: 80px;
  padding-top: 48px;
  border-top: 1px solid var(--border);
}
.closing-label {
  font-family: 'Poppins', sans-serif;
  font-size: 9px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--text-light);
  margin-bottom: 24px;
  display: block;
}
```

Rules:
- Use for final strategic insight.
- Avoid salesy copy.
- Make it feel like an executive conclusion.

---

## 18. Tables

```css
.compare-scroll { overflow-x: auto; }
.compare-table { width: 100%; border-collapse: collapse; font-size: 13px; min-width: 640px; }
.compare-table thead tr { background: var(--navy-deep); }
.compare-table thead th {
  padding: 16px 16px;
  text-align: center;
  font-weight: 500;
  font-size: 11px;
  color: var(--beige-warm);
  letter-spacing: 0.06em;
}
.compare-table thead th:first-child { text-align: right; padding-right: 20px; }
.compare-table tbody tr { border-bottom: 1px solid var(--border); }
.compare-table tbody tr:nth-child(even) { background: var(--beige-warm); }
.compare-table tbody tr:nth-child(odd) { background: #fff; }
.compare-table tbody td {
  padding: 14px 16px;
  color: var(--text-body);
  text-align: center;
  vertical-align: middle;
  line-height: 1.55;
}
.compare-table tbody td:first-child {
  text-align: right;
  padding-right: 20px;
  font-weight: 600;
  color: var(--navy-deep);
  font-size: 13px;
}
```

Rules:
- Tables are executive and readable.
- Arabic alignment is right.
- Use horizontal scroll on mobile.

---

## 19. Membership Pricing Component

Pricing must not look like SaaS pricing.

Avoid:
- Choose Plan
- Subscribe Now
- Basic / Pro / Enterprise
- Cheap package language

Use:
- Starting From
- By Assessment
- Custom Proposal
- Annual Membership
- Subject to Membership Review
- By Private Invitation Only

Markup:
```html
<div class="mem-pricing">
  <span class="mem-price-label en">Starting From</span>
  <div class="mem-price-row">
    <span class="mem-price-num en">25,000</span>
    <span class="mem-price-currency en">SAR</span>
    <span class="mem-price-period en">/ YEAR</span>
  </div>
  <p class="mem-price-note">Final pricing is subject to lifestyle assessment.</p>
</div>
```

CSS:
```css
.mem-pricing { margin-bottom: 8px; }
.mem-price-label {
  font-family: 'Poppins', sans-serif;
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 6px;
  display: block;
}
.mem-price-row { display: flex; align-items: baseline; gap: 8px; }
.mem-price-num { font-family: 'Poppins', sans-serif; font-size: 28px; font-weight: 300; line-height: 1; }
.mem-price-currency { font-family: 'Poppins', sans-serif; font-size: 12px; font-weight: 500; }
.mem-price-period { font-family: 'Poppins', sans-serif; font-size: 10px; letter-spacing: 0.08em; }
.mem-price-note { font-size: 11.5px; margin-top: 8px; color: var(--text-light); }
```

If a Saudi Riyal official symbol asset is provided, use it instead of writing SAR. Do not invent unofficial icons.

---

## 20. RTL + Bilingual Rules

- Every page uses `<html lang="ar" dir="rtl">` by default.
- Arabic is the main explanatory language.
- English is used for structure: page subtitle, document label, section subtitle, metadata, labels, strategy terms, footer.
- Do not create Arabic-only pages unless explicitly requested.
- Do not create English-only pages unless explicitly requested.
- Apply Poppins to English text via `.en` or component classes.
- Keep `.logo-block` LTR always.
- Tables right-align the first column and Arabic content.
- CTA arrows must respect RTL direction.

Required bilingual section pattern:
```html
<div class="section-header">
  <span class="section-num en">01</span>
  <div>
    <h2 class="section-title">عنوان القسم بالعربي</h2>
    <p class="section-title-en en">English Section Label</p>
  </div>
</div>
```

---

## 21. Responsive Rules

```css
@media (max-width: 860px) {
  .page-wrapper { padding: 0 24px 60px; }
  .cards-grid { grid-template-columns: repeat(2, 1fr); }
  .summary-strip { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 560px) {
  .page-wrapper { padding: 0 18px 48px; }
  .top-bar,
  .site-header { flex-direction: column-reverse; align-items: center; gap: 12px; text-align: center; }
  .hero { padding: 52px 0 48px; text-align: center; display: flex; flex-direction: column; align-items: center; }
  .hero-desc { margin-left: auto; margin-right: auto; }
  .cards-grid { grid-template-columns: 1fr; }
  .strategy-card.featured { grid-column: span 1; }
  .summary-strip { grid-template-columns: repeat(2, 1fr); }
  .site-footer { flex-direction: column; gap: 12px; text-align: center; }
  .exec-summary { padding: 32px 22px; }
  .membership-grid, .why-grid, .revenue-math { grid-template-columns: 1fr; }
}
```

---

## 22. JavaScript Helpers

Use this for the floating back button:

```js
function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = 'index.html';
  }
}
```

Print button if needed:
```js
function printPage() {
  window.print();
}
```

---

## 23. Do / Don’t Rules

### Do
- Use cream-first page layout.
- Use navy for emphasis blocks, featured cards, and executive summary.
- Keep WOSOL wordmark LTR.
- Use bilingual section structure.
- Use executive document spacing.
- Use subtle borders.
- Use muted gold/beige sparingly.
- Use `.strategy-card` for strategy tiles.
- Use `.exec-summary` near top.
- Use `.pattern-bg` globally.
- Keep all pages responsive.

### Don’t
- Do not turn the page into dark SaaS.
- Do not use generic Bootstrap buttons.
- Do not create Arabic-only pages by default.
- Do not place WOSOL logo on far right.
- Do not overuse gold.
- Do not use emojis/icons unless specifically requested.
- Do not add random gradients.
- Do not use old unrelated classes if cloning the current reference.
- Do not make pricing look like SaaS packages.
- Do not make the layout feel like an app dashboard unless explicitly requested.

---

## 24. Final Reusable Prompt

Use this in any future AI coding tool:

```text
Build this project using the WOSOL Strategy Hub design system defined in design.md.

Use the current reference structure:
pattern-bg → page-wrapper → site-header/top-bar → title-block or hero → exec-summary when strategic → sections → closing-section → site-footer → back-btn.

Main language Arabic RTL with English executive labels and subtitles.
Use WOSOL wordmark rules exactly.
Use cream-first executive document layout.
Do not create dark SaaS UI.
Do not use generic buttons.
Do not ignore the bilingual Arabic/English rule.
Match the reference project spacing, typography, colors, cards, CTAs, and premium boardroom feel.
```
