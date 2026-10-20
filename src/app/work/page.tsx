import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import ProductFeature from "@/components/ProductFeature";
import CallToAction from "@/components/CallToAction";
export const metadata: Metadata = { title: "Products", description: "Explore software products built by ZKOKATECH, including WatchHub, an Android tracker for movies, TV shows, anime, watch history, and community.", alternates: { canonical: "https://zkokatech.com/work" } };
export default function ProductsPage() {
  return <><PageIntro label="Our product portfolio" title="We build our own products." accent="Built to last." description="We start with real user problems, ship focused experiences, and improve them over time. Our current portfolio begins with WatchHub." />
    <section className="section portfolio-section"><div className="shell"><ProductFeature /><div className="product-resources"><span className="micro">Explore WatchHub</span><a className="text-link" href="https://watchhub.zkokatech.com/tv-time-alternative.html" target="_blank" rel="noopener noreferrer">TV Time alternative ↗</a><a className="text-link" href="https://play.google.com/store/apps/details?id=com.watchhub.zkokatech" target="_blank" rel="noopener noreferrer">Available on Google Play ↗</a></div></div></section>
    <section className="section portfolio-note"><div className="shell split-layout" data-reveal><p className="eyebrow"><span />The next chapter</p><div><h2>A portfolio shaped<br /><em>by useful ideas.</em></h2><p>We’re building a software company around products we can take from an idea to a real release—and continue improving after they reach users.</p><Link className="text-link" href="/about">The company behind the products ↗</Link></div></div></section>
    <CallToAction label="Company & product enquiries" title="Start a conversation." href="/contact" action="Get in touch" /></>;
}
