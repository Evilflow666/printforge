/**
 * FACTUM3D Warenkorb — localStorage-basiert
 * Migriert von pita-cart → factum3d-cart (abwärtskompatibel)
 * Unterstützt einfache Items (id, name, price, qty) UND
 * reichhaltige Terrain-Items (mit Metadaten).
 */

const CART_KEY = "factum3d-cart";
const LEGACY_KEY = "pita-cart";

/* ── Migration: pita-cart → factum3d-cart (einmalig) ── */
(function migrateCart() {
  if (localStorage.getItem(CART_KEY)) return; // bereits migriert
  var legacy = localStorage.getItem(LEGACY_KEY);
  if (legacy) {
    localStorage.setItem(CART_KEY, legacy);
    // Legacy-Key behalten für Abwärtskompatibilität
  }
})();

/* ── Core ── */

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  // Beide Keys synchron halten für Legacy-Kompatibilität
  localStorage.setItem(LEGACY_KEY, JSON.stringify(cart));
  // Beide Events feuern
  document.dispatchEvent(new CustomEvent("factum3d-cart-changed"));
  document.dispatchEvent(new CustomEvent("pita-cart-changed"));
}

/**
 * Einfaches Item hinzufügen (Legacy-kompatibel)
 * addToCart("terrain-123", "Zugspitze Relief", 69, 1)
 */
function addToCart(id, name, price, qty) {
  qty = Number(qty) || 1;
  price = Number(price) || 0;
  var cart = getCart();
  var existing = cart.find(function(item) { return item.id === id; });
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: id, name: name, price: price, qty: qty });
  }
  saveCart(cart);
}

/**
 * Reichhaltiges Item hinzufügen (für Terrain etc.)
 * Pflichtfelder: id, name, price, qty
 * Optionale Felder: type, job_id, archive_id, locationName, lat, lon,
 *   radius, bbox, size, material, base, materialPrice, basePrice,
 *   download_url, meta_url, thumbnail, ...
 *
 * Wenn ein Item mit gleicher id existiert, wird es ersetzt (nicht addiert),
 * da Terrain-Modelle einzigartig sind.
 */
function addRichToCart(item) {
  if (!item || !item.id || !item.name || item.price == null) {
    console.error("addRichToCart: id, name, price sind Pflicht", item);
    return;
  }
  item.qty = item.qty || 1;
  item.type = item.type || "product";

  var cart = getCart();
  var idx = cart.findIndex(function(c) { return c.id === item.id; });
  if (idx >= 0) {
    // Terrain-Items ersetzen statt qty addieren
    if (item.type === "terrain") {
      cart[idx] = item;
    } else {
      cart[idx].qty += item.qty;
    }
  } else {
    cart.push(item);
  }
  saveCart(cart);
}

function removeFromCart(id) {
  var cart = getCart().filter(function(item) { return item.id !== id; });
  saveCart(cart);
}

function updateQty(id, qty) {
  qty = Math.max(0, Number(qty) || 0);
  var cart = getCart();
  if (qty <= 0) {
    cart = cart.filter(function(item) { return item.id !== id; });
  } else {
    var item = cart.find(function(item) { return item.id === id; });
    if (item) item.qty = qty;
  }
  saveCart(cart);
}

function getCartTotal() {
  return getCart().reduce(function(sum, item) { return sum + item.price * item.qty; }, 0);
}

function getCartCount() {
  return getCart().reduce(function(sum, item) { return sum + item.qty; }, 0);
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  localStorage.removeItem(LEGACY_KEY);
  document.dispatchEvent(new CustomEvent("factum3d-cart-changed"));
  document.dispatchEvent(new CustomEvent("pita-cart-changed"));
}

/**
 * Hilfsfunktion: Gibt nur Terrain-Items zurück
 */
function getTerrainItems() {
  return getCart().filter(function(item) { return item.type === "terrain"; });
}

/* ── Badge-Update ── */
function updateCartBadge() {
  var badge = document.getElementById("cart-badge");
  if (!badge) return;
  var count = getCartCount();
  badge.textContent = count > 0 ? count : "";
  badge.style.display = count > 0 ? "flex" : "none";
}

document.addEventListener("factum3d-cart-changed", updateCartBadge);
document.addEventListener("pita-cart-changed", updateCartBadge);
document.addEventListener("DOMContentLoaded", updateCartBadge);
