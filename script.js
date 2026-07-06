/**
 * ==========================================================================
 * 1. المتغيرات والبيانات الأساسية للعميل (Centralized Configuration)
 * ==========================================================================
 */
const APP_CONFIG = {
  businessName: "تصميم ديكورات وترميم الرياض",
  servicesList: "جبس بورد وورق جدران ودهانات داخلية وخارجية وباركيه هرميو SPC وساندوتش بانل وترميم وتشطيب",
  targetCity: "الرياض",
  
  // أرقام التواصل والروابط
  localPhone: "0573747885",
  intlWhatsapp: "966573747885",
  localDev: "0578539687", 
  intlDev: "966578539687",
  domain: "https://example.com",

  // أكواد التتبع والنماذج
  googleAdsId: "AW-XXXXXXXX",
  googleAnalyticsId: "G-XXXXXXXX",
  web3FormsKey: "XXXXXXXX"
};

/**
 * ==========================================================================
 * 2. تهيئة وتوجيه التطبيق عند تحميل المستند (DOM Init & Hydration)
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  // حقن وتحديث المكونات الديناميكية
  hydrateHeader();
  hydrateFooter();
  hydrateFloatingButtons();

  // تشغيل الميزات التفاعلية
  initMobileMenu();
  initSmoothScroll();
  initFormHandler();
  initGlobalTracking(); // تشغيل التتبع العالمي الدقيق
  updateCopyrightYear();
});

/**
 * دالة مخصصة لعرض الإشعارات المنبثقة التفاعلية (Toast Notification) بدلاً من alert التقليدي
 * @param {string} message - نص الإشعار المراد عرضه للعميل
 */
function showToast(message) {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    
    // تنسيق حاوية الإشعارات برمجياً لضمان التوافق المطلق
    toastContainer.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%) translateY(-20px);
      background-color: #1e2022;
      color: #ffffff;
      padding: 12px 24px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 10000;
      font-weight: bold;
      direction: rtl;
      text-align: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease, transform 0.3s ease;
    `;
    document.body.appendChild(toastContainer);
  }

  toastContainer.textContent = message;
  toastContainer.style.opacity = "1";
  toastContainer.style.transform = "translateX(-50%) translateY(0)";

  // إخفاء التنبيه تلقائياً بعد مرور 3 ثوانٍ
  setTimeout(() => {
    toastContainer.style.opacity = "0";
    toastContainer.style.transform = "translateX(-50%) translateY(-20px)";
  }, 3000);
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

  // منع إعادة رسم DOM بالكامل وإلغاء الحقن إذا كنا على الصفحة الرئيسية
  if (document.body.classList.contains("page-home")) {
    const logoText = headerElement.querySelector(".logo-text");
    if (logoText) logoText.textContent = APP_CONFIG.businessName;
    return;
  }

  // إذا كان الهيدر فارغاً في الصفحات الفرعية الأخرى، نقوم بحقنه بالكامل
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
            <li><a href="index.html" class="nav-link" aria-current="page">الرئيسية</a></li>
            <li><a href="#services" class="nav-link">خدماتنا</a></li>
            <li><a href="#why-us" class="nav-link">لماذا نحن</a></li>
            <li><a href="#gallery" class="nav-link">معرض الأعمال</a></li>
            <li><a href="#faq" class="nav-link">الأسئلة الشائعة</a></li>
            <li><a href="#contact" class="nav-link">اتصل بنا</a></li>
          </ul>
        </nav>
        <div class="header-cta">
          <a href="#contact" class="cta-btn primary-cta" aria-label="طلب عرض سعر مجاني">طلب عرض سعر</a>
        </div>
      </div>
    `;
  } else {
    const logoText = headerElement.querySelector(".logo-text");
    if (logoText) logoText.textContent = APP_CONFIG.businessName;
  }
}

