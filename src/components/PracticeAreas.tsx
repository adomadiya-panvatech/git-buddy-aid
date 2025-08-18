import { Users, Heart, Shield, Plane } from "lucide-react";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: Heart,
      title: "Family Law",
      description: "Divorce, child custody, adoption, and domestic relations handled with sensitivity and care.",
      features: ["Divorce & Separation", "Child Custody", "Adoption Services", "Prenuptial Agreements"]
    },
    {
      icon: Users,
      title: "Personal Injury",
      description: "Fighting for compensation after accidents, medical malpractice, and workplace injuries.",
      features: ["Car Accidents", "Medical Malpractice", "Workplace Injuries", "Insurance Claims"]
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Protecting your rights and freedom with aggressive defense strategies.",
      features: ["DUI Defense", "Drug Charges", "Assault Cases", "White Collar Crime"]
    },
    {
      icon: Plane,
      title: "Immigration",
      description: "Helping families and individuals navigate complex immigration processes.",
      features: ["Visa Applications", "Green Card Process", "Citizenship", "Deportation Defense"]
    }
  ];

  return (
    <section 
      id="practice-areas" 
      className="py-20 bg-secondary"
      aria-labelledby="practice-areas-heading"
    >
      <div className="container px-4">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
          <h2 
            id="practice-areas-heading"
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Our Practice Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive legal services tailored to your needs, delivered with expertise and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto" role="list" aria-label="Legal practice areas">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <article
                key={index}
                className="bg-white rounded-lg p-8 hover:shadow-lg transition-all duration-300 border border-border group hover:border-accent"
                role="listitem"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 150)}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0" data-aos="zoom-in" data-aos-delay={400 + (index * 150)}>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6 text-accent group-hover:text-white" aria-hidden="true" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-3" data-aos="fade-right" data-aos-delay={500 + (index * 150)}>
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground mb-4" data-aos="fade-right" data-aos-delay={600 + (index * 150)}>
                      {area.description}
                    </p>
                    
                    <ul className="space-y-2" role="list" aria-label={`${area.title} services`}>
                      {area.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-center text-sm text-foreground"
                          role="listitem"
                          data-aos="fade-right"
                          data-aos-delay={700 + (index * 150) + (featureIndex * 50)}
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" aria-hidden="true"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;