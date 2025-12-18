<script setup lang="ts">
interface Props {
  adClient?: string
  adSlot?: string
  adFormat?: 'auto' | 'horizontal' | 'vertical' | 'rectangle'
  fullWidth?: boolean
}

withDefaults(defineProps<Props>(), {
  adClient: 'ca-pub-XXXXXXXXXXXXXXXX', // Replace with your AdSense publisher ID
  adSlot: '',
  adFormat: 'auto',
  fullWidth: true
})

// Initialize AdSense on mount
onMounted(() => {
  try {
    // @ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  } catch (e) {
    console.error('AdSense error:', e)
  }
})
</script>

<template>
  <div class="ad-slot my-6">
    <ins 
      class="adsbygoogle"
      :style="{ display: 'block' }"
      :data-ad-client="adClient"
      :data-ad-slot="adSlot"
      :data-ad-format="adFormat"
      :data-full-width-responsive="fullWidth"
    ></ins>
    <!-- Placeholder for development -->
    <div 
      v-if="!adSlot" 
      class="bg-gray-100 dark:bg-card-dark border-2 border-dashed border-gray-300 dark:border-border-dark rounded-lg p-8 text-center"
    >
      <Icon name="solar:widget-5-bold" class="text-4xl text-gray-400 dark:text-gray-600 mb-2" />
      <p class="text-sm text-gray-500 dark:text-gray-400 font-sans">Ad Placement</p>
      <p class="text-xs text-gray-400 dark:text-gray-500 font-sans mt-1">Configure ad-slot in component props</p>
    </div>
  </div>
</template>
