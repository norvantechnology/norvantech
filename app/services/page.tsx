import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Code, Server, Database, LineChart, Users, Globe, Cpu, Shield, Smartphone } from 'lucide-react'

export const metadata = {
  title: 'Services & Technologies | Norvan Technology',
  description: 'Explore our comprehensive range of IT services including web development, backend systems, DevOps, digital marketing, and more.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-sky-500" />,
      title: 'Web Development',
      description: 'Custom web applications built with React.js, Next.js, and Node.js to meet your specific business needs.',
      technologies: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'HTML5/CSS3', 'JavaScript/TypeScript'],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      icon: <Server className="h-8 w-8 text-sky-500" />,
      title: 'Backend Development',
      description: 'Robust and scalable backend solutions using Node.js, Python, and other modern technologies.',
      technologies: ['Node.js', 'Python', 'Django', 'Express.js', 'FastAPI', 'GraphQL'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
    },
    {
      icon: <Database className="h-8 w-8 text-sky-500" />,
      title: 'Database Solutions',
      description: 'Design and implementation of efficient database systems for optimal data management and retrieval.',
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase'],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80',
    },
    {
      icon: <Cpu className="h-8 w-8 text-sky-500" />,
      title: 'DevOps',
      description: 'Streamline your development and operations with our expert DevOps services.',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud', 'CI/CD Pipelines'],
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      icon: <LineChart className="h-8 w-8 text-sky-500" />,
      title: 'Digital Marketing',
      description: 'Increase your online presence and reach your target audience with our digital marketing strategies.',
      technologies: ['SEO', 'Content Marketing', 'Social Media Marketing', 'Email Marketing', 'PPC Advertising', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    },
    {
      icon: <Shield className="h-8 w-8 text-sky-500" />,
      title: 'Cybersecurity',
      description: 'Protect your business from cyber threats with our comprehensive security solutions.',
      technologies: ['Security Audits', 'Penetration Testing', 'Vulnerability Assessment', 'Security Training', 'Compliance', 'Incident Response'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      icon: <Smartphone className="h-8 w-8 text-sky-500" />,
      title: 'Mobile App Development',
      description: 'Create engaging and functional mobile applications for iOS and Android platforms.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Progressive Web Apps', 'Hybrid Apps'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      icon: <Users className="h-8 w-8 text-sky-500" />,
      title: 'IT Consulting',
      description: 'Expert advice and guidance to help you make informed technology decisions for your business.',
      technologies: ['Technology Assessment', 'Digital Transformation', 'IT Strategy', 'Process Optimization', 'System Integration', 'Technology Roadmap'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 z-0" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Our Services & Technologies
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              We offer a comprehensive range of IT services and leverage cutting-edge technologies to deliver innovative solutions for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technologies</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Increased efficiency',
                        'Cost reduction',
                        'Improved user experience',
                        'Enhanced security',
                        'Scalable solutions',
                        'Ongoing support',
                      ].map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-sky-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We follow a structured approach to ensure the successful delivery of every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We start by understanding your business needs, objectives, and challenges to define the project scope.',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'We develop a detailed project plan, including timelines, milestones, and resource allocation.',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Our team of experts implements the solution using the most appropriate technologies and best practices.',
              },
              {
                step: '04',
                title: 'Delivery & Support',
                description: 'We deploy the solution and provide ongoing support and maintenance to ensure optimal performance.',
              },
            ].map((process, index) => (
              <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-sky-500 flex items-center justify-center mb-4">
                    <span className="text-white font-bold">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{process.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-500 dark:bg-sky-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Let's discuss how Norvan Technology can help you achieve your business goals with our innovative IT solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-white text-sky-600 hover:bg-gray-100">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white/10">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}