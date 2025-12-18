export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  imageUrl: string
  author: {
    name: string
    avatar: string
    role: string
  }
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'cara-meningkatkan-produktivitas-kerja',
    title: 'Cara Meningkatkan Produktivitas Kerja di Era Digital',
    excerpt: 'Temukan strategi efektif untuk meningkatkan produktivitas kerja dengan memanfaatkan teknologi dan manajemen waktu yang tepat.',
    content: `
      <p>Di era digital yang serba cepat ini, produktivitas menjadi kunci kesuksesan dalam karir dan bisnis. Namun, banyak orang justru merasa kewalahan dengan berbagai distraksi digital yang ada. Artikel ini akan membahas cara-cara praktis untuk meningkatkan produktivitas kerja.</p>
      
      <h2>Mengapa Produktivitas Penting?</h2>
      <p>Produktivitas bukan hanya tentang bekerja lebih keras, tetapi bekerja lebih cerdas. Dengan produktivitas yang tinggi, Anda dapat menyelesaikan lebih banyak pekerjaan dalam waktu yang sama, memberikan ruang untuk pengembangan diri dan keseimbangan hidup.</p>
      
      <h2>Strategi Meningkatkan Produktivitas</h2>
      <p>Berikut adalah beberapa strategi yang terbukti efektif:</p>
      <ul>
        <li><strong>Teknik Pomodoro:</strong> Bekerja fokus selama 25 menit, istirahat 5 menit. Ulangi siklus ini untuk menjaga konsentrasi.</li>
        <li><strong>Prioritas dengan Metode Eisenhower:</strong> Kategorikan tugas berdasarkan urgensi dan kepentingan untuk fokus pada hal yang benar-benar penting.</li>
        <li><strong>Batasi Notifikasi:</strong> Matikan notifikasi yang tidak penting selama jam kerja produktif.</li>
        <li><strong>Single-tasking:</strong> Fokus pada satu tugas hingga selesai sebelum beralih ke tugas lain.</li>
      </ul>
      
      <blockquote>Produktivitas bukanlah tentang melakukan lebih banyak hal, tetapi tentang melakukan hal yang tepat dengan cara yang efisien.</blockquote>
      
      <h2>Tools Digital untuk Produktivitas</h2>
      <p>Manfaatkan teknologi untuk mendukung produktivitas:</p>
      <ul>
        <li>Aplikasi manajemen tugas seperti Notion atau Trello</li>
        <li>Timer dan tracker waktu untuk monitoring aktivitas</li>
        <li>Aplikasi pemblokir distraksi untuk fokus lebih baik</li>
        <li>Cloud storage untuk akses dokumen dari mana saja</li>
      </ul>
      
      <h2>Kesimpulan</h2>
      <p>Meningkatkan produktivitas adalah proses berkelanjutan yang membutuhkan konsistensi dan evaluasi rutin. Mulailah dengan satu atau dua strategi, lalu kembangkan seiring waktu. Ingat, tujuan utamanya adalah mencapai hasil maksimal dengan tetap menjaga kesehatan dan keseimbangan hidup.</p>
    `,
    category: 'Produktivitas',
    date: '18 Des 2024',
    readTime: '7 menit baca',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80',
    author: {
      name: 'Ahmad Rizki',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
      role: 'Editor Utama'
    },
    tags: ['Produktivitas', 'Manajemen Waktu', 'Tips Kerja', 'Digital']
  },
  {
    id: '2',
    slug: 'panduan-desain-ui-modern',
    title: 'Panduan Lengkap Desain UI Modern untuk Pemula',
    excerpt: 'Pelajari prinsip-prinsip dasar desain UI modern yang akan membantu Anda menciptakan antarmuka yang menarik dan user-friendly.',
    content: `
      <p>Desain User Interface (UI) yang baik adalah fondasi dari pengalaman pengguna yang menyenangkan. Dalam panduan ini, kita akan membahas prinsip-prinsip dasar desain UI modern yang dapat diterapkan oleh pemula.</p>
      
      <h2>Prinsip Dasar Desain UI</h2>
      <p>Sebelum memulai mendesain, pahami prinsip-prinsip fundamental berikut:</p>
      <ul>
        <li><strong>Konsistensi:</strong> Gunakan elemen visual yang konsisten di seluruh aplikasi atau website.</li>
        <li><strong>Hierarki Visual:</strong> Atur elemen berdasarkan tingkat kepentingannya menggunakan ukuran, warna, dan posisi.</li>
        <li><strong>Whitespace:</strong> Berikan ruang kosong yang cukup untuk membuat desain terasa bersih dan mudah dibaca.</li>
        <li><strong>Aksesibilitas:</strong> Pastikan desain dapat diakses oleh semua pengguna, termasuk yang memiliki keterbatasan.</li>
      </ul>
      
      <h2>Tren Desain UI 2024</h2>
      <p>Beberapa tren yang sedang populer tahun ini:</p>
      <ul>
        <li>Glassmorphism dengan efek blur dan transparansi</li>
        <li>Dark mode sebagai opsi standar</li>
        <li>Micro-interactions untuk feedback yang lebih baik</li>
        <li>Typography yang bold dan ekspresif</li>
      </ul>
      
      <blockquote>Desain yang baik adalah desain yang tidak terlihat. Pengguna harus fokus pada konten, bukan pada desainnya.</blockquote>
      
      <h2>Tools untuk Desain UI</h2>
      <p>Beberapa tools populer yang bisa Anda gunakan:</p>
      <ul>
        <li><strong>Figma:</strong> Tool kolaboratif berbasis web yang sangat populer</li>
        <li><strong>Adobe XD:</strong> Solusi lengkap dari Adobe untuk desain UI/UX</li>
        <li><strong>Sketch:</strong> Pilihan favorit untuk pengguna Mac</li>
      </ul>
      
      <h2>Tips untuk Pemula</h2>
      <p>Mulailah dengan mempelajari desain yang sudah ada. Analisis mengapa desain tersebut berhasil, lalu praktikkan dengan membuat proyek sederhana. Konsistensi dalam berlatih adalah kunci untuk menjadi desainer UI yang handal.</p>
    `,
    category: 'Desain',
    date: '17 Des 2024',
    readTime: '8 menit baca',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    author: {
      name: 'Sari Dewi',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      role: 'Desainer UI/UX'
    },
    tags: ['Desain', 'UI/UX', 'Tutorial', 'Pemula']
  },
  {
    id: '3',
    slug: 'wisata-alam-indonesia-tersembunyi',
    title: 'Destinasi Wisata Alam Indonesia yang Masih Tersembunyi',
    excerpt: 'Jelajahi keindahan alam Indonesia yang belum banyak diketahui wisatawan. Dari pantai eksotis hingga pegunungan yang memukau.',
    content: `
      <p>Indonesia memiliki kekayaan alam yang luar biasa. Selain destinasi populer seperti Bali dan Raja Ampat, masih banyak tempat indah yang belum terjamah wisatawan. Mari kita jelajahi beberapa di antaranya.</p>
      
      <h2>Pulau Labengki, Sulawesi Tenggara</h2>
      <p>Sering disebut sebagai "Raja Ampat-nya Sulawesi", Pulau Labengki menawarkan pemandangan karst yang spektakuler, laguna biru jernih, dan kehidupan bawah laut yang kaya. Aksesnya yang cukup sulit membuat tempat ini masih sangat alami.</p>
      
      <h2>Danau Kelimutu, Flores</h2>
      <p>Danau tiga warna yang terletak di puncak Gunung Kelimutu ini menawarkan pemandangan yang magis. Warna air danau yang bisa berubah-ubah menjadikannya fenomena alam yang unik di dunia.</p>
      
      <blockquote>Keindahan alam Indonesia tidak ada habisnya. Setiap sudut negeri ini menyimpan pesona yang menunggu untuk ditemukan.</blockquote>
      
      <h2>Tips Berwisata ke Tempat Tersembunyi</h2>
      <ul>
        <li><strong>Riset mendalam:</strong> Cari informasi tentang akses, akomodasi, dan kondisi terkini</li>
        <li><strong>Persiapan fisik:</strong> Beberapa destinasi membutuhkan trekking atau perjalanan panjang</li>
        <li><strong>Hormati alam:</strong> Jangan meninggalkan sampah dan ikuti prinsip sustainable tourism</li>
        <li><strong>Dukung ekonomi lokal:</strong> Gunakan jasa pemandu dan penginapan lokal</li>
      </ul>
      
      <h2>Waktu Terbaik Berkunjung</h2>
      <p>Untuk sebagian besar destinasi alam di Indonesia, musim kemarau (April-Oktober) adalah waktu terbaik untuk berkunjung. Namun, selalu cek kondisi cuaca dan aksesibilitas sebelum berangkat.</p>
      
      <h2>Kesimpulan</h2>
      <p>Indonesia masih menyimpan banyak keajaiban alam yang menunggu untuk dijelajahi. Dengan persiapan yang matang dan sikap bertanggung jawab, Anda bisa menikmati keindahan alam sambil turut melestarikannya untuk generasi mendatang.</p>
    `,
    category: 'Travel',
    date: '16 Des 2024',
    readTime: '6 menit baca',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    author: {
      name: 'Budi Santoso',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      role: 'Travel Writer'
    },
    tags: ['Travel', 'Indonesia', 'Wisata Alam', 'Petualangan']
  },
  {
    id: '4',
    slug: 'belajar-programming-dari-nol',
    title: 'Panduan Belajar Programming dari Nol untuk Pemula',
    excerpt: 'Mulai perjalanan Anda menjadi programmer dengan panduan lengkap ini. Dari memilih bahasa pemrograman hingga membangun proyek pertama.',
    content: `
      <p>Belajar programming mungkin terasa menakutkan bagi pemula, tetapi dengan pendekatan yang tepat, siapa pun bisa menguasainya. Artikel ini akan memandu Anda memulai perjalanan menjadi programmer.</p>
      
      <h2>Mengapa Belajar Programming?</h2>
      <p>Programming adalah skill yang sangat berharga di era digital. Beberapa alasan untuk belajar programming:</p>
      <ul>
        <li>Peluang karir yang luas dan gaji kompetitif</li>
        <li>Kemampuan untuk menciptakan solusi digital</li>
        <li>Melatih kemampuan problem-solving</li>
        <li>Fleksibilitas bekerja dari mana saja</li>
      </ul>
      
      <h2>Memilih Bahasa Pemrograman Pertama</h2>
      <p>Untuk pemula, berikut rekomendasi bahasa pemrograman:</p>
      <ul>
        <li><strong>Python:</strong> Sintaks sederhana, cocok untuk pemula, banyak digunakan di data science dan AI</li>
        <li><strong>JavaScript:</strong> Bahasa web yang versatile, bisa untuk frontend dan backend</li>
        <li><strong>HTML/CSS:</strong> Fondasi untuk web development, mudah dipelajari</li>
      </ul>
      
      <blockquote>Bahasa pemrograman terbaik untuk dipelajari adalah bahasa yang akan Anda gunakan. Pilih berdasarkan tujuan Anda.</blockquote>
      
      <h2>Langkah-langkah Belajar</h2>
      <ul>
        <li><strong>Pahami konsep dasar:</strong> Variabel, tipe data, kondisional, loop</li>
        <li><strong>Praktik setiap hari:</strong> Konsistensi lebih penting dari durasi</li>
        <li><strong>Bangun proyek:</strong> Terapkan ilmu dengan membuat proyek nyata</li>
        <li><strong>Bergabung komunitas:</strong> Belajar dari programmer lain</li>
      </ul>
      
      <h2>Resources Belajar Gratis</h2>
      <p>Banyak sumber belajar berkualitas yang tersedia gratis:</p>
      <ul>
        <li>freeCodeCamp - Kurikulum lengkap web development</li>
        <li>Codecademy - Pembelajaran interaktif</li>
        <li>YouTube - Tutorial dari berbagai creator</li>
        <li>MDN Web Docs - Dokumentasi web development</li>
      </ul>
      
      <h2>Kesimpulan</h2>
      <p>Belajar programming adalah investasi jangka panjang yang sangat berharga. Mulailah dengan langkah kecil, tetap konsisten, dan jangan takut membuat kesalahan. Setiap programmer handal pernah menjadi pemula.</p>
    `,
    category: 'Teknologi',
    date: '15 Des 2024',
    readTime: '9 menit baca',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80',
    author: {
      name: 'Dimas Prasetyo',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
      role: 'Software Developer'
    },
    tags: ['Programming', 'Tutorial', 'Pemula', 'Teknologi']
  },
  {
    id: '5',
    slug: 'gaya-hidup-minimalis-modern',
    title: 'Menerapkan Gaya Hidup Minimalis di Era Modern',
    excerpt: 'Pelajari bagaimana gaya hidup minimalis dapat meningkatkan kualitas hidup dan mengurangi stres di tengah kesibukan modern.',
    content: `
      <p>Di tengah budaya konsumerisme yang semakin kuat, gaya hidup minimalis menawarkan alternatif yang menyegarkan. Minimalis bukan tentang memiliki sedikit, tetapi tentang memiliki yang bermakna.</p>
      
      <h2>Apa Itu Gaya Hidup Minimalis?</h2>
      <p>Minimalis adalah filosofi hidup yang fokus pada hal-hal esensial dan menghilangkan yang tidak perlu. Ini mencakup barang fisik, komitmen waktu, hingga hubungan sosial.</p>
      
      <h2>Manfaat Gaya Hidup Minimalis</h2>
      <ul>
        <li><strong>Mengurangi stres:</strong> Lebih sedikit barang berarti lebih sedikit yang perlu diurus</li>
        <li><strong>Hemat finansial:</strong> Membeli hanya yang benar-benar dibutuhkan</li>
        <li><strong>Lebih fokus:</strong> Energi terarah pada hal yang penting</li>
        <li><strong>Ramah lingkungan:</strong> Mengurangi konsumsi dan limbah</li>
      </ul>
      
      <blockquote>Minimalis bukan tentang kekurangan, tetapi tentang kebebasan dari kelebihan yang tidak bermakna.</blockquote>
      
      <h2>Cara Memulai</h2>
      <p>Berikut langkah-langkah praktis untuk memulai:</p>
      <ul>
        <li><strong>Declutter bertahap:</strong> Mulai dari satu area, seperti lemari pakaian</li>
        <li><strong>Aturan satu masuk satu keluar:</strong> Setiap barang baru yang masuk, satu barang lama keluar</li>
        <li><strong>Tunda pembelian:</strong> Tunggu 30 hari sebelum membeli barang non-esensial</li>
        <li><strong>Digital declutter:</strong> Bersihkan juga file, email, dan aplikasi yang tidak terpakai</li>
      </ul>
      
      <h2>Minimalis di Berbagai Aspek</h2>
      <p>Terapkan minimalis tidak hanya pada barang:</p>
      <ul>
        <li>Jadwal: Kurangi komitmen yang tidak penting</li>
        <li>Digital: Batasi waktu di media sosial</li>
        <li>Hubungan: Fokus pada hubungan yang bermakna</li>
        <li>Pikiran: Praktikkan mindfulness</li>
      </ul>
      
      <h2>Kesimpulan</h2>
      <p>Gaya hidup minimalis adalah perjalanan personal yang berbeda untuk setiap orang. Tidak ada aturan baku tentang berapa banyak barang yang boleh dimiliki. Yang penting adalah setiap hal dalam hidup Anda membawa nilai dan kebahagiaan.</p>
    `,
    category: 'Gaya Hidup',
    date: '14 Des 2024',
    readTime: '6 menit baca',
    imageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1200&q=80',
    author: {
      name: 'Maya Putri',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      role: 'Lifestyle Writer'
    },
    tags: ['Minimalis', 'Gaya Hidup', 'Self Improvement', 'Tips']
  },
  {
    id: '6',
    slug: 'tren-teknologi-2025',
    title: 'Tren Teknologi yang Akan Mendominasi Tahun 2025',
    excerpt: 'Intip perkembangan teknologi terbaru yang diprediksi akan mengubah cara kita hidup dan bekerja di tahun mendatang.',
    content: `
      <p>Teknologi terus berkembang dengan kecepatan yang luar biasa. Tahun 2025 diprediksi akan membawa berbagai inovasi yang akan mengubah berbagai aspek kehidupan kita. Mari kita lihat tren-tren utamanya.</p>
      
      <h2>Artificial Intelligence (AI) Generatif</h2>
      <p>AI generatif seperti ChatGPT dan DALL-E akan semakin canggih dan terintegrasi dalam berbagai aplikasi. Dari pembuatan konten hingga coding, AI akan menjadi asisten yang semakin handal.</p>
      
      <h2>Internet of Things (IoT) yang Lebih Cerdas</h2>
      <p>Perangkat IoT akan semakin pintar dan saling terhubung. Smart home akan menjadi lebih terjangkau dan mudah digunakan, dengan integrasi yang lebih seamless antar perangkat.</p>
      
      <blockquote>Teknologi terbaik adalah teknologi yang tidak terasa seperti teknologi. Ia menyatu dengan kehidupan sehari-hari.</blockquote>
      
      <h2>Tren Utama 2025</h2>
      <ul>
        <li><strong>Edge Computing:</strong> Pemrosesan data lebih dekat ke sumber untuk respons lebih cepat</li>
        <li><strong>5G dan Beyond:</strong> Konektivitas super cepat yang membuka peluang baru</li>
        <li><strong>Sustainable Tech:</strong> Teknologi ramah lingkungan menjadi prioritas</li>
        <li><strong>Extended Reality (XR):</strong> VR dan AR yang lebih immersive</li>
      </ul>
      
      <h2>Dampak pada Dunia Kerja</h2>
      <p>Teknologi akan terus mengubah cara kita bekerja:</p>
      <ul>
        <li>Remote work yang semakin canggih dengan tools kolaborasi baru</li>
        <li>Automasi yang meningkatkan efisiensi</li>
        <li>Skill baru yang dibutuhkan di pasar kerja</li>
        <li>Peluang karir di bidang teknologi yang terus bertumbuh</li>
      </ul>
      
      <h2>Bagaimana Mempersiapkan Diri?</h2>
      <p>Untuk tetap relevan di era teknologi yang cepat berubah:</p>
      <ul>
        <li>Terus belajar dan upgrade skill</li>
        <li>Ikuti perkembangan teknologi terbaru</li>
        <li>Eksperimen dengan tools dan platform baru</li>
        <li>Bangun network dengan profesional di bidang teknologi</li>
      </ul>
      
      <h2>Kesimpulan</h2>
      <p>Tahun 2025 akan menjadi tahun yang menarik bagi perkembangan teknologi. Dengan memahami tren ini, kita bisa lebih siap menghadapi perubahan dan memanfaatkan peluang yang ada.</p>
    `,
    category: 'Teknologi',
    date: '13 Des 2024',
    readTime: '7 menit baca',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80',
    author: {
      name: 'Reza Firmansyah',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
      role: 'Tech Analyst'
    },
    tags: ['Teknologi', 'AI', 'Tren', 'Inovasi']
  }
]

