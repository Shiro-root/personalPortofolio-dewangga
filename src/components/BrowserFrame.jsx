import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function BrowserFrame({ seed, image, alt, className = "" }) {
  const src = image ?? `https://picsum.photos/seed/${seed}/1400/900`;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <>
      <div
        className={`overflow-hidden rounded-md border border-line bg-surface ${className}`}
      >
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
        </div>
        <div className="group relative overflow-hidden bg-bg">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onClick={openLightbox}
            className="aspect-[14/9] w-full cursor-zoom-in object-cover object-top transition duration-500 ease-out group-hover:scale-[1.015]"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition group-hover:bg-ink/10 group-hover:opacity-100">
            <span className="rounded-full bg-ink/80 p-2.5 text-bg">
              <ZoomIcon />
            </span>
          </div>
        </div>
      </div>

      {lightboxOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              aria-label="Tutup"
              className="absolute right-5 top-5 text-4xl leading-none text-white/80 transition hover:text-white"
            >
              &times;
            </button>
            <img
              src={src}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full rounded-sm object-contain shadow-2xl"
            />
          </div>,
          document.body
        )}
    </>
  );
}

function ZoomIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <circle cx="11" cy="11" r="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 8v6M8 11h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}