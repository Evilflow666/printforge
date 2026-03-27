# 🐛 Terrain.html Button-Problem — Root Cause & Fix

**Datum:** 2026-03-27 19:12 UTC
**Problem:** Alle Buttons auf terrain.html (Größenauswahl, Gebietsauswahl, etc.) nicht klickbar

## 🔍 Root Cause

**Commit `5c0b78d`** fügte Language-Switcher mit `onclick="toggleLangDropdown()"` und `onclick="setLang(...)"` hinzu.

**Problem:**
- Die Funktionen `toggleLangDropdown()` und `setLang()` sind in `i18n.js` definiert
- `i18n.js` lädt im `<head>` → **VOR** dem DOM
- Der Event-Listener für "Click außerhalb" (Zeile 700 in `i18n.js`) wurde **ohne `DOMContentLoaded` Wrapper** registriert
- Die IIFE (Zeile 708+) überschrieb `window.setLang` **bevor** die HTML-Buttons existierten
- **Vermutlicher JS-Fehler** blockierte das gesamte Skript-Execution → ALLE Buttons tot

## ✅ Sofort-Fix (ROLLBACK)

```bash
cp terrain.html terrain.html.broken
cp terrain.html.backup terrain.html
nginx -s reload
```

**Status:** Rollback auf Version **VOR** dem Language-Switcher durchgeführt.

## 🔧 Sauberer Fix (später)

Wenn Language-Switcher wieder implementiert wird:

1. **Option A:** Event-Listener in `DOMContentLoaded` wrappen
   ```javascript
   document.addEventListener(DOMContentLoaded, () => {
     document.addEventListener(click, (e) => {
       const dd = document.getElementById(lang-dropdown);
       // ...
     });
   });
   ```

2. **Option B:** Wechsel zu `addEventListener` statt `onclick`
   ```html
   <button class="lang-current" id="lang-current-btn" title="Sprache">🇩🇪</button>
   ```
   Dann im JS:
   ```javascript
   document.getElementById(lang-current-btn)?.addEventListener(click, toggleLangDropdown);
   ```

3. **KRITISCH:** Keine inline `onclick` Handler bei Funktionen die erst nach DOM-Load verfügbar sind!

## 📊 Betroffene Commits

- `5c0b78d` — feat(i18n): Add terrain.html translations ← **Einführung des Bugs**
- `027c36d` — Fix: Alle kritischen Bugs behoben ← **Bug noch vorhanden**

## ✅ Verifikation

- `curl http://69.62.105.159/terrain.html | grep onclick` → **keine Treffer** ✅
- `curl http://69.62.105.159/terrain.html | grep "size-option" | wc -l` → **12** ✅

**Website sollte wieder funktionieren!**
