/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Kept for CSS-var compatibility (layout.js uses these) ──
        background: "var(--background)",
        foreground: "var(--foreground)",

        // ── Primary Palette ────────────────────────────────────────
        // Usage: text-navy, bg-navy, border-navy
        navy: "#1A2B48",

        // Usage: bg-steel, text-steel
        steel: "#5E7A9E",

        // Usage: bg-slate, text-slate  (section backgrounds)
        slate: "#F4F7FA",

        // ── Accent Colors ──────────────────────────────────────────
        // Usage: bg-golden, text-golden  (primary CTAs, highlights)
        golden: "#E6C280",

        // Usage: bg-green, text-green  (icons, wellness accents)
        green: "#76C043",

        // ── Category Colors ────────────────────────────────────────
        // Usage: bg-proof, text-proof
        proof: "#F9D08B",

        // Usage: bg-practice, text-practice
        practice: "#A3D9C9",

        // Usage: bg-purpose, text-purpose
        purpose: "#C9BFE3",
      },
    },
  },
  plugins: [],
};
