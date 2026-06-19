import { useState } from 'react';
import CtaBanner from '../components/CtaBanner';

const categories = ['All', 'Banners', 'Hoardings', 'Sign Boards', 'Standees', 'Events'];

const items = [
  { cat: 'Banners', bg: 'from-orange-500 to-red-600', title: 'SUMMER SALE', sub: 'Retail Promotion Banner', emoji: '🛍️' },
  { cat: 'Hoardings', bg: 'from-blue-700 to-indigo-900', title: 'BUILD YOUR DREAM', sub: 'Real Estate Hoarding', emoji: '🏗️' },
  { cat: 'Events', bg: 'from-red-600 to-pink-700', title: 'MEGA EVENT', sub: 'Event Backdrop', emoji: '🎉' },
  { cat: 'Banners', bg: 'from-green-600 to-teal-700', title: 'NEW ARRIVAL', sub: 'Product Launch Banner', emoji: '✨' },
  { cat: 'Sign Boards', bg: 'from-purple-600 to-indigo-700', title: 'OPEN 24/7', sub: 'Shop Sign Board', emoji: '🏪' },
  { cat: 'Standees', bg: 'from-yellow-500 to-orange-600', title: 'SPECIAL OFFER', sub: 'Roll Up Standee', emoji: '🎯' },
  { cat: 'Hoardings', bg: 'from-cyan-600 to-blue-700', title: 'GRAND OPENING', sub: 'Outdoor Hoarding', emoji: '🎊' },
  { cat: 'Events', bg: 'from-rose-500 to-red-700', title: 'WEDDING SEASON', sub: 'Event Decoration', emoji: '💒' },
  { cat: 'Sign Boards', bg: 'from-teal-600 to-green-700', title: 'PHARMACY', sub: 'Medical Shop Sign', emoji: '💊' },
  { cat: 'Banners', bg: 'from-blue-500 to-blue-800', title: 'TECH EXPO 2024', sub: 'Exhibition Banner', emoji: '💻' },
  { cat: 'Standees', bg: 'from-amber-500 to-yellow-600', title: 'MENU CARD', sub: 'Restaurant Standee', emoji: '🍕' },
  { cat: 'Events', bg: 'from-violet-600 to-purple-800', title: 'ANNUAL DAY', sub: 'School Event Backdrop', emoji: '🎓' },
];

export default function GalleryPage({ onNavigate }) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? items : items.filter((i) => i.cat === active);

  return (
    <div className="pt-16">
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label text-blue-300">OUR GALLERY</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Our Work Speaks for Itself</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Browse through our portfolio of successful print projects for clients across India.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(({ bg, title, sub, emoji }, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${bg} rounded-xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl`}
                onClick={() => onNavigate('Contact')}
              >
                <div className="p-6 text-center aspect-square flex flex-col items-center justify-center">
                  <span className="text-4xl mb-3">{emoji}</span>
                  <h3 className="text-white font-black text-base leading-tight mb-1">{title}</h3>
                  <p className="text-white/70 text-xs">{sub}</p>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 rounded-lg px-3 py-1">
                    <span className="text-white text-xs font-semibold">View Project</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        text="Like What You See?"
        subtext="Let us create something amazing for your brand too."
        buttonText="Start Your Project"
        onNavigate={onNavigate}
      />
    </div>
  );
}
