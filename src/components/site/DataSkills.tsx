import { analyticsFlow, analyticsTech, skillGroups } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function DataSkills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading
        number="05"
        label="Data & skills"
        title="The analytical half."
        lead="Alongside frontend work I'm building a data practice — the workflow below is how I approach a dataset."
      />

      <Reveal>
        <ol className="flex flex-wrap items-center gap-x-4 gap-y-3 border-y border-border py-6">
          {analyticsFlow.map((step, i) => (
            <li key={step} className="flex items-center gap-4">
              <span className="font-mono-meta text-[0.66rem] text-foreground">{step}</span>
              {i < analyticsFlow.length - 1 ? (
                <span aria-hidden className="h-px w-8 bg-primary/60" />
              ) : null}
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={80}>
        <ul className="mt-6 flex flex-wrap gap-2">
          {analyticsTech.map((t) => (
            <li key={t} className="rounded-full bg-secondary px-3 py-1 font-mono-meta text-[0.56rem] text-secondary-foreground">
              {t}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={(i % 4) * 70}>
            <h3 className="font-mono-meta border-b border-border pb-2 text-[0.6rem] text-primary">{group.label}</h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-foreground/80">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}