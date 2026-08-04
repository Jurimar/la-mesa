/**
 * Tokens de movimiento reutilizables.
 *
 * Toda animación debe respetar prefers-reduced-motion
 * desde la hoja de estilos o desde el componente que la utilice.
 */

export const motion = {
  duration: {
    instant: "0ms",
    fast: "120ms",
    normal: "200ms",
    slow: "320ms",
  },

  easing: {
    standard: "ease",
    enter: "cubic-bezier(0.16, 1, 0.3, 1)",
    exit: "cubic-bezier(0.4, 0, 1, 1)",
  },
} as const;

export type Motion = typeof motion;