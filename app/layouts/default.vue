<script setup lang="ts">
// Add Organization and Website schema to all pages
useOrganizationSchema()
useWebsiteSchema()
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased font-display">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
