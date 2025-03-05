'use client'; // Mark this component as a Client Component

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Code, Server, Database, LineChart, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion'; // Import Framer Motion

// Animation variants
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

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-[#0069BF] via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 z-0" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#0069BF]/20 dark:bg-[#0069BF]/20 rounded-l-full blur-3xl opacity-50" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true, amount: 0.1 }}
              className="text-center lg:text-left"
            >
              <motion.h1 variants={staggerContainer} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white">
                {['Innovative', 'IT Solutions', 'for Your Business'].map((line, index) => (
                  <motion.span
                    key={index}
                    variants={textReveal}
                    className="block"
                    style={{ display: 'block' }}
                  >
                    {line}
                  </motion.span>
                ))}
                <motion.span
                  variants={textReveal}
                  className="block text-[#0069BF]"
                  style={{ display: 'block' }}
                >
                  IT Solutions
                </motion.span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                We help businesses transform and thrive in the digital era with cutting-edge technology solutions tailored to your unique needs.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="rounded-full bg-[#0069BF] hover:bg-[#0058a4] text-white">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/services">Our Services</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Norvan Technology Team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-[#0069BF] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">10+</span>
              </div>
              <div className="absolute -top-6 -right-6 h-24 w-24 bg-[#0069BF] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">100%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-[#0069BF] dark:text-white sm:text-4xl">
              Our Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We offer a comprehensive range of IT services to help your business grow and succeed.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Code className="h-8 w-8 text-[#0069BF]" />,
                title: 'Web Development',
                description: 'Custom web applications built with React.js, Next.js, and Node.js to meet your specific business needs.',
              },
              {
                icon: <Server className="h-8 w-8 text-[#0069BF]" />,
                title: 'Backend Development',
                description: 'Robust and scalable backend solutions using Node.js, Python, and other modern technologies.',
              },
              {
                icon: <Database className="h-8 w-8 text-[#0069BF]" />,
                title: 'DevOps',
                description: 'Streamline your development and operations with our expert DevOps services.',
              },
              {
                icon: <LineChart className="h-8 w-8 text-[#0069BF]" />,
                title: 'Digital Marketing',
                description: 'Increase your online presence and reach your target audience with our digital marketing strategies.',
              },
              {
                icon: <Users className="h-8 w-8 text-[#0069BF]" />,
                title: 'IT Consulting',
                description: 'Expert advice and guidance to help you make informed technology decisions for your business.',
              },
              {
                icon: <Globe className="h-8 w-8 text-[#0069BF]" />,
                title: 'Cloud Solutions',
                description: 'Secure and scalable cloud infrastructure to support your business operations.',
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-[#0069BF]/30 dark:bg-[#0069BF]/10 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#0069BF] dark:text-white">{service.title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{service.description}</p>
                    <Link href="/services" className="mt-4 inline-flex items-center text-[#0069BF] hover:text-[#0058a4] dark:text-[#0069BF]/80 dark:hover:text-[#0058a4]/80">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full bg-[#0069BF] hover:bg-[#0058a4] text-white">
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-[#0069BF] dark:text-white sm:text-4xl">
                Why Choose Norvan Technology?
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We combine technical expertise with business acumen to deliver solutions that drive growth and efficiency.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-8 space-y-4">
                {[
                  'Expert team with diverse technical skills',
                  'Tailored solutions to meet your specific needs',
                  'Commitment to quality and excellence',
                  'Transparent communication and collaboration',
                  'Ongoing support and maintenance',
                  'Competitive pricing and flexible engagement models',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#0069BF] mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-600 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10">
                <Button asChild size="lg" className="rounded-full bg-[#0069BF] hover:bg-[#0058a4] text-white">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Norvan Technology Team Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-[#0069BF] dark:text-white sm:text-4xl">
              What Our Clients Say
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              "Norvan Technology transformed our digital presence with their expertise in web development and digital marketing. Highly recommended!",
              "The team at Norvan Technology delivered our project on time and within budget. Their technical expertise and attention to detail are impressive.",
              "Working with Norvan Technology has been a game-changer for our business. Their DevOps solutions have significantly improved our development cycle.",
              "We were amazed by the level of professionalism and dedication shown by the Norvan Technology team. They truly understand our business needs.",
              "Norvan Technology's cloud solutions have helped us scale our operations seamlessly. Their support team is always available and responsive.",
              "The custom web application developed by Norvan Technology has streamlined our internal processes and improved efficiency across the board.",
            ].map((quote, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="relative bg-gradient-to-br from-[#0069BF] to-[#004080] p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                  {/* Quote Icon */}
                  <div className="absolute -top-6 -right-6 h-12 w-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#0069BF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white dark:text-gray-100 text-lg italic">"{quote}"</p>

                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-[#0069BF] to-[#004080] opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
