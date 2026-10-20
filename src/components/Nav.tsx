"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Brand from "./Brand";
const links = [{ href: "/what-we-do", label: "Capabilities" }, { href: "/work", label: "Products" }, { href: "/about", label: "Company" }];
export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    };
    const desktop = window.matchMedia("(min-width: 800px)");
    const close = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", escape);
    desktop.addEventListener("change", close);
    return () => { document.removeEventListener("keydown", escape); desktop.removeEventListener("change", close); };
  }, [open]);
  return <header className="site-header">
    <div className="shell nav-inner">
      <Link href="/" aria-label="ZKOKATECH home" onClick={() => setOpen(false)}><Brand /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname.startsWith(link.href) ? "page" : undefined}>{link.label}</Link>)}
        <Link className="nav-contact" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Let’s talk <span aria-hidden="true">↗</span></Link>
      </nav>
      <button ref={toggle} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(value => !value)}><span aria-hidden="true">{open ? "×" : <><i /><i /></>}</span></button>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" hidden={!open} aria-label="Mobile navigation">
      {links.map((link, index) => <Link key={link.href} href={link.href} aria-current={pathname.startsWith(link.href) ? "page" : undefined} onClick={() => setOpen(false)}><span className="micro">0{index + 1}</span>{link.label}<span aria-hidden="true">↗</span></Link>)}
      <Link href="/contact" onClick={() => setOpen(false)}>Contact ZKOKATECH <span aria-hidden="true">↗</span></Link>
    </nav>
  </header>;
}
