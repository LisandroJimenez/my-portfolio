import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import NavLogo from './NavLogo';
import NavLink from './NavLink';
import { navItems } from './navData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById('navbar');
      if (navbar && !navbar.contains(event.target)) closeMenu();
    };
    if (isMenuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <div className="header-content">
          
          <NavLogo closeMenu={closeMenu} />

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <NavLink 
                  key={item.path}
                  {...item}
                  index={index}
                  isActive={location.pathname === item.path}
                  onClick={closeMenu}
                />
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              <div className="theme-icon">
                <Sun className={`sun ${isDarkMode ? 'hidden' : ''}`} size={20} />
                <Moon className={`moon ${isDarkMode ? '' : 'hidden'}`} size={20} />
              </div>
            </button>

            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <div className="menu-icon">
                <Menu className={`menu ${isMenuOpen ? 'hidden' : ''}`} size={24} />
                <X className={`close ${isMenuOpen ? '' : 'hidden'}`} size={24} />
              </div>
            </button>
          </div>

        </div>
      </div>
      {isMenuOpen && <div className="menu-backdrop" onClick={closeMenu} />}
    </header>
  );
};

export default Navbar;