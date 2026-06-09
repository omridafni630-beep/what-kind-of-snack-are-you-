import { Question, SnackProfile } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "את/ה באמצע במיטה עם רותם סלע ואסי עזר למי אתה מפנה את הגב?",
    answers: [
      { text: "מפנה את הגב לאסי, העיניים רק על רותם", mappedTo: "bamba" },
      { text: "מפנה את הגב לרותם, אסי זה החיים", mappedTo: "bisli_batzal" },
    ]
  },
  {
    id: 3,
    text: "איך אתה מתמודד עם אנשים חדשים?",
    answers: [
      { text: "שומר על מרחק, לוקח לי זמן להיפתח ואז אני הכי חם שיש", mappedTo: "egozi" },
      { text: "מחבק את כולם מהרגע הראשון", mappedTo: "bamba" },
      { text: "אני החבר הכי יציב שיש, קצת יבש בהתחלה אבל אמין", mappedTo: "beigale" },
      { text: "זורק הערה עוקצנית כדי לשבור את הקרח", mappedTo: "bisli_batzal" },
    ]
  },
  {
    id: 4,
    text: "שאלת השאלות - ציצי או תחת?",
    answers: [
      { text: "ציצי, הכי רך ומנחם שיש", mappedTo: "bamba" },
      { text: "תחת, מוצק ועם נוכחות", mappedTo: "bisli_batzal" },
      { text: "מה זה משנה? אני פה בשביל האישיות והקלאס", mappedTo: "apropo" },
      { text: "גם וגם, תנו לי הכל ובלאגן!", mappedTo: "cheetos" },
      { text: "מה שיש אני לוקח, הכל זורם וטוב", mappedTo: "tapuchips" },
    ]
  },
  {
    id: 5,
    text: "איך אתה מגיב כשמישהו מעצבן אותך בכביש או בתור?",
    answers: [
      { text: "צועק ומפעיל צופר, שלא יתעסקו איתי", mappedTo: "bisli_batzal" },
      { text: "נושם עמוק, סופר עד 10 ולוקח פסק זמן", mappedTo: "pesek_zman" },
      { text: "מתעלם לחלוטין, חבל על האנרגיה שלי", mappedTo: "beigale" },
      { text: "ממלמל לעצמי בעצבים אבל לא עושה סצנה", mappedTo: "egozi" },
    ]
  },
  {
    id: 6,
    text: "מה החלום הכי גדול שלך בחיים?",
    answers: [
      { text: "להתפרסם בטירוף", mappedTo: "cheetos" },
      { text: "להקים את עסק חלומותייך", mappedTo: "tortit" },
      { text: "להקים משפחה ענקית ולעשות ארוחות שישי מטורפות", mappedTo: "bamba" },
      { text: "לחיות מסביב לעולם", mappedTo: "apropo" },
    ]
  },
  {
    id: 7,
    text: "איזו תכונה חברים שלך הכי מעריכים אצלך?",
    answers: [
      { text: "שאני תמיד חם, מתוק ומקשיב לכולם", mappedTo: "bamba" },
      { text: "שאני אומר תמיד את האמת בפרצוף בלי פילטרים", mappedTo: "bisli_batzal" },
      { text: "שאני הבן אדם הכי אמין ויציב בעולם, עוגן", mappedTo: "beigale" },
      { text: "שאני בלתי צפוי ותמיד מביא אנרגיות שיא ומסיבות", mappedTo: "klik" },
    ]
  },
  {
    id: 8,
    text: "איך אתה מתמודד עם משימה קשה או פרויקט מורכב?",
    answers: [
      { text: "מפצח אותה לאט לאט ובסבלנות, שלב אחרי שלב", mappedTo: "egozi" },
      { text: "עוצר כל חצי שעה להפסקת קפה ומנוחה", mappedTo: "pesek_zman" },
      { text: "מאלתר תוך כדי תנועה ומקווה לטוב, יהיה בסדר", mappedTo: "cheetos" },
      { text: "עושה את זה בדיוק בדרך הייחודית והמוזרה שלי", mappedTo: "tortit" },
    ]
  }
];

