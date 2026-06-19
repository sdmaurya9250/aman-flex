import React, { useState } from 'react';
import { 
  Sparkles, Clock, ChevronDown, ArrowRight, Menu, X, Phone, MessageCircle 
} from 'lucide-react';

export default function ServicesPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { title: 'Banners', desc: 'High quality flex banners for shop openings, events, promotions and more.', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=400&q=80' },
    { title: 'Visiting Cards', desc: 'Premium quality visiting cards with unique designs that make a lasting impression.', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80' },
    { title: 'Wedding Cards', desc: 'Elegant and customized wedding cards for your special moments.', img: 'https://images.unsplash.com/photo-1546198632-9ef6368bef12?auto=format&fit=crop&w=400&q=80' },
    { title: 'Hoardings', desc: 'Large size hoardings for outdoor advertising with maximum visibility.', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80' },
    { title: 'Standee', desc: 'Attractive standees for events, exhibitions, and promotions.', img: 'https://images.unsplash.com/photo-1572953142014-16df6f916d73?auto=format&fit=crop&w=400&q=80' },
    { title: 'Sticker & Labels', desc: 'Custom stickers and labels for products, packaging and branding.', img: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=400&q=80' },
    { title: 'One Way Vision', desc: 'One way vision printing for privacy and advertising on glass.', img: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=400&q=80' },
    { title: 'Canvas Printing', desc: 'High resolution canvas prints for decor, events and personal use.', img: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased pb-14 md:pb-0">
      
      {/* Top Bar */}
      <div className="hidden md:flex bg-[#031530] text-slate-300 text-xs py-2.5 px-8 justify-between items-center border-b border-slate-800/60">
        <div className="flex gap-6 font-medium">
          <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-pink-500"/> High Quality Prints</span>
          <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-pink-500"/> Vibrant Colors</span>
          <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-pink-500"/> Durable Materials</span>
        </div>
        <div className="flex items-center gap-5 font-medium">
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5"/> Mon - Sat: 9:00 AM - 7:00 PM</span>
          <a href="tel:+919876543210" className="hover:text-pink-500 transition">+91 98765 43210</a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[#031530] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-indigo-600 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-white font-black text-base md:text-xl italic tracking-tighter">F</span>
            </div>
            <div>
              <h1 className="font-extrabold text-base md:text-xl tracking-tight leading-none">
                FLEX <span className="text-pink-500">PRINTING</span>
              </h1>
              <p className="text-[8px] md:text-[9px] uppercase tracking-[0.15em] font-bold text-slate-400 mt-1">Print Big. Impact Bigger.</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-slate-200">
            <a href="#" className="hover:text-pink-500 transition">Home</a>
            <a href="#" className="hover:text-pink-500 transition">About Us</a>
            <a href="#" className="text-pink-500 flex items-center gap-0.5">Services <ChevronDown className="w-4 h-4"/></a>
            <a href="#" className="hover:text-pink-500 transition flex items-center gap-0.5">Products <ChevronDown className="w-4 h-4"/></a>
            <a href="#" className="hover:text-pink-500 transition">Gallery</a>
            <a href="#" className="hover:text-pink-500 transition">Pricing</a>
            <a href="#" className="hover:text-pink-500 transition">Contact Us</a>
          </nav>

          <div className="hidden md:block">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2.5 rounded-md font-bold text-sm transition tracking-wide">
              Get a Quote
            </button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-1 text-white">
            {isMobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </header>

      {/* Services Sub-Hero */}
      <section className="bg-[#031530] text-white py-12 md:py-16 px-5 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3">
            <nav className="text-xs font-semibold tracking-wider text-slate-400 space-x-2">
              <span>Home</span>
              <span>&gt;</span>
              <span className="text-pink-500">Services</span>
            </nav>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Our <span className="text-pink-500">Services</span>
            </h2>
            <p className="text-slate-300 text-xs md:text-sm max-w-md font-medium leading-relaxed">
              High quality printing solutions for every need and every occasion.
            </p>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            {/* Hanging Banner Graphic Container matching reference */}
            <div className="relative w-full max-w-md bg-gradient-to-r from-pink-500 via-indigo-900 to-[#031530] p-6 rounded-xl shadow-2xl overflow-hidden aspect-[16/8] flex flex-col justify-center text-center border border-white/10">
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">BIG IMPACT</h3>
              <h3 className="text-xl font-extrabold text-amber-400 uppercase tracking-wide">BOLD PRINTS</h3>
              <p className="text-[10px] tracking-widest text-slate-300 uppercase font-semibold pt-1">PERFECT VISIBILITY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products & Services Grid 4x2 List */}
      <section className="py-16 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="mb-10 text-left">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-600 block">WHAT WE OFFER</span>
          <h3 className="text-2xl md:text-3xl font-black text-[#031530] mt-1">Complete Flex Printing Solutions</h3>
          <p className="text-xs md:text-sm text-slate-500 font-medium mt-1.5 max-w-xl">
            From promotions to celebrations, we provide a wide range of printing services to make your brand stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col group cursor-pointer">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300"/>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm text-slate-800 tracking-tight">{service.title}</h4>
                  <p className="text-[11px] md:text-xs text-slate-500 font-medium leading-snug">{service.desc}</p>
                </div>
                <div className="text-[11px] font-bold text-pink-500 flex items-center gap-1">
                  Learn More <ArrowRight className="w-3 h-3"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Callout */}
      <section className="py-12 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#031530] to-[#0a254f] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="text-center sm:text-left space-y-1 z-10">
            <h4 className="text-lg md:text-xl font-extrabold text-white">Have a Custom Printing Need?</h4>
            <p className="text-xs text-slate-400 font-medium">We're here to help you bring your ideas to life with quality prints.</p>
          </div>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-extrabold px-6 py-3 rounded-lg text-xs tracking-wider uppercase shadow-md transition z-10">
            Get a Custom Quote →
          </button>
        </div>
      </section>

      {/* Sticky Mobile Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-pink-500 text-white font-extrabold text-xs tracking-wider uppercase flex border-t border-pink-600 shadow-2xl h-14">
        <a href="tel:+919876543210" className="flex-1 flex items-center justify-center gap-2 border-r border-pink-600">
          <Phone className="w-4 h-4"/> Call Now
        </a>
        <a href="https://wa.me/919876543210" className="flex-1 flex items-center justify-center gap-2 bg-[#25D366]">
          <MessageCircle className="w-4 h-4 fill-white"/> WhatsApp
        </a>
      </div>
    </div>
  );
}