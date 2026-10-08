import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About ZKOKATECH LLC — Independent Software Company" },
  description:
    "Learn about ZKOKATECH LLC, a four-founder New Mexico software company building and operating mobile, web, and SaaS products.",
  alternates: { canonical: "https://zkokatech.com/about" },
};

const OPERATING_PRINCIPLES = [
  {
    number: "01",
    title: "Direct ownership",
    description:
      "A small founding team keeps product decisions close to the people building and operating the software.",
  },
  {
    number: "02",
    title: "Product first",
    description:
      "We care about whether a product solves a clear problem and earns repeat use, not whether it has the longest feature list.",
  },
  {
    number: "03",
    title: "Built to improve",
    description:
      "Launch is a starting point. We prefer products that can evolve through real usage, feedback, and iteration.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#3157d5]">
            Company
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">
              Small team.
              <br />
              Full product ownership.
            </h1>
            <p className="max-w-xl text-base leading-7 text-black/55 lg:justify-self-end">
              ZKOKATECH LLC is a four-founder software company based in New
              Mexico. We create and operate digital products across mobile,
              web, and SaaS.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#fbfaf7]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#3157d5]">
                What ZKOKATECH is
              </p>
            </div>
            <div className="max-w-3xl">
              <p className="text-3xl font-medium leading-[1.18] tracking-[-0.035em] sm:text-4xl">
                We&apos;re building a software company around products we can
                take from an idea to a real release—and continue improving
                after they reach users.
              </p>
              <p className="mt-8 max-w-2xl text-base leading-7 text-black/55">
                Our current portfolio begins with{" "}
                <a
                  href="https://watchhub.zkokatech.com/tv-time-alternative.html"
                  className="font-medium text-[#3157d5] underline decoration-black/15 underline-offset-4 hover:decoration-[#3157d5]"
                >
                  WatchHub
                </a>
                , our movie, TV show, and anime tracking product. The same company structure supports
                the next products we choose to build across mobile and web.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#3157d5]">
                How we operate
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                Keep the loop short.
              </h2>
            </div>
            <div className="grid border-l border-t border-black/10 sm:grid-cols-3">
              {OPERATING_PRINCIPLES.map((item) => (
                <article
                  key={item.number}
                  className="min-h-[280px] border-b border-r border-black/10 p-6 sm:p-7"
                >
                  <p className="font-mono text-xs text-[#3157d5]">{item.number}</p>
                  <h3 className="mt-14 text-xl font-semibold tracking-[-0.025em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-black/55">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#3157d5] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
              Product portfolio
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              See what we&apos;re building now.
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex w-fit items-center gap-3 bg-white px-5 py-3.5 text-sm font-semibold text-[#111315]"
          >
            Explore products
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
