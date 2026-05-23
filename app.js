/**
 * GEMEL INVEST — Landing Page Config & Logic
 * BUILD: 20260524-health — ביטוחי בריאות וסיכונים
 */

const LANDING_BUILD = "20260524-leadform";
const LANDING_PAYLOAD_MARKER = "---LANDING_PAYLOAD---";

const CONFIG = {
  brand: "",
  tagline: "ביטוחי בריאות וסיכונים",
  phone: "04-6043579",
  phoneTel: "tel:+97246043579",
  whatsapp: "972501234567",
  whatsappMessage: "שלום, אשמח לקבל הצעת מחיר לביטוחי בריאות וסיכונים (ריסק / משכנתא / בריאות)",
  email: "info@gemel-invest.co.il",
  address: "רחוב דוגמה 1, תל אביב",
  licenseBadge: "מורשה משרד האוצר",
  copyrightYear: new Date().getFullYear(),

  insuranceCompanies: [
    "הפניקס",
    "הראל",
    "מנורה",
    "מגדל",
    "כלל",
    "איילון",
    "הכשרה",
    "AIG",
    "ביטוח ישיר",
    "ליברה",
    "שלמה",
    "ווישור"
  ],

  reviews: [
    {
      name: "דני כ.",
      rating: 5,
      text: "סידרו לי ביטוח משכנתא ברור ומשתלם. הסברים מדויקים וללא לחץ — ממליץ בחום!"
    },
    {
      name: "מיכל ל.",
      rating: 5,
      text: "השוויתי ביטוח בריאות פרטי בין כמה חברות וחסכתי משמעותית. תהליך מהיר ונעים."
    },
    {
      name: "אבי ש.",
      rating: 5,
      text: "ליווי אישי בביטוח ריסק למשפחה. הרגשתי בידיים מקצועיות מההתחלה ועד החתימה."
    },
    {
      name: "רונית מ.",
      rating: 5,
      text: "מענה מהיר ב-WhatsApp, ענו על כל השאלות על כיסוי בריאות ומשלים. שירות מעולה."
    },
    {
      name: "יוסי מ.",
      rating: 5,
      text: "קבלתי הצעה תחרותית לריסק חיים תוך זמן קצר. שקיפות מלאה במחיר ובתנאים."
    },
    {
      name: "שירה א.",
      rating: 5,
      text: "איחדו לי משכנתא ובריאות במקום אחד — חסכתי זמן. נציגה סבלנית ומקצועית, ממליצה!"
    }
  ],

  faq: [
    {
      q: "כמה זמן לוקח לקבל הצעה?",
      a: "בדרך כלל תוך דקות ספורות לאחר מילוי הטופס או שיחה קצרה עם נציג. בביטוחי בריאות וריסק — לעיתים עד שעה, תלוי בפרטים."
    },
    {
      q: "האם השירות ללא התחייבות?",
      a: "כן. קבלת הצעת מחיר אינה מחייבת רכישה. אתם בוחרים רק אם ההצעה מתאימה לכם."
    },
    {
      q: "מה ההבדל בין ריסק חיים לביטוח משכנתא?",
      a: "ביטוח ריסק חיים מגן על המשפחה במקרה פטירה. ביטוח משכנתא (ריסק למשכנתא) מיועד לכיסוי יתרת ההלוואה לפי דרישות הבנק — ניתן לייעץ על שילוב נכון בין השניים."
    },
    {
      q: "האם ניתן לבדוק גם ביטוח בריאות קיים?",
      a: "כן. ניתן להשוות ביטוח בריאות פרטי, משלים או קבוצתי מול הכיסוי הקיים — ולהמליץ על שדרוג או מעבר רק אם זה משתלם."
    },
    {
      q: "מול אילו חברות אתם עובדים?",
      a: "אנו עובדים מול מיטב חברות הביטוח בישראל, כולל הפניקס, הראל, מנורה, מגדל, כלל, איילון ועוד."
    },
    {
      q: "האם ניתן לבצע הכל טלפונית?",
      a: "בהחלט. ניתן להשלים את כל התהליך בטלפון, ב-WhatsApp או בטופס באתר — לפי הנוחות שלכם."
    }
  ],

  insuranceTypes: [
    { value: "life_risk", label: "ביטוח ריסק חיים" },
    { value: "mortgage_risk", label: "ביטוח משכנתא (ריסק)" },
    { value: "health_private", label: "ביטוח בריאות פרטי" },
    { value: "critical_illness", label: "ביטוח מחלות קשות" },
    { value: "cancer", label: "ביטוח סרטן" },
    { value: "disability", label: "אובדן כושר עבודה" },
    { value: "consultation", label: "ייעוץ / לא בטוח — צרו קשר" }
  ],

  submitButtonLabel: "שליחת פנייה",
  thankYouAutoCloseMs: 5000,

  /**
   * קליטת ליד ל-CRM (campaign_leads)
   * mode: "rpc" — הרץ landing-lead-ingest-rpc.sql ב-Supabase (בלי Deploy)
   * mode: "edge" — אחרי supabase functions deploy landing-lead
   *
   * מסונכרן עם gemel-invest-main/supabase/landing-ingest-defaults.json
   * שיוך אוטומטי לנציג: כבוי — ראו LANDING_LEAD_INTEGRATION.md
   */
  leadIngest: {
    mode: "rpc",
    endpoint: "https://vhvlkerectggovfihjgm.supabase.co/rest/v1/rpc/ingest_landing_lead",
    /** מפתח publishable (מותר בדף נחיתה) — כמו ב-CRM */
    supabaseAnonKey: "sb_publishable_JixJJelGPWcP0BPKGq96Lw_nIiMyIBb",
    /** אותה סיסמה שהגדרת ב-SQL (v_secret) */
    secret: "aria1990",
    campaignId: "cmp_health_risk_landing",
    campaignLabel: "ביטוחי בריאות וסיכונים — דף נחיתה",
    edgeUrl: "https://vhvlkerectggovfihjgm.supabase.co/functions/v1/landing-lead"
  },

  /** Placeholders — החליפו ב-ID אמיתיים לפני עלייה לאוויר */
  tracking: {
    googleAnalyticsId: "G-XXXXXXXXXX",
    googleTagManagerId: "GTM-XXXXXXX",
    googleAdsConversionId: "AW-XXXXXXXXX",
    googleAdsConversionLabel: "CONVERSION_LABEL",
    metaPixelId: "XXXXXXXXXXXXXXX",
    callTrackingNumber: ""
  }
};

