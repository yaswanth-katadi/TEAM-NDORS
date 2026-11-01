
import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'

import heroBuggy from '../assets/images/hero-buggy.jpg'
import './Hero.css'

function Hero() {
  const heroRef = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      timeline
        .from('.hero-image img', {
          scale: 1.12,
          duration: 1.8,
          ease: 'power2.out',
        })
        .from('.hero-label', {
          y: 25,
          opacity: 0,
          duration: 0.7,
        }, '-=1.1')
        .from('.hero-content h1', {
          y: 65,
          opacity: 0,
          duration: 1,
        }, '-=0.5')
        .from('.hero-description', {
          y: 25,
          opacity: 0,
          duration: 0.7,
        }, '-=0.6')
        .from('.hero-buttons', {
          y: 25,
          opacity: 0,
          duration: 0.7,
        }, '-=0.4')
        .from('.hero-bottom', {
          y: 20,
          opacity: 0,
          duration: 0.6,
        }, '-=0.3')
    }, heroRef)

    return () => context.revert()
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-image">
        <img
  src={heroBuggy}
  alt="Off-road BAJA buggy"
  fetchPriority="high"
  decoding="async"
/>
      </div>

      <div className="hero-shade" />

      <div className="hero-content">
        <p className="hero-label">
          <span /> NIT DURGAPUR · OFF-ROAD RACING
        </p>

        <h1>
          ENGINEERING
          <span>BEYOND LIMITS.</span>
        </h1>

        <p className="hero-description">
          Driven by innovation. Built for the extreme.
          We are Team NDORS, the off-road racing team
          of NIT Durgapur.
        </p>

        <div className="hero-buttons">
          <a href="#about" className="hero-button primary">
            EXPLORE OUR JOURNEY <ArrowRight size={18} />
          </a>

          <Link to="/teams" className="hero-button secondary">
            MEET THE TEAM
          </Link>
        </div>
      </div>

      <div className="hero-bottom">
        <span>DESIGN. BUILD. RACE.</span>
        <a href="#about">
          SCROLL TO EXPLORE <ChevronDown size={17} />
        </a>
        <span>TEAM NDORS / NIT DURGAPUR</span>
      </div>
    </section>
  )
}

export default Hero
