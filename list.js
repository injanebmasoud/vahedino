const courses = [
    {
        id: 1000001,
        name: " فیزیک نور",
        code: "51_4218015",
        prof: "اساتید گروه آموزشی",
        units: 3,
        sessions: [
            {days: [4], start: 7.5 ,duration: 1.5},
            {days: [2], start: 7.5, duration: 1.5}
            
        ],
        examDate: "1404/03/28",
        department: "مهندسي نقشه برداري"
    },
    ,
    {
        id: 100000,
        name: "فارسی یک",
        code: "56_۵۵۱۲۰۰۴",
        prof: "اساتید گروه آموزشی",
        units: 3,
        sessions: [
            {days: [1], start: 9, duration: 3},
            
        ],
        examDate: "1404/03/26",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 889,
        name: "معادلات دیفرانسیل",
        code: "47_5712095",
        prof: "اساتید گروه آموزشی",
        units: 3,
        sessions: [
            {days: [2], start: 9, duration: 1.5},
            {days: [4], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/09",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 204,
        name: "ریاضی عمومی ۲",
        code: "52_5712096",
        prof: "اساتید گروه آموزشی",
        units: 3,
        sessions: [
            {days: [2], start: 10.5, duration: 1.5},
            {days: [4], start: 10.5, duration: 1.5}
        ],
        examDate: "1404/04/04",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 3,
        name: "مبانی نقشه",
        code: "21_7707070",
        prof: "دکتر پیله فروشها",
        units: 3,
        sessions: [
            {days: [2], start: 13.5, duration: 1.5},
            {days: [4], start: 13.5, duration: 1.5}
        ],
        examDate:  "1404/03/31",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 5,
        name: "ع مبانی نقشه",
        code: "21_7707071",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [3], start: 9, duration: 3.5}
        ],
        examDate: "تعیین نشده ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 6,
        name: "ع مبانی نقشه",
        code: "22_7707071",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [5], start: 9, duration: 6}
        ],
        examDate: "      تعیین  نشده ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 7,
        name: "مصالح ساختمانی",
        code: "21_7707072",
        prof: "دکتر باقری",
        units: 2,
        sessions: [
            {days: [1], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/04/02",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 8,
        name: "زیرسازی روسازی راه",
        code: "21_7707075",
        prof: "دکتر خدادادی",
        units: 2,
        sessions: [
            {days: [4], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/09",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 9,
        name: "روش اجرای ساختمان",
        code: "21_7707076",
        prof: "اساتید آموزشی",
        units: 2,
        sessions: [
            {days: [5], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 10,
        name: "تئوری برآورد",
        code: "21_7707078",
        prof: "دکتر مشهدی",
        units: 3,
        sessions: [
            {days: [2], start: 9, duration: 1.5},
            {days: [4], start: 9, duration: 1.5}
        ],
        examDate: "1404/03/26",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 11,
        name: "ژئودزی هندسی",
        code: "21_7707081",
        prof: "دکتر علیزاده",
        units: 3,
        sessions: [
            {days: [2], start: 9, duration: 1.5},
            {days: [3], start: 10.5, duration: 1.5}
        ],
        examDate: "1404/03/25",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 12,
        name: "نقشه برداری ژئوتیک",
        code: "21_7707084",
        prof: "دکتر وثوقی",
        units: 3,
        sessions: [
            {days: [2], start: 10.5, duration: 1.5},
            {days: [5], start: 15, duration: 1.5}
        ],
        examDate: "1404/03/28",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 13,
        name: "هیدروگرافی",
        code: "21_7707086",
        prof: "دکتر جزیرئیان",
        units: 2,
        sessions: [
            {days: [4], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/03/27",
        department: "مهندسي نقشه برداري"
    },
    
    {
        id: 16,
        name: "مبانی فتوگرامتری",
        code: "21_۷۷۰۷۰۸۷",
        prof: "دکتر مختارزاده",
        units: 3,
        sessions: [
            {days: [2], start: 10.5, duration: 1.5},
            {days: [3], start: 10.5, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 17,
        name: "ع مبانی فتوگرامتری",
        code: "21_۷۷۰۷۰۸۸",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [4], start: 10.5, duration: 1.5}
        ],
        examDate:  "تعیین نشده      ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 18,
        name: "ع مبانی فتوگرامتری",
        code: "22_۷۷۰۷۰۸۸",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [5], start: 13.5, duration: 1.5}
        ],
        examDate:  "تعیین نشده        ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 40,
        name: "ع مبانی فتوگرامتری",
        code: "23_۷۷۰۷۰۸۸",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [5], start: 10.5, duration: 1.5}
        ],
        examDate:  "تعیین نشده          ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 19,
        name: "ع مبانی فتوگرامتری",
        code: "25_۷۷۰۷۰۸۸",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [5], start: 7.5, duration: 1.5}
        ],
        examDate:  "تعیین   نشده",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 20,
        name: "کاربرد فتوگرامتري",
        code: "21_۷۷۰۷۰۹۰",
        prof: "دکتر عبادی",
        units: 3,
        sessions: [
            {days: [2], start: 15, duration: 1.5},
            {days: [4], start: 10.5, duration: 1.5}
        ],
        examDate: "1404/04/01",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 21,
        name: "ع کاربرد فتوگرامتري",
        code: "21_۷۷۰۷۰۹۱",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [1], start: 10.5, duration: 1.5}
        ],
        examDate:  "تعیین  نشده  ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 22,
        name: "ع کاربرد فتوگرامتري",
        code: "22_۷۷۰۷۰۹۱",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [4], start: 9, duration: 1.5}
        ],
        examDate:  "تعیین    نشده   ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 23,
        name: "ع سنجش از دور",
        code: "21_۷۷۰۷۰۹۴",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [4], start: 10.5, duration: 1.5}
        ],
        examDate:  "تعیین    نشده    ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 24,
        name: "ع سنجش از دور",
        code: "22_۷۷۰۷۰۹۴",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [4], start: 13.5, duration: 1.5}
        ],
        examDate:  "تعیین     نشده     ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 25,
        name: "تحليل هاي مكاني",
        code: "21_۷۷۰۷۱۰۰",
        prof: "دکتر ملک",
        units: 2,
        sessions: [
            {days: [2], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/04/04",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 26,
        name: "ع تحليل هاي مكاني",
        code: "21_۷۷۰۷۱۰۱",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [1], start: 13.5, duration: 1.5}
        ],
        examDate:  "تعیین      نشده      ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 66,
        name: "ع تحليل هاي مكاني",
        code: "22_۷۷۰۷۱۰۱",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [1], start: 9, duration: 1.5}
        ],
        examDate:  "  تعیین     نشده" ,
        department: "مهندسي نقشه برداري"
    },
    {
        id: 27,
        name: "ع تحليل هاي مكاني",
        code: "23_۷۷۰۷۱۰۱",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [3], start: 7.5, duration: 1.5}
        ],
        examDate:  "تعیین    نشده‌      ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 28,
        name: "ع تحليل هاي مكاني",
        code: "24_۷۷۰۷۱۰۱",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [3], start: 9, duration: 1.5}
        ],
        examDate:  "تعیین  نشده    ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 29,
        name: "حد نگاری",
        code: "21_۷۷۰۷۱۰۲",
        prof: "دکتر مسگری",
        units: 1,
        sessions: [
            {days: [3], start: 9, duration: 1.5}
        ],
        examDate: "1404/03/31",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 30,
        name: "مديريت پروژه",
        code: "21_۷۷۰۷۱۰۳",
        prof: "دکتر کریمی",
        units: 2,
        sessions: [
            {days: [3], start: 10.5, duration: 1.5}
        ],
        examDate: "1404/04/08",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 31,
        name: "کاربرد سيستم اطلاعات مكاني",
        code: "21_۷۷۰۷۱۰۵",
        prof: "دکتر آل شیخ",
        units: 2,
        sessions: [
            {days: [2], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/03/31",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 32,
        name: "آمايش سرزمين",
        code: "21_۷۷۰۷۱۰۷",
        prof: "اساتید آموزشی",
        units: 2,
        sessions: [
            {days: [2], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/02",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 33,
        name: "فتوگرامتري برد  ",
        code: "21_۷۷۰۷۱۱۲",
        prof: "اساتید آموزشی",
        units: 3,
        sessions: [
            {days: [1], start: 7.5, duration: 1.5},
            {days: [4], start: 10.5, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 34,
        name: "كاربردسنجش ازدور ",
        code: "21_۷۷۰۷۱۱۳",
        prof: "دکتر خصالی",
        units: 3,
        sessions: [
            {days: [2], start: 7.5, duration: 1.5},
            {days: [3], start: 7.5, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 35,
        name: "ميكروژئودزي",
        code: "21_۷۷۰۷۱۱۵",
        prof: "دکتر وثوقی",
        units: 2,
        sessions: [
            {days: [4], start: 9, duration: 1.5}
        ],
        examDate: "1404/03/25",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 36,
        name: "جزر و مد",
        code: "21_۷۷۰۷۱۱۸",
        prof: "دکتر جزیرئیان",
        units: 2,
        sessions: [
            {days: [2], start: 10.5, duration: 1.5}
        ],
        examDate: "1404/04/01",
        department: "مهندسي نقشه برداري"
    },
    

// فیزیک
{
    id: 14,
    name: "فیزیک عمومی 2",
    code: "41_4210040",
    prof: "دکتر رادین",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [5], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "فيزيك"
},
{
    id: 15,
    name: "فیزیک عمومی 2",
    code: "42_4210040",
    prof: "دکتر حاتمی",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [5], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "فيزيك"
},

// مهندسی برق


    {
        id: 70,
        name: "ریاضیات مهندسی",
        code: "11_1110001",
        prof: "شاملی محمدعلی",
        units: 3,
        sessions: [
            {days: [1], start: 7.5, duration: 1.5},
            {days: [5], start: 7.5, duration: 1.5}
        ],
        examDate: "1404/03/31",
        department: "مهندسی برق"
    },
    {
        id: 71,
        name: "مدارهای الکتریکی ۱",
        code: "11_1110136",
        prof: "شمسی حسین",
        units: 3,
        sessions: [
            {days: [2], start: 9, duration: 1.5},
            {days: [4], start: 9, duration: 1.5}
        ],
        examDate: "1404/03/28",
        department: "مهندسی برق"
    },
    {
        id: 72,
        name: "مدارهای الکتریکی ۱",
        code: "12_1110136",
        prof: "کیوان فرد فرزانه",
        units: 3,
        sessions: [
            {days: [3], start: 7.5, duration: 1.5},
            {days: [5], start: 7.5, duration: 1.5}
        ],
        examDate: "1404/03/28",
        department: "مهندسی برق"
    },
    {
        id: 73,
        name: "معادلات دیفرانسیل",
        code: "11_1110203",
        prof: "نکویی",
        units: 3,
        sessions: [
            {days: [2], start: 7.5, duration: 1.5},
            {days: [4], start: 7.5, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسی برق"
    },
    {
        id: 74,
        name: "معادلات دیفرانسیل",
        code: "12_1110203",
        prof: "خادم علی",
        units: 3,
        sessions: [
            {days: [3], start: 10.5, duration: 2},
            {days: [5], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/07",
        department: "مهندسی برق"
    },
    {
        id: 75,
        name: "محاسبات عددی",
        code: "11_1110234",
        prof: "نیکوفرد امیرحسین",
        units: 2,
        sessions: [
            {days: [1], start: 15, duration: 1.5}
        ],
        examDate: "1404/03/26",
        department: "مهندسی برق"
    },
    {
        id: 76,
        name: "سیستم‌های دیجیتال ۱",
        code: "11_1110239",
        prof: "یارمند",
        units: 3,
        sessions: [
            {days: [2], start: 10.5, duration: 2},
            {days: [4], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/03",
        department: "مهندسی برق"
    },
    {
        id: 77,
        name: "سیستم‌های دیجیتال ۱",
        code: "12_1110239",
        prof: "یارمند",
        units: 3,
        sessions: [
            {days: [2], start: 15, duration: 1.5},
            {days: [4], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسی برق"
    },
    {
        id: 78,
        name: "سیستم‌های دیجیتال ۱",
        code: "13_1110239",
        prof: "دلیر روی فرد رسول",
        units: 3,
        sessions: [
            {days: [2], start: 9, duration: 1.5},
            {days: [4], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسی برق"
    },
    {
        id: 79,
        name: "سیستم‌های دیجیتال ۲",
        code: "11_1110240",
        prof: "دلیر روی فرد رسول",
        units: 3,
        sessions: [
            {days: [2], start: 10.5, duration: 2},
            {days: [4], start: 10.5, duration: 2}
        ],
        examDate: "1404/03/31",
        department: "مهندسی برق"
    },
    {
        id: 80,
        name: "سیستم‌های دیجیتال ۲",
        code: "13_1110240",
        prof: "خان کلانتری رکن آبادی سعید",
        units: 3,
        sessions: [
            {days: [2], start: 10.5, duration: 2},
            {days: [4], start: 10.5, duration: 2}
        ],
        examDate: "1404/03/31",
        department: "مهندسی برق"
    },
    {
        id: 81,
        name: "مدارهای الکتریکی ۲",
        code: "11_1110241",
        prof: "دلیر روی فرد رسول",
        units: 2,
        sessions: [
            {days: [3], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/02",
        department: "مهندسی برق"
    },
    {
        id: 82,
        name: "مدارهای الکتریکی ۲",
        code: "12_1110241",
        prof: "دلیر روی فرد رسول",
        units: 2,
        sessions: [
            {days: [5], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/02",
        department: "مهندسی برق"
    },
    {
        id: 83,
        name: "سیگنال‌ها و سیستم‌ها",
        code: "11_1110256",
        prof: "جمشیدی",
        units: 3,
        sessions: [
            {days: [1], start: 9, duration: 1.5},
            {days: [5], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/01",
        department: "مهندسی برق"
    },
    {
        id: 84,
        name: "سیگنال‌ها و سیستم‌ها",
        code: "12_1110256",
        prof: "محبی آشتیانی مریم",
        units: 3,
        sessions: [
            {days: [3], start: 10.5, duration: 2},
            {days: [5], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/01",
        department: "مهندسی برق"
    },
    {
        id: 85,
        name: "سیگنال‌ها و سیستم‌ها",
        code: "13_1110256",
        prof: "حیرانی نوبری جعفر",
        units: 3,
        sessions: [
            {days: [2], start: 7.5, duration: 1.5},
            {days: [4], start: 7.5, duration: 1.5}
        ],
        examDate: "1404/04/01",
        department: "مهندسی برق"
    },
    {
        id: 86,
        name: "الکترومغناطیس مهندسی",
        code: "11_1110258",
        prof: "قطان کاشانی زهرا",
        units: 3,
        sessions: [
            {days: [2], start: 9, duration: 1.5},
            {days: [5], start: 9, duration: 1.5}
        ],
        examDate: "1404/03/26",
        department: "مهندسی برق"
    },
    {
        id: 87,
        name: "الکترونیک ۱",
        code: "11_1110259",
        prof: "احسانیان مفرد مهدی",
        units: 3,
        sessions: [
            {days: [1], start: 10.5, duration: 2},
            {days: [3], start: 10.5, duration: 2}
        ],
        examDate: "1404/03/25",
        department: "مهندسی برق"
    },
    {
        id: 88,
        name: "الکترونیک ۲",
        code: "11_1110260",
        prof: "ندیمی ابراهیم",
        units: 3,
        sessions: [
            {days: [3], start: 9, duration: 1.5},
            {days: [5], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/08",
        department: "مهندسی برق"
    },
    {
        id: 89,
        name: "الکترونیک ۲",
        code: "12_1110260",
        prof: "زندی حسام",
        units: 3,
        sessions: [
            {days: [1], start: 10.5, duration: 2},
            {days: [5], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/08",
        department: "مهندسی برق"
    },
    {
        id: 90,
        name: "الکترونیک ۲",
        code: "13_1110260",
        prof: "کولیوند یاراله",
        units: 3,
        sessions: [
            {days: [1], start: 13.5, duration: 1.5},
            {days: [5], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/04/08",
        department: "مهندسی برق"
    },
    {
        id: 91,
        name: "احتمال مهندسی",
        code: "11_1110261",
        prof: "حبیبی بسطامی علی",
        units: 3,
        sessions: [
            {days: [2], start: 10.5, duration: 2},
            {days: [4], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/04",
        department: "مهندسی برق"
    },
    {
        id: 92,
        name: "احتمال مهندسی",
        code: "12_1110261",
        prof: "اخباری بهاره",
        units: 3,
        sessions: [
            {days: [1], start: 9, duration: 1.5},
            {days: [3], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/04",
        department: "مهندسی برق"
    },
    {
        id: 93,
        name: "برنامه‌نویسی کامپیوتر",
        code: "11_1110262",
        prof: "خان کلانتری رکن آبادی سعید",
        units: 3,
        sessions: [
            {days: [2], start: 9, duration: 1.5},
            {days: [4], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/09",
        department: "مهندسی برق"
    },
    {
        id: 94,
        name: "برنامه‌نویسی کامپیوتر",
        code: "12_1110262",
        prof: "نوید نادری",
        units: 3,
        sessions: [
            {days: [3], start: 15, duration: 1.5},
            {days: [5], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/09",
        department: "مهندسی برق"
    },
    {
        id: 95,
        name: "مبانی بیوالکتریک",
        code: "11_1110280",
        prof: "ولی منصور",
        units: 3,
        sessions: [
            {days: [1], start: 10.5, duration: 2},
            {days: [3], start: 10.5, duration: 2}
        ],
        examDate: "1404/03/25",
        department: "مهندسی برق"
    },
    {
        id: 96,
        name: "سیستم‌های رادیولوژی و تصویرگر پزشکی",
        code: "11_1110284",
        prof: "خادم علی",
        units: 2,
        sessions: [
            {days: [3], start: 9, duration: 1.5},
            {days: [5], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/08",
        department: "مهندسی برق"
    },
    {
        id: 97,
        name: "هوش مصنوعی مقدماتی",
        code: "11_1110289",
        prof: "علیاری شوره دلی مهدی",
        units: 3,
        sessions: [
            {days: [2], start: 9, duration: 1.5},
            {days: [4], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/04",
        department: "مهندسی برق"
    }
,

// مهندسی کمپیوتر

    {
        id: 98,
        name: "الکترونیک دیجیتال و طراحی مدارهای مجتمع پر تراکم",
        code: "19_1910020",
        prof: "صیفوری",
        units: 3,
        sessions: [
            {days: [6], start: 7.5, duration: 1.5},
            {days: [2], start: 7.5, duration: 1.5}
        ],
        examDate: "1404/04/02",
        department: "مهندسی کامپیوتر"
    },
    {
        id: 99,
        name: "نظریه و الگوریتم‌های گراف",
        code: "19_1910022",
        prof: "شهسواری",
        units: 3,
        sessions: [
            {days: [2], start: 7.5, duration: 1.5},
            {days: [4], start: 7.5, duration: 1.5}
        ],
        examDate: "1404/04/04",
        department: "مهندسی کامپیوتر"
    },
    {
        id: 100,
        name: "شبکه‌های کامپیوتری ۱",
        code: "19_1910023",
        prof: "مرادیان",
        units: 3,
        sessions: [
            {days: [1], start: 9, duration: 1.5},
            {days: [3], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/08",
        department: "مهندسی کامپیوتر"
    },
    {
        id: 101,
        name: "شبکه‌های کامپیوتری ۲",
        code: "19_1910024",
        prof: "یعقوبی کعبه",
        units: 3,
        sessions: [
            {days: [6], start: 15, duration: 1.5},
            {days: [2], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسی کامپیوتر"
    },
    {
        id: 102,
        name: "آمار و احتمالات مهندسی",
        code: "19_1910029",
        prof: "اساتید گروه آموزشی",
        units: 3,
        sessions: [
            {days: [1], start: 15.5, duration: 2},
            {days: [3], start: 15.5, duration: 2}
        ],
        examDate: "1404/04/04",
        department: "مهندسی کامپیوتر"
    },
    {
        id: 103,
        name: "زبان تخصصی",
        code: "19_1910039",
        prof: "یعقوبی کعبه",
        units: 2,
        sessions: [
            {days: [6], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/04/02",
        department: "مهندسی کامپیوتر"
    }
,

// عمران

{
    id: 170,
    name: "اقتصاد مهندسی",
    code: "21_2220084",
    prof: "دهقانی سانیج محمدسعید",
    units: 2,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/01",
    department: "مهندسی عمران"
},
{
    id: 171,
    name: "بازرسی، تعمیر و ترمیم سازه‌ها",
    code: "21_2220097",
    prof: "بهشتی اول سید بهرام",
    units: 2,
    sessions: [
        {days: [2], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/07",
    department: "مهندسی عمران"
},
{
    id: 172,
    name: "اصول مهندسی زلزله و باد",
    code: "21_2220098",
    prof: "مشایخی محمدرضا، ذوالفقاری محمدرضا",
    units: 3,
    sessions: [
        {days: [6], start: 9, duration: 1.5},
        {days: [2], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "مهندسی عمران"
},
{
    id: 173,
    name: "محاسبات عددی",
    code: "21_2220110",
    prof: "اسدی رزا",
    units: 2,
    sessions: [
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "مهندسی عمران"
},
{
    id: 174,
    name: "محاسبات عددی",
    code: "22_2220110",
    prof: "ایزدی اردلان",
    units: 2,
    sessions: [
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "مهندسی عمران"
},
{
    id: 175,
    name: "مقررات ملی ساختمان",
    code: "21_2220116",
    prof: "صباغ یزدی سعیدرضا",
    units: 2,
    sessions: [
        {days: [2], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/07",
    department: "مهندسی عمران"
},
{
    id: 176,
    name: "اصول مدیریت ساخت",
    code: "21_2220163",
    prof: "علیپوری یعقوب",
    units: 2,
    sessions: [
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/31",
    department: "مهندسی عمران"
},
{
    id: 177,
    name: "هوش مصنوعی و تحول دیجیتال",
    code: "21_2220171",
    prof: "قاسم زاده حسن",
    units: 2,
    sessions: [
        {days: [6], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "مهندسی عمران"
},
{
    id: 178,
    name: "برنامه‌سازی کامپیوتر",
    code: "21_2220173",
    prof: "صادقی نعیمه",
    units: 3,
    sessions: [
        {days: [6], start: 9, duration: 1.5},
        {days: [2], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/07",
    department: "مهندسی عمران"
},
{
    id: 179,
    name: "برنامه‌سازی کامپیوتر",
    code: "22_2220173",
    prof: "صادقی نعیمه",
    units: 3,
    sessions: [
        {days: [6], start: 10.5, duration: 2},
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/07",
    department: "مهندسی عمران"
},
{
    id: 180,
    name: "برنامه‌سازی کامپیوتر",
    code: "23_2220173",
    prof: "خدادادی مجتبی",
    units: 3,
    sessions: [
        {days: [6], start: 9, duration: 1.5},
        {days: [2], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/07",
    department: "مهندسی عمران"
},
{
    id: 181,
    name: "برنامه‌سازی کامپیوتر",
    code: "24_2220173",
    prof: "خدادادی مجتبی",
    units: 3,
    sessions: [
        {days: [6], start: 10.5, duration: 2},
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/07",
    department: "مهندسی عمران"
},
{
    id: 182,
    name: "مبانی معماری و شهرسازی",
    code: "21_2220177",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی عمران"
},
{
    id: 183,
    name: "مبانی معماری و شهرسازی",
    code: "22_2220177",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی عمران"
},
{
    id: 184,
    name: "مبانی معماری و شهرسازی",
    code: "23_2220177",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی عمران"
},
{
    id: 185,
    name: "مبانی معماری و شهرسازی",
    code: "24_2220177",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی عمران"
},
{
    id: 186,
    name: "اصول مهندسی منابع آب",
    code: "21_2220204",
    prof: "موسوی سید مرتضی",
    units: 2,
    sessions: [
        {days: [6], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی عمران"
},
{
    id: 187,
    name: "تغییر اقلیم",
    code: "21_2220205",
    prof: "اسدی رزا",
    units: 2,
    sessions: [
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "مهندسی عمران"
},
{
    id: 188,
    name: "اصول ایمنی در ساختمان و حفاظت آتش سوزی",
    code: "21_2220223",
    prof: "احمدیار",
    units: 2,
    sessions: [
        {days: [1], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/31",
    department: "مهندسی عمران"
}
,
{
    id: 189,
    name: "مکانیک سیالات",
    code: "21_2220224",
    prof: "دکتر مسعودی",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5},
        {days: [3], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/03/29",
    department: "مهندسی عمران"
},
{
    id: 190,
    name: "مکانیک سیالات",
    code: "22_2220224", 
    prof: "دکتر مسعودی",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/29",
    department: "مهندسی عمران"
},
{
    id: 191,
    name: "مقاومت مصالح ۱",
    code: "21_2220225",
    prof: "دکتر کاظمی",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5},
        {days: [4], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/03/26",
    department: "مهندسی عمران"
},
{
    id: 192,
    name: "مقاومت مصالح ۱",
    code: "22_2220225",
    prof: "دکتر کاظمی",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/26",
    department: "مهندسی عمران"
},
{
    id: 193,
    name: "مقاومت مصالح ۲",
    code: "21_2220226",
    prof: "دکتر صباغ یزدی",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 1.5},
        {days: [3], start: 10.5, duration: 1.5}
    ],
    examDate: "1404/04/02",
    department: "مهندسی عمران"
},
{
    id: 194,
    name: "تحلیل سازه ۱",
    code: "21_2220227",
    prof: "دکتر مشایخی",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 1.5},
        {days: [4], start: 10.5, duration: 1.5}
    ],
    examDate: "1404/03/30",
    department: "مهندسی عمران"
},
{
    id: 195,
    name: "تحلیل سازه ۲",
    code: "21_2220228",
    prof: "دکتر ذوالفقاری",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/05",
    department: "مهندسی عمران"
},
{
    id: 196,
    name: "طراحی سازه‌های فولادی ۱",
    code: "21_2220229",
    prof: "دکتر بهشتی",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5},
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/01",
    department: "مهندسی عمران"
},
{
    id: 197,
    name: "طراحی سازه‌های بتنی ۱",
    code: "21_2220230",
    prof: "دکتر قاسم زاده",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "مهندسی عمران"
}
,
    {
        id: 104,
        name: "اقتصاد مهندسی",
        code: "21_2220084",
        prof: "دهقانی سانیج محمدسعید",
        units: 2,
        sessions: [
            {days: [1], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/04/01",
        department: "مهندسی عمران"
    },
    {
        id: 105,
        name: "بازرسی، تعمیر و ترمیم سازه‌ها",
        code: "21_2220097",
        prof: "بهشتی اول سید بهرام",
        units: 2,
        sessions: [
            {days: [2], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسی عمران"
    },
    {
        id: 106,
        name: "اصول مهندسی زلزله و باد",
        code: "21_2220098",
        prof: "مشایخی محمدرضا، ذوالفقاری محمدرضا",
        units: 3,
        sessions: [
            {days: [6], start: 9, duration: 1.5},
            {days: [2], start: 9, duration: 1.5}
        ],
        examDate: "1404/03/25",
        department: "مهندسی عمران"
    },
    {
        id: 107,
        name: "محاسبات عددی",
        code: "21_2220110",
        prof: "اسدی رزا",
        units: 2,
        sessions: [
            {days: [3], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/03/25",
        department: "مهندسی عمران"
    },
    {
        id: 108,
        name: "محاسبات عددی",
        code: "22_2220110",
        prof: "ایزدی اردلان",
        units: 2,
        sessions: [
            {days: [3], start: 15, duration: 1.5}
        ],
        examDate: "1404/03/25",
        department: "مهندسی عمران"
    },
    // {
    //     id: 109,
    //     name: "کارآموزی",
    //     code: "21_2220114",
    //     prof: "اساتید گروه آموزشی",
    //     units: 1,
    //     sessions: [],
    //     examDate: "تعیین نشده",
    //     department: "مهندسی عمران"
    // },
    {
        id: 110,
        name: "مقررات ملی ساختمان",
        code: "21_2220116",
        prof: "صباغ یزدی سعیدرضا",
        units: 2,
        sessions: [
            {days: [2], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسی عمران"
    },
    // {
    //     id: 111,
    //     name: "پروژه تخصصی",
    //     code: "21_2220121",
    //     prof: "اساتید گروه آموزشی",
    //     units: 3,
    //     sessions: [],
    //     examDate: "تعیین نشده",
    //     department: "مهندسی عمران"
    // },
    {
        id: 112,
        name: "اصول مدیریت ساخت",
        code: "21_2220163",
        prof: "علیپوری یعقوب",
        units: 2,
        sessions: [
            {days: [3], start: 10.5, duration: 2}
        ],
        examDate: "1404/03/31",
        department: "مهندسی عمران"
    },
    {
        id: 113,
        name: "هوش مصنوعی و تحول دیجیتال",
        code: "21_2220171",
        prof: "قاسم زاده حسن",
        units: 2,
        sessions: [
            {days: [6], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/03/25",
        department: "مهندسی عمران"
    },
    {
        id: 114,
        name: "برنامه‌سازی کامپیوتر",
        code: "21_2220173",
        prof: "صادقی نعیمه",
        units: 3,
        sessions: [
            {days: [6], start: 9, duration: 1.5},
            {days: [2], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسی عمران"
    },
    {
        id: 115,
        name: "برنامه‌سازی کامپیوتر",
        code: "22_2220173",
        prof: "صادقی نعیمه",
        units: 3,
        sessions: [
            {days: [6], start: 10.5, duration: 2},
            {days: [2], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/07",
        department: "مهندسی عمران"
    },
    {
        id: 116,
        name: "برنامه‌سازی کامپیوتر",
        code: "23_2220173",
        prof: "خدادادی مجتبی",
        units: 3,
        sessions: [
            {days: [6], start: 9, duration: 1.5},
            {days: [2], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسی عمران"
    },
    {
        id: 117,
        name: "برنامه‌سازی کامپیوتر",
        code: "24_2220173",
        prof: "خدادادی مجتبی",
        units: 3,
        sessions: [
            {days: [6], start: 10.5, duration: 2},
            {days: [2], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/07",
        department: "مهندسی عمران"
    },
    {
        id: 118,
        name: "مبانی معماری و شهرسازی",
        code: "21_2220177",
        prof: "اساتید گروه آموزشی",
        units: 2,
        sessions: [
            {days: [3], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسی عمران"
    },
    {
        id: 119,
        name: "مبانی معماری و شهرسازی",
        code: "22_2220177",
        prof: "اساتید گروه آموزشی",
        units: 2,
        sessions: [
            {days: [3], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسی عمران"
    },
    {
        id: 120,
        name: "مبانی معماری و شهرسازی",
        code: "23_2220177",
        prof: "اساتید گروه آموزشی",
        units: 2,
        sessions: [
            {days: [3], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسی عمران"
    },
    {
        id: 121,
        name: "مبانی معماری و شهرسازی",
        code: "24_2220177",
        prof: "اساتید گروه آموزشی",
        units: 2,
        sessions: [
            {days: [3], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسی عمران"
    },
    {
        id: 122,
        name: "اصول مهندسی منابع آب",
        code: "21_2220204",
        prof: "موسوی سید مرتضی",
        units: 2,
        sessions: [
            {days: [6], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسی عمران"
    },
    {
        id: 122,
        name: "تغییر اقلیم",
        code: "21_2220205",
        prof: "اسدی رزا",
        units: 2,
        sessions: [
            {days: [3], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/08",
        department: "مهندسی عمران"
    },
    {
        id: 123,
        name: "اصول ایمنی در ساختمان و حفاظت آتش سوزی",
        code: "21_2220223",
        prof: "احمدیار",
        units: 2,
        sessions: [
            {days: [1], start: 10.5, duration: 2}
        ],
        examDate: "1404/03/31",
        department: "مهندسی عمران"
    },

// هوافضا
// Continuing the courses array...
{
    id: 124,
    name: "آز مکانیک سیالات",
    code: "81_8880036",
    prof: "شیخ الاسلام نوری سید مهدی",
    units: 1,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 125,
    name: "آز مکانیک سیالات",
    code: "82_8880036",
    prof: "شیخ الاسلام نوری سید مهدی",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 126,
    name: "آز مکانیک سیالات",
    code: "83_8880036",
    prof: "شیخ الاسلام نوری سید مهدی",
    units: 1,
    sessions: [
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 127,
    name: "طراحی اجزاء ۱",
    code: "81_8880037",
    prof: "مظفری علی",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی هوافضا"
},
{
    id: 128,
    name: "طراحی اجزاء ۱",
    code: "82_8880037",
    prof: "ذاکری مهناز",
    units: 3,
    sessions: [
        {days: [3], start: 7.5, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی هوافضا"
},
{
    id: 129,
    name: "آز مقاومت مصالح",
    code: "81_8880038",
    prof: "ذاکری مهناز",
    units: 1,
    sessions: [
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 130,
    name: "آز مقاومت مصالح",
    code: "82_8880038",
    prof: "اساتید گروه آموزشی",
    units: 1,
    sessions: [
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 131,
    name: "تحلیل سازه‌های هوایی",
    code: "81_8880040",
    prof: "خراسانی رضا",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "مهندسی هوافضا"
},
{
    id: 132,
    name: "آز آئرودینامیک ۱",
    code: "81_8880047",
    prof: "پوریوسفی غلامحسین",
    units: 1,
    sessions: [
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 133,
    name: "آز آئرودینامیک ۱",
    code: "82_8880047",
    prof: "پوریوسفی غلامحسین",
    units: 1,
    sessions: [
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 134,
    name: "آز آئرودینامیک ۱",
    code: "83_8880047",
    prof: "پوریوسفی غلامحسین",
    units: 1,
    sessions: [
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 135,
    name: "زبان تخصصی مهندسی هوافضا",
    code: "81_8880050",
    prof: "واحدی",
    units: 2,
    sessions: [
        {days: [6], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی هوافضا"
},
{
    id: 136,
    name: "زبان تخصصی مهندسی هوافضا",
    code: "82_8880050",
    prof: "واحدی",
    units: 2,
    sessions: [
        {days: [6], start: 16.5, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی هوافضا"
},
{
    id: 137,
    name: "محاسبات عددی",
    code: "81_8880059",
    prof: "پوریوسفی غلامحسین",
    units: 2,
    sessions: [
        {days: [3], start: 15, duration: 2}
    ],
    examDate: "1404/03/27",
    department: "مهندسی هوافضا"
},
{
    id: 138,
    name: "محاسبات عددی",
    code: "82_8880059",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [4], start: 15, duration: 2}
    ],
    examDate: "1404/03/27",
    department: "مهندسی هوافضا"
},
{
    id: 139,
    name: "مکانیک پرواز ۱",
    code: "81_8880060",
    prof: "نیکخواه امیرعلی",
    units: 3,
    sessions: [
        {days: [6], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/28",
    department: "مهندسی هوافضا"
},
{
    id: 140,
    name: "مکانیک پرواز ۱",
    code: "82_8880060",
    prof: "خوشنود عبدالمجید",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "مهندسی هوافضا"
},
{
    id: 141,
    name: "ترمودینامیک ۲",
    code: "81_8880067",
    prof: "مهدوی مقدم حسین",
    units: 2,
    sessions: [
        {days: [6], start: 15, duration: 2}
    ],
    examDate: "1404/04/04",
    department: "مهندسی هوافضا"
},
{
    id: 142,
    name: "آئرودینامیک ۲",
    code: "81_8880082",
    prof: "فتحعلی مانی",
    units: 3,
    sessions: [
        {days: [6], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی هوافضا"
},

// مکانیک
{
    id: 143,
    name: "زبان تخصصی",
    code: "31_3330016",
    prof: "نحوی علی",
    units: 2,
    sessions: [
        {days: [1], start: 15, duration: 1.5}
    ],
    examDate: "1404/03/26",
    department: "مهندسی مکانیک"
},
// {
//     id: 144,
//     name: "پروژه",
//     code: "31_3330017",
//     prof: "اساتید گروه آموزشی",
//     units: 3,
//     sessions: [],
//     examDate: "تعیین نشده",
//     department: "مهندسی مکانیک"
// },

{
    id: 145,
    name: "برنامه‌سازی کامپیوتر",
    code: "31_3330039",
    prof: "کازرونی مهرداد",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "مهندسی مکانیک"
},
{
    id: 146,
    name: "برنامه‌سازی کامپیوتر",
    code: "32_3330039",
    prof: "ستاری امیرمحمد",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "مهندسی مکانیک"
},
{
    id: 147,
    name: "محاسبات عددی",
    code: "31_3330040",
    prof: "ساداتی سیدحسین",
    units: 2,
    sessions: [
        {days: [2], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "مهندسی مکانیک"
},
{
    id: 148,
    name: "محاسبات عددی",
    code: "32_3330040",
    prof: "لسانی",
    units: 2,
    sessions: [
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "مهندسی مکانیک"
},
{
    id: 149,
    name: "مبانی مهندسی برق ۱",
    code: "31_3330041",
    prof: "اکبری",
    units: 3,
    sessions: [
        {days: [1], start: 16.5, duration: 1.5},
        {days: [3], start: 16.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی مکانیک"
},
{
    id: 150,
    name: "مبانی مهندسی برق ۲",
    code: "31_3330042",
    prof: "علیزاده",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی مکانیک"
},
{
    id: 151,
    name: "مبانی مهندسی برق ۲",
    code: "32_3330042",
    prof: "اکبری",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی مکانیک"
},
{
    id: 152,
    name: "آز مبانی مهندسی برق",
    code: "31_3330043",
    prof: "عباس زاده کریم",
    units: 1,
    sessions: [
        {days: [3], start: 13.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک"
},
{
    id: 153,
    name: "آز مبانی مهندسی برق",
    code: "32_3330043",
    prof: "عباس زاده کریم",
    units: 1,
    sessions: [
        {days: [3], start: 15.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک"
},
{
    id: 154,
    name: "کنترل مدرن",
    code: "31_3330051",
    prof: "نجفی اردکانی علی",
    units: 3,
    sessions: [
        {days: [6], start: 16.5, duration: 1.5},
        {days: [2], start: 16.5, duration: 1.5}
    ],
    examDate: "1404/04/01",
    department: "مهندسی مکانیک"
},
{
    id: 155,
    name: "دینامیک خودرو",
    code: "31_3330056",
    prof: "آزادی شهرام",
    units: 3,
    sessions: [
        {days: [6], start: 10.5, duration: 2},
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/02",
    department: "مهندسی مکانیک"
},
{
    id: 156,
    name: "هیدرولیک و پنوماتیک",
    code: "31_3330058",
    prof: "تقوی پور امیر",
    units: 3,
    sessions: [
        {days: [6], start: 15, duration: 1.5},
        {days: [2], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی مکانیک"
},
// Continuing the courses array...
{
    id: 157,
    name: "طراحی مکانیزم‌ها",
    code: "31_3330059",
    prof: "نجفی اردکانی علی",
    units: 3,
    sessions: [
        {days: [6], start: 13.5, duration: 1.5},
        {days: [2], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی مکانیک"
},
{
    id: 158,
    name: "مقدمه‌ای بر اجزاء محدود",
    code: "31_3330060",
    prof: "صفاری محمدعلی",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "مهندسی مکانیک"
},
{
    id: 159,
    name: "مقدمه‌ای بر سیستم‌های مکاترونیکی",
    code: "31_3330061",
    prof: "نجفی اردکانی علی",
    units: 3,
    sessions: [
        {days: [6], start: 15, duration: 1.5},
        {days: [2], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "مهندسی مکانیک"
},
{
    id: 160,
    name: "مقدمه‌ای بر مهندسی مکاترونیک",
    code: "31_3330062",
    prof: "نجفی اردکانی علی",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 1.5},
        {days: [3], start: 10.5, duration: 1.5}
    ],
    examDate: "1404/04/02",
    department: "مهندسی مکانیک"
},
{
    id: 161,
    name: "روش‌های تولید",
    code: "31_3330063",
    prof: "حق پناه محمدرضا",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی مکانیک"
},
{
    id: 162,
    name: "مقدمه‌ای بر CAD/CAM",
    code: "31_3330064",
    prof: "حق پناه محمدرضا",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی مکانیک"
},
{
    id: 163,
    name: "مقدمه‌ای بر رباتیک",
    code: "31_3330065",
    prof: "آزادی شهرام",
    units: 3,
    sessions: [
        {days: [6], start: 13.5, duration: 1.5},
        {days: [2], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "مهندسی مکانیک"
},
{
    id: 164,
    name: "مقدمه‌ای بر مهندسی پزشکی",
    code: "31_3330066",
    prof: "فرزانه حسن",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "مهندسی مکانیک"
},
{
    id: 165,
    name: "رياضي عمومي۲",
    code: "42_۵۷۱۲۰۹۶",
    prof: "اساتید آموزشی",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5},
        {days: [4], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی مکانیک"
},

{
    id: 166,
    name: "ریاضی عمومی دو",
    code: "43_۵۷۱۲۰۹۶",
    prof: "اساتید آموزشی",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی مکانیک"
},
{
    id: 167,
    name: "ریاضی عمومی دو",
    code: "44_۵۷۱۲۰۹۶",
    prof: "اساتید آموزشی",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 1.5},
        {days: [4], start: 10.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی مکانیک"
},

{
    id: 198,
    name: "ریاضی عمومی ۲",
    code: "45_5712096",
    prof: "اساتید گروه آموزشی",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی مکانیک"
},
{
    id: 199,
    name: "ریاضی عمومی ۲",
    code: "46_5712096",
    prof: "اساتید گروه آموزشی",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی مکانیک"
}
,
// Add to the courses array:
{
    id: 200,
    name: "ریاضی عمومی ۲",
    code: "47_5712096",
    prof: "اساتید گروه آموزشی",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5},
        {days: [4], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی برق"
},
{
    id: 201,
    name: "ریاضی عمومی ۲", 
    code: "48_5712096",
    prof: "اساتید گروه آموزشی",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی برق"
},
{
    id: 202,
    name: "ریاضی عمومی ۲",
    code: "49_5712096", 
    prof: "اساتید گروه آموزشی",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/04",
    department: "مهندسی برق"
},
{
    id: 203,
    name: "ریاضی عمومی ۲",
    code: "50_5712096",
    prof: "اساتید گروه آموزشی", 
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5},
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی برق"
},

{
    id: 205,
    name: "ریاضی عمومی ۲",
    code: "54_5712096",
    prof: "اساتید گروه آموزشی",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی صنایع"
}
,
{
    id: 300,
    name: "سمينار ۲",
    code: "80_۸۸۸۰۰۸۶",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 301,
    name: "سيستم هاي اتوماتيك درفضا",
    code: "81_۸۸۸۰۱۰۲", 
    prof: "با صحبت نوين زاد عليرضا",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [5], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/26",
    department: "مهندسی هوافضا"
},
{
    id: 302,
    name: "طراحي،كنترل وكاربردسيستم هاي ماهواره اي",
    code: "81_۸۸۸۰۱۱۰",
    prof: "چيني فروشان محمد",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5},
        {days: [5], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/03/31",
    department: "مهندسی هوافضا"
},
{
    id: 303,
    name: "رساله دكترا",
    code: "80_۸۸۸۰۱۲۶",
    prof: "اساتيد گروه آموزشي",
    units: 24,
    sessions: [],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 304,
    name: "مكانيك مدارهاي فضايي",
    code: "81_۸۸۸۰۱۳۲",
    prof: "مير شمس مهران",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [5], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/31",
    department: "مهندسی هوافضا"
},
{
    id: 305,
    name: "مكانيك مدارهاي فضايي",
    code: "82_۸۸۸۰۱۳۲",
    prof: "چيني فروشان محمد",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [5], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/31",
    department: "مهندسی هوافضا"
},
{
    id: 306,
    name: "ديناميك پروازو كنترل فضا پيما",
    code: "89_۸۸۸۹۰۰۸",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5},
        {days: [5], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی هوافضا"
},
{
    id: 307,
    name: "طراحي موتورهاي موشك سوخت مايع",
    code: "89_۸۸۸۹۰۱۰",
    prof: "كريمي مزرعه شاهي حسن",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/28",
    department: "مهندسی هوافضا"
},
{
    id: 308,
    name: "مكانيك مدار پيشرفته",
    code: "89_۸۸۸۹۰۱۴",
    prof: "جعفري ندوشن مهدي",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [5], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/31",
    department: "مهندسی هوافضا"
},
{
    id: 309,
    name: "طراحي سيستمي فضاپيما",
    code: "89_۸۸۸۹۰۲۴",
    prof: "مير شمس مهران",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [5], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/27",
    department: "مهندسی هوافضا"
},
{
    id: 310,
    name: "كنترل جريان سيال",
    code: "89_۸۸۸۹۰۴۳",
    prof: "شيخ الاسلام نوري سيد مهدي",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/03/31",
    department: "مهندسی هوافضا"
},
{
    id: 311,
    name: "ديناميك سيالات عددي ۱",
    code: "93_۸۸۹۳۰۱۲",
    prof: "علي صادقي آراني حامد",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5},
        {days: [4], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/02",
    department: "مهندسی هوافضا"
},
{
    id: 312,
    name: "سوخت و احتراق پيشرفته ۱",
    code: "93_۸۸۹۳۰۱۶",
    prof: "ابراهيمي رضا",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/03/27",
    department: "مهندسی هوافضا"
},
{
    id: 313,
    name: "اصول جلوبرنده پيشرفته",
    code: "93_۸۸۹۳۰۱۷",
    prof: "مهدوي مقدم حسين",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5},
        {days: [4], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/03/26",
    department: "مهندسی هوافضا"
},
{
    id: 314,
    name: "تئوري كنترل بهينه",
    code: "94_۸۸۹۴۰۱۴",
    prof: "روشني يان جعفر",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [5], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/31",
    department: "مهندسی هوافضا"
},
{
    id: 315,
    name: "هدايت و ناوبري ۱",
    code: "94_۸۸۹۴۰۱۶",
    prof: "نيكخواه امير علي، روشني يان جعفر",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5},
        {days: [5], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/02",
    department: "مهندسی هوافضا"
},
{
    id: 316,
    name: "شناسايي سيستم و تخمين پارامترهاي پرواز",
    code: "94_۸۸۹۴۰۳۱",
    prof: "خوشنود عبدالمجيد",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5},
        {days: [5], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی هوافضا"
},
{
    id: 317,
    name: "طراحي سيستم هاي كنترلي",
    code: "94_۸۸۹۴۰۳۵",
    prof: "طايفي نصرآبادي مرتضي",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [5], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/27",
    department: "مهندسی هوافضا"
},
{
    id: 318,
    name: "تعيين مدار و وضعيت",
    code: "94_۸۸۹۴۰۳۶",
    prof: "چيني فروشان محمد",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5},
        {days: [5], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/01",
    department: "مهندسی هوافضا"
},
{
    id: 319,
    name: "روشهاي اجزا محدود",
    code: "95_۸۸۹۵۰۰۹",
    prof: "خراساني رضا",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5},
        {days: [5], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی هوافضا"
},
{
    id: 320,
    name: "آئروالاستيسيته",
    code: "95_۸۸۹۵۰۱۵",
    prof: "ايراني سعيد",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [5], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "مهندسی هوافضا"
},
{
    id: 321,
    name: "مكانيك مواد مركب",
    code: "95_۸۸۹۵۰۲۸",
    prof: "ذاكري مهناز",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [5], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/28",
    department: "مهندسی هوافضا"
},
{
    id: 322,
    name: "آناليز و تست مودال",
    code: "95_۸۸۹۵۰۳۳",
    prof: "نوريان محمدعلي",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5},
        {days: [5], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/07",
    department: "مهندسی هوافضا"
},
{
    id: 323,
    name: "توربولانس",
    code: "96_۸۸۹۶۰۱۱",
    prof: "فتحعلي ماني",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "مهندسی هوافضا"
},
{
    id: 324,
    name: "جريانهاي چند فازي",
    code: "96_۸۸۹۶۰۱۵",
    prof: "اعظم پور محمد هادي",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [4], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "مهندسی هوافضا"
},
{
    id: 325,
    name: "آيروديناميك تجربي",
    code: "96_۸۸۹۶۰۲۱",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "مهندسی هوافضا"
},

{
    id: 326,
    name: "انتقال حرارت جابجايي",
    code: "96_۸۸۹۶۰۲۶",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/03",
    department: "مهندسی هوافضا"
},
{
    id: 400,
    name: "رياضي عمومي۲",
    code: "47_۵۷۱۲۰۹۶",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5},
        {days: [3], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "دانشكده برق"
},
{
    id: 401,
    name: "رياضي عمومي۲", 
    code: "48_۵۷۱۲۰۹۶",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "دانشكده برق"
},
{
    id: 402,
    name: "رياضي عمومي۲",
    code: "49_۵۷۱۲۰۹۶",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/04",
    department: "دانشكده برق"
},
{
    id: 403,
    name: "رياضي عمومي۲",
    code: "50_۵۷۱۲۰۹۶",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "دانشكده برق"
}
,
{
    id: 404,
    name: "رياضي عمومي۲",
    code: "54_۵۷۱۲۰۹۶",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "دانشكده صنايع"
}
,
{
    id: 500,
    name: "هندسه جبري",
    code: "42_۵۷۱۲۰۵۴",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/07",
    department: "دانشكده رياضي"
},
{
    id: 501,
    name: "گروههاي متناهي",
    code: "42_۵۷۱۲۰۶۵",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5},
        {days: [3], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "دانشكده رياضي"
},
{
    id: 502,
    name: "رياضيات عمومي ۱",
    code: "42_۵۷۱۲۰۶۹",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "دانشكده رياضي"
},
{
    id: 503,
    name: "رياضيات عمومي ۲",
    code: "42_۵۷۱۲۰۷۰",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [6], start: 10.5, duration: 2},
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/04",
    department: "دانشكده رياضي"
},
{
    id: 504,
    name: "رياضيات عمومي ۲",
    code: "43_۵۷۱۲۰۷۰",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/04",
    department: "دانشكده رياضي"
},
{
    id: 505,
    name: "توپولوژي جبري ۱",
    code: "42_۵۷۱۲۱۰۷",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "دانشكده رياضي"
},
{
    id: 506,
    name: "نظريه پيشرفته احتمال",
    code: "42_۵۷۱۲۱۷۱",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/03/27",
    department: "دانشكده رياضي"
},
{
    id: 507,
    name: "شبيه سازي",
    code: "42_۵۷۱۲۱۷۳",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5},
        {days: [3], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "دانشكده رياضي"
},
{
    id: 508,
    name: "جبر پيشرفته",
    code: "42_۵۷۱۲۱۹۰",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/27",
    department: "دانشكده رياضي"
}
,
{
    id: 600,
    name: "معادلات ديفرانسيل",
    code: "42_۵۷۱۴۰۵۵",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "دانشكده رياضي"
},
{
    id: 601,
    name: "برنامه سازي پيشرفته",
    code: "42_۵۷۱۴۰۸۷",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5},
        {days: [4], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/03/31",
    department: "دانشكده رياضي"
},
{
    id: 602,
    name: "برنامه سازي پيشرفته",
    code: "43_۵۷۱۴۰۸۷",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5},
        {days: [3], start: 7.5, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/31",
    department: "دانشكده رياضي"
},
{
    id: 603,
    name: "مباني احتمال",
    code: "42_۵۷۱۴۱۱۸",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "دانشكده رياضي"
},
{
    id: 604,
    name: "حل عددي معادلات ديفرانسيل",
    code: "42_۵۷۱۴۱۲۶",
    prof: "قريشي فريده",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/04",
    department: "دانشكده رياضي"
},
{
    id: 605,
    name: "فرآيندهاي تصادفي",
    code: "42_۵۷۱۴۱۵۱",
    prof: "خودسياني راضيه",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5},
        {days: [3], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "دانشكده رياضي"
},
{
    id: 606,
    name: "آناليز حقيقي",
    code: "42_۵۷۱۴۱۹۳",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/02",
    department: "دانشكده رياضي"
},
{
    id: 607,
    name: "حل عددي معادلات ديفرانسيل و انتگرال كسري",
    code: "42_۵۷۱۴۲۱۵",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "دانشكده رياضي"
},
{
    id: 608,
    name: "آزمايشگاه رياضي ۱",
    code: "42_۵۷۱۴۲۳۵",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/03/27",
    department: "دانشكده رياضي"
},
{
    id: 609,
    name: "مباني ماتريس ها و جبر خطي",
    code: "42_۵۷۱۴۲۳۸",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/07",
    department: "دانشكده رياضي"
}
,
{
    id: 610,
    name: "مدل سازي و پردازش مه داده ها",
    code: "42_۵۷۱۴۲۴۹",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "دانشكده رياضي"
},
{
    id: 611,
    name: "كنترل و حساب تغييرات",
    code: "42_۵۷۱۴۲۵۲",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [6], start: 10.5, duration: 2},
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/25",
    department: "دانشكده رياضي"
},
{
    id: 612,
    name: "مباني جبر",
    code: "42_۵۷۱۴۲۵۵",
    prof: "قلندرزاده شعبان",
    units: 4,
    sessions: [
        {days: [6], start: 10.5, duration: 2},
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/27",
    department: "دانشكده رياضي"
},
{
    id: 613,
    name: "بهينه سازي غيرخطي",
    code: "42_۵۷۱۴۲۵۷",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "دانشكده رياضي"
},
{
    id: 614,
    name: "آناليز رياضي",
    code: "42_۵۷۱۴۲۵۸",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/02",
    department: "دانشكده رياضي"
},
{
    id: 615,
    name: "هندسه جبري مقدماتي",
    code: "42_۵۷۱۴۲۵۹",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/04",
    department: "دانشكده رياضي"
},
{
    id: 616,
    name: "نظريه معادلات ديفرانسيل عادي",
    code: "42_۵۷۱۴۲۶۱",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [6], start: 7.5, duration: 1.5},
        {days: [2], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "دانشكده رياضي"
},
{
    id: 617,
    name: "آناليز رياضي چند متغيره",
    code: "42_۵۷۱۴۲۶۲",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [6], start: 9, duration: 1.5},
        {days: [2], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "دانشكده رياضي"
},
{
    id: 618,
    name: "نظريه اعداد",
    code: "42_۵۷۱۴۲۶۳",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [6], start: 9, duration: 1.5},
        {days: [2], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "دانشكده رياضي"
},
{
    id: 619,
    name: "جبرخطي عددي",
    code: "42_۵۷۱۴۲۶۵",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [6], start: 10.5, duration: 2},
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/27",
    department: "دانشكده رياضي"
}
,
{
    id: 620,
    name: "استنباط آماري ۲",
    code: "42_۵۷۱۶۰۴۶",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/07",
    department: "دانشكده رياضي"
},
{
    id: 621,
    name: "نظريه اندازه و احتمال ۲",
    code: "42_۵۷۱۶۰۵۴",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/27",
    department: "دانشكده رياضي"
},
{
    id: 622,
    name: "اصول سيستمهاي كامپيوتري",
    code: "42_۵۷۱۶۰۷۰",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [6], start: 15, duration: 1.5},
        {days: [2], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "دانشكده رياضي"
},
{
    id: 623,
    name: "مباني آناليز رياضي",
    code: "42_۵۷۱۶۰۷۶",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/08",
    department: "دانشكده رياضي"
},
{
    id: 624,
    name: "رياضي عمومي۳",
    code: "42_۵۷۱۶۰۷۸",
    prof: "اساتيد گروه آموزشي",
    units: 4,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "دانشكده رياضي"
},
{
    id: 625,
    name: "هوش مصنوعي",
    code: "42_۵۷۱۶۰۷۹",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [6], start: 9, duration: 1.5},
        {days: [2], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "دانشكده رياضي"
},
{
    id: 626,
    name: "مباني نظريه محاسبه",
    code: "42_۵۷۱۶۰۸۱",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [6], start: 13.5, duration: 1.5},
        {days: [2], start: 15, duration: 1.5}
    ],
    examDate: "1404/03/31",
    department: "دانشكده رياضي"
},
{
    id: 627,
    name: "نظريه محاسبه",
    code: "42_۵۷۱۶۰۸۲",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/01",
    department: "دانشكده رياضي"
},
{
    id: 628,
    name: "مباني منطق و نظريه مجموعه ها",
    code: "42_۵۷۱۶۰۸۳",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [6], start: 7.5, duration: 1.5},
        {days: [2], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "دانشكده رياضي"
},
{
    id: 629,
    name: "پايگاه داده ها",
    code: "42_۵۷۱۶۲۶۷",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5},
        {days: [3], start: 7.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/03/26",
    department: "دانشكده رياضي"
}
,
{
    id: 630,
    name: "فيزيك عمومي ۳",
    code: "41_۴۲۱۰۰۱۰",
    prof: "ژوليده حقيقي محمد حسين",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5},
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/03/26",
    department: "فيزيك"
},
{
    id: 631,
    name: "الكترومغناطيس ۱",
    code: "41_۴۲۱۰۰۱۳",
    prof: "حمزه پور حسين",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/25",
    department: "فيزيك"
},
{
    id: 632,
    name: "آز فيزيك ۴",
    code: "41_۴۲۱۰۰۱۵",
    prof: "مسعودي سيد فرهاد",
    units: 2,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 633,
    name: "آز فيزيك ۴",
    code: "42_۴۲۱۰۰۱۵",
    prof: "مسعودي سيد فرهاد",
    units: 2,
    sessions: [
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 634,
    name: "آز فيزيك ۴",
    code: "43_۴۲۱۰۰۱۵",
    prof: "مشحون سارا",
    units: 2,
    sessions: [
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 635,
    name: "مكانيك كوانتمي ۱",
    code: "41_۴۲۱۰۰۱۷",
    prof: "هدايتي خليل آباد هادي",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5},
        {days: [4], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "فيزيك"
},
{
    id: 636,
    name: "الكترومغناطيس ۲",
    code: "41_۴۲۱۰۰۱۸",
    prof: "رادين مهدي",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [5], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/25",
    department: "فيزيك"
},
{
    id: 637,
    name: "ترموديناميك و مكانيك آماري ۲",
    code: "41_۴۲۱۰۰۱۹",
    prof: "مشحون سارا",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5},
        {days: [4], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "فيزيك"
},
{
    id: 638,
    name: "مكانيك كوانتمي ۲",
    code: "41_۴۲۱۰۰۲۱",
    prof: "مشكوري مهدي",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/31",
    department: "فيزيك"
},
{
    id: 639,
    name: "برنامه نويسي كامپيوتر",
    code: "41_۴۲۱۰۰۲۲",
    prof: "مسعودي سيد فرهاد",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "فيزيك"
},
{
    id: 640,
    name: "برنامه نويسي كامپيوتر",
    code: "42_۴۲۱۰۰۲۲",
    prof: "مسعودي سيد فرهاد",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/03",
    department: "فيزيك"
},
{
    id: 641,
    name: "نظريه نسبيت",
    code: "41_۴۲۱۰۰۲۴",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/07",
    department: "فيزيك"
},
{
    id: 642,
    name: "محاسبات و اطلاعات كوانتمي",
    code: "41_۴۲۱۰۰۳۴",
    prof: "افضلي رضا",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5},
        {days: [4], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "فيزيك"
},
{
    id: 643,
    name: "پايان نامه",
    code: "41_۴۲۱۰۰۴۴",
    prof: "اساتيد گروه آموزشي",
    units: 6,
    sessions: [],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 644,
    name: "رساله دكترا",
    code: "41_۴۲۱۰۰۵۱",
    prof: "اساتيد گروه آموزشي",
    units: 24,
    sessions: [],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 645,
    name: "تاريخ و فلسفه علم فيزيك",
    code: "41_۴۲۱۰۰۵۳",
    prof: "تقي زاده فيروزجائي جواد",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5},
        {days: [4], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "فيزيك"
},
{
    id: 647,
    name: "مكانيك آماري پيشرفته ۱",
    code: "41_۴۲۱۰۰۷۰",
    prof: "حمزه پور حسين",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "فيزيك"
},
{
    id: 648,
    name: "مكانيك كوانتوم پيشرفته ۱",
    code: "41_۴۲۱۰۰۷۱",
    prof: "افشاري محمد مهدي",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5},
        {days: [4], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "فيزيك"
},
{
    id: 649,
    name: "يادگيري ماشيني در فيزيك",
    code: "41_۴۲۱۰۰۷۶",
    prof: "هدايتي خليل آباد هادي",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/02",
    department: "فيزيك"
},
{
    id: 650,
    name: "رياضي فيزيك ۱",
    code: "41_۴۲۱۰۰۸۶",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [3], start: 7.5, duration: 1.5},
        {days: [5], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/01",
    department: "فيزيك"
},
{
    id: 651,
    name: "مكانيك تحليلي ۲",
    code: "41_۴۲۱۰۰۸۸",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "فيزيك"
},
{
    id: 652,
    name: "مكانيك تحليلي ۲",
    code: "42_۴۲۱۰۰۸۸",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [3], start: 15, duration: 1.5},
        {days: [5], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "فيزيك"
},
{
    id: 653,
    name: "رياضي فيزيك ۲",
    code: "41_۴۲۱۰۰۹۰",
    prof: "جعفري محمود",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5},
        {days: [4], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "فيزيك"
},
{
    id: 654,
    name: "آزاپتيك",
    code: "41_۴۲۱۰۰۹۷",
    prof: "حمزه پور حسين",
    units: 2,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 655,
    name: "آزاپتيك",
    code: "42_۴۲۱۰۰۹۷",
    prof: "افشاري محمد مهدي",
    units: 2,
    sessions: [
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
}
,

{
    id: 646,
    name: "سامانه هاي پيچيده",
    code: "41_۴۲۱۰۰۶۶",
    prof: "تقي زاده فيروزجائي جواد",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5},
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "فيزيك"
},
{
    id: 656,
    name: "فيزيك ۱",
    code: "51_۴۲۱۰۱۱۳",
    prof: "واعظ زاده مجيد",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/31",
    department: "فيزيك"
},
{
    id: 657,
    name: "فيزيك ۲",
    code: "44_۴۲۱۰۱۱۵",
    prof: "حاتمي محمد محسن",
    units: 3,
    sessions: [
        {days: [3], start: 9, duration: 1.5},
        {days: [5], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "فيزيك"
},
{
    id: 658,
    name: "آزفيزيك ۲",
    code: "21_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 659,
    name: "آزفيزيك ۲",
    code: "22_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 660,
    name: "آزفيزيك ۲",
    code: "23_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 661,
    name: "آزفيزيك ۲",
    code: "24_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 662,
    name: "آزفيزيك ۲",
    code: "25_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 663,
    name: "آزفيزيك ۲",
    code: "26_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 664,
    name: "آزفيزيك ۲",
    code: "27_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 665,
    name: "آزفيزيك ۲",
    code: "28_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
}
,
{
    id: 666,
    name: "آزفيزيك ۲",
    code: "29_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 667,
    name: "آزفيزيك ۲",
    code: "30_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 668,
    name: "آزفيزيك ۲",
    code: "31_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 669,
    name: "آزفيزيك ۲",
    code: "32_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 670,
    name: "آزفيزيك ۲",
    code: "33_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 671,
    name: "آزفيزيك ۲",
    code: "34_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 672,
    name: "آزفيزيك ۲",
    code: "35_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 673,
    name: "آزفيزيك ۲",
    code: "36_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 674,
    name: "آزفيزيك ۲",
    code: "37_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 675,
    name: "آزفيزيك ۲",
    code: "38_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},


{
    id: 676,
    name: "آزفيزيك ۲",
    code: "39_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 677,
    name: "آزفيزيك ۲",
    code: "40_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 678,
    name: "آزفيزيك ۲",
    code: "41_۴۲۱۰۱۱۶",
    prof: "اميريان چايجاني امين",
    units: 1,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 679,
    name: "آزفيزيك ۲",
    code: "42_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 680,
    name: "آزفيزيك ۲",
    code: "43_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 681,
    name: "آزفيزيك ۲",
    code: "44_۴۲۱۰۱۱۶",
    prof: "اميريان چايجاني امين",
    units: 1,
    sessions: [
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 682,
    name: "آزفيزيك ۲",
    code: "45_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 683,
    name: "آزفيزيك ۲",
    code: "46_۴۲۱۰۱۱۶",
    prof: "اميريان چايجاني امين",
    units: 1,
    sessions: [
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 684,
    name: "آزفيزيك ۲",
    code: "47_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 685,
    name: "آزفيزيك ۲",
    code: "48_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
}
,
{
    id: 686,
    name: "آزفيزيك ۲",
    code: "49_۴۲۱۰۱۱۶",
    prof: "اميريان چايجاني امين",
    units: 1,
    sessions: [
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 687,
    name: "آزفيزيك ۲",
    code: "50_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 688,
    name: "آزفيزيك ۲",
    code: "51_۴۲۱۰۱۱۶",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 689,
    name: "آزفيزيك ۲",
    code: "52_۴۲۱۰۱۱۶",
    prof: "اميريان چايجاني امين",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 690,
    name: "الكترو ديناميك پيشرفته ۱",
    code: "41_۴۲۱۰۱۳۰",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/25",
    department: "فيزيك"
},
{
    id: 691,
    name: "موضوعات ويژه ۱",
    code: "41_۴۲۱۰۱۳۳",
    prof: "افضلي رضا",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5},
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/07",
    department: "فيزيك"
},
{
    id: 692,
    name: "موضوعات ويژه ۱",
    code: "42_۴۲۱۰۱۳۳",
    prof: "ژوليده حقيقي محمد حسين",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/07",
    department: "فيزيك"
}

,
{
    id: 693,
    name: "فيزيك حالت جامد پيشرفته ۲",
    code: "41_۴۲۱۲۱۵۹",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "فيزيك"
},
{
    id: 694,
    name: "فيزيك حالت جامد ۱",
    code: "41_۴۲۱۲۱۶۷",
    prof: "جعفري محمود",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5},
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "فيزيك"
},
{
    id: 695,
    name: "آز حالت جامد",
    code: "41_۴۲۱۲۲۱۳",
    prof: "مشكوري مهدي",
    units: 2,
    sessions: [
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 696,
    name: "فيزيك لايه هاي نازك",
    code: "41_۴۲۱۲۲۶۳",
    prof: "افضل زاده رضا",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5},
        {days: [4], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "فيزيك"
}

,
{
    id: 697,
    name: "آز پيشرفته هسته اي ۱",
    code: "41_۴۲۱۴۰۱۲",
    prof: "رحماني فائزه",
    units: 1,
    sessions: [
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "فيزيك"
},
{
    id: 698,
    name: "فيزيك آشكارسازها",
    code: "41_۴۲۱۴۰۲۲",
    prof: "رحماني فائزه",
    units: 3,
    sessions: [
        {days: [5], start: 9, duration: 1.5},
        {days: [5], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/25",
    department: "فيزيك"
},
{
    id: 699,
    name: "فيزيك هسته اي و ذرات بنيادي",
    code: "41_۴۲۱۴۰۳۶",
    prof: "رسولي فاطمه سادات",
    units: 3,
    sessions: [
        {days: [5], start: 9, duration: 1.5},
        {days: [5], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/07",
    department: "فيزيك"
}
,
{
    id: 700,
    name: "نجوم و اختر فيزيك",
    code: "41_۴۲۱۸۰۰۱",
    prof: "نصيري راد امين",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/07",
    department: "فيزيك"
},
{
    id: 701,
    name: "ليزر",
    code: "41_۴۲۱۸۰۱۱",
    prof: "رضايي فاطمه",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/02",
    department: "فيزيك"
},
{
    id: 702,
    name: "كيهان شناسي",
    code: "41_۴۲۱۸۰۲۴",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "فيزيك"
},
{
    id: 703,
    name: "فيزيك ليزر پيشرفته ۱",
    code: "41_۴۲۱۸۰۲۵",
    prof: "رضايي فاطمه",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/31",
    department: "فيزيك"
},
{
    id: 704,
    name: "اختر فيزيك پيشرفته ۲",
    code: "41_۴۲۱۸۰۲۷",
    prof: "نصيري راد امين",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/31",
    department: "فيزيك"
},
{
    id: 705,
    name: "روش هاي آناليز نانو ساختارها",
    code: "41_۴۲۱۸۰۳۴",
    prof: "صمدپور محمود",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/31",
    department: "فيزيك"
},
{
    id: 706,
    name: "آز نانوفيزيك ۱",
    code: "41_۴۲۱۸۰۳۵",
    prof: "صمدپور محمود",
    units: 1,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "فيزيك"
}
,
{
    id: 800,
    name: "زبان تخصصي شيمي",
    code: "41_۴۸۱۲۰۰۲",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
        {days: [3], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/02",
    department: "شيمي"
},
{
    id: 801,
    name: "اصول محاسبات شيمي صنعتي",
    code: "41_۴۸۱۲۰۰۷",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [5], start: 9, duration: 1.5},
        {days: [5], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/04",
    department: "شيمي"
},
{
    id: 802,
    name: "سمينار ۱",
    code: "41_۴۸۱۲۰۴۹",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 803,
    name: "سمينار ۲",
    code: "41_۴۸۱۲۰۵۰",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 804,
    name: "دفاع از پيشنهاد رساله دكتري",
    code: "41_۴۸۱۲۰۵۷",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 805,
    name: "امتحان جامع دكتري ۱",
    code: "41_۴۸۱۲۰۵۹",
    prof: "اساتيد گروه آموزشي",
    units: 0,
    sessions: [],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 806,
    name: "شيمي صنعتي ۲",
    code: "41_۴۸۱۲۰۶۱",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5},
        {days: [5], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "شيمي"
},
{
    id: 807,
    name: "شيمي تجزيه ۲",
    code: "41_۴۸۱۲۰۷۰",
    prof: "روح الهي احمد",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5},
        {days: [4], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "شيمي"
},
{
    id: 808,
    name: "شيمي معدني ۲",
    code: "41_۴۸۱۲۰۷۱",
    prof: "حشمت پور فلورا",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/01",
    department: "شيمي"
},
{
    id: 809,
    name: "رياضي در شيمي",
    code: "41_۴۸۱۲۰۷۲",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5},
        {days: [3], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "شيمي"
}
,
{
    id: 810,
    name: "آز شيمي تجزيه ۳",
    code: "41_۴۸۱۲۰۷۴",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 811,
    name: "آز شيمي تجزيه ۳",
    code: "42_۴۸۱۲۰۷۴",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
        {days: [4], start: 13.5, duration: 1.5},
        {days: [4], start: 15, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 812,
    name: "شيمي فيزيك ۳",
    code: "41_۴۸۱۲۰۷۵",
    prof: "جليلي سيف اله",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/27",
    department: "شيمي"
},
{
    id: 813,
    name: "آز شناسائي تركيبات آلي",
    code: "41_۴۸۱۲۰۷۹",
    prof: "خاكي زاده وحيد",
    units: 2,
    sessions: [
        {days: [3], start: 9, duration: 1.5},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 814,
    name: "آز شناسائي تركيبات آلي",
    code: "42_۴۸۱۲۰۷۹",
    prof: "خاكي زاده وحيد",
    units: 2,
    sessions: [
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 815,
    name: "شيمي و فناوري رنگ",
    code: "41_۴۸۱۲۰۹۵",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [1], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "شيمي"
},
{
    id: 816,
    name: "پايان نامه",
    code: "41_۴۸۱۲۱۰۰",
    prof: "اساتيد گروه آموزشي",
    units: 6,
    sessions: [],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 817,
    name: "شيمي آلي ۲",
    code: "41_۴۸۱۲۱۰۴",
    prof: "احمدي فرشته",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "شيمي"
},
{
    id: 818,
    name: "رساله دكترا",
    code: "41_۴۸۱۲۱۰۷",
    prof: "اساتيد گروه آموزشي",
    units: 24,
    sessions: [],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 819,
    name: "كاربرد نظريه گروه در شيمي",
    code: "41_۴۸۱۲۱۱۰",
    prof: "رعيتي سعيد",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/07",
    department: "شيمي"
}
,

{
    id: 820,
    name: "سمينار",
    code: "41_۴۸۱۲۱۱۱",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 821,
    name: "روش هاي جداسازي در شيمي تجزيه",
    code: "41_۴۸۱۲۱۱۳",
    prof: "سعيد زاده اميري نصيبه",
    units: 2,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "شيمي"
},
{
    id: 822,
    name: "شيمي سبز و محيط زيست",
    code: "41_۴۸۱۲۱۱۴",
    prof: "احمدي فرشته",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5},
        {days: [4], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "شيمي"
}
,
{
    id: 823,
    name: "آزشيمي الي ۱",
    code: "41_۴۸۱۴۰۰۲",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 824,
    name: "آزشيمي الي ۱",
    code: "42_۴۸۱۴۰۰۲",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5},
        {days: [2], start: 15, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 825,
    name: "آزشيمي الي ۲",
    code: "41_۴۸۱۴۰۰۴",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 826,
    name: "آزشيمي الي ۲",
    code: "42_۴۸۱۴۰۰۴",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 13.5, duration: 1.5},
        {days: [4], start: 15, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 827,
    name: "شيمي الي ۳",
    code: "41_۴۸۱۴۰۰۵",
    prof: "درويش فاطمه",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/31",
    department: "شيمي"
},
{
    id: 828,
    name: "طيف سنجي ملكولي ۱",
    code: "41_۴۸۱۴۰۰۹",
    prof: "صيدي شهرام",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/28",
    department: "شيمي"
},
{
    id: 829,
    name: "شيمي فيزيك الي",
    code: "41_۴۸۱۴۰۱۵",
    prof: "احمدي فرشته",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/09",
    department: "شيمي"
},
{
    id: 830,
    name: "استريو شيمي",
    code: "41_۴۸۱۴۰۱۹",
    prof: "بلالائي سعيد",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "شيمي"
},
{
    id: 831,
    name: "شيمي آلي فلزي",
    code: "41_۴۸۱۴۰۲۳",
    prof: "مؤمني بدري زمان",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/26",
    department: "شيمي"
},
{
    id: 832,
    name: "سنتزموادالي",
    code: "41_۴۸۱۴۰۲۹",
    prof: "خاكي زاده وحيد",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 16.5, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "شيمي"
}
,
{
    id: 833,
    name: "شيمي پپتيد پيشرفته",
    code: "41_۴۸۱۴۰۳۵",
    prof: "بلالائي سعيد",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5},
        {days: [3], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "شيمي"
},
{
    id: 834,
    name: "شيمي تركيبات آلي فسفردار",
    code: "41_۴۸۱۴۰۳۸",
    prof: "درويش فاطمه",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/31",
    department: "شيمي"
},
{
    id: 835,
    name: "واكنش هاي كاتاليزوري",
    code: "41_۴۸۱۴۰۴۰",
    prof: "رعيتي سعيد",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/07",
    department: "شيمي"
}
,
{
    id: 836,
    name: "آزشيمي معدني ۱",
    code: "41_۴۸۱۶۰۰۵",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 837,
    name: "آزشيمي معدني ۱",
    code: "42_۴۸۱۶۰۰۵",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 15, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 838,
    name: "آزشيمي معدني ۲",
    code: "41_۴۸۱۶۰۰۷",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 839,
    name: "آزشيمي معدني ۲",
    code: "42_۴۸۱۶۰۰۷",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 15, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 840,
    name: "سينتيك و ترموديناميك واكنش هاي معدني",
    code: "41_۴۸۱۶۰۱۳",
    prof: "مؤمني بدري زمان",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/26",
    department: "شيمي"
},
{
    id: 841,
    name: "كاربرد طيف سنجي درشيمي معدني",
    code: "41_۴۸۱۶۰۱۷",
    prof: "حشمت پور فلورا",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/01",
    department: "شيمي"
}

,
{
    id: 842,
    name: "آزشيمي فيزيك ۱",
    code: "41_۴۸۱۸۰۰۳",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 843,
    name: "آزشيمي فيزيك ۱",
    code: "42_۴۸۱۸۰۰۳",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [4], start: 15, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 844,
    name: "شيمي فيزيك ۲",
    code: "41_۴۸۱۸۰۰۴",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/27",
    department: "شيمي"
},
{
    id: 845,
    name: "آزشيمي فيزيك ۲",
    code: "41_۴۸۱۸۰۰۵",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 846,
    name: "آزشيمي فيزيك ۲",
    code: "42_۴۸۱۸۰۰۵",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 15, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 847,
    name: "خوردگي فلزات",
    code: "41_۴۸۱۸۰۱۰",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/02",
    department: "شيمي"
},
{
    id: 848,
    name: "الكتروشيمي پيشرفته",
    code: "41_۴۸۱۸۰۱۲",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/02",
    department: "شيمي"
},
{
    id: 849,
    name: "شيمي محاسباتي",
    code: "41_۴۸۱۸۰۲۲",
    prof: "جليلي سيف اله",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/08",
    department: "شيمي"
},
{
    id: 850,
    name: "مكانيك كوانتومي",
    code: "41_۴۸۱۸۰۵۶",
    prof: "جليلي سيف اله",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/27",
    department: "شيمي"
}
,
{
    id: 851,
    name: "شيمي عمومي ۲",
    code: "41_۴۸۲۰۰۰۱",
    prof: "سعيد زاده اميري نصيبه",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/01",
    department: "شيمي"
},
{
    id: 852,
    name: "آزشيمي عمومي ۲",
    code: "41_۴۸۲۰۰۰۲",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [5], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 853,
    name: "آزشيمي عمومي ۲",
    code: "42_۴۸۲۰۰۰۲",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [5], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 854,
    name: "آزشيمي عمومي ۲",
    code: "43_۴۸۲۰۰۰۲",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 855,
    name: "آزشيمي عمومي ۲",
    code: "44_۴۸۲۰۰۰۲",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [5], start: 15, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 856,
    name: "آزشيمي تجزيه ۱",
    code: "41_۴۸۲۰۰۰۴",
    prof: "سعيد زاده اميري نصيبه",
    units: 1,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 857,
    name: "آزشيمي تجزيه ۱",
    code: "42_۴۸۲۰۰۰۴",
    prof: "سعيد زاده اميري نصيبه",
    units: 1,
    sessions: [
        {days: [1], start: 15, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 858,
    name: "آزشيمي تجزيه ۲",
    code: "41_۴۸۲۰۰۰۶",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 859,
    name: "آزشيمي تجزيه ۲",
    code: "42_۴۸۲۰۰۰۶",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5},
        {days: [2], start: 15, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "شيمي"
},
{
    id: 860,
    name: "اصول تصفيه آب وپساب هاي صنعتي",
    code: "41_۴۸۲۰۰۱۰",
    prof: "سعيد زاده اميري نصيبه",
    units: 3,
    sessions: [
        {days: [3], start: 10.5, duration: 2},
        {days: [5], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "شيمي"
}
,
{
    id: 861,
    name: "شيمي عمومي ۱",
    code: "41_۴۸۲۰۰۱۱",
    prof: "حشمت پور فلورا",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "شيمي"
}
,
{
    id: 862,
    name: "شيمي دارويي ۲",
    code: "41_۴۸۲۲۰۰۴",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [1], start: 16.5, duration: 1.5}
    ],
    examDate: "1404/03/31",
    department: "شيمي"
},
{
    id: 863,
    name: "شيمي محاسباتي و طراحي دارو",
    code: "41_۴۸۲۲۰۰۷",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [5], start: 7.5, duration: 1.5},
        {days: [5], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "شيمي"
},
{
    id: 864,
    name: "مباحث نوين در شيمي دارويي",
    code: "41_۴۸۲۲۰۰۸",
    prof: "رمضانپور سرور",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [2], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "شيمي"
},
{
    id: 865,
    name: "مباني سنتز در شيمي آلي",
    code: "41_۴۸۲۲۰۱۱",
    prof: "خاكي زاده وحيد",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 16.5, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "شيمي"
},
{
    id: 866,
    name: "سمينار",
    code: "80_۸۸۸۰۰۰۴",
    prof: "مظفري علي",
    units: 2,
    sessions: [
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 867,
    name: "نقشه كشي صنعتي ۲",
    code: "81_۸۸۸۰۰۱۸",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
        {days: [3], start: 7.5, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی هوافضا"
},
{
    id: 868,
    name: "نقشه كشي صنعتي ۲",
    code: "82_۸۸۸۰۰۱۸",
    prof: "اساتيد گروه آموزشي",
    units: 2,
    sessions: [
        {days: [3], start: 10.5, duration: 2},
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی هوافضا"
},
{
    id: 869,
    name: "استاتيك",
    code: "81_۸۸۸۰۰۱۹",
    prof: "نوريان محمدعلي",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [5], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/07",
    department: "مهندسی هوافضا"
},
{
    id: 870,
    name: "استاتيك",
    code: "82_۸۸۸۰۰۱۹",
    prof: "ايراني سعيد",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [5], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/07",
    department: "مهندسی هوافضا"
},
{
    id: 871,
    name: "رياضيات مهندسي",
    code: "81_۸۸۸۰۰۲۰",
    prof: "جعفري ندوشن مهدي",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [5], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی هوافضا"
},
{
    id: 872,
    name: "رياضيات مهندسي",
    code: "82_۸۸۸۰۰۲۰",
    prof: "با صحبت نوين زاد عليرضا",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5},
        {days: [5], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی هوافضا"
},
{
    id: 873,
    name: "مكانيك سيالات",
    code: "81_۸۸۸۰۰۲۱",
    prof: "ابراهيمي رضا",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/07",
    department: "مهندسی هوافضا"
},
{
    id: 874,
    name: "مكانيك سيالات",
    code: "82_۸۸۸۰۰۲۱",
    prof: "اعظم پور محمد هادي",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/07",
    department: "مهندسی هوافضا"
},
{
    id: 875,
    name: "علم مواد",
    code: "81_۸۸۸۰۰۲۲",
    prof: "نوريان محمدعلي",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5},
        {days: [5], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی هوافضا"
},
{
    id: 876,
    name: "علم مواد",
    code: "82_۸۸۸۰۰۲۲",
    prof: "خراساني رضا",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5},
        {days: [5], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی هوافضا"
},
{
    id: 877,
    name: "آلگوريتمهاوبرنامه سازي كامپيوتر",
    code: "81_۸۸۸۰۰۲۵",
    prof: "اعظم پور محمد هادي",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5},
        {days: [4], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/03/31",
    department: "مهندسی هوافضا"
},
{
    id: 878,
    name: "آلگوريتمهاوبرنامه سازي كامپيوتر",
    code: "82_۸۸۸۰۰۲۵",
    prof: "اساتيد گروه آموزشي",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5},
        {days: [4], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/03/31",
    department: "مهندسی هوافضا"
},
{
    id: 879,
    name: "ترموديناميك ۱",
    code: "81_۸۸۸۰۰۲۶",
    prof: "شيخ الاسلام نوري سيد مهدي",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/25",
    department: "مهندسی هوافضا"
},
{
    id: 880,
    name: "ترموديناميك ۱",
    code: "82_۸۸۸۰۰۲۶",
    prof: "مهدوي مقدم حسين",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2},
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/25",
    department: "مهندسی هوافضا"
},
{
    id: 881,
    name: "كنترل اتوماتيك",
    code: "81_۸۸۸۰۰۲۸",
    prof: "روشني يان جعفر",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5},
        {days: [5], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "مهندسی هوافضا"
},
{
    id: 882,
    name: "آئروديناميك ۱",
    code: "81_۸۸۸۰۰۲۹",
    prof: "فتحعلي ماني",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5},
        {days: [4], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/02",
    department: "مهندسی هوافضا"
},
{
    id: 883,
    name: "آزمباني برق والكترونيك",
    code: "81_۸۸۸۰۰۳۰",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 884,
    name: "آزمباني برق والكترونيك",
    code: "82_۸۸۸۰۰۳۰",
    prof: "اساتيد گروه آموزشي",
    units: 1,
    sessions: [
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 885,
    name: "انتقال حرارت",
    code: "81_۸۸۸۰۰۳۱",
    prof: "كريمي مزرعه شاهي حسن",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/25",
    department: "مهندسی هوافضا"
}
,
{
    id: 886,
    name: "معادلات دیفرانسیل",
    code: "44_5712095",
    prof: "اساتید گروه آموزشی",
    units: 3,
    sessions: [
        {days: [2], start: 16.5, duration: 1.5},
        {days: [4], start: 16.5, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "مهندسی مکانیک"
},
{
    id: 887,
    name: "معادلات دیفرانسیل",
    code: "45_5712095", 
    prof: "اساتید گروه آموزشی",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "مهندسی مکانیک"
},
{
    id: 888,
    name: "معادلات دیفرانسیل",
    code: "46_5712095",
    prof: "اساتید گروه آموزشی", 
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/09",
    department: "مهندسی مکانیک"
},

{
    id: 890,
    name: "معادلات دیفرانسیل",
    code: "48_5712095",
    prof: "اساتید گروه آموزشی",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5},
        {days: [4], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "مهندسی صنایع"
},
{
    id: 891,
    name: "معادلات دیفرانسیل",
    code: "49_5712095",
    prof: "اساتید گروه آموزشی",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5},
        {days: [5], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "فیزیک"
},
{
    id: 892,
    name: "معادلات دیفرانسیل",
    code: "50_5712095",
    prof: "اساتید گروه آموزشی",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5},
        {days: [5], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "فیزیک"
},
{
    id: 893,
    name: "معادلات دیفرانسیل",
    code: "51_5712095",
    prof: "اساتید گروه آموزشی",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5},
        {days: [4], start: 7.5, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "مهندسی عمران"
},
{
    id: 894,
    name: "معادلات دیفرانسیل",
    code: "52_5712095",
    prof: "اساتید گروه آموزشی",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "مهندسی عمران"
},
{
    id: 895,
    name: "معادلات دیفرانسیل",
    code: "53_5712095",
    prof: "اساتید گروه آموزشی",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2},
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/09",
    department: "مهندسی عمران"
}
,

{
    id: 896,
    name: "مهارتهای زندگی دانشجویی",
    code: "5505050_51",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/04/07",
    department: "مهندسی برق"
},
{
    id: 897,
    name: "مهارتهای زندگی دانشجویی",
    code: "5505050_52",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [3], start: 16.5, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/04/09",
    department: "مهندسی هوافضا"
},
{
    id: 898,
    name: "مهارتهای زندگی دانشجویی",
    code: "5505050_53",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/04/09",
    department: "مهندسی عمران"
},
{
    id: 899,
    name: "مهارتهای زندگی دانشجویی",
    code: "5505050_54",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/04/08",
    department: "مهندسی مکانیک"
},
{
    id: 900,
    name: "اندیشه اسلامی ۱",
    code: "5505128_51",
    prof: "منصوری بیژن",
    units: 2,
    sessions: [
        {days: [4], start: 13.5, duration: 1.5, location: "ساختمان آموزشی صنایع"}
    ],
    examDate: "1404/04/02",
    department: "مهندسی صنایع"
},
{
    id: 901,
    name: "اندیشه اسلامی ۱",
    code: "5505128_52",
    prof: "منصوری بیژن",
    units: 2,
    sessions: [
        {days: [4], start: 15, duration: 1.5, location: "ساختمان آموزشی صنایع"}
    ],
    examDate: "1404/04/02",
    department: "مهندسی صنایع"
},
{
    id: 902,
    name: "اندیشه اسلامی ۱",
    code: "5505128_53",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/04/02",
    department: "مهندسی برق"
},
{
    id: 903,
    name: "اندیشه اسلامی ۱",
    code: "5505128_54",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [5], start: 7.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/04/02",
    department: "مهندسی عمران"
},
{
    id: 904,
    name: "اندیشه اسلامی ۱",
    code: "5505128_55",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [5], start: 9, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/04/02",
    department: "مهندسی عمران"
},
{
    id: 905,
    name: "اندیشه اسلامی ۱",
    code: "5505128_56",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/04/02",
    department: "مهندسی هوافضا"
}
,

{
    id: 906,
    name: "اندیشه اسلامی ۱",
    code: "5505128_57",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/04/02",
    department: "مهندسی هوافضا"
},
{
    id: 907,
    name: "اندیشه اسلامی ۱",
    code: "5505128_58",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/04/02",
    department: "مهندسی مکانیک"
},
{
    id: 908,
    name: "اندیشه اسلامی ۱",
    code: "5505128_60",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [3], start: 9, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/04/02",
    department: "مهندسی مکانیک"
},
{
    id: 909,
    name: "اندیشه اسلامی ۲",
    code: "5505129_51",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [1], start: 16.5, duration: 1.5, location: "ساختمان آموزشی صنایع"}
    ],
    examDate: "1404/04/03",
    department: "مهندسی صنایع"
},
{
    id: 910,
    name: "اندیشه اسلامی ۲",
    code: "5505129_54",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/04/03",
    department: "مهندسی عمران"
},
{
    id: 911,
    name: "اندیشه اسلامی ۲",
    code: "5505129_55",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/04/03",
    department: "مهندسی عمران"
},
{
    id: 912,
    name: "اندیشه اسلامی ۲",
    code: "5505129_56",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [3], start: 7.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/04/03",
    department: "مهندسی مکانیک"
},
{
    id: 913,
    name: "اندیشه اسلامی ۲",
    code: "5505129_57",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/04/03",
    department: "مهندسی مکانیک"
}
,
{
    id: 914,
    name: "تربیت بدنی",
    code: "5510001_51",
    prof: "لطیفی حجت اله",
    units: 1,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران"
},
{
    id: 915,
    name: "تربیت بدنی",
    code: "5510001_52",
    prof: "لطیفی حجت اله",
    units: 1,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران"
},
{
    id: 916,
    name: "تربیت بدنی",
    code: "5510001_53",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    examDate: "تعیین نشده",
    department: "دانشکده علوم"
},
{
    id: 917,
    name: "تربیت بدنی",
    code: "5510001_54",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    examDate: "تعیین نشده",
    department: "دانشکده علوم"
},
{
    id: 918,
    name: "تربیت بدنی",
    code: "5510001_55",
    prof: "خنجری یاسر",
    units: 1,
    sessions: [
        {days: [3], start: 7.5, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 919,
    name: "تربیت بدنی",
    code: "5510001_56",
    prof: "خنجری یاسر",
    units: 1,
    sessions: [
        {days: [3], start: 9, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 920,
    name: "تربیت بدنی",
    code: "5510001_57",
    prof: "لطیفی حجت اله",
    units: 1,
    sessions: [
        {days: [4], start: 7.5, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    examDate: "تعیین نشده",
    department: "دانشکده علوم"
},
{
    id: 921,
    name: "تربیت بدنی",
    code: "5510001_58",
    prof: "لطیفی حجت اله",
    units: 1,
    sessions: [
        {days: [4], start: 9, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    examDate: "تعیین نشده",
    department: "دانشکده علوم"
},
{
    id: 922,
    name: "تربیت بدنی",
    code: "5510001_59",
    prof: "خداداد کاشی شعله",
    units: 1,
    sessions: [
        {days: [4], start: 7.5, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 923,
    name: "تربیت بدنی",
    code: "5510001_60",
    prof: "خداداد کاشی شعله",
    units: 1,
    sessions: [
        {days: [4], start: 9, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
}
,
{
    id: 924,
    name: "تربیت بدنی",
    code: "5510001_61",
    prof: "خداداد کاشی شعله",
    units: 1,
    sessions: [
        {days: [4], start: 10.5, duration: 2, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
// ... [previous entries remain the same until id 927]
{
    id: 928,
    name: "ورزش ۱",
    code: "5510002_51",
    prof: "لطیفی حجت اله",
    units: 1,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران"
},
{
    id: 929,
    name: "ورزش ۱",
    code: "5510002_52",
    prof: "خداداد کاشی شعله",
    units: 1,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    examDate: "تعیین نشده",
    department: "دانشکده علوم"
},
{
    id: 930,
    name: "ورزش ۱",
    code: "5510002_53",
    prof: "لطیفی حجت اله",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی عمران"
},
{
    id: 931,
    name: "ورزش ۱",
    code: "5510002_54",
    prof: "خنجری یاسر",
    units: 1,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "سالن تربیت بدنی دانشکده مهندسی مکانیک"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک"
},
{
    id: 932,
    name: "ورزش ۱",
    code: "5510002_55",
    prof: "خنجری یاسر",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "سالن تربیت بدنی دانشکده مهندسی مکانیک"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک"
},
{
    id: 933,
    name: "ورزش ۱",
    code: "5510002_56",
    prof: "خنجری یاسر",
    units: 1,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "سالن تربیت بدنی دانشکده مهندسی مکانیک"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی مکانیک"
}
,
{
    id: 934,
    name: "ورزش ۱",
    code: "5510002_57",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    examDate: "1404/03/26",
    department: "دانشکده علوم"
},
{
    id: 935,
    name: "ورزش ۱",
    code: "5510002_58",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    examDate: "1404/03/26",
    department: "دانشکده علوم"
},
{
    id: 936,
    name: "ورزش ۱",
    code: "5510002_59",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    examDate: "1404/03/26",
    department: "دانشکده علوم"
},
{
    id: 937,
    name: "ورزش ۱",
    code: "5510002_60",
    prof: "خنجری یاسر",
    units: 1,
    sessions: [
        {days: [3], start: 10.5, duration: 2, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 938,
    name: "ورزش ۱",
    code: "5510002_61",
    prof: "خداداد کاشی شعله",
    units: 1,
    sessions: [
        {days: [4], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 939,
    name: "ورزش ۱",
    code: "5510002_62",
    prof: "خداداد کاشی شعله",
    units: 1,
    sessions: [
        {days: [4], start: 15, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 940,
    name: "ورزش ۱",
    code: "5510002_63",
    prof: "خانی زاده سحر",
    units: 1,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 941,
    name: "ورزش ۱",
    code: "5510002_64",
    prof: "خانی زاده سحر",
    units: 1,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 942,
    name: "ورزش ۱",
    code: "5510002_65",
    prof: "محبی فرشته",
    units: 1,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
},
{
    id: 943,
    name: "ورزش ۱",
    code: "5510002_66",
    prof: "محبی فرشته",
    units: 1,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی هوافضا"
}
,
{
    id: 944,
    name: "نگارش متون علمی",
    code: "5512003_51",
    prof: "نوروزی زاده سوگند",
    units: 3,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/25",
    department: "مهندسی مکانیک"
},
{
    id: 945,
    name: "نگارش متون علمی",
    code: "5512003_52",
    prof: "نوروزی زاده سوگند",
    units: 3,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/25",
    department: "مهندسی مکانیک"
},
{
    id: 946,
    name: "زبان فارسی۱",
    code: "5512004_51",
    prof: "سلمانی نژادمهرآبادی ساغر",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5, location: "مکانیک-کلاس"},
        {days: [5], start: 7.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی مکانیک"
},
{
    id: 947,
    name: "زبان فارسی۱",
    code: "5512004_52",
    prof: "سلمانی نژادمهرآبادی ساغر",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "مکانیک-کلاس"},
        {days: [5], start: 9, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی مکانیک"
},
{
    id: 948,
    name: "زبان فارسی۱",
    code: "5512004_53",
    prof: "سلمانی نژادمهرآبادی ساغر",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "۱۰۱"},
        {days: [1], start: 15, duration: 1.5, location: "۱۰۱"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی مکانیک"
},
{
    id: 949,
    name: "زبان فارسی۱",
    code: "5512004_54",
    prof: "علیقلی زاده حسین",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "مکانیک-کلاس"},
        {days: [5], start: 13.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی مکانیک"
},
{
    id: 950,
    name: "زبان فارسی۱",
    code: "5512004_55",
    prof: "علیقلی زاده حسین",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "مکانیک-کلاس"},
        {days: [5], start: 15, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی مکانیک"
},
{
    id: 951,
    name: "زبان فارسی۱",
    code: "5512004_56",
    prof: "علیقلی زاده حسین",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "ساختمان آموزشی نقشه برداری"},
        {days: [1], start: 10.5, duration: 2, location: "ساختمان آموزشی نقشه برداری"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی نقشه برداری"
},
{
    id: 952,
    name: "زبان فارسی۱",
    code: "5512004_57",
    prof: "شاگشتاسبی مولود",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "عمران- ساختمان اموزش"},
        {days: [4], start: 13.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی عمران"
},
{
    id: 953,
    name: "زبان فارسی۱",
    code: "5512004_58",
    prof: "شاگشتاسبی مولود",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "عمران- ساختمان اموزش"},
        {days: [4], start: 15, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی عمران"
}
,
{
    id: 954,
    name: "زبان فارسی۱",
    code: "5512004_59",
    prof: "روستا امید",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "عمران- ساختمان اموزش"},
        {days: [4], start: 13.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی عمران"
},
{
    id: 955,
    name: "زبان فارسی۱",
    code: "5512004_60",
    prof: "روستا امید",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "عمران- ساختمان اموزش"},
        {days: [4], start: 15, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی عمران"
},
{
    id: 956,
    name: "زبان انگلیسی",
    code: "5512006_51",
    prof: "نوروزی زاده سوگند",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "ساختمان آموزشی صنایع"},
        {days: [4], start: 9, duration: 1.5, location: "ساختمان آموزشی صنایع"}
    ],
    examDate: "1404/03/31",
    department: "دانشکده صنایع"
},
{
    id: 957,
    name: "زبان انگلیسی",
    code: "5512006_52",
    prof: "نوروزی زاده سوگند",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "ساختمان آموزشی صنایع"},
        {days: [4], start: 10.5, duration: 2, location: "ساختمان آموزشی صنایع"}
    ],
    examDate: "1404/03/31",
    department: "دانشکده صنایع"
},
{
    id: 958,
    name: "زبان انگلیسی",
    code: "5512006_53",
    prof: "شریف مریم",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"},
        {days: [5], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/03/31",
    department: "مهندسی برق"
},
{
    id: 959,
    name: "زبان انگلیسی",
    code: "5512006_54",
    prof: "شریف مریم",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"},
        {days: [5], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1404/03/31",
    department: "مهندسی برق"
},
{
    id: 960,
    name: "زبان انگلیسی",
    code: "5512006_55",
    prof: "نظام ابادی حمیدرضا",
    units: 3,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "کلاس ۲۱۰ دانشکده هوافضا"},
        {days: [5], start: 15, duration: 1.5, location: "کلاس ۲۱۰ دانشکده هوافضا"}
    ],
    examDate: "1404/03/31",
    department: "مهندسی هوافضا"
},
{
    id: 961,
    name: "زبان انگلیسی",
    code: "5512006_56",
    prof: "سعیدی سعید",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "دانشکده ریاضی- سرویسی"},
        {days: [1], start: 16.5, duration: 1.5, location: "دانشکده ریاضی- سرویسی"}
    ],
    examDate: "1404/03/31",
    department: "دانشكده رياضي"
},
{
    id: 962,
    name: "زبان انگلیسی",
    code: "5512006_57",
    prof: "سعیدی سعید",
    units: 3,
    sessions: [
        {days: [3], start: 15, duration: 1.5, location: "دانشکده ریاضی- سرویسی"},
        {days: [3], start: 16.5, duration: 1.5, location: "دانشکده ریاضی- سرویسی"}
    ],
    examDate: "1404/03/31",
    department: "دانشكده رياضي"
},

{
    id: 963,
    name: "18_برنامه سازی پیشرفته",
    code: "18_1912002",
    prof: "اثنی عشری اصفهانی محمدمهدی",
    units: 3,
    sessions: [
        {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [5], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/01",
    department: "مهندسی کامپیوتر"
},
{
    id: 964,
    name: "19_برنامه سازی پیشرفته",
    code: "19_1912002",
    prof: "زمانیان مهدی",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [4], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/01",
    department: "مهندسی کامپیوتر"
},
{
    id: 965,
    name: "19_ساختمان داده ها",
    code: "19_1912003",
    prof: "کوهزادی",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [5], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/09",
    department: "مهندسی کامپیوتر"
},
{
    id: 966,
    name: "19_طراحی الگوریتم ها",
    code: "19_1912004",
    prof: "شیخی فرناز",
    units: 3,
    sessions: [
        {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [5], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی کامپیوتر"
},
{
    id: 967,
    name: "19_نظریه زبان ها و ماشین ها",
    code: "19_1912005",
    prof: "ناصر شریف بابک",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [4], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/27",
    department: "مهندسی کامپیوتر"
},
{
    id: 968,
    name: "19_مبانی کامپیوتر و برنامه سازی",
    code: "19_1912011",
    prof: "خانمیرزا حامد",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/09",
    department: "مهندسی کامپیوتر"
},
{
    id: 969,
    name: "19_اصول طراحی کامپایلر",
    code: "19_1912012",
    prof: "علائیان محمدهادی",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/27",
    department: "مهندسی کامپیوتر"
},
{
    id: 970,
    name: "19_مهندسی اینترنت",
    code: "19_1912016",
    prof: "زمانیان مهدی",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی کامپیوتر"
},
{
    id: 971,
    name: "17_آزمایشگاه سیستم عامل",
    code: "17_1912024",
    prof: "اساتید گروه آموزشی",
    units: 1,
    sessions: [
        {days: [4], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
},
{
    id: 972,
    name: "18_آزمایشگاه سیستم عامل",
    code: "18_1912024",
    prof: "اساتید گروه آموزشی",
    units: 1,
    sessions: [
        {days: [4], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
}
,
{
    id: 973,
    name: "آزمایشگاه سیستم عامل",
    code: "19_1912024",
    prof: "اساتید گروه آموزشی",
    units: 1,
    sessions: [
        {days: [5], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
},
{
    id: 974,
    name: "آزمایشگاه پایگاه داده ها",
    code: "17_1912025",
    prof: "رویا بهرامی",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
},
{
    id: 975,
    name: "آزمایشگاه پایگاه داده ها",
    code: "18_1912025",
    prof: "اساتید گروه آموزشی",
    units: 1,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
},
{
    id: 976,
    name: "آزمایشگاه پایگاه داده ها",
    code: "19_1912025",
    prof: "اساتید گروه آموزشی",
    units: 1,
    sessions: [
        {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
},
{
    id: 977,
    name: "ریاضیات گسسته",
    code: "18_1912027",
    prof: "خواسته سید حسین",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/07",
    department: "مهندسی کامپیوتر"
},
{
    id: 978,
    name: "ریاضیات گسسته",
    code: "19_1912027",
    prof: "شهسواری",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/07",
    department: "مهندسی کامپیوتر"
},
{
    id: 979,
    name: "روش پژوهش و ارائه",
    code: "19_1912029",
    prof: "صیفوری",
    units: 2,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/04",
    department: "مهندسی کامپیوتر"
},
{
    id: 980,
    name: "پایگاه داده ها",
    code: "19_1912030",
    prof: "پیشگو بشری",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/09",
    department: "مهندسی کامپیوتر"
},
{
    id: 981,
    name: "تحلیل و طراحی سیستم ها",
    code: "19_1912032",
    prof: "صدیقیان کاشی سعید",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [3], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/28",
    department: "مهندسی کامپیوتر"
},
{
    id: 982,
    name: "هندسه محاسباتی",
    code: "19_1912049",
    prof: "شیخی فرناز",
    units: 3,
    sessions: [
        {days: [3], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [5], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/25",
    department: "مهندسی کامپیوتر"
}
,

{
    id: 983,
    name: "آزمون و طراحی آزمون پذیر",
    code: "01_1914001",
    prof: "حمیدی حجت اله",
    units: 3,
    sessions: [
        {days: [3], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [3], start: 16.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/07",
    department: "مهندسی کامپیوتر"
},
{
    id: 984,
    name: "معماری کامپیوتر",
    code: "19_1914002",
    prof: "ده یادگاری مسعود",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [3], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/08",
    department: "مهندسی کامپیوتر"
},
{
    id: 985,
    name: "طراحی کامپیوتری سیستم های دیجیتال",
    code: "19_1914004",
    prof: "حسینی نژاد محبتی حسین",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/09",
    department: "مهندسی کامپیوتر"
},
{
    id: 986,
    name: "هم طراحی سخت افزار و نرم افزار",
    code: "19_1914005",
    prof: "رودکی لواسانی هدا",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی کامپیوتر"
},
{
    id: 987,
    name: "سیستم های عامل",
    code: "19_1914009",
    prof: "خانمیرزا حامد",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/03",
    department: "مهندسی کامپیوتر"
},
{
    id: 988,
    name: "آز ریزپردازنده ۱",
    code: "17_1914011",
    prof: "رمضان نیا",
    units: 1,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
},
{
    id: 989,
    name: "آز ریزپردازنده ۱",
    code: "18_1914011",
    prof: "رمضان نیا",
    units: 1,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
},
{
    id: 990,
    name: "آز ریزپردازنده ۱",
    code: "19_1914011",
    prof: "شکیلا کاظم پور",
    units: 1,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
},
{
    id: 991,
    name: "سیگنال ها و سیستم ها",
    code: "19_1914016",
    prof: "رضائی فاطمه",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [4], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/01",
    department: "مهندسی کامپیوتر"
},
{
    id: 992,
    name: "آز شبکه های کامپیوتری",
    code: "16_1914018",
    prof: "میرزا حسینی",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
}
,
{
    id: 993,
    name: "آز شبکه های کامپیوتری",
    code: "17_1914018",
    prof: "اساتید گروه آموزشی",
    units: 1,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
},
{
    id: 994,
    name: "آز شبکه های کامپیوتری",
    code: "18_1914018",
    prof: "اساتید گروه آموزشی",
    units: 1,
    sessions: [
        {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
},
{
    id: 995,
    name: "آز شبکه های کامپیوتری",
    code: "19_1914018",
    prof: "اساتید گروه آموزشی",
    units: 1,
    sessions: [
        {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
},
{
    id: 996,
    name: "ریزپردازنده و زبان اسمبلی",
    code: "18_1914043",
    prof: "درمانی محمد یوسف",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/31",
    department: "مهندسی کامپیوتر"
},
{
    id: 997,
    name: "ریزپردازنده و زبان اسمبلی",
    code: "19_1914043",
    prof: "دلیر روی فرد رسول",
    units: 3,
    sessions: [
        {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [5], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/31",
    department: "مهندسی کامپیوتر"
},
{
    id: 998,
    name: "مدارهای الکتریکی",
    code: "19_1914045",
    prof: "مرادیان",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/28",
    department: "مهندسی کامپیوتر"
},
{
    id: 999,
    name: "سیستم های نهفته و بی درنگ",
    code: "19_1914046",
    prof: "عبدی آتنا",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/03",
    department: "مهندسی کامپیوتر"
},
{
    id: 1000,
    name: "طراحی سیستم های کم مصرف",
    code: "01_1914050",
    prof: "رودکی لواسانی هدا",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/09",
    department: "مهندسی کامپیوتر"
},
{
    id: 1001,
    name: "طراحی سیستم های تحمل پذیر اشکال",
    code: "19_1914051",
    prof: "عبدی آتنا",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/25",
    department: "مهندسی کامپیوتر"
},
{
    id: 1002,
    name: "معماری پردازنده های اختصاصی سیگنال دیجیتال",
    code: "19_1914053",
    prof: "حسینی نژاد محبتی حسین",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/27",
    department: "مهندسی کامپیوتر"
}

,
{
    id: 1003,
    name: "فشرده سازی اطلاعات",
    code: "19_1914058",
    prof: "رودکی لواسانی هدا",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [4], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/02",
    department: "مهندسی کامپیوتر"
},
{
    id: 1004,
    name: "ساختار و زبان کامپیوتر",
    code: "19_1914059",
    prof: "علائیان محمدهادی",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [3], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/25",
    department: "مهندسی کامپیوتر"
},
{
    id: 1005,
    name: "پردازش قابل باز پیکربندی",
    code: "01_1914062",
    prof: "صیفوری",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/08",
    department: "مهندسی کامپیوتر"
},
{
    id: 1006,
    name: "پردازش قابل باز پیکربندی",
    code: "19_1914062",
    prof: "صیفوری",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/03",
    department: "مهندسی کامپیوتر"
},
{
    id: 1007,
    name: "شتاب دهنده های سخت افزاری",
    code: "19_1914063",
    prof: "ده یادگاری مسعود",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/09",
    department: "مهندسی کامپیوتر"
}
,
{
    id: 1008,
    name: "یادگیری ماشین",
    code: "11_1916005",
    prof: "علیاری شوره دلی مهدی",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [4], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی کامپیوتر"
},
{
    id: 1009,
    name: "تصویرپردازی رقمی",
    code: "01_1916011",
    prof: "غیاثی راد",
    units: 3,
    sessions: [
        {days: [5], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [5], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/31",
    department: "مهندسی کامپیوتر"
},
{
    id: 1010,
    name: "سمینار",
    code: "01_1916022",
    prof: "یعقوبی کعبه",
    units: 2,
    sessions: [
        {days: [5], start: 18, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
},
{
    id: 1011,
    name: "سمینار",
    code: "17_1916022",
    prof: "شیخی فرناز",
    units: 2,
    sessions: [
        {days: [5], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
},
{
    id: 1012,
    name: "سمینار",
    code: "18_1916022",
    prof: "پیشگو بشری",
    units: 2,
    sessions: [
        {days: [5], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
},
{
    id: 1013,
    name: "سمینار",
    code: "19_1916022",
    prof: "رضائی فاطمه",
    units: 2,
    sessions: [
        {days: [4], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "تعیین نشده",
    department: "مهندسی کامپیوتر"
},
{
    id: 1014,
    name: "پردازش تکاملی",
    code: "01_1916023",
    prof: "کوهزادی",
    units: 3,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [5], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/28",
    department: "مهندسی کامپیوتر"
},
{
    id: 1015,
    name: "پردازش تکاملی",
    code: "19_1916023",
    prof: "اثنی عشری اصفهانی محمدمهدی",
    units: 3,
    sessions: [
        {days: [3], start: 15.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [5], start: 15.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/07",
    department: "مهندسی کامپیوتر"
},
{
    id: 1016,
    name: "هوش مصنوعی و سیستم های خبره",
    code: "19_1916028",
    prof: "کوهزادی",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [5], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/25",
    department: "مهندسی کامپیوتر"
},
{
    id: 1017,
    name: "مبانی پردازش زبان و گفتار",
    code: "19_1916032",
    prof: "دوست",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/31",
    department: "مهندسی کامپیوتر"
}
,
{
    id: 1018,
    name: "مبانی بینایی کامپیوتر",
    code: "19_1916033",
    prof: "نصیحت کن سید بهروز",
    units: 3,
    sessions: [
        {days: [3], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [5], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/01",
    department: "مهندسی کامپیوتر"
},
{
    id: 1019,
    name: "شناسایی الگو",
    code: "19_1916035",
    prof: "ناصر شریف بابک",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/03",
    department: "مهندسی کامپیوتر"
},
{
    id: 1020,
    name: "یادگیری تقویتی",
    code: "19_1916040",
    prof: "خواسته سید حسین",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/31",
    department: "مهندسی کامپیوتر"
},
{
    id: 1021,
    name: "داده کاوی پیشرفته",
    code: "01_1916044",
    prof: "پیشگو بشری",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی کامپیوتر"
},
{
    id: 1022,
    name: "داده کاوی پیشرفته",
    code: "19_1916044",
    prof: "پیشگو بشری",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [4], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/04",
    department: "مهندسی کامپیوتر"
},
{
    id: 1023,
    name: "پنهان سازی اطلاعات",
    code: "19_1916045",
    prof: "علائیان محمدهادی",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/01",
    department: "مهندسی کامپیوتر"
},
{
    id: 1024,
    name: "سیستم های توصیه گر",
    code: "01_1916053",
    prof: "دادخواه چیترا",
    units: 3,
    sessions: [
        {days: [5], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [5], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/27",
    department: "مهندسی کامپیوتر"
},
{
    id: 1025,
    name: "یادگیری ژرف",
    code: "01_1916054",
    prof: "کوهزادی",
    units: 3,
    sessions: [
        {days: [4], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 16.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/01",
    department: "مهندسی کامپیوتر"
},
{
    id: 1026,
    name: "مدل های مولد عمیق",
    code: "19_1916057",
    prof: "نصیحت کن سید بهروز",
    units: 3,
    sessions: [
        {days: [3], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [5], start: 9, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/28",
    department: "مهندسی کامپیوتر"
}
,
{
    id: 1027,
    name: "ارزیابی کارایی سیستم های کامپیوتری",
    code: "01_1918010",
    prof: "مرادیان",
    units: 3,
    sessions: [
        {days: [4], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [5], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/03",
    department: "مهندسی کامپیوتر"
},
{
    id: 1028,
    name: "ارزیابی کارایی سیستم های کامپیوتری",
    code: "19_1918010",
    prof: "مرادیان",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/09",
    department: "مهندسی کامپیوتر"
},
{
    id: 1029,
    name: "شبکه های چند رسانه ای",
    code: "19_1918011",
    prof: "درمانی محمد یوسف",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [3], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/02",
    department: "مهندسی کامپیوتر"
},
{
    id: 1030,
    name: "امنیت شبکه پیشرفته",
    code: "01_1918014",
    prof: "قرائی",
    units: 3,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [5], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/02",
    department: "مهندسی کامپیوتر"
},
{
    id: 1031,
    name: "مدیریت شبکه",
    code: "01_1918020",
    prof: "یعقوبی کعبه",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [2], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/04",
    department: "مهندسی کامپیوتر"
},
{
    id: 1032,
    name: "مدیریت شبکه",
    code: "19_1918020",
    prof: "یعقوبی کعبه",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"},
        {days: [3], start: 10.5, duration: 2, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/26",
    department: "مهندسی کامپیوتر"
}
,
{
    id: 1037,
    name: "معادلات دیفرانسیل",
    code: "52_5712095",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "دانشکده عمران"},
        {days: [4], start: 9, duration: 1.5, location: "دانشکده عمران"}
    ],
    examDate: "1404/04/09",
    department: "دانشكده رياضي",
    notes: "مختص دانشجویان دانشکده مهندسی عمران"
},
{
    id: 1038,
    name: "معادلات دیفرانسیل",
    code: "53_5712095",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "دانشکده عمران"},
        {days: [4], start: 10.5, duration: 2, location: "دانشکده عمران"}
    ],
    examDate: "1404/04/09",
    department: "دانشكده رياضي",
    notes: "مختص دانشجویان دانشکده مهندسی عمران"
},
{
    id: 1039,
    name: "معادلات دیفرانسیل",
    code: "54_5712095",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [5], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/09",
    department: "دانشكده رياضي",
    notes: "مختص دانشجویان دانشکده مهندسی کامپیوتر"
},
{
    id: 1040,
    name: "ریاضی عمومی ۲",
    code: "42_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "دانشکده مکانیک - کلاس ۲۰۲"},
        {days: [4], start: 7.5, duration: 1.5, location: "دانشکده مکانیک - کلاس ۲۰۲"}
    ],
    examDate: "1404/04/04",
    department: "دانشكده رياضي",
    notes: "مختص دانشجویان دانشکده مهندسی مکانیک و مواد"
},
{
    id: 1041,
    name: "ریاضی عمومی ۲",
    code: "43_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "دانشکده مکانیک - کلاس ۳۰۲"},
        {days: [4], start: 9, duration: 1.5, location: "دانشکده مکانیک - کلاس ۳۰۲"}
    ],
    examDate: "1404/04/04",
    department: "دانشكده رياضي",
    notes: "مختص دانشجویان دانشکده مهندسی مکانیک و مواد"
},
{
    id: 1042,
    name: "ریاضی عمومی ۲",
    code: "44_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "دانشکده مکانیک - کلاس ۳۰۲"},
        {days: [4], start: 10.5, duration: 2, location: "دانشکده مکانیک - کلاس ۳۰۲"}
    ],
    examDate: "1404/04/04",
    department: "دانشكده رياضي",
    notes: "مختص دانشجویان دانشکده مهندسی مکانیک و مواد"
},
{
    id: 1043,
    name: "ریاضی عمومی ۲",
    code: "45_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "دانشکده مکانیک - کلاس ۲۰۴"},
        {days: [4], start: 13.5, duration: 1.5, location: "دانشکده مکانیک - کلاس ۲۰۴"}
    ],
    examDate: "1404/04/04",
    department: "دانشكده رياضي",
    notes: "مختص دانشجویان دانشکده مهندسی مکانیک و مواد"
},
{
    id: 1044,
    name: "ریاضی عمومی ۲",
    code: "46_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "دانشکده مکانیک - کلاس ۳۰۵"},
        {days: [4], start: 15, duration: 1.5, location: "دانشکده مکانیک - کلاس ۳۰۵"}
    ],
    examDate: "1404/04/04",
    department: "دانشكده رياضي",
    notes: "مختص دانشجویان دانشکده مهندسی مکانیک و مواد"
},
{
    id: 1045,
    name: "ریاضی عمومی ۲",
    code: "47_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "دانشکده برق"},
        {days: [4], start: 7.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/04/04",
    department: "دانشكده رياضي",
    notes: "مختص دانشجویان دانشکده برق"
},
{
    id: 1046,
    name: "ریاضی عمومی ۲",
    code: "48_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "دانشکده برق"},
        {days: [4], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/04/04",
    department: "دانشكده رياضي",
    notes: "مختص دانشجویان دانشکده برق"
}
,
{
    id: 1033,
    name: "معادلات دیفرانسیل",
    code: "48_5712095",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "ساختمان آموزشی صنایع"},
        {days: [4], start: 7.5, duration: 1.5, location: "ساختمان آموزشی صنایع"}
    ],
    examDate: "1404/04/09",
    department: "دانشكده رياضي",
    notes: "مختص دانشجویان دانشکده مهندسی صنایع"
},
{
    id: 1034,
    name: "معادلات دیفرانسیل",
    code: "49_5712095",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [3], start: 16.5, duration: 1.5, location: "دانشکده فیزیک"},
        {days: [5], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "1404/04/09",
    department: "دانشكده رياضي",
    notes: "مختص دانشجویان دانشکده فیزیک"
},
{
    id: 1035,
    name: "معادلات دیفرانسیل",
    code: "50_5712095",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [3], start: 15, duration: 1.5, location: "دانشکده فیزیک"},
        {days: [5], start: 15, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "1404/04/09",
    department: "دانشكده رياضي",
    notes: "مختص دانشجویان دانشکده فیزیک"
},
{
    id: 1036,
    name: "معادلات دیفرانسیل",
    code: "51_5712095", 
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "دانشکده عمران"},
        {days: [4], start: 7.5, duration: 1.5, location: "دانشکده عمران"}
    ],
    examDate: "1404/04/09",
    department: "دانشكده رياضي",
    notes: "مختص دانشجویان دانشکده مهندسی عمران"
},
{
    id: 1047,
    name: "ریاضی عمومی ۲",
    code: "49_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "دانشکده برق"},
        {days: [4], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده برق"
},
{
    id: 1048,
    name: "ریاضی عمومی ۲",
    code: "50_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"},
        {days: [4], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده برق"
},
{
    id: 1049,
    name: "ریاضی عمومی ۲",
    code: "51_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "دانشکده عمران"},
        {days: [4], start: 7.5, duration: 1.5, location: "دانشکده عمران"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده عمران"
},
{
    id: 1050,
    name: "ریاضی عمومی ۲",
    code: "52_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"},
        {days: [4], start: 10.5, duration: 2, location: "دانشکده نقشه برداری"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده مهندسی نقشه برداری"
},
{
    id: 1051,
    name: "ریاضی عمومی ۲",
    code: "53_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 13.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده مهندسی کامپیوتر"
},
{
    id: 1052,
    name: "ریاضی عمومی ۲",
    code: "54_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "دانشکده صنایع"},
        {days: [4], start: 9, duration: 1.5, location: "دانشکده صنایع"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده مهندسی صنایع"
},
{
    id: 1053,
    name: "ریاضی عمومی ۲",
    code: "55_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "دانشکده صنایع"},
        {days: [4], start: 10.5, duration: 2, location: "دانشکده صنایع"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده مهندسی صنایع"
},
{
    id: 1054,
    name: "ریاضی عمومی ۲",
    code: "56_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"},
        {days: [4], start: 13.5, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده فیزیک"
},
{
    id: 1055,
    name: "ریاضی عمومی ۲",
    code: "57_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "دانشکده فیزیک"},
        {days: [4], start: 15, duration: 1.5, location: "دانشکده فیزیک"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده فیزیک"
},
{
    id: 1056,
    name: "ریاضی عمومی ۲",
    code: "58_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "دانشکده هوافضا"},
        {days: [4], start: 13.5, duration: 1.5, location: "دانشکده هوافضا"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده هوافضا"
}

,
{
    id: 1057,
    name: "ریاضی عمومی ۲",
    code: "59_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "دانشکده هوافضا"},
        {days: [4], start: 15, duration: 1.5, location: "دانشکده هوافضا"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده مهندسی هوافضا"
},
{
    id: 1058,
    name: "ریاضی عمومی ۲",
    code: "60_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5, location: "دانشکده شیمی"},
        {days: [3], start: 7.5, duration: 1.5, location: "دانشکده شیمی"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده شیمی"
},
{
    id: 1059,
    name: "ریاضی عمومی ۲",
    code: "61_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "دانشکده عمران"},
        {days: [4], start: 9, duration: 1.5, location: "دانشکده عمران"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده مهندسی عمران"
},
{
    id: 1060,
    name: "ریاضی عمومی ۲",
    code: "62_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "دانشکده عمران"},
        {days: [4], start: 10.5, duration: 2, location: "دانشکده عمران"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده مهندسی عمران"
},
{
    id: 1061,
    name: "ریاضی عمومی ۲",
    code: "63_5712096",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [4], start: 15, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده مهندسی کامپیوتر"
},
{
    id: 1062,
    name: "نظریه گروه‌های خطی",
    code: "42_5712101",
    prof: "گروه ریاضی",
    units: 4,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "کلاس ۱۰۵"},
        {days: [4], start: 9, duration: 1.5, location: "کلاس ۱۰۵"}
    ],
    examDate: "1404/03/31",
    department: "دانشکده ریاضی"
},
{
    id: 1063,
    name: "توپولوژی جبری ۱",
    code: "42_5712107",
    prof: "گروه ریاضی",
    units: 4,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "کلاس ۱۰۷"},
        {days: [4], start: 15, duration: 1.5, location: "کلاس ۱۰۷"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی"
},
{
    id: 1064,
    name: "نظریه پیشرفته احتمال",
    code: "42_5712171",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "کلاس ۱۰۴"},
        {days: [4], start: 15, duration: 1.5, location: "کلاس ۱۰۴"}
    ],
    examDate: "1404/03/27",
    department: "دانشکده ریاضی"
},
{
    id: 1065,
    name: "شبیه‌سازی",
    code: "42_5712173",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "کلاس ۱۰۵"},
        {days: [4], start: 7.5, duration: 1.5, location: "کلاس ۱۰۵"}
    ],
    examDate: "1404/04/03",
    department: "دانشکده ریاضی"
},
{
    id: 1066,
    name: "جبر پیشرفته",
    code: "42_5712190",
    prof: "گروه ریاضی",
    units: 4,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "کلاس ۱۰۶"},
        {days: [4], start: 9, duration: 1.5, location: "کلاس ۱۰۶"}
    ],
    examDate: "1404/03/27",
    department: "دانشکده ریاضی"
}
,
{
    id: 1067,
    name: "نظریه حلقه‌ها",
    code: "42_5712198",
    prof: "قلندرزاده شعبان",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "کلاس ۱۰۵"},
        {days: [4], start: 10.5, duration: 2, location: "کلاس ۱۰۵"}
    ],
    examDate: "1404/04/09",
    department: "دانشکده ریاضی",
    notes: "این درس با همین مشخصات منتهی در قالب ۴ واحد تا حذف و اضافه جایگزین این گروه می‌شود",
    capacity: 15
},
{
    id: 1068,
    name: "معادلات دیفرانسیل",
    code: "42_5714055",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "سالن سمینار"},
        {days: [4], start: 13.5, duration: 1.5, location: "سالن سمینار"}
    ],
    examDate: "1404/04/09",
    department: "دانشکده ریاضی",
    capacity: 50
},
{
    id: 1069,
    name: "برنامه‌سازی پیشرفته",
    code: "42_5714087",
    prof: "گروه ریاضی",
    units: 4,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "سالن سمینار"},
        {days: [4], start: 9, duration: 1.5, location: "سالن سمینار"},
        {days: [5], start: 7.5, duration: 1.5, location: "سالن سمینار"}
    ],
    examDate: "1404/03/31",
    department: "دانشکده ریاضی",
    capacity: 40
},
{
    id: 1070,
    name: "برنامه‌سازی پیشرفته",
    code: "43_5714087",
    prof: "گروه ریاضی",
    units: 4,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "سالن سمینار"},
        {days: [4], start: 7.5, duration: 1.5, location: "سالن سمینار"},
        {days: [5], start: 9, duration: 1.5, location: "سالن سمینار"}
    ],
    examDate: "1404/03/31",
    department: "دانشکده ریاضی",
    capacity: 40
},
{
    id: 1071,
    name: "محاسبات عددی",
    code: "42_5714098",
    prof: "گروه ریاضی",
    units: 2,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "دانشکده صنایع"}
    ],
    examDate: "1404/03/25",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده مهندسی صنایع",
    capacity: 40
},
{
    id: 1072,
    name: "محاسبات عددی",
    code: "43_5714098",
    prof: "گروه ریاضی",
    units: 2,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/03/25",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده مهندسی برق",
    capacity: 40
},
{
    id: 1073,
    name: "ریاضیات مهندسی",
    code: "42_5714101",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"},
        {days: [5], start: 7.5, duration: 1.5, location: "دانشکده کامپیوتر"}
    ],
    examDate: "1404/03/31",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان دانشکده مهندسی کامپیوتر",
    capacity: 40
},
{
    id: 1074,
    name: "ریاضیات مهندسی",
    code: "43_5714101",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "دانشکده نقشه‌برداری"},
        {days: [4], start: 13.5, duration: 1.5, location: "دانشکده نقشه‌برداری"}
    ],
    examDate: "1404/03/25",
    department: "دانشکده ریاضی",
    capacity: 50
},
{
    id: 1075,
    name: "مبانی ماتریس‌ها و جبرخطی",
    code: "42_5714116",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "سالن سمینار"},
        {days: [4], start: 10.5, duration: 2, location: "سالن سمینار"}
    ],
    examDate: "1404/04/07",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان آموزش ریاضی و دانشجویان ریاضی ورودی ۱۴۰۰ به قبل",
    capacity: 25
},
{
    id: 1076,
    name: "مبانی ترکیبیات",
    code: "42_5714117",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "سالن سمینار"},
        {days: [3], start: 10.5, duration: 2, location: "سالن سمینار"}
    ],
    examDate: "1404/04/02",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان آموزش ریاضی و دانشجویان ریاضی ورودی ۱۴۰۰ به قبل",
    capacity: 25
},
{
    id: 1077,
    name: "مبانی احتمال",
    code: "42_5714118",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "کلاس ۱۰۳"},
        {days: [4], start: 9, duration: 1.5, location: "کلاس ۱۰۳"}
    ],
    examDate: "1404/04/09",
    department: "دانشکده ریاضی",
    capacity: 40
}
,
{
    id: 1078,
    name: "مبانی آنالیز عددی",
    code: "42_5714122",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "کلاس ۱۰۱"},
        {days: [4], start: 10.5, duration: 2, location: "کلاس ۱۰۱"}
    ],
    examDate: "1404/03/31",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان آموزش ریاضی و دانشجویان ریاضی ورودی ۱۴۰۰ به قبل",
    capacity: 25
},
{
    id: 1079,
    name: "حل عددی معادلات دیفرانسیل",
    code: "42_5714126",
    prof: "قریشی فریده",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "کلاس ۱۰۱"},
        {days: [3], start: 10.5, duration: 2, location: "کلاس ۱۰۱"}
    ],
    examDate: "1404/04/04",
    department: "دانشکده ریاضی",
    capacity: 40
},
{
    id: 1080,
    name: "مبانی جبر",
    code: "42_5714134",
    prof: "قلندرزاده شعبان",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "کلاس ۱۰۳"},
        {days: [3], start: 10.5, duration: 2, location: "کلاس ۱۰۳"}
    ],
    examDate: "1404/03/27",
    department: "دانشکده ریاضی",
    notes: "مختص دانشجویان آموزش ریاضی و دانشجویان ریاضی ورودی ۱۴۰۰ به قبل",
    capacity: 25
},
{
    id: 1081,
    name: "بهینه‌سازی خطی",
    code: "42_5714135",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "دانشکده هوافضا"},
        {days: [4], start: 10.5, duration: 2, location: "دانشکده هوافضا"}
    ],
    examDate: "1404/04/08",
    department: "دانشکده ریاضی",
    capacity: 40
},
{
    id: 1082,
    name: "روش‌های آماری",
    code: "42_5714141",
    prof: "خودسیانی راضیه",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "کلاس ۱۰۴"},
        {days: [3], start: 10.5, duration: 2, location: "کلاس ۱۰۴"}
    ],
    examDate: "1404/03/27",
    department: "دانشکده ریاضی",
    capacity: 30
},
{
    id: 1083,
    name: "نرم‌افزارهای ریاضی",
    code: "42_5714148",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "کلاس ۱۰۳"},
        {days: [3], start: 9, duration: 1.5, location: "کلاس ۱۰۳"}
    ],
    examDate: "1404/03/25",
    department: "دانشکده ریاضی",
    capacity: 25
},
{
    id: 1084,
    name: "فرآیندهای تصادفی",
    code: "42_5714151",
    prof: "خودسیانی راضیه",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5, location: "کلاس ۱۰۲"},
        {days: [3], start: 7.5, duration: 1.5, location: "کلاس ۱۰۲"}
    ],
    examDate: "1404/04/03",
    department: "دانشکده ریاضی",
    capacity: 40
},
{
    id: 1085,
    name: "حل عددی معادلات دیفرانسیل جزیی",
    code: "42_5714181",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "کلاس ۱۰۳"},
        {days: [4], start: 7.5, duration: 1.5, location: "کلاس ۱۰۳"}
    ],
    examDate: "1404/04/08",
    department: "دانشکده ریاضی",
    capacity: 15
},
{
    id: 1086,
    name: "بهینه‌سازی محدب",
    code: "42_5714190",
    prof: "گروه ریاضی",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "کلاس ۱۰۵"},
        {days: [4], start: 13.5, duration: 1.5, location: "کلاس ۱۰۵"}
    ],
    examDate: "1404/04/07",
    department: "دانشکده ریاضی",
    notes: "این درس با همین مشخصات منتهی در قالب ۴ واحد تا حذف و اضافه جایگزین این گروه می‌شود",
    capacity: 15
},
{
    id: 1087,
    name: "آنالیز حقیقی",
    code: "42_5714193",
    prof: "گروه ریاضی",
    units: 4,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "کلاس ۱۰۲"},
        {days: [4], start: 13.5, duration: 1.5, location: "کلاس ۱۰۲"}
    ],
    examDate: "1404/04/02",
    department: "دانشکده ریاضی",
    capacity: 30
}
,
{
    id: 1088,
    name: "مهارت‌های زندگی دانشجویی",
    code: "51_5505050",
    prof: "گروه معارف",
    units: 2,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/04/07",
    department: "مرکز آموزش های عمومی",
    capacity: 70,
    notes: "مکان: دانشکده برق"
},
{
    id: 1089,
    name: "مهارت‌های زندگی دانشجویی",
    code: "52_5505050",
    prof: "گروه معارف",
    units: 2,
    sessions: [
        {days: [3], start: 16.5, duration: 1.5, location: "دانشکده هوافضا"}
    ],
    examDate: "1404/04/09",
    department: "مرکز آموزش های عمومی",
    capacity: 70,
    notes: "مکان: هوافضا-سالن تربیت بدنی"
},
{
    id: 1090,
    name: "مهارت‌های زندگی دانشجویی",
    code: "53_5505050",
    prof: "گروه معارف",
    units: 2,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "دانشکده عمران"}
    ],
    examDate: "1404/04/09",
    department: "مرکز آموزش های عمومی",
    capacity: 70,
    notes: "مکان: عمران- ساختمان اموزش"
},
{
    id: 1091,
    name: "مهارت‌های زندگی دانشجویی",
    code: "54_5505050",
    prof: "گروه معارف",
    units: 2,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "دانشکده مکانیک"}
    ],
    examDate: "1404/04/08",
    department: "مرکز آموزش های عمومی",
    capacity: 70,
    notes: "مکان: مکانیک-کلاس"
},
{
    id: 1092,
    name: "اندیشه اسلامی ۱",
    code: "53_5505128",
    prof: "مصباح مقدم سرور",
    units: 2,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/04/02",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن",
    notes: "مکان: دانشکده برق"
},
{
    id: 1093,
    name: "اندیشه اسلامی ۱",
    code: "54_5505128",
    prof: "بلخاری قهی حسین",
    units: 2,
    sessions: [
        {days: [5], start: 7.5, duration: 1.5, location: "دانشکده عمران"}
    ],
    examDate: "1404/04/02",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد",
    notes: "مکان: عمران- ساختمان اموزش"
},
{
    id: 1094,
    name: "اندیشه اسلامی ۱",
    code: "55_5505128",
    prof: "بلخاری قهی حسین",
    units: 2,
    sessions: [
        {days: [5], start: 9, duration: 1.5, location: "دانشکده عمران"}
    ],
    examDate: "1404/04/02",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن",
    notes: "مکان: عمران- ساختمان اموزش"
},
{
    id: 1095,
    name: "اندیشه اسلامی ۱",
    code: "56_5505128",
    prof: "منصوری بیژن",
    units: 2,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "دانشکده هوافضا"}
    ],
    examDate: "1404/04/02",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن",
    notes: "مکان: هوافضا-سالن تربیت بدنی"
},
{
    id: 1096,
    name: "اندیشه اسلامی ۱",
    code: "57_5505128",
    prof: "منصوری بیژن",
    units: 2,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "دانشکده هوافضا"}
    ],
    examDate: "1404/04/02",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد",
    notes: "مکان: هوافضا-سالن تربیت بدنی"
},
{
    id: 1097,
    name: "اندیشه اسلامی ۱",
    code: "58_5505128",
    prof: "شیری امیر مهدی",
    units: 2,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "دانشکده مکانیک"}
    ],
    examDate: "1404/04/02",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد",
    notes: "مکان: مکانیک-کلاس"
}
,
{
    id: 1098,
    name: "اندیشه اسلامی ۱",
    code: "60_5505128",
    prof: "آقایی نعمت",
    units: 2,
    sessions: [
        {days: [3], start: 9, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/04/02",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن",
    notes: "مکان: مکانیک-کلاس"
},
{
    id: 1099,
    name: "اندیشه اسلامی ۱",
    code: "61_5505128",
    prof: "منصوری بیژن",
    units: 2,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "ساختمان آموزشی صنایع"}
    ],
    examDate: "1404/04/02",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد",
    notes: "این کلاس در ساختمان صنایع واقع در دانشکده برق(سیدخندان) برگزار می شود"
},
{
    id: 1100,
    name: "اندیشه اسلامی ۱",
    code: "62_5505128",
    prof: "منصوری بیژن",
    units: 2,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "ساختمان آموزشی صنایع"}
    ],
    examDate: "1404/04/02",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن",
    notes: "این کلاس در ساختمان صنایع واقع در دانشکده برق(سیدخندان) برگزار می شود"
},
{
    id: 1101,
    name: "اندیشه اسلامی ۲",
    code: "51_5505129",
    prof: "شیری امیر مهدی",
    units: 2,
    sessions: [
        {days: [1], start: 16.5, duration: 1.5, location: "ساختمان آموزشی صنایع"}
    ],
    examDate: "1404/04/03",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد",
    notes: "مکان: ساختمان آموزشی صنایع"
},
{
    id: 1102,
    name: "اندیشه اسلامی ۲",
    code: "52_5505129",
    prof: "آقایی نعمت",
    units: 2,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/04/03",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد",
    notes: "مکان: دانشکده برق"
},
{
    id: 1103,
    name: "اندیشه اسلامی ۲",
    code: "53_5505129",
    prof: "آقایی نعمت",
    units: 2,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/04/03",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد",
    notes: "مکان: دانشکده برق"
},
{
    id: 1104,
    name: "اندیشه اسلامی ۲",
    code: "54_5505129",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/04/03",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن",
    notes: "مکان: عمران- ساختمان اموزش"
},
{
    id: 1105,
    name: "اندیشه اسلامی ۲",
    code: "55_5505129",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/04/03",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد",
    notes: "مکان: عمران- ساختمان اموزش"
},
{
    id: 1106,
    name: "اندیشه اسلامی ۲",
    code: "56_5505129",
    prof: "آقایی نعمت",
    units: 2,
    sessions: [
        {days: [3], start: 7.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/04/03",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد",
    notes: "مکان: مکانیک-کلاس"
},
{
    id: 1107,
    name: "اندیشه اسلامی ۲",
    code: "57_5505129",
    prof: "شیری امیر مهدی",
    units: 2,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/04/03",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن",
    notes: "مکان: مکانیک-کلاس"
}

,
{
    id: 1108,
    name: "تربیت بدنی",
    code: "51_5510001",
    prof: "لطیفی حجت اله",
    units: 1,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 16,
    gender: "مرد",
    notes: "مکان: عمران- ساختمان اموزش"
},
{
    id: 1109,
    name: "تربیت بدنی",
    code: "52_5510001",
    prof: "لطیفی حجت اله",
    units: 1,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 16,
    gender: "مرد",
    notes: "مکان: عمران- ساختمان اموزش"
},
{
    id: 1110,
    name: "تربیت بدنی",
    code: "53_5510001",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 16,
    gender: "مرد",
    notes: "مکان: سالن تربیت بدنی دانشکده علوم"
},
{
    id: 1111,
    name: "تربیت بدنی",
    code: "54_5510001",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 16,
    gender: "مرد",
    notes: "مکان: سالن تربیت بدنی دانشکده علوم"
},
{
    id: 1112,
    name: "تربیت بدنی",
    code: "55_5510001", 
    prof: "خنجری یاسر",
    units: 1,
    sessions: [
        {days: [3], start: 7.5, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 16,
    gender: "مرد",
    notes: "مکان: هوافضا-سالن تربیت بدنی"
},
{
    id: 1113,
    name: "تربیت بدنی",
    code: "56_5510001",
    prof: "خنجری یاسر",
    units: 1,
    sessions: [
        {days: [3], start: 9, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 16,
    gender: "مرد",
    notes: "مکان: هوافضا-سالن تربیت بدنی"
},
{
    id: 1114,
    name: "تربیت بدنی",
    code: "57_5510001",
    prof: "لطیفی حجت اله",
    units: 1,
    sessions: [
        {days: [4], start: 7.5, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 16,
    gender: "مرد",
    notes: "مکان: سالن تربیت بدنی دانشکده علوم"
},
{
    id: 1115,
    name: "تربیت بدنی",
    code: "58_5510001",
    prof: "لطیفی حجت اله",
    units: 1,
    sessions: [
        {days: [4], start: 9, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 16,
    gender: "مرد",
    notes: "مکان: سالن تربیت بدنی دانشکده علوم"
},
{
    id: 1116,
    name: "تربیت بدنی",
    code: "59_5510001",
    prof: "خداداد کاشی شعله",
    units: 1,
    sessions: [
        {days: [4], start: 7.5, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 16,
    gender: "زن",
    notes: "مکان: هوافضا-سالن تربیت بدنی"
},
{
    id: 1117,
    name: "تربیت بدنی",
    code: "60_5510001",
    prof: "خداداد کاشی شعله",
    units: 1,
    sessions: [
        {days: [4], start: 9, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 16,
    gender: "زن",
    notes: "مکان: هوافضا-سالن تربیت بدنی"
}
,
{
    id: 1118,
    name: "تربیت بدنی",
    code: "61_5510001",
    prof: "خداداد کاشی شعله",
    units: 1,
    sessions: [
        {days: [4], start: 10.5, duration: 2, location: "هوافضا-سالن تربیت بدنی"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 16,
    gender: "زن",
    notes: "مکان: هوافضا-سالن تربیت بدنی"
},
{
    id: 1119,
    name: "تربیت بدنی",
    code: "62_5510001",
    prof: "محبی فرشته",
    units: 1,
    sessions: [
        {days: [5], start: 7.5, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 16,
    gender: "زن",
    notes: "مکان: سالن تربیت بدنی دانشکده علوم"
},
{
    id: 1120,
    name: "تربیت بدنی",
    code: "63_5510001",
    prof: "محبی فرشته",
    units: 1,
    sessions: [
        {days: [5], start: 9, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 16,
    gender: "زن",
    notes: "مکان: سالن تربیت بدنی دانشکده علوم"
},
{
    id: 1121,
    name: "تربیت بدنی",
    code: "64_5510001",
    prof: "محبی فرشته",
    units: 1,
    sessions: [
        {days: [5], start: 10.5, duration: 2, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 16,
    gender: "زن",
    notes: "مکان: سالن تربیت بدنی دانشکده علوم"
},
{
    id: 1122,
    name: "ورزش ۱",
    code: "51_5510002",
    prof: "لطیفی حجت اله",
    units: 1,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "مرد",
    notes: "مکان: عمران- ساختمان اموزش، فوتسال"
},
{
    id: 1123,
    name: "ورزش ۱",
    code: "52_5510002",
    prof: "خداداد کاشی شعله",
    units: 1,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "زن",
    notes: "مکان: سالن تربیت بدنی دانشکده علوم، بدنسازی"
},
{
    id: 1124,
    name: "ورزش ۱",
    code: "53_5510002",
    prof: "لطیفی حجت اله",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "مرد",
    notes: "مکان: عمران- ساختمان اموزش، فوتسال"
},
{
    id: 1125,
    name: "ورزش ۱",
    code: "54_5510002",
    prof: "خنجری یاسر",
    units: 1,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5, location: "سالن تربیت بدنی دانشکده مهندسی مکانیک"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "مرد",
    notes: "مکان: سالن تربیت بدنی دانشکده مهندسی مکانیک، تنیس روی میز"
},
{
    id: 1126,
    name: "ورزش ۱",
    code: "55_5510002",
    prof: "خنجری یاسر",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "سالن تربیت بدنی دانشکده مهندسی مکانیک"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "مرد",
    notes: "مکان: سالن تربیت بدنی دانشکده مهندسی مکانیک، تنیس روی میز"
},
{
    id: 1127,
    name: "ورزش ۱",
    code: "56_5510002",
    prof: "خنجری یاسر",
    units: 1,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "سالن تربیت بدنی دانشکده مهندسی مکانیک"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "مرد",
    notes: "مکان: سالن تربیت بدنی دانشکده مهندسی مکانیک، تنیس روی میز"
}
,
{
    id: 1128,
    name: "ورزش ۱",
    code: "57_5510002",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "مرد",
    notes: "مکان: سالن تربیت بدنی دانشکده علوم، بدنسازی"
},
{
    id: 1129,
    name: "ورزش ۱",
    code: "58_5510002",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "مرد",
    notes: "مکان: سالن تربیت بدنی دانشکده علوم، بدنسازی"
},
{
    id: 1130,
    name: "ورزش ۱",
    code: "59_5510002",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "سالن تربیت بدنی دانشکده علوم"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "مرد",
    notes: "مکان: سالن تربیت بدنی دانشکده علوم، بدنسازی"
},
{
    id: 1131,
    name: "ورزش ۱",
    code: "60_5510002",
    prof: "خنجری یاسر",
    units: 1,
    sessions: [
        {days: [3], start: 10.5, duration: 2, location: "سالن تربیت بدنی"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "مرد",
    notes: "فوتسال"
},
{
    id: 1132,
    name: "ورزش ۱",
    code: "61_5510002",
    prof: "خداداد کاشی شعله",
    units: 1,
    sessions: [
        {days: [4], start: 13.5, duration: 1.5, location: "سالن تربیت بدنی"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "زن",
    notes: "بدمینتون"
},
{
    id: 1133,
    name: "ورزش ۱",
    code: "62_5510002",
    prof: "خداداد کاشی شعله",
    units: 1,
    sessions: [
        {days: [4], start: 15, duration: 1.5, location: "سالن تربیت بدنی"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "زن",
    notes: "بدمینتون"
},
{
    id: 1134,
    name: "ورزش ۱",
    code: "63_5510002",
    prof: "خانی زاده سحر",
    units: 1,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "سالن تربیت بدنی"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "زن",
    notes: "پیلاتس"
},
{
    id: 1135,
    name: "ورزش ۱",
    code: "64_5510002",
    prof: "خانی زاده سحر",
    units: 1,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "سالن تربیت بدنی"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "زن",
    notes: "پیلاتس"
},
{
    id: 1136,
    name: "ورزش ۱",
    code: "65_5510002",
    prof: "محبی فرشته",
    units: 1,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "سالن تربیت بدنی"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "زن",
    notes: "بدمینتون"
},
{
    id: 1137,
    name: "ورزش ۱",
    code: "66_5510002",
    prof: "محبی فرشته",
    units: 1,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "سالن تربیت بدنی"}
    ],
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "زن",
    notes: "بدمینتون"
}
,
{
    id: 1138,
    name: "تربیت بدنی ویژه",
    code: "51_5510003",
    prof: "هنرور افشار",
    units: 1,
    sessions: [
        {days: [3], start: 10.5, duration: 2, location: "علوم-سالن تربیت بدنی"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 16,
    gender: "مختلط",
    notes: "ویژه دانشجویان دارای مشکلات جسمی – حرکتی با تأیید پزشک معتمد دانشگاه و پزشک متخصص ویژه معلولین"
},
{
    id: 1139,
    name: "ورزش ویژه",
    code: "51_5510004",
    prof: "خداداد کاشی شعله",
    units: 1,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "علوم-سالن تربیت بدنی"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 12,
    gender: "مختلط",
    notes: "ویژه دانشجویان دارای مشکلات جسمی – حرکتی با تأیید پزشک معتمد دانشگاه و پزشک متخصص ویژه معلولین"
}

,{
    id: 1140,
    name: "نگارش متون علمی",
    code: "51_5512003",
    prof: "نوروزی زاده سوگند",
    units: 3,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/25",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1141,
    name: "نگارش متون علمی",
    code: "52_5512003",
    prof: "نوروزی زاده سوگند",
    units: 3,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/25",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1142,
    name: "زبان فارسی ۱",
    code: "51_5512004",
    prof: "سلمانی نژادمهرآبادی ساغر",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5, location: "مکانیک-کلاس"},
        {days: [5], start: 7.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1143,
    name: "زبان فارسی ۱",
    code: "52_5512004",
    prof: "سلمانی نژادمهرآبادی ساغر",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "مکانیک-کلاس"},
        {days: [5], start: 9, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1144,
    name: "زبان فارسی ۱",
    code: "53_5512004", 
    prof: "سلمانی نژادمهرآبادی ساغر",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "۱۰۱"},
        {days: [1], start: 15, duration: 1.5, location: "۱۰۱"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1145,
    name: "زبان فارسی ۱",
    code: "54_5512004",
    prof: "علیقلی زاده حسین",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "مکانیک-کلاس"},
        {days: [5], start: 13.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1146,
    name: "زبان فارسی ۱",
    code: "55_5512004",
    prof: "علیقلی زاده حسین",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "مکانیک-کلاس"},
        {days: [5], start: 15, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1147,
    name: "زبان فارسی ۱",
    code: "56_5512004",
    prof: "علیقلی زاده حسین",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "ساختمان آموزشی نقشه برداری"},
        {days: [1], start: 10.5, duration: 2, location: "ساختمان آموزشی نقشه برداری"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1148,
    name: "زبان فارسی ۱",
    code: "57_5512004",
    prof: "شاگشتاسبی مولود",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "کلاس"},
        {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1149,
    name: "زبان فارسی ۱",
    code: "58_5512004",
    prof: "شاگشتاسبی مولود",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "کلاس"},
        {days: [4], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
}

,
{
    id: 1140,
    name: "نگارش متون علمی",
    code: "51_5512003",
    prof: "نوروزی زاده سوگند",
    units: 3,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/25",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1141,
    name: "نگارش متون علمی",
    code: "52_5512003",
    prof: "نوروزی زاده سوگند",
    units: 3,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/25",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1142,
    name: "زبان فارسی ۱",
    code: "51_5512004",
    prof: "سلمانی نژادمهرآبادی ساغر",
    units: 3,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5, location: "مکانیک-کلاس"},
        {days: [5], start: 7.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1143,
    name: "زبان فارسی ۱",
    code: "52_5512004",
    prof: "سلمانی نژادمهرآبادی ساغر",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "مکانیک-کلاس"},
        {days: [5], start: 9, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1144,
    name: "زبان فارسی ۱",
    code: "53_5512004", 
    prof: "سلمانی نژادمهرآبادی ساغر",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "۱۰۱"},
        {days: [1], start: 15, duration: 1.5, location: "۱۰۱"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1145,
    name: "زبان فارسی ۱",
    code: "54_5512004",
    prof: "علیقلی زاده حسین",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "مکانیک-کلاس"},
        {days: [5], start: 13.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1146,
    name: "زبان فارسی ۱",
    code: "55_5512004",
    prof: "علیقلی زاده حسین",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "مکانیک-کلاس"},
        {days: [5], start: 15, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1147,
    name: "زبان فارسی ۱",
    code: "56_5512004",
    prof: "علیقلی زاده حسین",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "ساختمان آموزشی نقشه برداری"},
        {days: [1], start: 10.5, duration: 2, location: "ساختمان آموزشی نقشه برداری"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1148,
    name: "زبان فارسی ۱",
    code: "57_5512004",
    prof: "شاگشتاسبی مولود",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "کلاس"},
        {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1149,
    name: "زبان فارسی ۱",
    code: "58_5512004",
    prof: "شاگشتاسبی مولود",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "کلاس"},
        {days: [4], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
}
,
{
    id: 1150,
    name: "زبان فارسی ۱",
    code: "59_5512004",
    prof: "روستا امید",
    units: 3,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "کلاس"},
        {days: [4], start: 13.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1151,
    name: "زبان فارسی ۱",
    code: "60_5512004",
    prof: "روستا امید",
    units: 3,
    sessions: [
        {days: [2], start: 15, duration: 1.5, location: "کلاس"},
        {days: [4], start: 15, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/03/26",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1152,
    name: "زبان انگلیسی",
    code: "51_5512006",
    prof: "نوروزی زاده سوگند",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "ساختمان آموزشی صنایع"},
        {days: [4], start: 9, duration: 1.5, location: "ساختمان آموزشی صنایع"}
    ],
    examDate: "1404/03/31",
    department: "مرکز آموزش های عمومی",
    capacity: 35,
    gender: "مختلط",
    notes: "محل تشکیل کلاس در ساختمان صنایع در سیدخندان است"
},
{
    id: 1153,
    name: "زبان انگلیسی",
    code: "52_5512006",
    prof: "نوروزی زاده سوگند",
    units: 3,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "ساختمان آموزشی صنایع"},
        {days: [4], start: 10.5, duration: 2, location: "ساختمان آموزشی صنایع"}
    ],
    examDate: "1404/03/31",
    department: "مرکز آموزش های عمومی",
    capacity: 35,
    gender: "مختلط",
    notes: "محل تشکیل کلاس در ساختمان صنایع در سیدخندان است"
},
{
    id: 1154,
    name: "زبان انگلیسی",
    code: "53_5512006",
    prof: "شریف مریم",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "کلاس"},
        {days: [5], start: 9, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/03/31",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1155,
    name: "زبان انگلیسی",
    code: "54_5512006",
    prof: "شریف مریم",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "کلاس"},
        {days: [5], start: 10.5, duration: 2, location: "کلاس"}
    ],
    examDate: "1404/03/31",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1156,
    name: "زبان انگلیسی",
    code: "55_5512006",
    prof: "نظام آبادی حمیدرضا",
    units: 3,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "کلاس ۲۱۰ دانشکده هوافضا"},
        {days: [5], start: 15, duration: 1.5, location: "کلاس ۲۱۰ دانشکده هوافضا"}
    ],
    examDate: "1404/03/31",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط",
    notes: "در کلاس ۲۱۰ دانشکده هوافضا تشکیل میشود"
},
{
    id: 1157,
    name: "زبان انگلیسی",
    code: "56_5512006",
    prof: "سعیدی سعید",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "کلاس"},
        {days: [1], start: 16.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/03/31",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
},
{
    id: 1158,
    name: "زبان انگلیسی",
    code: "57_5512006",
    prof: "سعیدی سعید",
    units: 3,
    sessions: [
        {days: [3], start: 15, duration: 1.5, location: "کلاس"},
        {days: [3], start: 16.5, duration: 1.5, location: "کلاس"}
    ],
    examDate: "1404/03/31",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مختلط"
}
,
{
    id: 1159,
    name: "انقلاب اسلامی و ریشه های آن",
    code: "51_5514003",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [5], start: 9, duration: 1.5, location: "ساختمان آموزشی صنایع"}
    ],
    examDate: "1404/03/28",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1160,
    name: "انقلاب اسلامی و ریشه های آن",
    code: "52_5514003",
    prof: "امامی محمد مهدی",
    units: 2,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/03/28",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1161,
    name: "انقلاب اسلامی و ریشه های آن",
    code: "53_5514003",
    prof: "امامی محمد مهدی",
    units: 2,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/03/28",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1162,
    name: "انقلاب اسلامی و ریشه های آن",
    code: "54_5514003",
    prof: "طهماسبی محمد",
    units: 2,
    sessions: [
        {days: [4], start: 9, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/03/28",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1163,
    name: "انقلاب اسلامی و ریشه های آن",
    code: "55_5514003",
    prof: "نوروزی مهدی",
    units: 2,
    sessions: [
        {days: [4], start: 15, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/03/28",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1164,
    name: "انقلاب اسلامی و ریشه های آن",
    code: "56_5514003",
    prof: "نوروزی مهدی",
    units: 2,
    sessions: [
        {days: [4], start: 16.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/03/28",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1165,
    name: "انقلاب اسلامی و ریشه های آن",
    code: "57_5514003",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [3], start: 9, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/03/28",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1166,
    name: "انقلاب اسلامی و ریشه های آن",
    code: "58_5514003",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [3], start: 10.5, duration: 2, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/03/28",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1167,
    name: "انقلاب اسلامی و ریشه های آن",
    code: "59_5514003",
    prof: "طهماسبی محمد",
    units: 2,
    sessions: [
        {days: [5], start: 9, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/28",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1168,
    name: "انقلاب اسلامی و ریشه های آن",
    code: "60_5514003",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/28",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
}
,
{
    id: 1169,
    name: "انقلاب اسلامی و ریشه های آن",
    code: "61_5514003",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/28",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1170,
    name: "اخلاق و تربیت اسلامی",
    code: "51_5514004",
    prof: "مرتضایی بهزاد",
    units: 2,
    sessions: [
        {days: [4], start: 9, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/04/01",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1171,
    name: "اخلاق و تربیت اسلامی",
    code: "52_5514004",
    prof: "مرتضایی بهزاد",
    units: 2,
    sessions: [
        {days: [4], start: 10.5, duration: 2, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/04/01",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1172,
    name: "اخلاق و تربیت اسلامی",
    code: "53_5514004",
    prof: "حقیقت طلب سکینه",
    units: 2,
    sessions: [
        {days: [3], start: 16.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/04/01",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1173,
    name: "اخلاق و تربیت اسلامی",
    code: "54_5514004",
    prof: "مستقیم امیرحسین",
    units: 2,
    sessions: [
        {days: [5], start: 7.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/04/01",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1174,
    name: "تفسیر موضوعی نهج البلاغه",
    code: "51_5514005",
    prof: "کاظم توری سعیده",
    units: 2,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "ساختمان آموزشی صنایع"}
    ],
    examDate: "1404/03/27",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1175,
    name: "تفسیر موضوعی نهج البلاغه",
    code: "52_5514005",
    prof: "کاظم توری سعیده",
    units: 2,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/27",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1176,
    name: "تفسیر موضوعی قرآن",
    code: "51_5514006",
    prof: "نوری حمید رضا",
    units: 2,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/03/27",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1177,
    name: "تفسیر موضوعی قرآن",
    code: "52_5514006",
    prof: "خدامی واحد",
    units: 2,
    sessions: [
        {days: [1], start: 7.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/03/27",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1178,
    name: "تفسیر موضوعی قرآن",
    code: "53_5514006",
    prof: "خدامی واحد",
    units: 2,
    sessions: [
        {days: [1], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/03/27",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
}
,
{
    id: 1179,
    name: "تفسیر موضوعی قرآن",
    code: "54_5514006",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [2], start: 9, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/03/27",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1180,
    name: "تفسیر موضوعی قرآن",
    code: "55_5514006",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [2], start: 10.5, duration: 2, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/03/27",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1181,
    name: "تفسیر موضوعی قرآن",
    code: "56_5514006",
    prof: "نوری حمید رضا",
    units: 2,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/03/27",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1182,
    name: "تفسیر موضوعی قرآن",
    code: "57_5514006",
    prof: "گیاه پور هادی",
    units: 2,
    sessions: [
        {days: [4], start: 9, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/03/27",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1183,
    name: "تفسیر موضوعی قرآن",
    code: "58_5514006",
    prof: "گیاه پور هادی",
    units: 2,
    sessions: [
        {days: [4], start: 10.5, duration: 2, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/03/27",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1184,
    name: "تفسیر موضوعی قرآن",
    code: "60_5514006",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/27",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1185,
    name: "تفسیر موضوعی قرآن",
    code: "61_5514006",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/27",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1186,
    name: "حقوق اجتماعی و سیاسی در اسلام",
    code: "51_5514011",
    prof: "نوری حمید رضا",
    units: 2,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/04/03",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1187,
    name: "حقوق اجتماعی و سیاسی در اسلام",
    code: "52_5514011",
    prof: "نوری حمید رضا",
    units: 2,
    sessions: [
        {days: [1], start: 15, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/04/03",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1188,
    name: "حقوق اجتماعی و سیاسی در اسلام",
    code: "53_5514011",
    prof: "منصوری بیژن",
    units: 2,
    sessions: [
        {days: [5], start: 10.5, duration: 2, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/04/03",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
}
,
{
    id: 1189,
    name: "تاریخ تمدن فرهنگ و تمدن اسلامی",
    code: "51_5514014",
    prof: "بابایی محمدحسن",
    units: 2,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/04/04",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1190,
    name: "تاریخ تمدن فرهنگ و تمدن اسلامی",
    code: "52_5514014",
    prof: "بابایی محمدحسن",
    units: 2,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/04/04",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1191,
    name: "آیین زندگی و اخلاق کاربردی",
    code: "51_5514015",
    prof: "حقیقت طلب سکینه",
    units: 2,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1404/04/01",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1192,
    name: "آیین زندگی و اخلاق کاربردی",
    code: "52_5514015",
    prof: "موسوی سیدعلی محمد",
    units: 2,
    sessions: [
        {days: [3], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1404/04/01",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1193,
    name: "آیین زندگی و اخلاق کاربردی",
    code: "53_5514015",
    prof: "حقیقت طلب سکینه",
    units: 2,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/04/01",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1194,
    name: "آیین زندگی و اخلاق کاربردی",
    code: "54_5514015",
    prof: "حقیقت طلب سکینه",
    units: 2,
    sessions: [
        {days: [5], start: 16.5, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/04/01",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1195,
    name: "آیین زندگی و اخلاق کاربردی",
    code: "55_5514015",
    prof: "موسوی سیدعلی محمد",
    units: 2,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/04/01",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1196,
    name: "آیین زندگی و اخلاق کاربردی",
    code: "56_5514015",
    prof: "موسوی سیدعلی محمد",
    units: 2,
    sessions: [
        {days: [1], start: 16.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/04/01",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1197,
    name: "آیین زندگی و اخلاق کاربردی",
    code: "57_5514015",
    prof: "حقیقت طلب سکینه",
    units: 2,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/04/01",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1198,
    name: "دانش خانواده و جمعیت",
    code: "51_5514016",
    prof: "خدامی واحد",
    units: 2,
    sessions: [
        {days: [1], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1404/03/25",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
}
,
{
    id: 1199,
    name: "دانش خانواده و جمعیت",
    code: "52_5514016",
    prof: "مصباح مقدم سرور",
    units: 2,
    sessions: [
        {days: [2], start: 13.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/03/25",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1200,
    name: "دانش خانواده و جمعیت",
    code: "53_5514016",
    prof: "موسوی سیدعلی محمد",
    units: 2,
    sessions: [
        {days: [3], start: 7.5, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/03/25",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1201,
    name: "دانش خانواده و جمعیت",
    code: "54_5514016",
    prof: "اکبری سکینه",
    units: 2,
    sessions: [
        {days: [5], start: 13.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/03/25",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1202,
    name: "دانش خانواده و جمعیت",
    code: "55_5514016",
    prof: "خدامی واحد",
    units: 2,
    sessions: [
        {days: [5], start: 7.5, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/03/25",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1203,
    name: "دانش خانواده و جمعیت",
    code: "56_5514016",
    prof: "حقیقت طلب سکینه",
    units: 2,
    sessions: [
        {days: [5], start: 10.5, duration: 2, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/03/25",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1204,
    name: "دانش خانواده و جمعیت",
    code: "57_5514016",
    prof: "خدامی واحد",
    units: 2,
    sessions: [
        {days: [5], start: 9, duration: 1.5, location: "هوافضا-سالن تربیت بدنی"}
    ],
    examDate: "1404/03/25",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1205,
    name: "دانش خانواده و جمعیت",
    code: "58_5514016",
    prof: "موسوی سیدعلی محمد",
    units: 2,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/25",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1206,
    name: "دانش خانواده و جمعیت",
    code: "59_5514016",
    prof: "موسوی سیدعلی محمد",
    units: 2,
    sessions: [
        {days: [5], start: 16.5, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/25",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1207,
    name: "دانش خانواده و جمعیت",
    code: "60_5514016",
    prof: "اکبری سکینه",
    units: 2,
    sessions: [
        {days: [5], start: 15, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/03/25",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1208,
    name: "تاریخ تحلیلی صدر اسلام",
    code: "51_5514017",
    prof: "منصوری بیژن",
    units: 2,
    sessions: [
        {days: [3], start: 16.5, duration: 1.5, location: "ساختمان آموزشی صنایع"}
    ],
    examDate: "1404/04/04",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
}
,
{
    id: 1209,
    name: "تاریخ تحلیلی صدر اسلام",
    code: "52_5514017",
    prof: "امامی محمد مهدی",
    units: 2,
    sessions: [
        {days: [3], start: 15, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/04/04",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1210,
    name: "تاریخ تحلیلی صدر اسلام",
    code: "53_5514017", 
    prof: "امامی محمد مهدی",
    units: 2,
    sessions: [
        {days: [5], start: 9, duration: 1.5, location: "دانشکده برق"}
    ],
    examDate: "1404/04/04",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1211,
    name: "تاریخ تحلیلی صدر اسلام",
    code: "54_5514017",
    prof: "امامی محمد مهدی",
    units: 2,
    sessions: [
        {days: [5], start: 10.5, duration: 2, location: "دانشکده برق"}
    ],
    examDate: "1404/04/04",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1212,
    name: "تاریخ تحلیلی صدر اسلام",
    code: "55_5514017",
    prof: "خادم الحسینی سید پیمان",
    units: 2,
    sessions: [
        {days: [4], start: 13.5, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/04/04",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
},
{
    id: 1213,
    name: "تاریخ تحلیلی صدر اسلام",
    code: "56_5514017",
    prof: "خادم الحسینی سید پیمان",
    units: 2,
    sessions: [
        {days: [4], start: 15, duration: 1.5, location: "عمران- ساختمان اموزش"}
    ],
    examDate: "1404/04/04",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "مرد"
},
{
    id: 1214,
    name: "تاریخ تحلیلی صدر اسلام",
    code: "59_5514017",
    prof: "منصوری بیژن",
    units: 2,
    sessions: [
        {days: [3], start: 15, duration: 1.5, location: "مکانیک-کلاس"}
    ],
    examDate: "1404/04/04",
    department: "مرکز آموزش های عمومی",
    capacity: 40,
    gender: "زن"
}


,

];



