import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: 'ONLINEAJAO — Digital Experiences for Growing Businesses',
  description:
    'ONLINEAJAO builds websites, Google Business profiles and digital experiences that help growing businesses become more visible, credible and discoverable online.',
  keywords: [
    'ONLINEAJAO',
    'Website Design',
    'Google Business Profile',
    'SEO',
    'Social Media',
    'Digital Growth',
    'Agency Jaipur',
    'Next.js Website Development',
  ],
  authors: [
    { name: 'Deepanshu Jangid' },
    { name: 'Nitin Kumar' },
  ],
  creator: 'ONLINEAJAO',
  metadataBase: new URL('https://onlineajao.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ONLINEAJAO — Digital Experiences for Growing Businesses',
    description:
      'We design websites and digital systems that help businesses look credible, get discovered, and grow online.',
    url: 'https://onlineajao.com',
    siteName: 'ONLINEAJAO',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/brand/mockup-website.jpg',
        width: 1200,
        height: 630,
        alt: 'ONLINEAJAO — Digital Experiences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ONLINEAJAO — Digital Experiences for Growing Businesses',
    description:
      'We design websites and digital systems that help businesses look credible, get discovered, and grow online.',
    images: ['/brand/mockup-website.jpg'],
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFDF7',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#FFFDF7] text-[#0D0F10] font-sans antialiased selection:bg-[#E3DAB3] selection:text-[#0D0F10]">
        {children}
      </body>
    </html>
  );
}
