import Link from "next/link";
import Brand from "./Brand";
export default function Footer() {
  return <footer className="site-footer"><div className="shell">
    <div className="footer-top"><div><Link href="/" aria-label="ZKOKATECH home"><Brand /></Link><p className="footer-statement">Build with intent.<br /><em>Ship what matters.</em></p></div>
      <div className="footer-column"><p className="micro">Explore</p><Link href="/what-we-do">Capabilities</Link><Link href="/work">Products</Link><Link href="/about">Company</Link><Link href="/contact">Contact</Link></div>
      <div className="footer-column"><p className="micro">Get in touch</p><a href="mailto:contact@zkokatech.com">contact@zkokatech.com <span aria-hidden="true">↗</span></a><p className="footer-location">ZKOKATECH LLC<br />New Mexico, United States</p></div>
    </div><div className="footer-bottom"><p>© {new Date().getFullYear()} ZKOKATECH LLC</p><p className="micro">Software · Products · Systems</p><a href="#top">Back to top <span aria-hidden="true">↑</span></a></div>
  </div></footer>;
}
