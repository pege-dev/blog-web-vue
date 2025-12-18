<script setup lang="ts">
useSeoMeta({
  title: 'ideidetsploshad - Platform Ide & Inspirasi',
  description: 'Temukan artikel berkualitas seputar teknologi, desain, gaya hidup, dan perjalanan. Platform berbagi ide dan inspirasi untuk memperkaya wawasanmu.',
  ogTitle: 'ideidetsploshad - Platform Ide & Inspirasi',
  ogDescription: 'Temukan artikel berkualitas seputar teknologi, desain, gaya hidup, dan perjalanan.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})

const featuredPost = {
  title: 'Cara Meningkatkan Produktivitas Kerja di Era Digital',
  description: 'Temukan strategi efektif untuk meningkatkan produktivitas kerja dengan memanfaatkan teknologi dan manajemen waktu yang tepat.',
  imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
  category: 'Artikel Pilihan',
  readTime: '7 menit baca',
  href: '/blog/cara-meningkatkan-produktivitas-kerja'
}

const { getAllPosts, getAllCategories } = useBlogPosts()
const recentPosts = getAllPosts().slice(0, 6)
const categories = getAllCategories()

const stats = [
  { value: '50+', label: 'Artikel Berkualitas', icon: 'solar:document-text-bold' },
  { value: '10K+', label: 'Pembaca Aktif', icon: 'solar:users-group-rounded-bold' },
  { value: '5', label: 'Kategori Topik', icon: 'solar:widget-5-bold' },
  { value: '100%', label: 'Konten Original', icon: 'solar:verified-check-bold' }
]

const features = [
  {
    icon: 'solar:lightbulb-bolt-bold',
    title: 'Ide Segar Setiap Hari',
    description: 'Dapatkan inspirasi baru dari artikel-artikel yang dikurasi dengan cermat oleh tim penulis kami.'
  },
  {
    icon: 'solar:book-bookmark-bold',
    title: 'Konten Mendalam',
    description: 'Artikel yang ditulis dengan riset mendalam, bukan sekadar permukaan tapi memberikan nilai nyata.'
  },
  {
    icon: 'solar:users-group-rounded-bold',
    title: 'Komunitas Pembaca',
    description: 'Bergabung dengan ribuan pembaca yang berbagi minat yang sama dalam teknologi dan gaya hidup.'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      :title="featuredPost.title"
      :description="featuredPost.description"
      :image-url="featuredPost.imageUrl"
      :category="featuredPost.category"
      :read-time="featuredPost.readTime"
      :href="featuredPost.href"
    />

    <!-- Stats Section -->
    <section class="bg-gray-50 dark:bg-card-dark border-y border-gray-200 dark:border-border-dark py-12">
      <div class="container mx-auto px-4 lg:px-8 max-w-[960px]">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <Icon :name="stat.icon" class="text-3xl text-primary mb-2" />
            <p class="text-3xl font-black text-slate-900 dark:text-white font-display">{{ stat.value }}</p>
            <p class="text-sm text-slate-500 dark:text-slate-400 font-sans">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Posts Header -->
    <section class="px-4 md:px-10 lg:px-40 pt-12 pb-4 flex justify-center">
      <div class="w-full max-w-[960px] flex items-center justify-between border-b border-gray-200 dark:border-border-dark pb-4">
        <h2 class="text-2xl font-bold leading-tight tracking-[-0.015em] font-display">Artikel Terbaru</h2>
        <NuxtLink to="/blog" class="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 font-sans">
          Lihat semua <Icon name="solar:arrow-right-linear" class="text-base" />
        </NuxtLink>
      </div>
    </section>

    <!-- Recent Posts Grid -->
    <section class="px-4 md:px-10 lg:px-40 pb-12 flex justify-center">
      <div class="w-full max-w-[960px]">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
          <BlogCard
            v-for="post in recentPosts"
            :key="post.id"
            :title="post.title"
            :excerpt="post.excerpt"
            :category="post.category"
            :date="post.date"
            :image-url="post.imageUrl"
            :href="`/blog/${post.slug}`"
            variant="simple"
          />
        </div>
        <div class="flex justify-center mt-8 mb-12">
          <NuxtLink 
            to="/blog"
            class="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-card-dark transition-colors font-sans"
          >
            Muat Lebih Banyak
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="bg-gray-50 dark:bg-surface-dark border-y border-gray-200 dark:border-border-dark py-16">
      <div class="container mx-auto px-4 lg:px-8 max-w-[960px]">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-black tracking-tight font-display mb-3">Jelajahi Berdasarkan Topik</h2>
          <p class="text-slate-600 dark:text-text-secondary font-display max-w-xl mx-auto">
            Temukan artikel yang sesuai dengan minatmu dari berbagai kategori yang kami sediakan.
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <NuxtLink
            v-for="category in categories"
            :key="category.slug"
            :to="`/category/${category.slug}`"
            class="group p-5 bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-border-dark hover:border-primary dark:hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 text-center"
          >
            <Icon :name="category.icon" class="text-3xl text-primary mb-3" />
            <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors font-display">
              {{ category.name }}
            </h3>
          </NuxtLink>
        </div>
        <div class="text-center mt-8">
          <NuxtLink to="/category" class="text-sm font-medium text-primary hover:text-primary/80 flex items-center justify-center gap-1 font-sans">
            Lihat Semua Kategori <Icon name="solar:arrow-right-linear" class="text-base" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 px-4 md:px-10 lg:px-40">
      <div class="max-w-[960px] mx-auto">
        <div class="text-center mb-12">
          <span class="text-primary font-bold text-sm uppercase tracking-wider font-sans">Mengapa Memilih Kami</span>
          <h2 class="text-3xl font-black tracking-tight font-display mt-2 mb-3">Platform Ide Terpercaya</h2>
          <p class="text-slate-600 dark:text-text-secondary font-display max-w-xl mx-auto">
            Kami berkomitmen untuk menyajikan konten berkualitas yang menginspirasi dan memberikan nilai nyata bagi pembaca.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" class="text-center p-6">
            <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon :name="feature.icon" class="text-3xl text-primary" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">{{ feature.title }}</h3>
            <p class="text-slate-600 dark:text-text-secondary font-display text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="bg-gradient-to-br from-primary/5 via-transparent to-transparent dark:from-primary/10 py-16 px-4 md:px-10 lg:px-40">
      <div class="max-w-[960px] mx-auto">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2">
            <div class="relative">
              <div class="w-full aspect-square rounded-2xl bg-cover bg-center shadow-xl" style="background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80')"></div>
              <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <div class="text-center text-white">
                  <p class="text-3xl font-black">2024</p>
                  <p class="text-xs font-sans">Sejak</p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2">
            <span class="text-primary font-bold text-sm uppercase tracking-wider font-sans">Tentang Kami</span>
            <h2 class="text-3xl font-black tracking-tight font-display mt-2 mb-4">Berbagi Ide, Menginspirasi Banyak Orang</h2>
            <p class="text-slate-600 dark:text-text-secondary font-display mb-4">
              <span class="text-primary font-bold">ide</span>idetsploshad hadir sebagai platform berbagi ide dan inspirasi untuk siapa saja yang ingin terus belajar dan berkembang. Kami percaya bahwa setiap ide memiliki kekuatan untuk mengubah dunia.
            </p>
            <p class="text-slate-600 dark:text-text-secondary font-display mb-6">
              Dengan tim penulis yang berpengalaman di berbagai bidang, kami menyajikan konten berkualitas tentang teknologi, desain, gaya hidup, dan perjalanan yang relevan dengan kehidupan modern.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/blog" class="px-6 py-3 bg-primary text-white dark:text-surface-dark font-bold rounded-lg hover:bg-primary/90 transition-colors font-sans">
                Mulai Membaca
              </NuxtLink>
              <NuxtLink to="/contact" class="px-6 py-3 border border-gray-300 dark:border-gray-700 text-slate-700 dark:text-white font-bold rounded-lg hover:bg-gray-100 dark:hover:bg-card-dark transition-colors font-sans">
                Hubungi Kami
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Strip -->
    <NewsletterCTA variant="strip" />

    <!-- Popular Topics Section -->
    <section class="py-16 px-4 md:px-10 lg:px-40">
      <div class="max-w-[960px] mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-black tracking-tight font-display mb-3">Topik Populer</h2>
          <p class="text-slate-600 dark:text-text-secondary font-display">
            Artikel-artikel yang paling banyak dibaca oleh pembaca kami.
          </p>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
          <NuxtLink 
            to="/blog/belajar-programming-dari-nol" 
            class="group flex gap-4 p-4 bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-border-dark hover:border-primary dark:hover:border-primary transition-all hover:shadow-lg"
          >
            <div class="w-24 h-24 rounded-lg bg-cover bg-center shrink-0" style="background-image: url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&q=80')"></div>
            <div class="flex flex-col justify-center">
              <span class="text-xs font-bold text-primary uppercase tracking-wide font-sans mb-1">Teknologi</span>
              <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors font-display line-clamp-2">Panduan Belajar Programming dari Nol untuk Pemula</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 font-sans mt-1">9 menit baca</p>
            </div>
          </NuxtLink>
          <NuxtLink 
            to="/blog/panduan-desain-ui-modern" 
            class="group flex gap-4 p-4 bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-border-dark hover:border-primary dark:hover:border-primary transition-all hover:shadow-lg"
          >
            <div class="w-24 h-24 rounded-lg bg-cover bg-center shrink-0" style="background-image: url('https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&q=80')"></div>
            <div class="flex flex-col justify-center">
              <span class="text-xs font-bold text-primary uppercase tracking-wide font-sans mb-1">Desain</span>
              <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors font-display line-clamp-2">Panduan Lengkap Desain UI Modern untuk Pemula</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 font-sans mt-1">8 menit baca</p>
            </div>
          </NuxtLink>
          <NuxtLink 
            to="/blog/gaya-hidup-minimalis-modern" 
            class="group flex gap-4 p-4 bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-border-dark hover:border-primary dark:hover:border-primary transition-all hover:shadow-lg"
          >
            <div class="w-24 h-24 rounded-lg bg-cover bg-center shrink-0" style="background-image: url('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=200&q=80')"></div>
            <div class="flex flex-col justify-center">
              <span class="text-xs font-bold text-primary uppercase tracking-wide font-sans mb-1">Gaya Hidup</span>
              <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors font-display line-clamp-2">Menerapkan Gaya Hidup Minimalis di Era Modern</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 font-sans mt-1">6 menit baca</p>
            </div>
          </NuxtLink>
          <NuxtLink 
            to="/blog/tren-teknologi-2025" 
            class="group flex gap-4 p-4 bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-border-dark hover:border-primary dark:hover:border-primary transition-all hover:shadow-lg"
          >
            <div class="w-24 h-24 rounded-lg bg-cover bg-center shrink-0" style="background-image: url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&q=80')"></div>
            <div class="flex flex-col justify-center">
              <span class="text-xs font-bold text-primary uppercase tracking-wide font-sans mb-1">Teknologi</span>
              <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors font-display line-clamp-2">Tren Teknologi yang Akan Mendominasi Tahun 2025</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 font-sans mt-1">7 menit baca</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Large Newsletter CTA -->
    <NewsletterCTA variant="large" />
  </div>
</template>
