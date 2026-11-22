import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { easeInOutQuart, easeOutExpo } from "@/lib/easing";
import { pauseScroll, resumeScroll } from "@/lib/scroll";
import { Brand } from "./Brand";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<SVGGElement>(null);

  useEffect(() => {
    let cancelled = false;
    let frame = 0;
    let leaveTimer: ReturnType<typeof setTimeout> | undefined;

    pauseScroll();
    const start = performance.now();
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 350 : 1600;
    const path = pathRef.current;
    const plane = planeRef.current;
    const pathLength = path?.getTotalLength() ?? 0;

    const movePlane = (fraction: number) => {
      if (!path || !plane || !pathLength) return;
      const distance = Math.max(0, Math.min(pathLength, pathLength * fraction));
      const point = path.getPointAtLength(distance);
      const ahead = path.getPointAtLength(Math.min(pathLength, distance + 2));
      const behind = path.getPointAtLength(Math.max(0, distance - 2));
      const angle = (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI;
      plane.setAttribute(
        "transform",
        `translate(${point.x.toFixed(2)} ${point.y.toFixed(2)}) rotate(${(angle + 90).toFixed(2)})`,
      );
    };

    const tick = (now: number) => {
      if (cancelled) return;
      const value = Math.max(0, Math.min(1, (now - start) / duration));
      const eased = 1 - Math.pow(1 - value, 3);
      movePlane(eased);
      setProgress(Math.round(eased * 100));
      if (value < 1) {
        frame = requestAnimationFrame(tick);
        return;
      }
      leaveTimer = setTimeout(() => {
        if (cancelled) return;
        resumeScroll();
        setVisible(false);
      }, 260);
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      if (leaveTimer) clearTimeout(leaveTimer);
      resumeScroll();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col overflow-hidden bg-maroon-deep text-ivory will-change-transform"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: easeInOutQuart }}
          aria-label="Loading Tourwala Travels"
          aria-busy="true"
        >
          <div className="jaali pointer-events-none absolute inset-0 opacity-[0.13]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(232,117,42,0.18),transparent_58%)]" />

          <div className="relative flex flex-1 flex-col items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: easeOutExpo }}
            >
              <Brand tone="light" size="lg" />
            </motion.div>

            <div className="mt-10 h-px w-[min(22rem,72vw)] overflow-hidden bg-ivory/15">
              <motion.div
                className="h-full bg-gradient-to-r from-gold via-saffron to-gold-soft"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
            <div className="mt-4 flex w-[min(22rem,72vw)] items-center justify-between">
              <span className="eyebrow text-ivory/45">Preparing your journey</span>
              <span className="font-display text-lg tabular-nums text-gold-soft">{progress}%</span>
            </div>

            <div className="relative mt-12 h-[4.5rem] w-[min(19rem,72vw)]" aria-hidden="true">
              <svg viewBox="0 0 320 72" className="absolute inset-0 h-full w-full overflow-visible">
                <path
                  ref={pathRef}
                  d="M8 56C72 6 148 4 204 30c38 18 74 22 106 8"
                  fill="none"
                  stroke="var(--gold)"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                  strokeDasharray="3 6"
                />
                <circle cx="8" cy="56" r="2.5" fill="var(--saffron)" />
                <circle cx="310" cy="38" r="2.5" fill="var(--gold)" />
                <g ref={planeRef} className="text-saffron" transform="translate(8 56) rotate(52)">
                  <g transform="scale(0.95)">
                    <g transform="translate(-12 -12)">
                      <path
                        d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16Z"
                        fill="currentColor"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div className="relative flex items-end justify-between px-6 pb-8 sm:px-10">
            <p className="text-xs uppercase tracking-[0.28em] text-ivory/35">
              Thane · Mumbai · India
            </p>
            <p className="text-xs uppercase tracking-[0.28em] text-ivory/35">
              Domestic &amp; International
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
