import { useEffect, useRef, useState } from "react";

const SCRIPT = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "dewangga — full-stack developer" },
  { type: "cmd", text: "cat layanan.txt" },
  { type: "out", text: "website bisnis, sistem operasional, integrasi" },
  { type: "cmd", text: "./deploy.sh toko-rasa" },
  { type: "out", text: "build selesai ✓" },
  { type: "out", text: "live → toko-rasa.vercel.app" },
];

export default function Terminal() {
  const [lines, setLines] = useState([]);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setLines(SCRIPT);
      setDone(true);
      return;
    }

    let step = 0;
    let cancelled = false;

    const runStep = () => {
      if (cancelled || step >= SCRIPT.length) {
        setDone(true);
        return;
      }
      const current = SCRIPT[step];

      if (current.type === "out") {
        setLines((prev) => [...prev, current]);
        step += 1;
        setTimeout(runStep, 260);
        return;
      }

      // typewriter for command lines
      let i = 0;
      setTyped("");
      const typeChar = () => {
        if (cancelled) return;
        if (i <= current.text.length) {
          setTyped(current.text.slice(0, i));
          i += 1;
          setTimeout(typeChar, 32);
        } else {
          setLines((prev) => [...prev, current]);
          setTyped("");
          step += 1;
          setTimeout(runStep, 200);
        }
      };
      typeChar();
    };

    const startTimer = setTimeout(runStep, 500);
    return () => {
      cancelled = true;
      clearTimeout(startTimer);
    };
  }, []);

  const isTypingCmd = !done && typed !== "";

  return (
    <div className="w-full max-w-md rounded-md border border-deep bg-panel shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
      <div className="flex items-center gap-2 border-b border-deep px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-mist/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-mist/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-mist/30" />
        <span className="ml-2 text-xs text-mist/60">dewangga@portofolio ~ </span>
      </div>
      <div className="min-h-[220px] px-4 py-4 text-sm leading-relaxed">
        {lines.map((line, idx) =>
          line.type === "cmd" ? (
            <div key={idx} className="flex gap-2">
              <span className="text-cyan">$</span>
              <span className="text-paper">{line.text}</span>
            </div>
          ) : (
            <div key={idx} className="pl-4 text-mist/70">
              {line.text}
            </div>
          )
        )}
        {isTypingCmd && (
          <div className="flex gap-2">
            <span className="text-cyan">$</span>
            <span className="text-paper">{typed}</span>
            <span className="inline-block h-4 w-[7px] translate-y-[2px] animate-caret bg-cyan" />
          </div>
        )}
        {done && (
          <div className="flex gap-2">
            <span className="text-cyan">$</span>
            <span className="inline-block h-4 w-[7px] translate-y-[2px] animate-caret bg-cyan" />
          </div>
        )}
      </div>
    </div>
  );
}
