
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SkipNavigation from "@/components/SkipNavigation";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact Us - Free Legal Consultation | RingRemind"
        description="Contact our experienced legal team for a free consultation. Located in Poway, CA. Call 1-800-916-2459 or fill out our contact form."
        url="https://ringremind.com/contact"
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
                  Contact Us
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="200">
                  Get the legal help you need. Free consultation available.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Component */}
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
