import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Zkokatech",
  description:
    "A four-founder software studio based in New Mexico, building products worth using.",
};

const TALKING_POINTS = [
  "Why the four of you started this together — what gap you saw, what you wanted to build.",
  "How you split focus (e.g. product, engineering, design, business) — even loosely, it helps visitors understand who they're talking to.",
  "What you believe about building software.",
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          About
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Zkokatech is a New Mexico-based software studio founded by four
          co-founders. We build mobile apps, web apps, and SaaS products —
          and we&apos;re starting by building our own.
        </p>
      </section>

      {/* Our story */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Our story
          </h2>
          <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-white p-6">
            <p className="text-sm font-semibold text-slate-900">
              TODO — fill in with your actual story
            </p>
            <ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-600">
              {TALKING_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
