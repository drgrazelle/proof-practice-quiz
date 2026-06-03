# CLAUDE.md — Project Context: Proof & Practice Quiz

This file orients a new session. Read it before making any changes.

---

## What This Is

A Next.js 14 quiz app for Dr. Grazelle Sanchez's brand **Proof & Practice**. Users take a 12-question self-assessment, hit an email gate page, enter their email via beehiiv, and are redirected to their archetype result page.

The quiz is built entirely in Next.js — no Tally, no third-party form builders.

---

## Tech Stack

- **Framework:** Next.js 14, App Router
- **Language:** JavaScript only (no TypeScript)
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts, via `next/font/google`), weights 400/600/700/800
- **Hosting:** Deployed on Vercel at `https://proof-practice-quiz-1z7f.vercel.app`
- **Custom domain:** `quiz.drgrazelle.com` — live and working
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
│   │   ├── ResultsPage.js         # OLD shared results layout (still exists, not used by new gate pages)
│   │   └── EmailGatePage.js       # NEW shared email gate layout (used by all 8 result routes)
│   ├── full-report-sent/
│   │   └── page.js                # Confirmation page at /full-report-sent
│   ├── 3p-archetype/
│   │   └── page.js                # Archetype map at /3p-archetype (dual Venn SVG)
│   ├── r-4291/page.js             # Gate: The Restarter
│   ├── rd-7134/page.js            # Gate: The Reader
│   ├── op-5820/page.js            # Gate: The Optimizer
│   ├── sk-3967/page.js            # Gate: The Seeker
│   ├── br-6412/page.js            # Gate: The Burner
│   ├── bl-9053/page.js            # Gate: The Believer
│   ├── dv-2748/page.js            # Gate: The Devoted
│   ├── pr-8361/page.js            # Gate: The Practitioner
│   ├── restarter/page.js          # OLD results page (still exists — redirects via next.config.mjs)
│   ├── reader/page.js             # OLD results page
│   ├── optimizer/page.js          # OLD results page
│   ├── seeker/page.js             # OLD results page
│   ├── burner/page.js             # OLD results page
│   ├── believer/page.js           # OLD results page
│   ├── devoted/page.js            # OLD results page
│   └── practitioner/page.js      # OLD results page
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
├── tailwind.config.js             # Custom brand color tokens
├── next.config.mjs                # Redirects: old slugs → new obfuscated slugs
├── jsconfig.json                  # Path alias: @/* → root
└── package.json
```

---

## Design Tokens (tailwind.config.js)

### Primary Palette
| Token | Hex | Usage |
|---|---|---|
| `navy` | `#1A2B4A` | Page backgrounds, primary text |
| `steel` | `#5B7BA8` | Secondary text, borders |
| `slate` | `#F4F7FA` | Body text on dark backgrounds |
| `cream` | `#F9F8F5` | Off-white (reserved for future light mode) |
| `ink` | `#1A2B4A` | Alias for navy on light backgrounds |

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

---

## Current User Flow

```
/ (landing) → /quiz (12 questions) → /[obfuscated-slug] (email gate) → beehiiv handles redirect after signup
```

The email gate pages show:
- "We found your pattern." heading
- Subtext about sending their result
- Beehiiv embed (unique per archetype)
- Disclaimer about Proof & Practice newsletter
- No archetype name, no scores, no result content

---

## Slug Map (obfuscated for privacy)

| Archetype | Route | beehiiv Form ID |
|---|---|---|
| The Restarter | `/r-4291` | `a2ec281a-40fd-4cea-ad30-b6ea8e35246c` |
| The Reader | `/rd-7134` | `0f0ff9c4-ed4b-46f6-99b7-3dbe167164ef` |
| The Optimizer | `/op-5820` | `db75c8f8-5bd9-4701-a1c8-223fa0a8dc94` |
| The Seeker | `/sk-3967` | `b5e8aacd-c5c4-4102-a5dd-c7922e58faaf` |
| The Burner | `/br-6412` | `05b7494e-7391-4503-9d12-4bbf38e69b7e` |
| The Believer | `/bl-9053` | `124320b8-2743-4316-a034-b1bc468c0acf` |
| The Devoted | `/dv-2748` | `d854fc1d-f157-4716-96e1-e88f162a24b7` |
| The Practitioner | `/pr-8361` | `8e85d083-290c-4830-8afb-689687badf01` |

