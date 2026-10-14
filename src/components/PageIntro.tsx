export default function PageIntro({ label, title, accent, description }: { label: string; title: string; accent?: string; description: string }) {
  return <section className="page-intro"><div className="shell"><p className="eyebrow"><span />{label}</p><div className="intro-grid"><h1>{title}{accent && <><br /><em>{accent}</em></>}</h1><p className="intro-description">{description}</p></div></div></section>;
}
