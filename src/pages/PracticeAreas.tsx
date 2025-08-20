
import React from 'react'
import { CheckCircle, Scale, Shield, Users, Heart, Car, Building, Briefcase } from 'lucide-react'

const PracticeAreas: React.FC = () => {
  const practiceAreas = [
    {
      icon: Heart,
      title: "Medical Malpractice",
      description: "Holding healthcare providers accountable for negligent care that causes harm to patients.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Car,
      title: "Personal Injury",
      description: "Comprehensive representation for accident victims seeking compensation for their injuries.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building,
      title: "Product Liability",
      description: "Fighting for consumers injured by defective or dangerous products and medications.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Briefcase,
      title: "Workers' Compensation",
      description: "Ensuring injured workers receive the benefits and compensation they deserve.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Shield,
      title: "Insurance Claims",
      description: "Helping policyholders get fair treatment from insurance companies.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Class Action Lawsuits",
      description: "Representing groups of people harmed by corporate misconduct or negligence.",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Practice Areas
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in complex legal matters that require experienced advocacy and dedicated representation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6`}>
                <area.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-3xl p-8 md:p-12 text-center">
          <Scale className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Don't See Your Case Type?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We handle many other types of legal matters. Contact us to discuss your specific situation and learn how we can help.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  )
}

export default PracticeAreas
