import { Reveal } from "./Reveal";

export function SectionHeading({
  number,
  label,
  title,
  lead,
}: {
  number: string;
  label: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="mb-12 max-w-2xl md:mb-16">
      <Reveal>
        <p className="font-mono-meta text-[0.68rem] text-primary">
          {number} / {label}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display mt-4 text-3xl leading-[1.1] font-normal tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={140}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{lead}</p>
        </Reveal>
      ) : null}
    </header>
  );
}