# Mini-Landing

Modern, tema destekli (Light/Dark) bir mini landing page projesi.  
React, TypeScript ve Vite kullanılarak geliştirilmiştir.

## 🚀 Teknolojiler
- React
- TypeScript
- Vite
- CSS / SCSS Modules
- ESLint

## ✨ Özellikler
- Light / Dark tema desteği
- Accordion (SSS) bileşeni
- Modüler component yapısı
- Temaya duyarlı renk sistemi
- Responsive tasarım

## 📁 Proje Yapısı

```
src/
├─ assets/
├─ components/
│  ├─ Accordion/
│  ├─ Button/
│  ├─ Card/
│  ├─ Form/
│  └─ Hero/
├─ App.css
├─ App.tsx
├─ index.css
└─ main.tsx
```


## 🚀 Kurulum ve Komutlar
# Adım 1: Depoyu almak (Git Clone)
``` git clone https://github.com/Eminecanozpamuk/Mini-Landing.git cd Mini-Landing ```
# Adım 2: Bağımlılıkları yüklemek (npm install)
Proje React + TypeScript + bazı kütüphaneler kullanıyor.
Bunları bilgisayarımıza yüklemeliyiz.
Terminalde:
``` npm install ```
# Adım 3: Projeyi çalıştırmak (npm run dev)
Şimdi projeyi tarayıcıda görmek istiyoruz.
Terminalde:
``` npm run dev ```
Vite geliştirme sunucusunu başlatır
Terminal bir link verir, bu link taryıcıda açıldığında proje görülür.
## 🧪 Test & Lighthouse
**Lint:** `npm run lint` → temiz ✅
``` PS C:\Users\PC\ui-landing> npm run lint
> ui-landing@0.0.0 lint
> eslint .
```

**Test:** manuel testler→ temiz ✅
  - Accordion aç/kapa
  - ContactForm validation
  - Light/Dark toggle

**Lighthouse raporu:** performans ≥90, erişilebilirlik ≥90 (canlı deploy üzerinden)





