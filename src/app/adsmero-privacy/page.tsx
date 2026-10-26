import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: { absolute: "Adsmero Privacy Policy | ZKOKATECH" },
  description:
    "How Adsmero, a Google Ads reporting workspace by ZKOKATECH LLC, accesses, uses, stores and shares data, including data received from Google APIs.",
  alternates: { canonical: "https://zkokatech.com/adsmero-privacy" },
};

// Keep this policy in step with the application (zkokatech-ads-workspace):
// requested OAuth scopes, Google Ads fields read, stored tables, cookies and
// providers. Google's OAuth verification checks it against the app.
export default function AdsmeroPrivacyPage() {
  return (
    <LegalDocument
      eyebrow="Adsmero · Privacy"
      title="Adsmero Privacy Policy"
      updated="26 October 2026"
      intro={
        <p>
          This policy explains how ZKOKATECH LLC (&ldquo;ZKOKATECH&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information in{" "}
          <strong>Adsmero</strong>, our web application for reporting on Google
          Ads campaigns. It covers the Adsmero application only; our other
          products have their own policies.
        </p>
      }
      related={[
        { href: "/adsmero", label: "About Adsmero" },
        { href: "/adsmero-terms", label: "Terms of service" },
      ]}
    >
      <h2>1. Who we are</h2>
      <p>
        Adsmero is built and operated by ZKOKATECH LLC, a software company based
        in New Mexico, United States. You can reach us about this policy or your
        data at{" "}
        <a href="mailto:contact@zkokatech.com">contact@zkokatech.com</a>.
      </p>
      <p>
        Adsmero is a private business tool. It is used by ZKOKATECH and the
        businesses it works with. There is no public sign-up: user accounts are
        created by invitation.
      </p>

      <h2>2. Information we collect</h2>
      <h3>Your Adsmero account</h3>
      <ul>
        <li>Your email address and, if you add one, your display name.</li>
        <li>
          Your password, which is handled by our authentication provider
          (Supabase Auth). Adsmero&rsquo;s own code does not store it. You can
          also sign in with a one-time link sent to your email address.
        </li>
        <li>
          The workspaces you belong to, your role in each (owner or member) and
          whether your account is active.
        </li>
      </ul>

      <h3>Data we receive from Google</h3>
      <p>
        When a workspace owner connects Google Ads, Google asks them to grant
        Adsmero these permissions:
      </p>
      <ul>
        <li>
          <code>openid</code> and <code>email</code>: your Google account&rsquo;s
          identifier and email address. We store them to show which Google
          account a connection uses.
        </li>
        <li>
          <code>https://www.googleapis.com/auth/adwords</code> (Google Ads): used
          to list the Google Ads accounts you can access and to read their
          reporting data.
        </li>
      </ul>
      <p>With that permission, Adsmero reads only:</p>
      <ul>
        <li>
          the list of Google Ads accounts the Google account can access, with
          each account&rsquo;s ID, name, currency, time zone, status and
          manager (MCC) relationship;
        </li>
        <li>
          for accounts that you include in Adsmero: campaign IDs, names and
          statuses, and daily impressions, clicks, cost, conversions and all
          conversions per campaign.
        </li>
      </ul>
      <p>
        Adsmero does not request other Google data, such as ads, keywords,
        audiences or billing information, and it does not access other Google
        services.
      </p>
      <p>
        Google also issues access and refresh tokens so that Adsmero can import
        data on request or on a daily schedule switched on by a workspace owner.
        We store these tokens encrypted, as described in section 6.
      </p>

      <h3>Activity in Adsmero</h3>
      <ul>
        <li>
          The history of data imports: which accounts and dates were imported,
          who requested them, how many rows were imported and any error
          messages.
        </li>
        <li>
          A log of actions in each workspace (for example creating a workspace,
          adding or removing members, connecting or disconnecting Google Ads,
          including or excluding accounts, requesting imports and switching
          automatic imports on or off), with who did it and when.
        </li>
      </ul>

      <h3>Technical information</h3>
      <ul>
        <li>
          Your browser stores your sign-in session and your light/dark display
          preference. While you connect Google Ads, Adsmero sets one short-lived
          cookie (<code>zk_oauth_binding</code>, about 10 minutes) to confirm
          that the authorization finishes in the browser that started it.
        </li>
        <li>
          Our hosting and database providers process connection information,
          such as IP addresses and request details, to deliver and protect the
          service. Adsmero&rsquo;s own logs record events, counts and error
          codes; access tokens and other credentials are removed from them.
        </li>
        <li>
          Adsmero does not use analytics, advertising or tracking tools.
        </li>
      </ul>

      <h2>3. How we use information</h2>
      <ul>
        <li>to sign you in and keep each workspace private to its members;</li>
        <li>
          to import, store and show the advertising reports your workspace asks
          for, and to let you export them as CSV files;
        </li>
        <li>to send sign-in emails you request;</li>
        <li>
          to keep Adsmero secure, prevent misuse, and investigate errors.
        </li>
      </ul>
      <p>
        Adsmero uses Google Ads data to read and report only. It never creates
        or changes campaigns, budgets, bids or any other settings in your
        advertising accounts.
      </p>

      <h2>4. Google API Services User Data Policy</h2>
      <p>
        Adsmero&rsquo;s use and transfer to any other app of information
        received from Google APIs will adhere to the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements. In particular:
      </p>
      <ul>
        <li>
          we use Google user data only to provide and improve the Adsmero
          features you use;
        </li>
        <li>
          we do not sell it, and we do not use or transfer it for advertising,
          for credit or lending decisions, or to data brokers;
        </li>
        <li>
          we do not use it to develop, improve or train generalized artificial
          intelligence or machine-learning models;
        </li>
        <li>
          people at ZKOKATECH do not read it unless you ask us to (for example to
          help with a problem), it is needed for security, or the law requires
          it.
        </li>
      </ul>

      <h2>5. How information is shared</h2>
      <ul>
        <li>
          <strong>Within your workspace.</strong> Members of a workspace can see
          its connections (including the email address of the Google account
          used), its advertising accounts, reports, import history and activity
          log.
        </li>
        <li>
          <strong>Service providers</strong> that run Adsmero for us, under their
          own terms:{" "}
          <strong>Supabase</strong> (database and sign-in; Adsmero&rsquo;s
          database is hosted in the European Union, AWS region eu-west-1,
          Ireland) and <strong>Cloudflare</strong> (hosting and network
          delivery).
        </li>
        <li>
          <strong>Google</strong>, as the source of Google Ads data and for
          authorization.
        </li>
        <li>
          <strong>When required by law</strong>, or to protect the rights,
          safety and security of our users, ZKOKATECH or others.
        </li>
      </ul>
      <p>We do not sell personal information or advertising data.</p>

      <h2>6. How information is protected</h2>
      <ul>
        <li>Data travels over encrypted HTTPS connections.</li>
        <li>
          Google access and refresh tokens are encrypted with AES-256-GCM before
          they are stored. The encryption keys are kept as server secrets,
          separate from the database, and tokens are never sent to your
          browser.
        </li>
        <li>
          Database access rules limit each workspace&rsquo;s data to its own
          members. Only invited users can sign in.
        </li>
        <li>
          Adsmero&rsquo;s server only allows requests to Google that list
          accounts or read reports, and blocks requests that would change an
          advertising account.
        </li>
      </ul>
      <p>
        No system is completely secure, and we cannot guarantee the security of
        information. If you believe your account has been misused, contact us
        right away.
      </p>

      <h2>7. Retention and deletion</h2>
      <p>
        We keep account, workspace and imported reporting data while the
        workspace is in use. We have not set fixed retention periods.
      </p>
      <ul>
        <li>
          <strong>Disconnecting Google Ads in Adsmero</strong> (workspace owners)
          asks Google to revoke Adsmero&rsquo;s access, deletes the stored
          tokens and cancels pending imports. The tokens are deleted even if
          Google cannot be reached. Reporting data that was already imported,
          and the list of accounts, stay in the workspace.
        </li>
        <li>
          <strong>You can also remove Adsmero&rsquo;s access</strong> from your
          Google Account at{" "}
          <a
            href="https://myaccount.google.com/connections"
            target="_blank"
            rel="noreferrer"
          >
            myaccount.google.com/connections
          </a>
          . Adsmero can then no longer import data with that connection.
        </li>
        <li>
          <strong>Workspace owners can remove members</strong>, which ends their
          access to that workspace.
        </li>
        <li>
          <strong>Deletion requests.</strong> Adsmero does not yet offer
          self-service deletion of user accounts, workspaces or imported data.
          To request deletion, email{" "}
          <a href="mailto:contact@zkokatech.com">contact@zkokatech.com</a> from
          the email address of your Adsmero account and tell us what you want
          deleted. We will confirm when it has been done.
        </li>
      </ul>
      <p>
        Copies may remain in our providers&rsquo; backups or logs until they are
        removed under those providers&rsquo; own practices.
      </p>

      <h2>8. Your choices and rights</h2>
      <p>
        You can change your display name and password in Adsmero&rsquo;s
        settings. Depending on where you live, you may have rights to access,
        correct, delete or receive a copy of your personal information, or to
        object to or restrict how it is used. To make a request, contact{" "}
        <a href="mailto:contact@zkokatech.com">contact@zkokatech.com</a>. If
        your account was created by your organization, we may refer your
        request to that organization&rsquo;s workspace owner.
      </p>

      <h2>9. Children</h2>
      <p>
        Adsmero is a business tool and is not intended for children. We do not
        knowingly collect information from children.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We will update the date at the top of this page when this policy
        changes. Before we use Google user data in a new way, we will update
        this policy and tell Adsmero users, and ask for consent where it is
        required.
      </p>

      <h2>11. Contact</h2>
      <p>
        ZKOKATECH LLC, New Mexico, United States
        <br />
        <a href="mailto:contact@zkokatech.com">contact@zkokatech.com</a>
      </p>
    </LegalDocument>
  );
}
