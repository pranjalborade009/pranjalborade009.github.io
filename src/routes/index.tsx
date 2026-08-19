import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Journey } from "@/components/site/Journey";
import { Experience } from "@/components/site/Experience";
import { Work } from "@/components/site/Work";
import { DataSkills } from "@/components/site/DataSkills";
import { Certifications } from "@/components/site/Certifications";
import { Achievements } from "@/components/site/Achievements";
import { Contact, SiteFooter } from "@/components/site/Contact";

const description =
  "Portfolio of Pranjal Vishal Borade — MCA student in Nashik working across frontend development with React and data analytics with Python, SQL and Power BI.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pranjal Vishal Borade | Frontend & Data Portfolio" },
      { name: "description", content: description },
      { property: "og:title", content: "Pranjal Vishal Borade | Frontend & Data Portfolio" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Pranjal Vishal Borade",
          jobTitle: "MCA Student · Frontend & Data",
          address: { "@type": "PostalAddress", addressLocality: "Nashik", addressCountry: "IN" },
          email: "mailto:pranjalborade009@gmail.com",
          sameAs: [
            "https://www.linkedin.com/in/pranjalborade/",
            "https://github.com/pranjalborade009",
            "https://www.upwork.com/freelancers/~01640fd2f5d641b4d0",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Experience />
        <Work />
        <DataSkills />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
