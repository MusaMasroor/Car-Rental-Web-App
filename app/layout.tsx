import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vrx",
  description: "Discover the best cars in the world.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative ">{children}</body>
    </html>
  );
}
