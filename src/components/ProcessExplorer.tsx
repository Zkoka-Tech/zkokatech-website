"use client";
import { useId, useRef, useState } from "react";
export const steps = [
  { title: "Shape", headline: "Start with a clear problem.", description: "Define the problem, the user, and the smallest useful product.", artifact: "Product direction", lines: ["Understand the user", "Find the useful scope", "Define what matters"] },
  { title: "Design", headline: "Give the idea a clear form.", description: "Turn product decisions into a coherent interface and system.", artifact: "Experience design", lines: ["Map the core journey", "Connect the interface", "Make every step deliberate"] },
  { title: "Build", headline: "Turn decisions into a working product.", description: "Implement the product with maintainability and release in mind.", artifact: "Product engineering", lines: ["Build the foundations", "Connect the product logic", "Prepare for release"] },
  { title: "Improve", headline: "Keep learning after launch.", description: "Use real product feedback to guide what comes next.", artifact: "Feedback & iteration", lines: ["Listen to real usage", "Choose the next improvement", "Ship and learn again"] },
];
export default function ProcessExplorer() {
  const [active, setActive] = useState(0);
  const id = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  return <div className="process-explorer">
    <div className="process-tabs" role="tablist" aria-label="Our product process">
      {steps.map((step, index) => <button key={step.title} ref={element => { refs.current[index] = element; }} role="tab" type="button" id={`${id}-tab-${index}`} aria-controls={`${id}-panel-${index}`} aria-selected={index === active} tabIndex={index === active ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => {
        let next = active;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (active + 1) % steps.length;
        else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (active + steps.length - 1) % steps.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = steps.length - 1;
        else return;
        event.preventDefault(); setActive(next); refs.current[next]?.focus();
      }}><span className="micro">0{index + 1}</span><span>{step.title}</span><span className="tab-arrow" aria-hidden="true">↗</span></button>)}
    </div>
    {steps.map((step, index) => <div key={step.title} role="tabpanel" id={`${id}-panel-${index}`} aria-labelledby={`${id}-tab-${index}`} tabIndex={0} hidden={index !== active} className="process-panel">
      <div className="process-copy"><p className="micro">The product loop / 0{index + 1}</p><h3>{step.headline}</h3><p>{step.description}</p><span className="process-count">0{index + 1}<span> / 04</span></span></div>
      <div className="process-artifact" aria-hidden="true"><div className="artifact-shadow" /><div className="artifact-sheet"><div className="artifact-top"><span className="micro">ZK / {step.artifact}</span><span>✳</span></div><p className="artifact-title">{step.title}<em>with intent.</em></p><div className="artifact-lines">{step.lines.map((line, lineIndex) => <div key={line}><span>0{lineIndex + 1}</span>{line}<span>↗</span></div>)}</div><div className="artifact-bottom micro">Build → Ship → Improve</div></div></div>
    </div>)}
  </div>;
}
