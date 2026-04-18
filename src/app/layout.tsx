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
  title: "Aspire Interiors | AI-Powered Interior Design",
  description: "Transform your space with AI. Upload a photo, choose your style, and see your room redesigned in seconds. The future of interior design is here.",
  keywords: ["interior design", "AI design", "media wall", "room design app", "home renovation", "luxury interiors"],
  openGraph: {
    title: "Aspire Interiors | AI-Powered Interior Design",
    description: "Transform your space with AI. Upload a photo and see your room redesigned in seconds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">{children}</body>
    </html>
  );
}
