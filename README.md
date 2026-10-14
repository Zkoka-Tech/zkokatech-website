# ZKOKATECH website

Company website for ZKOKATECH LLC, retaining the existing Next.js static-export setup and company/product content.

## Development

- `npm ci`
- `npm run dev`
- `npm run build` produces `out/`.

The design uses warm ivory, graphite, and copper. Page copy is in `src/app/`; shared interactive components are in `src/components/`; design tokens and responsive rules are in `src/app/globals.css`.

## Interactions

- Mobile navigation closes on link selection, Escape, and transition to desktop width.
- The product process uses keyboard-accessible tabs (arrows, Home, End).
- WatchHub details use a native modal dialog with Escape, backdrop dismissal, and focus return.
- Contact provides an email link and clipboard copying with success/failure feedback.
- Capability summaries use native disclosure controls.
- Motion respects reduced-motion preferences and keeps initial content visible before JavaScript.

## Deployment

The existing GitHub Pages workflow publishes only pushes to `main` or explicit manual runs. The redesign is prepared on a review branch; merging requires separate approval.

For an owner-private review build, set `ZKOKATECH_PRIVATE_REVIEW=1` when building. This emits noindex/nofollow page metadata. Private review hosting also uses owner-only authentication; robots metadata does not enforce access control.

Original WatchHub support/legal assets, advertising declarations, and production sitemap content are retained. No form backend or external analytics service is added.
