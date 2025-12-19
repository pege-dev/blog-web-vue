<script setup lang="ts">
interface Props {
  variant?: 'strip' | 'large'
  title?: string
  description?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'strip',
  title: 'Bergabung dengan newsletter kami',
  description: 'Dapatkan cerita terbaik langsung ke inbox kamu setiap minggu.'
})

const { subscribe, isSubmitting, isSuccess, errorMessage } = useSubscribe()
const email = ref('')
const localSuccess = ref(false)

const handleSubmit = async () => {
  const success = await subscribe(email.value)
  if (success) {
    localSuccess.value = true
    email.value = ''
    // Reset success message after 5 seconds
    setTimeout(() => {
      localSuccess.value = false
    }, 5000)
  }
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
        <form v-if="!localSuccess" @submit.prevent="handleSubmit" class="flex w-full max-w-md gap-2">
          <input 
            v-model="email"
            type="email" 
            required
            :disabled="isSubmitting"
            class="w-full rounded-lg border-none bg-white dark:bg-border-dark px-4 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-primary shadow-sm font-sans disabled:opacity-50" 
            placeholder="Masukkan email kamu"
          />
          <button 
            type="submit"
            :disabled="isSubmitting"
            class="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-surface-dark hover:bg-primary/90 transition-colors font-sans disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
          >
            <Icon v-if="isSubmitting" name="solar:refresh-bold" class="text-base animate-spin" />
            {{ isSubmitting ? 'Proses...' : 'Langganan' }}
          </button>
        </form>
        <div v-else class="flex items-center gap-2 text-green-600 dark:text-green-400 font-sans">
          <Icon name="solar:check-circle-bold" class="text-xl" />
          <span class="text-sm font-medium">Berhasil! Terima kasih sudah berlangganan.</span>
        </div>
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
          Cerita yang layak dibaca.
        </h2>
        <p class="text-lg text-slate-600 dark:text-text-secondary max-w-xl font-display">
          Bergabung dengan 10.000+ pembaca dan dapatkan pilihan artikel, wawancara, dan ulasan mendalam langsung ke inbox kamu.
        </p>
        <div v-if="!localSuccess" class="w-full max-w-md mt-4">
          <form @submit.prevent="handleSubmit">
            <div class="flex flex-col sm:flex-row gap-3">
              <input 
                v-model="email"
                type="email"
                required
                :disabled="isSubmitting"
                class="flex-1 rounded-lg border-none bg-white dark:bg-card-dark px-5 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-primary shadow-sm font-sans disabled:opacity-50" 
                placeholder="email@example.com"
              />
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="rounded-lg bg-primary px-8 py-3 text-surface-dark font-bold hover:bg-primary/90 transition-colors shadow-md font-sans whitespace-nowrap disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Icon v-if="isSubmitting" name="solar:refresh-bold" class="text-xl animate-spin" />
                {{ isSubmitting ? 'Memproses...' : 'Langganan Gratis' }}
              </button>
            </div>
            <p v-if="errorMessage" class="text-sm text-red-500 mt-2 font-sans">{{ errorMessage }}</p>
          </form>
          <p class="text-xs text-slate-400 dark:text-slate-600 mt-3 font-sans">
            Tanpa spam, berhenti kapan saja. Baca 
            <NuxtLink to="/privacy" class="underline hover:text-primary">Kebijakan Privasi</NuxtLink> kami.
          </p>
        </div>
        <div v-else class="flex flex-col items-center gap-3 mt-4">
          <div class="flex items-center gap-2 text-green-500">
            <Icon name="solar:check-circle-bold" class="text-3xl" />
            <span class="text-lg font-bold font-display">Berhasil!</span>
          </div>
          <p class="text-slate-600 dark:text-text-secondary font-sans">Terima kasih sudah berlangganan newsletter kami.</p>
        </div>
      </div>
    </div>
  </section>
</template>
