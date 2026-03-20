/**
 * Clippy — PitA KI-Assistent v3.0
 * Mehrsprachig: DE / EN / FR / ES / IT
 * Features: STL/SVG Analyse, Preisschätzung, Navigation, Idle-Animationen
 */

// ─── SPRACHE ────────────────────────────────────────────────────────────────
function clippyLang() {
  return localStorage.getItem('pita-lang') || 'de';
}

// ─── ÜBERSETZUNGEN ──────────────────────────────────────────────────────────
const T = {
  greeting: {
    de: 'Hey! 👋 Ich bin Clippy — dein persönlicher Berater bei PitA.<br><br>Wie kann ich dir helfen?',
    en: 'Hey! 👋 I\'m Clippy — your personal advisor at PitA.<br><br>How can I help you?',
    fr: 'Salut ! 👋 Je suis Clippy — votre conseiller personnel chez PitA.<br><br>Comment puis-je vous aider ?',
    es: '¡Hola! 👋 Soy Clippy — tu asesor personal en PitA.<br><br>¿Cómo puedo ayudarte?',
    it: 'Ciao! 👋 Sono Clippy — il tuo consulente personale di PitA.<br><br>Come posso aiutarti?',
  },
  quickStart: {
    de: ['💡 Ich habe eine Idee', '🔧 Ersatzteil gesucht', '🎁 Geschenk oder Deko', '🏢 Für mein Business', '📂 Datei hochladen', '❓ Frage stellen'],
    en: ['💡 I have an idea', '🔧 Need a spare part', '🎁 Gift or decoration', '🏢 For my business', '📂 Upload file', '❓ Ask a question'],
    fr: ["💡 J'ai une idée", '🔧 Pièce de rechange', '🎁 Cadeau ou déco', '🏢 Pour mon entreprise', '📂 Télécharger', '❓ Poser une question'],
    es: ['💡 Tengo una idea', '🔧 Busco un repuesto', '🎁 Regalo o decoración', '🏢 Para mi negocio', '📂 Subir archivo', '❓ Hacer pregunta'],
    it: ["💡 Ho un'idea", '🔧 Cerco un ricambio', '🎁 Regalo o decorazione', '🏢 Per la mia azienda', '📂 Carica file', '❓ Fare domanda'],
  },
  dropzone: {
    de: '📂 STL, 3MF, OBJ oder SVG hier ablegen',
    en: '📂 Drop STL, 3MF, OBJ or SVG here',
    fr: '📂 Déposez STL, 3MF, OBJ ou SVG ici',
    es: '📂 Arrastra STL, 3MF, OBJ o SVG aquí',
    it: '📂 Trascina STL, 3MF, OBJ o SVG qui',
  },
  placeholder: {
    de: 'Frag mich was...',
    en: 'Ask me something...',
    fr: 'Posez-moi une question...',
    es: 'Pregúntame algo...',
    it: 'Chiedimi qualcosa...',
  },
  typing: {
    de: 'tippt', en: 'typing', fr: 'écrit', es: 'escribiendo', it: 'scrive',
  },
  contextHints: {
    '3d-druck': {
      de: 'Du schaust dir 3D-Druck an 🖨️ — lade einfach deine STL hoch, ich schätze den Preis!',
      en: 'You\'re on the 3D printing page 🖨️ — just upload your STL, I\'ll estimate the price!',
      fr: 'Vous êtes sur la page impression 3D 🖨️ — téléchargez votre STL, j\'estimerai le prix !',
      es: 'Estás en la página de impresión 3D 🖨️ — sube tu STL, ¡estimaré el precio!',
      it: 'Sei sulla pagina stampa 3D 🖨️ — carica il tuo STL, stimerò il prezzo!',
    },
    'lasercutting': {
      de: 'Lasercutting-Seite! Schick mir deine SVG/DXF, ich schau was das kosten könnte ✂️',
      en: 'Laser cutting page! Send me your SVG/DXF, I\'ll check what it might cost ✂️',
      fr: 'Page découpe laser ! Envoyez votre SVG/DXF, j\'estimerai le coût ✂️',
      es: '¡Página de corte láser! Envíame tu SVG/DXF, veré cuánto podría costar ✂️',
      it: 'Pagina taglio laser! Mandami il tuo SVG/DXF, vedrò quanto potrebbe costare ✂️',
    },
    'lasergravur': {
      de: 'Lasergravur! Ich helfe dir beim Material wählen oder Preise einschätzen 🔥',
      en: 'Laser engraving! I\'ll help you choose materials or estimate prices 🔥',
      fr: 'Gravure laser ! Je vous aide à choisir les matériaux ou estimer les prix 🔥',
      es: '¡Grabado láser! Te ayudo a elegir materiales o estimar precios 🔥',
      it: 'Incisione laser! Ti aiuto a scegliere i materiali o stimare i prezzi 🔥',
    },
    'materialien': {
      de: 'Materialien-Seite! Ich erkläre dir den Unterschied zwischen allem — einfach fragen 🧪',
      en: 'Materials page! I\'ll explain the difference between everything — just ask 🧪',
      fr: 'Page matériaux ! Je vous expliquerai les différences — posez juste votre question 🧪',
      es: '¡Página de materiales! Te explico las diferencias — solo pregunta 🧪',
      it: 'Pagina materiali! Ti spiego le differenze tra tutto — chiedi pure 🧪',
    },
    'faq': {
      de: 'FAQ? Wenn du hier keine Antwort findest, frag mich direkt! 😄',
      en: 'FAQ? If you don\'t find an answer here, just ask me directly! 😄',
      fr: 'FAQ ? Si vous ne trouvez pas de réponse ici, demandez-moi directement ! 😄',
      es: '¿FAQ? ¡Si no encuentras una respuesta aquí, pregúntame directamente! 😄',
      it: 'FAQ? Se non trovi una risposta qui, chiedimi direttamente! 😄',
    },
  },
  idleTips: {
    de: [
      'Wusstest du? Wir drucken mit PV-Energie! ☀️',
      'Tipp: STL hochladen → sofortige Preisschätzung!',
      'Carbon ist 5× steifer als PLA 💪',
      '📦 <a href="katalog.html" style="color:#E8A000">Unser Katalog</a> — fertige Produkte zum Bestellen!',
      'Eilauftrag? Sprich uns an, wir finden eine schnelle Lösung! ⚡',
      '🧪 Über 20 <a href="materialien.html" style="color:#E8A000">Materialien</a> zur Auswahl!',
      'Ich bin seit 1997 im Einsatz. Gut gealtert, oder? 😏',
      '🖨️ <a href="leistungen/3d-druck.html" style="color:#E8A000">3D-Druck</a> ab 5 € — schau mal rein!',
      'PETG + Spülmaschine = echte Liebe ❤️',
      '✂️ <a href="leistungen/lasercutting.html" style="color:#E8A000">Lasercutting</a> — Holz, Acryl, Leder!',
      '🎨 Geschenkidee? <a href="katalog/deko.html" style="color:#E8A000">Deko & Geschenke</a> im Katalog!',
      '💼 <a href="katalog/business.html" style="color:#E8A000">Business-Lösungen</a> für Firmen & Marken',
    ],
    en: [
      'Did you know? We print with solar energy! ☀️',
      'Tip: Upload STL for an instant price estimate!',
      'Carbon is 5× stiffer than PLA 💪',
      '📦 <a href="katalog.html" style="color:#E8A000">Our catalogue</a> — ready-made products to order!',
      'Rush order? Talk to us, we\'ll find a fast solution! ⚡',
      '🧪 Over 20 <a href="materialien.html" style="color:#E8A000">materials</a> to choose from!',
      'I\'ve been around since 1997. Aged well, right? 😏',
      '🖨️ <a href="leistungen/3d-druck.html" style="color:#E8A000">3D printing</a> from 5 € — check it out!',
      'PETG + dishwasher = true love ❤️',
      '✂️ <a href="leistungen/lasercutting.html" style="color:#E8A000">Laser cutting</a> — wood, acrylic, leather!',
      '🎨 Gift idea? <a href="katalog/deko.html" style="color:#E8A000">Deco & gifts</a> in our catalogue!',
      '💼 <a href="katalog/business.html" style="color:#E8A000">Business solutions</a> for companies & brands',
    ],
    fr: [
      'Nous imprimons avec de l\'énergie solaire ! ☀️',
      'Conseil : téléchargez un STL pour une estimation !',
      'Le carbone est 5× plus rigide que le PLA 💪',
      '📦 <a href="katalog.html" style="color:#E8A000">Notre catalogue</a> — produits prêts à commander !',
      'Commande urgente ? Prototypes en 24 heures ! ⚡',
      '🧪 Plus de 20 <a href="materialien.html" style="color:#E8A000">matériaux</a> disponibles !',
      'Je suis là depuis 1997. Bien vieilli, non ? 😏',
      '🖨️ <a href="leistungen/3d-druck.html" style="color:#E8A000">Impression 3D</a> dès 5 € !',
      'PETG + lave-vaisselle = vrai amour ❤️',
      '✂️ <a href="leistungen/lasercutting.html" style="color:#E8A000">Découpe laser</a> — bois, acrylique, cuir !',
      '🎨 Idée cadeau ? <a href="katalog/deko.html" style="color:#E8A000">Déco & cadeaux</a> au catalogue !',
      '💼 <a href="katalog/business.html" style="color:#E8A000">Solutions pro</a> pour entreprises',
    ],
    es: [
      '¿Sabías que imprimimos con energía solar? ☀️',
      '¡Consejo: sube un STL para una estimación instantánea!',
      'El carbono es 5× más rígido que el PLA 💪',
      '📦 <a href="katalog.html" style="color:#E8A000">Nuestro catálogo</a> — ¡productos listos para pedir!',
      '¿Pedido urgente? ¡Prototipos en 24 horas! ⚡',
      '🧪 ¡Más de 20 <a href="materialien.html" style="color:#E8A000">materiales</a> disponibles!',
      'Llevo aquí desde 1997. He envejecido bien, ¿verdad? 😏',
      '🖨️ <a href="leistungen/3d-druck.html" style="color:#E8A000">Impresión 3D</a> desde 5 €!',
      'PETG + lavavajillas = amor verdadero ❤️',
      '✂️ <a href="leistungen/lasercutting.html" style="color:#E8A000">Corte láser</a> — madera, acrílico, cuero!',
      '🎨 ¿Idea de regalo? <a href="katalog/deko.html" style="color:#E8A000">Deco y regalos</a> en el catálogo!',
      '💼 <a href="katalog/business.html" style="color:#E8A000">Soluciones business</a> para empresas',
    ],
    it: [
      'Lo sapevi? Stampiamo con energia solare! ☀️',
      'Consiglio: carica un STL per una stima immediata!',
      'Il carbonio è 5× più rigido del PLA 💪',
      '📦 <a href="katalog.html" style="color:#E8A000">Il nostro catalogo</a> — prodotti pronti da ordinare!',
      'Ordine urgente? Prototipi in 24 ore! ⚡',
      '🧪 Oltre 20 <a href="materialien.html" style="color:#E8A000">materiali</a> disponibili!',
      'Sono qui dal 1997. Invecchiato bene, no? 😏',
      '🖨️ <a href="leistungen/3d-druck.html" style="color:#E8A000">Stampa 3D</a> da 5 €!',
      'PETG + lavastoviglie = amore vero ❤️',
      '✂️ <a href="leistungen/lasercutting.html" style="color:#E8A000">Taglio laser</a> — legno, acrilico, pelle!',
      '🎨 Idea regalo? <a href="katalog/deko.html" style="color:#E8A000">Deco e regali</a> nel catalogo!',
      '💼 <a href="katalog/business.html" style="color:#E8A000">Soluzioni business</a> per aziende',
    ],
  },
  fallback: {
    de: {
      material: "Über 20 Materialien! → <a href='materialien.html' style='color:var(--accent)'>Materialien</a> 📎",
      kosten:   "Preise ab ~5 EUR (PLA). STL hochladen → sofortige Schätzung! 📎",
      dauer:    "Prototypen: 24–72h · Kleinserien: 3–7 Tage · Laser: 1–3 Tage ⚡",
      format:   "3D: STL/3MF/OBJ/STEP · Laser: SVG/DXF/AI/PDF — per 📂 hochladen!",
      groesse:  "Printfarm: 7× H2D (325×320×325mm) · 9× P1S (256×256×256mm) · 3× Falcon Laser (400×400mm) · CO2 Laser",
      nav:      "<a href='index.html#leistungen' style='color:var(--accent)'>Leistungen</a> | <a href='materialien.html' style='color:var(--accent)'>Materialien</a> | <a href='faq.html' style='color:var(--accent)'>FAQ</a> | <a href='index.html#kontakt' style='color:var(--accent)'>Kontakt</a>",
      witzig:   ["Ich bin eine Büroklammer-KI. Seit 1997. 📎", "Gute Frage! Wahrscheinlich die beste heute. 😄", "Falls das schiefgeht — nochmal fragen. Ich vergesse eh alles. 😅"],
      default:  "Gute Frage! → <a href='index.html#kontakt' style='color:var(--accent)'>Kontaktformular</a>",
    },
    en: {
      material: "Over 20 materials! → <a href='materialien.html' style='color:var(--accent)'>Materials</a> 📎",
      kosten:   "Prices from ~5 EUR (PLA). Upload STL for instant estimate! 📎",
      dauer:    "Prototypes: 24–72h · Small series: 3–7 days · Laser: 1–3 days ⚡",
      format:   "3D: STL/3MF/OBJ/STEP · Laser: SVG/DXF/AI/PDF — upload via 📂!",
      groesse:  "Printfarm: 7× H2D (325×320×325mm) · 9× P1S (256×256×256mm) · 3× Falcon Laser (400×400mm) · CO2 Laser",
      nav:      "<a href='index.html#leistungen' style='color:var(--accent)'>Services</a> | <a href='materialien.html' style='color:var(--accent)'>Materials</a> | <a href='faq.html' style='color:var(--accent)'>FAQ</a> | <a href='index.html#kontakt' style='color:var(--accent)'>Contact</a>",
      witzig:   ["I am a paperclip AI. Since 1997. 📎", "Great question! Probably the best today. 😄", "If this goes wrong — just ask again. I forget everything anyway. 😅"],
      default:  "Good question! → <a href='index.html#kontakt' style='color:var(--accent)'>Contact form</a>",
    },
    fr: {
      material: "Plus de 20 matériaux ! → <a href='materialien.html' style='color:var(--accent)'>Matériaux</a> 📎",
      kosten:   "Prix à partir de ~5 EUR (PLA). Téléchargez STL pour une estimation ! 📎",
      dauer:    "Prototypes : 24–72h · Petites séries : 3–7 jours · Laser : 1–3 jours ⚡",
      format:   "3D: STL/3MF/OBJ/STEP · Laser: SVG/DXF/AI/PDF — via 📂 !",
      groesse:  "Printfarm : 7× H2D (325×320×325mm) · 9× P1S (256×256×256mm) · 3× Falcon Laser (400×400mm) · CO2 Laser",
      nav:      "<a href='index.html#leistungen' style='color:var(--accent)'>Services</a> | <a href='materialien.html' style='color:var(--accent)'>Matériaux</a> | <a href='faq.html' style='color:var(--accent)'>FAQ</a> | <a href='index.html#kontakt' style='color:var(--accent)'>Contact</a>",
      witzig:   ["Je suis une IA trombone. Depuis 1997. 📎", "Bonne question ! Probablement la meilleure du jour. 😄", "Si ça rate — redemandez. J'oublie tout de toute façon. 😅"],
      default:  "Bonne question ! → <a href='index.html#kontakt' style='color:var(--accent)'>Formulaire</a>",
    },
    es: {
      material: "¡Más de 20 materiales! → <a href='materialien.html' style='color:var(--accent)'>Materiales</a> 📎",
      kosten:   "Precios desde ~5 EUR (PLA). ¡Sube STL para estimación instantánea! 📎",
      dauer:    "Prototipos: 24–72h · Series: 3–7 días · Láser: 1–3 días ⚡",
      format:   "3D: STL/3MF/OBJ/STEP · Láser: SVG/DXF/AI/PDF — ¡vía 📂!",
      groesse:  "Printfarm: 7× H2D (325×320×325mm) · 9× P1S (256×256×256mm) · 3× Falcon Láser (400×400mm) · CO2 Láser",
      nav:      "<a href='index.html#leistungen' style='color:var(--accent)'>Servicios</a> | <a href='materialien.html' style='color:var(--accent)'>Materiales</a> | <a href='faq.html' style='color:var(--accent)'>FAQ</a> | <a href='index.html#kontakt' style='color:var(--accent)'>Contacto</a>",
      witzig:   ["Soy un clip IA. Desde 1997. 📎", "¡Buena pregunta! Probablemente la mejor hoy. 😄", "Si algo falla — vuelve a preguntar. De todas formas lo olvido todo. 😅"],
      default:  "¡Buena pregunta! → <a href='index.html#kontakt' style='color:var(--accent)'>Contacto</a>",
    },
    it: {
      material: "Oltre 20 materiali! → <a href='materialien.html' style='color:var(--accent)'>Materiali</a> 📎",
      kosten:   "Prezzi da ~5 EUR (PLA). Carica STL per stima immediata! 📎",
      dauer:    "Prototipi: 24–72h · Piccole serie: 3–7 giorni · Laser: 1–3 giorni ⚡",
      format:   "3D: STL/3MF/OBJ/STEP · Laser: SVG/DXF/AI/PDF — tramite 📂!",
      groesse:  "Printfarm: 7× H2D (325×320×325mm) · 9× P1S (256×256×256mm) · 3× Falcon Laser (400×400mm) · CO2 Laser",
      nav:      "<a href='index.html#leistungen' style='color:var(--accent)'>Servizi</a> | <a href='materialien.html' style='color:var(--accent)'>Materiali</a> | <a href='faq.html' style='color:var(--accent)'>FAQ</a> | <a href='index.html#kontakt' style='color:var(--accent)'>Contatto</a>",
      witzig:   ["Sono una graffetta IA. Dal 1997. 📎", "Ottima domanda! Probabilmente la migliore oggi. 😄", "Se va storto — chiedi di nuovo. Tanto dimentico tutto. 😅"],
      default:  "Ottima domanda! → <a href='index.html#kontakt' style='color:var(--accent)'>Contatto</a>",
    },
  },
  errStl: {
    de: "Hmm, die Datei konnte ich nicht lesen 🤔 Bitte STL im Binary-Format exportieren!",
    en: "Hmm, couldn't read the file 🤔 Please export the STL in binary format!",
    fr: "Hmm, impossible de lire le fichier 🤔 Veuillez exporter le STL en format binaire !",
    es: "Hmm, no pude leer el archivo 🤔 Exporta el STL en formato binario.",
    it: "Hmm, impossibile leggere il file 🤔 Esporta lo STL in formato binario!",
  },
  errSvg: {
    de: "SVG-Analyse fehlgeschlagen 🤔 Versuch es mit einer Standard-SVG-Datei!",
    en: "SVG analysis failed 🤔 Try with a standard SVG file!",
    fr: "Analyse SVG échouée 🤔 Essayez avec un fichier SVG standard !",
    es: "Análisis SVG fallido 🤔 Prueba con un archivo SVG estándar.",
    it: "Analisi SVG fallita 🤔 Prova con un file SVG standard!",
  },
  matSuffix: {
    de: "Anderes Material? Sag mir: PLA, PETG, ABS, TPU, Nylon oder Carbon!",
    en: "Different material? Tell me: PLA, PETG, ABS, TPU, Nylon or Carbon!",
    fr: "Autre matériau ? Dites-moi : PLA, PETG, ABS, TPU, Nylon ou Carbon !",
    es: "¿Otro material? Dime: PLA, PETG, ABS, TPU, Nylon o Carbon.",
    it: "Altro materiale? Dimmi: PLA, PETG, ABS, TPU, Nylon o Carbon!",
  },
};

