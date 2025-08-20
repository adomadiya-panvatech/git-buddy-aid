
import React from 'react'
import { Users, Target, Eye, Heart, Award, TrendingUp, Zap, Shield } from 'lucide-react'

const About: React.FC = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Innovation",
      description: "We continuously push the boundaries of AI technology to deliver cutting-edge solutions"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Security",
      description: "HIPAA compliance and SOC 2 certification ensure your data is always protected"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Care-Focused",
      description: "Everything we do is designed to improve patient care and healthcare outcomes"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Excellence",
      description: "We strive for 99.5% accuracy in everything we deliver to our clients"
    }
  ]

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      background: "Former Chief Medical Officer with 15+ years in healthcare technology",
      image: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder", 
      background: "AI researcher with expertise in natural language processing and machine learning",
      image: "MR"
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Medical Officer",
      background: "Board-certified physician and healthcare informatics specialist",
      image: "EW"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      background: "Former lead engineer at major tech companies, specializing in healthcare AI",
      image: "DK"
    }
  ]

  const milestones = [
    { year: "2019", event: "HealthCoder founded with mission to revolutionize medical coding" },
    { year: "2020", event: "First AI model deployed, achieving 95% accuracy rate" },
    { year: "2021", event: "Series A funding raised, expanded to 50+ healthcare clients" },
    { year: "2022", event: "Achieved 99.5% accuracy rate, processed over 1M charts" },
    { year: "2023", event: "SOC 2 certification obtained, launched enterprise platform" },
    { year: "2024", event: "500+ clients, processing 10M+ charts annually" }
  ]

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing Healthcare with
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> AI Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              HealthCoder was founded with a simple yet powerful mission: to transform medical coding 
              through artificial intelligence, enabling healthcare providers to focus on what matters most - patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower healthcare organizations with AI-driven solutions that streamline medical coding, 
                reduce administrative burden, and improve financial outcomes while maintaining the highest standards of accuracy and compliance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the global leader in AI-powered healthcare solutions, creating a world where 
                healthcare providers can dedicate 100% of their time to patient care while AI handles administrative tasks seamlessly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Purpose</h3>
              <p className="text-gray-600 leading-relaxed">
                Every line of code we write, every algorithm we develop, and every solution we deploy 
                is designed to ultimately improve patient outcomes and make healthcare more accessible and efficient.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{milestone.year}</span>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-gray-700 text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our diverse team of healthcare professionals, AI researchers, and technology experts 
              are united by a shared passion for transforming healthcare.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:from-blue-200 group-hover:to-teal-200 transition-all duration-300">
                  <span className="text-2xl font-bold text-blue-600">{member.image}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">HealthCoder by the Numbers</h2>
            <p className="text-blue-100 text-lg">Our impact on healthcare organizations worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Healthcare Clients</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">10M+</div>
              <div className="text-blue-100">Charts Processed</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">99.5%</div>
              <div className="text-blue-100">Accuracy Rate</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">$100M+</div>
              <div className="text-blue-100">Revenue Optimized</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a healthcare provider looking to transform your coding workflow or 
            a talented professional wanting to make a difference in healthcare, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Today
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Join Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
