// Tüm 2026 Yarış Verileri
const racesData = [
    // OCAK 2026
    {
        name: "16. Uluslararası Adana Kurtuluş Yarı Maratonu",
        type: "yol",
        date: "2026-01-11",
        city: "Adana",
        distances: ["10K", "21K", "Halk Koşusu", "Çocuk Koşusu"],
        status: "open",
        highlights: []
    },
    {
        name: "Palandöken Run to Stars - Winter",
        type: "trail",
        date: "2026-01-13",
        city: "Erzurum",
        distances: ["5K", "8K"],
        status: "open",
        highlights: ["ITRA", "Kış Koşusu"]
    },
    {
        name: "15. Uğur Mumcu Yol Koşusu",
        type: "yol",
        date: "2026-01-25",
        city: "İstanbul",
        distances: ["10K"],
        status: "open",
        highlights: []
    },

    // ŞUBAT 2026
    {
        name: "Nif Ultra Trail",
        type: "trail",
        date: "2026-02-14",
        city: "İzmir",
        distances: ["10K", "20K", "40K", "60K"],
        status: "open",
        highlights: ["ITRA", "UTMB Index"]
    },
    {
        name: "Geyik Koşuları",
        type: "trail",
        date: "2026-02-14",
        city: "İstanbul",
        distances: ["4K", "8K", "14K", "28K", "Bambi Koşuları", "6K Canicross"],
        status: "open",
        highlights: ["Popüler"]
    },
    {
        name: "Bodrun Ultra Maratonu",
        type: "trail",
        date: "2026-02-14",
        city: "Muğla",
        distances: ["5K", "10K", "22K", "34K", "60K", "Sevgililer Koşusu 5K"],
        status: "open",
        highlights: []
    },
    {
        name: "46. Trabzon Yarı Maratonu",
        type: "yol",
        date: "2026-02-15",
        city: "Trabzon",
        distances: ["4K", "10.5K", "21K", "Çocuk Koşusu"],
        status: "waitlist",
        highlights: []
    },
    {
        name: "Winter Run Istanbul",
        type: "yol",
        date: "2026-02-15",
        city: "İstanbul",
        distances: ["5K", "10K"],
        status: "open",
        highlights: []
    },

    // MART 2026
    {
        name: "Heliz Kaş Ultra Trail",
        type: "trail",
        date: "2026-02-27",
        city: "Antalya",
        distances: ["5K", "15K", "30K", "45K", "Çocuk Koşusu"],
        status: "open",
        highlights: ["Yeni"]
    },
    {
        name: "Alanya Ultra Trail",
        type: "trail",
        date: "2026-03-27",
        city: "Antalya",
        distances: ["5K", "18K", "27K", "42K", "69K"],
        status: "waitlist",
        highlights: ["ITRA", "UTMB Index", "Popüler"]
    },
    {
        name: "Efes Ultra Maratonu",
        type: "trail",
        date: "2026-03-28",
        city: "İzmir",
        distances: ["6K", "12K", "27K", "42K", "61K", "120K"],
        status: "open",
        highlights: ["Tarihi Rota"]
    },

    // NİSAN 2026
    {
        name: "Runtalya (Antalya Uluslararası Maratonu)",
        type: "yol",
        date: "2026-04-05",
        city: "Antalya",
        distances: ["5K", "10K", "21K", "42K", "Minik Adımlar"],
        status: "open",
        highlights: []
    },
    {
        name: "Bosphorun Quarter Marathon - Caddebostan",
        type: "yol",
        date: "2026-04-05",
        city: "İstanbul",
        distances: ["10.5K"],
        status: "open",
        highlights: []
    },
    {
        name: "İznik Ultra Maratonu",
        type: "trail",
        date: "2026-04-10",
        city: "Bursa",
        distances: ["5K", "14K", "25K", "50K", "75K", "90K", "160K", "Çocuk Koşusu"],
        status: "open",
        highlights: ["ITRA", "Popüler"]
    },
    {
        name: "Yesemek Ultra Trail",
        type: "trail",
        date: "2026-04-11",
        city: "Gaziantep",
        distances: ["7K", "14K", "25K", "35K", "71K"],
        status: "open",
        highlights: ["ITRA"]
    },
    {
        name: "Adana Backyard Ultra",
        type: "trail",
        date: "2026-04-11",
        city: "Adana",
        distances: ["6.706K x Sonsuz"],
        status: "open",
        highlights: ["Backyard Format"]
    },
    {
        name: "Intersport Mezopotamya Trail Run",
        type: "trail",
        date: "2026-04-18",
        city: "Mardin",
        distances: ["5K", "15K", "40K", "90K"],
        status: "open",
        highlights: ["Tarihi Rota"]
    },
    {
        name: "Marmaris Ultra Trail",
        type: "trail",
        date: "2026-04-18",
        city: "Muğla",
        distances: ["5K", "16K", "30K", "48K", "77K", "106K"],
        status: "open",
        highlights: ["ITRA", "UTMB Index"]
    },
    {
        name: "Türkiye İş Bankası 21. İstanbul Yarı Maratonu",
        type: "yol",
        date: "2026-04-19",
        city: "İstanbul",
        distances: ["10K", "21K"],
        status: "open",
        highlights: ["Önemli Yarış", "Tarihi Yarımada"]
    },
    {
        name: "Bilkent Yol Koşusu",
        type: "yol",
        date: "2026-04-19",
        city: "Ankara",
        distances: ["4.5K", "9K"],
        status: "open",
        highlights: []
    },
    {
        name: "Eğirdir Ultra Trail",
        type: "trail",
        date: "2026-04-24",
        city: "Isparta",
        distances: ["12K", "25K", "40K", "60K"],
        status: "open",
        highlights: ["ITRA"]
    },
    {
        name: "Babadağ Ultra Trail",
        type: "trail",
        date: "2026-04-24",
        city: "Muğla",
        distances: ["5K", "14K", "15K", "26K", "30K", "56K"],
        status: "open",
        highlights: []
    },
    {
        name: "Troya Maratonu",
        type: "yol",
        date: "2026-04-26",
        city: "Çanakkale",
        distances: ["6K", "10K", "21K", "42K", "Çocuk Koşusu"],
        status: "open",
        highlights: ["Yeni Maraton Mesafesi"]
    },

    // MAYIS 2026
    {
        name: "Gomeda Ultra Trail",
        type: "trail",
        date: "2026-05-02",
        city: "Nevşehir",
        distances: ["5K", "10K", "19K", "30K", "47K"],
        status: "open",
        highlights: ["Kapadokya"]
    },
    {
        name: "Sagalassos Sky Ultra",
        type: "trail",
        date: "2026-05-02",
        city: "Isparta",
        distances: ["2K", "5K", "17K", "26K", "42K"],
        status: "open",
        highlights: ["ITRA", "UTMB Index", "Yeni Parkur"]
    },
    {
        name: "Aydos Ultra Trail Run",
        type: "trail",
        date: "2026-05-03",
        city: "İstanbul",
        distances: ["5K", "10K", "20K", "44K"],
        status: "open",
        highlights: ["ITRA"]
    },
    {
        name: "Konya Yarı Maratonu",
        type: "yol",
        date: "2026-05-03",
        city: "Konya",
        distances: ["5K", "10K", "21K"],
        status: "waitlist",
        highlights: []
    },
    {
        name: "İzmir Zaman Koşusu",
        type: "yol",
        date: "2026-05-03",
        city: "İzmir",
        distances: ["1 Saat", "2 Saat", "4 Saat", "6 Saat"],
        status: "open",
        highlights: ["Yeni", "Zaman Formatı"]
    },
    {
        name: "Salomon Çeşme Maratonu",
        type: "yol",
        date: "2026-05-10",
        city: "İzmir",
        distances: ["10K", "21K", "42K"],
        status: "waitlist",
        highlights: []
    },
    {
        name: "Gebze Ultra Trail",
        type: "trail",
        date: "2026-05-15",
        city: "Kocaeli",
        distances: ["Çeşitli kategoriler"],
        status: "open",
        highlights: []
    },

    // HAZİRAN 2026
    {
        name: "Gökçeada Ultra Trail Run",
        type: "trail",
        date: "2026-06-06",
        city: "Çanakkale",
        distances: ["Çeşitli kategoriler"],
        status: "waitlist",
        highlights: ["ITRA", "Ada Koşusu"]
    },
    {
        name: "Sümela Ultra Trail",
        type: "trail",
        date: "2026-06-06",
        city: "Trabzon",
        distances: ["Ultra kategoriler"],
        status: "waitlist",
        highlights: ["Tarihi Rota"]
    },
    {
        name: "Sapanca Ultra Maratonu",
        type: "yol",
        date: "2026-06-13",
        city: "Sakarya",
        distances: ["10K", "21K", "42K", "Ultra"],
        status: "open",
        highlights: []
    },
    {
        name: "Kanyon Ulubey Ultra Trail",
        type: "trail",
        date: "2026-06-26",
        city: "Uşak",
        distances: ["Ultra kategoriler"],
        status: "open",
        highlights: ["Kanyon Manzarası"]
    },

    // TEMMUZ 2026
    {
        name: "Uludağ Premium Ultra Trail",
        type: "trail",
        date: "2026-07-18",
        city: "Bursa",
        distances: ["Ultra kategoriler"],
        status: "open",
        highlights: ["ITRA", "Prestijli"]
    },

    // AĞUSTOS 2026
    {
        name: "Runfire Salt Lake Ultra Trail",
        type: "trail",
        date: "2026-08-21",
        city: "Aksaray",
        distances: ["Ultra kategoriler"],
        status: "open",
        highlights: ["ITRA", "Tuz Gölü"]
    },
    {
        name: "Merrell Belgrad Ultra Trail",
        type: "trail",
        date: "2026-08-22",
        city: "İstanbul",
        distances: ["5K", "15K", "30K", "60K"],
        status: "open",
        highlights: ["Festival Formatı", "Büyük Etkinlik"]
    },

    // EKİM 2026
    {
        name: "Bodrum Yarı Maratonu",
        type: "yol",
        date: "2026-10-02",
        city: "Muğla",
        distances: ["10K", "21K"],
        status: "waitlist",
        highlights: []
    },
    {
        name: "Salomon Cappadocia Ultra Trail",
        type: "trail",
        date: "2026-10-16",
        city: "Nevşehir",
        distances: ["20K", "38K", "63K", "119K"],
        status: "open",
        highlights: ["ITRA", "UTMB World Series", "UNESCO", "En Büyük Trail"]
    },

    // KASIM 2026
    {
        name: "Türkiye İş Bankası 48. İstanbul Maratonu",
        type: "yol",
        date: "2026-11-01",
        city: "İstanbul",
        distances: ["15.5K", "42K"],
        status: "open",
        highlights: ["Kıtalararası Maraton", "Önemli Yarış"]
    }
];