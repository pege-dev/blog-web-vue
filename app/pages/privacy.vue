<script setup lang="ts">
definePageMeta({
  layout: 'legal'
})

useSeoMeta({
  title: 'Privacy Policy - The Daily Blog',
  description: 'Learn how The Daily Blog collects, uses, and protects your personal information.',
  ogTitle: 'Privacy Policy - The Daily Blog',
  ogDescription: 'Learn how we handle your data and protect your privacy.',
  twitterCard: 'summary'
})

const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'collect', title: 'Information We Collect' },
  { id: 'use', title: 'How We Use Data' },
  { id: 'cookies', title: 'Cookies & Tracking' },
  { id: 'security', title: 'Data Security' },
  { id: 'contact', title: 'Contact Us' }
]

const activeSection = ref('introduction')
</script>

<template>
  <!-- Sidebar -->
  <LegalSidebar 
    :sections="sections" 
    :active-section="activeSection"
    contact-email="privacy@dailyblog.com"
  />

  <!-- Main Content -->
  <div class="flex-1 max-w-3xl">
    <!-- Page Header -->
    <div class="mb-12 border-b border-slate-200 dark:border-border-dark pb-8">
      <div class="flex items-center gap-2 text-primary mb-4">
        <Icon name="solar:shield-check-bold" class="text-2xl" />
        <span class="text-sm font-bold uppercase tracking-wider font-sans">Legal & Compliance</span>
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6 font-display">
        Privacy Policy
      </h1>
      <div class="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-500 dark:text-slate-400 text-sm font-sans">
        <div class="flex items-center gap-1.5">
          <Icon name="solar:calendar-linear" class="text-lg" />
          <span>Last Updated: December 18, 2024</span>
        </div>
        <span class="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
        <div class="flex items-center gap-1.5">
          <Icon name="solar:clock-circle-linear" class="text-lg" />
          <span>5 min read</span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="space-y-12 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      <!-- Introduction -->
      <section id="introduction" class="scroll-mt-24 space-y-4">
        <p class="font-medium text-xl text-slate-900 dark:text-slate-100">
          At The Daily Blog, we are committed to maintaining the trust and confidence of our visitors. In this Privacy Policy, we've provided detailed information on when and why we collect your personal information, how we use it, and how we keep it secure.
        </p>
        <p>
          We take your privacy seriously and want you to understand exactly how and why we use your data. Read on to learn more about our privacy practices.
        </p>
      </section>

      <!-- Information We Collect -->
      <section id="collect" class="scroll-mt-24">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <span class="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary text-sm font-bold">1</span>
          Information We Collect
        </h2>
        <p class="mb-4">We collect information to provide better services to all our users:</p>
        <div class="grid sm:grid-cols-2 gap-4 my-6">
          <div class="p-5 rounded-xl bg-slate-50 dark:bg-card-dark border border-slate-200 dark:border-border-dark">
            <div class="text-primary mb-2">
              <Icon name="solar:user-bold" class="text-2xl" />
            </div>
            <h3 class="font-bold text-slate-900 dark:text-white mb-2">Personal Information</h3>
            <p class="text-base text-slate-600 dark:text-slate-400">
              Name, email address, and profile information you provide when subscribing or commenting.
            </p>
          </div>
          <div class="p-5 rounded-xl bg-slate-50 dark:bg-card-dark border border-slate-200 dark:border-border-dark">
            <div class="text-primary mb-2">
              <Icon name="solar:server-bold" class="text-2xl" />
            </div>
            <h3 class="font-bold text-slate-900 dark:text-white mb-2">Technical Data</h3>
            <p class="text-base text-slate-600 dark:text-slate-400">
              IP address, browser type, device info, and operating system collected automatically via logs.
            </p>
          </div>
        </div>
      </section>

      <!-- How We Use Data -->
      <section id="use" class="scroll-mt-24">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <span class="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary text-sm font-bold">2</span>
          How We Use Your Information
        </h2>
        <p class="mb-4">We use the information we collect for the following purposes:</p>
        <ul class="space-y-3 list-none pl-0">
          <li class="flex gap-3">
            <Icon name="solar:check-circle-bold" class="text-primary shrink-0 text-xl mt-1" />
            <span>To provide, maintain, protect and improve our services.</span>
          </li>
          <li class="flex gap-3">
            <Icon name="solar:check-circle-bold" class="text-primary shrink-0 text-xl mt-1" />
            <span>To protect our users and the public from harm.</span>
          </li>
          <li class="flex gap-3">
            <Icon name="solar:check-circle-bold" class="text-primary shrink-0 text-xl mt-1" />
            <span>To communicate with you, including sending newsletters (if opted-in).</span>
          </li>
          <li class="flex gap-3">
            <Icon name="solar:check-circle-bold" class="text-primary shrink-0 text-xl mt-1" />
            <span>To personalize your experience and deliver relevant content.</span>
          </li>
        </ul>
      </section>

      <!-- Cookies -->
      <section id="cookies" class="scroll-mt-24">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <span class="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary text-sm font-bold">3</span>
          Cookies and Tracking
        </h2>
        <p class="mb-4">
          Our website uses "cookies" to collect information and improve our services. A cookie is a small file that we store on your browser or device.
        </p>
        <div class="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-6">
          <p class="text-base italic text-slate-700 dark:text-slate-300">
            "You have the option to either accept or refuse these cookies. If you choose to refuse our cookies, you may not be able to use some portions of our Service."
          </p>
        </div>
        <p>
          We also use third-party advertising services, including Google AdSense, which may use cookies to serve ads based on your prior visits to our website or other websites.
        </p>
      </section>

      <!-- Security -->
      <section id="security" class="scroll-mt-24">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <span class="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary text-sm font-bold">4</span>
          Data Security
        </h2>
        <p>
          We value your trust in providing us your Personal Information, thus we strive to use commercially acceptable means of protecting it. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <!-- Contact -->
      <section id="contact" class="scroll-mt-24 pt-8 border-t border-slate-200 dark:border-border-dark">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">Contact Us</h2>
        <p class="mb-6">
          If you have any questions about our Privacy Policy, do not hesitate to contact us.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="mailto:privacy@dailyblog.com" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors font-sans">
            <Icon name="solar:letter-bold" class="text-xl" />
            Email Privacy Team
          </a>
          <NuxtLink to="/contact" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-sans">
            <Icon name="solar:question-circle-bold" class="text-xl" />
            Visit Help Center
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>