// حقن وتحديث الفوتر
function hydrateFooter() {
  const footerElement = document.querySelector(".main-footer");
  if (!footerElement) return;

  // منع إعادة رسم DOM بالكامل وإلغاء الحقن إذا كنا على الصفحة الرئيسية
  if (document.body.classList.contains("page-home")) {
    const footerLogo = footerElement.querySelector(".footer-logo");
    if (footerLogo) footerLogo.textContent = APP_CONFIG.businessName;

    const footerLinks = footerElement.querySelectorAll(".footer-contact a");
    footerLinks.forEach(link => {
      if (link.href.includes("tel:")) {
        link.href = `tel:${APP_CONFIG.localPhone}`;
        link.textContent = APP_CONFIG.localPhone;
      } else if (link.href.includes("wa.me")) {
        link.href = `https://wa.me/${APP_CONFIG.intlWhatsapp}`;
        link.textContent = APP_CONFIG.intlWhatsapp;
      }
    });

    const devLinks = footerElement.querySelectorAll(".developer-info a");
    if (devLinks.length >= 2) {
      devLinks[0].href = `tel:${APP_CONFIG.localDev}`;
      devLinks[1].href = `https://wa.me/${APP_CONFIG.intlDev}`;
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
          <p class="developer-info">تطوير ودعم فني: <a href="tel:${APP_CONFIG.localDev}" class="dev-link">المطور المحلي</a> | <a href="https://wa.me/${APP_CONFIG.intlDev}" target="_blank" rel="noopener noreferrer" class="dev-link">الدعم الدولي للشركة</a></p>
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
      } else if (link.href.includes("wa.me")) {
        link.href = `https://wa.me/${APP_CONFIG.intlWhatsapp}`;
        link.textContent = APP_CONFIG.intlWhatsapp;
      }
    });

    const devLinks = footerElement.querySelectorAll(".developer-info a");
    if (devLinks.length >= 2) {
      devLinks[0].href = `tel:${APP_CONFIG.localDev}`;
      devLinks[1].href = `https://wa.me/${APP_CONFIG.intlDev}`;
    }
  }
}

