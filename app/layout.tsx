import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavigationBar";
import Footer from "@/components/Footer";
import { me } from "@/content/me";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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

// Stated explicitly rather than left to the framework default: the
// theme colour tints the browser chrome on a phone, and no scale limit is
// set so the page stays pinch-zoomable.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0b0a",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
