import type { NextConfig } from "next";

const algorithmFamilies = [
  "raptor",
  "blaze",
  "spark",
  "core",
  "volt",
  "strike",
  "flux",
  "bro",
  "pag",
  "don",
  "gray",
  "surge",
  "pulse",
  "beast",
  "pow",
  "vix",
  "bliss",
  "helix",
  "vex",
  "alpha",
  "lzma",
  "markov",
  "dyr",
  "bix",
  "rse",
  "marcon",
  "lon",
  "nox",
  "ms",
];

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      { source: "/getting-started", destination: "/quick-start", permanent: true },
      { source: "/get-started/:path*", destination: "/quick-start", permanent: true },
      { source: "/supported-brokers", destination: "/brokers", permanent: true },
      { source: "/algorithms/overview", destination: "/algorithms", permanent: true },
      { source: "/algos", destination: "/algorithms", permanent: true },
      { source: "/futures-cfds", destination: "/futures", permanent: true },
      { source: "/copy-trade", destination: "/copy-trading", permanent: true },
      { source: "/copy-trading/setup", destination: "/copy-trading", permanent: true },
      { source: "/external-algorithms/tradingview-webhooks", destination: "/webhooks", permanent: true },
      { source: "/automated-trading/trading-accounts", destination: "/accounts", permanent: true },
      { source: "/automated-trading/finding-algorithm", destination: "/algorithms", permanent: true },
      { source: "/automated-trading/trading-analytics", destination: "/analytics", permanent: true },
      { source: "/chart-settings", destination: "/trading", permanent: true },
      { source: "/other-features/discord", destination: "/discord", permanent: true },
      { source: "/other-features/economic-calendar", destination: "/calendar", permanent: true },
      { source: "/other-features/coming-soon", destination: "/", permanent: true },
      { source: "/portfolio/:path+", destination: "/portfolio", permanent: true },
      ...algorithmFamilies.map((family) => ({
        source: `/algorithms/${family}`,
        destination: `/algorithms?family=${family}`,
        permanent: true as const,
      })),
    ];
  },
};

export default nextConfig;
