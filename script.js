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

  // STL/3MF → 3D Viewer aktivieren
  const ext = file.name.split('.').pop().toLowerCase();
  if (ext === 'stl') {
    const preview = document.getElementById('stlPreview');
    preview.style.display = 'block';
    if (!scene) initViewer('viewer3d');
    loadSTL(file);
  }
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

  // Backend-Integration
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Wird gesendet...';

  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('service', data.service);
  formData.append('type', data.type);
  formData.append('quantity', data.quantity);
  formData.append('notes', data.notes);
  if (fileInput.files[0]) {
    formData.append('file', fileInput.files[0]);
  }

  fetch('http://69.62.105.159:3000/api/quote', {
    method: 'POST',
    body: formData,
  })
  .then(r => r.json())
  .then(res => {
    if (res.success) {
      alert('✅ ' + res.message);
      form.reset();
      fileNameDisplay.textContent = '';
    } else {
      alert('❌ ' + res.message);
    }
  })
  .catch(() => {
    alert('❌ Verbindungsfehler. Bitte versuchen Sie es später erneut.');
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Angebot anfordern';
  });
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

// Klick auf Leistungskarte → Service vorauswählen
document.querySelectorAll('.card[data-service]').forEach(card => {
  card.addEventListener('click', function(e) {
    e.preventDefault();
    const service = this.dataset.service;
    const select = document.getElementById('service');
    if (select) {
      select.value = service;
      select.style.borderColor = '#E8772E';
      setTimeout(() => select.style.borderColor = '', 2000);
    }
    document.getElementById('angebot').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
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
