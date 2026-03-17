// Laser Analyzer for Creality & Snapmaker
// Work area: ~400 x 400 mm (Creality), ~320 x 350 mm (Snapmaker A350T)

const LASER_BEDS = {
  creality: { x: 400, y: 400, name: 'Creality Falcon' },
  snapmaker: { x: 320, y: 350, name: 'Snapmaker A350T' }
};

// ===== SVG ANALYZER =====
function analyzeSVG(text) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'image/svg+xml');
  const svg = doc.querySelector('svg');
  if (!svg) throw new Error('Kein gültiges SVG');

  let width = 0, height = 0;

  // Try viewBox first
  const vb = svg.getAttribute('viewBox');
  if (vb) {
    const parts = vb.split(/[\s,]+/).map(Number);
    width = parts[2] || 0;
    height = parts[3] || 0;
  }

  // Override with explicit width/height if in mm
  const w = svg.getAttribute('width');
  const h = svg.getAttribute('height');
  if (w) width = parseDimension(w) || width;
  if (h) height = parseDimension(h) || height;

  // Count paths, shapes
  const paths = doc.querySelectorAll('path').length;
  const rects = doc.querySelectorAll('rect').length;
  const circles = doc.querySelectorAll('circle, ellipse').length;
  const lines = doc.querySelectorAll('line, polyline, polygon').length;
  const texts = doc.querySelectorAll('text').length;
  const totalElements = paths + rects + circles + lines + texts;

  return {
    type: 'SVG',
    dims: { x: width, y: height },
    elements: { paths, rects, circles, lines, texts, total: totalElements },
    hasText: texts > 0
  };
}

function parseDimension(val) {
  const num = parseFloat(val);
  if (val.includes('mm')) return num;
  if (val.includes('cm')) return num * 10;
  if (val.includes('in')) return num * 25.4;
  if (val.includes('pt')) return num * 0.3528;
  if (val.includes('px') || !isNaN(num)) return num * 0.2646; // 96dpi px→mm
  return num;
}

// ===== IMAGE ANALYZER (for engraving) =====
function analyzeImage(img, file) {
  const canvas = document.createElement('canvas');
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  // Estimate physical size at 10 px/mm (~254 DPI)
  const pxPerMm = 10;
  const widthMm = img.naturalWidth / pxPerMm;
  const heightMm = img.naturalHeight / pxPerMm;

  // Check contrast
  const data = ctx.getImageData(0, 0, Math.min(canvas.width, 200), Math.min(canvas.height, 200)).data;
  let minBright = 255, maxBright = 0;
  for (let i = 0; i < data.length; i += 16) {
    const b = (data[i] + data[i+1] + data[i+2]) / 3;
    if (b < minBright) minBright = b;
    if (b > maxBright) maxBright = b;
  }
  const contrast = maxBright - minBright;

  return {
    type: 'IMAGE',
    dims: { x: widthMm, y: heightMm },
    resolution: { width: img.naturalWidth, height: img.naturalHeight },
    dpi: Math.round(img.naturalWidth / (widthMm / 25.4)),
    contrast: contrast,
    fileSize: file.size
  };
}

// ===== PRINTABILITY CHECK =====
function checkLaserFit(dims, machine) {
  const bed = LASER_BEDS[machine] || LASER_BEDS.creality;
  const issues = [];
  const warnings = [];

  if (dims.x > bed.x || dims.y > bed.y) {
    // Check if rotated it fits
    if (dims.y <= bed.x && dims.x <= bed.y) {
      warnings.push(`⚠️ Passt gedreht (90°) auf ${bed.name}`);
    } else {
      issues.push(`❌ Zu groß für ${bed.name}! (${dims.x.toFixed(1)} × ${dims.y.toFixed(1)} mm) — Max: ${bed.x} × ${bed.y} mm`);
    }
  }

  if (dims.x < 5 || dims.y < 5) {
    warnings.push('⚠️ Sehr klein — feine Details könnten verloren gehen');
  }

  if (dims.x === 0 || dims.y === 0) {
    warnings.push('⚠️ Maße konnten nicht ermittelt werden — bitte manuell prüfen');
  }

  return { fits: issues.length === 0, issues, warnings };
}

