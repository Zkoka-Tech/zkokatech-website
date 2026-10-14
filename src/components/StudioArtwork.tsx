export default function StudioArtwork() {
  return <div className="studio-art" aria-hidden="true">
    <div className="art-caption micro"><span>Product thinking, made tangible.</span><span>ZK / 01</span></div>
    <svg className="studio-sculpture" viewBox="0 0 540 450" fill="none">
      <defs><linearGradient id="plane" x1="80" y1="120" x2="420" y2="310" gradientUnits="userSpaceOnUse"><stop stopColor="#faf8f3" /><stop offset="1" stopColor="#ded9cd" /></linearGradient><linearGradient id="edge" x1="200" y1="190" x2="420" y2="320" gradientUnits="userSpaceOnUse"><stop stopColor="#af7459" /><stop offset="1" stopColor="#694630" /></linearGradient><filter id="soft-shadow" x="-60%" y="-60%" width="220%" height="250%"><feGaussianBlur stdDeviation="15" /></filter></defs>
      <g stroke="#d5cfc1" strokeWidth=".7" opacity=".6"><path d="M25 320 265 180 515 325M25 360 265 220 515 365M85 395 325 255M145 430 385 290M25 280 265 140 515 285M85 245 335 390M145 210 395 355M205 175 455 320" /></g>
      <ellipse cx="275" cy="348" rx="147" ry="36" fill="#897768" opacity=".16" filter="url(#soft-shadow)" />
      <g className="sculpture-layer layer-base"><path d="m105 280 165-96 165 96-165 96z" fill="#d6d1c5" stroke="#bbb3a4" /><path d="m105 280 165 96 165-96v18l-165 96-165-96z" fill="#aaa18f" /><path d="m270 376 165-96v18l-165 96z" fill="#b9b09f" /></g>
      <g className="sculpture-layer layer-middle"><path d="m105 220 165-96 165 96-165 96z" fill="url(#plane)" stroke="#c2b8a7" /><path d="m105 220 165 96 165-96v17l-165 96-165-96z" fill="#c9c1b2" /><path d="m270 316 165-96v17l-165 96z" fill="#d7d0c3" /><path d="m151 220 119-69 119 69-119 69z" stroke="#b5a08a" strokeDasharray="3 6" /></g>
      <g className="sculpture-layer layer-top"><path d="m105 159 165-96 165 96-165 96z" fill="url(#plane)" stroke="#c2b8a7" /><path d="m105 159 165 96 165-96v17l-165 96-165-96z" fill="url(#edge)" /><path d="m270 255 165-96v17l-165 96z" fill="#b67a57" /><path d="m185 158 85-49 85 49-85 50z" fill="#a56848" /><path d="m215 158 55-32 55 32-55 32z" fill="#f6e8d4" /><path d="m256 158 14-8 14 8-14 8z" fill="#a56848" /></g>
      <g stroke="#a99780"><path d="M106 159H55v-25M435 220h44v-26M270 392v24" /><circle cx="55" cy="131" r="3" fill="#a56848" stroke="none" /><circle cx="479" cy="191" r="3" fill="#a56848" stroke="none" /></g>
    </svg>
    <div className="art-key"><span><i />Mobile</span><span><i />Web</span><span><i />SaaS</span></div>
    <div className="art-footer micro"><span>One company. Connected systems.</span><span>↗</span></div>
  </div>;
}
