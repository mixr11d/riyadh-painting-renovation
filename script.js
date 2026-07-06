/**
 * ==========================================================================
 * 1. المتغيرات والبيانات الأساسية للعميل (Centralized Configuration)
 * ==========================================================================
 */
const APP_CONFIG = {
  businessName: "تصميم ديكورات وترميم الرياض",
  servicesList: "جبس بورد وورق جدران ودهانات داخلية وخارجية وباركيه هرميو SPC وساندوتش بانل وترميم وتشطيب",
  targetCity: "الرياض",
  
  // أرقام التواصل والروابط للعميل صاحب الموقع (خاضعة للتتبع بالكامل)
  localPhone: "0573747885",
  intlWhatsapp: "966573747885",
  
  // رقم المطور المخصص للمبيعات المباشرة (معزول تماماً عن التتبع الإعلاني)
  localDev: "0578539687", 
  intlDev: "966578539687",
  domain: "./",

  // تهيئة وتتبع إعلانات جوجل المباشر (Google Ads Direct Tracking)
  googleAdsId: "AW-XXXXXXXX",                        // رقم تعريف حساب الإعلانات الأساسي
  phoneConversionLabel: "PHONE_CONVERSION_LABEL",     // تسمية التحويل الخاصة بالاتصال الهاتفي
  whatsappConversionLabel: "WHATS_CONVERSION_LABEL",  // تسمية التحويل الخاصة بنقرة الواتساب
  formConversionLabel: "FORM_CONVERSION_LABEL",        // تسمية التحويل الخاصة بإرسال النموذج بنجاح
  
  // مفتاح الوصول لنموذج Web3Forms
  web3FormsKey: "XXXXXXXX"
};

/**
 * ==========================================================================
 * 2. تهيئة وتوجيه التطبيق عند تحميل المستند (DOM Init & Hydration)
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  // تهيئة وحقن مكتبة تتبع إعلانات جوجل تلقائياً بالكامل برمجياً
  initGoogleAds();

  // حقن وتحديث المكونات الديناميكية
  hydrateHeader();
  hydrateFooter();
  hydrateFloatingButtons();
  hydrateScrollToTop(); // حقن زر الصعود للأعلى برمجياً
  injectAnnouncementBar(); // حقن شريط الخصم والعروض الترويجي برمجياً

  // تشغيل الميزات التفاعلية
  initMobileMenu();
  initSmoothScroll();
  initFormHandler();
  initGlobalTracking(); // تشغيل التتبع العالمي الدقيق لروابط العميل
  initScrollTopVisibility(); // تشغيل حركة ومراقبة ظهور زر الصعود للأعلى
  updateCopyrightYear();
});

/**
 * دالة مخصصة لتحميل وتهيئة كود تتبع إعلانات جوجل الأساسي تلقائياً برمجياً
 */
function initGoogleAds() {
  if (!APP_CONFIG.googleAdsId || APP_CONFIG.googleAdsId === "AW-XXXXXXXX") return;

  // إنشاء تاق الاستدعاء الخارجي
  const gTagScript = document.createElement("script");
  gTagScript.async = true;
  gTagScript.src = `https://www.googletagmanager.com/gtag/js?id=${APP_CONFIG.googleAdsId}`;
  document.head.appendChild(gTagScript);

  // إعداد مصفوفات التتبع وتعريف دالة gtag العالمية
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  gtag('js', new Date());
  gtag('config', APP_CONFIG.googleAdsId);
}

/**
 * دالة مخصصة لعرض الإشعارات المنبثقة التفاعلية (Toast Notification)
 * @param {string} message - نص الإشعار المراد عرضه للعميل
 */
function showToast(message) {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    document.body.appendChild(toastContainer);
  }

  toastContainer.textContent = message;
  toastContainer.classList.add("show"); // تفعيل كود الـ CSS برمجياً وبطريقة نظيفة

  setTimeout(() => {
    toastContainer.classList.remove("show"); // إخفاء الإشعار
  }, 3000);
}

/**
 * دالة مخصصة لحقن شريط الإعلان والخصم برمجياً في أعلى صفحات الموقع بالكامل
 */
