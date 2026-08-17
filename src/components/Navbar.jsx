import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/content";

const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] border-b transition-colors duration-300 ${
        scrolled ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-max flex h-16 items-center justify-between">
        <Link to="/" className="text-[15px] font-semibold tracking-tight text-ink">
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-9 text-sm text-muted md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-sm bg-ink px-4 py-2 text-sm font-medium text-bg transition hover:opacity-85 md:inline-block"
        >
          Diskusi Proyek
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Buka menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-5 bg-ink transition ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-ink transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <ul className="container-max flex flex-col gap-4 border-t border-line py-5 text-sm text-muted md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="inline-block rounded-sm bg-ink px-4 py-2 font-medium text-bg"
            >
              Diskusi Proyek
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
