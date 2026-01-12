// Ayvalık Sera Pansiyon - Mock Data with Real Photos

export const hotelInfo = {
  name: "Ayvalık Sera Pansiyon",
  tagline: "Ayvalık'ın Kalbinde, Eviniz Rahatlığında Konaklama",
  description: "Ayvalık'ın tarihi merkezinde, geleneksel taş ev mimarisinde, samimi ve sıcak bir konaklama deneyimi.",
  whatsapp: "905302300526",
  whatsappDisplay: "0530 230 05 26",
  instagram: "https://www.instagram.com/serapansiyonn",
  email: "info@serapansiyon.com",
  address: "8M9W+PG Ayvalık, Balıkesir, Türkiye",
  mapsPlusCode: "8M9W+PG",
  mapsUrl: "https://www.google.com/maps/place/Sera+Pansiyon+Ayval%C4%B1k/@39.3193782,26.6937236,17z"
};

export const heroImages = {
  main: "/images/new-40.jpeg",
  terrace: "/images/new-40.jpeg"
};

export const logo = "/images/logo.jpeg";

// Section arka plan görselleri
export const sectionBackgrounds = {
  rooms: "/images/new-40.jpeg",
  testimonials: "/images/new-23.jpeg",
  contact: "/images/new-37.jpeg"
};

export const features = [
  {
    id: 1,
    title: "Merkezi Konum",
    description: "Ayvalık çarşısı, kafeler ve iskeleye yürüme mesafesinde",
    icon: "MapPin"
  },
  {
    id: 2,
    title: "Tarihi Taş Yapı",
    description: "Geleneksel Ayvalık taş ev mimarisinde otantik konaklama",
    icon: "Home"
  },
  {
    id: 3,
    title: "Teras Manzarası",
    description: "Ayvalık'ın eşsiz manzarasına karşı huzurlu anlar",
    icon: "Sun"
  },
  {
    id: 4,
    title: "Samimi Ev Ortamı",
    description: "Aile işletmesi sıcaklığı ve kişisel ilgi",
    icon: "Heart"
  }
];

export const rooms = [
  {
    id: 1,
    name: "Taş Duvarlı Oda",
    description: "Otantik taş duvarları ve şöminesiyle karakteristik odalarımız, Ayvalık'ın tarihi dokusunu yansıtır. Huzurlu bir konaklama deneyimi sunar.",
    capacity: "2 Kişi",
    features: ["Taş Duvarlar", "Şömine", "Klima", "Özel Banyo", "Ücretsiz Wi-Fi"],
    image: "/images/new-2.jpeg"
  },
  {
    id: 2,
    name: "Çatı Katı Oda",
    description: "Ahşap tavanlı çatı katı odalarımız, doğal ışık ve huzurlu bir atmosfer sunar. Romantik bir kaçamak için ideal.",
    capacity: "2 Kişi",
    features: ["Ahşap Tavan", "Doğal Işık", "Klima", "Özel Banyo", "Ücretsiz Wi-Fi"],
    image: "/images/new-25.jpeg"
  },
  {
    id: 3,
    name: "Aile Odası",
    description: "Geniş aile odalarımız, rahat yatakları ve ferah alanıyla aileler ve arkadaş grupları için mükemmel bir seçimdir.",
    capacity: "4 Kişi",
    features: ["Geniş Alan", "Çoklu Yatak", "Klima", "Özel Banyo", "Ücretsiz Wi-Fi"],
    image: "/images/new-15.jpeg"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Ayşe K.",
    location: "İstanbul",
    rating: 5,
    text: "Ayvalık'ta kaldığımız en güzel pansiyon! Ev sahipleri çok ilgili ve yardımsever. Temizlik kusursuzdu, konum mükemmel. Kesinlikle tekrar geleceğiz.",
    date: "Ağustos 2024"
  },
  {
    id: 2,
    name: "Mehmet Y.",
    location: "Ankara",
    rating: 5,
    text: "Fiyat-performans açısından harika bir yer. Taş binanın serinliği, terasın manzarası ve samimi ortam bizi çok etkiledi. Herkese tavsiye ederim.",
    date: "Temmuz 2024"
  },
  {
    id: 3,
    name: "Zeynep A.",
    location: "İzmir",
    rating: 5,
    text: "Merkezi konumu sayesinde her yere yürüyerek gittik. Oda tertemizdi, ev sahipleri çok samimi. Ayvalık önerileri için teşekkürler!",
    date: "Haziran 2024"
  },
  {
    id: 4,
    name: "Can D.",
    location: "Bursa",
    rating: 5,
    text: "Tarihi taş binanın atmosferi muhteşem. Sessiz ve huzurlu bir ortam. Kahvaltı önerileri ve yerel rehberlik için çok teşekkürler.",
    date: "Mayıs 2024"
  }
];

