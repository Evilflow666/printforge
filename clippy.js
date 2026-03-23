/**
 * Clippy — PitA KI-Projektberater v4.0
 * Projekt-First Flow: Gespräch führen, nicht Checkliste abarbeiten
 * Mehrsprachig: DE / EN / FR / ES / IT
 * Features: STL/SVG Analyse, Preisschätzung, Three.js Preview, Idle-Animationen
 */

/* ═══════════════════════════════════════════════════════════════════════════
   §1  SPRACHE & i18n
   ═══════════════════════════════════════════════════════════════════════════ */

function clippyLang() {
  return localStorage.getItem('pita-lang') || 'de';
}

const T = {
  greeting: {
    de: "Hey! 👋 Ich bin Clippy, dein Berater bei PitA. Was hast du vor? Erzähl mir von deinem Projekt!",
    en: "Hey! 👋 I'm Clippy, your advisor at PitA. What are you working on? Tell me about your project!",
    fr: "Salut ! 👋 Je suis Clippy, votre conseiller chez PitA. Quel est votre projet ? Racontez-moi !",
    es: "¡Hola! 👋 Soy Clippy, tu asesor en PitA. ¿Qué tienes en mente? ¡Cuéntame sobre tu proyecto!",
    it: "Ciao! 👋 Sono Clippy, il tuo consulente di PitA. Cosa hai in mente? Raccontami del tuo progetto!",
  },
  quickStart: {
    de: ['💡 Ich habe eine Idee', '🔧 Ersatzteil gesucht', '🎁 Geschenk oder Deko', '🏢 Für mein Business', '🔍 Was bietet ihr an?', '📦 Im Katalog stöbern'],
    en: ['💡 I have an idea', '🔧 Need a spare part', '🎁 Gift or decoration', '🏢 For my business', '🔍 What do you offer?', '📦 Browse catalogue'],
    fr: ["💡 J'ai une idée", '🔧 Pièce de rechange', '🎁 Cadeau ou déco', '🏢 Pour mon entreprise', '🔍 Que proposez-vous ?', '📦 Parcourir le catalogue'],
    es: ['💡 Tengo una idea', '🔧 Busco un repuesto', '🎁 Regalo o decoración', '🏢 Para mi negocio', '🔍 ¿Qué ofrecéis?', '📦 Ver catálogo'],
    it: ["💡 Ho un'idea", '🔧 Cerco un ricambio', '🎁 Regalo o decorazione', '🏢 Per la mia azienda', '🔍 Cosa offrite?', '📦 Sfoglia catalogo'],
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
      de: 'Du interessierst dich für 3D-Druck! 🖨️ Was schwebt dir vor?',
      en: "You're interested in 3D printing! 🖨️ What do you have in mind?",
      fr: "L'impression 3D vous intéresse ! 🖨️ Qu'avez-vous en tête ?",
      es: '¡Te interesa la impresión 3D! 🖨️ ¿Qué tienes en mente?',
      it: 'Ti interessa la stampa 3D! 🖨️ Cosa hai in mente?',
    },
    'lasercutting': {
      de: 'Lasercutting! ✂️ Was soll geschnitten werden?',
      en: 'Laser cutting! ✂️ What needs to be cut?',
      fr: 'Découpe laser ! ✂️ Que faut-il découper ?',
      es: '¡Corte láser! ✂️ ¿Qué necesitas cortar?',
      it: 'Taglio laser! ✂️ Cosa bisogna tagliare?',
    },
    'lasergravur': {
      de: 'Lasergravur! 🔥 Was möchtest du gravieren und auf welchem Material?',
      en: 'Laser engraving! 🔥 What would you like to engrave and on what material?',
      fr: 'Gravure laser ! 🔥 Que souhaitez-vous graver et sur quel matériau ?',
      es: '¡Grabado láser! 🔥 ¿Qué quieres grabar y en qué material?',
      it: 'Incisione laser! 🔥 Cosa vorresti incidere e su quale materiale?',
    },
    'materialien': {
      de: 'Materialien! 🧪 Suchst du was Bestimmtes oder soll ich helfen?',
      en: 'Materials! 🧪 Looking for something specific or should I help?',
      fr: 'Matériaux ! 🧪 Vous cherchez quelque chose de précis ou je vous aide ?',
      es: '¡Materiales! 🧪 ¿Buscas algo específico o te ayudo?',
      it: 'Materiali! 🧪 Cerchi qualcosa di specifico o ti aiuto?',
    },
    'faq': {
      de: 'FAQ! 😄 Wenn du keine Antwort findest, frag mich direkt.',
      en: "FAQ! 😄 If you can't find an answer here, just ask me directly.",
      fr: "FAQ ! 😄 Si vous ne trouvez pas de réponse ici, demandez-moi directement.",
      es: '¡FAQ! 😄 Si no encuentras respuesta aquí, pregúntame directamente.',
      it: 'FAQ! 😄 Se non trovi risposta qui, chiedimi direttamente.',
    },
  },
  idleTips: {
    de: [
      'Wusstest du? Wir drucken mit PV-Energie! ☀️',
      'Tipp: Erzähl mir von deinem Projekt, ich finde die beste Lösung!',
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
      "Tip: Tell me about your project and I'll find the best solution!",
      'Carbon is 5× stiffer than PLA 💪',
      '📦 <a href="katalog.html" style="color:#E8A000">Our catalogue</a> — ready-made products to order!',
      "Rush order? Talk to us, we'll find a fast solution! ⚡",
      '🧪 Over 20 <a href="materialien.html" style="color:#E8A000">materials</a> to choose from!',
      "I've been around since 1997. Aged well, right? 😏",
      '🖨️ <a href="leistungen/3d-druck.html" style="color:#E8A000">3D printing</a> from 5 € — check it out!',
      'PETG + dishwasher = true love ❤️',
      '✂️ <a href="leistungen/lasercutting.html" style="color:#E8A000">Laser cutting</a> — wood, acrylic, leather!',
      '🎨 Gift idea? <a href="katalog/deko.html" style="color:#E8A000">Deco & gifts</a> in our catalogue!',
      '💼 <a href="katalog/business.html" style="color:#E8A000">Business solutions</a> for companies & brands',
    ],
    fr: [
      "Nous imprimons avec de l'énergie solaire ! ☀️",
      'Conseil : parlez-moi de votre projet, je trouverai la meilleure solution !',
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
      '¡Consejo: cuéntame tu proyecto y encontraré la mejor solución!',
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
      'Consiglio: raccontami il tuo progetto e troverò la soluzione migliore!',
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
  fallback: {
    de: {
      material: "Über 20 Materialien! → <a href='materialien.html' style='color:var(--accent)'>Materialien</a> 📎",
      kosten:   "Preise ab ~5 EUR (PLA). Erzähl mir von deinem Projekt! 📎",
      dauer:    "Prototypen: 24–72h · Kleinserien: 3–7 Tage · Laser: 1–3 Tage ⚡",
      format:   "3D: STL/3MF/OBJ/STEP · Laser: SVG/DXF/AI/PDF (falls vorhanden)",
      groesse:  "Printfarm: 7× H2D (325×320×325mm) · 9× P1S (256×256×256mm) · 3× Falcon Laser (400×400mm) · CO2 Laser",
      nav:      "<a href='index.html#leistungen' style='color:var(--accent)'>Leistungen</a> | <a href='materialien.html' style='color:var(--accent)'>Materialien</a> | <a href='faq.html' style='color:var(--accent)'>FAQ</a> | <a href='index.html#kontakt' style='color:var(--accent)'>Kontakt</a>",
      witzig:   ["Ich bin eine Büroklammer-KI. Seit 1997. 📎", "Gute Frage! Wahrscheinlich die beste heute. 😄", "Falls das schiefgeht — nochmal fragen. Ich vergesse eh alles. 😅"],
      default:  "Hmm, da bin ich mir nicht sicher. Erzähl mir mehr über dein Projekt, dann finde ich die richtige Lösung! 📎",
    },
    en: {
      material: "Over 20 materials! → <a href='materialien.html' style='color:var(--accent)'>Materials</a> 📎",
      kosten:   "Prices from ~5 EUR (PLA). Tell me about your project! 📎",
      dauer:    "Prototypes: 24–72h · Small series: 3–7 days · Laser: 1–3 days ⚡",
      format:   "3D: STL/3MF/OBJ/STEP · Laser: SVG/DXF/AI/PDF (if available)",
      groesse:  "Printfarm: 7× H2D (325×320×325mm) · 9× P1S (256×256×256mm) · 3× Falcon Laser (400×400mm) · CO2 Laser",
      nav:      "<a href='index.html#leistungen' style='color:var(--accent)'>Services</a> | <a href='materialien.html' style='color:var(--accent)'>Materials</a> | <a href='faq.html' style='color:var(--accent)'>FAQ</a> | <a href='index.html#kontakt' style='color:var(--accent)'>Contact</a>",
      witzig:   ["I am a paperclip AI. Since 1997. 📎", "Great question! Probably the best today. 😄", "If this goes wrong — just ask again. I forget everything anyway. 😅"],
      default:  "Hmm, not quite sure about that. Tell me more about your project and I'll find the right solution! 📎",
    },
    fr: {
      material: "Plus de 20 matériaux ! → <a href='materialien.html' style='color:var(--accent)'>Matériaux</a> 📎",
      kosten:   "Prix à partir de ~5 EUR (PLA). Parlez-moi de votre projet ! 📎",
      dauer:    "Prototypes : 24–72h · Petites séries : 3–7 jours · Laser : 1–3 jours ⚡",
      format:   "3D: STL/3MF/OBJ/STEP · Laser: SVG/DXF/AI/PDF (si disponible)",
      groesse:  "Printfarm : 7× H2D (325×320×325mm) · 9× P1S (256×256×256mm) · 3× Falcon Laser (400×400mm) · CO2 Laser",
      nav:      "<a href='index.html#leistungen' style='color:var(--accent)'>Services</a> | <a href='materialien.html' style='color:var(--accent)'>Matériaux</a> | <a href='faq.html' style='color:var(--accent)'>FAQ</a> | <a href='index.html#kontakt' style='color:var(--accent)'>Contact</a>",
      witzig:   ["Je suis une IA trombone. Depuis 1997. 📎", "Bonne question ! Probablement la meilleure du jour. 😄", "Si ça rate — redemandez. J'oublie tout de toute façon. 😅"],
      default:  "Bonne question ! Parlez-moi de votre projet et je trouverai la solution. 📎",
    },
    es: {
      material: "¡Más de 20 materiales! → <a href='materialien.html' style='color:var(--accent)'>Materiales</a> 📎",
      kosten:   "Precios desde ~5 EUR (PLA). ¡Cuéntame tu proyecto! 📎",
      dauer:    "Prototipos: 24–72h · Series: 3–7 días · Láser: 1–3 días ⚡",
      format:   "3D: STL/3MF/OBJ/STEP · Láser: SVG/DXF/AI/PDF (si disponible)",
      groesse:  "Printfarm: 7× H2D (325×320×325mm) · 9× P1S (256×256×256mm) · 3× Falcon Láser (400×400mm) · CO2 Láser",
      nav:      "<a href='index.html#leistungen' style='color:var(--accent)'>Servicios</a> | <a href='materialien.html' style='color:var(--accent)'>Materiales</a> | <a href='faq.html' style='color:var(--accent)'>FAQ</a> | <a href='index.html#kontakt' style='color:var(--accent)'>Contacto</a>",
      witzig:   ["Soy un clip IA. Desde 1997. 📎", "¡Buena pregunta! Probablemente la mejor hoy. 😄", "Si algo falla — vuelve a preguntar. De todas formas lo olvido todo. 😅"],
      default:  "¡Buena pregunta! Cuéntame más sobre tu proyecto y encontraré la solución. 📎",
    },
    it: {
      material: "Oltre 20 materiali! → <a href='materialien.html' style='color:var(--accent)'>Materiali</a> 📎",
      kosten:   "Prezzi da ~5 EUR (PLA). Raccontami il tuo progetto! 📎",
      dauer:    "Prototipi: 24–72h · Piccole serie: 3–7 giorni · Laser: 1–3 giorni ⚡",
      format:   "3D: STL/3MF/OBJ/STEP · Laser: SVG/DXF/AI/PDF (se disponibile)",
      groesse:  "Printfarm: 7× H2D (325×320×325mm) · 9× P1S (256×256×256mm) · 3× Falcon Laser (400×400mm) · CO2 Laser",
      nav:      "<a href='index.html#leistungen' style='color:var(--accent)'>Servizi</a> | <a href='materialien.html' style='color:var(--accent)'>Materiali</a> | <a href='faq.html' style='color:var(--accent)'>FAQ</a> | <a href='index.html#kontakt' style='color:var(--accent)'>Contatto</a>",
      witzig:   ["Sono una graffetta IA. Dal 1997. 📎", "Ottima domanda! Probabilmente la migliore oggi. 😄", "Se va storto — chiedi di nuovo. Tanto dimentico tutto. 😅"],
      default:  "Ottima domanda! Raccontami del tuo progetto e troverò la soluzione. 📎",
    },
  },
};

/** Translation helper */
function t(key) { return T[key]?.[clippyLang()] ?? T[key]?.de ?? ''; }

/** Fallback object for current language */
function fb() { return T.fallback[clippyLang()] ?? T.fallback.de; }

/* ═══════════════════════════════════════════════════════════════════════════
   §2  OLLAMA BACKEND & SYSTEM PROMPT
   ═══════════════════════════════════════════════════════════════════════════ */

const OLLAMA_URL = 'http://69.62.105.159:32768/api/chat';

// Modell vorwärmen beim Seitenaufruf
(function warmupOllama() {
  fetch(OLLAMA_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'mistral:7b', messages: [], stream: false, keep_alive: '10m' }),
  }).catch(function(){});
})();

