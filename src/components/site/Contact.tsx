import { Mail, ArrowDownToLine } from "lucide-react";
import { profile, resumeUrl } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-card/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading number="10" label="Resume & contact" title="Let's build something useful." />

        <Reveal>
          <p className="max-w-xl text-base leading-relaxed text-foreground/80">
            Open to internships, entry-level opportunities, collaborations and interesting technology projects. Want the
            concise version? The one-page resume has everything in a single sheet.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-mono-meta text-[0.66rem] text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden />
              Email me
            </a>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono-meta text-[0.66rem] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowDownToLine className="h-3.5 w-3.5" aria-hidden />
              Download resume
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono-meta text-[0.66rem] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              View resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <dl className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="font-mono-meta text-[0.56rem] text-muted-foreground">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${profile.email}`} className="link-underline text-sm text-foreground">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono-meta text-[0.56rem] text-muted-foreground">LinkedIn</dt>
              <dd className="mt-2">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline text-sm text-foreground"
                >
                  in/pranjalborade
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono-meta text-[0.56rem] text-muted-foreground">GitHub</dt>
              <dd className="mt-2">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline text-sm text-foreground"
                >
                  pranjalborade009
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono-meta text-[0.56rem] text-muted-foreground">Upwork</dt>
              <dd className="mt-2">
                <a
                  href={profile.links.upwork}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline text-sm text-foreground"
                >
                  Freelance profile
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 sm:px-8">
        <p className="font-mono-meta text-[0.56rem] text-muted-foreground">
          © {new Date().getFullYear()} Pranjal Vishal Borade · {profile.location}
        </p>
        <a href="#top" className="link-underline font-mono-meta text-[0.56rem] text-muted-foreground">
          Back to top
        </a>
      </div>
    </footer>
  );
}