export default function Footer() {
  return (
    <footer className="w-full border-t border-subtle bg-surface">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-10 md:py-14 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="text-lg font-semibold text-foreground">LifetimeArt</div>
          <p className="mt-3 text-sm text-muted max-w-[50ch]">
            Premium construction and refurbishment across London—kitchens, bathrooms, loft conversions, extensions, and more.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <div className="font-medium text-foreground">Navigation</div>
          <a href="#about" className="text-muted hover:text-foreground">About</a>
          <a href="#services" className="text-muted hover:text-foreground">Services</a>
          <a href="#work" className="text-muted hover:text-foreground">Our Work</a>
          <a href="#testimonials" className="text-muted hover:text-foreground">Testimonials</a>
          <a href="#faqs" className="text-muted hover:text-foreground">FAQs</a>
        </nav>
        <div className="text-sm">
          <div className="font-medium text-foreground">Contact</div>
          <p className="mt-2 text-muted">Email: hello@lifetimeart.co.uk</p>
          <p className="text-muted">Phone: +44 20 0000 0000</p>
          <p className="text-muted">London, United Kingdom</p>
        </div>
      </div>
      <div className="border-t border-subtle">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 h-12 text-xs text-muted flex items-center justify-between">
          <span>© {new Date().getFullYear()} LifetimeArt. All rights reserved.</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
