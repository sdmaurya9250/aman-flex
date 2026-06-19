import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Clock, 
  ChevronDown, 
  ArrowRight, 
  Sparkles, 
  MessageCircle,
  Mail,
  User,
  FileText
} from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  return (
    <>
      {/* Top Header Bar (Desktop Only) */}
      <div className="hidden md:flex bg-[#031530] text-slate-300 text-xs py-2.5 px-8 justify-between items-center border-b border-slate-800/60 select-none">
        <div className="flex gap-6 font-medium">
          <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-pink-500"/> High Quality Prints</span>
          <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-pink-500"/> Vibrant Colors</span>
          <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-pink-500"/> Durable Materials</span>
          <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-pink-500"/> Fast Delivery</span>
        </div>
        <div className="flex items-center gap-5 font-medium">
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5"/> Mon - Sat: 9:00 AM - 7:00 PM</span>
          <a href="tel:+918268219057" className="hover:text-pink-500 transition flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-pink-500" /> +91 82682 19057
          </a>
        </div>
      </div>

      {/* Main Header navigation */}
      <header className="bg-[#031530] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex justify-between items-center">
          
          {/* Logo Brand Section */}
          <div className="flex items-center gap-2.5 cursor-pointer">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md shrink-0">
              <span className="text-white font-black text-base md:text-xl italic tracking-tighter">AF</span>
            </div>
            <div>
              <h1 className="font-extrabold text-base md:text-xl tracking-tight leading-none">
                AMAN <span className="text-pink-500">FLEX</span>
              </h1>
              <p className="text-[8px] md:text-[9px] uppercase tracking-[0.15em] font-bold text-slate-400 mt-1">
                Print Big. Impact Bigger.
              </p>
            </div>
          </div>

          {/* Desktop Laptop Device Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 font-semibold text-sm text-slate-200">
            <a href="/" className="text-pink-500">Home</a>
            <a href="/about" className="hover:text-pink-500 transition">About Us</a>
            
            {/* Services Dropdown */}
            <div className="relative group py-5">
              <button className="hover:text-pink-500 transition flex items-center gap-1 focus:outline-none">
                Services <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 top-full w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-slate-100 py-2">
                <a href="/services/banner-printing" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium">Banner Printing</a>
                <a href="/services/visiting-card" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium">Visiting Cards</a>
                <a href="/services/wedding-card" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium">Wedding Cards</a>
                <a href="/services/flex-printing" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium">Flex Printing</a>
                <a href="/services/hoarding" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium">Hoardings</a>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="relative group py-5">
              <button className="hover:text-pink-500 transition flex items-center gap-1 focus:outline-none">
                Products <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 top-full w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-slate-100 py-2">
                <a href="/products/glow-sign" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium">Glow Sign Boards</a>
                <a href="/products/canopy" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium">Promo Canopies</a>
                <a href="/products/standee" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium">Rollup Standees</a>
              </div>
            </div>

            <a href="/gallery" className="hover:text-pink-500 transition">Gallery</a>
            <a href="/services/visiting-card" className="hover:text-pink-500 transition">Visiting Cards</a>
            <a href="/contact" className="hover:text-pink-500 transition">Contact Us</a>
          </nav>

          {/* Desktop CTA Action button */}
          <div className="hidden md:block">
            <button 
              onClick={() => setIsQuotePopupOpen(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2.5 rounded-md font-bold text-sm transition tracking-wide shadow-md active:scale-95"
            >
              Get a Quote
            </button>
          </div>

          {/* Hamburger Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-1 text-white focus:outline-none hover:bg-slate-800 rounded-md transition"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>

        {/* Mobile Device Dropdown Container */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#031530] border-t border-slate-800/80 px-6 py-5 flex flex-col gap-3 text-slate-200 max-h-[calc(100vh-4rem)] overflow-y-auto shadow-inner">
            <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-pink-500 font-bold py-1">Home</a>
            <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-pink-500 font-medium py-1 transition">About Us</a>
            
            {/* Interactive Mobile Services Toggle Accordion */}
            <div className="py-1">
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex justify-between items-center hover:text-pink-500 font-medium transition focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180 text-pink-500' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="pl-4 mt-2 border-l-2 border-slate-700/60 flex flex-col gap-2.5 py-1 text-sm text-slate-400">
                  <a href="/services/banner" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition">Banner Printing</a>
                  <a href="/services/visiting-card" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition">Visiting Cards</a>
                  <a href="/services/wedding-card" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition">Wedding Cards</a>
                  <a href="/services/flex-printing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition">Flex Printing</a>
                  <a href="/services/hoarding" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition">Hoardings</a>
                </div>
              )}
            </div>

            {/* Interactive Mobile Products Toggle Accordion */}
            <div className="py-1">
              <button 
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="w-full flex justify-between items-center hover:text-pink-500 font-medium transition focus:outline-none"
              >
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileProductsOpen ? 'rotate-180 text-pink-500' : ''}`} />
              </button>
              {isMobileProductsOpen && (
                <div className="pl-4 mt-2 border-l-2 border-slate-700/60 flex flex-col gap-2.5 py-1 text-sm text-slate-400">
                  <a href="/products/glow-sign" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition">Glow Sign Boards</a>
                  <a href="/products/canopy" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition">Promo Canopies</a>
                  <a href="/products/standee" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition">Rollup Standees</a>
                </div>
              )}
            </div>

            <a href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-pink-500 font-medium py-1 transition">Gallery</a>
            <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-pink-500 font-medium py-1 transition">Contact Us</a>
            
            {/* Mobile Immediate Call/Action button */}
            <button 
              onClick={() => { setIsMobileMenuOpen(false); setIsQuotePopupOpen(true); }} 
              className="w-full bg-pink-500 text-white font-bold py-3 rounded-lg mt-3 transition active:bg-pink-600 shadow-md flex items-center justify-center gap-2 text-sm"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>

      {/* 4. MODAL POPUP GATE (Fulfills the Get a Quote action) */}
      {isQuotePopupOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative border border-slate-100">
            
            {/* Modal Header Wrap */}
            <div className="bg-[#031530] text-white p-6 relative">
              <button 
                onClick={() => setIsQuotePopupOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-bold">Request a Quote</h3>
              <p className="text-xs text-slate-400 mt-1">Fill out the details below to receive pricing options fast.</p>
            </div>

            {/* Quote Submission Form */}
            <form onSubmit={(e) => { e.preventDefault(); setIsQuotePopupOpen(false); }} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input required type="text" placeholder="John Doe" className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input required type="tel" placeholder="+91 99999 99999" className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Requirements / Message</label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                  <textarea required rows="3" placeholder="Describe banner size, quantities or specifications..." className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 resize-none"></textarea>
                </div>
              </div>

              <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-pink-500/20 text-sm tracking-wide">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}