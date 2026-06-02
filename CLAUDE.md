# CLAUDE.md — Project Context: Proof & Practice Quiz

This file orients a new session. Read it before making any changes.

---

## What This Is

A Next.js 14 quiz app for Dr. Grazelle Sanchez's brand **Proof & Practice**. Users take a 12-question self-assessment, receive a scored archetype result, and are prompted to sign up for Dr. Grazelle's newsletter via a beehiiv embed.

The quiz is built entirely in Next.js — no Tally, no third-party form builders.

---

## Tech Stack

- **Framework:** Next.js 14, App Router
- **Language:** JavaScript only (no TypeScript)
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts, via `next/font/google`), weights 400/600/700/800
- **Hosting:** Not yet deployed (runs locally on `npm run dev`, port 3000)
- **Repo:** `https://github.com/drgrazelle/proof-practice-quiz` (public)

---

## Folder Structure

```
proof-practice-quiz/
├── app/
│   ├── layout.js                  # Root layout — Inter font, metadata
│   ├── globals.css                # Tailwind directives + beehiiv iframe overflow fix
│   ├── page.js                    # Landing page at /
│   ├── quiz/
│   │   └── page.js                # Quiz page at /quiz (client component)
│   ├── components/
│   │   └── ResultsPage.js         # Shared results layout (client component)
│   ├── restarter/page.js          # Results: The Restarter
│   ├── reader/page.js             # Results: The Reader
│   ├── optimizer/page.js          # Results: The Optimizer
│   ├── seeker/page.js             # Results: The Seeker
│   ├── burner/page.js             # Results: The Burner
│   ├── believer/page.js           # Results: The Believer
│   ├── devoted/page.js            # Results: The Devoted
│   └── practitioner/page.js      # Results: The Practitioner
├── design.md                      # Brand design system (source of truth)
├── 3p-quiz-questions-final.md     # All 12 quiz questions + scoring key
├── 3p-quiz-archetype-descriptions-final.md  # All 8 archetype descriptions
├── tailwind.config.js             # Custom brand color tokens
├── next.config.mjs
├── jsconfig.json                  # Path alias: @/* → root
└── package.json
```

---

## Design Tokens (from design.md)

All colors are registered in `tailwind.config.js` and usable as Tailwind classes.

### Primary Palette
| Token | Hex | Usage |
|---|---|---|
| `navy` | `#1A2B48` | Page backgrounds, primary text |
| `steel` | `#5E7A9E` | Secondary text, borders |
| `slate` | `#F4F7FA` | Body text on dark backgrounds |

### Accent Colors
| Token | Hex | Usage |
|---|---|---|
| `golden` | `#E6C280` | Primary CTAs, highlights |
| `green` | `#76C043` | Wellness icons, High pillar dot |

### Category / Pillar Colors
| Token | Hex | Pillar |
|---|---|---|
| `proof` | `#F9D08B` | Proof pillar |
| `practice` | `#A3D9C9` | Practice pillar |
| `purpose` | `#C9BFE3` | Purpose pillar |

### Additional inline style values
- Low pillar card background: `#2A3A52`
- Low pillar text: `#9EACC0`
- Missing piece box background: `#1E3358`
- Gate section background: `rgba(255,249,240,0.97)` (cream)
- High pillar status dot: `#76C043` (green)
- Low pillar status dot: `#E05252` (red)

---

## Pages Built

### `/` — Landing Page
- Dark navy full-screen layout
- Headline: "There are 7 types of people who struggle to make health habits stick. / Which one are you?"
- Subline wraps on mobile (no `whitespace-nowrap`) — `text-center max-w-sm mx-auto`
- Golden CTA button → `/quiz`
- Three-pillar strip (Proof / Practice / Purpose) with brand colors

### `/quiz` — Quiz Page
- Client component (`"use client"`)
- Shows one question at a time (12 total across 3 pillars)
- Answer order **randomized on mount** via `useEffect` (SSR hydration fix)
- Tracks scores for `proof`, `practice`, `purpose` separately
- Progress bar + "Question X of 12" counter
- After Q12: 0–5 = pillar absent, 6–12 = pillar present → router pushes to archetype route

### `/[archetype]` — 8 Results Pages
All use the shared `ResultsPage` component in `app/components/ResultsPage.js`.

---

## The 8 Archetypes

