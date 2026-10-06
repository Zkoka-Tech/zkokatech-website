"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/what-we-do", label: "Capabilities" },
  { href: "/work", label: "Products" },
  { href: "/about", label: "Company" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f3ee]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="ZKOKATECH home"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center bg-[#111315] text-sm font-bold tracking-[-0.08em] text-white transition-transform duration-300 group-hover:-rotate-3">
            ZK
          </span>
          <span className="flex items-baseline gap-2">
            <span className="text-sm font-bold tracking-[0.16em] text-[#111315]">
              ZKOKATECH
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-black/45 sm:inline">
              LLC
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "relative text-sm font-medium transition-colors " +
                  (active
                    ? "text-[#111315]"
                    : "text-black/55 hover:text-[#111315]")
                }
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-[#3157d5]" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#111315] px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          >
            Contact
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-black/15 text-[#111315] md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="font-mono text-lg leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/10 bg-[#f5f3ee] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-4 text-base font-medium text-[#111315]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-between bg-[#111315] px-4 py-4 text-sm font-semibold text-white"
            >
              Contact ZKOKATECH
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
