import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MotionSystem from "@/components/MotionSystem";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zkokatech.com"),
  title: {
    default: "ZKOKATECH — Software Company & Digital Products",
    template: "%s | ZKOKATECH",
  },
  description:
    "ZKOKATECH LLC is a New Mexico software company that designs, builds, launches, and operates mobile apps, web products, and SaaS systems.",
  applicationName: "ZKOKATECH",
  keywords: [
    "ZKOKATECH",
    "software company",
    "mobile apps",
    "web apps",
    "SaaS",
    "New Mexico",
  ],
  openGraph: {
    type: "website",
    url: "https://zkokatech.com",
    siteName: "ZKOKATECH",
    title: "ZKOKATECH — Software Company & Digital Products",
    description:
      "ZKOKATECH designs, builds, launches, and operates digital products across mobile, web, and SaaS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://zkokatech.com/#organization",
  name: "ZKOKATECH LLC",
  url: "https://zkokatech.com/",
  logo: "https://zkokatech.com/favicon.ico",
  description:
    "A New Mexico software company that designs, builds, launches, and operates digital products across mobile, web, and SaaS.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://zkokatech.com/#website",
  url: "https://zkokatech.com/",
  name: "ZKOKATECH",
  publisher: { "@id": "https://zkokatech.com/#organization" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={
        geistSans.variable + " " + geistMono.variable + " h-full antialiased"
      }
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <MotionSystem />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
