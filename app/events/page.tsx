import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

// Event images
const eventImages = [
  "/eventspage/IMG_1295.JPG",
  "/eventspage/IMG_1296.JPG",
  "/eventspage/IMG_1297.JPG",
  "/eventspage/IMG_1298.JPG",
  "/eventspage/IMG_1299.JPG",
  "/eventspage/IMG_1300.JPG",
  "/eventspage/IMG_1301.JPG",
  "/eventspage/IMG_1302.JPG",
  "/eventspage/IMG_1305.JPG",
  "/eventspage/IMG_1306.JPG",
];

// Event videos
const eventVideos = [
  "/eventspage/VIDEO-2025-11-05-11-58-08.MP4",
  "/eventspage/VIDEO-2025-11-05-11-58-32.MP4",
  "/eventspage/VIDEO-2025-11-05-11-58-38.MP4",
  "/eventspage/VIDEO-2025-11-05-11-58-40.MP4",
  "/eventspage/VIDEO-2025-11-05-11-58-44.MP4",
  "/eventspage/VIDEO-2025-11-05-11-58-58.MP4",
  "/eventspage/VIDEO-2025-11-05-11-59-01.MP4",
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-osha-green to-osha-green/90">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/eventspage/IMG_1301.JPG"
            alt="אירועים באושה"
            fill
            sizes="100vw"
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            className="object-cover brightness-50"
            priority
          />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-osha-gold hover:text-white transition-colors mb-6"
          >
            <FaArrowRight className="text-xl" />
            <span>חזרה לעמוד הראשי</span>
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">אירועים באושה</h1>
          <p className="text-2xl md:text-3xl text-osha-gold">
            ברוכים הבאים לעולם של חוויות!
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl md:text-2xl text-center text-gray-700 leading-relaxed mb-8">
            במושב בוסתן הגליל, בלב נוף ירוק ובאוויר חופשי, אושה פותחת דלתות לערבים מיוחדים — מפגשים חברתיים, סדנאות, חגיגות פרטיות, ימי עיון, קולינריה ומשקה טוב.
          </p>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-osha-green">
            מה מחכה לכם?
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16">
            אנחנו מארחים מגוון רחב של אירועים
          </p>

          <div className="space-y-12">
            {/* Event Type 1 - Private Events */}
            <div className="bg-gradient-to-br from-osha-green/10 to-osha-gold/10 p-8 md:p-12 rounded-3xl shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-osha-green">
                🎉 אירועים פרטיים
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                ימי הולדת, מסיבות, מפגשים משפחתיים וחגיגות – בסטייל רגוע, חם, קרוב לטבע. האירוע שלכם מקבל את כל תשומת הלב והטיפול המקצועי שמגיע לו, באווירה שמרגישה כמו בית.
              </p>
            </div>

            {/* Event Type 2 - Corporate Events */}
            <div className="bg-gradient-to-br from-osha-gold/10 to-osha-green/10 p-8 md:p-12 rounded-3xl shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-osha-green">
                💼 אירועי חברה ו"אוף-סייט"
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                מפגש צוותי, סדנה, ערב שובר שגרה, הכול בלב הגליל — עם תפריט מותאם, קוקטיילים, בירה איכותית ואווירה משוחררת. המקום המושלם לחיזוק הצוות והתחדשות מחוץ למשרד.
              </p>
            </div>

            {/* Event Type 3 - Experiential Content */}
            <div className="bg-gradient-to-br from-osha-green/10 to-osha-gold/10 p-8 md:p-12 rounded-3xl shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-osha-green">
                🎵 תוכן חווייתי
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                ערב תרבות, מוזיקה חיה, טעימות־קפה, פיצות נפוליטניות תחת כיפת השמיים – כי החוויה מתחילה כאן. אירועים שמשלבים אוכל מעולה, אווירה ייחודית ותוכן איכותי.
              </p>
            </div>

            {/* Kosher Notice */}
            <div className="bg-osha-gold/20 p-6 rounded-2xl border-2 border-osha-gold">
              <p className="text-lg md:text-xl text-center text-gray-800 font-semibold">
                ✨ כשרות מלאה: כל האירועים באתר שלנו תחת פיקוח כשרות, כך שהאוכל איכותי, טעים – ולהרבה מאיפה לבחור.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Osha Section */}
      <section className="py-20 bg-osha-green text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-osha-gold">
            למה דווקא אוֹשָׁה?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-osha-gold flex items-start gap-3">
                <FaCheckCircle className="text-3xl flex-shrink-0 mt-1" />
                מיקום קסום
              </h3>
              <p className="text-lg leading-relaxed">
                בין עכו לנהריה, מושב בוסתן הגליל – רחוק מההמולה, קרוב לחיבור. נוף ירוק, אוויר צח, ואווירה שמזמינה להישאר.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-osha-gold flex items-start gap-3">
                <FaCheckCircle className="text-3xl flex-shrink-0 mt-1" />
                תפריט מגוון
              </h3>
              <p className="text-lg leading-relaxed">
                פיצות עץ, סלטים טריים, כריכים מחמצת, קפה איכותי וקוקטיילים – כך שכל אירוע מקבל טוויסט קולינרי שמתאים בדיוק לכם.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-osha-gold flex items-start gap-3">
                <FaCheckCircle className="text-3xl flex-shrink-0 mt-1" />
                אווירה ביתית ומזמינה
              </h3>
              <p className="text-lg leading-relaxed">
                אצלנו זה לא רק אירוע – זו חוויה שמרגישה כמו בית. מקום שבו אפשר להרגיש בנוח, להירגע וליהנות מכל רגע.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-osha-gold flex items-start gap-3">
                <FaCheckCircle className="text-3xl flex-shrink-0 mt-1" />
                צוות מקצועי
              </h3>
              <p className="text-lg leading-relaxed">
                אנחנו כאן כדי לדאוג לפרטים, מהתכנון ועד השירות – את/ה יכולים להגיע, להירגע וליהנות. אנחנו דואגים לכל השאר.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-osha-green">
            איך מתחילים?
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-osha-gold text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-osha-green">צרו קשר</h3>
                <p className="text-lg text-gray-700">
                  שלחו אלינו הודעה או התקשרו – נרשום את פרטי האירוע שלכם ונתחיל לתכנן ביחד.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-osha-gold text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-osha-green">התאמה אישית</h3>
                <p className="text-lg text-gray-700">
                  נתאים תפריט וסגנון שמתאים בדיוק לכם - קוקטיילים, בר בירה, פיצות, סדנאות תוכן ועוד.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-osha-gold text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-osha-green">תיאום פרטים</h3>
                <p className="text-lg text-gray-700">
                  נבחר יחד תאריך, מסגרת שעות ואביזרי שירות נדרשים (ישיבה, הגברה, תאורה, מוזיקה).
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-osha-gold text-white rounded-full flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-osha-green">נהנים מהאירוע</h3>
                <p className="text-lg text-gray-700">
                  ביום האירוע – מגיעים לאושה, משאירים את הדאגות מאחור, ורק נהנים. אנחנו דואגים לכל השאר!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://wa.me/972545678711"
              className="inline-block bg-osha-green text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg"
            >
              צרו קשר עכשיו 📞
            </a>
          </div>
        </div>
      </section>

      {/* Image & Video Gallery */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-osha-green">
            גלריית אירועים
          </h2>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {eventImages.map((image, index) => (
              <div
                key={index}
                className="relative h-64 overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <Image
                  src={image}
                  alt={`אירוע ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={70}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 border-4 border-osha-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl m-2"></div>
              </div>
            ))}
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventVideos.map((video, index) => (
              <div
                key={index}
                className="relative h-64 overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <video
                  src={video}
                  controls
                  muted
                  className="w-full h-full object-cover rounded-2xl"
                  playsInline
                >
                  הדפדפן שלך אינו תומך בתגית וידאו.
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
