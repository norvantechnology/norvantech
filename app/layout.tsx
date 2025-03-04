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
  keywords: 'IT company, web development, Node.js, React.js, Next.js, Python, DevOps, Digital Marketing',
  openGraph: {
    title: 'Norvan Technology | IT Solutions & Services',
    description: 'Expert IT solutions with Node.js, React.js, Next.js, Python, DevOps, and Digital Marketing services.',
    url: 'https://norvantech.com',
    siteName: 'Norvan Technology',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
        width: 1200,
        height: 630,
        alt: 'Norvan Technology',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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