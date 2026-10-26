import type { Metadata } from "next";
import Link from "next/link";
import LegalDocument from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: { absolute: "Adsmero Terms of Service | ZKOKATECH" },
  description:
    "Terms of service for Adsmero, a read-only Google Ads reporting workspace by ZKOKATECH LLC.",
  alternates: { canonical: "https://zkokatech.com/adsmero-terms" },
};

export default function AdsmeroTermsPage() {
  return (
    <LegalDocument
      eyebrow="Adsmero · Terms"
      title="Adsmero Terms of Service"
      updated="26 October 2026"
      intro={
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) are an agreement between
          you and ZKOKATECH LLC (&ldquo;ZKOKATECH&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;) for your use of <strong>Adsmero</strong>, our web
          application for reporting on Google Ads campaigns. By using Adsmero
          you agree to these Terms. If you use Adsmero for an organization, you
          confirm that you may accept these Terms on its behalf.
        </p>
      }
      related={[
        { href: "/adsmero", label: "About Adsmero" },
        { href: "/adsmero-privacy", label: "Privacy policy" },
      ]}
    >
      <h2>1. Access by invitation</h2>
      <p>
        Adsmero is a private service. User accounts are created by invitation
        and there is no public sign-up. Keep your sign-in details confidential;
        you are responsible for activity under your account. Tell us at{" "}
        <a href="mailto:contact@zkokatech.com">contact@zkokatech.com</a> if you
        think someone else has used it.
      </p>

      <h2>2. Workspaces and roles</h2>
      <p>
        Data in Adsmero belongs to a workspace. Workspace owners manage members,
        advertising connections, which accounts are included and whether
        imports run automatically. All members of a workspace can see its
        accounts, reports and activity.
      </p>

      <h2>3. Connecting advertising accounts</h2>
      <ul>
        <li>
          Only connect Google Ads accounts that you are allowed to share with
          your workspace, and only with a Google account you are authorized to
          use for that purpose.
        </li>
        <li>
          Adsmero reads account and reporting data only. It does not create or
          change campaigns, budgets, bids or settings.
        </li>
        <li>
          Your use of Google Ads remains subject to Google&rsquo;s own terms and
          policies.
        </li>
        <li>
          You can disconnect a connection in Adsmero, or remove Adsmero&rsquo;s
          access from your Google Account, at any time.
        </li>
      </ul>

      <h2>4. Your data</h2>
      <p>
        You and your organization keep all rights in your advertising data. You
        allow us to process it only to provide Adsmero to you, as described in
        the <Link href="/adsmero-privacy">Adsmero Privacy Policy</Link>.
      </p>

      <h2>5. Reports</h2>
      <p>
        Reports show the data Google Ads provided at the time of the last
        import. Figures can differ from what Google Ads shows later, for
        example because conversions are reported with a delay. Check important
        figures in Google Ads before relying on them. Adsmero reports are not
        financial, legal or tax advice.
      </p>

      <h2>6. Acceptable use</h2>
      <p>Do not:</p>
      <ul>
        <li>
          access, or try to access, workspaces, accounts or data you are not
          authorized to use;
        </li>
        <li>
          probe, scan or test the security of Adsmero, or interfere with its
          operation;
        </li>
        <li>share your sign-in details or let others use your account;</li>
        <li>
          use Adsmero in breach of the law or of Google&rsquo;s terms and
          policies.
        </li>
      </ul>

      <h2>7. Fees</h2>
      <p>
        These Terms do not set any fees. Any commercial arrangement for Adsmero
        is agreed separately in writing.
      </p>

      <h2>8. Changes, availability and suspension</h2>
      <p>
        Adsmero may change over time, and we may add or remove features. We do
        not guarantee that it will be available without interruption. We may
        suspend or end access to Adsmero, or to a connection, if these Terms are
        broken, to protect the security of the service or its users, or if the
        law requires it. You can stop using Adsmero at any time; to have your
        data deleted, follow the{" "}
        <Link href="/adsmero-privacy">Privacy Policy</Link>.
      </p>

      <h2>9. Third-party services</h2>
      <p>
        Adsmero relies on services from Google, Supabase and Cloudflare. We are
        not responsible for those services. Adsmero is not affiliated with,
        endorsed or sponsored by Google. Google Ads is a trademark of Google
        LLC.
      </p>

      <h2>10. Disclaimers and limitation of liability</h2>
      <p>
        Adsmero is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;,
        without warranties of any kind, to the fullest extent permitted by law.
        To the fullest extent permitted by law, ZKOKATECH is not liable for any
        indirect, incidental, special or consequential damages, or for lost
        profits, revenue or data, arising from your use of Adsmero. Nothing in
        these Terms limits rights that cannot be limited under applicable law.
      </p>

      <h2>11. Changes to these Terms</h2>
      <p>
        We will update the date at the top of this page when these Terms
        change, and tell Adsmero users about significant changes. Continuing to
        use Adsmero after a change means you accept the updated Terms.
      </p>

      <h2>12. Contact</h2>
      <p>
        ZKOKATECH LLC, New Mexico, United States
        <br />
        <a href="mailto:contact@zkokatech.com">contact@zkokatech.com</a>
      </p>
    </LegalDocument>
  );
}
