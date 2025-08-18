
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SkipNavigation from "@/components/SkipNavigation";
import { Button } from "@/components/ui/button";
import { Heart, Car, Shield, Users, Scale, FileText, Phone, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Family Law",
      description: "Divorce, child custody, adoption, and domestic relations matters handled with care and expertise.",
      features: ["Divorce & Separation", "Child Custody", "Alimony & Support", "Adoption Services", "Domestic Violence"]
    },
    {
      icon: Car,
      title: "Personal Injury",
      description: "Fighting for maximum compensation for accident victims and their families.",
      features: ["Auto Accidents", "Slip & Fall", "Medical Malpractice", "Wrongful Death", "Workers' Compensation"]
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Aggressive defense for criminal charges with a focus on protecting your rights.",
      features: ["DUI Defense", "Drug Crimes", "Theft Charges", "Assault Cases", "Expungement"]
    },
    {
      icon: Users,
      title: "Immigration Law",
      description: "Comprehensive immigration services to help you and your family achieve your American dream.",
      features: ["Green Cards", "Citizenship", "Visa Applications", "Deportation Defense", "Family Reunification"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Free Consultation",
      description: "We'll discuss your case and provide initial legal guidance at no cost."
    },
    {
      step: "2",
      title: "Case Assessment",
      description: "Our team thoroughly evaluates your situation and develops a strategy."
    },
    {
      step: "3",
      title: "Legal Action",
      description: "We take decisive action to protect your interests and achieve your goals."
    },
    {
      step: "4",
      title: "Resolution",
      description: "We work tirelessly until we reach the best possible outcome for your case."
    }
  ];

  return (
    <>
      <SEO 
        title="Legal Services - Family Law, Personal Injury & More | RingRemind"
        description="Comprehensive legal services including family law, personal injury, criminal defense, and immigration. Experienced attorneys serving Poway, CA."
        url="https://ringremind.com/services"
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
                  Our Legal Services
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="200">
                  Comprehensive legal solutions tailored to your unique needs
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

          {/* Services Grid */}
          <section className="py-20 bg-background">
            <div className="container px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" data-aos="fade-up">
                  Areas of Practice
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                  We provide expert legal representation across multiple practice areas
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                      data-aos="fade-up"
                      data-aos-delay={index * 200}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                            <IconComponent className="w-8 h-8 text-accent" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-2xl font-semibold text-primary mb-4">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            {service.description}
                          </p>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" data-aos="fade-up">
                  Our Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                  We follow a proven process to ensure the best outcomes for our clients
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {process.map((step, index) => (
                  <div 
                    key={index}
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                  >
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-background">
            <div className="container px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="text-center" data-aos="fade-up">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    24/7 Availability
                  </h3>
                  <p className="text-muted-foreground">
                    Legal emergencies don't wait. We're available around the clock for urgent matters.
                  </p>
                </div>

                <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Scale className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Proven Results
                  </h3>
                  <p className="text-muted-foreground">
                    Over 500 successful cases and millions recovered for our clients speak to our expertise.
                  </p>
                </div>

                <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Free Consultation
                  </h3>
                  <p className="text-muted-foreground">
                    Get expert legal advice at no cost. We'll evaluate your case and explain your options.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary text-white">
            <div className="container px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                  Need Legal Help?
                </h2>
                <p className="text-xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="200">
                  Don't wait. The sooner you act, the better we can protect your interests.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
                  <Button 
                    size="lg"
                    className="bg-accent hover:bg-accent-light text-accent-foreground"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Free Consultation
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary"
                    onClick={() => window.location.href = 'tel:1-800-916-2459'}
                  >
                    Call Now: 1-800-916-2459
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
