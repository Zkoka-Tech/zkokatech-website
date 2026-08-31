import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Zkokatech",
  description: "Get in touch with Zkokatech.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Get in touch.
      </h1>
      <p className="mt-4 text-base leading-7 text-slate-600">
        Questions, feedback, or just want to say hi? We&apos;d like to hear
        from you.
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>

      <div className="mt-10 border-t border-slate-200 pt-8 text-sm text-slate-600">
        <p>
          <span className="font-semibold text-slate-900">
            TODO — contact email
          </span>
        </p>
      </div>
    </section>
  );
}
