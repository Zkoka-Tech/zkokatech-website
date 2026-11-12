/**
 * Effective date of the Adsmero Privacy Policy and Terms of Service, shown as "Last updated".
 *
 * Set it to the ACTUAL publication date (for example "14 November 2026") in the last commit before
 * this is merged into main - main deploys to the live site automatically. While it is empty a
 * production build fails, so a page with a placeholder date can never be published.
 */
export const ADSMERO_LEGAL_EFFECTIVE_DATE = "12 November 2026";

const DATE_FORMAT =
  /^([1-9]|[12]\d|3[01]) (January|February|March|April|May|June|July|August|September|October|November|December) 20\d\d$/;

if (!DATE_FORMAT.test(ADSMERO_LEGAL_EFFECTIVE_DATE) && process.env.NODE_ENV === "production") {
  throw new Error(
    'ADSMERO_LEGAL_EFFECTIVE_DATE in src/app/adsmero-legal-date.ts must be the publication date, e.g. "14 November 2026".',
  );
}

export const adsmeroLegalDate = DATE_FORMAT.test(ADSMERO_LEGAL_EFFECTIVE_DATE)
  ? ADSMERO_LEGAL_EFFECTIVE_DATE
  : "[effective date: set on publication]";
