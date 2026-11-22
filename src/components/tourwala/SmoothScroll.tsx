import { useEffect } from "react";
import { registerLenis, type LenisLike } from "@/lib/scroll";

type GsapLike = {
  ticker: {
    add: (fn: (time: number) => void) => void;
    remove: (fn: (time: number) => void) => void;
    lagSmoothing: (value: number) => void;
  };
};

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let destroyed = false;
    let instance: LenisLike | null = null;
    let gsapRef: GsapLike | null = null;
    let tick: ((time: number) => void) | null = null;
    let removeAnchor: (() => void) | null = null;

    Promise.all([import("lenis"), import("gsap"), import("gsap/ScrollTrigger")])
      .then(([lenisModule, gsapModule, triggerModule]) => {
        if (destroyed) return;
        const Lenis = lenisModule.default;
        const gsap = gsapModule.gsap ?? gsapModule.default;
        const ScrollTrigger = triggerModule.ScrollTrigger ?? triggerModule.default;
        gsap.registerPlugin(ScrollTrigger);

        instance = new Lenis({
          duration: 1.15,
          lerp: 0.09,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.6,
        }) as unknown as LenisLike;

        registerLenis(instance);
        instance.on("scroll", ScrollTrigger.update);

        gsapRef = gsap as unknown as GsapLike;
        tick = (time: number) => instance?.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        const onAnchorClick = (event: MouseEvent) => {
          const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
            'a[href^="#"]',
          );
          if (!anchor) return;
          const hash = anchor.getAttribute("href");
          if (!hash || hash === "#") return;
          const element = document.querySelector(hash);
          if (!element) return;
          event.preventDefault();
          instance?.scrollTo(element as HTMLElement, { offset: -84, duration: 1.25 });
        };

        document.addEventListener("click", onAnchorClick);
        removeAnchor = () => document.removeEventListener("click", onAnchorClick);
      })
      .catch(() => {
        registerLenis(null);
      });

    return () => {
      destroyed = true;
      removeAnchor?.();
      if (tick && gsapRef) gsapRef.ticker.remove(tick);
      registerLenis(null);
      instance?.destroy();
    };
  }, []);

  return null;
}
