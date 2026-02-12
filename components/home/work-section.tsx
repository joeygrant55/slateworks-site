"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

interface Project {
  type: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url?: string;
}

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const projects: Project[] = [
    {
      type: "Web Application",
      title: "Profluence Deck Intelligence",
      description: "A cutting-edge presentation platform that transforms ideas into fully working MVPs in days. Built for rapid prototyping and customer validation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      url: "https://deck.profluence.com/",
    },
    {
      type: "Web Platform",
      title: "GMTM Coaches",
      description: "A specialized platform connecting athletes with coaches, featuring profile management, booking systems, and performance tracking.",
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      url: "https://gmtm.com/coaches",
    },
    {
      type: "E-commerce Website",
      title: "Suncoast Harvest",
      description: "A premium e-commerce platform for farm-fresh produce delivery with subscription management and order tracking.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "Vercel"],
      url: "https://suncoastharvest.com/",
    },
    {
      type: "Corporate Website",
      title: "ELI Innovation",
      description: "A modern corporate website showcasing innovative solutions and services with interactive elements and case studies.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["Vue.js", "GSAP", "Netlify", "Contentful"],
      url: "https://eliinnovation.com/",
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
    <section id="work" className="bg-black py-20 md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div className="mx-auto mb-16 max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }}>
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Our Work</span>
          <h2 className="mt-3 mb-6 text-3xl font-bold text-neutral md:text-4xl">Success stories that speak for themselves</h2>
          <p className="text-lg text-neutral-dark">Explore our portfolio of innovative digital solutions that have helped our clients achieve their business objectives.</p>
        </motion.div>

        <motion.div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4" variants={container} initial="hidden" animate={isInView ? "show" : "hidden"}>
          {projects.map((project) => (
            <motion.div key={project.title} variants={item} className="project-card overflow-hidden rounded-sm border border-neutral/10 transition-all duration-300">
              <div className="relative">
                <img src={project.image} alt={project.title} className="h-60 w-full object-cover" />
                <div className="project-overlay absolute inset-0 flex items-center justify-center bg-black/80 opacity-0 transition-opacity duration-300">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noreferrer" className="rounded-sm bg-secondary px-6 py-2 font-medium text-black transition-colors hover:bg-secondary-light">View Project</a>
                  ) : (
                    <button className="rounded-sm bg-secondary px-6 py-2 font-medium text-black transition-colors hover:bg-secondary-light">Case Study</button>
                  )}
                </div>
              </div>
              <div className="bg-neutral-darker p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">{project.type}</span>
                <h3 className="mt-2 mb-2 text-xl font-bold text-neutral">{project.title}</h3>
                <p className="mb-4 text-sm text-neutral-dark">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-sm border border-neutral/10 bg-black px-3 py-1 text-xs text-neutral-dark">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.6 }}>
          <a href="#contact" className="inline-flex items-center font-semibold text-secondary transition-colors hover:text-secondary-light">
            <span>Let&apos;s discuss your project</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
