/**
 * Tokens de Diseño: Minimalismo y Estilo Editorial inspirado en Sitios Web de Apple (apple.com) & Apple HIG
 */

export const ApplePalette = {
  // Light Canvas (apple.com diurno)
  light: {
    canvas: "#FFFFFF",
    surfacePrimary: "#F5F5F7",
    surfaceSecondary: "#FBFBFD",
    surfaceTranslucent: "rgba(255, 255, 255, 0.8)",
    borderHairline: "rgba(0, 0, 0, 0.06)",
    textPrimary: "#1D1D1F",
    textSecondary: "#86868B",
    textTertiary: "#A1A1A6",
    accent: "#0071E3",
    accentHover: "#0077ED",
    success: "#34C759",
    warning: "#FF9500",
    destructive: "#FF3B30",
  },
  // Dark Canvas (Apple Pro / OLED profundo)
  dark: {
    canvas: "#000000",
    surfacePrimary: "#161617",
    surfaceSecondary: "#1D1D1F",
    surfaceTranslucent: "rgba(22, 22, 23, 0.8)",
    borderHairline: "rgba(255, 255, 255, 0.12)",
    textPrimary: "#F5F5F7",
    textSecondary: "#86868B",
    textTertiary: "#6E6E73",
    accent: "#2997FF",
    accentHover: "#0071E3",
    success: "#30D158",
    warning: "#FF9F0A",
    destructive: "#FF453A",
  },
};

export const Typography = {
  fontFamilies: {
    display: "SF Pro Display",
    text: "SF Pro Text",
    mono: "SF Mono",
  },
  editorialScale: {
    hero: { fontSize: 48, lineHeight: 54, letterSpacing: -1.2, fontWeight: "700" as const },
    largeTitle: { fontSize: 34, lineHeight: 41, letterSpacing: -0.7, fontWeight: "700" as const },
    title1: { fontSize: 28, lineHeight: 34, letterSpacing: -0.4, fontWeight: "600" as const },
    headline: { fontSize: 17, lineHeight: 22, letterSpacing: -0.4, fontWeight: "600" as const },
    body: { fontSize: 17, lineHeight: 24, letterSpacing: -0.4, fontWeight: "400" as const },
    callout: { fontSize: 15, lineHeight: 20, letterSpacing: -0.2, fontWeight: "400" as const },
    footnote: { fontSize: 13, lineHeight: 18, letterSpacing: -0.1, fontWeight: "400" as const },
    eyebrow: { fontSize: 11, lineHeight: 14, letterSpacing: 0.9, fontWeight: "700" as const, textTransform: "uppercase" as const },
  },
};

export const Radii = {
  pill: 980,          // Botones en píldora estilo Apple (apple.com CTAs)
  squircleLarge: 28,  // Tarjetas Bento Grid
  squircleMedium: 20, // Modales y Bottom Sheets
  squircleSmall: 12,  // Inputs y chips
};

export const Motion = {
  appleEase: "cubic-bezier(0.16, 1, 0.3, 1)",
  springConfig: {
    damping: 18,
    stiffness: 120,
    mass: 0.9,
  },
};
