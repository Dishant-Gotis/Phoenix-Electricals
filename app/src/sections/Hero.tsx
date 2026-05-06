import { useRef } from 'react';
import { ArrowDown, ArrowRight, Buildings, Clock, TrendUp } from '@phosphor-icons/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const stats = [
  { value: '350+', label: 'Projects Done', icon: TrendUp },
  { value: '15+', label: 'Years Experience', icon: Clock },
  { value: '3', label: 'Group Companies', icon: Buildings },
];

export function Hero() {
  const container = useRef<HTMLElement>(null);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    // Reveal animations
    tl.from('.hero-badge', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .from('.hero-title-word', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
    }, '-=0.6')
    .from('.hero-desc', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.8')
    .from('.hero-btn', {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
    }, '-=0.6')
    .from('.hero-stats', {
      x: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    }, '-=1');

    gsap.from('.scroll-indicator', {
      opacity: 0,
      duration: 1,
      delay: 2.5,
    });
  }, { scope: container });

  return (
    <section
      id="home"
      ref={container}
      className="relative min-h-[100dvh] overflow-hidden bg-black flex items-center"
    >
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center opacity-50 mix-blend-luminosity scale-105"
          poster="/hero-bg.webp"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />
      
      {/* Film Grain */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none mix-blend-overlay" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
        }} 
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 mt-16 md:mt-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 lg:gap-8">
          
          <div className="max-w-[720px] flex-1">
            <div className="hero-badge mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4DA6FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4DA6FF]"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                Government Approved Contractor
              </span>
            </div>

            <h1 className="font-display text-[clamp(3.2rem,7vw,7.5rem)] font-black leading-[1.05] tracking-tight text-white mb-6 flex flex-wrap gap-x-4 gap-y-2 overflow-hidden">
              {['Powering', 'the', 'future', 'of', 'energy'].map((word, i) => (
                <span key={i} className="hero-title-word inline-block">
                  {word === 'future' ? <span className="text-[#4DA6FF] italic pr-2">{word}</span> : word}
                </span>
              ))}
            </h1>

            <p className="hero-desc max-w-[600px] text-lg leading-relaxed text-white/75 sm:text-xl md:text-2xl font-light">
              A premier electrical infrastructure group delivering high-voltage turnkey solutions across India.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="hero-btn group relative inline-flex min-h-16 items-center justify-center gap-3 overflow-hidden rounded-full bg-[#4DA6FF] px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-500 hover:shadow-[0_0_40px_rgba(77,166,255,0.4)]"
              >
                <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-black">
                  Start Your Project
                  <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" weight="bold" />
                </span>
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="hero-btn group inline-flex min-h-16 items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-500 hover:border-white hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          <aside className="hero-stats w-full max-w-sm rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#4DA6FF]/10 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="mb-10 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                Proven Delivery
              </p>
            </div>

            <div className="space-y-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="group flex items-center gap-6 border-b border-white/10 pb-8 last:border-0 last:pb-0">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-[#4DA6FF] transition-colors duration-500 group-hover:bg-[#4DA6FF] group-hover:text-black">
                      <Icon className="h-7 w-7" weight="duotone" />
                    </div>
                    <div>
                      <div className="font-display text-4xl font-black tabular-nums text-white tracking-tight">{stat.value}</div>
                      <div className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="scroll-indicator absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/40 transition-colors duration-300 hover:text-white md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scroll-down_2s_ease-in-out_infinite]" />
        </div>
      </button>

      <style>{`
        @keyframes scroll-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
