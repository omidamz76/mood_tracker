
# 📌 **Day 2 — توسعه Feature «Mood»**

## ✅ ۱️⃣ ساختار پوشه Mood (بازطراحی شده)

* [x] مسیر زیر را بساز:

  ```
  src/
    features/
      mood/
        api/          → ارتباط با سرور
        assets/       → SVG اموجی‌ها
        components/   → EmojiPicker + MoodCard
        hooks/        → Custom hooks
        moodData.ts   → مدل‌های Emoji و Mood
        index.tsx     → صفحه اصلی
  ```

---

## ✅ ۲️⃣ طراحی دیتابیس

* [x] اگر جدول‌ها را هنوز با Prisma نسازی:

  * جدول `users`:

    ```prisma
    model User {
      id        Int      @id @default(autoincrement())
      phone     String   @unique
      dailyLogs DailyLog[]
    }
    ```

  * جدول `daily_logs`:

    ```prisma
    model DailyLog {
      id        Int      @id @default(autoincrement())
      user      User     @relation(fields: [userId], references: [id])
      userId    Int
      date      DateTime @default(now())
      mood      String
      note      String?
      createdAt DateTime @default(now())
    }
    ```

* [x] دستور ساخت مایگریشن:

  ```bash
  npx prisma migrate dev --name add_mood_tables
  ```

* [x] با `Prisma Studio` دیتا را چک کن:

  ```bash
  npx prisma studio
  ```

---

## ✅ ۳️⃣ انتقال API Route

* [x] انتقال فایل از `src/app/api/mood/route.ts` به `src/features/mood/api/route.ts`
* [x] API Route شامل:
  - POST: ثبت مود جدید
  - GET: دریافت لیست مودها

---

## ✅ ۴️⃣ تست API با Postman

* [x] اجرا کن:

  ```bash
  npm run dev
  ```
* [x] تست در Postman:

  * **Method:** POST
  * **URL:** `http://localhost:3000/api/mood`
  * **Body (JSON):**

    ```json
    {
      "userId": 1,
      "mood": "Good"
    }
    ```
* [x] بررسی:

  * پاسخ OK و دیتا در `daily_logs` ثبت شود.
  * اگر جواب گرفتید → ✅ برو مرحله بعد.
  * اگر خطا داشت → با Prisma Studio دیتابیس را چک کن.

---

## ✅ ۵️⃣ بازطراحی moodData.ts

* [x] مدل‌های جدید:

  ```ts
  export interface Emoji {
    id: number;
    label: string;
    svg: string;
    value: string;
  }

  export interface Mood {
    id: number;
    userId: number;
    mood: string;
    note?: string;
    date: Date;
    createdAt: Date;
  }
  ```

* [x] لیست اموجی‌ها با SVG های آپلود شده

---

## ✅ ۶️⃣ اضافه کردن SVG ها

* [x] فایل‌های SVG در `/assets` آپلود شده:
  - rad.svg
  - good.svg
  - meh.svg
  - bad.svg
  - awful.svg

---

## 🔄 ۷️⃣ ساخت Components (باقی‌مانده)

* [ ] **EmojiPicker**: انتخاب مود از بین اموجی‌ها
* [ ] **MoodCard**: نمایش مود ثبت‌شده
* [ ] **index.tsx**: صفحه اصلی با state management

---

## 🔄 ۸️⃣ State Management (باقی‌مانده)

* [ ] دریافت لیست اموجی از API
* [ ] نمایش اموجی‌ها به صورت گرید
* [ ] ذخیره مود انتخابی به سرور با زمان و تاریخ

---

## 🔄 ۹️⃣ تست عملکرد UI (باقی‌مانده)

* [ ] صفحه را در مرورگر باز کن:

  ```
  http://localhost:3000/mood
  ```
* [ ] انتخاب مود → دیتا در دیتابیس ثبت شود.

---

## ✅ ۱۰️⃣ ثبت Commit و Push

* [x] همه تغییرات را Add کن:

  ```bash
  git add .
  ```
* [x] Commit:

  ```bash
  git commit -m "Day 2: Mood Feature — API, DB, UI"
  ```
* [x] Push:

  ```bash
  git push origin day2
  ```

---

## 📋 خلاصه کارهای انجام شده در روز دوم:

### ✅ **انجام شده:**
1. **ساختار پوشه**: پوشه‌های mood feature ساخته شد
2. **طراحی دیتابیس**: 
   - فایل `prisma/schema.prisma` ایجاد شد
   - مدل‌های `User` و `DailyLog` تعریف شدند
   - Migration با نام `add_mood_tables` اجرا شد
3. **API Route**: 
   - فایل `src/features/mood/api/route.ts` ایجاد شد
   - Endpoint های POST و GET پیاده‌سازی شدند
4. **تست API**: 
   - با Postman تست شد
   - User اول در Prisma Studio ایجاد شد
   - API با موفقیت کار می‌کند
5. **بازطراحی moodData.ts**: 
   - مدل‌های Emoji و Mood تعریف شدند
   - لیست اموجی‌ها با SVG های آپلود شده
6. **SVG ها**: 
   - 5 فایل SVG آپلود شد
7. **Git Management**: 
   - برنچ `day2` ایجاد شد
   - تغییرات commit و push شدند

### 🔄 **باقی‌مانده:**
- ساخت UI Components (EmojiPicker, MoodCard)
- پیاده‌سازی index.tsx با state management
- تست عملکرد UI

---
**وضعیت**: ✅ API و دیتابیس آماده، UI Components باقی‌مانده

