# OMBOR QOLDIQLARI — Onlayn Versiya

## Bu nima?
Bir necha kishi bir vaqtda ishlata oladigan ombor boshqaruv tizimi.
Telefon, iPad, kompyuterda — hammasi bir xil ma'lumotni ko'radi va o'zgartira oladi.

---

## O'RNATISH (10 daqiqa, bepul)

### 1-qadam: GitHub da ro'yxatdan o'ting
1. https://github.com oching
2. "Sign Up" bosib akkaunt yarating (bepul)

### 2-qadam: Kodni GitHub ga yuklang
1. GitHub da "New repository" bosing
2. Nom: `ombor-bot`
3. "Create repository" bosing
4. Shu papkadagi barcha fayllarni yuklang (Upload files)

### 3-qadam: Render.com da deploy qiling (BEPUL hosting)
1. https://render.com oching — Google bilan kirish mumkin
2. "New +" → "Web Service" bosing
3. GitHub akkauntingizni ulang → `ombor-bot` repositoryni tanlang
4. Quyidagilarni to'ldiring:
   - Name: `ombor-bot`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. "Create Web Service" bosing
6. Biroz kutish kerak (2-3 daqiqa)
7. Sizga link beriladi: `https://ombor-bot-xxxx.onrender.com`

### 4-qadam: Linkni ulashing
Shu linkni Telegram orqali skladdagi bolaga yuboring.
iPad yoki telefondan Safari/Chrome da ochsa — ishlaydi!

---

## ISHLATISH
- **+ tugma** — tavar kirim (ombor ko'payadi)
- **− tugma** → tavar sotildi (ombor kamayadi)
- **Mahsulotga bosing** → katta oyna ochiladi, aniq miqdor kiritsa bo'ladi
- **Excel** tugmasi → hisobot yuklab olish
- O'zgarishlar **15 soniyada** avtomatik yangilanadi

## FOYDALANUVCHI NOMI
Har kim o'z ismini kiriting — tarixda kim nima qilganini ko'rish uchun.

---

## MUAMMOLAR

**Server ulanmaydi?**
- Render.com da free plan 15 daqiqa ishlatilmasa "uxlaydi"
- Birinchi ochilganda 30-60 soniya kutish kerak (server uyg'onadi)

**Ma'lumotlar o'chib ketdimi?**
- Render.com free planda disk ma'lumotlari vaqti-vaqti bilan o'chirilishi mumkin
- Muhim ma'lumotlarni Excel ga yuklab oling!

**Ishonchli saqlash uchun:**
Keyinchalik PostgreSQL yoki MongoDB ulash mumkin (bepul tier bor).

---

## FAYL TUZILISHI
```
ombor-bot/
├── server.js          ← Backend (Node.js)
├── package.json       ← Kutubxonalar
├── data/              ← Ma'lumotlar (avtomatik yaratiladi)
│   ├── stock.json
│   └── history.json
└── public/
    └── index.html     ← Frontend (siz ko'radigan sahifa)
```
