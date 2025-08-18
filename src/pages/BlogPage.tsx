
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SkipNavigation from "@/components/SkipNavigation";
import Blog from "@/components/Blog";

const BlogPage = () => {
  return (
    <>
      <SEO 
        title="Legal Blog - Insights & Updates | RingRemind"
        description="Stay informed with our latest legal insights, case studies, and updates on family law, personal injury, criminal defense, and immigration law."
        url="https://ringremind.com/blog"
      />
      <SkipNavigation />
      <div className="min-h-screen">
        <Header />
        <main id="main-content" role="main">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-darker text-white">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
                  Legal Blog
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="200">
                  Stay informed with the latest legal insights and updates
                </p>
              </div>
            </div>
          </section>

          {/* Blog Component */}
          <Blog />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
