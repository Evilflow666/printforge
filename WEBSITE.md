# FACTUM3D Website — Baukasten-Dokumentation
*Stand: 25.03.2026 — Referenz für alle KI-Assistenten (Sonnet, Opus, Codex)*

## Überblick
- **Brand:** FACTUM3D (lat. factum = das Geschaffene)
- **Tagline:** "Schicht für Schicht. Idee für Idee."
- **Tech:** Pures HTML/CSS/JS, kein Framework, GitHub Pages
- **Repo:** `Evilflow666/factum3d` (umzubenennen von printforge)
- **Live:** https://evilflow666.github.io/printforge/
- **Sprachen:** 5 (DE/EN/FR/ES/IT) via i18n.js

---

## Dateistruktur

```
/
├── index.html              ← Hauptseite (Hero, Leistungen-Teaser, Galerie, Kontaktform)
├── produkte.html           ← Produktübersicht (2 Kategorie-Karten: FDM + Laser)
├── materialien.html        ← 18 FDM + 4 Resin + 4 Laser Materialien (Flip-Cards)
├── ueber-uns.html          ← Über uns (Geschichte, Printfarm, Maschinen, Werte)
├── blog.html               ← Blog
├── faq.html                ← FAQ
├── warenkorb.html          ← Warenkorb
├── profil.html             ← User-Profil
├── impressum.html          ← Impressum
├── datenschutz.html        ← Datenschutz
├── 404.html                ← 404-Seite
│
├── produkte/
│   ├── 3d-fdm-druck.html   ← FDM Produktliste (5 Kategorien × 4 Produkte)
│   ├── lasercut.html        ← Lasercut (Coming Soon Platzhalter)
│   ├── produkt.html         ← TEMPLATE: Dynamische Produktdetailseite (?id=fdm-home-1)
│   ├── produkte-data.js     ← DATEN: Alle 20 Produkte als JS-Objekt
│   ├── business.html        ← (alt, kann entfernt werden)
│   ├── deko.html            ← (alt, kann entfernt werden)
│   ├── funktionsteile.html  ← (alt, kann entfernt werden)
│   └── maker.html           ← (alt, kann entfernt werden)
│
├── leistungen/
│   ├── 3d-druck.html        ← FDM 3D-Druck Leistungsseite
│   ├── lasercutting.html     ← Lasercutting
│   ├── lasergravur.html      ← Lasergravur
│   ├── resin-druck.html      ← Resin
│   └── prototyping.html      ← Prototyping
│
├── images/                   ← Bilder (webp + jpg Fallbacks)
├── logo.svg                  ← SVG Logo (Berg + FACTUM3D Text)
├── favicon.svg               ← Favicon
│
├── style.css                 ← EINZIGES Stylesheet (alles drin)
├── i18n.js                   ← Übersetzungen (500+ Keys, 5 Sprachen)
├── script.js                 ← Allgemeine Funktionen (Kontaktform, Lightbox, Mobile-Nav)
├── clippy.js                 ← Clippy Assistent (~2000 Zeilen, komplex!)
├── cart.js                   ← Warenkorb-Logik
├── auth.js                   ← Login/Auth
├── solar-widget.js           ← PV-Anzeige im Hero
├── stl-viewer.js             ← STL-Preisschätzer
│
└── WEBSITE.md                ← Diese Datei
```

---

## Navigation

```
Produkte ▾              Leistungen ▾              Über uns    Blog    Kontakt
├─ 🖨️ 3D-FDM-Druck     ├─ 🖨️ 3D-Druck
└─ ✂️ Lasercut & Gravur  ├─ ✂️ Lasercutting
                          ├─ 🔍 Lasergravur
                          ├─ 💧 Resin-Druck
                          ├─ 🔧 Prototyping
                          └─ 🧪 Materialien
```