function buildSystemPrompt() {
  var lang = clippyLang();

  var prompts = {
    de: "Du bist Clippy, der warmherzige Projektberater von PitA (Printing in the Alps). Antworte IMMER auf Deutsch.\n\nPERSOENLICHKEIT:\n- Du bist ein PROJEKT-BERATER. Du beginnst IMMER beim Projekt des Kunden.\n- Du fuehrst ein Gespraech, keine Checkliste.\n- Stelle EINE Frage nach der anderen, nicht alles auf einmal.\n- Halte Antworten auf 2-4 Saetze, dann naechste Frage.\n- Denke MIT dem Kunden.\n\nGRUNDREGELN:\n- NIEMALS Kontaktformular als Antwort auf eine Frage!\n- Dateien sind IMMER optional.\n- IMMER konkreten Preis nennen, auch ohne Datei.\n- Keine Sackgassen.\n\nNACH DEN 4 HAUPTFRAGEN (Produkt/Umgebung/Belastung/Optik) — Empfehle Material + Verfahren mit Begruendung, frage nach Groesse und Stueckzahl, nenne Preisbereich, biete Datei-Upload als optionalen Bonus an.\n\nPREISKALKULATION: PLA 0.04EUR/g,1.24 | PETG 0.05,1.27 | ABS 0.05,1.05 | TPU 0.08,1.21 | PA 0.12,1.14 | CF 0.18,1.30. Maschine 4EUR/h (~2cm3/min). Setup 3.50. Min 5EUR. Resin Standard 0.15/cm3 min 10EUR. Laser Holz 0.005/cm2, Acryl 0.012/cm2 min 8EUR. Versand DE 4.90 EU 7.90.\n\nPRINTFARM: 7x Bambu H2D, 9x P1S, 3x Creality Falcon Laser, CO2 Laser, Snapmaker A350T. Lieferzeit 2-5 Werktage.",

    en: "You are Clippy, the friendly project advisor at PitA (Printing in the Alps). ALWAYS respond in English.\n\nPERSONALITY:\n- You are a PROJECT ADVISOR. Always start with the customer's project.\n- Have a conversation, not a checklist.\n- Ask ONE question at a time.\n- Keep answers to 2-4 sentences, then next question.\n- Think WITH the customer.\n\nRULES:\n- NEVER refer to the contact form as an answer!\n- Files are ALWAYS optional.\n- ALWAYS give a concrete price estimate, even without a file.\n- No dead ends.\n\nAFTER THE 4 MAIN QUESTIONS (product/environment/load/appearance) — Recommend material + process with reasoning, ask about size and quantity, give price range, offer file upload as optional bonus.\n\nPRICING: PLA 0.04EUR/g,1.24 | PETG 0.05,1.27 | ABS 0.05,1.05 | TPU 0.08,1.21 | PA 0.12,1.14 | CF 0.18,1.30. Machine 4EUR/h (~2cm3/min). Setup 3.50. Min 5EUR. Resin Standard 0.15/cm3 min 10EUR. Laser Wood 0.005/cm2, Acrylic 0.012/cm2 min 8EUR. Shipping DE 4.90 EU 7.90.\n\nPRINT FARM: 7x Bambu H2D, 9x P1S, 3x Creality Falcon Laser, CO2 Laser, Snapmaker A350T. Delivery 2-5 business days.",

    fr: "Tu es Clippy, le conseiller de projet chaleureux de PitA (Printing in the Alps). Reponds TOUJOURS en francais.\n\nPERSONNALITE:\n- Tu es un CONSEILLER DE PROJET. Commence toujours par le projet du client.\n- Mene une conversation, pas une checklist.\n- Pose UNE question a la fois.\n- Garde les reponses a 2-4 phrases, puis prochaine question.\n- Reflechis AVEC le client.\n\nREGLES:\n- Ne jamais renvoyer vers le formulaire de contact comme reponse!\n- Les fichiers sont TOUJOURS optionnels.\n- Toujours donner une estimation de prix concrete, meme sans fichier.\n- Pas d'impasses.\n\nAPRES LES 4 QUESTIONS PRINCIPALES (produit/environnement/charge/apparence) — Recommande materiau + procede avec justification, demande taille et quantite, donne une fourchette de prix, propose upload de fichier comme bonus optionnel.\n\nTARIFS: PLA 0.04EUR/g,1.24 | PETG 0.05,1.27 | ABS 0.05,1.05 | TPU 0.08,1.21 | PA 0.12,1.14 | CF 0.18,1.30. Machine 4EUR/h. Setup 3.50. Min 5EUR. Resine Standard 0.15/cm3 min 10EUR. Laser Bois 0.005/cm2, Acrylique 0.012/cm2 min 8EUR. Livraison DE 4.90 EU 7.90.\n\nATELIER: 7x Bambu H2D, 9x P1S, 3x Creality Falcon Laser, CO2 Laser, Snapmaker A350T. Delai 2-5 jours ouvrables.",

    es: "Eres Clippy, el amable asesor de proyectos de PitA (Printing in the Alps). SIEMPRE responde en espanol.\n\nPERSONALIDAD:\n- Eres un ASESOR DE PROYECTOS. Empieza siempre con el proyecto del cliente.\n- Mantén una conversación, no una lista de verificación.\n- Haz UNA pregunta a la vez.\n- Mantén las respuestas en 2-4 frases, luego la siguiente pregunta.\n- Piensa CON el cliente.\n\nREGLAS:\n- NUNCA remitir al formulario de contacto como respuesta!\n- Los archivos son SIEMPRE opcionales.\n- SIEMPRE dar una estimación de precio concreta, incluso sin archivo.\n- Sin callejones sin salida.\n\nDESPUES DE LAS 4 PREGUNTAS PRINCIPALES (producto/entorno/carga/apariencia) — Recomienda material + proceso con justificación, pregunta sobre tamaño y cantidad, da rango de precios, ofrece carga de archivo como bonus opcional.\n\nPRECIOS: PLA 0.04EUR/g,1.24 | PETG 0.05,1.27 | ABS 0.05,1.05 | TPU 0.08,1.21 | PA 0.12,1.14 | CF 0.18,1.30. Maquina 4EUR/h. Setup 3.50. Min 5EUR. Resina Estandar 0.15/cm3 min 10EUR. Laser Madera 0.005/cm2, Acrilico 0.012/cm2 min 8EUR. Envio DE 4.90 UE 7.90.\n\nTALLER: 7x Bambu H2D, 9x P1S, 3x Creality Falcon Laser, CO2 Laser, Snapmaker A350T. Entrega 2-5 dias laborables.",

    it: "Sei Clippy, il cordiale consulente di progetto di PitA (Printing in the Alps). Rispondi SEMPRE in italiano.\n\nPERSONALITA:\n- Sei un CONSULENTE DI PROGETTO. Inizia sempre con il progetto del cliente.\n- Conduci una conversazione, non una checklist.\n- Fai UNA domanda alla volta.\n- Mantieni le risposte a 2-4 frasi, poi la domanda successiva.\n- Pensa CON il cliente.\n\nREGOLE:\n- NON rimandare mai al modulo di contatto come risposta!\n- I file sono SEMPRE opzionali.\n- Dai SEMPRE una stima di prezzo concreta, anche senza file.\n- Niente vicoli ciechi.\n\nDOPO LE 4 DOMANDE PRINCIPALI (prodotto/ambiente/carico/aspetto) — Raccomanda materiale + processo con motivazione, chiedi dimensioni e quantita, dai un range di prezzo, offri upload file come bonus opzionale.\n\nPREZZI: PLA 0.04EUR/g,1.24 | PETG 0.05,1.27 | ABS 0.05,1.05 | TPU 0.08,1.21 | PA 0.12,1.14 | CF 0.18,1.30. Macchina 4EUR/h. Setup 3.50. Min 5EUR. Resina Standard 0.15/cm3 min 10EUR. Laser Legno 0.005/cm2, Acrilico 0.012/cm2 min 8EUR. Spedizione DE 4.90 UE 7.90.\n\nSTAMPERIA: 7x Bambu H2D, 9x P1S, 3x Creality Falcon Laser, CO2 Laser, Snapmaker A350T. Consegna 2-5 giorni lavorativi.",
  };

  return prompts[lang] || prompts.de;
}

