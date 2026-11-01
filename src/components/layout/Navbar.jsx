
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../../assets/images/ndors-logo-optimized.png'

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'TEAMS', path: '/teams' },
  { name: 'ACHIEVEMENTS', path: '/achievements' },
  { name: 'ALUMNI', path: '/alumni' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      setMenuOpen(false)
    }
  }

  return (
    <header className="site-header">
      <div className="navbar">
        <NavLink
          to="/"
          className="brand"
          aria-label="Team NDORS, NIT Durgapur - Home"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logo} alt="Team NDORS racing logo" />
          <span className="brand-divider" />

          <div className="brand-name">
            <strong>TEAM NDORS</strong>
            <span>NIT DURGAPUR</span>
          </div>
        </NavLink>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          aria-label="Main navigation"
          onKeyDown={handleKeyDown}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X size={25} aria-hidden="true" /> : <Menu size={25} aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
