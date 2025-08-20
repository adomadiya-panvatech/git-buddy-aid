
import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaRedditAlien,
  FaYoutube,
  FaXTwitter,
  FaTiktok
} from 'react-icons/fa6'
import { FaMediumM } from 'react-icons/fa'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  const socialLinks = [
    { href: "https://medium.com/@healthcoder", icon: FaMediumM, title: "Medium", color: "hover:text-green-400" },
    { href: "https://www.reddit.com/user/healthcoder/", icon: FaRedditAlien, title: "Reddit", color: "hover:text-orange-500" },
    { href: "https://www.pinterest.com/healthcoder/", icon: FaPinterestP, title: "Pinterest", color: "hover:text-red-500" },
    { href: "https://www.tiktok.com/@healthcoder", icon: FaTiktok, title: "TikTok", color: "hover:text-black" },
    { href: "https://www.youtube.com/@HealthCoder", icon: FaYoutube, title: "YouTube", color: "hover:text-red-600" },
    { href: "https://x.com/healthcoder", icon: FaXTwitter, title: "Twitter/X", color: "hover:text-blue-400" },
    { href: "https://www.facebook.com/healthcoder", icon: FaFacebookF, title: "Facebook", color: "hover:text-blue-600" },
    { href: "https://www.instagram.com/healthcoder/", icon: FaInstagram, title: "Instagram", color: "hover:text-pink-500" },
    { href: "https://www.linkedin.com/company/healthcoder/", icon: FaLinkedinIn, title: "LinkedIn", color: "hover:text-blue-700" }
  ]

  const quickLinks = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ]

  const resources = [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Whitepapers', href: '#' },
    { name: 'Blog', href: '/blog' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-4000"></div>
      </div>

      {/* Wave SVG */}
      <svg className="absolute top-0 left-0 w-full h-20 fill-current text-white transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z" />
      </svg>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">HC</span>
              </div>
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Health
                </span>
                <span className="text-white">Coder</span>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Revolutionizing healthcare with AI-powered medical coding solutions. 
              Achieve 99.5% accuracy, reduce costs, and streamline your revenue cycle.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@healthcoder.ai</span>
              </div>
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span>123 Innovation Drive<br />Tech Valley, CA 94043</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    to={resource.href} 
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Stay Updated</h3>
            <p className="text-slate-300 mb-4">
              Get the latest insights on AI in healthcare and medical coding innovations.
            </p>
            <div className="flex gap-2 mb-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-gradient-to-r from-blue-500 to-teal-500 px-4 py-2 rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-300">
              <p className="font-semibold mb-2">Follow us on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-400 ${link.color} transition-all duration-300 transform hover:scale-110`}
                    title={link.title}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-300 font-semibold mb-2">Ready to get started?</p>
              <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Book a Demo
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} HealthCoder AI. All rights reserved. 
            <span className="mx-2">|</span>
            <Link to="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <span className="mx-2">|</span>
            <Link to="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
