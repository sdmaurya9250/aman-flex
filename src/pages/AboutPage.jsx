import React, { useState } from 'react';
import { 
  Sparkles, Clock, ChevronDown, ArrowRight, Menu, X, Phone, MessageCircle
} from 'lucide-react';

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased pb-14 md:pb-0">
      

      {/* Hero Banner Section */}
      <section className="bg-[#031530] text-white py-12 md:py-16 px-5 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3">
            <nav className="text-xs font-semibold tracking-wider text-slate-400 space-x-2">
              <span>Home</span>
              <span>&gt;</span>
              <span className="text-pink-500">About Us</span>
            </nav>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">About Us</h2>
            <p className="text-slate-300 text-xs md:text-sm max-w-md leading-relaxed">
              We print more than just designs, we print trust, quality and your success.
            </p>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl relative aspect-[16/9]">
              <img src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80" alt="Industrial Printer" className="w-full h-full object-cover opacity-45" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent">
                <h3 className="text-xl font-black tracking-wider text-white uppercase">THINK BIG.<br/>PRINT BIGGER.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Who We Are" Content Block */}
      <section className="py-16 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-100 aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" alt="Storefront" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 w-1/2 rounded-xl overflow-hidden shadow-2xl border-4 border-white aspect-square hidden sm:block">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&q=80" alt="Machine Print" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-4 left-4 bg-pink-500 text-white px-4 py-3 rounded-xl shadow-lg flex flex-col items-center min-w-[90px]">
              <span className="text-xl font-black">10+</span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-center">Years of Experience</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-600 block">WHO WE ARE</span>
              <h3 className="text-2xl md:text-3xl font-black text-[#031530] mt-1">
                Your Trusted Partner <br />In <span className="text-pink-500">Flex Printing</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-500 font-medium max-w-xl pt-3 leading-relaxed">
                Flex Printing is a one-stop solution for all your printing needs. We combine advanced technology, premium materials, and skilled professionals to deliver prints that speak louder than words.
              </p>
            </div>

            {/* Bullet list items matching icon designs */}
            <div className="space-y-4 max-w-lg">
              {[
                { title: 'Premium Quality Materials', desc: 'We use the best quality materials for long-lasting prints.' },
                { title: 'Advanced Printing Technology', desc: 'Latest machines for high resolution and vibrant colors.' },
                { title: 'Timely Delivery', desc: 'We value your time and always deliver on time.' },
                { title: 'Customer Satisfaction', desc: 'Thousands of happy customers trust us for their brands.' }
              ].map((item, index) => (
                <div key={index} className="flex gap-3.5 items-start">
                  <div className="w-5 h-5 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</div>
                  <div>
                    <h4 className="font-extrabold text-xs md:text-sm text-slate-800">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-[#031530] text-white py-10 px-5 md:px-12 text-center">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: '10+', l: 'Years of Experience' },
            { v: '5000+', l: 'Happy Customers' },
            { v: '50K+', l: 'Projects Completed' },
            { v: '24/7', l: 'Customer Support' }
          ].map((s, idx) => (
            <div key={idx} className="md:border-l first:border-none border-slate-800/80">
              <h4 className="text-2xl md:text-4xl font-black">{s.v}</h4>
              <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wide font-semibold mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-5 md:px-12 max-w-7xl mx-auto">
        <div className="bg-slate-50 rounded-2xl p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-slate-100">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-600 block">OUR MISSION</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#031530]">Committed to Quality.<br/>Focused on You.</h3>
            <p className="text-xs md:text-sm text-slate-500 font-medium max-w-md leading-relaxed">
              Our mission is simple — to deliver impactful prints that help businesses grow and stand out. We aim to build long-term relationships through quality, transparency, and reliability.
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-extrabold px-5 py-3 rounded-lg text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
              Get a Quote <ArrowRight className="w-3.5 h-3.5"/>
            </button>
          </div>
          <div className="lg:col-span-5">
            <div className="w-full bg-[#031530] p-6 rounded-xl shadow-xl aspect-[16/10] flex flex-col justify-between border border-slate-800 relative overflow-hidden">
              <span className="text-[9px] tracking-widest text-slate-500 uppercase font-bold">PREMIUM BILLBOARD</span>
              <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-tight my-auto">
                GROW YOUR<br/>BUSINESS<br/><span className="text-pink-500">WITH US!</span>
              </h4>
              <div className="w-12 h-1 bg-pink-500 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Device Navigation */}
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