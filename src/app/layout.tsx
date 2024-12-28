import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Mathom House",
  description: "A collection and display of Mathoms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
