
import React from 'react'
import { Mail, Phone, Linkedin, Award, GraduationCap, Calendar } from 'lucide-react'

const Attorneys: React.FC = () => {
  const attorneys = [
    {
      name: "Sarah Mitchell",
      title: "Senior Partner",
      specialization: "Medical Malpractice & Personal Injury",
      experience: "15+ Years",
      education: "Harvard Law School, J.D.",
      achievements: ["Super Lawyers Rising Star", "Best Lawyers in America", "$50M+ in Client Recoveries"],
      email: "sarah@carelegal.com",
      phone: "+1 (555) 123-4567"
    },
    {
      name: "Michael Rodriguez",
      title: "Managing Partner",
      specialization: "Product Liability & Class Actions",
      experience: "20+ Years",
      education: "Stanford Law School, J.D.",
      achievements: ["Trial Lawyer of the Year", "Million Dollar Advocates", "$100M+ in Settlements"],
      email: "michael@carelegal.com",
      phone: "+1 (555) 123-4568"
    },
    {
      name: "Emily Chen",
      title: "Partner",
      specialization: "Workers' Compensation & Insurance Claims",
      experience: "12+ Years",
      education: "Yale Law School, J.D.",
      achievements: ["Outstanding Young Lawyer", "Top 40 Under 40", "$25M+ in Awards"],
      email: "emily@carelegal.com",
      phone: "+1 (555) 123-4569"
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Legal Team
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our experienced attorneys who are dedicated to fighting for your rights and achieving the best possible outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {attorneys.map((attorney, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border"
            >
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {attorney.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{attorney.name}</h3>
                <p className="text-primary font-semibold mb-1">{attorney.title}</p>
                <p className="text-muted-foreground">{attorney.specialization}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm">{attorney.experience}</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-sm">{attorney.education}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Achievements
                </h4>
                <ul className="space-y-1">
                  {attorney.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${attorney.email}`}
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
                <a
                  href={`tel:${attorney.phone}`}
                  className="flex items-center justify-center gap-2 border border-primary text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Work with Our Team?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Our experienced attorneys are ready to evaluate your case and fight for the compensation you deserve.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  )
}

export default Attorneys
