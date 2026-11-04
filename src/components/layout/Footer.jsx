import { Link } from 'react-router-dom'
import { ArrowUpRight } from "lucide-react";

import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
  FaYoutube as Youtube,
} from "react-icons/fa";
import logo from '../../assets/images/ndors-logo-optimized.png'
import './Footer.css'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/team_ndors_racing?cplk=MWZ5ZHN5ejc2Nmlwbg==',
    Icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/team-ndors/',
    Icon: Linkedin,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@teamndorsracingnitdurgapur2285?si=JM2zkpf4Ai9PIAaG',
    Icon: Youtube,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1CFg9HJPY1/',
    Icon: Facebook,
  },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={logo} alt="NDORS Racing logo" />

          <p>
            Engineering Beyond Limits.
            <br />
            Driven by passion. Built for the unbeaten.
          </p>

          <div className="footer-socials">
            <span className="footer-heading">FOLLOW US</span>
            <div className="footer-social-links">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit NDORS on ${label}`}
                  title={label}
                >
                  <Icon size={20} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
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

        <span className="footer-credit">
          Made with <b>♥</b> by Dev Team @ {new Date().getFullYear()}
          <span> · © All rights reserved.</span>
        </span>
      </div>
    </footer>
  )
}

export default Footer
