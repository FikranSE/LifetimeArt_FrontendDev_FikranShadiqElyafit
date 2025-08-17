import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    name: "Alice W.",
    role: "Homeowner, Putney",
    text:
      "LifetimeArt delivered beyond expectations. The team was tidy, professional, and communicative throughout our kitchen remodel.",
  },
  {
    name: "Tom & Priya",
    role: "Homeowners, Finchley",
    text:
      "Our loft conversion has completely changed our home. Excellent attention to detail and timeline management.",
  },
  {
    name: "Mark R.",
    role: "Homeowner, Richmond",
    text:
      "We love our new extension. Smooth process from start to finish with a beautiful finish.",
  },
  {
    name: "Jasmine L.",
    role: "Homeowner, Islington",
    text:
      "The bathroom feels like a spa now. Great craftsmanship and friendly team.",
  },
  {
    name: "George K.",
    role: "Landlord, Clapham",
    text:
      "Reliable and transparent. Will definitely hire again for future projects.",
  },
  {
    name: "Sara D.",
    role: "Homeowner, Wandsworth",
    text:
      "Fantastic communication and top-notch finishes throughout the project.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-28 bg-subtle">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          subtitle="Real words from homeowners we’ve partnered with."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="rounded-xl border border-subtle bg-surface p-6 md:p-8">
              <p className="text-foreground">“{t.text}”</p>
              <footer className="mt-4 text-sm text-muted">
                <span className="font-medium text-foreground">{t.name}</span> · {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
