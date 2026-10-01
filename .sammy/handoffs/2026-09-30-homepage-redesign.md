# Agent Handoff

Project: slateworks-site (slateworks.io)
Agent: Claude Code (Opus 5.5)
Machine: Mac mini
Date: 2026-09-30
Branch: main
Commit(s): 846935d, be663bd, 994e645, d8a2263 (all pushed; deployed to Vercel prod)

## Goal
Swap SPARQ Certified for Circulus Studio, then redesign the homepage around the new positioning.

## Changes Made
- Homepage rebuilt in `components/studio/*` (new paper/ink/signal palette tokens in `app/globals.css`, JetBrains Mono added in `app/layout.tsx`, new metadata).
- Positioning: "Senior AI engineering studio"; two offers — fractional AI team ($10–15K/mo, $5K sprint) and white-label build partner for agencies/firms.
- Slateworks Studio section: Saintlings (1,127,666 IG views / +7,853 followers in 60 days since Aug 1 — Joey's IG Insights screenshot) and Recasa (21 days first commit → monetized App Store, verified via App Store releaseDate + mobile-app-factory-status.md).
- Client work: Profluence, Profluence Advisory, Profluence Capital, Sparked Inbound, Suncoast Harvest.
- Circulus Studio card removed (relationship stays quiet by Joey's decision). SMB-lane sections dropped from homepage (old components left in repo, unused).

## Verification
Commands run: `npm run build`; local `next start` + headless Chrome screenshots (1440 and 520 wide); curl of live slateworks.io.
Results: build passes; live site serves new copy and images.

## Decisions / Assumptions
- Slateworks = engineering arm behind Circulus Build; not disclosed publicly.
- Studio lives inside Slateworks for now.
- Contact form not submitted in testing (same /api/lead endpoint as before).

## Blockers
None.

## Next Action
Restyle subpages (/work, /blog, /about, /services, case studies) to the new system — they still use the old dark header/footer. Remove or noindex /work/sparq-certified if desired.

## State Update Needed
Does `docs/state/current-state.md` need updating? No (repo has none).

## Notes for Sammy
Deploy was via `npx vercel --prod --yes` after push to main.

## Update — polish pass (commit ee1a6e9, deployed to prod)
- Higgsfield CLI updated to 1.1.26 via npm, signed in, workspace "Private" (ultra) selected.
- Generated: 3 stills with gpt_image_2_5 (monolith, workbench, stacked slabs), 2 takes with veo3_1 from the monolith still. Used take B as `public/video/monolith.mp4` (borders cropped) and the workbench still as `public/images/workbench.jpg`. About 75 credits used.
- Product loops: Saintlings song-of-day video (Convex) and the Recasa reveal from getrecasa.com, re-encoded to `public/video/`.
- Motion: `Reveal` (scroll fade-up), `CountUp` (ship log), `LoopVideo` (plays only while on screen); all respect reduced motion.
- OG image rebuilt (`app/opengraph-image.tsx`, node runtime, fonts in `app/_og/`).
- Verified: build passes; live slateworks.io serves the page, all videos (200 video/mp4), and the OG PNG.

## Update — interior pages (commit 015c314, deployed to prod)
- Restyled /work (new index: client work, Studio, experiments), all case studies (shared `CaseStudyPage`), /about, /services, /contact, /blog, /blog/[slug] onto the studio system. Body background now paper.
- Services copy follows `clawd/docs/projects/slateworks-ai-partner-offer.md` (Sprint weeks, two builds in flight, Embedded tier, terms).
- Untouched: /brand, /proposal, /haven (internal or separate products). Old `components/home/*` and `components/layout/*` are now unused except `home/contact-section` dependencies; safe to delete later.
- Open question for Joey: offer spec says "never publish prices on the site", but the redesign shows $5K / $10–15K per his approval of the pitch.
