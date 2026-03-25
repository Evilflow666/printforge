(function () {
  'use strict';

  if (document.getElementById('clippy-container')) return;

  function clippyLang() {
    var stored = localStorage.getItem('pita-lang');
    if (stored) return stored;
    var browser = (navigator.language || 'de').slice(0,2);
    var supported = ['de','en','fr','es','it'];
    return supported.indexOf(browser) >= 0 ? browser : 'de';
  }

  function clippyBase() {
    var path = window.location.pathname;
    if (path.includes('/produkte/') || path.includes('/leistungen/')) return '../';
    return '';
  }

  var OLLAMA_URL = 'http://69.62.105.159:32768/api/chat';

  var VOLUME_MAP = { stamp: 5, phone: 80, shoebox: 800, bigger: 1600 };
  var AREA_MAP = { card: 46, a5: 311, a4: 623, bigger: 1200 };
  var PERIMETER_MAP = { card: 27.8, a5: 71.6, a4: 101.4, bigger: 160 };

  var UI = {
    de: {
      title: 'Clippy - PitA Assistent',
      openLabel: 'Frag mich!',
      placeholder: 'Nachricht schreiben...',
      send: 'Senden',
      fileTitle: 'Datei hochladen (STL/SVG)',
      intro: 'Ich stelle dir 4 kurze Fragen und berechne sofort einen Preisrahmen.',
      typing: 'Clippy tippt...',
      warmupErr: 'Warmup fehlgeschlagen',
      fileReady: 'Datei erkannt. Ich habe exakte Werte berechnet:',
      fileErr: 'Datei konnte nicht gelesen werden.',
      askFirst: 'Bitte beantworte zuerst die 4 Fragen, dann kann ich den Preis direkt berechnen.',
      enableChat: 'Alles klar. Stell deine Fragen, ich schalte jetzt den Live-Chat ein.',
      chatLocked: 'Für den Sofortpreis nutze ich lokale Berechnung. Für freie Fragen bitte auf "💬 Ich hab noch Fragen" klicken.',
      filePrompt: '💡 Hast du eine 3D-Datei (STL/SVG)? Dann kann ich genauer rechnen!',
      shipping: 'Versand DE: 4.90€ | EU: 7.90€\nLieferzeit: 2-5 Werktage (Einzelteile), 5-10 (Kleinserien)',
      contactMsg: 'Ich leite dich zum Anfragebereich weiter.',
      stlFor3d: 'STL passt am besten für 3D-Druck. Bei Laser bitte SVG hochladen.',
      svgForLaser: 'SVG passt am besten für Laser. Bei 3D-Druck bitte STL hochladen.',
      foodWarn: 'Hinweis: Lebensmittelkontakt ist bei diesem Verfahren/Material nur eingeschränkt geeignet.',
      materialAdvice: {
        decor: 'Für Deko empfehle ich PLA Matte (versteckt Layerlines) oder PLA Silk für metallischen Glanz. Wenn du unsicher bist, PLA Basic ist immer eine gute Wahl!',
        functional: 'Für funktionale Teile empfehle ich PETG — robust, langlebig und lebensmittelecht. Für extra Steifigkeit: PETG-CF.',
        industry: 'Für industrielle Anwendungen empfehle ich ABS (hitzebeständig) oder PA6-CF für maximale Belastbarkeit.',
        outdoor: 'Für Outdoor ist ASA die beste Wahl — UV-stabil und wetterbeständig. PETG geht auch gut.',
        food: 'Für Lebensmittelkontakt empfehle ich PETG — das ist am besten geeignet. Bitte beachte: 3D-Druck ist nur bedingt lebensmittelecht.'
      },
      resultTitle: '📊 Deine Schätzung:',
      exactTitle: '📊 Exakte Berechnung:',
      materials: {
        pla: 'PLA (preiswert, ideal für Deko)',
        petg: 'PETG (wetterbeständig, robust)',
        abs: 'ABS (industrienah, temperaturstabil)',
        pla_matte: 'PLA Matte (ohne Layerlines)',
        pla_silk: 'PLA Silk (Metallic-Glanz)',
        pla_marble: 'PLA Marble (Steinoptik)',
        pla_cf: 'PLA-CF (Carbon-verstärkt)',
        petg_hf: 'PETG HF (High-Speed)',
        petg_cf: 'PETG-CF (Carbon, leicht)',
        asa: 'ASA (UV-stabil, Outdoor)',
        tpu: 'TPU 95A (flexibel)',
        pa: 'PA Nylon (belastbar)',
        pa_cf: 'PA6-CF (Engineering)',
        ppa_cf: 'PPA-CF (Hochtemperatur)',
        pet_cf: 'PET-CF (nachhaltig, stark)',
        pc: 'PC Polycarbonat (schlagfest)',
        resin_std: 'Standard Resin',
        resin_tough: 'Tough Resin',
        wood3: 'Holz 3mm',
        acryl3: 'Acryl 3mm',
        acryl6: 'Acryl 6mm',
        wood: 'Holz',
        metal_acryl: 'Metall/Acryl'
      },
      process: {
        fdm: 'FDM 3D-Druck',
        resin: 'Resin-Druck',
        laser_cut: 'Laser schneiden',
        laser_engrave: 'Laser gravieren',
        prototype: 'Prototyp/Beratung'
      },
      sizeLabel3d: {
        stamp: '~Briefmarke (5cm³)',
        phone: '~Smartphone (80cm³)',
        shoebox: '~Schuhkarton (800cm³)',
        bigger: 'Größer (~1600cm³)'
      },
      sizeLabelLaser: {
        card: '~Visitenkarte (46cm²)',
        a5: '~DIN A5 (311cm²)',
        a4: '~DIN A4 (623cm²)',
        bigger: 'Größer (~1200cm²)'
      },
      actionButtons: {
        upload: '📂 Datei hochladen für exakten Preis',
        ask: '💬 Ich hab noch Fragen',
        contact: '📧 Anfrage senden'
      },
      productSuggestions: {
        intro: 'Schau dir auch unsere fertigen Produkte an:',
        browseIntro: 'Klar, hier kannst du direkt durch unsere Produktkategorien stöbern:',
        fdm: '🛒 Fertige FDM-Produkte ansehen',
        laser: '✂️ Lasercut-Sortiment ansehen',
        all: '📦 Alle Produkte'
      },
      q: {
        need: {
          key: 'service',
          text: 'Was brauchst du?',
          options: [
            { id: 'browse', label: '🛒 Produkte durchstöbern' },
            { id: 'fdm', label: '🖨️ FDM 3D-Druck' },
            { id: 'resin', label: '🧪 Resin-Druck' },
            { id: 'laser_cut', label: '✂️ Laser schneiden' },
            { id: 'laser_engrave', label: '🔥 Laser gravieren' },
            { id: 'prototype', label: '🔩 Prototyp/Beratung' }
          ]
        },
        usage: {
          key: 'usage',
          text: 'Wofür wird es genutzt?',
          options: [
            { id: 'decor', label: '🎨 Deko/Display' },
            { id: 'functional', label: '🔧 Funktional/Mechanisch' },
            { id: 'industry', label: '🏭 Industrie/Werkstatt' },
            { id: 'outdoor', label: '🌧️ Outdoor/Wetter' },
            { id: 'food', label: '🍽️ Lebensmittelkontakt' }
          ]
        },
        size3d: {
          key: 'size',
          text: 'Wie groß ungefähr?',
          options: [
            { id: 'stamp', label: '📱 Briefmarke (~3×4cm)' },
            { id: 'phone', label: '📱 Smartphone (~15×7cm)' },
            { id: 'shoebox', label: '👟 Schuhkarton (~34×21cm)' },
            { id: 'bigger', label: '📦 Größer' }
          ]
        },
        sizeLaser: {
          key: 'size',
          text: 'Wie groß ungefähr?',
          options: [
            { id: 'card', label: '🏷️ Visitenkarte (85×54mm)' },
            { id: 'a5', label: '📄 DIN A5 (210×148mm)' },
            { id: 'a4', label: '📄 DIN A4 (297×210mm)' },
            { id: 'bigger', label: '📐 Größer' }
          ]
        },
        qty: {
          key: 'qty_finish',
          text: 'Wie viele + Finish?',
          options: [
            { id: '1_raw', label: '1 Stück roh' },
            { id: '1_sanded', label: '1 Stück geschliffen' },
            { id: '2_5', label: '2-5 Stück' },
            { id: '6_20', label: '6-20 Stück' },
            { id: '20_plus', label: '20+ Stück' }
          ]
        },

        material: {
          key: 'material',
          text: 'Welches Material?',
          options: [
            { id: 'pla', label: '🟢 PLA Basic (Standard)' },
            { id: 'pla_matte', label: '⚪ PLA Matte (keine Layerlines)' },
            { id: 'pla_silk', label: '✨ PLA Silk (Metallic-Glanz)' },
            { id: 'pla_marble', label: '🪨 PLA Marble (Steinoptik)' },
            { id: 'petg', label: '🔵 PETG (robust, Outdoor)' },
            { id: 'petg_hf', label: '⚡ PETG HF (High-Speed)' },
            { id: 'abs', label: '🟡 ABS (hitzebeständig)' },
            { id: 'asa', label: '🟠 ASA (UV-stabil, Outdoor)' },
            { id: 'tpu', label: '🟣 TPU 95A (flexibel)' },
            { id: 'pla_cf', label: '⚫ PLA-CF (Carbon-verstärkt)' },
            { id: 'petg_cf', label: '🔷 PETG-CF (Carbon, leicht)' },
            { id: 'pa_cf', label: '🟤 PA6-CF (Engineering)' },
            { id: 'pc', label: '⬜ PC (Polycarbonat)' },
            { id: 'unsure', label: '🤔 Bin mir unsicher' }
          ]
        },
        color: {
          key: 'color',
          text: 'Welche Farbe?',
          options: [
            { id: 'white', label: '⬜ Weiß' },
            { id: 'black', label: '⬛ Schwarz' },
            { id: 'gray', label: '🩶 Grau' },
            { id: 'red', label: '🟥 Rot' },
            { id: 'blue', label: '🟦 Blau' },
            { id: 'green', label: '🟩 Grün' },
            { id: 'gold', label: '🥇 Gold / Kupfer' },
            { id: 'custom', label: '🎨 Andere / nach Absprache' }
          ]
        }
      }
    },
    en: {
      title: 'Clippy - PitA Assistant',
      openLabel: 'Ask me!',
      placeholder: 'Write a message...',
      send: 'Send',
      fileTitle: 'Upload file (STL/SVG)',
      intro: 'I will ask 4 short questions and calculate a price instantly.',
      typing: 'Clippy is typing...',
      warmupErr: 'Warmup failed',
      fileReady: 'File detected. I calculated exact values:',
      fileErr: 'Could not read file.',
      askFirst: 'Please answer the 4 questions first so I can calculate instantly.',
      enableChat: 'Done. Ask anything, live chat is now enabled.',
      chatLocked: 'Instant pricing is local-only. For free chat, click "💬 I still have questions" first.',
      filePrompt: '💡 Got a 3D file (STL/SVG)? I can calculate more precisely.',
      shipping: 'Shipping DE: 4.90€ | EU: 7.90€\nLead time: 2-5 business days (single parts), 5-10 (small series)',
      contactMsg: 'Opening the inquiry section.',
      stlFor3d: 'STL is best for 3D print parts. For laser, please upload SVG.',
      svgForLaser: 'SVG is best for laser jobs. For 3D print, please upload STL.',
      foodWarn: 'Note: food contact is only limited/restricted with this process/material.',
      materialAdvice: {
        decor: 'For decor, I recommend PLA Matte (hides layer lines) or PLA Silk for metallic shine. If you are unsure, PLA Basic is always a good choice!',
        functional: 'For functional parts, I recommend PETG — robust, durable, and food-safe. For extra stiffness: PETG-CF.',
        industry: 'For industrial applications, I recommend ABS (heat-resistant) or PA6-CF for maximum load capacity.',
        outdoor: 'For outdoor use, ASA is the best choice — UV-stable and weather-resistant. PETG also works well.',
        food: 'For food contact, I recommend PETG — it is the most suitable option. Please note: 3D printing is only conditionally food-safe.'
      },
      resultTitle: '📊 Your estimate:',
      exactTitle: '📊 Exact calculation:',
      materials: {
        pla: 'PLA (cost-effective, good for display)',
        petg: 'PETG (weather resistant, strong)',
        abs: 'ABS (industrial, temperature stable)',
        pla_matte: 'PLA Matte (no layer lines)',
        pla_silk: 'PLA Silk (metallic shine)',
        pla_marble: 'PLA Marble (stone look)',
        pla_cf: 'PLA-CF (carbon reinforced)',
        petg_hf: 'PETG HF (high-speed)',
        petg_cf: 'PETG-CF (carbon, light)',
        asa: 'ASA (UV stable, outdoor)',
        tpu: 'TPU 95A (flexible)',
        pa: 'PA Nylon (load-bearing)',
        pa_cf: 'PA6-CF (engineering)',
        ppa_cf: 'PPA-CF (high-temp)',
        pet_cf: 'PET-CF (sustainable, strong)',
        pc: 'PC Polycarbonate (impact resistant)',
        resin_std: 'Standard Resin',
        resin_tough: 'Tough Resin',
        wood3: 'Wood 3mm',
        acryl3: 'Acrylic 3mm',
        acryl6: 'Acrylic 6mm',
        wood: 'Wood',
        metal_acryl: 'Metal/Acrylic'
      },
      process: {
        fdm: 'FDM 3D Print',
        resin: 'Resin Print',
        laser_cut: 'Laser Cutting',
        laser_engrave: 'Laser Engraving',
        prototype: 'Prototype/Consulting'
      },
      sizeLabel3d: {
        stamp: '~Stamp (5cm³)',
        phone: '~Smartphone (80cm³)',
        shoebox: '~Shoebox (800cm³)',
        bigger: 'Larger (~1600cm³)'
      },
      sizeLabelLaser: {
        card: '~Business card (46cm²)',
        a5: '~DIN A5 (311cm²)',
        a4: '~DIN A4 (623cm²)',
        bigger: 'Larger (~1200cm²)'
      },
      actionButtons: {
        upload: '📂 Upload file for exact price',
        ask: '💬 I still have questions',
        contact: '📧 Send inquiry'
      },
      productSuggestions: {
        intro: 'Take a look at our ready-made products too:',
        browseIntro: 'Sure, you can browse our product categories here:',
        fdm: '🛒 View ready-made FDM products',
        laser: '✂️ View laser cut collection',
        all: '📦 All products'
      },
      q: {
        need: {
          key: 'service',
          text: 'What do you need?',
          options: [
            { id: 'browse', label: '🛒 Browse products' },
            { id: 'fdm', label: '🖨️ FDM 3D Print' },
            { id: 'resin', label: '🧪 Resin Print' },
            { id: 'laser_cut', label: '✂️ Laser Cutting' },
            { id: 'laser_engrave', label: '🔥 Laser Engraving' },
            { id: 'prototype', label: '🔩 Prototype/Consulting' }
          ]
        },
        usage: {
          key: 'usage',
          text: 'What is it used for?',
          options: [
            { id: 'decor', label: '🎨 Decor/Display' },
            { id: 'functional', label: '🔧 Functional/Mechanical' },
            { id: 'industry', label: '🏭 Industry/Workshop' },
            { id: 'outdoor', label: '🌧️ Outdoor/Weather' },
            { id: 'food', label: '🍽️ Food Contact' }
          ]
        },
        size3d: {
          key: 'size',
          text: 'Approximate size?',
          options: [
            { id: 'stamp', label: '📱 Stamp (~3×4cm)' },
            { id: 'phone', label: '📱 Smartphone (~15×7cm)' },
            { id: 'shoebox', label: '👟 Shoebox (~34×21cm)' },
            { id: 'bigger', label: '📦 Larger' }
          ]
        },
        sizeLaser: {
          key: 'size',
          text: 'Approximate size?',
          options: [
            { id: 'card', label: '🏷️ Business card (85×54mm)' },
            { id: 'a5', label: '📄 DIN A5 (210×148mm)' },
            { id: 'a4', label: '📄 DIN A4 (297×210mm)' },
            { id: 'bigger', label: '📐 Larger' }
          ]
        },
        qty: {
          key: 'qty_finish',
          text: 'Quantity + finish?',
          options: [
            { id: '1_raw', label: '1 part raw' },
            { id: '1_sanded', label: '1 part sanded' },
            { id: '2_5', label: '2-5 parts' },
            { id: '6_20', label: '6-20 parts' },
            { id: '20_plus', label: '20+ parts' }
          ]
        },
        material: {
          key: 'material',
          text: 'Which material?',
          options: [
            { id: 'pla', label: '🟢 PLA Basic (standard)' },
            { id: 'pla_matte', label: '⚪ PLA Matte (no layer lines)' },
            { id: 'pla_silk', label: '✨ PLA Silk (metallic shine)' },
            { id: 'pla_marble', label: '🪨 PLA Marble (stone look)' },
            { id: 'petg', label: '🔵 PETG (robust, outdoor)' },
            { id: 'petg_hf', label: '⚡ PETG HF (high-speed)' },
            { id: 'abs', label: '🟡 ABS (heat resistant)' },
            { id: 'asa', label: '🟠 ASA (UV stable, outdoor)' },
            { id: 'tpu', label: '🟣 TPU 95A (flexible)' },
            { id: 'pla_cf', label: '⚫ PLA-CF (carbon reinforced)' },
            { id: 'petg_cf', label: '🔷 PETG-CF (carbon, light)' },
            { id: 'pa_cf', label: '🟤 PA6-CF (engineering)' },
            { id: 'pc', label: '⬜ PC (polycarbonate)' },
            { id: 'unsure', label: '🤔 Not sure' }
          ]
        },
        color: {
          key: 'color',
          text: 'What color?',
          options: [
            { id: 'white', label: '⬜ White' },
            { id: 'black', label: '⬛ Black' },
            { id: 'gray', label: '🩶 Gray' },
            { id: 'red', label: '🟥 Red' },
            { id: 'blue', label: '🟦 Blue' },
            { id: 'green', label: '🟩 Green' },
            { id: 'gold', label: '🥇 Gold / Copper' },
            { id: 'custom', label: '🎨 Other / on request' }
          ]
        }
      }
    },
    fr: {
      title: 'Clippy - Assistant PitA',
      openLabel: 'Demandez-moi!',
      placeholder: 'Ecrire un message...',
      send: 'Envoyer',
      fileTitle: 'Televerser un fichier (STL/SVG)',
      intro: 'Je pose 4 questions et je calcule le prix instantanement.',
      typing: 'Clippy ecrit...',
      warmupErr: 'Echec du warmup',
      fileReady: 'Fichier detecte. Calcul exact effectue:',
      fileErr: 'Impossible de lire le fichier.',
      askFirst: 'Repondez d abord aux 4 questions pour un calcul instantane.',
      enableChat: 'Parfait. Le chat libre est maintenant actif.',
      chatLocked: 'Le prix instantane est calcule localement. Pour discuter, cliquez "💬 J ai encore des questions".',
      filePrompt: '💡 Vous avez un fichier 3D (STL/SVG)? Je peux etre plus precis.',
      shipping: 'Livraison DE: 4.90€ | UE: 7.90€\nDelai: 2-5 jours ouvres (pieces uniques), 5-10 (petites series)',
      contactMsg: 'Ouverture de la section demande.',
      stlFor3d: 'STL est ideal pour impression 3D. Pour laser, envoyez SVG.',
      svgForLaser: 'SVG est ideal pour laser. Pour impression 3D, envoyez STL.',
      foodWarn: 'Note: contact alimentaire limite avec ce procede/materiau.',
      materialAdvice: {
        decor: 'Pour la deco, je recommande PLA Matte (cache les lignes de couche) ou PLA Silk pour un brillant metallique. Si vous hesitez, PLA Basic est toujours un bon choix.',
        functional: 'Pour des pieces fonctionnelles, je recommande PETG — robuste, durable et apte au contact alimentaire. Pour plus de rigidite: PETG-CF.',
        industry: 'Pour des applications industrielles, je recommande ABS (resistant a la chaleur) ou PA6-CF pour une resistance maximale.',
        outdoor: 'Pour l exterieur, ASA est le meilleur choix — stable aux UV et resistant aux intemperies. PETG fonctionne aussi tres bien.',
        food: 'Pour le contact alimentaire, je recommande PETG — c est l option la plus adaptee. Notez que l impression 3D n est que partiellement apte au contact alimentaire.'
      },
      resultTitle: '📊 Votre estimation:',
      exactTitle: '📊 Calcul exact:',
      materials: {
        pla: 'PLA (economique, ideal deco)',
        petg: 'PETG (resistant meteo, robuste)',
        abs: 'ABS (industriel, stable chaleur)',
        pla_matte: 'PLA Mat (sans lignes)',
        pla_silk: 'PLA Silk (brillant metallique)',
        pla_marble: 'PLA Marbre (aspect pierre)',
        pla_cf: 'PLA-CF (carbone)',
        petg_hf: 'PETG HF (haute vitesse)',
        petg_cf: 'PETG-CF (carbone, leger)',
        asa: 'ASA (UV stable, exterieur)',
        tpu: 'TPU 95A (flexible)',
        pa: 'PA Nylon (resistant)',
        pa_cf: 'PA6-CF (ingenierie)',
        ppa_cf: 'PPA-CF (haute temperature)',
        pet_cf: 'PET-CF (durable, solide)',
        pc: 'PC Polycarbonate (resistant chocs)',
        resin_std: 'Resine standard',
        resin_tough: 'Resine tough',
        wood3: 'Bois 3mm',
        acryl3: 'Acrylique 3mm',
        acryl6: 'Acrylique 6mm',
        wood: 'Bois',
        metal_acryl: 'Metal/Acrylique'
      },
      process: {
        fdm: 'Impression 3D FDM',
        resin: 'Impression resine',
        laser_cut: 'Decoupe laser',
        laser_engrave: 'Gravure laser',
        prototype: 'Prototype/Conseil'
      },
      sizeLabel3d: { stamp: '~Timbre (5cm³)', phone: '~Smartphone (80cm³)', shoebox: '~Boite a chaussures (800cm³)', bigger: 'Plus grand (~1600cm³)' },
      sizeLabelLaser: { card: '~Carte de visite (46cm²)', a5: '~DIN A5 (311cm²)', a4: '~DIN A4 (623cm²)', bigger: 'Plus grand (~1200cm²)' },
      actionButtons: {
        upload: '📂 Televerser un fichier pour prix exact',
        ask: '💬 J ai encore des questions',
        contact: '📧 Envoyer une demande'
      },
      productSuggestions: {
        intro: 'Regardez aussi nos produits finis :',
        browseIntro: 'Bien sûr, voici nos catégories de produits :',
        fdm: '🛒 Voir les produits FDM finis',
        laser: '✂️ Voir la collection découpe laser',
        all: '📦 Tous les produits'
      },
      q: {
        need: {
          key: 'service',
          text: 'De quoi avez-vous besoin?',
          options: [
            { id: 'browse', label: '🛒 Parcourir les produits' },
            { id: 'fdm', label: '🖨️ Impression 3D FDM' },
            { id: 'resin', label: '🧪 Impression resine' },
            { id: 'laser_cut', label: '✂️ Decoupe laser' },
            { id: 'laser_engrave', label: '🔥 Gravure laser' },
            { id: 'prototype', label: '🔩 Prototype/Conseil' }
          ]
        },
        usage: {
          key: 'usage',
          text: 'Usage principal?',
          options: [
            { id: 'decor', label: '🎨 Deco/Presentation' },
            { id: 'functional', label: '🔧 Fonctionnel/Mecanique' },
            { id: 'industry', label: '🏭 Industrie/Atelier' },
            { id: 'outdoor', label: '🌧️ Exterieur/Meteo' },
            { id: 'food', label: '🍽️ Contact alimentaire' }
          ]
        },
        size3d: {
          key: 'size',
          text: 'Quelle taille environ?',
          options: [
            { id: 'stamp', label: '📱 Timbre (~3×4cm)' },
            { id: 'phone', label: '📱 Smartphone (~15×7cm)' },
            { id: 'shoebox', label: '👟 Boite a chaussures (~34×21cm)' },
            { id: 'bigger', label: '📦 Plus grand' }
          ]
        },
        sizeLaser: {
          key: 'size',
          text: 'Quelle taille environ?',
          options: [
            { id: 'card', label: '🏷️ Carte de visite (85×54mm)' },
            { id: 'a5', label: '📄 DIN A5 (210×148mm)' },
            { id: 'a4', label: '📄 DIN A4 (297×210mm)' },
            { id: 'bigger', label: '📐 Plus grand' }
          ]
        },
        qty: {
          key: 'qty_finish',
          text: 'Quantite + finition?',
          options: [
            { id: '1_raw', label: '1 piece brute' },
            { id: '1_sanded', label: '1 piece poncee' },
            { id: '2_5', label: '2-5 pieces' },
            { id: '6_20', label: '6-20 pieces' },
            { id: '20_plus', label: '20+ pieces' }
          ]
        },

        material: {
          key: 'material',
          text: 'Which material?',
          options: [
            { id: 'pla', label: '🟢 PLA Basic (standard)' },
            { id: 'pla_matte', label: '⚪ PLA Matte (no layer lines)' },
            { id: 'pla_silk', label: '✨ PLA Silk (metallic shine)' },
            { id: 'pla_marble', label: '🪨 PLA Marble (stone look)' },
            { id: 'petg', label: '🔵 PETG (robust, outdoor)' },
            { id: 'petg_hf', label: '⚡ PETG HF (high-speed)' },
            { id: 'abs', label: '🟡 ABS (heat resistant)' },
            { id: 'asa', label: '🟠 ASA (UV stable, outdoor)' },
            { id: 'tpu', label: '🟣 TPU 95A (flexible)' },
            { id: 'pla_cf', label: '⚫ PLA-CF (carbon reinforced)' },
            { id: 'petg_cf', label: '🔷 PETG-CF (carbon, light)' },
            { id: 'pa_cf', label: '🟤 PA6-CF (engineering)' },
            { id: 'pc', label: '⬜ PC (polycarbonate)' },
            { id: 'unsure', label: '🤔 Not sure' }
          ]
        },
        color: {
          key: 'color',
          text: 'What color?',
          options: [
            { id: 'white', label: '⬜ White' },
            { id: 'black', label: '⬛ Black' },
            { id: 'gray', label: '🩶 Gray' },
            { id: 'red', label: '🟥 Red' },
            { id: 'blue', label: '🟦 Blue' },
            { id: 'green', label: '🟩 Green' },
            { id: 'gold', label: '🥇 Gold / Copper' },
            { id: 'custom', label: '🎨 Other / on request' }
          ]
        }
      }
    },
    es: {
      title: 'Clippy - Asistente PitA',
      openLabel: 'Preguntame!',
      placeholder: 'Escribe un mensaje...',
      send: 'Enviar',
      fileTitle: 'Subir archivo (STL/SVG)',
      intro: 'Hare 4 preguntas y calculare el precio al instante.',
      typing: 'Clippy escribiendo...',
      warmupErr: 'Fallo de warmup',
      fileReady: 'Archivo detectado. Calculo exacto listo:',
      fileErr: 'No se pudo leer el archivo.',
      askFirst: 'Responde primero las 4 preguntas para calcular al instante.',
      enableChat: 'Perfecto. El chat libre esta activado.',
      chatLocked: 'El precio instantaneo se calcula localmente. Para conversar, pulsa "💬 Tengo mas preguntas".',
      filePrompt: '💡 Tienes archivo 3D (STL/SVG)? Puedo calcular con mas precision.',
      shipping: 'Envio DE: 4.90€ | UE: 7.90€\nEntrega: 2-5 dias habiles (piezas sueltas), 5-10 (series pequenas)',
      contactMsg: 'Abriendo la seccion de solicitud.',
      stlFor3d: 'STL es mejor para impresion 3D. Para laser, sube SVG.',
      svgForLaser: 'SVG es mejor para laser. Para impresion 3D, sube STL.',
      foodWarn: 'Nota: contacto alimentario limitado con este proceso/material.',
      materialAdvice: {
        decor: 'Para decoracion, recomiendo PLA Matte (oculta lineas de capa) o PLA Silk para brillo metalico. Si no estas seguro, PLA Basic siempre es una buena opcion.',
        functional: 'Para piezas funcionales, recomiendo PETG — robusto, duradero y apto para contacto alimentario. Para mas rigidez: PETG-CF.',
        industry: 'Para aplicaciones industriales, recomiendo ABS (resistente al calor) o PA6-CF para carga maxima.',
        outdoor: 'Para exterior, ASA es la mejor opcion — estable a UV y resistente al clima. PETG tambien va muy bien.',
        food: 'Para contacto con alimentos, recomiendo PETG — es la opcion mas adecuada. Ten en cuenta: la impresion 3D solo es apta para alimentos de forma limitada.'
      },
      resultTitle: '📊 Tu estimacion:',
      exactTitle: '📊 Calculo exacto:',
      materials: {
        pla: 'PLA (economico, ideal para decoracion)',
        petg: 'PETG (resistente a clima, robusto)',
        abs: 'ABS (industrial, estable al calor)',
        pla_matte: 'PLA Mate (sin lineas)',
        pla_silk: 'PLA Silk (brillo metalico)',
        pla_marble: 'PLA Marmol (aspecto piedra)',
        pla_cf: 'PLA-CF (carbono)',
        petg_hf: 'PETG HF (alta velocidad)',
        petg_cf: 'PETG-CF (carbono, ligero)',
        asa: 'ASA (UV estable, exterior)',
        tpu: 'TPU 95A (flexible)',
        pa: 'PA Nylon (resistente)',
        pa_cf: 'PA6-CF (ingenieria)',
        ppa_cf: 'PPA-CF (alta temperatura)',
        pet_cf: 'PET-CF (sostenible, fuerte)',
        pc: 'PC Policarbonato (resistente impactos)',
        resin_std: 'Resina estandar',
        resin_tough: 'Resina tough',
        wood3: 'Madera 3mm',
        acryl3: 'Acrilico 3mm',
        acryl6: 'Acrilico 6mm',
        wood: 'Madera',
        metal_acryl: 'Metal/Acrilico'
      },
      process: {
        fdm: 'Impresion 3D FDM',
        resin: 'Impresion en resina',
        laser_cut: 'Corte laser',
        laser_engrave: 'Grabado laser',
        prototype: 'Prototipo/Consultoria'
      },
      sizeLabel3d: { stamp: '~Sello (5cm³)', phone: '~Smartphone (80cm³)', shoebox: '~Caja de zapatos (800cm³)', bigger: 'Mas grande (~1600cm³)' },
      sizeLabelLaser: { card: '~Tarjeta (46cm²)', a5: '~DIN A5 (311cm²)', a4: '~DIN A4 (623cm²)', bigger: 'Mas grande (~1200cm²)' },
      actionButtons: {
        upload: '📂 Subir archivo para precio exacto',
        ask: '💬 Tengo mas preguntas',
        contact: '📧 Enviar solicitud'
      },
      productSuggestions: {
        intro: 'Mira tambien nuestros productos terminados:',
        browseIntro: 'Claro, aqui puedes explorar nuestras categorias de productos:',
        fdm: '🛒 Ver productos FDM terminados',
        laser: '✂️ Ver catalogo de corte laser',
        all: '📦 Todos los productos'
      },
      q: {
        need: {
          key: 'service',
          text: 'Que necesitas?',
          options: [
            { id: 'browse', label: '🛒 Explorar productos' },
            { id: 'fdm', label: '🖨️ Impresion 3D FDM' },
            { id: 'resin', label: '🧪 Impresion en resina' },
            { id: 'laser_cut', label: '✂️ Corte laser' },
            { id: 'laser_engrave', label: '🔥 Grabado laser' },
            { id: 'prototype', label: '🔩 Prototipo/Consultoria' }
          ]
        },
        usage: {
          key: 'usage',
          text: 'Para que se usara?',
          options: [
            { id: 'decor', label: '🎨 Deco/Display' },
            { id: 'functional', label: '🔧 Funcional/Mecanico' },
            { id: 'industry', label: '🏭 Industria/Taller' },
            { id: 'outdoor', label: '🌧️ Exterior/Clima' },
            { id: 'food', label: '🍽️ Contacto alimentario' }
          ]
        },
        size3d: {
          key: 'size',
          text: 'Tamano aproximado?',
          options: [
            { id: 'stamp', label: '📱 Sello (~3×4cm)' },
            { id: 'phone', label: '📱 Smartphone (~15×7cm)' },
            { id: 'shoebox', label: '👟 Caja de zapatos (~34×21cm)' },
            { id: 'bigger', label: '📦 Mas grande' }
          ]
        },
        sizeLaser: {
          key: 'size',
          text: 'Tamano aproximado?',
          options: [
            { id: 'card', label: '🏷️ Tarjeta (85×54mm)' },
            { id: 'a5', label: '📄 DIN A5 (210×148mm)' },
            { id: 'a4', label: '📄 DIN A4 (297×210mm)' },
            { id: 'bigger', label: '📐 Mas grande' }
          ]
        },
        qty: {
          key: 'qty_finish',
          text: 'Cantidad + acabado?',
          options: [
            { id: '1_raw', label: '1 pieza en bruto' },
            { id: '1_sanded', label: '1 pieza lijada' },
            { id: '2_5', label: '2-5 piezas' },
            { id: '6_20', label: '6-20 piezas' },
            { id: '20_plus', label: '20+ piezas' }
          ]
        },

        material: {
          key: 'material',
          text: 'Que material?',
          options: [
            { id: 'pla', label: '🟢 PLA Basic (estandar)' },
            { id: 'pla_matte', label: '⚪ PLA Mate (sin lineas)' },
            { id: 'pla_silk', label: '✨ PLA Silk (brillo metalico)' },
            { id: 'pla_marble', label: '🪨 PLA Marmol (aspecto piedra)' },
            { id: 'petg', label: '🔵 PETG (robusto, exterior)' },
            { id: 'petg_hf', label: '⚡ PETG HF (alta velocidad)' },
            { id: 'abs', label: '🟡 ABS (resistente al calor)' },
            { id: 'asa', label: '🟠 ASA (UV estable)' },
            { id: 'tpu', label: '🟣 TPU 95A (flexible)' },
            { id: 'pla_cf', label: '⚫ PLA-CF (carbono)' },
            { id: 'petg_cf', label: '🔷 PETG-CF (carbono, ligero)' },
            { id: 'pa_cf', label: '🟤 PA6-CF (ingenieria)' },
            { id: 'pc', label: '⬜ PC (policarbonato)' },
            { id: 'unsure', label: '🤔 No estoy seguro' }
          ]
        },
        color: {
          key: 'color',
          text: 'Que color?',
          options: [
            { id: 'white', label: '⬜ Blanco' },
            { id: 'black', label: '⬛ Negro' },
            { id: 'gray', label: '🩶 Gris' },
            { id: 'red', label: '🟥 Rojo' },
            { id: 'blue', label: '🟦 Azul' },
            { id: 'green', label: '🟩 Verde' },
            { id: 'gold', label: '🥇 Dorado / Cobre' },
            { id: 'custom', label: '🎨 Otro / consultar' }
          ]
        }
      }
    },
    it: {
      title: 'Clippy - Assistente PitA',
      openLabel: 'Chiedimi!',
      placeholder: 'Scrivi un messaggio...',
      send: 'Invia',
      fileTitle: 'Carica file (STL/SVG)',
      intro: 'Ti faccio 4 domande e calcolo subito il prezzo.',
      typing: 'Clippy sta scrivendo...',
      warmupErr: 'Warmup fallito',
      fileReady: 'File rilevato. Calcolo esatto pronto:',
      fileErr: 'Impossibile leggere il file.',
      askFirst: 'Rispondi prima alle 4 domande per calcolo immediato.',
      enableChat: 'Perfetto. Chat libera ora attiva.',
      chatLocked: 'Il prezzo istantaneo e locale. Per chat libera, clicca "💬 Ho ancora domande".',
      filePrompt: '💡 Hai un file 3D (STL/SVG)? Posso calcolare in modo piu preciso.',
      shipping: 'Spedizione DE: 4.90€ | UE: 7.90€\nConsegna: 2-5 giorni lavorativi (pezzi singoli), 5-10 (piccole serie)',
      contactMsg: 'Apro la sezione richiesta.',
      stlFor3d: 'STL e migliore per stampa 3D. Per laser, carica SVG.',
      svgForLaser: 'SVG e migliore per laser. Per stampa 3D, carica STL.',
      foodWarn: 'Nota: contatto alimentare limitato con questo processo/materiale.',
      materialAdvice: {
        decor: 'Per decorazione, consiglio PLA Matte (nasconde le linee di layer) oppure PLA Silk per una finitura metallica. Se non sei sicuro, PLA Basic e sempre una buona scelta.',
        functional: 'Per parti funzionali, consiglio PETG — robusto, durevole e adatto al contatto alimentare. Per maggiore rigidita: PETG-CF.',
        industry: 'Per applicazioni industriali, consiglio ABS (resistente al calore) oppure PA6-CF per carichi massimi.',
        outdoor: 'Per esterno, ASA e la scelta migliore — stabile ai raggi UV e resistente alle intemperie. Anche PETG va molto bene.',
        food: 'Per contatto alimentare, consiglio PETG — e l opzione piu adatta. Nota: la stampa 3D e idonea al contatto alimentare solo in modo limitato.'
      },
      resultTitle: '📊 La tua stima:',
      exactTitle: '📊 Calcolo esatto:',
      materials: {
        pla: 'PLA (economico, ideale per deco)',
        petg: 'PETG (resistente alle intemperie, robusto)',
        abs: 'ABS (industriale, stabile al calore)',
        pla_matte: 'PLA Opaco (senza linee)',
        pla_silk: 'PLA Silk (metallico)',
        pla_marble: 'PLA Marmo (effetto pietra)',
        pla_cf: 'PLA-CF (carbonio)',
        petg_hf: 'PETG HF (alta velocita)',
        petg_cf: 'PETG-CF (carbonio, leggero)',
        asa: 'ASA (UV stabile, esterno)',
        tpu: 'TPU 95A (flessibile)',
        pa: 'PA Nylon (resistente)',
        pa_cf: 'PA6-CF (ingegneria)',
        ppa_cf: 'PPA-CF (alta temperatura)',
        pet_cf: 'PET-CF (sostenibile, forte)',
        pc: 'PC Policarbonato (resistente urti)',
        resin_std: 'Resina standard',
        resin_tough: 'Resina tough',
        wood3: 'Legno 3mm',
        acryl3: 'Acrilico 3mm',
        acryl6: 'Acrilico 6mm',
        wood: 'Legno',
        metal_acryl: 'Metallo/Acrilico'
      },
      process: {
        fdm: 'Stampa 3D FDM',
        resin: 'Stampa in resina',
        laser_cut: 'Taglio laser',
        laser_engrave: 'Incisione laser',
        prototype: 'Prototipo/Consulenza'
      },
      sizeLabel3d: { stamp: '~Francobollo (5cm³)', phone: '~Smartphone (80cm³)', shoebox: '~Scatola scarpe (800cm³)', bigger: 'Piu grande (~1600cm³)' },
      sizeLabelLaser: { card: '~Biglietto da visita (46cm²)', a5: '~DIN A5 (311cm²)', a4: '~DIN A4 (623cm²)', bigger: 'Piu grande (~1200cm²)' },
      actionButtons: {
        upload: '📂 Carica file per prezzo esatto',
        ask: '💬 Ho ancora domande',
        contact: '📧 Invia richiesta'
      },
      productSuggestions: {
        intro: 'Dai un occhiata anche ai nostri prodotti finiti:',
        browseIntro: 'Certo, qui puoi sfogliare le nostre categorie di prodotti:',
        fdm: '🛒 Vedi prodotti FDM pronti',
        laser: '✂️ Vedi assortimento taglio laser',
        all: '📦 Tutti i prodotti'
      },
      q: {
        need: {
          key: 'service',
          text: 'Di cosa hai bisogno?',
          options: [
            { id: 'browse', label: '🛒 Sfoglia i prodotti' },
            { id: 'fdm', label: '🖨️ Stampa 3D FDM' },
            { id: 'resin', label: '🧪 Stampa in resina' },
            { id: 'laser_cut', label: '✂️ Taglio laser' },
            { id: 'laser_engrave', label: '🔥 Incisione laser' },
            { id: 'prototype', label: '🔩 Prototipo/Consulenza' }
          ]
        },
        usage: {
          key: 'usage',
          text: 'A cosa serve?',
          options: [
            { id: 'decor', label: '🎨 Deco/Display' },
            { id: 'functional', label: '🔧 Funzionale/Meccanico' },
            { id: 'industry', label: '🏭 Industria/Officina' },
            { id: 'outdoor', label: '🌧️ Esterno/Meteo' },
            { id: 'food', label: '🍽️ Contatto alimentare' }
          ]
        },
        size3d: {
          key: 'size',
          text: 'Dimensione approssimativa?',
          options: [
            { id: 'stamp', label: '📱 Francobollo (~3×4cm)' },
            { id: 'phone', label: '📱 Smartphone (~15×7cm)' },
            { id: 'shoebox', label: '👟 Scatola scarpe (~34×21cm)' },
            { id: 'bigger', label: '📦 Piu grande' }
          ]
        },
        sizeLaser: {
          key: 'size',
          text: 'Dimensione approssimativa?',
          options: [
            { id: 'card', label: '🏷️ Biglietto da visita (85×54mm)' },
            { id: 'a5', label: '📄 DIN A5 (210×148mm)' },
            { id: 'a4', label: '📄 DIN A4 (297×210mm)' },
            { id: 'bigger', label: '📐 Piu grande' }
          ]
        },
        qty: {
          key: 'qty_finish',
          text: 'Quantita + finitura?',
          options: [
            { id: '1_raw', label: '1 pezzo grezzo' },
            { id: '1_sanded', label: '1 pezzo levigato' },
            { id: '2_5', label: '2-5 pezzi' },
            { id: '6_20', label: '6-20 pezzi' },
            { id: '20_plus', label: '20+ pezzi' }
          ]
        },
        material: {
          key: 'material',
          text: 'Quale materiale?',
          options: [
            { id: 'pla', label: '🟢 PLA Basic (standard)' },
            { id: 'pla_matte', label: '⚪ PLA Opaco (senza linee)' },
            { id: 'pla_silk', label: '✨ PLA Silk (metallico)' },
            { id: 'pla_marble', label: '🪨 PLA Marmo (effetto pietra)' },
            { id: 'petg', label: '🔵 PETG (robusto, esterno)' },
            { id: 'petg_hf', label: '⚡ PETG HF (alta velocita)' },
            { id: 'abs', label: '🟡 ABS (resistente calore)' },
            { id: 'asa', label: '🟠 ASA (UV stabile)' },
            { id: 'tpu', label: '🟣 TPU 95A (flessibile)' },
            { id: 'pla_cf', label: '⚫ PLA-CF (carbonio)' },
            { id: 'petg_cf', label: '🔷 PETG-CF (carbonio, leggero)' },
            { id: 'pa_cf', label: '🟤 PA6-CF (ingegneria)' },
            { id: 'pc', label: '⬜ PC (policarbonato)' },
            { id: 'unsure', label: '🤔 Non sono sicuro' }
          ]
        },
        color: {
          key: 'color',
          text: 'Quale colore?',
          options: [
            { id: 'white', label: '⬜ Bianco' },
            { id: 'black', label: '⬛ Nero' },
            { id: 'gray', label: '🩶 Grigio' },
            { id: 'red', label: '🟥 Rosso' },
            { id: 'blue', label: '🟦 Blu' },
            { id: 'green', label: '🟩 Verde' },
            { id: 'gold', label: '🥇 Oro / Rame' },
            { id: 'custom', label: '🎨 Altro / su richiesta' }
          ]
        }
      }
    }
  };

  function textSet() {
    var lang = clippyLang();
    return UI[lang] || UI.de;
  }

  function getMaterialRecommendation(usage, lang) {
    var tx = UI[lang] || UI.de;
    var advice = tx.materialAdvice || {};
    return advice[usage] || '';
  }

  function buildSystemPrompt() {
    var lang = clippyLang();
    var prompts = {
      de: "Du bist Clippy, der Projektberater von PitA (Printing in the Alps). Antworte IMMER auf Deutsch.\\n\\nPERSOENLICHKEIT: Du bist ein PROJEKT-BERATER. Beginne IMMER beim Projekt des Kunden. Fuehre ein Gespraech, keine Checkliste. Stelle EINE Frage nach der anderen. Halte Antworten auf 2-4 Saetze.\\n\\nGRUNDREGELN: NIEMALS Kontaktformular als Antwort. Dateien sind IMMER optional. IMMER konkreten Preis nennen. Keine Sackgassen.\\n\\nPREISE: PLA 0.04EUR/g | PETG 0.05 | ABS 0.05. Maschine 4EUR/h. Setup 3.50. Min 5EUR. Resin 0.15-0.22/cm3 min 10EUR. Laser Holz 0.005/cm2 Acryl 0.012-0.018/cm2 min 8EUR. Versand DE 4.90 EU 7.90. Lieferzeit 2-5 Werktage, Kleinserie 5-10.",
      en: "You are Clippy, project advisor at PitA (Printing in the Alps). ALWAYS answer in English. Keep it concise, practical, and price-oriented.",
      fr: "Tu es Clippy, conseiller projet de PitA. Reponds toujours en francais de maniere concise et pratique.",
      es: "Eres Clippy, asesor de proyectos de PitA. Responde siempre en espanol de forma breve y practica.",
      it: "Sei Clippy, consulente di progetto di PitA. Rispondi sempre in italiano, in modo conciso e pratico."
    };
    return prompts[lang] || prompts.de;
  }

  (function warmupOllama() {
    fetch(OLLAMA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'mistral:7b', messages: [], stream: false, keep_alive: '30m' })
    }).catch(function () {});
  })();

  var MATS = {
    PLA:      { density: 1.24, ppg: 0.02, labelKey: 'pla' },
    PLA_MATTE:{ density: 1.24, ppg: 0.03, labelKey: 'pla_matte' },
    PLA_SILK: { density: 1.24, ppg: 0.04, labelKey: 'pla_silk' },
    PLA_MARBLE:{ density: 1.24, ppg: 0.04, labelKey: 'pla_marble' },
    PLA_CF:   { density: 1.30, ppg: 0.08, labelKey: 'pla_cf' },
    PETG:     { density: 1.27, ppg: 0.03, labelKey: 'petg' },
    PETG_HF:  { density: 1.27, ppg: 0.04, labelKey: 'petg_hf' },
    PETG_CF:  { density: 1.30, ppg: 0.08, labelKey: 'petg_cf' },
    ABS:      { density: 1.05, ppg: 0.05, labelKey: 'abs' },
    ASA:      { density: 1.07, ppg: 0.06, labelKey: 'asa' },
    TPU:      { density: 1.21, ppg: 0.06, labelKey: 'tpu' },
    PA:       { density: 1.14, ppg: 0.08, labelKey: 'pa' },
    PA6_CF:   { density: 1.25, ppg: 0.12, labelKey: 'pa_cf' },
    PPA_CF:   { density: 1.30, ppg: 0.15, labelKey: 'ppa_cf' },
    PET_CF:   { density: 1.30, ppg: 0.08, labelKey: 'pet_cf' },
    PC:       { density: 1.20, ppg: 0.08, labelKey: 'pc' }
  };

  // Map user's material answer to MATS key
  var MATERIAL_MAP = {
    pla: 'PLA', pla_matte: 'PLA_MATTE', pla_silk: 'PLA_SILK', pla_marble: 'PLA_MARBLE',
    petg: 'PETG', petg_hf: 'PETG_HF', petg_cf: 'PETG_CF',
    abs: 'ABS', asa: 'ASA', tpu: 'TPU',
    pla_cf: 'PLA_CF', pa_cf: 'PA6_CF', pc: 'PC',
    unsure: null
  };

  function signedVolTri(ax, ay, az, bx, by, bz, cx, cy, cz) {
    return (ax * (by * cz - bz * cy) + bx * (cy * az - cz * ay) + cx * (ay * bz - az * by)) / 6;
  }

  function parseSTLBinary(buf) {
    var v = new DataView(buf);
    var n = v.getUint32(80, true);
    var vol = 0;
    var minX = Infinity;
    var minY = Infinity;
    var minZ = Infinity;
    var maxX = -Infinity;
    var maxY = -Infinity;
    var maxZ = -Infinity;

    for (var i = 0; i < n; i++) {
      var o = 84 + i * 50;
      var v1x = v.getFloat32(o + 12, true);
      var v1y = v.getFloat32(o + 16, true);
      var v1z = v.getFloat32(o + 20, true);
      var v2x = v.getFloat32(o + 24, true);
      var v2y = v.getFloat32(o + 28, true);
      var v2z = v.getFloat32(o + 32, true);
      var v3x = v.getFloat32(o + 36, true);
      var v3y = v.getFloat32(o + 40, true);
      var v3z = v.getFloat32(o + 44, true);

      vol += signedVolTri(v1x, v1y, v1z, v2x, v2y, v2z, v3x, v3y, v3z);

      minX = Math.min(minX, v1x, v2x, v3x);
      maxX = Math.max(maxX, v1x, v2x, v3x);
      minY = Math.min(minY, v1y, v2y, v3y);
      maxY = Math.max(maxY, v1y, v2y, v3y);
      minZ = Math.min(minZ, v1z, v2z, v3z);
      maxZ = Math.max(maxZ, v1z, v2z, v3z);
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
      var minX = Infinity;
      var minY = Infinity;
      var minZ = Infinity;
      var maxX = -Infinity;
      var maxY = -Infinity;
      var maxZ = -Infinity;

      for (var i = 0; i < verts.length - 2; i += 3) {
        var ax = +verts[i][1];
        var ay = +verts[i][2];
        var az = +verts[i][3];
        var bx = +verts[i + 1][1];
        var by = +verts[i + 1][2];
        var bz = +verts[i + 1][3];
        var cx = +verts[i + 2][1];
        var cy = +verts[i + 2][2];
        var cz = +verts[i + 2][3];

        vol += signedVolTri(ax, ay, az, bx, by, bz, cx, cy, cz);
        minX = Math.min(minX, ax, bx, cx);
        maxX = Math.max(maxX, ax, bx, cx);
        minY = Math.min(minY, ay, by, cy);
        maxY = Math.max(maxY, ay, by, cy);
        minZ = Math.min(minZ, az, bz, cz);
        maxZ = Math.max(maxZ, az, bz, cz);
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
      priceMax: (total * 1.2).toFixed(2),
      material: m.labelKey,
      total: total
    };
  }

  function qtyDiscount(qtyId) {
    if (qtyId === '2_5') return 0.95;
    if (qtyId === '6_20') return 0.9;
    if (qtyId === '20_plus') return 0.85;
    return 1;
  }

  function usageToFdm(usage) {
    if (usage === 'decor') return { mat: 'PLA', infill: 20 };
    if (usage === 'functional') return { mat: 'PETG', infill: 40 };
    if (usage === 'industry') return { mat: 'ABS', infill: 60 };
    if (usage === 'outdoor') return { mat: 'PETG', infill: 40 };
    if (usage === 'food') return { mat: 'PETG', infill: 40 };
    return { mat: 'PLA', infill: 20 };
  }

  function usageToResinRate(usage) {
    if (usage === 'decor') return { rate: 0.15, matKey: 'resin_std', foodWarn: false };
    if (usage === 'food') return { rate: 0.22, matKey: 'resin_tough', foodWarn: true };
    return { rate: 0.22, matKey: 'resin_tough', foodWarn: false };
  }

  function usageToCutRate(usage) {
    if (usage === 'decor') return { rate: 0.005, matKey: 'wood3' };
    if (usage === 'functional') return { rate: 0.012, matKey: 'acryl3' };
    if (usage === 'industry') return { rate: 0.018, matKey: 'acryl6' };
    if (usage === 'outdoor') return { rate: 0.012, matKey: 'acryl3' };
    return { rate: 0.005, matKey: 'wood3' };
  }

  function usageToEngraveRate(usage) {
    if (usage === 'decor') return { rate: 0.008, matKey: 'wood' };
    return { rate: 0.015, matKey: 'metal_acryl' };
  }

  function calculatePrice(answers, exactInput) {
    var tx = textSet();
    var service = answers.service;
    var usage = answers.usage;
    var qty = answers.qty_finish;
    var size = answers.size;
    var discount = qtyDiscount(qty);
    var out = {
      processKey: service,
      materialKey: 'pla',
      sizeText: '',
      volumeCm3: null,
      areaCm2: null,
      weightG: null,
      total: 0,
      priceMin: 0,
      priceMax: 0,
      warning: '',
      exact: !!exactInput,
      extra: ''
    };

    if (service === 'fdm' || service === 'prototype') {
      var fdm = usageToFdm(usage);
      // User's material choice overrides usage-based suggestion
      var userMat = answers.material && MATERIAL_MAP[answers.material];
      var matKey = userMat || fdm.mat;
      var infill = fdm.infill;
      var vol = exactInput && exactInput.volumeCm3 ? exactInput.volumeCm3 : (VOLUME_MAP[size] || VOLUME_MAP.phone);
      var est = estimatePrice({ volumeCm3: vol }, matKey, infill);
      var total = est.total;
      if (qty === '1_sanded') total *= 1.3;
      total *= discount;
      total = Math.max(5, total);
      out.materialKey = (MATS[matKey] && MATS[matKey].labelKey) || 'pla';
      if (answers.color) out.colorKey = answers.color;
      out.volumeCm3 = vol;
      out.weightG = Number(est.weightG);
      out.total = total;
      out.priceMin = total * 0.85;
      out.priceMax = total * 1.2;
      out.sizeText = tx.sizeLabel3d[size] || tx.sizeLabel3d.phone;
      if (service === 'prototype') {
        out.extra = 'prototype';
      }
    } else if (service === 'resin') {
      var resin = usageToResinRate(usage);
      var rVol = exactInput && exactInput.volumeCm3 ? exactInput.volumeCm3 : (VOLUME_MAP[size] || VOLUME_MAP.phone);
      var rTotal = (rVol * resin.rate) + ((rVol / 1.5 / 60) * 3) + 5;
      rTotal *= discount;
      rTotal = Math.max(10, rTotal);
      out.materialKey = resin.matKey;
      if (answers.color) out.colorKey = answers.color;
      out.volumeCm3 = rVol;
      out.total = rTotal;
      out.priceMin = rTotal * 0.85;
      out.priceMax = rTotal * 1.2;
      out.sizeText = tx.sizeLabel3d[size] || tx.sizeLabel3d.phone;
      if (resin.foodWarn) out.warning = tx.foodWarn;
    } else if (service === 'laser_cut') {
      var cut = usageToCutRate(usage);
      var area = exactInput && exactInput.areaCm2 ? exactInput.areaCm2 : (AREA_MAP[size] || AREA_MAP.a5);
      var perimeter = exactInput && exactInput.pathCm ? exactInput.pathCm : (PERIMETER_MAP[size] || PERIMETER_MAP.a5);
      var cTotal = (area * cut.rate) + (perimeter * 0.03) + 5;
      cTotal *= discount;
      cTotal = Math.max(8, cTotal);
      out.materialKey = cut.matKey;
      out.areaCm2 = area;
      out.total = cTotal;
      out.priceMin = cTotal * 0.85;
      out.priceMax = cTotal * 1.2;
      out.sizeText = tx.sizeLabelLaser[size] || tx.sizeLabelLaser.a5;
      out.extra = 'path:' + perimeter.toFixed(1);
    } else if (service === 'laser_engrave') {
      var engr = usageToEngraveRate(usage);
      var eArea = exactInput && exactInput.areaCm2 ? exactInput.areaCm2 : (AREA_MAP[size] || AREA_MAP.a5);
      var eTotal = (eArea * engr.rate) + 5;
      eTotal *= discount;
      eTotal = Math.max(8, eTotal);
      out.materialKey = engr.matKey;
      out.areaCm2 = eArea;
      out.total = eTotal;
      out.priceMin = eTotal * 0.85;
      out.priceMax = eTotal * 1.2;
      out.sizeText = tx.sizeLabelLaser[size] || tx.sizeLabelLaser.a5;
    }

    return out;
  }

  function parseLengthToMm(raw) {
    if (!raw) return null;
    var m = String(raw).trim().match(/^([\d.]+)\s*([a-z%]*)$/i);
    if (!m) return null;
    var v = parseFloat(m[1]);
    var unit = (m[2] || 'px').toLowerCase();
    if (Number.isNaN(v)) return null;
    if (unit === 'mm') return v;
    if (unit === 'cm') return v * 10;
    if (unit === 'in') return v * 25.4;
    if (unit === 'pt') return v * 0.352777778;
    if (unit === 'px') return v * 0.264583333;
    return v;
  }

  function analyzeSVG(txt) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(txt, 'image/svg+xml');
    var svg = doc.documentElement;
    if (!svg || svg.nodeName.toLowerCase() !== 'svg') throw new Error('invalid svg');

    var tempWrap = document.createElement('div');
    tempWrap.style.cssText = 'position:absolute;left:-99999px;top:-99999px;visibility:hidden;';
    var liveSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    liveSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    var vb = (svg.getAttribute('viewBox') || '').trim().split(/\s+/).map(Number);
    var widthMm = parseLengthToMm(svg.getAttribute('width'));
    var heightMm = parseLengthToMm(svg.getAttribute('height'));

    if ((!widthMm || !heightMm) && vb.length === 4 && !Number.isNaN(vb[2]) && !Number.isNaN(vb[3])) {
      widthMm = vb[2] * 0.264583333;
      heightMm = vb[3] * 0.264583333;
    }
    if (!widthMm) widthMm = 210;
    if (!heightMm) heightMm = 148;

    liveSvg.setAttribute('width', String(widthMm) + 'mm');
    liveSvg.setAttribute('height', String(heightMm) + 'mm');
    if (vb.length === 4 && !Number.isNaN(vb[0])) liveSvg.setAttribute('viewBox', svg.getAttribute('viewBox'));

    var sourceChildren = svg.querySelectorAll('path,rect,circle,ellipse,line,polyline,polygon');
    sourceChildren.forEach(function (el) {
      liveSvg.appendChild(el.cloneNode(true));
    });

    tempWrap.appendChild(liveSvg);
    document.body.appendChild(tempWrap);

    var lengthPx = 0;
    var areaPx2 = 0;

    Array.prototype.forEach.call(liveSvg.children, function (node) {
      if (typeof node.getTotalLength === 'function') {
        try { lengthPx += node.getTotalLength(); } catch (e) {}
      }
      if (typeof node.getBBox === 'function') {
        try {
          var b = node.getBBox();
          areaPx2 += Math.max(0, b.width * b.height);
        } catch (e2) {}
      }
    });

    var svgPxW = liveSvg.clientWidth || (vb.length === 4 ? vb[2] : 800);
    var mmPerPxX = widthMm / (svgPxW || 1);
    var svgPxH = liveSvg.clientHeight || (vb.length === 4 ? vb[3] : 600);
    var mmPerPxY = heightMm / (svgPxH || 1);

    document.body.removeChild(tempWrap);

    var pathMm = lengthPx * ((mmPerPxX + mmPerPxY) / 2);
    var areaMm2 = areaPx2 * mmPerPxX * mmPerPxY;

    return {
      areaCm2: Math.max(1, areaMm2 / 100),
      pathCm: Math.max(1, pathMm / 10),
      widthMm: widthMm,
      heightMm: heightMm
    };
  }

  var root = document.createElement('div');
  root.innerHTML = [
    '<style id="clippy-style">',
    '#clippy-container{position:fixed;right:16px;bottom:16px;z-index:2147483000;font-family:Arial,sans-serif;}',
    '.clippy-toggle{background:none;border:none;cursor:pointer;padding:0;display:flex;flex-direction:column;align-items:center;filter:drop-shadow(0 4px 12px rgba(0,0,0,0.3));transition:transform 0.2s;}',
    '.clippy-toggle:hover{transform:translateY(-2px) scale(1.05);}',
    '.clippy-label{background:#C67D4A;color:#fff;font-size:11px;font-weight:700;padding:3px 8px;border-radius:999px;margin-top:2px;white-space:nowrap;}',
    '@keyframes clippy-wiggle{0%,100%{transform:rotate(0deg);}25%{transform:rotate(-8deg);}75%{transform:rotate(8deg);}}',
    '.clippy-wiggle{animation:clippy-wiggle 0.4s ease-in-out;}',
    '#clippy-chat{position:absolute;right:0;bottom:calc(100% + 12px);width:min(370px,calc(100vw - 24px));height:min(560px,calc(100vh - 120px));background:#0B0F19;border:1px solid rgba(198,125,74,0.2);border-radius:16px;box-shadow:0 20px 50px rgba(0,0,0,0.5);backdrop-filter:blur(8px);display:flex;flex-direction:column;overflow:hidden;}',
    '.clippy-hidden{display:none !important;}',
    '.clippy-header{height:48px;background:#C67D4A;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 12px;font-size:14px;}',
    '.clippy-close{border:0;background:transparent;color:#fff;font-size:20px;cursor:pointer;}',
    '.clippy-close:hover{color:#E8E6E1;}',
    '#clippy-messages{flex:1;overflow:auto;padding:12px;background:rgba(11,15,25,0.95);display:flex;flex-direction:column;gap:8px;}',
    '.clippy-msg{max-width:92%;padding:9px 11px;border-radius:12px;line-height:1.35;font-size:14px;white-space:pre-wrap;}',
    '.clippy-bot{align-self:flex-start;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);color:#E8E6E1;}',
    '.clippy-user{align-self:flex-end;background:#C67D4A;color:#fff;}',
    '.clippy-question{align-self:flex-start;background:rgba(198,125,74,0.15);border:1px solid rgba(198,125,74,0.3);color:#E8E6E1;}',
    '.clippy-options{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;}',
    '.clippy-option-btn{border:1px solid rgba(198,125,74,0.4);background:rgba(198,125,74,0.1);color:#E8E6E1;padding:8px 10px;border-radius:999px;cursor:pointer;font-size:13px;}',
    '.clippy-option-btn:hover{background:rgba(198,125,74,0.25);}',
    '#clippy-input-row{display:flex;align-items:center;gap:8px;padding:10px;border-top:1px solid rgba(198,125,74,0.2);background:rgba(11,15,25,0.98);}',
    '#clippy-file-btn{width:34px;height:34px;border:1px solid rgba(255,255,255,0.15);border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:16px;background:rgba(255,255,255,0.05);color:#E8E6E1;}',
    '#clippy-input{flex:1;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.08);color:#E8E6E1;border-radius:10px;padding:9px 10px;font-size:14px;outline:none;}',
    '#clippy-input:focus{border-color:rgba(198,125,74,0.6);}',
    '#clippy-send{border:0;background:#C67D4A;color:#fff;border-radius:10px;padding:9px 12px;cursor:pointer;}',
    '#clippy-send[disabled]{opacity:.5;cursor:not-allowed;}',
    '@media (max-width:520px){#clippy-container{right:8px;bottom:8px;}#clippy-chat{width:calc(100vw - 16px);height:min(72vh,620px);right:0;bottom:calc(100% + 12px);}}',
    '.clippy-thought{position:absolute;bottom:calc(100% + 18px);right:0;background:rgba(15,15,30,0.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.12);color:#e8e6e1;padding:10px 16px;border-radius:14px;font-size:0.85rem;max-width:220px;text-align:center;opacity:0;transform:translateY(8px);transition:opacity 0.4s ease,transform 0.4s ease;pointer-events:none;line-height:1.4;box-shadow:0 4px 16px rgba(0,0,0,0.3);}',
    '.clippy-thought.visible{opacity:1;transform:translateY(0);pointer-events:auto;}',
    '.clippy-thought::after{content:"";position:absolute;bottom:-8px;right:24px;width:14px;height:14px;background:rgba(15,15,30,0.85);border-right:1px solid rgba(255,255,255,0.12);border-bottom:1px solid rgba(255,255,255,0.12);transform:rotate(45deg);}',
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
    '        <input type="file" id="clippy-file-input" accept=".stl,.svg" style="display:none">',
    '      </label>',
    '      <input id="clippy-input" type="text" autocomplete="off" />',
    '      <button id="clippy-send" type="button"></button>',
    '    </div>',
    '  </div>',
    '  <div id="clippy-thought" class="clippy-thought"><span id="clippy-thought-text"></span></div>',
    '  <button id="clippy-toggle" class="clippy-toggle" aria-label="Clippy">',
    '    <svg viewBox="0 0 100 160" width="56" height="84" class="clippy-svg" id="clippy-svg">',
    '      <ellipse cx="50" cy="95" rx="18" ry="50" fill="none" stroke="#5C5C5C" stroke-width="8" stroke-linecap="round"/>',
    '      <ellipse cx="42" cy="55" rx="8" ry="10" fill="white" stroke="#888" stroke-width="2"/>',
    '      <ellipse cx="43" cy="56" rx="3.5" ry="4.5" fill="#222" class="clippy-pupil-l"/>',
    '      <ellipse cx="44" cy="54" rx="1.5" ry="2" fill="white" class="clippy-glint-l"/>',
    '      <ellipse cx="42" cy="55" rx="8" ry="0" fill="#C67D4A" class="clippy-lid-l"/>',
    '      <ellipse cx="58" cy="55" rx="8" ry="10" fill="white" stroke="#888" stroke-width="2"/>',
    '      <ellipse cx="59" cy="56" rx="3.5" ry="4.5" fill="#222" class="clippy-pupil-r"/>',
    '      <ellipse cx="60" cy="54" rx="1.5" ry="2" fill="white" class="clippy-glint-r"/>',
    '      <ellipse cx="58" cy="55" rx="8" ry="0" fill="#C67D4A" class="clippy-lid-r"/>',
    '      <path d="M34 44 Q42 38 50 44" fill="none" stroke="#666" stroke-width="2.5" stroke-linecap="round" class="clippy-brow-l"/>',
    '      <path d="M50 44 Q58 38 66 44" fill="none" stroke="#666" stroke-width="2.5" stroke-linecap="round" class="clippy-brow-r"/>',
    '      <path d="M42 70 Q50 78 58 70" fill="none" stroke="#666" stroke-width="2.5" stroke-linecap="round" class="clippy-mouth"/>',
    '    </svg>',
    '    <span class="clippy-label">Frag mich!</span>',
    '  </button>',
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
  var elToggleLabel = elToggle.querySelector('.clippy-label');

  var state = {
    asked: false,
    step: 0,
    answers: {},
    finishedQuestions: false,
    busy: false,
    history: [],
    followupEnabled: false,
    actionsShown: false
  };

  // === Thought Bubble ===
  var thoughtEl = document.getElementById('clippy-thought');
  var thoughtText = document.getElementById('clippy-thought-text');
  var thoughtI18n = {
    de: [
      '👋 Hey! Ich bin Clippy!',
      '🖨️ Wusstest du? Wir drucken mit Solarstrom! ☀️',
      '💡 Brauchst du Hilfe bei deinem Projekt?',
      '🛒 Schon unsere FDM-Produkte entdeckt?',
      '✂️ Lasercut-Sortiment kommt bald!',
      '🎨 PLA Silk in Gold sieht mega aus!',
      '📦 Einzelstück oder Kleinserie? Frag mich!',
      '⚡ PETG HF = Turbo-Druck auf dem H2D!',
      '🌿 Vogelfutterstellen ab 4,90€!',
      '🔥 Tütenclips ab 0,99€ im 10er-Pack!',
      '🏔️ Printing in the Alps — Made in Germany',
      '💎 PLA Sparkle für echten Glitzer-Effekt!',
      '📱 Credit Card Phone Stand passt ins Portemonnaie!',
      '🤔 STL oder SVG? Ich rechne dir den Preis!',
      '☕ Kaffee? Wir drucken auch Tassen... naja, fast.'
    ],
    en: [
      '👋 Hey! I\'m Clippy!',
      '🖨️ Did you know? We print with solar power! ☀️',
      '💡 Need help with your project?',
      '🛒 Checked out our FDM products yet?',
      '✂️ Laser cut range coming soon!',
      '🎨 PLA Silk in Gold looks amazing!',
      '📦 One-off or small batch? Ask me!',
      '⚡ PETG HF = Turbo printing on the H2D!',
      '🌿 Bird feeders from €4.90!',
      '🔥 Bag clips from €0.99 in 10-packs!',
      '🏔️ Printing in the Alps — Made in Germany',
      '💎 PLA Sparkle for real glitter effect!',
      '📱 Credit Card Phone Stand fits in your wallet!',
      '🤔 STL or SVG? I\'ll calculate the price!',
      '☕ Coffee? We also print mugs... well, almost.'
    ],
    fr: [
      '👋 Salut ! Je suis Clippy !',
      '🖨️ Le saviez-vous ? On imprime au solaire ! ☀️',
      '💡 Besoin d\'aide pour votre projet ?',
      '🛒 Decouvrez nos produits FDM !',
      '✂️ Gamme decoupe laser bientot !',
      '🎨 PLA Silk en Or — superbe !',
      '📦 Piece unique ou petite serie ? Demandez !',
      '⚡ PETG HF = Impression turbo !',
      '🌿 Mangeoires a oiseaux des 4,90€ !',
      '🔥 Clips de sac des 0,99€ par 10 !',
      '🏔️ Printing in the Alps — Made in Germany',
      '💎 PLA Sparkle pour un effet paillete !',
      '📱 Support telephone format carte de credit !',
      '🤔 STL ou SVG ? Je calcule le prix !',
      '☕ Cafe ? On imprime aussi des tasses... presque.'
    ],
    es: [
      '👋 Hola! Soy Clippy!',
      '🖨️ Sabias que imprimimos con energia solar? ☀️',
      '💡 Necesitas ayuda con tu proyecto?',
      '🛒 Ya viste nuestros productos FDM?',
      '✂️ Gama de corte laser pronto!',
      '🎨 PLA Silk en Oro se ve increible!',
      '📦 Pieza unica o serie? Preguntame!',
      '⚡ PETG HF = Impresion turbo!',
      '🌿 Comederos para pajaros desde 4,90€!',
      '🔥 Clips de bolsa desde 0,99€ x10!',
      '🏔️ Printing in the Alps — Made in Germany',
      '💎 PLA Sparkle para efecto brillante!',
      '📱 Soporte movil tamano tarjeta de credito!',
      '🤔 STL o SVG? Calculo el precio!',
      '☕ Cafe? Tambien imprimimos tazas... casi.'
    ],
    it: [
      '👋 Ciao! Sono Clippy!',
      '🖨️ Lo sapevi? Stampiamo con energia solare! ☀️',
      '💡 Hai bisogno di aiuto con il tuo progetto?',
      '🛒 Hai visto i nostri prodotti FDM?',
      '✂️ Gamma taglio laser in arrivo!',
      '🎨 PLA Silk in Oro e fantastico!',
      '📦 Pezzo unico o piccola serie? Chiedimi!',
      '⚡ PETG HF = Stampa turbo!',
      '🌿 Mangiatoie per uccelli da 4,90€!',
      '🔥 Clip per sacchetti da 0,99€ x10!',
      '🏔️ Printing in the Alps — Made in Germany',
      '💎 PLA Sparkle per effetto glitter!',
      '📱 Supporto telefono formato carta di credito!',
      '🤔 STL o SVG? Calcolo il prezzo!',
      '☕ Caffe? Stampiamo anche tazze... quasi.'
    ]
  };
  function getThoughtMessages() { return thoughtI18n[clippyLang()] || thoughtI18n.de; }
  var thoughtIndex = 0;
  var thoughtTimer = null;
  var thoughtVisible = false;

  function showThought() {
    if (elChat && !elChat.classList.contains('clippy-hidden')) return;
    var msgs = getThoughtMessages();
    thoughtText.textContent = msgs[thoughtIndex % msgs.length];
    thoughtEl.classList.add('visible');
    thoughtVisible = true;
    thoughtIndex = (thoughtIndex + 1) % msgs.length;
    setTimeout(function() {
      if (thoughtVisible) {
        thoughtEl.classList.remove('visible');
        thoughtVisible = false;
      }
    }, 5000);
  }

  function startThoughtCycle() {
    setTimeout(function() {
      showThought();
      thoughtTimer = setInterval(showThought, 10000);
    }, 3000);
  }

  function hideThought() {
    thoughtEl.classList.remove('visible');
    thoughtVisible = false;
    if (thoughtTimer) { clearInterval(thoughtTimer); thoughtTimer = null; }
  }

  startThoughtCycle();

  function applyLanguageTexts() {
    var tx = textSet();
    document.getElementById('clippy-title').textContent = tx.title;
    elToggle.title = tx.openLabel;
    if (elToggleLabel) elToggleLabel.textContent = tx.openLabel;
    elInput.placeholder = tx.placeholder;
    elSend.textContent = tx.send;
    elFileBtn.title = tx.fileTitle;
  }

  function blink() {
    var lL = document.querySelector('.clippy-lid-l');
    var lR = document.querySelector('.clippy-lid-r');
    if (!lL) return;
    lL.setAttribute('ry', '10');
    lR.setAttribute('ry', '10');
    setTimeout(function () {
      lL.setAttribute('ry', '0');
      lR.setAttribute('ry', '0');
    }, 150);
  }

  function raiseBrows() {
    var bL = document.querySelector('.clippy-brow-l');
    var bR = document.querySelector('.clippy-brow-r');
    if (!bL) return;
    bL.setAttribute('d', 'M34 40 Q42 34 50 40');
    bR.setAttribute('d', 'M50 40 Q58 34 66 40');
    setTimeout(function () {
      bL.setAttribute('d', 'M34 44 Q42 38 50 44');
      bR.setAttribute('d', 'M50 44 Q58 38 66 44');
    }, 800);
  }

  function startIdle() {
    setInterval(blink, 3000 + Math.random() * 4000);
    setTimeout(function () { blink(); }, 800);
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
      btn.textContent = opt.label;
      btn.addEventListener('click', function () {
        handleQuestionAnswer(qObj.key, opt.id, opt.label);
      });
      options.appendChild(btn);
    });

    wrap.appendChild(options);
    elMessages.appendChild(wrap);
    scrollBottom();
  }

  function appendActionButtons() {
    if (state.actionsShown) return;
    state.actionsShown = true;
    var tx = textSet();
    var wrap = document.createElement('div');
    wrap.className = 'clippy-msg clippy-question';

    var text = document.createElement('div');
    text.textContent = tx.filePrompt;
    wrap.appendChild(text);

    var options = document.createElement('div');
    options.className = 'clippy-options';

    var actions = [
      { key: 'upload', label: tx.actionButtons.upload },
      { key: 'ask', label: tx.actionButtons.ask },
      { key: 'contact', label: tx.actionButtons.contact }
    ];

    actions.forEach(function (item) {
      var btn = document.createElement('button');
      btn.className = 'clippy-option-btn';
      btn.type = 'button';
      btn.textContent = item.label;
      btn.addEventListener('click', function () {
        if (item.key === 'upload') {
          elFileBtn.classList.remove('clippy-hidden');
          elFileInput.click();
        } else if (item.key === 'ask') {
          state.followupEnabled = true;
          appendMessage(tx.enableChat, 'bot');
        } else {
          appendMessage(tx.contactMsg, 'bot');
          window.location.href = clippyBase() + 'index.html#kontakt';
        }
      });
      options.appendChild(btn);
    });

    wrap.appendChild(options);
    elMessages.appendChild(wrap);
    scrollBottom();
  }

  function appendProductSuggestions(service, introText) {
    var tx = textSet();
    var ps = tx.productSuggestions || {};
    var links = [];

    if (service === 'fdm' || service === 'browse') {
      links.push({ label: ps.fdm || '🛒 FDM products', href: clippyBase() + 'produkte/3d-fdm-druck.html' });
    }
    if (service === 'laser_cut' || service === 'laser_engrave' || service === 'browse') {
      links.push({ label: ps.laser || '✂️ Laser products', href: clippyBase() + 'produkte/lasercut.html' });
    }
    links.push({ label: ps.all || '📦 All products', href: clippyBase() + 'produkte.html' });

    var wrap = document.createElement('div');
    wrap.className = 'clippy-msg clippy-question';

    var text = document.createElement('div');
    text.textContent = introText || ps.intro || '';
    wrap.appendChild(text);

    var options = document.createElement('div');
    options.className = 'clippy-options';
    links.forEach(function (item) {
      var btn = document.createElement('button');
      btn.className = 'clippy-option-btn';
      btn.type = 'button';
      btn.textContent = item.label;
      btn.addEventListener('click', function () {
        window.location.href = item.href;
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

  function nextQuestionForStep() {
    var tx = textSet();
    if (state.step === 0) return tx.q.need;
    if (state.step === 1) return tx.q.usage;
    if (state.step === 2) {
      var service = state.answers.service;
      if (service === 'laser_cut' || service === 'laser_engrave') return tx.q.sizeLaser;
      return tx.q.size3d;
    }
    if (state.step === 3) return tx.q.qty;
    if (state.step === 4) {
      var service = state.answers.service;
      if (service === 'fdm' || service === 'resin' || service === 'prototype') return tx.q.material;
      return null;
    }
    if (state.step === 5) return tx.q.color;
    return null;
  }

  function renderNextQuestion() {
    var qObj = nextQuestionForStep();
    if (!qObj) {
      finishQuestionsWithInstantPrice();
      return;
    }
    if (state.step === 4) {
      var service = state.answers.service;
      if (service === 'fdm' || service === 'resin' || service === 'prototype') {
        var advice = getMaterialRecommendation(state.answers.usage, clippyLang());
        if (advice) {
          appendMessage('💡 ' + advice, 'bot');
          scrollBottom();
          setTimeout(function() {
            appendQuestionCard(qObj);
            scrollBottom();
          }, 7200);
          return;
        }
      }
    }
    appendQuestionCard(qObj);
  }

  function handleQuestionAnswer(key, value, label) {
    if (state.finishedQuestions) return;
    removeQuestionButtons();
    state.answers[key] = value;
    appendMessage(label, 'user');
    if (key === 'service' && value === 'browse') {
      state.finishedQuestions = true;
      state.step = 4;
      appendMessage(textSet().productSuggestions.browseIntro, 'bot');
      appendProductSuggestions('browse');
      return;
    }
    state.step += 1;
    renderNextQuestion();
  }

  function formatCurrency(v) {
    return Number(v).toFixed(2);
  }

  function resultLabels() {
    var lang = clippyLang();
    var labels = {
      de: {
        material: 'Material',
        color: 'Farbe',
        process: 'Verfahren',
        size: 'Groesse',
        weight: 'Gewicht',
        price: 'Preis',
        perPiece: 'pro Stueck',
        bbox: 'BBox',
        triangles: 'Triangles',
        cutLen: 'Schnittlaenge',
        areaSvg: 'Flaeche SVG'
      },
      en: {
        material: 'Material',
        color: 'Color',
        process: 'Process',
        size: 'Size',
        weight: 'Weight',
        price: 'Price',
        perPiece: 'per piece',
        bbox: 'BBox',
        triangles: 'Triangles',
        cutLen: 'Cut length',
        areaSvg: 'SVG area'
      },
      fr: {
        material: 'Materiau',
        color: 'Couleur',
        process: 'Procede',
        size: 'Taille',
        weight: 'Poids',
        price: 'Prix',
        perPiece: 'par piece',
        bbox: 'BBox',
        triangles: 'Triangles',
        cutLen: 'Longueur de coupe',
        areaSvg: 'Surface SVG'
      },
      es: {
        material: 'Material',
        color: 'Color',
        process: 'Proceso',
        size: 'Tamano',
        weight: 'Peso',
        price: 'Precio',
        perPiece: 'por pieza',
        bbox: 'BBox',
        triangles: 'Triangulos',
        cutLen: 'Longitud de corte',
        areaSvg: 'Area SVG'
      },
      it: {
        material: 'Materiale',
        color: 'Colore',
        process: 'Processo',
        size: 'Dimensione',
        weight: 'Peso',
        price: 'Prezzo',
        perPiece: 'per pezzo',
        bbox: 'BBox',
        triangles: 'Triangoli',
        cutLen: 'Lunghezza taglio',
        areaSvg: 'Area SVG'
      }
    };
    return labels[lang] || labels.de;
  }

  function colorLabelFromId(colorId, tx) {
    if (!colorId || !tx || !tx.q || !tx.q.color || !Array.isArray(tx.q.color.options)) return colorId || '';
    var hit = tx.q.color.options.find(function (opt) { return opt.id === colorId; });
    return hit ? hit.label : colorId;
  }

  function prototypeLine(min, max, perPiece) {
    var lang = clippyLang();
    if (lang === 'en') return 'Prototyping is custom. Based on your inputs I estimate €' + min + ' - €' + max + ' ' + perPiece + '. For an exact offer, tell me more about your project.';
    if (lang === 'fr') return 'Le prototypage est individuel. Selon vos infos, j estime €' + min + ' - €' + max + ' ' + perPiece + '. Pour un devis exact, racontez-moi votre projet.';
    if (lang === 'es') return 'El prototipado es individual. Segun tus datos, estimo €' + min + ' - €' + max + ' ' + perPiece + '. Para una oferta exacta, cuentame mas de tu proyecto.';
    if (lang === 'it') return 'La prototipazione e personalizzata. In base ai dati, stimo €' + min + ' - €' + max + ' ' + perPiece + '. Per un preventivo preciso, raccontami di piu del progetto.';
    return 'Prototyping ist individuell. Basierend auf deinen Angaben schatze ich €' + min + ' - €' + max + ' ' + perPiece + '. Fuer ein genaues Angebot erzaehl mir mehr ueber dein Projekt.';
  }

  function buildResultMessage(calc, exactInfo) {
    var tx = textSet();
    var lbl = resultLabels();
    var lines = [];
    lines.push(exactInfo ? tx.exactTitle : tx.resultTitle);
    lines.push(lbl.material + ': ' + (tx.materials[calc.materialKey] || calc.materialKey));
    if (calc.colorKey) lines.push(lbl.color + ': ' + colorLabelFromId(calc.colorKey, tx));
    lines.push(lbl.process + ': ' + (tx.process[calc.processKey] || calc.processKey));

    if (calc.volumeCm3 != null) {
      lines.push(lbl.size + ': ' + (exactInfo ? (calc.volumeCm3.toFixed(1) + 'cm³') : calc.sizeText));
      if (calc.weightG != null) lines.push(lbl.weight + ': ' + calc.weightG.toFixed(1) + 'g');
    } else if (calc.areaCm2 != null) {
      lines.push(lbl.size + ': ' + (exactInfo ? (calc.areaCm2.toFixed(1) + 'cm²') : calc.sizeText));
    }

    if (calc.extra === 'prototype') {
      lines.push(prototypeLine(formatCurrency(calc.priceMin), formatCurrency(calc.priceMax), lbl.perPiece));
    } else {
      lines.push(lbl.price + ': ca. €' + formatCurrency(calc.priceMin) + ' - €' + formatCurrency(calc.priceMax) + ' ' + lbl.perPiece);
    }

    if (calc.warning) lines.push(calc.warning);

    if (exactInfo && exactInfo.bbox) {
      lines.push(lbl.bbox + ': ' + exactInfo.bbox.x + 'x' + exactInfo.bbox.y + 'x' + exactInfo.bbox.z + ' mm');
      lines.push(lbl.triangles + ': ' + exactInfo.triangles);
    }

    if (exactInfo && exactInfo.pathCm) {
      lines.push(lbl.cutLen + ': ' + exactInfo.pathCm.toFixed(1) + ' cm');
      lines.push(lbl.areaSvg + ': ' + exactInfo.areaCm2.toFixed(1) + ' cm²');
    }

    lines.push('');
    lines.push(tx.shipping);

    return lines.join('\n');
  }

  function showResult(calc, exactInfo) {
    appendMessage(buildResultMessage(calc, exactInfo), 'bot');
    appendProductSuggestions(state.answers.service);
  }

  async function callOllama(userMessage) {
    var messages = [{ role: 'system', content: buildSystemPrompt() }]
      .concat(state.history)
      .concat([{ role: 'user', content: userMessage }]);

    var res = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(60000),
      body: JSON.stringify({
        model: 'mistral:7b',
        stream: false,
        keep_alive: '30m',
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

  function finishQuestionsWithInstantPrice() {
    state.finishedQuestions = true;
    elFileBtn.classList.remove('clippy-hidden');
    var calc = calculatePrice(state.answers, null);
    showResult(calc);
    appendActionButtons();
  }

  async function sendUserMessage() {
    var v = elInput.value.trim();
    if (!v || state.busy) return;
    elInput.value = '';
    appendMessage(v, 'user');

    if (!state.asked || !state.finishedQuestions) {
      appendMessage(textSet().askFirst, 'bot');
      return;
    }

    if (!state.followupEnabled) {
      appendMessage(textSet().chatLocked, 'bot');
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
    if (!state.finishedQuestions) {
      appendMessage(tx.askFirst, 'bot');
      return;
    }

    var service = state.answers.service;
    var lower = file.name.toLowerCase();
    var isStl = /\.stl$/i.test(lower);
    var isSvg = /\.svg$/i.test(lower);
    if (!isStl && !isSvg) {
      appendMessage(tx.fileErr, 'bot');
      return;
    }

    if ((service === 'laser_cut' || service === 'laser_engrave') && isStl) {
      appendMessage(tx.stlFor3d, 'bot');
      return;
    }
    if ((service === 'fdm' || service === 'resin' || service === 'prototype') && isSvg) {
      appendMessage(tx.svgForLaser, 'bot');
      return;
    }

    var reader = new FileReader();
    reader.onload = function (ev) {
      try {
        if (isStl) {
          var stl = analyzeSTL(ev.target.result);
          var calc = calculatePrice(state.answers, { volumeCm3: stl.volumeCm3 });
          showResult(calc, stl);
        } else {
          var svgText = typeof ev.target.result === 'string' ? ev.target.result : new TextDecoder().decode(ev.target.result);
          var svg = analyzeSVG(svgText);
          var calcSvg = calculatePrice(state.answers, { areaCm2: svg.areaCm2, pathCm: svg.pathCm });
          showResult(calcSvg, svg);
        }
      } catch (e) {
        appendMessage(tx.fileErr, 'bot');
      }
    };

    reader.onerror = function () {
      appendMessage(tx.fileErr, 'bot');
    };

    if (isStl) {
      reader.readAsArrayBuffer(file);
    } else {
      reader.readAsText(file);
    }
  }

  function toggleChat() {
    elToggle.classList.remove('clippy-wiggle');
    void elToggle.offsetWidth;
    elToggle.classList.add('clippy-wiggle');
    raiseBrows();

    var hidden = elChat.classList.contains('clippy-hidden');
    if (hidden) {
      hideThought();
      elChat.classList.remove('clippy-hidden');
      if (!state.asked) {
        state.asked = true;
        appendMessage(textSet().intro, 'bot');
        renderNextQuestion();
      }
      setTimeout(function () { elInput.focus(); }, 0);
    } else {
      elChat.classList.add('clippy-hidden');
      startThoughtCycle();
      elMessages.innerHTML = '';
      state.asked = false;
      state.step = 0;
      state.answers = {};
      state.finishedQuestions = false;
      state.busy = false;
      state.history = [];
      state.followupEnabled = false;
      state.actionsShown = false;
      elFileBtn.classList.add('clippy-hidden');
      setBusy(false);
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

  document.addEventListener('mousemove', function (e) {
    var svg = document.getElementById('clippy-svg');
    if (!svg) return;
    var rect = svg.getBoundingClientRect();
    var dx = Math.max(-2.5, Math.min(2.5, ((e.clientX - (rect.left + rect.width / 2)) / window.innerWidth) * 3));
    var dy = Math.max(-2, Math.min(2, ((e.clientY - (rect.top + rect.height * 0.35)) / window.innerHeight) * 2));
    var pL = document.querySelector('.clippy-pupil-l');
    var pR = document.querySelector('.clippy-pupil-r');
    if (pL && pR) {
      pL.setAttribute('cx', 43 + dx);
      pL.setAttribute('cy', 56 + dy);
      pR.setAttribute('cx', 59 + dx);
      pR.setAttribute('cy', 56 + dy);
    }
  });

  document.addEventListener('pita-lang-changed', function () {
    applyLanguageTexts();
    thoughtIndex = 0;
    if (thoughtVisible) {
      thoughtText.textContent = getThoughtMessages()[0];
    }
  });

  startIdle();
})();
