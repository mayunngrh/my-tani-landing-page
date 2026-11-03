import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyTani | Coconuts from Bali",
  description: "Discover MyTani's semi-husked coconuts from Bali, Indonesia. Get in touch to discuss your sourcing requirements.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
