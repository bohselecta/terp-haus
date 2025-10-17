
// tailwind.brand.ts — drop this into tailwind.config.ts (merge with existing config)
export const theme = {
  extend: {
    colors: {
      brand: {
        primary: "#1E7A83",
        secondary: "#6C8C74",
        accent: "#B4643E",
        mustard: "#D59B2D",
        aubergine: "#6A3D57",
        olive: "#6E7F3B",
        ink: "#1B1B1B",
        paper: "#F6F3EE",
        gold: "#C6A564",
      }
    },
    fontFamily: {
      display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
      body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
    }
  }
};
