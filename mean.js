// ==================
// DROB DOWN START
// ==================
function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("mobileMenuOverlay");

  menu.classList.toggle("active");
  overlay.style.display = menu.classList.contains("active") ? "block" : "none";
}

function toggleLanguageDropdown() {
  const dropdown = document.getElementById("languageDropdownMobile");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

function selectLang(name, flag) {
  document.getElementById("selectedLangMobile").textContent = `${flag} ${name}`;
  toggleLanguageDropdown();
}

document.addEventListener("click", function (event) {
  const langBtn = document.querySelector(".language-btn");
  const dropdown = document.getElementById("languageDropdownMobile");
  if (!langBtn.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
});

// ==================
// ABOUT about(html)
// ==================

document.querySelectorAll(".reason-header").forEach((header) => {
  header.addEventListener("click", function () {
    const item = this.parentElement;
    const isActive = item.classList.contains("active");

    document.querySelectorAll(".reason-item").forEach((el) => {
      el.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

document.querySelector(".reason-item").classList.add("active");

// MODAL OYNA START
let selectedRestaurant = null;

function openOrderModal() {
  document.getElementById("orderModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeOrderModal() {
  document.getElementById("orderModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

function closeModalOnOverlay(event) {
  if (event.target.id === "orderModal") {
    closeOrderModal();
  }
}

function switchTab(tabName) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((content) => content.classList.remove("active"));

  if (tabName === "delivery") {
    document.querySelector(".tab-btn:first-child").classList.add("active");
    document.getElementById("deliveryTab").classList.add("active");
  } else {
    document.querySelector(".tab-btn:last-child").classList.add("active");
    document.getElementById("pickupTab").classList.add("active");
  }

  selectedRestaurant = null;
  document.getElementById("selectRestaurantBtn").disabled = true;
  document.querySelectorAll(".restaurant-item").forEach((item) => {
    item.style.borderColor = "#eee";
    item.style.background = "white";
  });
}

function selectRestaurant(element) {
  document.querySelectorAll(".restaurant-item").forEach((item) => {
    item.style.borderColor = "#eee";
    item.style.background = "white";
  });

  element.style.borderColor = "#e31e24";
  element.style.background = "#fff5f5";
  selectedRestaurant = element.querySelector(".restaurant-name").textContent;
  document.getElementById("selectRestaurantBtn").disabled = false;
}

function searchRestaurants() {
  const searchValue = document
    .getElementById("searchRestaurant")
    .value.toLowerCase();
  const restaurants = document.querySelectorAll(".restaurant-item");

  restaurants.forEach((restaurant) => {
    const name = restaurant
      .querySelector(".restaurant-name")
      .textContent.toLowerCase();
    const address = restaurant
      .querySelector(".restaurant-address")
      .textContent.toLowerCase();

    if (name.includes(searchValue) || address.includes(searchValue)) {
      restaurant.style.display = "block";
    } else {
      restaurant.style.display = "none";
    }
  });
}

document
  .getElementById("deliveryForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Buyurtma qabul qilindi! Tez orada siz bilan bog'lanamiz.");
    closeOrderModal();
  });

document
  .getElementById("selectRestaurantBtn")
  .addEventListener("click", function () {
    if (selectedRestaurant) {
      alert(`Tanlangan restoran: ${selectedRestaurant}`);
      closeOrderModal();
    }
  });

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeOrderModal();
  }
});
