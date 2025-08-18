
import { Users, Heart, Shield, Plane, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: Heart,
      title: "Family Law",
      description: "Navigate life's most personal legal matters with compassionate expertise and dedicated support.",
      features: ["Divorce & Separation", "Child Custody & Support", "Adoption Services", "Prenuptial Agreements"],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      icon: Users,
      title: "Personal Injury",
      description: "Fight for the compensation you deserve with aggressive representation and proven results.",
      features: ["Car Accidents", "Medical Malpractice", "Workplace Injuries", "Insurance Claims"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Protect your rights and freedom with strategic defense and unwavering advocacy.",
      features: ["DUI Defense", "Drug Charges", "Assault Cases", "White Collar Crime"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: Plane,
      title: "Immigration Law",
      description: "Navigate complex immigration processes with experienced guidance and personalized attention.",
      features: ["Visa Applications", "Green Card Process", "Citizenship", "Deportation Defense"],
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section 
      id="practice-areas" 
      className="py-24 bg-gradient-to-br from-secondary via-white to-secondary/50"
      aria-labelledby="practice-areas-heading"
    >
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-2xl mb-8">
            <Shield className="w-10 h-10 text-accent" />
          </div>
          <h2 
            id="practice-areas-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Practice Areas</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive legal services tailored to your unique needs, delivered with expertise, 
            compassion, and an unwavering commitment to justice.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16" role="list" aria-label="Legal practice areas">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <article
                key={index}
                className="group relative bg-white rounded-3xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-accent/30 hover:-translate-y-2"
                role="listitem"
                data-aos="fade-up"
                data-aos-delay={200 + (index * 100)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 ${area.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} data-aos="zoom-in" data-aos-delay={300 + (index * 100)}>
                      <IconComponent className={`w-8 h-8 ${area.iconColor}`} aria-hidden="true" />
                    </div>
                    <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300" data-aos="fade-right" data-aos-delay={400 + (index * 100)}>
                      {area.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-aos="fade-right" data-aos-delay={500 + (index * 100)}>
                      {area.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-3 mb-8" role="list" aria-label={`${area.title} services`}>
                      {area.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center text-base text-foreground"
                          role="listitem"
                          data-aos="fade-right"
                          data-aos-delay={600 + (index * 100) + (featureIndex * 50)}
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mr-4 group-hover:scale-125 transition-transform duration-300" aria-hidden="true"></div>
                          <span className="group-hover:text-accent transition-colors duration-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button 
                      variant="outline" 
                      className="group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="800">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Need Legal Assistance?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Don't see your specific legal need? We handle a wide range of legal matters. 
              Contact us for a free consultation to discuss your case.
            </p>
            <a
              href="https://stageadmin.ringremind.com/Onboarding"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold text-lg px-10 py-6 h-auto rounded-full shadow-lg hover:shadow-accent/25 transform hover:scale-105 transition-all duration-300">
                Schedule Free Consultation
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