export interface Category {
  slug: string
  name: string
  description: string
  color: string
  icon: string
}

const categories: Category[] = [
  {
    slug: 'teknologi',
    name: 'Teknologi',
    description: 'Berita dan insight terbaru seputar teknologi, programming, AI, dan inovasi digital.',
    color: 'bg-blue-500',
    icon: 'solar:cpu-bolt-linear'
  },
  {
    slug: 'desain',
    name: 'Desain',
    description: 'Tips dan tutorial desain UI/UX, grafis, dan inspirasi visual untuk kreator.',
    color: 'bg-purple-500',
    icon: 'solar:pallete-2-linear'
  },
  {
    slug: 'gaya-hidup',
    name: 'Gaya Hidup',
    description: 'Artikel tentang produktivitas, kesehatan, minimalis, dan pengembangan diri.',
    color: 'bg-pink-500',
    icon: 'solar:heart-pulse-linear'
  },
  {
    slug: 'travel',
    name: 'Travel',
    description: 'Panduan destinasi, tips perjalanan, dan cerita petualangan dari berbagai penjuru.',
    color: 'bg-green-500',
    icon: 'solar:airplane-linear'
  },
  {
    slug: 'produktivitas',
    name: 'Produktivitas',
    description: 'Strategi dan tools untuk meningkatkan efisiensi kerja dan manajemen waktu.',
    color: 'bg-orange-500',
    icon: 'solar:chart-2-linear'
  }
]

export const useBlogPosts = () => {
  const getPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find(post => post.slug === slug)
  }

  const getAllPosts = (): BlogPost[] => {
    return blogPosts
  }

  const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
    const currentPost = getPostBySlug(currentSlug)
    if (!currentPost) return blogPosts.slice(0, limit)
    
    return blogPosts
      .filter(post => post.slug !== currentSlug)
      .filter(post => post.category === currentPost.category || post.tags.some(tag => currentPost.tags.includes(tag)))
      .slice(0, limit)
  }

  const getAllCategories = (): Category[] => {
    return categories
  }

  const getCategoryBySlug = (slug: string): Category | undefined => {
    return categories.find(cat => cat.slug === slug.toLowerCase())
  }

  const getPostsByCategory = (categorySlug: string): BlogPost[] => {
    return blogPosts.filter(post => post.category.toLowerCase().replace(' ', '-') === categorySlug.toLowerCase())
  }

  const getCategoryPostCount = (categorySlug: string): number => {
    return getPostsByCategory(categorySlug).length
  }

  return {
    getPostBySlug,
    getAllPosts,
    getRelatedPosts,
    getAllCategories,
    getCategoryBySlug,
    getPostsByCategory,
    getCategoryPostCount
  }
}
