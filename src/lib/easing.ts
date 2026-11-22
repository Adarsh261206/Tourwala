import { cubicBezier } from "motion/react";

/**
 * Shared cinematic easing curves.
 * Motion v13 misreads inline 4-number arrays as keyframe offsets, so curves are
 * always built through cubicBezier() and shared from here.
 */
export const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);
export const easeInOutQuart = cubicBezier(0.76, 0, 0.24, 1);
