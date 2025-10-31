import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  // Structured Data for Local Business SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://osha-808c23454ca3.herokuapp.com",
    "name": "אושה - OSHA Coffee",
    "alternateName": "עגלת קפה אושה",
    "description": "עגלת קפה צפון גליל עכו נהריה - פיצות נפוליטניות, סלטים טריים, כריכי מחמצת, קפה איכותי וקוקטיילים במושב בוסתן הגליל",
    "image": "https://osha-808c23454ca3.herokuapp.com/logo.jpeg",
    "logo": "https://osha-808c23454ca3.herokuapp.com/logo.jpeg",
    "url": "https://osha-808c23454ca3.herokuapp.com",
    "telephone": "+972545678711",
    "priceRange": "₪₪",
    "servesCuisine": ["Pizza", "Coffee", "Mediterranean", "Israeli"],
    "acceptsReservations": "True",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "בוסתן הגליל",
      "addressLocality": "בוסתן הגליל",
      "addressRegion": "צפון",
      "addressCountry": "IL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.9472645",
      "longitude": "35.0819117"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "18:30",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "09:30",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "18:30",
        "closes": "22:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/osha.bustanhagalil/",
      "https://www.facebook.com/wshgltqph"
    ],
    "hasMenu": {
      "@type": "Menu",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "פיצות",
          "description": "פיצות נפוליטניות חמות"
        },
        {
          "@type": "MenuSection",
          "name": "משקאות",
          "description": "קפה איכותי, קוקטיילים, בירות"
        },
        {
          "@type": "MenuSection",
          "name": "אוכל",
          "description": "סלטים טריים, כריכי מחמצת, מאפים, שקשוקות"
        }
      ]
    }
  };

  return (
    <>
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main>
        <Hero />
        <About />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}
