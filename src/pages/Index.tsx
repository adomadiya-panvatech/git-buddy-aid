
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SkipNavigation from "@/components/SkipNavigation";

const Index = () => {
  return (
    <>
      <SEO 
        title="Expert Legal Services & Consultation | Poway, CA - RingRemind Legal"
        description="Experienced attorneys providing exceptional legal representation in personal injury, family law, criminal defense, and immigration. Free consultation available. Call (800) 916-2459."
        keywords="legal services, attorney, lawyer, personal injury, family law, criminal defense, immigration, Poway, California, legal consultation, free consultation"
        url="https://ringremind.com/"
      />
      <SkipNavigation />
      <div className="min-h-screen">
        <Header />
        <main id="main-content" role="main">
          <Hero />
          <PracticeAreas />
          <About />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
