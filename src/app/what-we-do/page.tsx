import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do — Zkokatech",
  description:
    "Mobile apps, web apps, and SaaS products — how Zkokatech builds software.",
};

const AREAS = [
  {
    title: "Mobile App Development",
    description:
      "We design and build native and cross-platform mobile apps (React Native / Flutter, or fully native iOS and Android), from first concept through App Store and Play Store release.",
  },
  {
    title: "Web App Development",
    description:
      "We build modern, responsive web applications — dashboards, platforms, and tools with real functionality behind them, not just static pages.",
  },
  {
    title: "SaaS Product Development",
    description:
      "We design and build full SaaS products: user accounts, subscription billing, multi-tenant architecture, and the systems behind a product that scales. WatchHub is our first example of this in practice.",
  },
];

const HOW_WE_WORK = [
  {
    title: "Small, hands-on team",
    description: "Four founders directly involved in every build.",
  },
  {
    title: "Modern, maintainable tools",
    description: "Chosen to last, not to impress.",
  },
  {
    title: "We build to ship",
    description: "Real launches, not endless roadmaps.",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          What We Do
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Zkokatech is a software studio working across three areas.
          Here&apos;s what that means in practice.
        </p>
      </section>

      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl divide-y divide-slate-200 px-4 sm:px-6 lg:px-8">
          {AREAS.map((area) => (
            <div key={area.title} className="py-12">
              <h2 className="text-xl font-semibold text-slate-900">
                {area.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            How we work
          </h2>
          <ul className="mt-8 grid gap-8 sm:grid-cols-3">
            {HOW_WE_WORK.map((item) => (
              <li key={item.title}>
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
