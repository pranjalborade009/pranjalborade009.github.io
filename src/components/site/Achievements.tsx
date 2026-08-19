import { achievements, beyondCode, education } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Achievements() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading number="07" label="Leadership & achievements" title="Evidence, not adjectives." />

      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={(i % 2) * 70}>
            <article className="h-full bg-background p-6 sm:p-8">
              <p className="font-mono-meta text-[0.56rem] text-primary">{a.meta}</p>
              <h3 className="font-display mt-3 text-2xl leading-snug text-foreground">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{a.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 grid gap-16 md:grid-cols-2">
        <div>
          <SectionHeading number="08" label="Beyond code" title="The other side." />
          <ul className="space-y-6">
            {beyondCode.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80} className="border-t border-border pt-4">
                <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading number="09" label="Education" title="Where I studied." />
          <ul className="space-y-6">
            {education.map((e, i) => (
              <Reveal as="li" key={e.degree} delay={i * 80} className="border-t border-border pt-4">
                <p className="font-mono-meta text-[0.58rem] text-primary">{e.period}</p>
                <h3 className="font-display mt-2 text-xl leading-snug text-foreground">{e.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
                <p className="mt-1 font-mono-meta text-[0.54rem] text-muted-foreground">{e.note}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}