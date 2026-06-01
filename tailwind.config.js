/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        // ── Kept for CSS-var compatibility ──
        background: "var(--background)",
        foreground: "var(--foreground)",

        // ── Primary Palette ────────────────────────────────────────
        navy:   "#1A2B48",
        steel:  "#5E7A9E",
        slate:  "#F4F7FA",

        // ── Accent Colors ──────────────────────────────────────────
        golden: "#E6C280",
        green:  "#76C043",

        // ── Category Colors ────────────────────────────────────────
        proof:    "#F9D08B",
        practice: "#A3D9C9",
        purpose:  "#C9BFE3",
      },
    },
  },
  plugins: [],
};
