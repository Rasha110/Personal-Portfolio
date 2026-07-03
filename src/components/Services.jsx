import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="border-t border-line px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="03" title="services" />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="balance mt-8 max-w-2xl font-display text-3xl leading-snug tracking-tight sm:text-4xl">
            Where I&apos;m most useful to a growing team.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={0.04 * i}
              className="group relative bg-paper p-9 transition-colors hover:bg-paper-deep"
            >
              <span className="font-mono text-sm text-accent">{service.index}</span>
              <h3 className="mt-4 flex items-center gap-2 font-display text-2xl tracking-tight">
                <span className="text-forest opacity-0 transition-opacity group-hover:opacity-100">
                  {">"}
                </span>
                {service.title}
              </h3>
              <p className="pretty mt-4 text-ink-soft">{service.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-paper-deep px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ink-soft"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
