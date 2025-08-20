
import React from 'react'
import { Brain, Zap, Shield, TrendingUp, Clock, Users, Building, Heart } from 'lucide-react'
import { Button } from '../components/ui/button'

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Building className="w-12 h-12 text-blue-500" />,
      title: "Hospital Systems",
      description: "Enterprise-grade AI medical coding solutions for large hospital networks",
      features: ["Multi-specialty support", "EHR integration", "Compliance monitoring", "Real-time analytics"],
      caseStudy: "Regional Medical Center reduced coding time by 85% and increased revenue by $2.1M annually"
    },
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Specialty Clinics",
      description: "Tailored coding solutions for specialized medical practices",
      features: ["Specialty-specific coding", "Quick implementation", "Custom workflows", "Performance tracking"],
      caseStudy: "Cardiology clinic achieved 99.8% coding accuracy with 90% time savings"
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: "Revenue Cycle Management",
      description: "Complete RCM solutions powered by AI medical coding",
      features: ["End-to-end automation", "Denial management", "Revenue optimization", "Audit trails"],
      caseStudy: "RCM company increased client satisfaction by 40% while reducing operational costs"
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: "AI-First Practices",
      description: "Future-ready healthcare organizations embracing AI automation",
      features: ["Full AI integration", "Predictive analytics", "Workflow optimization", "Continuous learning"],
      caseStudy: "Tech-forward practice achieved 95% automation rate with minimal human intervention"
    }
  ]

  const industries = [
    { name: "Hospitals & Health Systems", count: "200+" },
    { name: "Ambulatory Surgery Centers", count: "150+" },
    { name: "Specialty Clinics", count: "300+" },
    { name: "Revenue Cycle Companies", count: "75+" },
    { name: "Billing Services", count: "125+" },
    { name: "EHR Vendors", count: "25+" }
  ]

  const benefits = [
    {
      metric: "99.5%",
      label: "Coding Accuracy",
      description: "Industry-leading precision across all specialties"
    },
    {
      metric: "90%",
      label: "Time Reduction",
      description: "Faster coding means quicker revenue cycle"
    },
    {
      metric: "85%",
      label: "Fewer Denials",
      description: "Significant reduction in claim rejections"
    },
    {
      metric: "24/7",
      label: "Processing",
      description: "Round-the-clock automated coding"
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">AI Solutions</span>
              <br />for Every Healthcare Need
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              From small specialty clinics to large hospital systems, our AI-powered medical coding 
              solutions adapt to your unique requirements and scale with your growth.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solutions by Organization Type
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how HealthCoder AI transforms medical coding across different healthcare settings
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <p className="text-blue-800 text-sm italic">"{solution.caseStudy}"</p>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by healthcare organizations across all segments
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">{industry.count}</div>
                <div className="text-gray-900 font-medium">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results Across All Solutions
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Consistent performance metrics that drive real business value
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{benefit.metric}</div>
                <div className="text-xl font-semibold mb-2">{benefit.label}</div>
                <div className="text-blue-100">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Seamless deployment with minimal disruption to your operations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Assessment", desc: "Analyze your current workflow" },
                { step: "2", title: "Customization", desc: "Tailor solution to your needs" },
                { step: "3", title: "Integration", desc: "Connect with existing systems" },
                { step: "4", title: "Go-Live", desc: "Deploy and monitor performance" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Find Your Perfect Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our experts help you choose the right HealthCoder AI solution for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Custom Solution
            </Button>
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg transition-all duration-300">
              Compare Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