/* ─── Tracking ─────────────────────────────────────────────── */

/**
 * @param {string} eventName
 * @param {Record<string, unknown>} [data]
 */
function trackEvent(eventName, data = {}) {
  const payload = { event: eventName, ...data, ts: Date.now() };

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, data);
  }
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({ event: eventName, ...data });
  }
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, data);
  }

  if (CONFIG.tracking.callTrackingNumber && eventName === "phone_click") {
    payload.callTracking = CONFIG.tracking.callTrackingNumber;
  }

  console.info("[trackEvent]", payload);
}

/* ─── UTM ──────────────────────────────────────────────────── */

function getUtmParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_term: params.get("utm_term") || "",
    utm_content: params.get("utm_content") || ""
  };
}

/* ─── CRM (placeholder) ──────────────────────────────────────── */

/**
 * שליחת ליד לטבלת campaign_leads (Edge Function landing-lead)
 * @param {object} leadData — מהטופס + UTM
 */
async function sendLeadToCRM(leadData) {
  const ingest = CONFIG.leadIngest || {};
  const mode = safeTrim(ingest.mode) || "rpc";
  const secret = safeTrim(ingest.secret);

  if (!secret) {
    console.warn("[sendLeadToCRM] חסר secret — הגדירו CONFIG.leadIngest.secret");
    console.log("[sendLeadToCRM] lead (dry-run):", leadData);
    throw new Error("not_configured");
  }

  const notesHuman = [
    leadData.notes ? "הערות: " + leadData.notes : "",
    leadData.idNumber ? "ת.ז.: " + leadData.idNumber : "",
    leadData.insuranceTypeLabels?.length
      ? "ביטוחים: " + leadData.insuranceTypeLabels.join(", ")
      : ""
  ]
    .filter(Boolean)
    .join("\n");

  const payload = {
    phone: leadData.phone,
    customer_name: leadData.fullName,
    id_number: leadData.idNumber,
    insurance_type: (leadData.insuranceTypes || []).join(","),
    insurance_type_label: (leadData.insuranceTypeLabels || []).join(" · "),
    notes: [notesHuman, buildLandingPayloadBlock(leadData)].filter(Boolean).join("\n\n"),
    campaign_id: ingest.campaignId,
    campaign_label: ingest.campaignLabel,
    utm_source: leadData.utm_source,
    utm_campaign: leadData.utm_campaign,
    utm_medium: leadData.utm_medium,
    utm_term: leadData.utm_term,
    utm_content: leadData.utm_content,
    page: leadData.page
  };

  let endpoint;
  let headers;
  let body;

  if (mode === "edge") {
    endpoint = safeTrim(ingest.edgeUrl || ingest.endpoint);
    if (!endpoint) throw new Error("not_configured");
    headers = {
      "Content-Type": "application/json",
      "x-landing-secret": secret
    };
    body = JSON.stringify(payload);
  } else {
    endpoint = safeTrim(ingest.endpoint);
    const anonKey = safeTrim(ingest.supabaseAnonKey);
    if (!endpoint || !anonKey) throw new Error("not_configured");
    headers = {
      "Content-Type": "application/json",
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`
    };
    body = JSON.stringify({
      payload: {
        ...payload,
        secret,
        phone: String(payload.phone || "").replace(/\D+/g, "").slice(0, 10)
      }
    });
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers,
    body
  });

  let data = {};
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  console.info("[sendLeadToCRM] response", res.status, data);

  if (!res.ok) {
    const msg = data.message || data.error || data.hint || "http_" + res.status;
    console.error("[sendLeadToCRM] HTTP failed", res.status, data);
    throw new Error(msg);
  }
  if (data && data.ok === false) {
    console.error("[sendLeadToCRM] RPC failed", data);
    throw new Error(data.error || data.detail || "lead_submit_failed");
  }
  if (data && (data.ok === true || safeTrim(data.id).startsWith("cl_"))) {
    console.info("[sendLeadToCRM] created", data.id);
    return data;
  }

  console.error("[sendLeadToCRM] unexpected response", data);
  throw new Error("unexpected_response");
}

function safeTrim(v) {
  return String(v ?? "").trim();
}

function normalizeIdDigits(v) {
  return String(v ?? "").replace(/\D+/g, "").slice(0, 9);
}

function isValidIsraeliId(value) {
  const id = normalizeIdDigits(value);
  if (!/^\d{9}$/.test(id)) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    let n = Number(id[i]) * ((i % 2) + 1);
    if (n > 9) n -= 9;
    sum += n;
  }
  return sum % 10 === 0;
}

function buildLandingPayloadBlock(leadData) {
  return (
    LANDING_PAYLOAD_MARKER +
    "\n" +
    JSON.stringify({
      fullName: leadData.fullName,
      idNumber: leadData.idNumber,
      phone: leadData.phone,
      insuranceTypes: leadData.insuranceTypes,
      insuranceTypeLabels: leadData.insuranceTypeLabels,
      notes: leadData.notes,
      submittedAt: leadData.submittedAt
    })
  );
}

function escapeHtml(v) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ─── DOM Ready ─────────────────────────────────────────────── */

function runInit(name, fn) {
  try {
    fn();
  } catch (err) {
    console.error("[GEMEL Landing] init failed:", name, err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("landing-js");
  console.info("[GEMEL Landing]", LANDING_BUILD);

  runInit("scrollReveal", initScrollReveal);

  const thankOverlay = document.getElementById("thankOverlay");
  thankOverlay
    ?.querySelector(".thank-overlay__backdrop")
    ?.addEventListener("click", hideThankYouSuccess);

  runInit("contact", initContactLinks);
  runInit("reviews", initReviewsSlider);
  runInit("faq", initFaqAccordion);
  runInit("leadForm", initLeadForm);
  runInit("tracking", initTrackingPlaceholders);
  runInit("lazyImages", initLazyImages);
});

function initContactLinks() {
  const phoneEls = document.querySelectorAll("[data-phone]");
  const waEls = document.querySelectorAll("[data-whatsapp]");
  const emailEls = document.querySelectorAll("[data-email]");

  phoneEls.forEach((el) => {
    el.href = CONFIG.phoneTel;
    el.textContent = el.dataset.phoneDisplay || CONFIG.phone;
    el.addEventListener("click", () =>
      trackEvent("phone_click", { location: el.dataset.trackLocation || "unknown" })
    );
  });

  const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
  waEls.forEach((el) => {
    el.href = waUrl;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
    el.addEventListener("click", () =>
      trackEvent("whatsapp_click", { location: el.dataset.trackLocation || "unknown" })
    );
  });

  emailEls.forEach((el) => {
    el.href = `mailto:${CONFIG.email}`;
    el.textContent = CONFIG.email;
  });


  const yearEl = document.getElementById("copyrightYear");
  if (yearEl) yearEl.textContent = String(CONFIG.copyrightYear);
}

function initReviewsSlider() {
  const track = document.getElementById("reviewsTrack");
  const dots = document.getElementById("reviewsDots");
  const prev = document.getElementById("reviewsPrev");
  const next = document.getElementById("reviewsNext");
  if (!track || !dots) return;

  let index = 0;

  const renderStars = (n) =>
    "★".repeat(n) + '<span class="review-card__stars-muted">' + "☆".repeat(5 - n) + "</span>";

  track.innerHTML = CONFIG.reviews
    .map(
      (r, i) => `
      <article class="review-card glass-card" data-index="${i}" aria-roledescription="slide">
        <div class="review-card__stars" aria-label="דירוג ${r.rating} מתוך 5">${renderStars(r.rating)}</div>
        <p class="review-card__text">"${r.text}"</p>
        <footer class="review-card__author">— ${r.name}</footer>
      </article>`
    )
    .join("");

  dots.innerHTML = CONFIG.reviews
    .map((_, i) => `<button type="button" class="reviews__dot${i === 0 ? " is-active" : ""}" data-dot="${i}" aria-label="ביקורת ${i + 1}"></button>`)
    .join("");

  const cards = () => track.querySelectorAll(".review-card");
  const dotBtns = () => dots.querySelectorAll(".reviews__dot");

  function goTo(i) {
    index = (i + CONFIG.reviews.length) % CONFIG.reviews.length;
    track.style.transform = `translateX(${-index * 100}%)`;
    dotBtns().forEach((d, j) => d.classList.toggle("is-active", j === index));
  }

  prev?.addEventListener("click", () => goTo(index - 1));
  next?.addEventListener("click", () => goTo(index + 1));
  dots.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-dot]");
    if (btn) goTo(Number(btn.dataset.dot));
  });

  let autoplay = setInterval(() => goTo(index + 1), 6000);
  track.addEventListener("mouseenter", () => clearInterval(autoplay));
  track.addEventListener("mouseleave", () => {
    autoplay = setInterval(() => goTo(index + 1), 6000);
  });

  goTo(0);
}

function initFaqAccordion() {
  const root = document.getElementById("faqList");
  if (!root) return;

  root.innerHTML = CONFIG.faq
    .map(
      (item, i) => `
      <div class="faq-item glass-card">
        <button type="button" class="faq-item__trigger" id="faq-trigger-${i}" aria-expanded="false" aria-controls="faq-panel-${i}">
          <span>${item.q}</span>
          <span class="faq-item__icon" aria-hidden="true"></span>
        </button>
        <div class="faq-item__panel" id="faq-panel-${i}" role="region" aria-labelledby="faq-trigger-${i}" hidden>
          <p>${item.a}</p>
        </div>
      </div>`
    )
    .join("");

  root.querySelectorAll(".faq-item__trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.hidden = expanded;
      btn.closest(".faq-item")?.classList.toggle("is-open", !expanded);
    });
  });
}

function getSelectedInsuranceTypes() {
  const list = document.getElementById("insuranceTypesList");
  if (!list) return [];
  return Array.from(list.querySelectorAll('input[type="checkbox"]:checked')).map((el) => el.value);
}

function initLeadForm() {
  const form = document.getElementById("leadForm");
  const typesList = document.getElementById("insuranceTypesList");
  if (!form || !typesList) return;

  typesList.innerHTML = CONFIG.insuranceTypes
    .filter((t) => t.value !== "consultation")
    .map(
      (t) =>
        `<label><input type="checkbox" name="insuranceTypes" value="${t.value}" /> ${t.label}</label>`
    )
    .join("");

  const fields = {
    fullName: {
      el: document.getElementById("fullName"),
      validate: (v) => (v.trim().length >= 2 ? "" : "נא להזין שם מלא (לפחות 2 תווים)")
    },
    idNumber: {
      el: document.getElementById("idNumber"),
      validate: (v) => (isValidIsraeliId(v) ? "" : "נא להזין תעודת זהות ישראלית תקינה")
    },
    phone: {
      el: document.getElementById("phone"),
      validate: (v) => (/^0?5\d[\d\-]{7,9}$|^0[2-9]\d[\d\-]{6,8}$/.test(v.replace(/\s/g, "")) ? "" : "נא להזין מספר טלפון ישראלי תקין")
    },
    insuranceTypes: {
      el: typesList,
      validate: () => (getSelectedInsuranceTypes().length ? "" : "נא לבחור לפחות סוג ביטוח אחד")
    },
    notes: {
      el: document.getElementById("notes"),
      validate: () => ""
    }
  };

  function showError(id, msg) {
    const err = document.getElementById(`error-${id}`);
    const input = fields[id]?.el;
    if (err) err.textContent = msg;
    if (input) input.setAttribute("aria-invalid", msg ? "true" : "false");
    input?.closest(".form-field")?.classList.toggle("has-error", Boolean(msg));
  }

  function validateField(id) {
    const f = fields[id];
    if (!f?.el) return true;
    const msg = f.validate(f.el.value);
    showError(id, msg);
    return !msg;
  }

  Object.keys(fields).forEach((id) => {
    if (id === "insuranceTypes") {
      typesList.addEventListener("change", () => validateField(id));
      return;
    }
    fields[id].el?.addEventListener("blur", () => validateField(id));
    fields[id].el?.addEventListener("input", () => {
      if (fields[id].el?.getAttribute("aria-invalid") === "true") validateField(id);
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const valid = Object.keys(fields).every(validateField);
    if (!valid) return;

    const submitBtn = document.getElementById("leadSubmit");
    const btnText = submitBtn?.querySelector(".btn__text");
    submitBtn?.classList.add("is-loading");
    submitBtn?.setAttribute("disabled", "true");
    if (btnText) btnText.textContent = "שולח...";

    const selected = getSelectedInsuranceTypes();
    const insuranceTypeLabels = selected.map(
      (v) => CONFIG.insuranceTypes.find((t) => t.value === v)?.label || v
    );

    const leadData = {
      fullName: fields.fullName.el.value.trim(),
      idNumber: normalizeIdDigits(fields.idNumber.el.value),
      phone: fields.phone.el.value.trim(),
      insuranceTypes: selected,
      insuranceTypeLabels,
      notes: fields.notes.el.value.trim(),
      source: "landing_health_risk_insurance",
      page: window.location.pathname,
      ...getUtmParams(),
      submittedAt: new Date().toISOString()
    };

    try {
      await sendLeadToCRM(leadData);
      trackEvent("lead_form_submit", { insuranceTypes: selected.join(",") });
      showThankYouSuccess(leadData.fullName);
      form.reset();
      Object.keys(fields).forEach((id) => showError(id, ""));
    } catch (err) {
      console.error("[leadForm]", err);
      const code = safeTrim(err?.message);
      const msg =
        code === "not_configured"
          ? "חיבור CRM לא הוגדר — בדקו secret ב-app.js"
          : code === "unauthorized"
            ? "שגיאת הרשאה — בדקו שהסיסמה ב-app.js זהה ל-SQL"
            : code === "invalid_phone"
              ? "מספר טלפון לא תקין"
              : "אירעה שגיאה — " + (code || "unknown");
      showToast(msg, code === "not_configured" ? "warn" : "error");
    } finally {
      submitBtn?.classList.remove("is-loading");
      submitBtn?.removeAttribute("disabled");
      if (btnText) btnText.textContent = CONFIG.submitButtonLabel || "קבל הצעה בקליק";
    }
  });

  const btnTextInit = submitBtn?.querySelector(".btn__text");
  if (btnTextInit) btnTextInit.textContent = CONFIG.submitButtonLabel || "קבל הצעה בקליק";
}

let thankYouCloseTimer = null;

function showThankYouSuccess(customerName) {
  const overlay = document.getElementById("thankOverlay");
  const nameEl = document.getElementById("thankCustomerName");
  if (!overlay) return;

  if (nameEl) nameEl.textContent = safeTrim(customerName) || "שובך";
  overlay.hidden = false;
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("thank-open");

  requestAnimationFrame(() => {
    overlay.classList.add("is-visible");
  });

  clearTimeout(thankYouCloseTimer);
  thankYouCloseTimer = setTimeout(
    () => hideThankYouSuccess(),
    CONFIG.thankYouAutoCloseMs || 5000
  );
}

function hideThankYouSuccess() {
  const overlay = document.getElementById("thankOverlay");
  if (!overlay) return;

  overlay.classList.remove("is-visible");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("thank-open");

  clearTimeout(thankYouCloseTimer);
  thankYouCloseTimer = setTimeout(() => {
    overlay.hidden = true;
  }, 450);
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.className = `toast is-visible toast--${type}`;
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 5000);
}

function initTrackingPlaceholders() {
  const t = CONFIG.tracking;
  if (t.googleTagManagerId && !t.googleTagManagerId.includes("XXXX")) {
    const s = document.createElement("script");
    s.textContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${t.googleTagManagerId}');`;
    document.head.appendChild(s);
  }
  /* GA4, Google Ads, Meta Pixel — הוסיפו סקריפטים כאן כשיש ID אמיתי */
}

function initLazyImages() {
  const imgs = document.querySelectorAll("img[loading='lazy']");
  if ("loading" in HTMLImageElement.prototype) return;
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
      }
      obs.unobserve(img);
    });
  });
  imgs.forEach((img) => io.observe(img));
}

function initScrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const showAll = () => els.forEach((el) => el.classList.add("is-visible"));

  if (!("IntersectionObserver" in window)) {
    showAll();
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px 0px 0px" }
  );

  els.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("is-visible");
    }
    io.observe(el);
  });

  window.setTimeout(showAll, 1200);
}
