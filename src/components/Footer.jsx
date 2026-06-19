import { Printer, Phone, Mail, MapPin, Clock, Share2, Link2, MessageCircle, Globe, ArrowRight } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const services = [
    'Promotional Banners', 'Event Banners', 'Hoardings', 'Shop Sign Boards',
    'Roll Up Standees', 'Backlit Flex Printing', 'Vinyl Printing', 'Customized Printing'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-1.5 rounded">
                <Printer size={18} className="text-white" />
              </div>
              <div>
                <div className="font-extrabold text-white text-base leading-tight tracking-wide">AMAN FLEX</div>
                <div className="text-gray-400 text-[9px] tracking-widest uppercase">Quality You Can See</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              A trusted name in flex printing industry. We help businesses, brands, and organizations communicate visually with high impact, high quality prints.
            </p>
            <div className="flex gap-3">
              {[Share2, MessageCircle, Globe, Link2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} className="text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Products', 'Pricing', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavigate(link)}
                    className="text-sm text-gray-400 hover:text-blue-400 flex items-center gap-1.5 transition-colors duration-200"
                  >
                    <ArrowRight size={13} />
                    {link === 'About' ? 'About Us' : link === 'Contact' ? 'Contact Us' : link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((s) => (
                <li key={s}>
                  <button
                    onClick={() => onNavigate('Services')}
                    className="text-sm text-gray-400 hover:text-blue-400 flex items-center gap-1.5 transition-colors duration-200"
                  >
                    <ArrowRight size={13} />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={14} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Call Us</p>
                  <p className="text-sm text-gray-300">+91 82682 19057</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={14} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Email Us</p>
                  <p className="text-sm text-gray-300">info@flexprinting.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Our Location</p>
                  <p className="text-sm text-gray-300">123 Print Street, Mumbai, India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={14} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Business Hours</p>
                  <p className="text-sm text-gray-300">Mon – Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Flex Printing. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-gray-500 hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
