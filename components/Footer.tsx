import { FaFacebook, FaInstagram, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { SiWaze } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-osha-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Location */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4 text-osha-gold flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt />
              מיקום
            </h3>
            <p className="text-lg mb-4">מושב בוסתן הגליל</p>

            {/* Waze button */}
            <div className="flex flex-col gap-2 items-center md:items-start">
              <a
                href="https://waze.com/ul/hsvbgqmgp0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-osha-green px-4 py-2 rounded-lg hover:bg-osha-gold hover:text-white transition-colors text-sm font-semibold"
              >
                <SiWaze />
                נווט עם Waze
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-osha-gold">שעות פעילות</h3>
            <div className="space-y-2">
              <p className="text-osha-gold text-sm italic mb-3">להתעדכן בסטורי</p>
              <p>יום ד׳: 18:30-22:00</p>
              <p>יום ה׳: 9:30-14:00 | 18:30-22:30</p>
              <p>יום ו׳: 9:00-15:00</p>
              <p className="text-sm opacity-80 mt-4">בוסתן הגליל</p>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-osha-gold flex items-center justify-center md:justify-start gap-2">
              צור קשר
            </h3>
            <div className="space-y-4">
              <a
                href="tel:0545678711"
                className="flex items-center justify-center md:justify-start gap-2 text-lg hover:text-osha-gold transition-colors"
              >
                <FaPhone />
                054-5678711
              </a>
              <div className="flex gap-6 justify-center md:justify-start text-3xl">
                <a
                  href="https://wa.me/972545678711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-osha-gold transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.instagram.com/osha.bustanhagalil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-osha-gold transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/wshgltqph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-osha-gold transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mb-8">
          <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-osha-gold border-opacity-30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.8!2d35.0819117!3d32.9472645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dc984f8436471%3A0x4811ea6a71f752fe!2z15DXldep15Ag16fXpNecINeQ15XXm9ecINeX15HXqNeZ150!5e0!3m2!1siw!2sil!4v1635000000000!5m2!1siw!2sil"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="מפת אושה בוסתן הגליל"
            ></iframe>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-osha-gold border-opacity-30 pt-6 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} אושה - OSHA. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
