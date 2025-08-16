import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Club Data Pirates - Home",
  description: "the place where creativity come together",
  keywords: ["Data Pirates", "Club", "Creativity", "Innovation", "Data Analysis"],
  authors: [{ name: "Data Pirates Team" }],
  openGraph: {
    title: "Club Data Pirates - Home",
    description: "the place where creativity come together",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Club Data Pirates - Home",
    description: "the place where creativity come together",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
