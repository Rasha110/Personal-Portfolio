import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectVisual from "@/components/ui/ProjectVisual";
import { featuredWork, finalYearProject, personalProjects } from "@/lib/data";

function ProjectLinks({ links }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {links.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-paper transition-colors hover:bg-accent"
        >
          Live site <ArrowUpRight size={13} />
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors hover:border-accent hover:text-accent"
        >
          <FaGithub size={13} /> Code
        </a>
      )}
    </div>
  );
}

function StackChips({ stack }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {stack.map((tech) => (
        <li
          key={tech}
          className="rounded-full bg-paper-deep px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ink-soft"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  return (
    <section id="work" className="border-t border-line bg-paper-alt px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="04" title="work" />
        </Reveal>

        <Reveal delay={0.05}>
          <p className="balance mt-8 max-w-2xl font-display text-3xl leading-snug tracking-tight sm:text-4xl">
            A few things I&apos;ve shipped end-to-end.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-24">
          {featuredWork.map((project, i) => (
            <Reveal
              key={project.id}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <ProjectVisual
                label={project.title}
                tone={i % 2 === 0 ? "accent" : "forest"}
                pattern={i % 2 === 0 ? "grid" : "waves"}
                imageSrc={project.image}
                imageAspect={project.imageAspect}
                url={project.links.live || project.links.github}
              />
              <div>
                <h3 className="font-display text-2xl tracking-tight sm:text-3xl">{project.title}</h3>
                <p className="pretty mt-4 text-ink-soft">{project.description}</p>
                <StackChips stack={project.stack} />
                <ProjectLinks links={project.links} />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 border-t border-line pt-16">
          <SectionLabel index="04a" title="personal-projects" />
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {personalProjects.map((project, i) => (
              <Reveal key={project.id} delay={0.05 * i} className="flex flex-col">
                <ProjectVisual
                  label={project.title}
                  tone={i % 2 === 0 ? "accent" : "forest"}
                  pattern="grid"
                  imageSrc={project.image}
                  imageAspect={project.imageAspect}
                  url={project.links.live || project.links.github}
                />
                <h3 className="mt-5 font-display text-lg tracking-tight">{project.title}</h3>
                <p className="pretty mt-2 text-sm text-ink-soft">{project.description}</p>
                <StackChips stack={project.stack} />
                <ProjectLinks links={project.links} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-line pt-16">
          <SectionLabel index="04b" title="final-year-project" />
          <Reveal delay={0.05} className="mt-8 max-w-3xl rounded-xl border border-line bg-paper-deep p-8">
            <h3 className="font-display text-xl tracking-tight sm:text-2xl">{finalYearProject.title}</h3>
            <p className="pretty mt-4 text-ink-soft">{finalYearProject.description}</p>
            <p className="mt-4 border-l-2 border-forest pl-4 text-sm text-ink-faint">
              {finalYearProject.outcome}
            </p>
            <StackChips stack={finalYearProject.stack} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
