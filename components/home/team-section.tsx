"use client";

import { motion, useInView } from "framer-motion";
import { Dribbble, Github, Linkedin, Twitter } from "lucide-react";
import { useRef } from "react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  isFounder?: boolean;
  socialLinks: {
    linkedin?: boolean;
    twitter?: boolean;
    dribbble?: boolean;
    github?: boolean;
  };
}

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const teamMembers: TeamMember[] = [
    {
      name: "Joey Grant",
      role: "Founder",
      bio: "Proven entrepreneur with $5M+ raised from elite investors. Joey founded Slate to bridge the gap between innovative technology and real business impact, combining strategic vision with hands-on execution.",
      image: "/attached_assets/4.jpeg",
      isFounder: true,
      socialLinks: { linkedin: true, twitter: true },
    },
    {
      name: "Creative Design Network",
      role: "Design Excellence",
      bio: "Award-winning designers who craft compelling digital experiences. Our creative partners bring brands to life through strategic design that converts visitors into customers.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000&q=80",
      socialLinks: { linkedin: true, dribbble: true },
    },
    {
      name: "Development Specialists",
      role: "Technical Mastery",
      bio: "Senior engineers specializing in scalable web and mobile solutions. Our technical team transforms complex requirements into powerful, performance-driven applications.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000&q=80",
      socialLinks: { linkedin: true, github: true },
    },
    {
      name: "Strategic Advisory Board",
      role: "Industry Leadership",
      bio: "Top-tier VCs, successful entrepreneurs, and industry experts who guide our strategic direction. This network ensures Slate stays ahead of market trends and technology shifts.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=1000&q=80",
      socialLinks: { linkedin: true },
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="bg-black py-20 text-neutral md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div className="mx-auto mb-16 max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }}>
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Leadership & Expertise</span>
          <h2 className="mt-3 mb-6 text-3xl font-bold text-neutral md:text-4xl">The vision and talent behind Slate</h2>
          <p className="text-lg text-neutral-dark">Led by seasoned expertise and supported by a network of industry specialists, we deliver exceptional digital experiences through strategic partnerships and proven leadership.</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4" variants={container} initial="hidden" animate={isInView ? "show" : "hidden"}>
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={item} className="overflow-hidden rounded-sm border border-neutral/10 bg-neutral-darker">
              <div className="h-64 overflow-hidden">
                <img src={member.image} alt={`${member.name} - ${member.role}`} className="h-full w-full object-cover" style={member.isFounder ? { objectPosition: "50% 25%" } : {}} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral">{member.name}</h3>
                <p className="mb-4 text-secondary">{member.role}</p>
                <p className="mb-4 text-sm text-neutral-dark">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.socialLinks.linkedin && <a href="#" className="text-neutral-dark transition-colors hover:text-secondary"><Linkedin className="h-5 w-5" /></a>}
                  {member.socialLinks.twitter && <a href="#" className="text-neutral-dark transition-colors hover:text-secondary"><Twitter className="h-5 w-5" /></a>}
                  {member.socialLinks.dribbble && <a href="#" className="text-neutral-dark transition-colors hover:text-secondary"><Dribbble className="h-5 w-5" /></a>}
                  {member.socialLinks.github && <a href="#" className="text-neutral-dark transition-colors hover:text-secondary"><Github className="h-5 w-5" /></a>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
