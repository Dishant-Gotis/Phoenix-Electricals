import { Link } from 'react-router';
import { ArrowRight, CheckCircle, Crosshair, Eye, Lightbulb, ShieldCheck } from '@phosphor-icons/react';
import { PageBanner } from '@/components/PageBanner';

const values = [
  {
    icon: Crosshair,
    title: 'Transmission Engineering',
    description: 'Design and execution of high-voltage transmission corridors with disciplined control.',
  },
  {
    icon: Eye,
    title: 'Substation Delivery',
    description: 'Turnkey AIS and GIS substations including civil, electrical, testing, and energization work.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Compliance',
    description: 'Zero-harm site culture supported by EHS protocols and statutory compliance.',
  },
  {
    icon: Lightbulb,
    title: 'Project Excellence',
    description: 'Structured project controls and field execution that keep work moving on schedule.',
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-electric-black">
      <PageBanner
        eyebrow="About Us"
        title="Phoenix Electricals"
        description="A government-approved electrical contractor delivering transmission, substations, and related electrical distribution work with strong execution discipline."
        image="/service-solar.jpg"
      />

      <section className="premium-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-earth-blue/10 bg-white shadow-[0_28px_90px_rgba(47,113,151,0.1)]">
              <img
                src="/div-transmission.jpg"
                alt="Phoenix Electricals transmission project"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <span className="section-kicker">Who we are</span>
              <h2 className="text-3xl font-black text-electric-black sm:text-4xl md:text-5xl">
                Specialized transmission engineering for critical grid work.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-electric-black/70 sm:text-lg">
                Phoenix Electricals Transmission Infrastructure Pvt. Ltd. builds robust high-voltage networks and turnkey substation systems with a zero-harm safety mindset. We combine technical precision with disciplined project delivery and a practical understanding of site execution.
              </p>
              <p className="mt-4 text-base leading-relaxed text-electric-black/70 sm:text-lg">
                Our team supports design, erection, testing, commissioning, and ongoing support for electrical distribution projects across industrial and utility environments.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div key={value.title} className="rounded-[1.4rem] border border-earth-blue/10 bg-gradient-to-br from-white via-white to-sky-50 p-5 shadow-[0_18px_50px_rgba(47,113,151,0.07)]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-earth-blue/10 text-earth-blue">
                        <Icon className="h-5 w-5" weight="light" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-electric-black">{value.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-electric-black/65">{value.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link to="/contracts" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-amber-300">
                  View Contracts
                  <ArrowRight className="ml-3 h-4 w-4" weight="bold" />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-earth-blue/15 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-earth-blue transition hover:border-earth-blue/30 hover:bg-sky-50">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] border border-earth-blue/10 bg-gradient-to-r from-earth-blue/10 via-white to-amber-100 px-8 py-8 shadow-[0_30px_90px_rgba(47,113,151,0.12)]">
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-earth-blue" weight="light" />
              <p className="text-lg font-semibold leading-relaxed text-electric-black/85 sm:text-xl">
                Precision in high-voltage delivery, compliance in every phase, and continuity for the next grid era.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}