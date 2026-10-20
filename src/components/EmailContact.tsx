"use client";
import { useState } from "react";
export default function EmailContact() {
  const [status, setStatus] = useState("");
  async function copy() {
    try { await navigator.clipboard.writeText("contact@zkokatech.com"); setStatus("Email address copied."); }
    catch { setStatus("Copy unavailable. Select the email address above, or open your email app."); }
  }
  return <div className="contact-actions"><a className="button button-dark" href="mailto:contact@zkokatech.com">Open email app <span aria-hidden="true">↗</span></a><button className="button button-outline" type="button" onClick={copy}>Copy email <span aria-hidden="true">⧉</span></button><p className="copy-status" role="status" aria-live="polite">{status}</p></div>;
}
