
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary via-primary-dark to-primary"
      aria-labelledby="hero-heading"
    >
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
        role="img"
        aria-label="Legal office background"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary-dark/85 to-primary/90" />
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-accent/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border-2 border-accent-light/30 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <Award className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">Trusted Legal Excellence Since 1998</span>
          </div>

          <h1 
            id="hero-heading"
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Your Legal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent">
              Champions
            </span>
          </h1>
          
          <p 
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 max-w-4xl mx-auto font-light leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Dedicated to protecting your rights and securing your future with 
            <span className="text-accent font-medium"> compassionate expertise</span> and unwavering commitment.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold text-lg px-10 py-6 h-auto rounded-full shadow-2xl hover:shadow-accent/25 transform hover:scale-105 transition-all duration-300"
              aria-label="Schedule your free legal consultation"
            >
              <a href="https://stageadmin.ringremind.com/Onboarding" target="_blank" rel="noopener noreferrer">
                Get Free Consultation
                <ArrowRight className="w-6 h-6 ml-3" aria-hidden="true" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold text-lg px-10 py-6 h-auto rounded-full transition-all duration-300"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" 
            role="region" 
            aria-label="Trust indicators"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20" data-aos="zoom-in" data-aos-delay="600">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2" aria-label="500 plus cases won">500+</div>
              <div className="text-white/80">Cases Successfully Won</div>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20" data-aos="zoom-in" data-aos-delay="700">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2" aria-label="25 plus years experience">25+</div>
              <div className="text-white/80">Years of Excellence</div>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20" data-aos="zoom-in" data-aos-delay="800">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2" aria-label="98 percent client satisfaction">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" 
        aria-hidden="true"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center p-2">
          <div className="w-1 h-4 bg-white/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