Old readable slugs (`/restarter`, `/reader`, etc.) permanently redirect to new slugs via `next.config.mjs`.

---

## Quiz Page — Key Behavior

- 12 questions, one at a time, randomized answer order (shuffled on mount, SSR-safe)
- Tracks scores for `proof`, `practice`, `purpose` separately (0–12 each)
- Score ≥ 6 = pillar present; < 6 = pillar absent → determines archetype
- **Back button** on Q2–Q12: returns to previous question with prior answer highlighted in gold
- After Q12: routes directly to obfuscated slug via `ARCHETYPE_SLUGS` map
- Progress bar + "Question X of 12" counter in header

### Back button implementation details
- `history` array stores `{ optionIndex, pointsAdded, pillar }` per question
- `prevAnswerIndex` state stores the option index when going back (separate from history, which gets sliced)
- `prevAnswerIndex === i` drives the gold highlight on return visit
- Cleared to `null` on every forward selection

---

## Landing Page — Current State

- Dark navy background (`bg-navy`)
- Gold CTA button (`bg-golden text-navy`)
- Three pillar cards with **inline SVG line icons**: open book (Proof), sneaker (Practice), leaf (Purpose)
- Icons stroke with pillar colors: `#F9D08B`, `#A3D9C9`, `#C9BFE3`
- No header (removed)
- Footer: `© 2026 Dr. Grazelle — Proof & Practice. Not medical advice.`

---

## Header & Footer Conventions

- **Landing page (`/`):** No header. Footer only.
- **Quiz page (`/quiz`):** Header with "Health Habit Consistency Quiz" + "Question X of 12"
- **Email gate pages:** Header with "Health Habit Consistency Quiz" (links to `/`) + "Retake the quiz" (links to `/quiz`)
- **`/3p-archetype`:** No header. Footer only.
- **`/full-report-sent`:** Standard header + footer
- **Footer all pages:** `© 2026 Dr. Grazelle — Proof & Practice. Not medical advice.`

---

## EmailGatePage Component (`app/components/EmailGatePage.js`)

Props: `embedScript: { src, formId }`

