# Soria & Antoine — HTML → WordPress conversion report

**Deliverable:** `soria-antoine.zip` (25 MB, theme + content bundle)
**Editor plugin:** Visual Edit 1.17.12 — `~/.claude/skills/html2wp-sub/assets/visual-edit.zip`
**Source:** this repo (Lovable / React + Vite SPA, 9 routes + 404)

Install order: upload the theme ZIP → activate → the setup wizard appears →
upload the plugin ZIP → activate → **Import Content** → review → apply.

---

## What was converted

10 pages, all imported and editable:

| Page | Key | Kind |
|---|---|---|
| index.html | `front-page` | front |
| story.html | `story` | page |
| schedule.html | `schedule` | page |
| gallery.html | `gallery` | page |
| travel.html | `travel` | page |
| registry.html | `registry` | page |
| faq.html | `faq` | page |
| rsvp.html | `rsvp` | page |
| cart.html | `cart` | page |
| 404.html | `404` | utility (template) |

**Chrome:** two header DESIGNS ship as separate template parts, because the
site really has two. The eight pages that open on a full-bleed photographic
hero carry the transparent header that sits over the image (`header`); Cart
and 404 have no hero and carry the opaque header from the top (`header-2`).
The footer is byte-identical on all ten pages — one part.

**Menus:** four navigation groups, each a real WordPress menu wired to its own
location, all verified to propagate an edit to the public page:

| Menu | Location | Links |
|---|---|---|
| Main navigation | `soria_antoine_nav_1` | 6 |
| Main navigation (mobile drawer) | `soria_antoine_nav_2` | 7 |
| Footer — The Day | `soria_antoine_nav_3` | 3 |
| Footer — Guests | `soria_antoine_nav_4` | 4 |

**Not managed, deliberately:** the desktop `RSVP` button in the header is a
single standalone call to action, not a navigation group. It stays editable as
ordinary content; it is simply not a menu.

**Blog:** none, and that is a finding rather than an omission. The site has no
article listing of any kind — the gallery is a photo grid with no titles or
dates, the FAQ is an accordion, the schedule is a fixed itinerary. Nothing
links to a dated piece of writing, so there is no listing for a `[wp-posts]`
token to drive.

**Collections** (repeating groups the editor offers for add/remove/reorder):
15 across 6 pages — the ceremony/reception pair and the venue address lines on
the front page, the four story chapters, the schedule's days and event rows,
the three lodging cards and their address lines, the three registry funds, the
FAQ's eight questions, and the RSVP attendance choices.

---

## The input needed a prerender first

A React SPA is not a convertible input: one `index.html` with an empty mount
node has nothing 1:1 to convert. So the pipeline gained a new first stage that
builds the app, drives every route in a real browser, and **records what the
application does** rather than photographing its DOM.

That distinction did real work here. A naive prerender would have silently
dropped, from the delivered theme:

- **the entire mobile drawer** — `{open && <motion.div>}` is a conditional
  render, so it is absent from the DOM, not hidden;
- **all eight FAQ answers** — Radix unmounts closed accordion panels.

Both are now real markup in the theme (hidden at rest), which is what makes
them editable in WordPress. Their behaviour is replayed by a small generic
runtime from data recorded off the running app — nothing about it was
hand-written.

**Verified on the live WordPress site:** the sticky header swaps
transparent → opaque past 41px of scroll on the eight hero pages and correctly
does not swap on Cart/404; the drawer opens and closes with `aria-expanded`
flipping; the FAQ opens, closes, and is single-select (opening one answer
closes the previous one). No JavaScript errors on any page.

---

## Verification

| Gate | Result |
|---|---|
| Gate -1 — running app vs static capture, 1440/820/390 | **30/30 at 0.00%** |
| Gate -1b — recorded behaviour replays | **10/10 pages** (faq 9/9 disclosures) |
| Gate A — static build vs source, 3 widths | **PASSED**, 10 pages, no exemptions |
| Gate A2 — structural 1:1 per region | **PASSED**, 32 region comparisons |
| Gate B/C — WordPress vs build | **FAILED** on 3 of 30 width-checks (cart @820, 404 @1440 and @820) — cause and rejected fix below |
| C1 llms.txt / title / description / JSON-LD | pass |
| C2b stored sources non-empty | 10/10 |
| C4 menus wired | 4/4, assignment verified |
| C5 collections detect live | all recorded groups, matching counts |
| Editor smoke test | **PASSED 7/7** |

The smoke test covers a front-page text edit that saves, renders and does not
duplicate history; an edit root on every ordinary page; an edit on **every**
chrome variant including `header-2`; one menu-item mutation per menu, confirmed
on the public page and restored; the mobile drawer; and the contact form —
connected, submitted anonymously, and a submission row verified with **6 of 6
fields** stored correctly.

