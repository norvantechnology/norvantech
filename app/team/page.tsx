import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Linkedin, Twitter, Mail } from 'lucide-react'

export const metadata = {
  title: 'Our Team | Norvan Technology',
  description: 'Meet the talented team behind Norvan Technology - experts in web development, backend systems, DevOps, and digital marketing.',
}

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'David Chen',
      role: 'CEO & Founder',
      bio: 'With over 15 years of experience in the tech industry, David leads Norvan Technology with a vision to transform businesses through innovative IT solutions.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@norvantech.com',
      },
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Sarah brings deep technical expertise in software architecture and development. She leads our technical strategy and ensures the delivery of high-quality solutions.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@norvantech.com',
      },
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      bio: 'Michael specializes in full-stack development with expertise in React.js, Node.js, and Next.js. He leads our development team and mentors junior developers.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@norvantech.com',
      },
    },
    {
      name: 'Emily Wong',
      role: 'DevOps Engineer',
      bio: 'Emily is our DevOps expert, specializing in CI/CD pipelines, cloud infrastructure, and containerization. She ensures our solutions are scalable and reliable.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@norvantech.com',
      },
    },
    {
      name: 'James Wilson',
      role: 'UI/UX Designer',
      bio: 'James combines creativity with user-centered design principles to create intuitive and visually appealing interfaces for our web and mobile applications.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'james@norvantech.com',
      },
    },
    {
      name: 'Sophia Martinez',
      role: 'Digital Marketing Specialist',
      bio: 'Sophia leads our digital marketing efforts, helping clients increase their online presence through SEO, content marketing, and social media strategies.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sophia@norvantech.com',
      },
    },
    {
      name: 'Alex Thompson',
      role: 'Backend Developer',
      bio: 'Alex specializes in backend development with expertise in Python and Node.js. He builds robust and scalable server-side solutions for our clients.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'alex@norvantech.com',
      },
    },
    {
      name: 'Olivia Kim',
      role: 'Project Manager',
      bio: 'Olivia ensures our projects are delivered on time and within budget. She coordinates between teams and clients to ensure smooth project execution.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'olivia@norvantech.com',
      },
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
              Meet Our Team
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Our diverse team of experts is passionate about leveraging technology to solve complex business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                    <Image 
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-sky-500 dark:text-sky-400 font-medium">{member.role}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                  <div className="mt-4 flex space-x-3">
                    <a href={member.social.linkedin} className="text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400">
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400">
                      <span className="sr-only">Twitter</span>
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400">
                      <span className="sr-only">Email</span>
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Join Our Team
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We're always looking for talented individuals to join our team. If you're passionate about technology and innovation, we'd love to hear from you.
              </p>
              <div className="mt-8 space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  At Norvan Technology, we offer:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">A collaborative and inclusive work environment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Opportunities for professional growth and development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Challenging projects that make a real impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Competitive compensation and benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Flexible work arrangements</span>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <Button asChild size="lg" className="rounded-full bg-sky-500 hover:bg-sky-600 text-white">
                  <Link href="/careers">View Open Positions</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Norvan Technology Team Collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-500 dark:bg-sky-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Work with Our Expert Team?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Let's discuss how Norvan Technology can help you achieve your business goals with our innovative IT solutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-white text-sky-600 hover:bg-gray-100">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white/10">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}