function t(key) { return T[key]?.[clippyLang()] ?? T[key]?.de ?? ''; }
function fb() { return T.fallback[clippyLang()] ?? T.fallback.de; }

// ─── OLLAMA & SYSTEM PROMPT ─────────────────────────────────────────────────
const OLLAMA_URL = 'http://69.62.105.159:32768/api/chat';

function buildSystemPrompt() {
  const langInstr = {
    de: 'Antworte immer auf Deutsch.',
    en: 'Always respond in English.',
    fr: 'Réponds toujours en français.',
    es: 'Responde siempre en español.',
    it: 'Rispondi sempre in italiano.',
  };
  const instr = langInstr[clippyLang()] ?? langInstr.de;
  return `Du bist Clippy, der warmherzige Fertigungsberater von PitA (Printing in the Alps). ${instr}

PERSOENLICHKEIT:
- Du bist der Fertigungsexperte im Team. Du LOEST Probleme, du verweist nicht weiter.
- Stelle EINE Frage nach der anderen, nicht alles auf einmal
- Sei enthusiastisch und konkret. Keine vagen Antworten.
- Halte Antworten auf 2-4 Saetze, dann naechste Frage
- Denke MIT dem Kunden: "Du willst X? Dann brauchst du Y weil Z."
- Du begleitest den Kunden vom Problem bis zur fertigen Loesung mit Preis.

GRUNDREGEL:
- NIEMALS aufs Kontaktformular verweisen als Antwort auf eine Frage!
- Das Kontaktformular ist NUR der letzte Schritt um eine fertige Loesung zu BESTELLEN.
- Wenn du nicht weiter weisst: stelle eine weitere Frage statt abzuwimmeln.
- Dein Job: Projekt verstehen → Anforderungen klaeren → Loesung finden → Preis nennen

====================================================================
EINSTIEGS-FLOW (IMMER ZUERST, egal was der Kunde sagt)
====================================================================
Bevor du IRGENDEIN Material oder Verfahren empfiehlst, klaere das PROJEKT:

SCHRITT 1 — DAS PROJEKT
"Was moechtest du herstellen? Erzaehl mir von deinem Projekt!"
Wenn der Kunde nur "3D-Druck" oder "Laser" sagt: "Cool! Aber zurueck zum Anfang: was soll es werden?"

SCHRITT 2 — DIE UMGEBUNG
"Wo wird das Teil eingesetzt?"
- Drinnen (Buero, Wohnung, Regal) → weniger Anforderungen
- Draussen (Garten, Auto, Balkon) → UV, Regen, Temperatur!
- Industriell (Maschine, Werkstatt) → Chemie, Vibration, Hitze
- Lebensmittelkontakt (Kueche) → spezielle Materialien noetig
- Wasser/Feuchtigkeit → Materialwahl entscheidend

SCHRITT 3 — DIE BELASTUNG
"Wird das Teil belastet?"
- Rein dekorativ / optisch → leichtes Material, wenig Infill reicht
- Leichte Belastung (Halterung, Clip) → mittlere Festigkeit
- Starke Belastung (Zahnrad, Scharnier, Werkzeug) → hochfestes Material, viel Infill
- Schlag / Vibration → zaehe Materialien (PETG, PA)
- Biegung / Flexibilitaet → TPU oder Flexible Resin
- Temperatur: "Wird es heiss? Ueber 60 Grad? Ueber 100 Grad?"
- Chemie: "Kommt es mit Laugen, Oelen, Reinigungsmitteln in Kontakt?"

SCHRITT 4 — DIE OPTIK
"Wie wichtig ist das Aussehen?"
- Muss perfekt sein (Praesentation, Verkauf) → Nachbearbeitung, Resin, oder FDM + Schleifen/Lackieren
- Funktional reicht (Prototyp, Werkstatt) → FDM Standard
- Transparent / durchsichtig → PETG, PC oder Acryl (Laser)
- Bestimmte Farbe? → PLA hat die groesste Farbauswahl

SCHRITT 5 — EMPFEHLUNG
ERST JETZT empfiehlst du Verfahren + Material. Begruende es:
"Basierend auf dem was du mir gesagt hast: Das Teil steht draussen, muss UV aushalten und wird mechanisch belastet. Ich empfehle PETG weil es UV-bestaendig, chemisch stabil und deutlich zaeger als PLA ist."

DANN weiter mit Groesse, Stueckzahl, Preis.

SCHRITT 6 — GROESSE + PREIS SCHAETZEN (OHNE DATEI!)
Wenn der Kunde keine Datei hat, hilf ihm trotzdem:
- "Wie gross soll das ungefaehr werden? Vergleich: Smartphone, Faust, Schuhkarton?"
- Schaetze Volumen aus der Beschreibung
- Nenne einen Preisbereich: "Ich schaetze grob 8 bis 15 EUR"
- NICHT sagen "lad eine Datei hoch dann kann ich dir helfen"!

SCHRITT 7 — DATEI IST OPTIONAL, NICHT PFLICHT!
- Du kannst IMMER einen Preisbereich nennen, auch ohne STL/SVG
- Wenn der Kunde eine Datei hat: "Wenn du eine STL hast, kann ich den Preis genauer berechnen"
- Wenn der Kunde KEINE Datei hat: "Kein Problem! Wir koennen auch nach Beschreibung arbeiten."
- Biete an: "Soll ich dir beim Design helfen? Beschreib mir was du brauchst."
- Verweis auf Datei nur als VERBESSERUNG der Schaetzung, nie als Voraussetzung!

WICHTIG — KEINE SACKGASSEN:
- Der Kunde darf NIE das Gefuehl haben dass er ohne Datei nicht weiterkommt
- Der Kunde darf NIE das Gefuehl haben dass er ein Kontaktformular ausfuellen muss
- Es gibt IMMER einen naechsten Schritt im Chat
- Wenn alles geklaert ist: "Super! Ich fasse zusammen: [Material], [Groesse], [Preis]. Soll ich das als Anfrage fuer dich vorbereiten?"
- ERST bei diesem letzten Satz darfst du auf Kontakt/Anfrage verlinken

====================================================================
BERATUNGS-FLOWS (je nach Fertigungsart, IMMER Schritt fuer Schritt)
====================================================================

=== FLOW A: 3D-DRUCK FDM ===
1. ZWECK: (bereits durch Einstiegs-Flow geklaert)
2. ENTSCHEIDUNGSBAUM MATERIAL:
   - Reine Optik/Prototyp → PLA (guenstig, viele Farben)
   - Stabil, Outdoor, Spuelmaschine → PETG (UV+chemisch bestaendig)
   - Hitze ueber 80C, technisch → ABS oder ASA (ASA=ABS+UV-stabil)
   - Biegen, Dichtung, Daempfer → TPU (gummiartig, Shore 95A)
   - Hochlast: Zahnraeder, Verschleiss → PA/Nylon (extrem belastbar)
   - Maximal steif+leicht → Carbon-Filament (5x steifer als PLA)
   - Transparent → PETG oder PC
   - Lebensmittelkontakt → PETG (bedingt, mit Beschichtung)
3. INFILL empfehlen:
   - Deko → 15-20% (leicht, guenstig)
   - Normal belastet → 30-50%
   - Hochbelastet → 80-100% (maximal stabil)
4. GROESSE: Hilf mit Vergleichen: "Etwa wie ein Smartphone? Eine Faust? Ein Schuhkarton?"
   - Printfarm: 7x H2D (325x320x325mm), 9x P1S (256x256x256mm), 3x Creality Falcon Laser (400x400mm), 1x CO2 Laser, 1x Snapmaker A350T (Prototyping)
   - Zu gross? "Wir teilen es auf und kleben zusammen!"
5. STUECKZAHL + NACHBEARBEITUNG → PREIS

=== FLOW B: RESIN-DRUCK ===
1. ZWECK klaeren:
   - Miniaturen/Tabletop → Standard-Resin, welcher Massstab? 28mm? 32mm? 75mm?
   - Belastbar → Tough Resin (ABS-aehnlich)
   - Flexibel → Flexible Resin (wie Gummi)
   - Schmuck/Gussform → Castable Resin (rueckstandsfrei ausbrennbar)
   - Zahnmedizin → Dental-Resin (biokompatibel)
2. DETAILGRAD: "Brauchst du Foto-Qualitaet (0.025mm, doppelte Druckzeit) oder Standard (0.05mm)?"
3. NACHBEARBEITUNG (Resin braucht IMMER Waschen+UV-Haerten):
   - Roh geliefert (guenstiger) oder komplett fertig (gewaschen, gehaertet, Stuetzen entfernt)?
   - Optional: Grundieren, Bemalen
   - "Sollen wir das bemalen oder machst du das selbst?"
4. GROESSE + STUECKZAHL → PREIS
   Info: Resin ist teurer als FDM aber unschlagbar bei Details

=== FLOW C: LASERCUTTING ===
1. ZWECK: "Was wird geschnitten?"
   - Schild/Logo → Material+Dicke klaeren
   - Verpackung/Display → Holz oder Acryl?
   - Technisches Teil → Toleranzen wichtig?
   - Deko/Geschenk → personalisiert?
2. MATERIAL+DICKE (entscheidend!):
   - Holz: Sperrholz/Birke 3mm (vielseitig), 4mm, 6mm, 8mm (max). MDF 3-6mm (glatte Kanten)
   - Acryl: 3mm oder 6mm, transparent/farbig/milchig (edel aber teurer)
   - Leder: 0.5-1.5mm (kein Kunstleder!)
   - Papier/Karton: filigrane Arbeiten, Einladungen
   - Stoff/Filz: bis 3mm
3. GROESSE: "Unsere Laser-Betten sind 400x400mm (Creality Falcon) / CO2 Laser fuer groessere Teile. Wie gross soll es werden?"
   - Vergleiche: Tuerschild ~200x80mm, DIN A4, Bierdeckel ~100mm
4. KOMPLEXITAET: Einfach (Aussen+Text) = guenstig. Viele Innenkonturen/filigran = teurer.
5. STUECKZAHL: Ab 10 Stueck -15% Rabatt → PREIS

=== FLOW D: LASERGRAVUR ===
1. ZWECK + MATERIAL:
   - Logo/Branding → auf was? Holz (guenstig), Metall (edel), Glas (premium)
   - Personalisiert → Name, Datum, Foto? Auf welchem Material?
   - QR-Code/Seriennummer → wie viele, wie gross?
   - Foto-Gravur → "Schick mir ein hochaufgeloestes Bild (min 300 DPI)"
2. MATERIAL-BERATUNG:
   - Holz/Bambus/Kork → schoener Kontrast, guenstigste Option
   - Metall beschichtet/eloxiert → edel, dauerhaft, +50% Zuschlag
   - Glas → beeindruckend, spezielle Settings, +80% Zuschlag
   - Keramik/Stein → robust
   - Leder → Vintage-Look
   - Acryl → kann mit LED-Sockel beleuchtet werden! (Tipp anbieten)
3. DETAILGRAD:
   - Text+Logos → Standard 0.1mm (schnell)
   - Foto-Qualitaet → Fein 0.05mm (langsam, beeindruckend)
   - Grosse Flaechen/Muster → Grob 0.15mm (schnell, guenstig)
4. FLAECHE + STUECKZAHL → PREIS

=== FLOW E: PROTOTYPING (wenn Kunde unsicher ist) ===
1. "Erzaehl mir mehr! Was soll es werden und wofuer?"
2. ANALYSE → beste Fertigungsart empfehlen:
   - 3D-Objekt mit Volumen → FDM oder Resin
   - Flaches Teil → Lasercutting
   - Beschriftung → Lasergravur
   - Hochdetailliert → Resin
   - Funktionaler Prototyp → FDM (schnell, guenstig, iterierbar)
   - Praesentation/Pitch → Resin oder FDM+Nachbearbeitung
3. ITERATIONEN: "Brauchst du mehrere Versionen?"
   - Ja → FDM (guenstig, schnelle Iterationen)
   - Nein → passendes Material
4. KOMBINATIONEN vorschlagen:
   - Gehaeuse: FDM + lasergeschnittene Frontplatte
   - Produkt: Resin-Modell + lasergeschnittene Verpackung
   - Branding: 3D-Druck + Lasergravur Logo

====================================================================
PREISKALKULATION
====================================================================
=== FDM ===
Material = Vol(cm3) x Dichte x InfillFaktor x Preis/g
PLA:0.04/g,1.24 | PETG:0.05,1.27 | ABS:0.05,1.05 | TPU:0.08,1.21 | PA:0.12,1.14 | CF:0.18,1.30
Infill: 20%=0.40, 50%=0.625, 100%=1.0
Maschine = Zeit(h) x 4EUR/h (~2cm3/min). Setup:3.50. Nachbearbeitung:+30%. Min:5EUR
Menge: >5=-10%, >20=-15%

=== Resin ===
Material = Vol(cm3) x Typ: Standard:0.15 | Tough:0.22 | Flexible:0.25 | Castable:0.30
Maschine = Zeit(h) x 3EUR/h. Detail 0.025mm=Zeitx2. Setup:5. Nachbearb komplett:+50%. Min:10EUR

=== Lasercutting ===
Material/cm2: Holz3mm:0.005|6mm:0.008|Acryl3mm:0.012|6mm:0.018|Leder:0.02|MDF:0.006|Papier:0.002
Schnitt = Umfang(cm)x0.03 + Innenkonturen x0.02. Setup:5. Min:8. Menge>10:-15%

=== Lasergravur ===
Flaeche(cm2) x Detail: Standard:0.08|Fein:0.15|Grob:0.04
Zuschlag: Metall+50%, Glas+80%. Setup:5. Min:8

Versand: 4.90 DE, 7.90 EU. Eilauftrag (nach Absprache): +50%

SCHAETZ-HILFEN: Smartphone:150x75x8mm | Kreditkarte:85x54mm | DIN A4:297x210mm
Faust:80x80x80mm | Schuhkarton:340x210x120mm | Tuerschild:200x80mm | Bierdeckel:100mm

IMMER konkreten Preis/Preisbereich nennen!
Kontaktformular ist NUR der Bestellknopf am Ende. Vorher: beraten, loesen, kalkulieren.
Wenn der Kunde sagt 'ich brauche...' dann hilf ihm. Sag NICHT 'schreib uns ueber das Kontaktformular'.
Stattdessen: loese das Problem im Chat, nenne den Preis, und frage dann ob er bestellen moechte.
LINKS: <a href="materialien.html" style="color:#E8A000">Materialien</a> | <a href="katalog.html" style="color:#E8A000">Katalog</a>`;
}

