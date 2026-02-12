"use client";

import { motion, useInView } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useRef } from "react";
import LeadCaptureForm from "@/components/home/lead-capture-form";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="contact" className="bg-black py-20 text-neutral md:py-28" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold tracking-wider text-secondary uppercase">Get In Touch</span>
              <h2 className="mt-3 mb-6 text-3xl font-bold md:text-4xl">Let&apos;s bring your vision to life</h2>
              <p className="mb-8 text-neutral-dark">
                Ready to start your project? Get a personalized proposal and let&apos;s discuss how we can help bring your vision to life.
                We&apos;re excited to hear from you.
              </p>

              <div className="mb-8 space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-sm border border-neutral/10 bg-neutral-darker">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Office Location</h4>
                    <p className="text-neutral-dark">340 Beach Drive NE, St. Petersburg, FL 33701</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-sm border border-neutral/10 bg-neutral-darker">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Email Us</h4>
                    <p className="text-neutral-dark">hello@slateagency.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-sm border border-neutral/10 bg-neutral-darker">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Call Us</h4>
                    <p className="text-neutral-dark">+1 (727) 555-0123</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                {[Twitter, Linkedin, Instagram, Github].map((Icon, index) => (
                  <a
                    href="#"
                    key={index}
                    className="flex h-12 w-12 items-center justify-center rounded-sm border border-neutral/10 bg-neutral-darker transition-colors hover:border-secondary hover:bg-secondary"
                  >
                    <Icon className="h-5 w-5 text-neutral" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neutral/20 to-secondary/20 opacity-50 blur-sm" />
              <div className="relative rounded-2xl border border-neutral/20 bg-neutral-darker/30 p-8 backdrop-blur-md">
                <LeadCaptureForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
