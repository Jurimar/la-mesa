/**
 * Sistema tipográfico oficial.
 *
 * La fuente principal utiliza una pila segura mientras
 * se integra definitivamente la tipografía del producto.
 */

export const typography = {
  fontFamily: {
    primary:
      '"Poppins", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fallback: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },

  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    "4xl": "2.5rem",
    "5xl": "3rem",
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },

  letterSpacing: {
    tight: "-0.02em",
    normal: "0",
    wide: "0.04em",
  },
} as const;

export type Typography = typeof typography;