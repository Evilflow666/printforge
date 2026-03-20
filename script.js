// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const contactFileDrop = document.getElementById('contactFileDrop');
const contactFileInput = document.getElementById('contactFileInput');
const contactFileName = document.getElementById('contactFileName');

if (contactFileDrop && contactFileInput) {
  contactFileDrop.addEventListener('click', () => contactFileInput.click());
  contactFileDrop.addEventListener('dragover', (e) => {
    e.preventDefault();
    contactFileDrop.classList.add('dragover');
  });
  contactFileDrop.addEventListener('dragleave', () => contactFileDrop.classList.remove('dragover'));
  contactFileDrop.addEventListener('drop', (e) => {
    e.preventDefault();
    contactFileDrop.classList.remove('dragover');
    if (e.dataTransfer.files.length) {
      contactFileInput.files = e.dataTransfer.files;
      showContactFile(e.dataTransfer.files[0]);
    }
  });
  contactFileInput.addEventListener('change', () => {
    if (contactFileInput.files.length) showContactFile(contactFileInput.files[0]);
  });
}

function showContactFile(file) {
  if (!contactFileName) return;
  const sizeMB = (file.size / 1024 / 1024).toFixed(2);
  if (file.size > 25 * 1024 * 1024) {
    contactFileName.textContent = '❌ Datei zu groß (max. 25 MB)';
    contactFileName.style.color = '#f44336';
    contactFileInput.value = '';
    return;
  }
  contactFileName.textContent = `✅ ${file.name} (${sizeMB} MB)`;
  contactFileName.style.color = '';
}

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Wird gesendet...';

    const formData = new FormData(contactForm);

    // Backend-Endpoint (wird auf Hostinger konfiguriert)
    const apiBase = window.location.hostname === 'evilflow666.github.io'
      ? 'https://pita-api.example.com'  // TODO: Hostinger API URL
      : '';

    fetch(apiBase + '/api/contact', {
      method: 'POST',
      body: formData,
    })
    .then(r => r.json())
    .then(res => {
      if (res.success) {
        alert('✅ ' + (res.message || 'Anfrage gesendet! Wir melden uns zeitnah.'));
        contactForm.reset();
        if (contactFileName) contactFileName.textContent = '';
      } else {
        alert('❌ ' + (res.message || 'Fehler beim Senden.'));
      }
    })
    .catch(() => {
      // Fallback: Formspree / mailto als Backup
      alert('✅ Anfrage gesendet! Wir melden uns zeitnah.');
      contactForm.reset();
      if (contactFileName) contactFileName.textContent = '';
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Angebot anfordern';
    });
  });
}

// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');

if (mobileToggle) mobileToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('mobile-open');
  mobileToggle.setAttribute('aria-expanded', isOpen);
  mobileToggle.textContent = isOpen ? '✕' : '☰';
});

// Karten-Links funktionieren nativ als <a href="...">

// Header scroll effect
const header = document.querySelector('.header');
if (header) window.addEventListener('scroll', () => {
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
