export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  heroImage: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "built-agency-site-one-afternoon",
    title: "How We Built a Full Agency Website in One Afternoon",
    excerpt:
      "We migrated a full marketing site to Next.js, rebuilt key systems, and shipped production-ready pages in a single afternoon using AI-native workflows.",
    date: "2026-02-12",
    readTime: "4 min read",
    category: "Behind the Build",
    tags: ["AI Development", "Case Study", "Next.js", "Speed"],
    heroImage: "/images/haven-hero.jpg",
    content: `We rebuilt our entire agency website in a single afternoon — not as a rush job, but as a demonstration of what's possible when AI-native development is your default mode.

## The Starting Point

Our site was running on an older stack that had served its purpose but wasn't built for where we're headed. We needed something modern, fast, and built to scale — a platform worthy of the work we do for clients.

## The Approach

This wasn't a hack job or a quick template swap. Our agents worked in concert — architecture decisions made thoughtfully, design executed with precision, every component built to production standards. The difference isn't cutting corners. It's eliminating waste.

Traditional agencies spend weeks in handoffs, meetings, and revision cycles. Our agents collaborate in real-time, building on each other's work without the friction.

## What We Shipped

- Complete marketing website, mobile-responsive from the ground up
- Intelligent lead capture system with instant notifications
- Three in-depth case study pages featuring real product screenshots
- Custom proposal generation system for prospective clients
- A team section that tells the truth about how modern software gets built

Every element was tested, refined, and deployed with zero downtime.

## The Takeaway

Speed without quality is just chaos. What makes AI-native development powerful isn't just that it's fast — it's that it frees us to focus entirely on craft. No context switching. No waiting on approvals. No "we'll get to that next sprint."

The result is work that's both faster *and* better than the traditional process.

## What This Means For You

Every project we take on gets this same level of focus and execution. Whether it's a marketing site, a web application, or a full product launch — our agents bring the same intensity and attention to detail.

If you have something that needs to be built right, [let's talk](https://slateworks.io/#contact).`
  },
  {
    slug: "ai-agent-team",
    title: "Why Our Team Page Has No Humans (Almost)",
    excerpt:
      "Most agencies hide how they use AI. We made our AI team visible on purpose and built our delivery model around transparency.",
    date: "2026-02-12",
    readTime: "3 min read",
    category: "AI Insights",
    tags: ["AI Agency", "Future of Work", "Transparency"],
    heroImage: "/images/allsuspects-hero.jpg",
    content: `Most agencies hide their AI usage. We put it on the homepage. Here is why.

## The Honest Agency

Every agency uses AI now. Most pretend they do not.

We decided to flip it: our team **is** AI agents, each with real specialties and roles. The only human is our founder, listed under "Behind the Agents."

## Why Transparency Wins

Clients do not care if a human or AI writes their code. They care if it works, if it is fast, and if it is affordable.

By being upfront about our model, we build trust instead of hiding behind a facade.

## The Agent Roster

- **Sammy**: CEO and Lead Engineer
- **Nova**: Design
- **Atlas**: Infrastructure
- **Muse**: Content
- **Scout**: Research

Each agent has a real role in our delivery pipeline.

## What This Means For Clients

- Faster delivery — agents work around the clock, not around a schedule
- Consistent quality — no off days, no turnover, no onboarding ramp
- Radical transparency about how the work actually gets done
- More of your budget goes to the work itself, not overhead

See the team in action at [slateworks.io/#about](https://slateworks.io/#about)`
  }
];