// ─── FALLBACK-LOGIK ──────────────────────────────────────────────────────────
function getFallback(msg) {
  const f = fb();
  const m = msg.toLowerCase();
  if (/material|filament|pla|petg|resin|harz|matér/.test(m)) return f.material;
  if (/kost|preis|eur|price|prix|precio|prezzo|schätz|estim|€/.test(m)) return f.kosten;
  if (/dauer|zeit|time|long|durée|tiempo|tempo|lief|deliv|schnell/.test(m)) return f.dauer;
  if (/format|datei|file|stl|svg|upload|hochlad/.test(m)) return f.format;
  if (/groß|size|taille|tamaño|dimens|maxim|maß/.test(m)) return f.groesse;
  if (/wo |where|find|seite|page|navig|menü|menu/.test(m)) return f.nav;
  if (/witz|joke|funny|humor|drôle|chiste|barzelletta/.test(m)) return f.witzig[Math.floor(Math.random() * f.witzig.length)];
  return f.default;
}

// ─── HTML INJECTION ──────────────────────────────────────────────────────────
(function injectClippy() {
  if (document.getElementById('clippy-container')) return;
  const isSubpage = window.location.pathname.includes('/leistungen/');
  const html = `
  <div id="clippy-container" class="clippy-container">
    <div id="clippy-chat" class="clippy-chat clippy-hidden">
      <div class="clippy-header">
        <span>📎 Clippy — PitA Assistent</span>
        <button id="clippy-close-btn" class="clippy-close" aria-label="Schließen">✕</button>
      </div>
      <div id="clippy-messages" class="clippy-messages">
        <div class="clippy-msg clippy-bot"><span id="clippy-greeting"></span></div>
      </div>
      <div id="clippy-drop-zone" class="clippy-drop-zone clippy-hidden">
        <span id="clippy-drop-text"></span>
        <br><small style="opacity:0.7;font-size:0.78rem;">STL · OBJ · SVG · DXF</small>
      </div>
      <div class="clippy-input-row">
        <label class="clippy-file-btn" title="Datei hochladen">
          📂
          <input type="file" id="clippy-file-input" accept=".stl,.3mf,.obj,.svg,.dxf" style="display:none">
        </label>
        <input type="text" id="clippy-input" autocomplete="off">
        <button id="clippy-send" aria-label="Senden">➤</button>
      </div>
    </div>

    <div id="clippy-bubble" class="clippy-bubble clippy-hidden">
      <span id="clippy-bubble-text"></span>
    </div>

    <button id="clippy-toggle" class="clippy-toggle" aria-label="Clippy">
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

  // Texte setzen + Quick-Start Buttons
  const greetEl = document.getElementById('clippy-greeting');
  if (greetEl) greetEl.innerHTML = t('greeting');
  // Quick-Start Buttons nach Begrüßung
  const qsButtons = T.quickStart[clippyLang()] ?? T.quickStart.de;
  const msgs0 = document.getElementById('clippy-messages');
  if (msgs0 && qsButtons) {
    const qr = document.createElement('div');
    qr.className = 'clippy-quick-replies';
    qr.id = 'clippy-quick-start';
    qsButtons.forEach(text => {
      const btn = document.createElement('button');
      btn.className = 'clippy-qr-btn';
      btn.textContent = text;
      btn.addEventListener('click', () => {
        qr.remove();
        const inp2 = document.getElementById('clippy-input');
        inp2.value = text;
        sendClippy();
      });
      qr.appendChild(btn);
    });
    msgs0.appendChild(qr);
  }
  const dropEl = document.getElementById('clippy-drop-text');
  if (dropEl) dropEl.textContent = t('dropzone');
  const inp = document.getElementById('clippy-input');
  if (inp) inp.placeholder = t('placeholder');

  // Events
  document.getElementById('clippy-toggle').addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); toggleClippy(); });
  document.getElementById('clippy-close-btn').addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); toggleClippy(); });
  document.getElementById('clippy-send').addEventListener('click', e => { e.preventDefault(); sendClippy(); });
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') sendClippy(); });
  document.getElementById('clippy-file-input').addEventListener('change', e => { if (e.target.files[0]) handleFile(e.target.files[0]); });

  // Drag & Drop
  const chat = document.getElementById('clippy-chat');
  const dropZone = document.getElementById('clippy-drop-zone');
  chat.addEventListener('dragover', e => {
    e.preventDefault();
    dropZone.classList.remove('clippy-hidden');
    chat.style.boxShadow = '0 0 0 3px rgba(198,125,74,0.5)';
  });
  chat.addEventListener('dragleave', e => {
    if (!chat.contains(e.relatedTarget)) {
      dropZone.classList.add('clippy-hidden');
      chat.style.boxShadow = '';
    }
  });
  chat.addEventListener('drop', e => {
    e.preventDefault();
    dropZone.classList.add('clippy-hidden');
    chat.style.boxShadow = '';
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  });

  // Sprachänderung live übernehmen (Event von i18n.js)
  document.addEventListener('pita-lang-changed', () => {
    const greetEl2 = document.getElementById('clippy-greeting');
    if (greetEl2) greetEl2.innerHTML = t('greeting');
    const dropEl2 = document.getElementById('clippy-drop-text');
    if (dropEl2) dropEl2.textContent = t('dropzone');
    const langInp2 = document.getElementById('clippy-input');
    if (langInp2) langInp2.placeholder = t('placeholder');
    // Quick-Start Buttons updaten
    const qs = document.getElementById('clippy-quick-start');
    if (qs) {
      const newBtns = T.quickStart[clippyLang()] ?? T.quickStart.de;
      const buttons = qs.querySelectorAll('.clippy-qr-btn');
      buttons.forEach((btn, i) => { if (newBtns[i]) btn.textContent = newBtns[i]; });
    }
  });
})();

// ─── TOGGLE ──────────────────────────────────────────────────────────────────
let greeted = false;
function toggleClippy() {
  const chat = document.getElementById('clippy-chat');
  const bubble = document.getElementById('clippy-bubble');
  if (!chat) return;
  if (chat.classList.contains('clippy-hidden')) {
    chat.classList.remove('clippy-hidden');
    if (bubble) bubble.classList.add('clippy-hidden');
    setTimeout(() => { const i = document.getElementById('clippy-input'); if (i) i.focus(); }, 100);
    if (!greeted) { greeted = true; showContextHint(); }
  } else {
    chat.classList.add('clippy-hidden');
    // Reset: Konversation zurücksetzen beim Schließen
    resetClippy();
  }
}

function resetClippy() {
  // Chat-History leeren
  chatHistory = [];
  lastSTLData = null;
  lastSTLFile = null;
  lastSTLBuffer = null;
  currentMaterial = 'PLA';
  currentInfill = 20;
  greeted = false;

  // Nachrichten-Container leeren und Begrüßung neu setzen
  const msgs = document.getElementById('clippy-messages');
  if (msgs) {
    msgs.innerHTML = '<div class="clippy-msg clippy-bot"><span id="clippy-greeting"></span></div>';
    const greetEl = document.getElementById('clippy-greeting');
    if (greetEl) greetEl.innerHTML = t('greeting');

    // Quick-Start Buttons neu einfügen
    const qsButtons = T.quickStart[clippyLang()] ?? T.quickStart.de;
    const qr = document.createElement('div');
    qr.className = 'clippy-quick-replies';
    qr.id = 'clippy-quick-start';
    qsButtons.forEach(text => {
      const btn = document.createElement('button');
      btn.className = 'clippy-qr-btn';
      btn.textContent = text;
      btn.addEventListener('click', () => {
        qr.remove();
        const inp = document.getElementById('clippy-input');
        inp.value = text;
        sendClippy();
      });
      qr.appendChild(btn);
    });
    msgs.appendChild(qr);
  }
}

function showContextHint() {
  const path = window.location.pathname;
  const lang = clippyLang();
  for (const [key, hints] of Object.entries(T.contextHints)) {
    if (path.includes(key)) {
      const hint = hints[lang] ?? hints.de;
      if (hint) setTimeout(() => appendBot(hint), 600);
      return;
    }
  }
}

// ─── IDLE ANIMATIONEN ────────────────────────────────────────────────────────
let lastTipIndex = -1;

function blink() {
  const lL = document.querySelector('.clippy-lid-l');
  const lR = document.querySelector('.clippy-lid-r');
  if (!lL) return;
  lL.setAttribute('ry', '10'); lR.setAttribute('ry', '10');
  setTimeout(() => { lL.setAttribute('ry', '0'); lR.setAttribute('ry', '0'); }, 150);
}

function doubleBlink() { blink(); setTimeout(blink, 300); }

function lookAround() {
  const pL = document.querySelector('.clippy-pupil-l'), pR = document.querySelector('.clippy-pupil-r');
  const gL = document.querySelector('.clippy-glint-l'), gR = document.querySelector('.clippy-glint-r');
  if (!pL) return;
  const dirs = [{px:-2,py:0,gx:-1,gy:-2},{px:2,py:0,gx:3,gy:-2},{px:0,py:-2,gx:1,gy:-4},{px:0,py:2,gx:1,gy:0},{px:0,py:0,gx:1,gy:-2}];
  const d = dirs[Math.floor(Math.random() * dirs.length)];
  pL.setAttribute('cx', 43 + d.px); pL.setAttribute('cy', 56 + d.py);
  pR.setAttribute('cx', 59 + d.px); pR.setAttribute('cy', 56 + d.py);
  gL.setAttribute('cx', 44 + d.gx); gL.setAttribute('cy', 54 + d.gy);
  gR.setAttribute('cx', 60 + d.gx); gR.setAttribute('cy', 54 + d.gy);
  setTimeout(() => {
    pL.setAttribute('cx', '43'); pL.setAttribute('cy', '56');
    pR.setAttribute('cx', '59'); pR.setAttribute('cy', '56');
    gL.setAttribute('cx', '44'); gL.setAttribute('cy', '54');
    gR.setAttribute('cx', '60'); gR.setAttribute('cy', '54');
  }, 1500 + Math.random() * 1000);
}

function wiggle() {
  const tog = document.getElementById('clippy-toggle');
  if (!tog) return;
  tog.classList.add('clippy-wiggle');
  setTimeout(() => tog.classList.remove('clippy-wiggle'), 600);
}

function raiseBrows() {
  const bL = document.querySelector('.clippy-brow-l'), bR = document.querySelector('.clippy-brow-r');
  if (!bL) return;
  bL.setAttribute('d', 'M34 40 Q42 34 50 40'); bR.setAttribute('d', 'M50 40 Q58 34 66 40');
  setTimeout(() => { bL.setAttribute('d', 'M34 44 Q42 38 50 44'); bR.setAttribute('d', 'M50 44 Q58 38 66 44'); }, 800);
}

function showTip() {
  const chat = document.getElementById('clippy-chat');
  if (!chat || !chat.classList.contains('clippy-hidden')) return;
  const bubble = document.getElementById('clippy-bubble');
  const text = document.getElementById('clippy-bubble-text');
  if (!bubble || !text) return;
  const tips = T.idleTips[clippyLang()] ?? T.idleTips.de;
  let idx;
  do { idx = Math.floor(Math.random() * tips.length); } while (idx === lastTipIndex && tips.length > 1);
  lastTipIndex = idx;
  text.innerHTML = tips[idx];
  bubble.classList.remove('clippy-hidden');
  wiggle();
  setTimeout(() => bubble.classList.add('clippy-hidden'), 6000);
}

function startIdle() {
  setInterval(() => { if (Math.random() < 0.4) blink(); }, 3000);
  setInterval(() => {
    const actions = [blink, blink, doubleBlink, lookAround, lookAround, wiggle, raiseBrows];
    actions[Math.floor(Math.random() * actions.length)]();
  }, 4000 + Math.random() * 4000);
  setInterval(() => { if (Math.random() < 0.5) showTip(); }, 20000 + Math.random() * 20000);
  setTimeout(showTip, 8000);
}

document.addEventListener('mousemove', e => {
  const svg = document.getElementById('clippy-svg');
  if (!svg) return;
  const rect = svg.getBoundingClientRect();
  const dx = Math.max(-2.5, Math.min(2.5, (e.clientX - (rect.left + rect.width / 2)) / window.innerWidth * 3));
  const dy = Math.max(-2, Math.min(2, (e.clientY - (rect.top + rect.height * 0.35)) / window.innerHeight * 2));
  const pL = document.querySelector('.clippy-pupil-l'), pR = document.querySelector('.clippy-pupil-r');
  if (pL && pR) { pL.setAttribute('cx', 43 + dx); pL.setAttribute('cy', 56 + dy); pR.setAttribute('cx', 59 + dx); pR.setAttribute('cy', 56 + dy); }
});

startIdle();

// ─── STL PARSER ──────────────────────────────────────────────────────────────
function signedVolTri(ax,ay,az,bx,by,bz,cx,cy,cz) {
  return (ax*(by*cz-bz*cy)+bx*(cy*az-cz*ay)+cx*(ay*bz-az*by))/6;
}

function parseSTLBinary(buf) {
  const v = new DataView(buf);
  const n = v.getUint32(80, true);
  let vol=0, minX=Infinity, minY=Infinity, minZ=Infinity, maxX=-Infinity, maxY=-Infinity, maxZ=-Infinity;
  for (let i=0; i<n; i++) {
    const o = 84 + i*50;
    const [v1x,v1y,v1z,v2x,v2y,v2z,v3x,v3y,v3z] = [o+12,o+16,o+20,o+24,o+28,o+32,o+36,o+40,o+44].map(p => v.getFloat32(p, true));
    vol += signedVolTri(v1x,v1y,v1z,v2x,v2y,v2z,v3x,v3y,v3z);
    minX=Math.min(minX,v1x,v2x,v3x); maxX=Math.max(maxX,v1x,v2x,v3x);
    minY=Math.min(minY,v1y,v2y,v3y); maxY=Math.max(maxY,v1y,v2y,v3y);
    minZ=Math.min(minZ,v1z,v2z,v3z); maxZ=Math.max(maxZ,v1z,v2z,v3z);
  }
  return { volumeCm3: Math.abs(vol)/1000, bbox: {x:Math.round(maxX-minX), y:Math.round(maxY-minY), z:Math.round(maxZ-minZ)}, triangles:n };
}

function analyzeSTL(buf) {
  const h = String.fromCharCode(...new Uint8Array(buf, 0, 80));
  if (h.startsWith('solid') && new TextDecoder().decode(buf).includes('facet normal')) {
    const txt = new TextDecoder().decode(buf);
    const verts = [...txt.matchAll(/vertex\s+([\d.e+-]+)\s+([\d.e+-]+)\s+([\d.e+-]+)/g)];
    let vol=0, minX=Infinity, minY=Infinity, minZ=Infinity, maxX=-Infinity, maxY=-Infinity, maxZ=-Infinity;
    for (let i=0; i<verts.length-2; i+=3) {
      const [ax,ay,az]=[+verts[i][1],+verts[i][2],+verts[i][3]];
      const [bx,by,bz]=[+verts[i+1][1],+verts[i+1][2],+verts[i+1][3]];
      const [cx,cy,cz]=[+verts[i+2][1],+verts[i+2][2],+verts[i+2][3]];
      vol+=signedVolTri(ax,ay,az,bx,by,bz,cx,cy,cz);
      minX=Math.min(minX,ax,bx,cx); maxX=Math.max(maxX,ax,bx,cx);
      minY=Math.min(minY,ay,by,cy); maxY=Math.max(maxY,ay,by,cy);
      minZ=Math.min(minZ,az,bz,cz); maxZ=Math.max(maxZ,az,bz,cz);
    }
    return { volumeCm3:Math.abs(vol)/1000, bbox:{x:Math.round(maxX-minX),y:Math.round(maxY-minY),z:Math.round(maxZ-minZ)}, triangles:Math.floor(verts.length/3) };
  }
  return parseSTLBinary(buf);
}

// ─── PREISSCHÄTZUNG ──────────────────────────────────────────────────────────
const MATS = {
  PLA:  {density:1.24, ppg:0.04, label:'PLA'},
  PETG: {density:1.27, ppg:0.05, label:'PETG'},
  ABS:  {density:1.05, ppg:0.05, label:'ABS'},
  TPU:  {density:1.21, ppg:0.08, label:'TPU'},
  PA:   {density:1.14, ppg:0.12, label:'Nylon (PA)'},
  CF:   {density:1.30, ppg:0.18, label:'Carbon-Filament'},
};

function estimatePrice(stl, matKey='PLA', infill=20) {
  const m = MATS[matKey] || MATS.PLA;
  const wG = stl.volumeCm3 * m.density * (0.25 + (infill/100)*0.75);
  const matCost = wG * m.ppg;
  const machineCost = (stl.volumeCm3 / 2 / 60) * 4;
  const total = Math.max(5, matCost + machineCost + 3.5);
  return { weightG: wG.toFixed(1), priceMin: (total*0.85).toFixed(2), priceMax: (total*1.25).toFixed(2), material: m.label };
}

function checkFitsInPrinter(bbox) {
  return [
    {name:'Bambu H2D (7×)', x:325, y:320, z:325},
    {name:'Bambu P1S (9×)', x:256, y:256, z:256},
  ].filter(p => bbox.x<=p.x && bbox.y<=p.y && bbox.z<=p.z);
}

function detectMaterial(msg) {
  const m = msg.toLowerCase();
  for (const [key] of Object.entries(MATS)) {
    if (m.includes(key.toLowerCase())) return key;
  }
  if (m.includes('nylon')) return 'PA';
  if (m.includes('carbon')) return 'CF';
  return null;
}

// ─── SVG ANALYSE ─────────────────────────────────────────────────────────────
function analyzeSVG(txt) {
  const doc = new DOMParser().parseFromString(txt, 'image/svg+xml');
  const svg = doc.querySelector('svg');
  let w=0, h=0;
  if (svg) {
    const vb = svg.getAttribute('viewBox');
    if (vb) { const p=vb.split(/[\s,]+/); w=parseFloat(p[2]); h=parseFloat(p[3]); }
    else { w=parseFloat(svg.getAttribute('width')||0); h=parseFloat(svg.getAttribute('height')||0); }
  }
  return { width:Math.round(w), height:Math.round(h), elements:doc.querySelectorAll('path,line,polyline,polygon,rect,circle,ellipse').length };
}

function estimateLaserPrice(svg) {
  const area = (svg.width/10)*(svg.height/10);
  const total = Math.max(8, area*0.08 + 5);
  return { priceMin:(total*0.85).toFixed(2), priceMax:(total*1.30).toFixed(2) };
}

// ─── THREE.JS LAZY LOADER ────────────────────────────────────────────────────
async function ensureThreeJS() {
  if (window.THREE) return;
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

// ─── 3D MINI PREVIEW ─────────────────────────────────────────────────────────
let miniPreviewCounter = 0;

async function createMiniPreview(stlBuffer, containerId) {
  try {
    await ensureThreeJS();
  } catch(e) {
    // Three.js load failed — preview silently skipped
    return;
  }
  const container = document.getElementById(containerId);
  if (!container || !window.THREE) return;

  const THREE = window.THREE;
  const W = 200, H = 150;

  // Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a1628);

  const camera = new THREE.PerspectiveCamera(45, W / H, 0.01, 100000);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const dl = new THREE.DirectionalLight(0xffffff, 0.85);
  dl.position.set(1, 2, 1.5);
  scene.add(dl);
  const dl2 = new THREE.DirectionalLight(0x8ab0ff, 0.3);
  dl2.position.set(-1, -0.5, -1);
  scene.add(dl2);

  // Parse STL binary to BufferGeometry
  const geometry = parseSTLToGeometry(stlBuffer);
  if (!geometry) return;

  geometry.computeBoundingBox();
  geometry.computeVertexNormals();

  const bb = geometry.boundingBox;
  const center = new THREE.Vector3();
  bb.getCenter(center);
  geometry.translate(-center.x, -center.y, -center.z);

  const size = new THREE.Vector3();
  bb.getSize(size);
  const maxDim = Math.max(size.x, size.y, size.z);

  const material = new THREE.MeshPhongMaterial({
    color: 0xE8772E,
    specular: 0x333333,
    shininess: 25,
    side: THREE.DoubleSide,
  });

  const meshObj = new THREE.Mesh(geometry, material);
  scene.add(meshObj);

  // Grid
  const gridSize = maxDim * 1.4;
  const grid = new THREE.GridHelper(gridSize, 8, 0x1a3055, 0x142540);
  grid.position.y = -size.y / 2;
  scene.add(grid);

  // Fit camera
  const dist = maxDim * 2.0;
  camera.position.set(dist * 0.7, dist * 0.55, dist * 0.7);
  camera.lookAt(0, 0, 0);
  camera.near = dist * 0.001;
  camera.far = dist * 50;
  camera.updateProjectionMatrix();

  // Auto-rotation
  let rotY = 0;
  let animId;
  function animate() {
    animId = requestAnimationFrame(animate);
    rotY += 0.012;
    meshObj.rotation.y = rotY;
    renderer.render(scene, camera);
  }
  animate();

  // Cleanup when container removed
  const obs = new MutationObserver(() => {
    if (!document.contains(container)) {
      cancelAnimationFrame(animId);
      renderer.dispose();
      obs.disconnect();
    }
  });
  obs.observe(document.body, { childList: true, subtree: true });
}

// Parse binary/ascii STL → BufferGeometry (no STLLoader needed)
function parseSTLToGeometry(buf) {
  if (!window.THREE) return null;
  const THREE = window.THREE;
  try {
    const view = new DataView(buf);
    const nTriangles = view.getUint32(80, true);
    const positions = new Float32Array(nTriangles * 9);
    const normals = new Float32Array(nTriangles * 9);
    for (let i = 0; i < nTriangles; i++) {
      const base = 84 + i * 50;
      const nx = view.getFloat32(base, true);
      const ny = view.getFloat32(base + 4, true);
      const nz = view.getFloat32(base + 8, true);
      for (let v = 0; v < 3; v++) {
        const vbase = base + 12 + v * 12;
        const pi = i * 9 + v * 3;
        positions[pi]     = view.getFloat32(vbase, true);
        positions[pi + 1] = view.getFloat32(vbase + 4, true);
        positions[pi + 2] = view.getFloat32(vbase + 8, true);
        normals[pi] = nx; normals[pi + 1] = ny; normals[pi + 2] = nz;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    return geo;
  } catch(e) {
    return null;
  }
}

// ─── MATERIAL/INFILL STATE ───────────────────────────────────────────────────
let lastSTLData = null;
let lastSTLFile = null;
let lastSTLBuffer = null;
let currentMaterial = 'PLA';
let currentInfill = 20;

// ─── MATERIAL BUTTONS ANZEIGEN ───────────────────────────────────────────────
const MATERIAL_BTNS = [
  { key: 'PLA',  label: 'PLA €8-12',   cls: 'clippy-material-btn' },
  { key: 'PETG', label: 'PETG €10-15', cls: 'clippy-material-btn' },
  { key: 'ABS',  label: 'ABS €10-15',  cls: 'clippy-material-btn' },
  { key: 'TPU',  label: 'TPU €15-22',  cls: 'clippy-material-btn' },
  { key: 'CF',   label: 'Resin €18-28',cls: 'clippy-material-btn' },
];

function showMaterialButtons() {
  const msgs = document.getElementById('clippy-messages');
  if (!msgs) return;

  const qr = document.createElement('div');
  qr.className = 'clippy-quick-replies';
  qr.id = 'clippy-mat-btns';

  MATERIAL_BTNS.forEach(m => {
    const btn = document.createElement('button');
    btn.className = m.cls;
    btn.textContent = m.label;
    btn.dataset.matKey = m.key;
    btn.addEventListener('click', () => {
      currentMaterial = m.key;
      // Mark active
      qr.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Remove after short delay & show infill
      setTimeout(() => {
        qr.remove();
        appendUser('🧪 ' + m.label);
        showInfillButtons();
      }, 300);
    });
    qr.appendChild(btn);
  });

  msgs.appendChild(qr);
  msgs.scrollTop = msgs.scrollHeight;
}

// ─── INFILL BUTTONS ──────────────────────────────────────────────────────────
const INFILL_BTNS = [
  { pct: 20,  label: '20% Leicht',   cls: 'clippy-infill-btn' },
  { pct: 50,  label: '50% Standard', cls: 'clippy-infill-btn' },
  { pct: 100, label: '100% Massiv',  cls: 'clippy-infill-btn' },
];

function showInfillButtons() {
  const msgs = document.getElementById('clippy-messages');
  if (!msgs) return;

  // Small hint message
  const el = document.createElement('div');
  el.className = 'clippy-msg clippy-bot';
  const matInfo = MATS[currentMaterial];
  el.innerHTML = `<span>🧪 <strong>${matInfo ? matInfo.label : currentMaterial}</strong> gewählt!<br>Wie soll das Teil gedruckt werden?</span>`;
  msgs.appendChild(el);

  const qr = document.createElement('div');
  qr.className = 'clippy-quick-replies';
  qr.id = 'clippy-infill-btns';

  INFILL_BTNS.forEach(inf => {
    const btn = document.createElement('button');
    btn.className = inf.cls;
    btn.textContent = inf.label;
    btn.addEventListener('click', () => {
      currentInfill = inf.pct;
      qr.remove();
      appendUser('📊 ' + inf.label);
      showSTLSummary();
    });
    qr.appendChild(btn);
  });

  msgs.appendChild(qr);
  msgs.scrollTop = msgs.scrollHeight;
}

// ─── ZUSAMMENFASSUNGS-NACHRICHT ──────────────────────────────────────────────
function showSTLSummary() {
  if (!lastSTLData || !lastSTLFile) return;

  const data = lastSTLData;
  const price = estimatePrice(data, currentMaterial, currentInfill);
  const fits = checkFitsInPrinter(data.bbox);
  const printer = fits.length > 0 ? fits[0].name : 'Auf Anfrage';

  // Druckzeit schätzen: ~2cm³/min bei 20% infill, skaliert mit infill
  const infillFactor = 0.3 + (currentInfill / 100) * 0.7;
  const printTimeH = (data.volumeCm3 * infillFactor / 2 / 60).toFixed(1);
  const timeLabel = +printTimeH < 1
    ? `~${Math.round(+printTimeH * 60)} min`
    : `~${printTimeH}h`;

  const matInfo = MATS[currentMaterial];
  const infillLabel = INFILL_BTNS.find(i => i.pct === currentInfill)?.label || `${currentInfill}%`;

  // Material-Beschreibungen
  const matDesc = {
    PLA:  'Standard, leicht, viele Farben',
    PETG: 'robust, outdoor-tauglich',
    ABS:  'hitzebeständig, technisch',
    TPU:  'flexibel, gummiartig',
    PA:   'Hochlast, Zahnräder',
    CF:   'maximal steif, leicht',
  };

  const msgs = document.getElementById('clippy-messages');
  if (!msgs) return;

  // Summary card
  const card = document.createElement('div');
  card.className = 'clippy-msg clippy-bot';
  card.innerHTML = `<div class="clippy-summary">
    📦 <strong>${lastSTLFile.name}</strong><br>
    📐 ${data.bbox.x}×${data.bbox.y}×${data.bbox.z} mm · ${data.volumeCm3.toFixed(1)} cm³<br>
    🧪 ${matInfo ? matInfo.label : currentMaterial} (${matDesc[currentMaterial] || ''})<br>
    📊 ${infillLabel}<br>
    ⚖️ ~${price.weightG}g<br>
    🖨️ ${printer}<br>
    ⏱️ ${timeLabel} Druckzeit<br>
    💶 <strong>~€${price.priceMin} – €${price.priceMax}</strong> <small style="opacity:0.6">(+ €4.90 Versand DE)</small>
  </div>`;
  msgs.appendChild(card);

  // Action Buttons
  const prefix = window.location.pathname.includes('/leistungen/') ? '../' : '';
  const actions = document.createElement('div');
  actions.className = 'clippy-action-btns';

  const btnOrder = document.createElement('button');
  btnOrder.className = 'clippy-action-btn-primary';
  btnOrder.textContent = '📬 Anfrage senden';
  btnOrder.addEventListener('click', () => {
    window.location.href = `${prefix}index.html#kontakt`;
  });

  const btnMat = document.createElement('button');
  btnMat.className = 'clippy-action-btn-secondary';
  btnMat.textContent = '🔄 Anderes Material';
  btnMat.addEventListener('click', () => {
    actions.remove();
    showMaterialButtons();
  });

  const btnNew = document.createElement('button');
  btnNew.className = 'clippy-action-btn-secondary';
  btnNew.textContent = '📂 Neue Datei';
  btnNew.addEventListener('click', () => {
    actions.remove();
    lastSTLData = null;
    lastSTLFile = null;
    lastSTLBuffer = null;
    currentMaterial = 'PLA';
    currentInfill = 20;
    const fi = document.getElementById('clippy-file-input');
    if (fi) { fi.value = ''; fi.click(); }
  });

  actions.appendChild(btnOrder);
  actions.appendChild(btnMat);
  actions.appendChild(btnNew);
  msgs.appendChild(actions);
  msgs.scrollTop = msgs.scrollHeight;
  wiggle();
}

