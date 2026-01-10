// Sera Pansiyon - Mock Data

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
  main: "https://images.pexels.com/photos/35562741/pexels-photo-35562741.jpeg?auto=compress&cs=tinysrgb&w=1920",
  terrace: "https://images.pexels.com/photos/33389243/pexels-photo-33389243.jpeg?auto=compress&cs=tinysrgb&w=1920"
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
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    name: "Teraslı Oda",
    description: "Özel terasıyla Ayvalık manzarasının keyfini çıkarabileceğiniz odalarımız. Sabah kahvenizi eşsiz manzara eşliğinde için.",
    capacity: "2 Kişi",
    features: ["Özel Teras", "Manzara", "Çift Kişilik Yatak", "Klima", "Özel Banyo", "Ücretsiz Wi-Fi"],
    image: "https://images.pexels.com/photos/2565222/pexels-photo-2565222.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    name: "Dubleks Oda",
    description: "İki katlı geniş odalarımız, aileler ve arkadaş grupları için idealdir. Ferah yaşam alanı ve ekstra konfor sunar.",
    capacity: "4 Kişi",
    features: ["İki Katlı", "Geniş Alan", "Çoklu Yatak", "Klima", "Özel Banyo", "Ücretsiz Wi-Fi", "Oturma Alanı"],
    image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800"
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
    src: "https://images.pexels.com/photos/210017/pexels-photo-210017.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Sera Pansiyon dış görünüm",
    category: "exterior"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Konforlu oda",
    category: "rooms"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/33389243/pexels-photo-33389243.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Teras manzarası",
    category: "terrace"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/35565461/pexels-photo-35565461.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Ayvalık sokakları",
    category: "location"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Dubleks oda",
    category: "rooms"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Ayvalık kıyısı",
    category: "location"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Kahvaltı",
    category: "terrace"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/2565222/pexels-photo-2565222.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Teraslı oda",
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
  image: "https://images.pexels.com/photos/35595677/pexels-photo-35595677.jpeg?auto=compress&cs=tinysrgb&w=800"
};
