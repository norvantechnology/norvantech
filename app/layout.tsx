import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Norvan Technology | IT Solutions & Digital Transformation Experts',
  description:
    'Norvan Technology delivers cutting-edge IT solutions, including web development, cloud services, DevOps, AI, and digital marketing. Partner with us for scalable, secure, and innovative technology services.',
  keywords: [
    'IT solutions',
    'web development',
    'cloud services',
    'DevOps',
    'AI solutions',
    'digital marketing',
    'software development',
    'cybersecurity',
    'data analytics',
    'machine learning',
    'IT consulting',
    'enterprise solutions',
    'mobile app development',
    'e-commerce solutions',
    'UI/UX design',
    'IT infrastructure',
    'network solutions',
    'IT support',
    'technology consulting',
    'IT outsourcing',
    'business intelligence',
    'IT modernization',
    'digital transformation',
    'Node.js development',
    'React.js development',
    'Next.js development',
    'Python development',
  ],
  openGraph: {
    title: 'Norvan Technology | IT Solutions & Digital Transformation Experts',
    description:
      'Norvan Technology delivers cutting-edge IT solutions, including web development, cloud services, DevOps, AI, and digital marketing. Partner with us for scalable, secure, and innovative technology services.',
    url: 'https://norvantech.com',
    siteName: 'Norvan Technology',
    images: [
      {
        url: 'https://norvantech.com/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Norvan Technology - IT Solutions & Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Norvan Technology | IT Solutions & Digital Transformation Experts',
    description:
      'Norvan Technology delivers cutting-edge IT solutions, including web development, cloud services, DevOps, AI, and digital marketing. Partner with us for scalable, secure, and innovative technology services.',
    images: ['https://norvantech.com/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }, // Default
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.webp', // Apple devices
  },
  manifest: '/site.webmanifest',
  authors: [
    {
      name: 'Norvan Technology',
      url: 'https://norvantech.com',
    },
  ],
  metadataBase: new URL('https://norvantech.com'),
  alternates: {
    canonical: 'https://norvantech.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://norvantech.com" />
        <meta name="author" content="Norvan Technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="39.8;-98.6" />
        <meta name="ICBM" content="39.8, -98.6" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}