<template>
  <div class="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white antialiased font-display">
    <AppHeader />
    <main class="flex-1">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <slot />
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>
