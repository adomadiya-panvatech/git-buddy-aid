
import React from 'react'
import { Zap, Shield, TrendingUp, Clock, Brain, FileText, BarChart, Users } from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: "AI Medical Coding",
      description: "Automated coding with 99.5% accuracy using advanced natural language processing",
      features: ["ICD-10 & CPT coding", "Real-time processing", "Multi-specialty support", "Direct EHR integration"],
      pricing: "Starting at $2,999/month"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Compliance Auditing",
      description: "Comprehensive audit trails and compliance monitoring for all coded charts",
      features: ["Real-time compliance checks", "Audit trail generation", "Risk assessment", "Regulatory updates"],
      pricing: "Starting at $1,499/month"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-500" />,
      title: "Revenue Optimization",
      description: "Maximize reimbursements and reduce claim denials with intelligent analytics",
      features: ["Denial prevention", "Revenue analytics", "Performance tracking", "Optimization recommendations"],
      pricing: "Starting at $1,999/month"
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "Real-Time Processing",
      description: "Process thousands of charts instantly with direct billing system integration",
      features: ["Instant processing", "Batch operations", "Priority queues", "24/7 availability"],
      pricing: "Pay per chart processed"
    },
    {
      icon: <FileText className="w-12 h-12 text-teal-500" />,
      title: "Documentation Enhancement",
      description: "AI-powered suggestions to improve clinical documentation quality",
      features: ["Documentation gaps identification", "Coding suggestions", "Quality scoring", "Provider feedback"],
      pricing: "Starting at $999/month"
    },
    {
      icon: <BarChart className="w-12 h-12 text-red-500" />,
      title: "Analytics & Reporting",
      description: "Comprehensive insights into your coding performance and revenue metrics",
      features: ["Performance dashboards", "Custom reports", "Trend analysis", "Benchmarking"],
      pricing: "Starting at $799/month"
    }
  ]

  const process = [
    {
      step: "1",
      title: "Data Integration",
      description: "Seamlessly connect your EHR system with our secure, HIPAA-compliant platform"
    },
    {
      step: "2", 
      title: "AI Analysis",
      description: "Our advanced AI engine analyzes clinical documentation and extracts relevant coding information"
    },
    {
      step: "3",
      title: "Code Assignment",
      description: "Accurate ICD-10 and CPT codes are automatically assigned with confidence scores"
    },
    {
      step: "4",
      title: "Quality Review",
      description: "Built-in quality checks ensure compliance and accuracy before final submission"
    },
    {
      step: "5",
      title: "Billing Integration",
      description: "Coded charts are automatically integrated into your billing workflow for immediate processing"
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> AI Healthcare</span>
              <br />Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From automated medical coding to revenue optimization, our AI-powered services 
              transform every aspect of your healthcare revenue cycle management.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive suite of AI-powered healthcare solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.pricing}</div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined 5-step process ensures accurate, compliant, and efficient medical coding
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex items-start gap-6 mb-12 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HealthCoder Services?
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">Process thousands of charts in minutes, not hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Compliant</h3>
              <p className="text-gray-600">HIPAA compliant with SOC 2 certification</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Growth</h3>
              <p className="text-gray-600">Increase revenue by up to 20% with optimized coding</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600">24/7 support from certified coding professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Revenue Cycle?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare organizations already using HealthCoder services to optimize their operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
