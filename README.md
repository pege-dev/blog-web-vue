# The Daily Blog

Blog website modern dengan Nuxt 4, Tailwind CSS, dan Iconify Solar icons.

## Tech Stack

- **Framework:** Nuxt 4
- **Styling:** Tailwind CSS
- **Icons:** Iconify (Solar icon set)
- **Fonts:** Newsreader + Noto Sans (Google Fonts)

## Fitur

- 🏠 Home page dengan featured post dan recent articles
- 📝 Blog listing dengan filter kategori
- 📖 Halaman artikel dinamis dengan related posts
- 📧 Contact page dengan form
- 📜 Legal pages (Privacy, Terms, Disclaimer)
- 🌙 Dark mode by default
- 📱 Responsive design
- 🔍 SEO optimized

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy ke VPS

### 1. Persiapan VPS

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20+
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx
```

### 2. Clone & Build

```bash
# Clone repository
cd /var/www
git clone <your-repo-url> blog-website
cd blog-website

# Install dependencies
npm install

# Build production
npm run build
```

### 3. Jalankan dengan PM2

```bash
# Start aplikasi
pm2 start .output/server/index.mjs --name "blog-website"

# Auto-start saat reboot
pm2 startup
pm2 save
```

### 4. Konfigurasi Nginx

Buat file `/etc/nginx/sites-available/blog-website`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Aktifkan site:

```bash
sudo ln -s /etc/nginx/sites-available/blog-website /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 5. SSL dengan Certbot

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Generate SSL
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renew
sudo certbot renew --dry-run
```

## Alternatif: Deploy Static (SSG)

Jika ingin deploy sebagai static site:

```bash
# Generate static files
npm run generate

# Output di .output/public/
# Upload ke hosting static (Netlify, Vercel, dll)
```

## Environment Variables

Buat file `.env` untuk production:

```env
NUXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Konfigurasi AdSense

1. Edit `blog-website/public/ads.txt` dengan publisher ID
2. Update `AdSlot.vue` component dengan ad-slot ID
3. Pastikan Privacy Policy sudah include disclosure AdSense

## Struktur Folder

```
blog-website/
├── app/
│   ├── components/     # Vue components
│   ├── composables/    # Composables (useBlogPosts, useSchemaOrg)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── assets/         # CSS, images
├── public/             # Static files (ads.txt, favicon)
├── nuxt.config.ts      # Nuxt configuration
└── tailwind.config.ts  # Tailwind configuration
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (SSR) |
| `npm run generate` | Generate static site (SSG) |
| `npm run preview` | Preview production build |

## License

MIT
