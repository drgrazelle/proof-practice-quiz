# CLAUDE.md — Project Context: Proof & Practice Quiz

This file orients a new session. Read it before making any changes.

---

## What This Is

A Next.js 14 quiz app for Dr. Grazelle Sanchez's brand **Proof & Practice**. Users take a 12-question self-assessment, hit an email gate page, enter their email via beehiiv, and are redirected to a confirmation page.

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
│   │   └── page.js                # Quiz page at /quiz (client component) — v4 final questions
│   ├── components/
│   │   ├── ResultsPage.js         # OLD shared results layout (exists, unused by current flow)
│   │   └── EmailGatePage.js       # Shared email gate layout (used by all 8 result routes)
│   ├── full-report-sent/
│   │   └── page.js                # Confirmation page at /full-report-sent (confetti on mount)
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
│   ├── restarter/page.js          # OLD results page (redirects via next.config.mjs)
│   ├── reader/page.js
│   ├── optimizer/page.js
│   ├── seeker/page.js
│   ├── burner/page.js
│   ├── believer/page.js
│   ├── devoted/page.js
│   └── practitioner/page.js
├── archetype card/                # Standalone card export tool (NOT served from Next.js)
│   ├── archetype-cards.html       # All 8 cards, 800×1000px, html2canvas PNG export
│   ├── card-believer.md           # Source copy for each archetype card (8 files)
│   ├── card-burner.md
│   ├── card-devoted.md
│   ├── card-optimizer.md
│   ├── card-practitioner.md
│   ├── card-reader.md
│   ├── card-restarter.md
│   ├── card-seeker.md
│   └── [character PNGs go here]   # restarter.png, reader.png, etc. — drop in to activate
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
├── 3p-quiz-questions-v4-final.md  # CURRENT quiz questions + scoring key (source of truth)
├── 3p-quiz-archetype-descriptions-final.md  # All 8 archetype descriptions
├── tailwind.config.js             # Custom brand color tokens
├── next.config.mjs                # Redirects: old slugs → new obfuscated slugs
├── jsconfig.json                  # Path alias: @/* → root
└── package.json                   # includes canvas-confetti dependency
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
/ (landing) → /quiz (12 questions) → /[obfuscated-slug] (email gate) → beehiiv → /full-report-sent
```

The email gate pages show:
- Golden progress bar drawn across top (animation on load)
- "● Pattern identified" badge
- "We found your pattern." heading (fades up)
- Subtext + beehiiv embed (fades up in sequence)
- Disclaimer
- No archetype name, no scores, no result content visible

`/full-report-sent` fires confetti (brand colors) on mount.

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

## Quiz Page — Key Behavior (v4 Final)

- 12 questions, one at a time, randomized answer order (shuffled on mount, SSR-safe)
- Questions sourced from `3p-quiz-questions-v4-final.md` — past-tense framing ("Think about the last time...")
- Answer objects: `{ text: "...", score: 0 }` — score is a property of the answer, NOT derived from position
- Score travels with the answer text through shuffling — shuffling cannot corrupt scores
- Tracks scores for `proof`, `practice`, `purpose` separately (0–12 each)
- **Threshold: score ≥ 9 = High; score ≤ 8 = Low** (updated from old ≥ 6)
- **Back button** on Q2–Q12: returns to previous question with prior answer highlighted in gold
- After Q12: routes directly to obfuscated slug via `ARCHETYPE_SLUGS` map
- Progress bar + "Question X of 12" counter in header

### Back button implementation details
- `history` array stores `{ optionIndex, pointsAdded, pillar }` per question
- `pointsAdded` is read from `option.score` at selection time
- `prevAnswerIndex` state stores the option index when going back (separate from history, which gets sliced)
- `prevAnswerIndex === i` drives the gold highlight on return visit
- Cleared to `null` on every forward selection

### Scoring
| Pillar | Questions | Max Score |
|---|---|---|
| Proof | Q1–Q4 | 12 |
| Practice | Q5–Q8 | 12 |
| Purpose | Q9–Q12 | 12 |

Each answer carries score 0–3. Scores are NOT tied to position A/B/C/D.

---

## EmailGatePage Component (`app/components/EmailGatePage.js`)

Props: `embedScript: { src, formId }`

### Animations (CSS keyframes, no library)
- Golden bar draws across the top (0→100% width, 550ms) on mount
- Badge, headline, subtext, form, disclaimer fade up in sequence (500ms–1050ms delays)

### Beehiiv injection pattern (must match this exactly)
```js
const script = document.createElement("script");
script.src = embedScript.src;
script.async = true;
script.setAttribute("data-beehiiv-form", embedScript.formId);
container.appendChild(script); // appended INTO #beehiiv-embed-target div
```

---

## OG Image

- Route: `/api/og` (edge runtime, `next/og`)
- `metadataBase` set to `https://quiz.drgrazelle.com` in `layout.js` — resolves `/api/og` to absolute URL for social crawlers
- Preview: visit `https://quiz.drgrazelle.com/api/og` directly in browser
- Test sharing: use [opengraph.xyz](https://www.opengraph.xyz) with `https://quiz.drgrazelle.com`

---

## Archetype Cards (`archetype card/archetype-cards.html`)

Standalone HTML file — NOT part of the Next.js app. Open via local server to export PNGs.

### To use
```bash
cd "/Users/grazelle/proof-practice-quiz/archetype card"
python3 -m http.server 8888
# then open http://localhost:8888/archetype-cards.html
```

### Card specs
- 800 × 1000px fixed, dark navy `#1a2744`
- Playfair Display 900 for archetype name (72px), Inter for body
- Pillar bars (High = full color, Low = 18% muted)
- "Where to Start" in a tinted accent box
- Download PNG button exports at 2× (1600×2000px) via html2canvas

### Character images
- Drop `restarter.png`, `reader.png`, `optimizer.png`, `seeker.png`, `burner.png`, `believer.png`, `devoted.png`, `practitioner.png` into the `archetype card/` folder
- Refresh the page — images auto-replace the letter placeholders
- If no PNGs: shows the archetype's first initial in a colored circle

### Copy source
Each card's copy lives in `archetype card/card-[archetype].md`. The HTML reads from an inline JS data array — update the array in `archetype-cards.html` if copy changes again.

---

## Key Technical Decisions (cumulative)

1. **No TypeScript, no Tally** — JavaScript only, everything in Next.js
2. **Answer randomization** — shuffled in `useEffect` with `ready` state gate (SSR hydration fix)
3. **Score travels with answer** — `{ text, score }` object; never read from index position
4. **Email gate replaces direct results** — all 8 result pages are now gate pages
5. **Obfuscated slugs** — prevents users from guessing archetype URLs; old slugs redirect permanently
6. **beehiiv embed** — script must be appended INTO `#beehiiv-embed-target` with `data-beehiiv-form` attribute; body-level injection does not work
7. **Back button** — uses separate `prevAnswerIndex` state (not history lookup) to avoid race condition when history is sliced
8. **ESLint strict** — Vercel build fails on unescaped apostrophes in JSX; always use `&apos;` or `{" "}`
9. **Stale `.next` cache** — always `rm -rf .next` and restart after structural changes
10. **Dev server:** `npm run dev -- --port 3000`
11. **GitHub CLI:** `gh` is at `/opt/homebrew/bin/gh`
12. **Vercel deploys from `main` branch** — pushing to main triggers deploy automatically
13. **metadataBase** — set in `layout.js` to `https://quiz.drgrazelle.com` so OG image resolves correctly
14. **canvas-confetti** — installed as npm dependency, used only on `/full-report-sent`
15. **Archetype cards are standalone HTML** — served via `python3 -m http.server` for PNG export (CORS blocks html2canvas on file:// protocol)

---

## What's Done ✅

- Landing page (`/`) — dark navy, gold CTA, SVG health icons on pillar cards, no header
- Quiz page (`/quiz`) — v4 final questions, `{ text, score }` answer objects, shuffled, back button, threshold ≥ 9
- 8 email gate pages — animated entry (bar draw + fade up), beehiiv embed per archetype
- Old readable slugs redirect permanently to new obfuscated slugs
- `/full-report-sent` — cream hero card, envelope icon, confetti on mount
- `/3p-archetype` — dual Venn diagram (framework + archetypes), no header
- `/api/og` — branded OG image route, `metadataBase` set, resolves to custom domain
- OG meta tags — complete on all pages, absolute URLs via metadataBase
- Custom domain `quiz.drgrazelle.com` — live
- 8 PDF HTML files in `/pdfs/` — ready for print-to-PDF
- Archetype cards HTML — `archetype card/archetype-cards.html`, 8 cards, PNG export at 2×
- Tailwind config updated with all brand tokens

---

## What Still Needs To Be Done

1. **Answer tracking / analytics** — decided to add data collection but not yet implemented. Options discussed:
   - **PostHog** — best dashboard, free tier, fire custom events per answer selection
   - **Supabase** — cleanest raw data, API route writes one row per quiz completion, exportable CSV
   - Decision pending. Next session should pick one and implement.

2. **Character illustrations for archetype cards** — 8 PNGs (`restarter.png` etc.) need to be dropped into `archetype card/` folder. Cards show letter placeholders until then.

3. **Wire beehiiv redirects to `/full-report-sent`** — in beehiiv dashboard, for each of the 8 forms:
   - Settings → After Subscribe → Redirect to URL
   - URL: `https://quiz.drgrazelle.com/full-report-sent`
   - Use custom domain URL (not Vercel URL)

4. **Print the 8 PDFs** — open each `/pdfs/*.html` in Chrome → Cmd+P → Save as PDF → Letter, No margins, Background graphics ON

5. **Clean up old archetype folders (optional)** — `/restarter`, `/reader`, etc. still exist and redirect. Can delete if keeping gate-only flow permanently.

---

## Exact Next Task for New Session

**Priority 1 — Answer tracking:**

Implement one of:

**PostHog (recommended for ease):**
```bash
npm install posthog-js
```
In `quiz/page.js`, fire on each answer selection:
```js
posthog.capture('quiz_answer', {
  question_id: question.id,
  question_pillar: question.pillar,
  answer_text: option.text,
  answer_score: option.score,
  question_number: current + 1,
})
```
Add PostHog provider to `layout.js`. Get API key from posthog.com (free).

**Supabase (recommended for raw data):**
- Create `quiz_responses` table with columns: `id`, `created_at`, `archetype`, `proof_score`, `practice_score`, `purpose_score`, `q1` through `q12` (answer text or score per question)
- Add API route at `app/api/track/route.js` — receives POST with full answer payload on quiz completion
- Fire from `quiz/page.js` after Q12, before redirect
- Get connection string from supabase.com (free tier)

**Priority 2 — Verify full flow end-to-end:**
Take the quiz → confirm gate page animations play → submit email → confirm redirect to `/full-report-sent` → confirm confetti fires

---

## Design Notes for Future Sessions

- **Light mode was prototyped and reverted** — `#F9F8F5` cream bg, `#1A2B4A` navy text. Tokens (`cream`, `ink`) are in tailwind.config.js ready to use.
- **Icons** — inline SVG line-style icons on landing page pillar cards. Same icons could be reused elsewhere.
- **Archetype card illustrations** — character PNGs are illustrated assets, not yet generated. Prompts in `archetype card/archetype-character-prompts.md`.
