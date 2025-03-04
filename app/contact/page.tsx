"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    })
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    setIsSubmitting(false)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 z-0" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Have a question or want to discuss a project? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
              <div className="h-12 w-12 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-sky-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our Location</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                123 Tech Street, Innovation City<br />
                California, 10001<br />
                United States
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
              <div className="h-12 w-12 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-sky-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Us</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                info@norvantech.com<br />
                support@norvantech.com<br />
                careers@norvantech.com
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
              <div className="h-12 w-12 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-sky-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Call Us</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                +1 (555) 123-4567<br />
                +1 (555) 987-6543<br />
                Monday-Friday, 9am-6pm PST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send Us a Message</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="rounded-lg"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows={6}
                    required
                    className="rounded-lg"
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full rounded-full bg-sky-500 hover:bg-sky-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Location</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Visit us at our office or get in touch online.
              </p>
              
              <div className="mt-8 h-[400px] w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1622839723328!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Business Hours</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li>Monday - Friday: 9am - 6pm</li>
                    <li>Saturday: 10am - 4pm</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Get Directions</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    123 Tech Street, Innovation City, California, 10001, United States
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 text-sm"
                  >
                    View on Google Maps
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What services does Norvan Technology offer?",
                answer: "We offer a comprehensive range of IT services including web development, backend development, DevOps, digital marketing, cybersecurity, mobile app development, and IT consulting."
              },
              {
                question: "How long does a typical project take to complete?",
                answer: "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you offer ongoing maintenance and support?",
                answer: "Yes, we offer various maintenance and support packages to ensure your digital solutions continue to perform optimally after launch. These can be tailored to your specific needs and budget."
              },
              {
                question: "How do you handle project pricing?",
                answer: "We offer flexible pricing models including fixed-price quotes for well-defined projects and time-and-materials billing for more complex or evolving projects. We'll recommend the most appropriate model based on your requirements."
              },
              {
                question: "Can you work with our existing systems and technologies?",
                answer: "Absolutely. We have experience integrating with a wide range of existing systems and technologies. Our team will assess your current setup and recommend the best approach for seamless integration."
              },
              {
                question: "How do you ensure the security of our data?",
                answer: "We implement industry-standard security practices throughout our development process, including secure coding practices, regular security audits, and compliance with relevant data protection regulations."
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-500 dark:bg-sky-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Let's discuss how Norvan Technology can help you achieve your business goals with our innovative IT solutions.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full bg-white text-sky-600 hover:bg-gray-100">
                <a href="tel:+15551234567">Call Us Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}