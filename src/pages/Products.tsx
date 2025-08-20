
import React from 'react'
import { Check, Star, Zap, Shield, Brain, BarChart } from 'lucide-react'
import { Button } from '../components/ui/button'

const Products: React.FC = () => {
  const products = [
    {
      name: "HealthCoder Core",
      description: "Essential AI medical coding for small to medium practices",
      price: "$2,999",
      period: "per month",
      features: [
        "Up to 5,000 charts/month",
        "ICD-10 & CPT coding",
        "Basic EHR integration",
        "Email support",
        "Standard compliance checks",
        "Monthly reports"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "HealthCoder Pro",
      description: "Advanced AI coding with enhanced features for growing organizations",
      price: "$7,999",
      period: "per month",
      features: [
        "Up to 25,000 charts/month",
        "Multi-specialty coding",
        "Advanced EHR integration",
        "Priority phone & email support",
        "Real-time compliance monitoring",
        "Custom reporting dashboard",
        "API access",
        "Audit trail management"
      ],
      popular: true,
      color: "purple"
    },
    {
      name: "HealthCoder Enterprise",
      description: "Complete AI coding solution for large hospital systems",
      price: "Custom",
      period: "pricing",
      features: [
        "Unlimited chart processing",
        "Full specialty coverage",
        "Complete system integration",
        "24/7 dedicated support",
        "Advanced analytics & BI",
        "Custom workflow automation",
        "White-label options",
        "Dedicated account manager",
        "SLA guarantees"
      ],
      popular: false,
      color: "teal"
    }
  ]

  const addOns = [
    {
      name: "Advanced Analytics",
      description: "Deep insights and predictive analytics for your coding data",
      price: "$599/month"
    },
    {
      name: "Compliance Plus",
      description: "Enhanced compliance monitoring with regulatory updates",
      price: "$399/month"
    },
    {
      name: "Custom Integration",
      description: "Dedicated development for unique system integrations",
      price: "Quote on request"
    },
    {
      name: "Training & Certification",
      description: "Comprehensive staff training and certification programs",
      price: "$1,999 one-time"
    }
  ]

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "AI-Powered Engine",
      description: "Advanced machine learning algorithms trained on millions of medical records"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Real-Time Processing",
      description: "Instant coding results with immediate integration into your workflow"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "HIPAA Compliant",
      description: "Bank-level security with SOC 2 certification and end-to-end encryption"
    },
    {
      icon: <BarChart className="w-8 h-8 text-purple-500" />,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and insights to optimize your revenue cycle"
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              HealthCoder AI
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Products</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Choose the perfect AI medical coding solution for your organization. 
              All plans include our industry-leading 99.5% accuracy guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to fit organizations of all sizes
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <div key={index} className={`relative bg-white border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ${
                product.popular ? 'border-purple-500 scale-105' : 'border-gray-200'
              }`}>
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-gray-500 ml-2">/{product.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full py-3 font-semibold transition-all duration-300 ${
                  product.popular
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white'
                }`}>
                  {product.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features in Every Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced AI technology and enterprise-grade features across all our products
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enhance Your Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Optional add-ons to customize your HealthCoder AI solution
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{addon.name}</h3>
                  <span className="text-blue-600 font-semibold">{addon.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              See detailed feature comparison across all our products
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Core</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Pro</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Monthly Chart Volume", "5,000", "25,000", "Unlimited"],
                  ["AI Accuracy", "99.5%", "99.5%", "99.5%"],
                  ["EHR Integration", "Basic", "Advanced", "Complete"],
                  ["Support", "Email", "Phone & Email", "24/7 Dedicated"],
                  ["Analytics", "Basic", "Advanced", "Enterprise BI"],
                  ["API Access", "❌", "✅", "✅"],
                  ["Custom Workflows", "❌", "Limited", "Unlimited"],
                  ["White-label", "❌", "❌", "✅"]
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">{row[0]}</td>
                    <td className="py-4 px-4 text-center text-gray-700">{row[1]}</td>
                    <td className="py-4 px-4 text-center text-gray-700">{row[2]}</td>
                    <td className="py-4 px-4 text-center text-gray-700">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Medical Coding?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience the power of AI medical coding
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg transition-all duration-300">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
