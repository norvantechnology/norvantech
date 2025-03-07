'use client'; // Mark this component as a Client Component

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Code, Server, Cpu, Shield, Smartphone, Users, LineChart, Layers, ShoppingCart, Codepen } from 'lucide-react';
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

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-[#0069BF]" />,
      title: 'Web Development',
      description: 'Build scalable, high-performance web applications with modern frameworks like Next.js, React.js, and Node.js.',
      technologies: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'HTML5/CSS3', 'JavaScript/TypeScript'],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      benefits: [
        'High-performance web applications for faster user experiences',
        'Responsive designs for seamless mobile and desktop compatibility',
        'SEO-optimized websites for better search engine rankings',
        'Scalable solutions to grow with your business needs',
        'Secure and reliable web applications with modern frameworks',
        'Custom features tailored to your business requirements',
      ],
    },
    {
      icon: <Server className="h-8 w-8 text-[#0069BF]" />,
      title: 'Backend Development',
      description: 'Develop robust and scalable backend systems using Node.js, Python, and GraphQL for seamless integration.',
      technologies: ['Node.js', 'Python', 'Django', 'Express.js', 'FastAPI', 'GraphQL'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
      benefits: [
        'Robust backend systems for seamless data management',
        'Scalable APIs to support growing business needs',
        'High-performance database integrations for faster queries',
        'Secure authentication and authorization mechanisms',
        'Real-time data processing for dynamic applications',
        'Seamless third-party API integrations for extended functionality',
      ],
    },
    {
      icon: <Cpu className="h-8 w-8 text-[#0069BF]" />,
      title: 'DevOps & Cloud Solutions',
      description: 'Streamline your development and operations with our expert DevOps services and cloud solutions.',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud', 'CI/CD Pipelines'],
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      benefits: [
        'Automated CI/CD pipelines for faster deployments',
        'Scalable cloud infrastructure to handle peak loads',
        'Cost-effective cloud solutions with pay-as-you-go pricing',
        'Enhanced security with automated monitoring and alerts',
        'Seamless integration with existing development workflows',
        '24/7 cloud support and maintenance for uninterrupted operations',
      ],
    },
    {
      icon: <Layers className="h-8 w-8 text-[#0069BF]" />,
      title: 'AI & Machine Learning',
      description: 'Build intelligent applications with AI and machine learning, including chatbots, automation, and predictive analytics.',
      technologies: ['Python', 'TensorFlow', 'OpenAI', 'ChatGPT', 'Machine Learning', 'Natural Language Processing'],
      image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
      benefits: [
        'AI-driven automation for improved operational efficiency',
        'Predictive analytics for data-driven decision-making',
        'Natural language processing for intelligent chatbots',
        'Custom machine learning models tailored to your business',
        'Real-time data processing for actionable insights',
        'Scalable AI solutions to grow with your business needs',
      ],
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-[#0069BF]" />,
      title: 'E-Commerce Solutions',
      description: 'Create seamless e-commerce platforms with Shopify, WooCommerce, and custom headless CMS integrations.',
      technologies: ['Shopify', 'WooCommerce', 'Headless CMS', 'Payment Gateways', 'Inventory Management', 'Custom Checkout'],
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      benefits: [
        'Seamless e-commerce platforms for enhanced customer experiences',
        'Custom payment gateway integrations for secure transactions',
        'Scalable inventory management for growing product catalogs',
        'SEO-optimized product pages for better search engine visibility',
        'Mobile-friendly designs for on-the-go shopping',
        '24/7 support for uninterrupted e-commerce operations',
      ],
    },
    {
      icon: <Codepen className="h-8 w-8 text-[#0069BF]" />,
      title: 'SaaS Product Development',
      description: 'Design and develop scalable SaaS products with modern cloud-native architectures and microservices.',
      technologies: ['Microservices', 'Cloud-Native', 'AWS', 'Azure', 'Google Cloud', 'API Integrations'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      benefits: [
        'Scalable cloud-native architectures for growing businesses',
        'Seamless API integrations for enhanced functionality',
        'Cost-effective subscription-based pricing models',
        'Automated updates and maintenance for hassle-free operations',
        'Multi-tenant support for serving multiple clients efficiently',
        'Data-driven insights for continuous product improvement',
      ],
    },
    {
      icon: <LineChart className="h-8 w-8 text-[#0069BF]" />,
      title: 'Digital Marketing & SEO',
      description: 'Boost your online presence with data-driven digital marketing strategies and SEO optimization.',
      technologies: ['SEO', 'Content Marketing', 'Social Media Marketing', 'Email Marketing', 'PPC Advertising', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      benefits: [
        'Data-driven marketing strategies for higher ROI',
        'SEO-optimized content for better search engine rankings',
        'Targeted social media campaigns for increased engagement',
        'Email marketing automation for personalized customer outreach',
        'PPC advertising for immediate traffic and lead generation',
        'Comprehensive analytics for performance tracking and optimization',
      ],
    },
    {
      icon: <Shield className="h-8 w-8 text-[#0069BF]" />,
      title: 'Cybersecurity',
      description: 'Protect your business from cyber threats with our comprehensive security solutions and compliance services.',
      technologies: ['Security Audits', 'Penetration Testing', 'Vulnerability Assessment', 'Security Training', 'Compliance', 'Incident Response'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      benefits: [
        'Comprehensive security audits to identify vulnerabilities',
        'Penetration testing for proactive threat detection',
        'GDPR and compliance solutions for data protection',
        'Employee training to prevent phishing and social engineering',
        '24/7 monitoring and incident response for rapid threat mitigation',
        'Secure infrastructure to protect sensitive business data',
      ],
    },
    {
      icon: <Smartphone className="h-8 w-8 text-[#0069BF]" />,
      title: 'Mobile App Development',
      description: 'Create engaging and functional mobile applications for iOS and Android platforms.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Progressive Web Apps', 'Hybrid Apps'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      benefits: [
        'Cross-platform apps for iOS and Android with a single codebase',
        'Engaging user interfaces for better customer retention',
        'Offline functionality for uninterrupted user experiences',
        'Push notifications for real-time user engagement',
        'Secure data storage and encryption for user privacy',
        'Regular updates and maintenance for app performance',
      ],
    },
    {
      icon: <Users className="h-8 w-8 text-[#0069BF]" />,
      title: 'IT Consulting',
      description: 'Get expert advice and guidance to make informed technology decisions for your business.',
      technologies: ['Technology Assessment', 'Digital Transformation', 'IT Strategy', 'Process Optimization', 'System Integration', 'Technology Roadmap'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      benefits: [
        'Custom IT strategies aligned with your business goals',
        'Digital transformation solutions for modernizing operations',
        'Process optimization for improved efficiency and cost savings',
        'Seamless system integrations for unified workflows',
        'Technology roadmaps for long-term business growth',
        'Expert guidance for adopting emerging technologies',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-[#0069BF] via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 z-0" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Our Services & Technologies
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              We offer a comprehensive range of IT services and leverage cutting-edge technologies to deliver innovative solutions for your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0 }}
            className="space-y-24"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-[#0069BF]/20 dark:bg-[#0069BF]/10 flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {service.title}
                    </h2>
                  </div>
                  <motion.p variants={fadeInUp} className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    {service.description}
                  </motion.p>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technologies</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#0069BF]/20 text-[#0069BF] dark:bg-[#0069BF]/10 dark:text-[#0069BF]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#0069BF] mt-0.5 flex-shrink-0" />
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
                  viewport={{ once: true, amount: 0.1 }}
                  className={index % 2 === 1 ? 'lg:col-start-1' : ''}
                >
                  <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-xl flex justify-center items-center">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0069BF] dark:bg-[#0069BF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-white/90">
              Let's discuss how Norvan Technology can help you achieve your business goals with our innovative IT solutions.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-white text-[#0069BF] hover:bg-gray-100">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" className="rounded-full bg-white text-[#0069BF] hover:bg-gray-100">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}