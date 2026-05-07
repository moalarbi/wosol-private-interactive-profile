# CLAUDE.md — WOSOL Strategy Hub Project Rules

Use this file as the operating manual for Claude Code / Codex / any coding agent working on WOSOL Strategy Hub-style projects.

## 1. Source of Truth Priority
Follow these files in this order:
1. `content-brief.md` — project-specific goal and content.
2. `structure.md` — page sections and layout order.
3. `design.md` — visual design system.
4. `implementation-checklist.md` — final QA before delivery.
5. This `CLAUDE.md` — behavior and execution rules.

If instructions conflict, ask yourself: what preserves WOSOL Strategy Hub fidelity and executive quality? Then proceed with the stricter rule.

## 2. Core Build Rule
Build every project using the WOSOL Strategy Hub design system. Do not invent a new style.

Required visual identity:
- Cream-first executive document layout.
- Navy emphasis blocks.
- Muted beige/gold accents.
- WOSOL wordmark treatment.
- Arabic RTL main content.
- English executive labels and subtitles.
- Boardroom-ready spacing.
- Premium, calm, confidential feeling.

## 3. Required Technical Output
Unless the user requests otherwise:
- Build as static HTML/CSS/JS.
- Must work on GitHub Pages.
- Prefer one `index.html` for simple projects.
- Use separate `style.css` and `script.js` if the project is medium/large.
- Do not use React, Tailwind, Bootstrap, or external UI frameworks unless explicitly requested.
- Google Fonts are allowed only for IBM Plex Sans Arabic and Poppins.

## 4. Language Rules
- Main language: Arabic RTL.
- English must be included for labels, subtitles, metadata, and executive terminology.
- Every main page must include Arabic title + English subtitle.
- Every major section must include Arabic section title + English section label.
- Do not create Arabic-only pages by default.
- Do not create English-only pages by default.
- Use `lang="ar" dir="rtl"` in HTML.
- Use Poppins for English labels and IBM Plex Sans Arabic for Arabic body.

## 5. WOSOL Wordmark Rules
Always render WOSOL as:

WOSOL  
CONCIERGE

Rules:
- Keep `.logo-block` LTR.
- Use Poppins only.
- Prefer center or left placement.
- Avoid placing the wordmark on the far right.
- Never distort letter spacing.
- If an official image logo is provided, use it while preserving placement and scale.

## 6. Layout Rules
Default structure:
pattern-bg → page-wrapper → site-header/top-bar → title-block or hero → exec-summary → sections → closing-section → site-footer → back-btn

Do not replace this with a generic SaaS hero, app dashboard, or landing page structure.

## 7. Content Tone
Tone must be:
- Executive.
- Strategic.
- Clear.
- Premium.
- Minimal fluff.
- Suitable for management review.

Avoid:
- Cheap marketing language.
- Exaggerated luxury clichés.
- “VIP” overuse.
- “اشترك الآن / اختر الباقة” unless specifically requested.
- Overpromising without operational logic.

Use terms like:
- Executive Summary
- Strategic Logic
- Private Membership Review
- Lifestyle Assessment
- Dedicated Lifestyle Manager
- Client Intelligence Profile
- Trusted Access
- Quiet Luxury
- Discreet Execution
- Operational Proof

## 8. WOSOL Brand Validation Rule
For WOSOL projects, every brand claim must connect to operational proof.

Examples:
- “We understand you” → Client Intelligence Profile.
- “Private lifestyle management” → Dedicated Lifestyle Manager + confidential handling.
- “Proactive service” → reminders, suggestions, CRM triggers.
- “Exclusive access” → partner network and vetted providers.

Do not create a promise if the operation behind it is not defined.

## 9. Membership Rules
If building membership-related pages:
- Memberships are not cheap packages.
- Do not use SaaS pricing language.
- Use terms: Annual Membership, By Assessment, Custom Proposal, By Private Invitation Only, Subject to Membership Review.
- The top tier must not appear as a normal purchase option.
- Explain operational logic behind each tier.

## 10. UI Rules
Do:
- Use `.pattern-bg` globally.
- Use `.page-wrapper` for document width.
- Use `.exec-summary` near the top.
- Use `.section-header` for every section.
- Use `.strategy-card` for tiles.
- Use `.back-btn` for return navigation.
- Preserve responsive behavior.

Do not:
- Use generic Bootstrap-like buttons.
- Use random gradients.
- Overuse gold.
- Add emojis or playful icons.
- Create dark SaaS UI.
- Create fully rounded cards.
- Break RTL.

## 11. QA Before Final Answer
Before delivering code, verify:
- The page opens locally.
- No console errors.
- RTL is correct.
- Arabic + English structure exists.
- WOSOL wordmark is LTR.
- Mobile layout works.
- It visually follows design.md.
- Buttons and cards do not look generic.
- Pricing, if used, does not look like SaaS.

## 12. User Instruction to Start Any New Project
Use this exact prompt with the files:

```text
Use these files as the source of truth:
1. design.md for visual design.
2. CLAUDE.md for project rules.
3. content-brief.md for content direction.
4. structure.md for page layout.
5. implementation-checklist.md for final QA.

Do not invent a new design system.
Do not ignore the bilingual Arabic/English rule.
Build the project strictly using these instructions.
```