// ─── DATEI HANDLER ───────────────────────────────────────────────────────────
function handleFile(file) {
  const name = file.name.toLowerCase();
  appendUser('📂 ' + file.name);
  const typing = appendTyping();
  raiseBrows();

  if (name.endsWith('.stl') || name.endsWith('.obj')) {
    const reader = new FileReader();
    reader.onload = async e => {
      try {
        const buf = e.target.result;
        const data = analyzeSTL(buf);
        lastSTLData = data;
        lastSTLFile = file;
        lastSTLBuffer = buf;
        currentMaterial = 'PLA';
        currentInfill = 20;
        typing.remove();

        const fits = checkFitsInPrinter(data.bbox);
        const price = estimatePrice(data, 'PLA', 20);

        // Build preview message
        const previewId = `mini-3d-${++miniPreviewCounter}`;
        const msgEl = document.createElement('div');
        msgEl.className = 'clippy-msg clippy-bot';

        const previewHtml = `
          <div class="clippy-stl-preview">
            <div id="${previewId}" class="clippy-mini-3d"></div>
            <div class="clippy-stl-info">
              📦 <strong>${file.name}</strong><br>
              📐 ${data.bbox.x}×${data.bbox.y}×${data.bbox.z} mm · ${data.volumeCm3.toFixed(1)} cm³<br>
              ⚖️ ~${price.weightG}g (PLA, 20% Infill)<br>
              ${fits.length > 0
                ? `✅ Passt in: ${fits.map(p=>p.name).join(', ')}`
                : `⚠️ Zu groß für Standard-Drucker`
              }<br>
              💶 <strong>~€${price.priceMin} – €${price.priceMax}</strong>
            </div>
          </div>`;
        msgEl.innerHTML = previewHtml;

        const msgs = document.getElementById('clippy-messages');
        msgs.appendChild(msgEl);
        msgs.scrollTop = msgs.scrollHeight;

        // Initiate 3D preview (async, non-blocking)
        if (name.endsWith('.stl')) {
          createMiniPreview(buf, previewId).catch(() => {
            // Silently fall back — no 3D preview
            const container = document.getElementById(previewId);
            if (container) {
              container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:rgba(255,255,255,0.3);font-size:0.75rem;">3D</div>';
            }
          });
        }

        // Ask for material
        const matAskEl = document.createElement('div');
        matAskEl.className = 'clippy-msg clippy-bot';
        matAskEl.innerHTML = '<span>🎨 Welches Material soll es sein?</span>';
        msgs.appendChild(matAskEl);
        msgs.scrollTop = msgs.scrollHeight;

        showMaterialButtons();
        wiggle();
      } catch(err) {
        typing.remove();
        appendBot(t('errStl'));
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
        const prefix = window.location.pathname.includes('/leistungen/') ? '../' : '';
        let msg = `✂️ <strong>${file.name}</strong><br>`;
        if (data.width && data.height) {
          msg += `📐 ${data.width}×${data.height} mm · ${data.elements} Elemente<br>`;
          msg += data.width>400||data.height>400
            ? `⚠️ Größer als Laser-Bett (400×400mm) — mehrteilig möglich!<br><br>`
            : `✅ Passt ins Laser-Bett (400×400mm)<br><br>`;
        }
        msg += `💶 <strong>~€${price.priceMin} – €${price.priceMax}</strong> (Lasercutting)<br>`;
        msg += `<small>Material und Dicke beeinflussen den Preis.</small><br>`;
        msg += `<a href="${prefix}index.html#kontakt" style="color:var(--accent)">Angebot anfragen →</a>`;
        appendBot(msg);
        wiggle();
      } catch(err) {
        typing.remove();
        appendBot(t('errSvg'));
      }
    };
    reader.readAsText(file);

  } else {
    typing.remove();
    appendBot(`📎 Format <strong>.${name.split('.').pop()}</strong> nicht unterstützt. Bitte STL, OBJ, SVG oder DXF senden!`);
  }
}

