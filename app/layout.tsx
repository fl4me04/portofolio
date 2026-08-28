import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavigationBar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { me } from "@/content/me";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// A serif for headings. Inter everywhere reads corporate-neutral;
// pairing it with a warmer display face is the cheapest way to make
// the page feel written by someone rather than generated.
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: `${me.name} — ${me.role}`,
  description: me.metaDescription,
  openGraph: {
    title: `${me.name} — ${me.role}`,
    description: me.metaDescription,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-bg text-ink ${inter.variable} ${display.variable} font-sans`}
      >
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
