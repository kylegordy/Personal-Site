/**
 * Motion animation presets
 * Reusable animation configurations to avoid repetition
 */

const easeOut = [0, 0, 0.58, 1];

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  inView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut },
  viewportAmount: 0.05,
};

export const fadeInUpDelayed = {
  initial: { opacity: 0, y: 20 },
  inView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.2, ease: easeOut },
  viewportAmount: 0.05,
};
