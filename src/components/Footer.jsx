"use client";

import { ArrowUp } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { scrollTo } from "@/lib/scroll";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-alt px-6 py-12 text-ink-soft lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl text-ink">
            <span className="text-ink-faint">$</span> {profile.name}
            <span className="text-accent">_</span>
          </p>
          <p className="mt-1 font-mono text-sm text-ink-faint">{profile.role}</p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="font-mono text-xs text-ink-faint transition-colors hover:text-accent">
                {link.label.toLowerCase()}.tsx
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => scrollTo(0)}
          aria-label="Back to top"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-strong transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowUp size={16} />
        </button>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-line pt-6 font-mono text-xs text-ink-faint">
        <p>{"// "}© {year} {profile.name}. </p>
      </div>
    </footer>
  );
}
