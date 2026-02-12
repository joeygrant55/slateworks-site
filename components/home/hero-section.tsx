"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/spline-scene";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-neutral">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      <div className="absolute inset-0">
        <div
          className="absolute -left-1/2 -top-1/2 h-[200%] w-[200%] opacity-20"
          style={{
            background:
              "radial-gradient(circle at 20% 80%, rgba(100, 100, 100, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(150, 150, 150, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(200, 200, 200, 0.1) 0%, transparent 50%)",
            animation: "rotate 30s linear infinite",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 pb-16 pt-32">
        <div className="grid min-h-[80vh] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
              >
                We craft{" "}
                <span
                  className="gradient-text inline-block"
                >
                  digital experiences
                </span>{" "}
                that transform businesses
              </motion.h1>

              <motion.p
                className="max-w-2xl text-lg leading-relaxed text-neutral-dark md:text-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              >
                Where innovation meets execution. We build cutting-edge web applications, mobile experiences, and digital products that drive growth.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            >
              <a
                href="#work"
                className="rounded-full bg-secondary px-8 py-4 text-center font-bold text-black shadow-secondary/25 transition-all duration-300 hover:scale-105 hover:bg-secondary-light hover:shadow-xl"
              >
                See Our Work
              </a>

              <a
                href="#contact"
                className="rounded-full border-2 border-secondary bg-transparent px-8 py-4 text-center font-bold text-neutral transition-all duration-300 hover:scale-105 hover:border-secondary-light hover:bg-secondary/20 hover:text-secondary-light hover:shadow-xl"
              >
                Let&apos;s Talk
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative mt-8 h-[300px] sm:h-[400px] md:h-[500px] lg:mt-0 lg:h-[600px]"
          >
            <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="h-full w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
