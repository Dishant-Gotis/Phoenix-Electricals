import { Link } from 'react-router';
import { ArrowUpRight, FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import { Logo } from '../components/Logo';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contracts', href: '/contracts' },
    { label: 'Clients', href: '/clients' },
    { label: 'Contact Us', href: '/contact' },
  ],
  divisions: [
    { label: 'Transmission Infrastructure', href: 'https://transmission.phoenixelectricals.com' },
    { label: 'Workforce Innovations', href: 'https://workforce.phoenixelectricals.com' },
    { label: 'Power Solutions', href: 'https://power.phoenixelectricals.com' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};


export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0f2c3c] via-[#123548] to-[#1b4b65] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Logo className="mb-6" />
              <p className="text-sm text-white/72 leading-relaxed mb-6 max-w-sm">
                Phoenix Electricals Transmission Infrastructure is the dedicated transmission and substation specialist in the Phoenix Group.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/18 transition-all">
                  <LinkedinLogo className="w-4 h-4" weight="light" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/18 transition-all">
                  <InstagramLogo className="w-4 h-4" weight="light" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-white/18 transition-all">
                  <FacebookLogo className="w-4 h-4" weight="light" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-white/70 hover:text-amber-200 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-white mb-4">Divisions</h4>
              <ul className="space-y-3">
                {footerLinks.divisions.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white/70 hover:text-amber-200 transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3" weight="bold" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/70 hover:text-amber-200 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/55">
              &copy; {new Date().getFullYear()} Phoenix Electricals. All Rights Reserved.
            </p>
          </div>
        </div>
    </footer>
  );
}
