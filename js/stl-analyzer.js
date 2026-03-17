// STL Analyzer for Bambu Lab H2D & P1S
// Build volume: 256 x 256 x 256 mm

const BAMBU_PRINTERS = {
  'H2D': { x: 325, y: 320, z: 325, name: 'Bambu Lab H2D' },
  'H2D-dual': { x: 300, y: 320, z: 325, name: 'Bambu Lab H2D (Dual Nozzle)' },
  'P1S': { x: 256, y: 256, z: 256, name: 'Bambu Lab P1S' },
  'auto': null // auto-select
};

function parseSTL(buffer) {
  const view = new DataView(buffer);
  // Check if ASCII or Binary
  const header = new Uint8Array(buffer, 0, 80);
  const headerStr = new TextDecoder().decode(header);

  if (headerStr.startsWith('solid') && buffer.byteLength > 84) {
    // Could be ASCII, but many binary files also start with 'solid'
    // Check if byte 80-83 gives a reasonable triangle count
    const numTriangles = view.getUint32(80, true);
    const expectedSize = 84 + numTriangles * 50;
    if (Math.abs(expectedSize - buffer.byteLength) > 10) {
      return parseASCII(buffer);
    }
  }
  return parseBinary(buffer);
}

function parseBinary(buffer) {
  const view = new DataView(buffer);
  const numTriangles = view.getUint32(80, true);
  const triangles = [];
  let minX = Infinity, minY = Infinity, minZ = Infinity;
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
  let volume = 0;

  for (let i = 0; i < numTriangles; i++) {
    const offset = 84 + i * 50;
    // Normal
    const nx = view.getFloat32(offset, true);
    const ny = view.getFloat32(offset + 4, true);
    const nz = view.getFloat32(offset + 8, true);
    // Vertices
    const v1 = { x: view.getFloat32(offset + 12, true), y: view.getFloat32(offset + 16, true), z: view.getFloat32(offset + 20, true) };
    const v2 = { x: view.getFloat32(offset + 24, true), y: view.getFloat32(offset + 28, true), z: view.getFloat32(offset + 32, true) };
    const v3 = { x: view.getFloat32(offset + 36, true), y: view.getFloat32(offset + 40, true), z: view.getFloat32(offset + 44, true) };

    [v1, v2, v3].forEach(v => {
      minX = Math.min(minX, v.x); maxX = Math.max(maxX, v.x);
      minY = Math.min(minY, v.y); maxY = Math.max(maxY, v.y);
      minZ = Math.min(minZ, v.z); maxZ = Math.max(maxZ, v.z);
    });

    // Signed volume of tetrahedron (for total volume calc)
    volume += signedVolume(v1, v2, v3);
  }

  volume = Math.abs(volume);
  const dims = { x: maxX - minX, y: maxY - minY, z: maxZ - minZ };

  return { triangles: numTriangles, dims, volume, min: { x: minX, y: minY, z: minZ }, max: { x: maxX, y: maxY, z: maxZ } };
}

function parseASCII(buffer) {
  const text = new TextDecoder().decode(buffer);
  const vertexRegex = /vertex\s+([-\d.e+]+)\s+([-\d.e+]+)\s+([-\d.e+]+)/gi;
  let match;
  const vertices = [];
  let minX = Infinity, minY = Infinity, minZ = Infinity;
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

  while ((match = vertexRegex.exec(text)) !== null) {
    const v = { x: parseFloat(match[1]), y: parseFloat(match[2]), z: parseFloat(match[3]) };
    vertices.push(v);
    minX = Math.min(minX, v.x); maxX = Math.max(maxX, v.x);
    minY = Math.min(minY, v.y); maxY = Math.max(maxY, v.y);
    minZ = Math.min(minZ, v.z); maxZ = Math.max(maxZ, v.z);
  }

  let volume = 0;
  for (let i = 0; i < vertices.length; i += 3) {
    if (vertices[i + 2]) {
      volume += signedVolume(vertices[i], vertices[i + 1], vertices[i + 2]);
    }
  }
  volume = Math.abs(volume);

  return {
    triangles: Math.floor(vertices.length / 3),
    dims: { x: maxX - minX, y: maxY - minY, z: maxZ - minZ },
    volume,
    min: { x: minX, y: minY, z: minZ },
    max: { x: maxX, y: maxY, z: maxZ }
  };
}

function signedVolume(a, b, c) {
  return (a.x * (b.y * c.z - b.z * c.y) + a.y * (b.z * c.x - b.x * c.z) + a.z * (b.x * c.y - b.y * c.x)) / 6.0;
}

