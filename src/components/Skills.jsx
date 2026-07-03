"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import WindowChrome from "@/components/ui/WindowChrome";
import { skillGroups } from "@/lib/data";

function toCamelCase(label) {
  return label
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .map((word, i) => (i === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()))
    .join("");
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];

  return (
    <section id="capabilities" className="border-t border-line bg-paper-alt px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="02" title="capabilities" />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="balance mt-8 max-w-2xl font-display text-3xl leading-snug tracking-tight sm:text-4xl">
            A working stack built for shipping, not just for demos.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <WindowChrome title="skills.js">
            <div className="flex flex-wrap border-b border-line bg-paper-alt">
              {skillGroups.map((g, i) => (
                <button
                  key={g.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`border-r border-line px-4 py-2.5 font-mono text-xs transition-colors ${
                    active === i ? "bg-paper text-ink" : "text-ink-faint hover:text-ink-soft"
                  }`}
                >
                  {toCamelCase(g.label)}.js
                </button>
              ))}
            </div>

            <div className="min-h-[16rem] p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="font-mono text-sm leading-relaxed sm:text-[0.95rem]"
                >
                  <p>
                    <span className="text-purple">const</span>{" "}
                    <span className="text-accent">{toCamelCase(group.label)}</span> = [
                  </p>
                  {group.items.map((skill) => (
                    <p
                      key={skill}
                      className="pl-6 text-ink-soft transition-colors hover:text-forest"
                    >
                      <span className="text-forest">&quot;{skill}&quot;</span>,
                    </p>
                  ))}
                  <p>];</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </WindowChrome>
        </Reveal>
      </div>
    </section>
  );
}
