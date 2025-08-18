
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SkipNavigation from "@/components/SkipNavigation";
import { Button } from "@/components/ui/button";
import { DollarSign, Award, TrendingUp } from "lucide-react";

const CaseResults = () => {
  const results = [
    {
      amount: "$2.5M",
      type: "Personal Injury",
      description: "Auto accident settlement for catastrophic injuries"
    },
    {
      amount: "$1.8M",
      type: "Medical Malpractice",
      description: "Hospital negligence resulting in permanent disability"
    },
    {
      amount: "$950K",
      type: "Personal Injury",
      description: "Slip and fall case with complex liability issues"
    },
    {
      amount: "$750K",
      type: "Wrongful Death",
      description: "Construction accident wrongful death claim"
    },
    {
      amount: "$500K",
      type: "Personal Injury",
      description: "Truck accident with multiple defendants"
    },
    {
      amount: "$425K",
      type: "Workers' Compensation",
      description: "Workplace injury with permanent partial disability"
    }
  ];

  const stats = [
    { icon: DollarSign, number: "$10M+", label: "Total Recovered" },
    { icon: Award, number: "500+", label: "Cases Won" },
    { icon: TrendingUp, number: "98%", label: "Success Rate" }
  ];

  return (
    <>
      <SEO 
        title="Case Results - Proven Success Record | RingRemind"
        description="View our successful case results including personal injury settlements, family law victories, and criminal defense wins. Over $10M recovered for clients."
        url="https://ringremind.com/case-results"
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
                  Case Results
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="200">
                  Our track record speaks for itself
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-background">
            <div className="container px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index}
                      className="text-center bg-white rounded-xl p-8 shadow-lg"
                      data-aos="fade-up"
                      data-aos-delay={index * 200}
                    >
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Results Grid */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" data-aos="fade-up">
                  Recent Victories
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                  Here are some of our recent successful case outcomes
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {results.map((result, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="text-3xl font-bold text-accent mb-2">
                      {result.amount}
                    </div>
                    <div className="text-primary font-semibold mb-4">
                      {result.type}
                    </div>
                    <p className="text-muted-foreground">
                      {result.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Disclaimer Section */}
          <section className="py-12 bg-background">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm text-muted-foreground italic" data-aos="fade-up">
                  *Past results do not guarantee future outcomes. Every case is unique and results depend on specific facts and circumstances. 
                  Client confidentiality has been maintained by using representative case examples.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary text-white">
            <div className="container px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                  Ready to Win Your Case?
                </h2>
                <p className="text-xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="200">
                  Let our proven track record work for you. Contact us for a free consultation.
                </p>
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-accent-foreground"
                  data-aos="fade-up" 
                  data-aos-delay="400"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CaseResults;