### Nav ändern
Die Nav ist in **jeder HTML-Datei** hardcoded (kein Templating). Bei Änderungen:
- **Root-Dateien:** Pfade ohne Prefix (`produkte.html`, `leistungen/...`)
- **Unterverzeichnis-Dateien:** Pfade mit `../` (`../produkte.html`, `../leistungen/...`)
- **index.html speziell:** `#leistungen` und `#kontakt` statt `index.html#...`
- Dropdown-Items haben **kein** `data-i18n` — Text direkt im HTML mit Emoji
- Nur Top-Level Items haben `data-i18n`

---

## Styling

### Design-System
- **Glasmorphism:** `background: rgba(15, 15, 30, 0.35); backdrop-filter: blur(16px-20px);`
- **Accent-Farbe:** `#fa6831` (Orange) — CSS var: `var(--accent)`
- **Gold-Accent:** `#E8A000` (Logo, Badges)
- **Hintergründe:**
  - Hauptseite: `images/gallery-1.webp` mit 72% dunklem Overlay
  - Unterseiten: `images/sub-hero.webp` mit 58-65% Overlay (heller)
- **Cards:** `var(--card-bg, #1a1a2e)` oder Glasmorphism
- **Hover-Effekt:** `translateY(-2px)` + orangener Glow

### Wichtige CSS-Klassen
| Klasse | Verwendung |
|--------|------------|
| `.page-sub` | Body-Klasse für alle Unterseiten |
| `.nav-dropdown` | Dropdown-Container in Nav |
| `.nav-dropdown-menu` | Glasmorphism Dropdown |
| `.katalog-sparte` | Produktkategorie-Block |
| `.katalog-item` | Einzelne Produktkarte |
| `.katalog-item-clickable` | Klickbare Produktkarte → Detailseite |
| `.mat-flip-card` | Material-Karte (klick = umdrehen) |
| `.produkte-card` | Große Kategorie-Karte (FDM/Laser) |
| `.about-stat` | Stat-Karte (Glasmorphism) |
| `.about-machine` | Maschinen-Karte (Glasmorphism) |
| `.about-value` | Werte-Karte (Glasmorphism) |
| `.hero-badge` | Pill-Badge im Hero |
| `.subnav-pill` | Subcategory-Pill |
| `.btn btn-primary` | Primärer Button (Orange) |
| `.clippy-thought` | Clippy Gedankenblase |

### Cache-Buster
Style und i18n haben `?v=TIMESTAMP` Query-Parameter. Bei Änderungen an `style.css` oder `i18n.js` den Timestamp aktualisieren:
```bash
TIMESTAMP=$(date +%s)
find . -name "*.html" -exec sed -i "s|style.css?v=[0-9]*|style.css?v=$TIMESTAMP|g" {} +
find . -name "*.html" -exec sed -i "s|i18n.js?v=[0-9]*|i18n.js?v=$TIMESTAMP|g" {} +
```

---

## i18n (Mehrsprachigkeit)

### Wie es funktioniert
1. `i18n.js` enthält `TRANSLATIONS` Objekt mit Keys
2. HTML-Elemente mit `data-i18n="key.name"` werden automatisch übersetzt
3. Sprache wird in `localStorage('pita-lang')` gespeichert
4. `setLang('de')` wechselt die Sprache live
5. Event `pita-lang-changed` wird dispatched

### Neue Übersetzung hinzufügen
```javascript
// In i18n.js im TRANSLATIONS Objekt:
'mein.neuer.key': { de:'Deutsch', en:'English', fr:'Français', es:'Español', it:'Italiano' },

// Im HTML:
<p data-i18n="mein.neuer.key">Deutsch (Fallback)</p>
```

### ⚠️ Wichtig
- Dropdown-Items in der Nav haben **absichtlich kein data-i18n** (Emojis würden überschrieben)
- Der HTML-Fallback-Text sollte immer Deutsch sein

---

## Produkte

