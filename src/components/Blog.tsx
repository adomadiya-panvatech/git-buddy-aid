
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const Blog = () => {
  const featuredArticles = [
    {
      title: "Understanding Your Rights in a Personal Injury Case",
      excerpt: "Learn about the key rights and protections available to you when pursuing a personal injury claim, and how to ensure you receive fair compensation.",
      category: "Personal Injury",
      readTime: "5 min read",
      date: "January 15, 2025",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop"
    },
    {
      title: "The Divorce Process: What to Expect in California",
      excerpt: "A comprehensive guide to navigating the divorce process in California, from filing to final settlement, with expert legal insights.",
      category: "Family Law",
      readTime: "7 min read",
      date: "January 10, 2025",
      author: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
    },
    {
      title: "Immigration Law Updates: What You Need to Know",
      excerpt: "Stay informed about the latest changes in immigration law and how they may affect your case or application process.",
      category: "Immigration",
      readTime: "6 min read",
      date: "January 5, 2025",
      author: "Elena Rodriguez",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-20 lg:py-28 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container px-4 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-6">
            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">📚</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            Legal Insights &<br />
            <span className="text-primary/80">Expert Resources</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with expert legal analysis, practical guidance, and the latest developments that impact your legal matters.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto mb-12">
          {featuredArticles.map((article, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/20"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              {/* Article Image */}
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary hover:bg-primary/10 font-semibold group/btn"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
