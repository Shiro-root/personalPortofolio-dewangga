import { profile } from "../data/content";

const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="container-max flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-[15px] font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">Website & sistem digital untuk bisnis.</p>
        </div>

        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="link-underline">
              {s.label}
            </a>
          ))}
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="link-underline">
            WhatsApp
          </a>
        </div>
      </div>

      <div className="container-max mt-10 border-t border-line pt-6 text-xs text-muted">
        © {new Date().getFullYear()} {profile.fullName}.
      </div>
    </footer>
  );
}