| Route | Name | Proof | Practice | Purpose | Border Color |
|---|---|---|---|---|---|
| `/restarter` | The Restarter | Low | Low | Low | `#E6C280` golden |
| `/reader` | The Reader | High | Low | Low | `#A3D9C9` teal |
| `/optimizer` | The Optimizer | Low | High | Low | `#F9D08B` gold |
| `/seeker` | The Seeker | Low | Low | High | `#C9BFE3` lavender |
| `/burner` | The Burner | High | High | Low | `#C9BFE3` lavender |
| `/believer` | The Believer | High | Low | High | `#A3D9C9` teal |
| `/devoted` | The Devoted | Low | High | High | `#F9D08B` gold |
| `/practitioner` | The Practitioner | High | High | High | `#E6C280` golden |

---

## ResultsPage Component — Current Props

```js
ResultsPage({
  archetypeName,           // e.g. "The Restarter"
  oneLineTruth,            // subheadline / gut-punch sentence
  strengthSentence,        // what the user has already built
  whatYouNeed,             // full "what you need" paragraph (passed but not rendered directly —
                           // blurContent already includes this text)
  blurContent,             // ~300-word block shown blurred above the gate band
  missingPieceBorderColor, // hex — used for box outline AND label color, per archetype
  embedScript,             // { src, formId } — injects beehiiv into #beehiiv-embed-target
  accentBorder,            // Tailwind class e.g. "border-golden"
  accentText,              // Tailwind class e.g. "text-golden"
  pillars,                 // array of 3 pillar objects (see below)
})
```

Each pillar object:
```js
{ label, status: "present"|"absent", colorClass, dotClass, borderClass, highBg }
```

**Note:** `gateCardWidth` prop has been removed. `whatYouNeed` is still passed but only used
as a prop — the blurContent already contains this paragraph for the blur zone.

---

## Missing Piece Section — Current Design (Fade-to-Gate)

Replaced the old floating gate card overlay with a **full-page fade-to-gate** pattern:

1. **Text zone** (on page background, no box border):
   - "YOUR MISSING PIECE" label in `missingPieceBorderColor`
   - `blurContent` text, `maxHeight: 160px`, `overflow: hidden`
   - Blur animates in at phase 1 (`filter: blur(5px)`)
   - Gradient overlay fades text into page navy (`transparent → #1A2B48`)

2. **Gate band** (cream `rgba(255,249,240,0.97)`, breaks out of column padding):
   - `marginLeft: "-24px"`, `marginRight: "-24px"` — runs edge-to-edge
   - "Get the full picture." headline + body + "Free. Sent to your inbox."
   - beehiiv embed in `#beehiiv-embed-target` — `width: 100%`, `maxWidth: 440px`, `margin: 0 auto`
   - Fades in at phase 2 (`opacity: 1`)

**Animation sequence** (unchanged from original):
- 0ms: text visible, gate band hidden
- 500ms: text blurs over 0.5s
- 1000ms: gate band fades in over 0.5s

---

## Beehiiv Integration — COMPLETE on all 8 pages

All 8 archetype pages use `embedScript` prop with unique form IDs:

| Route | Form ID |
|---|---|
| `/restarter` | `a2ec281a-40fd-4cea-ad30-b6ea8e35246c` |
| `/reader` | `0f0ff9c4-ed4b-46f6-99b7-3dbe167164ef` |
| `/optimizer` | `db75c8f8-5bd9-4701-a1c8-223fa0a8dc94` |
| `/seeker` | `b5e8aacd-c5c4-4102-a5dd-c7922e58faaf` |
| `/burner` | `05b7494e-7391-4503-9d12-4bbf38e69b7e` |
| `/believer` | `124320b8-2743-4316-a034-b1bc468c0acf` |
| `/devoted` | `d854fc1d-f157-4716-96e1-e88f162a24b7` |
| `/practitioner` | `8e85d083-290c-4830-8afb-689687badf01` |

**Beehiiv script:** `https://subscribe-forms.beehiiv.com/v3/loader.js`
Injected dynamically via `useEffect` when phase reaches 2 (gate band visible).

**Required beehiiv form settings (set on all 8 forms):**
- Form width: **Fluid** (Fill)
- Direction: **Vertical** (stacked — email above, button below)
- Horizontal alignment: **Center**
- Padding: 0

**How beehiiv's inline embed works (important for debugging):**
- `_renderInline` always passes `{ collapsed: true }` → iframe always gets `width: 100%`
- The Fixed/Fluid width setting does NOT affect iframe width for inline embeds
- Centering is handled by beehiiv's `container_horizontal_alignment` setting internally
- Do NOT add `width: 100% !important` to the iframe in CSS — it fights beehiiv's own centering
- Our CSS in `globals.css` only adds `max-width: 100% !important` on the deep iframe selector

