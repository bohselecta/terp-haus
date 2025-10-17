import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terp Haus - Premium THCA Dispensary | Austin, Texas",
  description: "Premium THCA dispensary in Austin, Texas. Crafted products, real terpene science. Lab-tested hemp-derived products with expert guidance.",
  keywords: ["THCA", "hemp", "dispensary", "Austin", "Texas", "terpenes", "cannabis", "CBD"],
  authors: [{ name: "Terp Haus" }],
  creator: "Terp Haus",
  publisher: "Terp Haus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Terp Haus - Premium THCA Dispensary",
    description: "Premium THCA dispensary in Austin, Texas. Crafted products, real terpene science.",
    url: '/',
    siteName: 'Terp Haus',
    images: [
      {
        url: '/images/og/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Terp Haus - Premium THCA Dispensary',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Terp Haus - Premium THCA Dispensary",
    description: "Premium THCA dispensary in Austin, Texas. Crafted products, real terpene science.",
    images: ['/images/og/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
