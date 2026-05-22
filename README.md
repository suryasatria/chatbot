# 🤖 Next.js Modular Chatbot
Template antarmuka chatbot modern dan modular yang dibangun menggunakan **Next.js (App Router)**, **TypeScript**, dan **Tailwind CSS**.

## ✨ Fitur Utama
| Fitur | Deskripsi |
|---|---|
| 🧩 **Arsitektur Modular** | Logika dipisahkan (Custom Hooks) dari komponen presentasional UI |
| 🎨 **Modern UI/UX** | Desain terinspirasi shadcn/ui dengan animasi loading & auto-scroll halus |
| 🔒 **Type-Safe** | Dibangun sepenuhnya dengan TypeScript |
| ⚡ **App Router API** | Endpoint simulasi siap diganti Vercel AI SDK atau API nyata |

## 🚀 Cara Menjalankan Secara Lokal
**1. Clone repositori ini**
git clone https://github.com/suryasatria/chatbot.git
cd nextjs-modular-chatbot
**2. Instal dependensi**
npm install
**3. Jalankan server pengembangan**
npm run dev
**4.** Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📁 Struktur Folder
.
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts        # API endpoint simulasi
│   └── page.tsx                # Halaman utama aplikasi
│
├── components/
│   └── chat/
│       ├── ChatInput.tsx       # Komponen form input
│       ├── ChatLayout.tsx      # Container utama chatbot
│       ├── MessageBubble.tsx   # Styling gelembung pesan individu
│       └── MessageList.tsx     # Area scroll pesan
│
├── hooks/
│   └── useChat.ts              # State management & logika fetching
│
└── lib/
    └── utils.ts                # Fungsi utilitas Tailwind (clsx, twMerge)

## 🛠️ Tech Stack
- [Next.js](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
