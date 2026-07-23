import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sparkles, ArrowRight, X, Clock } from "lucide-react";

function useCountdown() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date();
      end.setHours(23, 59, 59, 999);
      const diff = end.getTime() - now.getTime();
      const h = Math.floor(diff / 3.6e6);
      const m = Math.floor((diff % 3.6e6) / 6e4);
      const s = Math.floor((diff % 6e4) / 1000);
      setTime(
        `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function AnnouncementBar() {
  const [hidden, setHidden] = useState(false);
  const time = useCountdown();
  if (hidden) return null;

  return (
    <div className="relative z-50 overflow-hidden border-b border-red-600/60 bg-gradient-to-r from-black via-red-700 to-black text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_50%,rgba(239,68,68,0.55),transparent_45%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.15),transparent_45%)]"
      />
      <div className="container-tg relative flex min-h-11 flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 pr-8 text-center text-[13px] font-bold drop-shadow">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-white ring-1 ring-white/40">
          <Sparkles className="h-3.5 w-3.5" />
          Today only
        </span>
        <span className="hidden sm:inline text-white">
          Flat <b className="text-white">40% OFF</b> on all STEM programs +
        </span>
        <span className="sm:hidden text-white">
          <b>40% OFF</b> all programs +
        </span>
        <span className="font-bold text-white">Free 1:1 mentor session</span>
        <span className="inline-flex items-center gap-1 rounded-md bg-black px-2 py-0.5 font-mono text-[12px] font-bold tabular-nums text-red-400 ring-1 ring-red-500/60">
          <Clock className="h-3 w-3" />
          {time}
        </span>
        <Link
          to="/programs"
          className="group inline-flex items-center gap-1 rounded-md bg-red-600 px-2.5 py-1 text-[12px] font-extrabold text-white shadow-sm ring-1 ring-white/30 transition hover:bg-red-500 hover:shadow-md"
        >
          Claim offer
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <button
          onClick={() => setHidden(true)}
          aria-label="Dismiss announcement"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

