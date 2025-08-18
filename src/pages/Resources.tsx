
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SkipNavigation from "@/components/SkipNavigation";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, BookOpen } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Divorce Guide for California",
      description: "Comprehensive guide covering divorce procedures, property division, and child custody in California.",
      type: "PDF Guide",
      size: "2.5 MB",
      category: "Family Law"
    },
    {
      title: "Personal Injury Checklist",
      description: "Step-by-step checklist for what to do after an accident to protect your rights.",
      type: "PDF Checklist",
      size: "1.2 MB",
      category: "Personal Injury"
    },
    {
      title: "Immigration Forms Handbook",
      description: "Common immigration forms and instructions for proper completion.",
      type: "PDF Handbook",
      size: "3.1 MB",
      category: "Immigration"
    },
    {
      title: "Criminal Defense Rights",
      description: "Know your rights when facing criminal charges in California.",
      type: "PDF Guide",
      size: "900 KB",
      category: "Criminal Defense"
    }
  ];

  const links = [
    {
      title: "California Courts Self-Help",
      description: "Official California court system self-help resources",
      url: "https://www.courts.ca.gov/selfhelp.htm"
    },
    {
      title: "State Bar of California",
      description: "Find attorney information and legal resources",
      url: "https://www.calbar.ca.gov/"
    },
    {
      title: "Legal Aid Society",
      description: "Free legal assistance for low-income individuals",
      url: "https://www.legal-aid.org/"
    }
  ];

  return (
    <>
      <SEO 
        title="Legal Resources - Free Guides & Information | RingRemind"
        description="Access free legal resources including guides, checklists, and helpful links for family law, personal injury, criminal defense, and immigration matters."
        url="https://ringremind.com/resources"
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
                  Legal Resources
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="200">
                  Free legal guides and helpful information
                </p>
              </div>
            </div>
          </section>

          {/* Downloads Section */}
          <section className="py-20 bg-background">
            <div className="container px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" data-aos="fade-up">
                  Free Legal Guides
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                  Download our comprehensive guides to help you understand your legal rights
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {resources.map((resource, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {resource.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {resource.size}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-3">
                          {resource.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {resource.description}
                        </p>
                        <Button 
                          className="w-full flex items-center justify-center space-x-2"
                          onClick={() => {
                            // In a real app, this would trigger a download
                            alert('Download functionality would be implemented here');
                          }}
                        >
                          <Download className="w-4 h-4" />
                          <span>Download {resource.type}</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Helpful Links */}
          <section className="py-20 bg-muted/30">
            <div className="container px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" data-aos="fade-up">
                  Helpful Links
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                  Additional resources from trusted legal organizations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {links.map((link, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                      <BookOpen className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {link.description}
                    </p>
                    <Button 
                      variant="outline"
                      className="w-full flex items-center justify-center space-x-2"
                      onClick={() => window.open(link.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit Site</span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary text-white">
            <div className="container px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
                  Need Personalized Legal Advice?
                </h2>
                <p className="text-xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="200">
                  While these resources are helpful, nothing replaces personalized legal counsel
                </p>
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-accent-foreground"
                  data-aos="fade-up" 
                  data-aos-delay="400"
                  onClick={() => window.location.href = '/contact'}
                >
                  Schedule Consultation
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

export default Resources;
