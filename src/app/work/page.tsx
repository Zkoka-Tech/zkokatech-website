import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Zkokatech",
  description:
    "WatchHub, our movie, series, and anime tracker with a built-in community — and what's next.",
};

export default function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Work
        </h1>
      </section>

      {/* WatchHub */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              WatchHub
            </h2>
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
              In development
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A movie, series, and anime tracker with a community built in —
            track what you&apos;re watching and connect with other people
            watching the same thing.
          </p>

          <dl className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold text-slate-900">
                What it is
              </dt>
              <dd className="mt-2 text-sm leading-6 text-slate-600">
                Personal watch tracking (movies, series, anime) plus
                community features to discuss and discover with others.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-slate-900">Status</dt>
              <dd className="mt-2 text-sm leading-6 text-slate-600">
                Currently in development.
              </dd>
            </div>
          </dl>

          <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-900">
              TODO — WatchHub media &amp; links
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Add screenshots, a waitlist link, or a &quot;coming soon&quot;
              signup here once available.
            </p>
          </div>
        </div>
      </section>

      {/* What's next */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            What&apos;s next
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            WatchHub is our first product. As we build more, we&apos;ll add
            them here.
          </p>
        </div>
      </section>
    </>
  );
}
