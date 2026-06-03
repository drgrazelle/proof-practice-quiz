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
- **Hosting:** Deployed on Vercel at `https://proof-practice-quiz-1z7f.vercel.app`
- **Repo:** `https://github.com/drgrazelle/proof-practice-quiz` (public)

---

## Folder Structure

```
proof-practice-quiz/
├── app/
│   ├── layout.js                  # Root layout — Inter font, global metadata + OG tags
│   ├── globals.css                # Tailwind directives + beehiiv iframe overflow fix
│   ├── page.js                    # Landing page at /
│   ├── api/
│   │   └── og/
│   │       └── route.js           # OG image generator at /api/og (next/og, edge runtime)
│   ├── quiz/
│   │   └── page.js                # Quiz page at /quiz (client component)
│   ├── components/
│   │   └── ResultsPage.js         # Shared results layout (client component)
│   ├── full-report-sent/
│   │   └── page.js                # Confirmation page at /full-report-sent
│   ├── 3p-archetype/
│   │   └── page.js                # Archetype map at /3p-archetype (dual Venn SVG)
│   ├── restarter/page.js          # Results: The Restarter
│   ├── reader/page.js             # Results: The Reader
│   ├── optimizer/page.js          # Results: The Optimizer
│   ├── seeker/page.js             # Results: The Seeker
│   ├── burner/page.js             # Results: The Burner
│   ├── believer/page.js           # Results: The Believer
│   ├── devoted/page.js            # Results: The Devoted
│   └── practitioner/page.js      # Results: The Practitioner
├── pdfs/                          # 8 self-contained HTML files for print-to-PDF
│   ├── pdf-restarter.html
│   ├── pdf-reader.html
│   ├── pdf-optimizer.html
│   ├── pdf-seeker.html
│   ├── pdf-burner.html
│   ├── pdf-believer.html
│   ├── pdf-devoted.html
│   └── pdf-practitioner.html
├── design.md                      # Brand design system (source of truth)
├── 3p-quiz-questions-final.md     # All 12 quiz questions + scoring key
├── 3p-quiz-archetype-descriptions-final.md  # All 8 archetype descriptions
├── pdf-1-the-restarter.md         # PDF content source (untracked — local only)
├── pdf-2-the-reader.md            # PDF content source (untracked — local only)
├── pdf-3-the-optimizer.md         # PDF content source (untracked — local only)
├── pdf-4-the-seeker.md            # PDF content source (untracked — local only)
├── pdf-5-the-burner.md            # PDF content source (untracked — local only)
├── pdf-6-the-believer.md          # PDF content source (untracked — local only)
├── pdf-7-the-devoted.md           # PDF content source (untracked — local only)
├── pdf-8-the-practitioner.md      # PDF content source (untracked — local only)
├── pdf-shared-page2-3p-framework.md   # Shared PDF block (untracked — local only)
├── pdf-shared-page3-all-archetypes.md # Shared PDF block (untracked — local only)
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

### SVG Venn diagram colors (used in /3p-archetype)
- PROOF circle: `#D4A847`
- PRACTICE circle: `#87CEAB`
- PURPOSE circle: `#C4A8D4`

---

## Header & Footer Conventions (all pages)

- **Upper left:** "Health Habit Consistency Quiz" (tracking-widest uppercase, links to `/`)
- **Upper right:** varies — "Proof & Practice" on landing, "Retake the quiz" on results/confirmation
- **Footer:** `© 2026 Dr. Grazelle — Proof & Practice. Not medical advice.`

---

## Pages Built

### `/` — Landing Page
- Dark navy full-screen layout
- Headline: "There are 7 types of people who struggle to make health habits stick. / Which one are you?"
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

### `/full-report-sent` — Email Confirmation Page
- Dead-end page shown after beehiiv email signup
- No buttons, no links out (except header)
- Contains: "YOU'RE IN" label, headline, subtext, cream `#FFF9F0` card with 3 bullet points, spam note
- Matches results page header/footer exactly

### `/3p-archetype` — Archetype Map
- Two stacked sections: The 3P Framework + The 8 Archetypes
- Each section has a SVG Venn diagram (3 overlapping circles, brand colors)
- Framework SVG: labels each circle with pillar name + one-liner
- Archetype SVG: maps all 8 archetypes to mathematically verified positions within regions
- The Restarter shown outside all circles in a dashed ellipse
- All SVGs use `viewBox` — mobile-responsive, no fixed pixel widths
- No external dependencies

### `/api/og` — OG Image Route
- Uses `next/og` ImageResponse, edge runtime
- Returns 1200×630 PNG branded image
- Copy: "Here's why you keep" (white) + "starting over." (golden `#E6C280`)
- Golden "Take the free quiz" button below
- Used as the default OG image for all pages

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

## OG Meta Tags — COMPLETE on all pages

All pages have full `openGraph` + `twitter` metadata in their `page.js` files.
- **Default** (landing, quiz): set in `app/layout.js`
- **Each archetype page**: title = archetype name, description = `oneLineTruth`
- **Image**: `/api/og` (1200×630, generated at build/request time)
- **`/full-report-sent`** and **`/3p-archetype`**: have their own metadata blocks

---

## ResultsPage Component — Current Props

