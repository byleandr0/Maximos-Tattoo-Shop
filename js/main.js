document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Header Scroll Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Intersection Observer for Fade-up animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeUpElements = document.querySelectorAll('.fade-up');
  fadeUpElements.forEach(el => observer.observe(el));
});

// Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    }
});

document.addEventListener('DOMContentLoaded', () => {
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      // Close all others
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      // Toggle current
      item.classList.toggle('active');
    });
  });
});
