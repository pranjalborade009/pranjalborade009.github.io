import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <SectionHeading
        number="03"
        label="Experience"
        title="Where I've worked and what it taught me."
        lead="Training, content and client work — described as it happened."
      />

      <div className="divide-y divide-border border-y border-border">
        {experiences.map((exp, i) => (
          <Reveal key={exp.org} delay={i * 80}>
            <article className="grid gap-6 py-10 md:grid-cols-[0.8fr_1.6fr]">
              <div>
                <p className="font-mono-meta text-[0.62rem] text-primary">{exp.period}</p>
                <p className="mt-2 font-mono-meta text-[0.58rem] text-muted-foreground">{exp.kind}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground">{exp.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{exp.org}</p>
                <ul className="mt-5 space-y-2">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                      <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 font-mono-meta text-[0.56rem] text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                {exp.link ? (
                  <a
                    href={exp.link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-underline mt-5 inline-flex items-center gap-1 font-mono-meta text-[0.6rem] text-primary"
                  >
                    {exp.link.label}
                    <ArrowUpRight className="h-3 w-3" aria-hidden />
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}