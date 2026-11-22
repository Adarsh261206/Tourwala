export async function loadGsap() {
  const gsapModule = await import("gsap");
  const triggerModule = await import("gsap/ScrollTrigger");
  const gsap = gsapModule.gsap ?? gsapModule.default;
  const ScrollTrigger = triggerModule.ScrollTrigger ?? triggerModule.default;
  gsap.registerPlugin(ScrollTrigger);
  return { gsap, ScrollTrigger };
}
