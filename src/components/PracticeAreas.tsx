
import React from 'react'
import { Button } from './ui/button'
import { Car, Building2, Briefcase, Heart, Users, Shield, ArrowRight, Phone } from 'lucide-react'

const practiceAreas = [
  {
    icon: Car,
    title: "Auto Accidents",
    description: "Car crashes, motorcycle accidents, truck collisions, and hit-and-run cases.",
    features: ["Free case evaluation", "No upfront costs", "Maximum compensation"],
    color: "blue"
  },
  {
    icon: Building2,
    title: "Slip & Fall",
    description: "Property owner negligence, unsafe conditions, and premises liability cases.",
    features: ["Property inspection", "Evidence collection", "Expert witnesses"],
    color: "green"
  },
  {
    icon: Briefcase,
    title: "Workplace Injuries",
    description: "Construction accidents, industrial injuries, and workers' compensation claims.",
    features: ["OSHA violations", "Third-party claims", "Disability benefits"],
    color: "purple"
  },
  {
    icon: Heart,
    title: "Medical Malpractice",
    description: "Hospital negligence, surgical errors, and misdiagnosis cases.",
    features: ["Medical experts", "Record analysis", "Compensation for damages"],
    color: "red"
  },
  {
    icon: Users,
    title: "Wrongful Death",
    description: "Fatal accidents due to negligence, supporting families through difficult times.",
    features: ["Compassionate support", "Financial recovery", "Justice for families"],
    color: "orange"
  },
  {
    icon: Shield,
    title: "Product Liability",
    description: "Defective products, dangerous drugs, and consumer protection cases.",
    features: ["Product testing", "Class action suits", "Manufacturing defects"],
    color: "teal"
  }
]

const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    icon: "bg-blue-100 text-blue-600",
    border: "border-blue-200",
    button: "text-blue-600 hover:text-blue-700"
  },
  green: {
    bg: "bg-green-50",
    icon: "bg-green-100 text-green-600",
    border: "border-green-200",
    button: "text-green-600 hover:text-green-700"
  },
  purple: {
    bg: "bg-purple-50",
    icon: "bg-purple-100 text-purple-600",
    border: "border-purple-200",
    button: "text-purple-600 hover:text-purple-700"
  },
  red: {
    bg: "bg-red-50",
    icon: "bg-red-100 text-red-600",
    border: "border-red-200",
    button: "text-red-600 hover:text-red-700"
  },
  orange: {
    bg: "bg-orange-50",
    icon: "bg-orange-100 text-orange-600",
    border: "border-orange-200",
    button: "text-orange-600 hover:text-orange-700"
  },
  teal: {
    bg: "bg-teal-50",
    icon: "bg-teal-100 text-teal-600",
    border: "border-teal-200",
    button: "text-teal-600 hover:text-teal-700"
  }
}

export const PracticeAreas: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Practice Areas
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            We Handle All Types of 
            <span className="text-blue-600"> Personal Injury Cases</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced attorneys specialize in various areas of personal injury law, 
            ensuring you get the expert representation you deserve.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon
            const colors = colorClasses[area.color as keyof typeof colorClasses]
            
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{area.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{area.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-slate-700">
                      <div className="w-2 h-2 bg-slate-400 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${colors.button} bg-transparent border-2 border-current hover:bg-current hover:text-white font-semibold`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-slate-900 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Don't See Your Case Type Listed?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We handle many types of personal injury cases. Contact us today for a free consultation 
            to discuss your specific situation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold"
            >
              Free Case Evaluation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
