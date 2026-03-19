/**
 * PitA i18n — DE / EN / FR / ES / IT
 * Sprachswitcher: setLang('en') etc.
 */

const TRANSLATIONS = {

  // ===== NAVIGATION =====
  'nav.leistungen':   { de:'Leistungen',  en:'Services',    fr:'Services',    es:'Servicios',   it:'Servizi'     },
  'nav.materialien':  { de:'Materialien', en:'Materials',   fr:'Matériaux',   es:'Materiales',  it:'Materiali'   },
  'nav.katalog':      { de:'Katalog',     en:'Catalogue',   fr:'Catalogue',   es:'Catálogo',    it:'Catalogo'    },
  'nav.galerie':      { de:'Galerie',     en:'Gallery',     fr:'Galerie',     es:'Galería',     it:'Galleria'    },
  'nav.ablauf':       { de:'Ablauf',      en:'Process',     fr:'Processus',   es:'Proceso',     it:'Processo'    },
  'nav.kontakt':      { de:'Kontakt',     en:'Contact',     fr:'Contact',     es:'Contacto',    it:'Contatto'    },
  'nav.blog':         { de:'Blog',        en:'Blog',        fr:'Blog',        es:'Blog',        it:'Blog'        },
  'nav.faq':          { de:'FAQ',         en:'FAQ',         fr:'FAQ',         es:'FAQ',         it:'FAQ'         },

  // ===== HERO =====
  'hero.tagline':  { de:'Wo pittoreske Landschaft auf Innovation trifft', en:'Where picturesque landscapes meet innovation', fr:'Où les paysages pittoresques rencontrent l\'innovation', es:'Donde los paisajes pintorescos se encuentran con la innovación', it:'Dove i paesaggi pittoreschi incontrano l\'innovazione' },
  'hero.sub':      { de:'3D-Druck · Lasercutting · Lasergravur · Prototyping', en:'3D Printing · Laser Cutting · Laser Engraving · Prototyping', fr:'Impression 3D · Découpe laser · Gravure laser · Prototypage', es:'Impresión 3D · Corte láser · Grabado láser · Prototipado', it:'Stampa 3D · Taglio laser · Incisione laser · Prototipazione' },
  'hero.eco':      { de:'☀️ Überwiegend mit PV-Energie produziert', en:'☀️ Produced mostly with solar energy', fr:'☀️ Produit principalement avec de l\'énergie solaire', es:'☀️ Producido principalmente con energía solar', it:'☀️ Prodotto principalmente con energia solare' },
  'hero.cta':      { de:'Angebot anfragen', en:'Request a quote', fr:'Demander un devis', es:'Solicitar presupuesto', it:'Richiedi un preventivo' },

  // ===== SECTIONS INDEX =====
  'section.leistungen':   { de:'Unsere Leistungen',  en:'Our Services',    fr:'Nos Services',    es:'Nuestros Servicios', it:'I Nostri Servizi'  },
  'section.projekte':     { de:'Unsere Projekte',    en:'Our Projects',    fr:'Nos Projets',     es:'Nuestros Proyectos', it:'I Nostri Progetti' },
  'section.ablauf':       { de:'So funktioniert\'s', en:'How it works',    fr:'Comment ça marche', es:'Cómo funciona',    it:'Come funziona'     },
  'section.kontakt':      { de:'Kontakt & Angebot',  en:'Contact & Quote', fr:'Contact & Devis', es:'Contacto y Presupuesto', it:'Contatto e Preventivo' },

  // ===== LEISTUNGEN CARDS =====
  'card.3ddruck':    { de:'3D-Druck',      en:'3D Printing',   fr:'Impression 3D', es:'Impresión 3D',  it:'Stampa 3D'      },
  'card.laser':      { de:'Lasercutting',  en:'Laser Cutting', fr:'Découpe laser', es:'Corte láser',   it:'Taglio laser'   },
  'card.gravur':     { de:'Lasergravur',   en:'Laser Engraving', fr:'Gravure laser', es:'Grabado láser', it:'Incisione laser'},
  'card.proto':      { de:'Prototyping',   en:'Prototyping',   fr:'Prototypage',   es:'Prototipado',   it:'Prototipazione' },
  'card.resin':      { de:'Resin Druck',   en:'Resin Printing',fr:'Impression résine', es:'Impresión resina', it:'Stampa resina' },

  // ===== ABLAUF =====
  'ablauf.step1':    { de:'Anfrage senden',    en:'Send request',    fr:'Envoyer la demande', es:'Enviar solicitud',  it:'Invia richiesta'    },
  'ablauf.step2':    { de:'Angebot erhalten',  en:'Receive quote',   fr:'Recevoir le devis',  es:'Recibir presupuesto', it:'Ricevi preventivo' },
  'ablauf.step3':    { de:'Fertigung & Versand', en:'Production & Shipping', fr:'Production & Livraison', es:'Producción y Envío', it:'Produzione e Spedizione' },

  // ===== KONTAKT FORMULAR =====
  'kontakt.name':    { de:'Name',            en:'Name',          fr:'Nom',           es:'Nombre',        it:'Nome'           },
  'kontakt.email':   { de:'E-Mail',          en:'Email',         fr:'E-mail',        es:'Correo',        it:'Email'          },
  'kontakt.nachricht':{ de:'Nachricht',      en:'Message',       fr:'Message',       es:'Mensaje',       it:'Messaggio'      },
  'kontakt.datei':   { de:'Datei anhängen (STL, SVG, …)', en:'Attach file (STL, SVG, …)', fr:'Joindre un fichier (STL, SVG, …)', es:'Adjuntar archivo (STL, SVG, …)', it:'Allega file (STL, SVG, …)' },
  'kontakt.senden':  { de:'Angebot anfordern', en:'Request quote', fr:'Demander un devis', es:'Solicitar presupuesto', it:'Richiedi preventivo' },

  // ===== FOOTER =====
  'footer.tagline':  { de:'Präzision aus den Alpen.', en:'Precision from the Alps.', fr:'Précision des Alpes.', es:'Precisión de los Alpes.', it:'Precisione dalle Alpi.' },
  'footer.impressum':{ de:'Impressum',  en:'Legal Notice', fr:'Mentions légales', es:'Aviso legal',  it:'Note legali'  },
  'footer.datenschutz':{ de:'Datenschutz', en:'Privacy Policy', fr:'Politique de confidentialité', es:'Política de privacidad', it:'Privacy Policy' },
  'footer.copy':     { de:'© 2026 PitA. Alle Rechte vorbehalten.', en:'© 2026 PitA. All rights reserved.', fr:'© 2026 PitA. Tous droits réservés.', es:'© 2026 PitA. Todos los derechos reservados.', it:'© 2026 PitA. Tutti i diritti riservati.' },

  // ===== SUBPAGES COMMON =====
  'sub.back':        { de:'← PitA',          en:'← PitA',        fr:'← PitA',        es:'← PitA',        it:'← PitA'         },
  'sub.materialien': { de:'Materialien',      en:'Materials',     fr:'Matériaux',     es:'Materiales',    it:'Materiali'      },
  'sub.equipment':   { de:'Equipment',        en:'Equipment',     fr:'Équipement',    es:'Equipamiento',  it:'Attrezzatura'   },
  'sub.anwendungen': { de:'Anwendungen',      en:'Applications',  fr:'Applications',  es:'Aplicaciones',  it:'Applicazioni'   },
  'sub.quote':       { de:'Angebot anfragen', en:'Request quote', fr:'Demander un devis', es:'Solicitar presupuesto', it:'Richiedi preventivo' },

  // ===== 3D-DRUCK =====
  '3d.title':        { de:'3D-Druck',         en:'3D Printing',   fr:'Impression 3D', es:'Impresión 3D',  it:'Stampa 3D'      },
  '3d.sub':          { de:'FDM-Druck mit Bambu Lab H2D & P1S — vom Einzelstück bis zur Serie.', en:'FDM printing with Bambu Lab H2D & P1S — from single parts to series.', fr:'Impression FDM avec Bambu Lab H2D & P1S — de la pièce unique à la série.', es:'Impresión FDM con Bambu Lab H2D & P1S — desde piezas únicas hasta series.', it:'Stampa FDM con Bambu Lab H2D & P1S — dal singolo pezzo alla serie.' },

  // ===== LASERCUTTING =====
  'laser.title':     { de:'Lasercutting',     en:'Laser Cutting', fr:'Découpe laser', es:'Corte láser',   it:'Taglio laser'   },
  'laser.sub':       { de:'Millimetergenaue Schnitte mit Creality Falcon & Snapmaker A350T.', en:'Millimeter-precise cuts with Creality Falcon & Snapmaker A350T.', fr:'Coupes millimétriques avec Creality Falcon & Snapmaker A350T.', es:'Cortes milimétricos con Creality Falcon & Snapmaker A350T.', it:'Tagli millimetrici con Creality Falcon & Snapmaker A350T.' },

  // ===== LASERGRAVUR =====
  'gravur.title':    { de:'Lasergravur',      en:'Laser Engraving', fr:'Gravure laser', es:'Grabado láser', it:'Incisione laser' },
  'gravur.sub':      { de:'Präzise Gravuren für Branding, Personalisierung und Detailarbeit.', en:'Precise engravings for branding, personalisation and detail work.', fr:'Gravures précises pour le branding, la personnalisation et le travail de détail.', es:'Grabados precisos para branding, personalización y trabajo de detalle.', it:'Incisioni precise per branding, personalizzazione e lavoro di dettaglio.' },

  // ===== PROTOTYPING =====
  'proto.title':     { de:'Prototyping',      en:'Prototyping',   fr:'Prototypage',   es:'Prototipado',   it:'Prototipazione' },
  'proto.sub':       { de:'Von der Idee zum funktionalen Modell — schnell, iterativ, bezahlbar.', en:'From idea to functional model — fast, iterative, affordable.', fr:'De l\'idée au modèle fonctionnel — rapide, itératif, abordable.', es:'De la idea al modelo funcional — rápido, iterativo, asequible.', it:'Dall\'idea al modello funzionale — veloce, iterativo, conveniente.' },

  // ===== RESIN =====
  'resin.title':     { de:'Resin-Druck',      en:'Resin Printing', fr:'Impression résine', es:'Impresión resina', it:'Stampa resina' },
  'resin.sub':       { de:'Hochpräzise Harz-Drucke (SLA/DLP) für maximale Detailtreue.', en:'High-precision resin prints (SLA/DLP) for maximum detail.', fr:'Impressions résine haute précision (SLA/DLP) pour un détail maximum.', es:'Impresiones de resina de alta precisión (SLA/DLP) para máximo detalle.', it:'Stampe in resina ad alta precisione (SLA/DLP) per massimo dettaglio.' },

  // ===== MATERIALIEN =====
  'mat.title':       { de:'Materialien',      en:'Materials',     fr:'Matériaux',     es:'Materiales',    it:'Materiali'      },
  'mat.fdm':         { de:'🖨️ FDM-Filamente (Bambu Lab H2D & P1S)', en:'🖨️ FDM Filaments (Bambu Lab H2D & P1S)', fr:'🖨️ Filaments FDM (Bambu Lab H2D & P1S)', es:'🖨️ Filamentos FDM (Bambu Lab H2D & P1S)', it:'🖨️ Filamenti FDM (Bambu Lab H2D & P1S)' },
  'mat.resin':       { de:'💧 Resin (SLA/DLP)', en:'💧 Resin (SLA/DLP)', fr:'💧 Résine (SLA/DLP)', es:'💧 Resina (SLA/DLP)', it:'💧 Resina (SLA/DLP)' },
  'mat.laser':       { de:'⚡ Laser-Werkstoffe', en:'⚡ Laser Materials', fr:'⚡ Matériaux laser', es:'⚡ Materiales láser', it:'⚡ Materiali laser' },

  // ===== KATALOG =====
  'katalog.title':   { de:'Katalog',          en:'Catalogue',     fr:'Catalogue',     es:'Catálogo',      it:'Catalogo'       },
  'katalog.sub':     { de:'Unser Komplettangebot — alle Sparten, eine Werkstatt.', en:'Our full range — all services, one workshop.', fr:'Notre offre complète — tous les services, un seul atelier.', es:'Nuestra oferta completa — todos los servicios, un taller.', it:'La nostra offerta completa — tutti i servizi, un\'officina.' },

  // ===== BLOG =====
  'blog.title':      { de:'Blog',             en:'Blog',          fr:'Blog',          es:'Blog',          it:'Blog'           },
  'blog.sub':        { de:'News, Projekte und Insights aus der Werkstatt.', en:'News, projects and insights from the workshop.', fr:'Actualités, projets et insights de l\'atelier.', es:'Noticias, proyectos e insights del taller.', it:'Notizie, progetti e insights dall\'officina.' },

  // ===== FAQ =====
  'faq.title':       { de:'Häufige Fragen',   en:'Frequently Asked Questions', fr:'Questions fréquentes', es:'Preguntas frecuentes', it:'Domande frequenti' },
  'faq.sub':         { de:'Alles was du wissen musst — und wenn nicht, frag Clippy!', en:'Everything you need to know — and if not, ask Clippy!', fr:'Tout ce que vous devez savoir — sinon, demandez à Clippy !', es:'Todo lo que necesitas saber — ¡y si no, pregunta a Clippy!', it:'Tutto ciò che devi sapere — e se no, chiedi a Clippy!' },


  // ===== INDEX: Leistungskarten Beschreibungen =====
  'card.3ddruck.desc':  { de:'Vom Einzelstück bis zur Serie — FDM mit Bambu Lab H2D & P1S.', en:'From single parts to series — FDM with Bambu Lab H2D & P1S.', fr:'De la pièce unique à la série — FDM avec Bambu Lab H2D & P1S.', es:'Desde piezas únicas hasta series — FDM con Bambu Lab H2D & P1S.', it:'Dal singolo pezzo alla serie — FDM con Bambu Lab H2D & P1S.' },
  'card.laser.desc':    { de:'Millimetergenaue Schnitte in Holz, Acryl und mehr — mit Creality & Snapmaker.', en:'Millimeter-precise cuts in wood, acrylic and more — with Creality & Snapmaker.', fr:'Coupes millimétriques dans le bois, l'acrylique et plus — avec Creality & Snapmaker.', es:'Cortes milimétricos en madera, acrílico y más — con Creality & Snapmaker.', it:'Tagli millimetrici in legno, acrilico e altro — con Creality & Snapmaker.' },
  'card.gravur.desc':   { de:'Präzise Personalisierung auf Holz, Metall, Glas und mehr.', en:'Precise personalisation on wood, metal, glass and more.', fr:'Personnalisation précise sur bois, métal, verre et plus.', es:'Personalización precisa en madera, metal, vidrio y más.', it:'Personalizzazione precisa su legno, metallo, vetro e altro.' },
  'card.proto.desc':    { de:'Von der Idee zum Modell in 24–72h — iterativ und bezahlbar.', en:'From idea to model in 24–72h — iterative and affordable.', fr:'De l'idée au modèle en 24–72h — itératif et abordable.', es:'De la idea al modelo en 24–72h — iterativo y asequible.', it:'Dall'idea al modello in 24–72h — iterativo e conveniente.' },
  'card.resin.desc':    { de:'Hochpräzise Harz-Drucke für Detailarbeiten und Oberflächenqualität.', en:'High-precision resin prints for detail work and surface quality.', fr:'Impressions résine haute précision pour travaux de détail et qualité de surface.', es:'Impresiones de resina de alta precisión para trabajos de detalle y calidad de superficie.', it:'Stampe in resina ad alta precisione per lavori di dettaglio e qualità superficiale.' },

  // ===== INDEX: Ablauf Beschreibungen =====
  'ablauf.step1.desc':  { de:'Beschreibe dein Projekt oder lade eine Datei hoch — STL, 3MF, DXF, SVG.', en:'Describe your project or upload a file — STL, 3MF, DXF, SVG.', fr:'Décrivez votre projet ou téléchargez un fichier — STL, 3MF, DXF, SVG.', es:'Describe tu proyecto o sube un archivo — STL, 3MF, DXF, SVG.', it:'Descrivi il tuo progetto o carica un file — STL, 3MF, DXF, SVG.' },
  'ablauf.step2.desc':  { de:'Wir prüfen deine Datei und senden dir ein individuelles Angebot.', en:'We check your file and send you an individual quote.', fr:'Nous vérifions votre fichier et vous envoyons un devis individuel.', es:'Revisamos tu archivo y te enviamos un presupuesto individual.', it:'Controlliamo il tuo file e ti inviamo un preventivo individuale.' },
  'ablauf.step3.desc':  { de:'Nach Freigabe fertigen wir dein Teil und liefern direkt zu dir.', en:'After approval we produce your part and deliver directly to you.', fr:'Après validation, nous fabriquons votre pièce et la livrons directement.', es:'Tras la aprobación fabricamos tu pieza y la entregamos directamente.', it:'Dopo l'approvazione produciamo il tuo pezzo e lo consegniamo direttamente.' },

  // ===== GALERIE =====
  'galerie.1': { de:'3D-Druck Prototyp', en:'3D Print Prototype', fr:'Prototype impression 3D', es:'Prototipo impresión 3D', it:'Prototipo stampa 3D' },
  'galerie.2': { de:'Lasercut Holzschild', en:'Laser Cut Wood Sign', fr:'Panneau bois découpé laser', es:'Letrero de madera cortado láser', it:'Insegna legno taglio laser' },
  'galerie.3': { de:'Lasergravur Detail', en:'Laser Engraving Detail', fr:'Détail gravure laser', es:'Detalle grabado láser', it:'Dettaglio incisione laser' },
  'galerie.4': { de:'Prototyping Gehäuse', en:'Prototyping Housing', fr:'Boîtier prototypage', es:'Carcasa prototipado', it:'Alloggiamento prototipazione' },
  'galerie.5': { de:'Lasergravur Holz', en:'Laser Engraving Wood', fr:'Gravure laser bois', es:'Grabado láser madera', it:'Incisione laser legno' },
  'galerie.6': { de:'Resin Druck', en:'Resin Print', fr:'Impression résine', es:'Impresión resina', it:'Stampa resina' },

  // ===== KONTAKT FELDER =====
  'kontakt.label.name':  { de:'Name', en:'Name', fr:'Nom', es:'Nombre', it:'Nome' },
  'kontakt.label.email': { de:'E-Mail', en:'Email', fr:'E-mail', es:'Correo electrónico', it:'Email' },
  'kontakt.label.msg':   { de:'Nachricht', en:'Message', fr:'Message', es:'Mensaje', it:'Messaggio' },
  'kontakt.ph.name':     { de:'Dein Name', en:'Your name', fr:'Votre nom', es:'Tu nombre', it:'Il tuo nome' },
  'kontakt.ph.email':    { de:'deine@email.de', en:'your@email.com', fr:'votre@email.fr', es:'tu@email.es', it:'tua@email.it' },
  'kontakt.ph.msg':      { de:'Beschreibe dein Projekt...', en:'Describe your project...', fr:'Décrivez votre projet...', es:'Describe tu proyecto...', it:'Descrivi il tuo progetto...' },
  'kontakt.drop':        { de:'📎 STL, 3MF, SVG, DXF hochladen (max. 25 MB)', en:'📎 Upload STL, 3MF, SVG, DXF (max. 25 MB)', fr:'📎 Télécharger STL, 3MF, SVG, DXF (max. 25 Mo)', es:'📎 Subir STL, 3MF, SVG, DXF (máx. 25 MB)', it:'📎 Carica STL, 3MF, SVG, DXF (max. 25 MB)' },

  // ===== MATERIALIEN SEITE =====
  'mat.fdm.title':  { de:'🖨️ FDM-Filamente (Bambu Lab H2D & P1S)', en:'🖨️ FDM Filaments (Bambu Lab H2D & P1S)', fr:'🖨️ Filaments FDM (Bambu Lab H2D & P1S)', es:'🖨️ Filamentos FDM (Bambu Lab H2D & P1S)', it:'🖨️ Filamenti FDM (Bambu Lab H2D & P1S)' },
  'mat.standard':   { de:'Standard', en:'Standard', fr:'Standard', es:'Estándar', it:'Standard' },
  'mat.pla.desc':   { de:'Universell, einfach zu drucken. Ideal für Prototypen, Deko und Gehäuse.', en:'Universal, easy to print. Ideal for prototypes, decoration and housings.', fr:'Universel, facile à imprimer. Idéal pour prototypes, décoration et boîtiers.', es:'Universal, fácil de imprimir. Ideal para prototipos, decoración y carcasas.', it:'Universale, facile da stampare. Ideale per prototipi, decorazioni e alloggiamenti.' },
  'mat.petg.desc':  { de:'Robust, lebensmittelecht, UV-beständig. Gut für Outdoor und mechanische Teile.', en:'Robust, food-safe, UV-resistant. Great for outdoor and mechanical parts.', fr:'Robuste, alimentaire, résistant UV. Idéal pour extérieur et pièces mécaniques.', es:'Robusto, apto para alimentos, resistente UV. Ideal para exterior y piezas mecánicas.', it:'Robusto, alimentare, resistente UV. Ottimo per esterno e parti meccaniche.' },
  'mat.abs.desc':   { de:'Hitzebeständig, schlagfest. Klassiker für technische Anwendungen.', en:'Heat-resistant, impact-resistant. Classic for technical applications.', fr:'Résistant à la chaleur et aux chocs. Classique pour applications techniques.', es:'Resistente al calor y golpes. Clásico para aplicaciones técnicas.', it:'Resistente al calore e agli urti. Classico per applicazioni tecniche.' },
  'mat.asa.desc':   { de:'Wie ABS, aber UV-stabil. Perfekt für Außenanwendungen.', en:'Like ABS, but UV-stable. Perfect for outdoor applications.', fr:'Comme l'ABS, mais stable aux UV. Parfait pour applications extérieures.', es:'Como ABS pero estable UV. Perfecto para aplicaciones exteriores.', it:'Come ABS ma stabile UV. Perfetto per applicazioni esterne.' },
  'mat.tpu.desc':   { de:'Flexibel, gummiartig. Für Dichtungen, Hüllen, Stoßdämpfer.', en:'Flexible, rubber-like. For seals, cases, shock absorbers.', fr:'Flexible, caoutchouteux. Pour joints, coques, amortisseurs.', es:'Flexible, gomoso. Para juntas, carcasas, amortiguadores.', it:'Flessibile, gommoso. Per guarnizioni, cover, ammortizzatori.' },
  'mat.pa.desc':    { de:'Extrem belastbar, verschleißfest. Zahnräder, Scharniere, Funktionsteile.', en:'Extremely durable, wear-resistant. Gears, hinges, functional parts.', fr:'Extrêmement résistant, anti-usure. Engrenages, charnières, pièces fonctionnelles.', es:'Extremadamente duradero, resistente al desgaste. Engranajes, bisagras, piezas funcionales.', it:'Estremamente resistente, anti-usura. Ingranaggi, cerniere, parti funzionali.' },
  'mat.pc.desc':    { de:'Transparent möglich, schlagfest, hitzebeständig bis 130°C.', en:'Can be transparent, impact-resistant, heat-resistant up to 130°C.', fr:'Peut être transparent, résistant aux chocs, thermostable jusqu'à 130°C.', es:'Puede ser transparente, resistente a impactos, termorresistente hasta 130°C.', it:'Può essere trasparente, resistente agli urti, termostabile fino a 130°C.' },
  'mat.cf.title':   { de:'Faserverstärkt (CF/GF)', en:'Fiber-Reinforced (CF/GF)', fr:'Renforcé fibres (CF/GF)', es:'Reforzado con fibra (CF/GF)', it:'Rinforzato con fibra (CF/GF)' },
  'mat.resin.title':{ de:'💧 Resin (SLA/DLP)', en:'💧 Resin (SLA/DLP)', fr:'💧 Résine (SLA/DLP)', es:'💧 Resina (SLA/DLP)', it:'💧 Resina (SLA/DLP)' },
  'mat.laser.title':{ de:'⚡ Laser-Werkstoffe', en:'⚡ Laser Materials', fr:'⚡ Matériaux laser', es:'⚡ Materiales láser', it:'⚡ Materiali laser' },
  'mat.laser.cut':  { de:'Schneiden', en:'Cutting', fr:'Découpe', es:'Corte', it:'Taglio' },
  'mat.laser.engrave':{ de:'Gravieren', en:'Engraving', fr:'Gravure', es:'Grabado', it:'Incisione' },

  // ===== FAQ =====
  'faq.q1':   { de:'Welche Dateiformate akzeptiert ihr?', en:'Which file formats do you accept?', fr:'Quels formats de fichier acceptez-vous ?', es:'¿Qué formatos de archivo aceptáis?', it:'Quali formati di file accettate?' },
  'faq.q2':   { de:'Wie lange dauert eine Bestellung?', en:'How long does an order take?', fr:'Combien de temps prend une commande ?', es:'¿Cuánto tarda un pedido?', it:'Quanto tempo richiede un ordine?' },
  'faq.q3':   { de:'Welche Materialien bietet ihr an?', en:'Which materials do you offer?', fr:'Quels matériaux proposez-vous ?', es:'¿Qué materiales ofrecéis?', it:'Quali materiali offrite?' },
  'faq.q4':   { de:'Wie groß darf mein Teil maximal sein?', en:'What is the maximum size of my part?', fr:'Quelle est la taille maximale de ma pièce ?', es:'¿Cuál es el tamaño máximo de mi pieza?', it:'Qual è la dimensione massima del mio pezzo?' },
  'faq.q5':   { de:'Versendet ihr auch?', en:'Do you also ship?', fr:'Livrez-vous aussi ?', es:'¿También hacéis envíos?', it:'Spedite anche voi?' },
  'faq.q6':   { de:'Kann ich mein eigenes Material schicken?', en:'Can I send my own material?', fr:'Puis-je envoyer mon propre matériau ?', es:'¿Puedo enviar mi propio material?', it:'Posso inviare il mio materiale?' },
  'faq.q7':   { de:'Was kostet ein 3D-Druck?', en:'How much does a 3D print cost?', fr:'Combien coûte une impression 3D ?', es:'¿Cuánto cuesta una impresión 3D?', it:'Quanto costa una stampa 3D?' },
  'faq.a1':   { de:'3D-Druck: STL, 3MF, OBJ, STEP · Laser: SVG, DXF, AI, PDF · Gravur-Bilder: PNG/JPG (min. 300 DPI)', en:'3D Printing: STL, 3MF, OBJ, STEP · Laser: SVG, DXF, AI, PDF · Engraving images: PNG/JPG (min. 300 DPI)', fr:'Impression 3D : STL, 3MF, OBJ, STEP · Laser : SVG, DXF, AI, PDF · Images gravure : PNG/JPG (min. 300 DPI)', es:'Impresión 3D: STL, 3MF, OBJ, STEP · Láser: SVG, DXF, AI, PDF · Imágenes grabado: PNG/JPG (min. 300 DPI)', it:'Stampa 3D: STL, 3MF, OBJ, STEP · Laser: SVG, DXF, AI, PDF · Immagini incisione: PNG/JPG (min. 300 DPI)' },
  'faq.a2':   { de:'Prototypen: 24–72h · Kleinserien: 3–7 Werktage · Lasergravur: 1–3 Werktage', en:'Prototypes: 24–72h · Small series: 3–7 working days · Laser engraving: 1–3 working days', fr:'Prototypes : 24–72h · Petites séries : 3–7 jours ouvrables · Gravure laser : 1–3 jours', es:'Prototipos: 24–72h · Series cortas: 3–7 días laborables · Grabado láser: 1–3 días', it:'Prototipi: 24–72h · Piccole serie: 3–7 giorni lavorativi · Incisione laser: 1–3 giorni' },
  'faq.a3':   { de:'Über 20 Materialien — von PLA bis PPS-CF. Alle Details auf der Materialien-Seite.', en:'Over 20 materials — from PLA to PPS-CF. All details on the Materials page.', fr:'Plus de 20 matériaux — du PLA au PPS-CF. Tous les détails sur la page Matériaux.', es:'Más de 20 materiales — de PLA a PPS-CF. Todos los detalles en la página de Materiales.', it:'Oltre 20 materiali — dal PLA al PPS-CF. Tutti i dettagli nella pagina Materiali.' },
  'faq.a5':   { de:'Ja, wir versenden europaweit. Versandkosten werden im Angebot ausgewiesen.', en:'Yes, we ship across Europe. Shipping costs are shown in the quote.', fr:'Oui, nous livrons dans toute l'Europe. Les frais de livraison sont indiqués dans le devis.', es:'Sí, enviamos a toda Europa. Los gastos de envío se indican en el presupuesto.', it:'Sì, spediamo in tutta Europa. I costi di spedizione sono indicati nel preventivo.' },
  'faq.a6':   { de:'In der Regel nicht — wir verwenden ausschließlich geprüfte Materialien für reproduzierbare Qualität.', en:'Generally not — we use only tested materials for reproducible quality.', fr:'En général non — nous utilisons uniquement des matériaux testés pour une qualité reproductible.', es:'Generalmente no — usamos solo materiales probados para calidad reproducible.', it:'In genere no — utilizziamo solo materiali testati per qualità riproducibile.' },
  'faq.a7':   { de:'Abhängig von Material, Größe und Infill. Einfache PLA-Teile ab ca. 5 €. Datei hochladen → Sofortschätzung via Clippy!', en:'Depends on material, size and infill. Simple PLA parts from approx. €5. Upload file → instant estimate via Clippy!', fr:'Dépend du matériau, de la taille et du remplissage. Pièces PLA simples à partir de 5 €. Téléchargez → estimation instantanée via Clippy !', es:'Depende del material, tamaño e infill. Piezas PLA simples desde aprox. 5 €. ¡Sube el archivo → estimación inmediata via Clippy!', it:'Dipende da materiale, dimensione e infill. Pezzi PLA semplici da circa 5 €. Carica il file → stima immediata via Clippy!' },

  // ===== KATALOG =====
  'kat.func':       { de:'⚙️ Funktionsteile & Ersatzteile', en:'⚙️ Functional & Spare Parts', fr:'⚙️ Pièces fonctionnelles & rechange', es:'⚙️ Piezas funcionales & repuesto', it:'⚙️ Parti funzionali & ricambio' },
  'kat.func.desc':  { de:'Kaputt? Gibt's nicht mehr? Wir drucken es neu.', en:'Broken? Out of stock? We print it fresh.', fr:'Cassé ? Plus disponible ? On le réimprime.', es:'¿Roto? ¿Sin stock? Lo imprimimos nuevo.', it:'Rotto? Non più disponibile? Lo stampiamo nuovo.' },
  'kat.deko':       { de:'🎨 Deko & Geschenke', en:'🎨 Decoration & Gifts', fr:'🎨 Déco & Cadeaux', es:'🎨 Decoración & Regalos', it:'🎨 Decorazione & Regali' },
  'kat.deko.desc':  { de:'Personalisierte Einzelstücke mit Charakter.', en:'Personalised unique pieces with character.', fr:'Pièces uniques personnalisées avec du caractère.', es:'Piezas únicas personalizadas con carácter.', it:'Pezzi unici personalizzati con carattere.' },
  'kat.biz':        { de:'💼 Business & Branding', en:'💼 Business & Branding', fr:'💼 Business & Branding', es:'💼 Negocio & Branding', it:'💼 Business & Branding' },
  'kat.biz.desc':   { de:'Professionelle Lösungen für Firmen und Marken.', en:'Professional solutions for companies and brands.', fr:'Solutions professionnelles pour entreprises et marques.', es:'Soluciones profesionales para empresas y marcas.', it:'Soluzioni professionali per aziende e marchi.' },
  'kat.maker':      { de:'🔧 Maker & DIY', en:'🔧 Maker & DIY', fr:'🔧 Maker & DIY', es:'🔧 Maker & DIY', it:'🔧 Maker & DIY' },
  'kat.maker.desc': { de:'Für Bastler, Tüftler und Kreative.', en:'For hobbyists, tinkerers and creatives.', fr:'Pour les bricoleurs, les bidouilleurs et les créatifs.', es:'Para aficionados, inventores y creativos.', it:'Per hobbisti, sperimentatori e creativi.' },

  // ===== LEISTUNGSSEITEN ABSCHNITTE =====
  'sub.materialien.title': { de:'Materialien', en:'Materials', fr:'Matériaux', es:'Materiales', it:'Materiali' },
  'sub.equipment.title':   { de:'Equipment', en:'Equipment', fr:'Équipement', es:'Equipamiento', it:'Attrezzatura' },
  'sub.anwendungen.title': { de:'Anwendungen', en:'Applications', fr:'Applications', es:'Aplicaciones', it:'Applicazioni' },
  'sub.fuerwen':           { de:'Für wen?', en:'Who is it for?', fr:'Pour qui ?', es:'¿Para quién?', it:'Per chi?' },
  'sub.turnaround':        { de:'Turnaround', en:'Turnaround', fr:'Délai', es:'Plazo', it:'Tempi' },
  'sub.waswirbietentitle': { de:'Was wir bieten', en:'What we offer', fr:'Ce que nous offrons', es:'Lo que ofrecemos', it:'Cosa offriamo' },
  'sub.oberflaechen':      { de:'Oberflächen', en:'Surfaces', fr:'Surfaces', es:'Superficies', it:'Superfici' },
  'sub.detailgrade':       { de:'Detailgrade', en:'Detail levels', fr:'Niveaux de détail', es:'Niveles de detalle', it:'Livelli di dettaglio' },
  'sub.warumresin':        { de:'Warum Resin?', en:'Why Resin?', fr:'Pourquoi la résine ?', es:'¿Por qué resina?', it:'Perché la resina?' },

  // ===== 3D-DRUCK INHALTE =====
  '3d.mat.standard':  { de:'Standard: PLA, PETG, ABS, ASA, TPU', en:'Standard: PLA, PETG, ABS, ASA, TPU', fr:'Standard : PLA, PETG, ABS, ASA, TPU', es:'Estándar: PLA, PETG, ABS, ASA, TPU', it:'Standard: PLA, PETG, ABS, ASA, TPU' },
  '3d.mat.eng':       { de:'Engineering: PA (Nylon), PC, PET', en:'Engineering: PA (Nylon), PC, PET', fr:'Ingénierie : PA (Nylon), PC, PET', es:'Ingeniería: PA (Nylon), PC, PET', it:'Ingegneria: PA (Nylon), PC, PET' },
  '3d.mat.cf':        { de:'Faserverstärkt: PLA-CF, PETG-CF, PA-CF, PC-CF, ABS-CF', en:'Fiber-reinforced: PLA-CF, PETG-CF, PA-CF, PC-CF, ABS-CF', fr:'Renforcé fibres : PLA-CF, PETG-CF, PA-CF, PC-CF, ABS-CF', es:'Reforzado con fibra: PLA-CF, PETG-CF, PA-CF, PC-CF, ABS-CF', it:'Rinforzato con fibra: PLA-CF, PETG-CF, PA-CF, PC-CF, ABS-CF' },
  '3d.mat.hp':        { de:'High-Performance: PPA-CF, PPS, PPS-CF', en:'High-Performance: PPA-CF, PPS, PPS-CF', fr:'Haute performance : PPA-CF, PPS, PPS-CF', es:'Alto rendimiento: PPA-CF, PPS, PPS-CF', it:'High-Performance: PPA-CF, PPS, PPS-CF' },
  '3d.mat.support':   { de:'Support: PVA, BVOH (wasserlöslich)', en:'Support: PVA, BVOH (water-soluble)', fr:'Support : PVA, BVOH (hydrosoluble)', es:'Soporte: PVA, BVOH (soluble en agua)', it:'Supporto: PVA, BVOH (idrosolubile)' },
  '3d.multi':         { de:'Multi-Material & Multi-Color möglich', en:'Multi-material & multi-color possible', fr:'Multi-matière & multi-couleur possible', es:'Multi-material y multi-color posible', it:'Multi-materiale e multi-colore possibile' },
  '3d.leistung1':     { de:'Einzelstücke & Kleinserien', en:'Single pieces & small series', fr:'Pièces uniques & petites séries', es:'Piezas únicas & series cortas', it:'Pezzi singoli & piccole serie' },
  '3d.leistung2':     { de:'Funktionsprototypen & Gehäuse', en:'Functional prototypes & housings', fr:'Prototypes fonctionnels & boîtiers', es:'Prototipos funcionales & carcasas', it:'Prototipi funzionali & alloggiamenti' },
  '3d.leistung3':     { de:'Multi-Material-Druck (z.B. TPU + PLA)', en:'Multi-material printing (e.g. TPU + PLA)', fr:'Impression multi-matière (ex. TPU + PLA)', es:'Impresión multi-material (ej. TPU + PLA)', it:'Stampa multi-materiale (es. TPU + PLA)' },
  '3d.leistung4':     { de:'Nachbearbeitung auf Wunsch (Schleifen, Lackieren)', en:'Post-processing on request (sanding, painting)', fr:'Post-traitement sur demande (ponçage, peinture)', es:'Post-procesado bajo demanda (lijado, pintado)', it:'Post-lavorazione su richiesta (levigatura, verniciatura)' },

  // ===== LASERCUTTING INHALTE =====
  'lc.mat1':  { de:'Sperrholz, MDF, Massivholz (bis 8mm)', en:'Plywood, MDF, solid wood (up to 8mm)', fr:'Contreplaqué, MDF, bois massif (jusqu'à 8mm)', es:'Madera contrachapada, MDF, madera maciza (hasta 8mm)', it:'Compensato, MDF, legno massiccio (fino a 8mm)' },
  'lc.mat2':  { de:'Acryl transparent & farbig (bis 6mm)', en:'Acrylic transparent & coloured (up to 6mm)', fr:'Acrylique transparent & coloré (jusqu'à 6mm)', es:'Acrílico transparente y de color (hasta 6mm)', it:'Acrilico trasparente e colorato (fino a 6mm)' },
  'lc.mat3':  { de:'Leder, Papier, Karton, Stoff', en:'Leather, paper, cardboard, fabric', fr:'Cuir, papier, carton, tissu', es:'Cuero, papel, cartón, tela', it:'Pelle, carta, cartone, tessuto' },
  'lc.app1':  { de:'Schilder, Logos & Schriftzüge', en:'Signs, logos & lettering', fr:'Panneaux, logos & lettrage', es:'Señales, logos & letreros', it:'Insegne, loghi & scritte' },
  'lc.app2':  { de:'Dekorative Elemente & Geschenke', en:'Decorative elements & gifts', fr:'Éléments décoratifs & cadeaux', es:'Elementos decorativos & regalos', it:'Elementi decorativi & regali' },
  'lc.app3':  { de:'Verpackungen & Displays', en:'Packaging & displays', fr:'Emballages & présentoirs', es:'Embalajes & displays', it:'Imballaggi & display' },
  'lc.app4':  { de:'Technische Teile & Prototypen', en:'Technical parts & prototypes', fr:'Pièces techniques & prototypes', es:'Piezas técnicas & prototipos', it:'Parti tecniche & prototipi' },

  // ===== LASERGRAVUR INHALTE =====
  'lg.surf1': { de:'Holz, Bambus, Kork', en:'Wood, bamboo, cork', fr:'Bois, bambou, liège', es:'Madera, bambú, corcho', it:'Legno, bambù, sughero' },
  'lg.surf2': { de:'Metall (beschichtet / eloxiert)', en:'Metal (coated / anodised)', fr:'Métal (revêtu / anodisé)', es:'Metal (recubierto / anodizado)', it:'Metallo (rivestito / anodizzato)' },
  'lg.surf3': { de:'Glas, Keramik, Stein', en:'Glass, ceramic, stone', fr:'Verre, céramique, pierre', es:'Vidrio, cerámica, piedra', it:'Vetro, ceramica, pietra' },
  'lg.surf4': { de:'Leder, Acryl', en:'Leather, acrylic', fr:'Cuir, acrylique', es:'Cuero, acrílico', it:'Pelle, acrilico' },
  'lg.det1':  { de:'Standard (0.1mm) — für Text & Logos', en:'Standard (0.1mm) — for text & logos', fr:'Standard (0,1mm) — pour texte & logos', es:'Estándar (0.1mm) — para texto y logos', it:'Standard (0.1mm) — per testo e loghi' },
  'lg.det2':  { de:'Fein (0.05mm) — Foto-Qualität', en:'Fine (0.05mm) — photo quality', fr:'Fin (0,05mm) — qualité photo', es:'Fino (0.05mm) — calidad fotográfica', it:'Fine (0.05mm) — qualità fotografica' },
  'lg.det3':  { de:'Grob (0.15mm) — schnelle Großflächen', en:'Coarse (0.15mm) — fast large areas', fr:'Grossier (0,15mm) — grandes surfaces rapides', es:'Grueso (0.15mm) — grandes superficies rápidas', it:'Grezzo (0.15mm) — grandi superfici veloci' },
  'lg.app1':  { de:'Logo-Branding & Beschriftung', en:'Logo branding & labelling', fr:'Marquage logo & étiquetage', es:'Branding logo & etiquetado', it:'Logo branding & etichettatura' },
  'lg.app2':  { de:'Personalisierte Geschenke', en:'Personalised gifts', fr:'Cadeaux personnalisés', es:'Regalos personalizados', it:'Regali personalizzati' },
  'lg.app3':  { de:'QR-Codes & Seriennummern', en:'QR codes & serial numbers', fr:'Codes QR & numéros de série', es:'Códigos QR & números de serie', it:'Codici QR & numeri di serie' },
  'lg.app4':  { de:'Foto-Gravuren', en:'Photo engravings', fr:'Gravures photo', es:'Grabados fotográficos', it:'Incisioni fotografiche' },

  // ===== PROTOTYPING INHALTE =====
  'proto.for1':   { de:'Entwickler & Ingenieure', en:'Developers & engineers', fr:'Développeurs & ingénieurs', es:'Desarrolladores & ingenieros', it:'Sviluppatori & ingegneri' },
  'proto.for2':   { de:'Maker & Bastler', en:'Makers & hobbyists', fr:'Makers & bricoleurs', es:'Makers & aficionados', it:'Maker & hobbisti' },
  'proto.for3':   { de:'Startups & Produktdesigner', en:'Startups & product designers', fr:'Startups & designers produit', es:'Startups & diseñadores de producto', it:'Startup & product designer' },
  'proto.ta1':    { de:'Schnelle Iterationen (24–72h)', en:'Fast iterations (24–72h)', fr:'Itérations rapides (24–72h)', es:'Iteraciones rápidas (24–72h)', it:'Iterazioni veloci (24–72h)' },
  'proto.ta2':    { de:'Funktionsmodelle & Passproben', en:'Functional models & fit tests', fr:'Modèles fonctionnels & essais d'ajustement', es:'Modelos funcionales & pruebas de ajuste', it:'Modelli funzionali & prove di adattamento' },
  'proto.ta3':    { de:'Kleinserien bis 50 Stück', en:'Small series up to 50 pieces', fr:'Petites séries jusqu'à 50 pièces', es:'Series cortas hasta 50 piezas', it:'Piccole serie fino a 50 pezzi' },
  'proto.off1':   { de:'Beratung zu Material & Fertigungsweg', en:'Consultation on material & manufacturing process', fr:'Conseil sur matériau & procédé de fabrication', es:'Consultoría sobre material & proceso de fabricación', it:'Consulenza su materiale & processo produttivo' },
  'proto.off2':   { de:'FDM, Resin oder Laser — je nach Anforderung', en:'FDM, resin or laser — depending on requirements', fr:'FDM, résine ou laser — selon les besoins', es:'FDM, resina o láser — según los requisitos', it:'FDM, resina o laser — a seconda dei requisiti' },
  'proto.off3':   { de:'Nachbearbeitung & Finishing', en:'Post-processing & finishing', fr:'Post-traitement & finition', es:'Post-procesado & acabado', it:'Post-lavorazione & finitura' },
  'proto.off4':   { de:'Iterative Optimierung bis zum finalen Teil', en:'Iterative optimisation to the final part', fr:'Optimisation itérative jusqu'à la pièce finale', es:'Optimización iterativa hasta la pieza final', it:'Ottimizzazione iterativa fino al pezzo finale' },

  // ===== RESIN INHALTE =====
  'resin.mat1':   { de:'Standard-Resin (hohe Detailtreue)', en:'Standard resin (high detail accuracy)', fr:'Résine standard (haute précision)', es:'Resina estándar (alta fidelidad de detalle)', it:'Resina standard (alta fedeltà di dettaglio)' },
  'resin.mat2':   { de:'Tough Resin (mechanisch belastbar)', en:'Tough resin (mechanically durable)', fr:'Résine tough (résistante mécaniquement)', es:'Resina tough (resistente mecánicamente)', it:'Resina tough (resistente meccanicamente)' },
  'resin.mat3':   { de:'Flexible Resin (biegsam)', en:'Flexible resin (bendable)', fr:'Résine flexible (souple)', es:'Resina flexible (flexible)', it:'Resina flessibile (pieghevole)' },
  'resin.mat4':   { de:'Castable Resin (für Gussformen)', en:'Castable resin (for casting moulds)', fr:'Résine castable (pour moules)', es:'Resina castable (para moldes)', it:'Resina castable (per stampi)' },
  'resin.app1':   { de:'Miniaturen für Tabletop & Spiele', en:'Miniatures for tabletop & games', fr:'Figurines pour jeux de plateau & jeux', es:'Miniaturas para juegos de mesa & juegos', it:'Miniature per giochi da tavolo & giochi' },
  'resin.app2':   { de:'Schmuck-Designs & Gussformen', en:'Jewellery designs & casting moulds', fr:'Designs bijoux & moules de coulée', es:'Diseños de joyería & moldes de fundición', it:'Design gioielli & stampi per colata' },
  'resin.app3':   { de:'Hochpräzise technische Prototypen', en:'High-precision technical prototypes', fr:'Prototypes techniques haute précision', es:'Prototipos técnicos de alta precisión', it:'Prototipi tecnici ad alta precisione' },
  'resin.app4':   { de:'Zahnmedizinische Modelle', en:'Dental models', fr:'Modèles dentaires', es:'Modelos dentales', it:'Modelli dentali' },

  // ===== IMPRESSUM / DATENSCHUTZ =====
  'legal.impressum': { de:'Impressum',        en:'Legal Notice',  fr:'Mentions légales', es:'Aviso legal', it:'Note legali'   },
  'legal.datenschutz':{ de:'Datenschutz',     en:'Privacy Policy',fr:'Confidentialité', es:'Privacidad',  it:'Privacy'       },
  'legal.note':      { de:'Dieser Text ist ausschließlich auf Deutsch verfügbar (rechtliche Anforderung).', en:'This text is only available in German (legal requirement).', fr:'Ce texte est uniquement disponible en allemand (exigence légale).', es:'Este texto solo está disponible en alemán (requisito legal).', it:'Questo testo è disponibile solo in tedesco (requisito legale).' },
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

    // data-i18n-attr: Attribut statt innerHTML setzen
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) { el.setAttribute(attr, val); return; }

    // <a>-Tags: nur textContent setzen, href bleibt erhalten
    if (el.tagName === 'A') { el.textContent = val; return; }

    // <input> / <button type=submit>: value oder placeholder
    if (el.tagName === 'INPUT') { el.placeholder = val; return; }

    // Alles andere: innerHTML (erlaubt HTML-Entities)
    el.innerHTML = val;
  });

  // Aktiven Button markieren
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
