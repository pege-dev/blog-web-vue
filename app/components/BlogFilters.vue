<script setup lang="ts">
interface Props {
  categories: string[]
  activeCategory: string
  showCategoryLinks?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showCategoryLinks: false
})

const emit = defineEmits<{
  (e: 'update:activeCategory', value: string): void
  (e: 'search', value: string): void
}>()

const searchQuery = ref('')

const handleSearch = () => {
  emit('search', searchQuery.value)
}

const setCategory = (category: string) => {
  emit('update:activeCategory', category)
}

const getCategorySlug = (category: string): string => {
  if (category === 'Semua Kategori') return ''
  return category.toLowerCase()
}
</script>

<template>
  <div class="space-y-6">
    <!-- Search Input -->
    <div class="relative max-w-2xl mx-auto">
      <div class="relative group">
        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 dark:text-text-secondary">
          <Icon name="solar:magnifer-linear" class="text-xl" />
        </div>
        <input 
          v-model="searchQuery"
          type="text"
          class="block w-full pl-11 pr-4 py-4 rounded-xl bg-white dark:bg-border-dark border-transparent focus:border-primary focus:ring-2 focus:ring-primary/50 text-base shadow-sm transition-all placeholder:text-gray-400 dark:placeholder:text-text-secondary dark:text-white font-sans"
          placeholder="Cari artikel, topik, atau penulis..."
          @keyup.enter="handleSearch"
        />
        <div class="absolute inset-y-0 right-2 flex items-center">
          <NuxtLink 
            to="/category"
            class="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-lg transition-colors"
            aria-label="Browse categories"
          >
            <Icon name="solar:tuning-2-linear" class="text-xl" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Category Filters -->
    <div class="flex flex-wrap justify-center gap-3">
      <!-- Filter buttons (for filtering on current page) -->
      <template v-if="!showCategoryLinks">
        <button
          v-for="category in categories"
          :key="category"
          :class="[
            'flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all font-sans',
            activeCategory === category
              ? 'bg-primary text-white dark:text-surface-dark shadow-md shadow-primary/25'
              : 'bg-white dark:bg-border-dark hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700'
          ]"
          @click="setCategory(category)"
        >
          {{ category }}
        </button>
      </template>
      
      <!-- Category links (navigate to category page) -->
      <template v-else>
        <NuxtLink
          v-for="category in categories"
          :key="category"
          :to="category === 'Semua Kategori' ? '/blog' : `/category/${getCategorySlug(category)}`"
          :class="[
            'flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all font-sans',
            activeCategory === category
              ? 'bg-primary text-white dark:text-surface-dark shadow-md shadow-primary/25'
              : 'bg-white dark:bg-border-dark hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700'
          ]"
        >
          {{ category }}
        </NuxtLink>
      </template>
    </div>
  </div>
</template>