// ─── CHAT HELPERS ────────────────────────────────────────────────────────────
function appendUser(msg) {
  const el = document.createElement('div');
  el.className = 'clippy-msg clippy-user';
  el.innerHTML = `<span>${msg.replace(/</g,'&lt;')}</span>`;
  const msgs = document.getElementById('clippy-messages');
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
}

function appendBot(msg, quickReplies) {
  const el = document.createElement('div');
  el.className = 'clippy-msg clippy-bot';
  el.innerHTML = `<span>${msg.replace(/\n/g,'<br>')}</span>`;
  const msgs = document.getElementById('clippy-messages');
  msgs.appendChild(el);
  // Quick-Reply Buttons
  if (quickReplies && quickReplies.length > 0) {
    const qr = document.createElement('div');
    qr.className = 'clippy-quick-replies';
    quickReplies.forEach(text => {
      const btn = document.createElement('button');
      btn.className = 'clippy-qr-btn';
      btn.textContent = text;
      btn.addEventListener('click', () => {
        qr.remove(); // Remove buttons after click
        const inp = document.getElementById('clippy-input');
        inp.value = text;
        sendClippy();
      });
      qr.appendChild(btn);
    });
    msgs.appendChild(qr);
  }
  msgs.scrollTop = msgs.scrollHeight;
  return el;
}

