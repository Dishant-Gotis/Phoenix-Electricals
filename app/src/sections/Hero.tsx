import { useEffect, useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router';

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=1080&auto=format&fit=crop',
    alt: 'Substation work',
  },
  {
    src: 'https://images.unsplash.com/photo-1509391366360-2e938aa1ef14?w=1920&h=1080&auto=format&fit=crop',
    alt: 'Overhead lines',
  },
  {
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&auto=format&fit=crop',
    alt: 'Underground cables',
  },
];

export function Hero() {
  const [index, setIndex] = useState<number>(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="home" className="relative min-h-[100vh] overflow-hidden">
      <div
        className="relative w-full h-[100vh] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="min-w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${s.src})` }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,25,38,0.55),rgba(0,0,0,0.6))]" />
            </div>
          ))}
        </div>

        {/* overlay content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center text-white">
          <span className="mb-6 inline-flex rounded-full border border-amber-200/25 bg-amber-300/15 px-4 py-2 text-xs uppercase tracking-[0.32em] text-amber-50 shadow-[0_14px_30px_rgba(251,191,36,0.15)]">
            Government approved electrical contractor
          </span>

          <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight tracking-[-0.03em] text-white sm:text-5xl md:text-6xl drop-shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
            TURNKEY ELECTRICAL CONTRACTOR
          </h1>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm uppercase tracking-[0.26em] text-amber-200">
            <span className="rounded-full px-4 py-2">SUBSTATIONS</span>
            <span className="hidden md:inline">|</span>
            <span className="rounded-full px-4 py-2">OVERHEAD LINES</span>
            <span className="hidden md:inline">|</span>
            <span className="rounded-full px-4 py-2">UNDERGROUND CABLES</span>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
            A government-approved electrical contractor providing a range of services for electrical distribution work including supply, erection, testing, commissioning, and consultancy.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-[0_18px_50px_rgba(245,176,26,0.28)] transition hover:bg-amber-300"
            >
              Contact Us
              <ArrowRight className="ml-3 h-4 w-4" weight="bold" />
            </Link>
            <Link
              to="/contracts"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/12 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/18"
            >
              View Services
            </Link>
          </div>

          {/* pagination dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-8 rounded-full transition-colors ${
                  i === index ? 'bg-amber-400' : 'bg-white/40'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
