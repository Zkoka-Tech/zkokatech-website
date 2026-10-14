import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import CallToAction from "@/components/CallToAction";
export const metadata: Metadata = { title: "About ZKOKATECH LLC", description: "Learn about ZKOKATECH LLC, a four-founder New Mexico software company building and operating mobile, web, and SaaS products.", alternates: { canonical: "https://zkokatech.com/about" } };
const principles = [
  { title: "Direct ownership", description: "A small founding team keeps product decisions close to the people building and operating the software." },
  { title: "Product first", description: "We care about whether a product solves a clear problem and earns repeat use, not whether it has the longest feature list." },
  { title: "Built to improve", description: "Launch is a starting point. We prefer products that can evolve through real usage, feedback, and iteration." },
];
export default function AboutPage() {
  return <><PageIntro label="The company" title="Small team." accent="Full product ownership." description="ZKOKATECH LLC is a four-founder software company registered in New Mexico. We create and operate digital products across mobile, web, and SaaS." />
    <section className="section company-section"><div className="shell company-grid" data-reveal><div className="company-art" aria-hidden="true"><div className="founder-grid"><span /><span /><span /><span /></div><p className="company-art-title">Four founders.<br /><em>One product mindset.</em></p><span className="micro">ZKOKATECH / Independent by design</span></div><div className="company-story"><p className="eyebrow"><span />What ZKOKATECH is</p><h2>We take the idea<br /><em>all the way.</em></h2><p className="company-lead">We’re building a software company around products we can take from an idea to a real release—and continue improving after they reach users.</p><p>Our current portfolio begins with <Link className="inline-link" href="/work">WatchHub</Link>, our movie, TV show, and anime tracking product. The same company structure supports the next products we choose to build across mobile and web.</p></div></div></section>
    <section className="section principles-section"><div className="shell split-layout" data-reveal><div className="section-heading"><p className="eyebrow"><span />How we operate</p><h2>Keep the<br /><em>loop short.</em></h2></div><div className="principle-list">{principles.map((item, index) => <article key={item.title}><span className="micro">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></div></section>
    <CallToAction label="Our product portfolio" title="See what we’re building now." href="/work" action="Explore our products" /></>;
}
