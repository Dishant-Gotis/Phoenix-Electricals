import { ArrowRight, EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';
import { Hero } from '@/sections/Hero';

const featuredServices = [
  {
    title: 'Overhead Lines',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1d?w=600&h=400&fit=crop',
  },
  {
    title: 'Solar',
    image: 'https://images.unsplash.com/photo-1509391366360-2e938aa1ef14?w=600&h=400&fit=crop',
  },
  {
    title: 'Substations',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
  },
];

const services = [
  {
    title: 'EHV, 33/11, 33/22, 22/11 Substations',
    description: 'Installation and commissioning of new EHV, 33/11, 33/22, and 22/11 substations.',
  },
  {
    title: '33KV, 22 KV and 11 KV Bay',
    description: 'Efficient and reliable 33KV, 22KV, and 11KV bay installation and maintenance services for seamless power distribution - all in one place.',
  },
  {
    title: 'Distribution transformer Centers',
    description: 'Streamlined installation and maintenance services for Distribution Transformer Centers to ensure optimal power supply and distribution.',
  },
  {
    title: 'Overhead Lines',
    description: 'Expert installation and maintenance services for efficient and reliable overhead lines to ensure uninterrupted power transmission and distribution.',
  },
  {
    title: 'Underground Cables',
    description: 'Efficient installation and maintenance services for underground cables, ensuring uninterrupted power supply and distribution.',
  },
  {
    title: 'GIS substations',
    description: 'Cutting-edge GIS substation installation and maintenance services to enhance power reliability, safety and efficiency.',
  },
  {
    title: 'Liasoning',
    description: 'Liasoning for necessary project approvals from Utilities, PWD, Forest and Electrical Inspector.',
  },
  {
    title: 'Solar Solutions',
    description: 'We provide cost effective solar solutions for commercial and residential projects.',
  },
];

const stats = [
  { number: '50+', label: 'Residential Projects' },
  { number: '200+', label: 'Commercial Projects' },
  { number: '100+', label: 'Industrial Projects' },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Services Showcase */}
      <section className="premium-section bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-black text-amber-400 md:text-5xl uppercase tracking-[-0.02em]">
              Our Services
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3 mb-12">
            {featuredServices.map((service) => (
              <div key={service.title} className="relative h-64 rounded-xl overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-earth-blue/10 bg-gradient-to-br from-white to-sky-50 p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-bold text-electric-black mb-3 text-lg">{service.title}</h3>
                <p className="text-sm leading-relaxed text-electric-black/70 mb-4">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-earth-blue hover:text-earth-blue/80 transition"
                >
                  <ArrowRight className="h-4 w-4" weight="bold" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-black py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">Our Statistics</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-[-0.02em]">
              Some Important Facts
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-black text-amber-400 mb-4">{stat.number}</div>
                <p className="text-lg text-white font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="premium-section bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-amber-400 uppercase tracking-[-0.02em] mb-12">
            Reach Out to Us
          </h2>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Map Placeholder */}
            <div className="space-y-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Mumbai Office */}
                <div className="bg-white rounded-xl border border-earth-blue/10 p-6 shadow-sm">
                  <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 mx-auto text-earth-blue/40 mb-2" />
                      <p className="text-sm text-slate-500">Map Placeholder</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-electric-black mb-3">Mumbai Office</h3>
                  <p className="text-sm text-electric-black/70 mb-4">
                    Om Sai Paradise, Shop No. 12, Bhiwandi - Wada Road, Near Federal Bank Ambadi, Ambadi, Bhiwandi, Thane - 421302
                  </p>
                </div>

                {/* Pune Office */}
                <div className="bg-white rounded-xl border border-earth-blue/10 p-6 shadow-sm">
                  <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 mx-auto text-earth-blue/40 mb-2" />
                      <p className="text-sm text-slate-500">Map Placeholder</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-electric-black mb-3">Pune Office</h3>
                  <p className="text-sm text-electric-black/70">
                    Saujanya Apartment, 79/A1, Lane 15, Prabhat Road, Near Symbiosis School, Pune - 411004
                  </p>
                </div>
              </div>

              {/* Representatives */}
              <div>
                <h3 className="text-2xl font-bold text-amber-400 mb-6">Our Representatives</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { name: 'Mr. Pranjal Chaudhari', phone: '+91 8796227037', email: 'pranjal_14686@yahoo.co.in' },
                    { name: 'Mr. Hemant Patil', phone: '+91 9049744130', email: 'hemantpatil4141@gmail.com' },
                    { name: 'Mr. Pradip Patil', phone: '+91 9975015316', email: 'pradeep.patil1414@gmail.com' },
                  ].map((rep) => (
                    <div key={rep.name} className="bg-white rounded-xl border border-earth-blue/10 p-6 shadow-sm">
                      <h4 className="font-bold text-electric-black mb-4">{rep.name}</h4>
                      <div className="space-y-3 text-sm">
                        <a href={`tel:${rep.phone}`} className="flex items-center gap-3 text-electric-black/70 hover:text-earth-blue transition">
                          <Phone className="h-4 w-4" weight="bold" />
                          {rep.phone}
                        </a>
                        <a href={`mailto:${rep.email}`} className="flex items-center gap-3 text-electric-black/70 hover:text-earth-blue transition">
                          <EnvelopeSimple className="h-4 w-4" weight="bold" />
                          <span className="truncate">{rep.email}</span>
                        </a>
                        <button className="w-full mt-4 bg-black text-white font-semibold py-2 rounded-lg hover:bg-black/90 transition text-sm">
                          Call Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white to-sky-50 rounded-2xl border border-earth-blue/10 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-amber-400 mb-2">Contact Form</h3>
              <p className="text-sm text-electric-black/70 mb-8">
                Have a question or feedback? Fill out our contact form and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-electric-black mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-earth-blue/20 focus:border-earth-blue focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-electric-black mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg border border-earth-blue/20 focus:border-earth-blue focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-electric-black mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="Contact number"
                    className="w-full px-4 py-3 rounded-lg border border-earth-blue/20 focus:border-earth-blue focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-electric-black mb-2">Your message</label>
                  <textarea
                    placeholder="Add a message..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-earth-blue/20 focus:border-earth-blue focus:outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-400 text-black font-semibold py-3 rounded-lg hover:bg-amber-300 transition"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import '../App.css'
