
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Shield, CheckCircle, Scale } from "lucide-react";
import { motion } from "framer-motion";
import attorneyPhoto from "@/assets/attorney-photo.jpg";

const About = () => {
  const stats = [
    { icon: Award, number: "25+", label: "Years Experience", color: "text-blue-600" },
    { icon: Users, number: "500+", label: "Cases Won", color: "text-green-600" },
    { icon: Scale, number: "$10M+", label: "Recovered", color: "text-purple-600" },
    { icon: Clock, number: "24/7", label: "Available", color: "text-orange-600" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Aggressive Representation",
      description: "We fight tirelessly for our clients' rights and never back down from a challenge."
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "Our track record speaks for itself with millions recovered for our clients."
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "You'll work directly with experienced attorneys, not just paralegals or assistants."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Experienced Legal Advocates
                <span className="block text-accent">Fighting For You</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                For over 25 years, we have been dedicated to providing exceptional legal representation 
                to individuals and families throughout Poway and Southern California.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that legal issues can be overwhelming and stressful. That's why we combine 
                aggressive advocacy with compassionate guidance, ensuring you receive both the legal expertise 
                and personal attention you deserve.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-primary mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent-light text-white font-bold px-8 py-4"
                onClick={() => window.location.href = '/about'}
              >
                Learn More About Us
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="font-bold px-8 py-4"
                onClick={() => window.location.href = '/contact'}
              >
                Free Consultation
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Attorney Photo */}
            <div className="relative">
              <img
                src={attorneyPhoto}
                alt="Sarah Johnson - Lead Attorney"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">98%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 text-center shadow/10 hover:shadow-lg transition-shadow"
                  >
                    <IconComponent className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg p-12 shadow-lg text-center"
        >
          <h3 className="text-3xl font-bold text-primary mb-6">
            Why Choose RingRemind Legal?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            We're not just another law firm. We're your advocates, fighting for justice and the compensation you deserve. 
            With our proven track record and commitment to excellence, you can trust us to handle your case with the 
            dedication and expertise it demands.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent-light text-white font-bold px-8 py-4"
            onClick={() => window.location.href = '/contact'}
          >
            Schedule Your Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
