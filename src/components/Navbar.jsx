import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Code, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Acerca de mí' },
    { path: '/skills', label: 'Habilidades' },
    { path: '/education', label: 'Educación' },
    { path: '/projects', label: 'Proyectos' },
    { path: '/contact', label: 'Contacto' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById('navbar');
      if (navbar && !navbar.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <div className="logo-content">
                <div className="logo-icon">
                  <Code size={32} />
                  <Sparkles size={16} className="sparkle" />
                </div>
                <h2>Mi Portafolio</h2>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navItems.map(({ path, label }, index) => (
                <li key={path} className="nav-item" style={{ '--delay': `${index * 0.1}s` }}>
                  <Link
                    to={path}
                    className={`nav-link ${isActive(path) ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                    {isActive(path) && <span className="active-dot"></span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="header-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              <div className="theme-icon">
                <Sun className={`sun ${isDarkMode ? 'hidden' : ''}`} size={20} />
                <Moon className={`moon ${isDarkMode ? '' : 'hidden'}`} size={20} />
              </div>
            </button>

            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="menu-icon">
                <Menu className={`menu ${isMenuOpen ? 'hidden' : ''}`} size={24} />
                <X className={`close ${isMenuOpen ? '' : 'hidden'}`} size={24} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isMenuOpen && <div className="menu-backdrop" onClick={() => setIsMenuOpen(false)} />}
    </header>
  );
};

export default Navbar;