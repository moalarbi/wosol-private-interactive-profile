# structure.md — WOSOL Strategy Hub Page Structure

Use this file to control the page order and prevent the agent from inventing a different layout.

---

## 1. Default Structure

Every project should follow this structure unless the user requests a different one:

```text
pattern-bg
page-wrapper
  site-header or top-bar
  title-block or hero
  exec-summary
  section 01
  section 02
  section 03
  section 04
  section 05
  closing-section
  site-footer
back-btn
```

---

## 2. Required HTML Skeleton

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[Project Title] | WOSOL Concierge</title>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>

<div class="pattern-bg"></div>

<div class="page-wrapper">

  <header class="site-header">
    <div class="header-meta en">[Document Type] · Confidential · 2026</div>
    <div class="logo-block">
      <span class="logo-name">WOSOL</span>
      <span class="logo-sub">CONCIERGE</span>
    </div>
  </header>

  <div class="title-block">
    <span class="doc-label en">[Document Label]</span>
    <h1 class="page-title">[Arabic Page Title]</h1>
    <p class="page-title-en en">[English Page Title]</p>
  </div>

  <div class="exec-summary">
    <span class="exec-label en">Executive Summary</span>
    <p>[Arabic executive summary]</p>
  </div>

  <section class="section">
    <div class="section-header">
      <span class="section-num en">01</span>
      <div>
        <h2 class="section-title">[Arabic Section Title]</h2>
        <p class="section-title-en en">[English Section Label]</p>
      </div>
    </div>
    <div class="section-body">
      [Content]
    </div>
  </section>

  <div class="closing-section">
    <span class="closing-label en">Final Insight</span>
    <h3>[Arabic final title]</h3>
    <p>[Arabic final paragraph]</p>
  </div>

  <footer class="site-footer">
    <div class="footer-logo">
      <span class="logo-name">WOSOL</span>
      <span class="logo-sub">CONCIERGE</span>
    </div>
    <div class="footer-meta en">Prepared for Executive Review · Confidential · 2026</div>
  </footer>

</div>

<button class="back-btn" onclick="goBack()">→</button>

<script src="script.js"></script>
</body>
</html>
```

---

## 3. Homepage Hub Structure

For a hub page that links to multiple documents:

```text
pattern-bg
page-wrapper
  top-bar
  hero
  grid-label
  cards-grid
    strategy-card x N
  summary-strip optional
  site-footer
```

Use `top-bar` and `hero` instead of `site-header` and `title-block`.

---

## 4. Section Rules

Every section must include:
- Section number in English/Poppins.
- Arabic title.
- English subtitle/label.
- Clear body content.

Do not create long unstructured text without section headers.

---

## 5. Card Rules

Use cards for:
- Strategy links.
- Key insights.
- Company entries.
- Membership naming options.
- KPI blocks.
- Opportunity blocks.

Card required content:
```html
<div class="strategy-card">
  <span class="card-num en">01</span>
  <div class="card-title">Arabic Title</div>
  <div class="card-desc">Arabic description.</div>
  <div class="card-cta">فتح التفاصيل <span class="card-cta-arrow"></span></div>
</div>
```

---

## 6. Table Rules

Use tables for:
- Comparisons.
- Membership tiers.
- KPIs.
- Service mapping.
- Source lists.

Tables must be inside a scroll wrapper:
```html
<div class="compare-scroll">
  <table class="compare-table">...</table>
</div>
```

---

## 7. Membership Page Structure

For membership or pricing projects:

1. Executive Summary.
2. Membership Philosophy.
3. Target Segments.
4. Tier Logic.
5. Pricing Logic / Assessment Language.
6. Operational Requirements.
7. Comparison Table.
8. Final Insight.

Important: Top tier must be shown as invitation-only, not a normal plan.

---

## 8. Research Directory Page Structure

For company/research directory projects:

1. Executive Summary.
2. Category Overview.
3. Company Cards / Directory.
4. Filter/Search tools if JS is needed.
5. Comparison Table.
6. Strategic Patterns.
7. WOSOL Applications.
8. Sources.
9. Final Insight.

---

## 9. Final Rule

Do not let the agent change the page into a random landing page. Keep the WOSOL Strategy Hub document structure.
