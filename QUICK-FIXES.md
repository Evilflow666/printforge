# 🔧 FACTUM3D Quick-Fixes (Code-Ebene)

## 1. 🔴 KRITISCH: Breadcrumb-Bug entfernen

### **Problem:**
In `produkte/3d-fdm-druck.html` (und vermutlich anderen Produktseiten) wird `<small class="price-note">inkl. MwSt., zzgl. Versand</small>` mehrfach in unlogischen Positionen eingefügt.

### **Beispiel (FALSCH):**
```html
<span class="katalog-icon">🏠</span> <small class="price-note">inkl. MwSt., zzgl. Versand</small>
<div>
  <h2>🏠 Home & Deko</h2>
```

### **Fix:**
Alle `<small class="price-note">inkl. MwSt., zzgl. Versand</small>` außer:
- Nach Preisangaben (`€12,90`)
- Im Footer der Produktseite

**Zu entfernen:**
- Nach Icons (`🏠`, `🗂️`, etc.)
- In Breadcrumbs
- Nach H1-Titeln
- Im Warenkorb-Icon-Bereich

### **Dateien:**
- `produkte/3d-fdm-druck.html`
- `produkte/lasercut.html`
- Alle anderen Produktseiten

### **Search & Replace:**
```bash
# Entfernen aller falsch platzierten price-notes
grep -r '<small class="price-note">inkl. MwSt., zzgl. Versand</small>' produkte/ | grep -v '<span class="price-tag">'
```

---

## 2. 🟡 JavaScript-Fehler: `addToCart()` Syntax

### **Problem:**
```javascript
onclick="event.stopPropagation();addToCart('fdm-home-1,'Spiral Vase Rose',12.90,1)"
```
→ Fehlende Anführungszeichen nach `'fdm-home-1`

### **Fix:**
```javascript
onclick="event.stopPropagation();addToCart('fdm-home-1','Spiral Vase Rose',12.90,1)"
```

### **Globaler Search & Replace:**
```bash
# Finde alle falschen Syntax-Patterns
grep -r "addToCart('[^']*,[^']" produkte/

# Korrigiere:
sed -i "s/addToCart('\([^']*\),'/addToCart('\1','/g" produkte/*.html
```

### **Dateien betroffen:**
- `produkte/3d-fdm-druck.html`
- Vermutlich alle Produktseiten mit Warenkorb-Button

---

## 3. 🟢 Footer Social Icons hinzufügen

### **Aktueller Footer:**
```html
<footer class="footer">
  <div class="container footer-inner">
    <span class="logo">FACTUM<span class="accent">3D</span></span>
    <p><span data-i18n="footer.tagline">Schicht für Schicht. Idee für Idee.</span></p>
    <div class="footer-links">
      <a href="blog.html" data-i18n="nav.blog">Blog</a>
      <a href="faq.html" data-i18n="nav.faq">FAQ</a>
      <a href="impressum.html"><span data-i18n="footer.impressum">Impressum</span></a>
      <a href="datenschutz.html"><span data-i18n="footer.datenschutz">Datenschutz</span></a>
    </div>
  </div>
  <div class="footer-bottom">
    <p data-i18n="footer.copy">&copy; 2026 FACTUM3D. Alle Rechte vorbehalten.</p>
  </div>
</footer>
```

### **Neuer Footer (mit Social Icons):**
```html
<footer class="footer">
  <div class="container footer-inner">
    <span class="logo">FACTUM<span class="accent">3D</span></span>
    <p><span data-i18n="footer.tagline">Schicht für Schicht. Idee für Idee.</span></p>
    
    <!-- NEU: Social Icons -->
    <div class="footer-social">
      <a href="https://primal.net/npub15ham9vsa9ksmftajz2fhs59sx7k67qlea2vcrs4870lk8lsev0eqxyj589" aria-label="Nostr" title="FACTUM3D auf Nostr">🟣</a>
      <a href="https://t.me/factum3d" aria-label="Telegram" title="FACTUM3D auf Telegram">📱</a>
      <a href="https://github.com/factum3d" aria-label="GitHub" title="FACTUM3D auf GitHub">💻</a>
    </div>
    
    <div class="footer-links">
      <a href="blog.html" data-i18n="nav.blog">Blog</a>
      <a href="faq.html" data-i18n="nav.faq">FAQ</a>
      <a href="impressum.html"><span data-i18n="footer.impressum">Impressum</span></a>
      <a href="datenschutz.html"><span data-i18n="footer.datenschutz">Datenschutz</span></a>
    </div>
  </div>
  <div class="footer-bottom">
    <p data-i18n="footer.copy">&copy; 2026 FACTUM3D. Alle Rechte vorbehalten.</p>
  </div>
</footer>
```

