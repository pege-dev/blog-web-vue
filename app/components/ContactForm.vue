<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  console.log('Form submitted:', form)
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  isSubmitting.value = false
}
</script>

<template>
  <div class="bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark rounded-xl p-6 md:p-10 shadow-sm">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
      <!-- Name & Email Row -->
      <div class="flex flex-col md:flex-row gap-6">
        <label class="flex flex-col flex-1 gap-2">
          <span class="text-slate-900 dark:text-white text-base font-semibold leading-normal font-sans">Nama</span>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-text-secondary">
              <Icon name="solar:user-linear" class="text-xl" />
            </div>
            <input 
              v-model="form.name"
              type="text"
              required
              class="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-surface-dark text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent h-12 pl-10 pr-4 text-base font-sans transition-all"
              placeholder="Nama lengkap kamu"
            />
          </div>
        </label>
        <label class="flex flex-col flex-1 gap-2">
          <span class="text-slate-900 dark:text-white text-base font-semibold leading-normal font-sans">Alamat Email</span>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-text-secondary">
              <Icon name="solar:letter-linear" class="text-xl" />
            </div>
            <input 
              v-model="form.email"
              type="email"
              required
              class="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-surface-dark text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent h-12 pl-10 pr-4 text-base font-sans transition-all"
              placeholder="nama@contoh.com"
            />
          </div>
        </label>
      </div>

      <!-- Subject -->
      <label class="flex flex-col gap-2">
        <span class="text-slate-900 dark:text-white text-base font-semibold leading-normal font-sans">Subjek</span>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-text-secondary">
            <Icon name="solar:tag-linear" class="text-xl" />
          </div>
          <input 
            v-model="form.subject"
            type="text"
            required
            class="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-surface-dark text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent h-12 pl-10 pr-4 text-base font-sans transition-all"
            placeholder="Tentang apa pesan ini?"
          />
        </div>
      </label>

      <!-- Message -->
      <label class="flex flex-col gap-2">
        <span class="text-slate-900 dark:text-white text-base font-semibold leading-normal font-sans">Pesan</span>
        <div class="relative">
          <div class="absolute top-3 left-3 flex items-start pointer-events-none text-slate-400 dark:text-text-secondary">
            <Icon name="solar:pen-linear" class="text-xl" />
          </div>
          <textarea 
            v-model="form.message"
            required
            class="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-surface-dark text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent min-h-[200px] p-3 pl-10 text-base font-sans resize-y transition-all"
            placeholder="Tulis pesan kamu di sini..."
          ></textarea>
        </div>
      </label>

      <!-- Submit Button -->
      <div class="flex items-center justify-between pt-2">
        <p class="hidden sm:block text-xs text-slate-500 dark:text-text-secondary italic">
          *Semua kolom wajib diisi. Kami menghargai privasi kamu.
        </p>
        <button 
          type="submit"
          :disabled="isSubmitting"
          class="w-full sm:w-auto bg-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-primary/25 transition-all duration-200 flex items-center justify-center gap-2 group font-sans"
        >
          {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
          <Icon v-if="!isSubmitting" name="solar:plain-linear" class="text-xl group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </form>
  </div>
</template>
