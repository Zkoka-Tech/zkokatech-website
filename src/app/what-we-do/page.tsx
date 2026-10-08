import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Mobile, Web & SaaS Product Development | ZKOKATECH" },
  description:
    "See how ZKOKATECH designs, builds, launches, and improves mobile apps, web products, and SaaS systems from product definition through delivery.",
  alternates: { canonical: "https://zkokatech.com/what-we-do" },
};

const AREAS = [
  {
    number: "01",
    title: "Mobile products",
    statement: "Software designed for the device people carry every day.",
    description:
      "We build mobile products for iOS and Android with a focus on clear flows, responsive interactions, and a product experience that feels deliberate from first open to daily use.",
    tags: ["Product design", "Mobile UX", "App delivery"],
  },
  {
    number: "02",
    title: "Web products",
    statement: "Fast, focused interfaces backed by real product logic.",
    description:
      "We create web applications and digital product experiences that balance visual clarity with useful functionality, from public-facing experiences to product interfaces.",
    tags: ["Web applications", "Responsive UI", "Product systems"],
  },
  {
    number: "03",
    title: "SaaS systems",
    statement: "Products built to keep working after launch day.",
    description:
      "We shape subscription software and connected systems with the product, user experience, and operational reality considered together rather than as separate layers.",
    tags: ["Accounts", "Subscriptions", "Operations"],
  },
];

const PROCESS = [
  ["01", "Shape", "Define the problem, the user, and the smallest useful product."],
  ["02", "Design", "Turn product decisions into a coherent interface and system."],
  ["03", "Build", "Implement the product with maintainability and release in mind."],
  ["04", "Improve", "Use real product feedback to guide what comes next."],
];

export default function WhatWeDoPage() {
  return (
    <>
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#3157d5]">
            Capabilities
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">
              We build the product,
              <br />
              not just the interface.
            </h1>
            <p className="max-w-xl text-base leading-7 text-black/55 lg:justify-self-end">
              ZKOKATECH works across mobile, web, and SaaS. The common thread is
              simple: understand what the product needs to do, build it clearly,
              and get it into real users&apos; hands.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="space-y-5">
            {AREAS.map((area) => (
              <article
                key={area.number}
                className="grid gap-8 border border-black/10 bg-[#f5f3ee] p-6 sm:p-8 lg:grid-cols-[120px_0.9fr_1.1fr] lg:gap-12 lg:p-10"
              >
                <p className="font-mono text-sm text-[#3157d5]">{area.number}</p>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                    {area.title}
                  </h2>
                  <p className="mt-3 max-w-sm text-sm font-medium leading-6 text-black/75">
                    {area.statement}
                  </p>
                </div>
                <div>
                  <p className="max-w-xl text-sm leading-7 text-black/55">
                    {area.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-black/10 bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-black/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#3157d5]">
                Product loop
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                From idea to something people can actually use.
              </h2>
            </div>
            <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
              {PROCESS.map(([number, title, description]) => (
                <div
                  key={number}
                  className="min-h-[220px] border-b border-r border-black/10 p-6 sm:p-7"
                >
                  <p className="font-mono text-xs text-[#3157d5]">{number}</p>
                  <h3 className="mt-9 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/55">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111315] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
              See it in practice
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
              Explore the products we&apos;re building.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex w-fit items-center gap-3 bg-white px-5 py-3.5 text-sm font-semibold text-[#111315]"
          >
            View products
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
