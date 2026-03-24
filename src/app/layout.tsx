import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BeyondCompliance.life — GMP Data Integrity Simulator",
  description:
    "Practice defensible GMP decisions under realistic pressure. A scenario-based training simulator for pharmaceutical teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-navy text-text-primary min-h-screen">{children}</body>
    </html>
  );
}