Beehiiv injection pattern (must match this exactly — other methods don't work):
```js
const script = document.createElement("script");
script.src = embedScript.src;
script.async = true;
script.setAttribute("data-beehiiv-form", embedScript.formId);
container.appendChild(script); // appended INTO #beehiiv-embed-target div
```

---

## Key Technical Decisions (cumulative)

1. **No TypeScript, no Tally** — JavaScript only, everything in Next.js
2. **Answer randomization** — shuffled in `useEffect` with `ready` state gate (SSR hydration fix)
3. **Email gate replaces direct results** — all 8 result pages are now gate pages; old ResultsPage.js still exists but is unused by current flow
4. **Obfuscated slugs** — prevents users from guessing archetype URLs; old slugs redirect permanently
5. **beehiiv embed** — script must be appended INTO `#beehiiv-embed-target` with `data-beehiiv-form` attribute; body-level injection does not work
6. **Back button** — uses separate `prevAnswerIndex` state (not history lookup) to avoid race condition when history is sliced
7. **ESLint strict** — Vercel build fails on unescaped apostrophes in JSX; always use `&apos;` or `{" "}`
8. **Stale `.next` cache** — always `rm -rf .next` and restart after structural changes
9. **Dev server:** `npm run dev -- --port 3000`
10. **GitHub CLI:** `gh` is at `/opt/homebrew/bin/gh`
11. **Vercel deploys from `main` branch** — pushing to main triggers deploy automatically

---

## What's Done ✅

- Landing page (`/`) — dark navy, gold CTA, SVG health icons on pillar cards, no header
- Quiz page (`/quiz`) — 12 questions, randomized answers, back button with saved answer, correct routing to obfuscated slugs
- 8 email gate pages — `EmailGatePage` component, beehiiv embed per archetype, no result content visible
- Old readable slugs redirect permanently to new obfuscated slugs
- `/full-report-sent` — email confirmation page
- `/3p-archetype` — dual Venn diagram (framework + archetypes), no header
- `/api/og` — branded OG image route
- OG meta tags — complete on all pages
- Custom domain `quiz.drgrazelle.com` — live
- 8 PDF HTML files in `/pdfs/` — ready for print-to-PDF
- Tailwind config updated with `cream`, `ink` tokens; `navy` and `steel` updated to confirmed hex values

---

## What Still Needs To Be Done

1. **Wire beehiiv redirect to `/full-report-sent`** — in each beehiiv form's settings, set post-subscribe redirect URL to `https://quiz.drgrazelle.com/full-report-sent`

2. **Print the 8 PDFs** — open each `/pdfs/*.html` in Chrome → Cmd+P → Save as PDF → Letter, No margins, Background graphics ON

3. **Verify beehiiv embed loads on gate pages** — test full flow: take quiz → land on gate page → confirm beehiiv form appears and submits correctly

4. **Decide on archetype result pages** — the old 8 `ResultsPage`-based pages still exist at `/restarter`, `/reader`, etc. (now redirecting to gate pages). Options:
   - Delete the old archetype folders entirely (clean up)
   - Keep them and wire them as the post-email destination (users see results AFTER subscribing via beehiiv redirect)
   - This is the most important product decision remaining

5. **Custom domain email in beehiiv** — update the 8 form redirect URLs from the Vercel URL to `quiz.drgrazelle.com`

---

## Exact Next Task for New Session

**Step 1 — Verify beehiiv embed is loading on gate pages:**
```
Go to: https://quiz.drgrazelle.com/bl-9053 (or any gate page)
Confirm: beehiiv form renders (email input + subscribe button visible)
If not: check EmailGatePage.js — script must append INTO #beehiiv-embed-target with data-beehiiv-form attribute
```

**Step 2 — Decide what happens after email signup:**
The key product question: after a user enters their email on the gate page, where do they go?

Option A — `/full-report-sent` (current confirmation page, generic)
Option B — Their specific archetype result page (the old ResultsPage content)
Option C — An external URL (e.g. a beehiiv post or Notion doc)

This determines whether to keep, delete, or repurpose the old archetype result pages.

**Step 3 — Wire beehiiv redirects:**
```
In beehiiv dashboard, for each of the 8 forms:
Settings → After Subscribe → Redirect to URL
URL: https://quiz.drgrazelle.com/full-report-sent  (or archetype URL if Option B)
```

**Step 4 — Clean up old archetype folders (optional):**
If keeping gate-only flow, the `/restarter`, `/reader`, etc. folders can be deleted since they redirect anyway.
```
rm -rf app/restarter app/reader app/optimizer app/seeker app/burner app/believer app/devoted app/practitioner
```
Update `next.config.mjs` redirects to point directly to new slugs (already done — this is just cleanup).

---

## Design Notes for Future Sessions

- **Light mode was prototyped and reverted** — `#F9F8F5` cream bg, `#1A2B4A` navy text, `#5B7BA8` slate blue secondary. Tokens (`cream`, `ink`) are in tailwind.config.js ready to use. Decision: stay dark for now, revisit later.
- **Icons** — inline SVG line-style icons added to landing page pillar cards. Same icons could be reused on other pages.
- **Dark/light mode toggle** — discussed, deferred. When ready: use `prefers-color-scheme` media query only (no toggle UI). Both palettes are already defined.
