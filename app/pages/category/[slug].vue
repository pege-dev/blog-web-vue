<script setup lang="ts">
const route = useRoute()
const { getCategoryBySlug, getPostsByCategory, getAllCategories } = useBlogPosts()

const slug = route.params.slug as string
const category = getCategoryBySlug(slug)
const posts = getPostsByCategory(slug)
const allCategories = getAllCategories()

if (!category) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Kategori tidak ditemukan'
  })
}

useSeoMeta({
  title: `${category.name} - ideidetsploshad | Artikel & Inspirasi`,
  description: category.description,
  ogTitle: `Artikel ${category.name} - ideidetsploshad`,
  ogDescription: category.description,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div v-if="category" class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary/10 via-transparent to-transparent dark:from-primary/5 py-16 lg:py-24">
      <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div class="flex flex-col items-center text-center gap-6">
          <!-- Category Icon -->
          <!-- <div :class="[category.color, 'w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg']">
            <Icon :name="category.icon" class="text-4xl" />
          </div> -->
          
          <!-- Title -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight font-display">
            {{ category.name }}
          </h1>
          
          <!-- Description -->
          <p class="text-xl text-gray-600 dark:text-text-secondary max-w-2xl font-display">
            {{ category.description }}
          </p>
          
          <!-- Post Count -->
          <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-sans">
            <Icon name="solar:document-text-linear" class="text-lg" />
            <span>{{ posts.length }} artikel</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-12 lg:py-16">
      <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div v-if="posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            :excerpt="post.excerpt"
            :category="post.category"
            :date="post.date"
            :read-time="post.readTime"
            :image-url="post.imageUrl"
            :href="`/blog/${post.slug}`"
            variant="detailed"
          />
        </div>
        
        <!-- Empty State -->
        <div v-else class="text-center py-16">
          <Icon name="solar:document-text-linear" class="text-6xl text-gray-300 dark:text-gray-600 mb-4" />
          <h3 class="text-xl font-bold text-gray-700 dark:text-gray-300 mb-2 font-display">Belum ada artikel</h3>
          <p class="text-gray-500 dark:text-gray-400 font-sans">Kembali lagi nanti untuk konten baru di kategori ini.</p>
        </div>
      </div>
    </section>

    <!-- Other Categories -->
    <section class="border-t border-gray-200 dark:border-border-dark bg-gray-50 dark:bg-surface-dark py-12 lg:py-16">
      <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h2 class="text-2xl font-bold mb-8 font-display">Jelajahi Kategori Lainnya</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <NuxtLink
            v-for="cat in allCategories.filter(c => c.slug !== slug)"
            :key="cat.slug"
            :to="`/category/${cat.slug}`"
            class="group p-4 bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-border-dark hover:border-primary dark:hover:border-primary transition-all hover:shadow-lg"
          >
          
            <h3 class="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors font-display">
              {{ cat.name }}
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 font-sans">
              {{ cat.description }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <NewsletterCTA variant="large" />
  </div>
</template>
