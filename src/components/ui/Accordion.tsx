"use client";
import { useState } from "react";

export function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="divide-y divide-subtle border border-subtle rounded-lg overflow-hidden bg-surface">{children}</div>;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-surface">
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 px-4 md:px-6 py-4 md:py-5 text-left hover:bg-subtle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-medium md:text-lg text-foreground">{title}</span>
        <span
          className={`inline-flex h-6 w-6 items-center justify-center rounded-full border border-subtle text-muted transition-transform ${
            open ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 md:px-6 pb-4 md:pb-6 text-muted">{children}</div>
        </div>
      </div>
    </div>
  );
}
