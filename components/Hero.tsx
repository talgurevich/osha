import Image from "next/image";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { SiWaze } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/499796678_122128904978412576_8299582683377027312_n.jpg"
          alt="אושה - OSHA"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="mb-8">
          <Image
            src="/logo.jpeg"
            alt="אושה לוגו"
            width={300}
            height={300}
            className="mx-auto rounded-full shadow-2xl"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">אוֹשָׁה</h1>
        <p className="text-2xl md:text-3xl mb-4 text-osha-gold">
          COFFEE, FOOD, FRIENDS
        </p>

        {/* Rating Badge */}
        <div className="flex items-center justify-center gap-2 mb-6 bg-white bg-opacity-20 backdrop-blur-md px-6 py-3 rounded-full mx-auto w-fit">
          <div className="flex gap-1 text-osha-gold">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="opacity-80" />
          </div>
          <span className="text-white font-semibold">4.8</span>
          <span className="text-white opacity-80 text-sm">(23 ביקורות)</span>
        </div>

        {/* Action Buttons - Waze and WhatsApp */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a
            href="https://waze.com/ul/hsvbgqmgp0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#00D9FF] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            <SiWaze className="text-xl" />
            נווט עם Waze
          </a>
          <a
            href="https://wa.me/972545678711"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            <FaWhatsapp className="text-xl" />
            שלחו הודעה
          </a>
        </div>

        <a
          href="#about"
          className="inline-block bg-osha-gold text-osha-green px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all hover:scale-105"
        >
          גלו עוד
        </a>
      </div>
    </section>
  );
}
