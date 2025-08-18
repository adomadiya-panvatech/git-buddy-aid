
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SkipNavigation from "@/components/SkipNavigation";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import attorneyPhoto from "@/assets/attorney-photo.jpg";

const Attorneys = () => {
  const attorneys = [
    {
      name: "Sarah Johnson",
      title: "Managing Partner",
      specialties: ["Family Law", "Personal Injury", "Criminal Defense"],
      education: ["J.D. from Stanford Law School", "B.A. from UC Berkeley"],
      experience: "25+ years",
      bio: "Sarah Johnson is a dedicated attorney with over 25 years of experience representing clients in complex legal matters. She is known for her compassionate approach and aggressive advocacy for her clients' rights.",
      image: attorneyPhoto,
      email: "sarah.johnson@ringremind.com",
      phone: "1-800-916-2459",
      linkedin: "https://linkedin.com/in/sarahjohnson"
    },
    {
      name: "Michael Chen",
      title: "Senior Associate",
      specialties: ["Immigration Law", "Business Law"],
      education: ["J.D. from UCLA School of Law", "B.S. from MIT"],
      experience: "15+ years",
      bio: "Michael Chen specializes in immigration law and has helped hundreds of families navigate the complex immigration system. His technical background gives him a unique perspective on complex legal issues.",
      image: attorneyPhoto,
      email: "michael.chen@ringremind.com",
      phone: "1-800-916-2459",
      linkedin: "https://linkedin.com/in/michaelchen"
    },
    {
      name: "Emily Rodriguez",
      title: "Associate Attorney",
      specialties: ["Family Law", "Domestic Violence"],
      education: ["J.D. from University of San Diego", "B.A. from UCSD"],
      experience: "8+ years",
      bio: "Emily Rodriguez is passionate about family law and protecting victims of domestic violence. She brings empathy and determination to every case she handles.",
      image: attorneyPhoto,
      email: "emily.rodriguez@ringremind.com",
      phone: "1-800-916-2459",
      linkedin: "https://linkedin.com/in/emilyrodriguez"
    }
  ];

  return (
    <>
      <SEO 
        title="Our Attorneys - Experienced Legal Team | RingRemind"
        description="Meet our experienced team of attorneys specializing in family law, personal injury, criminal defense, and immigration law in Poway, CA."
        url="https://ringremind.com/attorneys"
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
                  Our Attorneys
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="200">
                  Experienced legal professionals dedicated to your success
                </p>
              </div>
            </div>
          </section>

          {/* Attorneys Section */}
          <section className="py-20 bg-background">
            <div className="container px-4">
              <div className="space-y-16 max-w-6xl mx-auto">
                {attorneys.map((attorney, index) => (
                  <div 
                    key={index}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                  >
                    {/* Image */}
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="relative">
                        <img
                          src={attorney.image}
                          alt={`${attorney.name} - ${attorney.title} at RingRemind Legal`}
                          className="w-full max-w-md mx-auto rounded-xl shadow-2xl"
                        />
                        <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg font-semibold">
                          {attorney.experience}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                      <h2 className="text-3xl font-bold text-primary mb-2">
                        {attorney.name}
                      </h2>
                      <p className="text-xl text-accent mb-4">
                        {attorney.title}
                      </p>

                      {/* Specialties */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-primary mb-2">Specialties:</h3>
                        <div className="flex flex-wrap gap-2">
                          {attorney.specialties.map((specialty, specialtyIndex) => (
                            <span 
                              key={specialtyIndex}
                              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {attorney.bio}
                      </p>

                      {/* Education */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-primary mb-2">Education:</h3>
                        <ul className="space-y-1">
                          {attorney.education.map((edu, eduIndex) => (
                            <li key={eduIndex} className="text-muted-foreground flex items-center">
                              <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                              {edu}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Contact */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          variant="outline"
                          className="flex items-center space-x-2"
                          onClick={() => window.location.href = `mailto:${attorney.email}`}
                        >
                          <Mail className="w-4 h-4" />
                          <span>Email</span>
                        </Button>
                        <Button 
                          variant="outline"
                          className="flex items-center space-x-2"
                          onClick={() => window.location.href = `tel:${attorney.phone}`}
                        >
                          <Phone className="w-4 h-4" />
                          <span>Call</span>
                        </Button>
                        <Button 
                          variant="outline"
                          className="flex items-center space-x-2"
                          onClick={() => window.open(attorney.linkedin, '_blank')}
                        >
                          <Linkedin className="w-4 h-4" />
                          <span>LinkedIn</span>
                        </Button>
                      </div>
                    </div>
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
                  Ready to Work With Our Team?
                </h2>
                <p className="text-xl text-white/90 mb-8" data-aos="fade-up" data-aos-delay="200">
                  Contact us today to schedule a consultation with one of our experienced attorneys
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

export default Attorneys;
