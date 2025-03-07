'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function PortfolioPage() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      client: 'FashionHub',
      description: 'A modern e-commerce platform with advanced product filtering, user authentication, payment integration, and order management.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'E-Commerce',
    },
    {
      title: 'Healthcare Management System',
      client: 'MediCare Solutions',
      description: 'A comprehensive healthcare management system for patient records, appointment scheduling, and billing management.',
      technologies: ['React.js', 'Python', 'Django', 'PostgreSQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Healthcare',
    },
    {
      title: 'Real Estate Marketplace',
      client: 'PropertyFinder',
      description: 'A real estate marketplace connecting buyers, sellers, and agents with advanced property search and virtual tours.',
      technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB', 'Google Maps API'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      category: 'Real Estate',
    },
    {
      title: 'Financial Dashboard',
      client: 'InvestWise',
      description: 'A comprehensive financial dashboard for investment tracking, portfolio management, and market analysis.',
      technologies: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Recharts'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Finance',
    },
    {
      title: 'Educational Platform',
      client: 'LearnHub Academy',
      description: 'An online learning platform with course management, video streaming, quizzes, and student progress tracking.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'AWS S3', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      category: 'Education',
    },
    {
      title: 'Logistics Management System',
      client: 'FastTrack Logistics',
      description: 'A logistics management system for tracking shipments, managing inventory, and optimizing delivery routes.',
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Redis', 'Google Maps API'],
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Logistics',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-[#0069BF] via-white to-white dark:from-[#0069BF] dark:via-gray-800 dark:to-gray-800 z-0" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Our Portfolio
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Explore our successful projects across various industries, showcasing our expertise and commitment to excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 right-4 bg-[#0069BF] text-white text-xs font-medium px-2.5 py-1 rounded">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-[#0069BF] dark:text-[#0069BF]">{project.client}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0069BF] text-white dark:bg-[#0069BF] dark:text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* <div className="mt-6">
                    <a href={`/portfolio/${index + 1}`} className="inline-flex items-center text-[#0069BF] hover:text-[#005b9f] dark:text-[#0069BF] dark:hover:text-[#005b9f]">
                      View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      {/* <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Trusted by Leading Companies
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We've had the privilege of working with a diverse range of clients across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex justify-center">
                <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">Client Logo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-[#0069BF] dark:bg-[#0069BF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Let's discuss how Norvan Technology can help you achieve your business goals with our innovative IT solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-white text-[#0069BF] hover:bg-gray-100">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" className="rounded-full bg-white text-[#0069BF] hover:bg-gray-100">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