### **CSS hinzufügen (in `style.css`):**
```css
/* Footer Social Icons */
.footer-social {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 12px 0;
}
.footer-social a {
  font-size: 1.8rem;
  text-decoration: none;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0.7;
}
.footer-social a:hover {
  transform: scale(1.15);
  opacity: 1;
}
```

---

## 4. 🟢 Hero-Clippy-Button subtiler gestalten

### **Aktuell:**
```html
<button type="button" id="hero-clippy-hint" class="btn btn-primary hero-cta" data-i18n="hero.clippyHint">
  💡 Brauchst du Hilfe? Frag Clippy!
</button>
```

### **Fix 1: Sekundärer Button-Style**
```html
<button type="button" id="hero-clippy-hint" class="btn btn-secondary hero-cta-subtle" data-i18n="hero.clippyHint">
  💡 Frag Clippy
</button>
```

### **Fix 2: CSS anpassen**
```css
/* Subtiler Hero-CTA für Clippy */
.hero-cta-subtle {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.1);
  font-size: 0.95rem;
  padding: 14px 32px;
  opacity: 0.8;
}
.hero-cta-subtle:hover {
  opacity: 1;
  background: rgba(255,255,255,0.05);
}
```

---

## 5. 🔵 Mobile-Grid auf 375px optimieren

### **Aktuelles CSS:**
```css
@media (max-width: 768px) {
  .grid-3 { grid-template-columns: 1fr; }
}
```

### **Problem:**
`.katalog-grid` (Produktseiten) bleibt 2-spaltig bis 768px → auf 375px zu gedrängt

### **Fix:**
```css
/* Neue Media Query für sehr kleine Screens */
@media (max-width: 480px) {
  .katalog-grid {
    grid-template-columns: 1fr !important;
    gap: 20px;
  }
  
  h1 {
    font-size: clamp(1.8rem, 5vw, 2.5rem);
  }
  
  .hero-sub {
    font-size: 1rem;
  }
}
```

---

## 6. 🔵 Glasmorphism-Konsistenz

### **Aktuell:**
```css
.card {
  backdrop-filter: blur(24px);
}
.about-stat {
  backdrop-filter: blur(16px) saturate(1.4);
}
.terrain-preview-card {
  backdrop-filter: blur(20px);
}
```

### **Standardisierung:**
```css
/* Glasmorphism-Stufen definieren */
:root {
  --blur-light: blur(12px);
  --blur-medium: blur(20px) saturate(1.3);
  --blur-heavy: blur(28px) saturate(1.5);
}

/* Anwenden */
.card {
  backdrop-filter: var(--blur-medium);
  -webkit-backdrop-filter: var(--blur-medium);
}
.about-stat {
  backdrop-filter: var(--blur-medium);
  -webkit-backdrop-filter: var(--blur-medium);
}
.terrain-preview-card {
  backdrop-filter: var(--blur-medium);
  -webkit-backdrop-filter: var(--blur-medium);
}
.header {
  backdrop-filter: var(--blur-heavy);
  -webkit-backdrop-filter: var(--blur-heavy);
}
```

---

## 7. 🔵 CTAs prominenter machen

### **Aktuell:**
```css
.btn-primary {
  padding: 18px 52px;
  font-size: 1.05rem;
}
```

### **Fix:**
```css
.btn-primary {
  padding: 22px 64px;
  font-size: 1.1rem;
  box-shadow: 0 8px 32px rgba(198, 125, 74, 0.25);
}
.btn-primary:hover {
  box-shadow: 0 12px 48px rgba(198, 125, 74, 0.4);
}
```

