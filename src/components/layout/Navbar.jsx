import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'
import logo from '../../assets/images/ndors-logo-optimized.png'

const links = [
  { label: 'HOME', path: '/' },
  { label: 'TEAMS', path: '/teams' },
  { label: 'DOMAINS', path: '/domains' },
  { label: 'ACHIEVEMENTS', path: '/achievements' },
  { label: 'ALUMNI', path: '/alumni' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-navbar ${menuOpen ? 'menu-open' : ''}`}>
      <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
        <img src={logo} alt="Team NDORS" />
      </NavLink>

      <button
        type="button"
        className={`navbar-toggle ${menuOpen ? 'is-open' : ''}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span className="hamburger-line line-one" />
        <span className="hamburger-line line-two" />
        <span className="hamburger-line line-three" />
      </button>

      <div className={`navbar-overlay ${menuOpen ? 'navbar-overlay-active' : ''}`}>
        <nav className="navbar-overlay-links">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) => isActive ? 'overlay-link active' : 'overlay-link'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar