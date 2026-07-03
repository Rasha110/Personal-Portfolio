"use client";

import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import MagneticButton from "@/components/ui/MagneticButton";
import WindowChrome from "@/components/ui/WindowChrome";
import { profile } from "@/lib/data";

const directLinks = [
  { label: "email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "linkedin", value: "in/rasha-faheem", href: profile.links.linkedin, icon: FaLinkedin },
  { label: "github", value: "Rasha110", href: profile.links.github, icon: FaGithub },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // No backend wired up yet — this opens the visitor's mail client with the
    // message pre-filled. Swap for a Formspree/Resend API route when ready.
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "your website"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="border-t border-line bg-paper-alt px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="06" title="contact" />
        </Reveal>

        <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <p className="balance font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Let&apos;s build something worth automating.
              </p>
            </Reveal>
            <Reveal delay={0.05} className="pretty mt-6 max-w-md text-ink-soft">
              Have a CRM that doesn&apos;t talk to itself, a workflow held together by copy-paste,
              or a product idea that needs a full-stack build? I&apos;d like to hear about it.
            </Reveal>

            <Reveal delay={0.1} className="mt-12 space-y-1">
              {directLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="group flex items-center justify-between border-b border-line py-4 transition-colors hover:border-accent/50"
                >
                  <span className="flex items-center gap-3">
                    <link.icon size={16} className="text-ink-faint transition-colors group-hover:text-accent" />
                    <span className="font-mono text-xs text-ink-faint">{link.label}:</span>
                    <span className="text-lg text-ink">{link.value}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="translate-x-0 text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  />
                </a>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <WindowChrome title="send.sh">
              <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8">
                <div>
                  <label htmlFor="name" className="font-mono text-xs text-forest">
                    <span className="text-ink-faint">{">"}</span> name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 w-full border-b border-line bg-transparent py-2 font-mono text-base text-ink outline-none transition-colors focus:border-accent"
                    placeholder="jane_doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-xs text-forest">
                    <span className="text-ink-faint">{">"}</span> email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full border-b border-line bg-transparent py-2 font-mono text-base text-ink outline-none transition-colors focus:border-accent"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-mono text-xs text-forest">
                    <span className="text-ink-faint">{">"}</span> message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-2 w-full resize-none border-b border-line bg-transparent py-2 font-mono text-base text-ink outline-none transition-colors focus:border-accent"
                    placeholder="What are you trying to build?"
                  />
                </div>

                <MagneticButton
                  as="button"
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-mono text-xs text-paper transition-colors hover:bg-accent-soft"
                >
                  <span className="text-paper/70">$</span> send --now
                  <ArrowUpRight size={14} />
                </MagneticButton>
              </form>
            </WindowChrome>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
