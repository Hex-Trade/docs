import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DocsShell } from "@/components/DocsShell";
import { getSearchItems } from "@/lib/content";
import { getDiscordOnline } from "@/lib/discord";
import { site } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Hextrade Docs | Algorithmic Trading & TradingView Webhooks",
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "algorithmic trading",
    "TradingView webhook",
    "TradingView webhook automation",
    "futures algo trading",
    "HexTrade docs",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "Hextrade Docs | Algorithmic Trading & TradingView Webhooks",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hextrade Docs | Algorithmic Trading & TradingView Webhooks",
    description: site.description,
    creator: "@hextradeio",
  },
  icons: { icon: "/hex-logo.png" },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [searchItems, discordOnline] = [getSearchItems(), await getDiscordOnline()];

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.theme==='light')document.documentElement.classList.add('light')}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-bg font-sans text-text antialiased">
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HexTrade",
              url: "https://hextrade.io",
              sameAs: [site.url, "https://discord.gg/hextrade", "https://x.com/hextradeio"],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: site.name,
              url: site.url,
              publisher: { "@type": "Organization", name: "HexTrade" },
            },
          ]}
        />
        <DocsShell searchItems={searchItems} discordOnline={discordOnline}>
          {children}
        </DocsShell>
      </body>
    </html>
  );
}