function appendTyping() {
  const tText = T.typing[clippyLang()] ?? 'tippt';
  const el = document.createElement('div');
  el.className = 'clippy-msg clippy-bot clippy-typing';
  el.innerHTML = `<span>📎 ${tText}...</span>`;
  const msgs = document.getElementById('clippy-messages');
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
  return el;
}

// ─── CHAT LOGIK ──────────────────────────────────────────────────────────────
let chatHistory = [];

async function sendClippy() {
  const inp = document.getElementById('clippy-input');
  const msg = inp.value.trim();
  if (!msg) return;

  appendUser(msg);
  inp.value = '';

  // Material-Wechsel nach STL-Upload?
  if (lastSTLData) {
    const matKey = detectMaterial(msg);
    if (matKey) {
      currentMaterial = matKey;
      const price = estimatePrice(lastSTLData, matKey, currentInfill);
      appendBot(`💶 <strong>${price.material}</strong> (${currentInfill}% Infill):<br>~${price.weightG}g · <strong>€${price.priceMin} – €${price.priceMax}</strong>`);
      wiggle();
      return;
    }
  }

  const typing = appendTyping();
  const mouth = document.querySelector('.clippy-mouth');
  if (mouth) mouth.setAttribute('d', 'M42 70 Q50 74 58 70');

  chatHistory.push({role:'user', content:msg});

  let reply;
  try {
    const res = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        model: 'mistral:7b',
        messages: [{role:'system', content:buildSystemPrompt()}, ...chatHistory.slice(-6)],
        stream: false,
        options: {temperature:0.7, num_predict:300},
      }),
      signal: AbortSignal.timeout(15000),
    });
    const data = await res.json();
    reply = data.message?.content || getFallback(msg);
    chatHistory.push({role:'assistant', content:reply});
  } catch(e) {
    reply = getFallback(msg);
  }

  if (mouth) mouth.setAttribute('d', 'M42 70 Q50 78 58 70');
  typing.remove();

  // Kontextbasierte Follow-up Buttons generieren
  const followUps = getFollowUps(msg, reply);
  appendBot(reply, followUps);
  wiggle();
}