```js
ResultsPage({
  archetypeName,           // e.g. "The Restarter"
  oneLineTruth,            // subheadline / gut-punch sentence
  strengthSentence,        // what the user has already built
  whatYouNeed,             // full "what you need" paragraph (passed but not rendered directly)
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

---

## Missing Piece Section — Fade-to-Gate Design

1. **Text zone** (on page background):
   - "YOUR MISSING PIECE" label in `missingPieceBorderColor`
   - `blurContent` text, `maxHeight: 160px`, blurs at phase 1
   - Gradient overlay fades text into navy

2. **Gate band** (cream `rgba(255,249,240,0.97)`, edge-to-edge):
   - `marginLeft: "-24px"`, `marginRight: "-24px"`
   - "Get the full picture." headline + beehiiv embed
   - Fades in at phase 2

Animation: 0ms visible → 500ms blur → 1000ms gate appears

---

## Beehiiv Integration — COMPLETE on all 8 pages

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
All 8 forms confirmed working. Required settings per form: Fluid width, Vertical direction, Center alignment, Padding 0.

---

## PDF Files — `/pdfs/` folder

8 self-contained HTML files ready for Chrome → Print → Save as PDF.

Each file has 4 sections (separated by CSS `page-break-after: always`):
1. **Navy cover** — archetype name, one-line truth, pillar strip (colored High / dark Low cards)
2. **White — archetype deep dive** — strength, situation, bullets, reframe, action plan (3 steps), what's next, Grazelle 🌱 sign-off
3. **White — 3P Framework** — pillar cards in brand colors, full descriptions
4. **White — All 8 archetypes table** — reader's own row highlighted in gold `#FFF3CC` with ◀ marker

**To print:** Open in Chrome → Cmd+P → Save as PDF → Paper: Letter, Margins: None, Background graphics: ON.

The PDF source content files (`pdf-1-*.md` through `pdf-8-*.md` and shared blocks) are local only, not committed to git.

---

## Key Technical Decisions (cumulative)

1. **No TypeScript, no Tally** — JavaScript only, everything in Next.js
2. **Answer randomization** — shuffled in `useEffect` with `ready` state gate (SSR hydration fix)
3. **Fade-to-gate replaces gate card** — switched to content-fade pattern after beehiiv cross-origin iframe height issues
4. **beehiiv always uses `width:100%` for inline embeds** — Fixed/Fluid setting only affects overlays
5. **Share section removed** — users have one choice: enter email or leave
6. **OG image via next/og** — edge runtime route at `/api/og`, generates PNG at request time
7. **ESLint strict** — Vercel build fails on unescaped apostrophes in JSX text; always use `&apos;` or `{" "}` wrapper
8. **Stale `.next` cache** — always `rm -rf .next` and restart after structural changes
9. **Dev server:** `npm run dev -- --port 3000`
10. **GitHub CLI:** `gh` is at `/opt/homebrew/bin/gh`
11. **Vercel toolbar** — visible only to authenticated Vercel users, not public visitors

---

## What's Done ✅

- Landing page (`/`) — complete, mobile-responsive
- Quiz page (`/quiz`) — complete, all 12 questions, randomized answers, correct routing
- All 8 results pages — complete with archetype content, beehiiv embeds, fade-to-gate
- `/full-report-sent` — email confirmation dead-end page
- `/3p-archetype` — dual Venn diagram archetype map (framework + archetypes)
- `/api/og` — branded OG image route (navy, golden headline, CTA button)
- OG meta tags — complete on all pages (layout default + per-archetype overrides)
- Quiz title — "Health Habit Consistency Quiz" (browser tab + header)
- Header labels updated — "Health Habit Consistency Quiz" left, "Proof & Practice" right on landing
- Traffic light pillar dots (green High / red Low) on all results pages
- 8 PDF HTML files in `/pdfs/` ready for print-to-PDF
- Deployed to Vercel at `https://proof-practice-quiz-1z7f.vercel.app`
- All beehiiv forms confirmed working

---

## What Still Needs To Be Done

1. **Verify `/3p-archetype` is live** — last session ended with a 404 that appeared to be a stale Vercel build. The fix (ESLint apostrophe escape) was pushed as commit `ff03bcd`. Confirm the page loads at `https://proof-practice-quiz-1z7f.vercel.app/3p-archetype`.

2. **Print the 8 PDFs** — open each file in `/pdfs/` in Chrome and print to PDF. Files are local only (not in git).

3. **Custom domain** — `quiz.drgrazelle.com` was mentioned as the target domain but has not been configured in Vercel yet. To set up: Vercel dashboard → project → Settings → Domains → add `quiz.drgrazelle.com` → update DNS at registrar.

4. **beehiiv redirect to `/full-report-sent`** — the confirmation page exists but beehiiv forms aren't yet configured to redirect there after signup. In each beehiiv form's settings, set the post-subscribe redirect URL to `https://[live-domain]/full-report-sent`.

---

## Exact Next Task for New Session

**Step 1 — Verify `/3p-archetype` is live:**
```
Go to: https://proof-practice-quiz-1z7f.vercel.app/3p-archetype
If 404: check Vercel dashboard → confirm commit ff03bcd deployed → redeploy if needed
```

**Step 2 — Configure custom domain (if desired):**
```
Vercel dashboard → proof-practice-quiz → Settings → Domains
Add: quiz.drgrazelle.com
Update DNS: CNAME quiz → cname.vercel-dns.com (or A record per Vercel instructions)
```

**Step 3 — Wire beehiiv redirect to /full-report-sent:**
```
In beehiiv dashboard, for each of the 8 forms:
Settings → After Subscribe → Redirect to URL
URL: https://[live-domain]/full-report-sent
```

**Step 4 — Print PDFs:**
```
Open each file in /pdfs/ in Chrome
Cmd+P → Save as PDF → Letter, No margins, Background graphics ON
```
