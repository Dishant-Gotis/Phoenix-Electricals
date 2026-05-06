import { ArrowUpRight, EnvelopeSimple, FacebookLogo, InstagramLogo, Lightning, LinkedinLogo, MapPin, Phone } from '@phosphor-icons/react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Divisions', href: '#divisions' },
    { label: 'Services', href: '#services' },
    { label: 'Impact', href: '#impact' },
  ],
  divisions: [
    { label: 'Transmission Infrastructure', href: '#' },
    { label: 'Workforce Innovations', href: '#' },
    { label: 'Power Solutions', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

export function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white border-t border-earth-blue/10">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-earth-blue/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full border border-earth-blue/15 bg-earth-blue/10 flex items-center justify-center">
                <Lightning className="w-5 h-5 text-earth-blue" weight="light" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-electric-black leading-none tracking-tight">
                  PHOENIX
                </span>
                <span className="text-[10px] text-earth-blue font-heading font-semibold tracking-[0.2em] uppercase leading-none">
                  Electricals Group
                </span>
              </div>
            </a>
            <p className="text-sm text-electric-black/58 leading-relaxed mb-6 max-w-sm">
              A leading electrical infrastructure group delivering turnkey solutions across 
              substations, transmission lines, and renewable energy projects throughout India.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-bg-light border border-earth-blue/10 flex items-center justify-center text-earth-blue hover:text-electric-black hover:border-earth-blue/30 transition-all">
                <LinkedinLogo className="w-4 h-4" weight="light" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-light border border-earth-blue/10 flex items-center justify-center text-earth-blue hover:text-electric-black hover:border-earth-blue/30 transition-all">
                <InstagramLogo className="w-4 h-4" weight="light" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-light border border-earth-blue/10 flex items-center justify-center text-earth-blue hover:text-electric-black hover:border-earth-blue/30 transition-all">
                <FacebookLogo className="w-4 h-4" weight="light" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-electric-black mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-electric-black/55 hover:text-earth-blue transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-electric-black mb-4">Divisions</h4>
            <ul className="space-y-3">
              {footerLinks.divisions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-electric-black/55 hover:text-earth-blue transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" weight="bold" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-electric-black mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-electric-black/55">
                <MapPin className="w-4 h-4 mt-0.5 text-earth-blue shrink-0" weight="light" />
                <span>Om Sai Paradise, Bhiwandi, Thane - 421302</span>
              </li>
              <li>
                <a href="tel:+919049744130" className="flex items-center gap-2 text-sm text-electric-black/55 hover:text-earth-blue transition-colors">
                  <Phone className="w-4 h-4 text-earth-blue" weight="light" />
                  +91 9049744130
                </a>
              </li>
              <li>
                <a href="mailto:hemantpatil4141@gmail.com" className="flex items-center gap-2 text-sm text-electric-black/55 hover:text-earth-blue transition-colors">
                  <EnvelopeSimple className="w-4 h-4 text-earth-blue" weight="light" />
                  hemantpatil4141@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-earth-blue/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-electric-black/45">
            &copy; {new Date().getFullYear()} Phoenix Electricals. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-electric-black/45 hover:text-earth-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
