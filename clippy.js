/**
 * Clippy — PitA KI-Assistent v2.0
 * Neu: STL/SVG Dateianalyse + Preisschätzung, Navigation, mehr Persönlichkeit
 */

// ===== INJECT CLIPPY HTML =====
(function injectClippy() {
  if (document.getElementById('clippy-container')) return;

  const isSubpage = window.location.pathname.includes('/leistungen/');
  const prefix = isSubpage ? '../' : '';

  const html = `
  <div id="clippy-container" class="clippy-container">
    <div id="clippy-chat" class="clippy-chat clippy-hidden">
      <div class="clippy-header">
        <span>📎 Clippy — PitA Assistent</span>
        <button id="clippy-close-btn" class="clippy-close" aria-label="Clippy schließen">✕</button>
      </div>
      <div id="clippy-messages" class="clippy-messages">
        <div class="clippy-msg clippy-bot">
          <span>Hallo! 👋 Ich bin Clippy, dein PitA-Assistent.<br>Frag mich was über 3D-Druck, Laser oder lade eine <strong>STL/SVG-Datei</strong> hoch für eine Preisschätzung!</span>
        </div>
      </div>

      <!-- Datei-Drop-Zone -->
      <div id="clippy-drop-zone" class="clippy-drop-zone clippy-hidden">
        <span>📂 STL, 3MF, OBJ oder SVG hier ablegen</span>
      </div>

      <div class="clippy-input-row">
        <label id="clippy-file-btn" class="clippy-file-btn" title="Datei hochladen für Preisschätzung" aria-label="Datei hochladen">
          📂
          <input type="file" id="clippy-file-input" accept=".stl,.3mf,.obj,.svg,.dxf" style="display:none">
        </label>
        <input type="text" id="clippy-input" placeholder="Frag mich was..." autocomplete="off">
        <button id="clippy-send" aria-label="Senden">➤</button>
      </div>
    </div>

    <!-- Speech Bubble (idle tips) -->
    <div id="clippy-bubble" class="clippy-bubble clippy-hidden">
      <span id="clippy-bubble-text"></span>
    </div>

    <button id="clippy-toggle" class="clippy-toggle" aria-label="Clippy öffnen">
      <svg viewBox="0 0 100 160" width="56" height="84" class="clippy-svg" id="clippy-svg">
        <ellipse cx="50" cy="95" rx="18" ry="50" fill="none" stroke="#5C5C5C" stroke-width="8" stroke-linecap="round"/>
        <ellipse cx="42" cy="55" rx="8" ry="10" fill="white" stroke="#888" stroke-width="2"/>
        <ellipse cx="43" cy="56" rx="3.5" ry="4.5" fill="#222" class="clippy-pupil-l"/>
        <ellipse cx="44" cy="54" rx="1.5" ry="2" fill="white" class="clippy-glint-l"/>
        <ellipse cx="42" cy="55" rx="8" ry="0" fill="#E8A000" class="clippy-lid-l"/>
        <ellipse cx="58" cy="55" rx="8" ry="10" fill="white" stroke="#888" stroke-width="2"/>
        <ellipse cx="59" cy="56" rx="3.5" ry="4.5" fill="#222" class="clippy-pupil-r"/>
        <ellipse cx="60" cy="54" rx="1.5" ry="2" fill="white" class="clippy-glint-r"/>
        <ellipse cx="58" cy="55" rx="8" ry="0" fill="#E8A000" class="clippy-lid-r"/>
        <path d="M34 44 Q42 38 50 44" fill="none" stroke="#666" stroke-width="2.5" stroke-linecap="round" class="clippy-brow-l"/>
        <path d="M50 44 Q58 38 66 44" fill="none" stroke="#666" stroke-width="2.5" stroke-linecap="round" class="clippy-brow-r"/>
        <path d="M42 70 Q50 78 58 70" fill="none" stroke="#666" stroke-width="2.5" stroke-linecap="round" class="clippy-mouth"/>
      </svg>
      <span class="clippy-label">Frag mich!</span>
    </button>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', html);

  const toggleBtn  = document.getElementById('clippy-toggle');
  const closeBtn   = document.getElementById('clippy-close-btn');
  const sendBtn    = document.getElementById('clippy-send');
  const inp        = document.getElementById('clippy-input');
  const fileInput  = document.getElementById('clippy-file-input');
  const dropZone   = document.getElementById('clippy-drop-zone');
  const container  = document.getElementById('clippy-container');

  if (toggleBtn)  toggleBtn.addEventListener('click',  e => { e.preventDefault(); e.stopPropagation(); toggleClippy(); });
  if (closeBtn)   closeBtn.addEventListener('click',   e => { e.preventDefault(); e.stopPropagation(); toggleClippy(); });
  if (sendBtn)    sendBtn.addEventListener('click',    e => { e.preventDefault(); sendClippy(); });
  if (inp)        inp.addEventListener('keydown',      e => { if (e.key === 'Enter') sendClippy(); });
  if (fileInput)  fileInput.addEventListener('change', e => { if (fileInput.files[0]) handleFile(fileInput.files[0]); });

  // Drag & Drop auf gesamtes Chat-Fenster
  const chat = document.getElementById('clippy-chat');
  if (chat) {
    chat.addEventListener('dragover', e => { e.preventDefault(); if (dropZone) dropZone.classList.remove('clippy-hidden'); });
    chat.addEventListener('dragleave', () => { if (dropZone) dropZone.classList.add('clippy-hidden'); });
    chat.addEventListener('drop', e => {
      e.preventDefault();
      if (dropZone) dropZone.classList.add('clippy-hidden');
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    });
  }

  console.log('[Clippy v2] Initialized');
})();


// ===== TOGGLE =====
function toggleClippy() {
  const chat   = document.getElementById('clippy-chat');
  const bubble = document.getElementById('clippy-bubble');
  if (!chat) return;
  const isHidden = chat.classList.contains('clippy-hidden');
  if (isHidden) {
    chat.classList.remove('clippy-hidden');
    if (bubble) bubble.classList.add('clippy-hidden');
    setTimeout(() => { const i = document.getElementById('clippy-input'); if (i) i.focus(); }, 100);
    // Kontext-Begrüßung je nach Seite
    contextGreeting();
  } else {
    chat.classList.add('clippy-hidden');
  }
}

// Kontext-abhängige Begrüßung beim ersten Öffnen pro Seite
let greeted = false;
function contextGreeting() {
  if (greeted) return;
  greeted = true;
  const path = window.location.pathname;
  let hint = null;
  if (path.includes('3d-druck'))       hint = 'Du schaust dir 3D-Druck an 🖨️ — lade einfach deine STL hoch, ich schätze den Preis!';
  else if (path.includes('lasercutting')) hint = 'Lasercutting-Seite! Schick mir deine SVG/DXF, ich schau was das kosten könnte ✂️';
  else if (path.includes('lasergravur')) hint = 'Lasergravur! Ich helfe dir beim Material wählen oder Preise einschätzen 🔥';
  else if (path.includes('resin'))      hint = 'Resin-Druck — Spritzguss-Qualität ohne Spritzguss-Preise 🔬 Frag mich gerne!';
  else if (path.includes('materialien')) hint = 'Materialien-Seite! Ich erkläre dir den Unterschied zwischen allem — einfach fragen 🧪';
  else if (path.includes('faq'))        hint = 'FAQ? Wenn du hier keine Antwort findest, frag mich direkt! 😄';
  if (hint) {
    setTimeout(() => appendBot(hint), 600);
  }
}


// ===== IDLE ANIMATIONEN =====
const idleTips = [
  "Wusstest du? Wir drucken mit PV-Energie! ☀️",
  "Tipp: STL hochladen → ich schätze den Preis sofort!",
  "Carbon-Filament ist 5x steifer als PLA 💪",
  "Schau mal in unsere Materialien-Seite!",
  "Du brauchst Hilfe? Klick mich an! 📎",
  "Fun Fact: Unser H2D hat Dual Nozzle!",
  "Lasergravur auf Glas? Kein Problem!",
  "Wir fertigen auch Kleinserien bis 50 Stück.",
  "Resin-Druck = Spritzguss-Qualität 🔬",
  "Eilauftrag? Prototypen in 24 Stunden!",
  "Ich bin seit 1997 im Einsatz. Gut gealtert, oder? 😏",
  "Sieht aus als würdest du gerade etwas drucken wollen... 🤔",
  "PLA schmilzt bei 60°C. Nicht im Auto liegen lassen. Vertrau mir.",
  "Ich habe dir geholfen, bevor KI cool war. 📎",
  "PETG + Spülmaschine = echte Liebe ❤️",
  "3D-Druck löst keine Probleme. Außer wenn er es tut."
];

let lastTipIndex = -1;

function blink() {
  const lidL = document.querySelector('.clippy-lid-l');
  const lidR = document.querySelector('.clippy-lid-r');
  if (!lidL || !lidR) return;
  lidL.setAttribute('ry', '10'); lidR.setAttribute('ry', '10');
  setTimeout(() => { lidL.setAttribute('ry', '0'); lidR.setAttribute('ry', '0'); }, 150);
}

function doubleBlink() { blink(); setTimeout(blink, 300); }

function lookAround() {
  const pL = document.querySelector('.clippy-pupil-l');
  const pR = document.querySelector('.clippy-pupil-r');
  const gL = document.querySelector('.clippy-glint-l');
  const gR = document.querySelector('.clippy-glint-r');
  if (!pL) return;
  const dirs = [
    {px:-2,py:0,gx:-1,gy:-2},{px:2,py:0,gx:3,gy:-2},
    {px:0,py:-2,gx:1,gy:-4},{px:0,py:2,gx:1,gy:0},{px:0,py:0,gx:1,gy:-2}
  ];
  const dir = dirs[Math.floor(Math.random() * dirs.length)];
  pL.setAttribute('cx', 43+dir.px); pL.setAttribute('cy', 56+dir.py);
  pR.setAttribute('cx', 59+dir.px); pR.setAttribute('cy', 56+dir.py);
  gL.setAttribute('cx', 44+dir.gx); gL.setAttribute('cy', 54+dir.gy);
  gR.setAttribute('cx', 60+dir.gx); gR.setAttribute('cy', 54+dir.gy);
  setTimeout(() => {
    pL.setAttribute('cx','43'); pL.setAttribute('cy','56');
    pR.setAttribute('cx','59'); pR.setAttribute('cy','56');
    gL.setAttribute('cx','44'); gL.setAttribute('cy','54');
    gR.setAttribute('cx','60'); gR.setAttribute('cy','54');
  }, 1500 + Math.random()*1000);
}

function wiggle() {
  const t = document.getElementById('clippy-toggle');
  if (!t) return;
  t.classList.add('clippy-wiggle');
  setTimeout(() => t.classList.remove('clippy-wiggle'), 600);
}

function raiseBrows() {
  const bL = document.querySelector('.clippy-brow-l');
  const bR = document.querySelector('.clippy-brow-r');
  if (!bL) return;
  bL.setAttribute('d','M34 40 Q42 34 50 40'); bR.setAttribute('d','M50 40 Q58 34 66 40');
  setTimeout(() => { bL.setAttribute('d','M34 44 Q42 38 50 44'); bR.setAttribute('d','M50 44 Q58 38 66 44'); }, 800);
}

function showTip() {
  const chat = document.getElementById('clippy-chat');
  if (!chat || !chat.classList.contains('clippy-hidden')) return;
  const bubble = document.getElementById('clippy-bubble');
  const text   = document.getElementById('clippy-bubble-text');
  if (!bubble || !text) return;
  let idx;
  do { idx = Math.floor(Math.random() * idleTips.length); } while (idx === lastTipIndex);
  lastTipIndex = idx;
  text.textContent = idleTips[idx];
  bubble.classList.remove('clippy-hidden');
  wiggle();
  setTimeout(() => bubble.classList.add('clippy-hidden'), 5000);
}

function idleAction() {
  const actions = [blink, blink, doubleBlink, lookAround, lookAround, wiggle, raiseBrows];
  actions[Math.floor(Math.random() * actions.length)]();
}

function startIdle() {
  setInterval(() => { if (Math.random() < 0.4) blink(); }, 3000);
  setInterval(() => idleAction(), 4000 + Math.random()*4000);
  setInterval(() => { if (Math.random() < 0.5) showTip(); }, 20000 + Math.random()*20000);
  setTimeout(showTip, 8000);
}

document.addEventListener('mousemove', e => {
  const svg = document.getElementById('clippy-svg');
  if (!svg) return;
  const rect = svg.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top + rect.height*0.35;
  const dx = (e.clientX - cx) / window.innerWidth * 3;
  const dy = (e.clientY - cy) / window.innerHeight * 2;
  const clampX = Math.max(-2.5, Math.min(2.5, dx));
  const clampY = Math.max(-2, Math.min(2, dy));
  const pL = document.querySelector('.clippy-pupil-l');
  const pR = document.querySelector('.clippy-pupil-r');
  if (pL && pR) {
    pL.setAttribute('cx', 43+clampX); pL.setAttribute('cy', 56+clampY);
    pR.setAttribute('cx', 59+clampX); pR.setAttribute('cy', 56+clampY);
  }
});

startIdle();


// ===== STL PARSER =====
function signedVolumeTriangle(ax,ay,az,bx,by,bz,cx,cy,cz) {
  return (ax*(by*cz-bz*cy) + bx*(cy*az-cz*ay) + cx*(ay*bz-az*by)) / 6;
}

function parseSTLBinary(buffer) {
  const view = new DataView(buffer);
  const numTri = view.getUint32(80, true);
  let vol = 0;
  let minX=Infinity,minY=Infinity,minZ=Infinity,maxX=-Infinity,maxY=-Infinity,maxZ=-Infinity;
  for (let i=0; i<numTri; i++) {
    const off = 84 + i*50;
    const v1x=view.getFloat32(off+12,true), v1y=view.getFloat32(off+16,true), v1z=view.getFloat32(off+20,true);
    const v2x=view.getFloat32(off+24,true), v2y=view.getFloat32(off+28,true), v2z=view.getFloat32(off+32,true);
    const v3x=view.getFloat32(off+36,true), v3y=view.getFloat32(off+40,true), v3z=view.getFloat32(off+44,true);
    vol += signedVolumeTriangle(v1x,v1y,v1z,v2x,v2y,v2z,v3x,v3y,v3z);
    minX=Math.min(minX,v1x,v2x,v3x); maxX=Math.max(maxX,v1x,v2x,v3x);
    minY=Math.min(minY,v1y,v2y,v3y); maxY=Math.max(maxY,v1y,v2y,v3y);
    minZ=Math.min(minZ,v1z,v2z,v3z); maxZ=Math.max(maxZ,v1z,v2z,v3z);
  }
  return {
    volumeCm3: Math.abs(vol) / 1000,
    bbox: { x: Math.round(maxX-minX), y: Math.round(maxY-minY), z: Math.round(maxZ-minZ) },
    triangles: numTri
  };
}

function parseSTLAscii(text) {
  const verts = [...text.matchAll(/vertex\s+([\d.e+-]+)\s+([\d.e+-]+)\s+([\d.e+-]+)/g)];
  let vol=0, minX=Infinity,minY=Infinity,minZ=Infinity,maxX=-Infinity,maxY=-Infinity,maxZ=-Infinity;
  for (let i=0; i<verts.length-2; i+=3) {
    const [ax,ay,az] = verts[i].slice(1).map(Number);
    const [bx,by,bz] = verts[i+1].slice(1).map(Number);
    const [cx,cy,cz] = verts[i+2].slice(1).map(Number);
    vol += signedVolumeTriangle(ax,ay,az,bx,by,bz,cx,cy,cz);
    minX=Math.min(minX,ax,bx,cx); maxX=Math.max(maxX,ax,bx,cx);
    minY=Math.min(minY,ay,by,cy); maxY=Math.max(maxY,ay,by,cy);
    minZ=Math.min(minZ,az,bz,cz); maxZ=Math.max(maxZ,az,bz,cz);
  }
  return {
    volumeCm3: Math.abs(vol) / 1000,
    bbox: { x: Math.round(maxX-minX), y: Math.round(maxY-minY), z: Math.round(maxZ-minZ) },
    triangles: Math.floor(verts.length/3)
  };
}

function analyzeSTL(buffer) {
  const header8 = new Uint8Array(buffer, 0, 80);
  const headerStr = String.fromCharCode(...header8);
  if (headerStr.startsWith('solid')) {
    const text = new TextDecoder().decode(buffer);
    if (text.includes('facet normal')) return parseSTLAscii(text);
  }
  return parseSTLBinary(buffer);
}

// ===== PREISSCHÄTZUNG =====
const MATERIALS = {
  'PLA':   { density: 1.24, pricePerG: 0.04, label: 'PLA (Standard)' },
  'PETG':  { density: 1.27, pricePerG: 0.05, label: 'PETG' },
  'ABS':   { density: 1.05, pricePerG: 0.05, label: 'ABS' },
  'TPU':   { density: 1.21, pricePerG: 0.08, label: 'TPU (Flexibel)' },
  'PA':    { density: 1.14, pricePerG: 0.12, label: 'Nylon (PA)' },
  'CF':    { density: 1.30, pricePerG: 0.18, label: 'Carbon-Filament' },
};

function estimatePrice(stlData, materialKey='PLA', infillPct=20) {
  const mat = MATERIALS[materialKey] || MATERIALS['PLA'];
  // Infill-Faktor: Wände (~25% des Volumens) + Infill
  const infillFactor = 0.25 + (infillPct/100) * 0.75;
  const weightG = stlData.volumeCm3 * mat.density * infillFactor;
  const materialCost = weightG * mat.pricePerG;
  // Maschinenzeit: ~2 cm³/min bei typischem Druck
  const printMinutes = stlData.volumeCm3 / 2;
  const machineCost = (printMinutes / 60) * 4; // €4/h
  const setup = 3.50;
  const total = Math.max(5, materialCost + machineCost + setup);
  return {
    weightG: weightG.toFixed(1),
    priceMin: (total * 0.85).toFixed(2),
    priceMax: (total * 1.25).toFixed(2),
    material: mat.label,
    infill: infillPct
  };
}

function checkFitsInPrinter(bbox) {
  const printers = [
    { name: 'Bambu H2D', x:325, y:320, z:325 },
    { name: 'Bambu P1S', x:256, y:256, z:256 },
  ];
  return printers.filter(p => bbox.x<=p.x && bbox.y<=p.y && bbox.z<=p.z);
}

// ===== SVG ANALYSE =====
function analyzeSVG(text) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'image/svg+xml');
  const svg = doc.querySelector('svg');
  let width = 0, height = 0;
  if (svg) {
    const vb = svg.getAttribute('viewBox');
    if (vb) { const p = vb.split(/[\s,]+/); width=parseFloat(p[2]); height=parseFloat(p[3]); }
    else {
      width  = parseFloat(svg.getAttribute('width')  || 0);
      height = parseFloat(svg.getAttribute('height') || 0);
    }
  }
  const paths   = doc.querySelectorAll('path, line, polyline, polygon, rect, circle, ellipse').length;
  return { width: Math.round(width), height: Math.round(height), elements: paths };
}

function estimateLaserPrice(svgData) {
  // Schnittlänge grob schätzen: ~2 * Umfang * Anzahl Elemente / 10
  const areaCm2 = (svgData.width/10) * (svgData.height/10);
  const cuttingCost = areaCm2 * 0.08; // €0.08 pro cm² Schnittfläche
  const setup = 5;
  const total = Math.max(8, cuttingCost + setup);
  return {
    width: svgData.width,
    height: svgData.height,
    priceMin: (total * 0.85).toFixed(2),
    priceMax: (total * 1.30).toFixed(2),
    elements: svgData.elements
  };
}

// ===== DATEI HANDLER =====
function handleFile(file) {
  const name = file.name.toLowerCase();
  appendUser(`📂 ${file.name}`);
  const typing = appendTyping();
  raiseBrows();

  if (name.endsWith('.stl') || name.endsWith('.obj')) {
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const data = analyzeSTL(e.target.result);
        typing.remove();
        const fits = checkFitsInPrinter(data.bbox);
        const price = estimatePrice(data, 'PLA', 20);
        let msg = `📦 <strong>${file.name}</strong> analysiert!<br>`;
        msg += `📐 Maße: ${data.bbox.x}×${data.bbox.y}×${data.bbox.z} mm<br>`;
        msg += `⚖️ Volumen: ${data.volumeCm3.toFixed(1)} cm³<br>`;
        msg += `🧱 Gewicht (~${price.infill}% Infill, PLA): ca. ${price.weightG}g<br><br>`;
        if (fits.length > 0) {
          msg += `✅ Passt in: ${fits.map(p=>p.name).join(', ')}<br><br>`;
        } else {
          msg += `⚠️ Zu groß für unsere Standard-Drucker — bitte anfragen!<br><br>`;
        }
        msg += `💶 <strong>Preisschätzung (PLA, 20% Infill):</strong><br>`;
        msg += `ca. <strong>€${price.priceMin} – €${price.priceMax}</strong><br><br>`;
        msg += `Anderes Material gewünscht? Sag mir: PLA, PETG, ABS, TPU, Nylon oder Carbon!<br>`;
        msg += `Oder direkt <a href="${window.location.pathname.includes('/leistungen/') ? '../' : ''}index.html#kontakt" style="color:var(--accent)">Angebot anfragen →</a>`;
        appendBot(msg);
        chatHistory.push({ role: 'assistant', content: `STL analysiert: ${data.bbox.x}×${data.bbox.y}×${data.bbox.z}mm, ${data.volumeCm3.toFixed(1)}cm³, Schätzung €${price.priceMin}-€${price.priceMax}` });
        wiggle();
      } catch(err) {
        typing.remove();
        appendBot('Hmm, die Datei konnte ich nicht lesen 🤔 Bitte STL im Binary-Format exportieren!');
      }
    };
    reader.readAsArrayBuffer(file);

  } else if (name.endsWith('.svg') || name.endsWith('.dxf')) {
    const reader = new FileReader();
    reader.onload = e => {
      try {
        typing.remove();
        const data = analyzeSVG(e.target.result);
        const price = estimateLaserPrice(data);
        let msg = `✂️ <strong>${file.name}</strong> analysiert!<br>`;
        if (data.width && data.height) {
          msg += `📐 Größe: ${data.width}×${data.height} mm<br>`;
          if (data.width > 400 || data.height > 400) {
            msg += `⚠️ Größer als unser Laser-Bett (400×400mm) — mehrteilig möglich!<br>`;
          } else {
            msg += `✅ Passt in unser Laser-Bett (400×400mm)<br>`;
          }
        }
        msg += `🔢 Elemente: ${data.elements}<br><br>`;
        msg += `💶 <strong>Grobe Schätzung (Lasercutting, Holz/Acryl):</strong><br>`;
        msg += `ca. <strong>€${price.priceMin} – €${price.priceMax}</strong><br><br>`;
        msg += `Material und Dicke beeinflussen den Preis. <a href="${window.location.pathname.includes('/leistungen/') ? '../' : ''}index.html#kontakt" style="color:var(--accent)">Genaues Angebot →</a>`;
        appendBot(msg);
        wiggle();
      } catch(err) {
        typing.remove();
        appendBot('SVG-Analyse fehlgeschlagen 🤔 Versuch es mit einer Standard-SVG-Datei!');
      }
    };
    reader.readAsText(file);

  } else {
    typing.remove();
    appendBot(`📎 Format <strong>.${name.split('.').pop()}</strong> kenne ich noch nicht. Schick mir STL, OBJ, SVG oder DXF!`);
  }
}


// ===== CHAT HELPER =====
function appendUser(msg) {
  const messages = document.getElementById('clippy-messages');
  const div = document.createElement('div');
  div.className = 'clippy-msg clippy-user';
  div.innerHTML = `<span>${msg.replace(/</g,'&lt;')}</span>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function appendBot(msg) {
  const messages = document.getElementById('clippy-messages');
  const div = document.createElement('div');
  div.className = 'clippy-msg clippy-bot';
  div.innerHTML = `<span>${msg.replace(/\n/g,'<br>')}</span>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  return div;
}

function appendTyping() {
  const messages = document.getElementById('clippy-messages');
  const div = document.createElement('div');
  div.className = 'clippy-msg clippy-bot clippy-typing';
  div.innerHTML = '<span>📎 tippt...</span>';
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
  return div;
}


// ===== CHATBOT LOGIK =====
const OLLAMA_URL = 'http://69.62.105.159:32768/api/chat';

const SYSTEM_PROMPT = `Du bist Clippy, der freundliche und leicht witzige KI-Assistent von PitA (Printing in the Alps). Du beantwortest Fragen zu 3D-Druck, Lasercutting, Lasergravur, Prototyping und Materialien. Sei kurz, hilfreich und freundlich. Antworte auf Deutsch. Gelegentlich ein lockerer Spruch ist erlaubt, aber bleib professionell.

Seitenstruktur: Startseite (index.html), Leistungen (#leistungen), Materialien (materialien.html), FAQ (faq.html), Galerie (#galerie), Ablauf (#ablauf), Kontakt (#kontakt).
Unterseiten: leistungen/3d-druck.html, leistungen/lasercutting.html, leistungen/lasergravur.html, leistungen/prototyping.html, leistungen/resin-druck.html

Equipment:
- Bambu Lab H2D: 325×320×325mm, Dual Nozzle, Multi-Material
- 2× Bambu P1S: 256×256×256mm
- Creality Falcon Laser: 400×400mm
- Snapmaker A350T

FDM Materialien: PLA, PETG, ABS, ASA, TPU, PA, PC, PET + CF/GF Varianten, PPA-CF, PPS. Support: PVA, BVOH
Resin: Standard, Tough, Flexible, Castable
Laser: Holz bis 8mm, Acryl 6mm, Leder, Stoff, Papier (Schnitt). Metall, Glas, Keramik, Stein (Gravur)
Dateiformate: STL, 3MF, OBJ, STEP (3D) | SVG, DXF, AI, PDF (Laser)
Lieferzeiten: Prototypen 24-72h, Kleinserien 3-7 Tage. Versand DE. Überwiegend PV-Energie.

Preisschätzung grob: PLA einfaches Teil ab €5, PETG ab €8, Carbon ab €15. Laser einfaches Schild ab €8.
Wenn jemand eine Preisschätzung will ohne Datei: Frag nach Größe (mm) und Material.
Wenn jemand navigieren will: Gib einen HTML-Link zurück, z.B. <a href="materialien.html" style="color:var(--accent)">Materialien →</a>`;

const FALLBACK = {
  material: 'Wir haben über 20 Materialien! PLA, PETG, ABS, TPU, Nylon, Carbon-Filamente und mehr. Schau auf die <a href="materialien.html" style="color:var(--accent)">Materialien-Seite →</a>',
  kosten:   'Preise hängen von Material, Größe und Infill ab. Grob: PLA-Teile ab €5. Lad einfach deine STL hoch — ich schätze direkt! 📎',
  dauer:    'Prototypen: 24-72h. Kleinserien: 3-7 Werktage. Laser: 1-3 Tage. Eilaufträge möglich! ⚡',
  format:   '3D: STL, 3MF, OBJ, STEP. Laser: SVG, DXF, AI, PDF. Einfach über das 📂-Icon hochladen!',
  groesse:  'H2D: 325×320×325mm. P1S: 256×256×256mm. Laser: 400×400mm. Größer? Mehrteilig möglich!',
  nav:      'Klar! → <a href="index.html#leistungen" style="color:var(--accent)">Leistungen</a> | <a href="materialien.html" style="color:var(--accent)">Materialien</a> | <a href="faq.html" style="color:var(--accent)">FAQ</a> | <a href="index.html#kontakt" style="color:var(--accent)">Kontakt</a>',
  witzig:   ['Ich bin ein Büroklammer-KI. Hätte ich früher nicht gedacht. 📎', 'Falls das schiefgeht: einfach nochmal fragen. Ich vergesse eh alles nach dem Chat. 😅', 'Gute Frage! Wahrscheinlich die beste, die ich heute bekommen habe.'],
  default:  'Gute Frage! Am besten schreib uns direkt über das <a href="index.html#kontakt" style="color:var(--accent)">Kontaktformular →</a>'
};

function getFallback(msg) {
  const m = msg.toLowerCase();
  if (m.includes('material') || m.includes('filament') || m.includes('pla') || m.includes('resin')) return FALLBACK.material;
  if (m.includes('kost') || m.includes('preis') || m.includes('€') || m.includes('euro') || m.includes('teuer') || m.includes('günstig') || m.includes('schätz')) return FALLBACK.kosten;
  if (m.includes('dauer') || m.includes('lang') || m.includes('zeit') || m.includes('schnell') || m.includes('lief')) return FALLBACK.dauer;
  if (m.includes('format') || m.includes('datei') || m.includes('stl') || m.includes('svg') || m.includes('hochlad')) return FALLBACK.format;
  if (m.includes('groß') || m.includes('maß') || m.includes('dimension') || m.includes('maxim')) return FALLBACK.groesse;
  if (m.includes('wo ') || m.includes('find') || m.includes('seite') || m.includes('navig') || m.includes('menü')) return FALLBACK.nav;
  if (m.includes('witz') || m.includes('joke') || m.includes('lustig') || m.includes('humor')) return FALLBACK.witzig[Math.floor(Math.random()*FALLBACK.witzig.length)];
  return FALLBACK.default;
}

// Material-Wechsel nach STL-Analyse erkennen
function checkMaterialChange(msg) {
  const m = msg.toLowerCase();
  for (const [key, mat] of Object.entries(MATERIALS)) {
    if (m.includes(key.toLowerCase()) || m.includes(mat.label.toLowerCase())) {
      return key;
    }
  }
  return null;
}

let chatHistory = [];
let lastSTLData = null;

async function sendClippy() {
  const input = document.getElementById('clippy-input');
  const msg = input.value.trim();
  if (!msg) return;

  appendUser(msg);
  input.value = '';

  // Material-Wechsel nach STL-Upload?
  if (lastSTLData) {
    const matKey = checkMaterialChange(msg);
    if (matKey) {
      const price = estimatePrice(lastSTLData, matKey, 20);
      appendBot(`💶 <strong>${price.material}</strong> (20% Infill):<br>Gewicht: ~${price.weightG}g<br>Schätzung: <strong>€${price.priceMin} – €${price.priceMax}</strong><br><small>Anderes Material? PLA, PETG, ABS, TPU, Nylon, Carbon</small>`);
      wiggle();
      return;
    }
  }

  const typing = appendTyping();
  const mouth = document.querySelector('.clippy-mouth');
  if (mouth) mouth.setAttribute('d', 'M42 70 Q50 74 58 70');

  chatHistory.push({ role:'user', content: msg });

  let reply;
  try {
    const res = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'mistral:7b',
        messages: [{ role:'system', content:SYSTEM_PROMPT }, ...chatHistory.slice(-6)],
        stream: false,
        options: { temperature: 0.7, num_predict: 300 }
      }),
      signal: AbortSignal.timeout(15000)
    });
    const data = await res.json();
    reply = data.message?.content || getFallback(msg);
    chatHistory.push({ role:'assistant', content: reply });
  } catch(e) {
    reply = getFallback(msg);
  }

  if (mouth) mouth.setAttribute('d', 'M42 70 Q50 78 58 70');
  typing.remove();
  appendBot(reply);
  wiggle();
}

// STL-Daten für Material-Wechsel merken
const _origHandleFile = handleFile;
window._clippyLastSTL = null;
