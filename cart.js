/**
 * FACTUM3D Warenkorb — localStorage-basiert
 */

const CART_KEY = "pita-cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  document.dispatchEvent(new CustomEvent("pita-cart-changed"));
}

function addToCart(id, name, price, qty) {
  var cart = getCart();
  var existing = cart.find(function(item) { return item.id === id; });
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: id, name: name, price: price, qty: qty });
  }
  saveCart(cart);
}

function removeFromCart(id) {
  var cart = getCart().filter(function(item) { return item.id !== id; });
  saveCart(cart);
}

function updateQty(id, qty) {
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
  document.dispatchEvent(new CustomEvent("pita-cart-changed"));
}

/* Badge-Update */
function updateCartBadge() {
  var badge = document.getElementById("cart-badge");
  if (!badge) return;
  var count = getCartCount();
  badge.textContent = count > 0 ? count : "";
  badge.style.display = count > 0 ? "flex" : "none";
}

document.addEventListener("pita-cart-changed", updateCartBadge);
document.addEventListener("DOMContentLoaded", updateCartBadge);
