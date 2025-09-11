const courses = [
  
 
  {
    id: 1,
    name: "اصول مهندسي زلزله وباد",
    code: "21_2220098",
    prof: "ذوالفقاري محمد رضا، قادري گركاني مجيد",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "کلاس"},
      {days: [3], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
  {
    id: 2,
    name: "كارآموزي",
    code: "21_2220114",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
  {
    id: 3,
    name: "تاسيسات مكانيكي وبرقي",
    code: "21_2220162",
    prof: "وكيل زاده داود",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/21 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 4,
    name: "اصول مديريت ساخت",
    code: "21_2220163",
    prof: "عليپوري يعقوب",
    units: 2,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/29 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 5,
    name: "آشنايي با رشته مهندسي عمران (كاربيني)",
    code: "21_2220170",
    prof: "وكيل زاده داود",
    units: 1,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/06 13:30-16:30",
    department: "مهندسی عمران",
    capacity: 130,
    gender: "مختلط"
  },
  {
    id: 6,
    name: "هوش مصنوعي و تحول ديجيتال",
    code: "21_2220171",
    prof: "قاسم زاده حسن",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/23 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 7,
    name: "برنامه سازي كامپيوتر",
    code: "21_2220173",
    prof: "خدادادي مجتبي",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "کلاس"},
      {days: [3], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/30 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8,
    name: "مكانيك جامدات ۱",
    code: "21_2220175",
    prof: "عسگريان بهروز",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "کلاس"},
      {days: [3], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 9,
    name: "مكانيك جامدات ۱",
    code: "22_2220175",
    prof: "مسعودي مصطفي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "کلاس"},
      {days: [3], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 10,
    name: "مكانيك جامدات ۱",
    code: "23_2220175",
    prof: "اصيل قره باغي سعيد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "کلاس"},
      {days: [4], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },

  /* --- مصالح و دینامیک و آزمایشگاه مصالح --- */
  {
    id: 11,
    name: "آزمايشگاه مصالح و فرآورده هاي ساختماني",
    code: "21_2220182",
    prof: "زنگانه حامد",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/06 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 12,
    name: "آزمايشگاه مصالح و فرآورده هاي ساختماني",
    code: "22_2220182",
    prof: "زنگانه حامد",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/11/06 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 13,
    name: "مصالح و فرآورده هاي ساختماني",
    code: "21_2220183",
    prof: "باقري عليرضا",
    units: 2,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/04 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 14,
    name: "مصالح و فرآورده هاي ساختماني",
    code: "22_2220183",
    prof: "باقري عليرضا",
    units: 2,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/04 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 15,
    name: "مصالح و فرآورده هاي ساختماني",
    code: "23_2220183",
    prof: "زنگانه حامد",
    units: 2,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/04 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 16,
    name: "ديناميك",
    code: "21_2220225",
    prof: "ايزدي اردلان",
    units: 2,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 17,
    name: "ديناميك",
    code: "22_2220225",
    prof: "ايزدي اردلان",
    units: 2,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 18,
    name: "ديناميك",
    code: "23_2220225",
    prof: "ايزدي اردلان",
    units: 2,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },

  /* --- گروه آموزشی آب --- */
  {
    id: 19,
    name: "مكانيك سيالات",
    code: "21_2221023",
    prof: "عليزاد كريم",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "کلاس"},
      {days: [3], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/24 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 20,
    name: "مكانيك سيالات",
    code: "22_2221023",
    prof: "استادميرزا تهراني محمدجواد",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "کلاس"},
      {days: [3], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/24 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 21,
    name: "هيدروليك",
    code: "21_2221026",
    prof: "استادميرزا تهراني محمدجواد",
    units: 2,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 22,
    name: "هيدروليك",
    code: "22_2221026",
    prof: "عليزاد كريم",
    units: 2,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 23,
    name: "آز هيدروليك",
    code: "21_2221027",
    prof: "وكيل زاده داود",
    units: 1,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 24,
    name: "آز هيدروليك",
    code: "22_2221027",
    prof: "استادميرزا تهراني محمدجواد",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 25,
    name: "آز هيدروليك",
    code: "23_2221027",
    prof: "عليزاد كريم",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 26,
    name: "آز هيدروليك",
    code: "24_2221027",
    prof: "عليزاد كريم",
    units: 1,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 27,
    name: "آز هيدروليك",
    code: "25_2221027",
    prof: "ايزدي اردلان",
    units: 1,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 28,
    name: "آز هيدروليك",
    code: "26_2221027",
    prof: "استادميرزا تهراني محمدجواد",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 29,
    name: "آز هيدروليك",
    code: "27_2221027",
    prof: "ايزدي اردلان",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 30,
    name: "آز هيدروليك",
    code: "28_2221027",
    prof: "وكيل زاده داود",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 31,
    name: "هيدرولوژي مهندسي",
    code: "21_2221036",
    prof: "مهجوري مجد نجمه",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/05 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 35,
    gender: "مختلط"
  },
  {
    id: 32,
    name: "آبهاي زيرزميني",
    code: "21_2221043",
    prof: "موسوي سيد مرتضي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "کلاس"},
      {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/29 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 33,
    name: "مهندسي آب و فاضلاب و پروژه",
    code: "21_2221047",
    prof: "كاويانپور محمدرضا",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "کلاس"},
      {days: [4], start: 7.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/24 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 35,
    gender: "مختلط"
  },
  {
    id: 34,
    name: "بناهاي آبي",
    code: "21_2221049",
    prof: "كاويانپور محمدرضا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "کلاس"},
      {days: [4], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/06 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 35,
    gender: "مختلط"
  },
  {
    id: 35,
    name: "آزمايشگاه هيدرولوژي و منابع آب",
    code: "21_2221184",
    prof: "برهاني داريان عليرضا",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/20 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 8,
    gender: "مختلط"
  },

  /* --- گروه خاک و پی --- */
  {
    id: 36,
    name: "مكانيك خاك ۲",
    code: "21_2227012",
    prof: "عبدي محمود رضا",
    units: 2,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/28 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 37,
    name: "مكانيك خاك ۱",
    code: "21_2227030",
    prof: "عبدي محمود رضا",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "کلاس"},
      {days: [3], start: 7.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/28 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 38,
    name: "مكانيك خاك ۱",
    code: "22_2227030",
    prof: "رئيسيان زاده جواد",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "کلاس"},
      {days: [3], start: 7.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/28 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 39,
    name: "آزمكانيك خاك",
    code: "21_2227031",
    prof: "رئيسيان زاده جواد",
    units: 1,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 40,
    name: "آزمكانيك خاك",
    code: "22_2227031",
    prof: "ايرانمنش محمدعلي",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 41,
    name: "آزمكانيك خاك",
    code: "23_2227031",
    prof: "رئيسيان زاده جواد",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 42,
    name: "آزمكانيك خاك",
    code: "24_2227031",
    prof: "ايرانمنش محمدعلي",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 43,
    name: "مهندسي پي و پروژه",
    code: "21_2227071",
    prof: "مقدس تفرشي سيد ناصر، قضاوي محمود",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "کلاس"},
      {days: [3], start: 7.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/21 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 44,
    name: "مهندسي پي و پروژه",
    code: "22_2227071",
    prof: "قضاوي محمود",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "کلاس"},
      {days: [3], start: 7.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/21 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 45,
    name: "روش هاي اجرائ گود و سازه نگهبان",
    code: "21_2227105",
    prof: "ايرانمنش محمدعلي",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/05 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },

  /* --- سایر دروس سازه/نقشه/استاتیک/دینامیک --- */
  {
    id: 46,
    name: "مقاومت مصالح ۲",
    code: "21_2271068",
    prof: "كياني كيوان",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "کلاس"},
      {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/05 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 47,
    name: "سازه هاي فولادي ۱",
    code: "21_2271082",
    prof: "فنايي نادر",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "کلاس"},
      {days: [3], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/11/01 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 48,
    name: "سازه هاي فولادي ۱",
    code: "22_2271082",
    prof: "مشايخي محمد رضا",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "کلاس"},
      {days: [3], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/11/01 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 49,
    name: "سازه هاي بتن آرمه ۲",
    code: "21_2271084",
    prof: "مسعودي مصطفي",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "کلاس"},
      {days: [4], start: 7.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 35,
    gender: "مختلط"
  },
  {
    id: 50,
    name: "تئوري نقشه برداري ۱",
    code: "21_2271086",
    prof: "رحيم زادگان مجيد",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/28 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 51,
    name: "تئوري نقشه برداري ۱",
    code: "22_2271086",
    prof: "رحيم زادگان مجيد",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/28 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 52,
    name: "استاتيك",
    code: "21_2271088",
    prof: "عسجدي امير حسين",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "کلاس"},
      {days: [3], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/23 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 53,
    name: "استاتيك",
    code: "22_2271088",
    prof: "باراني لنباني اميد رضا",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "کلاس"},
      {days: [2], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/23 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 54,
    name: "ديناميك",
    code: "21_2271090",
    prof: "ايزدي اردلان",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 55,
    name: "مقاومت مصالح ۱",
    code: "21_2271091",
    prof: "عسگريان بهروز",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "کلاس"},
      {days: [3], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 5,
    gender: "مختلط"
  },
  {
    id: 56,
    name: "مقاومت مصالح ۱",
    code: "22_2271091",
    prof: "مسعودي مصطفي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "کلاس"},
      {days: [3], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 5,
    gender: "مختلط"
  },
  {
    id: 57,
    name: "مقاومت مصالح ۱",
    code: "23_2271091",
    prof: "اصيل قره باغي سعيد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "کلاس"},
      {days: [4], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 5,
    gender: "مختلط"
  },

  /* --- رسم فنی، زمین‌شناسی، آز بتن، متره/برآورد، تحلیل‌ها، بتن۱ --- */
  {
    id: 58,
    name: "رسم فني و نقشه كشي ساختمان",
    code: "21_2271094",
    prof: "وكيل زاده داود",
    units: 2,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 59,
    name: "رسم فني و نقشه كشي ساختمان",
    code: "22_2271094",
    prof: "وكيل زاده داود",
    units: 2,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 60,
    name: "رسم فني و نقشه كشي ساختمان",
    code: "23_2271094",
    prof: "وكيل زاده داود",
    units: 2,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 61,
    name: "رسم فني و نقشه كشي ساختمان",
    code: "24_2271094",
    prof: "وكيل زاده داود",
    units: 2,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 62,
    name: "زمين شناسي مهندسي",
    code: "21_2271098",
    prof: "علي آباديان زينب",
    units: 2,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/11/06 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
  {
    id: 63,
    name: "زمين شناسي مهندسي",
    code: "22_2271098",
    prof: "علي آباديان زينب",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/06 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
  {
    id: 64,
    name: "زمين شناسي مهندسي",
    code: "23_2271098",
    prof: "علي آباديان زينب",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/06 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
  {
    id: 65,
    name: "آز بتن",
    code: "21_2271100",
    prof: "زنگانه حامد",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 66,
    name: "آز بتن",
    code: "22_2271100",
    prof: "زنگانه حامد",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 67,
    name: "آز بتن",
    code: "23_2271100",
    prof: "زنگانه حامد",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 68,
    name: "آز بتن",
    code: "24_2271100",
    prof: "زنگانه حامد",
    units: 1,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 69,
    name: "متره و براورد و پروژه",
    code: "21_2271107",
    prof: "خانعلي پور وزواني مهدي",
    units: 1,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/22 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 30,
    gender: "مختلط"
  },
  {
    id: 70,
    name: "تحليل سازه ها ۱",
    code: "21_2271108",
    prof: "قادري گركاني مجيد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "کلاس"},
      {days: [4], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 71,
    name: "تحليل سازه ها ۱",
    code: "22_2271108",
    prof: "عسجدي امير حسين",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "کلاس"},
      {days: [4], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 72,
    name: "تحليل سازه ها ۲",
    code: "21_2271118",
    prof: "كرمي محمدي رضا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "کلاس"},
      {days: [4], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/06 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 73,
    name: "تحليل سازه ها ۲",
    code: "22_2271118",
    prof: "دلفاني محمدرسول",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "کلاس"},
      {days: [4], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/06 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 74,
    name: "سازه هاي بتن آرمه ۱",
    code: "21_2271121",
    prof: "ميرزا بزرگ حسن",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "کلاس"},
      {days: [4], start: 7.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 75,
    name: "سازه هاي بتن آرمه ۱",
    code: "22_2271121",
    prof: "نصراله زاده نشلي كورش",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "کلاس"},
      {days: [4], start: 7.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },

  /* --- روش‌های اجرایی، فولاد۲، آز مقاومت، پروژه‌ها، عملیات نقشه‌برداری --- */
  {
    id: 76,
    name: "روشهاي اجرايي ساختمان",
    code: "21_2271123",
    prof: "خليفه لو سيداكبر",
    units: 2,
    sessions: [
      {days: [5], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/29 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 77,
    name: "سازه هاي فولادي ۲",
    code: "21_2271131",
    prof: "خليفه لو سيداكبر",
    units: 2,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "کلاس"},
      {days: [3], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/01 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 78,
    name: "سازه هاي فولادي ۲",
    code: "22_2271131",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "کلاس"},
      {days: [5], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/11/01 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 79,
    name: "آز مقاومت مصالح",
    code: "21_2271142",
    prof: "خليفه لو سيداكبر",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 80,
    name: "آز مقاومت مصالح",
    code: "22_2271142",
    prof: "خليفه لو سيداكبر",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 81,
    name: "آز مقاومت مصالح",
    code: "23_2271142",
    prof: "خليفه لو سيداكبر",
    units: 1,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 82,
    name: "آز مقاومت مصالح",
    code: "24_2271142",
    prof: "خليفه لو سيداكبر",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 83,
    name: "آز مقاومت مصالح",
    code: "25_2271142",
    prof: "خليفه لو سيداكبر",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 84,
    name: "پروژه بتن آرمه",
    code: "21_2271209",
    prof: "ميرزا بزرگ حسن",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 35,
    gender: "مختلط"
  },
  {
    id: 85,
    name: "پروژه سازه هاي فولادي",
    code: "21_2271216",
    prof: "خليفه لو سيداكبر",
    units: 1,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/06 13:30-16:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 86,
    name: "پروژه سازه هاي فولادي",
    code: "22_2271216",
    prof: "خليفه لو سيداكبر",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/06 13:30-16:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 87,
    name: "عمليات نقشه برداري ۱",
    code: "21_2271277",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/06 13:30-16:30",
    department: "مهندسی عمران",
    capacity: 18,
    gender: "مختلط"
  },
  {
    id: 88,
    name: "عمليات نقشه برداري ۱",
    code: "22_2271277",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/06 13:30-16:30",
    department: "مهندسی عمران",
    capacity: 18,
    gender: "مختلط"
  },
  {
    id: 89,
    name: "عمليات نقشه برداري ۱",
    code: "23_2271277",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/11/06 13:30-16:30",
    department: "مهندسی عمران",
    capacity: 18,
    gender: "مختلط"
  },
  {
    id: 90,
    name: "عمليات نقشه برداري ۱",
    code: "24_2271277",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/06 13:30-16:30",
    department: "مهندسی عمران",
    capacity: 18,
    gender: "مختلط"
  },

  /* --- محیط زیست --- */
  {
    id: 91,
    name: "مهندسي محيط زيست",
    code: "21_2274004",
    prof: "وفائي فريدون",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/29 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },
  {
    id: 92,
    name: "مهندسي محيط زيست",
    code: "22_2274004",
    prof: "بوداقپور سيامك",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/29 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 20,
    gender: "مختلط"
  },

  /* --- راه و ترابری --- */
  {
    id: 93,
    name: "آزمايشگاه روسازي",
    code: "21_2279005",
    prof: "خدادادي مجتبي",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 94,
    name: "آزمايشگاه روسازي",
    code: "22_2279005",
    prof: "فخري منصور",
    units: 1,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 95,
    name: "مهندسي ترابري",
    code: "21_2279008",
    prof: "ادريسي علي",
    units: 2,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/28 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 96,
    name: "ماشين آلات راهسازي",
    code: "21_2279017",
    prof: "ادريسي علي",
    units: 2,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/10/28 10:30-12:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 97,
    name: "روسازي راه",
    code: "21_2279018",
    prof: "فخري منصور",
    units: 2,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/04 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 98,
    name: "راهسازي",
    code: "21_2279021",
    prof: "منجم محمد سعيد",
    units: 2,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/11/04 08:00-10:30",
    department: "مهندسی عمران",
    capacity: 35,
    gender: "مختلط"
  },
  {
    id: 99,
    name: "پروژه راه",
    code: "21_2279076",
    prof: "منجم محمد سعيد",
    units: 1,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 100,
    name: "پروژه راه",
    code: "22_2279076",
    prof: "منجم محمد سعيد",
    units: 1,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 15,
    gender: "مختلط"
  },
  {
    id: 101,
    name: "پروژه راه",
    code: "23_2279076",
    prof: "منجم محمد سعيد",
    units: 1,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران",
    capacity: 0,
    gender: "مختلط"
  }
,
  {
    id: 3330014,
    name: "زبان تخصصي",
    code: "31_3330014",
    prof: "ساداتي سيدحسين",
    units: 2,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس ۲۰۱"}
    ],
    examDate: "1404/11/04 13:30-16:30",
    department: "مهندسی مکانیک",
    capacity: 32,
    gender: "مختلط"
  },
  {
    id: 3330039,
    name: "برنامه سازي كامپيوتر",
    code: "31_3330039",
    prof: "ترابي فرشاد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس ۲۰۲"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس ۲۰۲"}
    ],
    examDate: "1404/10/24 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 45,
    gender: "مختلط"
  },
  {
    id: 3330039,
    name: "برنامه سازي كامپيوتر",
    code: "32_3330039",
    prof: "ستاري اميرمحمد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس ۳۰۵"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس ۳۰۵"}
    ],
    examDate: "1404/10/24 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 45,
    gender: "مختلط"
  },
  {
    id: 3330040,
    name: "محاسبات عددي",
    code: "31_3330040",
    prof: "رسولي آيسا",
    units: 2,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "كلاس ۲۰۶"}
    ],
    examDate: "1404/11/01 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 3330040,
    name: "محاسبات عددي",
    code: "32_3330040",
    prof: "ساداتي سيدحسين",
    units: 2,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "كلاس ۲۰۷"}
    ],
    examDate: "1404/11/01 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  }
,
{
    id: 3330041,
    name: "مباني مهندسي برق ۱",
    code: "31_3330041",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس ۲۰۶"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس ۲۰۶"}
    ],
    examDate: "1404/11/05 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 46,
    gender: "مختلط"
  },
  {
    id: 3330041,
    name: "مباني مهندسي برق ۱",
    code: "32_3330041",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس ۲۰۷"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس ۲۰۷"}
    ],
    examDate: "1404/11/05 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 45,
    gender: "مختلط"
  },
  {
    id: 3330042,
    name: "مباني مهندسي برق ۲",
    code: "31_3330042",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "كلاس ۲۰۶"},
      {days: [4], start: 16.5, duration: 1.5, location: "كلاس ۲۰۶"}
    ],
    examDate: "1404/11/05 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 26,
    gender: "مختلط"
  },
  {
    id: 3330043,
    name: "آز مباني مهندسي برق",
    code: "32_3330043",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 15, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 9,
    gender: "مختلط"
  },
  {
    id: 3330052,
    name: "رباتيك مقدماتي وآزمايشگاه",
    code: "31_3330052",
    prof: "نجفي اردكاني علي",
    units: 3,
    sessions: [
      {days: [1], start: 16.5, duration: 1.5, location: "كلاس ۲۰۱"},
      {days: [3], start: 16.5, duration: 1.5, location: "كلاس ۲۰۱"}
    ],
    examDate: "1404/10/30 13:30-16:30",
    department: "مهندسی مکانیک",
    capacity: 32,
    gender: "مختلط"
  },
  {
    id: 3330056,
    name: "ديناميك خودرو",
    code: "31_3330056",
    prof: "آزادي شهرام",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس ۳۰۸"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس ۳۰۸"}
    ],
    examDate: "1404/11/06 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 30,
    gender: "مختلط"
  },
  {
    id: 3330062,
    name: "روش اجزائ محدودمقدماتي",
    code: "31_3330062",
    prof: "هدايتي رضا",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "كلاس ۲۰۱"},
      {days: [3], start: 15, duration: 1.5, location: "كلاس ۲۰۱"}
    ],
    examDate: "1404/10/20 13:30-16:30",
    department: "مهندسی مکانیک",
    capacity: 32,
    gender: "مختلط"
  },
  {
    id: 3330065,
    name: "انرژي هاي نو",
    code: "31_3330065",
    prof: "ترابي فرشاد",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس ۲۰۷"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس ۲۰۷"}
    ],
    examDate: "1404/10/21 13:30-16:30",
    department: "مهندسی مکانیک",
    capacity: 32,
    gender: "مختلط"
  },
  {
    id: 3330077,
    name: "محركه هاي نا متداول",
    code: "31_3330077",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "كلاس ۲۰۵"}
    ],
    examDate: "1404/10/22 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 32,
    gender: "مختلط"
  },
  {
    id: 3330090,
    name: "بهينه سازي سيستم هاي انرژي",
    code: "31_3330090",
    prof: "شربتدار مهكامه",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس ۲۰۶"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس ۲۰۶"}
    ],
    examDate: "1404/11/06 13:30-16:30",
    department: "مهندسی مکانیک",
    capacity: 30,
    gender: "مختلط"
  },
  {
    id: 3330091,
    name: "مكانيك سيالات زيستي",
    code: "31_3330091",
    prof: "ستاري اميرمحمد",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس ۲۰۵"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس ۲۰۵"}
    ],
    examDate: "1404/10/24 13:30-16:30",
    department: "مهندسی مکانیک",
    capacity: 32,
    gender: "مختلط"
  },
  {
    id: 3330093,
    name: "سيستم مديريت تاسيسات وانرژي درساختمان",
    code: "31_3330093",
    prof: "شهيديان آزاده",
    units: 2,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 30,
    gender: "مختلط"
  },
  {
    id: 3330103,
    name: "رياضيات مهندسي",
    code: "31_3330103",
    prof: "رسولي آيسa",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس ۲۰۵"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس ۲۰۵"}
    ],
    examDate: "1404/11/05 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 47,
    gender: "مختلط"
  },
  {
    id: 3330103,
    name: "رياضيات مهندسي",
    code: "32_3330103",
    prof: "هدايتي رضا",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس ۲۰۶"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس ۲۰۶"}
    ],
    examDate: "1404/11/05 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 45,
    gender: "مختلط"
  },
  {
    id: 3330131,
    name: "ترموديناميك ۱",
    code: "31_3330131",
    prof: "قاسمي مجيد",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس ۳۰۵"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس ۳۰۵"}
    ],
    examDate: "1404/10/21 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 30,
    gender: "مختلط"
  },
  {
    id: 3330132,
    name: "ترموديناميك ۲",
    code: "31_3330132",
    prof: "بازارگان مجيد",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس ۳۰۶"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس ۳۰۶"}
    ],
    examDate: "1404/10/28 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 3330132,
    name: "ترموديناميك ۲",
    code: "32_3330132",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس ۳۰۷"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس ۳۰۷"}
    ],
    examDate: "1404/10/28 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 3330133,
    name: "آزترموديناميك",
    code: "31_3330133",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330133,
    name: "آزترموديناميك",
    code: "32_3330133",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
      {days: [2], start: 9, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330133,
    name: "آزترموديناميك",
    code: "33_3330133",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیك",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330133,
    name: "آزترموديناميك",
    code: "34_3330133",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330133,
    name: "آزترموديناميك",
    code: "35_3330133",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
      {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330133,
    name: "آزترموديناميك",
    code: "36_3330133",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330134,
    name: "مكانيك سيالات ۱",
    code: "31_3330134",
    prof: "كارمزدي محسن",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس ۳۰۲"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس ۳۰۲"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 3330135,
    name: "مكانيك سيالات ۲",
    code: "31_3330135",
    prof: "مجري افسانه",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس ۲۰۵"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس ۲۰۵"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 3330135,
    name: "مكانيك سيالات ۲",
    code: "32_3330135",
    prof: "شمس مهرزاد",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس ۲۰۶"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس ۲۰۶"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 3330136,
    name: "آزمكانيك سيالات",
    code: "31_3330136",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
      {days: [4], start: 9, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 9,
    gender: "مختلط"
  },
  {
    id: 3330136,
    name: "آزمكانيك سيالات",
    code: "32_3330136",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 9,
    gender: "مختلط"
  },
  {
    id: 3330136,
    name: "آزمكانيك سيالات",
    code: "33_3330136",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 9,
    gender: "مختلط"
  },
  {
    id: 3330136,
    name: "آزمكانيك سيالات",
    code: "34_3330136",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
      {days: [5], start: 9, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 9,
    gender: "مختلط"
  },
  {
    id: 3330136,
    name: "آزمكانيك سيالات",
    code: "35_3330136",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 9,
    gender: "مختلط"
  },
  {
    id: 3330136,
    name: "آزمكانيك سيالات",
    code: "36_3330136",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 9,
    gender: "مختلط"
  },
  {
    id: 3330137,
    name: "انتقال حرارت ۱",
    code: "31_3330137",
    prof: "پوربگيان برزي مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس ۲۰۱"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس ۲۰۱"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 27,
    gender: "مختلط"
  },
  {
    id: 3330137,
    name: "انتقال حرارت ۱",
    code: "32_3330137",
    prof: "آقانجفي سيروس",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس ۲۰۵"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس ۲۰۵"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 27,
    gender: "مختلط"
  },
  {
    id: 3330139,
    name: "موتورهاي احتراق داخلي",
    code: "31_3330139",
    prof: "شامخي امير حسين",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس ۲۰۱"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس ۲۰۱"}
    ],
    examDate: "1404/10/28 13:30-16:30",
    department: "مهندسی مکانیک",
    capacity: 32,
    gender: "مختلط"
  },
  {
    id: 3330141,
    name: "كارگاه اتومكانيك",
    code: "31_3330141",
    prof: "غفاري ملكي سيدمجتبي",
    units: 1,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كارگاه"},
      {days: [1], start: 9, duration: 1.5, location: "كارگاه"},
      {days: [1], start: 10.5, duration: 2, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3330141,
    name: "كارگاه اتومكانيك",
    code: "32_3330141",
    prof: "غفاري ملكي سيدمجتبي",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كارگاه"},
      {days: [1], start: 15, duration: 1.5, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3330141,
    name: "كارگاه اتومكانيك",
    code: "33_3330141",
    prof: "غفاري ملكي سيدمجتبي",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كارگاه"},
      {days: [2], start: 9, duration: 1.5, location: "كارگاه"},
      {days: [2], start: 10.5, duration: 2, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3330141,
    name: "كارگاه اتومكانيك",
    code: "34_3330141",
    prof: "غفاري ملكي سيدمجتبi",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كارگاه"},
      {days: [2], start: 15, duration: 1.5, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3330141,
    name: "كارگاه اتومكانيك",
    code: "35_3330141",
    prof: "غفاري ملكي سيدمجتبي",
    units: 1,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "كارگاه"},
      {days: [3], start: 9, duration: 1.5, location: "كارگاه"},
      {days: [3], start: 10.5, duration: 2, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3330141,
    name: "كارگاه اتومكانيك",
    code: "36_3330141",
    prof: "غفاري ملكي سيدمجتبي",
    units: 1,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "كارگاه"},
      {days: [4], start: 9, duration: 1.5, location: "كارگاه"},
      {days: [4], start: 10.5, duration: 2, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3330141,
    name: "كارگاه اتومكانيك",
    code: "37_3330141",
    prof: "غفاري ملكي سيدمجتبي",
    units: 1,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "كارگاه"},
      {days: [4], start: 9, duration: 1.5, location: "كارگاه"},
      {days: [4], start: 10.5, duration: 2, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3330141,
    name: "كارگاه اتومكانيك",
    code: "38_3330141",
    prof: "غفاري ملكي سيدمجتبي",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "كارگاه"},
      {days: [5], start: 15, duration: 1.5, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3330144,
    name: "انتقال حرارت 2",
    code: "31_3330144",
    prof: "آقانجفي سيروس",
    units: 2,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس ۳۰۲"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 32,
    gender: "مختلط"
  },
  {
    id: 3330147,
    name: "توربوماشين",
    code: "31_3330147",
    prof: "اشرفي زاده علي",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس ۲۰۱"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس ۲۰۱"}
    ],
    examDate: "1404/10/28 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 32,
    gender: "مختلط"
  },
  {
    id: 3330149,
    name: "نيروگاه حرارتي",
    code: "31_3330149",
    prof: "بهبهاني نيا سيد علي",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس ۲۰۷"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس ۲۰۷"}
    ],
    examDate: "1404/11/01 13:30-16:30",
    department: "مهندسی مکانیک",
    capacity: 32,
    gender: "مختلط"
  },
  {
    id: 3330152,
    name: "حرارت مركزي وتهويه مطبوع ۱",
    code: "31_3330152",
    prof: "صيادي حسين",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس ۲۰۱"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس ۲۰۱"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 32,
    gender: "مختلط"
  },
  {
    id: 3330171,
    name: "استاتيك",
    code: "31_3330171",
    prof: "هدايتي رضا",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس ۳۰۵"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس ۳۰۵"}
    ],
    examDate: "1404/10/29 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 3330172,
    name: "ديناميك",
    code: "31_3330172",
    prof: "موسويان سيد علي اكبر",
    units: 4,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس ۲۰۱"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس ۲۰۱"}
    ],
    examDate: "1404/10/29 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
  {
    id: 3330172,
    name: "دينамيك",
    code: "32_3330172",
    prof: "همائي نژاد محمد رضا",
    units: 4,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس ۲۰۵"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس ۲۰۵"}
    ],
    examDate: "1404/10/29 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
  {
    id: 3330174,
    name: "مقاومت مصالح ۱",
    code: "31_3330174",
    prof: "شاهاني امير رضا",
    units: 3,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "كلاس ۳۰۵"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس ۳۰۵"}
    ],
    examDate: "1404/10/21 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 39,
    gender: "مختلط"
  },
  {
    id: 3330175,
    name: "علم مواد",
    code: "31_3330175",
    prof: "قنادي صابر",
    units: 3,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "كلاس ۲۰۶"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس ۲۰۶"}
    ],
    examDate: "1404/10/22 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 3330177,
    name: "طراحي اجزائ۱",
    code: "31_3330177",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس ۲۰۶"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس ۲۰۶"}
    ],
    examDate: "1404/10/30 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 3330178,
    name: "طراحي اجزائ۲",
    code: "31_3330178",
    prof: "كارمزدي علي",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس ۲۰۱"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس ۲۰۱"}
    ],
    examDate: "1404/10/30 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 35,
    gender: "مختلط"
  },
  {
    id: 3330178,
    name: "طراحي اجزائ۲",
    code: "32_3330178",
    prof: "لساني علي",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس"}
    ],
    examDate: "1404/10/30 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 35,
    gender: "مختلط"
  },
  {
    id: 3330179,
    name: "مقاومت مصالح ۲",
    code: "31_3330179",
    prof: "قريشي سيد مجيد",
    units: 2,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "كلاس ۳۰۲"}
    ],
    examDate: "1404/10/21 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 3330179,
    name: "مقاومت مصالح ۲",
    code: "32_3330179",
    prof: "شرعيات محمد",
    units: 2,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "كلاس"}
    ],
    examDate: "1404/10/21 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 3330180,
    name: "آزمقاومت مصالح",
    code: "31_3330180",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330180,
    name: "آزمقاومت مصالح",
    code: "32_3330180",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330180,
    name: "آزمقاومت مصالح",
    code: "33_3330180",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330180,
    name: "آزمقاومت مصالح",
    code: "34_3330180",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330180,
    name: "آزمقاومت مصالح",
    code: "35_3330180",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330181,
    name: "ديناميك ماشين",
    code: "31_3330181",
    prof: "نحوي علي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس ۲۰۷"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس ۲۰۷"}
    ],
    examDate: "1404/10/29 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 3330182,
    name: "آز ديناميك ماشين و ارتعاشات",
    code: "31_3330182",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330182,
    name: "آز ديناميك ماشين و ارتعاشات",
    code: "32_3330182",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330182,
    name: "آز ديناميك ماشين و ارتعاشات",
    code: "33_3330182",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330182,
    name: "آز ديناميك ماشين و ارتعاشات",
    code: "34_3330182",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330182,
    name: "آز ديناميك ماشين و ارتعاشات",
    code: "35_3330182",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330183,
    name: "ارتعاشات مكانيكي",
    code: "31_3330183",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس ۲۰۶"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس ۲۰۶"}
    ],
    examDate: "1404/11/06 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 3330183,
    name: "ارتعاشات مكانيكي",
    code: "32_3330183",
    prof: "همائي نژاد محمد رضا",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس ۲۰۱"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس ۲۰۱"}
    ],
    examDate: "1404/11/06 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 3330184,
    name: "روشهاي توليدوكارگاه",
    code: "31_3330184",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس ۲۰۵"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس ۲۰۵"}
    ],
    examDate: "1404/10/24 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 32,
    gender: "مختلط"
  },
  {
    id: 3330185,
    name: "كنترل اتوماتيك",
    code: "31_3330185",
    prof: "ناصري فر ناصر",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس ۲۰۶"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس ۲۰۶"}
    ],
    examDate: "1404/11/04 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 20,
    gender: "مختلط"
  }
  ,

    {
    id: 3330185,
    name: "كنترل اتوماتيك",
    code: "32_3330185",
    prof: "موسويان سيد علي اكبر",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس ۲۰۱"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس ۲۰۱"}
    ],
    examDate: "1404/11/04 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
  {
    id: 3330186,
    name: "اندازه گيري وسيستم هاي كنترل",
    code: "31_3330186",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [2], start: 16.5, duration: 1.5, location: "كلاس ۲۰۷"}
    ],
    examDate: "1404/11/04 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 32,
    gender: "مختلط"
  },
  {
    id: 3330189,
    name: "كارگاه جوشكاري وورقكاري",
    code: "31_3330189",
    prof: "ابراهيمي هادي",
    units: 1,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كارگاه"},
      {days: [1], start: 9, duration: 1.5, location: "كارگاه"},
      {days: [1], start: 10.5, duration: 2, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330189,
    name: "كارگاه جوشكاري وورقكاري",
    code: "32_3330189",
    prof: "ابراهيمي هادي",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كارگاه"},
      {days: [2], start: 9, duration: 1.5, location: "كارگاه"},
      {days: [2], start: 10.5, duration: 2, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330189,
    name: "كارگاه جوشكاري وورقكاري",
    code: "33_3330189",
    prof: "ابراهيمي هادي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كارگاه"},
      {days: [2], start: 15, duration: 1.5, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330189,
    name: "كارگاه جوشكاري وورقكاري",
    code: "34_3330189",
    prof: "ابراهيمي هادي",
    units: 1,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "كارگاه"},
      {days: [3], start: 9, duration: 1.5, location: "كارگاه"},
      {days: [3], start: 10.5, duration: 2, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330189,
    name: "كارگاه جوشكاري وورقكاري",
    code: "35_3330189",
    prof: "ابراهيمي هادي",
    units: 1,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "كارگاه"},
      {days: [4], start: 9, duration: 1.5, location: "كارگاه"},
      {days: [4], start: 10.5, duration: 2, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330189,
    name: "كارگاه جوشكاري وورقكاري",
    code: "36_3330189",
    prof: "ابراهيمي هادي",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "كارگاه"},
      {days: [5], start: 15, duration: 1.5, location: " كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330191,
    name: "كارگاه ماشين ابزار",
    code: "31_3330191",
    prof: "حسني خندابي مرتضي",
    units: 1,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كارگاه"},
      {days: [1], start: 15, duration: 1.5, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  }
,
{
    id: 3330191,
    name: "كارگاه ماشين ابزار",
    code: "32_3330191",
    prof: "حسني خندابي مرتضي",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كارگاه"},
      {days: [2], start: 9, duration: 1.5, location: "كارگاه"},
      {days: [2], start: 10.5, duration: 2, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330191,
    name: "كارگاه ماشين ابزار",
    code: "33_3330191",
    prof: "حسني خندابي مرتضي",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كارگاه"},
      {days: [2], start: 15, duration: 1.5, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330191,
    name: "كارگاه ماشين ابزار",
    code: "34_3330191",
    prof: "حسني خندابي مرتضي",
    units: 1,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "كارگاه"},
      {days: [3], start: 9, duration: 1.5, location: "كارگاه"},
      {days: [3], start: 10.5, duration: 2, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330191,
    name: "كارگاه ماشين ابزار",
    code: "35_3330191",
    prof: "حسني خندابي مرتضي",
    units: 1,
    sessions: [
      {days: [3], start: 13.5, duration: 1.5, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330191,
    name: "كارگاه ماشين ابزار",
    code: "36_3330191",
    prof: "حسني خندابي مرتضي",
    units: 1,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "كارگاه"},
      {days: [4], start: 9, duration: 1.5, location: "كارگاه"},
      {days: [4], start: 10.5, duration: 2, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330191,
    name: "كارگاه ماشين ابزار",
    code: "37_3330191",
    prof: "حسني خندابي مرتضي",
    units: 1,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "كارگاه"},
      {days: [4], start: 15, duration: 1.5, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330191,
    name: "كارگاه ماشين ابزار",
    code: "38_3330191",
    prof: "حسني خندابي مرتضي",
    units: 1,
    sessions: [
      {days: [5], start: 7.5, duration: 1.5, location: "كارگاه"},
      {days: [5], start: 9, duration: 1.5, location: "كارگاه"},
      {days: [5], start: 10.5, duration: 2, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330191,
    name: "كارگاه ماشين ابزار",
    code: "39_3330191",
    prof: "حسني خندابي مرتضي",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "كارگاه"},
      {days: [5], start: 15, duration: 1.5, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 3330193,
    name: "روشهاي طراحي مهندسي",
    code: "31_3330193",
    prof: "كازروني مهرداد",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس ۲۰۵"}
    ],
    examDate: "1404/10/22 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 32,
    gender: "مختلط"
  }
,
{
    id: 3330227,
    name: "ديناميك",
    code: "32_3330227",
    prof: "همائي نژاد محمد رضا",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس ۲۰۵"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس ۲۰۵"}
    ],
    examDate: "1404/10/29 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
  {
    id: 3330228,
    name: "مباني مهندسي برق",
    code: "31_3330228",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس ۲۰۶"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس ۲۰۶"}
    ],
    examDate: "1404/11/05 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
  {
    id: 3330228,
    name: "مباني مهندسي برق",
    code: "32_3330228",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس ۲۰۷"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس ۲۰۷"}
    ],
    examDate: "1404/11/05 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
  {
    id: 3330229,
    name: "هوش مصنوعي و تحول ديجيتال",
    code: "31_3330229",
    prof: "كازروني مهرداد",
    units: 2,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "كلاس ۲۰۴"}
    ],
    examDate: "1404/10/24 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 0,
    gender: "مختلط"
  },
  {
    id: 3331001,
    name: "مباني انرژي هاي تجديد پذير",
    code: "31_3331001",
    prof: "اشرفي زاده علي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس ۳۰۱"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس ۳۰۱"}
    ],
    examDate: "1404/10/28 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3331059,
    name: "رياضيات پيشرفته",
    code: "31_3331059",
    prof: "كارمزدي محسن",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس ۳۰۱"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس ۳۰۱"}
    ],
    examDate: "1404/11/06 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3331063,
    name: "ترموديناميك پيشرفته",
    code: "31_3331063",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس ۳۰۲"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس ۳۰۲"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "mokhtalet"
  },
  {
    id: 3331065,
    name: "انتقال حرارت پيشرفته جابجاي",
    code: "31_3331065",
    prof: "قاسمي مجيد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس ۳۰۱"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس ۳۰۱"}
    ],
    examDate: "1404/11/04 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3331066,
    name: "انتقال حرارت پيشرفته تشعشع",
    code: "31_3331066",
    prof: "آقانجفي سيروس",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس ۲۰۷"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس ۲۰۷"}
    ],
    examDate: "1404/10/28 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3331068,
    name: "مكانيك سيالات پيشرفته",
    code: "31_3331068",
    prof: "مجري افسانه",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس ۳۰۱"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس ۳۰۱"}
    ],
    examDate: "1404/10/21 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3331071,
    name: "لايه هاي مرزي ۱",
    code: "31_3331071",
    prof: "شمس مهرزاد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس ۳۰۲"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس ۳۰۲"}
    ],
    examDate: "1404/11/04 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3331076,
    name: "ديناميك سيالات محاسباتي ۱",
    code: "31_3331076",
    prof: "پوربگيان برزي مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس ۳۰۱"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس ۳۰۱"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3331147,
    name: "نانو سيال- ميكرو و نانوفلويديك",
    code: "31_3331147",
    prof: "شهيديان آزاده",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس ۳۰۶"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس ۳۰۶"}
    ],
    examDate: "1404/10/30 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3333104,
    name: "رياضيات پيشرفته ۱",
    code: "34_3333104",
    prof: "شاهاني امير رضا",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس ۳۰۱"},
      {days: [3], start: 7.5, duration: 1.5, location: "كلاس ۳۰۱"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3333106,
    name: "مكانيك محيط پيوسته",
    code: "33_3333106",
    prof: "شahani amir reza",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس ۳۰۱"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس ۳۰۱"}
    ],
    examDate: "1404/11/01 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3333133,
    name: "ديناميك پيشرفته",
    code: "33_3333133",
    prof: "موسويان سيد علي اكبر",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس ۳۰۱"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس ۳۰۱"}
    ],
    examDate: "1404/10/24 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3333136,
    name: "ارتعاشات پيشرفته غيرخطي",
    code: "33_3333136",
    prof: "همائي نژاد محمد رضا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس ۳۰۸"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس ۳۰۸"}
    ],
    examDate: "1404/11/05 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  }
