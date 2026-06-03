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
        navy:   "#1A2B4A",   // updated to user's confirmed dark blue
        steel:  "#5B7BA8",   // updated to user's confirmed slate blue
        slate:  "#F4F7FA",

        // ── Light theme ────────────────────────────────────────────
        cream:  "#F9F8F5",   // off-white page background (light pages)
        ink:    "#1A2B4A",   // same as navy — explicit alias for light-bg text

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
