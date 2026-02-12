"use client";

import { motion, useInView } from "framer-motion";
import { Code, Highlighter, Laptop, Paintbrush, Smartphone, Wand2 } from "lucide-react";
import { useRef } from "react";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="bg-black py-20 text-neutral md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Our Services</span>
          <h2 className="mt-3 mb-6 text-3xl font-bold text-neutral md:text-4xl">Crafting digital experiences that make an impact</h2>
          <p className="text-lg text-neutral-dark">
            We combine strategic thinking with technical expertise to deliver solutions that drive business growth and user engagement.
          </p>
        </motion.div>

        <motion.div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3" variants={container} initial="hidden" animate={isInView ? "show" : "hidden"}>
          {[{
            icon: <Code className="text-2xl text-secondary" />,
            title: "Website Development",
            description: "We create responsive, high-performance websites that deliver exceptional user experiences and drive business results.",
            bullets: ["Custom website development", "E-commerce solutions", "CMS implementation"],
          }, {
            icon: <Laptop className="text-2xl text-secondary" />,
            title: "Web Applications",
            description: "We build scalable, feature-rich web applications that solve complex business challenges and streamline operations.",
            bullets: ["Custom web applications", "Enterprise solutions", "SaaS product development"],
          }, {
            icon: <Smartphone className="text-2xl text-secondary" />,
            title: "Mobile Applications",
            description: "We design and develop intuitive mobile applications that engage users and extend your digital presence to all devices.",
            bullets: ["iOS and Android development", "Cross-platform solutions", "App maintenance & updates"],
          }].map((service) => (
            <motion.div variants={item} key={service.title}>
              <div className="h-full rounded-sm border border-neutral/10 bg-neutral-darker p-8 transition-all hover:border-secondary/30">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-sm bg-secondary/10">{service.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-neutral">{service.title}</h3>
                <p className="mb-6 text-neutral-dark">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet) => (
                    <li className="flex items-start" key={bullet}>
                      <span className="mr-3 text-secondary">✓</span>
                      <span className="text-neutral-dark">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="overflow-hidden rounded-sm border border-neutral/10 bg-primary-light text-neutral"
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
              <span className="mb-2 text-sm font-semibold uppercase tracking-wider text-secondary">Featured Service</span>
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">UI/UX Design Excellence</h3>
              <p className="mb-6 text-neutral-dark">
                Our design process combines aesthetic appeal with functional usability to create intuitive, engaging interfaces that delight users and drive conversions.
              </p>
              <div className="mb-8 space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-sm bg-secondary/10"><Paintbrush className="h-5 w-5 text-secondary" /></div>
                  <div><h4 className="font-semibold">User-Centered Design</h4><p className="text-sm text-neutral-dark">Putting users at the heart of every design decision</p></div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-sm bg-secondary/10"><Highlighter className="h-5 w-5 text-secondary" /></div>
                  <div><h4 className="font-semibold">Information Architecture</h4><p className="text-sm text-neutral-dark">Creating logical, intuitive content structures</p></div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-sm bg-secondary/10"><Wand2 className="h-5 w-5 text-secondary" /></div>
                  <div><h4 className="font-semibold">Interactive Prototyping</h4><p className="text-sm text-neutral-dark">Testing and refining experiences before development</p></div>
                </div>
              </div>
              <a href="#contact" className="inline-block w-fit rounded-sm bg-secondary px-8 py-3 font-medium text-black transition-colors hover:bg-secondary-light">Learn more</a>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1000&q=80"
                alt="UI/UX design process"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
