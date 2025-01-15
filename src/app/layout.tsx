import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";

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
      <body>
        <Header />
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
