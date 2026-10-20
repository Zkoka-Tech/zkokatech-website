import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ProcessExplorer from "@/components/ProcessExplorer";
import CallToAction from "@/components/CallToAction";
export const metadata: Metadata = { title: "Capabilities", description: "ZKOKATECH designs and builds mobile products, web applications, and SaaS systems from idea through launch and improvement.", alternates: { canonical: "https://zkokatech.com/what-we-do" } };
const areas = [
  { title: "Mobile products", statement: "Useful software that lives in people’s pockets.", description: "We build mobile products around clear user flows, responsive interactions, and a product experience that feels deliberate from first open to daily use.", tags: ["Product design", "Mobile UX", "App delivery"] },
  { title: "Web products", statement: "Fast, focused interfaces backed by real product logic.", description: "We create web applications and digital product experiences that balance visual clarity with useful functionality, from public-facing experiences to product interfaces.", tags: ["Web applications", "Responsive UI", "Product systems"] },
  { title: "SaaS systems", statement: "Products built to keep working after launch day.", description: "We shape subscription software and connected systems with the product, user experience, and operational reality considered together rather than as separate layers.", tags: ["Accounts", "Subscriptions", "Operations"] },
];
export default function CapabilitiesPage() {
  return <><PageIntro label="Our capabilities" title="We build the product." accent="Every part of it." description="ZKOKATECH works across mobile, web, and SaaS. The common thread is simple: understand what the product needs to do, build it clearly, and get it into real users’ hands." />
    <section className="section"><div className="shell area-list">{areas.map((area, index) => <article className="area-row" key={area.title} data-reveal><span className="area-number">0{index + 1}</span><div><h2>{area.title}</h2><p className="area-statement">{area.statement}</p></div><div><p className="area-description">{area.description}</p><div className="tags">{area.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>
    <section className="section process-section"><div className="shell"><div className="section-top" data-reveal><div><p className="eyebrow"><span />The product loop</p><h2>From idea to something<br /><em>people can actually use.</em></h2></div><p className="section-description">Explore each stage of our process.</p></div><div data-reveal><ProcessExplorer /></div></div></section>
    <CallToAction label="See it in practice" title="Explore the products we’re building." href="/work" action="View our products" /></>;
}
