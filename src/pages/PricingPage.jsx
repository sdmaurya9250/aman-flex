import { CheckCircle, ArrowRight } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';

const plans = [
  {
    name: 'Starter',
    price: '₹499',
    unit: 'per sq.ft',
    desc: 'Perfect for small businesses and events',
    features: [
      'PVC Flex Banner Printing',
      'Standard Resolution (720 DPI)',
      'Up to 10 Sq.Ft',
      'Matte or Glossy Finish',
      '3–5 Day Delivery',
      'Basic Design Support',
    ],
    cta: 'Get Started',
    popular: false,
    color: 'border-gray-200',
  },
  {
    name: 'Professional',
    price: '₹799',
    unit: 'per sq.ft',
    desc: 'Ideal for businesses & larger banners',
    features: [
      'All Flex & Vinyl Options',
      'High Resolution (1440 DPI)',
      'Up to 50 Sq.Ft',
      'Matte, Glossy, or Backlit',
      '2–3 Day Express Delivery',
      'Free Design Assistance',
      'Weather-Resistant Coating',
    ],
    cta: 'Most Popular',
    popular: true,
    color: 'border-blue-600',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    unit: 'pricing',
    desc: 'For large-scale campaigns & hoardings',
    features: [
      'All Product Types',
      'Ultra-HD Printing',
      'Unlimited Quantity',
      'All Finish Options',
      'Same-Day Rush Available',
      'Dedicated Account Manager',
      'Bulk Discount Pricing',
      'Installation Support',
    ],
    cta: 'Contact Us',
    popular: false,
    color: 'border-gray-200',
  },
];

export default function PricingPage({ onNavigate }) {
  return (
    <div className="pt-16">
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label text-blue-300">PRICING</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Transparent, Affordable Pricing</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            No hidden costs. Quality prints at prices that work for every budget.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(({ name, price, unit, desc, features, cta, popular, color }) => (
              <div
                key={name}
                className={`relative bg-white rounded-2xl border-2 ${popular ? 'border-blue-600 shadow-2xl scale-105' : color} overflow-hidden transition-shadow hover:shadow-xl`}
              >
                {popular && (
                  <div className="bg-blue-600 text-white text-xs font-bold text-center py-1.5 tracking-widest uppercase">
                    ★ Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
                  <p className="text-gray-500 text-sm mb-5">{desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-black text-gray-900">{price}</span>
                    <span className="text-gray-500 text-sm ml-2">{unit}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => onNavigate('Contact')}
                    className={`w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                      popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                        : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    {cta} <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">
            * Prices may vary based on quantity, size, and material. Contact us for exact quotes.
          </p>
        </div>
      </section>

      <CtaBanner
        text="Need a Custom Quote?"
        subtext="We'll create a package that fits your exact requirements and budget."
        buttonText="Get a Free Quote"
        onNavigate={onNavigate}
      />
    </div>
  );
}
