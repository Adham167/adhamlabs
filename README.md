# Portfolio & Academic Archive

موقع شخصي سريع مبني بـ **Astro 5 + Tailwind CSS 4**، ينتج HTML ثابت (بدون JavaScript تقريباً)، ويدعم Dark/Light Mode، ومتجاوب بالكامل، وجاهز لمحركات البحث (SEO + sitemap + Open Graph + JSON-LD).

## الهيكلية

```
portfolio/
├── .github/workflows/deploy.yml   # نشر تلقائي على GitHub Pages
├── public/                        # ملفات ثابتة (favicon, images/)
│   └── images/                    # ضع صور المشاريع هنا
├── src/
│   ├── content.config.ts          # Schema لكل المحتوى (مهم!)
│   ├── content/
│   │   ├── projects/*.md          # ملف لكل مشروع
│   │   └── learning/*.md          # ملف لكل درس/كورس/تاسك
│   ├── data/site.ts               # بياناتك الشخصية، المهارات، الروابط
│   ├── layouts/Base.astro         # القالب العام + SEO + الثيم
│   ├── components/                # ProjectCard, NoteRow
│   ├── lib/video.ts               # تحويل روابط YouTube
│   ├── pages/                     # index, projects, learning, contact, 404
│   └── styles/global.css          # ألوان الثيم (متغيرات CSS)
├── astro.config.mjs
└── package.json
```

## التشغيل محلياً

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # يبني النسخة النهائية في dist/
npm run preview
```
يلزم Node.js 18.20 أو أحدث.

## الخطوة 1: تخصيص بياناتك

1. عدّل `src/data/site.ts`: الاسم، النبذة، الإيميل، روابط GitHub وLinkedIn، المهارات.
2. عدّل `site:` في `astro.config.mjs` إلى رابط موقعك النهائي.
3. استبدل `public/favicon.svg` وضع صورة المشاركة `public/images/og.png` بمقاس 1200×630.
4. احذف ملفات `example-*.md` بعد أن تضيف محتواك.

## الخطوة 2: إضافة محتوى

### مشروع جديد: أنشئ `src/content/projects/my-app.md`

```md
---
title: "My App"
type: "app"                 # app | graduation
role: "Full-stack developer"
date: 2026-10-01
description: "جملة أو جملتان (حد أقصى 240 حرفاً)"
techStack: ["Flutter", "Firebase"]
githubUrl: "https://github.com/you/my-app"
demoUrl: "https://my-app.vercel.app"          # اختياري
demoVideo: "https://youtu.be/XXXXXXXXXXX"     # اختياري
featuredImage: "/images/my-app.png"           # الصورة في public/images/
architectureImage: "/images/my-app-arch.png"  # اختياري
featured: false                               # true = يظهر أولاً في الرئيسية
draft: false                                  # true = مخفي
---
اكتب هنا الوصف التقني والمعمارية بصيغة Markdown.
```

### درس/كورس/تاسك: أنشئ `src/content/learning/2026-10-10-topic.md`

```md
---
title: "عنوان الدرس"
date: 2026-10-10
category: "lesson"          # course | lesson | daily-task
summary: "ملخص قصير"
tags: ["python", "oop"]
videoUrl: "https://youtu.be/XXXXXXXXXXX"      # اختياري
---
المحتوى بصيغة Markdown (عناوين، كود، قوائم، صور).
```

إذا أخطأت في اسم حقل أو نوعه، سيعرض Astro رسالة خطأ واضحة أثناء `npm run dev`، فلن ينشر موقعك بيانات ناقصة.

### إضافة قيمة تصنيف جديدة
عدّل `category: z.enum([...])` في `src/content.config.ts` ثم أضف التسمية في `categoryLabels` داخل `src/data/site.ts`.

## الخطوة 3: الرفع على GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git push -u origin main
```

## الخطوة 4أ: النشر على Vercel (الأسهل)

1. ادخل إلى vercel.com وسجّل بحساب GitHub.
2. اضغط **Add New → Project** واختر المستودع.
3. Vercel يتعرف على Astro تلقائياً. اضغط **Deploy**.
4. كل `git push` بعد ذلك ينشر تلقائياً. حدّث `site:` في `astro.config.mjs` إلى رابط `.vercel.app` أو نطاقك الخاص.

## الخطوة 4ب: النشر على GitHub Pages

1. سمّ المستودع `USERNAME.github.io` (ليعمل الموقع بدون مسار فرعي).
2. من **Settings → Pages → Build and deployment → Source** اختر **GitHub Actions**.
3. اضبط `site: 'https://USERNAME.github.io'` في `astro.config.mjs`.
4. بعد أي `git push` على `main` يعمل ملف `deploy.yml` وينشر الموقع خلال دقيقة تقريباً.

> لو سمّيت المستودع باسم آخر، أضف `base: '/اسم-المستودع'` في `astro.config.mjs`، وغيّر الروابط الداخلية التي تبدأ بـ `/` لتشمل هذا المسار.

## نموذج التواصل

الافتراضي يفتح برنامج البريد لديك. لاستقبال الرسائل مباشرة: أنشئ نموذجاً مجانياً في formspree.io وضع الـ ID في `formspreeId` داخل `src/data/site.ts`.

## تعديل الألوان

كل الألوان متغيرات في أعلى `src/styles/global.css` (`:root` للوضع الفاتح و`.dark` للداكن). غيّر `--accent` لتغيير لون الهوية.

## سير العمل اليومي

1. أنشئ ملف `.md` جديد في `src/content/learning/`.
2. `git add . && git commit -m "Add lesson" && git push`.
3. بعد دقيقة يظهر في الموقع.
