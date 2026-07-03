"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Marquee from "@/components/ui/Marquee";
import TypeWriter from "@/components/ui/TypeWriter";
import { heroKeywords, profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-32">
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full bg-accent-tint/70 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-forest-tint/60 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 lg:px-10"
      >
        <motion.div variants={item} className="mb-8 flex items-center gap-3 font-mono text-xs text-ink-faint">
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-forest" />
            </span>
            <span className="text-ink-faint">$</span>
            <TypeWriter
              text={`echo $STATUS // ${profile.availability.toLowerCase()} · ${profile.location}`}
              className="text-forest"
            />
          </span>
          <svg width="56" height="16" viewBox="0 0 56 16" aria-hidden="true" className="hidden text-forest/70 sm:block">
            <motion.path
              d="M0 8 L10 8 L14 2 L18 14 L22 8 L56 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, repeat: Infinity, repeatType: "loop", ease: "easeInOut", repeatDelay: 0.4 }}
            />
          </svg>
        </motion.div>

        <motion.h1
          variants={item}
          className="balance max-w-4xl font-display text-[10.5vw] leading-[1.05] tracking-[-0.01em] sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
        >
          I turn manual busywork into{" "}
          <span className="text-accent">
            <span className="text-purple">{"${"}</span>
            systems
            <span className="text-purple">{"}"}</span>
          </span>{" "}
          that run themselves.
        </motion.h1>

        <motion.div
          variants={item}
          className="pretty mt-8 max-w-xl rounded-lg border border-line bg-paper-deep/60 px-5 py-4 font-mono text-sm leading-relaxed text-ink-soft"
        >
          <p className="text-ink-faint">/**</p>
          <p>
            <span className="text-ink-faint">{" * "}</span>
            AI Automation Engineer and Full-Stack MERN Developer based in {profile.location}. Builds
            CRM integrations, AI-powered features, and production web apps.
          </p>
          <p className="text-ink-faint">{" */"}</p>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton
            as="a"
            href="#work"
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-6 py-3 font-mono text-xs text-paper transition-colors hover:bg-accent-soft"
          >
            viewWork<span className="text-paper/70">()</span>
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-md border border-line-strong px-6 py-3 font-mono text-xs text-ink-soft transition-colors hover:border-forest hover:text-forest"
          >
            getInTouch<span className="text-ink-faint">()</span>
          </MagneticButton>
          <MagneticButton
            as="a"
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-1.5 rounded-md border border-line-strong px-6 py-3 font-mono text-xs text-ink-soft transition-colors hover:border-purple hover:text-purple"
          >
            <Download size={13} />
            resume<span className="text-ink-faint">.pdf</span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <div className="relative border-t border-line py-5">
        <Marquee items={heroKeywords} />
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-24 right-6 hidden h-11 w-11 animate-bounce items-center justify-center rounded-full border border-line-strong text-ink-faint transition-colors hover:border-accent hover:text-accent lg:right-10 lg:flex"
      >
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
