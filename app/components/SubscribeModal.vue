<script setup lang="ts">
const { isModalOpen, isSubmitting, isSuccess, errorMessage, closeModal, subscribe } = useSubscribe()

const email = ref('')

const handleSubmit = async () => {
  const success = await subscribe(email.value)
  if (success) {
    email.value = ''
  }
}

const handleClose = () => {
  email.value = ''
  closeModal()
}

// Close modal on escape key
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isModalOpen.value) {
      handleClose()
    }
  }
  window.addEventListener('keydown', handleEscape)
  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape)
  })
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div 
        v-if="isModalOpen" 
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        @click.self="handleClose"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        
        <!-- Modal -->
        <div class="relative w-full max-w-md bg-white dark:bg-card-dark rounded-2xl shadow-2xl overflow-hidden">
          <!-- Close Button -->
          <button 
            @click="handleClose"
            class="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors text-slate-500 dark:text-slate-400 z-10"
          >
            <Icon name="solar:close-circle-linear" class="text-2xl" />
          </button>

          <!-- Success State -->
          <div v-if="isSuccess" class="p-8 text-center">
            <div class="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="solar:check-circle-bold" class="text-5xl text-green-500" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2 font-display">Berhasil!</h3>
            <p class="text-slate-600 dark:text-text-secondary font-display mb-6">
              Terima kasih sudah berlangganan. Kamu akan menerima artikel terbaru langsung ke inbox.
            </p>
            <button 
              @click="handleClose"
              class="px-6 py-3 bg-primary text-white dark:text-surface-dark font-bold rounded-lg hover:bg-primary/90 transition-colors font-sans"
            >
              Tutup
            </button>
          </div>

          <!-- Form State -->
          <div v-else class="p-8">
            <!-- Header -->
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="solar:letter-bold" class="text-3xl text-primary" />
              </div>
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white font-display">Berlangganan Newsletter</h3>
              <p class="text-slate-600 dark:text-text-secondary font-display mt-2">
                Dapatkan artikel terbaru langsung ke inbox kamu setiap minggu.
              </p>
            </div>

            <!-- Form -->
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label for="subscribe-email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 font-sans">
                  Alamat Email
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Icon name="solar:letter-linear" class="text-xl" />
                  </div>
                  <input 
                    id="subscribe-email"
                    v-model="email"
                    type="email"
                    required
                    :disabled="isSubmitting"
                    class="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-surface-dark text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent h-12 pl-10 pr-4 text-base font-sans transition-all disabled:opacity-50"
                    placeholder="nama@email.com"
                  />
                </div>
                <p v-if="errorMessage" class="mt-2 text-sm text-red-500 font-sans">
                  {{ errorMessage }}
                </p>
              </div>

              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-3 bg-primary text-white dark:text-surface-dark font-bold rounded-lg hover:bg-primary/90 transition-colors font-sans disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Icon v-if="isSubmitting" name="solar:refresh-bold" class="text-xl animate-spin" />
                {{ isSubmitting ? 'Memproses...' : 'Langganan Sekarang' }}
              </button>
            </form>

            <!-- Benefits -->
            <div class="mt-6 pt-6 border-t border-slate-200 dark:border-border-dark">
              <p class="text-xs text-slate-500 dark:text-slate-400 font-sans mb-3">Yang akan kamu dapatkan:</p>
              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 font-sans">
                  <Icon name="solar:check-circle-bold" class="text-primary text-lg" />
                  Artikel eksklusif setiap minggu
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 font-sans">
                  <Icon name="solar:check-circle-bold" class="text-primary text-lg" />
                  Tips & trik dari para ahli
                </li>
                <li class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 font-sans">
                  <Icon name="solar:check-circle-bold" class="text-primary text-lg" />
                  Berhenti kapan saja, tanpa spam
                </li>
              </ul>
            </div>

            <!-- Privacy Note -->
            <p class="text-xs text-slate-400 dark:text-slate-500 text-center mt-4 font-sans">
              Dengan berlangganan, kamu menyetujui 
              <NuxtLink to="/privacy" class="underline hover:text-primary" @click="handleClose">Kebijakan Privasi</NuxtLink> kami.
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.95) translateY(10px);
}
</style>