export const snackProfiles: Record<string, SnackProfile> = {
  bisli_batzal: {
    id: "bisli_batzal",
    title: "אתה ביסלי בצל!",
    description: "יש לך אישיות קשה וחסרת פשרות מבחוץ, עם טעם חזק שאי אפשר להתעלם ממנו. אתה אומר את האמת בפרצוף, עוקצני, אבל מי שמכיר אותך באמת יודע שאתה קלאסיקה אמיתית.",
    imageUrl: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&q=80",
    color: "#D97706" // Amber-600
  },
  bamba: {
    id: "bamba",
    title: "אתה במבה!",
    description: "כולם אוהבים אותך! אתה רך, מנחם, ובטוח בעצמך. אתה החבר הזה שתמיד נמצא שם כדי לתת חיבוק, להרגיע ולהביא איתו אווירה ביתית וחמה.",
    imageUrl: "https://images.unsplash.com/photo-1623910271012-7bbacc62b325?w=800&q=80",
    color: "#FBBF24" // Amber-400
  },
  cheetos: {
    id: "cheetos",
    title: "אתה צ'יטוס!",
    description: "אתה אנרגטי, פרוע ומשאיר אחריך בלאגן (או אבקה כתומה). איתך אף פעם לא משעמם, אתה חי על הקצה ואוהב לעשות רעש!",
    imageUrl: "https://images.unsplash.com/photo-1613919113640-25732cea5e79?w=800&q=80",
    color: "#F97316" // Orange-500
  },
  apropo: {
    id: "apropo",
    title: "אתה אפרופו!",
    description: "אתה עדין, אלגנטי ואוהב לטבול את עצמך בעניינים של אחרים (או בגבינה). יש לך סטייל מיוחד, קלאס אירופאי ועין חדה לפרטים.",
    imageUrl: "https://images.unsplash.com/photo-1525385202860-23a776c5bca9?w=800&q=80",
    color: "#FDE047" // Yellow-300
  },
  pesek_zman: {
    id: "pesek_zman",
    title: "אתה פסק זמן!",
    description: "אתה מתוק, רגוע, ותמיד יודע מתי צריך לעצור את כל הטירוף מסביב ולקחת רגע לעצמך. הלחץ לא משפיע עליך בקלות.",
    imageUrl: "https://images.unsplash.com/photo-1548842426-1fc69c762d08?w=800&q=80",
    color: "#DC2626" // Red-600
  },
  klik: {
    id: "klik",
    title: "אתה קליק!",
    description: "אתה בלתי צפוי, מגוון ותמיד מלא בהפתעות. אי אפשר להשתעמם איתך, ואתה מסמר הערב כי אתה יודע להתאים את עצמך לכל חבורה ומצב ב'קליק'.",
    imageUrl: "https://images.unsplash.com/photo-1543085526-7ad7d4cb9fb3?w=800&q=80",
    color: "#B91C1C" // Red-700
  },
  tortit: {
    id: "tortit",
    title: "אתה טורטית!",
    description: "יש לך נשמה של פעם וטעם ייחודי שלא כולם מבינים בהתחלה. אתה קצת היפסטר, לא מתנצל על מי שאתה, ואנשים או שאוהבים אותך בטירוף – או שלא מבינים אותך בכלל.",
    imageUrl: "https://images.unsplash.com/photo-1582293041079-7813c2f0f8db?w=800&q=80",
    color: "#16A34A" // Green-600
  },
  tapuchips: {
    id: "tapuchips",
    title: "אתה תפוצ'יפס!",
    description: "קלאסי, פשוט וזורם. בלי יותר מדי דרמות, מסכות או סיבוכים. אתה בן אדם ישיר, מלח הארץ, וכולם תמיד שמחים שאתה בסביבה כי אתה משתלב מעולה בכל מצב.",
    imageUrl: "https://images.unsplash.com/photo-1566478989037-eade1710b20e?w=800&q=80",
    color: "#EF4444" // Red-500
  },
  egozi: {
    id: "egozi",
    title: "אתה אגוזי!",
    description: "מבחוץ אתה אולי נראה קשוח, סגור או מחוספס, אבל בפנים אתה הכי רך, מתוק ושוקולדי שיש. לוקח קצת זמן לפצח אותך, אבל מי שמצליח מרוויח חבר לחיים.",
    imageUrl: "https://images.unsplash.com/photo-1598515060447-1959b8a36fa0?w=800&q=80",
    color: "#78350F" // Amber-900
  },
  beigale: {
    id: "beigale",
    title: "אתה בייגלה!",
    description: "אתה החבר הכי יציב, שקול ואמין בחבורה. אולי אתה נראה קצת יבש או מופנם לחלק מהאנשים בהתחלה, אבל אתה תמיד שם כשצריך אותך, ואפשר לסמוך עליך בעיניים עצומות.",
    imageUrl: "https://images.unsplash.com/photo-1517598007200-84a1e9447e1d?w=800&q=80",
    color: "#92400E" // Amber-800
  }
};
