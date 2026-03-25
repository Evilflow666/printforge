/**
 * PitA Product Data — Alle FDM-Produkte
 * Neues Produkt? Einfach unten einen Eintrag ergänzen.
 */
const PRODUKTE = {

  // ===== HOME & DEKO =====
  'fdm-home-1': {
    name: 'Spiral Vase Rose',
    category: 'Home & Deko',
    categoryIcon: '🏠',
    shortDesc: 'Elegante Spiralvase im Vase-Mode — Blickfang für jedes Regal',
    description: `<p>Die Spiral Vase Rose ist ein echtes Highlight für jedes Zuhause. Gedruckt im Vase-Mode (Spiralmodus) entsteht eine nahtlose, filigrane Wandstruktur, die das Licht wunderschön bricht.</p>
<p>Perfekt als Deko-Objekt oder als echte Vase für Trockenblumen. Durch den Vase-Mode-Druck ist jedes Stück ein Unikat mit individueller Oberfläche.</p>`,
    price: 12.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt', '📷 Detail', '📷 Ambiente'],
    video: null, // YouTube URL oder lokaler Pfad
    specs: {
      material: 'PLA / PLA+',
      höhe: '~180 mm',
      durchmesser: '~100 mm',
      druckzeit: '~2,5 Stunden',
      gewicht: '~85 g',
      infill: 'Vase Mode (Spiralize)',
      layerHeight: '0.2 mm',
      farben: 'Weiß, Schwarz, Gold, Kupfer, nach Wunsch'
    },
    license: { type: 'CC-BY', designer: 'Printables Community', url: 'https://www.printables.com/model/131488-spiral-vase-rose' },
    staffelpreise: [
      { ab: 1, preis: 12.90 },
      { ab: 3, preis: 10.90 },
      { ab: 10, preis: 8.90 }
    ],
    inStock: true
  },

  'fdm-home-2': {
    name: 'Melting Candle Teelichthalter',
    category: 'Home & Deko',
    categoryIcon: '🏠',
    shortDesc: 'Schmelzende Kerze als Deko — hält echte Teelichter',
    description: `<p>Dieser Teelichthalter sieht aus wie eine halb geschmolzene Kerze — ein witziger Hingucker für jeden Tisch. Das Teelicht wird einfach oben eingesetzt.</p>
<p>Sicher und stabil dank massivem Boden. Ideal als Geschenk oder für gemütliche Abende.</p>`,
    price: 8.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt', '📷 Mit Teelicht'],
    video: null,
    specs: {
      material: 'PLA',
      höhe: '~120 mm',
      durchmesser: '~60 mm',
      druckzeit: '~1,5 Stunden',
      gewicht: '~55 g',
      infill: '15%',
      layerHeight: '0.2 mm',
      farben: 'Weiß, Creme, nach Wunsch'
    },
    license: { type: 'CC-BY-SA', designer: 'Printables Community', url: 'https://www.printables.com/model/667437-melting-candle-tea-light-holder' },
    staffelpreise: [
      { ab: 1, preis: 8.90 },
      { ab: 5, preis: 6.90 },
      { ab: 10, preis: 5.50 }
    ],
    inStock: true
  },

  'fdm-home-3': {
    name: 'Moon Planter',
    category: 'Home & Deko',
    categoryIcon: '🏠',
    shortDesc: 'Mond-Pflanzgefäß für Sukkulenten — mit Drainage',
    description: `<p>Ein Pflanzgefäß in Mond-Form — perfekt für kleine Sukkulenten oder Kakteen. Mit integriertem Drainage-Loch für gesunde Pflanzen.</p>
<p>Sieht auf dem Fensterbrett oder Schreibtisch fantastisch aus. Auch ideal als Geschenk für Pflanzenliebhaber.</p>`,
    price: 9.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PLA',
      höhe: '~90 mm',
      durchmesser: '~110 mm',
      druckzeit: '~3 Stunden',
      gewicht: '~95 g',
      infill: '15%',
      layerHeight: '0.2 mm',
      farben: 'Weiß, Grau, Schwarz'
    },
    license: { type: 'CC-BY', designer: 'Printables Community', url: 'https://www.printables.com/model/235058-moon-planter' },
    staffelpreise: [
      { ab: 1, preis: 9.90 },
      { ab: 3, preis: 7.90 }
    ],
    inStock: true
  },

  'fdm-home-4': {
    name: 'Spiral Lampenschirm',
    category: 'Home & Deko',
    categoryIcon: '🏠',
    shortDesc: 'Vase-Mode Lampenschirm mit Lichtspiel-Effekt',
    description: `<p>Dieser Lampenschirm erzeugt durch seine Spiralstruktur faszinierende Lichtmuster an der Wand. Im Vase-Mode gedruckt für eine nahtlose, transluzente Oberfläche.</p>
<p>Passt auf Standard-E27-Fassungen. Am besten mit warmweißer LED-Birne kombinieren.</p>`,
    price: 14.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt', '📷 Lichteffekt'],
    video: null,
    specs: {
      material: 'PLA (transluzent empfohlen)',
      höhe: '~200 mm',
      durchmesser: '~150 mm',
      druckzeit: '~4 Stunden',
      gewicht: '~70 g',
      infill: 'Vase Mode',
      layerHeight: '0.2 mm',
      farben: 'Natur/Transluzent, Weiß, Warmweiß'
    },
    license: { type: 'CC-BY', designer: 'Printables Community', url: 'https://www.printables.com/model/1106983-spiral-lamp-shade-vase-mode' },
    staffelpreise: [
      { ab: 1, preis: 14.90 },
      { ab: 3, preis: 12.90 }
    ],
    inStock: true
  },

  // ===== BÜRO & ORGANISATION =====
  'fdm-buero-1': {
    name: 'KLAMMA Kabelclip',
    category: 'Büro & Organisation',
    categoryIcon: '🗂️',
    shortDesc: 'Verriegelbarer Kabelclip — hält Kabel sauber am Schreibtisch',
    description: `<p>Der KLAMMA ist ein cleverer, verriegelbarer Kabelclip mit Schnappverschluss. Einmal eingeklickt, hält er Ladekabel, USB-Kabel oder Kopfhörerkabel sicher am Schreibtischrand.</p>
<p>Leicht zu öffnen, fester Halt, kein Kleber nötig — einfach anklemmen.</p>`,
    price: 2.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PETG / PLA',
      größe: '~40 × 15 × 12 mm',
      druckzeit: '~15 Min / Stück',
      gewicht: '~5 g',
      infill: '100%',
      layerHeight: '0.2 mm',
      farben: 'Schwarz, Weiß, Grau'
    },
    license: { type: 'CC-BY-SA', designer: 'Printables Community', url: 'https://www.printables.com/model/359285-klamma-locking-cable-clip' },
    staffelpreise: [
      { ab: 1, preis: 2.90 },
      { ab: 5, preis: 2.20 },
      { ab: 10, preis: 1.50 }
    ],
    inStock: true
  },

  'fdm-buero-2': {
    name: 'Kopfhörer-Ständer',
    category: 'Büro & Organisation',
    categoryIcon: '🗂️',
    shortDesc: 'Minimalistischer Stand für Over-Ear Kopfhörer',
    description: `<p>Ein schlichter, stabiler Kopfhörerständer der auf jeden Schreibtisch passt. Universell für alle Over-Ear und On-Ear Kopfhörer geeignet.</p>
<p>Minimalistisches Design, kein Zusammenbau nötig — einfach hinstellen.</p>`,
    price: 11.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PLA / PETG',
      höhe: '~250 mm',
      breite: '~100 mm',
      druckzeit: '~6 Stunden',
      gewicht: '~180 g',
      infill: '20%',
      layerHeight: '0.2 mm',
      farben: 'Schwarz, Weiß, Holzoptik'
    },
    license: { type: 'CC-BY-SA', designer: 'Printables Community', url: 'https://www.printables.com/model/179001-headphone-stand' },
    staffelpreise: [
      { ab: 1, preis: 11.90 },
      { ab: 3, preis: 9.90 }
    ],
    inStock: true
  },

  'fdm-buero-3': {
    name: 'Spiral Stiftebecher',
    category: 'Büro & Organisation',
    categoryIcon: '🗂️',
    shortDesc: 'Spiral-Vase als Stiftehalter — funktional & dekorativ',
    description: `<p>Dieser Stiftebecher vereint Funktion und Design. Im Vase-Mode gedruckt mit einer angenehmen taktilen Spiralstruktur.</p>
<p>Groß genug für Stifte, Scheren, Lineale — ein Upgrade für jeden Schreibtisch.</p>`,
    price: 6.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PLA',
      höhe: '~100 mm',
      durchmesser: '~80 mm',
      druckzeit: '~1,5 Stunden',
      gewicht: '~45 g',
      infill: 'Vase Mode',
      layerHeight: '0.2 mm',
      farben: 'Schwarz, Weiß, Blau, nach Wunsch'
    },
    license: { type: 'CC-BY-SA', designer: 'Printables Community', url: 'https://www.printables.com/model/198024-tactile-spiral-vase-pen-cup' },
    staffelpreise: [
      { ab: 1, preis: 6.90 },
      { ab: 5, preis: 5.50 }
    ],
    inStock: true
  },

  'fdm-buero-4': {
    name: 'Klemm-Kopfhörerhalter',
    category: 'Büro & Organisation',
    categoryIcon: '🗂️',
    shortDesc: 'Parametrisch, klemmt an jede Tischkante',
    description: `<p>Kein Platz auf dem Schreibtisch? Dieser Kopfhörerhalter klemmt direkt an die Tischkante — ohne Schrauben, ohne Kleber.</p>
<p>Passend für Tischplatten bis 30mm Stärke. Hält auch schwere Kopfhörer sicher.</p>`,
    price: 7.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PETG',
      größe: '~80 × 60 × 50 mm',
      druckzeit: '~2 Stunden',
      gewicht: '~45 g',
      infill: '30%',
      layerHeight: '0.2 mm',
      farben: 'Schwarz, Weiß'
    },
    license: { type: 'CC-BY', designer: 'Printables Community', url: 'https://www.printables.com/model/509585-clampable-parametric-headphone-stand' },
    staffelpreise: [
      { ab: 1, preis: 7.90 },
      { ab: 3, preis: 6.50 }
    ],
    inStock: true
  },

  // ===== KÜCHE & HAUSHALT =====
  'fdm-kueche-1': {
    name: 'Zippy Tütenclip',
    category: 'Küche & Haushalt',
    categoryIcon: '🍳',
    shortDesc: 'Print-in-Place Beutelclip — druckt fertig zusammengebaut',
    description: `<p>Der Zippy Bag Clip wird in einem Stück gedruckt — ohne Zusammenbau. Einfach vom Druckbett nehmen und losclipsen.</p>
<p>Hält Chipstüten, Müslipackungen und Tiefkühlbeutel sicher verschlossen. Ein tolles Print-in-Place Design!</p>`,
    price: 1.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PLA / PETG',
      größe: '~75 × 30 × 15 mm',
      druckzeit: '~20 Min',
      gewicht: '~8 g',
      infill: '100%',
      layerHeight: '0.2 mm',
      farben: 'Bunt gemischt, nach Wunsch'
    },
    license: { type: 'CC-BY-SA', designer: 'Printables Community', url: 'https://www.printables.com/model/237467-zippy-bag-clip-print-in-place-ish' },
    staffelpreise: [
      { ab: 1, preis: 1.90 },
      { ab: 5, preis: 1.50 },
      { ab: 10, preis: 0.99 },
      { ab: 25, preis: 0.79 }
    ],
    inStock: true
  },

  'fdm-kueche-2': {
    name: 'Cam-Lock Tütenclip',
    category: 'Küche & Haushalt',
    categoryIcon: '🍳',
    shortDesc: 'Nocken-Verschluss für sichere Beutelverschlüsse',
    description: `<p>Ein eleganter Beutelclip mit Nocken-Verschluss für extra festen Halt. Ideal für Mehl, Zucker oder Kaffeebeutel.</p>
<p>Das geschwungene Design liegt gut in der Hand und sieht auch in der Küche schick aus.</p>`,
    price: 2.50,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PLA / PETG',
      größe: '~80 × 25 × 15 mm',
      druckzeit: '~25 Min',
      gewicht: '~10 g',
      infill: '100%',
      layerHeight: '0.2 mm',
      farben: 'Diverse'
    },
    license: { type: 'CC-BY', designer: 'Printables Community', url: 'https://www.printables.com/model/509410-curvy-cam-lock-bag-clip' },
    staffelpreise: [
      { ab: 1, preis: 2.50 },
      { ab: 5, preis: 1.90 },
      { ab: 10, preis: 1.40 }
    ],
    inStock: true
  },

  'fdm-kueche-3': {
    name: 'Tütenclip mit Schraubkappe',
    category: 'Küche & Haushalt',
    categoryIcon: '🍳',
    shortDesc: 'Clip + Ausgießer in einem — für Mehl, Zucker, Müsli',
    description: `<p>Nicht nur verschließen, sondern auch dosieren! Dieser Clip hat eine integrierte Schraubkappe als Ausgießer.</p>
<p>Ideal für Mehl-, Zucker- oder Müslibeutel. Clip aufsetzen, Kappe abschrauben, dosiert ausgießen.</p>`,
    price: 3.50,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PETG (lebensmittelecht)',
      größe: '~90 × 35 × 30 mm',
      druckzeit: '~40 Min',
      gewicht: '~18 g',
      infill: '100%',
      layerHeight: '0.2 mm',
      farben: 'Weiß, Grau'
    },
    license: { type: 'CC-BY', designer: 'Thingiverse Community', url: 'https://www.thingiverse.com/thing:3359365' },
    staffelpreise: [
      { ab: 1, preis: 3.50 },
      { ab: 5, preis: 2.90 },
      { ab: 10, preis: 2.20 }
    ],
    inStock: true
  },

  'fdm-kueche-4': {
    name: 'Gewürzregal',
    category: 'Küche & Haushalt',
    categoryIcon: '🍳',
    shortDesc: 'Modulares Gewürzregal — stapelbar, wandmontierbar',
    description: `<p>Ein modulares Gewürzregal, das sich an jede Küche anpasst. Einzeln als Regal nutzbar oder mehrere stapeln für eine ganze Gewürzwand.</p>
<p>Platz für Standard-Gewürzdosen. Wandmontage mit Schrauben oder 3M-Strips möglich.</p>`,
    price: 8.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PLA / PETG',
      größe: '~200 × 50 × 40 mm',
      druckzeit: '~3 Stunden',
      gewicht: '~60 g',
      infill: '20%',
      layerHeight: '0.2 mm',
      farben: 'Weiß, Schwarz, Holzoptik'
    },
    license: { type: 'CC-BY', designer: 'Printables Community', url: 'https://www.printables.com/model/442218-spice-shelves-spice-rack-spice-organizer' },
    staffelpreise: [
      { ab: 1, preis: 8.90 },
      { ab: 3, preis: 7.50 }
    ],
    inStock: true
  },

  // ===== TECH-ZUBEHÖR =====
  'fdm-tech-1': {
    name: 'Credit Card Phone Stand',
    category: 'Tech-Zubehör',
    categoryIcon: '📱',
    shortDesc: 'Ultradünn, passt ins Portemonnaie — Print-in-Place',
    description: `<p>Ein Handyständer so dünn wie eine Kreditkarte — passt ins Portemonnaie und ist immer dabei. Print-in-Place mit klappbarem Mechanismus.</p>
<p>Aufklappen, Handy reinstellen, fertig. Ideal für unterwegs, Meetings oder als Gadget-Geschenk.</p>`,
    price: 3.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt', '📷 Im Portemonnaie', '📷 Aufgeklappt'],
    video: null,
    specs: {
      material: 'TPU / PETG',
      größe: '85 × 54 × 0,8 mm (Kreditkartengröße)',
      druckzeit: '~30 Min',
      gewicht: '~6 g',
      infill: '100%',
      layerHeight: '0.15 mm',
      farben: 'Schwarz, Weiß, Transparent'
    },
    license: { type: 'CC-BY-SA', designer: 'Printables Community', url: 'https://www.printables.com/model/683312-ultra-thin-credit-card-sized-phone-stand-print-in-' },
    staffelpreise: [
      { ab: 1, preis: 3.90 },
      { ab: 5, preis: 2.90 },
      { ab: 10, preis: 1.90 }
    ],
    inStock: true
  },

  'fdm-tech-2': {
    name: 'Schlüsselanhänger Phone Stand',
    category: 'Tech-Zubehör',
    categoryIcon: '📱',
    shortDesc: 'Handyständer am Schlüsselbund — immer dabei',
    description: `<p>Klein genug für den Schlüsselbund, stabil genug für jedes Smartphone. Ein cleveres Gadget das man erst vermisst, wenn man es nicht hat.</p>`,
    price: 3.50,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PETG',
      größe: '~50 × 30 × 8 mm',
      druckzeit: '~20 Min',
      gewicht: '~8 g',
      infill: '100%',
      layerHeight: '0.2 mm',
      farben: 'Schwarz, diverse'
    },
    license: { type: 'CC-BY', designer: 'Printables Community', url: 'https://www.printables.com/model/749005-keychain-phone-stand' },
    staffelpreise: [
      { ab: 1, preis: 3.50 },
      { ab: 5, preis: 2.50 },
      { ab: 10, preis: 1.90 }
    ],
    inStock: true
  },

  'fdm-tech-3': {
    name: 'Universal Tablet-Ständer',
    category: 'Tech-Zubehör',
    categoryIcon: '📱',
    shortDesc: 'Für alle Handys & Tablets — stufenlos verstellbar',
    description: `<p>Ein universeller Ständer der Smartphones und Tablets jeder Größe hält. Stufenlos verstellbarer Winkel für Videotelefonie, Rezepte lesen oder Netflix schauen.</p>
<p>Stabil, klappbar und mit Kabelführung für gleichzeitiges Laden.</p>`,
    price: 6.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PLA / PETG',
      größe: '~120 × 80 × 100 mm',
      druckzeit: '~3,5 Stunden',
      gewicht: '~65 g',
      infill: '20%',
      layerHeight: '0.2 mm',
      farben: 'Schwarz, Weiß'
    },
    license: { type: 'CC-BY-SA', designer: 'Thingiverse Community', url: 'https://www.thingiverse.com/thing:412416' },
    staffelpreise: [
      { ab: 1, preis: 6.90 },
      { ab: 3, preis: 5.50 }
    ],
    inStock: true
  },

  'fdm-tech-4': {
    name: 'AirTag Clip-Halter',
    category: 'Tech-Zubehör',
    categoryIcon: '📱',
    shortDesc: 'Clip-on Halterung für Apple AirTag — Rucksack, Schlüssel',
    description: `<p>Eine schlichte Clip-Halterung für Apple AirTags. Einfach den AirTag einsetzen und an Rucksack, Schlüsselbund oder Tasche clippen.</p>
<p>Schützt den AirTag vor Kratzern und hält ihn sicher an Ort und Stelle.</p>`,
    price: 3.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PETG / TPU',
      größe: '~40 × 40 × 12 mm',
      druckzeit: '~25 Min',
      gewicht: '~8 g',
      infill: '100%',
      layerHeight: '0.2 mm',
      farben: 'Schwarz, Weiß, diverse'
    },
    license: { type: 'CC-BY', designer: 'Printables Community', url: 'https://www.printables.com/model/65879-clip-on-airtag-holder' },
    staffelpreise: [
      { ab: 1, preis: 3.90 },
      { ab: 5, preis: 2.90 },
      { ab: 10, preis: 2.20 }
    ],
    inStock: true
  },

  // ===== GARTEN & OUTDOOR =====
  'fdm-garten-1': {
    name: 'Terracotta Planter',
    category: 'Garten & Outdoor',
    categoryIcon: '🌿',
    shortDesc: 'Terracotta-Look im Vase-Mode — für drinnen & draußen',
    description: `<p>Dieser Pflanztopf im Terracotta-Stil wird im Vase-Mode gedruckt und überzeugt durch seine klassische Optik. Mit Drainage-Loch am Boden.</p>
<p>Ideal für Balkon, Terrasse oder Fensterbank. In der richtigen Farbe kaum von echtem Terracotta zu unterscheiden.</p>`,
    price: 7.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PLA',
      höhe: '~100 mm',
      durchmesser: '~120 mm',
      druckzeit: '~2,5 Stunden',
      gewicht: '~65 g',
      infill: 'Vase Mode',
      layerHeight: '0.2 mm',
      farben: 'Terracotta, Weiß, Grau'
    },
    license: { type: 'CC-BY-SA', designer: 'Printables Community', url: 'https://www.printables.com/model/224437-terracotta-inspired-planter-vase-mode' },
    staffelpreise: [
      { ab: 1, preis: 7.90 },
      { ab: 3, preis: 6.50 },
      { ab: 10, preis: 4.90 }
    ],
    inStock: true
  },

  'fdm-garten-2': {
    name: 'Vogelfutter-Halter',
    category: 'Garten & Outdoor',
    categoryIcon: '🌿',
    shortDesc: 'Halter für Meisenknödel — wetterfest druckbar',
    description: `<p>Ein einfacher, funktionaler Halter für Meisenknödel und Futterkugeln. Zum Aufhängen an Ästen, Balkongittern oder Haken.</p>
<p>In PETG gedruckt ist er wetterfest und hält den ganzen Winter durch.</p>`,
    price: 5.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PETG (wetterfest)',
      höhe: '~150 mm',
      durchmesser: '~90 mm',
      druckzeit: '~2 Stunden',
      gewicht: '~40 g',
      infill: '20%',
      layerHeight: '0.2 mm',
      farben: 'Grün, Braun, Schwarz'
    },
    license: { type: 'CC-BY', designer: 'Printables Community', url: 'https://www.printables.com/model/194409-mangeoire-a-oiseaux-support-boule-de-graisse-bird-' },
    staffelpreise: [
      { ab: 1, preis: 5.90 },
      { ab: 3, preis: 4.90 }
    ],
    inStock: true
  },

  'fdm-garten-3': {
    name: 'Flaschen-Vogelfutterstelle',
    category: 'Garten & Outdoor',
    categoryIcon: '🌿',
    shortDesc: 'PET-Flasche wird zum Futterhaus — Upcycling-Design',
    description: `<p>Upcycling at its best! Dieser Aufsatz verwandelt eine normale PET-Flasche in eine Vogelfutterstelle. Passend für 48mm und 28mm Flaschengewinde.</p>
<p>Flasche einsetzen, mit Vogelfutter füllen, aufhängen — fertig. Die Vögel bedienen sich von unten.</p>`,
    price: 4.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PETG (wetterfest)',
      höhe: '~80 mm',
      durchmesser: '~60 mm',
      druckzeit: '~1,5 Stunden',
      gewicht: '~30 g',
      infill: '20%',
      layerHeight: '0.2 mm',
      farben: 'Grün, Braun'
    },
    license: { type: 'CC-BY', designer: 'Printables Community', url: 'https://www.printables.com/model/1148339-bird-feeder-for-a-bottle-48mm-and-28mm-threads' },
    staffelpreise: [
      { ab: 1, preis: 4.90 },
      { ab: 3, preis: 3.90 }
    ],
    inStock: true
  },

  'fdm-garten-4': {
    name: 'Vogel-Futterhaus',
    category: 'Garten & Outdoor',
    categoryIcon: '🌿',
    shortDesc: 'Klassisches Vogelhaus — dekorativ & funktional',
    description: `<p>Ein klassisches Vogelhaus zum Aufhängen oder Aufstellen. Großzügiger Futterbereich mit Dach als Regenschutz.</p>
<p>Ein schönes Projekt für den Garten — Vögel lieben es, Nachbarn bewundern es.</p>`,
    price: 9.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: {
      material: 'PETG (wetterfest)',
      höhe: '~140 mm',
      breite: '~160 mm',
      druckzeit: '~5 Stunden',
      gewicht: '~120 g',
      infill: '20%',
      layerHeight: '0.2 mm',
      farben: 'Braun, Grün, Natur'
    },
    license: { type: 'CC-BY-SA', designer: 'Thingiverse Community', url: 'https://www.thingiverse.com/thing:1961134' },
    staffelpreise: [
      { ab: 1, preis: 9.90 },
      { ab: 3, preis: 8.50 }
    ],
    inStock: true
  }
};