// Galeri - Yeni fotoğraflarla güncellenmiş
export const galleryImages = [
  // Dış Mekan / Manzara
  {
    id: 1,
    src: "/images/new-40.jpeg",
    alt: "Ayvalık manzarası - teras görünümü",
    category: "terrace"
  },
  // Taş Duvarlı Odalar
  {
    id: 2,
    src: "/images/new-2.jpeg",
    alt: "Taş duvarlı oda - şömineli",
    category: "rooms"
  },
  {
    id: 3,
    src: "/images/new-11.jpeg",
    alt: "Şömineli rustik oda",
    category: "rooms"
  },
  {
    id: 4,
    src: "/images/new-20.jpeg",
    alt: "Taş duvarlı yatak odası",
    category: "rooms"
  },
  {
    id: 5,
    src: "/images/new-23.jpeg",
    alt: "Karakteristik taş oda",
    category: "rooms"
  },
  {
    id: 6,
    src: "/images/new-37.jpeg",
    alt: "Rustik yatak odası",
    category: "rooms"
  },
  // Çatı Katı Odalar
  {
    id: 7,
    src: "/images/new-5.jpeg",
    alt: "Ahşap tavanlı oda",
    category: "rooms"
  },
  {
    id: 8,
    src: "/images/new-10.jpeg",
    alt: "Çatı katı yatak odası",
    category: "rooms"
  },
  {
    id: 9,
    src: "/images/new-15.jpeg",
    alt: "İkiz yataklı oda",
    category: "rooms"
  },
  {
    id: 10,
    src: "/images/new-25.jpeg",
    alt: "Ahşap detaylı oda",
    category: "rooms"
  },
  {
    id: 11,
    src: "/images/new-30.jpeg",
    alt: "Pencereli yatak odası",
    category: "rooms"
  },
  {
    id: 12,
    src: "/images/new-35.jpeg",
    alt: "Konforlu yatak odası",
    category: "rooms"
  },
  // İç Mekan / Koridor
  {
    id: 13,
    src: "/images/new-1.jpeg",
    alt: "Pansiyon iç mekan",
    category: "exterior"
  },
  {
    id: 14,
    src: "/images/new-45.jpeg",
    alt: "Giriş ve koridor",
    category: "exterior"
  },
  // Banyo
  {
    id: 15,
    src: "/images/new-6.jpeg",
    alt: "Modern banyo",
    category: "rooms"
  },
  {
    id: 16,
    src: "/images/new-16.jpeg",
    alt: "Banyo detayı",
    category: "rooms"
  }
];

export const nearbyPlaces = [
  { name: "Ayvalık Çarşısı", distance: "3 dk yürüyüş" },
  { name: "Sahil & İskele", distance: "5 dk yürüyüş" },
  { name: "Cunda Feribotu", distance: "7 dk yürüyüş" },
  { name: "Tarihi Kiliseler", distance: "4 dk yürüyüş" },
  { name: "Restoranlar & Kafeler", distance: "2 dk yürüyüş" },
  { name: "Otopark", distance: "1 dk yürüyüş" }
];

export const aboutContent = {
  title: "Ayvalık Sera Pansiyon Hakkında",
  subtitle: "Ayvalık'ta Eviniz",
  paragraphs: [
    "Ayvalık Sera Pansiyon, Ayvalık'ın tarihi merkezinde, geleneksel taş ev mimarisini koruyan bir aile işletmesidir. Misafirlerimize ev sıcaklığında, samimi ve huzurlu bir konaklama deneyimi sunuyoruz.",
    "Pansiyonumuz, Ayvalık'ın karakteristik dar sokaklarında, çarşıya, sahile ve tüm turistik noktalara yürüme mesafesindedir. Tarihi taş yapımız, yazın doğal serinlik sağlarken, kışın sıcak bir atmosfer sunar.",
    "Misafir memnuniyeti bizim önceliğimizdir. Ayvalık'ın gizli köşelerini, en iyi restoranları ve görülmesi gereken yerleri sizinle paylaşmaktan mutluluk duyarız."
  ],
  image: "/images/new-23.jpeg"
};