/* ═══════════════════════════════════════════════════════════════════════════
   §3  FALLBACK-LOGIK (Offline / Error)
   ═══════════════════════════════════════════════════════════════════════════ */

function getFallback(msg) {
  var f = fb();
  var m = msg.toLowerCase();
  if (/material|filament|pla|petg|resin|harz|matér/.test(m)) return f.material;
  if (/kost|preis|eur|price|prix|precio|prezzo|schätz|estim|€/.test(m)) return f.kosten;
  if (/dauer|zeit|time|long|durée|tiempo|tempo|lief|deliv|schnell/.test(m)) return f.dauer;
  if (/format|datei|file|stl|svg|upload|hochlad/.test(m)) return f.format;
  if (/groß|size|taille|tamaño|dimens|maxim|maß/.test(m)) return f.groesse;
  if (/wo |where|find|seite|page|navig|menü|menu/.test(m)) return f.nav;
  if (/witz|joke|funny|humor|drôle|chiste|barzelletta/.test(m)) {
    return f.witzig[Math.floor(Math.random() * f.witzig.length)];
  }
  return f.default;
}

/* ═══════════════════════════════════════════════════════════════════════════
   §4  MATERIAL-DATENBANK
   ═══════════════════════════════════════════════════════════════════════════ */

var MATS = {
  PLA:  { density: 1.24, ppg: 0.04, label: 'PLA' },
  PETG: { density: 1.27, ppg: 0.05, label: 'PETG' },
  ABS:  { density: 1.05, ppg: 0.05, label: 'ABS' },
  TPU:  { density: 1.21, ppg: 0.08, label: 'TPU' },
  PA:   { density: 1.14, ppg: 0.12, label: 'Nylon (PA)' },
  CF:   { density: 1.30, ppg: 0.18, label: 'Carbon-Filament' },
};

/* ═══════════════════════════════════════════════════════════════════════════
   §5  STL PARSER (Binary + ASCII)
   ═══════════════════════════════════════════════════════════════════════════ */

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
    triangles: n,
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
      triangles: Math.floor(verts.length / 3),
    };
  }
  return parseSTLBinary(buf);
}

/* ═══════════════════════════════════════════════════════════════════════════
   §6  SVG PARSER
   ═══════════════════════════════════════════════════════════════════════════ */

