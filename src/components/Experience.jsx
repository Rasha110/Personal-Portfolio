import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { education, experience } from "@/lib/data";

function commitHash(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i += 1) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h.toString(16).padStart(7, "0").slice(0, 7);
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="05" title="experience" />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="balance mt-8 max-w-2xl font-display text-3xl leading-snug tracking-tight sm:text-4xl">
            One year in production, several years of building toward it.
          </p>
        </Reveal>

        <p className="mt-10 font-mono text-xs text-ink-faint">$ git log --oneline --reverse</p>

        <div className="relative mt-4 max-w-3xl">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-line-strong sm:left-[7px]" />

          <ol className="space-y-14">
            {experience.map((role, i) => (
              <Reveal
                key={`${role.role}-${role.period}`}
                delay={0.05 * i}
                as="li"
                className="group relative pl-8 sm:pl-10"
              >
                <span className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-accent bg-paper transition-colors group-hover:bg-accent sm:h-[15px] sm:w-[15px]" />
                <p className="font-mono text-xs text-ink-faint">
                  <span className="text-orange">commit {commitHash(role.role + role.company)}</span>
                  {"  "}
                  <span>{role.period}</span>
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tight">
                  {role.role} <span className="text-ink-faint">@ {role.company}</span>
                </h3>
                <ul className="pretty mt-4 space-y-2.5 font-mono text-sm text-ink-soft">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="shrink-0 text-forest">+</span>
                      <span className="font-sans text-base text-ink-soft">{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}

            <Reveal delay={0.1} as="li" className="group relative pl-8 sm:pl-10">
              <span className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-forest bg-paper transition-colors group-hover:bg-forest sm:h-[15px] sm:w-[15px]" />
              <p className="font-mono text-xs text-ink-faint">
                <span className="text-orange">commit {commitHash(education.degree)}</span>
                {"  "}
                <span>{education.period}</span>
              </p>
              <h3 className="mt-2 font-display text-2xl tracking-tight">
                {education.degree} <span className="text-ink-faint">@ {education.school}</span>
              </h3>
              <p className="mt-3 font-mono text-sm text-ink-faint">// {education.detail}</p>
            </Reveal>
          </ol>
        </div>
      </div>
    </section>
  );
}
