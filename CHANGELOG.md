# FACTUM3D Website - Changelog

## 2026-03-27 - Terrain Configurator UX Improvement

### Changed
- **Automatische Vorschau-Generierung nach Rechteck-Ziehen**
  - Benutzer müssen nicht mehr manuell auf "Vorschau generieren" klicken
  - Nach dem Zeichnen eines Rechtecks auf der Leaflet-Karte startet die Generierung automatisch
  - Voraussetzung: Modellgröße muss bereits ausgewählt sein
  - Implementierung: Event-Listener in terrain.html (map.on('draw:created'))
  - UI-Feedback: "📍 Gebiet ausgewählt, generiere Vorschau..."
  - Verzögerung: 300ms für flüssige UI-Aktualisierung

### Files Modified
- /opt/factum3d-website/terrain.html

### Backup
- /opt/factum3d-website/terrain.html.backup (vor Änderung)

### Flow (neu)
1. User wählt Modellgröße
2. User wechselt zu "🗺️ Freie Rechteck-Auswahl"
3. User zeichnet Rechteck auf Karte
4. **→ Vorschau-Generierung startet automatisch** (neu!)
5. User sieht 3D-Vorschau
6. User konfiguriert Material & Extras
7. User fügt zum Warenkorb hinzu

### Testing
- Funktion getestet auf http://69.62.105.159/terrain.html
- Backup verfügbar unter terrain.html.backup
