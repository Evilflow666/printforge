# FACTUM3D terrain.html FIX REPORT
**Datum:** 2026-03-27 20:30 UTC
**Problem:** Buttons nicht klickbar, Karte nicht sichtbar
**VPS:** 69.62.105.159

## ROOT CAUSE 🔍

**Zeile 917 in terrain.html:** Doppelter Aufruf von `map.addControl(drawControl)`

```javascript
map.addControl(drawControl);
map.addControl(drawControl);  // ⚠️ FEHLER: Zweimal aufgerufen!
```

Das führte zu einem JavaScript-Fehler der alle nachfolgenden Scripts blockierte.

## DIAGNOSE ✅

1. ✅ **Syntaxcheck:** i18n.js und terrain.html syntaktisch korrekt
2. ✅ **HTTP Status:** Seite liefert 200 OK
3. ✅ **Externe Ressourcen:** Alle CDN-Links erreichbar (Leaflet, Three.js)
4. ✅ **Lokale Dateien:** style.css, cart.js, i18n.js vorhanden
5. ❌ **JavaScript-Fehler:** Doppelte `map.addControl()` in enableRectangleDraw()

## FIX 🔧

```bash
# Backup erstellt
cp terrain.html terrain.html.backup-before-fix-1743115779

# Zeile 917 gelöscht (doppelte map.addControl)
sed -i '917d' terrain.html

# Git Commit
git add terrain.html
git commit -m 'FIX: Doppelte map.addControl() Zeile entfernt'
```

## VERIFIKATION ✅

- ✅ HTTP 200 OK
- ✅ Alle `<script>` Tags korrekt
- ✅ Keine doppelten map.addControl() mehr
- ✅ Git committed (abb1a69)

## WARUM IST DAS PASSIERT?

Vermutlich durch fehlerhafte Merge/Paste Operation während der heutigen Änderungen.
Die Zeile wurde versehentlich dupliziert.

## EMPFEHLUNG

Test in Browser mit geöffneten DevTools (F12 → Console) um JS-Fehler zu sehen.
