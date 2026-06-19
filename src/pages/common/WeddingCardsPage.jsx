import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Heart, 
  Layers, 
  Scissors, 
  Award, 
  CheckCircle2, 
  Flame 
} from 'lucide-react';

export default function WeddingCardsPage({ setIsQuotePopupOpen }) {
  // 12 Product variants designed to match your popular products card layout
  const catalogItems = [
    { id: 1, title: "Royal Golden Damask", offer: "BUY 100 @ Rs.250", desc: "Ornate gold foil overlays structured on rich crimson heavy art board.", img: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=500&q=80" },
    { id: 2, title: "Laser-Cut Filigree Elegance", offer: "BUY 100 @ Rs.320", desc: "Intricate micro-laced geometric paper architecture covers.", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=500&q=80" },
    { id: 3, title: "Minimalist Pastel Botanical", offer: "BUY 100 @ Rs.180", desc: "Soft elegant watercolor details on heavy textured organic paper.", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80" },
    { id: 4, title: "Imperial Velvet Scroll Set", offer: "BUY 50 @ Rs.750", desc: "Traditional royal announcement format complete with silk tassels.", img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=500&q=80" },
    { id: 5, title: "Silver Embossed Couture", offer: "BUY 100 @ Rs.290", desc: "Deep physical relief plate indentations with reflecting metallic shine.", img: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&w=500&q=80" },
    { id: 6, title: "Traditional Boxed Invitation", offer: "BUY 100 @ Rs.450", desc: "Rigid display casing accommodating personalized multi-leaf inserts.", img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=500&q=80" },
    { id: 7, title: "Frosted Acrylic Modernity", offer: "BUY 50 @ Rs.680", desc: "3mm thick transparent premium polymer panels with crisp white lettering.", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=500&q=80" },
    { id: 8, title: "Vintage Deckle-Edge Khadi", offer: "BUY 100 @ Rs.220", desc: "Hand-torn organic fibrous sheets perfect for destination aesthetics.", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=500&q=80" },
    { id: 9, title: "Shimmering Pearlescent Leaf", offer: "BUY 100 @ Rs.210", desc: "Light-reactive crystal coat papers creating a soft cosmic glow.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=500&q=80" },
    { id: 10, title: "Rose Gold Geometric Folio", offer: "BUY 100 @ Rs.310", desc: "Sleek interlocking tri-fold architecture featuring modern hot-press stamp lines.", img: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=500&q=80" },
    { id: 11, title: "Royal Mughal Miniature Style", offer: "BUY 100 @ Rs.390", desc: "Traditional ethnic border frames painted with bright pigment details.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80" },
    { id: 12, title: "Rustic Twine Bow Sack", offer: "BUY 100 @ Rs.195", desc: "Earthy burlap base layout paired with custom calligraphy card cards.", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80" },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans antialiased animate-in fade-in duration-300">
      
      {/* 1. Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white pt-10 pb-12 md:py-20 px-5 md:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-4 text-left">
            <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-pink-600 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Bespoke Royal Craftsmanship
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#031530] tracking-tight leading-[1.10]">
              ROYAL <span className="text-pink-500">WEDDING CARDS</span> <br/>FOR INDELIBLE CELEBRATIONS.
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl leading-relaxed">
              Announce your landmark day with grandeur. Discover our highly curated luxury invitation suites built using premium thick metallic sheets, intricate precision laser filigree, and radiant hot-stamp foil details.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button 
                onClick={() => setIsQuotePopupOpen(true)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 md:px-8 py-3.5 rounded-md font-extrabold text-xs md:text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 tracking-wide"
              >
                Customize Your Design <ArrowRight className="w-4 h-4"/>
              </button>
              <a 
                href="#catalog"
                className="border border-slate-200 bg-white text-slate-700 px-6 md:px-8 py-3.5 rounded-md font-extrabold text-xs md:text-sm transition tracking-wide shadow-sm hover:bg-slate-50 block"
              >
                Browse Invitation Styles
              </a>
            </div>
          </div>

          {/* Graphical Premium Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm bg-gradient-to-tr from-[#3d0a1e] to-[#122e5c] p-6 rounded-xl shadow-2xl overflow-hidden aspect-[1.58/1] flex flex-col justify-between border border-slate-700/50 transform -rotate-1">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-pink-500/20 to-transparent rounded-full blur-xl"></div>
              
              <div className="flex justify-between items-start relative z-10">
                <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center font-black text-xs text-amber-400 backdrop-blur-sm">
                  ♥
                </div>
                <span className="text-[8px] bg-amber-500 text-slate-950 font-black tracking-widest px-2 py-0.5 rounded uppercase">
                  Royal Velvet Stock
                </span>
              </div>

              <div className="space-y-0.5 relative z-10 text-left">
                <h3 className="text-base font-black text-white uppercase tracking-tight">
                  THE ROYAL INVITATION
                </h3>
                <p className="text-amber-400 font-bold tracking-widest text-[9px] uppercase">CELEBRATING LOVE & HERITAGE</p>
              </div>

              <div className="flex justify-between items-end relative z-10 border-t border-white/10 pt-2 text-[7px] text-slate-400 font-medium">
                <div className="space-y-0.5 text-left">
                  <p>Aman Flex Premium Print</p>
                  <p>support@amanflex.com</p>
                </div>
                <span className="tracking-wider uppercase font-bold text-amber-400 text-[8px]">EST. 2026</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Features Grid */}
      <section className="py-12 bg-slate-50/60 border-b border-slate-100 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm flex gap-4 text-left">
              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 shrink-0 shadow-inner">
                <Heart className="w-5 h-5"/>
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-[#031530] tracking-tight">Luxurious Textures</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">Rich textured choices including velvet inserts, raw silk layers, and handcrafted cards.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm flex gap-4 text-left">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0 shadow-inner">
                <Layers className="w-5 h-5"/>
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-[#031530] tracking-tight">Metallic Press Foil</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">Stunning hot stamp gold, brilliant silver, and romantic rose-gold highlight options.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm flex gap-4 text-left">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 shrink-0 shadow-inner">
                <Scissors className="w-5 h-5"/>
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-[#031530] tracking-tight">Laser Cut Carving</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">High-end computer controlled lace borders and traditional motif windows.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-sm flex gap-4 text-left">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0 shadow-inner">
                <Award className="w-5 h-5"/>
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-[#031530] tracking-tight">Custom Inserts</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">Multi-page leaf configurations matching Mehendi, Sangeet, and Reception themes.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. 12-Item Product Showcase Section (Popular Products Design) */}
      <section id="catalog" className="py-16 max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-left mb-10">
          <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-pink-600 block">Exquisite Registry</span>
          <h3 className="text-2xl md:text-3xl font-black text-[#031530] mt-1 tracking-tight">
            Our Most Popular Wedding Cards
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-1">Exquisite designer invites optimized with royal textures and structural framing layouts.</p>
        </div>

        {/* 12-item Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {catalogItems.map((item) => (
            <div key={item.id} className="flex flex-col text-left group">
              
              {/* Product Card Image Frame (Grey rounded block style from image mockup) */}
              <div className="bg-[#f0f2f5] rounded-2xl p-6 aspect-[4/3] flex items-center justify-center relative shadow-sm group-hover:shadow-md transition duration-200">
                
                {/* Floating Cyan Offer Badge */}
                <div className="absolute top-4 left-4 bg-[#4cd3f5] text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wide shadow-sm">
                  {item.offer}
                </div>

                {/* Card Display Asset */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-w-[85%] max-h-[75%] object-contain rounded-lg shadow-lg transform group-hover:scale-103 transition duration-300"
                  loading="lazy"
                />
              </div>

              {/* Text Description Content Below Card Block */}
              <div className="mt-4 px-1 space-y-1 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-extrabold text-base text-[#031530] tracking-tight leading-tight group-hover:text-pink-600 transition">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <button 
                    onClick={() => setIsQuotePopupOpen(true)}
                    className="text-[11px] font-black uppercase tracking-wider text-pink-500 hover:text-pink-600 flex items-center gap-1 transition focus:outline-none"
                  >
                    Request Pricing <ArrowRight className="w-3.5 h-3.5" />
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
              <h5 className="font-extrabold text-sm text-[#031530] tracking-tight">Full Proofing Diagnostics</h5>
              <p className="text-xs text-slate-500 font-medium mt-1">Our graphic consultants verify typography spelling variations and line alignments prior to final bulk press activation.</p>
            </div>
          </div>
          <div className="flex gap-3 text-left">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"/>
            <div>
              <h5 className="font-extrabold text-sm text-[#031530] tracking-tight">Custom Monogram Creation</h5>
              <p className="text-xs text-slate-500 font-medium mt-1">Work directly with us to integrate initial locks emblems or custom vector crest designs seamlessly onto all products.</p>
            </div>
          </div>
          <div className="flex gap-3 text-left">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"/>
            <div>
              <h5 className="font-extrabold text-sm text-[#031530] tracking-tight">Envelopes & Trims Included</h5>
              <p className="text-xs text-slate-500 font-medium mt-1">Every card design order provides options to acquire matching premium envelopes, sticker labels, and seals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call To Action (CTA) Section */}
      <section className="bg-[#031530] text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(219,39,119,0.08),transparent_50%)]"></div>
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-500 bg-pink-500/10 px-3 py-1 rounded-full">
            Premium Design Consultation
          </span>
          <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-none">
            Ready to Design the Perfect Invitation Suite?
          </h3>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Get accurate pricing estimates, examine physically premium swatch samples, and chart optimal timelines for batch processing.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setIsQuotePopupOpen(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-7 py-3 rounded-md font-extrabold text-xs tracking-wider uppercase shadow-md transition transform active:scale-98"
            >
              Get Wedding Card Quote
            </button>
            <a 
              href="tel:+919876543210" 
              className="border border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800 px-7 py-3 rounded-md font-extrabold text-xs tracking-wider uppercase transition block"
            >
              Consult On WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}