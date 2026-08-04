/**
 * Paleta oficial de La Mesa.
 *
 * Ningún componente debe declarar colores directamente.
 * Todos los colores visuales deben provenir de estos tokens.
 */

export const colors = {
  brand: {
    inkDeep: "#0D1424",
    inkMedium: "#16203A",
    parchment: "#A67C52",
    waxGold: "#D4B483",
    ivory: "#E9D8B7",
    courtRed: "#C0392B",
    tableGreen: "#27AE60",
    paper: "#F4F1EA",
  },

  background: {
    primary: "#F4F1EA",
    secondary: "#E9D8B7",
    inverse: "#0D1424",
    elevated: "#FFFFFF",
  },

  text: {
    primary: "#0D1424",
    secondary: "#16203A",
    muted: "#6B6F79",
    inverse: "#F4F1EA",
    accent: "#A67C52",
  },

  action: {
    primary: "#27AE60",
    primaryHover: "#219150",
    primaryPressed: "#1B7842",

    secondary: "#D4B483",
    secondaryHover: "#C4A473",
    secondaryPressed: "#AE8E5F",

    danger: "#C0392B",
    dangerHover: "#A93226",
    dangerPressed: "#922B21",
  },

  border: {
    subtle: "#DDD7CC",
    default: "#C9C1B4",
    strong: "#A67C52",
    focus: "#27AE60",
  },

  feedback: {
    success: "#27AE60",
    warning: "#D4B483",
    error: "#C0392B",
    info: "#3D6FA8",
  },

  overlay: {
    soft: "rgba(13, 20, 36, 0.24)",
    medium: "rgba(13, 20, 36, 0.48)",
    strong: "rgba(13, 20, 36, 0.72)",
  },

  transparent: "transparent",
  white: "#FFFFFF",
  black: "#000000",
} as const;

export type Colors = typeof colors;