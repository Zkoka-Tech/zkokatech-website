import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import EmailContact from "@/components/EmailContact";
export const metadata: Metadata = { title: "Contact ZKOKATECH LLC", description: "Contact ZKOKATECH LLC for company, product, partnership, support, and general enquiries about our software and digital products.", alternates: { canonical: "https://zkokatech.com/contact" } };
export default function ContactPage() {
  return <><PageIntro label="Get in touch" title="Good products start" accent="with a conversation." description="For company, product, partnership, or general enquiries, contact ZKOKATECH directly by email." />
    <section className="section contact-section"><div className="shell contact-grid" data-reveal><div className="contact-card"><p className="eyebrow"><span />Direct contact</p><h2>Let’s talk.</h2><a className="contact-email" href="mailto:contact@zkokatech.com">contact@zkokatech.com</a><p>The direct contact address for ZKOKATECH LLC.</p><EmailContact /></div><aside className="company-info"><p className="micro">Company details</p><div><h3>ZKOKATECH LLC</h3><p>New Mexico<br />United States</p></div><div className="company-info-bottom"><span className="micro">Our focus</span><p>Mobile · Web · SaaS</p></div></aside></div></section>
    <section className="watchhub-contact"><div className="shell"><p>Looking for WatchHub?</p><a className="text-link" href="https://watchhub.zkokatech.com" target="_blank" rel="noopener noreferrer">Visit the WatchHub product site <span aria-hidden="true">↗</span></a></div></section></>;
}
