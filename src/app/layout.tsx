import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";
import PageNav from "@/components/layout/PageNav";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { withBase } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OJ Adeyemi | ePortfolio",
  description:
    "OJ Adeyemi's ePortfolio: computer science student at York University.",
  metadataBase: new URL("https://ojadeyemi.github.io/"),
  icons: {
    icon: [
      {
        url: withBase("/favicon-16x16.png"),
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: withBase("/favicon-32x32.png"),
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: withBase("/apple-touch-icon.png"),
  },
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-background font-sans antialiased">
            <Navbar />
            <div className="mx-auto max-w-3xl px-6 pb-8">
              {children}
              <PageNav />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
