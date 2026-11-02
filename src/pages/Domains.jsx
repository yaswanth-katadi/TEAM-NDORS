
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
      <section className="domains-hero">
        <span className="domains-eyebrow">ENGINEERING THE OFF-ROAD MACHINE</span>
        <h1>OUR <span>DOMAINS</span></h1>
        <p>
          Five engineering disciplines. One machine.
          Discover the teams and systems that bring an NDORS buggy to life.
        </p>
      </section>

      <section className="domains-content">
        <div className="domains-intro">
          <span className="domains-eyebrow">WHAT WE BUILD</span>
          <h2>Every system has a <span>purpose.</span></h2>
          <p>
            From delivering power to maintaining control, each domain
            contributes to the performance, safety and reliability of our buggy.
          </p>
        </div>

        <div className="domains-list">
          {domains.map((domain, index) => (
            <article
              className={`domain-card ${index % 2 ? 'domain-reverse' : ''}`}
              key={domain.number}
            >
              <div className="domain-image">
                <img src={domain.image} alt={`${domain.name} engineering`} loading="lazy" />
                <span>{domain.number}</span>
              </div>

              <div className="domain-info">
                <span className="domains-eyebrow">{domain.subtitle}</span>
                <h3>{domain.name}</h3>
                <p>{domain.description}</p>

                <h4>WHAT THE DOMAIN WORKS ON</h4>
                <ul>
                  {domain.work.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Domains