,
{
    id: 3333137,
    name: "ارتعاشات پيشرفته-ارتعاشات سيستم هاي ممتد",
    code: "33_3333137",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس ۳۰۶"},
      {days: [3], start: 7.5, duration: 1.5, location: "كلاس ۳۰۶"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3333145,
    name: "شبكه هاي عصبي",
    code: "33_3333145",
    prof: "ساداتي سيدحسين",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس ۳۰۷"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس ۳۰۷"}
    ],
    examDate: "1404/11/05 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3333146,
    name: "ارتعاشات پيشرفته-ارتعاشات اتفاقي",
    code: "33_3333146",
    prof: "همائي نژاد محمد رضا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس ۳۰۷"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس ۳۰۷"}
    ],
    examDate: "1404/10/30 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3333147,
    name: "سيستمهاي كنترل پيشرفته ۱",
    code: "33_3333147",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس ۳۰۲"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس ۳۰۲"}
    ],
    examDate: "1404/10/22 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3333161,
    name: "مواد مركب",
    code: "33_3333161",
    prof: "خليلي سيد محمدرضا",
    units: 3,
    sessions: [
      {days: [3], start: 16.5, duration: 1.5, location: "كلاس ۳۰۱"},
      {days: [5], start: 16.5, duration: 1.5, location: "كلاس ۳۰۱"}
    ],
    examDate: "1404/10/28 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3333250,
    name: "ميكرو الكترومكانيك",
    code: "33_3333250",
    prof: "ناصري فر ناصر",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "كلاس ۳۰۶"},
      {days: [3], start: 15, duration: 1.5, location: "كلاس ۳۰۶"}
    ],
    examDate: "1404/11/04 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3339026,
    name: "سيستم كنترل وآزمايش ماشين هاي ابزار",
    code: "39_3339026",
    prof: "وحدتي مهرداد",
    units: 3,
    sessions: [
      {days: [3], start: 15, duration: 1.5, location: "كلاس ۳۰۱"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس ۳۰۱"}
    ],
    examDate: "1404/11/06 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3339029,
    name: "فرايندهاي الكتروفيزيكي",
    code: "39_3339029",
    prof: "قريشي سيد مجيد",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس ۳۰۶"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس ۳۰۶"}
    ],
    examDate: "1404/10/24 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3339030,
    name: "آناليز شكل دادن فلزات",
    code: "39_3339030",
    prof: "جلالي آقچاي عبدالحسين",
    units: 3,
    sessions: [
      {days: [4], start: 9, duration: 1.5, location: "كلاس ۳۰۸"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس ۳۰۸"}
    ],
    examDate: "1404/11/04 13:30-16:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3339041,
    name: "اتوماسيون در توليد",
    code: "39_3339041",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "كلاس ۳۰۱"},
      {days: [5], start: 15, duration: 1.5, location: "كلاس ۳۰۱"}
    ],
    examDate: "1404/10/29 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3339043,
    name: "هوش مصنوعي وسيستم هاي خبره",
    code: "39_3339043",
    prof: "كازروني مهرداد",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس ۳۰۶"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس ۳۰۶"}
    ],
    examDate: "1404/11/01 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3339057,
    name: "نمونه سازي سريع",
    code: "39_3339057",
    prof: "نخودچي سهيل",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس ۳۰۸"},
      {days: [3], start: 7.5, duration: 1.5, location: "كلاس ۳۰۸"}
    ],
    examDate: "1404/10/21 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3368003,
    name: "مباني بيومكانيك",
    code: "68_3368003",
    prof: "رسولي آيسا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "۱۰۷"},
      {days: [4], start: 9, duration: 1.5, location: "۱۰۷"}
    ],
    examDate: "1404/10/30 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3368004,
    name: "ابزار دقيق در سيستم هاي زيستي",
    code: "68_3368004",
    prof: "شربتدار مهكامه",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "۱۰۷"},
      {days: [5], start: 10.5, duration: 2, location: "۱۰۷"}
    ],
    examDate: "1404/10/24 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3368015,
    name: "بيومكانيك شغلي",
    code: "68_3368015",
    prof: "لساني علي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "۱۰۷"},
      {days: [5], start: 13.5, duration: 1.5, location: "۱۰۷"}
    ],
    examDate: "1404/10/21 13:30-16:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3397005,
    name: "رياضيات مهندسي پيشرفته",
    code: "97_3397005",
    prof: "شرعيات محمد",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس ۳۰۶"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس ۳۰۶"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3397006,
    name: "ديناميك خودرووآز",
    code: "97_3397006",
    prof: "كاظمي رضا",
    units: 3,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "كلاس ۳۰۷"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس ۳۰۷"}
    ],
    examDate: "1404/11/05 13:30-16:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3397008,
    name: "كاربرد كنترل پيشرفته در خودرو",
    code: "97_3397008",
    prof: "شامخي امير حسين",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس ۲۰۹"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس ۲۰۹"}
    ],
    examDate: "1404/11/01 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3397021,
    name: "المانهاي محدود",
    code: "97_3397021",
    prof: "شرعيات محمد",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس ۳۰۷"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس ۳۰۷"}
    ],
    examDate: "1404/10/22 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3397029,
    name: "طراحي موتورهاي پيستوني",
    code: "97_3397029",
    prof: "شامخي امير حسين",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس ۲۰۹"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس ۲۰۹"}
    ],
    examDate: "1404/10/29 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3397053,
    name: "كنترل پيشرفته ۲",
    code: "97_3397053",
    prof: "آزادي شهرام",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس ۳۰۶"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس ۳۰۶"}
    ],
    examDate: "1404/10/24 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3398004,
    name: "مباني اقتصاد",
    code: "98_3398004",
    prof: "زماني پدرام مونا",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس ۳۰۶"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس ۳۰۶"}
    ],
    examDate: "1404/10/29 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3398005,
    name: "مهندسي فرايند",
    code: "98_3398005",
    prof: "زماني پدرام مونا",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "سمعي بصري كارشناسي"},
      {days: [4], start: 9, duration: 1.5, location: "سمعي بصري كارشناسي"}
    ],
    examDate: "1404/11/01 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3398017,
    name: "بهينه سازي جريان اگزژي",
    code: "98_3398017",
    prof: "صيadi حسين",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس ۳۰۶"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس ۳۰۶"}
    ],
    examDate: "1404/11/06 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3398018,
    name: "تكنولوژي Pinch",
    code: "98_3398018",
    prof: "عميد پور مجيد",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس ۳۰۸"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس ۳۰۸"}
    ],
    examDate: "1404/10/22 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3398027,
    name: "تكنولوژي نيروگاههاي حرارتي خورشيدي وهيدروژن خورشيدي",
    code: "98_3398027",
    prof: "بهبهاني نيا سيد علي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس ۳۰۷"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس ۳۰۷"}
    ],
    examDate: "1404/10/28 13:30-16:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 3398071,
    name: "مباني و مدلسازي باتري هاي الكتروشيميايي",
    code: "98_3398071",
    prof: "ترابي فرشاد",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس ۳۰۶"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس ۳۰۶"}
    ],
    examDate: "1404/11/04 08:00-10:30",
    department: "مهندسی مکانیک",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 4210010,
    name: "فيزيك عمومي ۳",
    code: "41_4210010",
    prof: "نصيري راد امين",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس ۲۱۲"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس ۲۱۲"}
    ],
    examDate: "1404/11/05 10:30-12:30",
    department: "فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
  {
    id: 4210011,
    name: "فيزيك عمومي ۴",
    code: "41_4210011",
    prof: "افشاري محمد مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس ۲۱۲"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس ۲۱۲"}
    ],
    examDate: "1404/10/29 10:30-12:30",
    department: "فیزیک",
    capacity: 50,
    gender: "مختلط"
  },
  {
    id: 4210012,
    name: "ترموديناميك و مكانيك آماري ۱",
    code: "41_4210012",
    prof: "نوروزي فر احسان",
    units: 3,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس ۲۰۲"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس ۲۰۲"}
    ],
    examDate: "1404/10/28 10:30-12:30",
    department: "فیزیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 4210013,
    name: "الكترومغناطيس ۱",
    code: "41_4210013",
    prof: "حمزه پور حسين",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس ۲۰۲"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس ۲۰۲"}
    ],
    examDate: "1404/10/22 10:30-12:30",
    department: "فیزik",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 4210015,
    name: "آز فيزيك ۴",
    code: "42_4210015",
    prof: "مسعودي سيد فرهاد",
    units: 2,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
      {days: [2], start: 9, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
  {
    id: 4210015,
    name: "آز فيزيك ۴",
    code: "43_4210015",
    prof: "مسعودي سيد فرهاد",
    units: 2,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
      {days: [4], start: 9, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "فیزیک",
    capacity: 8,
    gender: "مختلط"
  },
  {
    id: 4210017,
    name: "مكانيك كوانتمي ۱",
    code: "41_4210017",
    prof: "هدايتي خليل آباد هادي",
    units: 3,
    sessions: [
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس ۲۰۲"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس ۲۱۲"}
    ],
    examDate: "1404/11/06 10:30-12:30",
    department: "فیزیک",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 4210029,
    name: "انرژي هاي نو",
    code: "41_4210029",
    prof: "مشحون سارا",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس ۲۰۲"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس ۲۰۲"}
    ],
    examDate: "1404/11/04 10:30-12:30",
    department: "فیزیک",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 4210039,
    name: "فيزيك عمومي ۱",
    code: "41_4210039",
    prof: "رادين مهدي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس ۲۱۲"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس ۲۱۲"}
    ],
    examDate: "1404/10/24 10:30-12:30",
    department: "فیزیک",
    capacity: 60,
    gender: "مختلط"
  },
  {
    id: 4210043,
    name: "طيف سنجي",
    code: "41_4210043",
    prof: "رضايي فاطمه",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "حياط دانشكده ۰۱"},
      {days: [4], start: 10.5, duration: 2, location: "حياط دانشكده ۰۱"}
    ],
    examDate: "1404/10/20 10:30-12:30",
    department: "فیزیک",
    capacity: 25,
    gender: "مختلط"
  }