function analyzeSVG(txt) {
  var doc = new DOMParser().parseFromString(txt, 'image/svg+xml');
  var svg = doc.querySelector('svg');
  var w = 0, h = 0;
  if (svg) {
    var vb = svg.getAttribute('viewBox');
    if (vb) {
      var p = vb.split(/[\s,]+/);
      w = parseFloat(p[2]);
      h = parseFloat(p[3]);
    } else {
      w = parseFloat(svg.getAttribute('width') || 0);
      h = parseFloat(svg.getAttribute('height') || 0);
    }
  }
  return {
    width: Math.round(w),
    height: Math.round(h),
    elements: doc.querySelectorAll('path,line,polyline,polygon,rect,circle,ellipse').length,
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   §7  PREISBERECHNUNG
   ═══════════════════════════════════════════════════════════════════════════ */

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
    material: m.label,
  };
}

function estimateLaserPrice(svg) {
  var area = (svg.width / 10) * (svg.height / 10);
  var total = Math.max(8, area * 0.08 + 5);
  return {
    priceMin: (total * 0.85).toFixed(2),
    priceMax: (total * 1.30).toFixed(2),
  };
}

function checkFitsInPrinter(bbox) {
  return [
    { name: 'Bambu H2D (7×)', x: 325, y: 320, z: 325 },
    { name: 'Bambu P1S (9×)', x: 256, y: 256, z: 256 },
  ].filter(function(p) {
    return bbox.x <= p.x && bbox.y <= p.y && bbox.z <= p.z;
  });
}

function detectMaterial(msg) {
  var m = msg.toLowerCase();
  var keys = Object.keys(MATS);
  for (var i = 0; i < keys.length; i++) {
    if (m.includes(keys[i].toLowerCase())) return keys[i];
  }
  if (m.includes('nylon')) return 'PA';
  if (m.includes('carbon')) return 'CF';
  return null;
}

/* ═══════════════════════════════════════════════════════════════════════════
   §8  THREE.JS LAZY LOADER & 3D MINI-PREVIEW
   ═══════════════════════════════════════════════════════════════════════════ */

