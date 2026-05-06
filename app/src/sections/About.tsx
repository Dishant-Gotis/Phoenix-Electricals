import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Crosshair, Eye, ShieldCheck, Lightbulb } from '@phosphor-icons/react';

const values = [
  {
    icon: Crosshair,
    title: 'Mission',
    description: "To deliver world-class electrical infrastructure solutions that power India's growth while maintaining the highest standards of safety, quality, and environmental responsibility.",
    color: 'earth-blue',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To become India\'s most trusted electrical infrastructure partner, recognized for innovation, reliability, and sustainable energy solutions across all sectors.',
    color: 'energy-green',
  },
  {
    icon: ShieldCheck,
    title: 'Safety First',
    description: 'Zero-compromise safety protocols across all operations. Every project adheres to international EHS standards, ensuring the wellbeing of our people and partners.',
    color: 'flame-orange',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Continuously adopting cutting-edge technologies and methodologies to deliver smarter, more efficient, and future-ready electrical infrastructure.',
    color: 'violet-stroke',
  },
];

export function About() {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  return (
    <section id="about" className="premium-section noise-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={sectionRef}>
        {/* Section Header */}
        <div className={`reveal-luxe max-w-4xl mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-kicker">
            About Us
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-electric-black mb-6 leading-[1.02]">
            Building India's{' '}
            <span className="text-gradient">Power Backbone</span>
          </h2>
          <p className="scrub-copy max-w-3xl text-lg text-electric-black/74 leading-relaxed">
            Phoenix Electricals is a premier electrical infrastructure group with over 15 years of excellence 
            in delivering turnkey solutions. From high-voltage substations to renewable energy projects, 
            we power progress across residential, commercial, and industrial sectors.
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
                <div className="h-full rounded-[1.55rem] bg-white px-6 py-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.95)]">
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
        <div className={`reveal-luxe mt-24 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-5xl rounded-[2rem] border border-earth-blue/10 bg-white px-8 py-9 shadow-[0_30px_90px_rgba(47,113,151,0.1)]">
            <p className="text-xl md:text-3xl font-heading font-semibold text-electric-black/88 italic leading-snug">
              "We don't just build infrastructure — we energize nations."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
