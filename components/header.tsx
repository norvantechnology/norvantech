'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Set to true when scroll position is more than 20px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4 lg:px-6" aria-label="Global">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-[#0069BF] flex items-center justify-center mr-2">
            <span className="text-white font-bold text-sm">NT</span>
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white">Norvan Technology</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors',
                pathname === item.href
                  ? 'text-[#0069BF]' // Active link color in both light and dark mode
                  : theme === 'dark'
                  ? 'text-white hover:text-[#0069BF]' // White text for unselected links in dark mode
                  : scrolled
                  ? 'text-[#333333] hover:text-[#0069BF]' // Normal link color when sticky in light mode
                  : 'text-black hover:text-[#0069BF]' // Normal link color when not sticky in light mode
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button className="bg-[#0069BF] hover:bg-[#0058a4] text-white rounded-md">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Mobile Menu Content */}
            <div className="fixed inset-y-0 right-0 w-full max-w-[300px] bg-white dark:bg-gray-900 shadow-lg p-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-[#0069BF] flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-sm">NT</span>
                  </div>
                  <span className="text-lg font-bold">Norvan Technology</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'block py-2 text-base font-medium',
                      pathname === item.href
                        ? 'text-[#0069BF] dark:text-[#0069BF]' // Active link color in mobile menu
                        : theme === 'dark'
                        ? 'text-white hover:text-[#0069BF]' // Unselected links in dark mode (mobile)
                        : 'text-gray-700 dark:text-gray-200 hover:text-[#0069BF]' // Unselected links in light mode (mobile)
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex justify-between items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                </Button>
                <Button className="bg-[#0069BF] hover:bg-[#0058a4] text-white rounded-md">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}