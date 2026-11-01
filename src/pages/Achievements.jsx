
import { useLayoutEffect, useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './Achievements.css'

import competition from '../assets/images/stories/competition.jpg'
import buggy from '../assets/images/vehicles/vehicle-2.jpg'
import team from '../assets/images/hero-buggy.jpg'

const highlights = [
  {
    number: '01',
    category: 'COMPETITION',
    title: 'The Competition Ground',
    description: 'The place where preparation meets performance.',
    image: competition,
  },
  {
    number: '02',
    category: 'ENGINEERING',
    title: 'Machines Built With Purpose',
    description:
      'Every vehicle represents countless hours of engineering and fabrication.',
    image: buggy,
  },
  {
    number: '03',
    category: 'TEAMWORK',
    title: 'The People Behind The Journey',
    description:
      'A team effort that brings ideas, people and machines together.',
    image: team,
  },
]

function Achievements() {
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      timeline
        .from('.achievements-hero-image', {
          scale: 1.12,
          duration: 1.6,
          ease: 'power2.out',
        })
        .from('.achievements-hero-content .section-label', {
          y: 20,
          opacity: 0,
          duration: 0.6,
        }, '-=1')
        .from('.achievements-hero-content h1', {
          y: 55,
          opacity: 0,
          duration: 0.8,
        }, '-=0.4')
        .from('.achievements-hero-content p, .achievements-hero-content a', {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
        }, '-=0.4')

      gsap.from('.achievements-intro > div, .achievements-intro > p', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.achievements-intro',
          start: 'top 85%',
          once: true,
        },
      })

      gsap.from('.achievement-card', {
        y: 45,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.achievement-grid',
          start: 'top 85%',
          once: true,
        },
      })

      gsap.from('.achievement-records > *', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.achievement-records',
          start: 'top 85%',
          once: true,
        },
      })
    }, pageRef)

    return () => context.revert()
  }, [])

  return (
    <main className="achievements-page" ref={pageRef}>
      <section className="achievements-hero">
        <img
          src={competition}
          alt="Team NDORS at a competition"
          className="achievements-hero-image"
          loading="lazy"
          decoding="async"
        />

        <div className="achievements-hero-overlay" />

        <div className="achievements-hero-content">
          <span className="section-label">
            <span /> OUR JOURNEY. OUR MILESTONES.
          </span>

          <h1>
            PROVEN
            <span> THROUGH ACTION.</span>
          </h1>

          <p>
            Every competition, every challenge and every
            milestone is part of the Team NDORS journey.
          </p>

          <a href="#achievement-highlights">
            EXPLORE OUR JOURNEY
            <ArrowDown size={17} />
          </a>
        </div>

        <span className="achievements-hero-index">
          NDORS / ACHIEVEMENTS
        </span>
      </section>

      <section className="achievements-intro">
        <div>
          <span className="section-label">
            <span /> BEYOND THE FINISH LINE
          </span>

          <h2>
            EVERY MILESTONE
            <span> HAS A STORY.</span>
          </h2>
        </div>

        <p>
          Our journey is shaped by engineering challenges,
          competition experiences and the determination
          to keep moving forward. Explore moments from
          our journey.
        </p>
      </section>

      <section
        className="achievement-highlights"
        id="achievement-highlights"
      >
        <div className="achievement-heading">
          <div>
            <span className="section-label">
              <span /> THE NDORS ARCHIVE
            </span>

            <h2>
              MOMENTS THAT
              <span> DEFINE US.</span>
            </h2>
          </div>

          <span className="achievement-side-label">
            ENGINEERED WITH PASSION
          </span>
        </div>

        <div className="achievement-grid">
          {highlights.map((item) => (
            <article
              className="achievement-card"
              key={item.number}
            >
              <div className="achievement-image">
                <img loading="lazy"
                decoding="async" 
                src={item.image} alt={item.title} />

                <span className="achievement-number">
                  {item.number}
                </span>

                <ArrowUpRight
                  className="achievement-arrow"
                  size={24}
                />
              </div>

              <div className="achievement-card-content">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="achievement-records">
        <span className="section-label">
          <span /> OFFICIAL RECORDS
        </span>

        <h2>
          THE RESULTS
          <span> SPEAK FOR THEMSELVES.</span>
        </h2>

        <p>
          Competition results, awards and official
          recognitions will be presented here.
        </p>

        <div className="achievement-record-placeholder">
          <span>NDORS COMPETITION RECORD</span>
          <p>Official achievement details coming soon.</p>
        </div>
      </section>
    </main>
  )
}

export default Achievements
