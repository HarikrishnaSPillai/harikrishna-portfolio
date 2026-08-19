import type { Metadata } from "next";
import { Inter, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { EReaderProvider } from "@/context/EReaderContext";
import EReaderShell from "@/components/EReaderShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Harikrishna Sureshkumar Pillai | E-Reader Portfolio",
  description: "Senior Business Systems Analyst specializing in AI & Data Platform Readiness, SQL Analysis, and Scalable Enterprise Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceSerif.variable} ${ibmPlexMono.variable} antialiased`}>
        <EReaderProvider>
          <EReaderShell>
            {children}
          </EReaderShell>
        </EReaderProvider>
      </body>
    </html>
  );
}
