/* Enhanced JavaScript Utilities for Modern CV */

// Modern JavaScript utilities and enhancements
class CVApp {
    constructor() {
        this.init();
        this.bindEvents();
        this.setupAnimations();
        this.setupPerformanceOptimizations();
    }

    init() {
        // Initialize app state
        this.isScrolled = false;
        this.currentSection = 'home';
        this.skillsAnimated = false;
        this.projectsLoaded = false;
        
        // Set up intersection observer for animations
        this.setupIntersectionObserver();
        
        // Initialize components
        this.initializeNavigation();
        this.initializeTypingEffect();
        this.initializeParallax();
        this.initializeProgressBars();
        
        console.log('CV App initialized successfully');
    }

    bindEvents() {
        // Scroll events
        window.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 16));
        
        // Resize events
        window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));
        
        // Click events
        document.addEventListener('click', this.handleGlobalClick.bind(this));
        
        // Keyboard events
        document.addEventListener('keydown', this.handleKeydown.bind(this));
        
        // Loading events
        window.addEventListener('load', this.handlePageLoad.bind(this));
        
        // Visibility change
        document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    }

    setupAnimations() {
        // Always use vanilla animations for reliability
        this.setupVanillaAnimations();
    }

    setupVanillaAnimations() {
        try {
            console.log('Setting up vanilla animations...');
            
            // Initialize hero animations
            this.animateHeroSection();
            
            // Setup scroll-based animations
            this.initScrollAnimations();
            
            // Setup background animations
            this.animateBackground();
            
            console.log('Vanilla animations initialized successfully');
        } catch (error) {
            console.error('Animation setup failed:', error);
        }
    }

    animateHeroSection() {
        const heroElements = [
            { selector: '.hero-title', delay: 0 },
            { selector: '.hero-subtitle', delay: 300 },
            { selector: '.hero-description', delay: 600 },
            { selector: '.hero-actions', delay: 900 }
        ];

        heroElements.forEach(({ selector, delay }) => {
            const element = document.querySelector(selector);
            if (element) {
                // Set initial state
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                
                // Animate after delay
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    element.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)';
                }, delay);
            }
        });
    }

    animateBackground() {
        const backgroundSpans = document.querySelectorAll('.animated-background span');
        backgroundSpans.forEach((span, index) => {
            span.style.animationDelay = `${index * 2}s`;
            span.style.animation = 'float 20s infinite linear';
        });
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all elements that should animate on scroll
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            scrollObserver.observe(el);
        });
    }

    setupIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger specific animations based on section
                    const sectionId = entry.target.id;
                    this.triggerSectionAnimation(sectionId);
                }
            });
        }, options);

        // Observe all sections
        document.querySelectorAll('.reveal, section, .animate-on-scroll').forEach(el => {
            this.observer.observe(el);
        });
    }

    triggerSectionAnimation(sectionId) {
        switch (sectionId) {
            case 'SKILLS':
                if (!this.skillsAnimated) {
                    this.animateSkills();
                    this.skillsAnimated = true;
                }
                break;
            case 'PROJECT':
                if (!this.projectsLoaded) {
                    this.loadProjects();
                    this.projectsLoaded = true;
                }
                break;
        }
    }

    animateSkills() {
        const skillBars = document.querySelectorAll('.progress-fill');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                const percentage = bar.dataset.percentage || '80';
                bar.style.width = percentage + '%';
            }, index * 100);
        });
    }

    loadProjects() {
        // Lazy load project images
        const projectImages = document.querySelectorAll('.project-veiw-img img[data-src]');
        projectImages.forEach(img => {
            img.src = img.dataset.src;
            img.onload = () => img.classList.add('loaded');
        });
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Update navigation state
        this.updateNavigationState(scrollTop);
        
        // Update current section
        this.updateCurrentSection();
        
        // Parallax effects
        this.updateParallax(scrollTop);
        
        // Show/hide scroll to top button
        this.updateScrollToTop(scrollTop);
    }

    updateNavigationState(scrollTop) {
        const nav = document.querySelector('.modern-nav');
        if (nav) {
            if (scrollTop > 100 && !this.isScrolled) {
                nav.classList.add('scrolled');
                this.isScrolled = true;
            } else if (scrollTop <= 100 && this.isScrolled) {
                nav.classList.remove('scrolled');
                this.isScrolled = false;
            }
        }
    }

    updateCurrentSection() {
        const sections = document.querySelectorAll('section[id], main > div[id]');
        let current = '';

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                current = section.id;
            }
        });

        if (current !== this.currentSection) {
            this.currentSection = current;
            this.updateActiveNavLink(current);
        }
    }

    updateActiveNavLink(sectionId) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to current section link
        const currentLink = document.querySelector(`a[href="#${sectionId}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }

    updateParallax(scrollTop) {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            const yPos = -(scrollTop * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    }

    updateScrollToTop(scrollTop) {
        const scrollBtn = document.getElementById('scroll-top');
        if (scrollBtn) {
            if (scrollTop > 500) {
                scrollBtn.style.display = 'block';
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
                setTimeout(() => {
                    if (!scrollBtn.classList.contains('visible')) {
                        scrollBtn.style.display = 'none';
                    }
                }, 300);
            }
        }
    }

    initializeTypingEffect() {
        const typingElement = document.querySelector('.typing-effect');
        if (typingElement) {
            const texts = [
                'WEB DEVELOPER',
                'SOFTWARE ENGINEER',
                'UI/UX DESIGNER',
                'CYBER SECURITY SPECIALIST',
                'PROBLEM SOLVER'
            ];
            this.typeWriter(typingElement, texts, 0, 0, true);
        }
    }

    typeWriter(element, texts, textIndex, charIndex, deleting) {
        const currentText = texts[textIndex];
        
        if (deleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = deleting ? 75 : 150;

        if (!deleting && charIndex === currentText.length) {
            typeSpeed = 2500; // Pause at end
            deleting = true;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 800; // Pause before next word
        }

        setTimeout(() => {
            this.typeWriter(element, texts, textIndex, charIndex, deleting);
        }, typeSpeed);
    }

    initializeParallax() {
        // Add parallax class to relevant elements
        const images = document.querySelectorAll('.main-img img');
        images.forEach(img => {
            img.closest('.main-img').classList.add('parallax');
            img.closest('.main-img').dataset.speed = '0.3';
        });
    }

    initializeProgressBars() {
        // Create progress bars for skills
        const skillsList = document.querySelectorAll('.Tech-skills-list li, .soft-skills-list li');
        skillsList.forEach((skill, index) => {
            const progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            
            const progressFill = document.createElement('div');
            progressFill.className = 'progress-fill';
            
            // Random percentage for demo (you can replace with actual skill levels)
            const percentage = 70 + Math.random() * 30;
            progressFill.dataset.percentage = Math.round(percentage);
            
            progressBar.appendChild(progressFill);
            skill.appendChild(progressBar);
        });
    }

    initializeNavigation() {
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    this.smoothScrollTo(targetElement);
                }
            });
        });
    }

    smoothScrollTo(element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    handleResize() {
        // Update any resize-dependent calculations
        this.updateCurrentSection();
        
        // Trigger custom resize event
        this.dispatchCustomEvent('cvAppResize', {
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    handleGlobalClick(e) {
        // Handle modal closes
        if (e.target.classList.contains('modal-backdrop')) {
            this.closeModal();
        }
        
        // Handle dropdown closes
        if (!e.target.closest('.dropdown')) {
            this.closeAllDropdowns();
        }
    }

    handleKeydown(e) {
        // Escape key handling
        if (e.key === 'Escape') {
            this.closeModal();
            this.closeAllDropdowns();
        }
        
        // Accessibility: Tab navigation
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    }

    handlePageLoad() {
        // Remove loading states
        document.body.classList.remove('loading');
        
        // Trigger load complete event
        this.dispatchCustomEvent('cvAppLoaded');
        
        // Initialize any load-dependent features
        this.initializeContactForm();
    }

    handleVisibilityChange() {
        if (document.hidden) {
            // Pause animations when tab is not visible
            this.pauseAnimations();
        } else {
            // Resume animations when tab becomes visible
            this.resumeAnimations();
        }
    }

    initializeContactForm() {
        const contactForm = document.querySelector('#contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleContactFormSubmit.bind(this));
        }
    }

    handleContactFormSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (this.validateContactForm(data)) {
            this.submitContactForm(data);
        }
    }

    validateContactForm(data) {
        const errors = [];
        
        if (!data.name || data.name.trim().length < 2) {
            errors.push('Name must be at least 2 characters long');
        }
        
        if (!data.email || !this.isValidEmail(data.email)) {
            errors.push('Please enter a valid email address');
        }
        
        if (!data.message || data.message.trim().length < 10) {
            errors.push('Message must be at least 10 characters long');
        }
        
        if (errors.length > 0) {
            this.showFormErrors(errors);
            return false;
        }
        
        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showFormErrors(errors) {
        // Implementation for showing form errors
        console.error('Form validation errors:', errors);
    }

    submitContactForm(data) {
        // Implementation for form submission
        console.log('Submitting contact form:', data);
    }

    closeModal() {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
        }
    }

    closeAllDropdowns() {
        document.querySelectorAll('.dropdown.open').forEach(dropdown => {
            dropdown.classList.remove('open');
        });
    }

    pauseAnimations() {
        document.querySelectorAll('.animated-element').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    }

    resumeAnimations() {
        document.querySelectorAll('.animated-element').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }

    setupPerformanceOptimizations() {
        // Lazy loading for images
        this.setupLazyLoading();
        
        // Preload critical resources
        this.preloadCriticalResources();
        
        // Set up service worker if available
        this.registerServiceWorker();
    }

    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    preloadCriticalResources() {
        const criticalImages = [
            './IMG_9346 (2).jpg',  // Profile image used in hero and nav
            './progromming (1).jpeg'  // About section image
            // Removed unused images to prevent preload warnings
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    registerServiceWorker() {
        // Disabled for local development to avoid MIME type issues
        // Service workers work best in production with proper server configuration
        if ('serviceWorker' in navigator && location.protocol === 'https:') {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker registered successfully:', registration);
                })
                .catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
        } else {
            console.log('Service Worker skipped (development mode or not HTTPS)');
        }
    }

    // Utility functions
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    debounce(func, delay) {
        let timeoutId;
        return function() {
            const args = arguments;
            const context = this;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(context, args), delay);
        };
    }

    dispatchCustomEvent(eventName, detail = {}) {
        const event = new CustomEvent(eventName, { detail });
        document.dispatchEvent(event);
    }

    // Public API methods
    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            this.smoothScrollTo(element);
        }
    }

    showNotification(message, type = 'info') {
        // Implementation for showing notifications
        console.log(`${type.toUpperCase()}: ${message}`);
    }

    updateProgress(percentage) {
        const progressBar = document.querySelector('.page-progress');
        if (progressBar) {
            progressBar.style.width = percentage + '%';
        }
    }
}

// Enhanced project filtering
class ProjectFilter {
    constructor() {
        this.currentFilter = 'all';
        this.projects = document.querySelectorAll('.project-veiw-card');
        this.filterSelect = document.getElementById('PRO-LANG');
        
        this.init();
    }

    init() {
        if (this.filterSelect) {
            this.filterSelect.addEventListener('change', this.handleFilterChange.bind(this));
        }
        
        this.setupFilterButtons();
    }

    setupFilterButtons() {
        // Create modern filter buttons
        const container = document.querySelector('.categroy');
        if (container) {
            const filterButtons = [
                { value: 'all', label: 'All Projects' },
                { value: 'website', label: 'Web Development' },
                { value: 'java', label: 'Java' },
                { value: 'python', label: 'Python' },
                { value: 'javascript', label: 'JavaScript' },
                { value: 'mysql', label: 'Database' },
                { value: 'cyberSecurity', label: 'Security' }
            ];

            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'filter-buttons flex flex-wrap justify-center gap-2 mb-6';

            filterButtons.forEach(filter => {
                const button = document.createElement('button');
                button.className = 'btn btn-ghost filter-btn';
                button.dataset.filter = filter.value;
                button.textContent = filter.label;
                button.addEventListener('click', () => this.filterProjects(filter.value));
                
                if (filter.value === 'all') {
                    button.classList.add('active');
                }
                
                buttonContainer.appendChild(button);
            });

            container.appendChild(buttonContainer);
        }
    }

    handleFilterChange(e) {
        this.filterProjects(e.target.value);
    }

    filterProjects(filter) {
        this.currentFilter = filter;
        
        // Update button states
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });

        // Filter projects with animation
        this.projects.forEach((project, index) => {
            const shouldShow = filter === 'all' || project.classList.contains(filter);
            
            if (shouldShow) {
                setTimeout(() => {
                    project.style.display = 'block';
                    project.classList.add('animate-fade-in-up');
                }, index * 50);
            } else {
                project.style.display = 'none';
                project.classList.remove('animate-fade-in-up');
            }
        });
    }
}

// Enhanced carousel functionality
class ModernCarousel {
    constructor(selector) {
        this.carousel = document.querySelector(selector);
        if (!this.carousel) return;
        
        this.items = this.carousel.querySelectorAll('.carousel-item');
        this.currentIndex = 0;
        this.isAutoPlaying = true;
        this.autoPlayInterval = 5000;
        
        this.init();
    }

    init() {
        this.createControls();
        this.createIndicators();
        this.bindEvents();
        this.startAutoPlay();
    }

    createControls() {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-btn carousel-prev';
        prevBtn.innerHTML = '<i class="fa fa-chevron-left"></i>';
        prevBtn.addEventListener('click', () => this.prev());

        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-btn carousel-next';
        nextBtn.innerHTML = '<i class="fa fa-chevron-right"></i>';
        nextBtn.addEventListener('click', () => this.next());

        this.carousel.appendChild(prevBtn);
        this.carousel.appendChild(nextBtn);
    }

    createIndicators() {
        const indicators = document.createElement('div');
        indicators.className = 'carousel-indicators';

        this.items.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = 'carousel-indicator';
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => this.goTo(index));
            indicators.appendChild(indicator);
        });

        this.carousel.appendChild(indicators);
    }

    bindEvents() {
        // Pause on hover
        this.carousel.addEventListener('mouseenter', () => this.pauseAutoPlay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());

        // Touch/swipe support
        let startX = 0;
        this.carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        this.carousel.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        });
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updateCarousel();
    }

    prev() {
        this.currentIndex = this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
        this.updateCarousel();
    }

    goTo(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }

    updateCarousel() {
        // Update items
        this.items.forEach((item, index) => {
            item.classList.toggle('active', index === this.currentIndex);
        });

        // Update indicators
        const indicators = this.carousel.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }

    startAutoPlay() {
        if (this.isAutoPlaying) {
            this.autoPlayTimer = setInterval(() => this.next(), this.autoPlayInterval);
        }
    }

    pauseAutoPlay() {
        clearInterval(this.autoPlayTimer);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main app
    window.cvApp = new CVApp();
    
    // Initialize project filter
    window.projectFilter = new ProjectFilter();
    
    // Initialize carousels
    window.certCarousel = new ModernCarousel('.main-cert');
    
    // Enhanced contact functionality
    window.ContactShow = function() {
        const contactInfo = document.getElementById('contact-info');
        if (contactInfo) {
            contactInfo.classList.toggle('active');
        }
    };
    
    // Enhanced navigation functions
    window.smoothScrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    console.log('All CV enhancements loaded successfully!');
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CVApp, ProjectFilter, ModernCarousel };
}
