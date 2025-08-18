
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SkipNavigation from "@/components/SkipNavigation";
import FAQ from "@/components/FAQ";

const FAQPage = () => {
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
    },
    {
      question: "What are your fees?",
      answer: "Our fees vary depending on the type and complexity of your case. We offer various fee structures including hourly rates, flat fees, and contingency fees (for personal injury cases). We'll discuss fees transparently during your consultation."
    },
    {
      question: "Do you handle cases on a contingency basis?",
      answer: "Yes, for personal injury cases, we typically work on a contingency fee basis, meaning you don't pay attorney fees unless we win your case. This allows injury victims to pursue justice without upfront costs."
    },
    {
      question: "How often will you communicate with me about my case?",
      answer: "We believe in keeping our clients informed. We'll provide regular updates on your case progress and are always available to answer your questions. You'll have direct access to your attorney throughout the process."
    },
    {
      question: "What makes RingRemind different from other law firms?",
      answer: "We combine extensive legal experience with genuine personal care for our clients. Our small firm approach means you'll receive individualized attention, while our proven track record demonstrates our ability to achieve results."
    }
  ];

  return (
    <>
      <SEO
        title="Frequently Asked Questions - Legal FAQ | RingRemind"
        description="Get answers to common questions about our legal services, fees, consultation process, and what to expect when working with RingRemind Legal."
        url="https://ringremind.com/faq"
      />
      <SkipNavigation />
      <div className="min-h-screen flex flex-col">
        <Header />

        <main id="main-content" role="main" className="flex-grow">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-darker text-white">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Find answers to common questions about our legal services
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-lg font-semibold text-primary mb-2">{item.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FAQPage;
