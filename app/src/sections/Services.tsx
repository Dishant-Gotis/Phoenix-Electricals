import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from '@phosphor-icons/react';

const services = [
  {
    title: 'Substations',
    description: 'EHV, 33/11, 33/22, 22/11 substations — complete installation and commissioning of new substation infrastructure.',
    image: '/service-substation.jpg',
    stats: 'Up to 400kV',
  },
  {
    title: 'Overhead Lines',
    description: 'Expert installation and maintenance services for efficient and reliable overhead lines ensuring uninterrupted power transmission.',
    image: '/service-overhead.jpg',
    stats: '33KV / 22KV / 11KV',
  },
  {
    title: 'Underground Cables',
    description: 'Efficient installation and maintenance services for underground cables ensuring uninterrupted power supply and distribution.',
    image: '/service-underground.jpg',
    stats: 'HT/LT Networks',
  },
  {
    title: 'Solar Solutions',
    description: 'Cost-effective solar solutions for commercial and residential projects, driving the transition to clean renewable energy.',
    image: '/service-solar.jpg',
    stats: 'Grid-Tied & Off-Grid',
  },
  {
    title: 'GIS Substations',
    description: 'Cutting-edge Gas Insulated Substation installation and maintenance services enhancing power reliability and safety.',
    image: '/service-gis.jpg',
    stats: 'Compact Design',
  },
  {
    title: 'Liasoning & Approvals',
    description: 'Expert liaisoning for necessary project approvals from Utilities, PWD, Forest Department and Electrical Inspector.',
    image: '/hero-bg.jpg',
    stats: '100% Compliance',
  },
];

export function Services() {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  return (
    <section id="services" className="premium-section">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-energy-green/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={sectionRef}>
        {/* Header */}
        <div className={`reveal-luxe flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl">
            <span className="section-kicker text-flame-orange">
              Our Services
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold text-electric-black mb-4 leading-[1.02]">
              Comprehensive{' '}
              <span className="text-gradient">Power Solutions</span>
            </h2>
            <p className="max-w-3xl text-lg text-electric-black/62 leading-relaxed">
              End-to-end electrical infrastructure services from design and supply to erection, 
              testing, commissioning, and ongoing maintenance.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="group inline-flex items-center gap-3 rounded-full border border-earth-blue/15 bg-white px-6 py-3 text-earth-blue shadow-[0_16px_45px_rgba(47,113,151,0.08)] transition-all duration-700 motion-ease hover:-translate-y-0.5 hover:border-earth-blue/35 hover:text-electric-black"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" weight="bold" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-flow-dense gap-5 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group premium-card media-luxe relative overflow-hidden lg:col-span-2 ${index === 0 || index === 3 ? 'lg:col-span-3' : ''} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Image */}
              <div className="h-full overflow-hidden rounded-[1.55rem] bg-white">
                <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-electric-black/50 via-electric-black/10 to-transparent" />
                
                {/* Stats badge */}
                <div className="absolute right-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 shadow-[0_10px_30px_rgba(18,53,72,0.12)]">
                  <span className="text-xs font-semibold text-earth-blue">{service.stats}</span>
                </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-electric-black mb-2 group-hover:text-earth-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-electric-black/58 leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="premium-link group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" weight="bold" />
                </button>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-earth-blue/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
