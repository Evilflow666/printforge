/**
 * PitA Auth System — localStorage Mode (Hostinger-Backend ready)
 * Wenn AUTH_BACKEND gesetzt → API-Calls statt localStorage
 */

// CONFIG: Später für Hostinger einfach URL eintragen
const AUTH_BACKEND = null; // null = localStorage Mode

const Auth = {

  // --- Helpers ---
  async _hash(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  },

  _getUsers() {
    try {
      return JSON.parse(localStorage.getItem('pita_users') || '[]');
    } catch { return []; }
  },

  _saveUsers(users) {
    localStorage.setItem('pita_users', JSON.stringify(users));
  },

  _generateId() {
    return 'u_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  },

  // --- Validierung ---
  validate(fields) {
    const errors = {};
    if (fields.name !== undefined && fields.name.trim().length < 2) {
      errors.name = 'auth.error.name';
    }
    if (fields.email !== undefined) {
      const e = fields.email.trim();
      if (!e.includes('@') || !e.includes('.')) {
        errors.email = 'auth.error.email';
      }
    }
    if (fields.password !== undefined && fields.password.length < 8) {
      errors.password = 'auth.error.password';
    }
    if (fields.confirm !== undefined && fields.password !== fields.confirm) {
      errors.confirm = 'auth.error.nomatch';
    }
    return errors;
  },

  // --- Registrierung ---
  async register(name, email, password, confirm) {
    const errors = this.validate({ name, email, password, confirm });
    if (Object.keys(errors).length > 0) return { ok: false, errors };

    if (AUTH_BACKEND) {
      const res = await fetch(AUTH_BACKEND + '/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (!res.ok) return { ok: false, errors: { email: data.error || 'auth.error.exists' } };
      localStorage.setItem('pita_session', JSON.stringify(data.user));
      return { ok: true, user: data.user };
    }

    const users = this._getUsers();
    if (users.find(u => u.email.toLowerCase() === email.trim().toLowerCase())) {
      return { ok: false, errors: { email: 'auth.error.exists' } };
    }

    const passwordHash = await this._hash(password);
    const user = {
      id: this._generateId(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      passwordHash,
      createdAt: new Date().toISOString(),
      address: { street: '', zip: '', city: '', country: '' },
      orders: []
    };

    users.push(user);
    this._saveUsers(users);

    const session = { id: user.id, name: user.name, email: user.email };
    localStorage.setItem('pita_session', JSON.stringify(session));
    return { ok: true, user: session };
  },

  // --- Login ---
  async login(email, password) {
    const errors = this.validate({ email, password });
    if (Object.keys(errors).length > 0) return { ok: false, errors };

    if (AUTH_BACKEND) {
      const res = await fetch(AUTH_BACKEND + '/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) return { ok: false, errors: { email: data.error || 'auth.error.wrong' } };
      localStorage.setItem('pita_session', JSON.stringify(data.user));
      return { ok: true, user: data.user };
    }

    const users = this._getUsers();
    const user = users.find(u => u.email === email.trim().toLowerCase());
    if (!user) return { ok: false, errors: { email: 'auth.error.wrong' } };

    const hash = await this._hash(password);
    if (hash !== user.passwordHash) return { ok: false, errors: { password: 'auth.error.wrong' } };

    const session = { id: user.id, name: user.name, email: user.email };
    localStorage.setItem('pita_session', JSON.stringify(session));
    return { ok: true, user: session };
  },

  // --- Logout ---
  logout() {
    localStorage.removeItem('pita_session');
    updateAuthNav();
    window.location.href = (window.location.pathname.includes('/') && !window.location.pathname.endsWith('/')) 
      ? window.location.pathname.replace(/[^/]*$/, '') + 'index.html'
      : 'index.html';
  },

  // --- Aktuellen User holen ---
  getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem('pita_session'));
    } catch { return null; }
  },

  // --- Eingeloggt? ---
  isLoggedIn() {
    return !!this.getCurrentUser();
  },

  // --- Profil updaten ---
  async updateProfile(data) {
    const session = this.getCurrentUser();
    if (!session) return { ok: false };

    if (AUTH_BACKEND) {
      const res = await fetch(AUTH_BACKEND + '/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: session.id, ...data })
      });
      return await res.json();
    }

    const users = this._getUsers();
    const idx = users.findIndex(u => u.id === session.id);
    if (idx === -1) return { ok: false };

    if (data.name) users[idx].name = data.name;
    if (data.address) users[idx].address = { ...users[idx].address, ...data.address };
    this._saveUsers(users);

    // Session updaten
    if (data.name) {
      session.name = data.name;
      localStorage.setItem('pita_session', JSON.stringify(session));
    }
    return { ok: true };
  },

  // --- Volles Profil laden ---
  getFullProfile() {
    const session = this.getCurrentUser();
    if (!session) return null;
    const users = this._getUsers();
    const user = users.find(u => u.id === session.id);
    if (!user) return null;
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      address: user.address || { street: '', zip: '', city: '', country: '' },
      orders: user.orders || []
    };
  },

  // --- Konto löschen ---
  deleteAccount() {
    const session = this.getCurrentUser();
    if (!session) return false;
    let users = this._getUsers();
    users = users.filter(u => u.id !== session.id);
    this._saveUsers(users);
    localStorage.removeItem('pita_session');
    return true;
  }
};


