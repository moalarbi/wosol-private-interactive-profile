# implementation-checklist.md — WOSOL Strategy Hub QA Checklist

Use this before delivering any WOSOL Strategy Hub-style project.

---

## 1. Visual Match
- [ ] The page uses cream-first layout, not dark SaaS.
- [ ] Navy is used for emphasis blocks and featured cards only.
- [ ] Muted beige/gold accents are subtle.
- [ ] Spacing feels executive and calm.
- [ ] The page looks like a strategy document, not a marketing landing page.

---

## 2. Color System
- [ ] Uses `#041026` for deep navy.
- [ ] Uses `#F6F4F1` for page background.
- [ ] Uses `#EDE9E3` and `#D1C7BA` for beige accents.
- [ ] Uses `#2a3a50` for body text.
- [ ] Borders are subtle using `rgba(4,16,38,0.09/0.10)`.
- [ ] Gold/beige is not overused.

---

## 3. Typography
- [ ] IBM Plex Sans Arabic is loaded and applied to Arabic body.
- [ ] Poppins is loaded and applied to English labels.
- [ ] English labels use `.en` or dedicated English classes.
- [ ] Arabic page title is dominant.
- [ ] English subtitles are small, letter-spaced, and secondary.

---

## 4. Logo / Wordmark
- [ ] WOSOL wordmark appears as WOSOL + CONCIERGE.
- [ ] `.logo-block` is LTR.
- [ ] Logo is centered or left, not far right.
- [ ] Poppins is used for logo.
- [ ] Letter spacing matches design.md.
- [ ] Footer logo, if present, uses smaller scale.

---

## 5. Bilingual Structure
- [ ] Page has Arabic title + English subtitle.
- [ ] Every major section has Arabic title + English label.
- [ ] Main explanation is Arabic RTL.
- [ ] English is used for metadata, labels, strategy terms, subtitles.
- [ ] Page is not Arabic-only unless explicitly requested.
- [ ] Page is not English-only unless explicitly requested.

---

## 6. Page Structure
- [ ] `.pattern-bg` exists before `.page-wrapper`.
- [ ] `.page-wrapper` wraps all visible content.
- [ ] Header uses `.site-header` or homepage `.top-bar`.
- [ ] Inner page uses `.title-block`.
- [ ] Strategic page includes `.exec-summary` near the top.
- [ ] Sections use `.section` and `.section-header`.
- [ ] Footer uses `.site-footer`.
- [ ] Floating `.back-btn` works if included.

---

## 7. Executive Summary
- [ ] Uses navy background.
- [ ] Uses beige text.
- [ ] Has `Executive Summary` label.
- [ ] Contains concise Arabic strategic summary.
- [ ] Feels like a boardroom brief, not sales copy.

---

## 8. Cards
- [ ] Uses `.strategy-card` or compatible card system.
- [ ] Cards have subtle border.
- [ ] Hover is refined and not exaggerated.
- [ ] No emoji/icons unless explicitly requested.
- [ ] Featured cards use navy background.
- [ ] CTA does not feel generic or SaaS.

---

## 9. Buttons / CTAs
- [ ] Card CTA style matches design.md.
- [ ] No Bootstrap-like buttons.
- [ ] No loud colors.
- [ ] Floating `.back-btn` is the only fully rounded control.
- [ ] CTA language fits WOSOL tone.

---

## 10. Membership / Pricing Check
If the project includes memberships or pricing:
- [ ] Does not use “Choose Plan”.
- [ ] Does not use “Subscribe Now”.
- [ ] Does not use Basic/Pro/Enterprise style.
- [ ] Uses WOSOL language: By Assessment / Annual Membership / Custom Proposal / Private Review.
- [ ] Top tier is invitation-only or subject to review.
- [ ] Pricing does not look cheap or SaaS-like.
- [ ] Saudi Riyal symbol is used only if official asset is provided.

---

## 11. Tables
- [ ] Tables are readable.
- [ ] First column is right-aligned and bold where appropriate.
- [ ] Mobile tables use horizontal scroll.
- [ ] Header row is navy when needed.
- [ ] Alternating rows remain subtle.

---

## 12. RTL / Mobile
- [ ] HTML uses `lang="ar" dir="rtl"`.
- [ ] Arabic content aligns properly.
- [ ] English labels do not break layout.
- [ ] Mobile header stacks cleanly.
- [ ] Cards become 2 columns on tablet and 1 column on mobile.
- [ ] Footer stacks on mobile.
- [ ] Back button does not cover important content.

---

## 13. Technical QA
- [ ] Opens locally.
- [ ] Works on GitHub Pages.
- [ ] No console errors.
- [ ] No broken internal links.
- [ ] No missing fonts.
- [ ] No broken images/assets.
- [ ] `window.print()` works if print button exists.
- [ ] No external frameworks unless approved.

---

## 14. Content QA
- [ ] No cheap marketing language.
- [ ] No unverified claims.
- [ ] No invented sources.
- [ ] Every strategic claim connects to operational logic when relevant.
- [ ] The final insight is concise and executive.
- [ ] The page can be shown to management without embarrassment.

---

## 15. Final Approval
- [ ] Matches WOSOL Strategy Hub system.
- [ ] Meets content brief.
- [ ] Follows structure.md.
- [ ] Follows design.md.
- [ ] Ready to upload to GitHub Pages.
