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

function contactLang() {
  const stored = localStorage.getItem('pita-lang');
  if (stored) return stored;
  return (document.documentElement.lang || 'de').slice(0, 2);
}

function contactCopy() {
  const lang = contactLang();
  const copy = {
    de: { sending: 'Wird gesendet...', success: '✅ Anfrage gespeichert. Wir melden uns so schnell wie möglich.', error: '❌ Anfrage konnte gerade nicht gespeichert werden. Bitte später erneut versuchen.' },
    en: { sending: 'Sending...', success: '✅ Request saved. We will get back to you as soon as possible.', error: '❌ Request could not be saved right now. Please try again later.' },
    fr: { sending: 'Envoi...', success: '✅ Demande enregistree. Nous reviendrons vers vous rapidement.', error: '❌ La demande n a pas pu etre enregistree pour le moment. Merci de reessayer plus tard.' },
    es: { sending: 'Enviando...', success: '✅ Solicitud guardada. Te responderemos lo antes posible.', error: '❌ La solicitud no pudo guardarse ahora mismo. Intentalo de nuevo mas tarde.' },
    it: { sending: 'Invio...', success: '✅ Richiesta salvata. Ti risponderemo il prima possibile.', error: '❌ La richiesta non puo essere salvata in questo momento. Riprova piu tardi.' }
  };
  return copy[lang] || copy.de;
}

function ensureContactStatus() {
  let el = document.getElementById('contactStatus');
  if (el) return el;
  el = document.createElement('p');
  el.id = 'contactStatus';
  el.style.marginTop = '12px';
  el.style.fontWeight = '600';
  contactForm.appendChild(el);
  return el;
}

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const statusEl = ensureContactStatus();
    const copy = contactCopy();
    const originalHtml = submitBtn ? submitBtn.innerHTML : '';

    statusEl.textContent = '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = copy.sending;
    }

    try {
      const formData = new FormData(contactForm);
      const res = await fetch(contactForm.action || '/api/contact', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      let data = null;
      try { data = await res.json(); } catch (_) {}
      if (!res.ok || !data || data.ok !== true) throw new Error('request_failed');

      contactForm.reset();
      if (contactFileName) contactFileName.textContent = '';
      statusEl.textContent = copy.success;
      statusEl.style.color = '#4caf50';
    } catch (err) {
      statusEl.textContent = copy.error;
      statusEl.style.color = '#f44336';
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHtml;
      }
    }
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

// Mobile dropdowns: use tap to expand/collapse instead of hover behavior
document.querySelectorAll('.nav-dropdown > .nav-dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    if (window.innerWidth > 768) return;
    e.preventDefault();
    const parent = trigger.closest('.nav-dropdown');
    if (!parent) return;
    const shouldOpen = !parent.classList.contains('open');
    document.querySelectorAll('.nav-dropdown.open').forEach(dd => dd.classList.remove('open'));
    if (shouldOpen) parent.classList.add('open');
  });
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
        nav.classList.remove('mobile-open');
        mobileToggle?.setAttribute('aria-expanded', 'false');
        if (mobileToggle) mobileToggle.textContent = '☰';
        document.querySelectorAll('.nav-dropdown.open').forEach(dd => dd.classList.remove('open'));
      }
    }
  });
});

// Scroll to top on page load (unless hash anchor is intentional)
if (window.location.hash === '' || window.location.hash === '#') {
  window.scrollTo(0, 0);
}
