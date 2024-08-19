import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Head from 'next/head';

interface SEOAttributes {
  title: string;
  description: string;
  charset: string;
  viewport: string;
  favicon: string;
  ogUrl: string;
  ogType: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  twitterCreator: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: SEOAttributes = {
  title: "FlyBoarding Peterborough",
  description: "Experience the Thrill of Flyboarding in Peterborough",
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1.0",
  favicon: "/favicon.ico",
  ogUrl: "https://www.flyboardingptbo.ca",
  ogType: "website",
  ogTitle: "FlyBoarding Peterborough",
  ogDescription: "Experience the Thrill of Flyboarding in Peterborough",
  ogImage: "https://www.flyboardingptbo.ca/ogimage.png",
  twitterCard: "summary_large_image",
  twitterCreator: "@R_CHN4",
  twitterTitle: "FlyBoarding Peterborough",
  twitterDescription: "Experience the Thrill of Flyboarding in Peterborough",
  twitterImage: "https://www.flyboardingptbo.ca/ogimage.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet={metadata.charset} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.favicon} />
        {/* Open Graph */}
        <meta property="og:url" content={metadata.ogUrl} />
        <meta property="og:type" content={metadata.ogType} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:image" content={metadata.ogImage} />
        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitterCard} />
        <meta name="twitter:creator" content={metadata.twitterCreator} />
        <meta name="twitter:title" content={metadata.twitterTitle} />
        <meta name="twitter:description" content={metadata.twitterDescription} />
        <meta name="twitter:image" content={metadata.twitterImage} />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >{children}</body>
    </html>
  );
}
