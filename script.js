// File Upload Handler
const fileDrop = document.getElementById('fileDrop');
const fileInput = document.getElementById('fileUpload');
const fileNameDisplay = document.getElementById('fileName');

fileDrop.addEventListener('click', () => fileInput.click());

fileDrop.addEventListener('dragover', (e) => {
  e.preventDefault();
  fileDrop.classList.add('dragover');
});

fileDrop.addEventListener('dragleave', () => {
  fileDrop.classList.remove('dragover');
});

fileDrop.addEventListener('drop', (e) => {
  e.preventDefault();
  fileDrop.classList.remove('dragover');
  if (e.dataTransfer.files.length) {
    fileInput.files = e.dataTransfer.files;
    showFileName(e.dataTransfer.files[0]);
  }
});

fileInput.addEventListener('change', () => {
  if (fileInput.files.length) {
    showFileName(fileInput.files[0]);
  }
});

function showFileName(file) {
  const sizeMB = (file.size / 1024 / 1024).toFixed(2);
  fileNameDisplay.textContent = `✅ ${file.name} (${sizeMB} MB)`;
}

// Form Submit
const form = document.getElementById('quoteForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    file: fileInput.files[0]?.name || 'Keine Datei',
    service: document.getElementById('service').value,
    type: document.getElementById('type').value,
    quantity: document.getElementById('quantity').value,
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    notes: document.getElementById('notes').value,
  };

  // TODO: Backend-Integration (E-Mail oder API)
  console.log('Angebotsanfrage:', data);
  alert('Vielen Dank! Ihre Anfrage wurde gesendet. Wir melden uns in Kürze.');
  form.reset();
  fileNameDisplay.textContent = '';
});

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