function checkPrintability(analysis, printer) {
  const issues = [];
  const warnings = [];
  const d = analysis.dims;
  
  // Auto-select best printer
  let bed;
  if (printer && printer !== 'auto') {
    bed = BAMBU_PRINTERS[printer];
  } else {
    // Try H2D first (bigger), fall back to P1S
    const h2d = BAMBU_PRINTERS['H2D'];
    const p1s = BAMBU_PRINTERS['P1S'];
    if (d.x <= p1s.x && d.y <= p1s.y && d.z <= p1s.z) {
      bed = p1s;
    } else {
      bed = h2d;
    }
  }
  analysis._selectedPrinter = bed.name;

  // Size check
  if (d.x > bed.x || d.y > bed.y || d.z > bed.z) {
    issues.push(`❌ Zu groß für ${bed.name}! (${d.x.toFixed(1)} × ${d.y.toFixed(1)} × ${d.z.toFixed(1)} mm) — Max: ${bed.x} × ${bed.y} × ${bed.z} mm`);
    // Check if it fits on the other printer
    const other = bed === BAMBU_PRINTERS['P1S'] ? BAMBU_PRINTERS['H2D'] : BAMBU_PRINTERS['P1S'];
    if (d.x <= other.x && d.y <= other.y && d.z <= other.z) {
      warnings.push(`💡 Passt auf ${other.name} (${other.x}×${other.y}×${other.z} mm)`);
    }
  }

  // Very thin check
  if (Math.min(d.x, d.y, d.z) < 0.8) {
    warnings.push(`⚠️ Sehr dünne Wand erkannt (${Math.min(d.x, d.y, d.z).toFixed(2)} mm) — Mindestwandstärke 0.8 mm empfohlen`);
  }

  // Very small
  if (d.x < 5 && d.y < 5 && d.z < 5) {
    warnings.push('⚠️ Sehr kleines Objekt — Details könnten verloren gehen');
  }

  // Very large volume → long print
  if (analysis.volume > 500000) {
    warnings.push('⚠️ Großes Volumen — lange Druckzeit erwartet');
  }

  // Low triangle count
  if (analysis.triangles < 50) {
    warnings.push('⚠️ Wenige Dreiecke — Mesh könnte zu einfach sein');
  }

  const fits = issues.length === 0;

  return { fits, issues, warnings };
}

function estimatePrintTime(analysis, material, layerHeight) {
  // Rough estimation based on volume and layer height
  const lh = layerHeight || 0.2;
  const speed = material === 'TPU' ? 30 : 60; // mm/s approx
  const layers = analysis.dims.z / lh;
  const perimeterTime = layers * (analysis.dims.x + analysis.dims.y) * 2 / speed / 60; // min
  const infillTime = (analysis.volume / 1000) * 0.3 / speed * 60; // min, 30% infill
  const total = perimeterTime + infillTime + layers * 0.1; // + layer change time
  return Math.round(total);
}

function estimateWeight(volumeMM3, material) {
  const densities = { 'PLA': 1.24, 'PETG': 1.27, 'ABS': 1.04, 'TPU': 1.21 };
  const density = densities[material] || 1.24;
  const infillFactor = 0.3; // 30% infill assumed
  const shellFactor = 0.15; // ~15% shell
  const effectiveVolume = volumeMM3 * (infillFactor + shellFactor);
  return (effectiveVolume * density / 1000).toFixed(1); // grams
}

function formatAnalysis(analysis, material, color, surface, printer) {
  const check = checkPrintability(analysis, printer);
  const time = estimatePrintTime(analysis, material);
  const weight = estimateWeight(analysis.volume, material);
  const d = analysis.dims;

  let html = '<div class="analysis-results">';
  html += `<div class="analysis-card ${check.fits ? 'card-ok' : 'card-error'}">`;
  html += `<h4>${check.fits ? '✅ Druckbar' : '❌ Problem erkannt'}</h4>`;
  html += `<div class="analysis-grid">`;
  html += `<div class="stat"><span class="stat-label">Abmessungen</span><span class="stat-value">${d.x.toFixed(1)} × ${d.y.toFixed(1)} × ${d.z.toFixed(1)} mm</span></div>`;
  html += `<div class="stat"><span class="stat-label">Volumen</span><span class="stat-value">${(analysis.volume / 1000).toFixed(1)} cm³</span></div>`;
  html += `<div class="stat"><span class="stat-label">Dreiecke</span><span class="stat-value">${analysis.triangles.toLocaleString()}</span></div>`;
  html += `<div class="stat"><span class="stat-label">Material</span><span class="stat-value">${material}</span></div>`;
  html += `<div class="stat"><span class="stat-label">Gewicht (ca.)</span><span class="stat-value">${weight} g</span></div>`;
  html += `<div class="stat"><span class="stat-label">Druckzeit (ca.)</span><span class="stat-value">${time < 60 ? time + ' min' : Math.floor(time/60) + 'h ' + (time%60) + 'min'}</span></div>`;
  if (color) html += `<div class="stat"><span class="stat-label">Farbe</span><span class="stat-value">${color}</span></div>`;
  if (surface) html += `<div class="stat"><span class="stat-label">Oberfläche</span><span class="stat-value">${surface}</span></div>`;
  html += `<div class="stat"><span class="stat-label">Drucker</span><span class="stat-value">${analysis._selectedPrinter || 'Auto'}</span></div>`;
  html += `</div>`;

  if (check.issues.length) {
    html += '<div class="check-issues">' + check.issues.map(i => `<p>${i}</p>`).join('') + '</div>';
  }
  if (check.warnings.length) {
    html += '<div class="check-warnings">' + check.warnings.map(w => `<p>${w}</p>`).join('') + '</div>';
  }

  html += `</div></div>`;
  return html;
}
