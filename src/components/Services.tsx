import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { services, servicesIntro } from "@/lib/data";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";

export default function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-28 bg-subtle">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title={servicesIntro.heading}
          subtitle={servicesIntro.subheading}
        />

        <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="order-2 lg:order-1">
            <Accordion>
              {services.map((s, i) => (
                <AccordionItem key={s.slug} title={s.title} defaultOpen={i === 0}>
                  <p className="mb-4 text-muted">{s.description}</p>
                  <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-subtle">
                    <Image
                      src={`/placeholder.svg`}
                      alt={s.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-subtle">
              <Image src="/placeholder.svg" alt="Services" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
