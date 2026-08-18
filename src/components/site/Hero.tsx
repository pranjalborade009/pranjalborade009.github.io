import { useEffect, useState } from "react";
import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { profile, resumeUrl } from "@/data/portfolio";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const line = (text: string, delay: number) => (
    <span className="block overflow-hidden">
      <span
        className="block transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transitionDelay: `${delay}ms`,
          transform: mounted ? "none" : "translateY(105%)",
          opacity: mounted ? 1 : 0,
        }}
      >
        {text}
      </span>
    </span>
  );

  return (
    <section className="paper-grain relative flex min-h-[92vh] items-center pt-24 text-foreground" aria-label="Introduction">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p
          className="font-mono-meta text-[0.66rem] text-primary transition-opacity duration-700"
          style={{ opacity: mounted ? 1 : 0 }}
        >
          Portfolio — {profile.location}
        </p>

        <h1 className="font-display mt-6 text-[16vw] leading-[0.86] font-normal tracking-[-0.03em] sm:text-[11vw] lg:text-[8.5rem]">
          {line(profile.first, 60)}
          <span className="text-muted-foreground">{line(profile.middle, 160)}</span>
          {line(profile.last, 260)}
        </h1>

        <div
          className="mt-10 grid gap-8 border-t border-border pt-8 transition-[opacity,transform] duration-700 md:grid-cols-[1.4fr_1fr]"
          style={{
            transitionDelay: "520ms",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(16px)",
          }}
        >
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-foreground sm:text-xl">{profile.tagline}</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{profile.intro}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-mono-meta text-[0.66rem] text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View work
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
              </a>
              <a
                href={resumeUrl}
                download
                className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono-meta text-[0.66rem] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ArrowDownToLine className="h-3.5 w-3.5" aria-hidden />
                Download resume
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-5">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline font-mono-meta text-[0.62rem] text-muted-foreground hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline font-mono-meta text-[0.62rem] text-muted-foreground hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href={profile.links.upwork}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline font-mono-meta text-[0.62rem] text-muted-foreground hover:text-foreground"
              >
                Upwork
              </a>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-y-4 self-start md:justify-items-end">
            {profile.meta.map((m) => (
              <li key={m} className="font-mono-meta text-[0.62rem] text-muted-foreground">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}