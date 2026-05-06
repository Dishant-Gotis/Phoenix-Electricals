import { useState, useEffect } from 'react';
import { Lightning } from '@phosphor-icons/react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Divisions', href: '#divisions' },
  { label: 'Services', href: '#services' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 px-4 transition-all duration-700 motion-ease ${
        scrolled
          ? 'pt-3'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mt-5 flex h-16 items-center justify-between rounded-full border border-earth-blue/10 bg-white/90 px-4 shadow-[0_20px_70px_rgba(47,113,151,0.13)] backdrop-blur-2xl md:px-5">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-3 group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-earth-blue/15 bg-earth-blue/10 transition-all duration-700 motion-ease group-hover:border-earth-blue/35 group-hover:bg-earth-blue/15">
              <Lightning className="h-5 w-5 text-earth-blue" weight="light" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-electric-black leading-none">
                PHOENIX
              </span>
              <span className="text-[10px] text-earth-blue font-heading font-semibold tracking-[0.24em] uppercase leading-none">
                Electricals
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="relative text-sm font-medium text-electric-black/62 transition-colors duration-700 motion-ease hover:text-earth-blue group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-golden-yellow group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="premium-button px-5 py-2.5"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-earth-blue/10 bg-white text-earth-blue transition-colors hover:bg-earth-blue/5 lg:hidden"
            aria-label="Toggle menu"
          >
            <span className={`absolute h-px w-5 bg-current transition-transform duration-700 motion-ease ${mobileOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`absolute h-px w-5 bg-current transition-transform duration-700 motion-ease ${mobileOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 -z-10 bg-white/95 px-6 pt-28 backdrop-blur-3xl transition-all duration-700 motion-ease lg:hidden ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className={`py-2 text-4xl font-semibold text-electric-black transition-all duration-700 motion-ease hover:text-earth-blue ${
                mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: mobileOpen ? `${index * 70 + 120}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
            className="mt-2 premium-button px-5 py-3"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
