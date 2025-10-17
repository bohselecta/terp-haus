import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
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
  icons: {
    icon: [
      { url: '/images/favicons_terphaus/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicons_terphaus/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicons_terphaus/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/images/favicons_terphaus/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/images/favicons_terphaus/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/favicons_terphaus/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/images/favicons_terphaus/site.webmanifest',
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
      <body className="min-h-screen text-[#1B1B1B] font-body antialiased">
        {children}
        <footer className="mt-24 py-10 text-center text-sm bg-black text-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col items-center gap-4 mb-6">
              <Image 
                src="/images/terp-haus-logo.svg" 
                alt="Terp Haus" 
                width={200} 
                height={90} 
                className="h-12 w-auto opacity-60"
              />
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-center md:gap-6">
              <Link href="/" className="underline text-white">Home</Link>
              <a href="https://terphaus.dispensary.shop" className="underline text-white" target="_blank">Shop Online (Flowhub)</a>
              <a href="https://www.google.com/maps/dir/?api=1&destination=11525+Menchaca+Road+%23104,+Austin,+TX+78748" className="underline text-white" target="_blank">Directions</a>
              <a href="mailto:terphaustx@outlook.com" className="underline text-white">Contact</a>
            </div>
            <div className="mt-4 text-white text-sm">
              <p>11525 Menchaca Road, #104 • Austin, TX 78748</p>
              <p>(512) 551-9016 • terphaustx@outlook.com</p>
              <p className="mt-2">© {new Date().getFullYear()} Terp Haus</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
