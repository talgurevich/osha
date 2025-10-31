import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "אושה - OSHA | קפה, אוכל, חברים",
  description: "בית קפה ופיצריה במושב בוסתן הגליל. פיצות שף, כריכים, מאפים, קוקטיילים וקפה. כשר.",
  keywords: "קפה, פיצה, בוסתן הגליל, אושה, OSHA, כשר, קוקטיילים",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
