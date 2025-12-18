<script setup lang="ts">
definePageMeta({
  layout: 'legal'
})

useSeoMeta({
  title: 'Terms of Service - The Daily Blog',
  description: 'Read the terms and conditions for using The Daily Blog website.',
  ogTitle: 'Terms of Service - The Daily Blog',
  ogDescription: 'Terms and conditions for using our website.',
  twitterCard: 'summary'
})

const sections = [
  { id: 'introduction', title: 'Introduction', icon: 'solar:info-circle-linear' },
  { id: 'responsibilities', title: 'User Responsibilities', icon: 'solar:user-linear' },
  { id: 'intellectual-property', title: 'Intellectual Property', icon: 'solar:copyright-linear' },
  { id: 'content-guidelines', title: 'Content Guidelines', icon: 'solar:document-text-linear' },
  { id: 'disclaimers', title: 'Disclaimers', icon: 'solar:danger-triangle-linear' },
  { id: 'contact', title: 'Contact Us', icon: 'solar:letter-linear' }
]

const activeSection = ref('introduction')
</script>

<template>
  <!-- Sidebar -->
  <aside class="hidden lg:block w-72 shrink-0">
    <div class="sticky top-24 flex flex-col gap-6 p-6 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark shadow-sm">
      <div class="flex flex-col">
        <h3 class="text-lg font-bold leading-normal font-display">Table of Contents</h3>
        <p class="text-gray-500 dark:text-text-secondary text-sm font-normal">Navigate sections</p>
      </div>
      <nav class="flex flex-col gap-2">
        <a
          v-for="section in sections"
          :key="section.id"
          :href="`#${section.id}`"
          :class="[
            'flex items-center gap-3 px-3 py-2 rounded-lg transition-all',
            activeSection === section.id
              ? 'bg-primary/10 dark:bg-border-dark text-primary dark:text-white'
              : 'text-gray-600 dark:text-text-secondary hover:bg-gray-100 dark:hover:bg-border-dark hover:text-gray-900 dark:hover:text-white'
          ]"
        >
          <Icon :name="section.icon" class="text-xl" />
          <span class="text-sm font-medium">{{ section.title }}</span>
        </a>
      </nav>
    </div>
  </aside>

  <!-- Main Content -->
  <div class="flex-1 min-w-0">
    <!-- Page Header -->
    <div class="mb-10 pb-8 border-b border-gray-200 dark:border-border-dark">
      <div class="flex flex-wrap justify-between items-start gap-6">
        <div class="flex flex-col gap-4 max-w-2xl">
          <h1 class="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] font-display">Terms of Service</h1>
          <p class="text-gray-600 dark:text-text-secondary text-lg font-normal leading-relaxed font-display">
            Please read these terms carefully before using our website. By accessing or using any part of the site, you agree to be bound by these terms.
          </p>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-border-dark w-fit">
            <Icon name="solar:calendar-linear" class="text-base text-gray-500 dark:text-text-secondary" />
            <span class="text-gray-600 dark:text-text-secondary text-sm font-medium font-sans">Effective Date: December 18, 2024</span>
          </div>
        </div>
        <button class="flex shrink-0 items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-border-dark border border-gray-200 dark:border-transparent hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-sm font-bold transition-colors shadow-sm font-sans">
          <Icon name="solar:download-linear" class="text-xl" />
          <span>Download PDF</span>
        </button>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="flex flex-col gap-12 max-w-[800px]">
      <!-- Section 1 -->
      <section id="introduction" class="scroll-mt-28">
        <h2 class="text-3xl font-bold leading-tight mb-4 font-display">1. Introduction</h2>
        <div class="text-gray-600 dark:text-text-secondary text-lg leading-relaxed font-sans space-y-4">
          <p>
            Welcome to The Daily Blog ("Company", "we", "our", "us"). These Terms of Service govern your use of our website operated by The Daily Blog.
          </p>
          <p>
            Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information. Your agreement with us includes these Terms and our Privacy Policy.
          </p>
        </div>
      </section>

      <!-- Section 2 -->
      <section id="responsibilities" class="scroll-mt-28">
        <h2 class="text-3xl font-bold leading-tight mb-4 font-display">2. User Responsibilities</h2>
        <div class="text-gray-600 dark:text-text-secondary text-lg leading-relaxed font-sans space-y-4">
          <p>
            As a user of this Service, you may be asked to register with us. You are responsible for ensuring the accuracy of your information.
          </p>
          <ul class="list-disc pl-5 space-y-2 marker:text-primary">
            <li>You are responsible for maintaining the safety and security of your identifying information.</li>
            <li>You must not share your account details with others.</li>
            <li>You assume all responsibility for activities that occur under your account.</li>
            <li>You must notify us immediately upon becoming aware of any breach of security.</li>
          </ul>
        </div>
      </section>

      <!-- Section 3 -->
      <section id="intellectual-property" class="scroll-mt-28">
        <h2 class="text-3xl font-bold leading-tight mb-4 font-display">3. Intellectual Property</h2>
        <div class="text-gray-600 dark:text-text-secondary text-lg leading-relaxed font-sans space-y-4">
          <p>
            Service and its original content, features and functionality are and will remain the exclusive property of The Daily Blog and its licensors.
          </p>
          <div class="p-4 rounded-lg bg-primary/5 dark:bg-border-dark/50 border-l-4 border-primary">
            <p class="text-sm italic">
              <strong>Note on User Content:</strong> While you retain ownership of any comments or articles you submit, by posting, you grant us a non-exclusive license to use, reproduce, and display such content.
            </p>
          </div>
        </div>
      </section>

      <!-- Section 4 -->
      <section id="content-guidelines" class="scroll-mt-28">
        <h2 class="text-3xl font-bold leading-tight mb-4 font-display">4. Content Guidelines</h2>
        <div class="text-gray-600 dark:text-text-secondary text-lg leading-relaxed font-sans space-y-4">
          <p>You may not post content that:</p>
          <ul class="list-disc pl-5 space-y-2 marker:text-primary">
            <li>Is unlawful, threatening, abusive, harassing, defamatory, or fraudulent.</li>
            <li>Victimizes, harasses, degrades, or intimidates an individual or group.</li>
            <li>Contains software viruses or any code designed to disrupt or damage.</li>
          </ul>
        </div>
      </section>

      <!-- Section 5 -->
      <section id="disclaimers" class="scroll-mt-28">
        <h2 class="text-3xl font-bold leading-tight mb-4 font-display">5. Disclaimers</h2>
        <div class="text-gray-600 dark:text-text-secondary text-lg leading-relaxed font-sans space-y-4">
          <p>
            The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express or implied.
          </p>
          <p>
            The Daily Blog does not warrant that the Service will function uninterrupted, secure or available at any particular time or location.
          </p>
        </div>
      </section>

      <!-- Section 6: Contact -->
      <section id="contact" class="scroll-mt-28 pt-8 border-t border-gray-200 dark:border-border-dark">
        <div class="bg-gray-100 dark:bg-surface-dark rounded-xl p-8 border border-gray-200 dark:border-border-dark">
          <h2 class="text-2xl font-bold leading-tight mb-4 font-display">Questions regarding these terms?</h2>
          <p class="text-gray-600 dark:text-text-secondary font-sans mb-6">
            If you have any questions or concerns about our Terms of Service, please contact our legal team.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="mailto:legal@dailyblog.com" class="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-blue-600 text-white dark:text-surface-dark font-bold rounded-lg transition-colors font-sans">
              <Icon name="solar:letter-bold" class="text-xl" />
              legal@dailyblog.com
            </a>
            <NuxtLink to="/contact" class="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-border-dark hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-transparent font-bold rounded-lg transition-colors font-sans">
              Contact Support
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
