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
import FAQ from "@/components/FAQ";

const Index = () => {
  const faqItems = [
    {
      question: "What legal services does RingRemind offer?",
      answer: "RingRemind specializes in family law, personal injury, criminal defense, and immigration law. We provide comprehensive legal services with personalized attention to each client's unique situation."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer free initial consultations to discuss your legal matter and determine how we can best help you. Contact us at 1-800-916-2459 to schedule your free consultation."
    },
    {
      question: "What areas do you serve?",
      answer: "We primarily serve Poway, California and surrounding areas within a 50-mile radius. Our office is located at 14269 Danielson St, Suite 400, Poway, CA 92064."
    },
    {
      question: "How experienced are your attorneys?",
      answer: "Our lead attorney Sarah Johnson has over 25 years of experience in legal practice. We have successfully handled 500+ cases with a 98% client satisfaction rate."
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "Please bring any relevant documents related to your case, such as court papers, contracts, medical records, or correspondence. We'll review these during your consultation to better understand your situation."
    },
    {
      question: "How long does a typical case take?",
      answer: "Case duration varies depending on the complexity and type of legal matter. Simple cases may resolve in weeks, while complex litigation can take months or years. We'll provide a realistic timeline during your consultation."
    }
  ];

  return (
    <>
      <SEO 
        title="Expert Legal Services & Consultation | Poway, CA"
        description="Professional legal services in Poway, CA. Expert attorneys specializing in family law, personal injury, criminal defense, and immigration. Free consultation available. Call 1-800-916-2459."
        keywords="legal services, attorney, lawyer, family law, personal injury, criminal defense, immigration, Poway, California, legal consultation, free consultation"
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