// ============================================================
// Auth Modal — Login/Register Overlay
// ============================================================

function createAuthModal() {
  if (document.getElementById('auth-modal-overlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'auth-modal-overlay';
  overlay.className = 'auth-modal-overlay';
  overlay.innerHTML = `
    <div class="auth-modal" role="dialog" aria-modal="true">
      <button class="auth-modal-close" onclick="closeAuthModal()" aria-label="Schließen">&times;</button>
      <div class="auth-tabs">
        <button class="auth-tab active" data-tab="login" data-i18n="auth.login.title" onclick="switchAuthTab('login')">Anmelden</button>
        <button class="auth-tab" data-tab="register" data-i18n="auth.register.title" onclick="switchAuthTab('register')">Registrieren</button>
      </div>

      <!-- LOGIN -->
      <form id="auth-login-form" class="auth-form" onsubmit="handleLogin(event)">
        <div class="auth-field">
          <label data-i18n="auth.email">E-Mail</label>
          <input type="email" id="auth-login-email" required autocomplete="email">
          <span class="auth-error" id="auth-login-email-error"></span>
        </div>
        <div class="auth-field">
          <label data-i18n="auth.password">Passwort</label>
          <div class="auth-password-wrap">
            <input type="password" id="auth-login-password" required autocomplete="current-password">
            <button type="button" class="auth-eye" onclick="togglePassword('auth-login-password', this)">👁</button>
          </div>
          <span class="auth-error" id="auth-login-password-error"></span>
        </div>
        <button type="submit" class="auth-submit" data-i18n="auth.login.btn">Anmelden</button>
        <p class="auth-forgot" onclick="showForgotHint()" data-i18n="auth.forgot">Passwort vergessen?</p>
        <p class="auth-forgot-hint" id="auth-forgot-hint" style="display:none" data-i18n="auth.forgot.hint">Diese Funktion kommt mit dem Hostinger-Backend.</p>
      </form>

      <!-- REGISTER -->
      <form id="auth-register-form" class="auth-form" style="display:none" onsubmit="handleRegister(event)">
        <div class="auth-field">
          <label data-i18n="auth.name">Vor- und Nachname</label>
          <input type="text" id="auth-register-name" required autocomplete="name">
          <span class="auth-error" id="auth-register-name-error"></span>
        </div>
        <div class="auth-field">
          <label data-i18n="auth.email">E-Mail</label>
          <input type="email" id="auth-register-email" required autocomplete="email">
          <span class="auth-error" id="auth-register-email-error"></span>
        </div>
        <div class="auth-field">
          <label data-i18n="auth.password">Passwort</label>
          <div class="auth-password-wrap">
            <input type="password" id="auth-register-password" required autocomplete="new-password">
            <button type="button" class="auth-eye" onclick="togglePassword('auth-register-password', this)">👁</button>
          </div>
          <span class="auth-error" id="auth-register-password-error"></span>
        </div>
        <div class="auth-field">
          <label data-i18n="auth.confirm">Passwort wiederholen</label>
          <div class="auth-password-wrap">
            <input type="password" id="auth-register-confirm" required autocomplete="new-password">
            <button type="button" class="auth-eye" onclick="togglePassword('auth-register-confirm', this)">👁</button>
          </div>
          <span class="auth-error" id="auth-register-confirm-error"></span>
        </div>
        <button type="submit" class="auth-submit" data-i18n="auth.register.btn">Konto erstellen</button>
      </form>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeAuthModal();
  });

  // i18n updaten falls verfügbar
  if (typeof setLang === 'function' && typeof getLang === 'function') {
    setLang(getLang());
  }
}

function openAuthModal(tab) {
  createAuthModal();
  const overlay = document.getElementById('auth-modal-overlay');
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  if (tab) switchAuthTab(tab);
  // Focus first input
  setTimeout(() => {
    const form = tab === 'register' ? 'auth-register-form' : 'auth-login-form';
    const firstInput = document.getElementById(form).querySelector('input');
    if (firstInput) firstInput.focus();
  }, 100);
}

function closeAuthModal() {
  const overlay = document.getElementById('auth-modal-overlay');
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = '';
  document.body.style.overflow = '';
  // Clear errors
  document.querySelectorAll('.auth-error').forEach(el => el.textContent = '');
}

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });
  document.getElementById('auth-login-form').style.display = tab === 'login' ? '' : 'none';
  document.getElementById('auth-register-form').style.display = tab === 'register' ? '' : 'none';
  document.querySelectorAll('.auth-error').forEach(el => el.textContent = '');
}

function togglePassword(inputId, btn) {
  const input = document.getElementById(inputId);
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
  } else {
    input.type = 'password';
    btn.textContent = '👁';
  }
}

function showForgotHint() {
  const hint = document.getElementById('auth-forgot-hint');
  if (hint) hint.style.display = hint.style.display === 'none' ? '' : 'none';
}

function _t(key) {
  if (typeof TRANSLATIONS !== 'undefined' && typeof getLang === 'function') {
    const lang = getLang();
    if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) return TRANSLATIONS[key][lang];
  }
  return key;
}

function showAuthErrors(prefix, errors) {
  document.querySelectorAll('.auth-error').forEach(el => el.textContent = '');
  for (const [field, key] of Object.entries(errors)) {
    const el = document.getElementById(`${prefix}-${field}-error`);
    if (el) el.textContent = _t(key);
  }
}

async function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('auth-login-email').value;
  const password = document.getElementById('auth-login-password').value;
  const result = await Auth.login(email, password);
  if (result.ok) {
    closeAuthModal();
    updateAuthNav();
  } else {
    showAuthErrors('auth-login', result.errors);
  }
}

async function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('auth-register-name').value;
  const email = document.getElementById('auth-register-email').value;
  const password = document.getElementById('auth-register-password').value;
  const confirm = document.getElementById('auth-register-confirm').value;
  const result = await Auth.register(name, email, password, confirm);
  if (result.ok) {
    closeAuthModal();
    updateAuthNav();
  } else {
    showAuthErrors('auth-register', result.errors);
  }
}


// ============================================================
// Nav Integration
// ============================================================

function updateAuthNav() {
  const loginBtn = document.getElementById('nav-login-btn');
  const registerBtn = document.getElementById('nav-register-btn');
  const userBtn = document.getElementById('nav-user-btn');
  if (!loginBtn || !registerBtn || !userBtn) return;

  if (Auth.isLoggedIn()) {
    const user = Auth.getCurrentUser();
    const nameParts = user.name.split(' ');
    const shortName = nameParts[0] + (nameParts.length > 1 ? ' ' + nameParts[nameParts.length-1].charAt(0) + '.' : '');
    loginBtn.style.display = 'none';
    registerBtn.style.display = 'none';
    userBtn.style.display = '';
    userBtn.textContent = '👤 ' + shortName;
  } else {
    loginBtn.style.display = '';
    registerBtn.style.display = '';
    userBtn.style.display = 'none';
  }
}

// Init on load
document.addEventListener('DOMContentLoaded', updateAuthNav);