function injectAnnouncementBar() {
  let bar = document.querySelector(".announcement-bar");
  if (!bar) {
    bar = document.createElement("div");
    bar.className = "announcement-bar";
    bar.setAttribute("role", "banner");
    bar.innerHTML = `🎁 خصم خاص 15% للمتصلين الجدد عبر الموقع - اتصل الآن والمعاينة مجانية بالكامل!`;
    document.body.insertBefore(bar, document.body.firstChild);
  }
}

/**
 * ==========================================================================
 * 3. حقن وهدرجة المكونات (Dynamic Hydration Functions)
 * ==========================================================================
 */

// حقن وتحديث الهيدر
function hydrateHeader() {
  const headerElement = document.querySelector(".main-header");
  if (!headerElement) return;

  if (document.body.classList.contains("page-home")) {
    const logoText = headerElement.querySelector(".logo-text");
    if (logoText) logoText.textContent = APP_CONFIG.businessName;
    return;
  }

  if (headerElement.children.length === 0) {
    headerElement.innerHTML = `
      <div class="header-container">
        <div class="logo-area">
          <a href="index.html" class="logo" aria-label="الصفحة الرئيسية لتصميم ديكورات وترميم الرياض">
            <span class="logo-text">${APP_CONFIG.businessName}</span>
          </a>
        </div>
        <button class="menu-toggle" aria-expanded="false" aria-controls="main-navigation" aria-label="افتح القائمة">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <nav id="main-navigation" class="nav-menu" aria-label="القائمة الرئيسية">
          <ul class="nav-list">
            <li><a href="index.html" class="nav-link">الرئيسية</a></li>
            <li class="nav-item-dropdown">
              <a href="index.html#services" class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">خدماتنا</a>
              <ul class="dropdown-menu">
                <li><a href="gypsum.html" class="dropdown-item">جبس بورد وديكورات</a></li>
                <li><a href="walpaper.html" class="dropdown-item">ورق جدران</a></li>
                <li><a href="painting.html" class="dropdown-item">دهانات داخلية وخارجية</a></li>
                <li><a href="parquet.html" class="dropdown-item">باركيه هرميو SPC</a></li>
                <li><a href="sandwich-panel.html" class="dropdown-item">ساندوتش بانل</a></li>
                <li><a href="renovation.html" class="dropdown-item">ترميم وتشطيب مباني</a></li>
              </ul>
            </li>
            <li><a href="index.html#why-us" class="nav-link">لماذا نحن</a></li>
            <li><a href="index.html#gallery" class="nav-link">معرض الأعمال</a></li>
            <li><a href="index.html#faq" class="nav-link">الأسئلة الشائعة</a></li>
            <li><a href="contact-us.html" class="nav-link">اتصل بنا</a></li>
          </ul>
        </nav>
        <div class="header-cta">
          <a href="contact-us.html" class="cta-btn primary-cta" aria-label="طلب عرض سعر مجاني">طلب عرض سعر</a>
        </div>
      </div>
    `;
  } else {
    const logoText = headerElement.querySelector(".logo-text");
    if (logoText) logoText.textContent = APP_CONFIG.businessName;
  }
}

