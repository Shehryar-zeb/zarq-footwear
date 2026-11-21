// ZARQ storefront foundation.
// Real product data will be added only after the owner supplies actual designs, photos, prices and sizes.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

document.querySelector("#year").textContent = new Date().getFullYear();

// Commerce is intentionally not activated yet. No fake products, prices or checkout are shown.
document.querySelector("#bag-count").textContent = "0";