// ===== CUTTING TIME ESTIMATE =====
function estimateCutTime(dims, material, thickness) {
  // Speed in mm/s based on material and thickness
  const speeds = {
    'Sperrholz': { base: 8, perMm: -1.5 },
    'MDF': { base: 10, perMm: -2 },
    'Acryl': { base: 6, perMm: -1 },
    'Leder': { base: 15, perMm: -3 },
    'Papier': { base: 25, perMm: 0 },
    'Stoff': { base: 20, perMm: 0 }
  };
  const s = speeds[material] || speeds['Sperrholz'];
  const speed = Math.max(2, s.base + s.perMm * (thickness || 3));
  // Rough perimeter estimate
  const perimeter = (dims.x + dims.y) * 2 * 1.5; // 1.5x for internal cuts
  const time = perimeter / speed / 60; // minutes
  return Math.max(1, Math.round(time));
}

// ===== ENGRAVE TIME ESTIMATE =====
function estimateEngraveTime(dims, detail) {
  const lineSpacing = detail === 'Fein' ? 0.05 : detail === 'Grob' ? 0.15 : 0.1;
  const speed = detail === 'Fein' ? 20 : detail === 'Grob' ? 60 : 40; // mm/s
  const lines = dims.y / lineSpacing;
  const time = (lines * dims.x) / speed / 60; // minutes
  return Math.max(1, Math.round(time));
}

// ===== FORMAT RESULTS =====
function formatLaserAnalysis(analysis, mode, material, thickness, surface, machine) {
  const check = checkLaserFit(analysis.dims, machine);
  const d = analysis.dims;
  const isCut = mode === 'cut';

  let time;
  if (isCut) {
    time = estimateCutTime(d, material, thickness);
  } else {
    time = estimateEngraveTime(d, surface);
  }

  let html = '<div class="analysis-results">';
  html += `<div class="analysis-card ${check.fits ? 'card-ok' : 'card-error'}">`;
  html += `<h4>${check.fits ? '✅ Machbar' : '❌ Problem erkannt'}</h4>`;
  html += `<div class="analysis-grid">`;
  html += `<div class="stat"><span class="stat-label">Abmessungen</span><span class="stat-value">${d.x.toFixed(1)} × ${d.y.toFixed(1)} mm</span></div>`;

  if (analysis.type === 'SVG') {
    html += `<div class="stat"><span class="stat-label">Elemente</span><span class="stat-value">${analysis.elements.total} (${analysis.elements.paths} Pfade)</span></div>`;
    if (analysis.hasText) html += `<div class="stat"><span class="stat-label">Text</span><span class="stat-value">⚠️ Text erkannt — in Pfade umwandeln</span></div>`;
  }
  if (analysis.type === 'IMAGE') {
    html += `<div class="stat"><span class="stat-label">Auflösung</span><span class="stat-value">${analysis.resolution.width} × ${analysis.resolution.height} px</span></div>`;
    html += `<div class="stat"><span class="stat-label">Kontrast</span><span class="stat-value">${analysis.contrast > 150 ? '✅ Gut' : analysis.contrast > 80 ? '⚠️ Mittel' : '❌ Schwach'} (${analysis.contrast})</span></div>`;
  }

  html += `<div class="stat"><span class="stat-label">Material</span><span class="stat-value">${material || '-'}</span></div>`;
  if (isCut && thickness) html += `<div class="stat"><span class="stat-label">Dicke</span><span class="stat-value">${thickness} mm</span></div>`;
  if (!isCut && surface) html += `<div class="stat"><span class="stat-label">Detail</span><span class="stat-value">${surface}</span></div>`;
  html += `<div class="stat"><span class="stat-label">Maschine</span><span class="stat-value">${(LASER_BEDS[machine] || LASER_BEDS.creality).name}</span></div>`;
  html += `<div class="stat"><span class="stat-label">Zeit (ca.)</span><span class="stat-value">${time < 60 ? time + ' min' : Math.floor(time/60) + 'h ' + (time%60) + 'min'}</span></div>`;
  html += `</div>`;

  if (check.issues.length) html += '<div class="check-issues">' + check.issues.map(i => `<p>${i}</p>`).join('') + '</div>';
  if (check.warnings.length) html += '<div class="check-warnings">' + check.warnings.map(w => `<p>${w}</p>`).join('') + '</div>';

  html += `</div></div>`;
  return html;
}
