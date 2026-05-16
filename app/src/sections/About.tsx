import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Crosshair, Eye, ShieldCheck, Lightbulb } from '@phosphor-icons/react';

const values = [
  {
    icon: Crosshair,
    title: 'Transmission Engineering',
    description: 'Comprehensive design and execution of high-voltage transmission corridors, tower foundations, and conductor installation with precision control.',
    color: 'earth-blue',
  },
  {
    icon: Eye,
    title: 'Substation Delivery',
    description: 'Turnkey execution of AIS and GIS substations, including civil works, equipment installation, testing, and energization for critical grid nodes.',
    color: 'energy-green',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Compliance',
    description: 'Zero-harm site culture supported by strict EHS protocols, statutory compliance, and accredited testing procedures on every project.',
    color: 'flame-orange',
  },
  {
    icon: Lightbulb,
    title: 'Project Excellence',
    description: 'Structured project controls, real-time site monitoring, and disciplined execution to deliver on schedule and within scope.',
    color: 'violet-stroke',
  },
];

export function About() {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  return (
    <section id="about" className="premium-section noise-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={sectionRef}>
        {/* Section Header */}
        <div className={`reveal-luxe max-w-4xl mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-kicker">
            About The Company
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-electric-black mb-6 leading-[1.02]">
            Specialized Transmission{' '}
            <span className="text-gradient">Engineering</span>
          </h2>
          <p className="scrub-copy max-w-3xl text-lg text-electric-black/74 leading-relaxed">
            Phoenix Electricals Transmission Infrastructure Pvt. Ltd. builds robust high-voltage networks and turnkey substation systems with a zero-harm safety mindset. Part of the Phoenix Group, we combine technical precision with disciplined project delivery while sister brands support workforce mobilization and renewable power solutions.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            const colorClass = {
              'earth-blue': 'text-earth-blue bg-earth-blue/10 border-earth-blue/20',
              'energy-green': 'text-energy-green bg-energy-green/10 border-energy-green/20',
              'flame-orange': 'text-flame-orange bg-flame-orange/10 border-flame-orange/20',
              'violet-stroke': 'text-violet-stroke bg-violet-stroke/10 border-violet-stroke/20',
            }[value.color];

            return (
              <div
                key={value.title}
                className={`group premium-card reveal-luxe ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="h-full rounded-[1.55rem] border border-earth-blue/10 bg-gradient-to-br from-white via-white to-sky-50 px-6 py-7 shadow-[0_24px_70px_rgba(47,113,151,0.08)]">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-7 ${colorClass}`}>
                    <Icon className="w-6 h-6" weight="light" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-electric-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-electric-black/58 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Statement */}
        <div className={`reveal-luxe mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-5xl rounded-[2rem] border border-earth-blue/10 bg-gradient-to-r from-earth-blue/10 via-white to-amber-100 px-8 py-8 shadow-[0_30px_90px_rgba(47,113,151,0.12)]">
            <p className="text-xl md:text-3xl font-heading font-semibold text-electric-black/88 italic leading-snug">
              "Precision in high-voltage delivery, compliance in every phase, and continuity for the next grid era."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
