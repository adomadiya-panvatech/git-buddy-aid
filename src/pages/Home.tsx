
import React from 'react'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { PracticeAreas } from '../components/PracticeAreas'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <PracticeAreas />
    </div>
  )
}

export default Home
