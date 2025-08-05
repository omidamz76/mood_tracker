# 📌 **Day 4 — توسعه Feature «Design System»**

## 🎨 ۱️⃣ ساختار پوشه Design

* [ ] مسیر زیر را بساز:

  ```
  src/
    features/
      design/
        layout/
          MainLayout.tsx    → ساختار کلی صفحه با نوار پایین
          BottomNav.tsx     → نوار ناوبری پایین برای تب‌ها
        ui/
          Button.tsx        → کامپوننت دکمه
          Card.tsx          → کامپوننت کارت
          Modal.tsx         → کامپوننت مودال
          Icon.tsx          → کامپوننت آیکون
        theme.ts            → رنگ‌ها، تایپوگرافی و فاصله‌ها
  ```

---

## 🏗️ ۲️⃣ کامپوننت MainLayout

* [ ] وظیفه: رندر محتوای هر صفحه در کنار BottomNav
* [ ] به صورت wrapper دور هر صفحه استفاده می‌شود
* [ ] Props:
  ```tsx
  interface MainLayoutProps {
    children: React.ReactNode;
    currentTab?: string;
  }
  ```

---

## 📱 ۳️⃣ کامپوننت BottomNav

* [ ] نمایش تب‌های mood, report, goals, calendar
* [ ] تب فعال مشخص می‌شود
* [ ] کاربر به سادگی بین تب‌ها حرکت می‌کند
* [ ] Props:
  ```tsx
  interface BottomNavProps {
    currentTab: string;
    onTabChange: (tab: string) => void;
  }
  ```

---

## 🎯 ۴️⃣ کامپوننت‌های UI

### Button.tsx
* [ ] انواع مختلف: primary, secondary, outline
* [ ] سایزهای مختلف: sm, md, lg
* [ ] حالت‌های مختلف: disabled, loading

### Card.tsx
* [ ] کارت‌های مختلف: default, elevated, outlined
* [ ] قابلیت padding و margin سفارشی

### Modal.tsx
* [ ] مودال‌های مختلف: info, warning, error
* [ ] قابلیت بستن با ESC یا کلیک خارج
* [ ] انیمیشن‌های smooth

### Icon.tsx
* [ ] آیکون‌های مختلف با سایزهای مختلف
* [ ] قابلیت تغییر رنگ
* [ ] قابلیت hover effects

---

## 🎨 ۵️⃣ فایل theme.ts

* [ ] رنگ‌ها:
  ```ts
  colors: {
    primary: '#3B82F6',
    secondary: '#6B7280',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    text: '#1F2937',
  }
  ```

* [ ] تایپوگرافی:
  ```ts
  typography: {
    h1: { fontSize: '2rem', fontWeight: 'bold' },
    h2: { fontSize: '1.5rem', fontWeight: 'semibold' },
    body: { fontSize: '1rem', fontWeight: 'normal' },
    caption: { fontSize: '0.875rem', fontWeight: 'normal' },
  }
  ```

* [ ] فاصله‌ها:
  ```ts
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  }
  ```

---

## 🔧 ۶️⃣ تست کامپوننت‌ها

* [ ] تست MainLayout:
  * رندر صحیح children
  * نمایش BottomNav
  * responsive design

* [ ] تست BottomNav:
  * تغییر تب‌ها
  * نمایش تب فعال
  * انیمیشن‌های smooth

* [ ] تست UI Components:
  * نمایش صحیح انواع مختلف
  * responsive در سایزهای مختلف
  * accessibility

---

## 🎯 ۷️⃣ هدف نهایی از Design System

* [ ] هماهنگی طراحی در تمام صفحات
* [ ] توسعه‌پذیری سریع برای تب‌های جدید (report, goals و ...)
* [ ] قابلیت تم‌پذیری در آینده (Dark Mode و ...)
* [ ] کاهش تکرار کد
* [ ] بهبود maintainability

---

## 📋 ۸️⃣ ثبت Commit و Push

* [ ] همه تغییرات را Add کن:

  ```bash
  git add .
  ```
* [ ] Commit:

  ```bash
  git commit -m "Day 4: Design System — Layout, UI Components, Theme"
  ```
* [ ] Push:

  ```bash
  git push origin day4
  ```

---

## 📋 خلاصه کارهای انجام شده در روز چهارم:

### 🔄 **انجام خواهد شد:**
1. **ساختار پوشه**: پوشه‌های design feature
2. **Layout Components**: 
   - MainLayout برای wrapper
   - BottomNav برای navigation
3. **UI Components**: 
   - Button, Card, Modal, Icon
4. **Theme System**: 
   - رنگ‌ها، تایپوگرافی، فاصله‌ها
5. **Testing**: 
   - تست تمام کامپوننت‌ها
6. **Git Management**: 
   - برنچ `day4` ایجاد شود
   - تغییرات commit و push شوند

### 🎯 **اهداف:**
- ایجاد design system یکپارچه
- بهبود maintainability
- آماده‌سازی برای تب‌های آینده

---
**وضعیت**: 🔄 آماده برای شروع 