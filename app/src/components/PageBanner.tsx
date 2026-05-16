type PageBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function PageBanner({ eyebrow, title, description, image }: PageBannerProps) {
  return (
    <section className="relative isolate overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(4,25,38,0.62),rgba(47,113,151,0.38),rgba(0,0,0,0.45))]" />
      </div>

      <div className="mx-auto flex min-h-[300px] max-w-7xl items-center px-6 py-16 text-white lg:min-h-[380px] lg:px-8">
        <div className="max-w-3xl">
          <span className="section-kicker border-white/20 bg-white/10 text-amber-100">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-black uppercase leading-tight tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/84 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}