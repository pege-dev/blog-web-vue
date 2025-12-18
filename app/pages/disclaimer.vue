<script setup lang="ts">
definePageMeta({
  layout: 'legal'
})

useSeoMeta({
  title: 'Disclaimer - The Daily Blog',
  description: 'Read our disclaimer about the information provided on The Daily Blog website.',
  ogTitle: 'Disclaimer - The Daily Blog',
  ogDescription: 'Important information about the content on our website.',
  twitterCard: 'summary'
})

const sections = [
  { id: 'intro', title: 'General Information' },
  { id: 'accuracy', title: 'Accuracy of Information' },
  { id: 'professional', title: 'No Professional Advice' },
  { id: 'external', title: 'External Links' },
  { id: 'liability', title: 'Limitation of Liability' },
  { id: 'contact', title: 'Contact Us' }
]

const activeSection = ref('intro')
</script>

<template>
  <!-- Sidebar -->
  <LegalSidebar 
    :sections="sections" 
    :active-section="activeSection"
    contact-email="support@dailyblog.com"
  />

  <!-- Main Content -->
  <div class="flex-1 max-w-3xl">
    <!-- Page Header -->
    <div class="mb-10 border-b border-slate-200 dark:border-border-dark pb-8">
      <h1 class="text-4xl md:text-5xl font-bold leading-tight tracking-[-0.033em] mb-4 text-slate-900 dark:text-white font-display">
        Disclaimer
      </h1>
      <div class="flex items-center gap-2 text-slate-500 dark:text-text-secondary">
        <Icon name="solar:clock-circle-linear" class="text-lg" />
        <p class="text-sm font-medium font-sans">Last Updated: December 18, 2024</p>
      </div>
    </div>

    <!-- Content -->
    <div class="space-y-12 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      <!-- Intro -->
      <section id="intro" class="scroll-mt-28">
        <p>
          The information provided on <strong>The Daily Blog</strong> (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind regarding the accuracy, validity, reliability, availability, or completeness of any information on the Site.
        </p>
        <p class="mt-4">
          Under no circumstance shall we have any liability to you for any loss or damage incurred as a result of the use of the site or reliance on any information provided. Your use of the site is solely at your own risk.
        </p>
      </section>

      <!-- Accuracy -->
      <section id="accuracy" class="scroll-mt-28">
        <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 relative inline-block">
          1. Accuracy of Information
          <span class="absolute -bottom-1 left-0 w-12 h-1 bg-primary rounded-full"></span>
        </h2>
        <p>
          While we strive to provide accurate and up-to-date information, the content on this blog may not reflect the most current developments. We do not guarantee that the information provided is error-free.
        </p>
        <div class="mt-4 p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
          <p class="text-sm text-slate-700 dark:text-slate-200 italic">
            Note: Information changes rapidly. Always verify important details with official sources.
          </p>
        </div>
      </section>

      <!-- Professional Advice -->
      <section id="professional" class="scroll-mt-28">
        <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 relative inline-block">
          2. No Professional Advice
          <span class="absolute -bottom-1 left-0 w-12 h-1 bg-primary rounded-full"></span>
        </h2>
        <p>
          The Site cannot and does not contain medical, legal, fitness, or financial advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice.
        </p>
        <p class="mt-3">
          Before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
        </p>
      </section>

      <!-- External Links -->
      <section id="external" class="scroll-mt-28">
        <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 relative inline-block">
          3. External Links Disclaimer
          <span class="absolute -bottom-1 left-0 w-12 h-1 bg-primary rounded-full"></span>
        </h2>
        <p>
          The Site may contain links to other websites or content belonging to third parties. Such external links are not investigated, monitored, or checked for accuracy by us.
        </p>
        <p class="mt-3">
          We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites.
        </p>
      </section>

      <!-- Liability -->
      <section id="liability" class="scroll-mt-28">
        <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 relative inline-block">
          4. Limitation of Liability
          <span class="absolute -bottom-1 left-0 w-12 h-1 bg-primary rounded-full"></span>
        </h2>
        <p>
          In no event shall The Daily Blog, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
        </p>
      </section>

      <!-- Contact -->
      <section id="contact" class="scroll-mt-28">
        <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 relative inline-block">
          5. Contact Us
          <span class="absolute -bottom-1 left-0 w-12 h-1 bg-primary rounded-full"></span>
        </h2>
        <p class="mb-6">
          If you have any questions about this Disclaimer, please contact us.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/contact" class="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-primary/90 transition-all font-sans">
            Contact Support
          </NuxtLink>
          <NuxtLink to="/" class="inline-flex justify-center items-center px-6 py-3 border border-slate-300 dark:border-border-dark text-base font-medium rounded-lg text-slate-700 dark:text-white bg-white dark:bg-card-dark hover:bg-slate-50 dark:hover:bg-card-dark/80 transition-all font-sans">
            Back to Home
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>
