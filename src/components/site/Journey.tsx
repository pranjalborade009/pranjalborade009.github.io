import { milestones } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-24 border-t border-border bg-card/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          number="02"
          label="Journey"
          title="Milestones, in order."
          lead="Education, experience, projects and competitions — the moments that actually moved things forward."
        />

        <ol className="relative border-l border-border pl-8 md:pl-12">
          {milestones.map((m, i) => (
            <Reveal as="li" key={`${m.title}-${m.year}`} delay={(i % 4) * 70} className="group relative pb-12 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[calc(2rem+4.5px)] top-2 h-2 w-2 rounded-full bg-border transition-colors duration-500 group-hover:bg-primary md:-left-[calc(3rem+4.5px)]"
              />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono-meta text-[0.62rem] text-primary">{m.year}</span>
                <span className="font-mono-meta text-[0.58rem] text-muted-foreground">{m.category}</span>
              </div>
              <h3 className="font-display mt-2 text-xl text-foreground sm:text-2xl">{m.title}</h3>
              {m.org ? <p className="mt-1 text-sm text-muted-foreground">{m.org}</p> : null}
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/75">{m.detail}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}