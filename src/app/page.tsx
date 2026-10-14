import Link from "next/link";
import type { Metadata } from "next";
import StudioArtwork from "@/components/StudioArtwork";
import ProcessExplorer from "@/components/ProcessExplorer";
import ProductFeature from "@/components/ProductFeature";
import CallToAction from "@/components/CallToAction";
export const metadata: Metadata = {
  title: { absolute: "ZKOKATECH — Software Company & Digital Products" },
  description: "ZKOKATECH LLC is a New Mexico software company building and operating mobile apps, web products, and SaaS systems, including WatchHub.",
  alternates: { canonical: "https://zkokatech.com/" },
};
const capabilities = [
  { title: "Mobile products", description: "Focused mobile experiences for iOS and Android, designed around real use rather than feature lists.", detail: "Product design · Mobile UX · App delivery" },
  { title: "Web products", description: "Responsive web applications and product experiences built to be clear, fast, and maintainable.", detail: "Web applications · Responsive UI · Product systems" },
  { title: "SaaS systems", description: "Subscription software and connected product systems shaped from the product idea through launch.", detail: "Accounts · Subscriptions · Operations" },
];
export default function HomePage() {
  return <>
    <section className="hero"><div className="shell"><div className="hero-grid"><div className="hero-copy"><p className="eyebrow"><span />Independent software company · New Mexico</p><h1>Digital products,<br /><em>built with intent.</em></h1><p className="hero-description">ZKOKATECH LLC is a four-founder software company. We design, build, ship, and operate products across mobile, web, and SaaS.</p><div className="hero-actions"><Link className="button button-dark" href="/work">Explore our products <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/what-we-do">What we build <span aria-hidden="true">→</span></Link></div></div><StudioArtwork /></div>
      <div className="hero-bottom"><p><span className="micro">Our focus</span>Useful software. Lasting products.</p><a href="#capabilities" className="hero-scroll">Discover ZKOKATECH <span aria-hidden="true">↓</span></a></div>
    </div></section>
    <section id="capabilities" className="section capabilities-section"><div className="shell split-layout" data-reveal><div className="section-heading"><p className="eyebrow"><span />01 / What we build</p><h2>One company.<br /><em>Multiple surfaces.</em></h2><p>From first idea to daily use, we consider the whole product.</p><Link className="text-link" href="/what-we-do">Our capabilities <span aria-hidden="true">↗</span></Link></div><div className="capability-list">{capabilities.map((item, index) => <details key={item.title} className="capability" open={index === 0}><summary><span className="micro">0{index + 1}</span><h3>{item.title}</h3><span className="capability-plus" aria-hidden="true">+</span></summary><div className="capability-content"><p>{item.description}</p><span className="micro">{item.detail}</span></div></details>)}</div></div></section>
    <section className="section product-section"><div className="shell"><div className="section-top" data-reveal><div><p className="eyebrow"><span />02 / Our products</p><h2>Built here.<br /><em>Used out there.</em></h2></div><Link className="text-link" href="/work">Explore our portfolio <span aria-hidden="true">↗</span></Link></div><ProductFeature /></div></section>
    <section className="section process-section"><div className="shell"><div className="section-top" data-reveal><div><p className="eyebrow"><span />03 / How we work</p><h2>From idea to release.<br /><em>And beyond.</em></h2></div><p className="section-description">Launch is a starting point. We shape, design, build, and improve the products we operate.</p></div><div data-reveal><ProcessExplorer /></div></div></section>
    <section className="section principles-section"><div className="shell split-layout" data-reveal><div className="section-heading"><p className="eyebrow"><span />04 / How we think</p><h2>Useful before<br /><em>impressive.</em></h2><p>Product thinking without the theatre.</p></div><div className="principle-list">{[["Useful before impressive", "We care about whether a product solves a clear problem and earns repeat use."], ["Small team, direct decisions", "A small founding team keeps decisions close to the people building and operating the software."], ["Ship, learn, improve", "Real usage, feedback, and iteration guide what comes next."]].map(([title, description], index) => <article key={title}><span className="micro">0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>
    <CallToAction />
  </>;
}
