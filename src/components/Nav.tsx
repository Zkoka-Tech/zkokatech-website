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
          <span className="grid h-9 w-9 place-items-center bg-[#111315] text-sm font-bold tracking-[-0.08em] text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-6 group-hover:scale-105">
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
                  "group relative text-sm font-medium transition-colors duration-300 " +
                  (active
                    ? "text-[#111315]"
                    : "text-black/55 hover:text-[#111315]")
                }
              >
                {link.label}
                <span
                  className={
                    "absolute -bottom-2 left-0 h-px bg-[#3157d5] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                    (active
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100")
                  }
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#111315] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(17,19,21,0.18)]"
          >
            Contact
            <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">↗</span>
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-black/15 text-[#111315] transition-all duration-300 hover:border-black/30 hover:bg-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={
              "font-mono text-lg leading-none transition-transform duration-300 " +
              (open ? "rotate-90" : "rotate-0")
            }
          >
            {open ? "×" : "≡"}
          </span>
        </button>
      </div>

      <div
        className={
          "grid overflow-hidden border-t border-black/10 bg-[#f5f3ee] transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden " +
          (open
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0")
        }
      >
        <nav className="min-h-0">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-4 text-base font-medium text-[#111315] transition-[padding,color] duration-300 hover:pl-2 hover:text-[#3157d5]"
                style={{ transitionDelay: open ? `${index * 35}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-between bg-[#111315] px-4 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Contact ZKOKATECH
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
