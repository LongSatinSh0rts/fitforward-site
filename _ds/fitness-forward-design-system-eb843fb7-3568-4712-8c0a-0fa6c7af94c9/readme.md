# Fitness Forward — Design System

> **Fitness Forward by CJR** — *“Go beyond reason; kick impossible to the curb.”*
> A multidisciplinary philosophy toward **Health, Fitness, Wellness & Nutrition**, founded by **Christopher J. Rosado**.

This project is the brand's design system: brand assets, design tokens (color, type, spacing, effects), reusable React components, two full UI kits (marketing site + member app), sample slides, and the guidelines below. Consuming projects link the single root `styles.css` and read components from `window.FitnessForwardDesignSystem_eb843f`.

---

## Sources provided

The system was built from the brand's official asset pack only — there was **no codebase or Figma file**. Source uploads (kept in `uploads/`, canonical copies in `assets/`):

- `Fitness Forward Colors.jpg` — the six-color brand swatch sheet.
- `Fitness Forward logos-01…04.png` — the liquid wordmark in **black, white, yellow, purple** (8000×4500, transparent).
- `Fitness Forward logos-03 edit.jpg` — pale-yellow variant on white.

If a codebase, website or Figma exists, re-attach it via Import — several decisions below (component behaviour, real imagery, copy) are reasoned brand-extensions, not transcriptions of an existing product.

---

## Brand context

Fitness Forward is a personal-coaching brand. The product surfaces a designer should expect:
1. **Marketing site** — sells programs & the coaching philosophy, drives sign-ups. (See `ui_kits/site/`.)
2. **Member app** — where clients run workouts, track progress and follow their plan. (See `ui_kits/app/`.)

The identity is **loud, warm and a little rebellious** — 1970s funk/soul energy via psychedelic “liquid” lettering, a high-contrast yellow/purple/coral palette, and a coach-in-your-corner voice.

---

## Content fundamentals — how Fitness Forward writes

- **Voice:** bold, direct, encouraging. The coach in your corner — believes in you, won't coddle you.
- **Person:** speaks to **“you.”** The brand is **“we.”** The founder is named (**Chris / Christopher J. Rosado**).
- **Casing:** sentence case for almost everything. Display headlines are sentence case, set big. **Mono kickers/eyebrows are UPPERCASE** and letter-spaced.
- **Tone:** momentum words — *forward, move, beyond, start, momentum*. Anti-fad, anti-shortcut, anti-shame.
- **Tagline:** **“Go beyond reason. Kick impossible to the curb.”** (the registered brand line). Use whole, or split across lines for display.
- **Punctuation:** short declaratives. Periods used for punch (“Your forward starts today.”). The em dash sets up a turn.
- **We are:** plain words, big belief, specific. **We aren't:** clinical, preachy, hustle-bro, jargon-heavy, fine-printy.
- **Emoji:** **none.** Energy comes from type, color and the icon set — never emoji.
- **Examples:** *“Train forward, not in circles.”* · *“Four disciplines. One philosophy: forward.”* · *“I came for a workout plan and left with a whole new operating system.”*

---

## Visual foundations

**Color.** High-contrast and confident. True black ink anchors a loud trio — **Volt** yellow `#FBEE56`, **Grape** purple `#7951A0` (with **Orchid** `#BA95C5`), **Punch** coral `#E16567` — softened by **Mist** lavender `#EEDDEC` and a warm **Cream** paper `#FAF6F1`. Rule: large fields of black or cream, punched by **one** saturated accent at a time. Full ramps for each accent live in `tokens/colors.css`; semantic aliases (`--surface-*`, `--text-*`, `--accent`) sit on top.

**Type.** Three registers:
- **Display — Syne** (700/800), set tight (`-0.03em`) for hero statements and momentum. Carries the “forward” energy without competing with the logo.
- **Text — Hanken Grotesk** (400–800) for all running copy, buttons, labels — warm, rounded, highly legible.
- **Mono — Space Mono** for kickers/eyebrows (UPPERCASE, `0.18em`), stats, timers and metadata — a retro-technical accent that suits fitness data.
The custom **liquid wordmark** is used as a logo only, never as a typeface.

**Spacing & layout.** 8px base grid. Generous section rhythm (`--section-y`). Max content width 1200px. Radii are **soft and pill-forward** to echo the rounded logo: buttons & chips are fully round; cards use 22px.

