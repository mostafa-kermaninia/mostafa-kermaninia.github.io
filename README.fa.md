# پرتفولیوی مصطفی کرمانی‌نیا

وب‌سایت شخصی برای معرفی پروژه‌های Applied AI، بازیابی اطلاعات، سیستم‌های داده و مهندسی محصول، همراه با سوابق پژوهش و تدریس.

[مشاهدهٔ سایت](https://mostafa-kermaninia.github.io/) · [رزومه](https://mostafa-kermaninia.github.io/assets/download/CV.pdf) · [راهنمای کامل انگلیسی](README.md)

## اجرا

Node.js نسخهٔ ۲۲ یا بالاتر کافی است؛ نصب وابستگی لازم نیست.

```sh
npm run dev
```

آدرس محلی: `http://127.0.0.1:8080`. بعد از تغییر فایل‌های منبع، `npm run build` را اجرا و صفحه را تازه کنید.

## ویرایش و بررسی

- اطلاعات و پروژه‌ها: `src/content.mjs`
- قالب صفحه‌ها: `src/render.mjs`
- ظاهر: `src/styles.css`
- تعامل‌ها: `src/site.js`
- رزومهٔ اصلی: `public/assets/download/CV.pdf`

```sh
npm run check
npm test
npm run build
```

سورس در `main` و خروجی انتشار در `gh-pages` است. دامنه و میزبانی قبلی حفظ شده‌اند. راهنمای انتشار و بازگشت به نسخهٔ قبل در [DEPLOYMENT.md](docs/DEPLOYMENT.md) آمده است. گردش کار GitHub فقط بررسی‌ها را اجرا می‌کند؛ انتشار خودکار نیست.
