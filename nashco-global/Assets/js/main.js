/**
 * Nashco Global Website - Main JavaScript
 * Handles bilingual support, language switching, and common functionality
 */

// Language translations object
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.zahy': 'Zahy Al Khaleej LLC',
    'nav.automotive': 'Automotive Industry',
    'nav.manufacturing': 'Industrial Manufacturing',
    'nav.trading': 'Trading Division',
    'nav.contact': 'Contact Us',
    
    // Common elements
    'footer.copyright': '© 2026 Nashco Global. All Rights Reserved.',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.address': 'Address',
    'btn.readMore': 'Read More',
    'btn.contactUs': 'Contact Us',
    'btn.learnMore': 'Learn More',
    'btn.getStarted': 'Get Started',
    'btn.submit': 'Submit',
    
    // Home Page
    'home.hero.title': 'Welcome to Nashco Global',
    'home.hero.subtitle': 'Diversified Excellence Across GCC Since 1994',
    'home.hero.cta': 'Discover Our Story',
    'home.hero.description': 'Nashco Global is a multi-sector leader in the GCC, delivering innovative solutions in chemicals, automotive, industrial manufacturing, and trading. Our journey is defined by operational excellence, compliance, and a passion for progress. We empower industries, communities, and partners to thrive in a dynamic world.',
    'home.why.title': 'Why Choose Nashco Global?',
    'home.why.subtitle': 'With over 30 years of experience, we combine deep market knowledge, advanced technology, and a commitment to sustainability. Our divisions serve as pillars of reliability and growth for clients across the Gulf region.',
    'home.vision.title': 'Our Story & Vision',
    'home.vision.subtitle': 'To be the GCC\'s most trusted partner for sustainable industrial and commercial progress, driven by innovation, integrity, and a relentless pursuit of quality.',
    
    // About Page
    'about.hero.title': 'About Nashco Global',
    'about.hero.subtitle': 'Building the Future of GCC Industries',
    'about.mission.title': 'Our Mission',
    'about.vision.title': 'Our Vision',
    'about.values.title': 'Our Values',
    'about.history.title': 'Our Journey',
    'about.team.title': 'Our Leadership Team',
    
    // Contact Page
    'contact.hero.title': 'Get in Touch',
    'contact.hero.subtitle': 'We\'re here to answer your questions and discuss how we can work together',
    'contact.form.title': 'Send Us a Message',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.info.title': 'Contact Information',
    'contact.faq.title': 'Frequently Asked Questions',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.zahy': 'زاهي الخليج ذ.م.م',
    'nav.automotive': 'صناعة السيارات',
    'nav.manufacturing': 'التصنيع الصناعي',
    'nav.trading': 'قسم التجارة',
    'nav.contact': 'اتصل بنا',
    
    // Common elements
    'footer.copyright': '© 2026 ناشكو جلوبال. جميع الحقوق محفوظة.',
    'footer.phone': 'الهاتف',
    'footer.email': 'البريد الإلكتروني',
    'footer.address': 'العنوان',
    'btn.readMore': 'اقرأ المزيد',
    'btn.contactUs': 'اتصل بنا',
    'btn.learnMore': 'تعرف على المزيد',
    'btn.getStarted': 'ابدأ الآن',
    'btn.submit': 'إرسال',
    
    // Home Page
    'home.hero.title': 'مرحباً بكم في ناشكو جلوبال',
    'home.hero.subtitle': 'التميز المتنوع عبر دول مجلس التعاون الخليجي منذ عام 1994',
    'home.hero.cta': 'اكتشف قصتنا',
    'home.hero.description': 'ناشكو جلوبال هي شركة رائدة متعددة القطاعات في دول مجلس التعاون الخليجي، تقدم حلولاً مبتكرة في المواد الكيميائية والسيارات والتصنيع الصناعي والتجارة. رحلتنا تتميز بالتميز التشغيلي والامتثال والشغف بالتقدم. نحن نمكن الصناعات والمجتمعات والشركاء من الازدهار في عالم ديناميكي.',
    'home.why.title': 'لماذا تختار ناشكو جلوبال؟',
    'home.why.subtitle': 'مع أكثر من 30 عاماً من الخبرة، نجمع بين المعرفة العميقة بالسوق والتكنولوجيا المتقدمة والالتزام بالاستدامة. أقسامنا تعمل كركائز للموثوقية والنمو للعملاء في جميع أنحاء منطقة الخليج.',
    'home.vision.title': 'قصتنا ورؤيتنا',
    'home.vision.subtitle': 'أن نكون الشريك الأكثر موثوقية في دول مجلس التعاون الخليجي للتقدم الصناعي والتجاري المستدام، مدفوعين بالابتكار والنزاهة والسعي الدؤوب للجودة.',
    
    // About Page
    'about.hero.title': 'عن ناشكو جلوبال',
    'about.hero.subtitle': 'بناء مستقبل صناعات دول مجلس التعاون الخليجي',
    'about.mission.title': 'مهمتنا',
    'about.vision.title': 'رؤيتنا',
    'about.values.title': 'قيمنا',
    'about.history.title': 'رحلتنا',
    'about.team.title': 'فريق القيادة لدينا',
    
    // Contact Page
    'contact.hero.title': 'تواصل معنا',
    'contact.hero.subtitle': 'نحن هنا للإجابة على أسئلتك ومناقشة كيف يمكننا العمل معاً',
    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.name': 'اسمك',
    'contact.form.email': 'بريدك الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'رسالتك',
    'contact.info.title': 'معلومات الاتصال',
    'contact.faq.title': 'الأسئلة الشائعة',
  }
};