### Neues Produkt hinzufügen
1. **`produkte/produkte-data.js`** — neuen Eintrag ergänzen:
```javascript
'fdm-kategorie-N': {
  name: 'Produktname',
  category: 'Kategorie',
  categoryIcon: '🏠',
  shortDesc: 'Kurzbeschreibung',
  description: '<p>Ausführliche Beschreibung</p>',
  price: 9.90,
  priceUnit: '€',
  images: ['📷 Produktfoto kommt'],  // oder echte Pfade: ['images/products/vase1.webp']
  video: null,  // YouTube URL oder lokaler MP4-Pfad
  specs: {
    material: 'PLA',
    höhe: '~100 mm',
    druckzeit: '~2 Stunden',
    gewicht: '~50 g',
    infill: '20%',
    layerHeight: '0.2 mm',
    farben: 'Weiß, Schwarz'
  },
  license: { type: 'CC-BY', designer: 'Designer Name', url: 'https://...' },
  staffelpreise: [
    { ab: 1, preis: 9.90 },
    { ab: 5, preis: 7.90 }
  ],
  colorOptions: [
    { name: 'Weiß', hex: '#FFFFFF' },
    { name: 'Schwarz', hex: '#1a1a1a' }
  ],
  inStock: true
}
```

2. **`produkte/3d-fdm-druck.html`** — Produktkarte in die passende Kategorie einfügen:
```html
<div class="katalog-item katalog-item-clickable" onclick="location.href='produkt.html?id=fdm-kategorie-N'">
  <div class="katalog-item-placeholder" style="cursor:pointer;">📷</div>
  <h4><a href="produkt.html?id=fdm-kategorie-N" class="produkt-link">Produktname</a></h4>
  <p>Kurzbeschreibung</p>
  <span class="price-tag">ab €9,90</span>
  <button class="btn-cart" onclick="event.stopPropagation();addToCart('fdm-kategorie-N','Produktname',9.90,1)">In den Warenkorb</button>
</div>
```

### Produktfotos hinzufügen
Bilder in `images/products/` ablegen, dann in `produkte-data.js`:
```javascript
images: ['images/products/vase-front.webp', 'images/products/vase-detail.webp'],
```

### Timelapse-Video hinzufügen
```javascript
video: 'https://www.youtube.com/watch?v=VIDEOID',
// oder lokal:
video: 'images/products/vase-timelapse.mp4',
```

---

## Clippy (clippy.js)

### Architektur
- ~2000 Zeilen IIFE (sofort ausgeführte Funktion)
- 6-Step Frage-Flow: Service → Verwendung → Größe → Menge → Material → Farbe
- Materialberatung (💡) erscheint mit 7.2s Verzögerung vor Materialwahl
- Gedankenblase mit 15 rotierenden Sprüchen pro Sprache
- Preisberechnung basiert auf `MATS` Objekt (16 Materialien mit Dichte + Preis/g)

### Clippy Flow
```
Step 0: Was brauchst du? (FDM/Resin/Laser/Prototyp/Browse)
Step 1: Wofür? (Deko/Funktional/Industrie/Outdoor/Lebensmittel)
Step 2: Wie groß? (Briefmarke → Größer)
Step 3: Wie viele + Finish?
Step 4: 💡 Materialempfehlung (7.2s) → Welches Material? (14 Optionen)
Step 5: Welche Farbe? (8 Optionen)
→ Preisberechnung → Produktvorschläge
```

### Neuen Clippy-Spruch hinzufügen
In `thoughtI18n` Objekt in clippy.js — Array pro Sprache:
```javascript
thoughtI18n.de.push('🆕 Neuer Spruch auf Deutsch!');
thoughtI18n.en.push('🆕 New thought in English!');
// etc. für fr, es, it
```

### Neues Material in Clippy
1. `MATS` Objekt erweitern (Dichte, Preis/g, labelKey)
2. `MATERIAL_MAP` erweitern (User-ID → MATS-Key)
3. Alle 5 Sprachen: `q.material.options` + `materials{}` Labels erweitern

