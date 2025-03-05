import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Norvan Technology | IT Solutions & Services',
  description: 'Norvan Technology provides expert IT solutions with Node.js, React.js, Next.js, Python, DevOps, and Digital Marketing services.',
  keywords: [
    'IT company', 
    'web development', 
    'Node.js', 
    'React.js', 
    'Next.js', 
    'Python', 
    'DevOps', 
    'Digital Marketing', 
    'IT solutions', 
    'software development', 
    'cloud services', 
    'cybersecurity', 
    'data analytics', 
    'AI solutions', 
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
    'digital transformation'
  ],
  openGraph: {
    title: 'Norvan Technology | IT Solutions & Services',
    description: 'Expert IT solutions with Node.js, React.js, Next.js, Python, DevOps, and Digital Marketing services.',
    url: 'https://norvantech.com',
    siteName: 'Norvan Technology',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Norvan Technology',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Norvan Technology | IT Solutions & Services',
    description: 'Expert IT solutions with Node.js, React.js, Next.js, Python, DevOps, and Digital Marketing services.',
    images: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'],
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
      { url: "/favicon.ico", sizes: "any" }, // Default
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png", // Apple devices
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://norvantech.com" />
        <meta name="author" content="Norvan Technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
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