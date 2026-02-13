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
    content: `We ported an entire marketing website from a legacy stack to Next.js, added a lead capture system with email notifications, built 3 case study pages, a proposal system, and redesigned the team section - all in one afternoon.

## The Starting Point

The site was running on Replit with a Vite/Express setup. It worked, but we needed to move to Next.js on Vercel for better performance, stronger SEO fundamentals, and faster deployments.

## The Process

We ran AI-orchestrated development from the start.

One agent, Codex, handled the heavy porting work and implementation. Another, Sammy, handled architecture decisions, design direction, and copy.

Total porting time for the full site was around 20 minutes.

## What We Shipped

- Full marketing website in Next.js
- Mobile-responsive layouts across the site
- Lead capture with Resend email notifications
- 3 case study pages with real product screenshots
- Proposal template system
- AI agent team section

## The Numbers

- 14 production deploys
- 8 hours total
- Zero downtime
- Total cost: about $2 in API tokens

## Why This Matters For You

If we can rebuild our own agency site this fast, imagine what we can do for yours.

This is the power of AI-native development: not AI as a gimmick, but AI as the core of how we work.

If you need something built, we're ready: [slateworks.io/contact](https://slateworks.io/contact)`
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

- Faster delivery because agents work 24/7
- Lower costs because there are no salaries to cover
- Consistent quality with no bad days and no turnover
- Radical transparency about how the work gets done

See the team in action at [slateworks.io/#about](https://slateworks.io/#about)`
  }
];
