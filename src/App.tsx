
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import PracticeAreas from './pages/PracticeAreas'
import Attorneys from './pages/Attorneys'
import CaseResults from './pages/CaseResults'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Services from './pages/Services'

import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/attorneys" element={<Attorneys />} />
            <Route path="/case-results" element={<CaseResults />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
