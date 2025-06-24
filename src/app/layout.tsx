// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { Analytics } from "@vercel/analytics/next";
import { GeneralProvider } from "./contexts/generalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aryan Kumar | Software Engineer",
  description: "Software Development Engineer Intern @ Amazon Web Services",
  keywords: ["Aryan Kumar", "Software Engineer", "AI/ML", "Cloud Computing"],
  creator: "Aryan Kumar",
  authors: [{ name: "Aryan Kumar" }],
  icons: {
    icon: "/",
    shortcut: "/luan_aws.png",
    apple: [
      { url: "/luan_aws.png" },
      { url: "/luan_aws.png", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aryan-portfolio-beta.vercel.app/",
    title: "Aryan Kumar | Software Engineer",
    description:
      "Full-stack software engineer specializing in web development, AI/ML, and cloud solutions.",
    siteName: "Aryan Kumar's Portfolio",
    images: [
      {
        url: `/luan_aws.png`,
        width: 1200,
        height: 630,
        alt: "Aryan Kumar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Kumar | Software Engineer",
    description:
      "Full-stack software engineer specializing in web development, AI/ML, and cloud solutions.",
    images: [`/luan_aws.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        {/* Structured data for rich Google search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aryan Kumar",
              url: "https://aryan-portfolio-beta.vercel.app/",
              image: "https://aryan-portfolio-beta.vercel.app/aryan_kr.jpeg",
              sameAs: [
                "https://www.linkedin.com/in/aryankumar/",
                "https://github.com/error-144",
              ],
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "AWS",
              },
              description:
                "Full-stack software engineer at AWS, passionate about web development, AI/ML, and cloud solutions.",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <GeneralProvider>
          <Navigation />
          {children}
          <Analytics />
        </GeneralProvider>
      </body>
    </html>
  );
}
