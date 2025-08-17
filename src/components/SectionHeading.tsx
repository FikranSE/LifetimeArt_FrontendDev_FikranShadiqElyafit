type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle, align = "left", id }: Props) {
  return (
    <div id={id} className={`w-full flex flex-col ${align === "center" ? "items-center text-center" : "items-start"} gap-3 md:gap-4`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-subtle bg-surface px-3 py-1 text-xs md:text-sm text-muted">
          <span className="h-2 w-2 rounded-full bg-brand" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-foreground">{title}</h2>
      {subtitle && <p className="text-muted max-w-[70ch]">{subtitle}</p>}
    </div>
  );
}