// حقن وتحديث الأزرار العائمة للتواصل السريع مع التوافق التام للآيفون
function hydrateFloatingButtons() {
  let floatingContainer = document.querySelector(".floating-actions");
  
  if (!floatingContainer) {
    floatingContainer = document.createElement("div");
    floatingContainer.className = "floating-actions";
    floatingContainer.setAttribute("role", "region");
    floatingContainer.setAttribute("aria-label", "أزرار التواصل السريع");
    document.body.appendChild(floatingContainer);
  }

  // تطبيق توافق آيفون للشاشات التي تحتوي على نتوء سفلي (Safe Area Insets)
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

/**
 * ==========================================================================
 * 4. نظام القائمة المتنقلة (Mobile Menu Functionality)
 * ==========================================================================
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !isExpanded);
    navMenu.classList.toggle("nav-active");
  });

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggleBtn.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("nav-active");
    });
  });

  document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
      toggleBtn.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("nav-active");
    }
  });
}

/**
 * ==========================================================================
 * 5. التمرير السلس (Smooth Scroll Functionality)
 * ==========================================================================
 */
function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  
  internalLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 75; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset; // تم تحديث pageYOffset المتوقف برمجياً بـ scrollY

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

/**
 * ==========================================================================
 * 6. معالجة النموذج والواتساب البديل والتحقق من صحة البيانات (Form Validation & Submission)
 * ==========================================================================
 */
function initFormHandler() {
  const form = document.getElementById("quote-form");
  const submitBtn = document.getElementById("submit-btn");

  if (!form || !submitBtn) return;

  const accessKeyInput = form.querySelector('input[name="access_key"]');
  if (accessKeyInput) {
    accessKeyInput.value = APP_CONFIG.web3FormsKey;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const clientName = document.getElementById("client_name").value.trim();
    const clientPhone = document.getElementById("client_phone").value.trim();
    const serviceType = document.getElementById("service_type").value;
    const projectDetails = document.getElementById("project_details").value.trim();

    // التحقق من صحة البيانات قبل الإرسال لمنع البريد المزعج
    if (clientName.length < 3 || !clientPhone.startsWith("05") || clientPhone.length !== 10) {
      showToast("الرجاء إدخال بيانات صحيحة");
      return;
    }

    submitBtn.disabled = true;
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "جاري إرسال طلبك...";

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        showToast(`شكراً لك يا ${clientName}، تم استلام طلبك بنجاح وسيتواصل معك مهندسونا في أسرع وقت.`);
        trackConversion("form_submission");
        form.reset();
      } else {
        triggerWhatsAppFallback(clientName, clientPhone, serviceType, projectDetails);
      }
    } catch (error) {
      triggerWhatsAppFallback(clientName, clientPhone, serviceType, projectDetails);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
}

function triggerWhatsAppFallback(name, phone, service, details) {
  showToast("نعتذر عن الخطأ الفني، سيتم توجيهك للواتساب لإتمام إرسال طلبك مجاناً.");

  const formattedDetails = details ? details : "لا توجد تفاصيل إضافية";
  
  const messageText = `السلام عليكم ورحمة الله وبركاته،%0A` +
                      `أود طلب عرض سعر من خلال موقعكم الفني الإلكتروني.%0A%0A` +
                      `*الاسم الكريم:* ${encodeURIComponent(name)}%0A` +
                      `*رقم الجوال:* ${encodeURIComponent(phone)}%0A` +
                      `*الخدمة المطلوبة:* ${encodeURIComponent(service)}%0A` +
                      `*التفاصيل الإضافية:* ${encodeURIComponent(formattedDetails)}`;

  const whatsappUrl = `https://wa.me/${APP_CONFIG.intlWhatsapp}?text=${messageText}`;
  
  trackConversion("whatsapp_fallback");

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

/**
 * ==========================================================================
 * 7. نظام تتبع النقرات العالمي والمطابقة الدقيقة (Global Event-Based Tracking)
 * ==========================================================================
 */
function initGlobalTracking() {
  document.body.addEventListener("click", (e) => {
    const targetLink = e.target.closest("a");
    if (!targetLink) return;

    const hrefAttribute = targetLink.getAttribute("href") || "";

    // المطابقة التامة والشاملة للهاتف من دون includes لمنع أي تداخل
    if (hrefAttribute === "tel:" + APP_CONFIG.localPhone) {
      trackConversion("phone_call");
    }

    // المطابقة التامة والشاملة للرابط الخاص بواتساب العميل
    if (hrefAttribute === "https://wa.me/" + APP_CONFIG.intlWhatsapp) {
      trackConversion("whatsapp_chat");
    }
  });
}

/**
 * ==========================================================================
 * 8. نظام تتبع وإرسال إحداثيات التحويل ومنع التكرار (Conversion Anti-Duplication)
 * ==========================================================================
 */
function trackConversion(actionType) {
  if (typeof gtag !== "function") return;

  // التحقق لمنع إرسال التحويلات المكررة في نفس الجلسة
  if (sessionStorage.getItem("conversion_sent")) {
    return;
  }

  switch (actionType) {
    case "phone_call":
      gtag("event", "conversion", {
        "send_to": `${APP_CONFIG.googleAdsId}/phone_call_click`,
        "event_category": "Contact",
        "event_label": "Direct Call Triggered"
      });
      gtag("event", "click_phone", { "event_category": "Engagement" });
      break;

    case "whatsapp_chat":
      gtag("event", "conversion", {
        "send_to": `${APP_CONFIG.googleAdsId}/whatsapp_chat_click`,
        "event_category": "Contact",
        "event_label": "WhatsApp Chat Triggered"
      });
      gtag("event", "click_whatsapp", { "event_category": "Engagement" });
      break;

    case "form_submission":
      gtag("event", "conversion", {
        "send_to": `${APP_CONFIG.googleAdsId}/form_submit_success`,
        "event_category": "Lead",
        "event_label": "Quote Form Submitted Successfully"
      });
      gtag("event", "submit_lead_form", { "event_category": "Lead Generation" });
      break;

    case "whatsapp_fallback":
      gtag("event", "conversion", {
        "send_to": `${APP_CONFIG.googleAdsId}/whatsapp_fallback_click`,
        "event_category": "Lead",
        "event_label": "WhatsApp Fallback Triggered"
      });
      gtag("event", "submit_lead_fallback", { "event_category": "Lead Generation Fallback" });
      break;
  }

  // تخزين حالة الإرسال لمنع التكرار في الجلسة الحالية للعميل
  sessionStorage.setItem("conversion_sent", "true");
}

/**
 * ==========================================================================
 * 9. تحديث السنة تلقائياً (Copyright Auto-Update Helper)
 * ==========================================================================
 */
function updateCopyrightYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
