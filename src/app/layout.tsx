import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
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
    default: "ZKOKATECH — Software Company",
    template: "%s | ZKOKATECH",
  },
  description:
    "ZKOKATECH LLC is a New Mexico software company building and operating mobile apps, web apps, and SaaS products.",
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
    title: "ZKOKATECH — Software Company",
    description:
      "We design, build, ship, and operate digital products across mobile, web, and SaaS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={
        geistSans.variable + " " + geistMono.variable + " h-full antialiased"
      }
    >
      <body className="flex min-h-full flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
