import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "אושה - עגלת קפה ואוכל בצפון | בוסתן הגליל, עכו, נהריה",
  description: "עגלת קפה צפון גליל עכו נהריה - אושה: פיצות נפוליטניות, סלטים טריים, כריכי מחמצת, קפה איכותי וקוקטיילים במושב בוסתן הגליל. אירוח אירועים פרטיים. כשר.",
  keywords: "עגלת קפה צפון גליל, עגלת קפה עכו, עגלת קפה נהריה, אושה בוסתן הגליל, קפה צפון, פיצה צפון, קפה גליל מערבי, בית קפה עכו, בית קפה נהריה, פיצות נפוליטניות, קפה איכותי, אירועים פרטיים, כשר, OSHA coffee",

  // Open Graph tags for social media sharing
  openGraph: {
    title: "אושה - עגלת קפה ואוכל בצפון | בוסתן הגליל",
    description: "עגלת קפה צפון גליל עכו נהריה - פיצות נפוליטניות, קפה איכותי, סלטים טריים ואירוח אירועים במושב בוסתן הגליל",
    url: "https://osha-808c23454ca3.herokuapp.com",
    siteName: "אושה - OSHA Coffee",
    images: [
      {
        url: "https://osha-808c23454ca3.herokuapp.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "אושה - עגלת קפה צפון גליל",
      },
    ],
    locale: "he_IL",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "אושה - עגלת קפה ואוכל בצפון",
    description: "עגלת קפה צפון גליל עכו נהריה - פיצות, קפה, אירועים",
    images: ["https://osha-808c23454ca3.herokuapp.com/logo.jpeg"],
  },

  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Geo tags for local SEO
  other: {
    "geo.region": "IL-N",
    "geo.placename": "Bustan HaGalil, Israel",
    "geo.position": "32.9472645;35.0819117",
    "ICBM": "32.9472645, 35.0819117",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="canonical" href="https://osha-808c23454ca3.herokuapp.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XLX833ZRDY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XLX833ZRDY');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
