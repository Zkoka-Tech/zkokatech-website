import Link from "next/link";
import type { ReactNode } from "react";

type LegalDocumentProps = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: ReactNode;
  related: { href: string; label: string }[];
  children: ReactNode;
};

// Shared layout for product legal pages: readable line length, numbered
// sections and mobile-friendly spacing, using plain HTML text (Google's OAuth
// review requires policies as HTML on a page, not PDFs or embeds).
export default function LegalDocument({
  eyebrow,
  title,
  updated,
  intro,
  related,
  children,
}: LegalDocumentProps) {
  return (
    <>
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#3157d5]">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-black/45">
            Last updated: {updated}
          </p>
          <div className="mt-8 max-w-3xl text-base leading-7 text-black/65">
            {intro}
          </div>
          <nav className="mt-8 flex flex-wrap gap-3" aria-label="Related pages">
            {related.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center border border-black/15 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-black/40"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* A <div>, not a <section>: MotionSystem hides section content until 12%
          of the section is on screen, which a long legal text never reaches on
          small screens. The document body must always be readable. */}
      <div>
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div
            className={[
              "max-w-3xl text-[15px] leading-7 text-black/75 sm:text-base",
              "[&_h2]:mt-12 [&_h2]:border-t [&_h2]:border-black/10 [&_h2]:pt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:tracking-[-0.03em] [&_h2]:text-[#111315]",
              "[&_h2:first-child]:mt-0 [&_h2:first-child]:border-t-0 [&_h2:first-child]:pt-0",
              "[&_h3]:mt-7 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[#111315]",
              "[&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5",
              "[&_a]:font-medium [&_a]:text-[#3157d5] [&_a]:underline [&_a]:underline-offset-4 [&_a]:break-words",
              "[&_code]:break-all [&_code]:bg-black/[0.05] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[13px]",
              "[&_strong]:font-semibold [&_strong]:text-[#111315]",
            ].join(" ")}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