// Get current language from localStorage or default to English
let currentLang = localStorage.getItem('nashco-lang') || 'en';

// Function to set language
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('nashco-lang', lang);
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update dir attribute for RTL
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update body class
  document.body.classList.toggle('rtl', lang === 'ar');
  document.body.classList.toggle('ltr', lang !== 'ar');
  
  // Update all elements with data-i18n
  updateContent();
  
  // Update language toggle button
  updateLanguageToggle();
}

// Function to update content based on current language
function updateContent() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[currentLang][key];
      } else {
        element.textContent = translations[currentLang][key];
      }
    }
  });
}

// Function to update language toggle button
function updateLanguageToggle() {
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.innerHTML = currentLang === 'en' 
      ? '<span class="me-1">🌐</span> العربية' 
      : '<span class="me-1">🌐</span> English';
  }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  // Set initial language
  setLanguage(currentLang);
  
  // Setup language toggle button
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function(e) {
      e.preventDefault();
      const newLang = currentLang === 'en' ? 'ar' : 'en';
      setLanguage(newLang);
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#navbarNav') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
          const targetPosition = target.offsetTop - navbarHeight - 20;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Add active class to current nav item
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }
  
  // Form validation for contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const name = document.getElementById('name')?.value;
      const email = document.getElementById('email')?.value;
      const message = document.getElementById('message')?.value;
      
      if (!name || !email || !message) {
        alert(currentLang === 'en' 
          ? 'Please fill in all required fields.' 
          : 'يرجى ملء جميع الحقول المطلوبة.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert(currentLang === 'en' 
          ? 'Please enter a valid email address.' 
          : 'يرجى إدخال عنوان بريد إلكتروني صالح.');
        return;
      }
      
      // Show success message
      alert(currentLang === 'en' 
        ? 'Thank you for your message! We will get back to you soon.' 
        : 'شكراً لرسالتك! سنتواصل معك قريباً.');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Image lazy loading fallback for older browsers
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.16.0/lozad.min.js';
    script.onload = function() {
      const observer = lozad();
      observer.observe();
    };
    document.body.appendChild(script);
  }
});

// Function to create and show modal for image galleries
function showImageModal(imageSrc, imageAlt) {
  // Create modal if it doesn't exist
  let modal = document.getElementById('imageModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.className = 'modal fade';
    modal.innerHTML = `
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content bg-dark">
          <div class="modal-header border-0">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body text-center">
            <img id="modalImage" src="" alt="" class="img-fluid rounded">
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  
  // Update modal image
  const modalImage = document.getElementById('modalImage');
  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  
  // Show modal
  const bsModal = new bootstrap.Modal(modal);
  bsModal.show();
}

// Add click handlers to gallery images
document.addEventListener('DOMContentLoaded', function() {
  const galleryImages = document.querySelectorAll('.gallery-image, .stock-gallery img');
  galleryImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      showImageModal(this.src, this.alt);
    });
  });
});

// Export functions for use in inline scripts
window.nashcoGlobal = {
  setLanguage,
  showImageModal,
  currentLang: () => currentLang
};
