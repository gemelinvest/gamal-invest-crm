# GEMEL INVEST — דף נחיתה ביטוחי בריאות וסיכונים

דף נחיתה Premium להמרת תנועה מ-Google Ads (שיחות, WhatsApp, לידים).

## קבצים

- `index.html` — מבנה הדף
- `style.css` — עיצוב
- `app.js` — לוגיקה, CONFIG, טופס, מעקב
- `logo.png` — לוגו המערכת
- `companies-banner.png` — קולאז' חברות ביטוח (Hero)

## חיבור ל-CRM (מקצה לקצה)

מדריך מלא בפרויקט הראשי:

`c:\gemel-invest-main\LANDING_LEAD_INTEGRATION.md`

| שלב | פעולה |
|-----|--------|
| 1 | הרץ `campaign-leads-schema.sql` + `landing-lead-ingest-rpc.sql` ב-Supabase |
| 2 | ודא ש-`CONFIG.leadIngest.secret` זהה ל-`v_secret` ב-SQL |
| 3 | שלח טופס בדיקה → CRM → **לידים מקמפיין** → שייך נציג |

קמפיין: `cmp_health_risk_landing` — ללא שיוך אוטומטי לנציג (שיוך ידני בממשק).

## עריכת פרטי קשר

ערכו את `CONFIG` בתחילת `app.js`.

## GitHub Pages

1. העלו את התיקייה ל-repo.
2. Settings → Pages → branch `main`.
3. עדכנו `canonical` ו-`og:url` ב-`index.html`.

## בדיקה מקומית

```bash
npx serve .
```
