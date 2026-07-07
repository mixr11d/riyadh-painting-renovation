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
  initDropdownToggle(); // تشغيل ميزة فتح وغلق القائمة المنسدلة عند الضغط بالماوس
  initSmoothScroll();
  initFormHandler();
  initGlobalTracking(); // تشغيل التتبع العالمي الدقيق لروابط العميل
  initScrollTopVisibility(); // تشغيل حركة ومراقبة ظهور زر الصعود للأعلى
  initImageFallback(); // تشغيل دالة الشفاء الذاتي المتطورة لإصلاح جميع الصور بالرياض
  initHeroInteractiveParallax(); // تشغيل ميزة البارالاكس التفاعلية الفخمة لعمق حركة الماوس بالبانر
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
 * خوارزمية ذكية متقدمة للشفاء الذاتي ومعالجة الصور المكسورة تلقائياً (Advanced Image Fallback)
 * تم معالجة مشكلة المزامنة (Race Condition) لتعمل على معالجة الصور التي فشلت بالفعل قبل تحميل السكربت بالكامل
 */
function initImageFallback() {
  const images = document.querySelectorAll("img");
  
  function triggerFallback(img) {
    const currentSrc = img.src;
    if (!currentSrc) return;

    let attempt = parseInt(img.dataset.fallbackAttempt || "0", 10);
    attempt++;
    img.dataset.fallbackAttempt = attempt;
    
    if (attempt > 10) return; // حماية المعالج من الدخول في حلقات مفرغة
    
    const lastSlashIndex = currentSrc.lastIndexOf("/");
    const folderPath = currentSrc.substring(0, lastSlashIndex + 1);
    const filenameWithExt = currentSrc.substring(lastSlashIndex + 1);
    const dotIndex = filenameWithExt.lastIndexOf(".");
    
    if (dotIndex === -1) return;
    
    const filename = filenameWithExt.substring(0, dotIndex);
    
    // جلب الاسم النظيف للخدمة بدون ترقيم تالٍ
    let cleanBaseName = filename.replace(/-\d+$/, "");
    
    // احتمالات تتابعية متطورة للصور لضمان الحصول على الملف الفعلي المرفوع
    let fallbacks = [
      cleanBaseName + ".webp",
      cleanBaseName + "-1.webp",
      cleanBaseName + "-2.webp",
      cleanBaseName + "-3.webp",
      cleanBaseName + ".jpg",
      cleanBaseName + "-1.jpg",
      cleanBaseName + "-2.jpg",
      cleanBaseName + ".png",
      cleanBaseName + "-1.png",
      cleanBaseName + "-2.png"
    ];
    
    // المعالجة الفائقة لمجلد ورق الجدران لتخطي أي خطأ إملائي في الملفات المرفوعة
    if (folderPath.includes("/walpaper/")) {
      fallbacks = [
        "wallpaper-1.webp",
        "wallpaper.webp",
        "walpaper.webp",
        "walpaper-1.webp",
        "walpaper-2.webp",
        "wallpaper-2.webp",
        "wallpaper-1.jpg",
        "wallpaper.jpg",
        "walpaper.jpg",
        "walpaper-1.jpg",
        "walpaper-2.jpg",
        "wallpaper-2.jpg"
      ];
    }

    const nextName = fallbacks[attempt - 1];
    if (nextName) {
      if (nextName === filenameWithExt) {
        // حماية من تكرار تعيين نفس الرابط الفاشل
        img.dataset.fallbackAttempt = attempt + 1;
        const skipName = fallbacks[attempt];
        if (skipName) {
          img.src = folderPath + skipName;
        }
      } else {
        img.src = folderPath + nextName;
      }
    }
  }

  images.forEach(img => {
    // 1. فحص فوري وإصلاح للصور التي فشلت في التحميل قبل تشغيل السكربت
    if (img.complete && img.naturalWidth === 0) {
      triggerFallback(img);
    }
    
    // 2. فحص وإصلاح الصور التي تفشل أثناء التصفح النشط للزائر
    img.addEventListener("error", function() {
      triggerFallback(this);
    });
  });
}

