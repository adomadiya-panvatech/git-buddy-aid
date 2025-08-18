
import { Star, Quote, CheckCircle } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Family Law Client",
      content: "RingRemind transformed what could have been a devastating divorce into a manageable process. Their compassionate approach and legal expertise gave me hope during my darkest hours. I'm forever grateful for their dedication.",
      rating: 5,
      location: "Poway, CA",
      image: "/placeholder.svg",
      result: "Successful divorce settlement with favorable custody arrangement"
    },
    {
      name: "Michael R.",
      role: "Personal Injury Client", 
      content: "After my accident, I felt overwhelmed and lost. RingRemind not only secured a substantial settlement but also provided emotional support throughout the entire process. They truly care about their clients beyond just the legal aspects.",
      rating: 5,
      location: "San Diego, CA",
      image: "/placeholder.svg",
      result: "$2.3M settlement for severe car accident injuries"
    },
    {
      name: "Jennifer L.",
      role: "Immigration Client",
      content: "The immigration process seemed impossible until we found RingRemind. They guided our family through every complex step with patience and expertise. Today, we're proud American citizens thanks to their incredible work.",
      rating: 5,
      location: "Escondido, CA",
      image: "/placeholder.svg",
      result: "Successful family immigration and citizenship process"
    },
    {
      name: "David K.",
      role: "Criminal Defense Client",
      content: "Facing serious charges was the most frightening experience of my life. RingRemind's aggressive defense strategy and attention to detail resulted in all charges being dismissed. They saved my future and my family's wellbeing.",
      rating: 5,
      location: "Carlsbad, CA",
      image: "/placeholder.svg",
      result: "All criminal charges dismissed, clean record maintained"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl mb-8 border border-white/20">
            <Quote className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Client Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">Stories</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Real results from real people. Discover how we've helped clients achieve 
            justice and peace of mind in their most challenging legal situations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-white/20 hover:bg-white/15 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-accent" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6" data-aos="fade-right" data-aos-delay={300 + (index * 100)}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-lg text-white/90 mb-8 italic leading-relaxed" data-aos="fade-up" data-aos-delay={400 + (index * 100)}>
                "{testimonial.content}"
              </blockquote>
              
              {/* Result */}
              <div className="flex items-start space-x-3 mb-6 p-4 bg-accent/10 rounded-2xl border border-accent/20" data-aos="fade-up" data-aos-delay={500 + (index * 100)}>
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80">
                  <span className="font-semibold text-accent">Result: </span>
                  {testimonial.result}
                </p>
              </div>
              
              {/* Client Info */}
              <div className="flex items-center justify-between" data-aos="fade-up" data-aos-delay={600 + (index * 100)}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                    <div className="text-sm text-white/70">{testimonial.role}</div>
                  </div>
                </div>
                <div className="text-sm text-white/60">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="800">
          <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20" data-aos="zoom-in" data-aos-delay="900">
            <div className="text-5xl font-bold text-accent mb-4">500+</div>
            <div className="text-white/80 text-lg">Cases Successfully Resolved</div>
            <div className="text-sm text-white/60 mt-2">Across all practice areas</div>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20" data-aos="zoom-in" data-aos-delay="1000">
            <div className="text-5xl font-bold text-accent mb-4">98%</div>
            <div className="text-white/80 text-lg">Client Satisfaction Rate</div>
            <div className="text-sm text-white/60 mt-2">Based on post-case surveys</div>
          </div>
          <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20" data-aos="zoom-in" data-aos-delay="1100">
            <div className="text-5xl font-bold text-accent mb-4">25+</div>
            <div className="text-white/80 text-lg">Years of Legal Excellence</div>
            <div className="text-sm text-white/60 mt-2">Trusted by the community</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
