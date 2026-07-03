import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import AvatarMark from "@/components/ui/AvatarMark";
import WindowChrome from "@/components/ui/WindowChrome";

export default function About() {
  return (
    <section id="about" className="border-t border-line px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel index="01" title="about" />
        </Reveal>

        <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20">
          <Reveal delay={0.05} className="lg:sticky lg:top-32 lg:self-start">
            <AvatarMark photoSrc="/image.png" />
          </Reveal>

          <Reveal delay={0.1}>
            <WindowChrome title="about.md">
              <div className="p-6 sm:p-8">
                <p className="pretty font-mono text-sm leading-relaxed text-ink-soft sm:text-base">
                  Full-Stack Developer (MERN) with 1+ year of professional experience shipping
                  production web apps and CRM integrations at MergeStack. Specialized in HubSpot
                  Private App API development, Salesforce-to-HubSpot migrations, and AI-powered
                  features (OpenAI RAG, semantic search). Comfortable across the stack — React,
                  Next.js, TypeScript, Node.js, MongoDB — with proven delivery of webhook
                  automations, real-time data pipelines, and headless CMS builds on Builder.io.
                  Computer Science graduate (CGPA 3.63/4.0).
                </p>
              </div>
            </WindowChrome>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
