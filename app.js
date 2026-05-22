/**
 * GEMEL INVEST — Landing Page Config & Logic
 * ערכו פרטי קשר, מעקב ו-CRM כאן.
 */

const CONFIG = {
  brand: "GEMEL INVEST",
  tagline: "ביטוח רכב בקליק",
  phone: "03-1234567",
  phoneTel: "tel:+97231234567",
  whatsapp: "972501234567",
  whatsappMessage: "שלום, אשמח לקבל הצעת מחיר לביטוח רכב",
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
      text: "קיבלתי הצעה תוך דקות, שירות מקצועי ואדיב. ממליץ בחום!"
    },
    {
      name: "מיכל ל.",
      rating: 5,
      text: "השוויתי מחירים בקלות וחסכתי מאות שקלים בשנה. תהליך פשוט ומהיר."
    },
    {
      name: "אבי ש.",
      rating: 5,
      text: "ליווי אישי מההתחלה ועד החתימה. הרגשתי בידיים טובות לאורך כל הדרך."
    },
    {
      name: "רונית מ.",
      rating: 5,
      text: "מענה מהיר ב-WhatsApp, הסברים ברורים וללא לחץ. שירות מעולה."
    }
  ],

  faq: [
    {
      q: "כמה זמן לוקח לקבל הצעה?",
      a: "בדרך כלל תוך דקות ספורות לאחר מילוי הטופס או שיחה קצרה עם נציג. במקרים מורכבים — עד שעה."
    },
    {
      q: "האם השירות ללא התחייבות?",
      a: "כן. קבלת הצעת מחיר אינה מחייבת רכישה. אתם בוחרים רק אם ההצעה מתאימה לכם."
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
    { value: "car_mandatory", label: "ביטוח חובה" },
    { value: "car_comprehensive", label: "ביטוח מקיף" },
    { value: "car_third_party", label: "צד ג׳" },
    { value: "car_bundle", label: "חובה + מקיף" },
    { value: "other", label: "אחר" }
  ],

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
 * שליחת ליד ל-CRM / Webhook / API
 * TODO: חברו כאן את ה-endpoint האמיתי (Supabase, Make, Zapier, Webhook וכו׳)
 *
 * @example
 * await fetch("https://your-api.com/leads", {
 *   method: "POST",
 *   headers: { "Content-Type": "application/json" },
 *   body: JSON.stringify(leadData)
 * });
 */
function sendLeadToCRM(leadData) {
  console.log("[sendLeadToCRM] lead ready:", leadData);
  return Promise.resolve({ ok: true });
}

/* ─── DOM Ready ─────────────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  initContactLinks();
  initCompaniesGrid();
  initReviewsSlider();
  initFaqAccordion();
  initLeadForm();
  initTrackingPlaceholders();
  initLazyImages();
  initScrollReveal();
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

  const addressEl = document.getElementById("footerAddress");
  if (addressEl) addressEl.textContent = CONFIG.address;

  const yearEl = document.getElementById("copyrightYear");
  if (yearEl) yearEl.textContent = String(CONFIG.copyrightYear);
}

function initCompaniesGrid() {
  const grid = document.getElementById("companiesGrid");
  if (!grid) return;

  grid.innerHTML = CONFIG.insuranceCompanies
    .map(
      (name) => `
      <div class="company-card glass-card" aria-label="${name}">
        <span class="company-card__initial" aria-hidden="true">${name.charAt(0)}</span>
        <span class="company-card__name">${name}</span>
      </div>`
    )
    .join("");
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

function initLeadForm() {
  const form = document.getElementById("leadForm");
  const typeSelect = document.getElementById("insuranceType");
  if (!form || !typeSelect) return;

  typeSelect.innerHTML =
    '<option value="">בחרו סוג ביטוח</option>' +
    CONFIG.insuranceTypes.map((t) => `<option value="${t.value}">${t.label}</option>`).join("");

  const fields = {
    fullName: {
      el: document.getElementById("fullName"),
      validate: (v) => (v.trim().length >= 2 ? "" : "נא להזין שם מלא (לפחות 2 תווים)")
    },
    phone: {
      el: document.getElementById("phone"),
      validate: (v) => (/^0?5\d[\d\-]{7,9}$|^0[2-9]\d[\d\-]{6,8}$/.test(v.replace(/\s/g, "")) ? "" : "נא להזין מספר טלפון ישראלי תקין")
    },
    insuranceType: {
      el: typeSelect,
      validate: (v) => (v ? "" : "נא לבחור סוג ביטוח")
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
    fields[id].el?.addEventListener("blur", () => validateField(id));
    fields[id].el?.addEventListener("input", () => {
      if (fields[id].el.getAttribute("aria-invalid") === "true") validateField(id);
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

    const leadData = {
      fullName: fields.fullName.el.value.trim(),
      phone: fields.phone.el.value.trim(),
      insuranceType: fields.insuranceType.el.value,
      insuranceTypeLabel:
        CONFIG.insuranceTypes.find((t) => t.value === fields.insuranceType.el.value)?.label || "",
      notes: fields.notes.el.value.trim(),
      source: "landing_car_insurance",
      page: window.location.pathname,
      ...getUtmParams(),
      submittedAt: new Date().toISOString()
    };

    try {
      await sendLeadToCRM(leadData);
      trackEvent("lead_form_submit", { insuranceType: leadData.insuranceType });
      showToast("תודה! פנייתכם התקבלה. נציג יחזור אליכם בהקדם.");
      form.reset();
      Object.keys(fields).forEach((id) => showError(id, ""));
    } catch {
      showToast("אירעה שגיאה. נסו שוב או צרו קשר בטלפון.", "error");
    } finally {
      submitBtn?.classList.remove("is-loading");
      submitBtn?.removeAttribute("disabled");
      if (btnText) btnText.textContent = "שליחת בקשה";
    }
  });
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
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}
