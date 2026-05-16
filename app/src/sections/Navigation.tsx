import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Logo } from '../components/Logo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contracts', href: '/contracts' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact Us', href: '/contact' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (!nav) return;
      nav.classList.toggle('shadow-sm', window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-xl transition-shadow duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo onNavigate={closeMobile} />

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors ${isActive(link.href) ? 'text-amber-500' : 'text-electric-black/70 hover:text-earth-blue'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-earth-blue/10 text-earth-blue lg:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-lg">☰</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-earth-blue/10 bg-white/95 px-6 py-6 shadow-sm">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={closeMobile}
                className={`text-base font-semibold transition-colors ${isActive(link.href) ? 'text-amber-500' : 'text-electric-black/80'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
