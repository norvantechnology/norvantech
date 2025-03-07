'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import logo from "@/public/logo.png"; // Import logo image
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      href: '#',
      name: 'Facebook',
      hoverColor: 'hover:text-[#0069BF]'
    },
    {
      icon: Twitter,
      href: '#',
      name: 'Twitter',
      hoverColor: 'hover:text-[#0069BF]'
    },
    {
      icon: Instagram,
      href: '#',
      name: 'Instagram',
      hoverColor: 'hover:text-[#0069BF]'
    },
    {
      icon: Linkedin,
      href: '#',
      name: 'LinkedIn',
      hoverColor: 'hover:text-[#0069BF]'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center mb-4">
              <Link href="/" className="flex items-center">
                <Image
                  src={logo}
                  alt="Norvan Technology Logo"
                  width={2560}
                  height={728}
                  className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-40 2xl:w-60 h-auto"
                />
              </Link>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Innovative IT solutions empowering businesses in the digital transformation journey.
            </p>

            {/* Social Links */}
            {/* <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-500 ${social.hoverColor} dark:text-gray-400 transition-all duration-300`}
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ translateX: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-[#0069BF] dark:text-gray-400 dark:hover:text-[#0069BF] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#0069BF] mt-0.5 flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                  203, Platinum point, Sudama Chowk, Mota Varachha, Surat, Gujarat, 394101
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#0069BF] flex-shrink-0" />
                <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                  norvantechnology@gmail.com
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Stay Updated
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Subscribe to our newsletter for latest updates
            </p>
            <form className="mt-4 flex flex-col gap-2">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="pl-10 rounded-full"
                  required
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <Button
                type="submit"
                className="rounded-full bg-[#0069BF] hover:bg-[#0058a4] text-white flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Norvan Technology. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-[#0069BF] dark:text-gray-400 dark:hover:text-[#0069BF]">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-gray-500 hover:text-[#0069BF] dark:text-gray-400 dark:hover:text-[#0069BF]">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
