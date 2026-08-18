import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import { navItems, resumeUrl } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function SiteNav({ standalone = false }: { standalone?: boolean }) {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-background/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <Link
          to="/"
          className="font-mono-meta text-xs text-foreground transition-colors hover:text-primary"
          onClick={() => setOpen(false)}
        >
          Pranjal.B
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {!standalone &&
            navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline font-mono-meta text-[0.66rem] text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          {standalone && (
            <Link
              to="/"
              className="link-underline font-mono-meta text-[0.66rem] text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to portfolio
            </Link>
          )}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={resumeUrl}
            download
            className="hidden items-center gap-2 rounded-full border border-primary px-4 py-1.5 font-mono-meta text-[0.62rem] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            <ArrowDownToLine className="h-3 w-3" aria-hidden />
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background px-5 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col">
            {(standalone ? [] : navItems).map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3 font-display text-2xl text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {standalone ? (
              <li>
                <Link to="/" onClick={() => setOpen(false)} className="block py-3 font-display text-2xl text-foreground">
                  Back to portfolio
                </Link>
              </li>
            ) : null}
          </ul>
          <a
            href={resumeUrl}
            download
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2 font-mono-meta text-[0.66rem] text-primary"
          >
            <ArrowDownToLine className="h-3 w-3" aria-hidden />
            Download resume
          </a>
        </div>
      ) : null}

      <div className="h-px w-full bg-border/60">
        <div className="h-px bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
}