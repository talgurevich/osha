export default function About() {
  return (
    <section id="about" className="py-20 bg-osha-green text-white relative overflow-hidden">
      {/* Floral/Succulent Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Top left succulent */}
        <div className="absolute top-10 left-10 opacity-10">
          <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="8" fill="currentColor" className="text-osha-gold"/>
            <ellipse cx="50" cy="35" rx="6" ry="12" fill="currentColor" className="text-white"/>
            <ellipse cx="50" cy="65" rx="6" ry="12" fill="currentColor" className="text-white"/>
            <ellipse cx="35" cy="50" rx="12" ry="6" fill="currentColor" className="text-white"/>
            <ellipse cx="65" cy="50" rx="12" ry="6" fill="currentColor" className="text-white"/>
            <ellipse cx="38" cy="38" rx="10" ry="8" fill="currentColor" className="text-white" transform="rotate(-45 38 38)"/>
            <ellipse cx="62" cy="38" rx="10" ry="8" fill="currentColor" className="text-white" transform="rotate(45 62 38)"/>
            <ellipse cx="38" cy="62" rx="10" ry="8" fill="currentColor" className="text-white" transform="rotate(45 38 62)"/>
            <ellipse cx="62" cy="62" rx="10" ry="8" fill="currentColor" className="text-white" transform="rotate(-45 62 62)"/>
          </svg>
        </div>

        {/* Top right leaf */}
        <div className="absolute top-20 right-10 opacity-15">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 Q30 30 50 50 Q70 30 50 10Z" fill="currentColor" className="text-osha-gold"/>
            <path d="M50 50 Q30 70 50 90 Q70 70 50 50Z" fill="currentColor" className="text-white"/>
            <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2" className="text-osha-gold"/>
          </svg>
        </div>

        {/* Bottom left flower */}
        <div className="absolute bottom-10 left-20 opacity-12">
          <svg width="130" height="130" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="30" r="12" fill="currentColor" className="text-white"/>
            <circle cx="70" cy="50" r="12" fill="currentColor" className="text-white"/>
            <circle cx="50" cy="70" r="12" fill="currentColor" className="text-white"/>
            <circle cx="30" cy="50" r="12" fill="currentColor" className="text-white"/>
            <circle cx="64" cy="36" r="12" fill="currentColor" className="text-white"/>
            <circle cx="64" cy="64" r="12" fill="currentColor" className="text-white"/>
            <circle cx="36" cy="64" r="12" fill="currentColor" className="text-white"/>
            <circle cx="36" cy="36" r="12" fill="currentColor" className="text-white"/>
            <circle cx="50" cy="50" r="10" fill="currentColor" className="text-osha-gold"/>
          </svg>
        </div>

        {/* Bottom right succulent */}
        <div className="absolute bottom-20 right-10 opacity-10">
          <svg width="140" height="140" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="15" ry="20" fill="currentColor" className="text-white"/>
            <ellipse cx="50" cy="50" rx="12" ry="15" fill="currentColor" className="text-osha-gold" opacity="0.5"/>
            <ellipse cx="35" cy="45" rx="10" ry="15" fill="currentColor" className="text-white" transform="rotate(-30 35 45)"/>
            <ellipse cx="65" cy="45" rx="10" ry="15" fill="currentColor" className="text-white" transform="rotate(30 65 45)"/>
            <ellipse cx="40" cy="60" rx="8" ry="12" fill="currentColor" className="text-white" transform="rotate(-20 40 60)"/>
            <ellipse cx="60" cy="60" rx="8" ry="12" fill="currentColor" className="text-white" transform="rotate(20 60 60)"/>
          </svg>
        </div>

        {/* Center top small leaves */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 opacity-8">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="40" cy="50" rx="8" ry="15" fill="currentColor" className="text-white" transform="rotate(-45 40 50)"/>
            <ellipse cx="60" cy="50" rx="8" ry="15" fill="currentColor" className="text-white" transform="rotate(45 60 50)"/>
            <circle cx="50" cy="50" r="5" fill="currentColor" className="text-osha-gold"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-osha-gold">
          אודות אוֹשָׁה
        </h2>

        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl mb-6 leading-relaxed">
            ברוכים הבאים לאוֹשָׁה - מקום מפגש ייחודי במושב בוסתן הגליל
          </p>
          <p className="text-lg md:text-xl opacity-90">
            כאן תמצאו אווירה חמה, אוכל טעים וקפה מעולה
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm mb-12">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              <strong className="text-osha-gold">גיא ואושרי</strong> – הוא מעולם ההייטק, היא מדריכת פילאטיס ומנחת חיבור גוף–נפש – חיברו בין העולמות כדי ליצור את <strong className="text-osha-gold">"אוֹשָׁה"</strong>: עגלת קפה ואוכל טוב בגליל המערבי, במושב בוסתן הגליל, בין עכו לנהריה.
            </p>
            <p>
              אוֹשָׁה נולדה מתוך אהבה לאנשים, לאוכל טרי ולמפגש שמרגיש בית. ואז הגיעה המלחמה, עצרה את הכול והשאירה את הרחובות שקטים. מאז, אנחנו פועלים בכל הכוח להחזיר את הצבע, הריח, והחיים למקום הקטן שלנו – ולהחזיר את המפגש הקהילתי שכל כך חסר.
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
