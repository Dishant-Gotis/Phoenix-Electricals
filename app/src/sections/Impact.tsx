import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Buildings, CalendarBlank, Factory, HouseLine, MapPin, Medal } from '@phosphor-icons/react';

const stats = [
  { icon: HouseLine, value: 50, suffix: '+', label: 'Residential Projects', color: 'text-earth-blue' },
  { icon: Buildings, value: 200, suffix: '+', label: 'Commercial Projects', color: 'text-energy-green' },
  { icon: Factory, value: 100, suffix: '+', label: 'Industrial Projects', color: 'text-flame-orange' },
  { icon: MapPin, value: 2, suffix: '', label: 'Office Locations', color: 'text-violet-stroke' },
  { icon: CalendarBlank, value: 15, suffix: '+', label: 'Years Experience', color: 'text-golden-yellow' },
  { icon: Medal, value: 3, suffix: '', label: 'Specialized Companies', color: 'text-crimson-red' },
];

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <span>{count}{suffix}</span>;
}

export function Impact() {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.2);

  return (
    <section id="impact" className="premium-section-alt">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-earth-blue/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={sectionRef}>
        {/* Header */}
        <div className={`reveal-luxe max-w-4xl mx-auto text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-kicker">
            Our Impact
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-electric-black mb-6 leading-[1.02]">
            Numbers That{' '}
            <span className="text-gradient">Speak</span>
          </h2>
          <p className="text-lg text-electric-black/62 leading-relaxed">
            Over 15 years of powering India's infrastructure with reliable, safe, and efficient electrical solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`group premium-card reveal-luxe relative text-left ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="rounded-[1.55rem] bg-white p-6 md:p-8">
                  <div className={`w-12 h-12 rounded-full bg-earth-blue/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-700 motion-ease`}>
                    <Icon className={`w-7 h-7 ${stat.color}`} weight="light" />
                  </div>
                  <div className="font-display text-4xl md:text-5xl font-extrabold text-electric-black mb-2 tabular-nums">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                  </div>
                  <div className="text-xs text-earth-blue/70 uppercase tracking-[0.2em]">{stat.label}</div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-bl from-earth-blue/10 to-transparent rotate-45" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
