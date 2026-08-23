/**
 * ==========================================================================
 * 1. المتغيرات والبيانات الأساسية للعميل (Centralized Configuration)
 * ==========================================================================
 */
const APP_CONFIG = {
  businessName: "تصميم ديكورات وترميم الرياض",
  servicesList: "بديل الشيبورد وتكسيات الجدران وجبس بورد وورق جدران ودهانات داخلية وخارجية وباركيه هرمي و SPC وساندوتش بانل وترميم وتشطيب",
  targetCity: "الرياض",
  
  // أرقام التواصل والروابط للعميل صاحب الموقع
  localPhone: "0573747885",
  intlWhatsapp: "966573747885",
  
  // رقم المطور المخصص للمبيعات المباشرة
  localDev: "0578539687", 
  intlDev: "966578539687",
  domain: "./",

  // تهيئة وتتبع إعلانات قوقل المباشر
  googleAdsId: "AW-18392668429",                        
  phoneConversionLabel: "weYpCOiD3OUcEI2yp8JE",     
  whatsappConversionLabel: "CSLTCMqJ3OUcEI2yp8JE",  
  formConversionLabel: "xVshCImvmOYcEI2yp8JE",        

  // قيم التحويلات المحددة بالريال السعودي
  valCall: 70,                  // قيمة تحويل الاتصال الهاتفي
  valWhatsapp: 40,              // قيمة تحويل مراسلة الواتساب
  valForm: 100,                 // قيمة تحويل تعبئة نموذج المعاينة
  
  // مفتاح الوصول لنموذج Web3Forms
  web3FormsKey: "XXXXXXXX"
};

/**
 * ==========================================================================
 * 2. تهيئة وتوجيه التطبيق عند تحميل المستند (DOM Init & Hydration)
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
  initGoogleAds();

  // حقن وتحديث المكونات الديناميكية في كافة الصفحات
  hydrateHeader();
  hydrateFooter();
  hydrateFloatingButtons();
  hydrateScrollToTop(); 
  injectAnnouncementBar(); 

  // تشغيل الميزات التفاعلية
  initMobileMenu();
  initDropdownToggle(); 
  initSmoothScroll();
  initFormHandler();
  initGlobalTracking(); 
  initScrollTopVisibility(); 
  initImageFallback(); 
  initHeroInteractiveParallax(); 
  updateCopyrightYear();
});

window.addEventListener("load", () => {
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    if (img.complete && img.naturalWidth === 0) {
      img.dispatchEvent(new Event("error"));
    }
  });
});

// تهيئة تتبع قوقل تاغ المباشر تلقائياً
function initGoogleAds() {
  if (!APP_CONFIG.googleAdsId || APP_CONFIG.googleAdsId === "AW-XXXXXXXX") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function() {
    window.dataLayer.push(arguments);
  };

  if (!document.querySelector(`script[src*="${APP_CONFIG.googleAdsId}"]`)) {
    const gTagScript = document.createElement("script");
    gTagScript.async = true;
    gTagScript.src = `https://www.googletagmanager.com/gtag/js?id=${APP_CONFIG.googleAdsId}`;
    document.head.appendChild(gTagScript);

    window.gtag('js', new Date());
    window.gtag('config', APP_CONFIG.googleAdsId);
    console.log('⚡ Google Ads Tag initialized successfully.');
  }
}

function showToast(message) {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    document.body.appendChild(toastContainer);
  }

  toastContainer.textContent = message;
  toastContainer.classList.add("show"); 

  setTimeout(() => {
    toastContainer.classList.remove("show"); 
  }, 3000);
}

function injectAnnouncementBar() {
  let bar = document.querySelector(".announcement-bar");
  if (!bar) {
    bar = document.createElement("div");
    bar.className = "announcement-bar";
    bar.setAttribute("role", "banner");
    bar.innerHTML = `🎁 خصم خاص 15% على تكسيات بديل الشيبورد والديكورات - اتصل الآن والمعاينة مجانية!`;
    document.body.insertBefore(bar, document.body.firstChild);
  }
}

/**
 * ==========================================================================
 * 3. حقن المكونات المشتركة لجميع الصفحات (Hydration Functions)
 * ==========================================================================
 */

