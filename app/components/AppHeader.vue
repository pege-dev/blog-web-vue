<script setup lang="ts">
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Beranda', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Kategori', href: '/category' },
  { name: 'Kontak', href: '/contact' }
]
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-border-dark bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md">
    <div class="container mx-auto px-4 lg:px-8 max-w-[1280px]">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <img src="/favicon.svg" alt="ideidetsploshad" class="size-8" />
          <h1 class="text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">
            <span class="text-primary">ide</span>idetsploshad
          </h1>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="text-sm font-medium hover:text-primary transition-colors text-slate-600 dark:text-text-secondary"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-4">
          <button class="hidden sm:flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-slate-600 dark:text-white">
            <Icon name="solar:magnifer-linear" class="text-xl" />
          </button>
          <button class="bg-primary hover:bg-primary/90 text-white dark:text-surface-dark font-bold py-2 px-5 rounded-lg text-sm transition-colors shadow-lg shadow-primary/20 font-sans">
            Langganan
          </button>
          <!-- Mobile Menu Button -->
          <button 
            class="md:hidden p-2 text-slate-600 dark:text-text-secondary"
            @click="isMenuOpen = !isMenuOpen"
          >
            <Icon :name="isMenuOpen ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'" class="text-2xl" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <nav v-if="isMenuOpen" class="md:hidden py-4 border-t border-gray-200 dark:border-border-dark">
        <div class="flex flex-col gap-2">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="px-4 py-2 text-sm font-medium hover:text-primary hover:bg-gray-100 dark:hover:bg-card-dark rounded-lg transition-colors text-slate-600 dark:text-text-secondary"
            @click="isMenuOpen = false"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>
