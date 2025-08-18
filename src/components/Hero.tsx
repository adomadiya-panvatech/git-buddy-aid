
import { Button } from "@/components/ui/button";
import { Phone, Award, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/95 via-primary to-primary-dark text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/hero-background.jpg')] bg-cover bg-center opacity-20"></div>
      
      <div className="container relative z-10 px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Fighting for
                <span className="block text-accent"> Justice</span>
                <span className="block"> & Results</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                When you're facing legal challenges, you need experienced attorneys who will fight tirelessly for your rights. We deliver results that matter.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent-light text-white font-bold px-8 py-4 text-lg rounded-none"
                onClick={() => window.location.href = '/contact'}
              >
                GET FREE CONSULTATION
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 text-lg rounded-none"
                onClick={() => window.location.href = 'tel:8009162459'}
              >
                <Phone className="w-5 h-5 mr-2" />
                CALL NOW
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">25+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">$10M+</div>
                <div className="text-sm text-white/80">Recovered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-white/80">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-white/80">Available</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Key Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Proven Track Record</h4>
                    <p className="text-white/80">Over 500 successful cases with millions recovered for our clients.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Personal Attention</h4>
                    <p className="text-white/80">Direct access to experienced attorneys, not just paralegals.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">No Fee Unless We Win</h4>
                    <p className="text-white/80">For personal injury cases, you pay nothing unless we secure a victory.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-accent/20 border border-accent/30 rounded-lg p-6 text-center">
              <h4 className="font-bold text-lg mb-2">Need Immediate Help?</h4>
              <p className="text-white/90 mb-4">Call our 24/7 emergency hotline</p>
              <a 
                href="tel:8009162459" 
                className="text-2xl font-bold text-accent hover:text-accent-light transition-colors"
              >
                (800) 916-2459
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
