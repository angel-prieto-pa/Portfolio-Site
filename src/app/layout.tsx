import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angel Prieto",
  description: "Portfolio of Angel Prieto, a software engineer focused on iOS development and thoughtful, user-centered products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
