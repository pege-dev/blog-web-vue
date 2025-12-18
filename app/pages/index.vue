<script setup lang="ts">
useSeoMeta({
  title: 'The Daily Blog - Home',
  description: 'A digital publication dedicated to clarity, depth, and the art of storytelling in a noisy world.',
  ogTitle: 'The Daily Blog',
  ogDescription: 'A digital publication dedicated to clarity, depth, and the art of storytelling.',
  ogImage: '/images/og-home.jpg',
  twitterCard: 'summary_large_image'
})

const featuredPost = {
  title: 'The Future of Digital Minimalism',
  description: 'An exploration of how we can reclaim our attention in the age of constant distraction and notification overload.',
  imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
  category: 'Featured Story',
  readTime: '8 min read',
  href: '/blog/digital-minimalism'
}

const { getAllPosts } = useBlogPosts()
const recentPosts = getAllPosts().slice(0, 6)
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

    <!-- Newsletter Strip -->
    <NewsletterCTA variant="strip" />

    <!-- Recent Posts Header -->
    <section class="px-4 md:px-10 lg:px-40 pt-12 pb-4 flex justify-center">
      <div class="w-full max-w-[960px] flex items-center justify-between border-b border-gray-200 dark:border-border-dark pb-4">
        <h2 class="text-2xl font-bold leading-tight tracking-[-0.015em] font-display">Recent Posts</h2>
        <NuxtLink to="/blog" class="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 font-sans">
          View all <Icon name="solar:arrow-right-linear" class="text-base" />
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
            Load More Articles
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Large Newsletter CTA -->
    <NewsletterCTA variant="large" />
  </div>
</template>
