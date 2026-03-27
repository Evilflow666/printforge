// Alle Preise inkl. 19% MwSt., zzgl. Versandkosten
// Alle Preise inkl. 19% MwSt., zzgl. Versandkosten
/**
 * FACTUM3D Product Data — Alle FDM-Produkte
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
    colorOptions: [{ name: 'Weiß', hex: '#FFFFFF' }, { name: 'Schwarz', hex: '#1a1a1a' }, { name: 'Gold', hex: '#C9A84C' }, { name: 'Kupfer', hex: '#B87333' }, { name: 'Roségold', hex: '#B76E79' }, { name: 'Silber', hex: '#C0C0C0' }],
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
    colorOptions: [{ name: 'Weiß', hex: '#FFFFFF' }, { name: 'Creme', hex: '#FFFDD0' }, { name: 'Schwarz', hex: '#1a1a1a' }, { name: 'Warmgrau', hex: '#9E9E9E' }],
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
    colorOptions: [{ name: 'Weiß', hex: '#FFFFFF' }, { name: 'Grau', hex: '#808080' }, { name: 'Schwarz', hex: '#1a1a1a' }, { name: 'Terracotta', hex: '#C04000' }, { name: 'Salbei', hex: '#9CAF88' }],
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
    colorOptions: [{ name: 'Natur/Transluzent', hex: '#F5F0E8' }, { name: 'Weiß', hex: '#FFFFFF' }, { name: 'Warmweiß', hex: '#FFF8DC' }, { name: 'Gelb', hex: '#FFD700' }],
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
    colorOptions: [{ name: 'Schwarz', hex: '#1a1a1a' }, { name: 'Weiß', hex: '#FFFFFF' }, { name: 'Grau', hex: '#808080' }, { name: 'Blau', hex: '#2962FF' }, { name: 'Rot', hex: '#D32F2F' }],
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
    colorOptions: [{ name: 'Schwarz', hex: '#1a1a1a' }, { name: 'Weiß', hex: '#FFFFFF' }, { name: 'Holzoptik', hex: '#8B6914' }, { name: 'Dunkelgrau', hex: '#404040' }],
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
    colorOptions: [{ name: 'Schwarz', hex: '#1a1a1a' }, { name: 'Weiß', hex: '#FFFFFF' }, { name: 'Blau', hex: '#2962FF' }, { name: 'Grün', hex: '#2E7D32' }, { name: 'Rot', hex: '#D32F2F' }],
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
    colorOptions: [{ name: 'Schwarz', hex: '#1a1a1a' }, { name: 'Weiß', hex: '#FFFFFF' }, { name: 'Grau', hex: '#808080' }],
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
    colorOptions: [{ name: 'Rot', hex: '#D32F2F' }, { name: 'Grün', hex: '#2E7D32' }, { name: 'Blau', hex: '#2962FF' }, { name: 'Gelb', hex: '#FBC02D' }, { name: 'Schwarz', hex: '#1a1a1a' }, { name: 'Weiß', hex: '#FFFFFF' }, { name: 'Bunt gemischt', hex: '#FF6B35' }],
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
    colorOptions: [{ name: 'Schwarz', hex: '#1a1a1a' }, { name: 'Weiß', hex: '#FFFFFF' }, { name: 'Grau', hex: '#808080' }, { name: 'Grün', hex: '#2E7D32' }, { name: 'Orange', hex: '#FF6B35' }],
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
    colorOptions: [{ name: 'Weiß', hex: '#FFFFFF' }, { name: 'Grau', hex: '#808080' }, { name: 'Schwarz', hex: '#1a1a1a' }],
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
    colorOptions: [{ name: 'Weiß', hex: '#FFFFFF' }, { name: 'Schwarz', hex: '#1a1a1a' }, { name: 'Holzoptik', hex: '#8B6914' }],
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
    colorOptions: [{ name: 'Schwarz', hex: '#1a1a1a' }, { name: 'Weiß', hex: '#FFFFFF' }, { name: 'Transparent', hex: '#E8E8E8' }],
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
    colorOptions: [{ name: 'Schwarz', hex: '#1a1a1a' }, { name: 'Weiß', hex: '#FFFFFF' }, { name: 'Grau', hex: '#808080' }, { name: 'Rot', hex: '#D32F2F' }],
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
    colorOptions: [{ name: 'Schwarz', hex: '#1a1a1a' }, { name: 'Weiß', hex: '#FFFFFF' }],
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
    colorOptions: [{ name: 'Schwarz', hex: '#1a1a1a' }, { name: 'Weiß', hex: '#FFFFFF' }, { name: 'Grau', hex: '#808080' }, { name: 'Blau', hex: '#2962FF' }],
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
    colorOptions: [{ name: 'Terracotta', hex: '#C04000' }, { name: 'Weiß', hex: '#FFFFFF' }, { name: 'Grau', hex: '#808080' }, { name: 'Schwarz', hex: '#1a1a1a' }, { name: 'Salbei', hex: '#9CAF88' }],
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
    colorOptions: [{ name: 'Grün', hex: '#2E7D32' }, { name: 'Braun', hex: '#5D4037' }, { name: 'Schwarz', hex: '#1a1a1a' }],
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
    colorOptions: [{ name: 'Grün', hex: '#2E7D32' }, { name: 'Braun', hex: '#5D4037' }],
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
    colorOptions: [{ name: 'Braun', hex: '#5D4037' }, { name: 'Grün', hex: '#2E7D32' }, { name: 'Natur', hex: '#DEB887' }],
    inStock: true
  },

  // ============================================
  // ===== LASERCUT & GRAVUR PRODUKTE ==========
  // ============================================

  // ===== HOME & WANDDEKO =====
  'laser-deko-1': {
    name: '3D Multilayer Wandbild',
    category: 'Home & Wanddeko',
    categoryIcon: '🏠',
    shortDesc: 'Mehrschichtiges Holz-Wandbild — Berge, Natur oder individuell',
    description: '<p>Ein beeindruckendes Wandbild aus 4-5 Schichten lasergeschnittenem Holz. Die Tiefenwirkung entsteht durch Abstandshalter zwischen den Schichten.</p><p>Verfügbar in verschiedenen Motiven: Bergpanorama, Wald, Stadtsilhouette oder nach deinem Wunschmotiv. Ein echtes Statement-Piece für jede Wand.</p>',
    price: 29.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm (4-5 Schichten)', größe: '~400 × 250 mm', schnittzeit: '~45 Min', gewicht: '~200 g', farben: 'Natur, gebeizt, lackiert' },
    license: { type: 'Frei kommerziell', designer: '3axis.co Community', url: 'https://3axis.co/laser-cut/wall-art/' },
    staffelpreise: [{ ab: 1, preis: 29.90 }, { ab: 3, preis: 24.90 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Dunkel gebeizt', hex: '#5D4037' }, { name: 'Weiß lackiert', hex: '#FFFFFF' }],
    inStock: true
  },

  'laser-deko-2': {
    name: 'Mandala Wanddeko',
    category: 'Home & Wanddeko',
    categoryIcon: '🏠',
    shortDesc: 'Filigrane Mandala-Kunst aus Holz — rund, detailliert, beeindruckend',
    description: '<p>Filigranes Mandala, präzise lasergeschnitten aus Holz. Die feinen Muster erzeugen bei Gegenlicht wunderschöne Schattenspiele an der Wand.</p><p>Erhältlich in verschiedenen Durchmessern und Designs. Jedes Stück ist ein Kunstwerk.</p>',
    price: 19.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm', durchmesser: '~300 mm', schnittzeit: '~30 Min', gewicht: '~80 g', farben: 'Natur, Weiß, Gold' },
    license: { type: 'Frei kommerziell', designer: '3axis.co Community', url: 'https://3axis.co/laser-cut/mandala/' },
    staffelpreise: [{ ab: 1, preis: 19.90 }, { ab: 3, preis: 15.90 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Weiß', hex: '#FFFFFF' }, { name: 'Gold', hex: '#C9A84C' }],
    inStock: true
  },

  'laser-deko-3': {
    name: 'Geometrische Wanduhr',
    category: 'Home & Wanddeko',
    categoryIcon: '🏠',
    shortDesc: 'Holzuhr mit Hexagon-/Wabenstruktur — inkl. Uhrwerk',
    description: '<p>Eine einzigartige Wanduhr mit geometrischem Muster aus lasergeschnittenem Holz. Das Uhrwerk (Quarz, lautlos) ist inklusive.</p><p>Die offene Hexagon-Struktur gibt der Uhr einen modernen, luftigen Look. Passt in jedes Wohnzimmer oder Büro.</p>',
    price: 24.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm + Quarz-Uhrwerk', durchmesser: '~300 mm', schnittzeit: '~25 Min', gewicht: '~150 g (mit Uhrwerk)', extras: 'Uhrwerk + Zeiger inklusive' },
    license: { type: 'Frei kommerziell', designer: '3axis.co Community', url: 'https://3axis.co/laser-cut/clock/' },
    staffelpreise: [{ ab: 1, preis: 24.90 }, { ab: 3, preis: 21.90 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Dunkel', hex: '#5D4037' }, { name: 'Schwarz', hex: '#1a1a1a' }],
    inStock: true
  },

  'laser-deko-4': {
    name: 'Namensschild / Türschild',
    category: 'Home & Wanddeko',
    categoryIcon: '🏠',
    shortDesc: 'Personalisierbar mit Namen, Sprüchen oder Logos',
    description: '<p>Ein individuelles Namensschild aus Holz oder Acryl — perfekt für die Haustür, Kinderzimmer oder als Firmenschild.</p><p>Wir gravieren deinen Wunschtext, Namen oder Logo. Verschiedene Schriftarten und Größen möglich.</p>',
    price: 12.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm oder Acryl 3mm', größe: '~200 × 80 mm (anpassbar)', schnittzeit: '~15 Min', gewicht: '~40 g', personalisierung: 'Text, Name, Logo' },
    license: { type: 'Eigendesign', designer: 'FACTUM3D', url: '' },
    staffelpreise: [{ ab: 1, preis: 12.90 }, { ab: 5, preis: 9.90 }, { ab: 10, preis: 7.90 }],
    colorOptions: [{ name: 'Holz Natur', hex: '#DEB887' }, { name: 'Holz Dunkel', hex: '#5D4037' }, { name: 'Acryl Weiß', hex: '#FFFFFF' }, { name: 'Acryl Schwarz', hex: '#1a1a1a' }, { name: 'Acryl Transparent', hex: '#E8E8E8' }],
    inStock: true
  },

  // ===== UNTERSETZER & TISCH =====
  'laser-tisch-1': {
    name: 'Untersetzer-Set mit Box',
    category: 'Untersetzer & Tischzubehör',
    categoryIcon: '🍺',
    shortDesc: '4-6 Stück mit dekorativer Aufbewahrungsbox — verschiedene Muster',
    description: '<p>Ein elegantes Set aus 4-6 Untersetzern mit passender Holzbox. Verschiedene Muster verfügbar: geometrisch, floral, Mandala oder personalisiert.</p><p>Die Box schützt die Untersetzer und sieht dabei selbst dekorativ aus. Perfektes Geschenk!</p>',
    price: 14.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm', größe: '~100 × 100 mm (pro Untersetzer)', schnittzeit: '~20 Min (Set)', gewicht: '~120 g (Set)', umfang: '4-6 Untersetzer + Box' },
    license: { type: 'Frei kommerziell', designer: '3axis.co Community', url: 'https://3axis.co/laser-cut/coaster-designs/' },
    staffelpreise: [{ ab: 1, preis: 14.90 }, { ab: 3, preis: 12.90 }, { ab: 5, preis: 10.90 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Dunkel gebeizt', hex: '#5D4037' }],
    inStock: true
  },

  'laser-tisch-2': {
    name: 'Mandala Untersetzer',
    category: 'Untersetzer & Tischzubehör',
    categoryIcon: '🍺',
    shortDesc: 'Filigrane Mandala-Muster — einzeln oder als Set',
    description: '<p>Einzelner Untersetzer mit filigranem Mandala-Muster. Lasergeschnitten aus Holz — schützt den Tisch und sieht dabei fantastisch aus.</p>',
    price: 3.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm', durchmesser: '~100 mm', schnittzeit: '~5 Min', gewicht: '~15 g' },
    license: { type: 'Frei kommerziell', designer: '3axis.co Community', url: 'https://3axis.co/laser-cut/coasters/' },
    staffelpreise: [{ ab: 1, preis: 3.90 }, { ab: 5, preis: 2.90 }, { ab: 10, preis: 1.90 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Dunkel', hex: '#5D4037' }],
    inStock: true
  },

  'laser-tisch-3': {
    name: 'Serviettenhalter',
    category: 'Untersetzer & Tischzubehör',
    categoryIcon: '🍺',
    shortDesc: 'Dekorativer Halter aus Holz — verschiedene Motive',
    description: '<p>Ein dekorativer Serviettenhalter aus lasergeschnittenem Holz. Steckverbindung, kein Kleber nötig. Verschiedene Motive: floral, geometrisch oder schlicht.</p>',
    price: 8.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm', größe: '~140 × 80 × 40 mm', schnittzeit: '~10 Min', gewicht: '~35 g' },
    license: { type: 'Frei kommerziell', designer: '3axis.co Community', url: 'https://3axis.co/laser-cut/napkin-holder/' },
    staffelpreise: [{ ab: 1, preis: 8.90 }, { ab: 3, preis: 7.50 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Dunkel', hex: '#5D4037' }, { name: 'Weiß', hex: '#FFFFFF' }],
    inStock: true
  },

  'laser-tisch-4': {
    name: 'Weinflaschenhalter',
    category: 'Untersetzer & Tischzubehör',
    categoryIcon: '🍺',
    shortDesc: 'Puzzle-Steckdesign — Hingucker und Geschenkidee',
    description: '<p>Ein Weinflaschenhalter der die Flasche scheinbar schwebend hält. Puzzle-Steckdesign aus Holz — baut sich in Sekunden zusammen, kein Kleber nötig.</p><p>Perfekt als Geschenk für Weinliebhaber oder als Hingucker auf dem Esstisch.</p>',
    price: 11.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 6mm', größe: '~300 × 120 × 120 mm', schnittzeit: '~15 Min', gewicht: '~80 g', tragkraft: 'Standard Weinflasche (0.75l)' },
    license: { type: 'Frei kommerziell', designer: 'VectorsFile Community', url: 'https://vectorsfile.com/laser-cut/wine-holder/' },
    staffelpreise: [{ ab: 1, preis: 11.90 }, { ab: 3, preis: 9.90 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Dunkel gebeizt', hex: '#5D4037' }],
    inStock: true
  },

  // ===== BÜRO =====
  'laser-buero-1': {
    name: 'Schreibtisch-Organizer',
    category: 'Büro & Organisation',
    categoryIcon: '🗂️',
    shortDesc: 'Steckverbindung — Fächer für Stifte, Handy, Karten, Notizen',
    description: '<p>Ein vielseitiger Schreibtisch-Organizer aus Holz. Mehrere Fächer für Stifte, Smartphone, Visitenkarten und Notizzettel. Alles steckt zusammen — kein Kleber.</p>',
    price: 16.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm', größe: '~250 × 150 × 120 mm', schnittzeit: '~25 Min', gewicht: '~120 g', montage: 'Steckverbindung, kein Kleber' },
    license: { type: 'Frei kommerziell', designer: '3axis.co Community', url: 'https://3axis.co/laser-cut/organizer/' },
    staffelpreise: [{ ab: 1, preis: 16.90 }, { ab: 3, preis: 13.90 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Dunkel', hex: '#5D4037' }, { name: 'Weiß', hex: '#FFFFFF' }],
    inStock: true
  },

  'laser-buero-2': {
    name: 'Visitenkarten-Halter',
    category: 'Büro & Organisation',
    categoryIcon: '🗂️',
    shortDesc: 'Eleganter Holzständer für Visitenkarten — personalisierbar',
    description: '<p>Ein schlichter, eleganter Halter für Visitenkarten. Optional mit Firmenlogo oder Name gravierbar.</p>',
    price: 9.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm oder Acryl', größe: '~100 × 60 × 30 mm', schnittzeit: '~8 Min', gewicht: '~25 g' },
    license: { type: 'Frei kommerziell', designer: '3axis.co Community', url: 'https://3axis.co/laser-cut/business-card-holder/' },
    staffelpreise: [{ ab: 1, preis: 9.90 }, { ab: 5, preis: 7.90 }, { ab: 10, preis: 5.90 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Dunkel', hex: '#5D4037' }, { name: 'Acryl klar', hex: '#E8E8E8' }],
    inStock: true
  },

  'laser-buero-3': {
    name: 'Stiftehalter',
    category: 'Büro & Organisation',
    categoryIcon: '🗂️',
    shortDesc: 'Geometrisches oder Tier-Motiv — Steckdesign aus Holz',
    description: '<p>Ein dekorativer Stiftehalter in geometrischem Design oder als Tier-Motiv (Eule, Katze, Hirsch). Steckverbindung aus lasergeschnittenem Holz.</p>',
    price: 8.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm', größe: '~80 × 80 × 100 mm', schnittzeit: '~12 Min', gewicht: '~40 g' },
    license: { type: 'Frei kommerziell', designer: '3axis.co Community', url: 'https://3axis.co/laser-cut/pen-holder/' },
    staffelpreise: [{ ab: 1, preis: 8.90 }, { ab: 5, preis: 6.90 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Dunkel', hex: '#5D4037' }],
    inStock: true
  },

  'laser-buero-4': {
    name: 'Briefständer / Dokumentenhalter',
    category: 'Büro & Organisation',
    categoryIcon: '🗂️',
    shortDesc: 'Vertikaler Holzständer für Post und Dokumente',
    description: '<p>Hält Briefe, Dokumente und Zeitschriften aufrecht. Dekoratives Muster an den Seiten. Steckverbindung aus Holz.</p>',
    price: 12.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm', größe: '~200 × 80 × 150 mm', schnittzeit: '~15 Min', gewicht: '~60 g' },
    license: { type: 'Frei kommerziell', designer: '3axis.co Community', url: 'https://3axis.co/laser-cut/organizer/' },
    staffelpreise: [{ ab: 1, preis: 12.90 }, { ab: 3, preis: 10.90 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Dunkel', hex: '#5D4037' }, { name: 'Weiß', hex: '#FFFFFF' }],
    inStock: true
  },

  // ===== GESCHENKE =====
  'laser-geschenk-1': {
    name: 'Schmuckbox',
    category: 'Geschenke & Personalisierung',
    categoryIcon: '🎁',
    shortDesc: 'Holzbox mit Steckverbindung — kein Kleber nötig, gravierbar',
    description: '<p>Eine elegante Schmuckbox aus lasergeschnittenem Holz. Steckverbindung — baut sich ohne Kleber zusammen. Optional mit Gravur personalisierbar.</p>',
    price: 14.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm', größe: '~120 × 80 × 50 mm', schnittzeit: '~15 Min', gewicht: '~45 g', personalisierung: 'Gravur optional' },
    license: { type: 'Frei kommerziell', designer: '3axis.co Community', url: 'https://3axis.co/laser-cut/box/' },
    staffelpreise: [{ ab: 1, preis: 14.90 }, { ab: 3, preis: 12.90 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Dunkel', hex: '#5D4037' }],
    inStock: true
  },

  'laser-geschenk-2': {
    name: 'Schlüsselanhänger',
    category: 'Geschenke & Personalisierung',
    categoryIcon: '🎁',
    shortDesc: 'Holz oder Acryl — mit Name, Initiale oder Logo graviert',
    description: '<p>Ein personalisierter Schlüsselanhänger aus Holz oder Acryl. Gravur mit Name, Initiale, Datum oder Logo. Kleines Geschenk, große Wirkung.</p>',
    price: 4.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm oder Acryl', größe: '~50 × 30 mm', schnittzeit: '~3 Min', gewicht: '~5 g', personalisierung: 'Gravur inklusive' },
    license: { type: 'Eigendesign', designer: 'FACTUM3D', url: '' },
    staffelpreise: [{ ab: 1, preis: 4.90 }, { ab: 5, preis: 3.50 }, { ab: 10, preis: 2.50 }, { ab: 25, preis: 1.90 }],
    colorOptions: [{ name: 'Holz Natur', hex: '#DEB887' }, { name: 'Acryl Weiß', hex: '#FFFFFF' }, { name: 'Acryl Schwarz', hex: '#1a1a1a' }, { name: 'Acryl Transparent', hex: '#E8E8E8' }],
    inStock: true
  },

  'laser-geschenk-3': {
    name: '3D Grußkarte',
    category: 'Geschenke & Personalisierung',
    categoryIcon: '🎁',
    shortDesc: 'Pop-up Karte aus Holz oder Karton — handlich & beeindruckend',
    description: '<p>Eine dreidimensionale Grußkarte die sich beim Öffnen auffaltet. Lasergeschnitten aus dünnem Holz oder Karton. Verfügbar für Geburtstag, Weihnachten, Valentinstag.</p>',
    price: 6.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 1mm oder Karton', größe: '~150 × 100 mm (zugeklappt)', schnittzeit: '~8 Min', gewicht: '~15 g' },
    license: { type: 'Frei kommerziell', designer: '3axis.co Community', url: 'https://3axis.co/laser-cut/card/' },
    staffelpreise: [{ ab: 1, preis: 6.90 }, { ab: 5, preis: 4.90 }, { ab: 10, preis: 3.90 }],
    colorOptions: [{ name: 'Holz Natur', hex: '#DEB887' }, { name: 'Weiß Karton', hex: '#FFFFFF' }, { name: 'Kraft Karton', hex: '#C4A882' }],
    inStock: true
  },

  'laser-geschenk-4': {
    name: 'Fotorahmen mit Gravur',
    category: 'Geschenke & Personalisierung',
    categoryIcon: '🎁',
    shortDesc: 'Holzrahmen mit persönlicher Gravur — Datum, Name, Spruch',
    description: '<p>Ein Fotorahmen aus lasergeschnittenem Holz mit personalisierter Gravur. Perfekt für besondere Anlässe: Hochzeit, Geburt, Jubiläum.</p>',
    price: 11.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm', größe: '~180 × 130 mm (für 10×15 Foto)', schnittzeit: '~12 Min', gewicht: '~50 g', personalisierung: 'Gravur inklusive' },
    license: { type: 'Eigendesign', designer: 'FACTUM3D', url: '' },
    staffelpreise: [{ ab: 1, preis: 11.90 }, { ab: 3, preis: 9.90 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Dunkel', hex: '#5D4037' }, { name: 'Weiß', hex: '#FFFFFF' }],
    inStock: true
  },

  // ===== SAISONAL =====
  'laser-saison-1': {
    name: 'Weihnachts-Ornamente',
    category: 'Saisonal & Events',
    categoryIcon: '🎄',
    shortDesc: 'Schneeflocken, Bäume, Sterne — zum Aufhängen am Baum',
    description: '<p>Filigrane Weihnachtsornamente aus lasergeschnittenem Holz. Schneeflocken, Tannenbäume, Sterne und mehr. Zum Aufhängen am Weihnachtsbaum oder als Fensterdeko.</p>',
    price: 2.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm', größe: '~60-80 mm', schnittzeit: '~3 Min/Stück', gewicht: '~5 g' },
    license: { type: 'Frei kommerziell', designer: '3axis.co Community', url: 'https://3axis.co/laser-cut/christmas/' },
    staffelpreise: [{ ab: 1, preis: 2.90 }, { ab: 5, preis: 2.20 }, { ab: 10, preis: 1.50 }, { ab: 25, preis: 0.99 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Weiß', hex: '#FFFFFF' }, { name: 'Rot', hex: '#D32F2F' }, { name: 'Gold', hex: '#C9A84C' }],
    inStock: true
  },

  'laser-saison-2': {
    name: 'Oster-Deko Set',
    category: 'Saisonal & Events',
    categoryIcon: '🎄',
    shortDesc: 'Hasen, Eierhalter, Frühlingsdeko aus Holz',
    description: '<p>Ein frühlingshaftes Deko-Set aus Holz: Osterhasen, Eierhalter und Blumen-Motive. Steckdesign — einfach zusammenbauen und aufstellen.</p>',
    price: 7.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm', größe: 'Verschiedene Teile, ~100 mm hoch', schnittzeit: '~15 Min (Set)', gewicht: '~40 g' },
    license: { type: 'Frei kommerziell', designer: '3axis.co Community', url: 'https://3axis.co/laser-cut/easter/' },
    staffelpreise: [{ ab: 1, preis: 7.90 }, { ab: 3, preis: 5.90 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Bunt bemalt', hex: '#4CAF50' }],
    inStock: true
  },

  'laser-saison-3': {
    name: 'Hochzeits-Deko',
    category: 'Saisonal & Events',
    categoryIcon: '🎄',
    shortDesc: 'Cake Topper, Tischkarten, Ringbox — personalisierbar',
    description: '<p>Personalisierte Hochzeitsdeko aus Holz: Cake Topper mit Namen, Tischkarten mit Gravur, oder eine elegante Ringbox. Alles lasergeschnitten und individuell gestaltet.</p>',
    price: 9.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm / Acryl', größe: 'Je nach Produkt', schnittzeit: '~10-20 Min', personalisierung: 'Namen, Datum, Spruch' },
    license: { type: 'Eigendesign', designer: 'FACTUM3D', url: '' },
    staffelpreise: [{ ab: 1, preis: 9.90 }, { ab: 5, preis: 7.90 }],
    colorOptions: [{ name: 'Holz Natur', hex: '#DEB887' }, { name: 'Acryl Gold', hex: '#C9A84C' }, { name: 'Acryl Silber', hex: '#C0C0C0' }, { name: 'Acryl Roségold', hex: '#B76E79' }],
    inStock: true
  },

  'laser-saison-4': {
    name: 'Teelichthalter',
    category: 'Saisonal & Events',
    categoryIcon: '🎄',
    shortDesc: 'Stern- oder Herzmuster — erzeugt wunderschöne Lichtspiele',
    description: '<p>Ein Teelichthalter aus lasergeschnittenem Holz mit filigranem Stern- oder Herzmuster. Wenn das Teelicht brennt, projiziert es wunderschöne Muster an die umliegenden Wände.</p>',
    price: 8.90,
    priceUnit: '€',
    images: ['📷 Produktfoto kommt'],
    video: null,
    specs: { material: 'Sperrholz 3mm', größe: '~80 × 80 × 80 mm', schnittzeit: '~12 Min', gewicht: '~30 g', extras: 'Teelicht nicht inklusive' },
    license: { type: 'Frei kommerziell', designer: '3axis.co Community', url: 'https://3axis.co/laser-cut/candle-holder/' },
    staffelpreise: [{ ab: 1, preis: 8.90 }, { ab: 3, preis: 6.90 }, { ab: 10, preis: 4.90 }],
    colorOptions: [{ name: 'Natur', hex: '#DEB887' }, { name: 'Dunkel', hex: '#5D4037' }, { name: 'Weiß', hex: '#FFFFFF' }],
    inStock: true
  }
};
