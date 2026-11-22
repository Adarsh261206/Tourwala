export type LenisLike = {
  stop: () => void;
  start: () => void;
  raf: (time: number) => void;
  destroy: () => void;
  on: (event: string, callback: () => void) => void;
  scrollTo: (
    target: string | HTMLElement | number,
    options?: { offset?: number; duration?: number },
  ) => void;
};

let lenis: LenisLike | null = null;

export function registerLenis(instance: LenisLike | null) {
  lenis = instance;
}

export function pauseScroll() {
  if (typeof document === "undefined") return;
  lenis?.stop();
  document.body.style.overflow = "hidden";
}

export function resumeScroll() {
  if (typeof document === "undefined") return;
  lenis?.start();
  document.body.style.overflow = "";
}

export function scrollToSection(target: string, offset = -72) {
  if (typeof document === "undefined") return;
  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.25 });
    return;
  }
  document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