**Backgrounds.** Solid color fields — **no gradients-as-decoration except** the deep grape→ grape-800 used behind hero/feature panels. Three background moods: warm **Cream** (default), **Ink** black (bold bands, footer), **Mist** lavender (soft sections). No photographic textures or noise in the system itself; real product photography drops into the labeled image placeholders.

**The “sticker” motif.** The signature device is a **hard offset shadow** (`--shadow-hard*`) + a 2.5px ink border, giving cards and buttons a playful die-cut/sticker feel. Soft warm-plum shadows (`--shadow-sm…xl`) are the quieter alternative.

**Borders & cards.** Bold 2.5px ink outlines for the sticker look; 1.5px hairlines (`--ff-150/200`) for quiet cards. Cards: `Card` component — `soft` (shadow), `bordered` (ink outline), `sticker` (outline + offset), `flat`, `inverse`.

**Highlight.** Text can wear a fat **Volt highlighter swipe** (`.ff-highlight`) behind key words — a chunky marker underline at ~88% baseline.

**Motion.** Springy and confident. `--ease-spring` (gentle overshoot) for interactive lifts; `--ease-out` for entrances; 120–360ms. Buttons lift on hover, press in on active; the sticker button slides its shadow. No sluggish fades, no infinite decorative loops.

**Hover / press.** Hover: slight `brightness(0.94)` darken (filled), or fill-in (outline/ghost). Press: `translateY(1px) scale(0.985)`. Sticker hover lifts `-2px,-2px` with a longer shadow; press drops to `+2px,+2px`.

**Imagery (when added).** Warm, high-energy, real — gym, kitchen, movement. Drop into the placeholder frames (labeled “Replace with …”). Keep it candid and bright; avoid cold stock-blue tones.

---

## Iconography

- **Library:** **[Lucide](https://lucide.dev)** loaded from CDN (`unpkg.com/lucide`). Clean rounded-stroke icons (2px) that match the friendly, rounded brand. **This is a substitution** — the brand supplied no icon set; swap for a licensed set if one exists.
- **Usage:** stroke icons at 18–26px inside UI; on color chips, icons sit in a rounded square fill. Helper `Icon` wrapper lives in `ui_kits/*/kit-common.jsx`.
- **Emoji:** never used as iconography.
- **Logo files:** `assets/logo-{black,white,yellow,purple}-trim.png` (tightly cropped, ~1335×836) for inline use; `…-1600.png` and the original 8000px PNGs for print/large.

---

## Font substitution — action needed

Webfonts are loaded from the **Google Fonts CDN** (`tokens/fonts.css`) rather than self-hosted binaries, so the Design System tab's font panel shows none. **Syne**, **Hanken Grotesk** and **Space Mono** are all open-source and render correctly. If the brand has licensed display fonts (or wants self-hosted files for offline/perf), drop the `.woff2` files in `assets/fonts/` and replace the `@import` with `@font-face` rules. → **Please confirm these three families are acceptable, or send the intended fonts.**

---

## Index / manifest

**Root**
- `styles.css` — single entry point; `@import`s all token files. Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper for use in Claude Code.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.

**`assets/`** — logo lockups (4 colorways × trim/1600/original), `brand-colors.jpg`.

**`components/core/`** — React primitives (namespace `window.FitnessForwardDesignSystem_eb843f`):
`Button`, `Badge`, `Tag`, `Card`, `Input`, `Avatar`, `StatTile`, `ProgressBar`, `Switch`. Each has `.jsx` + `.d.ts` + `.prompt.md`; the directory's `core.card.html` is the showcase.

**`guidelines/`** — foundation specimen cards for the Design System tab (Colors, Type, Spacing, Brand).

**`ui_kits/`**
- `site/` — marketing landing page (hero, disciplines, programs, coach, testimonial, CTA, footer + interactive 2-step Join modal).
- `app/` — member mobile app (dashboard, active workout, plan, profile).

**`slides/`** — branded sample slides (title, statement, stat, content).

---

## Using the system

1. Link `styles.css`.
2. Load `_ds_bundle.js` (auto-generated) and read components from `window.FitnessForwardDesignSystem_eb843f`.
3. Reach for tokens, not raw hex. Use one accent at a time. Keep the wordmark as a logo. Stay loud, stay warm, move forward.
