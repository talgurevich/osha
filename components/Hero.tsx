import Image from "next/image";
import { FaStar } from "react-icons/fa";

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
        <h1 className="text-5xl md:text-7xl font-bold mb-4">אושה</h1>
        <p className="text-2xl md:text-3xl mb-4 text-osha-gold">
          COFFEE, FOOD, FRIENDS
        </p>

        {/* Rating Badge */}
        <div className="flex items-center justify-center gap-2 mb-8 bg-white bg-opacity-20 backdrop-blur-md px-6 py-3 rounded-full mx-auto w-fit">
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
