# CLAUDE.md — Project Context: Proof & Practice Quiz

This file orients a new session. Read it before making any changes.

---

## What This Is

A Next.js 14 quiz app for Dr. Grazelle Sanchez's brand **Proof & Practice**. Users take a 12-question self-assessment, receive a scored archetype result, and are directed to sign up for Dr. Grazelle's newsletter via a beehiiv embed.

The quiz is built entirely in Next.js — no Tally, no third-party form builders for the quiz itself.

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
│   ├── globals.css                # Tailwind directives, CSS vars
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
| `green` | `#76C043` | Wellness icons |

### Category / Pillar Colors
| Token | Hex | Pillar |
|---|---|---|
| `proof` | `#F9D08B` | Proof pillar |
| `practice` | `#A3D9C9` | Practice pillar |
| `purpose` | `#C9BFE3` | Purpose pillar |

### Additional values used in inline styles (not in Tailwind config)
- Low pillar card background: `#2A3A52`
- Low pillar text: `#9EACC0`
- Gate card background: `rgba(255,249,240,0.92)` (frosted cream)

---

## Pages Built

### `/` — Landing Page
- Dark navy full-screen layout
- Headline: "There are 7 types of people who struggle to make health habits stick. / Which one are you?"
- Subline: "12 questions. 3 minutes. Find out which piece you're missing."
- Golden CTA button linking to `/quiz`
- Three-pillar strip (Proof / Practice / Purpose) with brand colors

### `/quiz` — Quiz Page
- Client component (`"use client"`)
- Shows one question at a time (12 total across 3 pillars)
- Answer order is **randomized on mount** (shuffled in `useEffect` to avoid SSR hydration mismatch — this was a key bug fix)
- Tracks scores for `proof`, `practice`, `purpose` separately
- Progress bar + "Question X of 12" counter
- After Q12, scores are evaluated: 0–5 = pillar absent, 6–12 = pillar present
- Router pushes to the correct archetype route

### `/[archetype]` — 8 Results Pages
All use the shared `ResultsPage` component in `app/components/ResultsPage.js`.

---

## The 8 Archetypes

Determined by which pillars score High (6–12) or Low (0–5):

| Route | Name | Proof | Practice | Purpose |
|---|---|---|---|---|
| `/restarter` | The Restarter | Low | Low | Low |
| `/reader` | The Reader | High | Low | Low |
| `/optimizer` | The Optimizer | Low | High | Low |
| `/seeker` | The Seeker | Low | Low | High |
| `/burner` | The Burner | High | High | Low |
| `/believer` | The Believer | High | Low | High |
| `/devoted` | The Devoted | Low | High | High |
| `/practitioner` | The Practitioner | High | High | High |

---

## ResultsPage Component — Props

```js
ResultsPage({
  archetypeName,      // e.g. "The Restarter"
  oneLineTruth,       // subheadline / gut-punch sentence
  strengthSentence,   // what the user has already built
  whatYouNeed,        // full "what you need" paragraph — first sentence shown above blur zone
  blurContent,        // dense wall of text shown blurred behind gate card (what you need
                      // + 3 descriptive paragraphs + bullets as prose)
  accentBorder,       // Tailwind class e.g. "border-golden"
  accentText,         // Tailwind class e.g. "text-golden"
  gateCardWidth,      // default "82%" — use "92%" for pages with embedded forms
  embedScript,        // optional { src, formId } — replaces scroll button with beehiiv Script
  pillars,            // array of 3 pillar objects (see below)
})
```

Each pillar object:
```js
{ label, status: "present"|"absent", colorClass, dotClass, borderClass, highBg }
```

---

## Missing Piece Box — How It Works

The most complex UI element. Structure:

