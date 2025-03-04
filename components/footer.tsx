import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-sky-500 flex items-center justify-center">
                <span className="text-white font-bold">NT</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Norvan Technology</span>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Providing innovative IT solutions and services to help businesses thrive in the digital era.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Blog', href: '/blog' },
                { name: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-600 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-sky-500 mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                  123 Tech Street, Innovation City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-sky-500 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-sky-500 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                  info@norvantech.com
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Subscribe to our newsletter</h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Stay updated with our latest news and offers.
            </p>
            <form className="mt-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-full"
                  required
                />
                <Button type="submit" className="rounded-full bg-sky-500 hover:bg-sky-600 text-white">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Norvan Technology. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-xs text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}