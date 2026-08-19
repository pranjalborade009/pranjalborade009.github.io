import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border bg-card/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          number="04"
          label="Selected work"
          title="Things I've built."
          lead="Three projects, each with a case study covering the problem, the approach and what I took away from it."
        />

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 90} className={i === 0 ? "md:col-span-2" : undefined}>
              <Link
                to="/work/$slug"
                params={{ slug: project.slug }}
                className="group block h-full overflow-hidden rounded-md border border-border bg-background transition-colors hover:border-primary"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] ${
                      i === 0 ? "aspect-[16/7]" : "aspect-[4/3]"
                    }`}
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <span className="font-mono-meta text-[0.62rem] text-primary">
                      {project.index} / {project.type}
                    </span>
                    <span className="font-mono-meta text-[0.58rem] text-muted-foreground">{project.date}</span>
                  </div>
                  <h3 className="font-display mt-4 text-3xl leading-tight text-foreground">
                    {project.title}
                    <span className="block text-lg text-muted-foreground">{project.subtitle}</span>
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/80">{project.summary}</p>
                  <p className="mt-4 font-mono-meta text-[0.56rem] text-muted-foreground">{project.role}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border px-3 py-1 font-mono-meta text-[0.56rem] text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1 font-mono-meta text-[0.6rem] text-primary">
                    View case study
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}