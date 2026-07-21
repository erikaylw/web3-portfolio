import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "justitia // web3 native",
  description:
    "Business Development & Community Moderator. Content Creation. DeFi native.",
  openGraph: {
    title: "justitia // web3 native",
    description:
      "Business Development & Community Moderator. Content Creation. DeFi native.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "justitia // web3 native",
    description:
      "Business Development & Community Moderator. Content Creation. DeFi native.",
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
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
