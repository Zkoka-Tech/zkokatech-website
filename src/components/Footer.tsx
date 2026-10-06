import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/what-we-do", label: "Capabilities" },
  { href: "/work", label: "Products" },
  { href: "/about", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-[#111315] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center bg-white text-sm font-bold tracking-[-0.08em] text-[#111315]">
                ZK
              </span>
              <span className="text-sm font-bold tracking-[0.16em]">ZKOKATECH</span>
            </div>
            <p className="mt-8 max-w-xl text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
              Build with intent.
              <br />
              Ship what matters.
            </p>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
              ZKOKATECH LLC builds and operates digital products across mobile,
              web, and SaaS.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                Navigate
              </p>
              <div className="mt-5 flex flex-col gap-3">
                {FOOTER_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                Contact
              </p>
              <a
                href="mailto:zkokatech@gmail.com"
                className="mt-5 block text-sm text-white/70 transition-colors hover:text-white"
              >
                zkokatech@gmail.com
              </a>
              <p className="mt-3 text-sm leading-6 text-white/45">
                New Mexico
                <br />
                United States
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} ZKOKATECH LLC. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.16em]">
            Software · Products · Systems
          </p>
        </div>
      </div>
    </footer>
  );
}
