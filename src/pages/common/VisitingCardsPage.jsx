import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function VisitingCardsPage({ setIsQuotePopupOpen }) {

  // All images are real visiting/business card product photos from Unsplash
  const catalogItems = [
    {
      id: 1,
      title: "Standard Visiting Cards",
      offer: "BUY 100 @ Rs.200",
      desc: "Premium 350 GSM corporate cuts with sharp detail rendering.",
      img: "/visiting-card/1.jfif",
    },
    {
      id: 2,
      title: "Rounded Corner Visiting Cards",
      offer: "BUY 100 @ Rs.250",
      desc: "Sleek quarter-inch radius borders for an elite modern feel.",
       img: "/visiting-card/2.jfif",
    },
    {
      id: 3,
      title: "Velvet Soft-Touch Cards",
      offer: "BUY 100 @ Rs.350",
      desc: "Suede-textured luxury overlay providing a distinct silky touch.",
      img: "/visiting-card/4.jfif",
    },
    {
      id: 4,
      title: "Raised Spot-UV Cards",
      offer: "BUY 200 @ Rs.599",
      desc: "Targeted 3D high-gloss contrast highlights over matte layers.",
      img: "/visiting-card/5.jfif",
    },
    {
      id: 5,
      title: "Metallic Gold Foil Stamped",
      offer: "BUY 100 @ Rs.450",
      desc: "Heat-pressed authentic gold metallic layout detailing.",
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      title: "Silver Holographic Foil",
      offer: "BUY 100 @ Rs.480",
      desc: "Stunning color-shifting accents that catch direct light.",
      img: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 7,
      title: "Frosted Translucent PVC",
      offer: "BUY 50 @ Rs.650",
      desc: "Flexible waterproof polymer cards with a premium frosted finish.",
      img: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 8,
      title: "Premium Linen Textured",
      offer: "BUY 100 @ Rs.320",
      desc: "Classic organic woven cross-hatch fabric-like sensation.",
      img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 9,
      title: "Eco-Friendly Kraft Board",
      offer: "BUY 100 @ Rs.280",
      desc: "Natural unbleached recycled fibrous earthy brown tone.",
      img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 10,
      title: "Triplex Core Sandwich Cards",
      offer: "BUY 50 @ Rs.750",
      desc: "Ultra-heavy 700 GSM profile with a colorful middle layer stripe.",
      img: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 11,
      title: "Sleek Slim Executive",
      offer: "BUY 100 @ Rs.290",
      desc: "Narrow European style profile with a clean modern dimension.",
      img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 12,
      title: "Letterpress Pressed Antique",
      offer: "BUY 100 @ Rs.890",
      desc: "Deep structural plate indentation over heavy cotton board.",
      img: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&q=80",
    },
  ];

  // Fallback images in case primary fails — all confirmed visiting card photos
  const fallbacks = [
    "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1616100827906-e6d0aa1dedd0?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1603816543957-4fb78e71e2c9?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=500&q=80",
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans antialiased">

      {/* ── Catalog Section ─────────────────────────────────────────── */}
      <section id="catalog" className="py-16 max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-left mb-10">
          <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-pink-600 block">
            Catalog Collection
          </span>
          <h3 className="text-2xl md:text-3xl font-black text-[#031530] mt-1 tracking-tight">
            Our Most Popular Visiting Cards
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Premium options featuring custom finishes, unique card stocks, and specialized styles.
          </p>
        </div>

        {/* 12-item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {catalogItems.map((item, idx) => (
            <div key={item.id} className="flex flex-col text-left group">

              {/* Image Frame */}
              <div className="bg-[#f0f2f5] rounded-2xl p-5 aspect-[4/3] flex items-center justify-center relative shadow-sm group-hover:shadow-md transition duration-200 overflow-hidden">

                {/* Cyan Offer Badge */}
                <div className="absolute top-3 left-3 bg-[#4cd3f5] text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wide shadow-sm z-10 whitespace-nowrap">
                  {item.offer}
                </div>

                {/* Real Product Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-w-[90%] max-h-[78%] w-full h-full object-cover rounded-xl shadow-md group-hover:scale-105 transition duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = fallbacks[idx] || fallbacks[0];
                  }}
                />
              </div>

              {/* Text Below Card */}
              <div className="mt-4 px-1 space-y-1 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-extrabold text-base text-[#031530] tracking-tight leading-tight group-hover:text-pink-600 transition">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3">
                  <button
                    onClick={() => setIsQuotePopupOpen(true)}
                    className="text-[11px] font-black uppercase tracking-wider text-pink-500 hover:text-pink-600 flex items-center gap-1 transition focus:outline-none"
                  >
                    Order Now <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ── Assurance Section ─────────────────────────────────────────── */}
      <section className="py-12 bg-slate-50 border-t border-b border-slate-100 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Free Bleed & File Reviews",
              desc: "Our production team checks your vectors, margins, and copy layout integrity prior to run distribution."
            },
            {
              title: "Bulk Volume Cost Tiers",
              desc: "Receive competitive wholesale pricing incentives as volume thresholds expand for large corporate organizations."
            },
            {
              title: "Variable Batch Inputs",
              desc: "Customize titles, phone variations, and individual profiles systematically across bulk card runs."
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-3 text-left">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-extrabold text-sm text-[#031530] tracking-tight">{item.title}</h5>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────────────────── */}
      <section className="bg-[#031530] text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(219,39,119,0.08),transparent_50%)]" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-500 bg-pink-500/10 px-3 py-1 rounded-full">
            Fast-Track Bulk Shipments
          </span>
          <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">
            Ready to Lock In a Stellar Corporate First Impression?
          </h3>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            Get explicit pricing information, sample pack guidance, and timeline schedules engineered for corporate rollout.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsQuotePopupOpen(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-7 py-3 rounded-md font-extrabold text-xs tracking-wider uppercase shadow-md transition"
            >
              Get Custom Quote Estimate
            </button>
            <a
              href="tel:+919876543210"
              className="border border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800 px-7 py-3 rounded-md font-extrabold text-xs tracking-wider uppercase transition"
            >
              Call Our Consultant
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}