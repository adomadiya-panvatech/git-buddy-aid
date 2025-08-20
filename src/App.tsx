
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import Services from './pages/Services'
import PracticeAreasPage from './pages/PracticeAreasPage'
import Attorneys from './pages/Attorneys'
import BlogPage from './pages/BlogPage'
import BlogPost from './pages/BlogPost'
import ContactPage from './pages/ContactPage'
import CaseResults from './pages/CaseResults'
import TestimonialsPage from './pages/TestimonialsPage'
import Resources from './pages/Resources'
import FAQPage from './pages/FAQPage'

import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/practice-areas" element={<PracticeAreasPage />} />
            <Route path="/attorneys" element={<Attorneys />} />
            <Route path="/case-results" element={<CaseResults />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
