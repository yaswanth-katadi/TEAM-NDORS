
import { useLayoutEffect, useRef } from 'react'
import { ArrowDown, ArrowUpRight, Users } from 'lucide-react'
import { gsap } from 'gsap'

import './Teams.css'
import heroBuggy from '../assets/images/hero-buggy.jpg'

const yearGroups = [
  {
    year: '02',
    title: 'SECOND YEAR',
    description: 'The next generation of NDORS engineers.',
  },
  {
    year: '03',
    title: 'THIRD YEAR',
    description: 'Building experience through engineering and teamwork.',
  },
  {
    year: '04',
    title: 'FOURTH YEAR',
    description: 'Experience, leadership and years of dedication.',
  },
]

function Teams() {
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
      })

      timeline
        .from('.teams-hero-image', {
          scale: 1.12,
          duration: 1.6,
          ease: 'power2.out',
        })
        .from('.teams-hero-content .section-label', {
          y: 20,
          opacity: 0,
          duration: 0.6,
        }, '-=1')
        .from('.teams-hero-content h1', {
          y: 55,
          opacity: 0,
          duration: 0.8,
        }, '-=0.4')
        .from('.teams-hero-content p, .teams-hero-content a', {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
        }, '-=0.4')

      gsap.from('.teams-intro > div, .teams-intro > p', {
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.teams-intro',
          start: 'top 85%',
          once: true,
        },
      })
    }, pageRef)

    return () => context.revert()
  }, [])

  return (
    <main className="teams-page" ref={pageRef}>
      <section className="teams-hero">
        <img
          src={heroBuggy}
          alt="Team NDORS off-road buggy"
          className="teams-hero-image"
          loading="lazy"
          decoding="async"
        />

        <div className="teams-hero-overlay" />

        <div className="teams-hero-content">
          <span className="section-label">
            <span /> THE PEOPLE BEHIND THE MACHINE
          </span>

          <h1>
            BUILT BY
            <span> TEAMWORK.</span>
          </h1>

          <p>
            A team driven by engineering, innovation
            and the passion to push beyond limits.
          </p>

          <a href="#year-groups">
            MEET THE TEAM <ArrowDown size={17} />
          </a>
        </div>

        <span className="teams-hero-number">NDORS / TEAM</span>
      </section>

      <section className="teams-intro">
        <div>
          <span className="section-label">
            <span /> ONE TEAM. ONE VISION.
          </span>

          <h2>
            ENGINEERING IS
            <span> A TEAM SPORT.</span>
          </h2>
        </div>

        <p>
          Behind every successful machine is a group of
          individuals who bring their skills, ideas and
          determination together. Meet the people who
          make Team NDORS what it is.
        </p>
      </section>

      <section className="team-years" id="year-groups">
        <div className="team-years-heading">
          <div>
            <span className="section-label">
              <span /> THE PEOPLE OF NDORS
            </span>

            <h2>
              MEET OUR
              <span> MEMBERS.</span>
            </h2>
          </div>

          <span className="team-years-side-label">
            NIT DURGAPUR
          </span>
        </div>

        {yearGroups.map((group) => (
          <section className="team-year-block" key={group.year}>
            <div className="team-year-heading">
              <span className="team-year-number">
                {group.year}
              </span>

              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>

              <ArrowUpRight className="team-year-arrow" />
            </div>

            <div className="team-members-placeholder">
              <div className="team-placeholder-icon">
                <Users size={30} strokeWidth={1.3} />
              </div>

              <span>MEET THE {group.title} TEAM</span>

              <p>
                Member profiles and photographs will be
                updated soon.
              </p>

              <span className="team-coming-soon">
                PROFILES COMING SOON
              </span>
            </div>
          </section>
        ))}
      </section>
    </main>
  )
}

export default Teams
