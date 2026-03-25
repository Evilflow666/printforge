/**
 * FACTUM3D Solar-Widget — Live Akku-Anzeige im Hero
 * Nutzt Open-Meteo API (kostenlos, kein Key nötig)
 * Simuliert Akku-Level basierend auf echten Wetterdaten
 */
(function() {
  const LAT = 48.35, LON = 8.07;
  const PV_KWP = 4.3;
  const BATTERY_KWH = 120; // 120 kWh Gesamtspeicher // Anker Solix E1600 Pro (9.6) + E2700 Pro (13.9)

  async function fetchSolarData() {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&hourly=cloud_cover,direct_radiation&current=cloud_cover,is_day&timezone=Europe/Berlin&forecast_days=1`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch(e) {
      return null;
    }
  }

  function calcBatteryLevel(data) {
    if (!data || !data.hourly) return null;

    const now = new Date();
    const currentHour = now.getHours();
    const isDay = data.current?.is_day === 1;
    const cloudCover = data.current?.cloud_cover ?? 50;

    // Sonnenstrahlung der aktuellen Stunde
    const hourlyRad = data.hourly.direct_radiation || [];
    const hourlyCloud = data.hourly.cloud_cover || [];

    // Simuliere Akku-Verlauf über den Tag
    // Basis: Akku startet morgens bei 40-60% (Nachtverbrauch)
    let battery = 45; // Basis-Level morgens

    for (let h = 6; h <= Math.min(currentHour, 23); h++) {
      const rad = hourlyRad[h] || 0;
      const cloud = hourlyCloud[h] || 50;

      // Solarertrag pro Stunde (kWh)
      const clearSkyFactor = Math.max(0, 1 - (cloud / 100) * 0.8);
      const solarYield = (rad / 1000) * PV_KWP * clearSkyFactor * 0.85; // 85% Effizienz

      // Verbrauch Printfarm pro Stunde (~1.5-2.5 kWh je nach Aktivität)
      const consumption = (h >= 8 && h <= 18) ? 2.0 : 0.8;

      // Netto
      const net = solarYield - consumption;
      battery += (net / BATTERY_KWH) * 100;
    }

    // Clamp 5-100%
    battery = Math.max(5, Math.min(100, Math.round(battery)));

    return {
      level: battery,
      isDay: isDay,
      cloudCover: cloudCover,
      hour: currentHour
    };
  }

  function getStatusText(level, isDay, cloudCover, lang) {
    const texts = {
      de: {
        sun: `☀️ Akku ${level}% — Printfarm läuft auf Solarstrom`,
        partcloud: `⛅ Akku ${level}% — Teilweise bewölkt, Solar aktiv`,
        cloud: `☁️ Akku ${level}% — Bewölkt, Speicher versorgt die Farm`,
        night: `🌙 Akku ${level}% — Nachtmodus, Speicher versorgt die Farm`,
        full: `☀️ Akku 100% — Volle Solarpower!`,
        low: `🔋 Akku ${level}% — Netzstrom als Backup aktiv`,
      },
      en: {
        sun: `☀️ Battery ${level}% — Print farm running on solar`,
        partcloud: `⛅ Battery ${level}% — Partly cloudy, solar active`,
        cloud: `☁️ Battery ${level}% — Cloudy, storage powers the farm`,
        night: `🌙 Battery ${level}% — Night mode, storage powers the farm`,
        full: `☀️ Battery 100% — Full solar power!`,
        low: `🔋 Battery ${level}% — Grid backup active`,
      },
      fr: {
        sun: `☀️ Batterie ${level}% — Ferme d'impression sur énergie solaire`,
        partcloud: `⛅ Batterie ${level}% — Partiellement nuageux, solaire actif`,
        cloud: `☁️ Batterie ${level}% — Nuageux, stockage alimente la ferme`,
        night: `🌙 Batterie ${level}% — Mode nuit, stockage actif`,
        full: `☀️ Batterie 100% — Pleine puissance solaire !`,
        low: `🔋 Batterie ${level}% — Réseau de secours actif`,
      },
      es: {
        sun: `☀️ Batería ${level}% — Granja de impresión con energía solar`,
        partcloud: `⛅ Batería ${level}% — Parcialmente nublado, solar activo`,
        cloud: `☁️ Batería ${level}% — Nublado, almacenamiento alimenta la granja`,
        night: `🌙 Batería ${level}% — Modo nocturno, almacenamiento activo`,
        full: `☀️ Batería 100% — ¡Máxima energía solar!`,
        low: `🔋 Batería ${level}% — Red de respaldo activa`,
      },
      it: {
        sun: `☀️ Batteria ${level}% — Stamperia alimentata a solare`,
        partcloud: `⛅ Batteria ${level}% — Parzialmente nuvoloso, solare attivo`,
        cloud: `☁️ Batteria ${level}% — Nuvoloso, accumulo alimenta la stamperia`,
        night: `🌙 Batteria ${level}% — Modalità notturna, accumulo attivo`,
        full: `☀️ Batteria 100% — Piena potenza solare!`,
        low: `🔋 Batteria ${level}% — Rete di backup attiva`,
      }
    };

    const t = texts[lang] || texts.de;

    if (level >= 98) return t.full;
    if (level <= 15) return t.low;
    if (!isDay) return t.night;
    if (cloudCover < 30) return t.sun;
    if (cloudCover < 70) return t.partcloud;
    return t.cloud;
  }

  function getBatteryColor(level) {
    if (level >= 70) return '#34c759'; // Grün
    if (level >= 40) return '#E8A000'; // Orange/Amber
    if (level >= 20) return '#ff9f0a'; // Orange
    return '#ff453a'; // Rot
  }

  function renderWidget(container, result) {
    const lang = localStorage.getItem('pita-lang') || 'de';
    const text = getStatusText(result.level, result.isDay, result.cloudCover, lang);
    const color = getBatteryColor(result.level);

    container.innerHTML = `
      <div class="solar-widget">
        <div class="solar-bar-outer">
          <div class="solar-bar-inner" style="width:${result.level}%;background:${color}"></div>
        </div>
        <span class="solar-text">${text}</span>
      </div>
    `;
    container.style.display = '';
  }

  // Init
  async function initSolarWidget() {
    const container = document.getElementById('solar-widget');
    if (!container) return;
    container.style.display = 'none';

    const data = await fetchSolarData();
    if (!data) return;

    const result = calcBatteryLevel(data);
    if (!result) return;

    renderWidget(container, result);

    // Update alle 30 Minuten
    setInterval(async () => {
      const d = await fetchSolarData();
      if (d) {
        const r = calcBatteryLevel(d);
        if (r) renderWidget(container, r);
      }
    }, 30 * 60 * 1000);
  }

  // Expose refresh function for language switching
  window.refreshSolarWidget = function() {
    const container = document.getElementById('solar-widget');
    if (!container || !window._solarResult) return;
    renderWidget(container, window._solarResult);
  };

  // Store result globally for refresh
  const _origRender = renderWidget;
  renderWidget = function(container, result) {
    window._solarResult = result;
    _origRender(container, result);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSolarWidget);
  } else {
    initSolarWidget();
  }
})();
