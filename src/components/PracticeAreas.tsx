
import { Button } from "@/components/ui/button";
import { Heart, Car, Shield, Users, Scale, Building, FileText, Home } from "lucide-react";
import { motion } from "framer-motion";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: Car,
      title: "Personal Injury",
      description: "Maximum compensation for accident victims and their families. We fight insurance companies to get you what you deserve.",
      features: ["Auto Accidents", "Slip & Fall", "Medical Malpractice", "Wrongful Death"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Heart,
      title: "Family Law",
      description: "Compassionate legal guidance through life's most challenging family matters with experienced representation.",
      features: ["Divorce", "Child Custody", "Support Issues", "Domestic Violence"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Aggressive defense protecting your rights and freedom. Available 24/7 for urgent criminal matters.",
      features: ["DUI Defense", "Drug Crimes", "Assault", "White Collar Crimes"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Immigration Law",
      description: "Navigate complex immigration processes with experienced guidance toward achieving your American dream.",
      features: ["Green Cards", "Citizenship", "Visa Applications", "Deportation Defense"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Building,
      title: "Business Law",
      description: "Comprehensive legal solutions for businesses of all sizes, from startups to established corporations.",
      features: ["Business Formation", "Contracts", "Employment Law", "Litigation"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Home,
      title: "Real Estate Law",
      description: "Expert guidance through property transactions, disputes, and real estate legal matters.",
      features: ["Property Transactions", "Landlord/Tenant", "Property Disputes", "Foreclosure"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="practice-areas" className="py-20 bg-background">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Practice Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive legal services across multiple practice areas, 
            ensuring expert representation for all your legal needs.
          </p>
        </motion.div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  {/* Icon Header */}
                  <div className={`bg-gradient-to-r ${area.color} p-6 rounded-t-lg`}>
                    <IconComponent className="w-12 h-12 text-white mx-auto" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {area.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-accent group-hover:text-white transition-colors"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-primary text-white rounded-lg p-12"
        >
          <h3 className="text-3xl font-bold mb-6">
            Don't See Your Legal Issue Listed?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We handle a wide variety of legal matters. Contact us to discuss your specific situation 
            and learn how we can help protect your rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent-light text-white font-bold px-8 py-4"
              onClick={() => window.location.href = '/contact'}
            >
              Free Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4"
              onClick={() => window.location.href = 'tel:8009162459'}
            >
              Call (800) 916-2459
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreas;
