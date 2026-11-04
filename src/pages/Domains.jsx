
import './Domains.css'

import powertrainImage from '../assets/images/vehicles/vehicle-1.jpg'
import rollCageImage from '../assets/images/vehicles/vehicle-2.jpg'
import suspensionImage from '../assets/images/vehicles/vehicle-3.jpg'
import steeringImage from '../assets/images/stories/fabrication.jpg'
import brakesImage from '../assets/images/stories/workshop.jpg'

const domains = [
  {
    number: '01',
    name: 'Powertrain',
    subtitle: 'POWERING THE MACHINE',
    image: powertrainImage,
    description:
      'The powertrain team works on delivering power from the engine to the wheels while maintaining performance and reliability.',
    work: [
      'Engine and drivetrain integration',
      'Transmission and gear ratio selection',
      'Power delivery and efficiency',
      'Testing and troubleshooting',
    ],
  },
  {
    number: '02',
    name: 'Roll Cage',
    subtitle: 'THE CORE OF SAFETY',
    image: rollCageImage,
    description:
      'The roll cage team designs and fabricates the vehicle frame, focusing on structural strength, driver protection and packaging.',
    work: [
      'Chassis design and CAD modelling',
      'Material and tube selection',
      'Welding and fabrication',
      'Structural inspection and safety',
    ],
  },
  {
    number: '03',
    name: 'Suspension',
    subtitle: 'CONTROL OVER TERRAIN',
    image: suspensionImage,
    description:
      'The suspension team develops a system that keeps the vehicle stable, improves tyre contact and handles uneven off-road terrain.',
    work: [
      'Suspension geometry and design',
      'Shock absorber selection',
      'Spring and damping calculations',
      'Ride and handling improvements',
    ],
  },
  {
    number: '04',
    name: 'Steering',
    subtitle: 'PRECISION IN EVERY TURN',
    image: steeringImage,
    description:
      'The steering team works on accurate and predictable vehicle control, especially across rough and changing terrain.',
    work: [
      'Steering geometry and layout',
      'Steering mechanism design',
      'Turning radius optimisation',
      'Linkage and steering tests',
    ],
  },
  {
    number: '05',
    name: 'Brakes',
    subtitle: 'STOPPING WITH CONFIDENCE',
    image: brakesImage,
    description:
      'The brakes team develops a dependable braking system to provide controlled deceleration and safe stopping under different conditions.',
    work: [
      'Brake system design and selection',
      'Brake force calculations',
      'Pedal and hydraulic integration',
      'Braking performance and testing',
    ],
  },
]

function Domains() {
  return (
    <main className="domains-page">

      {/* HERO */}
      <section className="domains-hero">
        <div className="domains-hero-overlay" />

        <div className="domains-hero-content">
          <span className="domains-eyebrow">
            NIT DURGAPUR OFF-ROAD SPORTS
          </span>

          <h1>
            BUILT BY
            <br />
            <span>ENGINEERS.</span>
            <br />
            DRIVEN BY
            <br />
            <span>PASSION.</span>
          </h1>

          <p>
            Five engineering disciplines. One purpose.
            Discover the minds and machines behind our
            off-road engineering journey.
          </p>

          <a href="#explore-domains" className="domains-hero-button">
            EXPLORE OUR DOMAINS
            <span>↘</span>
          </a>
        </div>

        <div className="domains-hero-index">
          <span>NDORS</span>
          <span>ENGINEERING DIVISION / 2026</span>
        </div>

        <div className="domains-hero-scroll">
          <span />
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* DOMAIN INTRO */}
      <section className="domains-overview" id="explore-domains">
        <div className="domains-overview-heading">
          <div>
            <span className="domains-eyebrow">BEHIND EVERY COMPONENT</span>
            <h2>
              ONE MACHINE.
              <br />
              <span>FIVE SPECIALITIES.</span>
            </h2>
          </div>

          <p>
            Every component has a purpose. Every decision affects
            performance. Meet the engineering teams responsible
            for bringing our buggy to life.
          </p>
        </div>

        <div className="domains-stat-strip">
          <div>
            <strong>05</strong>
            <span>ENGINEERING DOMAINS</span>
          </div>
          <div>
            <strong>01</strong>
            <span>COMMON MISSION</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>WAYS TO INNOVATE</span>
          </div>
        </div>
      </section>

      {/* DOMAIN CARDS */}
      <section className="domains-showcase">
        <div className="domains-section-label">
          <span>01 — 05</span>
          <span>EXPLORE THE ENGINEERING</span>
        </div>

        <div className="domains-grid">
          {domains.map((domain, index) => (
            <article
              className={`domain-card ${index === 0 ? 'domain-card-featured' : ''}`}
              id={`domain-${domain.number}`}
              key={domain.number}
            >
              <div className="domain-visual">
                <img
                  src={domain.image}
                  alt={`${domain.name} engineering`}
                  loading="lazy"
                />

                <div className="domain-visual-shade" />

                <span className="domain-number">{domain.number}</span>

                <span className="domain-visual-caption">
                  NDORS / ENGINEERING
                </span>

                <span className="domain-visual-name">
                  {domain.name}
                </span>
              </div>

              <div className="domain-info">
                <span className="domains-eyebrow">
                  {domain.subtitle}
                </span>

                <h3>{domain.name}</h3>

                <p className="domain-description">
                  {domain.description}
                </p>

                {/* TECHNICAL DETAILS — ALWAYS VISIBLE */}
                <div
  className="domain-work"
  id={`domain-work-${domain.number}`}
>
  <h4>WHAT WE WORK ON</h4>

  <ul>
    {domain.work.map((item, workIndex) => (
      <li key={item}>
        <span className="work-number">
          {String(workIndex + 1).padStart(2, '0')}
        </span>

        <span className="work-text">
          {item}
        </span>
      </li>
    ))}
  </ul>
</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="domains-closing">
        <div className="domains-closing-content">
          <span className="domains-eyebrow">
            THE NDORS ENGINEERING SPIRIT
          </span>

          <h2>
            DIFFERENT DOMAINS.
            <br />
            <span>ONE MACHINE.</span>
          </h2>

          <p>
            From the first design decision to the final test,
            every domain works together to build something
            capable of conquering the terrain.
          </p>

          <a href="/teams" className="domains-closing-link">
            MEET THE PEOPLE BEHIND IT
            <span>↗</span>
          </a>
        </div>

        <div className="domains-closing-mark">NDORS</div>
      </section>

    </main>
  )
}

export default Domains
