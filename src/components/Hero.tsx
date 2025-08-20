
import React from 'react'
import { Button } from './ui/button'
import { Phone, Mail, Clock, Award, Users, CheckCircle } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat" />
      </div>

      <div className="relative z-20 container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Emergency Banner */}
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <Phone className="w-4 h-4" />
              24/7 Emergency Legal Help: (555) 123-4567
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Injured?</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  We Fight
                </span>
                <br />
                <span className="text-white">For You</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                With over $500 million recovered for our clients, we're the trusted choice for personal injury cases. 
                No fees unless we win your case.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg">
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-lg"
              >
                Learn More About Us
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">$500M+</div>
                <div className="text-sm text-gray-300">Recovered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">25+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">10,000+</div>
                <div className="text-sm text-gray-300">Cases Won</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Stats */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Award-Winning Attorneys</h3>
                    <p className="text-gray-300">Recognized by peers and clients</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dedicated Team</h3>
                    <p className="text-gray-300">50+ legal professionals</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Proven Results</h3>
                    <p className="text-gray-300">95% success rate</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-600">
                  <div className="flex items-center gap-2 text-green-400 font-semibold">
                    <CheckCircle className="w-5 h-5" />
                    No Fees Unless We Win
                  </div>
                  <div className="flex items-center gap-2 text-green-400 font-semibold mt-2">
                    <Clock className="w-5 h-5" />
                    Free Case Evaluation
                  </div>
                  <div className="flex items-center gap-2 text-green-400 font-semibold mt-2">
                    <Mail className="w-5 h-5" />
                    24/7 Support Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
