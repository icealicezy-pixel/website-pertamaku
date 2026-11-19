import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BetterLife Recruitment",
  description:
    "Mental Health Platform — Seed Funding Stage Recruitment. Bergabung membangun masa depan kesehatan mental.",
  icons: {
    icon: "/logo-footer.png",
    shortcut: "/logo-footer.png",
    apple: "/logo-footer.png",
  },
  openGraph: {
    title: "BetterLife Recruitment",
    description:
      "Mental Health Platform — Seed Funding Stage Recruitment. Bergabung membangun masa depan kesehatan mental.",
    images: ["/logo-footer.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}