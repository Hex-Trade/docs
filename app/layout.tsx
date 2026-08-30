import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DocsShell } from "@/components/DocsShell";
import { getSearchItems } from "@/lib/content";
import { getDiscordOnline } from "@/lib/discord";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
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
        <DocsShell searchItems={searchItems} discordOnline={discordOnline}>
          {children}
        </DocsShell>
      </body>
    </html>
  );
}
