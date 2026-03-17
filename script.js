// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Wird gesendet...';

    // Formular-Daten sammeln
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    const formData = new FormData();
    inputs.forEach(input => {
      if (input.name) formData.append(input.name, input.value);
    });

    // TODO: Backend-Endpoint konfigurieren
    setTimeout(() => {
      alert('✅ Anfrage gesendet! Wir melden uns zeitnah.');
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Angebot anfordern';
    }, 800);
  });
}

// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');

mobileToggle.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '64px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.background = 'rgba(10, 22, 40, 0.98)';
  nav.style.padding = '16px 24px';
  nav.style.gap = '16px';
  nav.style.borderBottom = '1px solid #2A4468';
});

// Karten-Links funktionieren nativ als <a href="...">

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll reveal animation
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
document.querySelectorAll('.card, .step, .upload-form, .gallery-placeholder').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// ===== LIGHTBOX =====
function openLightbox(el) {
  const img = el.querySelector('img');
  if (!img) return;
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  lb.classList.add('active');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile nav
      if (window.innerWidth <= 768) {
        nav.style.display = 'none';
      }
    }
  });
});
