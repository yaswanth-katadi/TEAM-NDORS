
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import logo from '../../assets/images/ndors-logo-optimized.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">

        <div className="footer-brand">
          <img src={logo} alt="Team NDORS logo" />

          <p>
            Engineering Beyond Limits.
            <br />
            Driven by passion. Built for the unbeaten.
          </p>
        </div>

        <div className="footer-navigation">
          <span className="footer-heading">EXPLORE</span>

          <Link to="/">HOME</Link>
          <Link to="/teams">TEAMS</Link>
          <Link to="/domains">DOMAINS</Link>
          <Link to="/achievements">ACHIEVEMENTS</Link>
          <Link to="/alumni">ALUMNI</Link>
        </div>

        <div className="footer-contact">
          <span className="footer-heading">FIND US</span>

          <p>
            National Institute of Technology Durgapur
            <br />
            West Bengal, India
          </p>

          <a
            href="https://nitdgp.ac.in/"
            target="_blank"
            rel="noreferrer"
            className="footer-location"
          >
            NIT DURGAPUR <ArrowUpRight size={16} />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} TEAM NDORS</span>

        <span className="footer-tagline">
          DESIGN <i>×</i> ENGINEER <i>×</i> BUILD <i>×</i> RACE
        </span>

        <span>ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  )
}

export default Footer
