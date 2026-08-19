import { useState } from "react";
import { certifications } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certifications : certifications.slice(0, 4);

  return (
    <section id="more" className="scroll-mt-24 border-t border-border bg-card/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading number="06" label="Certifications" title="Coursework outside the classroom." />

        <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
          {visible.map((cert, i) => (
            <Reveal key={cert.title} delay={(i % 2) * 70}>
              <article className="h-full bg-background p-6">
                <p className="font-mono-meta text-[0.58rem] text-primary">{cert.org}</p>
                <h3 className="font-display mt-3 text-xl leading-snug text-foreground">{cert.title}</h3>
                <p className="mt-2 font-mono-meta text-[0.56rem] text-muted-foreground">
                  {cert.date}
                  {cert.credentialId ? ` · ID ${cert.credentialId}` : ""}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((s) => (
                    <li key={s} className="rounded-full border border-border px-3 py-1 font-mono-meta text-[0.54rem] text-muted-foreground">
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {certifications.length > 4 ? (
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="mt-8 inline-flex items-center rounded-full border border-border px-5 py-2 font-mono-meta text-[0.6rem] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {showAll ? "Show fewer" : `View all ${certifications.length}`}
          </button>
        ) : null}
      </div>
    </section>
  );
}