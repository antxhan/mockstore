import type { Metadata } from "next";
import "./globals.css";
import DBContextProvider from "@/contexts/db";
import Layout from "@/components/Layout";

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
        <DBContextProvider>
          <Layout>{children}</Layout>
        </DBContextProvider>
      </body>
    </html>
  );
}
