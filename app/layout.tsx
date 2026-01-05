import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tese - Creator Monetization Platform for Africa",
  description:
    "An all-in-one creator platform built for Africa—combining monetization, payments, and community tools into one seamless mobile-first experience.",
  keywords: [
    "creator platform",
    "monetization",
    "Africa",
    "payments",
    "fintech",
    "Tese",
    "Smatech Group",
  ],
  authors: [{ name: "Smatech Group" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: "Tese - Creator Monetization Platform for Africa",
    description: "You focus on your craft. We power your business.",
    url: "https://tese.africa",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tese Creator Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tese - Creator Monetization Platform for Africa",
    description: "You focus on your craft. We power your business.",
    images: ["/og-image.jpg"],
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
        <link rel="icon" href="/Tese-Icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
