<script setup lang="ts">
interface Props {
  category?: string
  title: string
  description: string
  imageUrl: string
  readTime?: string
  href?: string
}

withDefaults(defineProps<Props>(), {
  category: 'Artikel Pilihan',
  readTime: '8 menit baca',
  href: '#'
})
</script>

<template>
  <section class="px-4 md:px-10 lg:px-40 py-8 flex justify-center">
    <div class="w-full max-w-[960px]">
      <div class="flex flex-col gap-6 py-6 md:py-10 lg:flex-row lg:items-center">
        <!-- Image -->
        <div 
          class="w-full aspect-video rounded-xl bg-gray-800 bg-cover bg-center shadow-lg lg:w-1/2 overflow-hidden group cursor-pointer"
          :style="{ backgroundImage: `url('${imageUrl}')` }"
        >
          <div class="w-full h-full bg-black/10 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
        </div>
        
        <!-- Content -->
        <div class="flex flex-col gap-6 lg:w-1/2 lg:pl-8">
          <div class="flex flex-col gap-3 text-left">
            <span class="text-primary font-sans text-xs font-bold uppercase tracking-wider">{{ category }}</span>
            <h1 class="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white font-display">
              {{ title }}
            </h1>
            <p class="text-lg text-slate-600 dark:text-text-secondary font-display font-light leading-relaxed">
              {{ description }}
            </p>
          </div>
          <div class="flex items-center gap-4 pt-2">
            <NuxtLink 
              :to="href"
              class="flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-surface-dark text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors font-sans"
            >
              Baca Sekarang
            </NuxtLink>
            <span class="text-xs text-slate-500 dark:text-slate-600 font-sans">{{ readTime }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