### **Produktseiten: Pulse-Animation für Warenkorb-Button**
```css
@keyframes ctaPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(198, 125, 74, 0.4); }
  50% { box-shadow: 0 0 0 12px rgba(198, 125, 74, 0); }
}

.btn-cart {
  animation: ctaPulse 2s infinite;
}
.btn-cart:hover {
  animation: none;
}
```

---

## 8. ♿ ARIA-Labels für Dropdowns

### **Aktuell:**
```html
<div class="nav-dropdown">
  <a href="produkte.html" class="nav-dropdown-trigger">Produkte</a>
  <div class="nav-dropdown-menu">
    <a href="produkte/3d-fdm-druck.html">🖨️ 3D-FDM-Druck</a>
    ...
  </div>
</div>
```

### **Fix:**
```html
<div class="nav-dropdown">
  <a href="produkte.html" 
     class="nav-dropdown-trigger" 
     aria-haspopup="true" 
     aria-expanded="false"
     id="produkte-menu-trigger">
    Produkte
  </a>
  <div class="nav-dropdown-menu" 
       role="menu" 
       aria-labelledby="produkte-menu-trigger">
    <a href="produkte/3d-fdm-druck.html" role="menuitem">🖨️ 3D-FDM-Druck</a>
    <a href="produkte/lasercut.html" role="menuitem">✂️ Lasercut & Gravur</a>
    <a href="terrain.html" role="menuitem">🏔️ 3D-Reliefkarte</a>
  </div>
</div>
```

### **JavaScript hinzufügen (in `script.js`):**
```javascript
// ARIA-State für Dropdowns aktualisieren
document.querySelectorAll('.nav-dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('mouseenter', () => {
    trigger.setAttribute('aria-expanded', 'true');
  });
  trigger.addEventListener('mouseleave', () => {
    trigger.setAttribute('aria-expanded', 'false');
  });
});
```

---

## 9. 🔵 Whitespace-Optimierung

### **Materialien-Seite:**
```css
/* Aktuell */
.mat-flip-grid {
  gap: 24px;
}

/* Fix */
.mat-flip-grid {
  gap: 32px;
}

@media (min-width: 1440px) {
  .mat-flip-grid {
    gap: 40px;
  }
}
```

### **Terrain-Seite (Config-Steps):**
```css
.config-card {
  padding: 40px; /* statt 30px */
  margin-bottom: 40px; /* statt 30px */
}
```

---

## 10. 🟣 Card Border-Radius standardisieren

### **Aktuell (inkonsistent):**
```css
.card { border-radius: 24px; }
.produkte-card { border-radius: 1.25rem; } /* 20px */
.about-stat { border-radius: 1rem; } /* 16px */
```

### **Fix (standardisiert):**
```css
/* Standard: 20px für alle Cards */
.card,
.produkte-card,
.about-stat,
.about-machine,
.about-value,
.value-card {
  border-radius: 20px;
}

/* Nur für kleinere Elemente: 16px */
.gallery-item,
.mat-flip-card {
  border-radius: 16px;
}

/* Nur für Buttons: 980px (Pill) */
.btn {
  border-radius: 980px;
}
```

---

## 🚀 Deployment-Checklist

- [ ] 1. Breadcrumb-Bug entfernen (Search & Replace)
- [ ] 2. `addToCart()` Syntax fixen (Search & Replace)
- [ ] 3. Footer Social Icons hinzufügen
- [ ] 4. Hero-Clippy-Button subtiler machen
- [ ] 5. Mobile-Grid CSS erweitern (375px)
- [ ] 6. Glasmorphism-Variablen standardisieren
- [ ] 7. CTA-Buttons vergrößern + Pulse-Animation
- [ ] 8. ARIA-Labels für Dropdowns
- [ ] 9. Whitespace-Optimierungen
- [ ] 10. Border-Radius standardisieren
- [ ] 11. Git commit + push
- [ ] 12. Nginx reload (falls nötig)

---

**Geschätzter Zeitaufwand:**
- Quick-Fixes (1-4): **1 Stunde**
- Design-Optimierungen (5-10): **3 Stunden**
- **Gesamt:** ~4 Stunden für alle Fixes
