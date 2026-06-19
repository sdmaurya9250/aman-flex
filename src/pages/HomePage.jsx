import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Clock, 
  ChevronDown, 
  ArrowRight, 
  Sparkles, 
  Droplets, 
  Zap, 
  DollarSign,
  MessageCircle
} from 'lucide-react';

export default function HomePage() {
  // States for toggling menus and popups
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const services = [
    { icon: "🎪", iconBg: "bg-pink-50", title: 'Promotional Banners', desc: 'Perfect for marketing, offers and promotions.' },
    { icon: "📅", iconBg: "bg-blue-50", title: 'Event Banners', desc: 'Make your events more visible and memorable.' },
    { icon: "🪧", iconBg: "bg-purple-50", title: 'Hoardings', desc: 'Large size printing for maximum visibility.' },
    { icon: "🏪", iconBg: "bg-emerald-50", title: 'Shop Sign Boards', desc: 'Attractive signage for your storefront.' },
    { icon: "🕴️", iconBg: "bg-rose-50", title: 'Roll Up Standees', desc: 'Portable, reusable & easy to set up.' },
    { icon: "🎨", iconBg: "bg-pink-50", title: 'Customized Printing', desc: 'Unique designs tailored to your needs.' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased pb-14 md:pb-0 relative">
      

      {/* Header */}


      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white pt-8 pb-12 md:py-24 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-4 md:space-y-6 text-left">
            <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-pink-600 block">
              Premium Flex Printing
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#031530] tracking-tight leading-[1.10]">
              BIG PRINTS.<br/>BIGGER <span className="text-pink-500">IMPACT.</span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium max-w-xl leading-relaxed">
              High quality flex printing for every occasion & business need.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button 
                onClick={() => setIsQuotePopupOpen(true)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 md:px-8 py-3.5 rounded-md font-extrabold text-xs md:text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 tracking-wide"
              >
                Get a Quote <ArrowRight className="w-4 h-4"/>
              </button>
              <button className="border border-slate-200 bg-white text-slate-700 px-6 md:px-8 py-3.5 rounded-md font-extrabold text-xs md:text-sm transition tracking-wide shadow-sm hover:bg-slate-50">
                Explore Products
              </button>
            </div>
          </div>

          {/* Banner Graphic Graphics */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
          
        <img src="/banner.png" alt="Aman Flex Banner" />
           
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-5 md:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-pink-600 block">Our Services</span>
          <h3 className="text-xl md:text-3xl font-black text-[#031530] mt-1 tracking-tight">
            Complete Flex Printing <span className="text-pink-500">Solutions</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {services.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 md:p-5 flex md:flex-col items-center md:items-start justify-between gap-4 cursor-pointer hover:shadow-md hover:border-slate-200/80 transition"
            >
              <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                <div className={`w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center text-xl shrink-0 md:mb-4 shadow-inner`}>
                  {item.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-extrabold text-sm text-slate-800 tracking-tight leading-tight md:mb-1">{item.title}</h4>
                  <p className="text-[11px] md:text-xs text-slate-500 font-medium leading-snug mt-0.5">{item.desc}</p>
                </div>
              </div>
              <div className="text-slate-400 shrink-0 md:mt-4">
                <ArrowRight className="w-4 h-4 md:w-3.5 md:h-3.5 text-slate-500 md:text-pink-500"/>
              </div>
            </div>
          ))}
        </div>
      </section>

      {isQuotePopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md border border-slate-100 relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsQuotePopupOpen(false)}
              className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-600 rounded-lg bg-slate-50 transition"
            >
              <X className="w-5 h-5"/>
            </button>
            <h3 className="text-lg font-extrabold text-[#031530] mb-2">Request a Custom Quote</h3>
            <p className="text-xs text-slate-500 mb-4">Fill in your requirements and our team will contact you instantly.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); setIsQuotePopupOpen(false); }} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Your Name</label>
                <input type="text" required className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-pink-500 transition" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                <input type="tel" required className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-pink-500 transition" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Requirements / Banner Size</label>
                <textarea rows="3" required className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:border-pink-500 transition" placeholder="e.g., 6x4 ft Promo Banner for shop opening..."></textarea>
              </div>
              <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2.5 rounded-md text-xs tracking-wider uppercase shadow-md transition mt-2">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Sticky Call Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-pink-500 text-white font-extrabold text-xs tracking-wider uppercase flex border-t border-pink-600 shadow-2xl h-14">
        <a href="tel:+919876543210" className="flex-1 flex items-center justify-center gap-2 border-r border-pink-600 active:bg-pink-600 transition">
          <Phone className="w-4 h-4"/> Call Now
        </a>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] active:bg-emerald-600 transition">
          <MessageCircle className="w-4 h-4 fill-white"/> WhatsApp
        </a>
      </div>

    </div>
  );
}