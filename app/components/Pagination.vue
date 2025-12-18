<script setup lang="ts">
interface Props {
  currentPage: number
  totalPages: number
  maxVisible?: number
}

const props = withDefaults(defineProps<Props>(), {
  maxVisible: 5
})

const emit = defineEmits<{
  (e: 'update:currentPage', value: number): void
}>()

const visiblePages = computed(() => {
  const pages: (number | string)[] = []
  const { currentPage, totalPages, maxVisible } = props
  
  if (totalPages <= maxVisible) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    pages.push(1)
    
    if (currentPage > 3) {
      pages.push('...')
    }
    
    const start = Math.max(2, currentPage - 1)
    const end = Math.min(totalPages - 1, currentPage + 1)
    
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    
    if (currentPage < totalPages - 2) {
      pages.push('...')
    }
    
    pages.push(totalPages)
  }
  
  return pages
})

const goToPage = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:currentPage', page)
  }
}
</script>

<template>
  <div class="flex justify-center items-center gap-2">
    <!-- Previous Button -->
    <button
      :disabled="currentPage === 1"
      class="flex items-center justify-center w-10 h-10 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-border-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      @click="goToPage(currentPage - 1)"
      aria-label="Previous page"
    >
      <Icon name="solar:alt-arrow-left-linear" class="text-xl" />
    </button>

    <!-- Page Numbers -->
    <template v-for="(page, index) in visiblePages" :key="index">
      <span 
        v-if="page === '...'" 
        class="flex items-center justify-center w-10 h-10 text-gray-500"
      >
        ...
      </span>
      <button
        v-else
        :class="[
          'w-10 h-10 rounded-lg font-medium text-sm transition-colors',
          currentPage === page
            ? 'bg-primary text-white dark:text-surface-dark shadow-md shadow-primary/20'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-border-dark'
        ]"
        @click="goToPage(page as number)"
      >
        {{ page }}
      </button>
    </template>

    <!-- Next Button -->
    <button
      :disabled="currentPage === totalPages"
      class="flex items-center justify-center w-10 h-10 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-border-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      @click="goToPage(currentPage + 1)"
      aria-label="Next page"
    >
      <Icon name="solar:alt-arrow-right-linear" class="text-xl" />
    </button>
  </div>
</template>
