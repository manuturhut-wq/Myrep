/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Wifi, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Menu, 
  X, 
  Zap, 
  Gamepad2, 
  Tv, 
  ArrowRight,
  Search,
  MessageCircle,
  Clock,
  User,
  Facebook,
  Instagram,
  Twitter,
  Check,
  Star,
  HelpCircle,
  Quote,
  ChevronDown,
  ChevronUp
} from "lucide-react";

// --- Types ---
interface Package {
  id: string;
  name: string;
  speed: string;
  price: string;
  features: string[];
  recommended?: boolean;
  category: 'Home' | 'Gamer' | 'Business';
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

// --- Data ---
const PACKAGES: Package[] = [
  {
    id: "neo-200",
    name: "NEO",
    speed: "200 Mbps",
    price: "Rp 233.100",
    category: "Home",
    features: ["Free Upgrade 6 Bulan", "Unlimited Quota", "100% Fiber Optic", "Symmetric Speed"]
  },
  {
    id: "velo-300",
    name: "VELO",
    speed: "300 Mbps",
    price: "Rp 277.500",
    category: "Home",
    recommended: true,
    features: ["Free Upgrade 6 Bulan", "Unlimited Quota", "Ultra Fast Streaming", "Symmetric Speed"]
  },
  {
    id: "nexus-400",
    name: "NEXUS",
    speed: "400 Mbps",
    price: "Rp 333.000",
    category: "Home",
    features: ["Free Upgrade 6 Bulan", "Free Vidio Platinum Lite", "Unlimited Quota", "Symmetric Speed"]
  },
  {
    id: "prime-500",
    name: "PRIME",
    speed: "500 Mbps",
    price: "Rp 555.000",
    category: "Home",
    features: ["Free Vidio Platinum Lite", "Unlimited Quota", "Priority Support", "Symmetric Speed"]
  },
  {
    id: "wonder-750",
    name: "WONDER",
    speed: "750 Mbps",
    price: "Rp 721.500",
    category: "Gamer",
    features: ["Free Vidio Platinum Lite", "Ultra Low Latency", "Unlimited Quota", "Symmetric Speed"]
  },
  {
    id: "ultra-1000",
    name: "ULTRA",
    speed: "1 Gbps",
    price: "Rp 943.500",
    category: "Business",
    features: ["Free Vidio Platinum Lite", "Dedicated Bandwidth", "SLA 99.9%", "Symmetric Speed"]
  }
];

const BLOG_POSTS: BlogPost[] = [
  {
    id: 6,
    title: "Keunggulan Internet Simetris MyRepublic untuk Work From Home",
    excerpt: "Kenapa internet simetris 1:1 sangat penting untuk produktivitas kerja dari rumah? Pelajari rahasia koneksi stabil MyRepublic.",
    content: `
      Bekerja dari rumah (Work From Home) menuntut koneksi internet yang tidak hanya cepat, tetapi juga stabil dan memiliki kecepatan unggah (upload) yang mumpuni. Kebanyakan provider internet menawarkan kecepatan asimetris, di mana kecepatan download jauh lebih tinggi daripada upload.

      **Kenapa Simetris 1:1 Sangat Penting?**
      1. **Video Conference Lancar**: Saat melakukan Zoom atau Google Meet, Anda mengirimkan data video (upload). Jika upload lambat, video Anda akan patah-patah bagi peserta lain.
      2. **Upload File Besar**: Mengirim laporan atau desain ke server kantor menjadi instan dengan kecepatan upload yang sama dengan download.
      3. **Cloud Computing**: Bekerja langsung di cloud (Google Drive, Dropbox, AWS) membutuhkan sinkronisasi data dua arah yang cepat.

      MyRepublic menghadirkan teknologi **100% Fiber Optic** dengan kecepatan simetris 1:1, memastikan produktivitas Anda tetap maksimal meskipun bekerja dari rumah.
    `,
    date: "23 Feb 2026",
    author: "Tech Specialist",
    image: "https://picsum.photos/seed/wfh/800/600"
  },
  {
    id: 5,
    title: "Tips Memilih Internet Rumah & WiFi Murah Berkualitas",
    excerpt: "Bingung pilih wifi rumah? Simak panduan lengkap memilih internet rumah murah dengan kecepatan terbaik untuk keluarga Anda.",
    content: `
      Memilih **internet rumah** yang tepat adalah investasi penting untuk produktivitas dan hiburan keluarga. Saat ini, banyak pilihan **wifi murah** di pasaran, namun tidak semuanya memberikan kualitas yang stabil.

      Berikut adalah beberapa tips dalam memilih **wifi rumah** terbaik:
      1. Cek Ketersediaan (Coverage): Pastikan area Anda sudah tercover oleh layanan fiber optic.
      2. Bandingkan Harga: Cari paket **internet murah** yang menawarkan kecepatan simetris (upload dan download sama).
      3. Perhatikan Layanan Purna Jual: Pilih provider dengan dukungan teknis yang responsif.
      4. Sesuaikan Kecepatan: Untuk penggunaan keluarga dengan 3-5 perangkat, kecepatan 30-50 Mbps biasanya sudah cukup.

      MyRepublic hadir sebagai solusi **internet rumah** yang tidak hanya menawarkan **wifi murah**, tetapi juga teknologi fiber optic tercanggih untuk menjamin kepuasan Anda.
    `,
    date: "23 Feb 2026",
    author: "SEO Specialist",
    image: "https://picsum.photos/seed/wifi-murah/800/600"
  },
  {
    id: 4,
    title: "Promo Special Februari: Internet Only MyRepublic",
    excerpt: "Nikmati kecepatan internet hingga 1 Gbps dengan harga spesial mulai dari Rp 200rb-an. Cek detail promonya di sini!",
    content: `
      Kabar gembira untuk Anda! MyRepublic menghadirkan PROMO SPECIAL FEBRUARI untuk kategori Internet Only. Dapatkan koneksi internet fiber optic 100% dengan harga yang sangat terjangkau dan berbagai keuntungan tambahan.

      Detail Paket Promo:
      - NEO 200 Mbps: Hanya Rp 233.100/bln (Free Upgrade 6 Bulan dari 100 Mbps)
      - VELO 300 Mbps: Hanya Rp 277.500/bln (Free Upgrade 6 Bulan dari 150 Mbps)
      - NEXUS 400 Mbps: Hanya Rp 333.000/bln (Free Upgrade 6 Bulan dari 300 Mbps) + Free Vidio Platinum Lite
      - PRIME 500 Mbps: Hanya Rp 555.000/bln + Free Vidio Platinum Lite
      - WONDER 750 Mbps: Hanya Rp 721.500/bln + Free Vidio Platinum Lite
      - ULTRA 1 Gbps: Hanya Rp 943.500/bln + Free Vidio Platinum Lite

      Keuntungan Menggunakan MyRepublic:
      1. Internet Simetris 1:1 UPLOAD & DOWNLOAD: Kecepatan unggah dan unduh yang sama besar, sangat stabil untuk segala aktivitas digital.
      2. Tanpa Batasan Kuota (UNLIMITED): Browsing, streaming, dan gaming sepuasnya tanpa khawatir kuota habis.
      3. Tahan Cuaca Ekstrim: Menggunakan 100% Full Fiber Optic yang menjamin kestabilan koneksi meski dalam cuaca buruk.
      4. Harga Terjangkau: Semua harga yang tertera sudah termasuk PPN.
      5. Gratis Instalasi: Nikmati kemudahan pemasangan tanpa biaya tambahan.

      Tunggu apalagi? Segera hubungi Marketing MyRepublic kami dan nikmati internet ultra cepat sekarang juga!
    `,
    date: "23 Feb 2026",
    author: "Marketing Team",
    image: "https://picsum.photos/seed/promo-feb/800/600"
  },
  {
    id: 1,
    title: "5 Cara Mempercepat Koneksi WiFi di Rumah",
    excerpt: "Apakah internet Anda terasa lambat? Simak tips praktis untuk mengoptimalkan posisi router dan pengaturan WiFi Anda.",
    content: `
      Koneksi WiFi yang lambat bisa sangat mengganggu, terutama saat bekerja dari rumah atau streaming film favorit. Berikut adalah 5 cara efektif untuk mempercepat koneksi WiFi Anda:
      
      1. Posisi Router yang Strategis: Letakkan router di area terbuka dan di tengah rumah. Hindari meletakkannya di dalam lemari atau di dekat dinding tebal.
      2. Hindari Interferensi Elektronik: Jauhkan router dari perangkat elektronik lain seperti microwave, telepon nirkabel, atau monitor bayi yang dapat mengganggu sinyal.
      3. Gunakan Frekuensi 5GHz: Jika router Anda mendukung dual-band, gunakan frekuensi 5GHz untuk kecepatan yang lebih tinggi dan interferensi yang lebih rendah dibandingkan 2.4GHz.
      4. Update Firmware Router: Pastikan router Anda selalu menggunakan versi firmware terbaru untuk performa dan keamanan optimal.
      5. Batasi Perangkat yang Terhubung: Terlalu banyak perangkat yang terhubung secara bersamaan dapat membebani bandwidth. Putuskan koneksi perangkat yang tidak digunakan.
      
      Dengan mengikuti langkah-langkah ini, Anda dapat menikmati pengalaman internet yang lebih lancar dan cepat bersama MyRepublic.
    `,
    date: "20 Feb 2024",
    author: "Admin MyRepublic",
    image: "https://picsum.photos/seed/wifi1/800/600"
  },
  {
    id: 2,
    title: "Mengenal Teknologi Fiber Optic MyRepublic",
    excerpt: "Kenapa Fiber Optic lebih unggul dibanding kabel tembaga biasa? Pelajari keunggulan teknologi simetris kami.",
    content: `
      Teknologi Fiber Optic adalah revolusi dalam dunia internet. Berbeda dengan kabel tembaga tradisional, Fiber Optic menggunakan cahaya untuk mengirimkan data, yang memberikan banyak keuntungan:
      
      - Kecepatan Cahaya: Data dikirimkan dengan kecepatan yang jauh lebih tinggi, memungkinkan download dan upload yang instan.
      - Koneksi Simetris: MyRepublic menawarkan kecepatan upload dan download yang sama (simetris), sangat penting untuk video call berkualitas tinggi dan pengiriman file besar.
      - Stabil dan Tahan Gangguan: Sinyal cahaya tidak terpengaruh oleh gangguan elektromagnetik atau cuaca buruk, sehingga koneksi tetap stabil kapan saja.
      - Kapasitas Bandwidth Besar: Fiber Optic mampu menangani beban data yang sangat besar tanpa penurunan performa, cocok untuk keluarga dengan banyak perangkat.
      
      MyRepublic berkomitmen menghadirkan teknologi terbaik ini langsung ke rumah Anda untuk mendukung gaya hidup digital masa kini.
    `,
    date: "15 Feb 2024",
    author: "Tech Team",
    image: "https://picsum.photos/seed/wifi2/800/600"
  }
];

const COVERAGE_AREAS = [
  "Jakarta Selatan", "Jakarta Barat", "Jakarta Timur", "Jakarta Utara", "Jakarta Pusat",
  "Tangerang City", "Tangerang Selatan", "BSD City", "Bintaro", "Bekasi City", "Cikarang",
  "Depok City", "Cibinong", "Bogor City", "Sentul", "Bandung City", "Cimahi", "Semarang City",
  "Surabaya City", "Sidoarjo", "Gresik", "Malang City", "Batu", "Medan City", "Deli Serdang",
  "Palembang City", "Makassar City", "Denpasar", "Badung", "Gianyar", "Yogyakarta", "Solo",
  "Pekanbaru", "Batam", "Lampung", "Banjarmasin", "Pontianak", "Balikpapan", "Samarinda"
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Content Creator",
    content: "Kecepatan simetris MyRepublic bener-bener ngebantu pas upload video 4K ke YouTube. Gak ada lagi drama nunggu seharian!",
    avatar: "https://i.pravatar.cc/150?u=budi"
  },
  {
    id: 2,
    name: "Siska Amelia",
    role: "Ibu Rumah Tangga",
    content: "Anak-anak sekolah online lancar, saya streaming drakor juga gak buffering. Harganya juga paling masuk akal buat kantong.",
    avatar: "https://i.pravatar.cc/150?u=siska"
  },
  {
    id: 3,
    name: "Rian Hidayat",
    role: "Pro Gamer",
    content: "Ping stabil banget di angka 2-5ms buat game Valorant. MyRepublic emang provider paling ngerti kebutuhan gamer.",
    avatar: "https://i.pravatar.cc/150?u=rian"
  }
];

