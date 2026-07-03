import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import GrainOverlay from "@/components/ui/GrainOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://rashafaheem.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rasha Faheem — AI Automation Engineer & Full-Stack MERN Developer",
    template: "%s — Rasha Faheem",
  },
  description:
    "Rasha Faheem is an AI Automation Engineer and Full-Stack MERN Developer building CRM integrations, AI-powered features, and production web applications for growing businesses.",
  keywords: [
    "Rasha Faheem",
    "AI Automation Engineer",
    "Full-Stack MERN Developer",
    "HubSpot Developer",
    "CRM Integration",
    "Next.js Developer",
    "React Developer",
    "Chatbot Developer",
    "Lahore Pakistan Developer",
  ],
  authors: [{ name: "Rasha Faheem" }],
  creator: "Rasha Faheem",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Rasha Faheem — AI Automation Engineer & Full-Stack MERN Developer",
    description:
      "Building CRM integrations, AI-powered features, and production web applications for growing businesses.",
    siteName: "Rasha Faheem",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rasha Faheem — AI Automation Engineer & Full-Stack MERN Developer",
    description:
      "Building CRM integrations, AI-powered features, and production web applications for growing businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0d1117",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rasha Faheem",
  jobTitle: "Automation Engineer & Full-Stack MERN Developer",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://www.linkedin.com/in/rasha-faheem-0bb94a319/",
    "https://github.com/Rasha110/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GrainOverlay />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
