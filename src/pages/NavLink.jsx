import { NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
  { name: 'Visiting Cards', path: 'services/visiting-card' },
];

export default function Navbar() {
  return (
    <nav className="flex gap-6">
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold'
              : 'text-gray-700 hover:text-blue-600'
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}