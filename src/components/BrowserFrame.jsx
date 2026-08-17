export default function BrowserFrame({ seed, alt, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-md border border-line bg-surface ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
      </div>
      <div className="overflow-hidden bg-bg">
        <img
          src={`https://picsum.photos/seed/${seed}/1400/900`}
          alt={alt}
          loading="lazy"
          className="aspect-[14/9] w-full object-cover transition duration-500 ease-out group-hover:scale-[1.015]"
        />
      </div>
    </div>
  );
}
