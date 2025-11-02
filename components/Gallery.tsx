import Image from "next/image";

const images = [
  {
    src: "/images/469101001_122117440190412576_480120404333750563_n.jpg",
    alt: "דלפק אושה",
  },
  {
    src: "/images/469477196_122117440346412576_5930254780807462904_n.jpg",
    alt: "אווירת ערב",
  },
  {
    src: "/images/472714751_122119427222412576_6167129842857684656_n.jpg",
    alt: "פיצה ומאפים",
  },
  {
    src: "/images/495378259_122128094456412576_3505955118274549373_n.jpg",
    alt: "תפריט",
  },
  {
    src: "/images/499796678_122128904978412576_8299582683377027312_n.jpg",
    alt: "קהל במקום",
  },
  {
    src: "/images/514338316_122131304852412576_5826787934821508347_n.jpg",
    alt: "ישיבה בחוץ",
  },
  {
    src: "/images/515989182_122131305056412576_1915939733499836681_n.jpg",
    alt: "מקום נעים",
  },
  {
    src: "/images/548777946_122135157764412576_1215992015760395041_n.jpg",
    alt: "אווירת לילה",
  },
  {
    src: "/images/549397748_122135158058412576_535524348457382240_n.jpg",
    alt: "שולחנות עם מפות משבצות",
  },
  {
    src: "/images/557260402_122135767514412576_1146521141631784200_n.jpg",
    alt: "פינת ישיבה",
  },
  {
    src: "/images/541050462_122134142840412576_4499580242318012762_n.jpg",
    alt: "אווירה תוססת במקום",
  },
  {
    src: "/images/557647397_122135767538412576_8078851400615398500_n.jpg",
    alt: "סלט טרי ומיוחד",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-osha-gold opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-osha-green opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-56 overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Border effect */}
              <div className="absolute inset-0 border-4 border-osha-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl m-2"></div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <p className="text-2xl text-osha-green font-semibold">בואו לבקר אותנו!</p>
          <div className="flex items-center justify-center gap-2 mt-4 text-osha-gold">
            <div className="w-8 h-0.5 bg-osha-gold"></div>
            <span className="text-3xl">☕</span>
            <div className="w-8 h-0.5 bg-osha-gold"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
