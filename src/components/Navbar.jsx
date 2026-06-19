import { useState, useEffect } from 'react';
import { Menu, X, Printer } from 'lucide-react';

const navLinks = ['Home', 'About Us', 'Services', 'Products', 'Pricing', 'Gallery', 'Contact Us'];

export default function Navbar({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNav('Home')}
          >
            <div className="bg-blue-600 p-1.5 rounded">
              <Printer size={18} className="text-white" />
            </div>
            <div>
              <div className="font-extrabold text-blue-800 text-base leading-tight tracking-wide">FLEX PRINTING</div>
              <div className="text-gray-400 text-[9px] tracking-widest uppercase">Quality You Can See</div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const page = link === 'About Us' ? 'About' : link === 'Contact Us' ? 'Contact' : link;
              const isActive = currentPage === page || (currentPage === 'Home' && link === 'Home');
              return (
                <button
                  key={link}
                  onClick={() => handleNav(page)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {link}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNav('Contact')}
              className="btn-primary text-sm"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded text-gray-600 hover:text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const page = link === 'About Us' ? 'About' : link === 'Contact Us' ? 'Contact' : link;
              const isActive = currentPage === page;
              return (
                <button
                  key={link}
                  onClick={() => handleNav(page)}
                  className={`block w-full text-left px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                    isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {link}
                </button>
              );
            })}
            <div className="pt-2 border-t border-gray-100">
              <button
                onClick={() => handleNav('Contact')}
                className="btn-primary w-full text-center"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