const FAQS = [
  {
    question: "Apa itu Kecepatan Simetris MyRepublic?",
    answer: "Kecepatan simetris berarti kecepatan upload dan download Anda sama besar (1:1). Ini sangat penting untuk aktivitas seperti video call, upload file besar, dan gaming online agar tidak terjadi lag."
  },
  {
    question: "Apakah ada batasan kuota (FUP) di MyRepublic?",
    answer: "Tidak ada. MyRepublic memberikan layanan internet Truly Unlimited tanpa batasan kuota atau penurunan kecepatan (FUP). Anda bisa internetan sepuasnya setiap hari."
  },
  {
    question: "Berapa lama proses instalasi MyRepublic?",
    answer: "Proses instalasi biasanya memakan waktu 1-3 hari kerja setelah pendaftaran dan verifikasi data selesai dilakukan oleh tim marketing kami."
  },
  {
    question: "Apakah harga yang tertera sudah termasuk PPN?",
    answer: "Ya, semua harga paket yang kami tampilkan di website ini sudah termasuk PPN 11%, sehingga tidak ada biaya tersembunyi saat tagihan datang."
  },
  {
    question: "Perangkat apa saja yang didapatkan saat pasang baru?",
    answer: "Anda akan mendapatkan 1 unit Optical Network Terminal (ONT) atau Modem Router WiFi. Untuk paket tertentu, Anda juga bisa mendapatkan STB Android TV secara gratis."
  }
];

