import { aboutParagraphs, aboutPillars } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading number="01" label="About" title="A short version of the long story." />

      <div className="grid gap-12 md:grid-cols-[1.25fr_1fr] md:gap-20">
        <div className="space-y-6">
          {aboutParagraphs.map((p, i) => (
            <Reveal key={p} delay={i * 90}>
              <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>

        <ul className="space-y-6 self-start border-l border-border pl-6">
          {aboutPillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.word} delay={i * 110}>
              <p className="font-display text-2xl text-foreground">{pillar.word}</p>
              <p className="mt-1 text-sm text-muted-foreground">{pillar.note}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}