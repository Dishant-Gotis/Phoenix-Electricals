import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, Buildings, Factory, HardHat, Lightning, Bank } from '@phosphor-icons/react';

const clients = [
  { name: 'Tata Power', icon: Lightning, sector: 'Power Distribution' },
  { name: 'Adani Electricity', icon: Lightning, sector: 'Power Generation' },
  { name: 'Maharashtra State Electricity', icon: Buildings, sector: 'State Utility' },
  { name: 'Larsen & Toubro', icon: HardHat, sector: 'Infrastructure' },
  { name: 'Railways', icon: Bank, sector: 'Government' },
  { name: 'Reliance Infrastructure', icon: Factory, sector: 'Industrial' },
  { name: 'Tata Projects', icon: Briefcase, sector: 'EPC Contractor' },
  { name: 'Power Grid Corp', icon: Lightning, sector: 'Transmission' },
];

const marqueeClients = [...clients, ...clients];

export function Clients() {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  return (
    <section className="premium-section">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-energy-green/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={sectionRef}>
        <div className={`reveal-luxe max-w-4xl mx-auto text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-kicker text-violet-stroke">
            Trusted Partners
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-electric-black mb-6 leading-[1.02]">
            Clients Who{' '}
            <span className="text-gradient">Trust Us</span>
          </h2>
          <p className="text-lg text-electric-black/62 leading-relaxed">
            We are proud to serve some of India's largest power companies, infrastructure giants, and government organizations.
          </p>
        </div>

        <div className="reveal-luxe mb-10 overflow-hidden rounded-[2rem] border border-earth-blue/10 bg-white py-5 shadow-[0_24px_80px_rgba(47,113,151,0.1)]">
          <div className="client-marquee flex w-max items-center gap-4">
            {marqueeClients.map((client, index) => {
              const Icon = client.icon;
              return (
                <div
                  key={`${client.name}-${index}`}
                  className="flex min-w-max items-center gap-3 rounded-full border border-earth-blue/10 bg-bg-light px-5 py-3"
                >
                  <Icon className="h-5 w-5 text-earth-blue" weight="light" />
                  <span className="text-sm font-semibold text-electric-black">{client.name}</span>
                  <span className="text-xs text-electric-black/42">{client.sector}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-earth-blue/10 bg-earth-blue/10 shadow-[0_28px_90px_rgba(47,113,151,0.1)] md:grid-cols-4">
          {clients.map((client, index) => {
            const Icon = client.icon;
            return (
              <div
                key={client.name}
                className={`group bg-white p-6 text-left transition-all duration-700 motion-ease hover:bg-bg-light ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50 + 200}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-earth-blue/10 flex items-center justify-center mb-4 group-hover:bg-earth-blue/15 transition-colors">
                  <Icon className="w-6 h-6 text-earth-blue group-hover:text-electric-black transition-colors" weight="light" />
                </div>
                <h4 className="font-semibold text-electric-black text-sm mb-1">{client.name}</h4>
                <p className="text-xs text-electric-black/48">{client.sector}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
