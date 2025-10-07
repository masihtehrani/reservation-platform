# راهنمای استقرار روی GitHub Pages

## مراحل استقرار:

### 1. آماده‌سازی پروژه:
```bash
cd reservation-platform
npm run build
```

### 2. تنظیمات GitHub Repository:
1. به تنظیمات repository بروید
2. به بخش "Pages" بروید
3. Source را روی "GitHub Actions" تنظیم کنید

### 3. استقرار خودکار:
فایل `.github/workflows/deploy.yml` قبلاً ایجاد شده و به صورت خودکار کار می‌کند.

### 4. استقرار دستی:
```bash
# Build پروژه
npm run build

# Export برای GitHub Pages
npm run export

# Push به GitHub
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 5. تنظیمات دامنه (اختیاری):
اگر دامنه سفارشی دارید:
1. فایل `CNAME` در پوشه `public` ایجاد کنید
2. نام دامنه را در آن بنویسید
3. DNS را به GitHub Pages متصل کنید

## نکات مهم:
- پروژه برای GitHub Pages بهینه‌سازی شده
- فایل‌های static در پوشه `out` قرار می‌گیرند
- SEO بهینه‌سازی شده
- Schema markup اضافه شده
- Sitemap و robots.txt موجود است

## آدرس نهایی:
https://masihtehrani.github.io/reservation-platform/
