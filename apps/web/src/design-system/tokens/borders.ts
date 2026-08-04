export const borders = {
  width: {
    none: "0",
    thin: "1px",
    medium: "2px",
    thick: "3px",
  },

  radius: {
    none: "0",
    sm: "0.375rem",
    md: "0.625rem",
    lg: "1rem",
    xl: "1.5rem",
    pill: "9999px",
    circle: "50%",
  },
} as const;

export const borderRadius = borders.radius;

export type Borders = typeof borders;
export type BorderRadius = typeof borderRadius;