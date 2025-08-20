
import React from 'react'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Medical Malpractice: When Healthcare Goes Wrong",
      excerpt: "Learn about the key elements that constitute medical malpractice and how to protect your rights when medical care falls below acceptable standards.",
      author: "Sarah Mitchell",
      date: "December 15, 2023",
      readTime: "5 min read",
      category: "Medical Malpractice",
      featured: true
    },
    {
      id: 2,
      title: "The True Cost of Personal Injury: Beyond Medical Bills",
      excerpt: "Personal injury damages extend far beyond immediate medical costs. Discover what compensation you may be entitled to after an accident.",
      author: "Michael Rodriguez",
      date: "December 10, 2023",
      readTime: "7 min read",
      category: "Personal Injury",
      featured: false
    },
    {
      id: 3,
      title: "Workers' Rights: What to Do After a Workplace Injury",
      excerpt: "A comprehensive guide to understanding your rights and the steps to take immediately following a workplace injury.",
      author: "Emily Chen",
      date: "December 5, 2023",
      readTime: "6 min read",
      category: "Workers' Compensation",
      featured: false
    },
    {
      id: 4,
      title: "Product Liability: When Everyday Items Become Dangerous",
      excerpt: "From defective appliances to dangerous medications, learn how product liability law protects consumers from unsafe products.",
      author: "Sarah Mitchell",
      date: "November 28, 2023",
      readTime: "8 min read",
      category: "Product Liability",
      featured: false
    },
    {
      id: 5,
      title: "Insurance Bad Faith: Fighting for Fair Treatment",
      excerpt: "Insurance companies have a duty to act in good faith. Learn what constitutes bad faith and how to fight back when insurers deny valid claims.",
      author: "Michael Rodriguez",
      date: "November 20, 2023",
      readTime: "4 min read",
      category: "Insurance Claims",
      featured: false
    }
  ]

  const categories = ["All", "Medical Malpractice", "Personal Injury", "Workers' Compensation", "Product Liability", "Insurance Claims"]

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Legal Insights & Updates
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest legal news, case studies, and expert insights from our experienced attorneys.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map(post => (
          <div key={post.id} className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-primary text-sm font-medium">{post.category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <button className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors group">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl h-64 lg:h-80"></div>
            </div>
          </div>
        ))}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map(post => (
            <article key={post.id} className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border overflow-hidden group">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-48"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-primary text-sm font-medium">{post.category}</span>
                  <span className="text-muted-foreground text-sm">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                  <button className="text-primary font-medium hover:text-primary/80 transition-colors group">
                    Read More
                    <ArrowRight className="w-4 h-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-primary/5 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated with Legal News
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest legal insights, case updates, and industry news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
