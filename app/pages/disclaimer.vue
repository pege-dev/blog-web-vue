<script setup lang="ts">
definePageMeta({
  layout: 'legal'
})

useSeoMeta({
  title: 'Disclaimer - ideidetsploshad',
  description: 'Baca disclaimer tentang informasi yang disediakan di website ideidetsploshad. Pahami batasan tanggung jawab kami.',
  ogTitle: 'Disclaimer - ideidetsploshad',
  ogDescription: 'Informasi penting tentang konten di website kami.',
  twitterCard: 'summary'
})

const sections = [
  { id: 'intro', title: 'Informasi Umum' },
  { id: 'accuracy', title: 'Akurasi Informasi' },
  { id: 'professional', title: 'Bukan Nasihat Profesional' },
  { id: 'external', title: 'Tautan Eksternal' },
  { id: 'liability', title: 'Batasan Tanggung Jawab' },
  { id: 'contact', title: 'Hubungi Kami' }
]

const activeSection = ref('intro')
</script>

<template>
  <!-- Sidebar -->
  <LegalSidebar 
    :sections="sections" 
    :active-section="activeSection"
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
        <p class="text-sm font-medium font-sans">Terakhir Diperbarui: 18 Desember 2024</p>
      </div>
    </div>

    <!-- Content -->
    <div class="space-y-12 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      <!-- Intro -->
      <section id="intro" class="scroll-mt-28">
        <p>
          Informasi yang disediakan di <strong>ideidetsploshad.info</strong> ("Situs") hanya untuk tujuan informasi umum. Semua informasi di Situs disediakan dengan itikad baik, namun kami tidak membuat pernyataan atau jaminan apa pun mengenai keakuratan, validitas, keandalan, ketersediaan, atau kelengkapan informasi apa pun di Situs.
        </p>
        <p class="mt-4">
          Dalam keadaan apa pun kami tidak bertanggung jawab kepada Anda atas kerugian atau kerusakan yang timbul sebagai akibat dari penggunaan situs atau ketergantungan pada informasi yang diberikan. Penggunaan situs sepenuhnya merupakan risiko Anda sendiri.
        </p>
      </section>

      <!-- Accuracy -->
      <section id="accuracy" class="scroll-mt-28">
        <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 relative inline-block">
          1. Akurasi Informasi
          <span class="absolute -bottom-1 left-0 w-12 h-1 bg-primary rounded-full"></span>
        </h2>
        <p>
          Meskipun kami berusaha untuk memberikan informasi yang akurat dan terkini, konten di blog ini mungkin tidak mencerminkan perkembangan terbaru. Kami tidak menjamin bahwa informasi yang diberikan bebas dari kesalahan.
        </p>
        <div class="mt-4 p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
          <p class="text-sm text-slate-700 dark:text-slate-200 italic">
            Catatan: Informasi berubah dengan cepat. Selalu verifikasi detail penting dengan sumber resmi.
          </p>
        </div>
      </section>

      <!-- Professional Advice -->
      <section id="professional" class="scroll-mt-28">
        <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 relative inline-block">
          2. Bukan Nasihat Profesional
          <span class="absolute -bottom-1 left-0 w-12 h-1 bg-primary rounded-full"></span>
        </h2>
        <p>
          Situs tidak dapat dan tidak berisi nasihat medis, hukum, kebugaran, atau keuangan. Informasi disediakan hanya untuk tujuan informasi umum dan pendidikan dan bukan pengganti nasihat profesional.
        </p>
        <p class="mt-3">
          Sebelum mengambil tindakan berdasarkan informasi tersebut, kami mendorong Anda untuk berkonsultasi dengan profesional yang sesuai.
        </p>
      </section>

      <!-- External Links -->
      <section id="external" class="scroll-mt-28">
        <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 relative inline-block">
          3. Disclaimer Tautan Eksternal
          <span class="absolute -bottom-1 left-0 w-12 h-1 bg-primary rounded-full"></span>
        </h2>
        <p>
          Situs mungkin berisi tautan ke website atau konten lain milik pihak ketiga. Tautan eksternal tersebut tidak diselidiki, dipantau, atau diperiksa keakuratannya oleh kami.
        </p>
        <p class="mt-3">
          Kami tidak menjamin, mendukung, menjamin, atau bertanggung jawab atas keakuratan atau keandalan informasi apa pun yang ditawarkan oleh website pihak ketiga.
        </p>
      </section>

      <!-- Liability -->
      <section id="liability" class="scroll-mt-28">
        <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 relative inline-block">
          4. Batasan Tanggung Jawab
          <span class="absolute -bottom-1 left-0 w-12 h-1 bg-primary rounded-full"></span>
        </h2>
        <p>
          Dalam keadaan apa pun ideidetsploshad, maupun direktur, karyawan, mitra, agen, pemasok, atau afiliasinya, tidak bertanggung jawab atas kerusakan tidak langsung, insidental, khusus, konsekuensial, atau hukuman, termasuk tanpa batasan, kehilangan keuntungan, data, penggunaan, goodwill, atau kerugian tidak berwujud lainnya.
        </p>
      </section>

      <!-- Contact -->
      <section id="contact" class="scroll-mt-28">
        <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 relative inline-block">
          5. Hubungi Kami
          <span class="absolute -bottom-1 left-0 w-12 h-1 bg-primary rounded-full"></span>
        </h2>
        <p class="mb-6">
          Jika Anda memiliki pertanyaan tentang Disclaimer ini, silakan hubungi kami.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/contact" class="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-primary/90 transition-all font-sans">
            Hubungi Kami
          </NuxtLink>
          <NuxtLink to="/" class="inline-flex justify-center items-center px-6 py-3 border border-slate-300 dark:border-border-dark text-base font-medium rounded-lg text-slate-700 dark:text-white bg-white dark:bg-card-dark hover:bg-slate-50 dark:hover:bg-card-dark/80 transition-all font-sans">
            Kembali ke Beranda
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>
