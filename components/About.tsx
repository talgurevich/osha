export default function About() {
  return (
    <section id="about" className="py-20 bg-osha-green text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-osha-gold">
          אודות אושה
        </h2>

        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl mb-6 leading-relaxed">
            ברוכים הבאים לאושה - מקום מפגש ייחודי במושב בוסתן הגליל
          </p>
          <p className="text-lg md:text-xl opacity-90">
            כאן תמצאו אווירה חמה, אוכל טעים וקפה מעולה
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm mb-12">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              <strong className="text-osha-gold">גיא ואושרי</strong> – הוא מעולם ההייטק, היא מדריכת פילאטיס ומנחת חיבור גוף–נפש – חיברו בין העולמות כדי ליצור את <strong className="text-osha-gold">"אושה"</strong>: עגלת קפה ואוכל טוב בגליל המערבי, במושב בוסתן הגליל, בין עכו לנהריה.
            </p>
            <p>
              אושה נולדה מתוך אהבה לאנשים, לאוכל טרי ולמפגש שמרגיש בית. ואז הגיעה המלחמה, עצרה את הכול והשאירה את הרחובות שקטים. מאז, אנחנו פועלים בכל הכוח להחזיר את הצבע, הריח, והחיים למקום הקטן שלנו – ולהחזיר את המפגש הקהילתי שכל כך חסר.
            </p>
            <p>
              כאן מחכים לכם פיצות נפוליטניות חמות, סלטים טריים, כריכי מחמצת, קפה איכותי, בירות, קוקטיילים, מאפים מתוקים ומלוחים, שקשוקות – ותפריט מגוון שמתאים גם לאירועי חברה, חגיגות פרטיות ומפגשים מיוחדים.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-osha-gold">התפריט שלנו</h3>
            <ul className="space-y-2 text-lg">
              <li>🍕 פיצות שף</li>
              <li>🥪 כריכים</li>
              <li>🥐 מאפים טריים</li>
              <li>🍹 קוקטיילים</li>
              <li>☕ קפה איכותי</li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-osha-gold">אירועים מיוחדים</h3>
            <div className="space-y-4 text-lg">
              <div>
                <p className="font-semibold text-osha-gold">🎉 אירועים ואירוח</p>
                <p>אנחנו מארחים אירועים פרטיים, ימי הולדת, מסיבות וחגיגות</p>
              </div>
              <div>
                <p className="font-semibold text-osha-gold">👨‍👩‍👧‍👦 אווירה משפחתית</p>
                <p>המקום המושלם לכל אירוע מיוחד עם אוכל טעים ואווירה חמה</p>
              </div>
              <div>
                <p className="font-semibold text-osha-gold">כשרות</p>
                <p>המקום שלנו כשר - אוכל איכותי בפיקוח כשרות</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl italic text-osha-gold">
            "COFFEE, FOOD, FRIENDS"
          </p>
        </div>
      </div>
    </section>
  );
}
