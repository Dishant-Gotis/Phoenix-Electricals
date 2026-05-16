import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CheckCircle, Clock, EnvelopeSimple, MapPin, PaperPlaneTilt, Phone } from '@phosphor-icons/react';

const offices = [
  {
    city: 'Mumbai',
    address: 'Om Sai Paradise, Shop No. 12, Bhiwandi - Wada Road, Near Federal Bank Ambadi, Ambadi, Bhiwandi, Thane - 421302',
    phone: '+91 9049744130',
    email: 'hemantpatil4141@gmail.com',
  },
  {
    city: 'Pune',
    address: 'Saujanya Apartment, 79/A1, Lane 15, Prabhat Road, Near Symbiosis School, Pune - 411004',
    phone: '+91 8796227037',
    email: 'pranjal_14686@yahoo.co.in',
  },
];

const representatives = [
  { name: 'Mr. Pranjal Chaudhari', phone: '+91 8796227037', email: 'pranjal_14686@yahoo.co.in' },
  { name: 'Mr. Hemant Patil', phone: '+91 9049744130', email: 'hemantpatil4141@gmail.com' },
  { name: 'Mr. Pradip Patil', phone: '+91 9975015316', email: 'pradeep.patill1414@gmail.com' },
];

export function Contact() {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.1);
  const [formState, setFormState] = useState({ name: '', email: '', mobile: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', mobile: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="premium-section-alt">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-earth-blue/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={sectionRef}>
        <div className={`reveal-luxe max-w-4xl mx-auto text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-kicker text-energy-green">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold text-electric-black mb-6 leading-[1.02]">
            Let's Power{' '}
            <span className="text-gradient">Your Project</span>
          </h2>
          <p className="text-lg text-electric-black/62 leading-relaxed">
            Ready to discuss your electrical infrastructure needs? Our team is standing by to deliver solutions tailored to your requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Offices */}
            <div className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
              {offices.map((office) => (
                <div key={office.city} className="premium-card reveal-luxe">
                  <div className="rounded-[1.55rem] bg-gradient-to-br from-white via-white to-sky-50 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-earth-blue/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-earth-blue" weight="light" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-electric-black">{office.city} Office</h3>
                  </div>
                  <p className="text-sm text-electric-black/58 leading-relaxed mb-3">{office.address}</p>
                  <div className="flex flex-col gap-2">
                    <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-sm text-electric-black/68 hover:text-earth-blue transition-colors">
                      <Phone className="w-4 h-4" weight="light" />
                      {office.phone}
                    </a>
                    <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-sm text-electric-black/68 hover:text-earth-blue transition-colors">
                      <EnvelopeSimple className="w-4 h-4" weight="light" />
                      {office.email}
                    </a>
                  </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Representatives */}
            <div className={`premium-card reveal-luxe transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
              <div className="rounded-[1.55rem] bg-gradient-to-br from-white via-white to-sky-50 p-6">
              <h3 className="font-display text-lg font-bold text-electric-black mb-4">Our Representatives</h3>
              <div className="space-y-3">
                {representatives.map((rep) => (
                  <div key={rep.name} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-electric-black">{rep.name}</p>
                      <a href={`tel:${rep.phone}`} className="text-xs text-electric-black/50 hover:text-earth-blue transition-colors">{rep.phone}</a>
                    </div>
                    <a
                      href={`tel:${rep.phone}`}
                      className="rounded-full bg-earth-blue/10 px-4 py-2 text-xs font-semibold text-earth-blue transition-all hover:bg-earth-blue hover:text-white"
                    >
                      Call Now
                    </a>
                  </div>
                ))}
              </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className={`premium-card reveal-luxe transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
              <div className="rounded-[1.55rem] bg-gradient-to-br from-white via-white to-amber-50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-earth-blue/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-earth-blue" weight="light" />
                </div>
                <h3 className="font-display text-lg font-bold text-electric-black">Working Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-electric-black/64">
                  <span>Monday - Saturday</span>
                  <span className="text-electric-black font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-electric-black/64">
                  <span>Sunday</span>
                  <span className="text-crimson-red">Closed</span>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <div className="premium-card reveal-luxe">
              <div className="rounded-[1.55rem] bg-gradient-to-br from-white via-white to-sky-50 p-6 md:p-8">
              <h3 className="font-display text-2xl font-bold text-electric-black mb-2">Send us a Message</h3>
              <p className="text-electric-black/58 text-sm mb-6">Have a question or feedback? Fill out the form and we'll get back to you as soon as possible.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-energy-green/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-energy-green" weight="light" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-electric-black mb-2">Message sent</h4>
                  <p className="text-electric-black/58">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-electric-black/68 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full rounded-2xl border border-earth-blue/10 bg-bg-light px-4 py-3 text-electric-black placeholder:text-electric-black/30 transition-all focus:border-earth-blue focus:ring-1 focus:ring-earth-blue"
                        placeholder="Pranjal Chaudhari"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-electric-black/68 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-2xl border border-earth-blue/10 bg-bg-light px-4 py-3 text-electric-black placeholder:text-electric-black/30 transition-all focus:border-earth-blue focus:ring-1 focus:ring-earth-blue"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-electric-black/68 mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      value={formState.mobile}
                      onChange={(e) => setFormState({ ...formState, mobile: e.target.value })}
                      className="w-full rounded-2xl border border-earth-blue/10 bg-bg-light px-4 py-3 text-electric-black placeholder:text-electric-black/30 transition-all focus:border-earth-blue focus:ring-1 focus:ring-earth-blue"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-electric-black/68 mb-2">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full resize-none rounded-2xl border border-earth-blue/10 bg-bg-light px-4 py-3 text-electric-black placeholder:text-electric-black/30 transition-all focus:border-earth-blue focus:ring-1 focus:ring-earth-blue"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="premium-button w-full"
                  >
                    <PaperPlaneTilt className="w-5 h-5" weight="bold" />
                    Send Message
                  </button>
                </form>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
