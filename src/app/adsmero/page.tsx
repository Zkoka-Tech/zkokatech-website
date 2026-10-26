import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Adsmero — Google Ads reporting by ZKOKATECH" },
  description:
    "Adsmero is a read-only reporting workspace by ZKOKATECH. It connects to Google Ads and brings campaign performance from the accounts you choose into one view.",
  alternates: { canonical: "https://zkokatech.com/adsmero" },
};

// Only describe what the application does today. Planned integrations are
// not listed until they ship.
const FEATURES = [
  {
    number: "01",
    title: "Connect Google Ads",
    description:
      "Authorize Adsmero with your Google account. It lists the Google Ads accounts that account can access, including client accounts under a manager account.",
  },
  {
    number: "02",
    title: "Choose the accounts",
    description:
      "Every discovered account starts excluded. Only the accounts you include are imported and appear in reports.",
  },
  {
    number: "03",
    title: "Import campaign metrics",
    description:
      "Daily impressions, clicks, cost and conversions for each campaign. Importing the same days again replaces them, so nothing is counted twice.",
  },
  {
    number: "04",
    title: "Report in one view",
    description:
      "An overview with totals and a daily trend, and a campaign table you can sort and search, for the date range you pick. Totals stay separate per currency.",
  },
  {
    number: "05",
    title: "Export to CSV",
    description:
      "Download the campaign report as a CSV file with exact figures, for spreadsheets or your own analysis.",
  },
  {
    number: "06",
    title: "Work as a team",
    description:
      "Workspaces with owners and members. A workspace's connections, accounts and reports are visible only to its members.",
  },
];

const GOOGLE_DATA = [
  "Your Google account's identifier and email address, to show which Google account a connection uses.",
  "The Google Ads accounts you can access: ID, name, currency, time zone, status and manager relationship.",
  "For the accounts you include: campaign IDs, names and statuses, and daily impressions, clicks, cost and conversions.",
];

function AdsmeroMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M8.5 22.5 16 9l7.5 13.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="18.6" r="2.1" fill="currentColor" />
    </svg>
  );
}

export default function AdsmeroPage() {
  return (
    <>
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="flex flex-wrap items-center gap-3">
            <span className="grid h-9 w-9 place-items-center bg-[#111315] text-[#8ea4ff]">
              <AdsmeroMark className="h-6 w-6" />
            </span>
            <span className="text-sm font-bold tracking-[0.04em]">Adsmero</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/45">
              by ZKOKATECH
            </span>
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">
              All your ads.
              <br />
              One clear view.
            </h1>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-7 text-black/55">
                Adsmero is a reporting workspace built by ZKOKATECH. It connects
                to Google Ads for reporting only, imports campaign performance
                from the accounts you choose, and shows it in one place for your
                team.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 border border-black/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-black/60">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3157d5]" />
                Private · by invitation · Google Ads
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/adsmero-privacy"
              className="motion-cta inline-flex items-center gap-3 bg-[#111315] px-5 py-3.5 text-sm font-semibold text-white"
            >
              Privacy policy
            </Link>
            <Link
              href="/adsmero-terms"
              className="inline-flex items-center gap-3 border border-black/15 px-5 py-3.5 text-sm font-semibold transition-colors hover:border-black/40"
            >
              Terms of service
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-black/15 px-5 py-3.5 text-sm font-semibold transition-colors hover:border-black/40"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#3157d5]">
            What it does today
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            From connected accounts to a report your team can trust.
          </h2>
          <div className="mt-12 grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <article key={feature.number} className="bg-[#f5f3ee] p-6 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
                  {feature.number}
                </p>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111315] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#8ea4ff]">
                Read-only by design
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Adsmero never changes your advertising.
              </h2>
              <p className="mt-6 text-base leading-7 text-white/60">
                Google offers a single Google Ads API permission, which would
                also allow changes. Adsmero uses it only to list accounts and
                read reporting data. Its server refuses any request that could
                create or modify campaigns, budgets, bids or settings.
              </p>
              <p className="mt-4 text-base leading-7 text-white/60">
                Google access tokens are encrypted before they are stored and are
                never sent to your browser. You can disconnect Google Ads in
                Adsmero, or remove its access from your Google Account, at any
                time.
              </p>
            </div>
            <div className="border border-white/15 p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8ea4ff]">
                Google data Adsmero uses
              </p>
              <ul className="mt-6 space-y-4">
                {GOOGLE_DATA.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-white/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#8ea4ff]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-6 text-white/50">
                This data is used only to provide Adsmero to you. It is not sold
                and not used for advertising. Details are in the{" "}
                <Link href="/adsmero-privacy" className="text-white underline underline-offset-4">
                  Adsmero privacy policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#3157d5]">
                Availability
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                Private, by invitation.
              </h2>
            </div>
            <div className="border-t border-black/10 pt-6">
              <p className="max-w-2xl text-base leading-7 text-black/55">
                Adsmero is used by ZKOKATECH and the businesses it works with.
                There is no public sign-up: accounts are created by invitation,
                and each workspace decides which advertising accounts it
                includes. Adsmero currently supports Google Ads.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-black/55">
                Questions about Adsmero or your data:{" "}
                <a
                  href="mailto:contact@zkokatech.com"
                  className="font-medium text-[#3157d5] underline underline-offset-4"
                >
                  contact@zkokatech.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
