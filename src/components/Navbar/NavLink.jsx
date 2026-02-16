import { Link } from 'react-router-dom';

const NavLink = ({ path, label, index, isActive, onClick }) => (
  <li className="nav-item" style={{ '--delay': `${index * 0.1}s` }}>
    <Link
      to={path}
      className={`nav-link ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
      {isActive && <span className="active-dot"></span>}
    </Link>
  </li>
);

export default NavLink;