,
{
  id: 4210070,
  name: "مکانيک آماري پيشرفته ۱",
  code: "41_4210070",
  prof: "مشحون سارا",
  units: 3,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "کلاس ۲۱۱"},
    {days: [3], start: 9, duration: 1.5, location: "کلاس ۲۱۱"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۰ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 30,
  gender: "مختلط"
},
{
  id: 4210071,
  name: "مکانيک کوانتوم پيشرفته ۱",
  code: "41_4210071",
  prof: "افضلي رضا",
  units: 3,
  sessions: [
    {days: [2], start: 15, duration: 1.5, location: "کلاس ۲۱۱"},
    {days: [4], start: 15, duration: 1.5, location: "کلاس ۲۱۱"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۱ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 30,
  gender: "مختلط"
},
{
  id: 4210075,
  name: "اپتيک",
  code: "41_4210075",
  prof: "افشاري محمد مهدي",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس ۲۰۲"},
    {days: [4], start: 10.5, duration: 2, location: "класс ۲۰۲"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۱ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 4210075,
  name: "اپتيک",
  code: "41_4210075",
  prof: "مقدسين هدي",
  units: 3,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "کلاس ۲۱۲"},
    {days: [4], start: 13.5, duration: 1.5, location: "کلاس ۲۱۲"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۱ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 4210076,
  name: "يادگيري ماشيني در فيزيک",
  code: "41_4210076",
  prof: "تقي زاده فيروزجائي جواد",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "حياط دانشكده ۰۱"},
    {days: [4], start: 9, duration: 1.5, location: "حياط دانشكده ۰۱"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 25,
  gender: "مختلط"
},
{
  id: 4210085,
  name: "مکانيک تحليلي ۱",
  code: "41_4210085",
  prof: "انصاري فرد محمد",
  units: 3,
  sessions: [
    {days: [1], start: 15, duration: 1.5, location: "کلاس ۲۱۲"},
    {days: [3], start: 15, duration: 1.5, location: "کلاس ۲۱۲"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 50,
  gender: "مختلط"
},
{
  id: 4210086,
  name: "رياضي فيزيک ۱",
  code: "41_4210086",
  prof: "مسعودي سيد فرهاد",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس ۲۱۲"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس ۲۱۲"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۰ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 50,
  gender: "مختلط"
},
{
  id: 4210089,
  name: "الکترونيک ۱",
  code: "41_4210089",
  prof: "رضايي فاطمه",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس ۲۱۱"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس ۲۱۱"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 25,
  gender: "مختلط"
},
{
  id: 4210091,
  name: "آزفيزيک پايه ۳",
  code: "41_4210091",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 7.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210091,
  name: "آزفيزيک پايه ۳",
  code: "41_4210091",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210091,
  name: "آزفيزيک پايه ۳",
  code: "41_4210091",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210091,
  name: "آزفيزيک پايه ۳",
  code: "41_4210091",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210091,
  name: "آزفيزيک پايه ۳",
  code: "41_4210091",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [3], start: 7.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210091,
  name: "آزفيزيک پايه ۳",
  code: "41_4210091",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210091,
  name: "آزفيزيک پايه ۳",
  code: "41_4210091",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210097,
  name: "آزاپتيک",
  code: "41_4210097",
  prof: "حمزه پور حسين",
  units: 2,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210097,
  name: "آزاپتيک",
  code: "41_4210097",
  prof: "حمزه پور حسين",
  units: 2,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210097,
  name: "آزاپتيک",
  code: "41_4210097",
  prof: "حمزه پور حسين",
  units: 2,
  sessions: [
    {days: [4], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},

{
  id: 4210113,
  name: "فيزيک ۱",
  code: "41_4210113",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی مکانیک",
  capacity: 70,
  gender: "مختلط"
},
{
  id: 4210113,
  name: "فيزيک ۱",
  code: "41_4210113",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی مکانیک",
  capacity: 70,
  gender: "مختلط"
},
{
  id: 4210113,
  name: "فيزيک ۱",
  code: "41_4210113",
  prof: "صمدپور محمود",
  units: 3,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "کلاس"},
    {days: [5], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "شیمی",
  capacity: 55,
  gender: "مختلط"
},
{
  id: 4210113,
  name: "فيزيک ۱",
  code: "41_4210113",
  prof: "واعظ زاده مجيد",
  units: 3,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی برق",
  capacity: 65,
  gender: "مختلط"
},
{
  id: 4210113,
  name: "فيزيک ۱",
  code: "41_4210113",
  prof: "واعظ زاده مجيد",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی برق",
  capacity: 65,
  gender: "مختلط"
},
{
  id: 4210113,
  name: "فيزيک ۱",
  code: "41_4210113",
  prof: "رادين مهدي",
  units: 3,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 13.5, duration: 1.5, location: "класс"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی برق",
  capacity: 65,
  gender: "مختلط"
},
{
  id: 4210113,
  name: "فيزيک ۱",
  code: "41_4210113",
  prof: "رادين مهدي",
  units: 3,
  sessions: [
    {days: [2], start: 15, duration: 1.5, location: "کلاس"},
    {days: [4], start: 15, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی برق",
  capacity: 65,
  gender: "مختلط"
},
{
  id: 4210113,
  name: "فيزيک ۱",
  code: "41_4210113",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی و علم مواد",
  capacity: 55,
  gender: "مختلط"
},
{
  id: 4210113,
  name: "فيزيک ۱",
  code: "41_4210113",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی عمران",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4210113,
  name: "فيزيک ۱",
  code: "41_4210113",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی عمران",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4210113,
  name: "فيزيک ۱",
  code: "41_4210113",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی عمران",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4210113,
  name: "فيزيک ۱",
  code: "41_4210113",
  prof: "حاتمي محمد محسن",
  units: 3,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "کلاس"},
    {days: [5], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی هوافضا",
  capacity: 45,
  gender: "مختلط"
},
{
  id: 4210113,
  name: "فيزيک ۱",
  code: "41_4210113",
  prof: "حاتمي محمد محسن",
  units: 3,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "کلاس"},
    {days: [5], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی هوافضا",
  capacity: 45,
  gender: "مختلط"
},
{
  id: 4210113,
  name: "فيزيک ۱",
  code: "41_4210113",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی صنایع",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4210113,
  name: "فيزيک ۱",
  code: "41_4210113",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی صنایع",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 7.5, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 9, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 10.5, duration: 2, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 13.5, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [3], start: 7.5, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 9, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 9, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210114,
  name: "آزفيزيک ۱",
  code: "41_4210114",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210115,
  name: "فيزيک ۲",
  code: "41_4210115",
  prof: "افضل زاده رضا",
  units: 3,
  sessions: [
    {days: [3], start: 7.5, duration: 1.5, location: "کلاس ۲۰۲"},
    {days: [5], start: 7.5, duration: 1.5, location: "کلاس ۲۰۲"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۸ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 50,
  gender: "مختلط"
},
{
  id: 4210115,
  name: "فيزيک ۲",
  code: "41_4210115",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۸ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی مکانیک",
  capacity: 50,
  gender: "مختلط"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی مکانیک",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی مکانیک",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی مکانیک",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيدグループ آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی مکانیک",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی مکانیک",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی مکانیک",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 10.5, duration: 2, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی مکانیک",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 10.5, duration: 2, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی مکانیک",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی و علم مواد",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی و علم مواد",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی و علم مواد",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی و علم مواد",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی و علم مواد",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی و علم مواد",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 10.5, duration: 2, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی و علم مواد",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210116,
  name: "آزفيزيک ۲",
  code: "41_4210116",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 10.5, duration: 2, location: "آزمايشگاه هاي دانشكده فيزيك"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی و علم مواد",
  capacity: 8,
  gender: "مرد"
},
{
  id: 4210122,
  name: "سمينار ۲",
  code: "41_4210122",
  prof: "اساتيد گروه آموزشي",
  units: 0,
  sessions: [],
  examDate: "تعیین نشده",
  department: "فیزیک",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4210128,
  name: "فيزيک مكانيک و حرارت",
  code: "41_4210128",
  prof: "ژوليده حقيقي محمد حسين",
  units: 3,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [3], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 55,
  gender: "مختلط"
},
{
  id: 4210130,
  name: "الکتروديناميک پيشرفته ۱",
  code: "41_4210130",
  prof: "نوروزي فر احسان",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس ۲۱۱"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس ۲۱۱"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۸ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 30,
  gender: "مختلط"
},
{
  id: 4210135,
  name: "بيوفيزيک",
  code: "41_4210135",
  prof: "نوروزي فر احسان",
  units: 3,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "کلاس ۲۰۲"},
    {days: [4], start: 13.5, duration: 1.5, location: "کلاس ۲۰۲"}
  ],
  examDate: "۱۴۰۴/۱۰/۳۰ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 25,
  gender: "مختلط"
},
{
  id: 4210136,
  name: "ديناميک غيرخطي و آشوب",
  code: "41_4210136",
  prof: "انصاري فرد محمد",
  units: 3,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "کلاس ۲۱۲"},
    {days: [3], start: 9, duration: 1.5, location: "کلاس ۲۱۲"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۱ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 25,
  gender: "مختلط"
},
{
  id: 4212137,
  name: "فيزيک محاسباتي",
  code: "41_4212137",
  prof: "حمزه پور حسين",
  units: 2,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "حياط دانشكده ۰۲"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 30,
  gender: "مختلط"
},
{
  id: 4212137,
  name: "فيزيک محاسباتي",
  code: "41_4212137",
  prof: "مسعودي سيد فرهاد",
  units: 2,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "کلاس ۲۰۶"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 4212154,
  name: "هواشناسي عمومي",
  code: "41_4212154",
  prof: "تقي زاده فيروزجائي جواد",
  units: 3,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "کلاس ۲۱۱"},
    {days: [4], start: 7.5, duration: 1.5, location: "کلاس ۲۱۱"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 25,
  gender: "مختلط"
},
{
  id: 4212160,
  name: "فيزيک حالت جامد پيشرفته ۱",
  code: "41_4212160",
  prof: "جعفري محمود",
  units: 3,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "کلاس ۲۱۱"},
    {days: [3], start: 10.5, duration: 2, location: "کلاس ۲۱۱"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 4212173,
  name: "ابررسانايي و کاربرد آن",
  code: "41_4212173",
  prof: "مشکوري مهدي",
  units: 3,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "کلاس ۲۱۱"},
    {days: [4], start: 13.5, duration: 1.5, location: "کلاس ۲۱۱"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۹ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 25,
  gender: "مختلط"
},
{
  id: 4212231,
  name: "فيزيک سطح پيشرفته ۱",
  code: "41_4212231",
  prof: "افضل زاده رضا",
  units: 3,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "کلاس ۲۰۶"},
    {days: [5], start: 9, duration: 1.5, location: "کلاس ۲۰۶"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 4214017,
  name: "فيزيک هسته اي پيشرفته ۱",
  code: "41_4214017",
  prof: "رسولي فاطمه سادات",
  units: 3,
  sessions: [
    {days: [5], start: 9, duration: 1.5, location: "کلاس ۲۰۲"},
    {days: [5], start: 10.5, duration: 2, location: "کلاس ۲۰۲"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۹ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 4218018,
  name: "گرانش ۱",
  code: "41_4218018",
  prof: "انصاري فرد محمد",
  units: 3,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "حياط دانشكده ۰۲"},
    {days: [3], start: 10.5, duration: 2, location: "حياط دانشكده ۰۲"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۵ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 4218021,
  name: "فيزيک پلاسما پيشرفته ۱",
  code: "41_4218021",
  prof: "حاتمي محمد محسن",
  units: 3,
  sessions: [
    {days: [1], start: 13.5, duration: 1.5, location: "کلاس ۲۰۶"},
    {days: [5], start: 13.5, duration: 1.5, location: "کلاس ۲۰۶"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۵ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 4218027,
  name: "اختر فيزيک پيشرفته ۲",
  code: "41_4218027",
  prof: "نصيري راد امين",
  units: 3,
  sessions: [
    {days: [1], start: 15, duration: 1.5, location: "کلاس ۲۰۶"},
    {days: [3], start: 15, duration: 1.5, location: "کلاس ۲۰۶"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 4218031,
  name: "فيزيک بر هم کنش ليزر با پلاسما",
  code: "41_4218031",
  prof: "مقدسين هدي",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس ۲۰۶"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس ۲۰۶"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 4218032,
  name: "حالت جامد پيشرفته",
  code: "41_4218032",
  prof: "مشکوري مهدي",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس ۲۰۶"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس ۲۰۶"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 4218034,
  name: "روش هاي آناليز نانو ساختارها",
  code: "41_4218034",
  prof: "صمدپور محمود",
  units: 3,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "کلاس ۲۰۶"},
    {days: [5], start: 10.5, duration: 2, location: "کلاس ۲۰۶"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4812008,
  name: "شيمي صنعتي ۱",
  code: "41_4812008",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [5], start: 13.5, duration: 1.5, location: "کلاس ۲۰۹"},
    {days: [5], start: 15, duration: 1.5, location: "کلاس ۲۰۹"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۸ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4812016,
  name: "شيمي عمومي",
  code: "41_4812016",
  prof: "سعيد زاده اميري نصيبه",
  units: 3,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "کلاس ۲۰۹"},
    {days: [4], start: 13.5, duration: 1.5, location: "کلاس ۲۰۹"}
  ],
  examDate: "۱۴۰۴/۱۰/۳۰ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "فیزیک",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4812057,
  name: "دفاع از پيشنهاد رساله دکتري",
  code: "41_4812057",
  prof: "اساتيد گروه آموزشي",
  units: 0,
  sessions: [],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4812059,
  name: "امتحان جامع دکتري ۱",
  code: "41_4812059",
  prof: "اساتيد گروه آموزشي",
  units: 0,
  sessions: [],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4812068,
  name: "متون علمي شيمي",
  code: "41_4812068",
  prof: "يارداني سفيدي پريا",
  units: 2,
  sessions: [
    {days: [5], start: 9, duration: 1.5, location: "حياط دانشكده ۰۲"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "شیمی",
  capacity: 25,
  gender: "مختلط"
},
{
  id: 4812073,
  name: "شيمي تجزيه ۳",
  code: "41_4812073",
  prof: "روح الهي احمد",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "حياط دانشكده ۰۲"},
    {days: [4], start: 9, duration: 1.5, location: "حياط دانشكده ۰۲"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4812074,
  name: "آز شيمي تجزيه ۳",
  code: "41_4812074",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 4812074,
  name: "آز شيمي تجزيه ۳",
  code: "41_4812074",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 4812076,
  name: "شيمي معدني۳",
  code: "41_4812076",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [2], start: 16.5, duration: 1.5, location: "کلاس ۲۰۹"},
    {days: [4], start: 16.5, duration: 1.5, location: "کلاس ۲۰۹"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۰ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "شیمی",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4812077,
  name: "شناسائي ترکيبات آلي",
  code: "41_4812077",
  prof: "احمدي فرشته",
  units: 3,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "حياط دانشكده ۰۲"},
    {days: [4], start: 7.5, duration: 1.5, location: "حياط دانشكده ۰۲"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۵ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4812079,
  name: "آز شناسائي ترکيبات آلي",
  code: "41_4812079",
  prof: "خاکي زاده وحيد",
  units: 2,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "آزمايشگاه"},
    {days: [1], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 4812079,
  name: "آز شناسائي ترکيبات آلي",
  code: "41_4812079",
  prof: "خاکي زاده وحيد",
  units: 2,
  sessions: [
    {days: [1], start: 13.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [1], start: 15, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 4812082,
  name: "کارگاه عمومي با شيشه گري",
  code: "41_4812082",
  prof: "رسولي سيدرضا",
  units: 1,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 4812082,
  name: "کارگاه عمومي با شيشه گري",
  code: "41_4812082",
  prof: "رسولي سيدرضa",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 4812082,
  name: "کارگاه عمومي با شيشه گري",
  code: "41_4812082",
  prof: "رسولي سيدرضا",
  units: 1,
  sessions: [
    {days: [4], start: 9, duration: 1.5, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 4812082,
  name: "کارگاه عمومي با شيشه گري",
  code: "41_4812082",
  prof: "رسولي سيدرضا",
  units: 1,
  sessions: [
    {days: [4], start: 10.5, duration: 2, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 4812097,
  name: "الکتروشيمي کاربري",
  code: "41_4812097",
  prof: "يارداني سفيدي پريا",
  units: 3,
  sessions: [
    {days: [5], start: 10.5, duration: 2, location: "حياط دانشكده ۰۲"},
    {days: [5], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "شیمی",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4812100,
  name: "پايان نامه",
  code: "41_4812100",
  prof: "اساتيد گروه آموزشي",
  units: 6,
  sessions: [],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 100,
  gender: "مختلط"
},
{
  id: 4812107,
  name: "رساله دکتري",
  code: "41_4812107",
  prof: "اساتيد گروه آموزشي",
  units: 24,
  sessions: [],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 30,
  gender: "مختلط"
},
{
  id: 4814001,
  name: "شيمي آلي ۱",
  code: "41_4814001",
  prof: "بلالائي سعيد",
  units: 3,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "کلاس ۲۱۰"},
    {days: [3], start: 9, duration: 1.5, location: "کلاس ۲۱۰"},
    {days: [1], start: 7.5, duration: 1.5, location: "کلاس ۲۱۰"},
    {days: [3], start: 7.5, duration: 1.5, location: "کلاس ۲۱۰"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۰ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4814002,
  name: "آزشيمي آلي ۱",
  code: "41_4814002",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4814002,
  name: "آزشيمي آلي ۱",
  code: "41_4814002",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 15, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4814004,
  name: "آزشيمي آلي ۲",
  code: "41_4814004",
  prof: "احمدي فرشته",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4814004,
  name: "آزشيمي آلي ۲",
  code: "41_4814004",
  prof: "احمدي فرشته",
  units: 1,
  sessions: [
    {days: [4], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 4814005,
  name: "شيمي آلي ۳",
  code: "41_4814005",
  prof: "درويش فاطمه",
  units: 3,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "کلاس ۲۰۹"},
    {days: [3], start: 10.5, duration: 2, location: "کلاس ۲۰۹"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4814025,
  name: "طيف سنجي پيشرفته",
  code: "41_4814025",
  prof: "بلالائي سعيد",
  units: 3,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "کلاس ۲۰۸"},
    {days: [3], start: 10.5, duration: 2, location: "کلاس ۲۰۸"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۰ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 4814026,
  name: "حد واسط هاي فعال",
  code: "41_4814026",
  prof: "درويش فاطمه",
  units: 3,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "کلاس ۲۰۸"},
    {days: [3], start: 9, duration: 1.5, location: "کلاس ۲۰۸"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4814027,
  name: "شيمي آلي پيشرفته",
  code: "41_4814027",
  prof: "خاكي زاده وحيد",
  units: 3,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "کلاس ۲۰۸"},
    {days: [3], start: 7.5, duration: 1.5, location: "کلاس ۲۰۸"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۹ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 4814028,
  name: "شيمي ترکيبات هتروسيکل",
  code: "41_4814028",
  prof: "احمدي فرشته",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس ۲۱۰"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس ۲۱۰"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۵ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 4814033,
  name: "NMR پيشرفته",
  code: "41_4814033",
  prof: "بلالائي سعيد",
  units: 3,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "کلاس ۲۰۸"},
    {days: [3], start: 10.5, duration: 2, location: "کلاس ۲۰۸"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۰ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 5,
  gender: "مختلط"
},
{
  id: 4816002,
  name: "شيمي عمومي ۱",
  code: "41_4816002",
  prof: "جليلي سيف اله",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس ۲۰۹"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس ۲۰۹"}
  ],
  examDate: "۱۴۰۴/۱۰/۳۰ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "شیمی",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4816003,
  name: "آزشيمي عمومي ۱",
  code: "41_4816003",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4816003,
  name: "آزشيمي عمومي ۱",
  code: "41_4816003",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4816003,
  name: "آزشيمي عمومي ۱",
  code: "41_4816003",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 15, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4816003,
  name: "آزشيمي عمومي ۱",
  code: "41_4816003",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 16.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4816004,
  name: "شيمي معدني ۱",
  code: "41_4816004",
  prof: "رعيتي سعيد",
  units: 3,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "کلاس ۲۱۰"},
    {days: [3], start: 10.5, duration: 2, location: "کلاس ۲۱۰"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4816005,
  name: "آزشيمي معدني ۱",
  code: "41_4816005",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4816005,
  name: "آزشيمي معدني ۱",
  code: "41_4816005",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 15, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4816007,
  name: "آزشيمي معدني ۲",
  code: "41_4816007",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4816007,
  name: "آزشيمي معدني ۲",
  code: "41_4816007",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 15, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4816011,
  name: "بیوشیمی معدنی",
  code: "41_4816011",
  prof: "رعیتی سعید",
  units: 3,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "حیاط دانشکده ۰۲"},
    {days: [3], start: 9, duration: 1.5, location: "حیاط دانشکده ۰۲"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4816015,
  name: "شیمی معدنی پیشرفته",
  code: "41_4816015",
  prof: "حشمت پور فلورا",
  units: 3,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "کلاس ۲۰۵"},
    {days: [3], start: 10.5, duration: 2, location: "کلاس ۲۰۵"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۱ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4816019,
  name: "ساختار و واکنش پذیری ترکیبات آلی فلزی",
  code: "41_4816019",
  prof: "مؤمنی بدری زمان",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس ۲۰۸"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس ۲۰۸"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۸ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 4816020,
  name: "شیمی پلیمرهای معدنی",
  code: "41_4816020",
  prof: "حشمت پور فلورa",
  units: 3,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "کلاس ۲۰۵"},
    {days: [3], start: 9, duration: 1.5, location: "کلاس ۲۰۵"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۱ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 5,
  gender: "مختلط"
},
{
  id: 4816023,
  name: "شیمی فلزات واسطه",
  code: "41_4816023",
  prof: "مؤمنی بدری زمان",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس ۲۰۸"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس ۲۰۸"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۱ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 4818002,
  name: "شیمی فیزیک ۱",
  code: "41_4818002",
  prof: "جلیلی سيف اله",
  units: 3,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "کلاس ۲۰۹"},
    {days: [4], start: 7.5, duration: 1.5, location: "کلاس ۲۰۹"}
  ],
  examDate: "۱۴۰۴/۱۰/۳۰ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4818015,
  name: "شیمی فیزیک پیشرفته",
  code: "41_4818015",
  prof: "یاردانی سفیدی پریا",
  units: 3,
  sessions: [
    {days: [2], start: 15, duration: 1.5, location: "کلاس ۲۰۸"},
    {days: [5], start: 15, duration: 1.5, location: "کلاس ۲۰۸"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4818017,
  name: "ترمودینامیک آماری",
  code: "41_4818017",
  prof: "جلیلی سيف اله",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس ۲۰۹"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس ۲۰۹"}
  ],
  examDate: "۱۴۰۴/۱۰/۳۰ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4818059,
  name: "سینتیک و دینامیک شیمیایی",
  code: "41_4818059",
  prof: "یاردانی سفیدی پریa",
  units: 3,
  sessions: [
    {days: [2], start: 16.5, duration: 1.5, location: "کلاس ۲۰۸"},
    {days: [5], start: 16.5, duration: 1.5, location: "کلاس ۲۰۸"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۱ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4820003,
  name: "شيمي تجزيه ۱",
  code: "41_4820003",
  prof: "سعيد زاده اميري نصيبه",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 4820004,
  name: "آزشيمي تجزيه ۱",
  code: "41_4820004",
  prof: "سعيد زاده اميري نصيبه",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4820004,
  name: "آزشيمي تجزيه ۱",
  code: "41_4820004",
  prof: "سعيد زاده اميري نصيبه",
  units: 1,
  sessions: [
    {days: [4], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4820006,
  name: "آزشيمي تجزيه ۲",
  code: "41_4820006",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [
    {days: [1], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4820006,
  name: "آزشيمي تجزيه ۲",
  code: "41_4820006",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [
    {days: [1], start: 15, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4820008,
  name: "تجزيه مقادير بسيار كم",
  code: "41_4820008",
  prof: "صيدي شهرام",
  units: 3,
  sessions: [
    {days: [3], start: 16.5, duration: 1.5, location: "کلاس ۲۰۹"},
    {days: [5], start: 10.5, duration: 2, location: "کلاس ۲۰۹"}
  ],
  examDate: "۱۴۰۴/۱۰/۳۰ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "شیمی",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 4820010,
  name: "اصول تصفيه آب و پساب هاي صنعتي",
  code: "41_4820010",
  prof: "صيدي شهرام",
  units: 3,
  sessions: [
    {days: [5], start: 7.5, duration: 1.5, location: "کلاس ۲۰۹"},
    {days: [5], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "۱۴۰۴/۱۰/۳۰ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4820010,
  name: "اصول تصفيه آب و پساب هاي صنعتي",
  code: "41_4820010",
  prof: "صيدي شهرام",
  units: 3,
  sessions: [
    {days: [5], start: 7.5, duration: 1.5, location: "کلاس ۲۰۹"},
    {days: [5], start: 15, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "۱۴۰۴/۱۰/۳۰ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4820011,
  name: "شيمي تجزيه پيشرفته",
  code: "41_4820011",
  prof: "صيدي شهرام",
  units: 3,
  sessions: [
    {days: [3], start: 15, duration: 1.5, location: "کلاس ۲۰۹"},
    {days: [5], start: 9, duration: 1.5, location: "کلاس ۲۰۹"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4820021,
  name: "روشهاي نوين در آناليز دستگاهي",
  code: "41_4820021",
  prof: "روح الهي احمد",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "حیاط دانشکده ۰۲"},
    {days: [4], start: 10.5, duration: 2, location: "حیاط دانشکده ۰۲"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۰ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "شیمی",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 4820058,
  name: "طيف بيني اتمي تجزيه اي",
  code: "41_4820058",
  prof: "روح الهي احمد",
  units: 3,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "کلاس ۲۰۸"},
    {days: [4], start: 7.5, duration: 1.5, location: "کلاس ۲۰۸"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "شیمی",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 4822003,
  name: "شيمي دارويي ۱",
  code: "41_4822003",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [1], start: 15, duration: 1.5, location: "کلاس ۲۰۸"},
    {days: [1], start: 16.5, duration: 1.5, location: "کلاس ۲۰۸"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "شیمی",
  capacity: 15,
  gender: "مختلط"
},
// {
//   id: 7707039,
//   name: "رساله دكتري",
//   code: "21_7707039",
//   prof: "اساتيد گروه آموزشي",
//   units: 24,
//   sessions: [],
//   examDate: "تعیین نشده",
//   department: "مهندسی نقشه برداری",
//   capacity: 65,
//   gender: "مختلط"
// },
// {
//   id: 7707057,
//   name: "رساله دكتري پژوهشي",
//   code: "21_7707057",
//   prof: "اساتيد گروه آموزشي",
//   units: 30,
//   sessions: [],
//   examDate: "تعیین نشده",
//   department: "مهندسی نقشه برداری",
//   capacity: 5,
//   gender: "مختلط"
// },
// {
//   id: 7707061,
//   name: "دفاع مجدد از پيشنهاد رساله دكتري",
//   code: "21_7707061",
//   prof: "اساتيد گروه آموزشي",
//   units: 0,
//   sessions: [],
//   examDate: "تعیین نشده",
//   department: "مهندسی نقشه برداری",
//   capacity: 10,
//   gender: "مختلط"
// },
// {
//   id: 7707062,
//   name: "امتحان جامع دكتري ۱",
//   code: "21_7707062",
//   prof: "اساتيد گروه آموزشي",
//   units: 0,
//   sessions: [],
//   examDate: "تعیین نشده",
//   department: "مهندسی نقشه برداری",
//   capacity: 12,
//   gender: "مختلط"
// },
// {
//   id: 7707064,
//   name: "پايان نامه",
//   code: "21_7707064",
//   prof: "اساتيد گروه آموزشي",
//   units: 6,
//   sessions: [],
//   examDate: "تعیین نشده",
//   department: "مهندسی نقشه برداری",
//   capacity: 100,
//   gender: "مختلط"
// },
{
  id: 7707073,
  name: "نقشه برداري مسير و زيرزميني",
  code: "21_7707073",
  prof: "جزيرئيان ايرج",
  units: 3,
  sessions: [
    {days: [1], start: 13.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 7707074,
  name: "عمليات نقشه برداري مسير و زيرزميني",
  code: "21_7707074",
  prof: "صبايي ماسوله جواد",
  units: 1,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "کلاس"},
    {days: [3], start: 10.5, duration: 2, location: "کلاس"},
    {days: [3], start: 15, duration: 1.5, location: "کلاس"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی نقشه برداری",
  capacity: 17,
  gender: "مختلط"
},
{
  id: 7707074,
  name: "عمليات نقشه برداري مسير و زيرزميني",
  code: "21_7707074",
  prof: "صبايي ماسوله جواد",
  units: 1,
  sessions: [
    {days: [5], start: 9, duration: 1.5, location: "کلاس"},
    {days: [5], start: 10.5, duration: 2, location: "کلاس"},
    {days: [5], start: 13.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی نقشه برداری",
  capacity: 17,
  gender: "مختلط"
},
{
  id: 7707077,
  name: "جبر خطي",
  code: "21_7707077",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۴ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 7707079,
  name: "هندسه ديفرانسيل",
  code: "21_7707079",
  prof: "قائمی راد طاهره",
  units: 2,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 7707080,
  name: "مباني ژئودزي",
  code: "21_7707080",
  prof: "جزيرئيان ايرج",
  units: 3,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "کلاس"},
    {days: [5], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۸ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 7707082,
  name: "ژئودزي ماهواره اي و عمليات",
  code: "21_7707082",
  prof: "مشهدي حسينعلي مسعود",
  units: 3,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [3], start: 16.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۸ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 35,
  gender: "مختلط"
},
{
  id: 7707083,
  name: "ژئودزی فيزيكي",
  code: "21_7707083",
  prof: "عامريان يزدان",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس"},
    {days: [3], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۰ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 35,
  gender: "مختلط"
},
{
  id: 7707085,
  name: "نقشه برداري ساختمان و ثبتي و عمليات",
  code: "21_7707085",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "کلاس"},
    {days: [5], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۹ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 35,
  gender: "مختلط"
},
{
  id: 7707089,
  name: "فتوگرامتري تحليلي",
  code: "21_7707089",
  prof: "ولدان زوج محمد جواد",
  units: 3,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "کلاس"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۹ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 35,
  gender: "مختلط"
},
{
  id: 7707090,
  name: "كاربردهاي فتوگرامتري",
  code: "21_7707090",
  prof: "عبادي حميد",
  units: 3,
  sessions: [
    {days: [2], start: 15, duration: 1.5, location: "کلاس"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 35,
  gender: "مختلط"
},
{
  id: 7707092,
  name: "پردازش تصاوير رقومي",
  code: "21_7707092",
  prof: "خصالي الهه",
  units: 3,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۱ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 35,
  gender: "مختلط"
},
{
  id: 7707093,
  name: "سنجش از دور",
  code: "21_7707093",
  prof: "صاحبي محمودرضa",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 35,
  gender: "مختلط"
},
{
  id: 7707095,
  name: "پويشگرهاي ليزري و عمليات",
  code: "21_7707095",
  prof: "محمدزاده علي",
  units: 3,
  sessions: [
    {days: [3], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 7707096,
  name: "كارتوگرافي",
  code: "21_7707096",
  prof: "طالعي محمد",
  units: 2,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 7707097,
  name: "عمليات كارتوگرافي",
  code: "21_7707097",
  prof: "سيلاوي طلوع",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی نقشه برداری",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 7707097,
  name: "عمليات كارتوگرافي",
  code: "21_7707097",
  prof: "سيلاوي طلوع",
  units: 1,
  sessions: [
    {days: [2], start: 15, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی نقشه برداری",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 7707097,
  name: "عمليات کارتوگرافی",
  code: "21_7707097",
  prof: "سيلاوي طلوع",
  units: 1,
  sessions: [
    {days: [5], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی نقشه برداری",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 7707097,
  name: "عمليات كارتوگرافي",
  code: "21_7707097",
  prof: "سيلاوي طلوع",
  units: 1,
  sessions: [
    {days: [5], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی نقشه برداری",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 7707098,
  name: "سيستم اطلاعات مكاني",
  code: "21_7707098",
  prof: "كريمي محمد",
  units: 2,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۱ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 7707099,
  name: "عمليات سيستم اطلاعات مكاني",
  code: "21_7707099",
  prof: "سيلاوي طلوع",
  units: 1,
  sessions: [
    {days: [3], start: 15, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی نقشه برداری",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 7707099,
  name: "عمليات سيستم اطلاعات مكاني",
  code: "21_7707099",
  prof: "سيلاوي طلوع",
  units: 1,
  sessions: [
    {days: [3], start: 7.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی نقشه برداری",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 7707099,
  name: "عمليات سيستم اطلاعات مكاني",
  code: "21_7707099",
  prof: "سيلاوي طلوع",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی نقشه برداری",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 7707107,
  name: "آمايش سرزمين",
  code: "21_7707107",
  prof: "پيله فروشها پرستو",
  units: 2,
  sessions: [
    {days: [5], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۱ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7707108,
  name: "پايگاه داده",
  code: "21_7707108",
  prof: "مسگري محمد سعدي",
  units: 2,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۳۰ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7707109,
  name: "فناوری اطلاعات در مهندسی نقشه برداری",
  code: "21_7707109",
  prof: "قائمي‌راد طاهره",
  units: 2,
  sessions: [
    {days: [5], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۵ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7707110,
  name: "برنامه سازی کامپیوتر پیشرفته",
  code: "21_7707110",
  prof: "پيله فروشها پرستو",
  units: 2,
  sessions: [
    {days: [5], start: 13.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 18,
  gender: "مختلط"
},
{
  id: 7707110,
  name: "برنامه سازی کامپیوتر پیشرفته",
  code: "21_7707110",
  prof: "پیله‌فروشها پرستو",
  units: 2,
  sessions: [
    {days: [5], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 18,
  gender: "مختلط"
},
{
  id: 7707110,
  name: "برنامه سازی کامپیوتر پیشرفته",
  code: "21_7707110",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 18,
  gender: "مختلط"
},
{
  id: 7707110,
  name: "برنامه سازی کامپیوتر پیشرفته",
  code: "21_7707110",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 18,
  gender: "مختلط"
},
{
  id: 7707111,
  name: "زبان تخصصي",
  code: "21_7707111",
  prof: "لطيفي هومن",
  units: 2,
  sessions: [
    {days: [5], start: 13.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۵ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7728031,
  name: "پروژه نقشه برداری",
  code: "21_7728031",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [],
  examDate: "تعیین نشده",
  department: "مهندسی نقشه برداری",
  capacity: 2,
  gender: "مختلط"
},
{
  id: 7728075,
  name: "پروژه ژئودزی",
  code: "21_7728075",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [],
  examDate: "تعیین نشده",
  department: "مهندسی نقشه برداری",
  capacity: 2,
  gender: "مختلط"
},
{
  id: 7728151,
  name: "ژئودزی هندسی ماهواره ای",
  code: "21_7728151",
  prof: "مشهدي حسينعلي مسعود",
  units: 3,
  sessions: [
    {days: [2], start: 16.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 16.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7728152,
  name: "ژئودزی فیزیک پیشرفته",
  code: "21_7728152",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۸ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7728192,
  name: "تئوری تقریب",
  code: "21_7728192",
  prof: "عامریان یزدان",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [3], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۱ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7728193,
  name: "آنالیز تنسوری تغییرشکل",
  code: "21_7728193",
  prof: "وثوقی بهزاد",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۱ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7728194,
  name: "ژئودینامیک",
  code: "21_7728194",
  prof: "اساتید گروه آموزشی",
  units: 3,
  sessions: [
    {days: [5], start: 13.5, duration: 1.5, location: "کلاس"},
    {days: [5], start: 15, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 7729013,
  name: "پروژه سنجش از دور",
  code: "21_7729013",
  prof: "اساتید گروه آموزشی",
  units: 2,
  sessions: [],
  examDate: "تعیین نشده",
  department: "مهندسی نقشه برداری",
  capacity: 2,
  gender: "مختلط"
},
{
  id: 7729014,
  name: "پروژه فتوگرامتری",
  code: "21_7729014",
  prof: "اساتید گروه آموزشی",
  units: 2,
  sessions: [],
  examDate: "تعیین نشده",
  department: "مهندسی نقشه برداری",
  capacity: 2,
  gender: "مختلط"
},
{
  id: 7729049,
  name: "فتوگرامتری رقومی",
  code: "21_7729049",
  prof: "عبادی حمید",
  units: 3,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "کلاس"},
    {days: [5], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7729098,
  name: "فتوگرامتری بردکوتاه",
  code: "21_7729098",
  prof: "حسینی نوه علی",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۸ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7729100,
  name: "منطق فازی و شبکه های عصبی در فتوگرامتری و سنجش از دور",
  code: "21_7729100",
  prof: "مختارزاده مهدی",
  units: 3,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "کلاس"},
    {days: [2], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7729103,
  name: "ماشین بینایی",
  code: "21_7729103",
  prof: "اساتید گروه آموزشی",
  units: 3,
  sessions: [
    {days: [1], start: 13.5, duration: 1.5, location: "کلاس"},
    {days: [2], start: 7.5, duration: 1.5, location: "класс"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۴ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7775002,
  name: "فیزیک سنجش از دور",
  code: "21_7775002",
  prof: "محمدزاده علی",
  units: 3,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "کلاس"},
    {days: [4], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۰ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7775005,
  name: "فتوگرامتري فضايي",
  code: "21_7775005",
  prof: "ولدان زوج محمد جواد",
  units: 3,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۰ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7775030,
  name: "تشخيص الگو از تصاوير سنجش از دور",
  code: "21_7775030",
  prof: "خصالي الهه",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۸ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7775041,
  name: "تشخيص تغييرات و بروزرساني نقشه در فتوگرامتري و سنجش از دور",
  code: "21_7775041",
  prof: "صاحبي محمودرضا",
  units: 3,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۳۰ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7775043,
  name: "مطالعات پوشش گياهي مبتني بر فتوگرامتري و سنجش از دور",
  code: "21_7775043",
  prof: "لطيفي هومن",
  units: 3,
  sessions: [
    {days: [4], start: 9, duration: 1.5, location: "کلاس"},
    {days: [5], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7776004,
  name: "پروژه جي اي اس",
  code: "21_7776004",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [],
  examDate: "تعیین نشده",
  department: "مهندسی نقشه برداری",
  capacity: 2,
  gender: "مختلط"
},
{
  id: 7776089,
  name: "سامانه اطلاعات مكاني پيشرفته",
  code: "21_7776089",
  prof: "كريمي محمد، طالعي محمد",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [5], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۱ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7776090,
  name: "تحليل مكاني پيشرفته در GIS",
  code: "21_7776090",
  prof: "پيله فروشها پرستو، قائمي‌راد طاهره",
  units: 3,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "کلاس"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7776091,
  name: "سامانه اطلاعات مكاني تحت اينترنت و وب سرويس هاي مكاني",
  code: "21_7776091",
  prof: "آل شيخ علي اصغر",
  units: 3,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۹ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7776092,
  name: "هوش محاسباتي در GIS",
  code: "21_7776092",
  prof: "ملك محمد رضا، مسگري محمد سعدي",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس"},
    {days: [5], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۴ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 7776101,
  name: "سيستم هاي اطلاعات مكاني و مدل سازي محيطي",
  code: "21_7776101",
  prof: "قائمي‌راد طاهره",
  units: 3,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "کلاس"},
    {days: [5], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی نقشه برداری",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 1110223,
  name: "نقشه کشی مهندسی",
  code: "11_1110223",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 45,
  gender: "مختلط"
},
{
  id: 1110223,
  name: "نقشه کشی مهندسی",
  code: "11_1110223",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 13.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 45,
  gender: "مختلط"
},
{
  id: 1110223,
  name: "نقشه کشی مهندسی",
  code: "11_1110223",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 15, duration: 1.5, location: "کلاس"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 45,
  gender: "مختلط"
},
{
  id: 1110242,
  name: "آزمدارهای الکتریکی و اندازه گیری",
  code: "11_1110242",
  prof: "ثقفي فرخ لقا",
  units: 1,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [1], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 1110242,
  name: "آزمدارهای الکتریکی و اندازه گیری",
  code: "11_1110242",
  prof: "ثقفي فرخ لقا",
  units: 1,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 1110242,
  name: "آزمدارهای الکتریکی و اندازه گیری",
  code: "11_1110242",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 1110242,
  name: "آزمدارهای الکتریکی و اندازه گیری",
  code: "11_1110242",
  prof: "ثقفي فرخ لقا",
  units: 1,
  sessions: [
    {days: [3], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 1110242,
  name: "آزمدارهای الکتریکی و اندازه گیری",
  code: "11_1110242",
  prof: "ثقفي فرخ لقا",
  units: 1,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 1110242,
  name: "آزمدارهای الکتریکی و اندازه گیری",
  code: "11_1110242",
  prof: "ثقفي فرخ لقا",
  units: 1,
  sessions: [
    {days: [4], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [4], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 1110252,
  name: "كارگاه عمومي",
  code: "11_1110252",
  prof: "ابراهيمي هادي",
  units: 1,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "کارگاه"},
    {days: [4], start: 15, duration: 1.5, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 24,
  gender: "مختلط"
},
{
  id: 1110252,
  name: "كارگاه عمومي",
  code: "11_1110252",
  prof: "ابراهيمي هادي",
  units: 1,
  sessions: [
    {days: [3], start: 15, duration: 1.5, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 24,
  gender: "مختلط"
},
{
  id: 1110253,
  name: "آزماشينهاي الكتريكي ۱",
  code: "11_1110253",
  prof: "پاسدار محدثه",
  units: 1,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [1], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1110253,
  name: "آزماشينهاي الكتريكي ۱",
  code: "11_1110253",
  prof: "پاسدار محدثه",
  units: 1,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1110253,
  name: "آزماشينهاي الكتريكي ۱",
  code: "11_1110253",
  prof: "پاسدار محدثه",
  units: 1,
  sessions: [
    {days: [1], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1110253,
  name: "آزماشينهاي الكتريكي ۱",
  code: "11_1110253",
  prof: "پاسدار محدثه",
  units: 1,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [2], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1110253,
  name: "آزماشينهاي الكتريكي ۱",
  code: "11_1110253",
  prof: "پاسدار محدثه",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1110253,
  name: "آزماشينهاي الكتريكي ۱",
  code: "11_1110253",
  prof: "پاسدار محدثه",
  units: 1,
  sessions: [
    {days: [3], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1110253,
  name: "آزماشينهاي الكتريكي ۱",
  code: "11_1110253",
  prof: "پاسدار محدثه",
  units: 1,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1110253,
  name: "آزماشينهاي الكتريكي ۱",
  code: "11_1110253",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [4], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1110253,
  name: "آزماشينهاي الكتريكي ۱",
  code: "11_1110253",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1110253,
  name: "آزماشينهاي الكتريكي ۱",
  code: "11_1110253",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1110253,
  name: "آزماشينهاي الكتريكي ۱",
  code: "11_1110253",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [5], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1110253,
  name: "آزماشينهاي الكتريكي ۱",
  code: "11_1110253",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 10.5, duration: 2, location: "آزmaيشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1110273,
  name: "آز فيزيك ۱",
  code: "11_1110273",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [1], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1110273,
  name: "آز فيزيك ۱",
  code: "11_1110273",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [1], start: 15, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1110273,
  name: "آز فيزيك ۱",
  code: "11_1110273",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [1], start: 16.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1110273,
  name: "آز فيزيك ۱",
  code: "11_1110273",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [2], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1110273,
  name: "آز فيزيك ۱",
  code: "11_1110273",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1110273,
  name: "آز فيزيك ۱",
  code: "11_1110273",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1110273,
  name: "آز فيزيك ۱",
  code: "11_1110273",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1110273,
  name: "آز فيزيك ۱",
  code: "11_1110273",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 15, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1110274,
  name: "آز فيزيك۲",
  code: "11_1110274",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [1], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختل"
},
{
  id: 1110274,
  name: "آز فيزيك۲",
  code: "11_1110274",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1110274,
  name: "آز فيزيك۲",
  code: "11_1110274",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1110274,
  name: "آز فيزيك۲",
  code: "11_1110274",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 15, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1110274,
  name: "آز فيزيك۲",
  code: "11_1110274",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [3], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1110274,
  name: "آز فيزيك۲",
  code: "11_1110274",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1110274,
  name: "آز فيزيك۲",
  code: "11_1110274",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1110274,
  name: "آز فيزيك۲",
  code: "11_1110274",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1110285,
  name: "آز سيگنال هاي حياتي",
  code: "11_1110285",
  prof: "خادم علي",
  units: 1,
  sessions: [
    {days: [5], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1111109,
  name: "آزالكترونيك صنعتي",
  code: "11_1111109",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1111109,
  name: "آزالكترونيك صنعتي",
  code: "11_1111109",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1111111,
  name: "آزالكترونيك ۳",
  code: "11_1111111",
  prof: "ميري سيده سميه",
  units: 1,
  sessions: [
    {days: [5], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [5], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 1111179,
  name: "آز مدارهاي پالس و ديجيتال",
  code: "11_1111179",
  prof: "ميري سيده سميه",
  units: 1,
  sessions: [
    {days: [4], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [4], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 1111179,
  name: "آز مدارهاي پالس و ديجيتal",
  code: "11_1111179",
  prof: "ميري سيده سميه",
  units: 1,
  sessions: [
    {days: [4], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 1112034,
  name: "كارگاه برق",
  code: "11_1112034",
  prof: "فريدونيان عليرضا",
  units: 1,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "کارگاه"},
    {days: [2], start: 9, duration: 1.5, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1112034,
  name: "كارگاه برق",
  code: "11_1112034",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1112034,
  name: "كارگاه برق",
  code: "11_1112034",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1112034,
  name: "كارگاه برق",
  code: "11_1112034",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 15, duration: 1.5, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1112034,
  name: "كارگاه برق",
  code: "11_1112034",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 7.5, duration: 1.5, location: "کارگاه"},
    {days: [4], start: 9, duration: 1.5, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1112034,
  name: "كارگاه برق",
  code: "11_1112034",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 10.5, duration: 2, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1112034,
  name: "كارگاه برق",
  code: "11_1112034",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1112034,
  name: "كارگاه برق",
  code: "11_1112034",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 15, duration: 1.5, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1112034,
  name: "كارگاه برق",
  code: "11_1112034",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 7.5, duration: 1.5, location: "کارگاه"},
    {days: [5], start: 9, duration: 1.5, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1112040,
  name: "آزماشينهاي الكتريكي ۲",
  code: "11_1112040",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [1], start: 15, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 9,
  gender: "مختلط"
},
{
  id: 1112067,
  name: "آز سيستم هاي قدرت",
  code: "11_1112067",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 15, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 8,
  gender: "مختلط"
},
{
  id: 1113042,
  name: "آزمدارهاي مخابراتي",
  code: "11_1113042",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [3], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 1113231,
  name: "آز مخابرات ديجيتال",
  code: "11_1113231",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [4], start: 16.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 1115093,
  name: "آزمايشگاه كنترل فرآيندهاي صنعتي",
  code: "11_1115093",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 1115093,
  name: "آزمايشگاه كنترل فرآيندهاي صنعتي",
  code: "11_1115093",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [2], start: 15, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 1115097,
  name: "آزمايشگاه PLC",
  code: "11_1115097",
  prof: "حسن نسب سياوش",
  units: 1,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [2], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 1115097,
  name: "آزمايشگاه PLC",
  code: "11_1115097",
  prof: "حسن نسب سياوش",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 1115097,
  name: "آزمايشگاه PLC",
  code: "11_1115097",
  prof: "حسن نسب سياوش",
  units: 1,
  sessions: [
    {days: [5], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
    {days: [5], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 1115097,
  name: "آزمايشگاه PLC",
  code: "11_1115097",
  prof: "حسن نسب سياوش",
  units: 1,
  sessions: [
    {days: [5], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 1115097,
  name: "آزمايشگاه PLC",
  code: "11_1115097",
  prof: "حسن نسب سياوش",
  units: 1,
  sessions: [
    {days: [5], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 1115099,
  name: "آزمايشگاه ابزاردقيق",
  code: "11_1115099",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی برق",
  capacity: 6,
  gender: "مختلط"
},
{
  id: 1115129,
  name: "يادگيري ژرف",
  code: "11_1115129",
  prof: "نجفي اردكاني علي",
  units: 3,
  sessions: [
    {days: [1], start: 15, duration: 1.5, location: "کلاس ۳۰۷"},
    {days: [3], start: 15, duration: 1.5, location: "کلاس ۳۰۷"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مهندسی مکانیک",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 1910004,
  name: "رساله دكتري پژوهشي",
  code: "19_1910004",
  prof: "اساتيد گروه آموزشي",
  units: 30,
  sessions: [],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1910007,
  name: "دفاع از پيشنهاد رساله دكتري",
  code: "19_1910007",
  prof: "اساتيد گروه آموزشي",
  units: 0,
  sessions: [],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1910008,
  name: "دفاع مجدد از پيشنهاد رساله دكتري",
  code: "19_1910008",
  prof: "اساتيد گروه آموزشي",
  units: 0,
  sessions: [],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1910009,
  name: "امتحان جامع دكتري ۱",
  code: "19_1910009",
  prof: "اساتيد گروه آموزشي",
  units: 0,
  sessions: [],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1910010,
  name: "امتحان جامع دكتري ۲",
  code: "19_1910010",
  prof: "اساتيد گروه آموزشي",
  units: 0,
  sessions: [],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1910011,
  name: "مدارهاي منطقي",
  code: "19_1910011",
  prof: "خانميرزا حامد",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی کامپیuter",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1910016,
  name: "دستيار آموزشي",
  code: "19_1910016",
  prof: "اساتيد گروه آموزشي",
  units: 0,
  sessions: [],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1910017,
  name: "رساله دكترا",
  code: "19_1910017",
  prof: "اساتيد گروه آموزشي",
  units: 24,
  sessions: [],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1910018,
  name: "سمينار ۱",
  code: "19_1910018",
  prof: "اساتيد گروه آموزشي",
  units: 0,
  sessions: [],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1910020,
  name: "الكترونيك ديجيتال و طراحي مدارهاي مجتمع پر تراكم",
  code: "19_1910020",
  prof: "ده يادگاري مسعود",
  units: 3,
  sessions: [
    {days: [1], start: 15, duration: 1.5, location: "کلاس"},
    {days: [3], start: 15, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۱ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1910021,
  name: "پروژه",
  code: "19_1910021",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1910023,
  name: "شبكه هاي كامپيوتري ۱",
  code: "19_1910023",
  prof: "يعقوبي كعبه",
  units: 3,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "کلاس"},
    {days: [3], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1910024,
  name: "شبكه هاي كامپيوتري ۲",
  code: "19_1910024",
  prof: "رضائي فاطمه",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1910026,
  name: "جبر خطي",
  code: "19_1910026",
  prof: "نصيحت كن سيد بهروز",
  units: 3,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "کلاس"},
    {days: [5], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۱ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1910028,
  name: "رياضيات مهندسي",
  code: "19_1910028",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [1], start: 13.5, duration: 1.5, location: "کلاس"},
    {days: [5], start: 13.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۴ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1910039,
  name: "زبان تخصصي",
  code: "19_1910039",
  prof: "علائيان محمدهادي",
  units: 2,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۸ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1912002,
  name: "برنامه سازي پيشرفته",
  code: "19_1912002",
  prof: "زمانيان مهدي",
  units: 3,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "کلاس"},
    {days: [5], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1912003,
  name: "ساختمان داده ها",
  code: "19_1912003",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "کلاس"},
    {days: [5], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۰۸:00-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1912004,
  name: "طراحي الگوريتمها",
  code: "19_1912004",
  prof: "پيشگو بشري",
  units: 3,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "کلاس"},
    {days: [5], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۹ ساعت: ۰۸:00-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1912005,
  name: "نظريه زبانها وماشينها",
  code: "19_1912005",
  prof: "خواسته سيد حسين",
  units: 3,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [3], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۵ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1912011,
  name: "مباني كامپيوتروبرنامه سازي",
  code: "19_1912011",
  prof: "زمانيان مهدي",
  units: 3,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "کلاس"},
    {days: [5], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1912011,
  name: "مباني كامپيوتروبرنامه سازي",
  code: "19_1912011",
  prof: "نصيحت كن سيد بهروز",
  units: 3,
  sessions: [
    {days: [3], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [5], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1912012,
  name: "اصول طراحي كامپايلر",
  code: "19_1912012",
  prof: "علائيان محمدهادي",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۰۸:00-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1912016,
  name: "مهندسي اينترنت",
  code: "19_1912016",
  prof: "زمانيان مهدي",
  units: 3,
  sessions: [
    {days: [2], start: 15, duration: 1.5, location: "کلاس"},
    {days: [4], start: 15, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۰ ساعت: ۰۸:00-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1912024,
  name: "آزمايشگاه سيستم عامل",
  code: "19_1912024",
  prof: "بهرامي رويا",
  units: 1,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 1912024,
  name: "آزمايشگاه سيستم عامل",
  code: "19_1912024",
  prof: "بهرامي رويا",
  units: 1,
  sessions: [
    {days: [4], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 1912024,
  name: "آزمايشگاه سيستم عامل",
  code: "19_1912024",
  prof: "بهرامي رويا",
  units: 1,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 1912025,
  name: "آزمايشگاه پايگاه داده ها",
  code: "19_1912025",
  prof: "بهرامي رويا",
  units: 1,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 1912025,
  name: "آزمايشگاه پايگاه داده ها",
  code: "19_1912025",
  prof: "بهرامي رويا",
  units: 1,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 1912025,
  name: "آزمايشگاه پايگاه داده ها",
  code: "19_1912025",
  prof: "بهرامي رويا",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 15,
  gender: "مختلط"
},
{
  id: 1912027,
  name: "رياضيات گسسته",
  code: "19_1912027",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [3], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [5], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۳۰ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1912028,
  name: "كارگاه كامپيوتر",
  code: "19_1912028",
  prof: "مقيمي عطيه",
  units: 1,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 18,
  gender: "مختلط"
},
{
  id: 1912028,
  name: "كارگاه كامپيوتر",
  code: "19_1912028",
  prof: "مقيمي عطيه",
  units: 1,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 18,
  gender: "مختلط"
},
{
  id: 1912028,
  name: "كارگاه كامپيوتر",
  code: "19_1912028",
  prof: "مقيمي عطيه",
  units: 1,
  sessions: [
    {days: [5], start: 7.5, duration: 1.5, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 18,
  gender: "مختلط"
},
{
  id: 1912028,
  name: "كارگاه كامپيوتر",
  code: "19_1912028",
  prof: "مقيمي عطيه",
  units: 1,
  sessions: [
    {days: [5], start: 10.5, duration: 2, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 18,
  gender: "مختلط"
},
{
  id: 1912028,
  name: "كارگاه كامپيوتر",
  code: "19_1912028",
  prof: "مقيمي عطيه",
  units: 1,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "کارگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 18,
  gender: "مختلط"
},
{
  id: 1912029,
  name: "روش پژوهش و ارائه",
  code: "19_1912029",
  prof: "پيشگو بشري",
  units: 2,
  sessions: [
    {days: [5], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۳۰ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1912030,
  name: "پايگاه داده ها",
  code: "19_1912030",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [1], start: 13.5, duration: 1.5, location: "کلاس"},
    {days: [5], start: 13.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1912032,
  name: "تحليل و طراحي سيستم ها",
  code: "19_1912032",
  prof: "اثني عشري اصفهاني محمدمهدi",
  units: 3,
  sessions: [
    {days: [3], start: 15, duration: 1.5, location: "کلاس"},
    {days: [5], start: 15, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۹ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1912033,
  name: "مهندسي نرم افزار",
  code: "19_1912033",
  prof: "صديقيان كاشي سعيد",
  units: 3,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [3], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۳۰ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1912037,
  name: "تحليل ها و سيستم هاي داده هاي حجيم",
  code: "19_1912037",
  prof: "خواسته سيد حسين",
  units: 3,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1912051,
  name: "تكامل نرم‌افزار",
  code: "19_1912051",
  prof: "علائيان محمدهادي",
  units: 3,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [3], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1916028,
  name: "هوش مصنوعي و سيستم هاي خبره",
  code: "19_1916028",
  prof: "پيشگو بشري",
  units: 3,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [5], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۸ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1916041,
  name: "گفتارپردازي رقمي",
  code: "19_1916041",
  prof: "ناصر شريف بابك",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۱ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1920002,
  name: "معماري كامپيوتر",
  code: "19_1920002",
  prof: "صيفوري زينب",
  units: 3,
  sessions: [
    {days: [3], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [5], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1920004,
  name: "طراحي كامپيوتري سيستم هاي ديجيتal",
  code: "19_1920004",
  prof: "حسيني نژاد محبتي حسين",
  units: 3,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۶ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1920005,
  name: "هم طراحي سخت افزار و نرم افزار",
  code: "19_1920005",
  prof: "عبدي آتنا",
  units: 3,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۸ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1920009,
  name: "سيستمهاي عامل",
  code: "19_1920009",
  prof: "يعقوبي كعبه",
  units: 3,
  sessions: [
    {days: [1], start: 15, duration: 1.5, location: "کلاس"},
    {days: [3], start: 15, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1920018,
  name: "آزشبكه هاي كامپيوتري",
  code: "19_1920018",
  prof: "ميرزاحسيني داود",
  units: 1,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 1920018,
  name: "آزشبكه هاي كامپيوتري",
  code: "19_1920018",
  prof: "ميرزاحسيني داود",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 1920018,
  name: "آزشبكه هاي كامپيوتري",
  code: "19_1920018",
  prof: "ميرزاحسيني داود",
  units: 1,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 1920018,
  name: "آزشبكه هاي كامپيوتري",
  code: "19_1920018",
  prof: "ميرزاحسيني داود",
  units: 1,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "آزمايشگاه"}
  ],
  examDate: "تعیین نشده",
  department: "مهندسی کامپیوتر",
  capacity: 10,
  gender: "مختلط"
},
{
  id: 1920035,
  name: "معماري كامپيوترپيشرفته",
  code: "19_1920035",
  prof: "ده يادگاري مسعود",
  units: 3,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "کلاس"},
    {days: [3], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۸ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1920043,
  name: "ريزپردازنده و زبان اسمبلي",
  code: "19_1920043",
  prof: "دلير روي فرد رسول",
  units: 3,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "کلاس"},
    {days: [5], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۱ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1920043,
  name: "ريزپردازنده و زبان اسمبلي",
  code: "19_1920043",
  prof: "رودكي لواساني هدا",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۱ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1920043,
  name: "ريزپردازنده و زبان اسمبلي",
  code: "19_1920043",
  prof: "درماني محمد يوسف",
  units: 3,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "کلاس"},
    {days: [3], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۱ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1920045,
  name: "مدارهاي الكتريكي",
  code: "19_1920045",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۱ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1920054,
  name: "طراحي وارزيابي سيستم هاي بي درنگ نهفته",
  code: "19_1920054",
  prof: "عبدي آتنا",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1920059,
  name: "ساختار و زبان كامپيوتر",
  code: "19_1920059",
  prof: "صيفوري زينب",
  units: 3,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "کلاس"},
    {days: [5], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۰ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 1920065,
  name: "شبكه هاي كامپيوتري پيشرفته",
  code: "19_1920065",
  prof: "يعقوبي كعبه",
  units: 3,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "کلاس"},
    {days: [3], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1920068,
  name: "شبكه هاي بي سيم",
  code: "19_1920068",
  prof: "درماني محمد يوسف",
  units: 3,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [3], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۴ ساعت: ۰۸:۰۰-۱۰:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1920074,
  name: "ارزيابي كارايي سيستم هاي كامپيوتري",
  code: "19_1920074",
  prof: "تارخ محمد جعفر",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "کلاس"},
    {days: [4], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۹ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1920076,
  name: "رايانش ابري",
  code: "19_1920076",
  prof: "صديقيان كاشي سعيد",
  units: 3,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۵ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1920077,
  name: "سیستم های توزیع شده",
  code: "19_1920077",
  prof: "خانمیرزا حامد",
  units: 3,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "کلاس"},
    {days: [4], start: 7.5, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۳۰ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 1920078,
  name: "امنیت شبکه پیشرفته",
  code: "19_1920078",
  prof: "رضائی فاطمه",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "کلاس"},
    {days: [4], start: 10.5, duration: 2, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۱ ساعت: ۱۰:۳۰-۱۲:۳۰",
  department: "مهندسی کامپیوتر",
  capacity: 20,
  gender: "مختلط"
},
{
  id: 5505050,
  name: "مهارتهاي زندگي دانشجويي",
  code: "51_5505050",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [
    {days: [1], start: 16.5, duration: 1.5, location: "دانشكده برق"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۴ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 70,
  gender: "مختلط"
},
{
  id: 5505050,
  name: "مهارتهاي زندگي دانشجويي",
  code: "52_5505050",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [
    {days: [1], start: 15, duration: 1.5, location: "ساختمان آموزشي نقشه برداري"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 50,
  gender: "مختلط"
},
{
  id: 5505050,
  name: "مهارتهاي زندگي دانشجويي",
  code: "53_5505050",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [
    {days: [3], start: 15, duration: 1.5, location: "مكانيك-كلاس"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۴ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 70,
  gender: "مختلط"
},
{
  id: 5505050,
  name: "مهارتهاي زندگي دانشجويي",
  code: "54_5505050",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [
    {days: [3], start: 16.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 70,
  gender: "مختلط"
},
{
  id: 5510001,
  name: "تربيت بدني",
  code: "51_5510001",
  prof: "لطيفي حجت اله",
  units: 1,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مرد"
},
{
  id: 5510001,
  name: "تربيت بدني",
  code: "52_5510001",
  prof: "لطيفi حجت اله",
  units: 1,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مرد"
},
{
  id: 5510001,
  name: "تربيت بدني",
  code: "53_5510001",
  prof: "لطيفي حجت اله",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مرد"
},
{
  id: 5510001,
  name: "تربيت بدني",
  code: "54_5510001",
  prof: "لطيفي حجت اله",
  units: 1,
  sessions: [
    {days: [4], start: 7.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مرد"
},
{
  id: 5510001,
  name: "تربيت بدني",
  code: "55_5510001",
  prof: "لطيفي حجت اله",
  units: 1,
  sessions: [
    {days: [4], start: 9, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مرد"
},
{
  id: 5510001,
  name: "تربيت بدني",
  code: "56_5510001",
  prof: "خنجري ياسر",
  units: 1,
  sessions: [
    {days: [3], start: 7.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مرد"
},
{
  id: 5510001,
  name: "تربيت بدني",
  code: "57_5510001",
  prof: "خنجري ياسr",
  units: 1,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مرد"
},
{
  id: 5510001,
  name: "تربيت بدني",
  code: "58_5510001",
  prof: "خنجري ياسر",
  units: 1,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مرد"
},
{
  id: 5510001,
  name: "تربيت بدني",
  code: "59_5510001",
  prof: "خنجري ياسر",
  units: 1,
  sessions: [
    {days: [4], start: 7.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مرد"
},
{
  id: 5510001,
  name: "تربيت بدني",
  code: "60_5510001",
  prof: "خنجري ياسر",
  units: 1,
  sessions: [
    {days: [4], start: 9, duration: 1.5, location: "هوافضا-سالن تربيت بدni"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مرد"
},
{
  id: 5510001,
  name: "تربيت بدني",
  code: "61_5510001",
  prof: "خنجري ياسر",
  units: 1,
  sessions: [
    {days: [4], start: 10.5, duration: 2, location: "هوافضا-سالن تربيت بدني"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مرد"
},
{
  id: 5510001,
  name: "تربيت بدني",
  code: "62_5510001",
  prof: "خنجري ياسر",
  units: 1,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مرد"
},
{
  id: 5510001,
  name: "تربيت بدني",
  code: "63_5510001",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [3], start: 9, duration: 1.5, location: "دانشكده برق"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مرد"
},
{
  id: 5510001,
  name: "تربيت بدني",
  code: "64_5510001",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "دانشكده برق"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مرد"
},
{
  id: 5510001,
  name: "تربيت بدني",
  code: "66_5510001",
  prof: "اساتيد گروه آموزشي",
  units: 1,
  sessions: [
    {days: [5], start: 10.5, duration: 2, location: "دانشكده برق"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "51_5510002",
  prof: "هنرور افشار",
  units: 1,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "52_5510002",
  prof: "هنرور افشار",
  units: 1,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "53_5510002",
  prof: "هنرور افشار",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "54_5510002",
  prof: "هنرور افشار",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "55_5510002",
  prof: "هنرور افشار",
  units: 1,
  sessions: [
    {days: [2], start: 15, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "56_5510002",
  prof: "هنرور افشار",
  units: 1,
  sessions: [
    {days: [4], start: 7.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "57_5510002",
  prof: "هنرور افشار",
  units: 1,
  sessions: [
    {days: [4], start: 9, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "58_5510002",
  prof: "هنرور افشار",
  units: 1,
  sessions: [
    {days: [4], start: 10.5, duration: 2, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "59_5510002",
  prof: "هنرور افشار",
  units: 1,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "60_5510002",
  prof: "هنرور افشار",
  units: 1,
  sessions: [
    {days: [4], start: 15, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "61_5510002",
  prof: "لطيفي حجت اله",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "62_5510002",
  prof: "لطيفي حجت اله",
  units: 1,
  sessions: [
    {days: [4], start: 10.5, duration: 2, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "63_5510002",
  prof: "خنجري ياسر",
  units: 1,
  sessions: [
    {days: [2], start: 7.5, duration: 1.5, location: "سالن تربيت بدني دانشكده مهندسي مكانيك"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "64_5510002",
  prof: "خنجري ياسر",
  units: 1,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "سالن تربيت بدني دانشكده مهندسي مكانيك"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "65_5510002",
  prof: "خنجري ياسر",
  units: 1,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "سالن تربيت بدني دانشكده مهندسي مكانيك"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510002,
  name: "ورزش ۱",
  code: "66_5510002",
  prof: "خنجري ياسر",
  units: 1,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "سالn تربيت بدني دانشكده مهندسي مكانيك"}
  ],
  examDate: "تعیین نشده",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مرد"
},
{
  id: 5510003,
  name: "تربيت بدني ويژه",
  code: "51_5510003",
  prof: "هنرور افشار",
  units: 1,
  sessions: [
    {days: [3], start: 10.5, duration: 2, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 16,
  gender: "مختلط"
},
{
  id: 5510004,
  name: "ورزش ويژه",
  code: "51_5510004",
  prof: "لطيفي حجت اله",
  units: 1,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "علوم-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 12,
  gender: "مختلط"
},
{
  id: 5512003,
  name: "نگارش متون علمي",
  code: "51_5512003",
  prof: "نوروزي زاده سوگند",
  units: 3,
  sessions: [
    {days: [1], start: 16.5, duration: 1.5, location: "مكانيك-كلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۰ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512004,
  name: "زبان فارسي۱",
  code: "51_5512004",
  prof: "سلماني نژادمهرآبادي ساغر",
  units: 3,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "دانشكده برق"},
    {days: [5], start: 7.5, duration: 1.5, location: "دانشكده برق"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512004,
  name: "زبان فارسي۱",
  code: "52_5512004",
  prof: "سلماني نژادمهرآبادي ساغر",
  units: 3,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "دانشكده برق"},
    {days: [5], start: 9, duration: 1.5, location: "دانشكده برق"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512004,
  name: "زبان فارسي۱",
  code: "53_5512004",
  prof: "سلماني نژادmهرآبادي ساغر",
  units: 3,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "دانشكده برق"},
    {days: [5], start: 10.5, duration: 2, location: "دانشكده برق"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512004,
  name: "زبان فارسي۱",
  code: "54_5512004",
  prof: "سلماني نژادمهرآبادي ساغر",
  units: 3,
  sessions: [
    {days: [1], start: 13.5, duration: 1.5, location: "دانشكده برق"},
    {days: [5], start: 13.5, duration: 1.5, location: "دانشكده برق"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512004,
  name: "زبان فارسي۱",
  code: "55_5512004",
  prof: "سلماني نژادمهرآبادي ساغر",
  units: 3,
  sessions: [
    {days: [4], start: 15, duration: 1.5, location: "۱۰۱"},
    {days: [4], start: 16.5, duration: 1.5, location: "۱۰۱"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512004,
  name: "زبان فارسي۱",
  code: "56_5512004",
  prof: "عليقلي زاده حسين",
  units: 3,
  sessions: [
    {days: [2], start: 13.5, duration: 1.5, location: "ساختمان آموزشي صنايع"},
    {days: [4], start: 13.5, duration: 1.5, location: "ساختمان آموزشي صنايع"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512004,
  name: "زبان فارسي۱",
  code: "57_5512004",
  prof: "عليقلي زاده حسين",
  units: 3,
  sessions: [
    {days: [2], start: 15, duration: 1.5, location: "ساختمان آموزشي صنايع"},
    {days: [4], start: 15, duration: 1.5, location: "ساختمان آموزشي صنايع"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512004,
  name: "زبان فارسي۱",
  code: "58_5512004",
  prof: "عليقلي زاده حسين",
  units: 3,
  sessions: [
    {days: [2], start: 9, duration: 1.5, location: "دانشكده برق"},
    {days: [4], start: 9, duration: 1.5, location: "دانشكده برق"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512004,
  name: "زبان فارسي۱",
  code: "59_5512004",
  prof: "عليقلي زاده حسين",
  units: 3,
  sessions: [
    {days: [2], start: 10.5, duration: 2, location: "دانشكده برق"},
    {days: [4], start: 10.5, duration: 2, location: "دانشكده برق"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512004,
  name: "زبان فارسي۱",
  code: "60_5512004",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [1], start: 13.5, duration: 1.5, location: "۱۰۱"},
    {days: [1], start: 15, duration: 1.5, location: "۱۰۱"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512004,
  name: "زبان فارسي۱",
  code: "61_5512004",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [5], start: 9, duration: 1.5, location: "مكانيك-كلاس"},
    {days: [5], start: 10.5, duration: 2, location: "مكانيك-класс"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512006,
  name: "زبان انگليسي",
  code: "51_5512006",
  prof: "نوروزي زاده سوگند",
  units: 3,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "مكانيك-كلاس"},
    {days: [5], start: 9, duration: 1.5, location: "مكانيك-كلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512006,
  name: "زبان انگليسي",
  code: "52_5512006",
  prof: "نوروزي زاده سوگند",
  units: 3,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "مكانيك-كلاس"},
    {days: [5], start: 10.5, duration: 2, location: "مكانيك-كلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512006,
  name: "زبان انگليسي",
  code: "53_5512006",
  prof: "نوروزي زاده سوگند",
  units: 3,
  sessions: [
    {days: [1], start: 15, duration: 1.5, location: "مكانيك-كلاس"},
    {days: [5], start: 15, duration: 1.5, location: "مكانيك-كلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512006,
  name: "زبان انگليسي",
  code: "54_5512006",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "مكانيك-كلاس"},
    {days: [1], start: 9, duration: 1.5, location: "مكانيك-كلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512006,
  name: "زبان انگليسي",
  code: "55_5512006",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [5], start: 9, duration: 1.5, location: "دانشكده برق"},
    {days: [5], start: 10.5, duration: 2, location: "دانشكده برق"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512006,
  name: "زبان انگليسي",
  code: "56_5512006",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [5], start: 13.5, duration: 1.5, location: "دانشكده برق"},
    {days: [5], start: 15, duration: 1.5, location: "دانشكده برق"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512006,
  name: "زبان انگليسي",
  code: "57_5512006",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "ساختمان آموزشي نقشه برداري"},
    {days: [1], start: 10.5, duration: 2, location: "ساختمان آموزشي نقشه برداري"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512006,
  name: "زبان انگليسي",
  code: "58_5512006",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [1], start: 7.5, duration: 1.5, location: "صدويك"},
    {days: [3], start: 7.5, duration: 1.5, location: "صدويك"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512006,
  name: "زبان انگليسي",
  code: "59_5512006",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [1], start: 9, duration: 1.5, location: "صدويك"},
    {days: [3], start: 9, duration: 1.5, location: "صدويك"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512006,
  name: "زبان انگليسي",
  code: "60_5512006",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [3], start: 15, duration: 1.5, location: "۱۰۱"},
    {days: [3], start: 16.5, duration: 1.5, location: "۱۰۱"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512006,
  name: "زبان انگليسي",
  code: "61_5512006",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [5], start: 13.5, duration: 1.5, location: "۱۰۱"},
    {days: [5], start: 15, duration: 1.5, location: "۱۰۱"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5512006,
  name: "زبان انگليسي",
  code: "62_5512006",
  prof: "اساتيد گروه آموزشي",
  units: 3,
  sessions: [
    {days: [1], start: 10.5, duration: 2, location: "صدويك"},
    {days: [3], start: 10.5, duration: 2, location: "صدويك"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۳ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مختلط"
},
{
  id: 5514003,
  name: "انقلاب اسلامي وريشه هاي آن",
  code: "51_5514003",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [
    {days: [1], start: 15, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۲ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مرد"
},
{
  id: 5514006,
  name: "تفسيرموضوعي قرآن",
  code: "51_5514006",
  prof: "نوري حميد رضا",
  units: 2,
  sessions: [
    {days: [1], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۵ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مرد"
},
{
  id: 5514006,
  name: "تفسيرموضوعي قرآن",
  code: "52_5514006",
  prof: "نوري حميد رضا",
  units: 2,
  sessions: [
    {days: [4], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۱/۰۵ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مرد"
},
{
  id: 5514011,
  name: "حقوق اجتماعي وسياسي دراسلام",
  code: "51_5514011",
  prof: "نوري حميد رضا",
  units: 2,
  sessions: [
    {days: [1], start: 15, duration: 1.5, location: "هوافضا-سالن تربيت بدني"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۹ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مرد"
},
{
  id: 5514011,
  name: "حقوق اجتماعي وسياسي دراسلام",
  code: "52_5514011",
  prof: "نوري حميد رضا",
  units: 2,
  sessions: [
    {days: [4], start: 15, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۹ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مرد"
},
{
  id: 5514015,
  name: "آيين زندگي و اخلاق كاربردي",
  code: "52_5514015",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [
    {days: [5], start: 15, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۴ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مرد"
},
{
  id: 5514016,
  name: "دانش خانواده وجمعيت",
  code: "53_5514016",
  prof: "اساتيد گروه آموزشي",
  units: 2,
  sessions: [
    {days: [5], start: 9, duration: 1.5, location: "کلاس"}
  ],
  examDate: "۱۴۰۴/۱۰/۲۱ ساعت: ۱۳:۳۰-۱۶:۳۰",
  department: "مركز آموزش هاي عمومي",
  capacity: 40,
  gender: "مرد"
},
{
    id: 8880013,
    name: "ديناميك",
    code: "81_8880013",
    prof: "با صحبت نوين زاد عليرضا",
    units: 4,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس ۲۰۳"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس ۲۰۳"}
    ],
    examDate: "1404/10/21 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880013,
    name: "ديناميك",
    code: "82_8880013",
    prof: "جعفري ندوشن مهدي",
    units: 4,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس ۲۰۷"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس ۲۰۷"}
    ],
    examDate: "1404/10/21 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880016,
    name: "مباني مهندسي برق والكترونيك",
    code: "81_8880016",
    prof: "چيني فروشان محمد",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس ۲۰۳"},
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس ۲۰۳"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 40,
    gender: "مختلط"
  },
  {
    id: 8880016,
    name: "مباني مهندسي برق والكترونيك",
    code: "82_8880016",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "كلاس ۲۰۴"},
      {days: [3], start: 10.5, duration: 2, location: "كلاس ۲۰۴"}
    ],
    examDate: "1404/10/23 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880017,
    name: "نقشه كشي صنعتي ۱",
    code: "81_8880017",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس ۲۱۱"},
      {days: [1], start: 9, duration: 1.5, location: "كلاس ۲۱۱"}
    ],
    examDate: "1404/11/05 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880017,
    name: "نقشه كشي صنعتي ۱",
    code: "82_8880017",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس ۲۱۱"},
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس ۲۱۱"}
    ],
    examDate: "1404/11/05 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880019,
    name: "استاتيك",
    code: "81_8880019",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس ۲۰۳"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس ۲۰۳"}
    ],
    examDate: "1404/10/28 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880021,
    name: "مكانيك سيالات",
    code: "81_8880021",
    prof: "ابراهيمي رضا",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس ۲۰۴"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس ۲۰۴"}
    ],
    examDate: "1404/10/22 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880024,
    name: "مقاومت مصالح",
    code: "81_8880024",
    prof: "نوريان محمدعلي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "سالن"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس ۲۱۰"}
    ],
    examDate: "1404/11/04 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880024,
    name: "مقاومت مصالح",
    code: "82_8880024",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس ۲۰۳"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس ۲۰۳"}
    ],
    examDate: "1404/11/04 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880027,
    name: "ارتعاشات مكانيكي",
    code: "81_8880027",
    prof: "ايراني سعيد",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "كلاس ۲۱۰"},
      {days: [5], start: 10.5, duration: 2, location: "كلاس ۲۱۰"}
    ],
    examDate: "1404/10/28 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880027,
    name: "ارتعاشات مكانيكي",
    code: "82_8880027",
    prof: "خراساني رضا",
    units: 3,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "سالن"},
      {days: [5], start: 10.5, duration: 2, location: "سالن"}
    ],
    examDate: "1404/10/28 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880028,
    name: "كنترل اتوماتيك",
    code: "81_8880028",
    prof: "طايفي نصرآبادي مرتضي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس ۲۰۴"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس ۲۰۴"}
    ],
    examDate: "1404/10/30 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880029,
    name: "آئروديناميك ۱",
    code: "81_8880029",
    prof: "شيخ الاسلام نوري سيد مهدي",
    units: 3,
    sessions: [
      {days: [1], start: 7.5, duration: 1.5, location: "كلاس ۲۰۴"},
      {days: [4], start: 7.5, duration: 1.5, location: "كلاس ۲۰۴"}
    ],
    examDate: "1404/10/24 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880029,
    name: "آئرودينamيك ۱",
    code: "82_8880029",
    prof: "فتحعلي ماني",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس ۲۰۳"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس ۲۰۳"}
    ],
    examDate: "1404/10/24 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880030,
    name: "آزمباني برق والكترونيك",
    code: "81_8880030",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "آزمايشگاه"},
      {days: [2], start: 9, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
  {
    id: 8880030,
    name: "آزمباني برق والكترونيك",
    code: "82_8880030",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [2], start: 10.5, duration: 2, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
  {
    id: 8880031,
    name: "انتقال حرارت",
    code: "81_8880031",
    prof: "اعظم پور محمد هادي",
    units: 3,
    sessions: [
      {days: [1], start: 9, duration: 1.5, location: "كلاس ۲۰۷"},
      {days: [4], start: 9, duration: 1.5, location: "كلاس ۲۰۷"}
    ],
    examDate: "1404/10/20 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880036,
    name: "آز مكانيك سيالات",
    code: "81_8880036",
    prof: "شيخ الاسلام نوري سيد مهدي",
    units: 1,
    sessions: [
      {days: [3], start: 9, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 8880036,
    name: "آز مكانيك سيالات",
    code: "82_8880036",
    prof: "شيخ الاسلام نوري سيد مهدي",
    units: 1,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
{
    id: 8880038,
    name: "آز مقاومت مصالح",
    code: "81_8880038",
    prof: "ذاكري مهناز",
    units: 1,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس ۲۰۱"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
  {
    id: 8880038,
    name: "آز مقاومت مصالح",
    code: "82_8880038",
    prof: "ذاكري مهnاز",
    units: 1,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "كلاس ۲۰۵"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 8,
    gender: "مختلط"
  },
  {
    id: 8880040,
    name: "تحليل سازه هاي هوائي",
    code: "81_8880040",
    prof: "خراساني رضا",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "كلاس ۲۱۰"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس ۲۱۰"}
    ],
    examDate: "1404/11/05 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880040,
    name: "تحليل سازه هاي هوائي",
    code: "82_8880040",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [2], start: 13.5, duration: 1.5, location: "سالن"},
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس ۲۰۳"}
    ],
    examDate: "1404/11/05 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880047,
    name: "آز آئروديناميك ۱",
    code: "81_8880047",
    prof: "پوريوسفي غلامحسين",
    units: 1,
    sessions: [
      {days: [5], start: 9, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 8880047,
    name: "آز آئروديناميك ۱",
    code: "82_8880047",
    prof: "پوريوسفي غلامحسين",
    units: 1,
    sessions: [
      {days: [5], start: 10.5, duration: 2, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 8880047,
    name: "آز آئروديناميك ۱",
    code: "83_8880047",
    prof: "پوريوسفي غلامحسين",
    units: 1,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "آزمايشگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 8880048,
    name: "مقدمه اي برمهندسي هوافضا",
    code: "81_8880048",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [2], start: 15, duration: 1.5, location: "كلاس ۲۰۳"}
    ],
    examDate: "1404/11/06 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880048,
    name: "مقدمه اي برمهندسي هوافضا",
    code: "82_8880048",
    prof: "چيني فروشان محمد",
    units: 2,
    sessions: [
      {days: [5], start: 13.5, duration: 1.5, location: "كلاس ۲۱۲"}
    ],
    examDate: "1404/11/06 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880049,
    name: "كارگاه ورقكاري وجوشكاري درصنايع هوائي",
    code: "81_8880049",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [6], start: 7.5, duration: 1.5, location: "كارگاه"},
      {days: [6], start: 9, duration: 1.5, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 10,
    gender: "مختلط"
  }
,
{
    id: 8880049,
    name: "كارگاه ورقكاري وجوشكاري درصنايع هوائي",
    code: "82_8880049",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [6], start: 10.5, duration: 2, location: "كارگاه"},
      {days: [6], start: 13.5, duration: 1.5, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 8880049,
    name: "كارگاه ورقكاري وجوشكاري درصنايع هوائي",
    code: "83_8880049",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
      {days: [6], start: 15, duration: 1.5, location: "كارگاه"},
      {days: [6], start: 16.5, duration: 1.5, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 10,
    gender: "مختلط"
  },
  {
    id: 8880066,
    name: "پروژه",
    code: "80_8880066",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 30,
    gender: "مختلط"
  },
  {
    id: 8880067,
    name: "ترموديناميك ۲",
    code: "81_8880067",
    prof: "شيخ الاسلام نوري سيد مهدي",
    units: 2,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "كلاس ۲۰۳"}
    ],
    examDate: "1404/10/21 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880067,
    name: "ترموديناميك ۲",
    code: "82_8880067",
    prof: "مهدوي مقدم حسين",
    units: 2,
    sessions: [
      {days: [4], start: 10.5, duration: 2, location: "سالن"}
    ],
    examDate: "1404/10/21 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880068,
    name: "كارگاه موتور_بدنه وسيستمهاي هواپيما",
    code: "81_8880068",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [6], start: 7.5, duration: 1.5, location: "كارگاه"},
      {days: [6], start: 9, duration: 1.5, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 8880068,
    name: "كارگاه موتور_بدنه وسيستمهاي هواپيما",
    code: "82_8880068",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [6], start: 10.5, duration: 2, location: "كارگاه"},
      {days: [6], start: 13.5, duration: 1.5, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 8880068,
    name: "كارگاه موتور_بدنه وسيستمهاي هواپيma",
    code: "83_8880068",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [6], start: 15, duration: 1.5, location: "كارگاه"},
      {days: [6], start: 16.5, duration: 1.5, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 8880084,
    name: "كارگاه ابزاردقيق واندازه گيري درهواپيما",
    code: "81_8880084",
    prof: "نيكخواه امير علي",
    units: 2,
    sessions: [
      {days: [3], start: 7.5, duration: 1.5, location: "كلاس ۲۰۱"},
      {days: [3], start: 9, duration: 1.5, location: "كلاس ۲۰۱"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 8880084,
    name: "كارگاه ابزاردقيق واندازه گيري درهواپيما",
    code: "82_8880084",
    prof: "نيكخواه امير علي",
    units: 2,
    sessions: [
      {days: [3], start: 10.5, duration: 2, location: "كلاس ۲۰۱"},
      {days: [3], start: 15, duration: 1.5, location: "كلاس ۲۰۱"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 12,
    gender: "مختلط"
  }
,
{
    id: 8880084,
    name: "كارگاه ابزاردقيق واندازه گيري درهواپيما",
    code: "83_8880084",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كارگاه"},
      {days: [2], start: 10.5, duration: 2, location: "كارگاه"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 12,
    gender: "مختلط"
  },
  {
    id: 8880085,
    name: "سمينار ۱",
    code: "80_8880085",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 5,
    gender: "مختلط"
  },
  {
    id: 8880086,
    name: "سمينar ۲",
    code: "80_8880086",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا",
    capacity: 5,
    gender: "مختلط"
  },
  {
    id: 8880087,
    name: "اصول جلوبرنده ها",
    code: "81_8880087",
    prof: "ابراهيمي رضا",
    units: 3,
    sessions: [
      {days: [1], start: 15, duration: 1.5, location: "كلاس ۲۰۴"},
      {days: [4], start: 15, duration: 1.5, location: "كلاس ۲۰۴"}
    ],
    examDate: "1404/10/28 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880088,
    name: "طراحي سازه هاي صنايع هوايي",
    code: "81_8880088",
    prof: "مظفري علي",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس ۲۰۴"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس ۲۰۴"}
    ],
    examDate: "1404/11/01 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880088,
    name: "طراحي سازه هاي صنايع هوايي",
    code: "82_8880088",
    prof: "نوريان محمدعلي",
    units: 3,
    sessions: [
      {days: [2], start: 7.5, duration: 1.5, location: "كلاس ۲۰۷"},
      {days: [5], start: 7.5, duration: 1.5, location: "كلاس ۲۰۷"}
    ],
    examDate: "1404/11/01 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880089,
    name: "مكانيك پرواز ۲",
    code: "81_8880089",
    prof: "نيكخواه امير علي",
    units: 3,
    sessions: [
      {days: [1], start: 10.5, duration: 2, location: "كلاس ۲۰۴"},
      {days: [4], start: 10.5, duration: 2, location: "كلاس ۲۰۴"}
    ],
    examDate: "1404/11/06 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880089,
    name: "مكانيك پرواز ۲",
    code: "82_8880089",
    prof: "خوشنود عبدالمجيد",
    units: 3,
    sessions: [
      {days: [2], start: 9, duration: 1.5, location: "كلاس ۲۰۷"},
      {days: [5], start: 9, duration: 1.5, location: "كلاس ۲۰۷"}
    ],
    examDate: "1404/11/06 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880090,
    name: "طراحي هواپيما ۱",
    code: "81_8880090",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
      {days: [1], start: 13.5, duration: 1.5, location: "كلاس ۲۰۴"},
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس ۲۰۴"}
    ],
    examDate: "1404/10/22 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  },
  {
    id: 8880095,
    name: "آيين نگارش وگزارش نويسي فني",
    code: "81_8880095",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
      {days: [4], start: 13.5, duration: 1.5, location: "كلاس ۲۰۳"}
    ],
    examDate: "1404/10/30 08:00-10:30",
    department: "مهندسی هوافضا",
    capacity: 25,
    gender: "مختلط"
  }
,

]
