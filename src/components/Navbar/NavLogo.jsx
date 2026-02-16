import { Link } from 'react-router-dom';
import { Code  } from 'lucide-react';

const NavLogo = ({ closeMenu }) => (
  <div className="logo">
    <Link to="/" onClick={closeMenu}>
      <div className="logo-content">
        <div className="logo-icon">
          <Code size={32} />
        </div>
        <h2>Mi Portafolio</h2>
      </div>
    </Link>
  </div>
);

export default NavLogo;