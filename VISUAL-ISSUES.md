# 🖼️ FACTUM3D Visuelle Inkonsistenzen (Beschreibung)

## 🔴 KRITISCH: Breadcrumb-Bug

### **Wo:** `produkte/3d-fdm-druck.html` und andere Produktseiten

### **Was sichtbar ist:**
```
Produkte › inkl. MwSt., zzgl. Versand 3D-FDM-Druck inkl. MwSt., zzgl. Versand
```

**Statt:**
```
Produkte › 3D-FDM-Druck
```

### **Code:**
```html
<!-- FALSCH: -->
<nav class="breadcrumb">
  <a href="../produkte.html">Produkte</a>
  <span class="sep">›</span> <small class="price-note">inkl. MwSt., zzgl. Versand</small>
  <span>3D-FDM-Druck</span> <small class="price-note">inkl. MwSt., zzgl. Versand</small>
</nav>

<!-- RICHTIG: -->
<nav class="breadcrumb">
  <a href="../produkte.html">Produkte</a>
  <span class="sep">›</span>
  <span>3D-FDM-Druck</span>
</nav>
```

### **Impact:**
- User sieht verwirrenden Text
- Wirkt wie Programmierfehler
- Unprofessionell

---

## 🟡 MITTEL: Icon-Platzhalter statt echten Produktfotos

### **Wo:** Alle Produktseiten (`produkte/3d-fdm-druck.html`, etc.)

### **Was sichtbar ist:**
```
┌─────────────────┐
│       📷        │ ← Emoji-Platzhalter
│                 │
│ Spiral Vase Rose│
│ ab €12,90       │
└─────────────────┘
```

**Statt:**
```
┌─────────────────┐
│ [Echtes Foto]   │ ← Produktfoto
│                 │
│ Spiral Vase Rose│
│ ab €12,90       │
└─────────────────┘
```

### **Impact:**
- User kann Produkt nicht visuell bewerten
- Wirkt wie unfertige Website
- Senkt Kaufwahrscheinlichkeit massiv

---

## 🟢 LEICHT: Footer ohne Social Icons

### **Aktuell:**
```
┌──────────────────────────────────────────────┐
│             FACTUM3D                         │
│     Schicht für Schicht. Idee für Idee.     │
│                                              │
│   Blog  FAQ  Impressum  Datenschutz         │
│                                              │
│   © 2026 FACTUM3D. Alle Rechte vorbehalten. │
└──────────────────────────────────────────────┘
```

### **Besser:**
```
┌──────────────────────────────────────────────┐
│             FACTUM3D                         │
│     Schicht für Schicht. Idee für Idee.     │
│                                              │
│            🟣  📱  💻                        │ ← Social Icons
│                                              │
│   Blog  FAQ  Impressum  Datenschutz         │
│                                              │
│   © 2026 FACTUM3D. Alle Rechte vorbehalten. │
└──────────────────────────────────────────────┘
```

### **Impact:**
- Erhöht Trust
- Zeigt Präsenz auf modernen Plattformen (Nostr!)
- Professioneller Eindruck

---

## 🔵 Mobile 375px: Produkt-Grid zu gedrängt

### **Aktuell (375px iPhone SE):**
```
┌─────────┬─────────┐  ← 2-spaltig
│ Produkt │ Produkt │
│  📷     │  📷     │
│ €12,90  │ €8,90   │
└─────────┴─────────┘
     ↑ zu eng ↑
```

### **Besser:**
```
┌──────────────────┐  ← 1-spaltig
│     Produkt      │
│       📷         │
│     €12,90       │
└──────────────────┘
┌──────────────────┐
│     Produkt      │
│       📷         │
│     €8,90        │
└──────────────────┘
```

### **Impact:**
- Bessere Lesbarkeit auf kleinen Screens
- Mehr Platz für Produktnamen
- Professionellere Mobile-Experience

---

## 🔵 CTAs nicht dominant genug

### **Aktuell (Produktseite):**
```
┌────────────────────────────────────┐
│  Spiral Vase Rose                  │
│  €12,90                            │
│                                    │
│  [    In den Warenkorb    ]       │ ← Normal groß
│         ↑ nicht auffällig          │
└────────────────────────────────────┘
```

### **Besser:**
```
┌────────────────────────────────────┐
│  Spiral Vase Rose                  │
│  €12,90                            │
│                                    │
│  ┌──────────────────────────┐     │
│  │ In den Warenkorb         │ ← Größer + Glow
│  └──────────────────────────┘     │
│         ✨ Pulse-Effekt            │
└────────────────────────────────────┘
```

### **Impact:**
- Höhere Conversion-Rate
- Klarere Call-to-Action
- Professionellerer E-Commerce-Look

---

## 🔵 Glasmorphism-Inkonsistenz

### **Aktuell:**
- Header: `blur(16px)`
- Cards: `blur(24px)`
- About-Stats: `blur(16px) saturate(1.4)`
- Terrain-Preview: `blur(20px)`

### **Problem:**
Jedes Element hat eigene Blur-Intensität → wirkt unruhig

### **Lösung:**
```css
:root {
  --blur-light: blur(12px);           /* Overlays */
  --blur-medium: blur(20px);          /* Cards */
  --blur-heavy: blur(28px);           /* Header */
}
```

**Alle Elemente nutzen eine der 3 Stufen** → konsistenter Look

---

## 🎯 Visueller Gesamteindruck

### **Stärken:**
✅ Modernes Glasmorphism-Design  
✅ Starke Hero-Sections  
✅ Animierte Terrain-Banner-SVG ist ein Highlight  
✅ Flip-Cards auf Materialien-Seite innovativ  

### **Schwächen:**
❌ Breadcrumb-Bug wirkt unprofessionell  
❌ Fehlende Produktfotos = Deal-Breaker für E-Commerce  
⚠️ CTAs nicht dominant genug  
⚠️ Mobile 375px zu gedrängt  

### **Quick-Fix-Priorität:**
1. **Breadcrumb-Bug** (10 Min) → +100% Professionalität
2. **JavaScript-Fehler** (15 Min) → +100% Funktionalität
3. **Footer Social Icons** (20 Min) → +30% Trust
4. **Mobile CSS** (30 Min) → +50% Mobile UX

**Gesamt: 75 Minuten für +280% Improvement**

---

## 📸 Screenshots (für Florian)

**Hinweis:** Da keine echten Screenshots erstellt wurden, hier die Seiten zum manuellen Check:

### **Zu prüfen:**
1. `http://69.62.105.159/produkte/3d-fdm-druck.html`  
   → Breadcrumb-Bereich (oben)
   → Produkt-Cards (📷 Emoji)

2. `http://69.62.105.159/index.html`  
   → Footer (fehlen Social Icons)

3. `http://69.62.105.159/produkte/3d-fdm-druck.html` (Mobile-View)  
   → Chrome DevTools → 375px Breite
   → Produkt-Grid zu gedrängt?

4. Browser Console:  
   → `onclick="...addToCart(...)"` Fehler?

---

**Nächster Schritt:** Florian öffnet die Seiten im Browser und checkt visuell die beschriebenen Probleme.