/**
 * دالة لتأثير البارالاكس التفاعلي العميق ثلاثي الأبعاد مع حركة الماوس بالهيرو (Interactive Mouse Parallax)
 * تحرك الخلفية المتقاطعة بنسبة تدرجية دقيقة وسلسة عكس اتجاه الماوس لتعطي إيحاء بالعمق ثلاثي الأبعاد الفاخر
 */
function initHeroInteractiveParallax() {
  const hero = document.querySelector(".hero-section");
  const bgWrapper = document.querySelector(".hero-image-wrapper");
  if (!hero || !bgWrapper) return;

  // الاستماع المباشر لحركة الماوس فوق منطقة الهيرو فقط
  hero.addEventListener("mousemove", (e) => {
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    
    // حساب موقع الفأرة نسبة إلى مركز الهيرو (-0.5 إلى 0.5)
    const moveX = (e.clientX / width) - 0.5;
    const moveY = (e.clientY / height) - 0.5;
    
    // إزاحة خفيفة بمعدل أقصاه 16 بكسل لعدم التأثير على تجربة القراءة وتجنب تشتيت الانتباه
    const translateX = moveX * -16;
    const translateY = moveY * -16;
    
    // رندرة الحركة باستخدام تسريع الرسوميات المباشر 3D
    bgWrapper.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
  });
  
  // إعادة توسيط وتصفير موضع الخلفية بسلاسة تامة بمجرد خروج الماوس من الهيرو
  hero.addEventListener("mouseleave", () => {
    bgWrapper.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
    bgWrapper.style.transform = "translate3d(0, 0, 0)";
    setTimeout(() => {
      bgWrapper.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)"; // استعادة الانتقال السريع للفأرة بعد الانتهاء
    }, 500);
  });
}

/**
 * ==========================================================================
 * 3. حقن وهدرجة المكونات (Dynamic Hydration Functions) - مكرر للفوتر والهيدر
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

    // تفعيل حدث الانتقال للأعلى بسلاسة عند الضغط
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}

// مراقبة النزول في الصفحة للتحكم في ظهور أو إخفاء زر الصعود للأعلى
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
 * 4. نظام فتح وإغلاق القائمة المنسدلة تفاعلياً عند الضغط (Dropdown Click Toggle)
 * ==========================================================================
 */
function initDropdownToggle() {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const dropdownWrapper = document.querySelector(".nav-item-dropdown");

  if (!dropdownToggle || !dropdownMenu) return;

  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault(); // منع الانتقال الفوري لـ #services لإتاحة رؤية القائمة وتجربة التبويب
    e.stopPropagation(); // منع انتقال الحدث إلى بقية المستند

    const isExpanded = dropdownToggle.getAttribute("aria-expanded") === "true";
    dropdownToggle.setAttribute("aria-expanded", !isExpanded);
    dropdownMenu.classList.toggle("show");
    
    if (dropdownWrapper) {
      dropdownWrapper.classList.toggle("active");
    }
  });

  // إغلاق القائمة تلقائياً عند النقر في أي مكان آخر خارج نطاق القائمة المنسدلة
  document.addEventListener("click", (e) => {
    if (dropdownWrapper && !dropdownWrapper.contains(e.target)) {
      dropdownToggle.setAttribute("aria-expanded", "false");
      dropdownMenu.classList.remove("show");
      dropdownWrapper.classList.remove("active");
    }
  });
}

/**
 * ==========================================================================
 * 5. نظام القائمة المتنقلة (Mobile Menu Functionality)
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

  const navLinks = document.querySelectorAll(".nav-link, .dropdown-item");
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
 * 6. التمرير السلس (Smooth Scroll Functionality)
 * ==========================================================================
 */
