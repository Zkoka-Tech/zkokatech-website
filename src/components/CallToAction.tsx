import Link from "next/link";
export default function CallToAction({ label = "The company behind the products", title = "Small team. Full product ownership.", href = "/about", action = "Meet ZKOKATECH" }: { label?: string; title?: string; href?: string; action?: string }) {
  return <section className="cta-section"><div className="shell cta-inner" data-reveal><div><p className="micro">{label}</p><h2>{title}</h2></div><Link className="button button-light" href={href}>{action}<span aria-hidden="true">↗</span></Link></div></section>;
}
