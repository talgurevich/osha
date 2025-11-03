import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/972545678711"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all hover:scale-110 animate-pulse md:hidden"
      aria-label="צור קשר בוואטסאפ"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
