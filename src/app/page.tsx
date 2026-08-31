import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zkokatech",
  description:
    "A software studio building mobile apps, web apps, and SaaS products — starting with our own.",
};

const WHAT_WE_DO = [
  {
    title: "Mobile Apps",
    description:
      "We design and build native and cross-platform apps for iOS and Android.",
  },
  {
    title: "Web Apps",
    description: "We build fast, modern web applications and platforms.",
  },
  {
    title: "SaaS Products",
    description:
      "We design and build subscription software from the ground up — our own included.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            We&apos;re Zkokatech.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            A software studio building mobile apps, web apps, and SaaS
            products — starting with our own.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/work"
              className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              See what we&apos;re building
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              About us →
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {WHAT_WE_DO.map((item) => (
              <div key={item.title}>
                <h2 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our focus right now */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Our focus right now
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Our first product is WatchHub — a movie, series, and anime
            tracker with a community built in, so you can connect with
            other people watching the same thing.{" "}
            <Link
              href="/work"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              See Work →
            </Link>
          </p>
        </div>
      </section>

      {/* Closing note */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Four founders. One studio. Building things worth using.
          </p>
          <div className="mt-6">
            <Link
              href="/about"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              About us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
