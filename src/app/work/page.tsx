import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Products created by ZKOKATECH, including WatchHub for movies, TV shows, anime, watch history, and community.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#3157d5]">
            Products
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl">
              We build our own
              <br />
              products to last.
            </h1>
            <p className="max-w-xl text-base leading-7 text-black/55 lg:justify-self-end">
              ZKOKATECH is building a portfolio of digital products. We start
              with real user problems, ship focused experiences, and improve
              them over time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#111315] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <article className="overflow-hidden border border-white/15">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8ea4ff]">
                      Product 01
                    </span>
                    <span className="inline-flex items-center gap-2 border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      Live on Android
                    </span>
                  </div>

                  <h2 className="mt-8 text-5xl font-semibold tracking-[-0.055em] sm:text-6xl">
                    WatchHub
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
                    WatchHub keeps movies, TV shows, and anime in one place.
                    Users can track episode and season progress, manage their
                    watch history, import existing activity, and join community
                    discussions with other fans.
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-3">
                  <a
                    href="https://watchhub.zkokatech.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-white px-5 py-3.5 text-sm font-semibold text-[#111315] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Product website
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

              <div className="dot-surface relative min-h-[520px] border-t border-white/15 bg-[#171a1d] p-7 lg:border-l lg:border-t-0 lg:p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3157d5]/20 via-transparent to-transparent" />
                <div className="relative flex h-full min-h-[450px] items-center justify-center">
                  <div className="w-full max-w-md">
                    <div className="translate-x-5 border border-white/10 bg-[#20242a] p-5 opacity-50">
                      <div className="h-2 w-24 bg-white/15" />
                      <div className="mt-5 h-16 border border-white/10 bg-white/[0.03]" />
                    </div>
                    <div className="-mt-12 border border-[#8ea4ff]/30 bg-[#15191f] p-6 shadow-2xl">
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold">WatchHub</p>
                        <span className="h-2.5 w-2.5 rounded-full bg-[#8ea4ff]" />
                      </div>
                      <div className="mt-8 grid grid-cols-3 gap-2">
                        {["Movies", "TV", "Anime"].map((item) => (
                          <div
                            key={item}
                            className="border border-white/10 bg-white/[0.035] p-4 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-white/55"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 border border-white/10 p-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8ea4ff]">
                          Track
                        </p>
                        <p className="mt-2 text-sm text-white/70">
                          Progress · history · watchlists
                        </p>
                      </div>
                      <div className="mt-3 border border-white/10 p-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8ea4ff]">
                          Community
                        </p>
                        <p className="mt-2 text-sm text-white/70">
                          Comments · groups · replies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#3157d5]">
                Next
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                The portfolio grows from here.
              </h2>
            </div>
            <div className="border-t border-black/10 pt-6">
              <p className="max-w-2xl text-base leading-7 text-black/55">
                WatchHub is the first public product in the ZKOKATECH portfolio.
                New products will be added here when they are ready to present.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
