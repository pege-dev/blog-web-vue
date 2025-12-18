<script setup lang="ts">
useSeoMeta({
  title: 'Blog - The Daily Blog',
  description: 'Discover insights, trends, and perspectives from our team of writers on technology, design, and modern life.',
  ogTitle: 'Blog - The Daily Blog',
  ogDescription: 'Discover insights, trends, and perspectives on technology, design, and modern life.',
  twitterCard: 'summary_large_image'
})

const categories = ['All Categories', 'Technology', 'Design', 'Lifestyle', 'Culture']
const activeCategory = ref('All Categories')
const currentPage = ref(1)
const totalPages = 8

const { getAllPosts } = useBlogPosts()
const blogPosts = getAllPosts()

const filteredPosts = computed(() => {
  if (activeCategory.value === 'All Categories') {
    return blogPosts
  }
  return blogPosts.filter(post => post.category === activeCategory.value)
})

const handleSearch = (query: string) => {
  console.log('Search:', query)
}
</script>

<template>
  <div class="container mx-auto px-4 lg:px-8 max-w-[1280px] py-8 lg:py-12">
    <!-- Hero & Search Section -->
    <section class="mb-12 max-w-4xl mx-auto text-center space-y-6">
      <h1 class="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] font-display">Explore our latest stories</h1>
      <p class="text-lg text-gray-600 dark:text-text-secondary max-w-2xl mx-auto font-display">
        Discover insights, trends, and perspectives from our team of writers on technology, design, and modern life.
      </p>
      
      <!-- Filters -->
      <BlogFilters
        :categories="categories"
        :active-category="activeCategory"
        class="mt-8"
        @update:active-category="activeCategory = $event"
        @search="handleSearch"
      />
    </section>

    <!-- Blog Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
      <BlogCard
        v-for="post in filteredPosts"
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

    <!-- Pagination -->
    <Pagination
      v-model:current-page="currentPage"
      :total-pages="totalPages"
    />
  </div>
</template>