1. **Label** ("YOUR MISSING PIECE") + **first sentence** of `whatYouNeed` — always fully readable above the blur zone
2. **Blur zone** (`position: relative`, `overflow: hidden`):
   - `blurContent` text is `position: absolute; inset: 0` — fills the background
   - Gate card is in **normal flow** — its height sizes the container (no fixed minHeight)
   - Container has `padding: "36px 20px 20px"` — creates visible blurred text above (36px) and on sides (20px)
   - Gate card is `width: gateCardWidth` with `margin: auto` — text peeks on left/right
3. **Animation sequence** (JS `setTimeout`, not pure CSS):
   - 0ms: text fully visible (blur = 0), gate card opacity = 0
   - 500ms: blur transitions in over 0.5s (`filter: blur(8px)`)
   - 1000ms: gate card fades in over 0.5s (`opacity: 1`)
   - `pointerEvents` on gate card is `"none"` until phase 2

---

## Gate Card

- Background: `rgba(255,249,240,0.92)` with `backdropFilter: blur(2px)` (frosted cream)
- Text: dark navy `#1A2B48`
- Headline: "Get the full picture."
- Body: "What this means for you specifically, how you compare to every other type, and the exact next steps for where you are right now."
- Subtext: "Free. Sent to your inbox." — full `#1A2B48` (not transparent)
- Default: golden scroll button → scrolls to `#optin-form`
- Practitioner only: beehiiv `<Script>` embed instead of button

---

## Beehiiv Integration

- **`/practitioner`** has a live beehiiv embed in the gate card:
  - Script src: `https://subscribe-forms.beehiiv.com/v3/loader.js`
  - Form ID: `8e85d083-290c-4830-8afb-689687badf01`
  - Loaded via `next/script` with `strategy="afterInteractive"`
- All other 7 pages have a `BEEHIIV FORM GOES HERE` dashed placeholder div at `id="optin-form"` — ready to drop in the embed when ready

---

## Key Decisions Made This Session

1. **No TypeScript, no Tally** — JavaScript only, everything built in Next.js
2. **Answer randomization fix** — Shuffling quiz answers in `useState()` initializer caused SSR hydration mismatch and broke clicks. Fixed by deferring shuffle to `useEffect` with a `ready` state gate.
3. **Blur zone layout inversion** — Gate card in normal flow (sizes the container); blurred text is `position: absolute` filling the background. This was the key fix after multiple failed attempts with `minHeight` and `absolute` card placement.
4. **`overflow: hidden` on outer wrapper was clipping the gate card** — Removed it from the outer missing piece box; `overflow: hidden` is only on the inner blur zone div.
5. **`blurContent` is separate from `whatYouNeed`** — `whatYouNeed` is the actual paragraph used for the visible first sentence. `blurContent` is a dense ~300-word wall combining the what-you-need paragraph + 3 descriptive paragraphs + bullets as prose, specific to each archetype.
6. **Stale `.next` cache** causes server errors after rebuilds — always `rm -rf .next` and restart the dev server after structural changes.
7. **Dev server runs on port 3000** — `npm run dev -- --port 3000`
8. **GitHub CLI path** — `gh` is installed at `/opt/homebrew/bin/gh`, not on the default shell PATH used by Claude's Bash tool. Use the full path if needed.

---

## Content Source Files

| File | Contents |
|---|---|
| `design.md` | Brand colors, typography, component patterns |
| `3p-quiz-questions-final.md` | All 12 questions, answer options with point values (A=0, B=1, C=2, D=3), scoring key, archetype map |
| `3p-quiz-archetype-descriptions-final.md` | All 8 archetype descriptions: one-line truth, strength sentence, 3 paragraphs, bullets, reframe, what you need, CTA |

---

## What Still Needs To Be Done

- Replace `BEEHIIV FORM GOES HERE` placeholders on the 7 non-practitioner results pages with live beehiiv embeds
- Deploy to production (Vercel recommended for Next.js)
- Add quiz title (currently `[Title placeholder]` in the questions file)
- Consider adding OG meta tags per results page for social sharing
