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
