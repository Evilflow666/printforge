# Code Review — PitA (PrintForge)

**Datum:** 2026-03-19  
**Reviewer:** Mister Carson (automatisiert)  
**Gesamtbewertung:** 7.5 / 10

---

## Zusammenfassung

Solides Projekt mit sauberem HTML/CSS/JS-Stack. Die Seite ist gut strukturiert, responsive und mehrsprachig. Die Hauptprobleme waren Inkonsistenzen (fehlende Scripts, Footer-Links, CSP, i18n-Keys) — keine kritischen Bugs.

---

## Gefundene und behobene Probleme

### ✅ JavaScript (Commit: d35fc83)
- **script.js**: `mobileToggle.addEventListener` ohne null-check → Crash auf Seiten ohne `.mobile-toggle` (z.B. 404, Warenkorb). **Behoben** mit `if (mobileToggle)` Guard.
- **script.js**: `header` scroll-listener ohne null-check → Behoben.
- Alle 7 JS-Dateien bestehen `node --check` ✓

### ✅ HTML Konsistenz (Commit: d35fc83, 7473ccf)
- **404.html**: Fehlten `i18n.js`, `clippy.js`, `lang-switcher`, vollständiger Footer. **Behoben**.
- **warenkorb.html**: Fehlte `clippy.js`. **Behoben**.
- **Footer**: Blog/FAQ-Links fehlten auf 14 von 18 Seiten. **Behoben** — alle Seiten haben jetzt konsistent Blog, FAQ, Impressum, Datenschutz.
- Relative Pfade: Korrekt (../ für Unterverzeichnisse) ✓
- `<html lang="de">` auf allen 18 Seiten ✓

### ✅ CSS (Commit: 7473ccf)
- **Doppelte `.cart-icon`**: Zwei widersprüchliche Definitionen (Zeile 117 vs. 1366). **Behoben** — zweite entfernt, `position: relative` in erste übernommen.
- Responsive Breakpoints vorhanden: 480px, 768px ✓
- Mobile Clippy-Styles vorhanden (480px) ✓
- Mobile Lang-Switcher-Styles vorhanden (768px) ✓
- Verbleibende Duplikate (`.analysis-card`, `.file-name`, `.form-group label`) — sind kontextabhängig (verschiedene Sektionen), kein Bug.

### ✅ i18n (Commit: f8f9616)
- **114 fehlende Keys** für Katalog-Detailseiten (`kat.funktionsteile.*`, `kat.deko.*`, `kat.business.*`, `kat.maker.*`). **Behoben** — deutsche Stubs eingefügt.
- 3 unbenutzte Keys in JS (harmlos): `kat.detail.cta`, `kontakt.drop`, `sub.quote`
- Alle 378 HTML-Keys jetzt in i18n.js ✓

### ✅ CSP (Commit: 2640042)
- **CSP-Meta-Tag** fehlte auf 17 von 18 Seiten (nur index.html hatte es). **Behoben** — alle Seiten haben jetzt `script-src 'unsafe-inline'` (nötig für onclick lang-switcher).

---

## Verbleibende Verbesserungsvorschläge

### 🔶 Priorität: Hoch
1. **i18n Übersetzungen**: 114 Katalog-Detail-Keys haben nur deutschen Text als Stub für en/fr/es/it. Übersetzungen müssen geliefert werden.
2. **Katalog-Bilder fehlen**: `images/katalog/` Verzeichnis existiert nicht. Alle 24 Produktbilder (`business-1..6`, `deko-1..6`, `funktionsteile-1..6`, `maker-1..6`) sind auskommentiert mit Platzhalter-Emoji.
3. **Kontaktformular Backend**: `script.js` verweist auf `https://pita-api.example.com` — noch nicht konfiguriert.

### 🔶 Priorität: Mittel
4. **onclick → Event-Listener**: Lang-Switcher verwendet `onclick="setLang('de')"` auf allen Seiten. Besser: Event-Delegation in i18n.js (würde `'unsafe-inline'` in CSP überflüssig machen).
5. **logo.jpg**: Einziges Bild ohne WebP-Version. Konvertieren zu WebP (44K → ~20K).
6. **Unbenutzte Bilder**: `images/sub-hero.jpg`, `images/sub-hero.webp` werden nirgends referenziert.
7. **PNG-Fallbacks**: 13 PNG-Dateien neben ihren WebP-Versionen (werden nicht im Code referenziert). Können entfernt werden um Repo-Größe zu reduzieren (~1.3 MB).

### 🔶 Priorität: Niedrig
8. **CSS Refactoring**: Doppelte Selektoren (`.analysis-card`, `.analysis-grid`) könnten spezifischere Klassen bekommen.
9. **Plausible Analytics**: Nur auf index.html eingebunden — ggf. auf alle Seiten.
10. **Open Graph Tags**: Nur auf index.html — andere Seiten fehlen og:title/og:description.
11. **favicon.svg**: Wird referenziert, existiert nicht im Repo.

---

## Fehlende Inhalte (vom Seitenbetreiber zu liefern)

| Was | Wo | Menge |
|---|---|---|
| Katalog-Produktbilder | `images/katalog/` | 24 Bilder (WebP) |
| Übersetzungen Katalog-Detail | `i18n.js` | 114 Keys × 4 Sprachen |
| Backend-URL Kontaktformular | `script.js` | 1 URL |
| Logo als WebP | `logo.webp` | 1 Bild |
| Favicon | `favicon.svg` | 1 Datei |
| Blog-Inhalte | `blog.html` | Aktuell nur Coming-Soon |
| Impressum-Text (DSGVO) | `impressum.html` | Muss rechtlich geprüft werden |
| Datenschutz-Text (DSGVO) | `datenschutz.html` | Muss rechtlich geprüft werden |

---

*Review durchgeführt am 19.03.2026 von Mister Carson — automatisierter Code-Review.*
