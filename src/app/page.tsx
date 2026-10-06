import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Company",
  description:
    "ZKOKATECH LLC designs, builds, ships, and operates digital products across mobile, web, and SaaS.",
};

const CAPABILITIES = [
  {
    index: "01",
    title: "Mobile products",
    description:
      "Focused mobile experiences for iOS and Android, designed around real use rather than feature lists.",
  },
  {
    index: "02",
    title: "Web products",
    description:
      "Responsive web applications and product experiences built to be clear, fast, and maintainable.",
  },
  {
    index: "03",
    title: "SaaS systems",
    description:
      "Subscription software and connected product systems shaped from the product idea through launch.",
  },
];

const PRINCIPLES = [
  "Useful before impressive",
  "Small team, direct decisions",
  "Ship, learn, improve",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="grid-surface absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-10 lg:py-32">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#3157d5]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-black/55">
                Independent software company · New Mexico
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-[#111315] sm:text-6xl lg:text-7xl">
              Digital products,
              <br />
              <span className="text-[#3157d5]">built with intent.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
              ZKOKATECH LLC is a four-founder software company. We design,
              build, ship, and operate products across mobile, web, and SaaS.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-3 bg-[#111315] px-5 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                Explore our products
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-3 border border-black/20 bg-[#f5f3ee] px-5 py-3.5 text-sm font-semibold text-[#111315] transition-colors hover:bg-white"
              >
                What we build
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div className="drift relative border border-black/15 bg-[#fbfaf7] p-5 shadow-[18px_18px_0_0_rgba(17,19,21,0.06)] sm:p-7">
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/45">
                  Product system
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#3157d5]" />
              </div>

              <div className="space-y-4 py-6">
                {[
                  ["01", "Shape the product", "Problem → useful scope"],
                  ["02", "Build the system", "Design → engineering"],
                  ["03", "Ship & operate", "Release → improve"],
                ].map(([number, title, detail]) => (
                  <div
                    key={number}
                    className="grid grid-cols-[48px_1fr] gap-4 border border-black/10 bg-white p-4"
                  >
                    <span className="font-mono text-xs text-[#3157d5]">
                      {number}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#111315]">
                        {title}
                      </p>
                      <p className="mt-1 font-mono text-[11px] text-black/40">
                        {detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-black/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/40">
                  ZKOKATECH / 2026
                </span>
                <span className="text-xs font-semibold text-[#111315]">
                  Build → Ship → Improve
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#fbfaf7]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#3157d5]">
                Capabilities
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                One company.
                <br />
                Multiple surfaces.
              </h2>
            </div>

            <div className="grid border-l border-t border-black/10 sm:grid-cols-3">
              {CAPABILITIES.map((item) => (
                <article
                  key={item.index}
                  className="min-h-[260px] border-b border-r border-black/10 p-6 sm:p-7"
                >
                  <p className="font-mono text-xs text-[#3157d5]">{item.index}</p>
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

      <section className="border-b border-black/10 bg-[#111315] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8ea4ff]">
                Current product
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                WatchHub
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/60">
                A movie, TV show, and anime tracker that keeps viewing progress,
                watchlists, history, and community discussion in one place.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://watchhub.zkokatech.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-white px-5 py-3.5 text-sm font-semibold text-[#111315] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Visit WatchHub
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.watchhub.zkokatech"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/45"
                >
                  Google Play
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden border border-white/15 bg-[#171a1d] p-6 sm:p-8">
              <div className="dot-surface absolute inset-0 opacity-15" aria-hidden="true" />
              <div className="relative flex h-full min-h-[300px] flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center gap-2 border border-[#8ea4ff]/35 bg-[#3157d5]/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#b7c3ff]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8ea4ff]" />
                    Live on Android
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                    ZK / Product 01
                  </span>
                </div>

                <div>
                  <div className="mb-5 flex gap-2">
                    <span className="h-2 w-20 bg-[#3157d5]" />
                    <span className="h-2 w-10 bg-white/20" />
                    <span className="h-2 w-6 bg-white/10" />
                  </div>
                  <p className="max-w-md text-2xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                    Track what you watch.
                    <br />
                    Join the conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#3157d5]">
                How we think
              </p>
              <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Product thinking without the theatre.
              </h2>
            </div>

            <div className="divide-y divide-black/10 border-t border-black/10">
              {PRINCIPLES.map((principle, index) => (
                <div
                  key={principle}
                  className="grid grid-cols-[42px_1fr] items-center gap-4 py-6"
                >
                  <span className="font-mono text-xs text-black/35">
                    0{index + 1}
                  </span>
                  <p className="text-lg font-medium tracking-[-0.02em]">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#3157d5] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
              ZKOKATECH LLC
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              See the company behind the products.
            </h2>
          </div>
          <Link
            href="/about"
            className="inline-flex w-fit items-center gap-3 bg-white px-5 py-3.5 text-sm font-semibold text-[#111315] transition-transform duration-200 hover:-translate-y-0.5"
          >
            About ZKOKATECH
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
