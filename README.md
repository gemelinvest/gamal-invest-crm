# GEMEL INVEST — דף נחיתה ביטוח רכב

דף נחיתה Premium להמרת תנועה מ-Google Ads (שיחות, WhatsApp, לידים).

## קבצים

- `index.html` — מבנה הדף
- `style.css` — עיצוב
- `app.js` — לוגיקה, CONFIG, טופס, מעקב

## עריכת פרטי קשר

ערכו את האובייקט `CONFIG` בתחילת `app.js` (טלפון, WhatsApp, אימייל, כתובת, מעקב).

## חיבור CRM

בפונקציה `sendLeadToCRM` ב-`app.js` — החליפו את ה-`console.log` בקריאת API/Webhook.

## GitHub Pages

1. העלו את התיקייה ל-repo (שורש או `/docs`).
2. Settings → Pages → Source: branch `main` / folder root.
3. עדכנו את `canonical` ו-`og:url` ב-`index.html` לכתובת האתר האמיתית.

## בדיקה מקומית

פתחו `index.html` ישירות בדפדפן, או:

```bash
npx serve .
```
