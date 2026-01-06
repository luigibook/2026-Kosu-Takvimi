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
        highlights: [],
        website: "https://apphurra.com/etkinlik/16inci-uluslararasi-adana-kurtulus-yari-maratonu"
    },
    {
        name: "Palandöken Run to Stars - Winter",
        type: "trail",
        date: "2026-01-13",
        city: "Erzurum",
        distances: ["5K", "8K"],
        status: "open",
        highlights: ["ITRA", "Kış Koşusu"],
        website: "https://www.runtostars.com/events/"
    },
    {
        name: "15. Uğur Mumcu Yol Koşusu",
        type: "yol",
        date: "2026-01-25",
        city: "İstanbul",
        distances: ["10K"],
        status: "open",
        highlights: [],
        website: "https://www.teamkronos.com/ugur-mumcu-yol-kosusu"
    },

    // ŞUBAT 2026
    {
        name: "Nif Ultra Trail",
        type: "trail",
        date: "2026-02-14",
        city: "İzmir",
        distances: ["10K", "20K", "40K", "60K"],
        status: "open",
        highlights: ["ITRA", "UTMB Index"],
        website: "https://nifultra.com/"
    },
    {
        name: "Geyik Koşuları",
        type: "trail",
        date: "2026-02-14",
        city: "İstanbul",
        distances: ["4K", "8K", "14K", "28K", "Bambi Koşuları", "6K Canicross"],
        status: "open",
        highlights: ["Popüler"],
        website: "https://www.geyikkosulari.com/"
    },
    {
        name: "Bodrun Ultra Maratonu",
        type: "trail",
        date: "2026-02-14",
        city: "Muğla",
        distances: ["5K", "10K", "22K", "34K", "60K", "Sevgililer Koşusu 5K"],
        status: "open",
        highlights: [],
        website: "https://www.bodrun.org/"
    },
    {
        name: "46. Trabzon Yarı Maratonu",
        type: "yol",
        date: "2026-02-15",
        city: "Trabzon",
        distances: ["4K", "10.5K", "21K", "Çocuk Koşusu"],
        status: "waitlist",
        highlights: [],
        website: "https://yarimaraton.trabzon.bel.tr/"
    },
    {
        name: "Winter Run Istanbul",
        type: "yol",
        date: "2026-02-15",
        city: "İstanbul",
        distances: ["5K", "10K"],
        status: "open",
        highlights: [],
        website: "https://apphurra.com/etkinlik/winter-run-istanbul"
    },

    // MART 2026
    {
        name: "Heliz Kaş Ultra Trail",
        type: "trail",
        date: "2026-02-27",
        city: "Antalya",
        distances: ["5K", "15K", "30K", "45K", "Çocuk Koşusu"],
        status: "open",
        highlights: ["Yeni"],
        website: "https://heliz.life/event/heliz-kas-ultra-trail-2026"
    },
    {
        name: "Alanya Ultra Trail",
        type: "trail",
        date: "2026-03-27",
        city: "Antalya",
        distances: ["5K", "18K", "27K", "42K", "69K"],
        status: "waitlist",
        highlights: ["ITRA", "UTMB Index", "Popüler"],
        website: "https://alanyaultratrail.com/"
    },
    {
        name: "Efes Ultra Maratonu",
        type: "trail",
        date: "2026-03-28",
        city: "İzmir",
        distances: ["6K", "12K", "27K", "42K", "61K", "120K"],
        status: "open",
        highlights: ["Tarihi Rota"],
        website: "https://www.efesultra.org/"
    },

    // NİSAN 2026
    {
        name: "Runtalya (Antalya Uluslararası Maratonu)",
        type: "yol",
        date: "2026-04-05",
        city: "Antalya",
        distances: ["5K", "10K", "21K", "42K", "Minik Adımlar"],
        status: "open",
        highlights: [],
        website: "https://tursetsports.com/races/runtalya"
    },
    {
        name: "Bosphorun Quarter Marathon - Caddebostan",
        type: "yol",
        date: "2026-04-05",
        city: "İstanbul",
        distances: ["10.5K"],
        status: "open",
        highlights: [],
        website: "https://bosphorun.istanbul/"
    },
    {
        name: "İznik Ultra Maratonu",
        type: "trail",
        date: "2026-04-10",
        city: "Bursa",
        distances: ["5K", "14K", "25K", "50K", "75K", "90K", "160K", "Çocuk Koşusu"],
        status: "open",
        highlights: ["ITRA", "Popüler"],
        website: "https://www.iznikultra.com/"
    },
    {
        name: "Yesemek Ultra Trail",
        type: "trail",
        date: "2026-04-11",
        city: "Gaziantep",
        distances: ["7K", "14K", "25K", "35K", "71K"],
        status: "open",
        highlights: ["ITRA"],
        website: "https://www.yesemekultra.com/"
    },
    {
        name: "Adana Backyard Ultra",
        type: "trail",
        date: "2026-04-11",
        city: "Adana",
        distances: ["6.706K x Sonsuz"],
        status: "open",
        highlights: ["Backyard Format"],
        website: "https://www.adanabackyardultra.com/"
    },
    {
        name: "Intersport Mezopotamya Trail Run",
        type: "trail",
        date: "2026-04-18",
        city: "Mardin",
        distances: ["5K", "15K", "40K", "90K"],
        status: "open",
        highlights: ["Tarihi Rota"],
        website: "https://intersportmezopotamyatrail.com/"
    },
    {
        name: "Marmaris Ultra Trail",
        type: "trail",
        date: "2026-04-18",
        city: "Muğla",
        distances: ["5K", "16K", "30K", "48K", "77K", "106K"],
        status: "open",
        highlights: ["ITRA", "UTMB Index"],
        website: "https://marmarisultra.com/"
    },
    {
        name: "Türkiye İş Bankası 21. İstanbul Yarı Maratonu",
        type: "yol",
        date: "2026-04-19",
        city: "İstanbul",
        distances: ["10K", "21K"],
        status: "open",
        highlights: ["Önemli Yarış", "Tarihi Yarımada"],
        website: "https://istanbulyarimaratonu.com/"
    },
    {
        name: "Bilkent Yol Koşusu",
        type: "yol",
        date: "2026-04-19",
        city: "Ankara",
        distances: ["4.5K", "9K"],
        status: "open",
        highlights: [],
        website: "https://runnroll.com.tr/bilkentyolkosusu/"
    },
    {
        name: "Eğirdir Ultra Trail",
        type: "trail",
        date: "2026-04-24",
        city: "Isparta",
        distances: ["12K", "25K", "40K", "60K"],
        status: "open",
        highlights: ["ITRA"],
        website: "https://egirdirultratrail.com/"
    },
    {
        name: "Babadağ Ultra Trail",
        type: "trail",
        date: "2026-04-24",
        city: "Muğla",
        distances: ["5K", "14K", "15K", "26K", "30K", "56K"],
        status: "open",
        highlights: [],
        website: "https://babadagultra.com/"
    },
    {
        name: "Troya Maratonu",
        type: "yol",
        date: "2026-04-26",
        city: "Çanakkale",
        distances: ["6K", "10K", "21K", "42K", "Çocuk Koşusu"],
        status: "open",
        highlights: ["Yeni Maraton Mesafesi"],
        website: "https://www.troyayarimaratonu.com/"
    },

    // MAYIS 2026
    {
        name: "Gomeda Ultra Trail",
        type: "trail",
        date: "2026-05-02",
        city: "Nevşehir",
        distances: ["5K", "10K", "19K", "30K", "47K"],
        status: "open",
        highlights: ["Kapadokya"],
        website: "https://www.gomedaultratrail.com/"
    },
    {
        name: "Sagalassos Sky Ultra",
        type: "trail",
        date: "2026-05-02",
        city: "Isparta",
        distances: ["2K", "5K", "17K", "26K", "42K"],
        status: "open",
        highlights: ["ITRA", "UTMB Index", "Yeni Parkur"],
        website: "https://www.sagalassosultra.com/"
    },
    {
        name: "Aydos Ultra Trail Run",
        type: "trail",
        date: "2026-05-03",
        city: "İstanbul",
        distances: ["5K", "10K", "20K", "44K"],
        status: "open",
        highlights: ["ITRA"],
        website: "https://www.aydosultra.com/"
    },
    {
        name: "Konya Yarı Maratonu",
        type: "yol",
        date: "2026-05-03",
        city: "Konya",
        distances: ["5K", "10K", "21K"],
        status: "waitlist",
        highlights: [],
        website: "https://www.konyayarimaraton.com/"
    },
    {
        name: "İzmir Zaman Koşusu",
        type: "yol",
        date: "2026-05-03",
        city: "İzmir",
        distances: ["1 Saat", "2 Saat", "4 Saat", "6 Saat"],
        status: "open",
        highlights: ["Yeni", "Zaman Formatı"],
        website: "https://www.izmirultra.com/"
    },
    {
        name: "Salomon Çeşme Maratonu",
        type: "yol",
        date: "2026-05-10",
        city: "İzmir",
        distances: ["10K", "21K", "42K"],
        status: "waitlist",
        highlights: [],
        website: "https://apphurra.com/etkinlik/salomon-cesme-maratonu"
    },
    {
        name: "Gebze Ultra Trail",
        type: "trail",
        date: "2026-05-15",
        city: "Kocaeli",
        distances: ["Çeşitli kategoriler"],
        status: "open",
        highlights: [],
        website: "https://apphurra.com/etkinlik/gebze-ultra-trail"
    },

    // HAZİRAN 2026
    {
        name: "Gökçeada Ultra Trail Run",
        type: "trail",
        date: "2026-06-06",
        city: "Çanakkale",
        distances: ["Çeşitli kategoriler"],
        status: "waitlist",
        highlights: ["ITRA", "Ada Koşusu"],
        website: "https://apphurra.com/etkinlik/gokceada-ultra-trail-run"
    },
    {
        name: "Sümela Ultra Trail",
        type: "trail",
        date: "2026-06-06",
        city: "Trabzon",
        distances: ["Ultra kategoriler"],
        status: "waitlist",
        highlights: ["Tarihi Rota"],
        website: "https://apphurra.com/etkinlik/sumela-ultra-trail"
    },
    {
        name: "Sapanca Ultra Maratonu",
        type: "yol",
        date: "2026-06-13",
        city: "Sakarya",
        distances: ["10K", "21K", "42K", "Ultra"],
        status: "open",
        highlights: [],
        website: "https://apphurra.com/etkinlik/sapanca-ultra-maratonu"
    },
    {
        name: "Kanyon Ulubey Ultra Trail",
        type: "trail",
        date: "2026-06-26",
        city: "Uşak",
        distances: ["Ultra kategoriler"],
        status: "open",
        highlights: ["Kanyon Manzarası"],
        website: "https://apphurra.com/etkinlik/kanyon-ulubey-ultra-trail"
    },

    // TEMMUZ 2026
    {
        name: "Uludağ Premium Ultra Trail",
        type: "trail",
        date: "2026-07-18",
        city: "Bursa",
        distances: ["Ultra kategoriler"],
        status: "open",
        highlights: ["ITRA", "Prestijli"],
        website: "https://apphurra.com/etkinlik/uludag-premium-ultra-trail"
    },

    // AĞUSTOS 2026
    {
        name: "Runfire Salt Lake Ultra Trail",
        type: "trail",
        date: "2026-08-21",
        city: "Aksaray",
        distances: ["Ultra kategoriler"],
        status: "open",
        highlights: ["ITRA", "Tuz Gölü"],
        website: "https://apphurra.com/etkinlik/runfire-salt-lake-ultra-trail"
    },
    {
        name: "Merrell Belgrad Ultra Trail",
        type: "trail",
        date: "2026-08-22",
        city: "İstanbul",
        distances: ["5K", "15K", "30K", "60K"],
        status: "open",
        highlights: ["Festival Formatı", "Büyük Etkinlik"],
        website: "https://www.instagram.com/belgradultra/"
    },

    // EKİM 2026
    {
        name: "Bodrum Yarı Maratonu",
        type: "yol",
        date: "2026-10-02",
        city: "Muğla",
        distances: ["10K", "21K"],
        status: "waitlist",
        highlights: [],
        website: "https://apphurra.com/etkinlik/bodrum-yari-maratonu"
    },
    {
        name: "Salomon Cappadocia Ultra Trail",
        type: "trail",
        date: "2026-10-16",
        city: "Nevşehir",
        distances: ["20K", "38K", "63K", "119K"],
        status: "open",
        highlights: ["ITRA", "UTMB World Series", "UNESCO", "En Büyük Trail"],
        website: "https://cappadociaultratrail.com/en"
    },

    // KASIM 2026
    {
        name: "Türkiye İş Bankası 48. İstanbul Maratonu",
        type: "yol",
        date: "2026-11-01",
        city: "İstanbul",
        distances: ["15.5K", "42K"],
        status: "open",
        highlights: ["Kıtalararası Maraton", "Önemli Yarış"],
        website: "https://maraton.istanbul/"
    }
];