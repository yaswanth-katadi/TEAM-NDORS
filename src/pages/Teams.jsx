
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, UserRound } from 'lucide-react'
import './Teams.css'
import adityaPhoto from '../assets/images/teams/member-aditya-bhat.jpg'
import aradhyPhoto from '../assets/images/teams/member-aradhy-soni.jpg'
import armanPhoto from '../assets/images/teams/member-arman-sahoo.jpg'
import charanPhoto from '../assets/images/teams/charan-rollcage.png';
import digantaPhoto from '../assets/images/teams/member-diganta-kar.jpg'
import jeevanPhoto from '../assets/images/teams/member-jeevan-polamarasetty.jpg'
import pratyakshPhoto from '../assets/images/teams/member-pratyaksh-raj.jpg'
import shreyaPhoto from '../assets/images/teams/member-shreya-keshri.jpg'
import shrutiPhoto from '../assets/images/teams/member-shruti-nath.jpg'
import sohamPhoto from '../assets/images/teams/member-soham-rana.jpg'
import sreejanPhoto from '../assets/images/teams/member-sreejan-paul.jpg'

const facultyAdvisors = [
  {
    name: 'Prof. Jayabrata Dhar',
    department: 'Mechanical Engineering',
  },
  {
    name: 'Prof. Sandip Kumar Lahiri',
    department: 'Chemical Engineering',
  },
]

const membersByYear = [
  {
    year: 'FOURTH YEAR',
    subtitle: 'Leading the team forward',
    members: [
      { name: 'Lakshya Attri', role: 'CAPTAIN' },
      { name: 'Alok Kumar', role: 'VICE CAPTAIN' },
      { name: 'Heeth Bhandari' },
      { name: 'Kritanu Chattopadhyay' },
    ],
  },
  {
    year: 'THIRD YEAR',
    subtitle: 'Building the next generation',
    members: [
      { name: 'Abhik Banduri' },
      { name: 'Asmit Kumar Shaw' },
      { name: 'Dawlat Kumar Kanungo' },
      { name: 'Prateek Pandey' },
      { name: 'Rishul Shende' },
      { name: 'Saunak Kamilya' },
      { name: 'Shibam Bhattacharjee' },
      { name: 'Soham Banerjee' },
    ],
  },
  {
    year: 'SECOND YEAR',
    subtitle: 'The newest members of NDORS',
    members: [
      { name: 'Aditya S Bhat', domain: 'POWERTRAIN', image: adityaPhoto },
      { name: 'Aradhy Soni', domain: 'STEERING', image: aradhyPhoto },
      { name: 'Arman Sahoo', domain: 'BRAKES', image: armanPhoto },
      { name: 'Charan Gandaboina', domain: 'ROLL CAGE', image: charanPhoto },
      { name: 'Diganta Kar', domain: 'SUSPENSION', image: digantaPhoto },
      { name: 'Jeevan Polamarasetty', domain: 'POWERTRAIN', image: jeevanPhoto },
      { name: 'Mehuli Maity', domain: 'DOMAIN DETAILS PENDING' },
      { name: 'Nambada Sai Vignesh', domain: 'DOMAIN DETAILS PENDING' },
      { name: 'Pratyaksh Raj', domain: 'POWERTRAIN', image: pratyakshPhoto },
      { name: 'Shreya Keshri', domain: 'BRAKES & SAFETY', image: shreyaPhoto },
      { name: 'Shruti Nath', domain: 'ROLL CAGE', image: shrutiPhoto },
      { name: 'Soham Rana', domain: 'ROLL CAGE', image: sohamPhoto },
      { name: 'Sreejan Paul', domain: 'SUSPENSION', image: sreejanPhoto },
    ],
  },
]

