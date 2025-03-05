'use client'; // Mark this component as a Client Component

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Award, Target, Heart } from 'lucide-react';
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

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 z-0" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              About Norvan Technology
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              We are a team of passionate technology experts dedicated to helping businesses thrive in the digital era.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Norvan Technology Team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Our Story
              </motion.h2>
              <motion.div variants={fadeInUp} className="mt-6 space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2018, Norvan Technology was born out of a passion for leveraging technology to solve complex business challenges. Our founders, with decades of combined experience in the tech industry, recognized the need for a more personalized and comprehensive approach to IT solutions.
                </p>
                <p>
                  What started as a small team of dedicated developers has grown into a full-service IT company with expertise across multiple domains, including web development, backend systems, DevOps, and digital marketing.
                </p>
                <p>
                  Today, we pride ourselves on our ability to deliver innovative solutions that drive real business results for our clients. Our team of experts stays at the forefront of technological advancements to ensure we provide cutting-edge solutions tailored to each client's unique needs.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Mission, Vision & Values
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              The principles that guide everything we do at Norvan Technology.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300 hover:border-sky-500">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-sky-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Mission</h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital landscape.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300 hover:border-sky-500">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-sky-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Vision</h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    To be the leading provider of transformative IT solutions, recognized for our technical excellence, innovation, and commitment to client success.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300 hover:border-sky-500">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-sky-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Our Values</h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    Excellence, integrity, innovation, collaboration, and client-centricity form the foundation of everything we do at Norvan Technology.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Our Approach
              </motion.h2>
              <motion.p variants={fadeInUp} className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We believe in a collaborative and transparent approach to every project, ensuring that our solutions align perfectly with your business objectives.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="mt-8 space-y-4">
                {[
                  'Understand your business needs and objectives',
                  'Develop tailored solutions to address your specific challenges',
                  'Implement with precision and attention to detail',
                  'Provide ongoing support and optimization',
                  'Measure results and continuously improve',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-sky-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-600 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </motion.div>
              
              <motion.div variants={fadeInUp} className="mt-10">
                <Button asChild size="lg" className="rounded-full bg-sky-500 hover:bg-sky-600 text-white shadow-lg hover:shadow-sky-500/50 transition-shadow">
                  <Link href="/contact">Work With Us</Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative"
            >
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Norvan Technology Approach"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-500 dark:bg-sky-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Digital Journey?
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-white/90">
              Let's discuss how Norvan Technology can help you achieve your business goals with our innovative IT solutions.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-white text-sky-600 hover:bg-gray-100 shadow-lg hover:shadow-sky-500/50 transition-shadow">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white/10 hover:text-white transition-colors">
                <Link href="/team">Meet Our Team</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}