/**
 * Nashco Global - Main JavaScript File
 * Handles navigation, form validation, smooth scrolling, and PWA functionality
 */

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful:', registration.scope);
      })
      .catch(err => {
        console.log('ServiceWorker registration failed:', err);
      });
  });
}

// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for all anchor links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href !== '#' && href !== '#navbarNav') {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarNav');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        bsCollapse.hide();
      }
    });
  });

  // Navbar scroll effect - add shadow on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.3)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    });
  }

  // Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Clear previous validation states
      const inputs = contactForm.querySelectorAll('.form-control, .form-select');
      inputs.forEach(input => {
        input.classList.remove('is-invalid', 'is-valid');
      });

      let isValid = true;
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');

      // Validate Name
      if (!name || name.value.trim().length < 2) {
        setInvalid(name, 'Please enter a valid name (at least 2 characters)');
        isValid = false;
      } else {
        setValid(name);
      }

      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailPattern.test(email.value.trim())) {
        setInvalid(email, 'Please enter a valid email address');
        isValid = false;
      } else {
        setValid(email);
      }

      // Validate Subject
      if (!subject || subject.value === '') {
        setInvalid(subject, 'Please select a subject');
        isValid = false;
      } else {
        setValid(subject);
      }

      // Validate Message
      if (!message || message.value.trim().length < 10) {
        setInvalid(message, 'Please enter a message (at least 10 characters)');
        isValid = false;
      } else {
        setValid(message);
      }

      if (isValid) {
        // Show success message
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
          successMessage.classList.remove('d-none');
          setTimeout(() => {
            successMessage.classList.add('d-none');
          }, 5000);
        }
        
        // Reset form
        contactForm.reset();
        inputs.forEach(input => {
          input.classList.remove('is-valid');
        });
        
        // In a real application, this is where you would send the form data to a server
        console.log('Form submitted successfully');
      }
    });
  }

  // Helper function to set invalid state
  function setInvalid(element, message) {
    if (element) {
      element.classList.add('is-invalid');
      element.classList.remove('is-valid');
      const feedback = element.nextElementSibling;
      if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = message;
      }
    }
  }

  // Helper function to set valid state
  function setValid(element) {
    if (element) {
      element.classList.add('is-valid');
      element.classList.remove('is-invalid');
    }
  }

  // Image lazy loading fallback for older browsers
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    console.log('Native lazy loading supported');
  } else {
    // Fallback for browsers that don't support lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Add animation classes on scroll for elements without AOS
  const animateOnScroll = document.querySelectorAll('.animate-on-scroll');
  if (animateOnScroll.length > 0) {
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    animateOnScroll.forEach(el => scrollObserver.observe(el));
  }

  // PWA Install Prompt
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button if you have one
    const installButton = document.getElementById('installButton');
    if (installButton) {
      installButton.style.display = 'block';
      installButton.addEventListener('click', async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          console.log(`User response to the install prompt: ${outcome}`);
          deferredPrompt = null;
          installButton.style.display = 'none';
        }
      });
    }
  });

  // Log PWA installation
  window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    deferredPrompt = null;
  });
});

// Preload critical images
window.addEventListener('load', () => {
  const criticalImages = [
    './Assets/images/logo-nashco.png',
    './Assets/images/home-page-dubai.jpeg'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
});