function hydrateHeader() {
  const headerElement = document.querySelector(".main-header");
  if (!headerElement) return;

  if (document.body.classList.contains("page-home")) {
    const logoText = headerElement.querySelector(".logo-text");
    if (logoText) logoText.textContent = APP_CONFIG.businessName;
    return;
  }

  headerElement.innerHTML = `
    <div class="header-container">
      <div class="logo-area">
        <a href="index.html" class="logo" aria-label="الصفحة الرئيسية لتصميم ديكورات وترميم وتشطيب بالرياض">
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
            <a href="#" class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">خدماتنا <i class="fas fa-caret-down"></i></a>
            <ul class="dropdown-menu">
              <li><a href="chipboard-alternative.html" class="dropdown-item">بديل الشيبورد وتكسيات الجدران</a></li>
              <li><a href="gypsum.html" class="dropdown-item">جبس بورد وديكورات</a></li>
              <li><a href="walpaper.html" class="dropdown-item">ورق جدران</a></li>
              <li><a href="painting.html" class="dropdown-item">دهانات داخلية وخارجية</a></li>
              <li><a href="parquet.html" class="dropdown-item">باركيه هرمي و SPC</a></li>
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
        <a href="tel:${APP_CONFIG.localPhone}" class="cta-btn primary-cta" aria-label="اتصل الآن">اتصل الآن: ${APP_CONFIG.localPhone}</a>
      </div>
    </div>
  `;
}

function hydrateFooter() {
  const footerElement = document.querySelector(".main-footer");
  if (!footerElement) return;

  footerElement.innerHTML = `
    <div class="container footer-container">
      <div class="footer-brand">
        <span class="footer-logo">${APP_CONFIG.businessName}</span>
        <p class="footer-about">مؤسسة متخصصة في تنفيذ تكسيات بديل الشيبورد، خلفيات الشاشات، الجبس بورد، الدهانات، والترميم المتكامل في ${APP_CONFIG.targetCity}. نتميز بالجودة، السرعة، والضمان الحقيقي.</p>
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
      <div class="footer-links">
        <h4 class="footer-title">روابط تهمك</h4>
        <ul class="footer-menu">
          <li><a href="chipboard-alternative.html" class="footer-link">بديل الشيبورد وتكسيات الجدران</a></li>
          <li><a href="gypsum.html" class="footer-link">جبس بورد وديكورات</a></li>
          <li><a href="walpaper.html" class="footer-link">ورق جدران</a></li>
          <li><a href="painting.html" class="footer-link">دهانات داخلية وخارجية</a></li>
          <li><a href="parquet.html" class="footer-link">باركيه هرمي و SPC</a></li>
          <li><a href="sandwich-panel.html" class="footer-link">ساندوتش بانل</a></li>
          <li><a href="renovation.html" class="footer-link">ترميم وتشطيب مباني</a></li>
        </ul>
      </div>
      <div class="footer-contact">
        <h4 class="footer-title">موقعنا والاتصال</h4>
        <p class="footer-text">الرياض - نغطي جميع الأحياء</p>
        <p class="footer-text">الهاتف: <a href="tel:${APP_CONFIG.localPhone}">${APP_CONFIG.localPhone}</a></p>
        <p class="footer-text">الواتساب: <a href="https://wa.me/${APP_CONFIG.intlWhatsapp}">${APP_CONFIG.intlWhatsapp}</a></p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container bottom-bar">
        <p class="copyrights">جميع الحقوق محفوظة &copy; <span id="current-year"></span> لـ ${APP_CONFIG.businessName}</p>
        <p class="developer-info">تطوير المواقع والإعلانات: <a href="https://wa.me/${APP_CONFIG.intlDev}" target="_blank" rel="noopener noreferrer" class="dev-link">الرعد التقني 0578539687</a></p>
      </div>
    </div>
  `;
}

function hydrateFloatingButtons() {
  let floatingContainer = document.querySelector(".floating-actions");
  
  if (!floatingContainer) {
    floatingContainer = document.createElement("div");
    floatingContainer.className = "floating-actions";
    floatingContainer.setAttribute("role", "region");
    floatingContainer.setAttribute("aria-label", "أزرار التواصل السريع");
    document.body.appendChild(floatingContainer);
  }

  floatingContainer.style.bottom = "calc(20px + env(safe-area-inset-bottom))";

  floatingContainer.innerHTML = `
    <a href="tel:${APP_CONFIG.localPhone}" class="float-btn float-phone" aria-label="اتصل بنا الآن على رقم الجوال">
      <span class="btn-text">اتصل بنا</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-phone" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    </a>
    <a href="https://wa.me/${APP_CONFIG.intlWhatsapp}?text=${encodeURIComponent('السلام عليكم، أود الاستفسار عن خدمات الديكور وبديل الشيبورد في الرياض.')}" class="float-btn float-whatsapp" aria-label="تواصل معنا عبر واتساب" target="_blank" rel="noopener noreferrer">
      <span class="btn-text">واتساب</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-whatsapp" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </a>
  `;
}

