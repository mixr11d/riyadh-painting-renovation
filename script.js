/**
 * ==========================================================================
 * 1. المتغيرات والبيانات الأساسية للعميل (Centralized Configuration)
 * ==========================================================================
 */
const APP_CONFIG = {
  businessName: "تصميم ديكورات وترميم الرياض",
  servicesList: "جبس بورد وورق جدران ودهانات داخلية وخارجية وباركيه هرمي و SPC وساندوتش بانل وترميم وتشطيب",
  targetCity: "الرياض",
  
  // أرقام التواصل والروابط للعميل صاحب الموقع
  localPhone: "0573747885",
  intlWhatsapp: "966573747885",
  
  // رقم المطور المخصص للمبيعات المباشرة
  localDev: "0578539687", 
  intlDev: "966578539687",
  domain: "./",

  // تهيئة وتتبع إعلانات جوجل المباشر
  googleAdsId: "AW-18310798608",                        
  phoneConversionLabel: "Zz4WCMzfvc8cEJC6optE",     
  whatsappConversionLabel: "544ZCM_fvc8cEJC6optE",  
  formConversionLabel: "HNFhCMPJwM8cEJC6optE",        

  // قيم التحويلات المحددة بالريال السعودي لضبط خوارزميات جوجل ميديا
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

  // حقن وتحديث المكونات الديناميكية
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

// تهيئة تتبع جوجل تاغ المباشر (تخطي المعرف الوهمي من الفحص البرمجي)
function initGoogleAds() {
  if (!APP_CONFIG.googleAdsId || APP_CONFIG.googleAdsId === "AW-XXXXXXXX") return;

  const gTagScript = document.createElement("script");
  gTagScript.async = true;
  gTagScript.src = `https://www.googletagmanager.com/gtag/js?id=${APP_CONFIG.googleAdsId}`;
  document.head.appendChild(gTagScript);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  gtag('js', new Date());
  gtag('config', APP_CONFIG.googleAdsId);
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
    bar.innerHTML = `🎁 خصم خاص 15% للمتصلين الجدد عبر الموقع - اتصل الآن والمعاينة مجانية بالكامل!`;
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
        <a href="contact-us.html" class="cta-btn primary-cta" aria-label="طلب عرض سعر مجاني">طلب عرض سعر</a>
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
      <div class="footer-links">
        <h4 class="footer-title">روابط تهمك</h4>
        <ul class="footer-menu">
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
        <p class="footer-text">الرياض حميع الأحياء ${APP_CONFIG.targetCity}</p>
        <p class="footer-text">الهاتف: <a href="tel:${APP_CONFIG.localPhone}">${APP_CONFIG.localPhone}</a></p>
        <p class="footer-text">الواتساب: <a href="https://wa.me/${APP_CONFIG.intlWhatsapp}">${APP_CONFIG.intlWhatsapp}</a></p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container bottom-bar">
        <p class="copyrights">جميع الحقوق محفوظة &copy; <span id="current-year"></span> لـ ${APP_CONFIG.businessName}</p>
        <p class="developer-info">تطوير المواقع والإعلانات: <a href="https://wa.me/${APP_CONFIG.intlDev}" target="_blank" rel="noopener noreferrer" class="dev-link">الرعد التقني0578539687</a></p>
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
    <a href="https://wa.me/${APP_CONFIG.intlWhatsapp}" class="float-btn float-whatsapp" aria-label="تواصل معنا عبر واتساب" target="_blank" rel="noopener noreferrer">
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
 * 4. تشغيل ميزة القائمة المنسدلة عند الضغط (Dropdown Click Toggle)
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

    if (clientName.length < 3 || !clientPhone.startsWith("05") || clientPhone.length !== 10) {
      showToast("الرجاء إدخال بيانات صحيحة");
      return;
    }

    submitBtn.disabled = true;
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "جاري إرسال طلبك وحفظ البيانات...";

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
        trackConversion("form_submission");
        form.reset();
        redirectToWhatsAppWithMessage(clientName, clientPhone, serviceType, projectDetails, false);
      } else {
        redirectToWhatsAppWithMessage(clientName, clientPhone, serviceType, projectDetails, true);
      }
    } catch (error) {
      redirectToWhatsAppWithMessage(clientName, clientPhone, serviceType, projectDetails, true);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
}

function redirectToWhatsAppWithMessage(name, phone, service, details, isFallback) {
  if (isFallback) {
    showToast("نعتذر عن الخطأ الفني، سيتم توجيهك للواتساب لإتمام إرسال طلبك مجاناً.");
  } else {
    showToast("تم تسجيل طلبك بنجاح! جاري تحويلك الآن لمحادثة المهندس عبر واتساب لإتمام الاتفاق...");
  }

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

// تم التطوير هنا برمجياً: تصفية تتبع النقرات لتعمل بدقة فائقة وتستثني رقم المطور تماماً من جوجل ميديا بجميع صيغ الجوال والواتس
function initGlobalTracking() {
  document.body.addEventListener("click", (e) => {
    const targetLink = e.target.closest("a");
    if (!targetLink) return;

    const hrefAttribute = (targetLink.getAttribute("href") || "").replace(/\s+/g, "").toLowerCase();

    // استخلاص الرقم النظيف للعميل لاستخدامه كشرط فحص حصرى
    const clientCleanDigits = APP_CONFIG.localPhone.trim().replace(/^(00966|966|0)/, '');

    // تتبع نقرات الجوال لرقم العميل فقط وتجاهل المطور
    if (hrefAttribute.startsWith("tel:") && hrefAttribute.includes(clientCleanDigits)) {
      trackConversion("phone_call");
    }

    // تتبع نقرات الواتساب لرقم العميل فقط وتجاهل المطور بجميع صيغ الروابط والمؤثرات النصية
    if ((hrefAttribute.includes("wa.me") || hrefAttribute.includes("whatsapp")) && hrefAttribute.includes(clientCleanDigits)) {
      trackConversion("whatsapp_chat");
    }
  });
}

// دالة إرسال الإحالة لجوجل ميديا (مع دمج وإرسال قيم التحويل والعملة SAR برمجياً بدقة)
function trackConversion(actionType) {
  if (typeof gtag !== "function") return;

  const sessionKey = `conversion_sent_${actionType}`;

  if (sessionStorage.getItem(sessionKey)) {
    return;
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
    case "whatsapp_fallback": 
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

  if (sendToValue) {
    gtag("event", "conversion", {
      "send_to": sendToValue,
      "value": value,
      "currency": "SAR"
    });
    sessionStorage.setItem(sessionKey, "true");
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