// حقن وتحديث الفوتر الموحد لجميع صفحات الخدمات والموقع
function hydrateFooter() {
  const footerElement = document.querySelector(".main-footer");
  if (!footerElement) return;

  if (document.body.classList.contains("page-home")) {
    const footerLogo = footerElement.querySelector(".footer-logo");
    if (footerLogo) footerLogo.textContent = APP_CONFIG.businessName;

    const footerLinks = footerElement.querySelectorAll(".footer-contact a");
    footerLinks.forEach(link => {
      if (link.href.includes("tel:")) {
        link.href = `tel:${APP_CONFIG.localPhone}`;
        link.textContent = APP_CONFIG.localPhone;
      } else if (link.href.includes("wa.me") && !link.href.includes(APP_CONFIG.intlDev)) {
        link.href = `https://wa.me/${APP_CONFIG.intlWhatsapp}`;
        link.textContent = APP_CONFIG.intlWhatsapp;
      }
    });

    const devLink = footerElement.querySelector(".developer-info a");
    if (devLink) {
      devLink.href = `https://wa.me/${APP_CONFIG.intlDev}`;
    }
    return;
  }

  if (footerElement.children.length === 0) {
    footerElement.innerHTML = `
      <div class="container footer-container">
        <div class="footer-brand">
          <span class="footer-logo">${APP_CONFIG.businessName}</span>
          <p class="footer-about">مؤسسة متخصصة في توفير حلول التشطيب الفني الفاخر والترميم المتكامل لكافة أنواع العقارات في ${APP_CONFIG.targetCity}. نتميز بالجودة، السرعة، والضمان الحقيقي.</p>
        </div>
        <div class="footer-links">
          <h4 class="footer-title">روابط سريعة</h4>
          <ul class="footer-menu">
            <li><a href="about-us.html" class="footer-link">من نحن</a></li>
            <li><a href="contact-us.html" class="footer-link">اتصل بنا</a></li>
            <li><a href="faq.html" class="footer-link">الأسئلة الشائعة</a></li>
            <li><a href="warranty.html" class="footer-link">الضمان والجودة</a></li>
            <li><a href="privacy-policy.html" class="footer-link">سياسة الخصوصية</a></li>
            <li><a href="terms-conditions.html" class="footer-link">الشروط والأحكام</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h4 class="footer-title">موقعنا والاتصال</h4>
          <p class="footer-text">المملكة العربية السعودية، منطقة ${APP_CONFIG.targetCity}</p>
          <p class="footer-text">الهاتف: <a href="tel:${APP_CONFIG.localPhone}">${APP_CONFIG.localPhone}</a></p>
          <p class="footer-text">الواتساب: <a href="https://wa.me/${APP_CONFIG.intlWhatsapp}">${APP_CONFIG.intlWhatsapp}</a></p>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container bottom-bar">
          <p class="copyrights">جميع الحقوق محفوظة &copy; <span id="current-year"></span> لـ ${APP_CONFIG.businessName}</p>
          <p class="developer-info">تطوير المواقع والإعلانات: <a href="https://wa.me/${APP_CONFIG.intlDev}" target="_blank" rel="noopener noreferrer" class="dev-link">طلب تصميم موقع مماثل</a></p>
        </div>
      </div>
    `;
  } else {
    const footerLogo = footerElement.querySelector(".footer-logo");
    if (footerLogo) footerLogo.textContent = APP_CONFIG.businessName;

    const footerLinks = footerElement.querySelectorAll(".footer-contact a");
    footerLinks.forEach(link => {
      if (link.href.includes("tel:")) {
        link.href = `tel:${APP_CONFIG.localPhone}`;
        link.textContent = APP_CONFIG.localPhone;
      } else if (link.href.includes("wa.me") && !link.href.includes(APP_CONFIG.intlDev)) {
        link.href = `https://wa.me/${APP_CONFIG.intlWhatsapp}`;
        link.textContent = APP_CONFIG.intlWhatsapp;
      }
    });

    const devLink = footerElement.querySelector(".developer-info a");
    if (devLink) {
      devLink.href = `https://wa.me/${APP_CONFIG.intlDev}`;
    }
  }
}

// حقن وتحديث الأزرار العائمة للتواصل السريع مع التوافق التام للآيفون (على اليمين)
function hydrateFloatingButtons() {
  let floatingContainer = document.querySelector(".floating-actions");
  
  if (!floatingContainer) {
    floatingContainer = document.createElement("div");
    floatingContainer.className = "floating-actions";
    floatingContainer.setAttribute("role", "region");
    floatingContainer.setAttribute("aria-label", "أزرار التواصل السريع");
    document.body.appendChild(floatingContainer);
  }

  // تم ضبط المعادلة وحذف أي قوس زائد
  floatingContainer.style.bottom = "calc(20px + env(safe-area-inset-bottom))";

  floatingContainer.innerHTML = `
    <a href="tel:${APP_CONFIG.localPhone}" class="float-btn float-phone" aria-label="اتصل بنا الآن على رقم الجوال">
      <span class="btn-text">اتصل بنا</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-phone" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    </a>
    <a href="https://wa.me/${APP_CONFIG.intlWhatsapp}" class="float-btn float-whatsapp" aria-label="تواصل معنا عبر واتساب" target="_blank" rel="noopener noreferrer">
      <span class="btn-text">واتساب</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-whatsapp" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </a>
  `;
}

// حقن زر الصعود للأعلى برمجياً على اليسار (Scroll To Top)
function hydrateScrollToTop() {
  let scrollTopBtn = document.querySe
