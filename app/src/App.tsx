import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Divisions } from '@/sections/Divisions';
import { Services } from '@/sections/Services';
import { Impact } from '@/sections/Impact';
import { Clients } from '@/sections/Clients';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>('.reveal-luxe').forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 56, filter: 'blur(10px)' },
        {
          autoAlpha: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
            once: true,
          },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>('.media-luxe').forEach((element) => {
      gsap.fromTo(
        element,
        { scale: 0.92, autoAlpha: 0.55 },
        {
          scale: 1,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top 92%',
            end: 'bottom 18%',
            scrub: 0.8,
          },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>('.scrub-copy').forEach((element) => {
      if (!element.dataset.scrubReady) {
        const words = element.textContent?.trim().split(/\s+/) ?? [];
        element.innerHTML = words
          .map((word) => `<span class="scrub-word inline-block opacity-[0.18]">${word}</span>`)
          .join(' ');
        element.dataset.scrubReady = 'true';
      }

      gsap.to(element.querySelectorAll('.scrub-word'), {
        opacity: 1,
        stagger: 0.08,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top 78%',
          end: 'bottom 42%',
          scrub: 0.8,
        },
      });
    });
  }, []);

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-electric-black">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-earth-blue focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navigation />
      <Hero />
      <About />
      <Divisions />
      <Services />
      <Impact />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
