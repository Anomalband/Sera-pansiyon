// Sera Pansiyon - Mock Data with Real Photos

export const hotelInfo = {
  name: "Sera Pansiyon",
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
  main: "/images/sera-5.webp", // Teras manzarası - Ayvalık ve deniz görünümü
  terrace: "/images/sera-5.webp"
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
    name: "Standart Oda",
    description: "Şık ve konforlu standart odalarımız, dinlendirici bir konaklama için tüm ihtiyaçlarınızı karşılar. Geleneksel taş duvarlar ve modern konfor bir arada.",
    capacity: "2 Kişi",
    features: ["Çift Kişilik Yatak", "Klima", "Özel Banyo", "Ücretsiz Wi-Fi", "Tavan Vantilatörü"],
    image: "/images/sera-10.webp" // Taş duvarlı oda - şömineli
  },
  {
    id: 2,
    name: "Teraslı Oda",
    description: "Özel terasıyla Ayvalık manzarasının keyfini çıkarabileceğiniz odalarımız. Sabah kahvenizi eşsiz manzara eşliğinde için.",
    capacity: "2 Kişi",
    features: ["Özel Teras", "Manzara", "Çift Kişilik Yatak", "Klima", "Özel Banyo", "Ücretsiz Wi-Fi"],
    image: "/images/sera-11.webp" // Taş duvarlı oda - geniş
  },
  {
    id: 3,
    name: "Dubleks Oda",
    description: "İki katlı geniş odalarımız, aileler ve arkadaş grupları için idealdir. Ferah yaşam alanı ve ekstra konfor sunar.",
    capacity: "4 Kişi",
    features: ["İki Katlı", "Geniş Alan", "Çoklu Yatak", "Klima", "Özel Banyo", "Ücretsiz Wi-Fi", "Oturma Alanı"],
    image: "/images/sera-12.webp" // Başka bir oda
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

export const galleryImages = [
  {
    id: 1,
    src: "/images/sera-8.webp", // Dış cephe - begonvil
    alt: "Sera Pansiyon dış görünüm",
    category: "exterior"
  },
  {
    id: 2,
    src: "/images/sera-9.webp", // Dış cephe - begonvil 2
    alt: "Sera Pansiyon giriş",
    category: "exterior"
  },
  {
    id: 3,
    src: "/images/sera-6.webp", // Dış cephe - zeytin ağacı
    alt: "Taş ev mimarisi",
    category: "exterior"
  },
  {
    id: 4,
    src: "/images/sera-5.webp", // Teras manzarası
    alt: "Teras manzarası",
    category: "terrace"
  },
  {
    id: 5,
    src: "/images/sera-10.webp", // Oda 1
    alt: "Taş duvarlı oda",
    category: "rooms"
  },
  {
    id: 6,
    src: "/images/sera-11.webp", // Oda 2
    alt: "Konforlu yatak odası",
    category: "rooms"
  },
  {
    id: 7,
    src: "/images/sera-12.webp", // Oda 3
    alt: "Geniş oda",
    category: "rooms"
  },
  {
    id: 8,
    src: "/images/sera-1.jpg", // Giriş
    alt: "Pansiyon girişi",
    category: "exterior"
  },
  {
    id: 9,
    src: "/images/sera-13.webp",
    alt: "Sera Pansiyon",
    category: "exterior"
  },
  {
    id: 10,
    src: "/images/sera-14.webp",
    alt: "Sera Pansiyon detay",
    category: "exterior"
  },
  {
    id: 11,
    src: "/images/sera-15.webp",
    alt: "Pansiyon görünüm",
    category: "exterior"
  },
  {
    id: 12,
    src: "/images/sera-16.webp",
    alt: "Sera Pansiyon",
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
  title: "Sera Pansiyon Hakkında",
  subtitle: "Ayvalık'ta Eviniz",
  paragraphs: [
    "Sera Pansiyon, Ayvalık'ın tarihi merkezinde, geleneksel taş ev mimarisini koruyan bir aile işletmesidir. Misafirlerimize ev sıcaklığında, samimi ve huzurlu bir konaklama deneyimi sunuyoruz.",
    "Pansiyonumuz, Ayvalık'ın karakteristik dar sokaklarında, çarşıya, sahile ve tüm turistik noktalara yürüme mesafesindedir. Tarihi taş yapımız, yazın doğal serinlik sağlarken, kışın sıcak bir atmosfer sunar.",
    "Misafir memnuniyeti bizim önceliğimizdir. Ayvalık'ın gizli köşelerini, en iyi restoranları ve görülmesi gereken yerleri sizinle paylaşmaktan mutluluk duyarız."
  ],
  image: "/images/sera-8.webp" // Begonvilli dış cephe
};
