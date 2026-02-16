import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = ({ sections, activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Mi Portafolio</h2>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {sections.map(({ id, label }) => (
                <li key={id} className="nav-item">
                  <button
                    className={`nav-link ${activeSection === id ? 'active' : ''}`}
                    onClick={() => handleSectionClick(id)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header