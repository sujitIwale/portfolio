import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Figtree } from "next/font/google";
import Header from "@/components/Header";
import "../styles/globals.css";
import "../styles/common.css";
import { BASE_URL } from "@/constants";
import MixpanelProvider from "@/providers/MixpanelProvider";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: {
    default: "Sujit Iwale",
    template: "%s | Sujit Iwale",
  },
  description:
    "Full-Stack Web Developer skilled in React, Next.js , Nodejs , Java , MongoDB",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Sujit Iwale",
    description:
      "Full-Stack Web Developer skilled in React, Next.js , Nodejs , Java , MongoDB",
    url: BASE_URL,
    siteName: "Sujit Iwale",
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "Sujit Iwale",
    card: "summary_large_image",
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
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="canonical" href={BASE_URL} />
      </head>
      <body className={figtree.className}>
        <Header />
        {children}
        <Analytics />
        <MixpanelProvider />
      </body>
    </html>
  );
}
