<script setup lang="ts">
interface Section {
  id: string
  title: string
  icon?: string
}

interface Props {
  sections: Section[]
  activeSection?: string
  contactEmail?: string
}

withDefaults(defineProps<Props>(), {
  activeSection: '',
  contactEmail: 'privacy@dailyblog.com'
})
</script>

<template>
  <aside class="hidden lg:block w-64 shrink-0">
    <div class="sticky top-28">
      <h3 class="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 px-2 font-sans">On this page</h3>
      <nav class="space-y-1">
        <a
          v-for="section in sections"
          :key="section.id"
          :href="`#${section.id}`"
          :class="[
            'block px-2 py-1.5 text-sm font-medium border-l-2 rounded-r transition-all',
            activeSection === section.id
              ? 'text-primary border-primary bg-primary/5'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border-transparent hover:border-slate-300 dark:hover:border-slate-700'
          ]"
        >
          {{ section.title }}
        </a>
      </nav>
      
      <!-- Contact Card -->
      <div class="mt-8 p-4 rounded-xl bg-slate-50 dark:bg-card-dark border border-slate-200 dark:border-border-dark">
        <p class="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">Have specific questions?</p>
        <a 
          :href="`mailto:${contactEmail}`"
          class="text-sm font-bold text-primary hover:underline flex items-center gap-1"
        >
          Email Us
          <Icon name="solar:arrow-right-linear" class="text-base" />
        </a>
      </div>
    </div>
  </aside>
</template>
