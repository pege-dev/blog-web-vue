export const useSubscribe = () => {
  const isModalOpen = useState('subscribeModal', () => false)
  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const errorMessage = ref('')

  const openModal = () => {
    isModalOpen.value = true
    isSuccess.value = false
    errorMessage.value = ''
  }

  const closeModal = () => {
    isModalOpen.value = false
    isSuccess.value = false
    errorMessage.value = ''
  }

  const subscribe = async (email: string) => {
    isSubmitting.value = true
    errorMessage.value = ''

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Validate email
      if (!email || !email.includes('@')) {
        throw new Error('Email tidak valid')
      }

      // Store in localStorage for demo purposes
      const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]')
      if (subscribers.includes(email)) {
        throw new Error('Email sudah terdaftar')
      }
      subscribers.push(email)
      localStorage.setItem('subscribers', JSON.stringify(subscribers))

      isSuccess.value = true
      return true
    } catch (error: any) {
      errorMessage.value = error.message || 'Terjadi kesalahan. Silakan coba lagi.'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    isModalOpen,
    isSubmitting,
    isSuccess,
    errorMessage,
    openModal,
    closeModal,
    subscribe
  }
}