**DOM structure beehiiv injects:**
```
#beehiiv-embed-target
  > <script data-beehiiv-form="...">
  > <div style="width:100%;max-width:100%;margin:0 auto">   ← wrap
      > <div>                                               ← iframeWrap
          > <iframe style="width:100%">
```

---

## globals.css — What's In It

```css
/* Only rule beyond Tailwind base + utilities: */
#beehiiv-embed-target > div > div > iframe {
  max-width: 100% !important;   /* prevents overflow on narrow screens */
}
```

---

## Pillar Score Strip

Three cards across the top of each results page. Status dot colors:
- **High pillar:** green dot `#76C043`, card background = pillar color (proof/practice/purpose)
- **Low pillar:** red dot `#E05252`, card background = `#2A3A52`

---

## Key Technical Decisions (cumulative)

1. **No TypeScript, no Tally** — JavaScript only, everything in Next.js
2. **Answer randomization** — shuffled in `useEffect` with `ready` state gate (SSR hydration fix)
3. **Fade-to-gate replaces gate card** — after many iterations with floating overlay cards causing
   height/centering issues with beehiiv's cross-origin iframe, switched to content-fade pattern
   where gate band is in normal document flow, full width
4. **beehiiv always uses `width:100%` for inline embeds** — hardcoded in their loader script;
   Fixed/Fluid setting only affects overlays. Centering must come from their alignment setting.
5. **Share section removed** — users have one choice: enter email or leave
6. **Stale `.next` cache** — always `rm -rf .next` and restart after structural changes
7. **Dev server:** `npm run dev -- --port 3000`
8. **GitHub CLI:** `gh` is at `/opt/homebrew/bin/gh`

---

## Content Source Files

| File | Contents |
|---|---|
| `design.md` | Brand colors, typography, component patterns |
| `3p-quiz-questions-final.md` | All 12 questions, answer options with point values (A=0, B=1, C=2, D=3), scoring key, archetype map |
| `3p-quiz-archetype-descriptions-final.md` | All 8 archetype descriptions: one-line truth, strength sentence, 3 paragraphs, bullets, reframe, what you need, CTA |

---

## What's Done ✅

- Landing page (`/`) — complete, mobile-responsive
- Quiz page (`/quiz`) — complete, all 12 questions, randomized answers, correct routing
- All 8 results pages — complete with archetype content
- beehiiv embeds live on all 8 pages with unique form IDs
- Fade-to-gate design on all 8 results pages
- Traffic light pillar dots (green/red)
- Mobile-responsive layout verified on 428px

## What Still Needs To Be Done

1. **Deploy to Vercel** — not yet deployed, runs locally only
   - Recommended: connect GitHub repo to Vercel, set root directory to `/`, framework preset Next.js
   - No env vars needed (no secrets in this project)

2. **Update all 8 beehiiv forms** to Fluid width + center alignment + vertical direction
   - Only `/devoted` has been confirmed working; other 7 need the same settings applied in beehiiv dashboard

3. **OG meta tags** — add per-page Open Graph tags for social sharing (title, description, image per archetype)
   - Add `export const metadata` in each archetype `page.js` with `openGraph` fields
   - Would need a 1200×630 OG image per archetype (or one generic one)

4. **Quiz title** — still `[Title placeholder]` in `3p-quiz-questions-final.md`

---

## Exact Next Task for New Session

**Priority 1 — Deploy to Vercel:**
```
1. Go to vercel.com → New Project → Import from GitHub → drgrazelle/proof-practice-quiz
2. Framework: Next.js (auto-detected)
3. No env vars needed
4. Deploy
5. Test all 8 result pages on the live URL
6. Test mobile on the live URL
```

**Priority 2 — OG meta tags (after deploy, so you have the live URL):**
Each `page.js` already exports `metadata` with just a `title`. Extend it:
```js
export const metadata = {
  title: "The Devoted | Proof & Practice",
  description: "You show up with your whole heart. You deserve a better foundation.",
  openGraph: {
    title: "The Devoted | Proof & Practice",
    description: "You show up with your whole heart. You deserve a better foundation.",
    url: "https://[live-url]/devoted",
    siteName: "Proof & Practice",
    type: "website",
  },
};
```
The `description` for each archetype = the `oneLineTruth` prop in that page's `page.js`.
