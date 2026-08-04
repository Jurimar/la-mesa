/**
 * Sombras suaves para transmitir profundidad sin romper
 * la sensación de calma de La Mesa.
 */

export const shadows = {
  none: "none",

  sm: "0 1px 2px rgba(13, 20, 36, 0.08)",

  md: "0 4px 12px rgba(13, 20, 36, 0.10)",

  lg: "0 12px 30px rgba(13, 20, 36, 0.14)",

  focus: "0 0 0 3px rgba(39, 174, 96, 0.28)",
} as const;

export type Shadows = typeof shadows;