import type { Metadata, Viewport } from "next";
import { Noto_Serif_Display } from "next/font/google";
import localFont from "next/font/local";
import { Cursor } from "@/components/layout/Cursor";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Preloader } from "@/components/layout/Preloader";
import { RouteCurtain } from "@/components/layout/RouteCurtain";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { site } from "@/content/site";
import "./globals.css";

const display = Noto_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "./fonts/Satoshi-Variable.woff2", weight: "300 900", style: "normal" },
    { path: "./fonts/Satoshi-VariableItalic.woff2", weight: "300 900", style: "italic" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.legalName,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: "/media/hero-leaf.webp", width: 1280, height: 720, alt: "A dew-covered leaf in warm light" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1e19",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${satoshi.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only z-[200] rounded-full bg-ink px-5 py-3 text-sm text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
        <Preloader />
        <RouteCurtain />
        <Cursor />
      </body>
    </html>
  );
}
