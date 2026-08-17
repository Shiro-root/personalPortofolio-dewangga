export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  );
}