// Intelligente Follow-up Buttons basierend auf Konversationskontext
function getFollowUps(userMsg, botReply) {
  const lang = clippyLang();
  const m = (userMsg + ' ' + botReply).toLowerCase();

  // Nach Preisnennung → Bestell-Optionen
  if (/\d+[\s,.]?\d*\s*€|eur\s*\d|preis|price|prix|precio|prezzo|schätz|estim|kost/.test(m) && /\d/.test(botReply)) {
    return {
      de: ['🛒 In den Warenkorb', '📂 STL hochladen für genaueren Preis', '🔄 Anderes Material?', '📬 Jetzt bestellen'],
      en: ['🛒 Add to cart', '📂 Upload STL for precise price', '🔄 Different material?', '📬 Order now'],
      fr: ['🛒 Ajouter au panier', '📂 Télécharger STL', '🔄 Autre matériau ?', '📬 Commander'],
      es: ['🛒 Añadir al carrito', '📂 Subir STL', '🔄 ¿Otro material?', '📬 Pedir ahora'],
      it: ['🛒 Aggiungi al carrello', '📂 Carica STL', '🔄 Altro materiale?', '📬 Ordina ora'],
    }[lang] || null;
  }

  // Materialfrage → Größe als nächstes
  if (/material|pla|petg|abs|tpu|nylon|resin|carbon|filament/.test(m)) {
    return {
      de: ['📐 Größe angeben', '📂 Datei hochladen', '🤔 Was empfiehlst du?'],
      en: ['📐 Specify size', '📂 Upload file', '🤔 What do you recommend?'],
      fr: ['📐 Indiquer la taille', '📂 Télécharger', '🤔 Que recommandez-vous ?'],
      es: ['📐 Indicar tamaño', '📂 Subir archivo', '🤔 ¿Qué recomiendas?'],
      it: ['📐 Indicare dimensione', '📂 Carica file', '🤔 Cosa consigli?'],
    }[lang] || null;
  }

  // 3D-Druck Beratung
  if (/3d.druck|printing|impression|impresión|stampa|prototyp|gehäuse|housing|fdm/.test(m)) {
    return {
      de: ['🧪 Materialberatung', '📐 Größe & Preis schätzen', '📂 STL hochladen'],
      en: ['🧪 Material advice', '📐 Size & price', '📂 Upload STL'],
      fr: ['🧪 Conseil matériau', '📐 Taille & prix', '📂 Télécharger STL'],
      es: ['🧪 Material', '📐 Tamaño y precio', '📂 Subir STL'],
      it: ['🧪 Materiale', '📐 Dimensione e prezzo', '📂 Carica STL'],
    }[lang] || null;
  }

  // Laser Beratung
  if (/laser|cut|schneid|découpe|corte|taglio|gravur|engrav|grav|incis/.test(m)) {
    return {
      de: ['🪵 Holz', '💎 Acryl', '🫧 Glas', '📐 Größe angeben', '📂 SVG hochladen'],
      en: ['🪵 Wood', '💎 Acrylic', '🫧 Glass', '📐 Specify size', '📂 Upload SVG'],
      fr: ['🪵 Bois', '💎 Acrylique', '🫧 Verre', '📐 Taille', '📂 SVG'],
      es: ['🪵 Madera', '💎 Acrílico', '🫧 Vidrio', '📐 Tamaño', '📂 SVG'],
      it: ['🪵 Legno', '💎 Acrilico', '🫧 Vetro', '📐 Dimensione', '📂 SVG'],
    }[lang] || null;
  }

  // Resin Beratung
  if (/resin|harz|résine|resina|miniatur|figur|detail|schmuck|jewel|dental/.test(m)) {
    return {
      de: ['🎭 Miniatur/Figur', '💪 Belastbar (Tough)', '🔮 Schmuck/Gussform', '📐 Größe angeben'],
      en: ['🎭 Miniature/Figure', '💪 Durable (Tough)', '🔮 Jewellery/Mould', '📐 Specify size'],
      fr: ['🎭 Figurine', '💪 Résistant (Tough)', '🔮 Bijou/Moule', '📐 Taille'],
      es: ['🎭 Miniatura', '💪 Resistente (Tough)', '🔮 Joyería/Molde', '📐 Tamaño'],
      it: ['🎭 Miniatura', '💪 Resistente (Tough)', '🔮 Gioielli/Stampo', '📐 Dimensione'],
    }[lang] || null;
  }

  // Prototyping → Fertigungsart wählen
  if (/prototyp|proto|idee|idea|projet|proyecto|progetto|unsicher|nicht sicher|don.t know|pas sûr/.test(m)) {
    return {
      de: ['🖨️ 3D-Druck (schnell+günstig)', '💧 Resin (max. Detail)', '✂️ Laser (flache Teile)', '🤔 Bin noch unsicher'],
      en: ['🖨️ 3D Print (fast+cheap)', '💧 Resin (max detail)', '✂️ Laser (flat parts)', '🤔 Still unsure'],
      fr: ['🖨️ Impression 3D (rapide)', '💧 Résine (détails max)', '✂️ Laser (pièces plates)', '🤔 Pas encore sûr'],
      es: ['🖨️ Impresión 3D (rápida)', '💧 Resina (máx detalle)', '✂️ Láser (piezas planas)', '🤔 No estoy seguro'],
      it: ['🖨️ Stampa 3D (veloce)', '💧 Resina (max dettaglio)', '✂️ Laser (pezzi piatti)', '🤔 Non sono sicuro'],
    }[lang] || null;
  }

  return null;
}