function hydrateScrollToTop() {
  let scrollTopBtn = document.querySelector(".scroll-top-btn");
  if (!scrollTopBtn) {
    scrollTopBtn = document.createElement("button");
    scrollTopBtn.className = "scroll-top-btn";
    scrollTopBtn.setAttribute("aria-label", "صعود لأعلى الصفحة");
    scrollTopBtn.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    `;
    document.body.appendChild(scrollTopBtn);

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}

function initScrollTopVisibility() {
  const scrollTopBtn = document.querySelector(".scroll-top-btn");
  if (!scrollTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });
}

/**
 * ==========================================================================
 * 4. تشغيل ميزة القوائم والتنقل
 * ==========================================================================
 */
function initDropdownToggle() {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const dropdownWrapper = document.querySelector(".nav-item-dropdown");

  if (!dropdownToggle || !dropdownMenu) return;

  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 

    const isExpanded = dropdownToggle.getAttribute("aria-expanded") === "true";
    dropdownToggle.setAttribute("aria-expanded", !isExpanded);
    dropdownMenu.classList.toggle("show");
    
    if (dropdownWrapper) {
      dropdownWrapper.classList.toggle("active");
    }
  });

  document.addEventListener("click", (e) => {
    if (dropdownWrapper && !dropdownWrapper.contains(e.target)) {
      dropdownToggle.setAttribute("aria-expanded", "false");
      dropdownMenu.classList.remove("show");
      dropdownWrapper.classList.remove("active");
    }
  });
}

function initMobileMenu() {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !isExpanded);
    navMenu.classList.toggle("nav-active");
  });

  const navLinks = document.querySelectorAll(".nav-link:not(.dropdown-toggle), .dropdown-item");
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

function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"], a[href^="index.html#"]');
  
  internalLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      let targetId = this.getAttribute("href");
      
      if (targetId.startsWith("index.html#")) {
        targetId = targetId.replace("index.html", "");
      }
      
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 110; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

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
 * 5. إدارة النماذج وإرسال الإحالات للواتساب وقوقل
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

    const nameInput = document.getElementById("client_name");
    const phoneInput = document.getElementById("client_phone");
    const serviceInput = document.getElementById("service_type");
    const detailsInput = document.getElementById("project_details");

    const clientName = nameInput ? nameInput.value.trim() : "غير محدد";
    const clientPhone = phoneInput ? phoneInput.value.trim() : "";
    const serviceType = serviceInput ? serviceInput.value : "طلب معاينة وتكلفة";
    const projectDetails = detailsInput ? detailsInput.value.trim() : "لا توجد تفاصيل إضافية";

    if (clientPhone.length < 9) {
      showToast("الرجاء إدخال رقم جوال صحيح");
      return;
    }

    // 🎯 تسجيل إحالة النموذج في قوقل إعلانات
    trackConversion("form_submission");

    submitBtn.disabled = true;
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "جاري التحويل للواتساب...";

    // توجيه فوري للمحادثة بالواتساب
    setTimeout(() => {
      redirectToWhatsAppWithMessage(clientName, clientPhone, serviceType, projectDetails, false);
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }, 400);
  });
}

function redirectToWhatsAppWithMessage(name, phone, service, details) {
  showToast("تم تسجيل طلبك! جاري تحويلك الآن لمحادثة الواتساب...");

  const formattedDetails = details ? details : "لا توجد تفاصيل إضافية";
  
  const messageText = `*طلب معاينة وعرض سعر جديد*\n` +
                      `-------------------------------\n` +
                      `👤 *الاسم:* ${name}\n` +
                      `📱 *رقم الجوال:* ${phone}\n` +
                      `🛠️ *الخدمة المطلوبة:* ${service}\n` +
                      `📝 *التفاصيل:* ${formattedDetails}\n` +
                      `-------------------------------\n` +
                      `_تم الإرسال عبر الموقع الإلكتروني_`;

  const whatsappUrl = `https://wa.me/${APP_CONFIG.intlWhatsapp}?text=${encodeURIComponent(messageText)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

/**
 * ==========================================================================
 * 6. الرصد الشامل للنقرات واستثناء المطور (Global Event Delegation)
 * ==========================================================================
 */
function initGlobalTracking() {
  document.body.addEventListener("click", (e) => {
    const targetLink = e.target.closest("a");
    if (!targetLink) return;

    const hrefAttribute = (targetLink.getAttribute("href") || "").replace(/\s+/g, "").toLowerCase();

    // 🛑 1. استثناء أرقام وروابط المطور تماماً
    if (hrefAttribute.includes(APP_CONFIG.localDev) || hrefAttribute.includes(APP_CONFIG.intlDev)) {
      return;
    }

    // 💬 2. فحص نقرات الواتساب الخاصة بالعميل أولاً
    if (hrefAttribute.includes("wa.me") || hrefAttribute.includes("whatsapp")) {
      trackConversion("whatsapp_chat");
    }
    
    // 📞 3. فحص نقرات الاتصال الهاتفي للعميل
    else if (hrefAttribute.startsWith("tel:")) {
      trackConversion("phone_call");
    }
  });
}

// دالة إرسال الإحالة لقوقل إعلانات
function trackConversion(actionType) {
  if (typeof window.gtag !== "function") return;

  const sessionKey = `conversion_sent_${actionType}`;
  if (sessionStorage.getItem(sessionKey)) {
    // لمنع التكرار المفرط في نفس الجلسة
    console.log(`ℹ️ تم تسجيل تحويل (${actionType}) مسبقاً في هذه الجلسة.`);
  }

  let sendToValue = "";
  let value = 1.0;

  switch (actionType) {
    case "phone_call":
      if (APP_CONFIG.phoneConversionLabel) {
        sendToValue = `${APP_CONFIG.googleAdsId}/${APP_CONFIG.phoneConversionLabel}`;
        value = APP_CONFIG.valCall || 70.0;
      }
      break;

    case "whatsapp_chat":
      if (APP_CONFIG.whatsappConversionLabel) {
        sendToValue = `${APP_CONFIG.googleAdsId}/${APP_CONFIG.whatsappConversionLabel}`;
        value = APP_CONFIG.valWhatsapp || 40.0;
      }
      break;

    case "form_submission":
      if (APP_CONFIG.formConversionLabel) {
        sendToValue = `${APP_CONFIG.googleAdsId}/${APP_CONFIG.formConversionLabel}`;
        value = APP_CONFIG.valForm || 100.0;
      }
      break;
  }

  if (sendToValue && !sendToValue.includes("XXXXXXXX")) {
    window.gtag("event", "conversion", {
      "send_to": sendToValue,
      "value": value,
      "currency": "SAR",
      "transport_type": "beacon",
      "event_callback": function() {
        console.log(`🎯 تم إرسال الإحالة بنجاح لقوقل إعلانات [${actionType}]:`, sendToValue);
      }
    });

    sessionStorage.setItem(sessionKey, "true");
    console.log(`🚀 جاري إرسال إحالة [${actionType}] بقيمة ${value} ريال إلى ${sendToValue}`);
  }
}

function initImageFallback() {
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    img.addEventListener("error", function handleError() {
      const currentSrc = this.src;
      if (!currentSrc || this.dataset.fallbackAttempted === "true") return;
      this.dataset.fallbackAttempted = "true";

      if (currentSrc.includes("/walpaper/")) {
        if (currentSrc.includes("wallpaper")) {
          this.src = currentSrc.replace(/wallpaper/g, "walpaper");
        } else {
          this.src = currentSrc.replace(/walpaper/g, "wallpaper");
        }
        return;
      }

      if (currentSrc.includes("-14.webp")) {
        this.src = currentSrc.replace("-14.webp", "-6.webp");
      } else if (currentSrc.includes("-6.webp")) {
        this.src = currentSrc.replace("-6.webp", "-14.webp");
      } else if (currentSrc.includes("-1.webp")) {
        this.src = currentSrc.replace("-1.webp", ".webp");
      } else if (!currentSrc.match(/-\d+\.webp$/) && currentSrc.endsWith(".webp")) {
        this.src = currentSrc.replace(".webp", "-1.webp");
      }
    });
  });
}

function initHeroInteractiveParallax() {
  const hero = document.querySelector(".hero-section");
  const bgWrapper = document.querySelector(".hero-image-wrapper");
  if (!hero || !bgWrapper) return;

  hero.addEventListener("mousemove", (e) => {
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    
    const moveX = (e.clientX / width) - 0.5;
    const moveY = (e.clientY / height) - 0.5;
    
    const translateX = moveX * -16;
    const translateY = moveY * -16;
    
    bgWrapper.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
  });
  
  hero.addEventListener("mouseleave", () => {
    bgWrapper.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
    bgWrapper.style.transform = "translate3d(0, 0, 0)";
    setTimeout(() => {
      bgWrapper.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
    }, 500);
  });
}

function updateCopyrightYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
