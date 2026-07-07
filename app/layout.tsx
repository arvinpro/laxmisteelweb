import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://laxmi-steel.vercel.app/"),

  title: {
    default: "Laxmi Steel Limited",
    template: "%s | Laxmi Steel Limited",
  },

  description:
    "Laxmi Steel Limited is one of Nepal's trusted steel manufacturers, producing premium-quality TMT rebars, billets, and steel products for residential, commercial, industrial, and infrastructure projects.",

  openGraph: {
    title: "Laxmi Steel Limited",
    description:
      "Trusted steel manufacturer in Nepal delivering premium-quality TMT rebars, billets, and steel solutions for modern construction and infrastructure projects.",
    url: "https://laxmi-steel.vercel.app/",
    siteName: "Laxmi Steel Limited",
    type: "website",
    images: [
      {
        url: "https://laxmi-steel.vercel.app/company/dccc (2).jpg",
        width: 1200,
        height: 630,
        alt: "Laxmi Steel Limited",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Laxmi Steel Limited",
    description:
      "Leading steel manufacturer in Nepal providing premium TMT rebars, billets, and reliable steel solutions for every construction need.",
    images: ["https://laxmi-steel.vercel.app/company/dccc (2).jpg"],
  },
};

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className={`${nunitoSans.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
