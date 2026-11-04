
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-top">
        <span className="section-label">
          <span /> WHO WE ARE
        </span>
        <span className="about-index">01 / ABOUT NDORS</span>
      </div>

      <div className="about-layout">
        <div className="about-heading">
          <h2>
            BUILT BY
            <span>PASSION.</span>
            DRIVEN BY
            <span>PURPOSE.</span>
          </h2>
        </div>

        <div className="about-description">
          <p className="about-intro">
            Engineering is more than what we study.
            It's what we build, test and bring to life.
          </p>

          <p>
            NIT Durgapur Off-Road Sports (NDORS) brings
            together students driven by a shared interest
            in engineering,
            innovation and building competitive
            off-road vehicles.
          </p>

          <p>
            From the first design sketches to fabrication,
            testing and competition, every stage is an
            opportunity to learn, collaborate and push
            beyond limits.
          </p>

          <Link to="/teams" className="about-link">
            GET TO KNOW OUR TEAM
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </div>

      <div className="about-bottom">
        <span>DESIGN</span>
        <span className="about-cross">×</span>
        <span>ENGINEER</span>
        <span className="about-cross">×</span>
        <span>BUILD</span>
        <span className="about-cross">×</span>
        <span>RACE</span>
      </div>
    </section>
  )
}

export default About
