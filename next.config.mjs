/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ── Source tracking ──────────────────────────────────────────────────
      { source: "/reddit",       destination: "/", permanent: false },

      // ── Legacy slug redirects ────────────────────────────────────────────
      { source: "/restarter",    destination: "/r-4291",  permanent: true },
      { source: "/reader",       destination: "/rd-7134", permanent: true },
      { source: "/optimizer",    destination: "/op-5820", permanent: true },
      { source: "/seeker",       destination: "/sk-3967", permanent: true },
      { source: "/burner",       destination: "/br-6412", permanent: true },
      { source: "/believer",     destination: "/bl-9053", permanent: true },
      { source: "/devoted",      destination: "/dv-2748", permanent: true },
      { source: "/practitioner", destination: "/pr-8361", permanent: true },
    ];
  },
};

export default nextConfig;
