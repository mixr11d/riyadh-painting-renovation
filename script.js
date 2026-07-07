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
  
  // تشغيل نظام الدمج والمزامنة البرمجي المزدوج لشفاء الصور
  initImageFallback(); // طبقة الحماية الفورية المحلية للصور
  initGithubApiHydrator(); // طبقة المزامنة الفورية الذكية مع جيت هوب لقراءة وتسكين الصور الفعلية المرفوعة
  
  initHeroInteractiveParallax(); // تشغيل ميزة البارالاكس التفاعلية الفخمة لعمق حركة الماوس بالبانر
  updateCopyrightYear();
});

// إجراء مسح تكميلي ثانٍ ومضمون فور اكتمال تحميل كامل نافذة المتصفح لضمان علاج صور الكاش الفاشلة
window.addEventListener("load", () => {
  initImageFallback();
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
 * طبقة الحماية الذكية الأولى (GitHub API Auto-Hydration)
 * تتصل تلقائياً وبشكل صامت بمستودع جيت هوب الخاص بك لقراءة أسماء وامتدادات وتشكيل الصور المرفوعة فعلياً،
 * وتقوم بدمجها وتوزيعها تلقائياً على الكروت الستة لكل خدمة تمنع كسر الصور أو تكرارها نهائياً.
 */
async function initGithubApiHydrator() {
  try {
    const repoOwner = "mixr11d";
    const repoName = "riyadh-painting-renovation";
    const branch = "main";
    
    // الاتصال الفوري بمستودع جيت هوب لجلب شجرة الملفات بالكامل
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/git/trees/${branch}?recursive=1`);
    if (!response.ok) throw new Error("GitHub API rate limit or offline");
    
    const data = await response.json();
    const files = data.tree || [];
    
    // تصفية جميع ملفات الصور المدعومة في مجلد images المرفوع
    const imgExtensions = [".webp", ".png", ".jpg", ".jpeg", ".gif"];
    const imageFiles = files.filter(file => {
      if (file.type !== "blob") return false;
      const path = file.path.toLowerCase();
      return path.startsWith("images/") && imgExtensions.some(ext => path.endsWith(ext));
    });
    
    // تجميع وتصنيف الصور في مصفوفات مستقلة بناءً على المجلد (باركيه، ورق جدران، دهانات، جبس...)
    const groups = {};
    imageFiles.forEach(file => {
      const parts = file.path.split("/");
      if (parts.length >= 3) {
        const groupName = parts[1]; // اسم مجلد الخدمة
        if (!groups[groupName]) {
          groups[groupName] = [];
        }
        groups[groupName].push(file.path);
      }
    });
    
    // دالة ترتيب طبيعي للملفات لضمان عدم حدوث لخبطة في تسلسل الكروت المعروضة
    const naturalSort = (a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    
    const pageImages = document.querySelectorAll("img");
    
    // دمج وربط الصور الفعلية الموثقة بجيت هوب بكروت الصفحات بشكل فريد وغير مكرر نهائياً
    Object.keys(groups).forEach(groupName => {
      groups[groupName].sort(naturalSort);
      
      const matchingImgs = Array.from(pageImages).filter(img => {
        const src = (img.getAttribute("src") || "").toLowerCase();
        return src.includes(`/${groupName}/`) || src.includes(`/${groupName}-`);
      });
      
      matchingImgs.forEach((img, index) => {
        const verifiedPath = groups[groupName][index % groups[groupName].length];
        if (verifiedPath) {
          img.dataset.fallbackActive = "true"; // إغلاق قفل الفحص لمنع تداخل الأحداث
          img.src = verifiedPath; // ربط الصورة الصحيحة فوراً
          img.dataset.fallbackActive = "false";
        }
      });
    });
    
    console.log("GitHub API Auto-Hydration synced successfully!");
  } catch (error) {
    console.warn("GitHub API Sync bypass, local fallback active:", error);
  }
}

/**
 * طبقة الحماية الذاتية الثانية والاحتياطية (Deduplicating Image Fallback Algorithm)
 * تعمل بكفاءة لمنع تكرار الصور أو كسرها في حال تصفح الموقع بدون إنترنت أو تعطل API الخاص بجيت هوب.
 */
function initImageFallback() {
  const images = document.querySelectorAll("img");
  
  function triggerFallback(img) {
    // حماية القفل البرمجي النشط لمنع تداخل الأحداث والطلب المتزامن للرابط
    if (img.dataset.fallbackActive === "true") return;
    img.dataset.fallbackActive = "true";

    const currentSrc = img.src;
    if (!currentSrc) {
      img.dataset.fallbackActive = "false";
      return;
    }

    let attempt = parseInt(img.dataset.fallbackAttempt || "0", 10);
    attempt++;
    img.dataset.fallbackAttempt = attempt;
    
    if (attempt > 15) {
      img.dataset.fallbackActive = "false";
      return; // التوقف الفوري بعد 15 محاولة لحماية أداء المتصفح
    }
    
    const lastSlashIndex = currentSrc.lastIndexOf("/");
    const folderPath = currentSrc.substring(0, lastSlashIndex + 1);
    const filenameWithExt = currentSrc.substring(lastSlashIndex + 1);
    const dotIndex = filenameWithExt.lastIndexOf(".");
    
    if (dotIndex === -1) {
      img.dataset.fallbackActive = "false";
      return;
    }
    
    const filename = filenameWithExt.substring(0, dotIndex);
    
    // استخراج الرقم التسلسلي الأصلي للصورة المكسورة
    const numberMatch = filename.match(/-(\d+)$/);
    const numberSuffix = numberMatch ? numberMatch[1] : "";
    
    // جلب الاسم النظيف للخدمة بدون ترقيم تالٍ
    let cleanBaseName = filename.replace(/-\d+$/, "");
    
    let isWallpaper = folderPath.includes("/walpaper/");
    let isParquet = folderPath.includes("/parquet/");
    let isSandwich = folderPath.includes("/sandwich-panel/");
    
    let candidateName = "";
    const suffix = numberSuffix ? "-" + numberSuffix : "";
    
    // 1. توليد الخيارات والمطابقات الصارمة لورق الجدران مع حماية الترقيم الأصلي
    if (isWallpaper) {
      const list = [
        "walpaper" + suffix + ".webp",
        "wallpaper" + suffix + ".webp",
        "walpaper" + suffix + ".jpg",
        "wallpaper" + suffix + ".jpg",
        "walpaper" + suffix + ".png",
        "wallpaper" + suffix + ".png",
        "wallpaper-2.webp",
        "wallpaper-3.webp",
        "wallpaper-4.webp",
        "wallpaper-5.webp",
        "wallpaper-6.webp",
        "wallpaper-14.webp"
      ];
      candidateName = list[attempt - 1];
    } 
    // 2. توليد الخيارات والامتدادات للباركيه
    else if (isParquet) {
      const list = [
        "parquet" + suffix + ".webp",
        "parquet" + suffix + ".jpg",
        "parquet" + suffix + ".png",
        "parquet-2.webp",
        "parquet-3.webp",
        "parquet-4.webp",
        "parquet-5.webp",
        "parquet-14.webp",
        "parquet.webp"
      ];
      candidateName = list[attempt - 1];
    } 
    // 3. توليد الخيارات والامتدادات للساندوتش بانل
    else if (isSandwich) {
      const list = [
        "sandwich-panel" + suffix + ".webp",
        "sandwich-panel" + suffix + ".jpg",
        "sandwich-panel" + suffix + ".png",
        "sandwich-panel-2.webp",
        "sandwich-panel-3.webp",
        "sandwich-panel-4.webp",
        "sandwich-panel-5.webp",
        "sandwich-panel-14.webp",
        "sandwich-panel.webp"
      ];
      candidateName = list[attempt - 1];
    } 
    // 4. بقية الخدمات
    else {
      const list = [
        cleanBaseName + suffix + ".webp",
        cleanBaseName + suffix + ".jpg",
        cleanBaseName + suffix + ".png",
        cleanBaseName + ".webp"
      ];
      candidateName = list[attempt - 1];
    }

    if (candidateName) {
      const candidateSrc = folderPath + candidateName;
      
      // --- فحص منع التكرار البرمجي الصارم والكامل (Strict Deduplication Check) ---
      // التحقق مما إذا كان هذا الرابط البديل مطلوباً بواسطة أي كارت آخر بالصفحة تماماً لتجنب التكرار المزدوج
      let isDuplicate = false;
      const allImgs = document.querySelectorAll("img");
      for (let otherImg of allImgs) {
        if (otherImg !== img && otherImg.src === candidateSrc) {
          isDuplicate = true;
          break;
        }
      }
      
      // إذا كانت مكررة أو تطابق الرابط الفاشل، نقوم بتخطيها فوراً وفحص الاحتمال التالي برمجياً
      if (isDuplicate || candidateSrc === currentSrc) {
        img.dataset.fallbackAttempt = attempt;
        img.dataset.fallbackActive = "false";
        setTimeout(() => {
          triggerFallback(img);
        }, 10);
      } else {
        img.dataset.fallbackActive = "false";
        img.src = candidateSrc;
      }
    } else {
      img.dataset.fallbackActive = "false";
    }
  }

  images.forEach(img => {
    // فحص فوري وإصلاح للصور التي فشلت في التحميل قبل تشغيل السكربت
    if (img.complete && img.naturalWidth === 0) {
      triggerFallback(img);
    }
    
    // فحص وإصلاح الصور التي تفشل أثناء التصفح النشط للزائر
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
