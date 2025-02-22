import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEDxNSUT 2025 - Shifting Perspectives | Inspiring Talks & Ideas",
  description:
    "Join TEDxNSUT 2025 as we explore 'Shifting Perspectives'—a journey through innovation, resilience, and transformation. Experience thought-provoking talks from visionary speakers, uncover new ideas, and redefine your outlook on success and failure. Register now and be part of the conversation!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
