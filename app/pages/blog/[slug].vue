<script setup lang="ts">
const route = useRoute()
const { getPostBySlug, getRelatedPosts } = useBlogPosts()

const slug = route.params.slug as string
const post = getPostBySlug(slug)
const relatedPosts = getRelatedPosts(slug, 3)

if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Artikel tidak ditemukan'
  })
}

useSeoMeta({
  title: `${post.title} - ideidetsploshad`,
  description: post.excerpt,
  ogTitle: `${post.title} | ideidetsploshad`,
  ogDescription: post.excerpt,
  ogImage: post.imageUrl,
  twitterCard: 'summary_large_image'
})

// Quick Actions State
const copied = ref(false)
const bookmarked = ref(false)
const showShareMenu = ref(false)

// Check if article is bookmarked on mount
onMounted(() => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarkedArticles') || '[]')
  bookmarked.value = bookmarks.includes(slug)
})

// Copy link to clipboard
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

// Toggle bookmark
const toggleBookmark = () => {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarkedArticles') || '[]')
  if (bookmarked.value) {
    const index = bookmarks.indexOf(slug)
    if (index > -1) bookmarks.splice(index, 1)
  } else {
    bookmarks.push(slug)
  }
  localStorage.setItem('bookmarkedArticles', JSON.stringify(bookmarks))
  bookmarked.value = !bookmarked.value
}

// Share functions
const shareNative = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      })
    } catch (err) {
      console.log('Share cancelled')
    }
  } else {
    showShareMenu.value = !showShareMenu.value
  }
}

const shareToTwitter = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(post.title)
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
  showShareMenu.value = false
}

const shareToFacebook = () => {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
  showShareMenu.value = false
}

const shareToLinkedIn = () => {
  const url = encodeURIComponent(window.location.href)
  const title = encodeURIComponent(post.title)
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
  showShareMenu.value = false
}

const shareToWhatsApp = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(`${post.title} - ${window.location.href}`)
  window.open(`https://wa.me/?text=${text}`, '_blank')
  showShareMenu.value = false
}

// Close share menu when clicking outside
const closeShareMenu = () => {
  showShareMenu.value = false
}
</script>

