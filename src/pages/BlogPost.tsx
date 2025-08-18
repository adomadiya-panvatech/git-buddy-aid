
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SkipNavigation from "@/components/SkipNavigation";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    title: "Understanding Your Rights in Family Law Cases",
    content: `
      <p>Family law cases can be emotionally challenging and legally complex. Whether you're facing divorce, child custody issues, or domestic violence situations, understanding your rights is crucial for protecting yourself and your loved ones.</p>
      
      <h3>Key Areas of Family Law</h3>
      <p>Family law encompasses several important areas:</p>
      <ul>
        <li><strong>Divorce and Separation:</strong> Legal dissolution of marriage, property division, and spousal support</li>
        <li><strong>Child Custody and Support:</strong> Determining parenting time and financial responsibilities</li>
        <li><strong>Adoption:</strong> Legal processes for expanding your family</li>
        <li><strong>Domestic Violence:</strong> Protection orders and safety measures</li>
      </ul>
      
      <h3>Your Rights During Divorce</h3>
      <p>During divorce proceedings, you have several fundamental rights:</p>
      <ul>
        <li>The right to legal representation</li>
        <li>The right to fair property division</li>
        <li>The right to seek spousal support if appropriate</li>
        <li>The right to privacy regarding sensitive matters</li>
      </ul>
      
      <h3>Child Custody Considerations</h3>
      <p>When children are involved, courts prioritize the best interests of the child. Factors considered include:</p>
      <ul>
        <li>The child's physical and emotional needs</li>
        <li>Each parent's ability to provide care</li>
        <li>The child's relationship with each parent</li>
        <li>Stability of the home environment</li>
      </ul>
      
      <h3>Why You Need an Attorney</h3>
      <p>Family law cases involve complex legal procedures and emotional stress. An experienced attorney can:</p>
      <ul>
        <li>Protect your legal rights</li>
        <li>Navigate complex court procedures</li>
        <li>Negotiate favorable settlements</li>
        <li>Provide emotional support during difficult times</li>
      </ul>
      
      <p>If you're facing a family law matter, don't navigate it alone. Contact our experienced team for a consultation to discuss your options and protect your rights.</p>
    `,
    author: "Sarah Johnson",
    date: "March 15, 2024",
    category: "Family Law",
    readTime: "5 min read"
  };

  return (
    <>
      <SEO 
        title={`${blogPost.title} | RingRemind Legal Blog`}
        description="Understanding your rights in family law cases including divorce, child custody, and domestic violence matters."
        url={`https://ringremind.com/blog/${slug}`}
      />
      <SkipNavigation />
      <div className="min-h-screen">
        <Header />
        <main id="main-content" role="main">
          <article className="py-20 bg-background">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Button 
                  variant="ghost" 
                  className="mb-8 flex items-center space-x-2"
                  onClick={() => window.history.back()}
                  data-aos="fade-right"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Blog</span>
                </Button>

                {/* Article Header */}
                <header className="mb-12" data-aos="fade-up">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">
                      {blogPost.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blogPost.author}</span>
                    </div>
                    <span>{blogPost.readTime}</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                    {blogPost.title}
                  </h1>
                </header>

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                />

                {/* CTA Section */}
                <div className="mt-16 p-8 bg-gradient-to-r from-primary to-primary-dark rounded-xl text-white text-center" data-aos="fade-up" data-aos-delay="400">
                  <h3 className="text-2xl font-bold mb-4">
                    Need Legal Help?
                  </h3>
                  <p className="text-white/90 mb-6">
                    Don't face your legal challenges alone. Our experienced attorneys are here to help.
                  </p>
                  <Button 
                    size="lg"
                    className="bg-accent hover:bg-accent-light text-accent-foreground"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