// --- Components ---
const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-zinc-100 rounded-3xl overflow-hidden bg-white hover:border-purple-200 transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-zinc-50 transition-all"
      >
        <span className="font-bold text-zinc-900">{question}</span>
        <div className={`text-purple-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-6 text-zinc-500 text-sm leading-relaxed border-t border-zinc-50 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'Home' | 'Gamer' | 'Business'>('Home');
  const [searchLocation, setSearchLocation] = useState("");
  const [coverageResult, setCoverageResult] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCheckCoverage = (e: FormEvent) => {
    e.preventDefault();
    if (!searchLocation) return;
    
    const isAvailable = COVERAGE_AREAS.some(area => 
      area.toLowerCase().includes(searchLocation.toLowerCase())
    );
    
    setCoverageResult(isAvailable 
      ? `Kabar Gembira! Area ${searchLocation} sudah tercover MyRepublic.` 
      : `Maaf, area ${searchLocation} belum tercover. Kami akan segera hadir di sana!`
    );
  };

  const whatsappUrl = "https://api.whatsapp.com/send?phone=6285111021131&text=Halo%20Marketing%20MyRepublic,%20saya%20ingin%20daftar%20pasang%20wifi%20baru.";

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-purple-100 selection:text-purple-900">
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-14 h-14 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-purple-400 rounded-2xl shadow-xl shadow-purple-200"
              ></motion.div>
              <Wifi className="text-white relative z-10" size={32} />
              <div className="absolute -top-1 -right-1 bg-yellow-400 w-5 h-5 rounded-full flex items-center justify-center shadow-md z-20">
                <Zap className="text-purple-900" size={12} fill="currentColor" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-black tracking-tighter text-purple-900 group-hover:text-purple-600 transition-colors">MyRepublic</span>
              <span className="text-[10px] font-black text-purple-500 tracking-[0.4em] uppercase">Official Marketing</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["Beranda", "Paket WiFi", "Promo", "Cek Coverage", "Blog", "Kontak"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-semibold hover:text-purple-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-200"
            >
              Daftar Sekarang
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-purple-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-t border-zinc-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
            >
              {["Beranda", "Paket WiFi", "Promo", "Cek Coverage", "Blog", "Kontak"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-zinc-700 hover:text-purple-600"
                >
                  {item}
                </a>
              ))}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white text-center py-4 rounded-xl font-bold mt-2"
              >
                Daftar Sekarang
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Hero Section --- */}
      <section id="beranda" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-50 -skew-x-12 translate-x-1/4 -z-10 rounded-l-[100px]" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              <Zap size={14} />
              Internet Ultra Cepat #1 di Indonesia
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight text-zinc-900">
              Koneksi Tanpa Batas <br />
              <span className="text-purple-600 italic">Mulai Rp 200rb-an</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-lg leading-relaxed">
              Nikmati internet fiber optic 100% dengan kecepatan simetris upload dan download. Streaming 4K, Gaming tanpa lag, dan Work from Home jadi lebih lancar.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#paket-wifi"
                className="bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-purple-700 transition-all flex items-center gap-2 shadow-xl shadow-purple-200"
              >
                Lihat Paket <ChevronRight size={20} />
              </a>
              <a 
                href="#cek-coverage"
                className="bg-white border-2 border-zinc-200 text-zinc-700 px-8 py-4 rounded-2xl font-bold hover:border-purple-600 hover:text-purple-600 transition-all"
              >
                Cek Lokasi
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                ))}
              </div>
              <p className="text-sm font-medium text-zinc-500">
                <span className="text-zinc-900 font-bold">10,000+</span> Pelanggan Puas
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/myrep/800/800" 
              className="rounded-[40px] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              alt="MyRepublic WiFi"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-zinc-100 flex items-center gap-4 animate-bounce">
              <div className="bg-green-100 p-3 rounded-2xl">
                <Gamepad2 className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-400 uppercase">Latency</p>
                <p className="text-xl font-black text-zinc-900">2ms Ultra Low</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Services Menu Section --- */}
      <section id="layanan" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Layanan Digital Terlengkap</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Kami tidak hanya memberikan internet, tapi ekosistem digital untuk mendukung produktivitas dan hiburan Anda.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Internet Fiber Optic",
                desc: "Koneksi internet 100% fiber optic dengan kecepatan hingga 500 Mbps. Tanpa batas kuota (Unlimited) dan kecepatan simetris.",
                icon: <Wifi size={32} />,
                details: ["Unlimited Quota", "Symmetric Speed", "Low Latency", "100% Fiber"]
              },
              {
                title: "TV Kabel Interaktif",
                desc: "Nikmati ratusan channel lokal dan internasional dengan kualitas HD. Dilengkapi fitur Catch-up TV dan Video on Demand.",
                icon: <Tv size={32} />,
                details: ["80+ HD Channels", "Catch-up TV", "Android STB", "VOD Library"]
              },
              {
                title: "Gaming Solution",
                desc: "Paket khusus gamer dengan routing prioritas ke server game populer. Ping rendah dan stabil untuk pengalaman gaming pro.",
                icon: <Gamepad2 size={32} />,
                details: ["Priority Routing", "Custom Gaming IP", "Low Jitter", "Pro Gamer Support"]
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] border border-zinc-100 hover:border-purple-200 hover:shadow-2xl transition-all group">
                <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-600 mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">{service.desc}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                      <CheckCircle2 className="text-purple-500" size={14} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Pricing Section --- */}
      <section id="paket-wifi" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Promo Special Februari</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Internet Only - Harga Sudah Termasuk PPN & Gratis Instalasi</p>
            
            {/* Tabs */}
            <div className="flex justify-center gap-2 mt-8">
              {(['Home', 'Gamer', 'Business'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === tab ? "bg-purple-600 text-white shadow-lg" : "bg-white text-zinc-500 hover:bg-zinc-100"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES.filter(p => p.category === activeTab).map((pkg) => (
              <motion.div 
                layout
                key={pkg.id}
                className={`relative bg-white p-8 rounded-[32px] border-2 transition-all hover:shadow-2xl hover:-translate-y-2 ${pkg.recommended ? "border-purple-600 shadow-xl" : "border-zinc-100"}`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Recommended
                  </div>
                )}
                {pkg.features.includes("Free Upgrade 6 Bulan") && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white p-1.5 rounded-lg">
                    <Zap size={16} fill="currentColor" />
                  </div>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900">{pkg.name}</h3>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-4xl font-black text-purple-600">{pkg.speed}</span>
                    </div>
                  </div>
                  <div className="py-4 border-y border-zinc-100">
                    <p className="text-xs font-bold text-zinc-400 uppercase mb-1">Mulai Dari</p>
                    <p className="text-2xl font-black text-zinc-900">{pkg.price}<span className="text-sm font-medium text-zinc-400">/bln</span></p>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-600">
                        <CheckCircle2 className="text-purple-600 shrink-0" size={18} />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${pkg.recommended ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"}`}
                  >
                    Pilih Paket <ArrowRight size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add-on & Benefits */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[40px] border border-zinc-100 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="bg-zinc-900 p-6 rounded-3xl shrink-0">
                <Tv className="text-white" size={40} />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Add-On</span>
                  <h4 className="text-xl font-bold">Android Box Entertainment</h4>
                </div>
                <p className="text-zinc-500 text-sm">Nikmati hiburan lengkap dengan Android Box. Free Vidio Platinum, MolaX & MyPlay.</p>
                <div className="flex items-baseline justify-center md:justify-start gap-2">
                  <span className="text-2xl font-black text-purple-600">Rp 94.350</span>
                  <span className="text-zinc-400 text-xs">/bulan</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-900 p-8 rounded-[40px] text-white space-y-6">
              <h4 className="text-xl font-bold">Keuntungan MyRepublic</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Internet Simetris 1:1",
                  "Tanpa Batasan Kuota",
                  "Tahan Cuaca Ekstrem",
                  "Harga Terjangkau",
                  "Internet Stabil",
                  "100% Fiber Optic"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium opacity-90">
                    <div className="bg-white/20 p-1 rounded-full">
                      <Check size={14} />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Promo Section --- */}
      <section id="promo" className="py-24 bg-purple-600 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-8 border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-8 border-white rounded-full animate-pulse delay-700"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                Flash Sale!
              </div>
              <h2 className="text-5xl font-black leading-tight">Promo Spesial Bulan Ini: <br /> <span className="text-yellow-400">Diskon 25% Selama 1 Tahun!</span></h2>
              <p className="text-xl text-purple-100 leading-relaxed">Dapatkan potongan harga langganan bulanan untuk semua paket Home Fiber. Plus, nikmati Gratis Biaya Instalasi senilai Rp 500.000!</p>
              <ul className="space-y-4">
                {[
                  "Diskon 25% untuk 12 bulan pertama",
                  "Gratis Biaya Instalasi (Standard)",
                  "Gratis Sewa Router & STB",
                  "Double Speed untuk 3 bulan pertama"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold">
                    <CheckCircle2 className="text-yellow-400" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-yellow-400 hover:text-purple-900 transition-all shadow-2xl inline-block"
                >
                  Ambil Promo Sekarang
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/promo/800/600" 
                className="rounded-[40px] shadow-2xl border-4 border-white/20"
                alt="Promo MyRepublic"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -right-10 bg-yellow-400 text-purple-900 w-32 h-32 rounded-full flex flex-col items-center justify-center rotate-12 shadow-xl border-4 border-white">
                <span className="text-xs font-black uppercase">Hemat</span>
                <span className="text-3xl font-black">25%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Coverage Section --- */}
      <section id="cek-coverage" className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#581c87_0%,transparent_50%)]"></div>
          <div className="grid grid-cols-12 h-full w-full opacity-20">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/10 aspect-square"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-purple-400">
                <MapPin size={14} />
                Coverage Area
              </div>
              <h2 className="text-5xl font-black leading-tight">Jangkauan Luas di <br /><span className="text-purple-500">Seluruh Indonesia</span></h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                MyRepublic terus memperluas jaringan fiber optic kami ke berbagai kota besar di Indonesia. Cek apakah lokasi Anda sudah tercover sekarang!
              </p>
              
              <form onSubmit={handleCheckCoverage} className="relative group">
                <input 
                  type="text" 
                  placeholder="Masukkan nama area atau kota Anda..."
                  className="w-full bg-white/10 border-2 border-white/10 rounded-3xl px-8 py-6 text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500 transition-all text-lg"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-3 bg-purple-600 text-white p-4 rounded-2xl hover:bg-purple-700 transition-all shadow-xl shadow-purple-900/20"
                >
                  <Search size={24} />
                </button>
              </form>

              {coverageResult && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-6 rounded-3xl border-2 ${coverageResult.includes("Gembira") ? "bg-green-500/10 border-green-500/50 text-green-400" : "bg-red-500/10 border-red-500/50 text-red-400"}`}
                >
                  <p className="font-bold flex items-center gap-3">
                    {coverageResult.includes("Gembira") ? <CheckCircle2 size={24} /> : <X size={24} />}
                    {coverageResult}
                  </p>
                </motion.div>
              )}

              <div className="pt-8">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-500 mb-6">Kota-kota Tercover</p>
                <div className="flex flex-wrap gap-3">
                  {["Jakarta", "Bandung", "Surabaya", "Medan", "Semarang", "Malang", "Makassar", "Denpasar"].map(city => (
                    <span key={city} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-bold hover:bg-purple-600/20 hover:border-purple-500 transition-all cursor-default">
                      {city}
                    </span>
                  ))}
                  <span className="text-purple-500 text-sm font-bold flex items-center gap-1">dan 30+ kota lainnya <ArrowRight size={14} /></span>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full"></div>
              <div className="relative bg-zinc-800/50 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Live Coverage Map</div>
                </div>
                <div className="aspect-square bg-zinc-900 rounded-3xl relative overflow-hidden border border-white/5">
                  <div className="absolute inset-0 opacity-30">
                    <img src="https://picsum.photos/seed/map/800/800" className="w-full h-full object-cover grayscale brightness-50" alt="Map" />
                  </div>
                  {/* Mock Map Pins */}
                  {[
                    { t: '20%', l: '30%' }, { t: '40%', l: '60%' }, { t: '70%', l: '40%' }, { t: '30%', l: '80%' }
                  ].map((pin, i) => (
                    <motion.div 
                      key={i}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      className="absolute w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                      style={{ top: pin.t, left: pin.l }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Blog Section --- */}
      <section id="blog" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tight">Blog & Artikel WiFi</h2>
              <p className="text-zinc-500">Tips, trik, dan berita terbaru seputar dunia internet dan teknologi.</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-purple-600 font-bold hover:underline">
              Lihat Semua <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article 
                key={post.id} 
                onClick={() => setSelectedPost(post)}
                className="bg-white rounded-[32px] overflow-hidden border border-zinc-100 group cursor-pointer hover:shadow-xl transition-all"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={post.title} 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Tips WiFi
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors leading-tight">{post.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{post.excerpt}</p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPost(post);
                    }}
                    className="pt-4 flex items-center gap-2 text-purple-600 font-bold text-sm hover:translate-x-1 transition-transform"
                  >
                    Baca Selengkapnya <ChevronRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- Article Modal --- */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-3xl max-h-[90vh] rounded-[40px] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80 shrink-0">
                <img 
                  src={selectedPost.image} 
                  className="w-full h-full object-cover" 
                  alt={selectedPost.title} 
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/40 transition-all"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-8 md:p-12 overflow-y-auto">
                <div className="flex items-center gap-4 text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">
                  <span className="flex items-center gap-1"><Clock size={14} /> {selectedPost.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {selectedPost.author}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-8 leading-tight">{selectedPost.title}</h2>
                <div className="prose prose-zinc max-w-none">
                  {selectedPost.content.split('\n').map((paragraph, i) => (
                    <p key={i} className="text-zinc-600 leading-relaxed mb-4 whitespace-pre-line">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-zinc-100 flex justify-between items-center">
                  <p className="text-sm font-bold text-zinc-400">Bagikan artikel ini:</p>
                  <div className="flex gap-4">
                    {[Facebook, Instagram, Twitter].map((Icon, i) => (
                      <button key={i} className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 hover:bg-purple-600 hover:text-white transition-all">
                        <Icon size={20} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Testimonials Section --- */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Apa Kata Mereka?</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Ribuan pelanggan telah beralih ke MyRepublic dan menikmati pengalaman internet terbaik.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-10 rounded-[40px] border border-zinc-100 relative group hover:shadow-2xl transition-all">
                <div className="absolute -top-6 left-10 w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-200">
                  <Quote size={24} fill="currentColor" />
                </div>
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-zinc-600 leading-relaxed mb-8 italic">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} className="w-12 h-12 rounded-full border-2 border-purple-100" alt={t.name} />
                  <div>
                    <h4 className="font-bold text-zinc-900">{t.name}</h4>
                    <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              <HelpCircle size={14} />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Pertanyaan Populer</h2>
            <p className="text-zinc-500">Semua yang perlu Anda ketahui tentang layanan MyRepublic.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* --- SEO Content Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-zinc-900 leading-tight">Solusi <span className="text-purple-600">Internet Rumah</span> & <span className="text-purple-600">WiFi Murah</span> Terbaik</h2>
              <p className="text-zinc-600 leading-relaxed">
                Mencari <strong>internet rumah</strong> yang cepat dan stabil? MyRepublic adalah pilihan tepat untuk Anda yang membutuhkan <strong>wifi rumah</strong> berkualitas dengan harga terjangkau. Kami menghadirkan layanan <strong>wifi murah</strong> tanpa mengorbankan kualitas koneksi.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Sebagai penyedia <strong>internet murah</strong> namun berkelas, MyRepublic menggunakan teknologi 100% Fiber Optic yang menjamin kecepatan simetris. Sangat cocok untuk kebutuhan belajar online, bekerja dari rumah, hingga hiburan keluarga.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
                  <p className="text-xs font-black text-purple-600 uppercase tracking-widest mb-1">Keyword</p>
                  <p className="text-sm font-bold text-zinc-900">WiFi Rumah Tercepat</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100">
                  <p className="text-xs font-black text-purple-600 uppercase tracking-widest mb-1">Keyword</p>
                  <p className="text-sm font-bold text-zinc-900">Internet Rumah Murah</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600/5 rounded-[40px] -rotate-3"></div>
              <img 
                src="https://picsum.photos/seed/seo/800/600" 
                className="relative rounded-[40px] shadow-xl"
                alt="Internet Rumah MyRepublic"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SEO Keywords Section --- */}
      <section className="py-12 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
            <span>Internet Rumah</span>
            <span>WiFi Rumah</span>
            <span>WiFi Murah</span>
            <span>Internet Murah</span>
            <span>MyRepublic Indonesia</span>
            <span>Pasang WiFi</span>
            <span>Internet Fiber Optic</span>
            <span>WiFi Tercepat</span>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer id="kontak" className="bg-zinc-900 pt-24 pb-12 text-zinc-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <div className="bg-purple-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-purple-900/20">
                  <Wifi className="text-white" size={24} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-2xl font-black tracking-tighter text-white">MyRepublic</span>
                  <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-purple-400">Official Marketing</span>
                </div>
              </div>
              <p className="max-w-sm leading-relaxed">
                Penyedia layanan internet fiber optic tercepat dan terstabil di Indonesia. Menghadirkan pengalaman digital terbaik untuk rumah dan bisnis Anda.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm">Navigasi</h4>
              <ul className="space-y-4 text-sm">
                {["Beranda", "Paket WiFi", "Promo", "Cek Coverage", "Blog"].map(item => (
                  <li key={item}><a href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm">Hubungi Kami</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="text-purple-500 shrink-0" size={18} />
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <p className="text-white font-bold group-hover:text-purple-400 transition-colors">0851-1102-1131</p>
                    <p className="text-xs">Marketing MyRepublic (WhatsApp)</p>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="text-purple-500 shrink-0" size={18} />
                  <div>
                    <p className="text-white font-bold">myrepublic.ramdani@gmail.com</p>
                    <p className="text-xs">Email Marketing</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-purple-500 shrink-0" size={18} />
                  <p>Jakarta, Indonesia</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
            <p>© 2024 MyRepublic WiFi Marketing. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- Floating WhatsApp Button --- */}
      <motion.a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-8 right-8 z-[150] flex items-center gap-4 bg-[#25D366] text-white px-8 py-5 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] transition-all group"
      >
        <div className="relative">
          <MessageCircle size={32} className="fill-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#25D366] animate-pulse" />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-black uppercase tracking-widest opacity-90 leading-none mb-1">Daftar Sekarang</span>
          <span className="text-lg font-bold leading-tight">WhatsApp Marketing</span>
        </div>
      </motion.a>

    </div>
  );
}