<template>
  <article v-if="post" class="min-h-screen">
    <!-- Hero Section -->
    <header class="relative">
      <!-- Featured Image -->
      <div class="w-full h-[50vh] md:h-[60vh] relative">
        <div 
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url('${post.imageUrl}')` }"
        >
          <div class="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/50 to-transparent"></div>
        </div>
      </div>
      
      <!-- Article Meta -->
      <div class="container mx-auto px-4 lg:px-8 max-w-4xl relative -mt-48 z-10">
        <div class="flex flex-col gap-6">
          <!-- Category & Date -->
          <div class="flex items-center gap-4">
            <NuxtLink :to="`/category/${post.category.toLowerCase()}`" class="bg-primary text-white dark:text-surface-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide hover:bg-primary/80 transition-colors">
              {{ post.category }}
            </NuxtLink>
            <div class="flex items-center gap-2 text-white/80 text-sm">
              <Icon name="solar:calendar-linear" class="text-base" />
              <span>{{ post.date }}</span>
            </div>
            <div class="flex items-center gap-2 text-white/80 text-sm">
              <Icon name="solar:clock-circle-linear" class="text-base" />
              <span>{{ post.readTime }}</span>
            </div>
          </div>
          
          <!-- Title -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight font-display">
            {{ post.title }}
          </h1>
          
          <!-- Excerpt -->
          <p class="text-xl text-white/80 font-display max-w-2xl">
            {{ post.excerpt }}
          </p>
          
          <!-- Author -->
          <div class="flex items-center gap-4 pt-4">
            <img 
              :src="post.author.avatar" 
              :alt="post.author.name"
              class="w-12 h-12 rounded-full object-cover border-2 border-white/20"
            />
            <div>
              <p class="text-white font-bold font-sans">{{ post.author.name }}</p>
              <p class="text-white/60 text-sm font-sans">{{ post.author.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Article Content -->
    <div class="container mx-auto px-4 lg:px-8 max-w-4xl py-12">
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Main Content -->
        <div class="flex-1">
          <!-- Share Buttons (Mobile) -->
          <div class="flex items-center gap-4 mb-8 lg:hidden">
            <span class="text-sm text-gray-500 dark:text-gray-400 font-sans">Bagikan:</span>
            <div class="flex gap-2 relative">
              <button 
                @click="shareNative"
                class="p-2 rounded-full flex items-center justify-center aspect-square bg-gray-100 dark:bg-card-dark hover:bg-primary hover:text-white transition-colors"
                title="Share"
              >
                <Icon name="solar:share-bold" class="text-lg" />
              </button>
              <button 
                @click="copyLink"
                class="p-2 rounded-full flex items-center justify-center aspect-square transition-colors"
                :class="copied ? 'bg-green-500 text-white' : 'bg-gray-100 dark:bg-card-dark hover:bg-primary hover:text-white'"
                :title="copied ? 'Copied!' : 'Copy link'"
              >
                <Icon :name="copied ? 'solar:check-circle-bold' : 'solar:copy-bold'" class="text-lg" />
              </button>
              <button 
                @click="toggleBookmark"
                class="p-2 rounded-full flex items-center justify-center aspect-square transition-colors"
                :class="bookmarked ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-card-dark hover:bg-primary hover:text-white'"
                :title="bookmarked ? 'Remove bookmark' : 'Bookmark'"
              >
                <Icon :name="bookmarked ? 'solar:bookmark-bold' : 'solar:bookmark-linear'" class="text-lg" />
              </button>
            </div>
          </div>

          <!-- Article Body -->
          <div 
            class="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:font-display
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:font-display
              prose-ul:list-disc prose-ul:pl-6
              prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:marker:text-primary
              prose-strong:text-gray-900 dark:prose-strong:text-white"
            v-html="post.content"
          ></div>

          <!-- Tags -->
          <div class="mt-12 pt-8 border-t border-gray-200 dark:border-border-dark">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-sm text-gray-500 dark:text-gray-400 font-sans mr-2">Tags:</span>
              <span 
                v-for="tag in post.tags" 
                :key="tag"
                class="px-3 py-1 text-sm bg-gray-100 dark:bg-card-dark text-gray-700 dark:text-gray-300 rounded-full font-sans"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Author Bio -->
          <div class="mt-8 p-6 bg-gray-50 dark:bg-card-dark rounded-xl border border-gray-200 dark:border-border-dark">
            <div class="flex items-start gap-4">
              <img 
                :src="post.author.avatar" 
                :alt="post.author.name"
                class="w-16 h-16 rounded-full object-cover"
              />
              <div class="flex-1">
                <p class="font-bold text-lg font-display">{{ post.author.name }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400 font-sans mb-2">{{ post.author.role }}</p>
                <p class="text-gray-600 dark:text-gray-300 text-sm font-display">
                  Penulis dan pencerita yang berdedikasi untuk membawakan konten berkualitas tentang teknologi, desain, dan kehidupan modern.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar (Desktop) -->
        <aside class="hidden lg:block w-64 shrink-0">
          <div class="sticky top-24 space-y-8">
            <!-- Share -->
            <div class="p-4 bg-gray-50 dark:bg-card-dark rounded-xl border border-gray-200 dark:border-border-dark">
              <p class="text-sm font-bold text-gray-900 dark:text-white mb-3 font-sans">Bagikan artikel ini</p>
              <div class="flex gap-2 mb-3">
                <div class="relative flex-1 w-full">
                  <button 
                    @click="shareNative"
                    class="w-full p-2 rounded-lg flex items-center justify-center bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark hover:border-primary hover:text-primary transition-colors"
                    title="Share"
                  >
                    <Icon name="solar:share-bold" class="text-lg" />
                  </button>
                </div>
                <button 
                  @click="copyLink"
                  class="flex-1 p-2 rounded-lg flex items-center justify-center border transition-colors"
                  :class="copied 
                    ? 'bg-green-500 text-white border-green-500' 
                    : 'bg-white dark:bg-surface-dark border-gray-200 dark:border-border-dark hover:border-primary hover:text-primary'"
                  :title="copied ? 'Copied!' : 'Copy link'"
                >
                  <Icon :name="copied ? 'solar:check-circle-bold' : 'solar:copy-bold'" class="text-lg" />
                </button>
                <button 
                  @click="toggleBookmark"
                  class="flex-1 p-2 rounded-lg flex items-center justify-center border transition-colors"
                  :class="bookmarked 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-white dark:bg-surface-dark border-gray-200 dark:border-border-dark hover:border-primary hover:text-primary'"
                  :title="bookmarked ? 'Remove bookmark' : 'Bookmark'"
                >
                  <Icon :name="bookmarked ? 'solar:bookmark-bold' : 'solar:bookmark-linear'" class="text-lg" />
                </button>
              </div>
              
              <!-- Share Menu -->
              <div v-if="showShareMenu" class="space-y-2 pt-3 border-t border-gray-200 dark:border-border-dark">
                <button 
                  @click="shareToTwitter"
                  class="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors text-left"
                >
                  <div class="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                    <Icon name="simple-icons:x" class="text-white text-sm" />
                  </div>
                  <span class="text-sm font-sans">Share on X</span>
                </button>
                <button 
                  @click="shareToFacebook"
                  class="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors text-left"
                >
                  <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <Icon name="simple-icons:facebook" class="text-white text-sm" />
                  </div>
                  <span class="text-sm font-sans">Share on Facebook</span>
                </button>
                <button 
                  @click="shareToLinkedIn"
                  class="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors text-left"
                >
                  <div class="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
                    <Icon name="simple-icons:linkedin" class="text-white text-sm" />
                  </div>
                  <span class="text-sm font-sans">Share on LinkedIn</span>
                </button>
                <button 
                  @click="shareToWhatsApp"
                  class="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors text-left"
                >
                  <div class="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <Icon name="simple-icons:whatsapp" class="text-white text-sm" />
                  </div>
                  <span class="text-sm font-sans">Share on WhatsApp</span>
                </button>
              </div>
              
              <!-- Copied/Bookmarked feedback -->
              <div v-if="copied" class="mt-2 text-center text-sm text-green-600 dark:text-green-400 font-sans">
                Link berhasil disalin!
              </div>
              <div v-if="bookmarked && !copied" class="mt-2 text-center text-sm text-primary font-sans">
                Artikel disimpan!
              </div>
            </div>

            <!-- Newsletter -->
            <div class="p-4 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20">
              <Icon name="solar:letter-bold" class="text-2xl text-primary mb-2" />
              <p class="font-bold text-gray-900 dark:text-white mb-1 font-display">Tetap update</p>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-3 font-sans">Dapatkan artikel seperti ini di inbox kamu.</p>
              <NuxtLink to="/" class="block w-full text-center py-2 bg-primary text-white dark:text-surface-dark rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors font-sans">
                Langganan
              </NuxtLink>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <!-- Related Articles -->
    <section v-if="relatedPosts.length > 0" class="border-t border-gray-200 dark:border-border-dark bg-gray-50 dark:bg-surface-dark py-16">
      <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h2 class="text-2xl font-bold mb-8 font-display">Artikel Terkait</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogCard
            v-for="relatedPost in relatedPosts"
            :key="relatedPost.id"
            :title="relatedPost.title"
            :excerpt="relatedPost.excerpt"
            :category="relatedPost.category"
            :date="relatedPost.date"
            :image-url="relatedPost.imageUrl"
            :href="`/blog/${relatedPost.slug}`"
            variant="simple"
          />
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <NewsletterCTA variant="large" />
  </article>
</template>
