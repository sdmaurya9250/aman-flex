import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Maximize, 
  CloudRain, 
  Zap, 
  Target, 
  CheckCircle2, 
  Flame,
  Sun
} from 'lucide-react';

export default function FlexPrintingPage({ setIsQuotePopupOpen }) {
  // 12 Product variants based on the popular products card layout
  const catalogItems = [
    { id: 1, title: "Standard Frontlit Flex", offer: "BUY @ Rs.9/sq.ft", desc: "Economical and durable banners perfect for short-term promotions.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&q=80" },
    { id: 2, title: "Star Flex (High Definition)", offer: "BUY @ Rs.16/sq.ft", desc: "Vibrant high-output prints with smooth glossy surface for maximum contrast.", img: "https://images.unsplash.com/photo-1533134486753-c81769d7907b?auto=format&fit=crop&w=500&q=80" },
    { id: 3, title: "Backlit Glow Sign Banner", offer: "BUY @ Rs.42/sq.ft", desc: "Translucent materials designed specifically for light-box applications.", img: "https://images.unsplash.com/photo-1563245332-692739e7d23c?auto=format&fit=crop&w=500&q=80" },
    { id: 4, title: "Blackout Banner (Opaque)", offer: "BUY @ Rs.22/sq.ft", desc: "Double-sided blackout layer prevents light from passing through.", img: "https://images.unsplash.com/photo-1583321500900-82807e458f3c?auto=format&fit=crop&w=500&q=80" },
    { id: 5, title: "Roll-up Standee Flex", offer: "BUY 1 @ Rs.1,150", desc: "Portable dynamic base stand with high-res polyester print.", img: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&w=500&q=80" },
    { id: 6, title: "Self-Adhesive Vinyl Print", offer: "BUY @ Rs.30/sq.ft", desc: "High-gloss stickers for smooth surfaces, walls, and glass panels.", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=500&q=80" },
    { id: 7, title: "One-Way Vision Perforated", offer: "BUY @ Rs.50/sq.ft", desc: "allows visibility from inside while showing ad outside.", img: "https://images.unsplash.com/photo-1551201602-3f9456f0fbf8?auto=format&fit=crop&w=500&q=80" },
    { id: 8, title: "Mesh Wind-Proof Banner", offer: "BUY @ Rs.38/sq.ft", desc: "Perforated holes allow wind to pass through, ideal for high altitudes.", img: "https://images.unsplash.com/photo-1517495339770-2bc70876f991?auto=format&fit=crop&w=500&q=80" },
    { id: 9, title: "Canvas Fabric Art Print", offer: "BUY @ Rs.110/sq.ft", desc: "Premium textured fabric for high-end decor and exhibitions.", img: "https://images.unsplash.com/photo-1513519247388-193ad51c9835?auto=format&fit=crop&w=500&q=80" },
    { id: 10, title: "X-Frame Economic Banner", offer: "BUY 1 @ Rs.600", desc: "Lightweight and easy-to-swap banner stand for indoor events.", img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=500&q=80" },
    { id: 11, title: "Fabric Poly Flex Banner", offer: "BUY @ Rs.48/sq.ft", desc: "Eco-friendly, foldable, and light-weight fabric printing solutions.", img: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=500&q=80" },
    { id: 12, title: "Reflective Roadway Flex", offer: "BUY @ Rs.70/sq.ft", desc: "Glows under headlights; perfect for high-visibility traffic signs.", img: "https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?auto=format&fit=crop&w=500&q=80" },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans antialiased animate-in fade-in duration-300">
      
      {/* 1. Hero Banner Section with Customized Image */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white pt-10 pb-12 md:py-20 px-5 md:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-pink-600 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Commercial Flex Solutions
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#031530] tracking-tight leading-[1.10]">
              HIGH VOLUME <span className="text-pink-500">FLEX PRINTING</span> <br/>FOR FAST DEPLOYMENT.
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl leading-relaxed">
              Print big, print fast. Our industrial wide-format flex printing lines deliver razor-sharp vibrancy, all-weather durability, and dynamic bulk output capacity matching the scale of your business ambitions.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button 
                onClick={() => setIsQuotePopupOpen(true)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 md:px-8 py-3.5 rounded-md font-extrabold text-xs md:text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 tracking-wide"
              >
                Get Volume Pricing <ArrowRight className="w-4 h-4"/>
              </button>
              <a 
                href="#catalog"
                className="border border-slate-200 bg-white text-slate-700 px-6 md:px-8 py-3.5 rounded-md font-extrabold text-xs md:text-sm transition tracking-wide shadow-sm hover:bg-slate-50 block"
              >
                View Print Variants
              </a>
            </div>
          </div>

          {/* Large Format Industrial Printer Image Asset */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md p-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform rotate-1 hover:rotate-0 transition duration-300">
              <div className="aspect-[16/10] overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1567971979313-54b9c9f69766?auto=format&fit=crop&w=800&q=80" 
                  alt="Industrial Wide Format Flex Printer" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute top-4 left-4 bg-pink-500 text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                1440 DPI High Res Production
              </div>
              <div className="absolute bottom-4 left-0 right-0 px-6 text-center text-[8px] text-white/90 font-bold uppercase tracking-widest bg-black/40 py-2 backdrop-blur-sm">
                <span>Aman Flex Industrial Output</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Flex Features Grid */}
      <section className="py-12 bg-slate-50/60 border-b border-slate-100 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm flex gap-4 text-left">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0 shadow-inner">
                <CloudRain className="w-5 h-5"/>
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-[#031530] tracking-tight">Weather Proof</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">Industrial durable materials resistant to heavy rain and humidity.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm flex gap-4 text-left">
              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 shrink-0 shadow-inner">
                <Sun className="w-5 h-5"/>
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-[#031530] tracking-tight">UV Non-Fade Ink</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">Anti-fade pigmentation that maintains color vibrancy even under direct sunlight.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm flex gap-4 text-left">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 shrink-0 shadow-inner">
                <Maximize className="w-5 h-5"/>
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-[#031530] tracking-tight">Seamless Scaling</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">Wide capability up to 10ft width without any visible joint lines.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm flex gap-4 text-left">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0 shadow-inner">
                <Target className="w-5 h-5"/>
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-[#031530] tracking-tight">HD Clarity</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">High-resolution calibrated output for razor-sharp text and imagery.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. 12-Item Product Showcase (Popular Products Reference Layout) */}
      <section id="catalog" className="py-16 max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-left mb-10">
          <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-pink-600 block">Pricing Index</span>
          <h3 className="text-2xl md:text-3xl font-black text-[#031530] mt-1 tracking-tight">
            Our Most Popular Flex Products
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-1">Industrial wide-format flex and vinyl print options designed for visibility.</p>
        </div>

        {/* 12-item Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {catalogItems.map((item) => (
            <div key={item.id} className="flex flex-col text-left group">
              
              {/* Product Card Image Frame (Grey rounded block style as per reference) */}
              <div className="bg-[#f0f2f5] rounded-2xl p-6 aspect-[4/3] flex items-center justify-center relative shadow-sm group-hover:shadow-md transition duration-200">
                
                {/* Floating Cyan Offer Badge */}
                <div className="absolute top-4 left-4 bg-[#4cd3f5] text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wide shadow-sm">
                  {item.offer}
                </div>

                {/* Banner Display Asset */}
                <div className="w-full h-full relative overflow-hidden rounded shadow-lg">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Description Content Below Card Block */}
              <div className="mt-4 px-1 space-y-1 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-extrabold text-base text-[#031530] tracking-tight leading-tight group-hover:text-pink-600 transition truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-slate-100 mt-3">
                  <button 
                    onClick={() => setIsQuotePopupOpen(true)}
                    className="text-[11px] font-black uppercase tracking-wider text-pink-500 hover:text-pink-600 flex items-center gap-1 transition focus:outline-none"
                  >
                    Select Variant <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Assurance Checkpoints Section */}
      <section className="py-12 bg-slate-50 border-t border-b border-slate-100 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-3 text-left">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"/>
            <div>
              <h5 className="font-extrabold text-sm text-[#031530] tracking-tight">Bulk Capacity Check</h5>
              <p className="text-xs text-slate-500 font-medium mt-1">Our dynamic production lines ensure fast turnaround times for massive batch print distribution orders.</p>
            </div>
          </div>
          <div className="flex gap-3 text-left">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"/>
            <div>
              <h5 className="font-extrabold text-sm text-[#031530] tracking-tight">Reinforced Finishing Options</h5>
              <p className="text-xs text-slate-500 font-medium mt-1">We provide heavy-duty brass grommets, custom hemming, or pole pockets as required.</p>
            </div>
          </div>
          <div className="flex gap-3 text-left">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"/>
            <div>
              <h5 className="font-extrabold text-sm text-[#031530] tracking-tight">Free File Review</h5>
              <p className="text-xs text-slate-500 font-medium mt-1">Our experts check your file resolution and bleed margins to ensure dynamic print integrity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="bg-[#031530] text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(219,39,119,0.08),transparent_50%)]"></div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-500 bg-pink-500/10 px-3 py-1 rounded-full">
            Bulk Production Estimate
          </span>
          <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-none">
            Ready to Dominate the Streets with Vibrant Wide Format Prints?
          </h3>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Get explicit pricing matrices, inspect physically premium swatch options, and chart dynamic timelines for bulk batch processing rollout.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setIsQuotePopupOpen(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-7 py-3 rounded-md font-extrabold text-xs tracking-wider uppercase shadow-md transition transform active:scale-98"
            >
              Get Flex Quote Estimate
            </button>
            <a 
              href="tel:+919876543210" 
              className="border border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800 px-7 py-3 rounded-md font-extrabold text-xs tracking-wider uppercase transition block"
            >
              Call Specialist Consultant
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}