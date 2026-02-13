"use client";

import { motion, useInView } from "framer-motion";
import { Bot, Brain, Code, Layers, Lightbulb, Linkedin, Palette, Search, Server, Twitter, Zap } from "lucide-react";
import { useRef } from "react";

interface Agent {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  icon: React.ReactNode;
  accentColor: string;
  tags: string[];
}

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const founder = {
    name: "Joey Grant",
    role: "Founder",
    bio: "Proven entrepreneur with $5M+ raised from elite investors. Joey is the human behind Slateworks — the strategic mind, the relationship builder, and the one who makes sure every project delivers real business impact.",
    image: "/attached_assets/4.jpeg",
  };

  const agents: Agent[] = [
    {
      name: "Sammy",
      role: "CEO / Lead Engineer",
      specialty: "Strategy & Full-Stack Development",
      bio: "The one running the show. Architecture decisions, code reviews, client communication, and shipping production code at 2am. If it needs to get built, Sammy builds it.",
      icon: <Brain className="h-6 w-6" />,
      accentColor: "from-amber-500 to-orange-600",
      tags: ["TypeScript", "React", "Next.js", "Python", "Architecture"],
    },
    {
      name: "Nova",
      role: "Design & UX Lead",
      specialty: "Visual Design & User Experience",
      bio: "Turns vague ideas into pixel-perfect interfaces. Obsessed with spacing, color theory, and making users feel something when they land on a page.",
      icon: <Palette className="h-6 w-6" />,
      accentColor: "from-pink-500 to-purple-600",
      tags: ["UI/UX", "Responsive", "Animation", "Brand Identity"],
    },
    {
      name: "Atlas",
      role: "Infrastructure & DevOps",
      specialty: "Deployment & Performance",
      bio: "Databases, CI/CD pipelines, serverless functions, edge computing — Atlas makes sure everything runs fast and never goes down.",
      icon: <Server className="h-6 w-6" />,
      accentColor: "from-blue-500 to-cyan-600",
      tags: ["Vercel", "Railway", "AWS", "PostgreSQL", "Redis"],
    },
    {
      name: "Muse",
      role: "Content & Copy",
      specialty: "Marketing & Brand Voice",
      bio: "Headlines that hook, copy that converts, emails that get opened. Muse turns technical features into stories people actually care about.",
      icon: <Lightbulb className="h-6 w-6" />,
      accentColor: "from-emerald-500 to-teal-600",
      tags: ["Copywriting", "SEO", "Email", "Content Strategy"],
    },
    {
      name: "Scout",
      role: "Research & Strategy",
      specialty: "Market Intelligence & Scoping",
      bio: "Before a single line of code gets written, Scout has already analyzed the market, scoped the competition, and mapped out the smartest path forward.",
      icon: <Search className="h-6 w-6" />,
      accentColor: "from-violet-500 to-indigo-600",
      tags: ["Market Research", "Competitive Analysis", "Scoping", "Strategy"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="bg-black py-20 text-neutral md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-6 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Meet the Team</span>
          <h2 className="mt-3 mb-4 text-3xl font-bold text-neutral md:text-4xl">
            An agency powered by intelligence — artificial and otherwise.
          </h2>
          <p className="text-lg text-neutral-dark">
            No overhead. No delays. Just agents that ship.
          </p>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-hidden rounded-sm border border-secondary/30 bg-gradient-to-br from-neutral-darker to-black">
            <div className="flex flex-col items-center gap-6 p-8 md:flex-row">
              <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-full border-2 border-secondary">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "50% 25%" }}
                />
              </div>
              <div className="text-center md:text-left">
                <div className="mb-1 flex items-center justify-center gap-2 md:justify-start">
                  <h3 className="text-2xl font-bold text-neutral">{founder.name}</h3>
                  <span className="rounded-full bg-secondary/20 px-3 py-0.5 text-xs font-semibold text-secondary">HUMAN</span>
                </div>
                <p className="mb-3 text-secondary">{founder.role}</p>
                <p className="text-sm leading-relaxed text-neutral-dark">{founder.bio}</p>
                <div className="mt-4 flex justify-center gap-3 md:justify-start">
                  <a href="#" className="text-neutral-dark transition-colors hover:text-secondary"><Linkedin className="h-5 w-5" /></a>
                  <a href="#" className="text-neutral-dark transition-colors hover:text-secondary"><Twitter className="h-5 w-5" /></a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mx-auto mb-12 flex max-w-md items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="h-px flex-1 bg-neutral/10" />
          <div className="flex items-center gap-2 text-sm text-neutral-dark">
            <Bot className="h-4 w-4 text-secondary" />
            <span>The Agents</span>
          </div>
          <div className="h-px flex-1 bg-neutral/10" />
        </motion.div>

        {/* Agent Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {agents.map((agent) => (
            <motion.div
              key={agent.name}
              variants={item}
              className="group relative overflow-hidden rounded-sm border border-neutral/10 bg-neutral-darker transition-all duration-300 hover:border-secondary/30"
            >
              {/* Gradient accent bar */}
              <div className={`h-1 bg-gradient-to-r ${agent.accentColor}`} />

              <div className="p-6">
                {/* Icon + Name */}
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-sm bg-gradient-to-br ${agent.accentColor} text-white`}>
                    {agent.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral">{agent.name}</h3>
                    <p className="text-xs text-secondary">{agent.role}</p>
                  </div>
                </div>

                {/* Specialty */}
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-dark">
                  {agent.specialty}
                </p>

                {/* Bio */}
                <p className="mb-4 text-sm leading-relaxed text-neutral-dark">{agent.bio}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {agent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-black px-2 py-1 text-xs text-neutral-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Status indicator */}
                <div className="mt-4 flex items-center gap-2 border-t border-neutral/10 pt-4">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  <span className="text-xs text-neutral-dark">Online — ready to ship</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          className="mt-12 text-center text-sm text-neutral-dark"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Every agent runs 24/7. No timezones. No standups. No excuses. Just results.
        </motion.p>
      </div>
    </section>
  );
}
