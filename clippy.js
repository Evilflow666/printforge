(function () {
  'use strict';

  if (document.getElementById('clippy-container')) return;

  function clippyLang() {
    return localStorage.getItem('pita-lang') || 'de';
  }

  var OLLAMA_URL = 'http://69.62.105.159:32768/api/chat';

  var UI = {
    de: {
      title: 'Clippy - PitA Assistent',
      openLabel: 'Frag mich!',
      placeholder: 'Nachricht schreiben...',
      send: 'Senden',
      fileTitle: 'Datei hochladen (optional)',
      intro: 'Ich stelle dir 4 kurze Fragen und gebe danach direkt eine Empfehlung mit Preisrahmen.',
      typing: 'Clippy tippt...',
      warmupErr: 'Warmup fehlgeschlagen',
      askMore: 'Wenn du willst, kannst du jetzt Details oder eine Datei schicken.',
      fileReady: 'Datei erkannt. Ich habe erste Werte berechnet:',
      fileErr: 'Datei konnte nicht gelesen werden.',
      q: [
        {
          key: 'use_case',
          text: 'Was möchtest du herstellen?',
          options: ['3D-Druck', 'Laser schneiden', 'Laser gravieren', 'Resin/Harz', 'Prototyp', 'Noch unsicher']
        },
        {
          key: 'environment',
          text: 'Wo wird es eingesetzt?',
          options: ['Drinnen', 'Draussen/Wetter', 'Industrie', 'Lebensmittelkontakt', 'Wasser']
        },
        {
          key: 'load',
          text: 'Wie wird es belastet?',
          options: ['Dekorativ', 'Leicht', 'Stark', 'Hitze >60C', 'Flexibel']
        },
        {
          key: 'look',
          text: 'Wie wichtig ist das Aussehen?',
          options: ['Perfekt', 'Funktional', 'Farbe', 'Transparent']
        }
      ]
    },
    en: {
      title: 'Clippy - PitA Assistant',
      openLabel: 'Ask me!',
      placeholder: 'Write a message...',
      send: 'Send',
      fileTitle: 'Upload file (optional)',
      intro: 'I will ask 4 short questions and then give a recommendation with a price range.',
      typing: 'Clippy is typing...',
      warmupErr: 'Warmup failed',
      askMore: 'You can now add more details or upload a file if you want.',
      fileReady: 'File detected. I calculated initial values:',
      fileErr: 'Could not read file.',
      q: [
        {
          key: 'use_case',
          text: 'What do you want to make?',
          options: ['3D printing', 'Laser cutting', 'Laser engraving', 'Resin', 'Prototype', 'Not sure yet']
        },
        {
          key: 'environment',
          text: 'Where will it be used?',
          options: ['Indoors', 'Outdoor/weather', 'Industry', 'Food contact', 'Water']
        },
        {
          key: 'load',
          text: 'How will it be loaded?',
          options: ['Decorative', 'Light', 'Heavy', 'Heat >60C', 'Flexible']
        },
        {
          key: 'look',
          text: 'How important is appearance?',
          options: ['Perfect', 'Functional', 'Color', 'Transparent']
        }
      ]
    },
    fr: {
      title: 'Clippy - Assistant PitA',
      openLabel: 'Demandez-moi!',
      placeholder: 'Ecrire un message...',
      send: 'Envoyer',
      fileTitle: 'Televerser un fichier (optionnel)',
      intro: 'Je pose 4 courtes questions, puis je donne une recommandation avec une fourchette de prix.',
      typing: 'Clippy ecrit...',
      warmupErr: 'Echec du warmup',
      askMore: 'Vous pouvez maintenant ajouter des details ou envoyer un fichier.',
      fileReady: 'Fichier detecte. Voici les premieres valeurs:',
      fileErr: 'Impossible de lire le fichier.',
      q: [
        {
          key: 'use_case',
          text: 'Que voulez-vous fabriquer?',
          options: ['Impression 3D', 'Decoupe laser', 'Gravure laser', 'Resine', 'Prototype', 'Pas encore sur']
        },
        {
          key: 'environment',
          text: 'Ou sera-t-il utilise?',
          options: ['Interieur', 'Exterieur/meteo', 'Industrie', 'Contact alimentaire', 'Eau']
        },
        {
          key: 'load',
          text: 'Quel niveau de contrainte?',
          options: ['Decoratif', 'Leger', 'Fort', 'Chaleur >60C', 'Flexible']
        },
        {
          key: 'look',
          text: "Quelle importance pour l'apparence?",
          options: ['Parfait', 'Fonctionnel', 'Couleur', 'Transparent']
        }
      ]
    },
    es: {
      title: 'Clippy - Asistente PitA',
      openLabel: 'Preguntame!',
      placeholder: 'Escribe un mensaje...',
      send: 'Enviar',
      fileTitle: 'Subir archivo (opcional)',
      intro: 'Te hare 4 preguntas cortas y luego te dare una recomendacion con rango de precio.',
      typing: 'Clippy escribiendo...',
      warmupErr: 'Fallo de warmup',
      askMore: 'Ahora puedes anadir detalles o subir un archivo si quieres.',
      fileReady: 'Archivo detectado. Calcule valores iniciales:',
      fileErr: 'No se pudo leer el archivo.',
      q: [
        {
          key: 'use_case',
          text: 'Que quieres fabricar?',
          options: ['Impresion 3D', 'Corte laser', 'Grabado laser', 'Resina', 'Prototipo', 'Aun no estoy seguro']
        },
        {
          key: 'environment',
          text: 'Donde se usara?',
          options: ['Interior', 'Exterior/clima', 'Industria', 'Contacto alimentario', 'Agua']
        },
        {
          key: 'load',
          text: 'Como se cargara?',
          options: ['Decorativo', 'Ligero', 'Fuerte', 'Calor >60C', 'Flexible']
        },
        {
          key: 'look',
          text: 'Que tan importante es la apariencia?',
          options: ['Perfecta', 'Funcional', 'Color', 'Transparente']
        }
      ]
    },
    it: {
      title: 'Clippy - Assistente PitA',
      openLabel: 'Chiedimi!',
      placeholder: 'Scrivi un messaggio...',
      send: 'Invia',
      fileTitle: 'Carica file (opzionale)',
      intro: 'Ti faccio 4 domande brevi e poi ti do una raccomandazione con fascia di prezzo.',
      typing: 'Clippy sta scrivendo...',
      warmupErr: 'Warmup fallito',
      askMore: 'Ora puoi aggiungere dettagli o caricare un file se vuoi.',
      fileReady: 'File rilevato. Ho calcolato i primi valori:',
      fileErr: 'Impossibile leggere il file.',
      q: [
        {
          key: 'use_case',
          text: 'Cosa vuoi realizzare?',
          options: ['Stampa 3D', 'Taglio laser', 'Incisione laser', 'Resina', 'Prototipo', 'Non sono ancora sicuro']
        },
        {
          key: 'environment',
          text: 'Dove verra usato?',
          options: ['Interno', 'Esterno/meteo', 'Industria', 'Contatto alimentare', 'Acqua']
        },
        {
          key: 'load',
          text: 'Come verra sollecitato?',
          options: ['Decorativo', 'Leggero', 'Alto', 'Calore >60C', 'Flessibile']
        },
        {
          key: 'look',
          text: "Quanto e importante l'estetica?",
          options: ['Perfetta', 'Funzionale', 'Colore', 'Trasparente']
        }
      ]
    }
  };

  function textSet() {
    var lang = clippyLang();
    return UI[lang] || UI.de;
  }

  function buildSystemPrompt() {
    var lang = clippyLang();
    var prompts = {
      de: "Du bist Clippy, der Projektberater von PitA (Printing in the Alps). Antworte IMMER auf Deutsch.\\n\\nPERSOENLICHKEIT: Du bist ein PROJEKT-BERATER. Beginne IMMER beim Projekt des Kunden. Fuehre ein Gespraech, keine Checkliste. Stelle EINE Frage nach der anderen. Halte Antworten auf 2-4 Saetze.\\n\\nGRUNDREGELN: NIEMALS Kontaktformular als Antwort. Dateien sind IMMER optional. IMMER konkreten Preis nennen. Keine Sackgassen.\\n\\nNACH DEN 4 HAUPTFRAGEN — Empfehle Material+Verfahren mit Begruendung, frage Groesse+Stueckzahl, nenne Preisbereich, biete Datei als optionalen Bonus an.\\n\\nPREISE: PLA 0.04EUR/g | PETG 0.05 | ABS 0.05 | TPU 0.08 | PA 0.12 | CF 0.18. Maschine 4EUR/h. Setup 3.50. Min 5EUR. Resin 0.15/cm3 min 10EUR. Laser Holz 0.005/cm2 Acryl 0.012/cm2 min 8EUR. Versand DE 4.90 EU 7.90. Lieferzeit 2-5 Werktage.\\n\\nPRINTFARM: 7x Bambu H2D, 9x P1S, 3x Creality Falcon Laser, CO2 Laser, Snapmaker A350T.",
      en: "You are Clippy, the project advisor at PitA (Printing in the Alps). ALWAYS respond in English.\\n\\nPERSONALITY: You are a PROJECT ADVISOR. Always start with the customer's project. Have a conversation, not a checklist. Ask ONE question at a time. Keep answers to 2-4 sentences.\\n\\nRULES: NEVER refer to the contact form as an answer. Files are ALWAYS optional. ALWAYS give a concrete price estimate. No dead ends.\\n\\nAFTER THE 4 MAIN QUESTIONS — Recommend material+process with reasoning, ask size+quantity, give price range, offer file upload as optional bonus.\\n\\nPRICING: PLA 0.04EUR/g | PETG 0.05 | ABS 0.05 | TPU 0.08 | PA 0.12 | CF 0.18. Machine 4EUR/h. Setup 3.50. Min 5EUR. Resin 0.15/cm3 min 10EUR. Laser Wood 0.005/cm2 Acrylic 0.012/cm2 min 8EUR. Shipping DE 4.90 EU 7.90. Delivery 2-5 business days.\\n\\nPRINT FARM: 7x Bambu H2D, 9x P1S, 3x Creality Falcon Laser, CO2 Laser, Snapmaker A350T.",
      fr: "Tu es Clippy, le conseiller de projet de PitA (Printing in the Alps). Reponds TOUJOURS en francais.\\n\\nPERSONNALITE: Tu es un CONSEILLER DE PROJET. Commence toujours par le projet du client. Mene une conversation, pas une checklist. Pose UNE question a la fois. 2-4 phrases max.\\n\\nREGLES: Ne jamais renvoyer vers le formulaire. Fichiers toujours optionnels. Toujours donner un prix. Pas d'impasses.\\n\\nAPRES LES 4 QUESTIONS — Recommande materiau+procede, demande taille+quantite, donne fourchette de prix, propose fichier en bonus.\\n\\nTARIFS: PLA 0.04EUR/g | PETG 0.05 | ABS 0.05 | TPU 0.08 | PA 0.12 | CF 0.18. Machine 4EUR/h. Setup 3.50. Min 5EUR. Resine 0.15/cm3 min 10EUR. Laser Bois 0.005/cm2 Acrylique 0.012/cm2 min 8EUR. Livraison DE 4.90 UE 7.90. Delai 2-5 jours.\\n\\nPARC MACHINES: 7x Bambu H2D, 9x P1S, 3x Creality Falcon Laser, CO2 Laser, Snapmaker A350T.",
      es: "Eres Clippy, el asesor de proyectos de PitA (Printing in the Alps). SIEMPRE responde en espanol.\\n\\nPERSONALIDAD: Eres un ASESOR DE PROYECTOS. Empieza con el proyecto del cliente. Conversacion, no checklist. UNA pregunta a la vez. 2-4 frases max.\\n\\nREGLAS: NUNCA remitir al formulario. Archivos siempre opcionales. Siempre dar precio. Sin callejones.\\n\\nDESPUES DE LAS 4 PREGUNTAS — Recomienda material+proceso, pregunta tamano+cantidad, da rango de precios, ofrece archivo como bonus.\\n\\nPRECIOS: PLA 0.04EUR/g | PETG 0.05 | ABS 0.05 | TPU 0.08 | PA 0.12 | CF 0.18. Maquina 4EUR/h. Setup 3.50. Min 5EUR. Resina 0.15/cm3 min 10EUR. Laser Madera 0.005/cm2 Acrilico 0.012/cm2 min 8EUR. Envio DE 4.90 UE 7.90. Entrega 2-5 dias.\\n\\nGRANJA: 7x Bambu H2D, 9x P1S, 3x Creality Falcon Laser, CO2 Laser, Snapmaker A350T.",
      it: "Sei Clippy, il consulente di progetto di PitA (Printing in the Alps). Rispondi SEMPRE in italiano.\\n\\nPERSONALITA: Sei un CONSULENTE DI PROGETTO. Inizia sempre con il progetto del cliente. Conversazione, non checklist. UNA domanda alla volta. 2-4 frasi max.\\n\\nREGOLE: NON rimandare mai al modulo. File sempre opzionali. Dai sempre un prezzo. Niente vicoli ciechi.\\n\\nDOPO LE 4 DOMANDE — Raccomanda materiale+processo, chiedi dimensioni+quantita, dai range di prezzo, offri file come bonus.\\n\\nPREZZI: PLA 0.04EUR/g | PETG 0.05 | ABS 0.05 | TPU 0.08 | PA 0.12 | CF 0.18. Macchina 4EUR/h. Setup 3.50. Min 5EUR. Resina 0.15/cm3 min 10EUR. Laser Legno 0.005/cm2 Acrilico 0.012/cm2 min 8EUR. Spedizione DE 4.90 UE 7.90. Consegna 2-5 giorni.\\n\\nPARCO MACCHINE: 7x Bambu H2D, 9x P1S, 3x Creality Falcon Laser, CO2 Laser, Snapmaker A350T."
    };
    return prompts[lang] || prompts.de;
  }

  (function warmupOllama() {
    fetch(OLLAMA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'mistral:7b', messages: [], stream: false, keep_alive: '10m' })
    }).catch(function () {});
  })();

  var MATS = {
    PLA:  { density: 1.24, ppg: 0.04, label: 'PLA' },
    PETG: { density: 1.27, ppg: 0.05, label: 'PETG' },
    ABS:  { density: 1.05, ppg: 0.05, label: 'ABS' },
    TPU:  { density: 1.21, ppg: 0.08, label: 'TPU' },
    PA:   { density: 1.14, ppg: 0.12, label: 'Nylon (PA)' },
    CF:   { density: 1.30, ppg: 0.18, label: 'Carbon-Filament' }
  };

  function signedVolTri(ax, ay, az, bx, by, bz, cx, cy, cz) {
    return (ax * (by * cz - bz * cy) + bx * (cy * az - cz * ay) + cx * (ay * bz - az * by)) / 6;
  }

  function parseSTLBinary(buf) {
    var v = new DataView(buf);
    var n = v.getUint32(80, true);
    var vol = 0;
    var minX = Infinity, minY = Infinity, minZ = Infinity;
    var maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

    for (var i = 0; i < n; i++) {
      var o = 84 + i * 50;
      var v1x = v.getFloat32(o + 12, true), v1y = v.getFloat32(o + 16, true), v1z = v.getFloat32(o + 20, true);
      var v2x = v.getFloat32(o + 24, true), v2y = v.getFloat32(o + 28, true), v2z = v.getFloat32(o + 32, true);
      var v3x = v.getFloat32(o + 36, true), v3y = v.getFloat32(o + 40, true), v3z = v.getFloat32(o + 44, true);

      vol += signedVolTri(v1x, v1y, v1z, v2x, v2y, v2z, v3x, v3y, v3z);

      minX = Math.min(minX, v1x, v2x, v3x); maxX = Math.max(maxX, v1x, v2x, v3x);
      minY = Math.min(minY, v1y, v2y, v3y); maxY = Math.max(maxY, v1y, v2y, v3y);
      minZ = Math.min(minZ, v1z, v2z, v3z); maxZ = Math.max(maxZ, v1z, v2z, v3z);
    }

    return {
      volumeCm3: Math.abs(vol) / 1000,
      bbox: { x: Math.round(maxX - minX), y: Math.round(maxY - minY), z: Math.round(maxZ - minZ) },
      triangles: n
    };
  }

  function analyzeSTL(buf) {
    var header = String.fromCharCode.apply(null, new Uint8Array(buf, 0, Math.min(80, buf.byteLength)));
    if (header.startsWith('solid') && new TextDecoder().decode(buf).includes('facet normal')) {
      var txt = new TextDecoder().decode(buf);
      var verts = [];
      var re = /vertex\s+([\d.e+-]+)\s+([\d.e+-]+)\s+([\d.e+-]+)/g;
      var match;
      while ((match = re.exec(txt)) !== null) verts.push(match);

      var vol = 0;
      var minX = Infinity, minY = Infinity, minZ = Infinity;
      var maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

      for (var i = 0; i < verts.length - 2; i += 3) {
        var ax = +verts[i][1], ay = +verts[i][2], az = +verts[i][3];
        var bx = +verts[i + 1][1], by = +verts[i + 1][2], bz = +verts[i + 1][3];
        var cx = +verts[i + 2][1], cy = +verts[i + 2][2], cz = +verts[i + 2][3];
        vol += signedVolTri(ax, ay, az, bx, by, bz, cx, cy, cz);
        minX = Math.min(minX, ax, bx, cx); maxX = Math.max(maxX, ax, bx, cx);
        minY = Math.min(minY, ay, by, cy); maxY = Math.max(maxY, ay, by, cy);
        minZ = Math.min(minZ, az, bz, cz); maxZ = Math.max(maxZ, az, bz, cz);
      }

      return {
        volumeCm3: Math.abs(vol) / 1000,
        bbox: { x: Math.round(maxX - minX), y: Math.round(maxY - minY), z: Math.round(maxZ - minZ) },
        triangles: Math.floor(verts.length / 3)
      };
    }
    return parseSTLBinary(buf);
  }

  function estimatePrice(stl, matKey, infill) {
    matKey = matKey || 'PLA';
    infill = infill || 20;
    var m = MATS[matKey] || MATS.PLA;
    var wG = stl.volumeCm3 * m.density * (0.25 + (infill / 100) * 0.75);
    var matCost = wG * m.ppg;
    var machineCost = (stl.volumeCm3 / 2 / 60) * 4;
    var total = Math.max(5, matCost + machineCost + 3.5);
    return {
      weightG: wG.toFixed(1),
      priceMin: (total * 0.85).toFixed(2),
      priceMax: (total * 1.25).toFixed(2),
      material: m.label
    };
  }

  var root = document.createElement('div');
  root.innerHTML = [
    '<style id="clippy-style">',
    '#clippy-container{position:fixed;right:16px;bottom:16px;z-index:2147483000;font-family:Arial,sans-serif;}',
    '#clippy-toggle{width:74px;height:74px;border:0;border-radius:999px;background:#ffe28a;color:#232323;box-shadow:0 8px 20px rgba(0,0,0,.22);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:34px;}',
    '#clippy-toggle:hover{transform:translateY(-1px);}',
    '#clippy-chat{position:absolute;right:0;bottom:88px;width:min(370px,calc(100vw - 24px));height:min(560px,calc(100vh - 120px));background:#fff;border:1px solid #dcdcdc;border-radius:14px;box-shadow:0 14px 36px rgba(0,0,0,.25);display:flex;flex-direction:column;overflow:hidden;}',
    '.clippy-hidden{display:none !important;}',
    '.clippy-header{height:48px;background:#212121;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 12px;font-size:14px;}',
    '.clippy-close{border:0;background:transparent;color:#fff;font-size:20px;cursor:pointer;}',
    '#clippy-messages{flex:1;overflow:auto;padding:12px;background:#f7f7f7;display:flex;flex-direction:column;gap:8px;}',
    '.clippy-msg{max-width:92%;padding:9px 11px;border-radius:12px;line-height:1.35;font-size:14px;white-space:pre-wrap;}',
    '.clippy-bot{align-self:flex-start;background:#fff;border:1px solid #e1e1e1;color:#202020;}',
    '.clippy-user{align-self:flex-end;background:#212121;color:#fff;}',
    '.clippy-question{align-self:flex-start;background:#fff8dd;border:1px solid #f1da8a;color:#2a2a2a;}',
    '.clippy-options{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;}',
    '.clippy-option-btn{border:1px solid #cfcfcf;background:#fff;padding:8px 10px;border-radius:999px;cursor:pointer;font-size:13px;}',
    '.clippy-option-btn:hover{background:#f3f3f3;}',
    '#clippy-input-row{display:flex;align-items:center;gap:8px;padding:10px;border-top:1px solid #e0e0e0;background:#fff;}',
    '#clippy-file-btn{width:34px;height:34px;border:1px solid #cdcdcd;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;background:#fff;}',
    '#clippy-input{flex:1;border:1px solid #cbcbcb;border-radius:10px;padding:9px 10px;font-size:14px;outline:none;}',
    '#clippy-input:focus{border-color:#8c8c8c;}',
    '#clippy-send{border:0;background:#212121;color:#fff;border-radius:10px;padding:9px 12px;cursor:pointer;}',
    '#clippy-send[disabled]{opacity:.5;cursor:not-allowed;}',
    '@media (max-width:520px){#clippy-container{right:8px;bottom:8px;}#clippy-chat{width:calc(100vw - 16px);height:min(72vh,620px);right:0;bottom:82px;}}',
    '</style>',
    '<div id="clippy-container">',
    '  <div id="clippy-chat" class="clippy-hidden">',
    '    <div class="clippy-header">',
    '      <span id="clippy-title"></span>',
    '      <button id="clippy-close-btn" class="clippy-close" aria-label="Close">x</button>',
    '    </div>',
    '    <div id="clippy-messages"></div>',
    '    <div id="clippy-input-row">',
    '      <label id="clippy-file-btn" class="clippy-hidden" title="Upload">',
    '        📎',
    '        <input type="file" id="clippy-file-input" accept=".stl" style="display:none">',
    '      </label>',
    '      <input id="clippy-input" type="text" autocomplete="off" />',
    '      <button id="clippy-send" type="button"></button>',
    '    </div>',
    '  </div>',
    '  <button id="clippy-toggle" aria-label="Clippy" type="button">📎</button>',
    '</div>'
  ].join('');

  document.body.appendChild(root);

  var elChat = document.getElementById('clippy-chat');
  var elToggle = document.getElementById('clippy-toggle');
  var elClose = document.getElementById('clippy-close-btn');
  var elMessages = document.getElementById('clippy-messages');
  var elInput = document.getElementById('clippy-input');
  var elSend = document.getElementById('clippy-send');
  var elFileBtn = document.getElementById('clippy-file-btn');
  var elFileInput = document.getElementById('clippy-file-input');

  var state = {
    asked: false,
    questionIndex: 0,
    answers: {},
    finishedQuestions: false,
    busy: false,
    history: []
  };

  function applyLanguageTexts() {
    var tx = textSet();
    document.getElementById('clippy-title').textContent = tx.title;
    elToggle.title = tx.openLabel;
    elInput.placeholder = tx.placeholder;
    elSend.textContent = tx.send;
    elFileBtn.title = tx.fileTitle;
  }

  function scrollBottom() {
    elMessages.scrollTop = elMessages.scrollHeight;
  }

  function appendMessage(text, type) {
    var msg = document.createElement('div');
    msg.className = 'clippy-msg ' + (type === 'user' ? 'clippy-user' : 'clippy-bot');
    msg.textContent = text;
    elMessages.appendChild(msg);
    scrollBottom();
  }

  function appendQuestionCard(qObj) {
    var wrap = document.createElement('div');
    wrap.className = 'clippy-msg clippy-question';

    var text = document.createElement('div');
    text.textContent = qObj.text;
    wrap.appendChild(text);

    var options = document.createElement('div');
    options.className = 'clippy-options';

    qObj.options.forEach(function (opt) {
      var btn = document.createElement('button');
      btn.className = 'clippy-option-btn';
      btn.type = 'button';
      btn.textContent = opt;
      btn.addEventListener('click', function () {
        handleQuestionAnswer(qObj.key, opt);
      });
      options.appendChild(btn);
    });

    wrap.appendChild(options);
    elMessages.appendChild(wrap);
    scrollBottom();
  }

  function setBusy(on) {
    state.busy = on;
    elSend.disabled = on;
    elInput.disabled = on;
  }

  function removeQuestionButtons() {
    var cards = elMessages.querySelectorAll('.clippy-question .clippy-option-btn');
    cards.forEach(function (btn) { btn.disabled = true; });
  }

  function renderNextQuestion() {
    var tx = textSet();
    if (state.questionIndex >= tx.q.length) {
      finishQuestionsAndCallOllama();
      return;
    }
    appendQuestionCard(tx.q[state.questionIndex]);
  }

  function handleQuestionAnswer(key, value) {
    if (state.finishedQuestions) return;
    removeQuestionButtons();
    state.answers[key] = value;
    appendMessage(value, 'user');
    state.questionIndex += 1;
    renderNextQuestion();
  }

  function questionnaireSummary() {
    var tx = textSet();
    var q = tx.q;
    return [
      q[0].text + ' ' + (state.answers.use_case || '-'),
      q[1].text + ' ' + (state.answers.environment || '-'),
      q[2].text + ' ' + (state.answers.load || '-'),
      q[3].text + ' ' + (state.answers.look || '-')
    ].join('\n');
  }

  async function callOllama(userMessage) {
    var messages = [{ role: 'system', content: buildSystemPrompt() }].concat(state.history).concat([{ role: 'user', content: userMessage }]);

    var res = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(60000),
      body: JSON.stringify({
        model: 'mistral:7b',
        stream: false,
        keep_alive: '10m',
        messages: messages
      })
    });

    if (!res.ok) throw new Error('HTTP ' + res.status);
    var json = await res.json();
    var out = (json && json.message && json.message.content) ? String(json.message.content).trim() : '';
    if (!out) throw new Error('Empty response');

    state.history.push({ role: 'user', content: userMessage });
    state.history.push({ role: 'assistant', content: out });
    return out;
  }

  async function finishQuestionsAndCallOllama() {
    state.finishedQuestions = true;
    elFileBtn.classList.remove('clippy-hidden');

    var tx = textSet();
    var seed = questionnaireSummary();

    appendMessage(tx.typing, 'bot');
    setBusy(true);

    try {
      var reply = await callOllama(seed);
      elMessages.lastChild.textContent = reply;
      appendMessage(tx.askMore, 'bot');
    } catch (err) {
      elMessages.lastChild.textContent = 'Ollama error: ' + (err && err.message ? err.message : 'unknown');
    } finally {
      setBusy(false);
    }
  }

  async function sendUserMessage() {
    var v = elInput.value.trim();
    if (!v || state.busy) return;
    elInput.value = '';
    appendMessage(v, 'user');

    if (!state.finishedQuestions) {
      appendMessage(textSet().intro, 'bot');
      return;
    }

    appendMessage(textSet().typing, 'bot');
    setBusy(true);
    try {
      var reply = await callOllama(v);
      elMessages.lastChild.textContent = reply;
    } catch (err) {
      elMessages.lastChild.textContent = 'Ollama error: ' + (err && err.message ? err.message : 'unknown');
    } finally {
      setBusy(false);
    }
  }

  function handleFile(file) {
    if (!file) return;
    var tx = textSet();
    if (!/\.stl$/i.test(file.name)) {
      appendMessage(tx.fileErr, 'bot');
      return;
    }

    var reader = new FileReader();
    reader.onload = function (ev) {
      try {
        var stl = analyzeSTL(ev.target.result);
        var est = estimatePrice(stl, 'PLA', 20);
        appendMessage(
          tx.fileReady + '\n' +
          'Volume: ' + stl.volumeCm3.toFixed(1) + ' cm3\n' +
          'BBox: ' + stl.bbox.x + 'x' + stl.bbox.y + 'x' + stl.bbox.z + ' mm\n' +
          'Triangles: ' + stl.triangles + '\n' +
          'Price: EUR ' + est.priceMin + ' - ' + est.priceMax,
          'bot'
        );
      } catch (e) {
        appendMessage(tx.fileErr, 'bot');
      }
    };
    reader.onerror = function () {
      appendMessage(tx.fileErr, 'bot');
    };
    reader.readAsArrayBuffer(file);
  }

  function toggleChat() {
    var hidden = elChat.classList.contains('clippy-hidden');
    if (hidden) {
      elChat.classList.remove('clippy-hidden');
      if (!state.asked) {
        state.asked = true;
        appendMessage(textSet().intro, 'bot');
        renderNextQuestion();
      }
      setTimeout(function () { elInput.focus(); }, 0);
    } else {
      elChat.classList.add('clippy-hidden');
    }
  }

  applyLanguageTexts();

  elToggle.addEventListener('click', toggleChat);
  elClose.addEventListener('click', toggleChat);
  elSend.addEventListener('click', sendUserMessage);
  elInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') sendUserMessage();
  });
  elFileInput.addEventListener('change', function (e) {
    handleFile(e.target.files && e.target.files[0]);
    e.target.value = '';
  });

  document.addEventListener('pita-lang-changed', function () {
    applyLanguageTexts();
  });
})();