function FacultySection() {
  return (
    <section className="faculty-section">
      <div className="teams-section-heading">
        <span className="teams-eyebrow">GUIDANCE & LEADERSHIP</span>
        <h2>Faculty <span>Advisors</span></h2>
        <p>Guided by experience. Driven by engineering.</p>
      </div>

      <div className="faculty-grid">
        {facultyAdvisors.map((faculty) => (
          <article className="faculty-card" key={faculty.name}>
            <div className="faculty-image">
              <UserRound size={58} strokeWidth={1.2} />
            </div>
            <div className="faculty-info">
              <h3>{faculty.name}</h3>
              <p>{faculty.department}</p>
              <span>FACULTY ADVISOR</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function YearCarousel({ year, subtitle, members }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const resumeTimer = useRef(null)
  const pointerStart = useRef(null)
  const wheelLock = useRef(false)

  const total = members.length

  const pauseTemporarily = useCallback(() => {
    setIsPaused(true)
    window.clearTimeout(resumeTimer.current)

    resumeTimer.current = window.setTimeout(() => {
      setIsPaused(false)
    }, 4000)
  }, [])

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % total)
  }, [total])

  const previous = useCallback(() => {
    setActiveIndex((current) => (current - 1 + total) % total)
  }, [total])

  const goTo = useCallback((index) => {
    setActiveIndex((index + total) % total)
    pauseTemporarily()
  }, [total, pauseTemporarily])

  useEffect(() => {
    if (isPaused) return

    const interval = window.setInterval(next, 3000)
    return () => window.clearInterval(interval)
  }, [isPaused, next, activeIndex])

  useEffect(() => {
    return () => window.clearTimeout(resumeTimer.current)
  }, [])

  const getOffset = (index) => {
    let offset = index - activeIndex

    if (offset > total / 2) offset -= total
    if (offset < -total / 2) offset += total

    return offset
  }

  const handlePointerDown = (event) => {
    if (event.target.closest('button')) return

    pointerStart.current = {
      x: event.clientX,
      y: event.clientY,
    }
  }

  const handlePointerUp = (event) => {
    if (!pointerStart.current) return

    const deltaX = event.clientX - pointerStart.current.x
    const deltaY = event.clientY - pointerStart.current.y

    pointerStart.current = null

    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
      pauseTemporarily()
      deltaX < 0 ? next() : previous()
    }
  }

  const handleWheel = (event) => {
    // Only horizontal scrolling controls the carousel.
    // Normal vertical scrolling always scrolls the webpage.
    if (Math.abs(event.deltaX) < 10) return
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) * 1.2) return

    event.preventDefault()

    if (wheelLock.current) return

    wheelLock.current = true
    pauseTemporarily()

    event.deltaX > 0 ? next() : previous()

    window.setTimeout(() => {
      wheelLock.current = false
    }, 450)
  }

  return (
    <section className="year-section">
      <div className="year-section-heading">
        <div>
          <span className="teams-eyebrow">THE PEOPLE BEHIND THE MACHINE</span>
          <h2>{year}</h2>
          <p>{subtitle}</p>
        </div>

        <span className="year-member-count">
          {String(total).padStart(2, '0')} MEMBERS
        </span>
      </div>

      <div
        className="coverflow-stage"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          pointerStart.current = null
        }}
        onWheel={handleWheel}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          pauseTemporarily()
        }}
      >
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={() => {
            previous()
            pauseTemporarily()
          }}
          aria-label={`Previous ${year} member`}
        >
          <ArrowLeft size={22} />
        </button>

        <div className="coverflow-track">
          {members.map((member, index) => {
            const offset = getOffset(index)
            const distance = Math.abs(offset)
            const isVisible = distance <= 2

            return (
              <article
                key={member.name}
                className={`member-card ${offset === 0 ? 'active' : ''}`}
                style={{
                  transform: `
                    translateX(calc(-50% + ${offset * 190}px))
                    scale(${offset === 0 ? 1 : distance === 1 ? 0.82 : 0.65})
                    rotateY(${offset * -24}deg)
                  `,
                  opacity: isVisible
                    ? offset === 0 ? 1 : distance === 1 ? 0.72 : 0.35
                    : 0,
                  zIndex: 10 - distance,
                  pointerEvents: isVisible ? 'auto' : 'none',
                }}
                onClick={() => {
                  if (offset !== 0) goTo(index)
                }}
                aria-label={`${member.name}, ${year}`}
              >
                <div className={`member-photo ${member.image ? 'has-photo' : ''}`}>
  {member.image ? (
    <img src={member.image} alt={member.name} />
  ) : (
    <UserRound size={76} strokeWidth={1} />
  )}
</div>

                <div className="member-details">
                  {member.role && (
                    <span className="member-role">{member.role}</span>
                  )}
                  <h3>{member.name}</h3>
                  <p>{member.domain || 'TEAM NDORS'}</p>
                </div>
              </article>
            )
          })}
        </div>

        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={() => {
            next()
            pauseTemporarily()
          }}
          aria-label={`Next ${year} member`}
        >
          <ArrowRight size={22} />
        </button>
      </div>

      <div className="carousel-footer">
        <div className="carousel-progress">
          <span
            style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
          />
        </div>

        <div className="carousel-counter">
          <span>{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="counter-divider">/</span>
          {String(total).padStart(2, '0')}
        </div>
      </div>
    </section>
  )
}

function Teams() {
  return (
    <main className="teams-page">
      <section className="teams-hero">
        <div className="teams-hero-content">
          <span className="teams-eyebrow">MEET THE PEOPLE BEHIND NDORS</span>
          <h1>OUR <span>TEAM</span></h1>
          <p>
            Different minds. One machine. A team driven by engineering,
            innovation and the spirit of competition.
          </p>
        </div>
      </section>

      <div className="teams-content">
        <FacultySection />

        {membersByYear.map((group) => (
          <YearCarousel
            key={group.year}
            year={group.year}
            subtitle={group.subtitle}
            members={group.members}
          />
        ))}
      </div>
    </main>
  )
}

export default Teams
