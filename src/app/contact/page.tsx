import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact ZKOKATECH LLC for company and product enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#3157d5]">
            Contact
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">
              Start a conversation.
            </h1>
            <p className="max-w-xl text-base leading-7 text-black/55 lg:justify-self-end">
              For company, product, partnership, or general enquiries, contact
              ZKOKATECH directly by email.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf7]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-24">
          <a
            href="mailto:zkokatech@gmail.com"
            className="group flex min-h-[320px] flex-col justify-between border border-black/10 bg-[#3157d5] p-7 text-white transition-transform duration-300 hover:-translate-y-1 sm:p-10"
          >
            <div className="flex items-start justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
                Email
              </p>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                zkokatech@gmail.com
              </p>
              <p className="mt-3 text-sm text-white/65">
                The direct contact address for ZKOKATECH LLC.
              </p>
            </div>
          </a>

          <div className="flex min-h-[320px] flex-col justify-between border border-black/10 bg-[#f5f3ee] p-7 sm:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/40">
              Company
            </p>
            <div>
              <p className="text-2xl font-semibold tracking-[-0.03em]">
                ZKOKATECH LLC
              </p>
              <p className="mt-3 text-sm leading-6 text-black/55">
                New Mexico
                <br />
                United States
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#111315] text-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/55">
              Looking for WatchHub?
            </p>
            <a
              href="https://watchhub.zkokatech.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Visit the WatchHub product site
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
