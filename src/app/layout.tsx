import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { SiteHeader } from "../components/site-header";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Plant of the Day",
  description: "One plant record. Three reader layers.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-ods-brand="oganiko" className={openSans.className}>
      <body>
        <SiteHeader />
        <main className="ods-container ods-section" data-space="spacious">
          {children}
        </main>
      </body>
    </html>
  );
}
