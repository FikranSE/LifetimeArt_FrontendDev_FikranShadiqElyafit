import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="w-full">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col gap-5 md:gap-6">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-subtle px-3 py-1 text-xs md:text-sm bg-surface">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-muted">Trusted construction partner</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
            Crafting spaces that elevate everyday living
          </h1>
          <p className="text-base md:text-lg text-muted max-w-[56ch]">
            From kitchens and bathrooms to full home extensions, LifetimeArt brings
            exceptional craftsmanship, attention to detail, and a client-first
            approach to every project.
          </p>
          <div className="flex gap-3 md:gap-4">
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-brand text-brand-contrast text-sm md:text-base hover:opacity-90">
              View Services
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-subtle bg-surface text-foreground text-sm md:text-base hover:bg-subtle">
              Get a Free Quote
            </a>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <Image src="/placeholder.svg" alt="Happy clients" width={48} height={48} className="rounded-full" />
            <p className="text-sm text-foreground">
              <span className="font-semibold">100+</span> projects completed with 5★ feedback
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-subtle">
          <Image src="/placeholder.svg" alt="LifetimeArt hero" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
