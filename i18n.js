/**
 * PitA i18n — DE / EN / FR / ES / IT
 */

const TRANSLATIONS = {
  'nav.leistungen':   { de:'Leistungen',  en:'Services',    fr:'Services',    es:'Servicios',   it:'Servizi'     },
  'nav.materialien':  { de:'Materialien', en:'Materials',   fr:'Matériaux',   es:'Materiales',  it:'Materiali'   },
  'nav.katalog':      { de:'Katalog',     en:'Catalogue',   fr:'Catalogue',   es:'Catálogo',    it:'Catalogo'    },
  'nav.galerie':      { de:'Galerie',     en:'Gallery',     fr:'Galerie',     es:'Galería',     it:'Galleria'    },
  'nav.ablauf':       { de:'Ablauf',      en:'Process',     fr:'Processus',   es:'Proceso',     it:'Processo'    },
  'nav.kontakt':      { de:'Kontakt',     en:'Contact',     fr:'Contact',     es:'Contacto',    it:'Contatto'    },
  'nav.blog':         { de:'Blog',        en:'Blog',        fr:'Blog',        es:'Blog',        it:'Blog'        },
  'nav.faq':          { de:'FAQ',         en:'FAQ',         fr:'FAQ',         es:'FAQ',         it:'FAQ'         },

  'skip.link':     { de:'Zum Inhalt springen', en:'Skip to content', fr:'Aller au contenu', es:'Saltar al contenido', it:'Vai al contenuto' },

  'hero.tagline':  { de:'Wo pittoreske Landschaft auf Innovation trifft', en:'Where picturesque landscapes meet innovation', fr:"Où les paysages pittoresques rencontrent l'innovation", es:'Donde los paisajes pintorescos se encuentran con la innovación', it:"Dove i paesaggi pittoreschi incontrano l'innovazione" },
  'hero.sub':      { de:'3D-Druck · Lasercutting · Lasergravur · Prototyping', en:'3D Printing · Laser Cutting · Laser Engraving · Prototyping', fr:'Impression 3D · Découpe laser · Gravure laser · Prototypage', es:'Impresión 3D · Corte láser · Grabado láser · Prototipado', it:'Stampa 3D · Taglio laser · Incisione laser · Prototipazione' },
  'hero.eco':      { de:'☀️ Überwiegend mit PV-Energie produziert', en:'☀️ Produced mostly with solar energy', fr:"☀️ Produit principalement avec de l'énergie solaire", es:'☀️ Producido principalmente con energía solar', it:"☀️ Prodotto principalmente con energia solare" },
  'hero.cta':      { de:'Angebot anfragen', en:'Request a quote', fr:'Demander un devis', es:'Solicitar presupuesto', it:'Richiedi un preventivo' },

  'section.leistungen':   { de:'Unsere Leistungen',  en:'Our Services',    fr:'Nos Services',    es:'Nuestros Servicios', it:'I Nostri Servizi'  },
  'section.projekte':     { de:'Unsere Projekte',    en:'Our Projects',    fr:'Nos Projets',     es:'Nuestros Proyectos', it:'I Nostri Progetti' },
  'section.ablauf':       { de:"So funktioniert's",  en:'How it works',    fr:'Comment ça marche', es:'Cómo funciona',   it:'Come funziona'     },
  'section.kontakt':      { de:'Kontakt & Angebot',  en:'Contact & Quote', fr:'Contact & Devis', es:'Contacto y Presupuesto', it:'Contatto e Preventivo' },

  'card.3ddruck':      { de:'3D-Druck',      en:'3D Printing',   fr:'Impression 3D', es:'Impresión 3D',  it:'Stampa 3D'      },
  'card.laser':        { de:'Lasercutting',  en:'Laser Cutting', fr:'Découpe laser', es:'Corte láser',   it:'Taglio laser'   },
  'card.gravur':       { de:'Lasergravur',   en:'Laser Engraving', fr:'Gravure laser', es:'Grabado láser', it:'Incisione laser'},
  'card.proto':        { de:'Prototyping',   en:'Prototyping',   fr:'Prototypage',   es:'Prototipado',   it:'Prototipazione' },
  'card.resin':        { de:'Resin Druck',   en:'Resin Printing',fr:'Impression résine', es:'Impresión resina', it:'Stampa resina' },

  'card.3ddruck.desc': { de:'Vom Einzelstück bis zur Serie — FDM mit Bambu Lab H2D & P1S.', en:'From single parts to series — FDM with Bambu Lab H2D & P1S.', fr:'De la pièce unique à la série — FDM avec Bambu Lab H2D & P1S.', es:'Desde piezas únicas hasta series — FDM con Bambu Lab H2D & P1S.', it:'Dal singolo pezzo alla serie — FDM con Bambu Lab H2D & P1S.' },
  'card.laser.desc':   { de:'Millimetergenaue Schnitte in Holz, Acryl und mehr — mit Creality & Snapmaker.', en:'Millimeter-precise cuts in wood, acrylic and more.', fr:'Coupes millimétriques dans le bois, acrylique et plus.', es:'Cortes milimétricos en madera, acrílico y más.', it:'Tagli millimetrici in legno, acrilico e altro.' },
  'card.gravur.desc':  { de:'Präzise Personalisierung auf Holz, Metall, Glas und mehr.', en:'Precise personalisation on wood, metal, glass and more.', fr:'Personnalisation précise sur bois, métal, verre et plus.', es:'Personalización precisa en madera, metal, vidrio y más.', it:'Personalizzazione precisa su legno, metallo, vetro e altro.' },
  'card.proto.desc':   { de:'Von der Idee zum Modell in 24–72h — iterativ und bezahlbar.', en:'From idea to model in 24–72h — iterative and affordable.', fr:"De l'idée au modèle en 24–72h — itératif et abordable.", es:'De la idea al modelo en 24–72h — iterativo y asequible.', it:"Dall'idea al modello in 24–72h — iterativo e conveniente." },
  'card.resin.desc':   { de:'Hochpräzise Harz-Drucke für Detailarbeiten und Oberflächenqualität.', en:'High-precision resin prints for detail work and surface quality.', fr:'Impressions résine haute précision pour travaux de détail.', es:'Impresiones de resina de alta precisión para trabajos de detalle.', it:'Stampe in resina ad alta precisione per lavori di dettaglio.' },

  'ablauf.step1':      { de:'Anfrage senden',      en:'Send request',        fr:'Envoyer la demande',    es:'Enviar solicitud',       it:'Invia richiesta'       },
  'ablauf.step2':      { de:'Angebot erhalten',    en:'Receive quote',       fr:'Recevoir le devis',     es:'Recibir presupuesto',    it:'Ricevi preventivo'     },
  'ablauf.step3':      { de:'Fertigung & Versand', en:'Production & Shipping', fr:'Production & Livraison', es:'Producción y Envío', it:'Produzione e Spedizione' },
  'ablauf.step1.desc': { de:'Beschreibe dein Projekt oder lade eine Datei hoch — STL, 3MF, DXF, SVG.', en:'Describe your project or upload a file — STL, 3MF, DXF, SVG.', fr:'Décrivez votre projet ou téléchargez un fichier — STL, 3MF, DXF, SVG.', es:'Describe tu proyecto o sube un archivo — STL, 3MF, DXF, SVG.', it:'Descrivi il tuo progetto o carica un file — STL, 3MF, DXF, SVG.' },
  'ablauf.step2.desc': { de:'Wir prüfen deine Datei und senden dir ein individuelles Angebot.', en:'We check your file and send you an individual quote.', fr:'Nous vérifions votre fichier et vous envoyons un devis individuel.', es:'Revisamos tu archivo y te enviamos un presupuesto individual.', it:'Controlliamo il tuo file e ti inviamo un preventivo individuale.' },
  'ablauf.step3.desc': { de:'Nach Freigabe fertigen wir dein Teil und liefern direkt zu dir.', en:'After approval we produce your part and deliver directly to you.', fr:'Après validation, nous fabriquons votre pièce et la livrons.', es:'Tras la aprobación fabricamos tu pieza y la entregamos.', it:"Dopo l'approvazione produciamo il tuo pezzo e lo consegniamo." },

  'galerie.1': { de:'3D-Druck Prototyp',   en:'3D Print Prototype',       fr:'Prototype impression 3D', es:'Prototipo impresión 3D', it:'Prototipo stampa 3D' },
  'galerie.2': { de:'Lasercut Holzschild', en:'Laser Cut Wood Sign',       fr:'Panneau bois découpé laser', es:'Letrero madera láser', it:'Insegna legno laser' },
  'galerie.3': { de:'Lasergravur Detail',  en:'Laser Engraving Detail',    fr:'Détail gravure laser',    es:'Detalle grabado láser', it:'Dettaglio incisione laser' },
  'galerie.4': { de:'Prototyping Gehäuse', en:'Prototyping Housing',       fr:'Boîtier prototypage',     es:'Carcasa prototipado',   it:'Alloggiamento prototipazione' },
  'galerie.5': { de:'Lasergravur Holz',    en:'Laser Engraving Wood',      fr:'Gravure laser bois',      es:'Grabado láser madera',  it:'Incisione laser legno' },
  'galerie.6': { de:'Resin Druck',         en:'Resin Print',               fr:'Impression résine',       es:'Impresión resina',      it:'Stampa resina' },

  // === Kontakt-Formular ===
  'kontakt.label.name':    { de:'Name',                 en:'Name',               fr:'Nom',                es:'Nombre',            it:'Nome'               },
  'kontakt.label.email':   { de:'E-Mail',               en:'Email',              fr:'E-mail',             es:'Correo electrónico', it:'E-mail'             },
  'kontakt.label.service': { de:'Leistung',             en:'Service',            fr:'Service',            es:'Servicio',          it:'Servizio'           },
  'kontakt.label.message': { de:'Projektbeschreibung',  en:'Project description', fr:'Description du projet', es:'Descripción del proyecto', it:'Descrizione del progetto' },
  'kontakt.select.default':{ de:'Leistung wählen',      en:'Select service',     fr:'Choisir un service', es:'Elegir servicio',   it:'Scegli servizio'    },
  'kontakt.ph.name':  { de:'Dein Name',                  en:'Your name',              fr:'Votre nom',              es:'Tu nombre',             it:'Il tuo nome'            },
  'kontakt.ph.email': { de:'deine@email.de',              en:'your@email.com',         fr:'votre@email.fr',         es:'tu@email.es',            it:'tua@email.it'           },
  'kontakt.ph.msg':   { de:'Beschreibe dein Projekt...',  en:'Describe your project...', fr:'Décrivez votre projet...', es:'Describe tu proyecto...', it:'Descrivi il tuo progetto...' },
  'kontakt.filedrop':      { de:'📎 Datei anhängen (optional) — <span class="accent">klicken oder ziehen</span>', en:'📎 Attach file (optional) — <span class="accent">click or drag</span>', fr:'📎 Joindre un fichier (optionnel) — <span class="accent">cliquer ou glisser</span>', es:'📎 Adjuntar archivo (opcional) — <span class="accent">clic o arrastrar</span>', it:'📎 Allega file (opzionale) — <span class="accent">clicca o trascina</span>' },
  'kontakt.filedrop.formats': { de:'STL, 3MF, SVG, DXF, PDF, JPG, PNG (max. 25 MB)', en:'STL, 3MF, SVG, DXF, PDF, JPG, PNG (max. 25 MB)', fr:'STL, 3MF, SVG, DXF, PDF, JPG, PNG (max. 25 Mo)', es:'STL, 3MF, SVG, DXF, PDF, JPG, PNG (máx. 25 MB)', it:'STL, 3MF, SVG, DXF, PDF, JPG, PNG (max. 25 MB)' },
  'kontakt.drop':     { de:'📎 STL, 3MF, SVG, DXF hochladen (max. 25 MB)', en:'📎 Upload STL, 3MF, SVG, DXF (max. 25 MB)', fr:'📎 Télécharger STL, 3MF, SVG, DXF (max. 25 Mo)', es:'📎 Subir STL, 3MF, SVG, DXF (máx. 25 MB)', it:'📎 Carica STL, 3MF, SVG, DXF (max. 25 MB)' },
  'kontakt.senden':   { de:'Angebot anfordern', en:'Request quote', fr:'Demander un devis', es:'Solicitar presupuesto', it:'Richiedi preventivo' },

  // === Footer ===
  'footer.tagline':    { de:'Präzision aus den Alpen.', en:'Precision from the Alps.', fr:'Précision des Alpes.', es:'Precisión de los Alpes.', it:'Precisione dalle Alpi.' },
  'footer.impressum':  { de:'Impressum',   en:'Legal Notice',    fr:'Mentions légales',         es:'Aviso legal',             it:'Note legali'   },
  'footer.datenschutz':{ de:'Datenschutz', en:'Privacy Policy',  fr:'Politique de confidentialité', es:'Política de privacidad', it:'Privacy Policy' },
  'footer.copy':       { de:'© 2026 PitA. Alle Rechte vorbehalten.', en:'© 2026 PitA. All rights reserved.', fr:'© 2026 PitA. Tous droits réservés.', es:'© 2026 PitA. Todos los derechos reservados.', it:'© 2026 PitA. Tutti i diritti riservati.' },

  // === Leistungen Unterseiten - Abschnitt-Titel ===
  'sub.materialien.title': { de:'Materialien',      en:'Materials',     fr:'Matériaux',      es:'Materiales',    it:'Materiali'      },
  'sub.equipment.title':   { de:'Equipment',        en:'Equipment',     fr:'Équipement',     es:'Equipamiento',  it:'Attrezzatura'   },
  'sub.anwendungen.title': { de:'Anwendungen',      en:'Applications',  fr:'Applications',   es:'Aplicaciones',  it:'Applicazioni'   },
  'sub.fuerwen':           { de:'Für wen?',          en:'Who is it for?', fr:'Pour qui ?',    es:'¿Para quién?',  it:'Per chi?'       },
  'sub.turnaround':        { de:'Turnaround',        en:'Turnaround',    fr:'Délai',          es:'Plazo',         it:'Tempi'          },
  'sub.waswirbietentitle': { de:'Was wir bieten',    en:'What we offer', fr:'Ce que nous offrons', es:'Lo que ofrecemos', it:'Cosa offriamo' },
  'sub.oberflaechen':      { de:'Oberflächen',       en:'Surfaces',      fr:'Surfaces',       es:'Superficies',   it:'Superfici'      },
  'sub.detailgrade':       { de:'Detailgrade',       en:'Detail levels', fr:'Niveaux de détail', es:'Niveles de detalle', it:'Livelli di dettaglio' },
  'sub.warumresin':        { de:'Warum Resin?',      en:'Why Resin?',    fr:'Pourquoi la résine ?', es:'¿Por qué resina?', it:'Perché la resina?' },
  'sub.quote':             { de:'Angebot anfragen',  en:'Request quote', fr:'Demander un devis', es:'Solicitar presupuesto', it:'Richiedi preventivo' },

  // === 3D-Druck Unterseite ===
  '3d.title':      { de:'3D-Druck',   en:'3D Printing',  fr:'Impression 3D', es:'Impresión 3D', it:'Stampa 3D'  },
  '3d.sub':        { de:'FDM-Druck mit Bambu Lab H2D & P1S — vom Einzelstück bis zur Serie.', en:'FDM printing with Bambu Lab H2D & P1S — from single parts to series.', fr:'Impression FDM avec Bambu Lab H2D & P1S — de la pièce unique à la série.', es:'Impresión FDM con Bambu Lab H2D & P1S — desde piezas únicas hasta series.', it:'Stampa FDM con Bambu Lab H2D & P1S — dal singolo pezzo alla serie.' },
  '3d.mat.standard':{ de:'Standard: PLA, PETG, ABS, ASA, TPU', en:'Standard: PLA, PETG, ABS, ASA, TPU', fr:'Standard : PLA, PETG, ABS, ASA, TPU', es:'Estándar: PLA, PETG, ABS, ASA, TPU', it:'Standard: PLA, PETG, ABS, ASA, TPU' },
  '3d.mat.eng':    { de:'Engineering: PA (Nylon), PC, PET', en:'Engineering: PA (Nylon), PC, PET', fr:'Ingénierie : PA (Nylon), PC, PET', es:'Ingeniería: PA (Nylon), PC, PET', it:'Ingegneria: PA (Nylon), PC, PET' },
  '3d.mat.cf':     { de:'Faserverstärkt: PLA-CF, PETG-CF, PA-CF, PC-CF, ABS-CF', en:'Fiber-reinforced: PLA-CF, PETG-CF, PA-CF, PC-CF, ABS-CF', fr:'Renforcé fibres : PLA-CF, PETG-CF, PA-CF, PC-CF, ABS-CF', es:'Reforzado con fibra: PLA-CF, PETG-CF, PA-CF, PC-CF, ABS-CF', it:'Rinforzato con fibra: PLA-CF, PETG-CF, PA-CF, PC-CF, ABS-CF' },
  '3d.mat.hp':     { de:'High-Performance: PPA-CF, PPS, PPS-CF', en:'High-Performance: PPA-CF, PPS, PPS-CF', fr:'Haute performance : PPA-CF, PPS, PPS-CF', es:'Alto rendimiento: PPA-CF, PPS, PPS-CF', it:'High-Performance: PPA-CF, PPS, PPS-CF' },
  '3d.mat.support':{ de:'Support: PVA, BVOH (wasserlöslich)', en:'Support: PVA, BVOH (water-soluble)', fr:'Support : PVA, BVOH (hydrosoluble)', es:'Soporte: PVA, BVOH (soluble en agua)', it:'Supporto: PVA, BVOH (idrosolubile)' },
  '3d.multi':      { de:'Multi-Material & Multi-Color möglich', en:'Multi-material & multi-color possible', fr:'Multi-matière & multi-couleur possible', es:'Multi-material y multi-color posible', it:'Multi-materiale e multi-colore possibile' },
  '3d.leistung1':  { de:'Einzelstücke & Kleinserien', en:'Single pieces & small series', fr:'Pièces uniques & petites séries', es:'Piezas únicas & series cortas', it:'Pezzi singoli & piccole serie' },
  '3d.leistung2':  { de:'Funktionsprototypen & Gehäuse', en:'Functional prototypes & housings', fr:'Prototypes fonctionnels & boîtiers', es:'Prototipos funcionales & carcasas', it:'Prototipi funzionali & alloggiamenti' },
  '3d.leistung3':  { de:'Multi-Material-Druck (z.B. TPU + PLA)', en:'Multi-material printing (e.g. TPU + PLA)', fr:'Impression multi-matière (ex. TPU + PLA)', es:'Impresión multi-material (ej. TPU + PLA)', it:'Stampa multi-materiale (es. TPU + PLA)' },
  '3d.leistung4':  { de:'Nachbearbeitung auf Wunsch (Schleifen, Lackieren)', en:'Post-processing on request (sanding, painting)', fr:'Post-traitement sur demande (ponçage, peinture)', es:'Post-procesado bajo demanda (lijado, pintado)', it:'Post-lavorazione su richiesta (levigatura, verniciatura)' },

  // === Lasercutting Unterseite ===
  'laser.title':  { de:'Lasercutting', en:'Laser Cutting', fr:'Découpe laser', es:'Corte láser',  it:'Taglio laser'  },
  'laser.sub':    { de:'Millimetergenaue Schnitte mit Creality Falcon & Snapmaker A350T.', en:'Millimeter-precise cuts with Creality Falcon & Snapmaker A350T.', fr:'Coupes millimétriques avec Creality Falcon & Snapmaker A350T.', es:'Cortes milimétricos con Creality Falcon & Snapmaker A350T.', it:'Tagli millimetrici con Creality Falcon & Snapmaker A350T.' },
  'lc.mat1':      { de:'Sperrholz, MDF, Massivholz (bis 8mm)', en:'Plywood, MDF, solid wood (up to 8mm)', fr:"Contreplaqué, MDF, bois massif (jusqu'à 8mm)", es:'Madera contrachapada, MDF, madera maciza (hasta 8mm)', it:'Compensato, MDF, legno massiccio (fino a 8mm)' },
  'lc.mat2':      { de:'Acryl transparent & farbig (bis 6mm)', en:'Acrylic transparent & coloured (up to 6mm)', fr:"Acrylique transparent & coloré (jusqu'à 6mm)", es:'Acrílico transparente y de color (hasta 6mm)', it:'Acrilico trasparente e colorato (fino a 6mm)' },
  'lc.mat3':      { de:'Leder, Papier, Karton, Stoff', en:'Leather, paper, cardboard, fabric', fr:'Cuir, papier, carton, tissu', es:'Cuero, papel, cartón, tela', it:'Pelle, carta, cartone, tessuto' },
  'lc.app1':      { de:'Schilder, Logos & Schriftzüge', en:'Signs, logos & lettering', fr:'Panneaux, logos & lettrage', es:'Señales, logos & letreros', it:'Insegne, loghi & scritte' },
  'lc.app2':      { de:'Dekorative Elemente & Geschenke', en:'Decorative elements & gifts', fr:'Éléments décoratifs & cadeaux', es:'Elementos decorativos & regalos', it:'Elementi decorativi & regali' },
  'lc.app3':      { de:'Verpackungen & Displays', en:'Packaging & displays', fr:'Emballages & présentoirs', es:'Embalajes & displays', it:'Imballaggi & display' },
  'lc.app4':      { de:'Technische Teile & Prototypen', en:'Technical parts & prototypes', fr:'Pièces techniques & prototypes', es:'Piezas técnicas & prototipos', it:'Parti tecniche & prototipi' },

  // === Lasergravur Unterseite ===
  'gravur.title': { de:'Lasergravur',  en:'Laser Engraving', fr:'Gravure laser', es:'Grabado láser', it:'Incisione laser' },
  'gravur.sub':   { de:'Präzise Gravuren für Branding, Personalisierung und Detailarbeit.', en:'Precise engravings for branding, personalisation and detail work.', fr:'Gravures précises pour le branding, la personnalisation et le travail de détail.', es:'Grabados precisos para branding, personalización y trabajo de detalle.', it:'Incisioni precise per branding, personalizzazione e lavoro di dettaglio.' },
  'lg.surf1':     { de:'Holz, Bambus, Kork', en:'Wood, bamboo, cork', fr:'Bois, bambou, liège', es:'Madera, bambú, corcho', it:'Legno, bambù, sughero' },
  'lg.surf2':     { de:'Metall (beschichtet / eloxiert)', en:'Metal (coated / anodised)', fr:'Métal (revêtu / anodisé)', es:'Metal (recubierto / anodizado)', it:'Metallo (rivestito / anodizzato)' },
  'lg.surf3':     { de:'Glas, Keramik, Stein', en:'Glass, ceramic, stone', fr:'Verre, céramique, pierre', es:'Vidrio, cerámica, piedra', it:'Vetro, ceramica, pietra' },
  'lg.surf4':     { de:'Leder, Acryl', en:'Leather, acrylic', fr:'Cuir, acrylique', es:'Cuero, acrílico', it:'Pelle, acrilico' },
  'lg.det1':      { de:'Standard (0.1mm) — für Text & Logos', en:'Standard (0.1mm) — for text & logos', fr:'Standard (0.1mm) — pour texte & logos', es:'Estándar (0.1mm) — para texto y logos', it:'Standard (0.1mm) — per testo e loghi' },
  'lg.det2':      { de:'Fein (0.05mm) — Foto-Qualität', en:'Fine (0.05mm) — photo quality', fr:'Fin (0.05mm) — qualité photo', es:'Fino (0.05mm) — calidad fotográfica', it:'Fine (0.05mm) — qualità fotografica' },
  'lg.det3':      { de:'Grob (0.15mm) — schnelle Großflächen', en:'Coarse (0.15mm) — fast large areas', fr:'Grossier (0.15mm) — grandes surfaces rapides', es:'Grueso (0.15mm) — grandes superficies rápidas', it:'Grezzo (0.15mm) — grandi superfici veloci' },
  'lg.app1':      { de:'Logo-Branding & Beschriftung', en:'Logo branding & labelling', fr:'Marquage logo & étiquetage', es:'Branding logo & etiquetado', it:'Logo branding & etichettatura' },
  'lg.app2':      { de:'Personalisierte Geschenke', en:'Personalised gifts', fr:'Cadeaux personnalisés', es:'Regalos personalizados', it:'Regali personalizzati' },
  'lg.app3':      { de:'QR-Codes & Seriennummern', en:'QR codes & serial numbers', fr:'Codes QR & numéros de série', es:'Códigos QR & números de serie', it:'Codici QR & numeri di serie' },
  'lg.app4':      { de:'Foto-Gravuren', en:'Photo engravings', fr:'Gravures photo', es:'Grabados fotográficos', it:'Incisioni fotografiche' },

  // === Prototyping Unterseite ===
  'proto.title':  { de:'Prototyping',  en:'Prototyping',  fr:'Prototypage',  es:'Prototipado',   it:'Prototipazione' },
  'proto.sub':    { de:'Von der Idee zum funktionalen Modell — schnell, iterativ, bezahlbar.', en:'From idea to functional model — fast, iterative, affordable.', fr:"De l'idée au modèle fonctionnel — rapide, itératif, abordable.", es:'De la idea al modelo funcional — rápido, iterativo, asequible.', it:"Dall'idea al modello funzionale — veloce, iterativo, conveniente." },
  'proto.for1':   { de:'Entwickler & Ingenieure', en:'Developers & engineers', fr:'Développeurs & ingénieurs', es:'Desarrolladores & ingenieros', it:'Sviluppatori & ingegneri' },
  'proto.for2':   { de:'Maker & Bastler', en:'Makers & hobbyists', fr:'Makers & bricoleurs', es:'Makers & aficionados', it:'Maker & hobbisti' },
  'proto.for3':   { de:'Startups & Produktdesigner', en:'Startups & product designers', fr:'Startups & designers produit', es:'Startups & diseñadores de producto', it:'Startup & product designer' },
  'proto.ta1':    { de:'Schnelle Iterationen (24–72h)', en:'Fast iterations (24–72h)', fr:'Itérations rapides (24–72h)', es:'Iteraciones rápidas (24–72h)', it:'Iterazioni veloci (24–72h)' },
  'proto.ta2':    { de:'Funktionsmodelle & Passproben', en:'Functional models & fit tests', fr:"Modèles fonctionnels & essais d'ajustement", es:'Modelos funcionales & pruebas de ajuste', it:'Modelli funzionali & prove di adattamento' },
  'proto.ta3':    { de:'Kleinserien bis 50 Stück', en:'Small series up to 50 pieces', fr:"Petites séries jusqu'à 50 pièces", es:'Series cortas hasta 50 piezas', it:'Piccole serie fino a 50 pezzi' },
  'proto.off1':   { de:'Beratung zu Material & Fertigungsweg', en:'Consultation on material & manufacturing', fr:'Conseil sur matériau & procédé de fabrication', es:'Consultoría sobre material & fabricación', it:'Consulenza su materiale & processo produttivo' },
  'proto.off2':   { de:'FDM, Resin oder Laser — je nach Anforderung', en:'FDM, resin or laser — depending on requirements', fr:'FDM, résine ou laser — selon les besoins', es:'FDM, resina o láser — según los requisitos', it:'FDM, resina o laser — a seconda dei requisiti' },
  'proto.off3':   { de:'Nachbearbeitung & Finishing', en:'Post-processing & finishing', fr:'Post-traitement & finition', es:'Post-procesado & acabado', it:'Post-lavorazione & finitura' },
  'proto.off4':   { de:'Iterative Optimierung bis zum finalen Teil', en:'Iterative optimisation to the final part', fr:"Optimisation itérative jusqu'à la pièce finale", es:'Optimización iterativa hasta la pieza final', it:'Ottimizzazione iterativa fino al pezzo finale' },

  // === Resin-Druck Unterseite ===
  'resin.title':  { de:'Resin-Druck',  en:'Resin Printing', fr:'Impression résine', es:'Impresión resina', it:'Stampa resina' },
  'resin.sub':    { de:'Hochpräzise Harz-Drucke (SLA/DLP) für maximale Detailtreue.', en:'High-precision resin prints (SLA/DLP) for maximum detail.', fr:'Impressions résine haute précision (SLA/DLP) pour un détail maximum.', es:'Impresiones de resina de alta precisión (SLA/DLP) para máximo detalle.', it:'Stampe in resina ad alta precisione (SLA/DLP) per massimo dettaglio.' },
  'resin.why.desc': { de:'Dort, wo klassischer FDM-Druck an seine Grenzen stößt, glänzt der Resin-Druck. Durch UV-härtende Harze erreichen wir Oberflächenqualitäten und Detailgrade, die fast Spritzguss-Niveau entsprechen.', en:'Where traditional FDM printing reaches its limits, resin printing shines. With UV-curing resins we achieve surface qualities and detail levels close to injection moulding.', fr:"Là où l'impression FDM classique atteint ses limites, l'impression résine brille. Avec des résines UV, nous atteignons des qualités de surface proches du moulage par injection.", es:'Donde la impresión FDM clásica alcanza sus límites, la impresión en resina brilla. Con resinas UV logramos calidades de superficie cercanas a la inyección.', it:"Dove la stampa FDM classica raggiunge i suoi limiti, la stampa in resina brilla. Con resine UV raggiungiamo qualità superficiali vicine allo stampaggio a iniezione." },
  'resin.mat1':   { de:'Standard-Resin (hohe Detailtreue)', en:'Standard resin (high detail accuracy)', fr:'Résine standard (haute précision)', es:'Resina estándar (alta fidelidad de detalle)', it:'Resina standard (alta fedeltà di dettaglio)' },
  'resin.mat2':   { de:'Tough Resin (mechanisch belastbar)', en:'Tough resin (mechanically durable)', fr:'Résine tough (résistante mécaniquement)', es:'Resina tough (resistente mecánicamente)', it:'Resina tough (resistente meccanicamente)' },
  'resin.mat3':   { de:'Flexible Resin (biegsam)', en:'Flexible resin (bendable)', fr:'Résine flexible (souple)', es:'Resina flexible (flexible)', it:'Resina flessibile (pieghevole)' },
  'resin.mat4':   { de:'Castable Resin (für Gussformen)', en:'Castable resin (for casting moulds)', fr:'Résine castable (pour moules)', es:'Resina castable (para moldes)', it:'Resina castable (per stampi)' },
  'resin.app1':   { de:'Miniaturen für Tabletop & Spiele', en:'Miniatures for tabletop & games', fr:'Figurines pour jeux de plateau', es:'Miniaturas para juegos de mesa', it:'Miniature per giochi da tavolo' },
  'resin.app2':   { de:'Schmuck-Designs & Gussformen', en:'Jewellery designs & casting moulds', fr:'Designs bijoux & moules de coulée', es:'Diseños de joyería & moldes de fundición', it:'Design gioielli & stampi per colata' },
  'resin.app3':   { de:'Hochpräzise technische Prototypen', en:'High-precision technical prototypes', fr:'Prototypes techniques haute précision', es:'Prototipos técnicos de alta precisión', it:'Prototipi tecnici ad alta precisione' },
  'resin.app4':   { de:'Zahnmedizinische Modelle', en:'Dental models', fr:'Modèles dentaires', es:'Modelos dentales', it:'Modelli dentali' },

  // === Katalog ===
  'katalog.title': { de:'Katalog',    en:'Catalogue', fr:'Catalogue', es:'Catálogo',  it:'Catalogo'  },
  'katalog.sub':   { de:'Unser Komplettangebot — alle Sparten, eine Werkstatt.', en:'Our full range — all services, one workshop.', fr:'Notre offre complète — tous les services, un seul atelier.', es:'Nuestra oferta completa — todos los servicios, un taller.', it:"La nostra offerta completa — tutti i servizi, un'officina." },
  'kat.func':      { de:'⚙️ Funktionsteile & Ersatzteile', en:'⚙️ Functional & Spare Parts', fr:'⚙️ Pièces fonctionnelles & rechange', es:'⚙️ Piezas funcionales & repuesto', it:'⚙️ Parti funzionali & ricambio' },
  'kat.func.desc': { de:"Kaputt? Gibt's nicht mehr? Wir drucken es neu.", en:"Broken? Out of stock? We'll print it fresh.", fr:'Cassé ? Plus disponible ? On le réimprime.', es:'¿Roto? ¿Sin stock? Lo imprimimos nuevo.', it:'Rotto? Non più disponibile? Lo stampiamo nuovo.' },
  'kat.func.item1':     { de:'Zahnräder & Mechanik',     en:'Gears & Mechanics',        fr:'Engrenages & Mécanique',    es:'Engranajes & Mecánica',     it:'Ingranaggi & Meccanica'     },
  'kat.func.item1.desc':{ de:'Verschleißteile, Adapter, Halterungen', en:'Wear parts, adapters, mounts', fr:"Pièces d'usure, adaptateurs, supports", es:'Piezas de desgaste, adaptadores, soportes', it:'Parti di usura, adattatori, supporti' },
  'kat.func.item2':     { de:'Gehäuse & Abdeckungen',    en:'Housings & Covers',         fr:'Boîtiers & Couvercles',     es:'Carcasas & Cubiertas',      it:'Alloggiamenti & Coperture'  },
  'kat.func.item2.desc':{ de:'Elektronik-Gehäuse, Schutzabdeckungen', en:'Electronics housings, protective covers', fr:'Boîtiers électroniques, couvercles de protection', es:'Carcasas electrónicas, cubiertas protectoras', it:'Alloggiamenti elettronici, coperture protettive' },
  'kat.func.item3':     { de:'Clips & Verbinder',        en:'Clips & Connectors',        fr:'Clips & Connecteurs',       es:'Clips & Conectores',        it:'Clip & Connettori'          },
  'kat.func.item3.desc':{ de:'Kabelclips, Rohrhalter, Schnappverschlüsse', en:'Cable clips, pipe holders, snap closures', fr:'Clips de câble, supports de tuyaux, fermetures à pression', es:'Clips de cable, soportes de tubo, cierres a presión', it:'Clip per cavi, supporti per tubi, chiusure a scatto' },
  'kat.deko':      { de:'🎨 Deko & Geschenke', en:'🎨 Decoration & Gifts', fr:'🎨 Déco & Cadeaux', es:'🎨 Decoración & Regalos', it:'🎨 Decorazione & Regali' },
  'kat.deko.desc': { de:'Personalisierte Einzelstücke mit Charakter.', en:'Personalised unique pieces with character.', fr:'Pièces uniques personnalisées avec du caractère.', es:'Piezas únicas personalizadas con carácter.', it:'Pezzi unici personalizzati con carattere.' },
  'kat.deko.item1':     { de:'Gravierte Holzschilder',   en:'Engraved Wood Signs',       fr:'Panneaux en bois gravés',   es:'Letreros de madera grabados', it:'Insegne in legno incise'   },
  'kat.deko.item1.desc':{ de:'Namen, Sprüche, Logos auf Echtholz', en:'Names, quotes, logos on real wood', fr:'Noms, citations, logos sur bois véritable', es:'Nombres, frases, logos en madera real', it:'Nomi, citazioni, loghi su legno vero' },
  'kat.deko.item2':     { de:'3D-Druck Figuren',         en:'3D Print Figures',           fr:'Figurines impression 3D',   es:'Figuras impresión 3D',       it:'Figure stampa 3D'           },
  'kat.deko.item2.desc':{ de:'Miniaturen, Deko-Objekte, Vasen', en:'Miniatures, decorative objects, vases', fr:'Miniatures, objets décoratifs, vases', es:'Miniaturas, objetos decorativos, jarrones', it:'Miniature, oggetti decorativi, vasi' },
  'kat.deko.item3':     { de:'Personalisierte Geschenke', en:'Personalised Gifts',        fr:'Cadeaux personnalisés',     es:'Regalos personalizados',     it:'Regali personalizzati'      },
  'kat.deko.item3.desc':{ de:'Schlüsselanhänger, Untersetzer, Boxen', en:'Keychains, coasters, boxes', fr:'Porte-clés, sous-verres, boîtes', es:'Llaveros, posavasos, cajas', it:'Portachiavi, sottobicchieri, scatole' },
  'kat.biz':       { de:'💼 Business & Branding', en:'💼 Business & Branding', fr:'💼 Business & Branding', es:'💼 Negocio & Branding', it:'💼 Business & Branding' },
  'kat.biz.desc':  { de:'Professionelle Lösungen für Firmen und Marken.', en:'Professional solutions for companies and brands.', fr:'Solutions professionnelles pour entreprises et marques.', es:'Soluciones profesionales para empresas y marcas.', it:'Soluzioni professionali per aziende e marchi.' },
  'kat.biz.item1':      { de:'Firmenschilder',           en:'Company Signs',              fr:"Enseignes d'entreprise",    es:'Letreros de empresa',        it:'Insegne aziendali'          },
  'kat.biz.item1.desc': { de:'Acryl, Holz oder Metall — lasergeschnitten & graviert', en:'Acrylic, wood or metal — laser cut & engraved', fr:'Acrylique, bois ou métal — découpé & gravé au laser', es:'Acrílico, madera o metal — cortado y grabado con láser', it:'Acrilico, legno o metallo — tagliato e inciso al laser' },
  'kat.biz.item2':      { de:'Produkt-Prototypen',       en:'Product Prototypes',         fr:'Prototypes de produits',    es:'Prototipos de productos',    it:'Prototipi di prodotti'      },
  'kat.biz.item2.desc': { de:'Vom Konzept zum anfassbaren Modell', en:'From concept to tangible model', fr:'Du concept au modèle tangible', es:'Del concepto al modelo tangible', it:'Dal concetto al modello tangibile' },
  'kat.biz.item3':      { de:'Kleinserien',              en:'Small Series',               fr:'Petites séries',            es:'Series cortas',              it:'Piccole serie'              },
  'kat.biz.item3.desc': { de:'Verpackungen, Displays, Werbemittel', en:'Packaging, displays, promotional materials', fr:'Emballages, présentoirs, supports publicitaires', es:'Embalajes, displays, material publicitario', it:'Imballaggi, display, materiale promozionale' },
  'kat.maker':     { de:'🔧 Maker & DIY', en:'🔧 Maker & DIY', fr:'🔧 Maker & DIY', es:'🔧 Maker & DIY', it:'🔧 Maker & DIY' },
  'kat.maker.desc':{ de:'Für Bastler, Tüftler und Kreative.', en:'For hobbyists, tinkerers and creatives.', fr:'Pour les bricoleurs et les créatifs.', es:'Para aficionados, inventores y creativos.', it:'Per hobbisti, sperimentatori e creativi.' },
  'kat.maker.item1':     { de:'Smart Home Halterungen',  en:'Smart Home Mounts',          fr:'Supports Smart Home',       es:'Soportes Smart Home',        it:'Supporti Smart Home'        },
  'kat.maker.item1.desc':{ de:'Sensor-Mounts, Kamera-Halter, Kabelmanagement', en:'Sensor mounts, camera holders, cable management', fr:'Supports capteurs, supports caméra, gestion de câbles', es:'Soportes de sensores, soportes de cámara, gestión de cables', it:'Supporti sensori, supporti telecamera, gestione cavi' },
  'kat.maker.item2':     { de:'Werkzeug-Organizer',      en:'Tool Organisers',            fr:'Organisateurs outils',      es:'Organizadores de herramientas', it:'Organizzatori utensili'   },
  'kat.maker.item2.desc':{ de:'Tool-Holder, Bit-Halter, Sortierboxen', en:'Tool holders, bit holders, sorting boxes', fr:'Porte-outils, porte-embouts, boîtes de tri', es:'Portaherramientas, portapuntas, cajas clasificadoras', it:'Portautensili, portapunte, scatole di selezione' },
  'kat.maker.item3':     { de:'Modellbau',               en:'Model Building',             fr:'Modélisme',                 es:'Modelismo',                  it:'Modellismo'                 },
  'kat.maker.item3.desc':{ de:'Architekturmodelle, Gelände, Fahrzeugteile', en:'Architectural models, terrain, vehicle parts', fr:'Maquettes architecturales, terrains, pièces de véhicules', es:'Maquetas arquitectónicas, terrenos, piezas de vehículos', it:'Modelli architettonici, terreni, parti di veicoli' },
  'kat.custom.title':    { de:'Du hast etwas anderes im Kopf?', en:'Got something different in mind?', fr:"Vous avez autre chose en tête ?", es:'¿Tienes algo diferente en mente?', it:'Hai qualcosa di diverso in mente?' },
  'kat.custom.desc':     { de:'Wir fertigen auch individuelle Projekte — schreib uns einfach.', en:'We also make custom projects — just contact us.', fr:'Nous réalisons aussi des projets personnalisés — contactez-nous.', es:'También hacemos proyectos personalizados — escríbenos.', it:'Realizziamo anche progetti personalizzati — contattaci.' },
  'kat.custom.cta':      { de:'📬 Projekt anfragen', en:'📬 Request project', fr:'📬 Demander un projet', es:'📬 Solicitar proyecto', it:'📬 Richiedi progetto' },

  // === Blog ===
  'blog.title':    { de:'Blog',       en:'Blog',      fr:'Blog',      es:'Blog',      it:'Blog'      },
  'blog.sub':      { de:'News, Projekte und Insights aus der Werkstatt.', en:'News, projects and insights from the workshop.', fr:"Actualités, projets et insights de l'atelier.", es:'Noticias, proyectos e insights del taller.', it:"Notizie, progetti e insights dall'officina." },
  'blog.comingsoon': { de:'📎 Weitere Beiträge folgen — stay tuned!', en:'📎 More posts coming soon — stay tuned!', fr:'📎 Plus de publications à venir — restez connectés !', es:'📎 Más publicaciones pronto — ¡estad atentos!', it:'📎 Altri post in arrivo — restate sintonizzati!' },

  // === FAQ ===
  'faq.title':  { de:'Häufige Fragen', en:'Frequently Asked Questions', fr:'Questions fréquentes', es:'Preguntas frecuentes', it:'Domande frequenti' },
  'faq.sub':    { de:'Alles was du wissen musst — und wenn nicht, frag Clippy!', en:'Everything you need to know — and if not, ask Clippy!', fr:'Tout ce que vous devez savoir — sinon, demandez à Clippy !', es:'Todo lo que necesitas saber — ¡si no, pregunta a Clippy!', it:'Tutto ciò che devi sapere — se no, chiedi a Clippy!' },
  'faq.q1':     { de:'Welche Dateiformate akzeptiert ihr?', en:'Which file formats do you accept?', fr:'Quels formats de fichier acceptez-vous ?', es:'¿Qué formatos de archivo aceptáis?', it:'Quali formati di file accettate?' },
  'faq.a1':     { de:'<strong>3D-Druck:</strong> STL, 3MF, OBJ, STEP<br><strong>Lasercutting/-gravur:</strong> SVG, DXF, AI, PDF<br><strong>Bilder für Gravur:</strong> PNG, JPG (min. 300 DPI empfohlen)', en:'<strong>3D Printing:</strong> STL, 3MF, OBJ, STEP<br><strong>Laser cutting/engraving:</strong> SVG, DXF, AI, PDF<br><strong>Images for engraving:</strong> PNG, JPG (min. 300 DPI recommended)', fr:'<strong>Impression 3D :</strong> STL, 3MF, OBJ, STEP<br><strong>Découpe/gravure laser :</strong> SVG, DXF, AI, PDF<br><strong>Images pour gravure :</strong> PNG, JPG (min. 300 DPI recommandé)', es:'<strong>Impresión 3D:</strong> STL, 3MF, OBJ, STEP<br><strong>Corte/grabado láser:</strong> SVG, DXF, AI, PDF<br><strong>Imágenes para grabado:</strong> PNG, JPG (min. 300 DPI recomendado)', it:'<strong>Stampa 3D:</strong> STL, 3MF, OBJ, STEP<br><strong>Taglio/incisione laser:</strong> SVG, DXF, AI, PDF<br><strong>Immagini per incisione:</strong> PNG, JPG (min. 300 DPI consigliati)' },
  'faq.q2':     { de:'Wie lange dauert eine Bestellung?', en:'How long does an order take?', fr:'Combien de temps prend une commande ?', es:'¿Cuánto tarda un pedido?', it:'Quanto tempo richiede un ordine?' },
  'faq.a2':     { de:'<strong>Prototypen:</strong> 24–72 Stunden<br><strong>Kleinserien:</strong> 3–7 Werktage<br><strong>Lasergravur:</strong> 1–3 Werktage<br>Eilaufträge nach Absprache möglich.', en:'<strong>Prototypes:</strong> 24–72 hours<br><strong>Small series:</strong> 3–7 business days<br><strong>Laser engraving:</strong> 1–3 business days<br>Rush orders available on request.', fr:'<strong>Prototypes :</strong> 24–72 heures<br><strong>Petites séries :</strong> 3–7 jours ouvrables<br><strong>Gravure laser :</strong> 1–3 jours ouvrables<br>Commandes urgentes sur demande.', es:'<strong>Prototipos:</strong> 24–72 horas<br><strong>Series cortas:</strong> 3–7 días laborables<br><strong>Grabado láser:</strong> 1–3 días laborables<br>Pedidos urgentes bajo consulta.', it:'<strong>Prototipi:</strong> 24–72 ore<br><strong>Piccole serie:</strong> 3–7 giorni lavorativi<br><strong>Incisione laser:</strong> 1–3 giorni lavorativi<br>Ordini urgenti su richiesta.' },
  'faq.q3':     { de:'Welche Materialien bietet ihr an?', en:'Which materials do you offer?', fr:'Quels matériaux proposez-vous ?', es:'¿Qué materiales ofrecéis?', it:'Quali materiali offrite?' },
  'faq.a3':     { de:'Über 20 Materialien — von PLA bis PPS-CF. Schau auf unserer <a href="materialien.html" style="color:var(--accent);">Materialien-Seite</a> vorbei für die volle Liste.', en:'Over 20 materials — from PLA to PPS-CF. Check our <a href="materialien.html" style="color:var(--accent);">Materials page</a> for the full list.', fr:'Plus de 20 matériaux — du PLA au PPS-CF. Consultez notre <a href="materialien.html" style="color:var(--accent);">page Matériaux</a> pour la liste complète.', es:'Más de 20 materiales — desde PLA hasta PPS-CF. Consulta nuestra <a href="materialien.html" style="color:var(--accent);">página de Materiales</a> para la lista completa.', it:'Oltre 20 materiali — dal PLA al PPS-CF. Consulta la nostra <a href="materialien.html" style="color:var(--accent);">pagina Materiali</a> per la lista completa.' },
  'faq.q4':     { de:'Wie groß darf mein Teil maximal sein?', en:'What is the maximum size of my part?', fr:'Quelle est la taille maximale ?', es:'¿Cuál es el tamaño máximo?', it:'Qual è la dimensione massima?' },
  'faq.a4':     { de:'<strong>FDM (H2D):</strong> 325 × 320 × 325 mm<br><strong>FDM (P1S):</strong> 256 × 256 × 256 mm<br><strong>Laser:</strong> 400 × 400 mm (Creality Falcon)<br>Größere Teile können wir mehrteilig fertigen.', en:'<strong>FDM (H2D):</strong> 325 × 320 × 325 mm<br><strong>FDM (P1S):</strong> 256 × 256 × 256 mm<br><strong>Laser:</strong> 400 × 400 mm (Creality Falcon)<br>Larger parts can be produced in multiple pieces.', fr:'<strong>FDM (H2D) :</strong> 325 × 320 × 325 mm<br><strong>FDM (P1S) :</strong> 256 × 256 × 256 mm<br><strong>Laser :</strong> 400 × 400 mm (Creality Falcon)<br>Les pièces plus grandes peuvent être fabriquées en plusieurs parties.', es:'<strong>FDM (H2D):</strong> 325 × 320 × 325 mm<br><strong>FDM (P1S):</strong> 256 × 256 × 256 mm<br><strong>Láser:</strong> 400 × 400 mm (Creality Falcon)<br>Las piezas más grandes se pueden fabricar en varias partes.', it:'<strong>FDM (H2D):</strong> 325 × 320 × 325 mm<br><strong>FDM (P1S):</strong> 256 × 256 × 256 mm<br><strong>Laser:</strong> 400 × 400 mm (Creality Falcon)<br>I pezzi più grandi possono essere prodotti in più parti.' },
  'faq.q5':     { de:'Versendet ihr auch?', en:'Do you also ship?', fr:'Livrez-vous aussi ?', es:'¿También hacéis envíos?', it:'Spedite anche voi?' },
  'faq.a5':     { de:'Ja, deutschlandweit. Versandkosten abhängig von Größe und Gewicht. Abholung vor Ort ist ebenfalls möglich.', en:'Yes, Germany-wide. Shipping costs depend on size and weight. Local pickup is also possible.', fr:'Oui, dans toute la France. Les frais de port dépendent de la taille et du poids. Le retrait sur place est également possible.', es:'Sí, en toda Alemania. Los costes de envío dependen del tamaño y peso. La recogida en persona también es posible.', it:'Sì, in tutta la Germania. I costi di spedizione dipendono da dimensione e peso. Il ritiro in loco è possibile.' },
  'faq.q6':     { de:'Kann ich mein eigenes Material schicken?', en:'Can I send my own material?', fr:'Puis-je envoyer mon propre matériau ?', es:'¿Puedo enviar mi propio material?', it:'Posso inviare il mio materiale?' },
  'faq.a6':     { de:'Grundsätzlich ja — vorausgesetzt es ist mit unseren Druckern kompatibel. Bitte vorher kurz absprechen, damit wir Temperatur und Einstellungen prüfen können.', en:'Generally yes — provided it is compatible with our printers. Please check with us beforehand so we can verify temperature and settings.', fr:'En principe oui — à condition que ce soit compatible avec nos imprimantes. Veuillez nous contacter au préalable pour vérifier la température et les paramètres.', es:'En principio sí — siempre que sea compatible con nuestras impresoras. Por favor, consulta previamente para que podamos verificar temperatura y configuración.', it:'In linea di principio sì — a condizione che sia compatibile con le nostre stampanti. Contattateci prima per verificare temperatura e impostazioni.' },
  'faq.q7':     { de:'Was kostet ein 3D-Druck?', en:'How much does a 3D print cost?', fr:'Combien coûte une impression 3D ?', es:'¿Cuánto cuesta una impresión 3D?', it:'Quanto costa una stampa 3D?' },
  'faq.a7':     { de:'Abhängig von Material, Größe, Druckzeit und Nachbearbeitung. Einfache PLA-Teile ab ca. 5€. Schick uns deine Datei und wir erstellen ein kostenloses Angebot!', en:'Depends on material, size, print time and post-processing. Simple PLA parts from approx. €5. Send us your file and we will create a free quote!', fr:"Dépend du matériau, de la taille, du temps d'impression et du post-traitement. Pièces PLA simples à partir d'env. 5€. Envoyez-nous votre fichier et nous créerons un devis gratuit !", es:'Depende del material, tamaño, tiempo de impresión y post-procesado. Piezas PLA simples desde aprox. 5€. ¡Envíanos tu archivo y crearemos un presupuesto gratuito!', it:'Dipende da materiale, dimensione, tempo di stampa e post-lavorazione. Parti PLA semplici da ca. 5€. Inviaci il tuo file e creeremo un preventivo gratuito!' },
  'faq.q8':     { de:'Bietet ihr auch Design-Dienstleistungen an?', en:'Do you also offer design services?', fr:'Proposez-vous aussi des services de design ?', es:'¿Ofrecéis también servicios de diseño?', it:'Offrite anche servizi di design?' },
  'faq.a8':     { de:'Ja, wir können aus deiner Skizze oder Idee ein druckfertiges 3D-Modell oder eine Laser-Vorlage erstellen. Sprich uns einfach an.', en:'Yes, we can create a print-ready 3D model or laser template from your sketch or idea. Just contact us.', fr:'Oui, nous pouvons créer un modèle 3D prêt à imprimer ou un gabarit laser à partir de votre croquis ou idée. Contactez-nous.', es:'Sí, podemos crear un modelo 3D listo para imprimir o una plantilla láser a partir de tu boceto o idea. Solo contáctanos.', it:'Sì, possiamo creare un modello 3D pronto per la stampa o un modello laser dal tuo schizzo o idea. Contattaci.' },
  'faq.cta.text': { de:'Frage nicht dabei? Schreib uns direkt!', en:'Question not listed? Contact us directly!', fr:'Question non listée ? Contactez-nous directement !', es:'¿Tu pregunta no aparece? ¡Escríbenos directamente!', it:'Domanda non presente? Contattaci direttamente!' },
  'faq.cta.btn':  { de:'📬 Kontakt aufnehmen', en:'📬 Get in touch', fr:'📬 Nous contacter', es:'📬 Contactar', it:'📬 Contattaci' },

  // === Materialien-Seite ===
  'mat.hero.sub':       { de:'Von Standard-Filamenten bis High-Performance — wir drucken, schneiden und gravieren was du brauchst.', en:'From standard filaments to high-performance — we print, cut and engrave what you need.', fr:"Des filaments standard au haute performance — nous imprimons, découpons et gravons ce dont vous avez besoin.", es:'Desde filamentos estándar hasta alto rendimiento — imprimimos, cortamos y grabamos lo que necesites.', it:'Dai filamenti standard all\'high-performance — stampiamo, tagliamo e incidiamo ciò di cui hai bisogno.' },
  'mat.fdm.title':      { de:'🖨️ FDM-Filamente', en:'🖨️ FDM Filaments', fr:'🖨️ Filaments FDM', es:'🖨️ Filamentos FDM', it:'🖨️ Filamenti FDM' },
  'mat.fdm.standard':   { de:'Standard', en:'Standard', fr:'Standard', es:'Estándar', it:'Standard' },
  'mat.fdm.engineering': { de:'Engineering', en:'Engineering', fr:'Ingénierie', es:'Ingeniería', it:'Ingegneria' },
  'mat.fdm.cf':         { de:'Faserverstärkt (CF/GF)', en:'Fiber-reinforced (CF/GF)', fr:'Renforcé fibres (CF/GF)', es:'Reforzado con fibra (CF/GF)', it:'Rinforzato con fibra (CF/GF)' },
  'mat.fdm.hp':         { de:'High-Performance', en:'High-Performance', fr:'Haute performance', es:'Alto rendimiento', it:'High-Performance' },
  'mat.fdm.support':    { de:'Support-Materialien', en:'Support Materials', fr:'Matériaux support', es:'Materiales de soporte', it:'Materiali di supporto' },
  'mat.pla.desc':       { de:'Universell, einfach zu drucken. Ideal für Prototypen, Deko und Gehäuse.', en:'Universal, easy to print. Ideal for prototypes, decoration and housings.', fr:'Universel, facile à imprimer. Idéal pour prototypes, déco et boîtiers.', es:'Universal, fácil de imprimir. Ideal para prototipos, decoración y carcasas.', it:'Universale, facile da stampare. Ideale per prototipi, decorazioni e alloggiamenti.' },
  'mat.petg.desc':      { de:'Robust, lebensmittelecht, UV-beständig. Gut für Outdoor und mechanische Teile.', en:'Robust, food-safe, UV-resistant. Good for outdoor and mechanical parts.', fr:'Robuste, alimentaire, résistant UV. Bon pour extérieur et pièces mécaniques.', es:'Robusto, apto para alimentos, resistente UV. Bueno para exterior y piezas mecánicas.', it:'Robusto, per uso alimentare, resistente UV. Buono per esterno e parti meccaniche.' },
  'mat.abs.desc':       { de:'Hitzebeständig, schlagfest. Klassiker für technische Anwendungen.', en:'Heat-resistant, impact-proof. Classic for technical applications.', fr:'Résistant à la chaleur, aux chocs. Classique pour applications techniques.', es:'Resistente al calor, a los golpes. Clásico para aplicaciones técnicas.', it:'Resistente al calore, agli urti. Classico per applicazioni tecniche.' },
  'mat.asa.desc':       { de:'Wie ABS, aber UV-stabil. Perfekt für Außenanwendungen.', en:'Like ABS, but UV-stable. Perfect for outdoor applications.', fr:"Comme l'ABS, mais stable UV. Parfait pour l'extérieur.", es:'Como ABS, pero estable UV. Perfecto para exteriores.', it:"Come l'ABS, ma stabile UV. Perfetto per esterni." },
  'mat.tpu.desc':       { de:'Flexibel, gummiartig. Für Dichtungen, Hüllen, Stoßdämpfer.', en:'Flexible, rubber-like. For seals, cases, shock absorbers.', fr:'Flexible, caoutchouteux. Pour joints, étuis, amortisseurs.', es:'Flexible, gomoso. Para juntas, fundas, amortiguadores.', it:'Flessibile, gommoso. Per guarnizioni, custodie, ammortizzatori.' },
  'mat.pa.desc':        { de:'Extrem belastbar, verschleißfest. Zahnräder, Scharniere, Funktionsteile.', en:'Extremely durable, wear-resistant. Gears, hinges, functional parts.', fr:'Extrêmement résistant, anti-usure. Engrenages, charnières, pièces fonctionnelles.', es:'Extremadamente resistente, antidesgaste. Engranajes, bisagras, piezas funcionales.', it:'Estremamente resistente, antiusura. Ingranaggi, cerniere, parti funzionali.' },
  'mat.pc.desc':        { de:'Transparent möglich, schlagfest, hitzebeständig bis 130°C.', en:'Transparent possible, impact-resistant, heat-resistant to 130°C.', fr:'Transparent possible, résistant aux chocs, résistant à la chaleur jusqu\'à 130°C.', es:'Transparente posible, resistente a impactos, resistente al calor hasta 130°C.', it:'Trasparente possibile, resistente agli urti, resistente al calore fino a 130°C.' },
  'mat.pet.desc':       { de:'Dimensionsstabil, chemisch beständig. Industrielle Anwendungen.', en:'Dimensionally stable, chemically resistant. Industrial applications.', fr:'Dimensionnellement stable, chimiquement résistant. Applications industrielles.', es:'Dimensionalmente estable, químicamente resistente. Aplicaciones industriales.', it:'Dimensionalmente stabile, chimicamente resistente. Applicazioni industriali.' },
  'mat.placf.desc':     { de:'PLA mit Carbon- oder Glasfaser. Steifer, leichter, maßhaltig.', en:'PLA with carbon or glass fibre. Stiffer, lighter, dimensionally stable.', fr:'PLA avec fibre de carbone ou de verre. Plus rigide, plus léger, dimensionnellement stable.', es:'PLA con fibra de carbono o vidrio. Más rígido, más ligero, dimensionalmente estable.', it:'PLA con fibra di carbonio o vetro. Più rigido, più leggero, dimensionalmente stabile.' },
  'mat.petgcf.desc':    { de:'Verstärktes PETG. Ideal für Funktionsteile mit höherer Steifigkeit.', en:'Reinforced PETG. Ideal for functional parts with higher rigidity.', fr:'PETG renforcé. Idéal pour pièces fonctionnelles avec rigidité supérieure.', es:'PETG reforzado. Ideal para piezas funcionales con mayor rigidez.', it:'PETG rinforzato. Ideale per parti funzionali con maggiore rigidità.' },
  'mat.pacf.desc':      { de:'Nylon mit Faser. Höchste Belastbarkeit für Ingenieur-Anwendungen.', en:'Nylon with fibre. Highest durability for engineering applications.', fr:'Nylon avec fibre. Résistance maximale pour applications ingénierie.', es:'Nylon con fibra. Máxima resistencia para aplicaciones de ingeniería.', it:'Nylon con fibra. Massima resistenza per applicazioni ingegneristiche.' },
  'mat.pccf.desc':      { de:'Polycarbonat mit Faser. Extrem hitze- und schlagfest.', en:'Polycarbonate with fibre. Extremely heat and impact resistant.', fr:'Polycarbonate avec fibre. Extrêmement résistant à la chaleur et aux chocs.', es:'Policarbonato con fibra. Extremadamente resistente al calor y a los golpes.', it:'Policarbonato con fibra. Estremamente resistente al calore e agli urti.' },
  'mat.abscf.desc':     { de:'Faserverstärktes ABS/ASA für technische Outdoor-Teile.', en:'Fiber-reinforced ABS/ASA for technical outdoor parts.', fr:'ABS/ASA renforcé fibres pour pièces techniques extérieures.', es:'ABS/ASA reforzado con fibra para piezas técnicas de exterior.', it:'ABS/ASA rinforzato con fibra per parti tecniche da esterno.' },
  'mat.ppacf.desc':     { de:'Polyphthalamid mit Faser. Extreme Hitzebeständigkeit (HDT >200°C).', en:'Polyphthalamide with fibre. Extreme heat resistance (HDT >200°C).', fr:'Polyphtalamide avec fibre. Résistance thermique extrême (HDT >200°C).', es:'Poliftalamida con fibra. Resistencia térmica extrema (HDT >200°C).', it:'Poliftalammide con fibra. Resistenza termica estrema (HDT >200°C).' },
  'mat.pps.desc':       { de:'Chemisch resistent, hitzebeständig bis 260°C. Aerospace-Grade.', en:'Chemically resistant, heat-resistant to 260°C. Aerospace grade.', fr:'Chimiquement résistant, résistant à la chaleur jusqu\'à 260°C. Qualité aérospatiale.', es:'Químicamente resistente, resistente al calor hasta 260°C. Grado aeroespacial.', it:'Chimicamente resistente, resistente al calore fino a 260°C. Grado aerospaziale.' },
  'mat.pva.desc':       { de:'Wasserlöslich. Perfekter Support für PLA und PETG.', en:'Water-soluble. Perfect support for PLA and PETG.', fr:'Hydrosoluble. Support parfait pour PLA et PETG.', es:'Soluble en agua. Soporte perfecto para PLA y PETG.', it:'Idrosolubile. Supporto perfetto per PLA e PETG.' },
  'mat.bvoh.desc':      { de:'Wasserlöslich, bessere Auflösung als PVA. Premium-Support.', en:'Water-soluble, better dissolution than PVA. Premium support.', fr:'Hydrosoluble, meilleure dissolution que le PVA. Support premium.', es:'Soluble en agua, mejor disolución que PVA. Soporte premium.', it:'Idrosolubile, migliore dissoluzione del PVA. Supporto premium.' },
  'mat.tag.bio':        { de:'Biobasiert', en:'Bio-based', fr:'Biosourcé', es:'Biobasado', it:'Biobasato' },
  'mat.tag.allrounder': { de:'Allrounder', en:'Allrounder', fr:'Polyvalent', es:'Todoterreno', it:'Tuttofare' },
  'mat.tag.tech':       { de:'Technisch', en:'Technical', fr:'Technique', es:'Técnico', it:'Tecnico' },
  'mat.tag.outdoor':    { de:'Outdoor', en:'Outdoor', fr:'Extérieur', es:'Exterior', it:'Esterno' },
  'mat.tag.flex':       { de:'Flexibel', en:'Flexible', fr:'Flexible', es:'Flexible', it:'Flessibile' },
  'mat.tag.hp':         { de:'High-Performance', en:'High-Performance', fr:'Haute performance', es:'Alto rendimiento', it:'High-Performance' },
  'mat.tag.industrial': { de:'Industrial', en:'Industrial', fr:'Industriel', es:'Industrial', it:'Industriale' },
  'mat.tag.extreme':    { de:'Extrem', en:'Extreme', fr:'Extrême', es:'Extremo', it:'Estremo' },
  'mat.tag.precision':  { de:'Präzision', en:'Precision', fr:'Précision', es:'Precisión', it:'Precisione' },
  'mat.tag.durable':    { de:'Belastbar', en:'Durable', fr:'Résistant', es:'Resistente', it:'Resistente' },
  'mat.tag.jewelry':    { de:'Schmuck', en:'Jewellery', fr:'Bijoux', es:'Joyería', it:'Gioielli' },
  'mat.tag.gravur':     { de:'Gravur', en:'Engraving', fr:'Gravure', es:'Grabado', it:'Incisione' },
  'mat.resin.title':    { de:'💧 Resin-Harze', en:'💧 Resin', fr:'💧 Résines', es:'💧 Resinas', it:'💧 Resine' },
  'mat.resin.standard': { de:'Standard-Resin', en:'Standard Resin', fr:'Résine standard', es:'Resina estándar', it:'Resina standard' },
  'mat.resin.standard.desc': { de:'Hohe Detailtreue, glatte Oberfläche. Miniaturen, Schmuck, Modelle.', en:'High detail, smooth surface. Miniatures, jewellery, models.', fr:'Haute fidélité de détail, surface lisse. Miniatures, bijoux, modèles.', es:'Alta fidelidad de detalle, superficie lisa. Miniaturas, joyería, modelos.', it:'Alta fedeltà di dettaglio, superficie liscia. Miniature, gioielli, modelli.' },
  'mat.resin.tough':    { de:'Tough Resin', en:'Tough Resin', fr:'Résine tough', es:'Resina tough', it:'Resina tough' },
  'mat.resin.tough.desc': { de:'Mechanisch belastbar, ABS-ähnlich. Funktionsteile und Gehäuse.', en:'Mechanically durable, ABS-like. Functional parts and housings.', fr:'Résistant mécaniquement, similaire ABS. Pièces fonctionnelles et boîtiers.', es:'Mecánicamente resistente, similar a ABS. Piezas funcionales y carcasas.', it:'Meccanicamente resistente, simile ABS. Parti funzionali e alloggiamenti.' },
  'mat.resin.flex':     { de:'Flexible Resin', en:'Flexible Resin', fr:'Résine flexible', es:'Resina flexible', it:'Resina flessibile' },
  'mat.resin.flex.desc': { de:'Biegsam, gummiartig. Dichtungen und flexible Prototypen.', en:'Bendable, rubber-like. Seals and flexible prototypes.', fr:'Souple, caoutchouteux. Joints et prototypes flexibles.', es:'Flexible, gomoso. Juntas y prototipos flexibles.', it:'Pieghevole, gommoso. Guarnizioni e prototipi flessibili.' },
  'mat.resin.castable': { de:'Castable Resin', en:'Castable Resin', fr:'Résine castable', es:'Resina castable', it:'Resina castable' },
  'mat.resin.castable.desc': { de:'Rückstandsfrei ausbrennbar. Für Schmuck-Gussformen.', en:'Burns out cleanly. For jewellery casting moulds.', fr:'Combustion sans résidu. Pour moules de coulée bijoux.', es:'Se quema sin residuos. Para moldes de fundición de joyería.', it:'Combustione senza residui. Per stampi di fusione gioielli.' },
  'mat.laser.title':    { de:'⚡ Laser-Werkstoffe', en:'⚡ Laser Materials', fr:'⚡ Matériaux laser', es:'⚡ Materiales láser', it:'⚡ Materiali laser' },
  'mat.laser.cutting':  { de:'Schneidbar', en:'Cuttable', fr:'Découpable', es:'Cortable', it:'Tagliabile' },
  'mat.laser.engraving':{ de:'Gravierbar', en:'Engravable', fr:'Gravable', es:'Grabable', it:'Incidibile' },
  'mat.laser.wood':     { de:'Holz', en:'Wood', fr:'Bois', es:'Madera', it:'Legno' },
  'mat.laser.wood.desc': { de:'Sperrholz, MDF, Massivholz bis 8mm. Schilder, Deko, Prototypen.', en:'Plywood, MDF, solid wood up to 8mm. Signs, decoration, prototypes.', fr:"Contreplaqué, MDF, bois massif jusqu'à 8mm. Panneaux, déco, prototypes.", es:'Madera contrachapada, MDF, madera maciza hasta 8mm. Letreros, decoración, prototipos.', it:'Compensato, MDF, legno massiccio fino a 8mm. Insegne, decorazioni, prototipi.' },
  'mat.laser.acrylic':  { de:'Acryl', en:'Acrylic', fr:'Acrylique', es:'Acrílico', it:'Acrilico' },
  'mat.laser.acrylic.desc': { de:'Transparent, farbig, bis 6mm. Displays, Gehäuse, Beschilderung.', en:'Transparent, coloured, up to 6mm. Displays, housings, signage.', fr:"Transparent, coloré, jusqu'à 6mm. Présentoirs, boîtiers, signalétique.", es:'Transparente, de color, hasta 6mm. Displays, carcasas, señalización.', it:'Trasparente, colorato, fino a 6mm. Display, alloggiamenti, segnaletica.' },
  'mat.laser.leather':  { de:'Leder & Stoff', en:'Leather & Fabric', fr:'Cuir & Tissu', es:'Cuero & Tela', it:'Pelle & Tessuto' },
  'mat.laser.leather.desc': { de:'Feinschnitte für Mode, Accessoires, Patches.', en:'Fine cuts for fashion, accessories, patches.', fr:'Coupes fines pour mode, accessoires, patchs.', es:'Cortes finos para moda, accesorios, parches.', it:'Tagli fini per moda, accessori, patch.' },
  'mat.laser.paper':    { de:'Papier & Karton', en:'Paper & Cardboard', fr:'Papier & Carton', es:'Papel & Cartón', it:'Carta & Cartone' },
  'mat.laser.paper.desc': { de:'Verpackungen, Einladungen, Modelle.', en:'Packaging, invitations, models.', fr:'Emballages, invitations, maquettes.', es:'Embalajes, invitaciones, maquetas.', it:'Imballaggi, inviti, modelli.' },
  'mat.laser.metal':    { de:'Metall', en:'Metal', fr:'Métal', es:'Metal', it:'Metallo' },
  'mat.laser.metal.desc': { de:'Beschichtet oder eloxiert. Logos, Seriennummern, Branding.', en:'Coated or anodised. Logos, serial numbers, branding.', fr:'Revêtu ou anodisé. Logos, numéros de série, branding.', es:'Recubierto o anodizado. Logos, números de serie, branding.', it:'Rivestito o anodizzato. Loghi, numeri di serie, branding.' },
  'mat.laser.glass':    { de:'Glas & Keramik', en:'Glass & Ceramic', fr:'Verre & Céramique', es:'Vidrio & Cerámica', it:'Vetro & Ceramica' },
  'mat.laser.glass.desc': { de:'Dekorative Gravuren, Geschenke, Schilder.', en:'Decorative engravings, gifts, signs.', fr:'Gravures décoratives, cadeaux, panneaux.', es:'Grabados decorativos, regalos, letreros.', it:'Incisioni decorative, regali, insegne.' },
  'mat.laser.stone':    { de:'Stein', en:'Stone', fr:'Pierre', es:'Piedra', it:'Pietra' },
  'mat.laser.stone.desc': { de:'Granit, Schiefer, Marmor. Gedenktafeln, Deko-Objekte.', en:'Granite, slate, marble. Memorial plaques, decorative objects.', fr:'Granit, ardoise, marbre. Plaques commémoratives, objets décoratifs.', es:'Granito, pizarra, mármol. Placas conmemorativas, objetos decorativos.', it:'Granito, ardesia, marmo. Targhe commemorative, oggetti decorativi.' },
  'mat.cta.text':       { de:'Material nicht dabei? Frag uns — wir finden eine Lösung.', en:'Material not listed? Ask us — we will find a solution.', fr:'Matériau non listé ? Demandez-nous — nous trouverons une solution.', es:'¿Material no incluido? Pregúntanos — encontraremos una solución.', it:'Materiale non elencato? Chiedici — troveremo una soluzione.' },
  'mat.cta.btn':        { de:'📬 Angebot anfragen', en:'📬 Request quote', fr:'📬 Demander un devis', es:'📬 Solicitar presupuesto', it:'📬 Richiedi preventivo' },

  // === Legal ===
  'legal.impressum':   { de:'Impressum',   en:'Legal Notice',  fr:'Mentions légales', es:'Aviso legal', it:'Note legali'  },
  'legal.datenschutz': { de:'Datenschutzerklärung', en:'Privacy Policy', fr:'Politique de confidentialité', es:'Política de privacidad',  it:'Informativa sulla privacy'     },
  'legal.note':        { de:'Dieser Text ist ausschließlich auf Deutsch verfügbar (rechtliche Anforderung).', en:'This text is only available in German (legal requirement).', fr:'Ce texte est uniquement disponible en allemand (exigence légale).', es:'Este texto solo está disponible en alemán (requisito legal).', it:'Questo testo è disponibile solo in tedesco (requisito legale).' },
  'legal.back':        { de:'← Zurück zur Startseite', en:'← Back to homepage', fr:"← Retour à l'accueil", es:'← Volver al inicio', it:'← Torna alla homepage' },
};

// ===== ENGINE =====
function setLang(lang) {
  const supported = ['de','en','fr','es','it'];
  if (!supported.includes(lang)) lang = 'de';
  localStorage.setItem('pita-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const t = TRANSLATIONS[key];
    if (!t || t[lang] === undefined) return;
    const val = t[lang];
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) { el.setAttribute(attr, val); return; }
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') { el.placeholder = val; return; }
    if (el.tagName === 'OPTION') { el.textContent = val; return; }
    el.innerHTML = val;
  });

  document.querySelectorAll('.lang-switcher button[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

function getLang() {
  const stored = localStorage.getItem('pita-lang');
  const browser = (navigator.language || 'de').slice(0,2);
  const supported = ['de','en','fr','es','it'];
  if (stored && supported.includes(stored)) return stored;
  if (supported.includes(browser)) return browser;
  return 'de';
}

document.addEventListener('DOMContentLoaded', () => setLang(getLang()));