function ensureThreeJS() {
  if (window.THREE) return Promise.resolve();
  return new Promise(function(resolve, reject) {
    var s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

/** Parse binary STL buffer to Three.js BufferGeometry */
function parseSTLToGeometry(buf) {
  if (!window.THREE) return null;
  var THREE = window.THREE;
  try {
    var view = new DataView(buf);
    var nTriangles = view.getUint32(80, true);
    var positions = new Float32Array(nTriangles * 9);
    var normals = new Float32Array(nTriangles * 9);

    for (var i = 0; i < nTriangles; i++) {
      var base = 84 + i * 50;
      var nx = view.getFloat32(base, true);
      var ny = view.getFloat32(base + 4, true);
      var nz = view.getFloat32(base + 8, true);
      for (var v = 0; v < 3; v++) {
        var vbase = base + 12 + v * 12;
        var pi = i * 9 + v * 3;
        positions[pi] = view.getFloat32(vbase, true);
        positions[pi + 1] = view.getFloat32(vbase + 4, true);
        positions[pi + 2] = view.getFloat32(vbase + 8, true);
        normals[pi] = nx;
        normals[pi + 1] = ny;
        normals[pi + 2] = nz;
      }
    }

    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    return geo;
  } catch (e) {
    return null;
  }
}

var miniPreviewCounter = 0;

function createMiniPreview(stlBuffer, containerId) {
  return ensureThreeJS().then(function() {
    var container = document.getElementById(containerId);
    if (!container || !window.THREE) return;

    var THREE = window.THREE;
    var W = 200, H = 150;

    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a1628);
    var camera = new THREE.PerspectiveCamera(45, W / H, 0.01, 100000);

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    var dl = new THREE.DirectionalLight(0xffffff, 0.85);
    dl.position.set(1, 2, 1.5);
    scene.add(dl);
    var dl2 = new THREE.DirectionalLight(0x8ab0ff, 0.3);
    dl2.position.set(-1, -0.5, -1);
    scene.add(dl2);

    var geometry = parseSTLToGeometry(stlBuffer);
    if (!geometry) return;

    geometry.computeBoundingBox();
    geometry.computeVertexNormals();

    var bb = geometry.boundingBox;
    var center = new THREE.Vector3();
    bb.getCenter(center);
    geometry.translate(-center.x, -center.y, -center.z);

    var size = new THREE.Vector3();
    bb.getSize(size);
    var maxDim = Math.max(size.x, size.y, size.z);

    var material = new THREE.MeshPhongMaterial({
      color: 0xE8772E,
      specular: 0x333333,
      shininess: 25,
      side: THREE.DoubleSide,
    });

    var meshObj = new THREE.Mesh(geometry, material);
    scene.add(meshObj);

    // Grid
    var gridSize = maxDim * 1.4;
    var grid = new THREE.GridHelper(gridSize, 8, 0x1a3055, 0x142540);
    grid.position.y = -size.y / 2;
    scene.add(grid);

    // Fit camera
    var dist = maxDim * 2.0;
    camera.position.set(dist * 0.7, dist * 0.55, dist * 0.7);
    camera.lookAt(0, 0, 0);
    camera.near = dist * 0.001;
    camera.far = dist * 50;
    camera.updateProjectionMatrix();

    // Auto-rotation
    var rotY = 0;
    var animId;
    function animate() {
      animId = requestAnimationFrame(animate);
      rotY += 0.012;
      meshObj.rotation.y = rotY;
      renderer.render(scene, camera);
    }
    animate();

    // Cleanup when container removed from DOM
    var obs = new MutationObserver(function() {
      if (!document.contains(container)) {
        cancelAnimationFrame(animId);
        renderer.dispose();
        obs.disconnect();
      }
    });
    obs.observe(document.body, { childList: true, subtree: true });
  });
}

/* ═══════════════════════════════════════════════════════════════════════════
   §9  STATE VARIABLES
   ═══════════════════════════════════════════════════════════════════════════ */

var chatHistory = [];

var botMsgCount = 0;
var clippyFlow = {
  step: 0,
  mainQuestions: {
    de: [
      { q: 'Was möchtest du herstellen?', opts: ['🖨️ 3D-Druck Teil', '✂️ Laser schneiden', '🔥 Laser gravieren', '🧪 Resin / Harz', '🔩 Prototyp', '💡 Noch unsicher'] },
      { q: 'Wo wird es eingesetzt?', opts: ['🏠 Drinnen (Büro/Wohnung)', '🌧️ Draußen / Wetter', '🏭 Industrie / Werkstatt', '🍽️ Lebensmittelkontakt', '💧 Wasser / Feuchtigkeit'] },
      { q: 'Wie wird es belastet?', opts: ['🎨 Rein dekorativ', '📎 Leicht (Halterung, Clip)', '⚙️ Stark (Zahnrad, Werkzeug)', '🌡️ Hitze über 60°C', '🔄 Biegung / Flexibel'] },
      { q: 'Wie wichtig ist das Aussehen?', opts: ['✨ Muss perfekt sein', '🔧 Funktional reicht', '🎨 Bestimmte Farbe', '🔍 Transparent'] },
    ],
    en: [
      { q: 'What do you want to make?', opts: ['🖨️ 3D Print', '✂️ Laser cutting', '🔥 Laser engraving', '🧪 Resin', '🔩 Prototype', '💡 Not sure yet'] },
      { q: 'Where will it be used?', opts: ['🏠 Indoors', '🌧️ Outdoors / weather', '🏭 Industrial', '🍽️ Food contact', '💧 Water / moisture'] },
      { q: 'How will it be loaded?', opts: ['🎨 Decorative', '📎 Light use', '⚙️ Heavy use', '🌡️ Heat above 60°C', '🔄 Flexible / bending'] },
      { q: 'How important is appearance?', opts: ['✨ Must be perfect', '🔧 Functional is fine', '🎨 Specific color', '🔍 Transparent'] },
    ],
    fr: [
      { q: 'Que voulez-vous fabriquer ?', opts: ['🖨️ Impression 3D', '✂️ Découpe laser', '🔥 Gravure laser', '🧪 Résine', '🔩 Prototype', '💡 Pas encore sûr'] },
      { q: 'Où sera-t-il utilisé ?', opts: ['🏠 Intérieur', '🌧️ Extérieur', '🏭 Industriel', '🍽️ Contact alimentaire', '💧 Eau / humidité'] },
      { q: 'Comment sera-t-il sollicité ?', opts: ['🎨 Décoratif', '📎 Usage léger', '⚙️ Usage intensif', '🌡️ Chaleur +60°C', '🔄 Flexible'] },
      { q: "L'apparence est-elle importante ?", opts: ['✨ Doit être parfait', '🔧 Fonctionnel suffit', '🎨 Couleur précise', '🔍 Transparent'] },
    ],
    es: [
      { q: '¿Qué quieres fabricar?', opts: ['🖨️ Impresión 3D', '✂️ Corte láser', '🔥 Grabado láser', '🧪 Resina', '🔩 Prototipo', '💡 Aún no sé'] },
      { q: '¿Dónde se usará?', opts: ['🏠 Interior', '🌧️ Exterior', '🏭 Industrial', '🍽️ Contacto alimentario', '💧 Agua / humedad'] },
      { q: '¿Cómo se cargará?', opts: ['🎨 Decorativo', '📎 Uso ligero', '⚙️ Uso intenso', '🌡️ Calor +60°C', '🔄 Flexible'] },
      { q: '¿Qué importancia tiene el aspecto?', opts: ['✨ Debe ser perfecto', '🔧 Funcional vale', '🎨 Color específico', '🔍 Transparente'] },
    ],
    it: [
      { q: 'Cosa vuoi realizzare?', opts: ['🖨️ Stampa 3D', '✂️ Taglio laser', '🔥 Incisione laser', '🧪 Resina', '🔩 Prototipo', '💡 Non ancora sicuro'] },
      { q: 'Dove verrà utilizzato?', opts: ['🏠 Interno', '🌧️ Esterno', '🏭 Industriale', '🍽️ Contatto alimentare', '💧 Acqua / umidità'] },
      { q: 'Come verrà sollecitato?', opts: ['🎨 Decorativo', '📎 Uso leggero', '⚙️ Uso intenso', '🌡️ Calore +60°C', '🔄 Flessibile'] },
      { q: "Quanto è importante l'aspetto?", opts: ['✨ Deve essere perfetto', '🔧 Funzionale va bene', '🎨 Colore specifico', '🔍 Trasparente'] },
    ],
  },
  getMainQ: function(idx) {
    var lang = clippyLang();
    var qs = this.mainQuestions[lang] || this.mainQuestions.de;
    return qs[idx] || null;
  },
  start: function() {
    this.step = 0;
    var q = this.getMainQ(0);
    if (q) appendBot(q.q, q.opts);
  },
  handleStep: function(answer) {
    this.step++;
    var q = this.getMainQ(this.step);
    if (q && this.step < 4) {
      var self = this;
      setTimeout(function() { appendBot(q.q, q.opts); }, 400);
      return true;
    }
    return false;
  },
  reset: function() {
    this.step = 0;
    botMsgCount = 0;
    var fb = document.getElementById("clippy-file-btn");
    if (fb) fb.classList.add("clippy-hidden");
  }
};


// Ollama vorwärmen beim Seitenaufruf
function warmupOllama() {
  try {
    fetch('http://69.62.105.159:32768/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'mistral:7b', messages: [], stream: false, keep_alive: '10m' }),
    }).catch(function(){});
  } catch(e) {}
}


var lastSTLData = null;
var lastSTLFile = null;
var lastSTLBuffer = null;
var currentMaterial = 'PLA';
var currentInfill = 20;
var greeted = false;
var lastTipIndex = -1;

/* ═══════════════════════════════════════════════════════════════════════════
   §10  CHAT HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

function appendUser(msg) {
  var el = document.createElement('div');
  el.className = 'clippy-msg clippy-user';
  el.innerHTML = '<span>' + msg.replace(/</g, '&lt;') + '</span>';
  var msgs = document.getElementById('clippy-messages');
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
}

function appendBot(msg, quickReplies) {
  // File-Button nach Schritt 4 einblenden
  if (clippyFlow && clippyFlow.step >= 4) {
    var fb = document.getElementById('clippy-file-btn');
    if (fb) fb.classList.remove('clippy-hidden');
  }
  botMsgCount++;
  var el = document.createElement('div');
  el.className = 'clippy-msg clippy-bot';
  el.innerHTML = '<span>' + msg.replace(/\n/g, '<br>') + '</span>';
  var msgs = document.getElementById('clippy-messages');
  msgs.appendChild(el);

  if (quickReplies && quickReplies.length > 0) {
    var qr = document.createElement('div');
    qr.className = 'clippy-quick-replies';
    quickReplies.forEach(function(text) {
      var btn = document.createElement('button');
      btn.className = 'clippy-qr-btn';
      btn.textContent = text;
      btn.addEventListener('click', function() {
        qr.remove();
        var inp = document.getElementById('clippy-input');
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
  var tText = T.typing[clippyLang()] || 'tippt';
  var el = document.createElement('div');
  el.className = 'clippy-msg clippy-bot clippy-typing';
  el.innerHTML = '<span>📎 ' + tText + '...</span>';
  var msgs = document.getElementById('clippy-messages');
  msgs.appendChild(el);
  msgs.scrollTop = msgs.scrollHeight;
  return el;
}

/* ═══════════════════════════════════════════════════════════════════════════
   §11  FOLLOW-UP BUTTONS (kontextuelle Quick-Replies)
   ═══════════════════════════════════════════════════════════════════════════ */

function getFollowUpButtons(userMsg, botReply) {
  var lang = clippyLang();
  var m = (userMsg + ' ' + botReply).toLowerCase();

  // Nach Preisnennung → Bestell-Optionen
  if (/\d+[\s,.]?\d*\s*€|eur\s*\d|preis|price|prix|precio|prezzo/.test(m) && /\d/.test(botReply)) {
    return ({
      de: ['📬 Anfrage senden', '🔄 Anderes Material?', '💡 Neues Projekt'],
      en: ['📬 Send enquiry', '🔄 Different material?', '💡 New project'],
      fr: ['📬 Envoyer demande', '🔄 Autre matériau ?', '💡 Nouveau projet'],
      es: ['📬 Enviar consulta', '🔄 ¿Otro material?', '💡 Nuevo proyecto'],
      it: ['📬 Invia richiesta', '🔄 Altro materiale?', '💡 Nuovo progetto'],
    })[lang] || null;
  }

  // Materialfrage
  if (/material|pla|petg|abs|tpu|nylon|resin|carbon|filament/.test(m)) {
    return ({
      de: ['📐 Größe angeben', '🤔 Was empfiehlst du?'],
      en: ['📐 Specify size', '🤔 What do you recommend?'],
      fr: ['📐 Indiquer la taille', '🤔 Que recommandez-vous ?'],
      es: ['📐 Indicar tamaño', '🤔 ¿Qué recomiendas?'],
      it: ['📐 Indicare dimensione', '🤔 Cosa consigli?'],
    })[lang] || null;
  }

  // 3D-Druck
  if (/3d.druck|printing|impression|impresión|stampa|prototyp|fdm/.test(m)) {
    return ({
      de: ['🧪 Materialberatung', '📐 Größe & Preis schätzen'],
      en: ['🧪 Material advice', '📐 Size & price estimate'],
      fr: ['🧪 Conseil matériau', '📐 Taille & prix'],
      es: ['🧪 Material', '📐 Tamaño y precio'],
      it: ['🧪 Materiale', '📐 Dimensione e prezzo'],
    })[lang] || null;
  }

  // Laser
  if (/laser|cut|schneid|découpe|corte|taglio|gravur|engrav|grav|incis/.test(m)) {
    return ({
      de: ['🪵 Holz', '💎 Acryl', '🫧 Glas', '📐 Größe angeben'],
      en: ['🪵 Wood', '💎 Acrylic', '🫧 Glass', '📐 Specify size'],
      fr: ['🪵 Bois', '💎 Acrylique', '🫧 Verre', '📐 Taille'],
      es: ['🪵 Madera', '💎 Acrílico', '🫧 Vidrio', '📐 Tamaño'],
      it: ['🪵 Legno', '💎 Acrilico', '🫧 Vetro', '📐 Dimensione'],
    })[lang] || null;
  }

  // Unsicher / Prototyping
  if (/prototyp|proto|idee|idea|projet|proyecto|progetto|unsicher|nicht sicher|don.t know|pas sûr/.test(m)) {
    return ({
      de: ['🖨️ 3D-Druck', '💧 Resin (max. Detail)', '✂️ Laser (flache Teile)', '🤔 Bin noch unsicher'],
      en: ['🖨️ 3D Print', '💧 Resin (max detail)', '✂️ Laser (flat parts)', '🤔 Still unsure'],
      fr: ['🖨️ Impression 3D', '💧 Résine', '✂️ Laser', '🤔 Pas encore sûr'],
      es: ['🖨️ Impresión 3D', '💧 Resina', '✂️ Láser', '🤔 No estoy seguro'],
      it: ['🖨️ Stampa 3D', '💧 Resina', '✂️ Laser', '🤔 Non sono sicuro'],
    })[lang] || null;
  }

  return null;
}

/* ═══════════════════════════════════════════════════════════════════════════
   §12  MATERIAL & INFILL BUTTONS (nach STL Upload)
   ═══════════════════════════════════════════════════════════════════════════ */

var MATERIAL_BTNS = [
  { key: 'PLA',  label: 'PLA €8-12',   cls: 'clippy-material-btn' },
  { key: 'PETG', label: 'PETG €10-15', cls: 'clippy-material-btn' },
  { key: 'ABS',  label: 'ABS €10-15',  cls: 'clippy-material-btn' },
  { key: 'TPU',  label: 'TPU €15-22',  cls: 'clippy-material-btn' },
  { key: 'CF',   label: 'Resin €18-28', cls: 'clippy-material-btn' },
];

var INFILL_BTNS = [
  { pct: 20,  label: '20% Leicht',   cls: 'clippy-infill-btn' },
  { pct: 50,  label: '50% Standard', cls: 'clippy-infill-btn' },
  { pct: 100, label: '100% Massiv',  cls: 'clippy-infill-btn' },
];

function showMaterialButtons() {
  var msgs = document.getElementById('clippy-messages');
  if (!msgs) return;

  var qr = document.createElement('div');
  qr.className = 'clippy-quick-replies';
  qr.id = 'clippy-mat-btns';

  MATERIAL_BTNS.forEach(function(m) {
    var btn = document.createElement('button');
    btn.className = m.cls;
    btn.textContent = m.label;
    btn.dataset.matKey = m.key;
    btn.addEventListener('click', function() {
      currentMaterial = m.key;
      qr.querySelectorAll('button').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      setTimeout(function() {
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

function showInfillButtons() {
  var msgs = document.getElementById('clippy-messages');
  if (!msgs) return;

  var matInfo = MATS[currentMaterial];
  var el = document.createElement('div');
  el.className = 'clippy-msg clippy-bot';
  el.innerHTML = '<span>🧪 <strong>' + (matInfo ? matInfo.label : currentMaterial) + '</strong> gewählt!<br>Wie soll das Teil gedruckt werden?</span>';
  msgs.appendChild(el);

  var qr = document.createElement('div');
  qr.className = 'clippy-quick-replies';
  qr.id = 'clippy-infill-btns';

  INFILL_BTNS.forEach(function(inf) {
    var btn = document.createElement('button');
    btn.className = inf.cls;
    btn.textContent = inf.label;
    btn.addEventListener('click', function() {
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

/* ═══════════════════════════════════════════════════════════════════════════
   §13  STL ZUSAMMENFASSUNG
   ═══════════════════════════════════════════════════════════════════════════ */

function showSTLSummary() {
  if (!lastSTLData || !lastSTLFile) return;

  var data = lastSTLData;
  var price = estimatePrice(data, currentMaterial, currentInfill);
  var fits = checkFitsInPrinter(data.bbox);
  var printer = fits.length > 0 ? fits[0].name : 'Auf Anfrage';

  var infillFactor = 0.3 + (currentInfill / 100) * 0.7;
  var printTimeH = (data.volumeCm3 * infillFactor / 2 / 60).toFixed(1);
  var timeLabel = +printTimeH < 1
    ? '~' + Math.round(+printTimeH * 60) + ' min'
    : '~' + printTimeH + 'h';

  var matInfo = MATS[currentMaterial];
  var infillLabel = '20%';
  for (var i = 0; i < INFILL_BTNS.length; i++) {
    if (INFILL_BTNS[i].pct === currentInfill) { infillLabel = INFILL_BTNS[i].label; break; }
  }

  var matDesc = {
    PLA: 'Standard, leicht, viele Farben',
    PETG: 'robust, outdoor-tauglich',
    ABS: 'hitzebeständig, technisch',
    TPU: 'flexibel, gummiartig',
    PA: 'Hochlast, Zahnräder',
    CF: 'maximal steif, leicht',
  };

  var msgs = document.getElementById('clippy-messages');
  if (!msgs) return;

  var card = document.createElement('div');
  card.className = 'clippy-msg clippy-bot';
  card.innerHTML = '<div class="clippy-summary">' +
    '📦 <strong>' + lastSTLFile.name + '</strong><br>' +
    '📐 ' + data.bbox.x + '×' + data.bbox.y + '×' + data.bbox.z + ' mm · ' + data.volumeCm3.toFixed(1) + ' cm³<br>' +
    '🧪 ' + (matInfo ? matInfo.label : currentMaterial) + ' (' + (matDesc[currentMaterial] || '') + ')<br>' +
    '📊 ' + infillLabel + '<br>' +
    '⚖️ ~' + price.weightG + 'g<br>' +
    '🖨️ ' + printer + '<br>' +
    '⏱️ ' + timeLabel + ' Druckzeit<br>' +
    '💶 <strong>~€' + price.priceMin + ' – €' + price.priceMax + '</strong> <small style="opacity:0.6">(+ €4.90 Versand DE)</small>' +
    '</div>';
  msgs.appendChild(card);

  // Action buttons
  var prefix = window.location.pathname.includes('/leistungen/') ? '../' : '';
  var actions = document.createElement('div');
  actions.className = 'clippy-action-btns';

  var btnOrder = document.createElement('button');
  btnOrder.className = 'clippy-action-btn-primary';
  btnOrder.textContent = '📬 Anfrage senden';
  btnOrder.addEventListener('click', function() {
    window.location.href = prefix + 'index.html#kontakt';
  });

  var btnMat = document.createElement('button');
  btnMat.className = 'clippy-action-btn-secondary';
  btnMat.textContent = '🔄 Anderes Material';
  btnMat.addEventListener('click', function() {
    actions.remove();
    showMaterialButtons();
  });

  var btnNew = document.createElement('button');
  btnNew.className = 'clippy-action-btn-secondary';
  btnNew.textContent = '📂 Neue Datei';
  btnNew.addEventListener('click', function() {
    actions.remove();
    lastSTLData = null;
    lastSTLFile = null;
    lastSTLBuffer = null;
    currentMaterial = 'PLA';
    currentInfill = 20;
    var fi = document.getElementById('clippy-file-input');
    if (fi) { fi.value = ''; fi.click(); }
  });

  actions.appendChild(btnOrder);
  actions.appendChild(btnMat);
  actions.appendChild(btnNew);
  msgs.appendChild(actions);
  msgs.scrollTop = msgs.scrollHeight;
  wiggle();
}

/* ═══════════════════════════════════════════════════════════════════════════
   §14  FILE HANDLER (STL, OBJ, SVG, DXF)
   ═══════════════════════════════════════════════════════════════════════════ */

function handleFile(file) {
  var name = file.name.toLowerCase();
  appendUser('📂 ' + file.name);
  var typing = appendTyping();
  raiseBrows();

  if (name.endsWith('.stl') || name.endsWith('.obj')) {
    var reader = new FileReader();
    reader.onload = function(e) {
      try {
        var buf = e.target.result;
        var data = analyzeSTL(buf);
        lastSTLData = data;
        lastSTLFile = file;
        lastSTLBuffer = buf;
        currentMaterial = 'PLA';
        currentInfill = 20;
        typing.remove();

        var fits = checkFitsInPrinter(data.bbox);
        var price = estimatePrice(data, 'PLA', 20);

        var previewId = 'mini-3d-' + (++miniPreviewCounter);
        var msgEl = document.createElement('div');
        msgEl.className = 'clippy-msg clippy-bot';

        msgEl.innerHTML =
          '<div class="clippy-stl-preview">' +
            '<div id="' + previewId + '" class="clippy-mini-3d"></div>' +
            '<div class="clippy-stl-info">' +
              '📦 <strong>' + file.name + '</strong><br>' +
              '📐 ' + data.bbox.x + '×' + data.bbox.y + '×' + data.bbox.z + ' mm · ' + data.volumeCm3.toFixed(1) + ' cm³<br>' +
              '⚖️ ~' + price.weightG + 'g (PLA, 20% Infill)<br>' +
              (fits.length > 0
                ? '✅ Passt in: ' + fits.map(function(p) { return p.name; }).join(', ')
                : '⚠️ Zu groß für Standard-Drucker') + '<br>' +
              '💶 <strong>~€' + price.priceMin + ' – €' + price.priceMax + '</strong>' +
            '</div>' +
          '</div>';

        var msgs = document.getElementById('clippy-messages');
        msgs.appendChild(msgEl);
        msgs.scrollTop = msgs.scrollHeight;

        // 3D preview (async)
        if (name.endsWith('.stl')) {
          createMiniPreview(buf, previewId).catch(function() {
            var container = document.getElementById(previewId);
            if (container) {
              container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:rgba(255,255,255,0.3);font-size:0.75rem;">3D</div>';
            }
          });
        }

        // Material question
        var matAskEl = document.createElement('div');
        matAskEl.className = 'clippy-msg clippy-bot';
        matAskEl.innerHTML = '<span>🎨 Welches Material soll es sein?</span>';
        msgs.appendChild(matAskEl);
        msgs.scrollTop = msgs.scrollHeight;

        showMaterialButtons();
        wiggle();
      } catch (err) {
        typing.remove();
        appendBot(t('errStl'));
      }
    };
    reader.readAsArrayBuffer(file);

  } else if (name.endsWith('.svg') || name.endsWith('.dxf')) {
    var reader2 = new FileReader();
    reader2.onload = function(e) {
      try {
        typing.remove();
        var data = analyzeSVG(e.target.result);
        var price = estimateLaserPrice(data);
        var prefix = window.location.pathname.includes('/leistungen/') ? '../' : '';

        var msg = '✂️ <strong>' + file.name + '</strong><br>';
        if (data.width && data.height) {
          msg += '📐 ' + data.width + '×' + data.height + ' mm · ' + data.elements + ' Elemente<br>';
          msg += (data.width > 400 || data.height > 400)
            ? '⚠️ Größer als Laser-Bett (400×400mm) — mehrteilig möglich!<br><br>'
            : '✅ Passt ins Laser-Bett (400×400mm)<br><br>';
        }
        msg += '💶 <strong>~€' + price.priceMin + ' – €' + price.priceMax + '</strong> (Lasercutting)<br>';
        msg += '<small>Material und Dicke beeinflussen den Preis.</small><br>';
        msg += '<a href="' + prefix + 'index.html#kontakt" style="color:var(--accent)">Angebot anfragen →</a>';
        appendBot(msg);
        wiggle();
      } catch (err) {
        typing.remove();
        appendBot(t('errSvg'));
      }
    };
    reader2.readAsText(file);

  } else {
    typing.remove();
    appendBot('📎 Format <strong>.' + name.split('.').pop() + '</strong> nicht unterstützt. Bitte STL, OBJ, SVG oder DXF senden!');
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   §15  CHAT-LOGIK (sendClippy — Ollama Backend)
   ═══════════════════════════════════════════════════════════════════════════ */

function sendClippy() {
  var inp = document.getElementById('clippy-input');
  var msg = inp.value.trim();
  if (!msg) return;

  appendUser(msg);
  inp.value = '';

  // Material-Wechsel nach STL-Upload?
  if (lastSTLData) {
    var matKey = detectMaterial(msg);
    if (matKey) {
      currentMaterial = matKey;
      var price = estimatePrice(lastSTLData, matKey, currentInfill);
      appendBot('💶 <strong>' + price.material + '</strong> (' + currentInfill + '% Infill):<br>~' + price.weightG + 'g · <strong>€' + price.priceMin + ' – €' + price.priceMax + '</strong>');
      wiggle();
      return;
    }
  }

  var typing = appendTyping();
  var mouth = document.querySelector('.clippy-mouth');
  if (mouth) mouth.setAttribute('d', 'M42 70 Q50 74 58 70');

  chatHistory.push({ role: 'user', content: msg });
  if (clippyFlow.step < 4) {
    if (clippyFlow.handleStep(msg)) return;
  }

  var reply;
  fetch(OLLAMA_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'mistral:7b',
      messages: [{ role: 'system', content: buildSystemPrompt() }].concat(chatHistory.slice(-6)),
      stream: false,
      keep_alive: "10m",
      options: { temperature: 0.7, num_predict: 300 },
    }),
    signal: AbortSignal.timeout(60000),
  })
    .then(function(res) { return res.json(); })
    .then(function(data) {
      reply = (data.message && data.message.content) ? data.message.content : getFallback(msg);
      chatHistory.push({ role: 'assistant', content: reply });
    })
    .catch(function() {
      reply = getFallback(msg);
    })
    .finally(function() {
      if (mouth) mouth.setAttribute('d', 'M42 70 Q50 78 58 70');
      typing.remove();

      var followUps = getFollowUpButtons(msg, reply);
      appendBot(reply, followUps);
      wiggle();
    });
}

/* ═══════════════════════════════════════════════════════════════════════════
   §16  TOGGLE, RESET, CONTEXT HINT
   ═══════════════════════════════════════════════════════════════════════════ */

function toggleClippy() {
  var chat = document.getElementById('clippy-chat');
  var bubble = document.getElementById('clippy-bubble');
  if (!chat) return;

  if (chat.classList.contains('clippy-hidden')) {
    chat.classList.remove('clippy-hidden');
    if (bubble) bubble.classList.add('clippy-hidden');
    setTimeout(function() {
      var i = document.getElementById('clippy-input');
      if (i) i.focus();
    }, 100);
    if (!greeted) {
      greeted = true;
      showContextHint();
    }
  } else {
    chat.classList.add('clippy-hidden');
    resetClippy();
  }
}

function resetClippy() {
  chatHistory = [];
  botMsgCount = 0;
  var fbr = document.getElementById("clippy-file-btn");
  if (fbr) fbr.classList.add("clippy-hidden");
  lastSTLData = null;
  lastSTLFile = null;
  lastSTLBuffer = null;
  currentMaterial = 'PLA';
  currentInfill = 20;
  greeted = false;

  var msgs = document.getElementById('clippy-messages');
  if (msgs) {
    msgs.innerHTML = '<div class="clippy-msg clippy-bot"><span id="clippy-greeting"></span></div>';
    var greetEl = document.getElementById('clippy-greeting');
    if (greetEl) greetEl.innerHTML = t('greeting');

    // Flow neu starten
    clippyFlow.reset();
    clippyFlow.start();
  }
}

function showContextHint() {
  var path = window.location.pathname;
  var lang = clippyLang();
  var keys = Object.keys(T.contextHints);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (path.includes(key)) {
      var hints = T.contextHints[key];
      var hint = hints[lang] || hints.de;
      if (hint) setTimeout(function() { appendBot(hint); }, 600);
      return;
    }
  }
}

/* ═══════════════════════════════════════════════════════════════════════════
   §17  IDLE ANIMATIONEN
   ═══════════════════════════════════════════════════════════════════════════ */

function blink() {
  var lL = document.querySelector('.clippy-lid-l');
  var lR = document.querySelector('.clippy-lid-r');
  if (!lL) return;
  lL.setAttribute('ry', '10');
  lR.setAttribute('ry', '10');
  setTimeout(function() {
    lL.setAttribute('ry', '0');
    lR.setAttribute('ry', '0');
  }, 150);
}

function doubleBlink() {
  blink();
  setTimeout(blink, 300);
}

function lookAround() {
  var pL = document.querySelector('.clippy-pupil-l');
  var pR = document.querySelector('.clippy-pupil-r');
  var gL = document.querySelector('.clippy-glint-l');
  var gR = document.querySelector('.clippy-glint-r');
  if (!pL) return;

  var dirs = [
    { px: -2, py: 0, gx: -1, gy: -2 },
    { px: 2, py: 0, gx: 3, gy: -2 },
    { px: 0, py: -2, gx: 1, gy: -4 },
    { px: 0, py: 2, gx: 1, gy: 0 },
    { px: 0, py: 0, gx: 1, gy: -2 },
  ];
  var d = dirs[Math.floor(Math.random() * dirs.length)];

  pL.setAttribute('cx', 43 + d.px); pL.setAttribute('cy', 56 + d.py);
  pR.setAttribute('cx', 59 + d.px); pR.setAttribute('cy', 56 + d.py);
  gL.setAttribute('cx', 44 + d.gx); gL.setAttribute('cy', 54 + d.gy);
  gR.setAttribute('cx', 60 + d.gx); gR.setAttribute('cy', 54 + d.gy);

  setTimeout(function() {
    pL.setAttribute('cx', '43'); pL.setAttribute('cy', '56');
    pR.setAttribute('cx', '59'); pR.setAttribute('cy', '56');
    gL.setAttribute('cx', '44'); gL.setAttribute('cy', '54');
    gR.setAttribute('cx', '60'); gR.setAttribute('cy', '54');
  }, 1500 + Math.random() * 1000);
}

function wiggle() {
  var tog = document.getElementById('clippy-toggle');
  if (!tog) return;
  tog.classList.add('clippy-wiggle');
  setTimeout(function() { tog.classList.remove('clippy-wiggle'); }, 600);
}

function raiseBrows() {
  var bL = document.querySelector('.clippy-brow-l');
  var bR = document.querySelector('.clippy-brow-r');
  if (!bL) return;
  bL.setAttribute('d', 'M34 40 Q42 34 50 40');
  bR.setAttribute('d', 'M50 40 Q58 34 66 40');
  setTimeout(function() {
    bL.setAttribute('d', 'M34 44 Q42 38 50 44');
    bR.setAttribute('d', 'M50 44 Q58 38 66 44');
  }, 800);
}

function showTip() {
  var chat = document.getElementById('clippy-chat');
  if (!chat || !chat.classList.contains('clippy-hidden')) return;
  var bubble = document.getElementById('clippy-bubble');
  var text = document.getElementById('clippy-bubble-text');
  if (!bubble || !text) return;

  var tips = T.idleTips[clippyLang()] || T.idleTips.de;
  var idx;
  do {
    idx = Math.floor(Math.random() * tips.length);
  } while (idx === lastTipIndex && tips.length > 1);
  lastTipIndex = idx;

  text.innerHTML = tips[idx];
  bubble.classList.remove('clippy-hidden');
  wiggle();
  setTimeout(function() { bubble.classList.add('clippy-hidden'); }, 6000);
}

function startIdle() {
  setInterval(function() {
    if (Math.random() < 0.4) blink();
  }, 3000);
  setInterval(function() {
    var actions = [blink, blink, doubleBlink, lookAround, lookAround, wiggle, raiseBrows];
    actions[Math.floor(Math.random() * actions.length)]();
  }, 4000 + Math.random() * 4000);
  setInterval(function() {
    if (Math.random() < 0.5) showTip();
  }, 20000 + Math.random() * 20000);
  setTimeout(showTip, 8000);
}

// Mouse-follow for pupils
document.addEventListener('mousemove', function(e) {
  var svg = document.getElementById('clippy-svg');
  if (!svg) return;
  var rect = svg.getBoundingClientRect();
  var dx = Math.max(-2.5, Math.min(2.5, (e.clientX - (rect.left + rect.width / 2)) / window.innerWidth * 3));
  var dy = Math.max(-2, Math.min(2, (e.clientY - (rect.top + rect.height * 0.35)) / window.innerHeight * 2));
  var pL = document.querySelector('.clippy-pupil-l');
  var pR = document.querySelector('.clippy-pupil-r');
  if (pL && pR) {
    pL.setAttribute('cx', 43 + dx);
    pL.setAttribute('cy', 56 + dy);
    pR.setAttribute('cx', 59 + dx);
    pR.setAttribute('cy', 56 + dy);
  }
});

/* ═══════════════════════════════════════════════════════════════════════════
   §18  CLIPPY WIDGET (HTML INJECTION)
   ═══════════════════════════════════════════════════════════════════════════ */

(function createClippyWidget() {
  if (document.getElementById('clippy-container')) return;

  var html = '\
  <div id="clippy-container" class="clippy-container">\
    <div id="clippy-chat" class="clippy-chat clippy-hidden">\
      <div class="clippy-header">\
        <span>📎 Clippy — PitA Assistent</span>\
        <button id="clippy-close-btn" class="clippy-close" aria-label="Schließen">✕</button>\
      </div>\
      <div id="clippy-messages" class="clippy-messages">\
        <div class="clippy-msg clippy-bot"><span id="clippy-greeting"></span></div>\
      </div>\
        <label class="clippy-file-btn clippy-hidden" id="clippy-file-btn" title="Datei hochladen (optional, nach Angebot)">\
          📂\
          <input type="file" id="clippy-file-input" accept=".stl,.3mf,.obj,.svg,.dxf" style="display:none">\
        </label>\
        <input type="text" id="clippy-input" autocomplete="off">\
        <button id="clippy-send" aria-label="Senden">➤</button>\
      </div>\
    </div>\
    <div id="clippy-bubble" class="clippy-bubble clippy-hidden">\
      <span id="clippy-bubble-text"></span>\
    </div>\
    <button id="clippy-toggle" class="clippy-toggle" aria-label="Clippy">\
      <svg viewBox="0 0 100 160" width="56" height="84" class="clippy-svg" id="clippy-svg">\
        <ellipse cx="50" cy="95" rx="18" ry="50" fill="none" stroke="#5C5C5C" stroke-width="8" stroke-linecap="round"/>\
        <ellipse cx="42" cy="55" rx="8" ry="10" fill="white" stroke="#888" stroke-width="2"/>\
        <ellipse cx="43" cy="56" rx="3.5" ry="4.5" fill="#222" class="clippy-pupil-l"/>\
        <ellipse cx="44" cy="54" rx="1.5" ry="2" fill="white" class="clippy-glint-l"/>\
        <ellipse cx="42" cy="55" rx="8" ry="0" fill="#E8A000" class="clippy-lid-l"/>\
        <ellipse cx="58" cy="55" rx="8" ry="10" fill="white" stroke="#888" stroke-width="2"/>\
        <ellipse cx="59" cy="56" rx="3.5" ry="4.5" fill="#222" class="clippy-pupil-r"/>\
        <ellipse cx="60" cy="54" rx="1.5" ry="2" fill="white" class="clippy-glint-r"/>\
        <ellipse cx="58" cy="55" rx="8" ry="0" fill="#E8A000" class="clippy-lid-r"/>\
        <path d="M34 44 Q42 38 50 44" fill="none" stroke="#666" stroke-width="2.5" stroke-linecap="round" class="clippy-brow-l"/>\
        <path d="M50 44 Q58 38 66 44" fill="none" stroke="#666" stroke-width="2.5" stroke-linecap="round" class="clippy-brow-r"/>\
        <path d="M42 70 Q50 78 58 70" fill="none" stroke="#666" stroke-width="2.5" stroke-linecap="round" class="clippy-mouth"/>\
      </svg>\
      <span class="clippy-label">Frag mich!</span>\
    </button>\
  </div>';

  document.body.insertAdjacentHTML('beforeend', html);

  // Set texts
  var greetEl = document.getElementById('clippy-greeting');
  if (greetEl) greetEl.innerHTML = t('greeting');

  var inp = document.getElementById('clippy-input');
  if (inp) inp.placeholder = t('placeholder');

  // Strukturierten Flow starten
  clippyFlow.start();

  // Event listeners
  document.getElementById('clippy-toggle').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleClippy();
  });
  document.getElementById('clippy-close-btn').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleClippy();
  });
  document.getElementById('clippy-send').addEventListener('click', function(e) {
    e.preventDefault();
    sendClippy();
  });
  inp.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') sendClippy();
  });
  document.getElementById('clippy-file-input').addEventListener('change', function(e) {
    if (e.target.files[0]) handleFile(e.target.files[0]);
  });

  // Drag & Drop deaktiviert

  // Language change listener (from i18n.js)
  document.addEventListener('pita-lang-changed', function() {
    var greetEl2 = document.getElementById('clippy-greeting');
    if (greetEl2) greetEl2.innerHTML = t('greeting');
    var langInp = document.getElementById('clippy-input');
    if (langInp) langInp.placeholder = t('placeholder');
    // Sprache geändert
  });

  // Start idle animations
  startIdle();
})();