### The one thing that is not pixel-perfect

**Cart (tablet width) and 404 (desktop/tablet).** Everything is present and
correct — nav, content, footer, all copy — but on a page whose content is
*shorter than the viewport* the page no longer stretches to fill the screen, so
the footer sits higher than in the original (the 404 renders ~65px short). The
eight content pages are pixel-identical at all three widths.

The cause is structural and worth stating plainly. The design wraps header +
main + footer in a single `min-h-screen flex flex-col` box, which is what keeps
the footer at the bottom of a short page. In WordPress the header and footer
become template parts, so that box now holds only the content while still
demanding a full screen — which made those pages ~350px too tall. Releasing
that demand fixed the height exactly and left this smaller residual: the
stretch itself is gone.

Restoring the stretch **was implemented and measured, then reverted**: making
the content region a flex column fixed Cart and 404 to 0.00% at every width and
reflowed every long page inside the same shell, taking six pages from 0.00% to
5–37%. Six content pages is the wrong price for two utility pages. The residual
is cosmetic, confined to an empty-cart placeholder and a 404, and is recorded
in the converter's own notes so it is not rediscovered as a mystery.

---

## Per-page visual review (1440px, read side by side)

| Page | Finding |
|---|---|
| front-page | Matches. Hero, invitation, ceremony/reception, registry band, gallery strip, quote, CTA, footer. |
| story | Matches. All four chapters alternate correctly; the active nav underline is restored on the right page. |
| schedule | Matches. Three days, eight event rows. |
| gallery | Matches. All ten photos in identical masonry positions. |
| travel | Matches. Three lodging cards, three "way in" entries. |
| registry | Matches. Three fund cards, closing band. |
| faq | Matches. Eight questions; answers open on click, single-select. |
| rsvp | Matches. All six fields, radio pair, select, textarea, submit. |
| cart | Matches at 1440. See the residual above for 820. |
| 404 | Content and navigation correct; page ~65px short, footer sits higher. |

---

## Known differences from the original — all deliberate

1. **Scroll-triggered entrance animation is flattened.** Reveal-on-scroll and
   the hero's 16-second slow zoom are captured in their finished state and not
   replayed: content must not depend on JavaScript to be visible, and "1:1" is
   defined at rest. Scroll-driven and click-driven behaviour *is* replayed.

   Two animations **are** restored, because both survive the loss of the
   client-side router:
   - **the page fade** on every navigation — timed off the running app
     (450–500 ms against the original's 0.5 s) and replayed as plain CSS, so
     it runs at first paint and never depends on JavaScript. Its *exit* half
     cannot come back: fading out before leaving needs a router to delay the
     navigation, and a converted site does real page loads.
   - **the FAQ accordion easing** — the design's own CSS keyframes, fed the
     content height the React library used to publish at runtime. Measured
     0→91→133 px opening and 133→69→0 closing, against the original's
     0→102→133.
2. **The RSVP form's client-side "Thank you" screen is gone.** It was a React
   state swap on submit. The form now posts to the plugin's own endpoint and
   stores a submission you can read in wp-admin; the plugin's flow replaces the
   in-page confirmation.
3. **One shared `<title>` on every page.** That is the source's own trait — the
   SPA never set per-page titles. Page names were derived from the nav label
   and `<h1>` instead. Worth fixing for SEO, and it is now a per-page field you
   can edit.
4. **A generic article layout ships but is unused**, because there is no blog.
   It exists only so the theme is complete if you later add posts; restyle it
   before you do.
5. **Sticky-header threshold.** The converter records the real value by
   bisection; this build carries 41px, matching the source's `scrollY > 40`.

## Things you should know

- **The plugin was changed** and is now 1.17.12. My `data-spa-*` bookkeeping
  broke the editor's congruence test, so an eight-item FAQ accordion was
  offered to nobody as a collection even though every answer was editable as
  text. Those attributes are now ignored for congruence, exactly as the
  editor's own `data-cve-*` already were. The rebuilt ZIP is in the skill.
  **Existing customer sites will not receive this until you release it** —
  that is your call, via `/release-visual-edit`.
- **The React bundle is not shipped.** 463 KB of JavaScript that no page loads
  was pruned. If it re-mounted it would re-render the page from its own
  component tree and throw away whatever you had just edited in WordPress.
- The throwaway WordPress used for verification has been torn down. The ZIP was
  built before the smoke test wrote into any site, and both the theme and the
  live pages were checked for smoke markers — clean.
