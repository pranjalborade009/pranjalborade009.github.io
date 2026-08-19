import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/Contact";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    const project = loaderData?.project;
    const title = project ? `${project.title} — ${project.subtitle} | Pranjal Vishal Borade` : "Case study";
    const description = project?.summary ?? "Project case study by Pranjal Vishal Borade.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  component: CaseStudy,
});

function Block({ number, label, children }: { number: string; label: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="grid gap-4 border-t border-border py-10 md:grid-cols-[0.5fr_1.5fr] md:gap-10">
      <p className="font-mono-meta text-[0.6rem] text-primary">
        {number} / {label}
      </p>
      <div className="max-w-2xl text-sm leading-relaxed text-foreground/85 sm:text-base">{children}</div>
    </Reveal>
  );
}

function CaseStudy() {
  const { project } = Route.useLoaderData();

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteNav standalone />
      <main className="mx-auto max-w-5xl px-5 pt-32 pb-24 sm:px-8">
        <Link to="/" className="link-underline font-mono-meta inline-flex items-center gap-2 text-[0.6rem] text-muted-foreground">
          <ArrowLeft className="h-3 w-3" aria-hidden />
          All work
        </Link>

        <p className="font-mono-meta mt-10 text-[0.62rem] text-primary">
          {project.index} / {project.type} · {project.date}
        </p>
        <h1 className="font-display mt-4 text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          {project.title}
          <span className="block text-muted-foreground">{project.subtitle}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/85">{project.summary}</p>

        <img
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={900}
          className="mt-12 aspect-[16/8] w-full rounded-md border border-border object-cover"
        />

        <div className="mt-16">
          <Block number="01" label="Overview">
            {project.overview}
          </Block>
          <Block number="02" label="Problem">
            {project.problem}
          </Block>
          <Block number="03" label="Approach">
            <ul className="space-y-3">
              {project.approach.map((a) => (
                <li key={a} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-primary" />
                  {a}
                </li>
              ))}
            </ul>
          </Block>
          <Block number="04" label="My role">
            {project.role}
          </Block>
          <Block number="05" label="Technology">
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="rounded-full border border-border px-3 py-1 font-mono-meta text-[0.56rem] text-muted-foreground">
                  {t}
                </li>
              ))}
            </ul>
          </Block>
          <Block number="06" label="Key features">
            <ul className="space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </Block>
          {project.challenges ? (
            <Block number="07" label="Challenges">
              {project.challenges}
            </Block>
          ) : null}
          <Block number={project.challenges ? "08" : "07"} label="What I learned">
            <ul className="space-y-3">
              {project.learned.map((l) => (
                <li key={l} className="flex gap-3">
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-primary" />
                  {l}
                </li>
              ))}
            </ul>
          </Block>
          <Block number={project.challenges ? "09" : "08"} label="Result">
            {project.result}
          </Block>
        </div>

        <Link
          to="/"
          hash="work"
          className="mt-12 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono-meta text-[0.62rem] transition-colors hover:border-primary hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          Back to selected work
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}