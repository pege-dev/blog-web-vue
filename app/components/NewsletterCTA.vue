<script setup lang="ts">
interface Props {
  variant?: 'strip' | 'large'
  title?: string
  description?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'strip',
  title: 'Join our newsletter',
  description: 'Get the best stories delivered to your inbox weekly.'
})

const email = ref('')

const handleSubmit = () => {
  // Handle newsletter subscription
  console.log('Subscribe:', email.value)
  email.value = ''
}
</script>

<template>
  <!-- Strip variant -->
  <section 
    v-if="variant === 'strip'"
    class="w-full border-y border-gray-200 dark:border-border-dark bg-gray-50 dark:bg-card-dark py-8"
  >
    <div class="px-4 md:px-10 lg:px-40 flex justify-center">
      <div class="w-full max-w-[960px] flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="text-center md:text-left">
          <h3 class="text-xl font-bold font-display text-slate-900 dark:text-white">{{ title }}</h3>
          <p class="text-sm text-slate-600 dark:text-text-secondary font-display">{{ description }}</p>
        </div>
        <form @submit.prevent="handleSubmit" class="flex w-full max-w-md gap-2">
          <input 
            v-model="email"
            type="email" 
            required
            class="w-full rounded-lg border-none bg-white dark:bg-border-dark px-4 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-primary shadow-sm font-sans" 
            placeholder="Enter your email"
          />
          <button 
            type="submit"
            class="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-surface-dark hover:bg-primary/90 transition-colors font-sans"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- Large variant -->
  <section 
    v-else
    class="border-t border-gray-200 dark:border-border-dark bg-gray-50 dark:bg-background-dark"
  >
    <div class="px-4 md:px-10 lg:px-40 py-20 flex justify-center">
      <div class="w-full max-w-[960px] flex flex-col items-center text-center gap-6">
        <Icon name="solar:letter-opened-bold" class="text-6xl text-primary/50" />
        <h2 class="text-3xl md:text-5xl font-black font-display tracking-tight text-slate-900 dark:text-white max-w-2xl">
          Stories worth your time.
        </h2>
        <p class="text-lg text-slate-600 dark:text-text-secondary max-w-xl font-display">
          Join 10,000+ subscribers and get our curated selection of articles, interviews, and deep dives sent straight to you.
        </p>
        <form @submit.prevent="handleSubmit" class="w-full max-w-md mt-4">
          <div class="flex flex-col sm:flex-row gap-3">
            <input 
              v-model="email"
              type="email"
              required
              class="flex-1 rounded-lg border-none bg-white dark:bg-card-dark px-5 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-primary shadow-sm font-sans" 
              placeholder="email@example.com"
            />
            <button 
              type="submit"
              class="rounded-lg bg-primary px-8 py-3 text-surface-dark font-bold hover:bg-primary/90 transition-colors shadow-md font-sans whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </div>
          <p class="text-xs text-slate-400 dark:text-slate-600 mt-3 font-sans">
            No spam, unsubscribe anytime. Read our 
            <NuxtLink to="/privacy" class="underline hover:text-primary">Privacy Policy</NuxtLink>.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
