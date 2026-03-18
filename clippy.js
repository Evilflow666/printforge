/**
 * Clippy — PitA KI-Assistent
 * Inspiriert von Microsoft Office Clippy (1997-2007)
 * Idle-Animationen, Blinzeln, Wippen, Tipps
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
          <span>Hallo! 👋 Ich bin Clippy, dein PitA-Assistent. Frag mich was über 3D-Druck, Laser, Materialien oder unseren Service!</span>
        </div>
      </div>
      <div class="clippy-input-row">
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
        <!-- Body -->
        <ellipse cx="50" cy="95" rx="18" ry="50" fill="none" stroke="#5C5C5C" stroke-width="8" stroke-linecap="round"/>
        <!-- Left Eye -->
        <ellipse cx="42" cy="55" rx="8" ry="10" fill="white" stroke="#888" stroke-width="2"/>
        <ellipse cx="43" cy="56" rx="3.5" ry="4.5" fill="#222" class="clippy-pupil-l"/>
        <ellipse cx="44" cy="54" rx="1.5" ry="2" fill="white" class="clippy-glint-l"/>
        <!-- Left Eyelid (for blinking) -->
        <ellipse cx="42" cy="55" rx="8" ry="0" fill="#E8A000" class="clippy-lid-l"/>
        <!-- Right Eye -->
        <ellipse cx="58" cy="55" rx="8" ry="10" fill="white" stroke="#888" stroke-width="2"/>
        <ellipse cx="59" cy="56" rx="3.5" ry="4.5" fill="#222" class="clippy-pupil-r"/>
        <ellipse cx="60" cy="54" rx="1.5" ry="2" fill="white" class="clippy-glint-r"/>
        <!-- Right Eyelid (for blinking) -->
        <ellipse cx="58" cy="55" rx="8" ry="0" fill="#E8A000" class="clippy-lid-r"/>
        <!-- Eyebrows -->
        <path d="M34 44 Q42 38 50 44" fill="none" stroke="#666" stroke-width="2.5" stroke-linecap="round" class="clippy-brow-l"/>
        <path d="M50 44 Q58 38 66 44" fill="none" stroke="#666" stroke-width="2.5" stroke-linecap="round" class="clippy-brow-r"/>
        <!-- Mouth -->
        <path d="M42 70 Q50 78 58 70" fill="none" stroke="#666" stroke-width="2.5" stroke-linecap="round" class="clippy-mouth"/>
      </svg>
      <span class="clippy-label">Frag mich!</span>
    </button>
  </div>`;

  document.body.insertAdjacentHTML('beforeend', html);

  // Bind all event listeners immediately after injection
  const toggleBtn = document.getElementById('clippy-toggle');
  const closeBtn = document.getElementById('clippy-close-btn');
  const sendBtn = document.getElementById('clippy-send');
  const inp = document.getElementById('clippy-input');

  if (toggleBtn) toggleBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleClippy();
  });
  if (closeBtn) closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleClippy();
  });
  if (sendBtn) sendBtn.addEventListener('click', function(e) {
    e.preventDefault();
    sendClippy();
  });
  if (inp) inp.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') sendClippy();
  });

  console.log('[Clippy] Initialized:', {
    toggle: !!toggleBtn,
    close: !!closeBtn,
    send: !!sendBtn,
    input: !!inp
  });
})();


// ===== TOGGLE =====
function toggleClippy() {
  const chat = document.getElementById('clippy-chat');
  const bubble = document.getElementById('clippy-bubble');
  if (!chat) { console.error('[Clippy] Chat element not found'); return; }

  const isHidden = chat.classList.contains('clippy-hidden');
  console.log('[Clippy] Toggle:', isHidden ? 'opening' : 'closing');

  if (isHidden) {
    chat.classList.remove('clippy-hidden');
    if (bubble) bubble.classList.add('clippy-hidden');
    setTimeout(() => {
      const input = document.getElementById('clippy-input');
      if (input) input.focus();
    }, 100);
  } else {
    chat.classList.add('clippy-hidden');
  }
}


// ===== IDLE ANIMATIONS =====
const idleTips = [
  "Wusstest du? Wir drucken mit PV-Energie! ☀️",
  "Tipp: STL hochladen → Angebot in 24h!",
  "Carbon-Filament ist 5x steifer als PLA 💪",
  "Schau mal in unsere Materialien-Seite!",
  "Du brauchst Hilfe? Klick mich an! 📎",
  "Fun Fact: Unser H2D hat Dual Nozzle!",
  "Lasergravur auf Glas? Kein Problem!",
  "Wir fertigen auch Kleinserien bis 50 Stück.",
  "Resin-Druck = Spritzguss-Qualität 🔬",
  "Eilauftrag? Prototypen in 24 Stunden!"
];

let lastTipIndex = -1;
let idleTimer = null;
let blinkInterval = null;

function blink() {
  const lidL = document.querySelector('.clippy-lid-l');
  const lidR = document.querySelector('.clippy-lid-r');
  if (!lidL || !lidR) return;

  lidL.setAttribute('ry', '10');
  lidR.setAttribute('ry', '10');

  setTimeout(() => {
    lidL.setAttribute('ry', '0');
    lidR.setAttribute('ry', '0');
  }, 150);
}

function doubleBlink() {
  blink();
  setTimeout(blink, 300);
}

function lookAround() {
  const pL = document.querySelector('.clippy-pupil-l');
  const pR = document.querySelector('.clippy-pupil-r');
  const gL = document.querySelector('.clippy-glint-l');
  const gR = document.querySelector('.clippy-glint-r');
  if (!pL) return;

  const dirs = [
    { px: -2, py: 0, gx: -1, gy: -2 },   // left
    { px: 2, py: 0, gx: 3, gy: -2 },      // right
    { px: 0, py: -2, gx: 1, gy: -4 },     // up
    { px: 0, py: 2, gx: 1, gy: 0 },       // down
    { px: 0, py: 0, gx: 1, gy: -2 },      // center
  ];
  const dir = dirs[Math.floor(Math.random() * dirs.length)];

  pL.setAttribute('cx', 43 + dir.px);
  pL.setAttribute('cy', 56 + dir.py);
  pR.setAttribute('cx', 59 + dir.px);
  pR.setAttribute('cy', 56 + dir.py);
  gL.setAttribute('cx', 44 + dir.gx);
  gL.setAttribute('cy', 54 + dir.gy);
  gR.setAttribute('cx', 60 + dir.gx);
  gR.setAttribute('cy', 54 + dir.gy);

  // Return to center after a bit
  setTimeout(() => {
    pL.setAttribute('cx', '43'); pL.setAttribute('cy', '56');
    pR.setAttribute('cx', '59'); pR.setAttribute('cy', '56');
    gL.setAttribute('cx', '44'); gL.setAttribute('cy', '54');
    gR.setAttribute('cx', '60'); gR.setAttribute('cy', '54');
  }, 1500 + Math.random() * 1000);
}

function wiggle() {
  const toggle = document.getElementById('clippy-toggle');
  if (!toggle) return;
  toggle.classList.add('clippy-wiggle');
  setTimeout(() => toggle.classList.remove('clippy-wiggle'), 600);
}

function raiseBrows() {
  const bL = document.querySelector('.clippy-brow-l');
  const bR = document.querySelector('.clippy-brow-r');
  if (!bL) return;
  bL.setAttribute('d', 'M34 40 Q42 34 50 40');
  bR.setAttribute('d', 'M50 40 Q58 34 66 40');
  setTimeout(() => {
    bL.setAttribute('d', 'M34 44 Q42 38 50 44');
    bR.setAttribute('d', 'M50 44 Q58 38 66 44');
  }, 800);
}

function showTip() {
  const chat = document.getElementById('clippy-chat');
  if (!chat.classList.contains('clippy-hidden')) return; // Don't show tips while chat is open

  const bubble = document.getElementById('clippy-bubble');
  const text = document.getElementById('clippy-bubble-text');
  if (!bubble || !text) return;

  let idx;
  do { idx = Math.floor(Math.random() * idleTips.length); } while (idx === lastTipIndex);
  lastTipIndex = idx;

  text.textContent = idleTips[idx];
  bubble.classList.remove('clippy-hidden');
  wiggle();

  setTimeout(() => bubble.classList.add('clippy-hidden'), 5000);
}

// Random idle action
function idleAction() {
  const actions = [blink, blink, doubleBlink, lookAround, lookAround, wiggle, raiseBrows];
  const action = actions[Math.floor(Math.random() * actions.length)];
  action();
}

// Start idle loop
function startIdle() {
  // Blink every 3-6 seconds
  blinkInterval = setInterval(() => {
    if (Math.random() < 0.4) blink();
  }, 3000);

  // Random action every 4-8 seconds
  setInterval(() => {
    idleAction();
  }, 4000 + Math.random() * 4000);

  // Show a tip every 20-40 seconds
  setInterval(() => {
    if (Math.random() < 0.5) showTip();
  }, 20000 + Math.random() * 20000);

  // First tip after 8 seconds
  setTimeout(showTip, 8000);
}

// Follow mouse with eyes (subtle)
document.addEventListener('mousemove', (e) => {
  const svg = document.getElementById('clippy-svg');
  if (!svg) return;
  const rect = svg.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height * 0.35;
  const dx = (e.clientX - cx) / window.innerWidth * 3;
  const dy = (e.clientY - cy) / window.innerHeight * 2;
  const clampX = Math.max(-2.5, Math.min(2.5, dx));
  const clampY = Math.max(-2, Math.min(2, dy));

  const pL = document.querySelector('.clippy-pupil-l');
  const pR = document.querySelector('.clippy-pupil-r');
  if (pL && pR) {
    pL.setAttribute('cx', 43 + clampX);
    pL.setAttribute('cy', 56 + clampY);
    pR.setAttribute('cx', 59 + clampX);
    pR.setAttribute('cy', 56 + clampY);
  }
});

// Init
startIdle();


// ===== CHATBOT LOGIC =====
const OLLAMA_URL = 'http://69.62.105.159:32768/api/chat';
const SYSTEM_PROMPT = `Du bist Clippy, der freundliche KI-Assistent von PitA (Printing in the Alps). Du beantwortest Fragen zu 3D-Druck, Lasercutting, Lasergravur, Prototyping und Materialien. Sei kurz, hilfreich und freundlich. Antworte auf Deutsch. Wenn jemand wissen will wo etwas auf der Seite ist, hilf bei der Navigation.
Seitenstruktur: Startseite (index.html), Leistungen (#leistungen), Materialien (materialien.html), FAQ (faq.html), Galerie (#galerie), Ablauf (#ablauf), Kontakt (#kontakt), Impressum, Datenschutz.
Unterseiten: 3D-Druck, Lasercutting, Lasergravur, Prototyping, Resin Druck.
Equipment: Bambu Lab H2D (325x320x325mm, Dual Nozzle), 2x P1S (256x256x256mm), Creality Falcon Laser (400x400mm), Snapmaker A350T
FDM Materialien: PLA, PETG, ABS, ASA, TPU, PA, PC, PET + CF/GF Varianten + PPA-CF, PPS. Support: PVA, BVOH
Resin: Standard, Tough, Flexible, Castable
Laser: Holz bis 8mm, Acryl 6mm, Leder, Stoff, Papier (Cut). Metall, Glas, Keramik, Stein (Gravur)
Dateien: STL, 3MF, OBJ, STEP (3D), SVG, DXF, AI, PDF (Laser)
Lieferzeit: Prototypen 24-72h, Kleinserien 3-7 Tage. Versand DE. PV-Energie.`;

const FALLBACK = {
  material: 'Wir haben über 20 Materialien! PLA, PETG, ABS, TPU, Nylon, Carbon-Filamente und mehr. Schau auf die <a href="materialien.html" style="color:var(--accent)">Materialien-Seite</a>! 📎',
  kosten: 'Preise sind individuell — abhängig von Material, Größe und Druckzeit. PLA-Teile ab ca. 5€. Schick uns deine Datei über das <a href="index.html#kontakt" style="color:var(--accent)">Kontaktformular</a>! 📎',
  dauer: 'Prototypen: 24-72h. Kleinserien: 3-7 Werktage. Lasergravur: 1-3 Tage. Eilaufträge möglich! 📎',
  format: '3D-Druck: STL, 3MF, OBJ, STEP. Laser: SVG, DXF, AI, PDF. Bilder: PNG/JPG (300+ DPI). 📎',
  groesse: 'H2D: 325×320×325mm. P1S: 256×256×256mm. Laser: 400×400mm. Größere Teile mehrteilig möglich! 📎',
  nav: 'Klar! Oben findest du: <a href="index.html#leistungen" style="color:var(--accent)">Leistungen</a>, <a href="materialien.html" style="color:var(--accent)">Materialien</a>, <a href="faq.html" style="color:var(--accent)">FAQ</a>, <a href="index.html#galerie" style="color:var(--accent)">Galerie</a> und <a href="index.html#kontakt" style="color:var(--accent)">Kontakt</a>. 📎',
  default: 'Gute Frage! Am besten schreibst du uns direkt über das <a href="index.html#kontakt" style="color:var(--accent)">Kontaktformular</a> — wir antworten schnell! 📎'
};

function getFallback(msg) {
  const m = msg.toLowerCase();
  if (m.includes('material') || m.includes('filament') || m.includes('pla') || m.includes('resin') || m.includes('harz')) return FALLBACK.material;
  if (m.includes('kost') || m.includes('preis') || m.includes('€') || m.includes('euro') || m.includes('teuer') || m.includes('günstig')) return FALLBACK.kosten;
  if (m.includes('dauer') || m.includes('lang') || m.includes('zeit') || m.includes('schnell') || m.includes('lief')) return FALLBACK.dauer;
  if (m.includes('format') || m.includes('datei') || m.includes('stl') || m.includes('svg') || m.includes('hochlad')) return FALLBACK.format;
  if (m.includes('groß') || m.includes('maß') || m.includes('dimension') || m.includes('maxim')) return FALLBACK.groesse;
  if (m.includes('wo ') || m.includes('find') || m.includes('seite') || m.includes('navig') || m.includes('menü') || m.includes('link')) return FALLBACK.nav;
  return FALLBACK.default;
}

let chatHistory = [];

async function sendClippy() {
  const input = document.getElementById('clippy-input');
  const msg = input.value.trim();
  if (!msg) return;

  const messages = document.getElementById('clippy-messages');

  const userDiv = document.createElement('div');
  userDiv.className = 'clippy-msg clippy-user';
  userDiv.innerHTML = '<span>' + msg.replace(/</g,'&lt;') + '</span>';
  messages.appendChild(userDiv);
  input.value = '';

  const typing = document.createElement('div');
  typing.className = 'clippy-msg clippy-bot clippy-typing';
  typing.innerHTML = '<span>📎 tippt...</span>';
  messages.appendChild(typing);
  messages.scrollTop = messages.scrollHeight;

  // Happy mouth while thinking
  const mouth = document.querySelector('.clippy-mouth');
  if (mouth) mouth.setAttribute('d', 'M42 70 Q50 74 58 70');

  chatHistory.push({ role: 'user', content: msg });

  let reply;
  try {
    const res = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'mistral:7b',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...chatHistory.slice(-6)],
        stream: false,
        options: { temperature: 0.7, num_predict: 256 }
      }),
      signal: AbortSignal.timeout(15000)
    });
    const data = await res.json();
    reply = data.message?.content || getFallback(msg);
    chatHistory.push({ role: 'assistant', content: reply });
  } catch (e) {
    reply = getFallback(msg);
  }

  // Reset mouth
  if (mouth) mouth.setAttribute('d', 'M42 70 Q50 78 58 70');

  typing.remove();
  const botDiv = document.createElement('div');
  botDiv.className = 'clippy-msg clippy-bot';
  botDiv.innerHTML = '<span>' + reply.replace(/\n/g,'<br>') + '</span>';
  messages.appendChild(botDiv);
  messages.scrollTop = messages.scrollHeight;

  // Happy wiggle after answering
  wiggle();
}
