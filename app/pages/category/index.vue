<script setup lang="ts">
const { getAllCategories, getCategoryPostCount } = useBlogPosts()
const categories = getAllCategories()

useSeoMeta({
  title: 'Kategori - ideidetsploshad | Jelajahi Topik Favoritmu',
  description: 'Telusuri semua kategori artikel. Temukan konten tentang teknologi, desain, gaya hidup, perjalanan, dan lainnya.',
  ogTitle: 'Kategori - ideidetsploshad | Jelajahi Topik Favoritmu',
  ogDescription: 'Telusuri semua kategori artikel di ideidetsploshad.',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-16 lg:py-24">
      <div class="container mx-auto px-4 lg:px-8 max-w-6xl text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 font-display">
          Jelajahi Berdasarkan Kategori
        </h1>
        <p class="text-xl text-gray-600 dark:text-text-secondary max-w-2xl mx-auto font-display">
          Telusuri koleksi artikel kami yang dikurasi berdasarkan topik. Temukan apa yang kamu cari.
        </p>
      </div>
    </section>

    <!-- Categories Grid -->
    <section class="pb-16 lg:pb-24">
      <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="category in categories"
            :key="category.slug"
            :to="`/category/${category.slug}`"
            class="group relative overflow-hidden rounded-2xl bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark hover:border-primary dark:hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div class="p-8">
              
              <!-- Content -->
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors font-display">
                {{ category.name }}
              </h2>
              <p class="text-gray-600 dark:text-text-secondary mb-4 font-display">
                {{ category.description }}
              </p>
              
              <!-- Post Count & Arrow -->
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500 dark:text-gray-400 font-sans">
                  {{ getCategoryPostCount(category.slug) }} artikel
                </span>
                <Icon 
                  name="solar:arrow-right-linear" 
                  class="text-xl text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" 
                />
              </div>
            </div>
            
            <!-- Decorative gradient -->
            <div :class="[category.color, 'absolute top-0 right-0 w-32 h-32 opacity-5 rounded-full -translate-y-1/2 translate-x-1/2']"></div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <NewsletterCTA variant="large" />
  </div>
</template>
