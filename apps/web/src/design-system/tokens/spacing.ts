/**
 * Escala oficial de espaciado de La Mesa.
 *
 * Todos los márgenes, rellenos y separaciones deben utilizar
 * estos tokens. No se deben escribir valores arbitrarios
 * directamente dentro de los componentes.
 */

export const spacing = {
  none: "0",
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6rem",
} as const;

export type Spacing = typeof spacing;
export type SpacingToken = keyof typeof spacing;