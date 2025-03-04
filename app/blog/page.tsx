import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Calendar, User } from 'lucide-react'

export const metadata = {
  title: 'Blog | Norvan Technology',
  description: 'Stay updated with the latest tech trends, industry insights, and best practices through our blog articles.',
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the emerging trends in web development that are shaping the future of the industry, from AI integration to serverless architecture.',
      date: 'May 15, 2025',
      author: 'David Chen',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      slug: 'future-of-web-development-trends-2025',
    },
    {
      title: 'How DevOps is Transforming Software Development',
      excerpt: 'Learn how DevOps practices are revolutionizing the software development lifecycle, improving efficiency, and reducing time-to-market.',
      date: 'May 8, 2025',
      author: 'Emily Wong',
      category: 'DevOps',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      slug: 'how-devops-transforming-software-development',
    },
    {
      title: 'The Role of AI in Modern Digital Marketing',
      excerpt: 'Discover how artificial intelligence is reshaping digital marketing strategies, from personalized content to predictive analytics.',
      date: 'April 30, 2025',
      author: 'Sophia Martinez',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
      slug: 'role-of-ai-in-modern-digital-marketing',
    },
    {
      title: 'Building Scalable Backend Systems with Node.js',
      excerpt: 'A comprehensive guide to building scalable and maintainable backend systems using Node.js and modern architectural patterns.',
      date: 'April 22, 2025',
      author: 'Michael Rodriguez',
      category: 'Backend Development',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
      slug: 'building-scalable-backend-systems-nodejs',
    },
    {
      title: 'The Importance of Cybersecurity in the Digital Age',
      excerpt: 'Why cybersecurity should be a top priority for businesses of all sizes and how to implement effective security measures.',
      date: 'April 15, 2025',
      author: 'Alex Thompson',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      slug: 'importance-of-cybersecurity-digital-age',
    },
    {
      title: 'Optimizing Database Performance for Web Applications',
      excerpt: 'Best practices for optimizing database performance to ensure fast and responsive web applications.',
      date: 'April 8, 2025',
      author: 'Sarah Johnson',
      category: 'Database',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80',
      slug: 'optimizing-database-performance-web-applications',
    },
  ];

  const categories = [
    'All',
    'Web Development',
    'Backend Development',
    'DevOps',
    'Digital Marketing',
    'Cybersecurity',
    'Database',
    'Mobile Development',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white dark:from-gray-900 dark:to-gray-800 z-0" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Our Blog
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Stay updated with the latest tech trends, industry insights, and best practices through our blog articles.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-sky-500 text-white text-xs font-medium px-2.5 py-1 rounded">
                {blogPosts[0].category}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blogPosts[0].title}
              </h2>
              <div className="mt-4 flex items-center text-gray-600 dark:text-gray-400 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{blogPosts[0].author}</span>
                </div>
              </div>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                {blogPosts[0].excerpt}
              </p>
              <div className="mt-8">
                <Button asChild className="rounded-full bg-sky-500 hover:bg-sky-600 text-white">
                  <Link href={`/blog/${blogPosts[0].slug}`}>Read Full Article</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-sky-500 text-white text-xs font-medium px-2.5 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{post.excerpt}</p>
                  <div className="mt-4">
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/blog/archive">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-sky-50 dark:bg-sky-900/20 rounded-3xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Subscribe to Our Newsletter
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Stay updated with our latest articles, industry insights, and company news.
              </p>
              <form className="mt-8">
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-800 dark:text-white"
                    required
                  />
                  <Button type="submit" className="rounded-full bg-sky-500 hover:bg-sky-600 text-white">
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}