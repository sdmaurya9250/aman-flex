import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 98765 43210',
    sub: 'Mon–Sat, 9AM–7PM',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@flexprinting.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Our Location',
    value: '123 Print Street, Andheri (E)',
    sub: 'Mumbai – 400068, India',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Sat: 9:00 AM – 7:00 PM',
    sub: 'Sunday: Closed',
  },
];

export default function ContactPage({ onNavigate }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div>
            <p className="section-label text-blue-300">CONTACT US</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">We'd Love to Hear<br />From You!</h1>
            <p className="text-blue-100 text-lg max-w-md">
              Have a question or ready to start your project? Get in touch with us today.
            </p>
          </div>
          <div className="hidden lg:block flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center w-64">
              <div className="text-5xl mb-3">📞</div>
              <p className="text-white font-bold text-lg">YOUR BRAND.</p>
              <p className="text-yellow-300 font-black text-xl">OUR PRINT.</p>
              <p className="text-blue-200 font-semibold text-sm mt-1">PERFECT IMPACT.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left – Contact Info + Map */}
            <div>
              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map(({ icon: Icon, label, value, sub }) => (
                  <div key={label} className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-0.5">{label}</p>
                      <p className="text-gray-900 font-semibold text-sm">{value}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 h-64 flex items-center justify-center relative">
                  {/* Fake map */}
                  <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <line x1="0" y1="60" x2="400" y2="60" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="0" y1="120" x2="400" y2="120" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="0" y1="180" x2="400" y2="180" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="80" y1="0" x2="80" y2="250" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="160" y1="0" x2="160" y2="250" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="240" y1="0" x2="240" y2="250" stroke="#94a3b8" strokeWidth="1" />
                      <line x1="320" y1="0" x2="320" y2="250" stroke="#94a3b8" strokeWidth="1" />
                      <rect x="100" y="70" width="80" height="40" fill="#cbd5e1" rx="4" />
                      <rect x="210" y="90" width="60" height="30" fill="#cbd5e1" rx="4" />
                      <rect x="50" y="130" width="90" height="35" fill="#cbd5e1" rx="4" />
                      <rect x="250" y="140" width="70" height="45" fill="#cbd5e1" rx="4" />
                    </svg>
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <p className="font-bold text-gray-800 text-sm">Flex Printing</p>
                    <p className="text-gray-500 text-xs">123 Print Street, Andheri (E)</p>
                    <p className="text-gray-500 text-xs">Mumbai – 400068, India</p>
                  </div>
                </div>
                <div className="bg-white p-3 text-center">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-xs font-semibold hover:text-blue-700"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Right – Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Subject *</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Enter subject"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Your Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Enter your message..."
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-white transition-all duration-200 ${
                      loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Let's Print Something Great Together!</h2>
          <p className="text-blue-200 text-sm">Your brand deserves the best quality prints.</p>
        </div>
      </section>
    </div>
  );
}
