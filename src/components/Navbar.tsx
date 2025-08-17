export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 bg-surface/80 backdrop-blur border-b border-subtle">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#hero" className="text-lg font-semibold text-foreground">LifetimeArt</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
          <a href="#about" className="hover:text-foreground">About</a>
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#work" className="hover:text-foreground">Our Work</a>
          <a href="#testimonials" className="hover:text-foreground">Testimonials</a>
          <a href="#faqs" className="hover:text-foreground">FAQs</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-md bg-brand text-brand-contrast text-sm hover:opacity-90">Get a Quote</a>
      </div>
    </header>
  );
}
