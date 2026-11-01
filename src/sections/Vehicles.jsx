
import { useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import './Vehicles.css'

import vehicle1 from '../assets/images/vehicles/vehicle-1.jpg'
import vehicle2 from '../assets/images/vehicles/vehicle-2.jpg'
import vehicle3 from '../assets/images/vehicles/vehicle-3.jpg'

const vehicles = [
  {
    name: 'NDORS — GENERATION 01',
    image: vehicle1,
    number: '01',
    description: 'An earlier chapter in the NDORS engineering journey.',
  },
  {
    name: 'NDORS — GENERATION 02',
    image: vehicle2,
    number: '02',
    description: 'Another stage in the evolution of our off-road machines.',
  },
  {
    name: 'NDORS — GENERATION 03',
    image: vehicle3,
    number: '03',
    description: 'Continuing the journey through design and fabrication.',
  },
]

function Vehicles() {
  const [active, setActive] = useState(0)
  const vehicle = vehicles[active]

  const previous = () => {
    setActive((current) => (current - 1 + vehicles.length) % vehicles.length)
  }

  const next = () => {
    setActive((current) => (current + 1) % vehicles.length)
  }

  return (
    <section className="vehicles-section" id="vehicles">
      <div className="vehicles-heading">
        <div>
          <span className="section-label">
            <span /> ENGINEERED TO CONQUER
          </span>
          <h2>
            BUILT FOR THE
            <span> UNBEATEN.</span>
          </h2>
        </div>

        <p>
          Every machine represents countless hours of
          design, fabrication, testing and teamwork.
        </p>
      </div>

      <div className="vehicle-showcase">
        <div className="vehicle-image">
          <img
  src={vehicle.image}
  alt={vehicle.name}
  loading="lazy"
  decoding="async"
/>
          <span className="vehicle-number">{vehicle.number}</span>
        </div>

        <div className="vehicle-info">
          <span className="vehicle-kicker">THE NDORS GARAGE</span>
          <h3>{vehicle.name}</h3>
          <p>{vehicle.description}</p>

          <div className="vehicle-controls">
            <button onClick={previous} aria-label="Previous vehicle">
              <ArrowLeft />
            </button>

            <span>
              0{active + 1} <i>/</i> 0{vehicles.length}
            </span>

            <button onClick={next} aria-label="Next vehicle">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="vehicle-progress">
        {vehicles.map((item, index) => (
          <button
            key={item.number}
            className={active === index ? 'selected' : ''}
            onClick={() => setActive(index)}
            aria-label={`Show vehicle ${index + 1}`}
          />
        ))}
      </div>

      <a href="#stories" className="vehicles-explore">
        EXPLORE OUR JOURNEY <ArrowUpRight size={18} />
      </a>
    </section>
  )
}

export default Vehicles

