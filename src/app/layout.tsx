import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://progressiive-web-app.vercel.app/"),

  title: {
    default: "Clover",
    template: "%s | VibeTraders",
  },

  description:
      "A modern investing & stock tracking app. Track markets, follow trends, and invest smarter — with good vibes only.",

  applicationName: "VibeTraders",
  generator: "Next.js",
  manifest: "/manifest.json",

  keywords: [
    "VibeTraders",
    "stocks",
    "investing",
    "finance",
    "portfolio tracker",
    "market analysis",
    "trading tools",
    "investor social app",
    "crypto & stocks",
  ],

  authors: [
    {
      name: "Tyreek Kinyanjui",
      url: "https://tyreek-kinyanjui.onrender.com/",
    },
  ],

  creator: "VibeTraders",
  publisher: "VibeTraders",

  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/icons/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/icons/android-chrome-192x192.png",
        color: "#4f46e5"
      }
    ],
  },

  openGraph: {
    type: "website",
    url: "https://vibetraders.app",
    title: "VibeTraders — Trade & Invest with Ease",
    description:
        "A clean, simple, and powerful investing platform. Analyze charts, track portfolios, and make smarter financial decisions.",
    siteName: "VibeTraders",
    images: [
      {
        url: "https://vibetraders.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "VibeTraders — Social Investing & Market Insight"
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VibeTraders — Trade & Invest with Ease",
    description: "Track markets and invest smarter.",
    images: ["https://vibetraders.app/og-image.png"],
    creator: "@vibetraders"
  },

  category: "finance",
  alternates: { canonical: "https://vibetraders.app/" },

  appleWebApp: {
    capable: true,
    title: "VibeTraders",
    statusBarStyle: "black-translucent"
  },

  formatDetection: { telephone: false }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
