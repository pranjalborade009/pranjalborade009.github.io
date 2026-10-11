import { useEffect, useState } from "react";
import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { profile, resumeUrl } from "@/data/portfolio";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const line = (text: string, delay: number) => (
    <span className="block overflow-hidden pb-[0.06em]">
      <span
        className="block pb-[0.04em] transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
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
    <section
      className="paper-grain relative flex min-h-[88svh] items-center pt-28 pb-16 text-foreground"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p
          className="font-mono-meta text-[0.66rem] text-primary transition-opacity duration-700"
          style={{ opacity: mounted ? 1 : 0 }}
        >
          Portfolio — {profile.location}
        </p>

        <div className="mt-6 grid grid-cols-[minmax(0,1fr)_7.5rem] items-center gap-4 sm:grid-cols-[minmax(0,1fr)_14rem] sm:gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <h1 className="font-display text-[2.5rem] leading-[1] font-normal sm:text-6xl lg:text-[5.75rem]">
          {line(profile.first, 60)}
          <span className="text-muted-foreground">{line(profile.middle, 160)}</span>
          {line(profile.last, 260)}
        </h1>
        <img
          src="/images/pranjal-portrait-transparent.png"
          alt="Pranjal Vishal Borade"
          width={768}
          height={968}
          fetchPriority="high"
          className="aspect-[4/5] w-full object-contain object-top"
        />
        </div>

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
              {resumeUrl ? (
                <a
                  href={resumeUrl}
                  download
                  className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono-meta text-[0.66rem] text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <ArrowDownToLine className="h-3.5 w-3.5" aria-hidden />
                  Download resume
                </a>
              ) : null}
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