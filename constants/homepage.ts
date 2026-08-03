import {
  Baby,
  CalendarClock,
  Clock3,
  HeartHandshake,
  Hospital,
  MapPin,
  MessageCircle,
  Microscope,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Timer,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

export const HOME_SERVICES = [
  {
    title: "Sunat Bayi",
    description: "Pendampingan sunat untuk bayi dengan pendekatan lembut dan terarah.",
    icon: Baby,
  },
  {
    title: "Sunat Anak",
    description: "Layanan ramah anak dengan alur tindakan yang dibuat nyaman.",
    icon: HeartHandshake,
  },
  {
    title: "Sunat Dewasa",
    description: "Konsultasi dan tindakan privat untuk pasien dewasa.",
    icon: UserRoundCheck,
  },
  {
    title: "Sunat Hipnotis",
    description: "Pendekatan relaksasi untuk membantu pasien merasa lebih tenang.",
    icon: Sparkles,
  },
  {
    title: "Pengobatan Penyakit Ringan",
    description: "Pemeriksaan awal dan terapi untuk keluhan kesehatan ringan.",
    icon: Stethoscope,
  },
  {
    title: "Konsultasi Kesehatan",
    description: "Sesi konsultasi untuk memahami kebutuhan dan pilihan layanan.",
    icon: MessageCircle,
  },
] as const;

export const HOME_FEATURES = [
  {
    title: "Dokter Berpengalaman",
    description: "Ditangani oleh tenaga medis yang terbiasa mendampingi pasien keluarga.",
    icon: UserRoundCheck,
  },
  {
    title: "Metode Modern",
    description: "Mengutamakan teknik yang efisien, rapi, dan sesuai kebutuhan pasien.",
    icon: Microscope,
  },
  {
    title: "Ruang Nyaman",
    description: "Area layanan disiapkan agar pasien dan keluarga merasa lebih tenang.",
    icon: Hospital,
  },
  {
    title: "Pelayanan Ramah",
    description: "Komunikasi jelas sejak konsultasi sampai instruksi perawatan.",
    icon: HeartHandshake,
  },
  {
    title: "Proses Cepat",
    description: "Alur kunjungan dibuat praktis tanpa mengabaikan ketelitian medis.",
    icon: Timer,
  },
  {
    title: "Peralatan Steril",
    description: "Kebersihan alat dan ruang menjadi prioritas pada setiap tindakan.",
    icon: ShieldCheck,
  },
] as const;

export const HOME_DOCTORS = [
  {
    name: "Nama Dokter 1",
    role: "Dokter Penanggung Jawab",
    meta: "Profil dokter akan diperbarui.",
  },
  {
    name: "Nama Dokter 2",
    role: "Dokter Pelaksana",
    meta: "Informasi jadwal akan tersedia.",
  },
  {
    name: "Nama Dokter 3",
    role: "Konsultan Medis",
    meta: "Detail keahlian akan dilengkapi.",
  },
] as const;

export const HOME_GALLERY = [
  "Ruang konsultasi",
  "Ruang tindakan",
  "Area tunggu",
  "Peralatan klinik",
  "Meja administrasi",
  "Ruang pemulihan",
] as const;

export const HOME_TESTIMONIALS = [
  {
    author: "Nama Pasien 1",
    role: "Orang tua pasien",
    quote: "Ulasan pasien akan ditampilkan setelah konten resmi tersedia.",
    rating: 5,
  },
  {
    author: "Nama Pasien 2",
    role: "Pasien dewasa",
    quote: "Cerita pengalaman pasien akan menjadi bukti sosial pada fase berikutnya.",
    rating: 5,
  },
  {
    author: "Nama Pasien 3",
    role: "Keluarga pasien",
    quote: "Testimoni asli dapat dimasukkan ketika sudah siap dipublikasikan.",
    rating: 5,
  },
] as const;

export const HOME_ARTICLES = [
  {
    category: "Edukasi",
    title: "Panduan Persiapan Sebelum Sunat",
    date: "Tanggal publikasi",
    excerpt: "Ringkasan artikel edukasi akan disesuaikan dengan konten resmi klinik.",
  },
  {
    category: "Perawatan",
    title: "Hal yang Perlu Diperhatikan Setelah Tindakan",
    date: "Tanggal publikasi",
    excerpt: "Cuplikan artikel perawatan akan ditambahkan pada tahap konten.",
  },
  {
    category: "Kesehatan",
    title: "Kapan Perlu Konsultasi dengan Tenaga Medis",
    date: "Tanggal publikasi",
    excerpt: "Artikel kesehatan ringan dapat membantu pengunjung memahami layanan.",
  },
] as const;

export const HOME_STATS = [
  { value: "Modern", label: "Pendekatan layanan" },
  { value: "Ramah", label: "Untuk keluarga" },
  { value: "Steril", label: "Prioritas klinik" },
] as const;

export const HOME_LOCATION = [
  {
    label: "Alamat Klinik",
    value: "Alamat lengkap klinik akan diperbarui.",
    icon: MapPin,
  },
  {
    label: "Jam Operasional",
    value: "Jadwal praktik akan diinformasikan.",
    icon: Clock3,
  },
  {
    label: "Reservasi",
    value: "Booking kunjungan melalui WhatsApp.",
    icon: CalendarClock,
  },
] as const;

export const ratingIcons = Array.from({ length: 5 }, (_, index) => ({
  id: `star-${index + 1}`,
  icon: Star,
}));

export const heroTrustItems = [
  { label: "Konsultasi jelas", icon: MessageCircle },
  { label: "Tindakan steril", icon: ShieldCheck },
  { label: "Pendampingan keluarga", icon: UsersRound },
] as const;
