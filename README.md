 Projeyi Hazırlayan
 Tunay ÖZDEMİR
 
 # Patara Challenge
  Patara Challenge, modern web teknolojileri kullanılarak hazırlanmış etkileşimli bir frontend uygulamasıdır. Kullanıcı dostu bir arayüz sunmayı ve bağlantılı hesap yönetimi, kullanıcı girişleri ve özelleştirilebilir bileşenlerle etkileşim sağlamayı hedefler.

## Proje Yapısı
  ├── app/ # App Router dizini (Next.js 13+)
  │ ├── layout.tsx # Global layout bileşeni
  │ └── page.tsx # Giriş sayfası
  ├── components/
  │ ├── atoms/ # Temel UI bileşenleri (Button, Icon, Input vs.)
  │ ├── molecules/ # Atomlardan oluşan bileşik bileşenler
  │ └── organisms/ # Kompleks bileşen yapıları
  ├── context/ # React context API (örneğin: searchTerm, isLoggedIn)
  ├── public/ # Statik dosyalar (resimler vs.)
  ├── styles/ # Tailwind veya global CSS dosyaları
  ├── utils/ # Yardımcı fonksiyonlar (gradient, efektler)
  ├── tsconfig.json # TypeScript yapılandırması
  ├── tailwind.config.js # Tailwind CSS yapılandırması
  ├── postcss.config.js # PostCSS ayarları
  └── package.json # Bağımlılık ve script tanımları

### Kullanılan Teknolojiler ve Bağımlılıklar

### Framework & UI
- **Next.js 15.1.7**                      – React tabanlı SSR destekli framework
- **React 19.0.0**                        – UI kütüphanesi
- **Node 20.3.0**                         – Sistem Gereksinimleri
- **Npm 9.6.7**                           – Sistem Gereksinimleri
- **Tailwind CSS 3.4.1**                  – Utility-first CSS framework
- **shadcn/ui 0.9.5**                     – Radix UI ve Tailwind üzerine kurulmuş UI bileşen kütüphanesi
- **Framer Motion 12.10.5**               – Animasyon kütüphanesi

### Yardımcı Kütüphaneler
- **clsx** ve **class-variance-authority** – Dinamik className yönetimi
- **lucide-react**                         – İkon bileşenleri
- **@tanstack/react-table**                – Esnek tablo yapıları için
- **zustand 5.0.4**                        – Hafif global state yönetimi

### Linter & Types
- **ESLint 9**
- **TypeScript 5**
- **@types/react, @types/node**            – TS tipi destekleri

#### Önemli Bilgiler
-Proje açıldığında anasayfa sizi arka planda oluşan bir patlama efekti ile karşılar
-WaletCart ise ilk bakıldığnda nefes alıp veritormuş gibi görünür ve kullanıcıya sitenin, kendi ekosistemine sahip bir yapısı olduğu izdenimini verir.
-Henüz dashboard sayfasını açmadıysanız önünüzde bir searchbox ve dört adet buton bulunur.
-"Connect/Sing in" butonları sizi deshboard ekranına yönlendirir.
-Tasarımda birde ekranın sol üst köşesinde bulunan hamburger buton mevcuttu. 
-Bu button responsive ekranlarda gözükmesi gerektiği için masaüstü görünümde gizlenmiş durumdadır. 
-Eran inspact ile daraltıldığında diğer butonlar kapanıp hamburger button açılacaktır.
-Buttonlarda sitenin dinamikliğini yansıtan küçük animasyonlar eklidir
-"Connect/Sing in" butonuna tıklandığında dashboard ekranı açılır.
-Ekran açıldığında componentler yukarıdan aşağıya dökülerek gelir.
-"Connect/Sing in" butonu login olunduktan sonra kullanıcı bilgilerinin ve image ın bulunduğu selectbox ile değişir.
-Sayfa içerisinde de bir takım animasyonlar eklenmiştir. 
-Your Referral Link lanı copy butona tıklandıktan sonra Share butonu aktif olur.
-Share butonuna tıklandığında kopyalanmış değeri tarayıcıda yeni sekme açarak arama alanına ekler.
-Örneğin; tabloda sayfa numaralırını değiştirdiğinizde bilgiler yukardan aşağıya dökülerek gelir.
-Tablonun tüm filtreleri ve paginatin işlemleri çalışır durumdadır.
-Ayrıca header da bulunan serachbox ile tabloda 'ACCOUNT' colonuna göre arama işlemi yapmaktadır.
-Eğer logout olmadan tarayıcıdan geri gelinirse header da bulunan selectbox butonu kaybolmaz, projende çıkış yapılmaz.
-Selectbox içerisinde logout seçeneği seçildikten sonra "Connect/Sing in" butonları geri gelir. Projeden çıkış yapılır. (zustand)

##### Kurulum ve Başlatma
##### 1. Depoyu klonla

```bash
git clone https://github.com/tunayozdemir/patara-challannge.git
cd patara-challenge


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `pages/index.tsx`. 
The page auto-updates as you edit the file.
[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello).
This endpoint can be edited in `pages/api/hello.ts`.
The `pages/api` directory is mapped to `/api/*`. 
Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.
This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

##### Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

##### Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
