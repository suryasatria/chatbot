# Next.js Modular Chatbot

Template antarmuka chatbot modern dan modular yang dibangun menggunakan Next.js (App Router), TypeScript, dan Tailwind CSS.

## ✨ Fitur Utama
- **Arsitektur Modular:** Logika dipisahkan (Custom Hooks) dari komponen presentasional UI.
- **Modern UI/UX:** Desain terinspirasi oleh shadcn/ui dengan animasi loading dan auto-scroll yang halus.
- **Type-Safe:** Dibangun sepenuhnya dengan TypeScript.
- **App Router API:** Dilengkapi endpoint simulasi yang siap diganti dengan Vercel AI SDK atau API nyata.

## 🚀 Cara Menjalankan Secara Lokal

1. **Clone repositori ini**
   git clone https://github.com/suryasatria/chatbot.git
   cd nextjs-modular-chatbot

2. **Instal dependensi**
   npm install

3. **Jalankan server pengembangan**
   npm run dev

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

## 📁 Struktur Folder Utama

📦 nextjs-modular-chatbot
├── 📂 app
│   ├── 📂 api
│   │   └── 📂 chat
│   │       └── 📄 route.ts        # API Endpoint simulasi
│   └── 📄 page.tsx                # Halaman utama aplikasi
├── 📂 components
│   └── 📂 chat
│       ├── 📄 ChatInput.tsx       # Komponen form input teks
│       ├── 📄 ChatLayout.tsx      # Container utama UI chatbot
│       ├── 📄 MessageBubble.tsx   # Styling gelembung pesan individu
│       └── 📄 MessageList.tsx     # Area render & scroll daftar pesan
├── 📂 hooks
│   └── 📄 useChat.ts              # State management & logika fetching (Custom Hook)
└── 📂 lib
    └── 📄 utils.ts                # Fungsi utilitas Tailwind (clsx, twMerge)
