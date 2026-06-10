/**
 * Lane A — "AI Partner" Premium Outreach Templates
 *
 * For funded startups/scaleups ($10–15K/mo retainer; $5K Sprint entry).
 * These are DRAFT templates only — all sending is draft+queue with Joey's
 * explicit approval per the outbound trust ladder. No auto-send wiring.
 *
 * Strategy: docs/projects/slateworks-90-day-gtm-playbook.md (JoeyOS)
 * Offer:    docs/projects/slateworks-ai-partner-offer.md (JoeyOS)
 *
 * Variables: {{name}}, {{company}}, {{trigger}}, {{similarCompany}},
 *            {{mutual}}, {{roleTitle}}, {{leak}}
 */

export const PREMIUM_SEQUENCES = {
  // Cold/warm-ish email — triggered by a concrete signal (funding, AI-role
  // job post, ops-scaling announcement). {{trigger}} carries the signal.
  touch1_signal: {
    subject: "{{company}}'s AI function — a faster path",
    body: `Hi {{name}},

Saw {{trigger}} — congrats. Usually that's the moment ops complexity starts outrunning the team.

I run Slateworks: a fractional AI team for companies at your stage. We find where the business is leaking time and money, build the systems that fix it — internal tools, automations, AI agents — and level your team up to run them. You get the software and the capability, not a dependency on us.

Recent example: we rebuilt a private investor network's intake from manual email review into an automated qualification engine — 250+ qualified leads in 3 months and a new revenue stream off the same data.

Worth 15 minutes to see if there's a fit? No pitch if there isn't one — we'll tell you honestly.

Joey Grant
Slateworks — slateworks.io`,
    delay: 0,
  },

  // Follow-up — anchors against the FTE hire
  touch2_hire_anchor: {
    subject: "Re: {{company}}'s AI function — a faster path",
    body: `{{name}} — one more thought.

Companies your size solve this one of two ways: a $200K+ AI/ops hire (4–6 month search, one person's bandwidth), or a team that starts in two weeks and productizes the whole function.

We do the second. Two active builds in flight at all times, monthly working sessions that make your existing team more capable, and runbooks for everything we ship — so the capability stays even if we don't.

The lowest-risk way to test us: a 2-week AI Opportunity Sprint. We map your workflows, ship one quick win live, and hand you a costed roadmap. If the roadmap doesn't justify going further, you keep everything.

Open to a quick call this week or next?

Joey Grant
Slateworks`,
    delay: 5,
  },

  // Final touch — direct, respectful close
  touch3_close: {
    subject: "Quick question, {{name}}",
    body: `{{name}} — last note from me.

Is building out {{company}}'s internal AI/automation muscle a this-quarter priority, or further out?

If this quarter: 15 minutes and I'll tell you exactly what we'd build first and what it's worth. If further out, no problem — I'll leave you with our field notes (slateworks.io/blog) and check back when timing's better.

Joey Grant
Slateworks — slateworks.io`,
    delay: 10,
  },
} as const;

/**
 * Network intro ask — sent to a mutual (e.g. via Profluence) to request
 * a warm introduction. The mutual forwards the blurb below.
 */
export const NETWORK_INTRO_ASK = {
  toMutual: {
    subject: "Intro to {{name}} at {{company}}?",
    body: `{{mutual}} — quick ask.

I'm looking to connect with {{name}} at {{company}}. I think what we built for Profluence (the intake engine — 250+ qualified leads in 3 months, new partner revenue stream) maps almost exactly to what they're dealing with.

If you're comfortable, here's a forwardable blurb — happy to return the favor anytime:

---
Intro: Joey Grant runs Slateworks, a fractional AI team for funded companies. They build internal tools, automations, and AI systems, then train your team to run them — capability, not agency dependency. They built Profluence's founder-intake engine (250+ qualified leads in 3 months, 125% ROI). Worth 15 minutes if internal systems are on your mind.
---

Either way, appreciate you.

Joey`,
    delay: 0,
  },
} as const;

/**
 * Post-Sprint conversion — sent within 48h of the Sprint readout call.
 */
export const SPRINT_FOLLOWUP = {
  conversion: {
    subject: "{{company}} roadmap — locking the first two builds",
    body: `{{name}} — great session. Recapping where we landed:

The roadmap surfaced {{leak}} as the highest-value gap, and the quick win we shipped is already live. The full roadmap is in your workspace with everything costed.

As the Partner retainer: we'd keep two builds in flight at all times, run the monthly working session with your team, and hand over runbooks for everything. Your $5K Sprint credits toward month one if we start within 30 days.

Want me to send the agreement, or is there anything on the roadmap you'd want re-sequenced first?

Joey`,
    delay: 0,
  },
} as const;

/**
 * LinkedIn DM variants (Joey's profile, ~10/week). Short by design.
 * Variant B keys off companies actively hiring AI ops/enablement roles —
 * anyone hiring the role is a prospect for the fractional version.
 */
export const LINKEDIN_DMS = {
  variantA_general: `{{name}} — I run a fractional AI team for funded companies like {{similarCompany}}. We build the internal systems (tools, automations, agents) and level your team up to run them. Built an intake engine recently that captured 250+ qualified leads in 3 months. Worth 15 minutes?`,

  variantB_hiring_signal: `{{name}} — saw {{company}} is hiring a {{roleTitle}}. While you search (usually 4–6 months for that role), we run exactly that function fractionally — find the bottlenecks, build the AI systems, drive adoption, hand over playbooks your eventual hire inherits. Want to see what that looks like?`,

  // PROOF EMBARGO: no delivered-M&A claim until IconSource is Closed won. Until then:
  // no claim (as below), explicit pending framing Joey approves per use, or substitute
  // registry proof (Profluence).
  variantC_ma_signal: `{{name}} — noticed {{trigger}}. We help companies heading into diligence make their systems self-running and sale-ready — dedup, automation, documentation. Open to a quick call?`,
} as const;
