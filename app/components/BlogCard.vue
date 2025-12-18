<script setup lang="ts">
interface Props {
  title: string
  excerpt: string
  category: string
  date: string
  readTime?: string
  imageUrl: string
  href?: string
  variant?: 'simple' | 'detailed'
}

withDefaults(defineProps<Props>(), {
  readTime: '5 menit baca',
  href: '#',
  variant: 'simple'
})
</script>

<template>
  <!-- Simple variant (Home page) -->
  <article v-if="variant === 'simple'" class="group flex flex-col gap-4 cursor-pointer">
    <NuxtLink :to="href" class="w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-800">
      <div 
        class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        :style="{ backgroundImage: `url('${imageUrl}')` }"
        :aria-label="title"
      ></div>
    </NuxtLink>
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-2">
        <NuxtLink :to="`/category/${category.toLowerCase()}`" class="text-xs font-bold text-primary uppercase tracking-wide font-sans hover:underline">{{ category }}</NuxtLink>
        <span class="text-xs text-slate-500 dark:text-slate-600">•</span>
        <span class="text-xs text-slate-500 dark:text-slate-600 font-sans">{{ date }}</span>
      </div>
      <NuxtLink :to="href">
        <h3 class="text-xl font-bold leading-snug group-hover:text-primary transition-colors font-display">{{ title }}</h3>
      </NuxtLink>
      <p class="text-sm text-slate-600 dark:text-text-secondary line-clamp-2 font-display">{{ excerpt }}</p>
    </div>
  </article>

  <!-- Detailed variant (Blog page) -->
  <article 
    v-else 
    class="group relative flex flex-col bg-white dark:bg-card-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-black/40 border border-gray-100 dark:border-white/5 transition-all duration-300 hover:-translate-y-1"
  >
    <NuxtLink :to="href" class="relative aspect-[16/10] overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        :style="{ backgroundImage: `url('${imageUrl}')` }"
        :aria-label="title"
      ></div>
      <NuxtLink :to="`/category/${category.toLowerCase()}`" class="absolute top-4 left-4 bg-primary/90 text-white dark:text-surface-dark text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm hover:bg-primary transition-colors">
        {{ category }}
      </NuxtLink>
    </NuxtLink>
    <div class="flex flex-col flex-1 p-6">
      <div class="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
        <Icon name="solar:calendar-linear" class="text-base" />
        <span>{{ date }}</span>
        <span class="w-1 h-1 rounded-full bg-gray-400"></span>
        <span>{{ readTime }}</span>
      </div>
      <NuxtLink :to="href">
        <h3 class="text-2xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors font-display">{{ title }}</h3>
      </NuxtLink>
      <p class="text-gray-600 dark:text-text-secondary text-base leading-relaxed mb-6 flex-1 line-clamp-3 font-display">
        {{ excerpt }}
      </p>
      <div class="mt-auto pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
        <NuxtLink :to="href" class="inline-flex items-center gap-1 text-primary font-bold text-sm hover:gap-2 transition-all font-sans">
          Baca Selengkapnya <Icon name="solar:arrow-right-linear" class="text-lg" />
        </NuxtLink>
        <button class="text-gray-400 hover:text-primary transition-colors" aria-label="Bookmark">
          <Icon name="solar:bookmark-linear" class="text-xl" />
        </button>
      </div>
    </div>
  </article>
</template>
