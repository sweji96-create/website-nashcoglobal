/**
 * Nashco Global - Main JavaScript
 * Interactive components and enhancements
 */

(function() {
    'use strict';

    // Smooth scroll for anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Navbar scroll effect - add shadow/background on scroll
    function initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        function updateNavbar() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', updateNavbar);
        updateNavbar(); // Initial check
    }

    // Lazy loading for images with intersection observer
    function initLazyLoading() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        imageObserver.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }

    // Mobile menu toggle enhancements
    function initMobileMenu() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (!navbarToggler || !navbarCollapse) return;

        // Close menu when clicking on a nav link
        const navLinks = navbarCollapse.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            });
        });
    }

    // Highlight active navigation item based on current page
    function highlightActiveNav() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            if (currentPath.endsWith(linkPath) || 
                (currentPath.endsWith('/') && linkPath.endsWith('index.html'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Add animation to elements on scroll (if AOS is not used)
    function initScrollAnimations() {
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        
        if (!animateElements.length || typeof AOS !== 'undefined') return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1
        });

        animateElements.forEach(el => observer.observe(el));
    }

    // Form validation enhancement
    function initFormValidation() {
        const forms = document.querySelectorAll('form[novalidate]');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!form.checkValidity()) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                form.classList.add('was-validated');
            });
        });
    }

    // Back to top button
    function initBackToTop() {
        // Check if back-to-top button exists, if not create it
        let backToTopBtn = document.getElementById('back-to-top');
        
        if (!backToTopBtn) {
            backToTopBtn = document.createElement('button');
            backToTopBtn.id = 'back-to-top';
            backToTopBtn.innerHTML = '↑';
            backToTopBtn.setAttribute('aria-label', 'Back to top');
            backToTopBtn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: var(--accent, #00A3AD);
                color: white;
                border: none;
                font-size: 24px;
                cursor: pointer;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.3s, visibility 0.3s, transform 0.2s;
                z-index: 1000;
                box-shadow: 0 4px 12px rgba(0, 163, 173, 0.3);
            `;
            document.body.appendChild(backToTopBtn);
        }

        function toggleBackToTop() {
            if (window.scrollY > 300) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
            }
        }

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        backToTopBtn.addEventListener('mouseenter', () => {
            backToTopBtn.style.transform = 'scale(1.1)';
        });

        backToTopBtn.addEventListener('mouseleave', () => {
            backToTopBtn.style.transform = 'scale(1)';
        });

        window.addEventListener('scroll', toggleBackToTop);
        toggleBackToTop();
    }

    // Initialize service worker for PWA
    function initServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        console.log('ServiceWorker registered:', registration.scope);
                    })
                    .catch(error => {
                        console.log('ServiceWorker registration failed:', error);
                    });
            });
        }
    }

    // Accessibility: Skip to main content
    function initSkipToMain() {
        let skipLink = document.querySelector('.skip-to-main');
        if (!skipLink) {
            skipLink = document.createElement('a');
            skipLink.href = '#main-content';
            skipLink.className = 'skip-to-main';
            skipLink.textContent = 'Skip to main content';
            skipLink.style.cssText = `
                position: absolute;
                top: -40px;
                left: 0;
                background: var(--accent, #00A3AD);
                color: white;
                padding: 8px 16px;
                text-decoration: none;
                z-index: 100;
                transition: top 0.3s;
            `;
            skipLink.addEventListener('focus', () => {
                skipLink.style.top = '0';
            });
            skipLink.addEventListener('blur', () => {
                skipLink.style.top = '-40px';
            });
            document.body.insertBefore(skipLink, document.body.firstChild);
        }

        // Ensure main content has an ID
        let mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
        if (mainContent && !mainContent.id) {
            mainContent.id = 'main-content';
            mainContent.setAttribute('tabindex', '-1');
        }
    }

    // Initialize all components when DOM is ready
    function init() {
        initSmoothScroll();
        initNavbarScroll();
        initLazyLoading();
        initMobileMenu();
        highlightActiveNav();
        initScrollAnimations();
        initFormValidation();
        initBackToTop();
        initServiceWorker();
        initSkipToMain();

        // Initialize AOS if available
        if (typeof AOS !== 'undefined') {
            AOS.init({
                once: true,
                duration: 900,
                offset: 60
            });
        }

        // Initialize GSAP animations if available
        if (typeof gsap !== 'undefined') {
            gsap.from('.hero-section h1', { 
                opacity: 0, 
                y: 60, 
                duration: 1, 
                delay: 0.2 
            });
            gsap.from('.hero-section p', { 
                opacity: 0, 
                y: 40, 
                duration: 1, 
                delay: 0.5 
            });
        }
    }

    // Run init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
