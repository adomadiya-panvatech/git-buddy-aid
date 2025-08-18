
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SkipNavigation from "@/components/SkipNavigation";
import PracticeAreas from "@/components/PracticeAreas";

const PracticeAreasPage = () => {
  return (
    <>
      <SEO 
        title="Practice Areas - Legal Expertise You Can Trust | RingRemind"
        description="Explore our comprehensive practice areas including family law, personal injury, criminal defense, and immigration law. Expert legal representation in Poway, CA."
        url="https://ringremind.com/practice-areas"
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
                  Practice Areas
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="200">
                  Comprehensive legal services across multiple areas of law
                </p>
              </div>
            </div>
          </section>

          {/* Practice Areas Component */}
          <PracticeAreas />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PracticeAreasPage;
