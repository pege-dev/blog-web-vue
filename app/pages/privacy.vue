<script setup lang="ts">
definePageMeta({
  layout: 'legal'
})

useSeoMeta({
  title: 'Kebijakan Privasi - ideidetsploshad',
  description: 'Pelajari bagaimana ideidetsploshad mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda. Privasi Anda adalah prioritas kami.',
  ogTitle: 'Kebijakan Privasi - ideidetsploshad',
  ogDescription: 'Pelajari bagaimana kami menangani data dan melindungi privasi Anda.',
  twitterCard: 'summary'
})

const sections = [
  { id: 'introduction', title: 'Pendahuluan' },
  { id: 'collect', title: 'Informasi yang Dikumpulkan' },
  { id: 'use', title: 'Penggunaan Data' },
  { id: 'cookies', title: 'Cookies & Iklan' },
  { id: 'security', title: 'Keamanan Data' },
  { id: 'contact', title: 'Hubungi Kami' }
]

const activeSection = ref('introduction')
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
    <div class="mb-12 border-b border-slate-200 dark:border-border-dark pb-8">
      <div class="flex items-center gap-2 text-primary mb-4">
        <Icon name="solar:shield-check-bold" class="text-2xl" />
        <span class="text-sm font-bold uppercase tracking-wider font-sans">Hukum & Kepatuhan</span>
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6 font-display">
        Kebijakan Privasi
      </h1>
      <div class="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-500 dark:text-slate-400 text-sm font-sans">
        <div class="flex items-center gap-1.5">
          <Icon name="solar:calendar-linear" class="text-lg" />
          <span>Terakhir Diperbarui: 18 Desember 2024</span>
        </div>
        <span class="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
        <div class="flex items-center gap-1.5">
          <Icon name="solar:clock-circle-linear" class="text-lg" />
          <span>5 menit baca</span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="space-y-12 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
      <!-- Introduction -->
      <section id="introduction" class="scroll-mt-24 space-y-4">
        <p class="font-medium text-xl text-slate-900 dark:text-slate-100">
          Di ideidetsploshad.info, kami berkomitmen untuk menjaga kepercayaan dan keyakinan pengunjung kami. Dalam Kebijakan Privasi ini, kami memberikan informasi detail tentang kapan dan mengapa kami mengumpulkan informasi pribadi Anda, bagaimana kami menggunakannya, dan bagaimana kami menjaganya tetap aman.
        </p>
        <p>
          Kami menganggap serius privasi Anda dan ingin Anda memahami dengan tepat bagaimana dan mengapa kami menggunakan data Anda. Baca terus untuk mempelajari lebih lanjut tentang praktik privasi kami.
        </p>
      </section>

      <!-- Information We Collect -->
      <section id="collect" class="scroll-mt-24">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <span class="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary text-sm font-bold">1</span>
          Informasi yang Kami Kumpulkan
        </h2>
        <p class="mb-4">Kami mengumpulkan informasi untuk memberikan layanan yang lebih baik kepada semua pengguna:</p>
        <div class="grid sm:grid-cols-2 gap-4 my-6">
          <div class="p-5 rounded-xl bg-slate-50 dark:bg-card-dark border border-slate-200 dark:border-border-dark">
            <div class="text-primary mb-2">
              <Icon name="solar:user-bold" class="text-2xl" />
            </div>
            <h3 class="font-bold text-slate-900 dark:text-white mb-2">Informasi Pribadi</h3>
            <p class="text-base text-slate-600 dark:text-slate-400">
              Nama, alamat email, dan informasi profil yang Anda berikan saat berlangganan newsletter atau mengirim pesan.
            </p>
          </div>
          <div class="p-5 rounded-xl bg-slate-50 dark:bg-card-dark border border-slate-200 dark:border-border-dark">
            <div class="text-primary mb-2">
              <Icon name="solar:server-bold" class="text-2xl" />
            </div>
            <h3 class="font-bold text-slate-900 dark:text-white mb-2">Data Teknis</h3>
            <p class="text-base text-slate-600 dark:text-slate-400">
              Alamat IP, jenis browser, informasi perangkat, dan sistem operasi yang dikumpulkan secara otomatis melalui log server.
            </p>
          </div>
        </div>
      </section>

      <!-- How We Use Data -->
      <section id="use" class="scroll-mt-24">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <span class="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary text-sm font-bold">2</span>
          Bagaimana Kami Menggunakan Informasi Anda
        </h2>
        <p class="mb-4">Kami menggunakan informasi yang dikumpulkan untuk tujuan berikut:</p>
        <ul class="space-y-3 list-none pl-0">
          <li class="flex gap-3">
            <Icon name="solar:check-circle-bold" class="text-primary shrink-0 text-xl mt-1" />
            <span>Untuk menyediakan, memelihara, melindungi, dan meningkatkan layanan kami.</span>
          </li>
          <li class="flex gap-3">
            <Icon name="solar:check-circle-bold" class="text-primary shrink-0 text-xl mt-1" />
            <span>Untuk melindungi pengguna kami dan publik dari bahaya.</span>
          </li>
          <li class="flex gap-3">
            <Icon name="solar:check-circle-bold" class="text-primary shrink-0 text-xl mt-1" />
            <span>Untuk berkomunikasi dengan Anda, termasuk mengirim newsletter (jika Anda berlangganan).</span>
          </li>
          <li class="flex gap-3">
            <Icon name="solar:check-circle-bold" class="text-primary shrink-0 text-xl mt-1" />
            <span>Untuk mempersonalisasi pengalaman Anda dan memberikan konten yang relevan.</span>
          </li>
        </ul>
      </section>

      <!-- Cookies & Advertising -->
      <section id="cookies" class="scroll-mt-24">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <span class="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary text-sm font-bold">3</span>
          Cookies dan Iklan
        </h2>
        <p class="mb-4">
          Website kami menggunakan "cookies" untuk mengumpulkan informasi dan meningkatkan layanan kami. Cookie adalah file kecil yang kami simpan di browser atau perangkat Anda.
        </p>
        <div class="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-6">
          <p class="text-base italic text-slate-700 dark:text-slate-300">
            "Anda memiliki opsi untuk menerima atau menolak cookies ini. Jika Anda memilih untuk menolak cookies kami, Anda mungkin tidak dapat menggunakan beberapa bagian dari Layanan kami."
          </p>
        </div>
        <p class="mb-4">
          Kami juga menggunakan layanan periklanan pihak ketiga, termasuk <strong>Google AdSense</strong>, yang mungkin menggunakan cookies untuk menayangkan iklan berdasarkan kunjungan Anda sebelumnya ke website kami atau website lain.
        </p>
        <p class="mb-4">
          <strong>Tentang Google AdSense:</strong> Google menggunakan cookies untuk menayangkan iklan berdasarkan kunjungan pengguna ke situs kami dan situs lain di Internet. Anda dapat menonaktifkan penggunaan cookies oleh Google dengan mengunjungi halaman <a href="https://www.google.com/settings/ads" target="_blank" class="text-primary hover:underline">Pengaturan Iklan Google</a>.
        </p>
      </section>

      <!-- Security -->
      <section id="security" class="scroll-mt-24">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
          <span class="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary text-sm font-bold">4</span>
          Keamanan Data
        </h2>
        <p>
          Kami menghargai kepercayaan Anda dalam memberikan Informasi Pribadi kepada kami, oleh karena itu kami berusaha menggunakan cara yang dapat diterima secara komersial untuk melindunginya. Namun, tidak ada metode transmisi melalui internet yang 100% aman, dan kami tidak dapat menjamin keamanan absolut.
        </p>
      </section>

      <!-- Contact -->
      <section id="contact" class="scroll-mt-24 pt-8 border-t border-slate-200 dark:border-border-dark">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">Hubungi Kami</h2>
        <p class="mb-6">
          Jika Anda memiliki pertanyaan tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/contact" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors font-sans">
            <Icon name="solar:chat-round-dots-bold" class="text-xl" />
            Hubungi Kami
          </NuxtLink>
          <NuxtLink to="/" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-sans">
            <Icon name="solar:home-2-bold" class="text-xl" />
            Kembali ke Beranda
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>
