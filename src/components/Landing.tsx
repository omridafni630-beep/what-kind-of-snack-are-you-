import { motion } from 'motion/react';
import { snackProfiles } from '../data';

interface LandingProps {
  onStart: () => void;
}

export function Landing({ onStart }: LandingProps) {
  // Use a subset of snack images to float around
  const floatingSnacks = [
    snackProfiles.bamba,
    snackProfiles.bisli_batzal,
    snackProfiles.cheetos,
    snackProfiles.tortit,
    snackProfiles.tapuchips,
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center pt-20 pb-16 p-6 bg-grid-pattern overflow-x-hidden">
      {/* Tic-Tac-Toe Cheetos Protest Corner Stamp */}
      <motion.div
        className="absolute top-8 right-4 md:top-12 md:right-12 z-[100] border-4 md:border-[6px] border-red-600 text-red-500 font-black text-center text-lg md:text-3xl px-4 py-2 md:px-6 md:py-4 rounded-2xl shadow-[0_0_40px_rgba(220,38,38,0.4)] bg-gray-900/90 backdrop-blur-md cursor-pointer hover:bg-red-600 hover:text-white transition-colors duration-300"
        initial={{ opacity: 0, scale: 3, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 12 }}
        whileHover={{ rotate: 15, scale: 1.05 }}
        transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
      >
        תחזירו את הציטוס<br />איקס עיגול למדפים!
      </motion.div>

      {/* Floating background elements */}
      {floatingSnacks.map((snack, index) => {
        const randomX = (index % 2 === 0 ? 1 : -1) * (Math.random() * 30 + 20);
        const randomY = (Math.random() * 40 - 20);
        const delay = index * 0.5;

        return (
          <motion.div
            key={snack.id}
            className="absolute rounded-full shadow-2xl opacity-30 blur-[2px] pointer-events-none"
            style={{
              top: `${15 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              width: `${Math.random() * 60 + 80}px`,
              height: `${Math.random() * 60 + 80}px`,
              backgroundImage: `url(${snack.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            animate={{
              y: [0, randomY, 0],
              x: [0, randomX, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
          />
        );
      })}

      {/* Nyan Cat Left */}
      <motion.img
        src="https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif"
        alt="Flying Rainbow Cat"
        className="hidden md:block absolute left-4 lg:left-10 top-1/4 w-32 md:w-48 z-20 pointer-events-none opacity-80"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      
      {/* Nyan Cat Right */}
      <motion.img
        src="https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif"
        alt="Flying Rainbow Cat"
        className="hidden md:block absolute right-4 lg:right-10 top-1/3 w-32 md:w-48 z-20 pointer-events-none opacity-80"
        initial={{ scaleX: -1 }}
        animate={{ y: [0, 30, 0], scaleX: -1 }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
      />

      <motion.div 
        className="relative z-10 text-center max-w-2xl mx-auto mt-10 md:mt-20"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-br from-yellow-300 via-orange-500 to-pink-500 leading-tight mb-6 drop-shadow-lg">
          איזה סוג חטיף אתה?
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-medium mb-12">
          מבחן האישיות שיחשוף את האמת הקרנצ'ית עלייך. בוא נגלה מי אתה באמת...
        </p>
        
        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 text-2xl font-bold bg-white text-gray-900 rounded-full shadow-[0_0_40px_rgba(251,191,36,0.3)] hover:shadow-[0_0_60px_rgba(251,191,36,0.5)] transition-all flex items-center justify-center gap-3 mx-auto group cursor-pointer"
        >
          <span>גלה עכשיו!</span>
          <motion.span
            animate={{ x: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            👈
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Pop Ads / Viral Articles Section */}
      <motion.div 
        className="relative z-10 w-full max-w-6xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-pink-500 transition-colors shadow-xl group cursor-pointer">
          <div className="h-40 w-full rounded-xl mb-4 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1515942400420-2b98fed1f515?w=600&q=80" alt="Astrology" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 hover:text-pink-400 transition-colors">מה סוג המזל שלך אומר על סוג החטיף שאת/ה?</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            האם אי פעם תהיתם אם יש קשר בין תאריך הלידה שלכם להעדפות הקרנצ'יות שלכם? מחקרים חדשים (טוב, בעיקר סקרים לא רשמיים) מראים שדווקא יש! בני מזל טלה נוטים להתפרץ על ביסלי גריל ברגע של תסכול, בעוד שמזל דגים יעדיפו להתנחם בבמבה קלאסית ורכה. גילינו שלכל מזל גלגל המזלות יש את החטיף המושלם שמאזן לו את הצ'אקרות. אז לפני שאתם פותחים שקית ענקית של תפוצ'יפס, כדאי שתבדקו מה הכוכבים אומרים על זה.
          </p>
          <span className="inline-block mt-4 text-pink-500 font-bold text-sm">קרא עוד &gt;&gt;</span>
        </div>

        <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-colors shadow-xl group cursor-pointer">
          <div className="h-40 w-full rounded-xl mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-orange-500/20 z-10"></div>
            <img src="https://images.unsplash.com/photo-1613919113640-25732cea5e79?w=600&q=80" alt="Cheetos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 hover:text-orange-400 transition-colors">להחזיר את הצ'יטוס בוטנים למדפים! 💥</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            זוכרים את הימים היפים שבהם יכולתם להיכנס לכל מכולת שכונתית ולצאת עם שקית כתומה ומרעישה של צ'יטוס בוטנים? הקראנץ' העדין, הטעם שנשאר על האצבעות שעות, והריח הבלתי נשכח... מאז שהוא נעלם מהמדפים חיינו צבועים בפחות כתום. קמה תנועת מחאה ברשת שדורשת להחזיר את האגדה הזו אלינו, לפני שניאלץ להסתפק בחיקויים זולים. יחד נוכל להחזיר עטרה ליושנה!
          </p>
          <span className="inline-block mt-4 text-orange-500 font-bold text-sm">לחץ לתמיכה במאבק &gt;&gt;</span>
        </div>

        <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-colors shadow-xl group cursor-pointer">
          <div className="h-40 w-full rounded-xl mb-4 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1582293041079-7813c2f0f8db?w=600&q=80" alt="Tortit" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 hover:text-green-400 transition-colors">אם יצא לי טורטית במבחן... מה זה אומר עליי?</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            אם הגעתם לסוף המבחן אישיות והתוצאה שלכם היא "טורטית", אתם כנראה מרגישים תערובת של גאווה קטנה ובלבול גדול. מה זה באמת אומר עליכם? שאתם נשמות עתיקות. שאתם לא הולכים אחרי העדר, ושאתם יודעים להעריך טעם קצת שונה, קצת מחוספס, עם תמצית רום וניחוח שמרתיע את החלשים. אתם אלו שתמיד יש להם קסטה בווקמן וגלגלת בפילם. היפסטרים של עולם החטיפים – עופו על עצמכם!
          </p>
          <span className="inline-block mt-4 text-green-500 font-bold text-sm">לכתבה המלאה &gt;&gt;</span>
        </div>
      </motion.div>

    </div>
  );
}
