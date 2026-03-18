import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Bess Damm | SEO & Programming Agency London",
    template: "%s | Bess Damm",
  },
  description:
    "London-based SEO and programming agency. We build fast, search-optimised websites and tools that grow your business.",
  keywords: ["SEO agency London", "web development London", "SEO services", "programming agency"],
  metadataBase: new URL("https://bessdamm.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://bessdamm.com",
    siteName: "Bess Damm",
    title: "Bess Damm | SEO & Programming Agency London",
    description:
      "London-based SEO and programming agency. We build fast, search-optimised websites and tools that grow your business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bess Damm | SEO & Programming Agency London",
    description:
      "London-based SEO and programming agency. We build fast, search-optimised websites and tools that grow your business.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
