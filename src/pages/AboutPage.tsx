
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SkipNavigation from "@/components/SkipNavigation";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Clock, Scale, Heart } from "lucide-react";
import attorneyPhoto from "@/assets/attorney-photo.jpg";

const AboutPage = () => {
  const values = [
    {
      icon: Scale,
      title: "Justice First",
      description: "We fight tirelessly for what's right and just for our clients"
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We understand the emotional toll legal issues can take"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do"
    },
    {
      icon: Users,
      title: "Client-Centered",
      description: "Your needs and goals drive every decision we make"
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "We maintain the highest ethical standards in our practice"
    },
    {
      icon: Clock,
      title: "Dedication",
      description: "We're committed to achieving the best possible outcomes"
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Cases Won" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "$10M+", label: "Recovered for Clients" }
  ];

  return (
    <>
      <SEO 
        title="About Us - Experienced Legal Team | RingRemind"
        description="Learn about our experienced legal team and our commitment to providing exceptional legal services in Poway, CA. Meet our attorneys and discover our values."
        url="https://ringremind.com/about"
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
                  About RingRemind Legal
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="200">
                  Your trusted legal partner with over 25 years of experience serving the Poway community
                </p>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-20 bg-background">
            <div className="container px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div data-aos="fade-right">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Founded with a simple mission: to provide exceptional legal services with a personal touch. 
                      RingRemind Legal has been serving individuals and families in Poway and surrounding areas 
                      for over two decades.
                    </p>
                    <p>
                      What started as a small practice has grown into a trusted legal firm, but we've never 
                      forgotten our roots. We believe that every client deserves personalized attention, 
                      clear communication, and dedicated advocacy.
                    </p>
                    <p>
                      Our team combines deep legal expertise with genuine care for our clients' well-being. 
                      We understand that legal issues can be overwhelming, which is why we guide you through 
                      every step of the process with patience and understanding.
                    </p>
                  </div>
                </div>

                <div data-aos="fade-left">
                  <img
                    src={attorneyPhoto}
                    alt="Sarah Johnson, Lead Attorney at RingRemind Legal"
                    className="w-full rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 bg-muted/50">
            <div className="container px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-20 bg-background">
            <div className="container px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" data-aos="fade-up">
                  Our Values
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                  These core values guide everything we do and shape how we serve our clients
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-4">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary text-white">
            <div className="container px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                  Ready to Work With Us?
                </h2>
                <p className="text-xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="200">
                  Contact us today for a free consultation and let us help you navigate your legal challenges
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
                    onClick={() => window.location.href = '/practice-areas'}
                  >
                    Our Services
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

export default AboutPage;
