import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowUpRight, Lightning, SolarPanel, UsersThree } from '@phosphor-icons/react';

const divisions = [
  {
    name: 'Phoenix Electricals Transmission Infrastructure Pvt. Ltd.',
    shortName: 'Transmission Infrastructure',
    tagline: 'Engineering the Future of High-Voltage Power Networks.',
    description: 'Specialized engineering and construction firm dedicated to building the backbone of the power sector. Design, erection, and commissioning of high-voltage transmission systems up to 400kV.',
    image: '/div-transmission.jpg',
    icon: Lightning,
    color: 'earth-blue',
    glow: 'shadow-glow-blue',
    features: ['AIS & GIS Substations', 'Transmission Line Erection', 'Stringing & Commissioning', 'Grid Modernization'],
    cta: 'Visit Transmission Website',
    url: 'https://transmission.phoenixelectricals.com',
  },
  {
    name: 'Phoenix Workforce Innovations Pvt. Ltd.',
    shortName: 'Workforce Innovations',
    tagline: 'Strategic Talent. Global Standards. Any Industry.',
    description: 'Premier human capital partner providing end-to-end manpower solutions across all industrial and corporate sectors. Mobilizing 200+ workers for national infrastructure projects.',
    image: '/div-workforce.jpg',
    icon: UsersThree,
    color: 'energy-green',
    glow: 'shadow-glow-green',
    features: ['Mass Mobilization', 'Digital Payroll Systems', 'Strict Compliance', 'End-to-End Management'],
    cta: 'Request Workforce Quote',
    url: 'https://workforce.phoenixelectricals.com',
  },
  {
    name: 'Phoenix Power Solutions Pvt. Ltd.',
    shortName: 'Power Solutions',
    tagline: 'Sustainable Energy. Smart Solutions. Brighter Tomorrow.',
    description: 'Leading the transition to renewable energy with comprehensive solar solutions, power consultancy, and sustainable infrastructure development for commercial and residential projects.',
    image: '/div-solar.jpg',
    icon: SolarPanel,
    color: 'flame-orange',
    glow: 'shadow-glow-orange',
    features: ['Solar PV Installation', 'Power Consultancy', 'Energy Audits', 'Green Building Solutions'],
    cta: 'Explore Solar Solutions',
    url: 'https://power.phoenixelectricals.com',
  },
];

export function Divisions() {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  return (
    <section id="divisions" className="premium-section-alt">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-earth-blue/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={sectionRef}>
        {/* Section Header */}
        <div className={`reveal-luxe max-w-4xl mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-kicker text-energy-green">
            Our Divisions
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-electric-black mb-6 leading-[1.02]">
            The{' '}
            <span className="text-gradient">Phoenix Group</span>
          </h2>
          <p className="max-w-3xl text-lg text-electric-black/62 leading-relaxed">
            The Phoenix Group connects specialized engineering, workforce delivery, and sustainable power services. Open any sister site in a new tab for dedicated team capabilities.
          </p>
        </div>

        {/* Division Cards */}
        <div className="space-y-8">
          {divisions.map((div, index) => {
            const Icon = div.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={div.name}
                className={`group premium-card media-luxe relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <div className={`overflow-hidden rounded-[1.55rem] border border-earth-blue/10 bg-white flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Image */}
                  <div className="lg:w-5/12 relative min-h-72 lg:h-auto overflow-hidden">
                    <img
                      src={div.image}
                      alt={div.shortName}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-electric-black/50 via-electric-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-electric-black/10 lg:to-white/70" />
                    
                    {/* Color accent bar */}
                    <div className={`absolute bottom-0 left-0 right-0 lg:top-0 lg:bottom-0 lg:right-auto lg:w-1 h-1 lg:h-full bg-${div.color}`} 
                      style={{ backgroundColor: div.color === 'earth-blue' ? '#4f9bc6' : div.color === 'energy-green' ? '#6fbf8f' : '#d99543' }} 
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-11 h-11 rounded-full flex items-center justify-center"
                        style={{ 
                          backgroundColor: div.color === 'earth-blue' ? 'rgba(79,155,198,0.15)' : div.color === 'energy-green' ? 'rgba(111,191,143,0.15)' : 'rgba(217,149,67,0.15)',
                          border: `1px solid ${div.color === 'earth-blue' ? 'rgba(79,155,198,0.3)' : div.color === 'energy-green' ? 'rgba(111,191,143,0.3)' : 'rgba(217,149,67,0.3)'}`,
                        }}
                      >
                        <Icon 
                          className="w-5 h-5" 
                          weight="light"
                          style={{ color: div.color === 'earth-blue' ? '#4f9bc6' : div.color === 'energy-green' ? '#6fbf8f' : '#d99543' }}
                        />
                      </div>
                      <span 
                        className="text-sm font-semibold uppercase tracking-wider"
                        style={{ color: div.color === 'earth-blue' ? '#4f9bc6' : div.color === 'energy-green' ? '#6fbf8f' : '#d99543' }}
                      >
                        {div.shortName}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl md:text-4xl font-bold text-electric-black mb-3 leading-tight">
                      {div.tagline}
                    </h3>
                    <p className="text-electric-black/62 leading-relaxed mb-6">
                      {div.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {div.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div 
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: div.color === 'earth-blue' ? '#4f9bc6' : div.color === 'energy-green' ? '#6fbf8f' : '#d99543' }}
                          />
                          <span className="text-sm text-electric-black/66">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
                      <a
                        href={div.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-all duration-700 motion-ease hover:-translate-y-0.5 hover:gap-3 active:scale-[0.98] shadow-[0_16px_30px_rgba(79,155,198,0.18)]"
                        style={{ 
                          backgroundColor: div.color === 'earth-blue' ? '#4f9bc6' : div.color === 'energy-green' ? '#6fbf8f' : '#d99543',
                        }}
                      >
                        {div.cta}
                        <ArrowUpRight className="w-4 h-4" weight="bold" />
                      </a>
                      <div>
                        <span className="text-xs text-electric-black/42 font-mono block">
                          {div.url.replace('https://', '')}
                        </span>
                        <span className="text-[11px] uppercase tracking-[0.2em] text-electric-black/40">
                          Opens in a new tab
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Banner */}
        <div className={`mt-10 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 rounded-full border border-earth-blue/15 bg-white/95 px-6 py-3 shadow-[0_16px_50px_rgba(47,113,151,0.08)]">
            <span className="w-2 h-2 rounded-full bg-golden-yellow animate-pulse" />
            <span className="text-sm text-earth-blue font-medium">
              Individual division websites launching Q3 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
