import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from '@phosphor-icons/react';

const services = [
  {
    title: 'Substations',
    description: 'Complete AIS and GIS substation construction, installation, and commissioning for EHV and 33/11 distribution systems.',
  },
  {
    title: 'Overhead Lines',
    description: 'Tower foundation, erection, tensioning, and conductor stringing for high-voltage transmission lines.',
  },
  {
    title: 'Underground Cables',
    description: 'End-to-end underground cable installation, jointing, testing, and protective civil work.',
  },
  {
    title: 'Testing & Commissioning',
    description: 'Relay testing, earth continuity checks, and final system handover support for safe energization.',
  },
  {
    title: 'Maintenance',
    description: 'Preventive maintenance, emergency breakdown response, and on-site technical support.',
  },
  {
    title: 'Approvals & Liaison',
    description: 'Regulatory approvals, utility coordination, and compliance management for every project stage.',
  },
];

export function Services() {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);

  return (
    <section id="services" className="relative bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6" ref={sectionRef}>
        <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">Our Services</h2>
          <p className="mt-4 text-4xl font-black text-electric-black">Contracts for electrical infrastructure delivery</p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-electric-black/70">
            We deliver turnkey electrical distribution and transmission services with disciplined execution, safety, and full compliance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <h3 className="text-xl font-semibold text-electric-black mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed text-electric-black/70 mb-6">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 transition hover:text-amber-700"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" weight="bold" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
