import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800'],
  style: ['italic'],
  variable: '--font-barlow',
})
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PCX Computación",
  description: "Reparación, mantenimiento y venta de equipos y periféricos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${barlow.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
} 