### clippyBase()
Wichtig für Links! Erkennt ob Clippy auf Root oder Unterseite läuft:
- Root → `''` (leerer String)
- `/produkte/` oder `/leistungen/` → `'../'`

---

## Materialien (materialien.html)

### Flip-Card Struktur
```html
<div class="mat-flip-card" onclick="this.classList.toggle('flipped')">
  <div class="mat-flip-inner">
    <div class="mat-flip-front">
      <div class="mat-photo-placeholder">🟢</div>
      <h3>Material Name</h3>
      <span class="mat-badge" data-type="bio">Badge-Text</span>
      <p>Beschreibung</p>
      <span class="mat-flip-hint">↩ Klick für Details</span>
    </div>
    <div class="mat-flip-back">
      <h3>Material — Details</h3>
      <div class="mat-specs">
        <div class="mat-spec-row"><span>🌡️ Drucktemp</span><span>190–220°C</span></div>
        <div class="mat-spec-row"><span>💪 Festigkeit</span><div class="mat-bar"><div style="width:60%"></div></div></div>
      </div>
      <div class="mat-usage">
        <h4>✅ Perfekt für</h4>
        <ul><li>Punkt 1</li></ul>
        <h4>⚠️ Nicht ideal für</h4>
        <ul><li>Punkt 1</li></ul>
      </div>
      <span class="mat-price-hint">ab 0.02 €/g</span>
      <button class="mat-flip-close" onclick="event.stopPropagation()">↩ Zurück</button>
    </div>
  </div>
</div>
```

### Badge-Types
`data-type="bio"` | `"allrounder"` | `"tech"` | `"outdoor"` | `"flex"`

---

## Über uns (ueber-uns.html)

### Bereiche
1. **Geschichte** — `about.story.p1`, `about.story.p2`
2. **Printfarm Stats** (4 Glasmorphism-Karten) — `.about-stat`
3. **Maschinen** (5 Glasmorphism-Karten) — `.about-machine`
4. **Werte** (4 Glasmorphism-Karten) — `.about-value`

### ⚠️ Keine privaten Daten!
- Keine Drucker-Stückzahlen (7×, 9×, 3×)
- Keine echten PV-Werte (4.3 kWp / 23.5 kWh)
- Keine Ortsangaben (Schwarzwald)
- Website zeigt: 45 kWp Solar, 120 kWh Speicher (gerundet/fiktiv)
- Echte Werte nur in Carson's TOOLS.md

---

## Git Workflow

```bash
cd /tmp/printforge  # oder /data/.openclaw/workspace/factum3d/

# Änderung machen
# ...

# Committen + Pushen
git add -A
git commit -m "beschreibung"
git push  # Token ist in der Git-Remote-URL hinterlegt (siehe TOOLS.md)

# Git Config (falls nötig)
git config user.email "carson@factum3d.local"
git config user.name "Mister Carson"
```

---

## Häufige Aufgaben

### Nav-Item auf allen Seiten ändern
```bash
# Root-Dateien
find . -maxdepth 1 -name "*.html" -exec sed -i 's|ALTER TEXT|NEUER TEXT|g' {} +
# Unterverzeichnisse
find ./leistungen ./produkte -name "*.html" -exec sed -i 's|ALTER TEXT|NEUER TEXT|g' {} +
```

### Neue Seite erstellen
1. Kopiere eine bestehende Unterseite (z.B. `ueber-uns.html`)
2. `<body class="page-sub">` beibehalten
3. Nav-Block identisch lassen
4. Footer identisch lassen
5. Scripts am Ende: `script.js`, `clippy.js`, `cart.js`, `auth.js`

### Syntax-Check nach JS-Änderungen
```bash
node --check i18n.js
node --check clippy.js
node --check cart.js
```
