<script setup lang="ts">
definePageMeta({
  layout: 'legal'
})

useSeoMeta({
  title: 'Syarat & Ketentuan - ideidetsploshad',
  description: 'Baca syarat dan ketentuan penggunaan website ideidetsploshad. Dengan mengakses situs ini, Anda menyetujui ketentuan yang berlaku.',
  ogTitle: 'Syarat & Ketentuan - ideidetsploshad',
  ogDescription: 'Syarat dan ketentuan penggunaan website kami.',
  twitterCard: 'summary'
})

const sections = [
  { id: 'introduction', title: 'Pendahuluan', icon: 'solar:info-circle-linear' },
  { id: 'responsibilities', title: 'Tanggung Jawab Pengguna', icon: 'solar:user-linear' },
  { id: 'intellectual-property', title: 'Hak Kekayaan Intelektual', icon: 'solar:copyright-linear' },
  { id: 'content-guidelines', title: 'Pedoman Konten', icon: 'solar:document-text-linear' },
  { id: 'disclaimers', title: 'Disclaimer', icon: 'solar:danger-triangle-linear' },
  { id: 'contact', title: 'Hubungi Kami', icon: 'solar:letter-linear' }
]

const activeSection = ref('introduction')
</script>

<template>
  <!-- Sidebar -->
  <aside class="hidden lg:block w-72 shrink-0">
    <div class="sticky top-24 flex flex-col gap-6 p-6 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark shadow-sm">
      <div class="flex flex-col">
        <h3 class="text-lg font-bold leading-normal font-display">Daftar Isi</h3>
        <p class="text-gray-500 dark:text-text-secondary text-sm font-normal">Navigasi bagian</p>
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
          <h1 class="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] font-display">Syarat & Ketentuan</h1>
          <p class="text-gray-600 dark:text-text-secondary text-lg font-normal leading-relaxed font-display">
            Harap baca syarat dan ketentuan ini dengan seksama sebelum menggunakan website kami. Dengan mengakses atau menggunakan bagian mana pun dari situs ini, Anda setuju untuk terikat dengan ketentuan ini.
          </p>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-border-dark w-fit">
            <Icon name="solar:calendar-linear" class="text-base text-gray-500 dark:text-text-secondary" />
            <span class="text-gray-600 dark:text-text-secondary text-sm font-medium font-sans">Berlaku Sejak: 18 Desember 2024</span>
          </div>
        </div>
        <button class="flex shrink-0 items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-border-dark border border-gray-200 dark:border-transparent hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-sm font-bold transition-colors shadow-sm font-sans">
          <Icon name="solar:download-linear" class="text-xl" />
          <span>Unduh PDF</span>
        </button>
      </div>
    </div>

    <!-- Content Sections -->
    <div class="flex flex-col gap-12 max-w-[800px]">
      <!-- Section 1 -->
      <section id="introduction" class="scroll-mt-28">
        <h2 class="text-3xl font-bold leading-tight mb-4 font-display">1. Pendahuluan</h2>
        <div class="text-gray-600 dark:text-text-secondary text-lg leading-relaxed font-sans space-y-4">
          <p>
            Selamat datang di ideidetsploshad.info ("Perusahaan", "kami", "milik kami"). Syarat dan Ketentuan Layanan ini mengatur penggunaan Anda atas website kami yang dioperasikan oleh ideidetsploshad.
          </p>
          <p>
            Kebijakan Privasi kami juga mengatur penggunaan Layanan kami dan menjelaskan bagaimana kami mengumpulkan, melindungi, dan mengungkapkan informasi. Persetujuan Anda dengan kami mencakup Syarat ini dan Kebijakan Privasi kami.
          </p>
        </div>
      </section>

      <!-- Section 2 -->
      <section id="responsibilities" class="scroll-mt-28">
        <h2 class="text-3xl font-bold leading-tight mb-4 font-display">2. Tanggung Jawab Pengguna</h2>
        <div class="text-gray-600 dark:text-text-secondary text-lg leading-relaxed font-sans space-y-4">
          <p>
            Sebagai pengguna Layanan ini, Anda mungkin diminta untuk mendaftar dengan kami. Anda bertanggung jawab untuk memastikan keakuratan informasi Anda.
          </p>
          <ul class="list-disc pl-5 space-y-2 marker:text-primary">
            <li>Anda bertanggung jawab untuk menjaga keamanan informasi identitas Anda.</li>
            <li>Anda tidak boleh membagikan detail akun Anda kepada orang lain.</li>
            <li>Anda bertanggung jawab penuh atas semua aktivitas yang terjadi di bawah akun Anda.</li>
            <li>Anda harus segera memberi tahu kami jika mengetahui adanya pelanggaran keamanan.</li>
          </ul>
        </div>
      </section>

      <!-- Section 3 -->
      <section id="intellectual-property" class="scroll-mt-28">
        <h2 class="text-3xl font-bold leading-tight mb-4 font-display">3. Hak Kekayaan Intelektual</h2>
        <div class="text-gray-600 dark:text-text-secondary text-lg leading-relaxed font-sans space-y-4">
          <p>
            Layanan dan konten aslinya, fitur, dan fungsionalitas adalah dan akan tetap menjadi milik eksklusif ideidetsploshad dan pemberi lisensinya.
          </p>
          <div class="p-4 rounded-lg bg-primary/5 dark:bg-border-dark/50 border-l-4 border-primary">
            <p class="text-sm italic">
              <strong>Catatan tentang Konten Pengguna:</strong> Meskipun Anda tetap memiliki kepemilikan atas komentar atau pesan yang Anda kirimkan, dengan memposting, Anda memberikan kami lisensi non-eksklusif untuk menggunakan, mereproduksi, dan menampilkan konten tersebut.
            </p>
          </div>
        </div>
      </section>

      <!-- Section 4 -->
      <section id="content-guidelines" class="scroll-mt-28">
        <h2 class="text-3xl font-bold leading-tight mb-4 font-display">4. Pedoman Konten</h2>
        <div class="text-gray-600 dark:text-text-secondary text-lg leading-relaxed font-sans space-y-4">
          <p>Anda tidak boleh memposting konten yang:</p>
          <ul class="list-disc pl-5 space-y-2 marker:text-primary">
            <li>Melanggar hukum, mengancam, kasar, melecehkan, memfitnah, atau menipu.</li>
            <li>Menjadikan korban, melecehkan, merendahkan, atau mengintimidasi individu atau kelompok.</li>
            <li>Mengandung virus perangkat lunak atau kode apa pun yang dirancang untuk mengganggu atau merusak.</li>
          </ul>
        </div>
      </section>

      <!-- Section 5 -->
      <section id="disclaimers" class="scroll-mt-28">
        <h2 class="text-3xl font-bold leading-tight mb-4 font-display">5. Disclaimer</h2>
        <div class="text-gray-600 dark:text-text-secondary text-lg leading-relaxed font-sans space-y-4">
          <p>
            Layanan disediakan atas dasar "SEBAGAIMANA ADANYA" dan "SEBAGAIMANA TERSEDIA" tanpa jaminan apa pun, baik tersurat maupun tersirat.
          </p>
          <p>
            ideidetsploshad tidak menjamin bahwa Layanan akan berfungsi tanpa gangguan, aman, atau tersedia pada waktu atau lokasi tertentu.
          </p>
        </div>
      </section>

      <!-- Section 6: Contact -->
      <section id="contact" class="scroll-mt-28 pt-8 border-t border-gray-200 dark:border-border-dark">
        <div class="bg-gray-100 dark:bg-surface-dark rounded-xl p-8 border border-gray-200 dark:border-border-dark">
          <h2 class="text-2xl font-bold leading-tight mb-4 font-display">Pertanyaan tentang syarat ini?</h2>
          <p class="text-gray-600 dark:text-text-secondary font-sans mb-6">
            Jika Anda memiliki pertanyaan atau kekhawatiran tentang Syarat dan Ketentuan kami, silakan hubungi tim kami.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/contact" class="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-blue-600 text-white dark:text-surface-dark font-bold rounded-lg transition-colors font-sans">
              <Icon name="solar:chat-round-dots-bold" class="text-xl" />
              Hubungi Kami
            </NuxtLink>
            <NuxtLink to="/" class="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-border-dark hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-transparent font-bold rounded-lg transition-colors font-sans">
              Kembali ke Beranda
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