function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"], a[href^="index.html#"]');
  
  internalLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      let targetId = this.getAttribute("href");
      
      // إذا كان الرابط في صفحة فرعية ويشير إلى الرئيسية مثل index.html#services
      if (targetId.startsWith("index.html#")) {
        targetId = targetId.replace("index.html", "");
      }
      
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 110; // متوافق مع ارتفاع الهيدر وشريط الإعلانات الجديد
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
 * 7. معالجة النموذج والتحويل التلقائي المباشر لواتساب (Form Submission & WhatsApp Redirect)
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

    if (clientName.length < 3 || !clientPhone.startsWith("05") || clientPhone.length !== 10) {
      showToast("الرجاء إدخال بيانات صحيحة");
      return;
    }

    submitBtn.disabled = true;
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "جاري إرسال طلبك وحفظ البيانات...";

    const formData = new FormData(form);

    try {
      // 1. إرسال البيانات أولاً إلى Web3Forms لتسجيل البيانات وتفعيل التتبع
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        // تفعيل تتبع تحويل النموذج لـ Google Ads
        trackConversion("form_submission");
        form.reset();
        
        // التحويل المباشر والتلقائي للواتساب بعد نجاح الإرسال
        redirectToWhatsAppWithMessage(clientName, clientPhone, serviceType, projectDetails, false);
      } else {
        // في حال فشل الاستجابة يتم نقله فوراً للواتساب كبديل فني
        redirectToWhatsAppWithMessage(clientName, clientPhone, serviceType, projectDetails, true);
      }
    } catch (error) {
      // في حال انقطاع الشبكة أو أي خطأ برمي يتم نقله فوراً للواتساب كبديل فني
      redirectToWhatsAppWithMessage(clientName, clientPhone, serviceType, projectDetails, true);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
}

/**
 * دالة مستقلة لتوليد رسالة الواتساب المنسقة وتحويل العميل مباشرة
 * @param {string} name - اسم العميل
 * @param {string} phone - هاتف العميل
 * @param {string} service - الخدمة المختارة
 * @param {string} details - التفاصيل الإضافية
 * @param {boolean} isFallback - تحديد ما إذا كان التحويل حدث كبديل بسبب فشل الاتصال بالخادم
 */
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
  
  // تفعيل تتبع تحويل الواتساب الاحتياطي لـ Google Ads
  trackConversion("whatsapp_fallback");

  // فتح المحادثة للعميل مباشرة في لسان جديد
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

    // :المطابقة التامة للهاتف من دون تداخل (فقط لرقم صاحب الموقع)
    if (hrefAttribute === "tel:" + APP_CONFIG.localPhone) {
      trackConversion("phone_call");
    }

    // :المطابقة التامة للرابط الخاص بواتساب العميل (فقط لرقم صاحب الموقع)
    if (hrefAttribute === "https://wa.me/" + APP_CONFIG.intlWhatsapp) {
      trackConversion("whatsapp_chat");
    }
  });
}

/**
 * ==========================================================================
 * 8. نظام تتبع وإرسال إحداثيات تحويل إعلانات جوجل المباشرة ومنع التكرار المنفصل
 * ==========================================================================
 */
function trackConversion(actionType) {
  // التحقق من تواجد كود التتبع gtag.js لإعلانات جوجل في الصفحة
  if (typeof gtag !== "function") return;

  // صياغة مفتاح حماية فريد ومستقل لكل إجراء تتبع لمنع تداخل الاستجابات
  const sessionKey = `conversion_sent_${actionType}`;

  // التحقق لمنع إرسال نفس نوع التحويل المكرر في نفس الجلسة
  if (sessionStorage.getItem(sessionKey)) {
    return;
  }

  let sendToValue = "";

  switch (actionType) {
    case "phone_call":
      if (APP_CONFIG.phoneConversionLabel) {
        sendToValue = `${APP_CONFIG.googleAdsId}/${APP_CONFIG.phoneConversionLabel}`;
      }
      break;

    case "whatsapp_chat":
    case "whatsapp_fallback": // يتم دمج نقرة واتساب المباشرة والبديل تحت نفس تحويل واتساب
      if (APP_CONFIG.whatsappConversionLabel) {
        sendToValue = `${APP_CONFIG.googleAdsId}/${APP_CONFIG.whatsappConversionLabel}`;
      }
      break;

    case "form_submission":
      if (APP_CONFIG.formConversionLabel) {
        sendToValue = `${APP_CONFIG.googleAdsId}/${APP_CONFIG.formConversionLabel}`;
      }
      break;
  }

  // إرسال التحويل مباشرة لحساب جوجل إعلانات المربوط بالسكربت
  if (sendToValue) {
    gtag("event", "conversion", {
      "send_to": sendToValue
    });
    
    // تخزين حالة إرسال هذا الإجراء المحدد في جلسة العمل لمنع تكراره
    sessionStorage.setItem(sessionKey, "true");
  }
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
