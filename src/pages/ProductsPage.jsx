import { ArrowRight } from 'lucide-react';
import CtaBanner from '../components/CtaBanner';

const products = [
  { name: 'PVC Banner', size: '2ft x 4ft to 10ft x 30ft', material: 'PVC Flex', finish: 'Matte / Glossy', bg: 'from-blue-500 to-indigo-600', emoji: '🖼️' },
  { name: 'Star Flex Banner', size: '3ft x 6ft to 8ft x 20ft', material: 'Star Flex 280gsm', finish: 'Matte', bg: 'from-purple-500 to-pink-600', emoji: '⭐' },
  { name: 'Backlit Flex', size: 'Custom Sizes', material: 'Backlit Flex 500gsm', finish: 'Glossy', bg: 'from-yellow-500 to-orange-500', emoji: '💡' },
  { name: 'Vinyl Sticker', size: 'Any Size', material: 'Vinyl Film', finish: 'Glossy / Matte / Transparent', bg: 'from-green-500 to-teal-600', emoji: '🏷️' },
  { name: 'One Way Vision', size: 'Custom', material: 'Perforated Vinyl', finish: 'UV Printed', bg: 'from-cyan-500 to-blue-600', emoji: '👁️' },
  { name: 'Sunboard / Foam Board', size: 'Custom Sizes', material: 'Sunboard 3mm / 5mm', finish: 'Digital Print', bg: 'from-rose-500 to-red-600', emoji: '📋' },
];

export default function ProductsPage({ onNavigate }) {
  return (
    <div className="pt-16">
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label text-blue-300">OUR PRODUCTS</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Premium Printing Materials</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            We use only the finest materials to ensure your prints are vibrant, durable, and impactful.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(({ name, size, material, finish, bg, emoji }) => (
              <div key={name} className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 group cursor-pointer" onClick={() => onNavigate('Contact')}>
                <div className={`bg-gradient-to-br ${bg} p-10 text-center`}>
                  <span className="text-6xl">{emoji}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-base mb-3">{name}</h3>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Size:</span>
                      <span>{size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Material:</span>
                      <span>{material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-700">Finish:</span>
                      <span>{finish}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-blue-600 text-xs font-semibold">
                    Get a Quote <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        text="Need a Custom Product?"
        subtext="We can print on virtually any material. Get in touch!"
        buttonText="Contact Us Today"
        onNavigate={onNavigate}
      />
    </div>
  );
}
