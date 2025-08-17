import SectionHeading from "@/components/SectionHeading";
import { faqs, faqsIntro } from "@/lib/data";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";

export default function FAQs() {
  return (
    <section id="faqs" className="w-full py-16 md:py-24 lg:py-28 bg-surface">
      <div className="mx-auto max-w-[900px] px-4 md:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQs"
          title={faqsIntro.heading}
          subtitle={faqsIntro.subheading}
          align="center"
        />

        <div className="mt-8 md:mt-10">
          <Accordion>
            {faqs.map((f, i) => (
              <AccordionItem key={i} title={f.q} defaultOpen={i === 0}>
                <p>{f.a}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
