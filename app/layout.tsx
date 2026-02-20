import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { Montserrat, Quicksand } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hygia Cleaning",
  description: "Professional deep cleaning services for homes and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${montserrat.variable} antialiased font-sans`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
