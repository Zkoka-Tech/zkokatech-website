import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { adsmeroLegalDate } from "../adsmero-legal-date";

export const metadata: Metadata = {
  title: { absolute: "Adsmero Privacy Policy | ZKOKATECH" },
  description:
    "How Adsmero, an advertising reporting workspace by ZKOKATECH LLC, accesses, uses, stores, shares and deletes data, including data received from Google APIs and Microsoft Advertising.",
  alternates: { canonical: "https://zkokatech.com/adsmero-privacy" },
};

// Keep this policy in step with the Adsmero application (requested OAuth
// scopes, Google Ads and Microsoft Advertising fields read, stored tables,
// cookies, retention, providers)
// and with the Adsmero repository's docs/PRIVACY_OPERATIONS.md (deletion
// requests, backups). Google's OAuth verification checks it against the app.
export default function AdsmeroPrivacyPage() {
  return (
    <LegalDocument
      eyebrow="Adsmero · Privacy"
      title="Adsmero Privacy Policy"
      updated={adsmeroLegalDate}
      intro={
        <p>
          This policy explains how ZKOKATECH LLC (&ldquo;ZKOKATECH&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information in{" "}
          <strong>Adsmero</strong>, our web application for reporting on
          advertising campaigns (Google Ads and, where it is available,
          Microsoft Advertising) and exporting those reports to Google Sheets.
          It covers
          the Adsmero application only; our other products have their own
          policies.
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

      <h3>Data we receive from Google Ads</h3>
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
        The Google Ads connection is used only for Google Ads reporting.
        Through it, Adsmero does not request other Google Ads data, such as
        ads, keywords, audiences or billing information, and it does not use it
        to access any other Google service. The optional Google Sheets
        connection, described below, is a separate authorization with its own
        permission.
      </p>
      <p>
        Google also issues access and refresh tokens so that Adsmero can import
        data when a workspace owner requests it. Imports are currently
        manual: each one is started by a workspace owner. Automatic daily
        imports are currently disabled; if we make them available, they will
        run only for accounts where a workspace owner has switched them on. We
        store these tokens encrypted, as described in section 6.
      </p>

      <h3>Data we receive from Microsoft Advertising</h3>
      <p>
        Support for Microsoft Advertising is being introduced gradually and may
        not yet be available in your workspace. This section describes how it
        works where it is available.
      </p>
      <p>
        A workspace owner connects Microsoft Advertising by signing in with the
        Google account that their Microsoft Advertising user signs in with.
        (Signing in with a Microsoft account is not offered at this time; we
        will update this policy before offering it.) This Google sign-in is
        separate from the Google Ads and Google Sheets connections. Google asks
        the owner to grant Adsmero these permissions:
      </p>
      <ul>
        <li>
          <code>profile</code> and <code>email</code>: basic information about
          your Google account. Adsmero requests them only because Microsoft
          Advertising needs them to recognize you: Adsmero sends the access
          token that Google issues to Microsoft Advertising, which uses it to
          identify your Microsoft Advertising user. Adsmero does not use this
          sign-in to access any Google service, and it does not store your
          Google profile details; it stores the permissions granted and the
          encrypted tokens.
        </li>
      </ul>
      <p>With that sign-in, Adsmero reads from Microsoft Advertising only:</p>
      <ul>
        <li>
          the ID of your Microsoft Advertising user and its contact email
          address (or user name), to show which user a connection uses;
        </li>
        <li>
          the list of Microsoft Advertising accounts that user can access, with
          each account&rsquo;s ID, name, account number, customer ID, currency,
          time zone and status;
        </li>
        <li>
          for accounts that you include in Adsmero: campaign IDs, names and
          statuses, and daily impressions, clicks, spend, conversions and all
          conversions per campaign, in each account&rsquo;s own time zone.
        </li>
      </ul>
      <p>
        Microsoft delivers this reporting data as a compressed report file.
        Adsmero reads the file while importing and keeps only the figures
        listed above, not the file itself. Adsmero does not request other
        Microsoft Advertising data, such as ads, keywords, audiences or billing
        information. Imports work as they do for Google Ads: they are started
        manually by a workspace owner, and automatic imports are disabled.
        The tokens for this connection are stored encrypted, as described in
        section 6.
      </p>

      <h3>Google Sheets export (optional)</h3>
      <p>
        Each user can connect their own Google account to export reports to
        Google Sheets. This connection is separate from the Google Ads
        connection, belongs to that user only, and is not used by other members
        of a workspace. When you connect it, Google asks you to grant:
      </p>
      <ul>
        <li>
          <code>openid</code> and <code>email</code>: your Google account&rsquo;s
          identifier and email address, to show which Google account receives
          your exports.
        </li>
        <li>
          <code>https://www.googleapis.com/auth/drive.file</code>: under
          Google&rsquo;s rules, this permission covers only the specific Google
          Drive files that are created with Adsmero or that you choose to open
          with Adsmero, not the rest of your Drive. Adsmero offers no way to
          open existing files: it uses the permission only to create a new
          spreadsheet in your Google Drive when you choose &ldquo;Export to
          Google Sheets&rdquo;, and to write the report into that spreadsheet.
        </li>
      </ul>
      <p>
        Adsmero does not read, list, share or delete files in your Drive, and it
        does not read the spreadsheets back after writing them. For this
        connection we store your Google account identifier, its email address
        (when Google reports it as verified), the permissions you granted and
        encrypted access and refresh tokens. For each export we keep a record of
        the workspace, the date range and filters used, the spreadsheet&rsquo;s
        ID and link, the number of rows and cells, its status, any error message
        and when it ran. The report data itself is not kept in Adsmero a second
        time. To limit how often exports can be started, Adsmero also records
        when you start or retry an export.
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
          adding or removing members, connecting or disconnecting Google Ads or
          Microsoft Advertising,
          including or excluding accounts, requesting imports, switching
          automatic imports on or off, and exporting reports to Google Sheets),
          with who did it and when. An export entry also records its date range
          and the number of rows and cells. Connecting and disconnecting your
          Google Sheets account is recorded separately for security and is not
          shown to workspace members.
        </li>
      </ul>

      <h3>Technical information</h3>
      <ul>
        <li>
          Access to the Adsmero application is protected by Cloudflare Access.
          Before Adsmero opens, Cloudflare asks you to confirm your email address
          with a one-time code that Cloudflare sends to it, sets an
          authentication cookie (<code>CF_Authorization</code>) for that
          session, and records the sign-in for security.
        </li>
        <li>
          Your browser stores your Adsmero sign-in session and your light/dark
          display preference. While you connect Google Ads, Microsoft
          Advertising or Google Sheets,
          Adsmero sets one short-lived cookie (<code>zk_oauth_binding</code> or{" "}
          <code>zk_sheets_binding</code>, about 10 minutes) to confirm that the
          authorization finishes in the browser that started it. These cookies
          are strictly necessary for signing in and connecting accounts;
          Adsmero does not use cookies for analytics or advertising.
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
        <li>
          to create a Google Sheets spreadsheet in your Google Drive when you ask
          for one;
        </li>
        <li>to send sign-in emails you request;</li>
        <li>
          to send you important account, security, privacy-policy and service
          notices;
        </li>
        <li>
          to keep Adsmero secure, prevent misuse, and investigate errors.
        </li>
      </ul>
      <p>
        Adsmero uses Google Ads and Microsoft Advertising data to read and
        report only. It never creates or changes campaigns, budgets, bids or
        any other settings in your advertising accounts.
      </p>
      <p>
        Adsmero does not use Google Ads or Microsoft Advertising data to
        develop, train or improve artificial intelligence or machine-learning
        models. This describes Adsmero&rsquo;s own use of that data; it does
        not describe how other companies&rsquo; AI services handle data that
        you choose to give them, such as data you copy from Adsmero or from
        an exported spreadsheet.
      </p>
      <p>
        Microsoft Advertising data is shown only to the members of the
        workspace it belongs to, as described for Google Ads data in
        section 4. Apart from that, people at ZKOKATECH do not read Microsoft
        Advertising data unless you have asked us to (for example to help
        with a problem), it is needed for security (such as investigating
        abuse), or the law requires it.
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
        , including the Limited Use requirements. The use of information
        received from Google Workspace APIs (Google Drive and Google Sheets)
        will adhere to the{" "}
        <a
          href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy"
          target="_blank"
          rel="noreferrer"
        >
          Google Workspace User Data and Developer Policy
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
          we do not use Google user data, including data from Google Workspace
          APIs, to develop, train or improve any artificial intelligence or
          machine-learning model;
        </li>
        <li>
          the Google sign-in used for Microsoft Advertising is used only so
          that Microsoft Advertising can identify you: Adsmero sends the
          resulting access token only to Microsoft Advertising, for the
          connection you started, and never uses it to access Google services;
        </li>
        <li>
          with Google Drive access, Adsmero only creates spreadsheets and writes
          your reports into them; it does not receive the content of your Google
          Drive;
        </li>
        <li>
          Google Ads reporting data is shown only to the members of the
          workspace it belongs to, as part of Adsmero&rsquo;s reports. Members
          are people a workspace owner has invited; this can include ZKOKATECH
          staff when a business has invited them to its workspace to work on
          its advertising, and they then see what any member sees;
        </li>
        <li>
          apart from that, people at ZKOKATECH do not read Google user data
          unless you have asked us to (for example to help with a problem), it
          is needed for security (such as investigating abuse), or the law
          requires it.
        </li>
      </ul>

      <h2>5. How information is shared</h2>
      <ul>
        <li>
          <strong>Within your workspace.</strong> Members of a workspace can see
          its advertising connections (including the email address of the
          Google account used for Google Ads, or of the Microsoft Advertising
          user), its advertising accounts, reports, import history and
          activity log. Your Google Sheets connection and your list of exports
          are visible only to you.
        </li>
        <li>
          <strong>Service providers</strong> that run Adsmero for us, under their
          own terms: <strong>Supabase</strong> (database, sign-in and sign-in
          emails; Adsmero&rsquo;s database is hosted in the European Union, AWS
          region eu-west-1, Ireland), <strong>Cloudflare</strong> (hosting,
          network delivery and Cloudflare Access sign-in protection) and{" "}
          <strong>Resend</strong> (delivery of the account, security,
          privacy-policy and service notices we email to you). Cloudflare
          handles requests in its global network, so information may be
          processed in the United States and other countries.
        </li>
        <li>
          <strong>Resend</strong> receives the recipient&rsquo;s email address
          and the content of each notice we send through it, and keeps records
          of their delivery. It stores this information in the United States,
          even though our emails are sent from its Ireland (eu-west-1) region.
          Resend is separate from Adsmero&rsquo;s advertising-platform
          connections: we do not use it to send advertising-platform
          credentials, and we do not intentionally send campaign reports or
          other advertising data through it.
        </li>
        <li>
          <strong>Google</strong>, as the source of Google Ads data, for
          authorization (including the Google sign-in used for Microsoft
          Advertising), and as the provider of Google Sheets and Google Drive
          when you export.
        </li>
        <li>
          <strong>Microsoft</strong>, as the source of Microsoft Advertising
          data. To read it, Adsmero sends Microsoft the Google-issued access
          token described in section 2, which Microsoft uses to identify your
          Microsoft Advertising user. Microsoft handles these requests under its
          own terms and privacy statement.
        </li>
        <li>
          <strong>Your Google Drive, when you export.</strong> Any member of a
          workspace can export reports they can see in Adsmero to their own
          Google Drive. An export sends that report, which can include
          Microsoft Advertising data, to Google, which stores it
          as a spreadsheet under the exporting person&rsquo;s Google account.
          Who can then see that spreadsheet depends on its sharing settings in
          Google Drive, which that person controls; Adsmero does not share it.
          The workspace activity log shows who exported which date range.
        </li>
        <li>
          <strong>Business transfers.</strong> If ZKOKATECH is involved in a
          merger, acquisition or sale of assets, information may be transferred
          as part of that transaction and remains subject to this policy. We
          will transfer Google user data in such a transaction only after asking
          for and receiving your explicit consent.
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
          Google access and refresh tokens (for Google Ads, for the Google
          sign-in used with Microsoft Advertising, and for Google Sheets) are
          encrypted with AES-256-GCM before they are stored. The encryption
          keys are kept as server secrets, separate from the database, and
          tokens are never sent to your browser.
        </li>
        <li>
          Database access rules limit each workspace&rsquo;s data to its own
          members, and your Google Sheets connection and export history to you.
          Only invited users can sign in.
        </li>
        <li>
          Adsmero&rsquo;s server only allows requests to Google that list
          accounts or read reports, and blocks requests that would change an
          advertising account. For Microsoft Advertising it only allows looking
          up the signed-in user, listing accounts, and requesting and
          downloading reports. For Google Sheets it only allows creating a
          spreadsheet and writing into the spreadsheets it created; spreadsheet
          content is written as plain values, never as formulas.
        </li>
        <li>
          Backups of the Adsmero database that we make ourselves are encrypted,
          kept on access-restricted storage and not used for normal processing.
        </li>
      </ul>
      <p>
        No system is completely secure, and we cannot guarantee the security of
        information. If you believe your account has been misused, contact us
        right away.
      </p>

      <h2>7. Retention and deletion</h2>
      <p>
        We keep account, workspace and imported reporting data, import history
        and the activity log for as long as the workspace is in use, or until
        deletion is requested as described below. Other information is kept for
        shorter periods:
      </p>
      <ul>
        <li>
          Tokens for Google Ads, Microsoft Advertising and Google Sheets are
          kept until the connection is disconnected in Adsmero (see below), or
          until the account or workspace is deleted.
        </li>
        <li>
          The identity shown on an advertising connection (for Google Ads, the
          Google account&rsquo;s identifier and email address; for Microsoft
          Advertising, the Microsoft Advertising user&rsquo;s ID and contact
          email address or user name) stays on the connection&rsquo;s record
          when the connection is disconnected, as part of the workspace&rsquo;s
          connection history. It is removed when you ask us to remove it (see
          &ldquo;Deletion requests&rdquo; below) or when the workspace is
          deleted.
        </li>
        <li>
          Records of authorization attempts and export attempts are used only
          for security and to limit how often actions can be repeated. Older
          records are cleared automatically the next time the same feature is
          used, and all of them are deleted with your account.
        </li>
        <li>
          Server and sign-in logs are kept by our providers for a limited time
          under their own practices. Under our current Resend plan, Resend keeps
          the notices we send through it, and their delivery logs, for 30 days.
          It deletes any remaining data within 90 days after our account with
          it ends.
        </li>
        <li>
          Database backups that we make ourselves are kept for no longer than 90
          days from the day they are made. If we ever need to restore one, we
          first re-apply every deletion request we have completed, so deleted
          information is not brought back.
        </li>
      </ul>
      <ul>
        <li>
          <strong>Disconnecting Google Ads in Adsmero</strong> (workspace owners)
          deletes the stored tokens and cancels pending imports, and asks Google
          to revoke Adsmero&rsquo;s access. The tokens are deleted even if Google
          cannot be reached. Adsmero may not ask Google to revoke when the same
          Google account is still used by another Adsmero connection (Google Ads
          in another workspace, or a Google Sheets export connection), because
          Google would end that access too, or when Adsmero cannot confirm that
          it is not. In those cases Adsmero tells you, and you can remove the
          permission yourself in your Google Account (below). Reporting data that
          was already imported, the list of accounts and the connection&rsquo;s
          record (including the Google account shown on it) stay in the
          workspace.
        </li>
        <li>
          <strong>Disconnecting Microsoft Advertising in Adsmero</strong>{" "}
          (workspace owners) deletes the stored tokens and cancels pending
          imports. Adsmero does not ask Google to revoke the Google sign-in
          used for this connection; to remove it at Google as well, use your
          Google Account (below). Reporting data that was already imported, the
          list of accounts and the connection&rsquo;s record (including the
          Microsoft Advertising user shown on it) stay in the workspace.
        </li>
        <li>
          <strong>Disconnecting Google Sheets in Adsmero</strong> (Settings
          &rarr; Google Sheets) immediately deletes your Google Sheets
          connection: its stored tokens and the Google account details listed in
          section 2. Adsmero can then no longer create spreadsheets for you.
          Adsmero does not ask Google to revoke your permission at that point:
          Google removes all of Adsmero&rsquo;s permissions for a Google account
          at once, which would also disconnect Google Ads if it uses the same
          Google account. To remove the permission at Google as well, use your
          Google Account (below).
        </li>
        <li>
          <strong>Spreadsheets you exported</strong> are stored in your Google
          Drive and stay there until you delete them in Google Drive. If an export
          is interrupted, an empty spreadsheet whose name ends in
          &ldquo;(exporting&hellip;)&rdquo; may remain in your Drive; Adsmero tells
          you when this may have happened, and you can delete it. Adsmero keeps
          your Google Sheets connection until you disconnect it, and its record
          of each export while your Adsmero account and that workspace exist.
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
          . Adsmero can then no longer import data or create spreadsheets with
          that Google account. This removes Adsmero&rsquo;s Google Ads and Google
          Sheets access for that Google account together. The Google sign-in
          used for Microsoft Advertising may appear there as a separate entry;
          removing it ends Adsmero&rsquo;s Microsoft Advertising access through
          that Google account.
        </li>
        <li>
          <strong>Workspace owners can remove members</strong>, which ends their
          access to that workspace.
        </li>
      </ul>

      <h3>Deletion requests</h3>
      <p>
        Adsmero does not yet offer self-service deletion of user accounts,
        workspaces or imported data. To request deletion (including your Google
        Sheets connection and export history), email{" "}
        <a href="mailto:contact@zkokatech.com">contact@zkokatech.com</a> and
        tell us what you want deleted.
      </p>
      <ul>
        <li>
          We confirm the request with the email address of your Adsmero account
          before acting on it; we do not ask for identity documents. A request
          to delete a whole workspace must come from one of its owners.
        </li>
        <li>
          We aim to complete deletion within 30 days of receiving your request,
          and in any case within the time required by applicable law. Under the
          GDPR, for example, that is one month from receipt, which the law
          allows to be extended by up to two further months for complex or
          numerous requests; if that applies, we will tell you within the first
          month.
        </li>
        <li>
          When we are done, we tell you what we deleted and anything we had to
          keep and why, for example where the law requires us to keep
          information or to establish, exercise or defend legal claims.
        </li>
        <li>
          Data that belongs to a workspace, such as imported reports and the
          workspace&rsquo;s activity log, is the organization&rsquo;s data. If you
          ask us to delete your account, that data stays with the workspace
          without your account details, unless a workspace owner asks us to
          delete it.
        </li>
        <li>
          Disconnecting a connection does not by itself remove the identity
          shown on it. If you connected Google Ads or Microsoft Advertising for
          a workspace, you can ask us to remove the Google account or Microsoft
          Advertising user details stored on that connection, on its own or as
          part of deleting your account. We remove them once a workspace owner
          has disconnected the connection in Adsmero; if it is still connected,
          we will tell you, and the workspace owner needs to disconnect it
          first. The reporting data already imported stays with the workspace.
        </li>
        <li>
          Deleted information may remain in our encrypted backups until they
          reach the 90-day limit above. It may also remain for a time in our
          service providers&rsquo; logs and backups, which they keep and
          delete under their own retention and deletion practices.
        </li>
      </ul>

      <h2>8. Your choices and rights</h2>
      <p>
        You can change your display name and password in Adsmero&rsquo;s
        settings. Depending on where you live, you may have rights to access,
        correct, delete or receive a copy of your personal information, or to
        object to or restrict how it is used, and to complain to your local data
        protection authority. To make a request, contact{" "}
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
