import { FaStar } from "react-icons/fa";

export default function Reviews() {
  const reviews = [
    {
      name: "טניה קובלנצ'יק",
      text: "עגלת קפה מושלמת במיקום קסום! כמה דקות מעכו, ממש ליד מסעדת 300. הגענו אני ובעלי בשישי ונהנינו מכל רגע! יש שם זולה כיפית עם שולחנות על הדשא, מוזיקה טובה, אווירה רגועה בטבע, מוצל ונעים. האוכל טעים וממש סבבה, בדיוק מה שצריך לבוקר שישי רגוע. מקום מקסים לעצירה, נשנוש והתרעננות. ממליצה בחום!",
      date: "לפני 3 שבועות"
    },
    {
      name: "דנה",
      text: "אני מאוד ממליצה על עגלת קפה אושה. גיא, הבעלים של המקום הוא אדם מקסים ואדיב, אוכל מגוון ומעולה, מקום יפה, אווירה נעימה. הייתי שם באירוע חברה בארוחת בראנץ' והיה מושלם!!",
      date: "לפני חודש"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with Rating */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-osha-green">
            מה הלקוחות שלנו אומרים
          </h2>

          {/* Rating Display */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex gap-1 text-3xl text-osha-gold">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="opacity-80" />
            </div>
            <div className="text-2xl font-bold text-osha-green">4.8</div>
          </div>

          <p className="text-lg text-gray-600 mb-6">
            מבוסס על 23 ביקורות ב-Google
          </p>

          <a
            href="https://maps.app.goo.gl/2FtvntPgrgCRFNp59"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-osha-green text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all hover:scale-105 font-semibold"
          >
            קראו את כל הביקורות ב-Google
          </a>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-osha-green to-osha-green/90 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-4 left-4 text-6xl text-osha-gold opacity-20">"</div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 text-osha-gold mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                {/* Review Text */}
                <p className="text-lg leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="border-t border-osha-gold border-opacity-30 pt-4">
                  <p className="font-bold text-osha-gold">{review.name}</p>
                  <p className="text-sm opacity-80">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Badge */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            הביקורות מגיעות מ-Google Business Profile שלנו
          </p>
        </div>
      </div>
    </section>
  );
}
