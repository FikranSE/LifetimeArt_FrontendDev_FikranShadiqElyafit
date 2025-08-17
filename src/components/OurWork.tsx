import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    title: "Clapham Kitchen Remodel",
    tag: "Kitchen",
    duration: "6 weeks",
    quote: "A seamless process from design to finish—fantastic result.",
  },
  {
    title: "Islington Loft Conversion",
    tag: "Loft Conversion",
    duration: "9 weeks",
    quote: "Our unused loft is now a bright home office and guest room.",
  },
  {
    title: "Richmond Ground-floor Extension",
    tag: "Extension",
    duration: "12 weeks",
    quote: "Added space transformed how we use our home.",
  },
];

export default function OurWork() {
  return (
    <section id="work" className="w-full py-16 md:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Work" title="Recent projects" subtitle="A snapshot of our craftsmanship across kitchens, bathrooms, loft conversions, and extensions." />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <article key={i} className="rounded-xl border border-subtle overflow-hidden bg-surface">
              <div className="relative aspect-[4/3] w-full bg-subtle">
                <Image src="/placeholder.svg" alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-5 md:p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span className="inline-flex px-2 py-1 rounded-full border border-subtle bg-surface text-foreground">{p.tag}</span>
                  <span className="text-muted">•</span>
                  <span className="text-muted">{p.duration}</span>
                </div>
                <h3 className="text-lg font-medium text-foreground">{p.title}</h3>
                <p className="text-muted text-sm">“{p.quote}”</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
