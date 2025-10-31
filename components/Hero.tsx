import Image from "next/image";

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
        <p className="text-2xl md:text-3xl mb-8 text-osha-gold">
          COFFEE, FOOD, FRIENDS
        </p>
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
