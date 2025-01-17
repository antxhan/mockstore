import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mockstore",
  description: "Mock Prices, Mock Trends, Mock everything.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
