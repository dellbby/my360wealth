import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My 360 Wealth Management Group | Live Your One Best Life",
  description:
    "Holistic wealth management and financial life planning. We help you visualize and implement your life goals through education and trusted advice.",
  keywords: [
    "wealth management",
    "financial planning",
    "retirement planning",
    "investment advisory",
    "Glendale CA",
    "fiduciary",
  ],
  openGraph: {
    title: "My 360 Wealth Management Group",
    description:
      "Life is a collection of experiences; we help you plan for them.",
    type: "website",
    url: "https://www.my360wealth.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "My 360 Wealth Management Group",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
