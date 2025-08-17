import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Us"
          title="Dedicated to premium craftsmanship"
          subtitle="We combine traditional techniques with modern standards to deliver reliable, beautiful results across kitchens, bathrooms, extensions, and more."
        />

        <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="relative h-32 md:h-44 rounded-lg overflow-hidden bg-subtle">
            <Image src="/placeholder.svg" alt="About gallery 1" fill className="object-cover" />
          </div>
          <div className="relative h-32 md:h-44 rounded-lg overflow-hidden bg-subtle">
            <Image src="/placeholder.svg" alt="About gallery 2" fill className="object-cover" />
          </div>
          <div className="relative h-32 md:h-44 rounded-lg overflow-hidden bg-subtle">
            <Image src="/placeholder.svg" alt="About gallery 3" fill className="object-cover" />
          </div>
          <div className="relative h-32 md:h-44 rounded-lg overflow-hidden bg-subtle">
            <Image src="/placeholder.svg" alt="About gallery 4" fill className="object-cover" />
          </div>
        </div>

        <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-foreground">10+</div>
            <div className="text-muted">Years of experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-foreground">100+</div>
            <div className="text-muted">Projects completed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-foreground">5★</div>
            <div className="text-muted">Client satisfaction</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-foreground">24/7</div>
            <div className="text-muted">Support during project</div>
          </div>
        </div>
      </div>
    </section>
  );
}
