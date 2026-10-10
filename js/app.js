// ============================================================
// A-MART - Fashion for Everyone
// Complete Application Logic & WhatsApp Order System
// Target WhatsApp: +91 7355415447
// ============================================================

// Global Application State
const appState = {
  cart: [],
  wishlist: new Set(),
  recentlyViewed: [],
  currentUser: null,
  appliedCoupon: null,
  activeCategory: "all",
  activeSectionTab: "all",
  maxPrice: 3000,
  priceBracket: "all",
  selectedSizes: new Set(),
  selectedColors: new Set(),
  saleOnly: false,
  bestsellerOnly: false,
  sortBy: "featured",
  searchQuery: "",
  currentHeroIndex: 0,
  heroInterval: null,
  checkoutContext: null // { type: 'cart' } or { type: 'single', product, size, color, quantity }
};

// ============================================================
// 1. INITIALIZATION & LOCAL STORAGE
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  loadStoredData();
  renderCategoryNavigation();
  renderCategoryCircles();
  renderSidebarCategoryDropdown();
  renderMobileDrawerCategories();
  renderProducts();
  renderReviews();
  initHeroSlider();
  initSearchAutocomplete();
  initMobileDrawer();
  updateHeaderBadges();
  checkSavedUserData();
});

// Load cart, wishlist, and user from localStorage
function loadStoredData() {
  try {
    const savedCart = localStorage.getItem("amart_cart");
    if (savedCart) {
      appState.cart = JSON.parse(savedCart);
    }

    const savedWishlist = localStorage.getItem("amart_wishlist");
    if (savedWishlist) {
      const arr = JSON.parse(savedWishlist);
      appState.wishlist = new Set(arr);
    }

    const savedRecentlyViewed = localStorage.getItem("amart_recently_viewed");
    if (savedRecentlyViewed) {
      appState.recentlyViewed = JSON.parse(savedRecentlyViewed);
    }

    const savedUser = localStorage.getItem("amart_user");
    if (savedUser) {
      appState.currentUser = JSON.parse(savedUser);
    }
  } catch (err) {
    console.error("Error loading local storage data:", err);
  }
}

function saveCartToStorage() {
  localStorage.setItem("amart_cart", JSON.stringify(appState.cart));
  updateHeaderBadges();
}

function saveWishlistToStorage() {
  localStorage.setItem("amart_wishlist", JSON.stringify([...appState.wishlist]));
  updateHeaderBadges();
}

function saveUserDataToStorage(user) {
  appState.currentUser = user;
  localStorage.setItem("amart_user", JSON.stringify(user));
  checkSavedUserData();
}

function checkSavedUserData() {
  const authBtnText = document.getElementById("authBtnText");
  if (appState.currentUser && appState.currentUser.name) {
    const firstName = appState.currentUser.name.split(" ")[0];
    authBtnText.textContent = `Hi, ${firstName}`;
  } else {
    authBtnText.textContent = "Sign In";
  }
}

// ============================================================
// 2. CATEGORY NAVIGATION & CIRCLES
// ============================================================
function renderCategoryNavigation() {
  const navList = document.getElementById("categoryNavList");
  if (!navList) return;

  navList.innerHTML = CATEGORIES_LIST.map(cat => {
    const isSale = cat.id === "sale";
    const isActive = appState.activeCategory === cat.id;
    return `
      <li class="category-nav-item ${isActive ? 'active' : ''} ${isSale ? 'sale-highlight' : ''}" 
          onclick="filterByCategory('${cat.id}')">
        <i class="fa-solid ${cat.icon}"></i>
        <span>${cat.name}</span>
        ${cat.badge ? `<span class="sale-pill">${cat.badge}</span>` : ''}
      </li>
    `;
  }).join("");
}

function renderCategoryCircles() {
  const container = document.getElementById("categoryCirclesScroll");
  if (!container) return;

  const circles = [
    { id: "men", name: "Men", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80" },
    { id: "women", name: "Women", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=200&q=80" },
    { id: "kids", name: "Kids", img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=200&q=80" },
    { id: "ethnic-wear", name: "Ethnic", img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=200&q=80" },
    { id: "western-wear", name: "Western", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=80" },
    { id: "shirts", name: "Shirts", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=200&q=80" },
    { id: "jeans", name: "Jeans", img: "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=200&q=80" },
    { id: "dresses", name: "Dresses", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=200&q=80" },
    { id: "footwear", name: "Footwear", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=200&q=80" },
    { id: "accessories", name: "Accessories", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=200&q=80" },
    { id: "sale", name: "Mega Sale", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=200&q=80" }
  ];

  container.innerHTML = circles.map(c => `
    <div class="category-circle-item ${appState.activeCategory === c.id ? 'active' : ''}" onclick="filterByCategory('${c.id}')">
      <div class="circle-avatar-wrap">
        <img src="${c.img}" alt="${c.name}" class="circle-avatar-img" loading="lazy">
      </div>
      <span class="circle-name">${c.name}</span>
    </div>
  `).join("");
}

function renderSidebarCategoryDropdown() {
  const select = document.getElementById("sidebarCategorySelect");
  if (!select) return;

  select.innerHTML = CATEGORIES_LIST.map(cat => `
    <option value="${cat.id}" ${appState.activeCategory === cat.id ? 'selected' : ''}>${cat.name}</option>
  `).join("");
}

function renderMobileDrawerCategories() {
  const list = document.getElementById("mobileDrawerCategoryList");
  if (!list) return;

  list.innerHTML = CATEGORIES_LIST.map(cat => `
    <li class="mobile-drawer-cat-item ${appState.activeCategory === cat.id ? 'active' : ''}" 
        onclick="closeMobileDrawer(); filterByCategory('${cat.id}')">
      <div class="mobile-drawer-cat-left">
        <i class="fa-solid ${cat.icon}"></i>
        <span>${cat.name}</span>
      </div>
      ${cat.badge ? `<span class="sale-pill">${cat.badge}</span>` : '<i class="fa-solid fa-chevron-right" style="font-size: 0.75rem; color: var(--text-light);"></i>'}
    </li>
  `).join("");
}

function initMobileDrawer() {
  const toggleBtn = document.getElementById("mobileNavToggle");
  const drawerSearch = document.getElementById("drawerSearchInput");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => openMobileDrawer());
  }

  if (drawerSearch) {
    drawerSearch.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const val = drawerSearch.value.trim();
        if (val) {
          closeMobileDrawer();
          triggerSearch(val);
        }
      }
    });
  }
}

function openMobileDrawer() {
  renderMobileDrawerCategories();
  const drawer = document.getElementById("mobileDrawerOverlay");
  if (drawer) drawer.classList.add("active");
}

function closeMobileDrawer(e) {
  if (e && e.target !== document.getElementById("mobileDrawerOverlay")) return;
  const drawer = document.getElementById("mobileDrawerOverlay");
  if (drawer) drawer.classList.remove("active");
}

// ============================================================
// 3. PRODUCT CATALOG FILTERING & SORTING
// ============================================================
function getFilteredProducts() {
  let list = [...PRODUCTS_DATA];

  // 1. Category Filter
  if (appState.activeCategory && appState.activeCategory !== "all") {
    const catSlug = appState.activeCategory.toLowerCase();
    
    // Map slugs to category names
    const slugMap = {
      "men": "Men",
      "women": "Women",
      "kids": "Kids",
      "boys": "Boys",
      "girls": "Girls",
      "ethnic-wear": "Ethnic Wear",
      "western-wear": "Western Wear",
      "t-shirts": "T-Shirts",
      "shirts": "Shirts",
      "jeans": "Jeans",
      "trousers": "Trousers",
      "dresses": "Dresses",
      "footwear": "Footwear",
      "accessories": "Accessories"
    };

    if (catSlug === "sale") {
      list = list.filter(p => p.isSale === true || (p.categories && p.categories.includes("Sale")));
    } else if (slugMap[catSlug]) {
      const targetName = slugMap[catSlug];
      list = list.filter(p => 
        p.category === targetName || 
        (p.categories && p.categories.includes(targetName))
      );
    }
  }

  // 2. Section Tab Filter (Trending, New, Bestseller, Sale)
  if (appState.activeSectionTab === "trending") {
    list = list.filter(p => p.isTrending);
  } else if (appState.activeSectionTab === "new") {
    list = list.filter(p => p.isNew);
  } else if (appState.activeSectionTab === "bestseller") {
    list = list.filter(p => p.isBestSeller);
  } else if (appState.activeSectionTab === "sale") {
    list = list.filter(p => p.isSale);
  }

  // 3. Price Filter (Slider & Radio Brackets)
  list = list.filter(p => p.discountedPrice <= appState.maxPrice);

  if (appState.priceBracket === "under-499") {
    list = list.filter(p => p.discountedPrice < 499);
  } else if (appState.priceBracket === "500-999") {
    list = list.filter(p => p.discountedPrice >= 500 && p.discountedPrice <= 999);
  } else if (appState.priceBracket === "1000-plus") {
    list = list.filter(p => p.discountedPrice >= 1000);
  }

  // 4. Size Filter
  if (appState.selectedSizes.size > 0) {
    list = list.filter(p => 
      p.sizes.some(size => appState.selectedSizes.has(size))
    );
  }

  // 5. Color Filter
  if (appState.selectedColors.size > 0) {
    list = list.filter(p => 
      p.colors.some(c => {
        const cName = c.name.toLowerCase();
        return Array.from(appState.selectedColors).some(sel => cName.includes(sel.toLowerCase()));
      })
    );
  }

  // 6. Special Checkbox Filters
  if (appState.saleOnly) {
    list = list.filter(p => p.isSale);
  }
  if (appState.bestsellerOnly) {
    list = list.filter(p => p.isBestSeller);
  }

  // 7. Global Search Query
  if (appState.searchQuery && appState.searchQuery.trim() !== "") {
    const q = appState.searchQuery.toLowerCase().trim();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.categories && p.categories.some(c => c.toLowerCase().includes(q))) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // 8. Sorting
  switch (appState.sortBy) {
    case "price-low":
      list.sort((a, b) => a.discountedPrice - b.discountedPrice);
      break;
    case "price-high":
      list.sort((a, b) => b.discountedPrice - a.discountedPrice);
      break;
    case "rating":
      list.sort((a, b) => b.rating - a.rating);
      break;
    case "discount":
      list.sort((a, b) => b.discountPct - a.discountPct);
      break;
    case "newest":
      list.sort((a, b) => (b.isNew === a.isNew ? 0 : b.isNew ? 1 : -1));
      break;
    default:
      // Featured: bestsellers and trending first
      list.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
      break;
  }

  return list;
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyCatalogState");
  const countEl = document.getElementById("productCountNum");
  if (!grid) return;

  const products = getFilteredProducts();
  
  if (countEl) {
    countEl.textContent = products.length;
  }

  renderActiveFilterChips();

  if (products.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  grid.innerHTML = products.map(product => {
    const isWishlisted = appState.wishlist.has(product.id);
    const mainImg = product.images[0] || "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80";

    return `
      <div class="product-card" data-id="${product.id}">
        <!-- Image Area -->
        <div class="product-card-img-wrap" onclick="openProductDetailsModal('${product.id}')">
          <img src="${mainImg}" alt="${product.name}" class="product-card-img" loading="lazy">
          
          ${product.badge ? `<span class="product-badge-tag">${product.badge}</span>` : ''}
          
          <button class="wishlist-toggle-btn ${isWishlisted ? 'active' : ''}" 
                  onclick="toggleWishlist(event, '${product.id}')" 
                  aria-label="Wishlist">
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>

        <!-- Body Details -->
        <div class="product-card-body">
          <div class="product-card-brand">${product.category} • A-MART</div>
          
          <h3 class="product-card-title" onclick="openProductDetailsModal('${product.id}')" title="${product.name}">
            ${product.name}
          </h3>

          <!-- Rating -->
          <div class="product-rating-box">
            <span class="rating-pill">
              <span>${product.rating}</span>
              <i class="fa-solid fa-star" style="font-size: 0.65rem;"></i>
            </span>
            <span class="reviews-count">(${product.reviewsCount})</span>
          </div>

          <!-- Price Row -->
          <div class="product-price-row">
            <span class="price-discounted">₹${product.discountedPrice.toLocaleString('en-IN')}</span>
            <span class="price-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>
            <span class="discount-percentage">(${product.discountPct}% OFF)</span>
          </div>

          <!-- Sizes Mini Preview -->
          <div class="product-card-sizes">
            <span>Sizes:</span>
            ${product.sizes.slice(0, 4).map(s => `<span class="size-mini-tag">${s}</span>`).join("")}
            ${product.sizes.length > 4 ? `<span class="size-mini-tag">+${product.sizes.length - 4}</span>` : ''}
          </div>

          <!-- Action Buttons -->
          <div class="product-card-actions">
            <button class="btn-card-cart" onclick="quickAddToCart('${product.id}')">
              <i class="fa-solid fa-cart-plus"></i>
              <span>Add to Cart</span>
            </button>

            <button class="btn-card-buy" onclick="quickBuyNowWhatsApp('${product.id}')">
              <i class="fa-brands fa-whatsapp"></i>
              <span>Buy Now</span>
            </button>
          </div>

        </div>
      </div>
    `;
  }).join("");
}

// Active Filter Chips
function renderActiveFilterChips() {
  const container = document.getElementById("activeFilterChipsBar");
  if (!container) return;

  const chips = [];

  if (appState.activeCategory !== "all") {
    const catObj = CATEGORIES_LIST.find(c => c.id === appState.activeCategory);
    const label = catObj ? catObj.name : appState.activeCategory;
    chips.push({
      label: `Category: ${label}`,
      clear: () => filterByCategory("all")
    });
  }

  if (appState.maxPrice < 3000) {
    chips.push({
      label: `Under ₹${appState.maxPrice}`,
      clear: () => {
        appState.maxPrice = 3000;
        document.getElementById("priceRangeInput").value = 3000;
        document.getElementById("priceSliderVal").textContent = "₹3,000";
        renderProducts();
      }
    });
  }

  if (appState.priceBracket !== "all") {
    chips.push({
      label: `Price: ${appState.priceBracket}`,
      clear: () => filterByPriceBracket("all")
    });
  }

  appState.selectedSizes.forEach(size => {
    chips.push({
      label: `Size: ${size}`,
      clear: () => toggleSizeFilter(size)
    });
  });

  appState.selectedColors.forEach(color => {
    chips.push({
      label: `Color: ${color}`,
      clear: () => toggleColorFilter(color)
    });
  });

  if (appState.searchQuery) {
    chips.push({
      label: `Search: "${appState.searchQuery}"`,
      clear: () => clearSearchQuery()
    });
  }

  if (chips.length === 0) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = chips.map((c, idx) => `
    <span class="active-chip">
      <span>${c.label}</span>
      <button onclick="window.__clearChip(${idx})" aria-label="Remove filter">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </span>
  `).join("");

  window.__activeChipsList = chips;
}

window.__clearChip = function(index) {
  if (window.__activeChipsList && window.__activeChipsList[index]) {
    window.__activeChipsList[index].clear();
  }
};

// ============================================================
// 4. FILTER ACTIONS
// ============================================================
function filterByCategory(catId) {
  appState.activeCategory = catId;
  
  // Update nav UI
  renderCategoryNavigation();
  renderCategoryCircles();
  
  const select = document.getElementById("sidebarCategorySelect");
  if (select) select.value = catId;

  renderProducts();

  // Smooth scroll to catalog
  const catalogEl = document.getElementById("catalog");
  if (catalogEl && window.scrollY > 300) {
    catalogEl.scrollIntoView({ behavior: "smooth" });
  }
}

function filterByBudget(maxPrice) {
  appState.activeCategory = "all";
  appState.maxPrice = maxPrice;
  appState.priceBracket = "all";
  
  const slider = document.getElementById("priceRangeInput");
  const sliderVal = document.getElementById("priceSliderVal");
  if (slider) slider.value = maxPrice;
  if (sliderVal) sliderVal.textContent = `₹${maxPrice.toLocaleString('en-IN')}`;

  renderCategoryNavigation();
  renderProducts();

  const catalogEl = document.getElementById("catalog");
  if (catalogEl) {
    catalogEl.scrollIntoView({ behavior: "smooth" });
  }
}

function switchSectionTab(tabId) {
  appState.activeSectionTab = tabId;
  
  document.querySelectorAll(".featured-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });

  renderProducts();
}

function updatePriceSlider(val) {
  appState.maxPrice = Number(val);
  const sliderVal = document.getElementById("priceSliderVal");
  if (sliderVal) sliderVal.textContent = `₹${Number(val).toLocaleString('en-IN')}`;
  renderProducts();
}

function filterByPriceBracket(bracket) {
  appState.priceBracket = bracket;
  renderProducts();
}

function toggleSizeFilter(size) {
  if (appState.selectedSizes.has(size)) {
    appState.selectedSizes.delete(size);
  } else {
    appState.selectedSizes.add(size);
  }

  // Update UI pills
  document.querySelectorAll(".size-filter-grid .size-pill").forEach(btn => {
    btn.classList.toggle("active", appState.selectedSizes.has(btn.textContent.trim()));
  });

  renderProducts();
}

function toggleColorFilter(color) {
  if (appState.selectedColors.has(color)) {
    appState.selectedColors.delete(color);
  } else {
    appState.selectedColors.add(color);
  }

  renderProducts();
}

function toggleSaleOnly(checked) {
  appState.saleOnly = checked;
  renderProducts();
}

function toggleBestsellerOnly(checked) {
  appState.bestsellerOnly = checked;
  renderProducts();
}

function changeCatalogSort(val) {
  appState.sortBy = val;
  renderProducts();
}

function resetAllFilters() {
  appState.activeCategory = "all";
  appState.activeSectionTab = "all";
  appState.maxPrice = 3000;
  appState.priceBracket = "all";
  appState.selectedSizes.clear();
  appState.selectedColors.clear();
  appState.saleOnly = false;
  appState.bestsellerOnly = false;
  appState.sortBy = "featured";
  appState.searchQuery = "";

  const slider = document.getElementById("priceRangeInput");
  const sliderVal = document.getElementById("priceSliderVal");
  if (slider) slider.value = 3000;
  if (sliderVal) sliderVal.textContent = "₹3,000";

  const allPriceRadio = document.querySelector('input[name="priceBracket"][value="all"]');
  if (allPriceRadio) allPriceRadio.checked = true;

  const saleBox = document.getElementById("saleOnlyCheckbox");
  if (saleBox) saleBox.checked = false;

  const bestBox = document.getElementById("bestsellerOnlyCheckbox");
  if (bestBox) bestBox.checked = false;

  document.querySelectorAll(".size-filter-grid .size-pill").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".color-filter-grid .color-swatch-btn").forEach(btn => btn.classList.remove("active"));

  clearSearchQuery();
  renderCategoryNavigation();
  renderCategoryCircles();
  renderSidebarCategoryDropdown();
  renderProducts();
  showToast("All filters have been reset", "info");
}

function toggleMobileFilters() {
  const sidebar = document.getElementById("filtersSidebar");
  if (sidebar) sidebar.classList.toggle("active");
}

// ============================================================
// 5. SEARCH & AUTOCOMPLETE
// ============================================================
function initSearchAutocomplete() {
  const searchInput = document.getElementById("globalSearchInput");
  const clearBtn = document.getElementById("searchClearBtn");
  const dropdown = document.getElementById("searchSuggestionsDropdown");
  const submitBtn = document.getElementById("searchSubmitBtn");

  if (!searchInput || !dropdown) return;

  searchInput.addEventListener("input", (e) => {
    const val = e.target.value.trim();
    if (clearBtn) clearBtn.classList.toggle("visible", val.length > 0);

    if (val.length < 2) {
      dropdown.classList.remove("active");
      dropdown.innerHTML = "";
      return;
    }

    const matches = PRODUCTS_DATA.filter(p => 
      p.name.toLowerCase().includes(val.toLowerCase()) ||
      p.category.toLowerCase().includes(val.toLowerCase()) ||
      (p.categories && p.categories.some(c => c.toLowerCase().includes(val.toLowerCase())))
    ).slice(0, 5);

    if (matches.length === 0) {
      dropdown.innerHTML = `
        <div style="padding: 1.25rem; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
          No items found matching "<strong>${escapeHtml(val)}</strong>"
        </div>
      `;
      dropdown.classList.add("active");
      return;
    }

    dropdown.innerHTML = `
      <div class="suggestions-header">Products & Suggestions</div>
      ${matches.map(item => `
        <div class="suggestion-item" onclick="selectSearchSuggestion('${item.id}')">
          <img src="${item.images[0]}" alt="${item.name}">
          <div class="suggestion-info">
            <div class="suggestion-title">${highlightMatch(item.name, val)}</div>
            <div class="suggestion-meta">
              <span class="suggestion-price">₹${item.discountedPrice}</span>
              <span class="suggestion-mrp">₹${item.originalPrice}</span>
              <span class="suggestion-cat">${item.category}</span>
            </div>
          </div>
          <i class="fa-solid fa-arrow-right" style="color: var(--text-light); font-size: 0.8rem;"></i>
        </div>
      `).join("")}
    `;
    dropdown.classList.add("active");
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.classList.remove("visible");
      dropdown.classList.remove("active");
      clearSearchQuery();
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      triggerSearch(searchInput.value.trim());
    });
  }

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      dropdown.classList.remove("active");
      triggerSearch(searchInput.value.trim());
    } else if (e.key === "Escape") {
      dropdown.classList.remove("active");
    }
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });
}

function highlightMatch(text, query) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return escapeHtml(text);
  const before = text.substring(0, idx);
  const match = text.substring(idx, idx + query.length);
  const after = text.substring(idx + query.length);
  return `${escapeHtml(before)}<strong style="color: var(--primary-red);">${escapeHtml(match)}</strong>${escapeHtml(after)}`;
}

function selectSearchSuggestion(productId) {
  const dropdown = document.getElementById("searchSuggestionsDropdown");
  if (dropdown) dropdown.classList.remove("active");
  openProductDetailsModal(productId);
}

function triggerSearch(query) {
  if (!query) return;
  appState.searchQuery = query;
  renderProducts();

  const catalog = document.getElementById("catalog");
  if (catalog) catalog.scrollIntoView({ behavior: "smooth" });
}

function clearSearchQuery() {
  appState.searchQuery = "";
  const input = document.getElementById("globalSearchInput");
  if (input) input.value = "";
  renderProducts();
}

// ============================================================
// 6. SHOPPING CART FUNCTIONALITY
// ============================================================
function quickAddToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const defaultSize = product.sizes[0] || "Standard";
  const defaultColor = product.colors[0]?.name || "Original";

  addItemToCart(product, defaultSize, defaultColor, 1);
}

function addItemToCart(product, size, color, quantity = 1) {
  // Check if identical item already in cart
  const cartItemId = `${product.id}_${size}_${color}`;
  const existing = appState.cart.find(item => item.id === cartItemId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    appState.cart.push({
      id: cartItemId,
      productId: product.id,
      name: product.name,
      price: product.discountedPrice,
      originalPrice: product.originalPrice,
      size: size,
      color: color,
      quantity: quantity,
      image: product.images[0]
    });
  }

  saveCartToStorage();
  showToast(`Added "${product.name}" to cart!`, "success");
  openCartDrawer();
}

function updateCartItemQty(cartItemId, delta) {
  const item = appState.cart.find(i => i.id === cartItemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeCartItem(cartItemId);
    return;
  }

  saveCartToStorage();
  renderCartDrawer();
}

function removeCartItem(cartItemId) {
  appState.cart = appState.cart.filter(i => i.id !== cartItemId);
  saveCartToStorage();
  renderCartDrawer();
  showToast("Item removed from cart", "info");
}

function calculateCartTotals() {
  const subtotal = appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let discount = 0;
  if (appState.appliedCoupon) {
    const coupon = STORE_CONFIG.coupons[appState.appliedCoupon];
    if (coupon && subtotal >= coupon.minOrder) {
      if (coupon.type === "flat") {
        discount = coupon.discount;
      } else if (coupon.type === "percent") {
        discount = Math.round((subtotal * coupon.discount) / 100);
      }
    }
  }

  const shipping = subtotal >= STORE_CONFIG.freeShippingThreshold || subtotal === 0 ? 0 : STORE_CONFIG.standardShippingFee;
  const total = Math.max(0, subtotal - discount + shipping);

  return { subtotal, discount, shipping, total };
}

function renderCartDrawer() {
  const container = document.getElementById("cartItemsContainer");
  const countEl = document.getElementById("cartDrawerCount");
  const subtotalText = document.getElementById("cartSubtotalText");
  const discountRow = document.getElementById("cartDiscountRow");
  const discountText = document.getElementById("cartDiscountText");
  const shippingText = document.getElementById("cartShippingText");
  const totalText = document.getElementById("cartGrandTotalText");
  const freeNotice = document.getElementById("freeShippingNotice");
  const freeBar = document.getElementById("freeShippingBarFill");

  if (!container) return;

  const { subtotal, discount, shipping, total } = calculateCartTotals();

  if (countEl) countEl.textContent = appState.cart.reduce((c, i) => c + i.quantity, 0);
  if (subtotalText) subtotalText.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  
  if (discountRow) {
    if (discount > 0) {
      discountRow.style.display = "flex";
      discountText.textContent = `-₹${discount.toLocaleString('en-IN')}`;
    } else {
      discountRow.style.display = "none";
    }
  }

  if (shippingText) {
    shippingText.textContent = shipping === 0 ? "FREE" : `₹${shipping}`;
  }

  if (totalText) totalText.textContent = `₹${total.toLocaleString('en-IN')}`;

  // Free shipping meter
  if (freeNotice && freeBar) {
    if (subtotal >= STORE_CONFIG.freeShippingThreshold) {
      freeNotice.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked FREE Delivery!`;
      freeBar.style.width = "100%";
      freeBar.style.backgroundColor = "var(--accent-green)";
    } else {
      const remaining = STORE_CONFIG.freeShippingThreshold - subtotal;
      const pct = Math.min(100, Math.round((subtotal / STORE_CONFIG.freeShippingThreshold) * 100));
      freeNotice.innerHTML = `Add <strong>₹${remaining.toLocaleString('en-IN')}</strong> more to get <strong>FREE Delivery!</strong>`;
      freeBar.style.width = `${pct}%`;
      freeBar.style.backgroundColor = "var(--primary-red)";
    }
  }

  // Render Items List
  if (appState.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 1rem; color: var(--text-light);">
          <i class="fa-solid fa-bag-shopping"></i>
        </div>
        <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--secondary-black); margin-bottom: 0.5rem;">Your Cart is Empty</h4>
        <p style="font-size: 0.88rem; margin-bottom: 1.5rem;">Looks like you haven't added any fashion items yet.</p>
        <button class="hero-cta-btn" onclick="closeCartDrawer()" style="font-size: 0.9rem; padding: 0.65rem 1.5rem;">Start Shopping</button>
      </div>
    `;
    return;
  }

  container.innerHTML = appState.cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
      
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-options">Size: <strong>${item.size}</strong> | Color: <strong>${item.color}</strong></div>
        
        <div class="cart-item-price-qty">
          <span class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>

          <div class="qty-control-box">
            <button class="qty-btn" onclick="updateCartItemQty('${item.id}', -1)" aria-label="Decrease quantity">-</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartItemQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
          </div>

          <button class="cart-item-remove-btn" onclick="removeCartItem('${item.id}')" title="Remove item">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById("cartDrawerOverlay");
  if (drawer) drawer.classList.add("active");
}

function closeCartDrawer(e) {
  if (e && e.target !== document.getElementById("cartDrawerOverlay")) return;
  const drawer = document.getElementById("cartDrawerOverlay");
  if (drawer) drawer.classList.remove("active");
}

function applyCartCoupon() {
  const input = document.getElementById("cartCouponInput");
  const msgEl = document.getElementById("couponAppliedMsg");
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  const coupon = STORE_CONFIG.coupons[code];

  if (!coupon) {
    if (msgEl) {
      msgEl.textContent = "❌ Invalid coupon code. Try AMART100 or FIRST50.";
      msgEl.style.color = "var(--primary-red)";
      msgEl.style.display = "block";
    }
    showToast("Invalid coupon code", "error");
    return;
  }

  const { subtotal } = calculateCartTotals();
  if (subtotal < coupon.minOrder) {
    if (msgEl) {
      msgEl.textContent = `❌ Requires minimum order of ₹${coupon.minOrder}.`;
      msgEl.style.color = "var(--primary-red)";
      msgEl.style.display = "block";
    }
    showToast(`Requires min order of ₹${coupon.minOrder}`, "error");
    return;
  }

  appState.appliedCoupon = code;
  if (msgEl) {
    msgEl.textContent = `✅ Coupon ${code} applied! (${coupon.desc})`;
    msgEl.style.color = "var(--accent-green)";
    msgEl.style.display = "block";
  }
  showToast(`Coupon ${code} applied successfully!`, "success");
  renderCartDrawer();
}

function updateHeaderBadges() {
  const cartBadge = document.getElementById("cartCount");
  const mobileCartBadge = document.getElementById("mobileCartCount");
  const cartSubtotalHeader = document.getElementById("cartSubtotalHeader");
  const wishlistBadge = document.getElementById("wishlistCount");
  const mobileWishlistBadge = document.getElementById("mobileWishlistCount");

  const totalCount = appState.cart.reduce((c, i) => c + i.quantity, 0);
  const { subtotal } = calculateCartTotals();

  if (cartBadge) cartBadge.textContent = totalCount;
  if (mobileCartBadge) mobileCartBadge.textContent = totalCount;
  if (cartSubtotalHeader) cartSubtotalHeader.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  
  if (wishlistBadge) wishlistBadge.textContent = appState.wishlist.size;
  if (mobileWishlistBadge) mobileWishlistBadge.textContent = appState.wishlist.size;
}

// ============================================================
// 7. WHATSAPP ORDER SYSTEM (MOST IMPORTANT REQUIREMENT)
// Target WhatsApp Number: 7355415447 (wa.me/917355415447)
// ============================================================
function quickBuyNowWhatsApp(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const defaultSize = product.sizes[0] || "Standard";
  const defaultColor = product.colors[0]?.name || "Original";

  appState.checkoutContext = {
    type: "single",
    product: product,
    size: defaultSize,
    color: defaultColor,
    quantity: 1
  };

  openCheckoutModal();
}

function openCheckoutModalFromCart() {
  if (appState.cart.length === 0) {
    showToast("Your cart is empty!", "error");
    return;
  }

  closeCartDrawer();
  appState.checkoutContext = { type: "cart" };
  openCheckoutModal();
}

function openCheckoutModal() {
  const modal = document.getElementById("checkoutModalOverlay");
  const itemsContainer = document.getElementById("checkoutItemsList");
  const totalAmountEl = document.getElementById("checkoutTotalAmountText");

  if (!modal || !appState.checkoutContext) return;

  // Pre-fill user data if available
  if (appState.currentUser) {
    const nameInput = document.getElementById("custName");
    const mobileInput = document.getElementById("custMobile");
    if (nameInput && appState.currentUser.name) nameInput.value = appState.currentUser.name;
    if (mobileInput && appState.currentUser.phone) mobileInput.value = appState.currentUser.phone;
  }

  let itemsHtml = "";
  let calculatedTotal = 0;

  if (appState.checkoutContext.type === "single") {
    const { product, size, color, quantity } = appState.checkoutContext;
    const itemTotal = product.discountedPrice * quantity;
    const shipping = itemTotal >= STORE_CONFIG.freeShippingThreshold ? 0 : STORE_CONFIG.standardShippingFee;
    calculatedTotal = itemTotal + shipping;

    itemsHtml = `
      <div class="mini-item-row">
        <div>
          <div class="mini-item-name">${product.name}</div>
          <div class="mini-item-meta">Size: ${size} | Color: ${color} | Qty: ${quantity}</div>
        </div>
        <div style="font-weight: 700;">₹${itemTotal.toLocaleString('en-IN')}</div>
      </div>
      ${shipping > 0 ? `
        <div class="mini-item-row" style="color: var(--text-muted);">
          <div>Delivery Fee</div>
          <div>₹${shipping}</div>
        </div>
      ` : `
        <div class="mini-item-row" style="color: var(--accent-green);">
          <div>Delivery Fee</div>
          <div>FREE</div>
        </div>
      `}
    `;
  } else {
    // Cart order
    const { subtotal, discount, shipping, total } = calculateCartTotals();
    calculatedTotal = total;

    itemsHtml = appState.cart.map(item => `
      <div class="mini-item-row">
        <div>
          <div class="mini-item-name">${item.name}</div>
          <div class="mini-item-meta">Size: ${item.size} | Color: ${item.color} | Qty: ${item.quantity}</div>
        </div>
        <div style="font-weight: 700;">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
      </div>
    `).join("");

    if (discount > 0) {
      itemsHtml += `
        <div class="mini-item-row" style="color: var(--accent-green);">
          <div>Coupon Discount (${appState.appliedCoupon})</div>
          <div>-₹${discount.toLocaleString('en-IN')}</div>
        </div>
      `;
    }

    itemsHtml += `
      <div class="mini-item-row" style="color: ${shipping === 0 ? 'var(--accent-green)' : 'var(--text-muted)'};">
        <div>Delivery Fee</div>
        <div>${shipping === 0 ? 'FREE' : '₹' + shipping}</div>
      </div>
    `;
  }

  if (itemsContainer) itemsContainer.innerHTML = itemsHtml;
  if (totalAmountEl) totalAmountEl.textContent = `₹${calculatedTotal.toLocaleString('en-IN')}`;

  modal.classList.add("active");
}

function closeCheckoutModal(e) {
  if (e && e.target !== document.getElementById("checkoutModalOverlay")) return;
  const modal = document.getElementById("checkoutModalOverlay");
  if (modal) modal.classList.remove("active");
}

let selectedPayment = "Cash on Delivery (COD)";

function selectPaymentMethod(method) {
  selectedPayment = method;
  document.getElementById("payRadioCod").classList.toggle("active", method === "Cash on Delivery (COD)");
  document.getElementById("payRadioUpi").classList.toggle("active", method !== "Cash on Delivery (COD)");
}

// Generate the WhatsApp Order message and open wa.me URL
function handleCheckoutFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("custName").value.trim();
  const mobile = document.getElementById("custMobile").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const city = document.getElementById("custCity").value.trim();
  const state = document.getElementById("custState").value;
  const pincode = document.getElementById("custPincode").value.trim();
  const notes = document.getElementById("custNotes").value.trim();

  // Basic validation
  if (!name || !mobile || !address || !city || !pincode) {
    showToast("Please fill in all required delivery details", "error");
    return;
  }

  if (!/^\d{10}$/.test(mobile)) {
    showToast("Please enter a valid 10-digit mobile number", "error");
    return;
  }

  if (!/^\d{6}$/.test(pincode)) {
    showToast("Please enter a valid 6-digit PIN code", "error");
    return;
  }

  // Save customer info for ease of repeat shopping
  saveUserDataToStorage({ name, phone: mobile, address, city, state, pincode });

  let itemsText = "";
  let totalAmount = 0;
  let itemsCount = 0;
  let deliveryCharge = 0;

  if (appState.checkoutContext.type === "single") {
    const { product, size, color, quantity } = appState.checkoutContext;
    const itemTotal = product.discountedPrice * quantity;
    deliveryCharge = itemTotal >= STORE_CONFIG.freeShippingThreshold ? 0 : STORE_CONFIG.standardShippingFee;
    totalAmount = itemTotal + deliveryCharge;
    itemsCount = quantity;

    itemsText = `1. *${product.name}*\n   • Size: ${size} | Color: ${color}\n   • Quantity: ${quantity}\n   • Price: ₹${product.discountedPrice} (Total: ₹${itemTotal})`;
  } else {
    const { subtotal, discount, shipping, total } = calculateCartTotals();
    totalAmount = total;
    deliveryCharge = shipping;
    itemsCount = appState.cart.reduce((c, i) => c + i.quantity, 0);

    itemsText = appState.cart.map((item, index) => {
      const lineTotal = item.price * item.quantity;
      return `${index + 1}. *${item.name}*\n   • Size: ${item.size} | Color: ${item.color}\n   • Quantity: ${item.quantity}\n   • Price: ₹${item.price} (Subtotal: ₹${lineTotal})`;
    }).join("\n\n");

    if (discount > 0) {
      itemsText += `\n\n🏷️ *Coupon Discount Applied:* -₹${discount} (Code: ${appState.appliedCoupon})`;
    }
  }

  // Build the complete WhatsApp message exactly matching prompt requirements
  const orderDate = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  const orderRef = "AM-" + Math.floor(100000 + Math.random() * 900000);

  const whatsappMessage = 
`Hello A-Mart! I want to place an order.

Ref ID: #${orderRef} (${orderDate})

Customer Name: ${name}
Mobile: ${mobile}
Delivery Address: ${address}, ${city}, ${state} - PIN: ${pincode}${notes ? `\nDelivery Note: ${notes}` : ""}

Products:
${itemsText}

Total Quantity: ${itemsCount} Item(s)
Delivery Charges: ${deliveryCharge === 0 ? "FREE Delivery" : `₹${deliveryCharge}`}
Total Amount: ₹${totalAmount.toLocaleString('en-IN')}
Payment Method: ${selectedPayment}

Please confirm my order and delivery details.`;

  // Encode the message correctly using encodeURIComponent()
  const encodedText = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodedText}`;

  // Close checkout modal
  closeCheckoutModal();

  // If this was a cart order, empty cart upon dispatch
  if (appState.checkoutContext.type === "cart") {
    appState.cart = [];
    appState.appliedCoupon = null;
    saveCartToStorage();
  }

  // Open WhatsApp in new tab/window
  window.open(whatsappUrl, "_blank");

  // Show clear on-screen confirmation modal explaining that order is verified when sent to WhatsApp
  openOrderConfirmModal();
}

function openOrderConfirmModal() {
  const modal = document.getElementById("orderConfirmModalOverlay");
  if (modal) modal.classList.add("active");
}

function closeOrderConfirmModal(e) {
  if (e && e.target !== document.getElementById("orderConfirmModalOverlay")) return;
  const modal = document.getElementById("orderConfirmModalOverlay");
  if (modal) modal.classList.remove("active");
}

// ============================================================
// 8. PRODUCT DETAILS MODAL (COMPREHENSIVE VIEW)
// ============================================================
function openProductDetailsModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  // Track in recently viewed
  trackRecentlyViewed(productId);

  const modal = document.getElementById("productModalOverlay");
  const content = document.getElementById("productModalContent");
  const breadcrumb = document.getElementById("pmodalCatBreadcrumb");
  if (!modal || !content) return;

  if (breadcrumb) {
    breadcrumb.textContent = `A-MART • ${product.category.toUpperCase()} • ${product.id.toUpperCase()}`;
  }

  const isWishlisted = appState.wishlist.has(product.id);
  let selectedModalSize = product.sizes[0] || "Standard";
  let selectedModalColor = product.colors[0]?.name || "Original";
  let modalQty = 1;

  content.innerHTML = `
    <div class="product-modal-grid">
      
      <!-- Gallery Column -->
      <div class="pmodal-gallery">
        <div class="pmodal-main-img-wrap">
          <img src="${product.images[0]}" alt="${product.name}" id="pmodalMainImg" class="pmodal-main-img">
        </div>
        
        <div class="pmodal-thumbs-row">
          ${product.images.map((img, i) => `
            <img src="${img}" alt="Thumbnail ${i+1}" class="pmodal-thumb ${i === 0 ? 'active' : ''}" 
                 onclick="switchModalThumb('${img}', this)">
          `).join("")}
        </div>
      </div>

      <!-- Info Column -->
      <div class="pmodal-info">
        
        <div>
          <div style="font-size: 0.78rem; font-weight: 700; color: var(--primary-red); text-transform: uppercase; letter-spacing: 0.8px;">
            ${product.badge || 'A-MART EXCLUSIVE'}
          </div>
          <h2 class="pmodal-title">${product.name}</h2>
          
          <div class="product-rating-box" style="margin-top: 0.4rem;">
            <span class="rating-pill">
              <span>${product.rating}</span>
              <i class="fa-solid fa-star"></i>
            </span>
            <span class="reviews-count">(${product.reviewsCount} customer reviews)</span>
            <span style="color: var(--accent-green); font-size: 0.75rem; font-weight: 700; margin-left: 0.5rem;">
              <i class="fa-solid fa-shield-check"></i> In Stock & Ready to Ship
            </span>
          </div>
        </div>

        <!-- Pricing -->
        <div class="product-price-row" style="margin-bottom: 0;">
          <span class="price-discounted" style="font-size: 1.6rem;">₹${product.discountedPrice.toLocaleString('en-IN')}</span>
          <span class="price-original" style="font-size: 1.05rem;">MRP: ₹${product.originalPrice.toLocaleString('en-IN')}</span>
          <span class="discount-percentage" style="font-size: 1rem;">(${product.discountPct}% OFF)</span>
        </div>
        <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: -8px;">Inclusive of all taxes</div>

        <!-- Size Selection -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <span style="font-weight: 700; font-size: 0.88rem;">Select Size: <strong id="selectedSizeLabel" style="color: var(--primary-red);">${selectedModalSize}</strong></span>
            <button onclick="openSizeGuideModal()" style="font-size: 0.78rem; color: var(--primary-red); font-weight: 700; text-decoration: underline;">
              <i class="fa-solid fa-ruler-horizontal"></i> Size Guide
            </button>
          </div>
          
          <div class="size-filter-grid" id="modalSizeBtns">
            ${product.sizes.map((s, idx) => `
              <button class="size-pill ${idx === 0 ? 'active' : ''}" onclick="selectModalSize('${s}', this)">${s}</button>
            `).join("")}
          </div>
        </div>

        <!-- Color Selection -->
        <div>
          <span style="font-weight: 700; font-size: 0.88rem; display: block; margin-bottom: 0.5rem;">
            Select Color: <strong id="selectedColorLabel" style="color: var(--secondary-black);">${selectedModalColor}</strong>
          </span>
          <div class="color-filter-grid" id="modalColorBtns">
            ${product.colors.map((c, idx) => `
              <button class="color-swatch-btn ${idx === 0 ? 'active' : ''}" 
                      style="background-color: ${c.hex};" 
                      title="${c.name}" 
                      onclick="selectModalColor('${c.name}', this)">
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Quantity Selector & Pincode Checker -->
        <div style="display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap;">
          <div>
            <span style="font-weight: 700; font-size: 0.85rem; display: block; margin-bottom: 0.35rem;">Quantity:</span>
            <div class="qty-control-box" style="height: 38px;">
              <button class="qty-btn" style="width: 34px; height: 38px;" onclick="changeModalQty(-1)">-</button>
              <span class="qty-value" id="modalQtyVal" style="width: 36px;">1</span>
              <button class="qty-btn" style="width: 34px; height: 38px;" onclick="changeModalQty(1)">+</button>
            </div>
          </div>

          <!-- Pincode Check -->
          <div style="flex: 1; min-width: 200px;">
            <span style="font-weight: 700; font-size: 0.85rem; display: block; margin-bottom: 0.35rem;">Delivery Check:</span>
            <div class="pincode-check-wrap">
              <input type="text" class="pincode-input" id="modalPincodeInput" placeholder="Enter 6-digit PIN" maxlength="6">
              <button class="pincode-btn" onclick="checkPincodeDelivery()">Check</button>
            </div>
            <div id="pincodeDeliveryStatus" class="pincode-status-msg"></div>
          </div>
        </div>

        <!-- Action CTAs -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 0.5rem;">
          <button class="btn-card-cart" style="padding: 0.85rem; font-size: 0.95rem;" onclick="addModalItemToCart('${product.id}')">
            <i class="fa-solid fa-cart-plus"></i>
            <span>Add to Cart</span>
          </button>

          <button class="btn-card-buy" style="padding: 0.85rem; font-size: 0.95rem;" onclick="buyNowModalItemWhatsApp('${product.id}')">
            <i class="fa-brands fa-whatsapp" style="font-size: 1.25rem;"></i>
            <span>Buy Now on WhatsApp</span>
          </button>
        </div>

        <!-- Description & Specs Accordion/Table -->
        <div style="border-top: 1px solid var(--border-light); padding-top: 1rem; margin-top: 0.5rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem;">Product Details & Highlights</h4>
          <p style="font-size: 0.88rem; color: var(--secondary-charcoal); line-height: 1.5; margin-bottom: 1rem;">
            ${product.description}
          </p>

          <table class="pmodal-spec-table">
            <tbody>
              ${Object.entries(product.details).map(([key, val]) => `
                <tr>
                  <td>${key}</td>
                  <td>${val}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  `;

  // Window helper functions for modal controls
  window.__modalState = {
    productId,
    size: selectedModalSize,
    color: selectedModalColor,
    qty: 1
  };

  modal.classList.add("active");
}

function switchModalThumb(imgSrc, thumbEl) {
  const mainImg = document.getElementById("pmodalMainImg");
  if (mainImg) mainImg.src = imgSrc;
  document.querySelectorAll(".pmodal-thumb").forEach(t => t.classList.remove("active"));
  if (thumbEl) thumbEl.classList.add("active");
}

function selectModalSize(size, btnEl) {
  if (window.__modalState) window.__modalState.size = size;
  const label = document.getElementById("selectedSizeLabel");
  if (label) label.textContent = size;
  document.querySelectorAll("#modalSizeBtns .size-pill").forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
}

function selectModalColor(color, btnEl) {
  if (window.__modalState) window.__modalState.color = color;
  const label = document.getElementById("selectedColorLabel");
  if (label) label.textContent = color;
  document.querySelectorAll("#modalColorBtns .color-swatch-btn").forEach(b => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
}

function changeModalQty(delta) {
  if (!window.__modalState) return;
  window.__modalState.qty = Math.max(1, window.__modalState.qty + delta);
  const qtyVal = document.getElementById("modalQtyVal");
  if (qtyVal) qtyVal.textContent = window.__modalState.qty;
}

function checkPincodeDelivery() {
  const input = document.getElementById("modalPincodeInput");
  const status = document.getElementById("pincodeDeliveryStatus");
  if (!input || !status) return;

  const val = input.value.trim();
  if (!/^\d{6}$/.test(val)) {
    status.textContent = "❌ Please enter a valid 6-digit PIN code";
    status.style.color = "var(--primary-red)";
    return;
  }

  status.innerHTML = `✅ <strong>Delivery Available for ${val}!</strong> Expected in 2-4 business days. Free above ₹999.`;
  status.style.color = "var(--accent-green)";
}

function addModalItemToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product || !window.__modalState) return;

  addItemToCart(product, window.__modalState.size, window.__modalState.color, window.__modalState.qty);
  closeProductModal();
}

function buyNowModalItemWhatsApp(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product || !window.__modalState) return;

  appState.checkoutContext = {
    type: "single",
    product: product,
    size: window.__modalState.size,
    color: window.__modalState.color,
    quantity: window.__modalState.qty
  };

  closeProductModal();
  openCheckoutModal();
}

function closeProductModal(e) {
  if (e && e.target !== document.getElementById("productModalOverlay")) return;
  const modal = document.getElementById("productModalOverlay");
  if (modal) modal.classList.remove("active");
}

// ============================================================
// 9. WISHLIST MANAGEMENT
// ============================================================
function toggleWishlist(e, productId) {
  if (e) e.stopPropagation();

  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  if (appState.wishlist.has(productId)) {
    appState.wishlist.delete(productId);
    showToast(`Removed "${product.name}" from wishlist`, "info");
  } else {
    appState.wishlist.add(productId);
    showToast(`Saved "${product.name}" to wishlist!`, "success");
  }

  saveWishlistToStorage();
  renderProducts(); // Refresh active heart icons
}

function openWishlistDrawer() {
  const modal = document.getElementById("wishlistModalOverlay");
  const countEl = document.getElementById("wishlistModalCount");
  const listContainer = document.getElementById("wishlistItemsList");

  if (!modal || !listContainer) return;

  if (countEl) countEl.textContent = appState.wishlist.size;

  if (appState.wishlist.size === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
        <i class="fa-regular fa-heart" style="font-size: 3rem; color: var(--text-light); margin-bottom: 0.75rem;"></i>
        <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--secondary-black); margin-bottom: 0.35rem;">Your Wishlist is Empty</h4>
        <p style="font-size: 0.85rem;">Save your favorite fashion items here to buy anytime.</p>
      </div>
    `;
  } else {
    const items = PRODUCTS_DATA.filter(p => appState.wishlist.has(p.id));
    listContainer.innerHTML = items.map(item => `
      <div style="display: flex; gap: 0.85rem; padding-bottom: 0.85rem; border-bottom: 1px solid var(--border-light); align-items: center;">
        <img src="${item.images[0]}" alt="${item.name}" style="width: 60px; height: 75px; object-fit: cover; border-radius: var(--radius-sm);">
        <div style="flex: 1;">
          <div style="font-size: 0.88rem; font-weight: 700; line-height: 1.3;">${item.name}</div>
          <div style="font-size: 0.9rem; font-weight: 800; color: var(--primary-red); margin-top: 2px;">
            ₹${item.discountedPrice} <span style="font-size: 0.78rem; color: var(--text-muted); text-decoration: line-through;">₹${item.originalPrice}</span>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.4rem;">
          <button class="btn-card-cart" style="padding: 0.35rem 0.6rem; font-size: 0.75rem;" onclick="quickAddToCart('${item.id}');">
            Add to Cart
          </button>
          <button style="font-size: 0.75rem; color: var(--primary-red); text-align: center;" onclick="toggleWishlist(null, '${item.id}'); openWishlistDrawer();">
            Remove
          </button>
        </div>
      </div>
    `).join("");
  }

  modal.classList.add("active");
}

function closeWishlistDrawer(e) {
  if (e && e.target !== document.getElementById("wishlistModalOverlay")) return;
  const modal = document.getElementById("wishlistModalOverlay");
  if (modal) modal.classList.remove("active");
}

// Track recently viewed products
function trackRecentlyViewed(productId) {
  let list = appState.recentlyViewed.filter(id => id !== productId);
  list.unshift(productId);
  if (list.length > 8) list = list.slice(0, 8);
  appState.recentlyViewed = list;
  localStorage.setItem("amart_recently_viewed", JSON.stringify(list));
}

// ============================================================
// 10. HERO SLIDER CAROUSEL
// ============================================================
function initHeroSlider() {
  const prevBtn = document.getElementById("heroPrevBtn");
  const nextBtn = document.getElementById("heroNextBtn");
  const slider = document.getElementById("heroSlider");

  if (prevBtn) prevBtn.addEventListener("click", () => heroSlideStep(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => heroSlideStep(1));

  // Auto-play every 5 seconds
  startHeroTimer();

  if (slider) {
    slider.addEventListener("mouseenter", () => clearInterval(appState.heroInterval));
    slider.addEventListener("mouseleave", () => startHeroTimer());
  }
}

function startHeroTimer() {
  clearInterval(appState.heroInterval);
  appState.heroInterval = setInterval(() => {
    heroSlideStep(1);
  }, 5000);
}

function heroSlideStep(step) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  if (slides.length === 0) return;

  slides[appState.currentHeroIndex].classList.remove("active");
  if (dots[appState.currentHeroIndex]) dots[appState.currentHeroIndex].classList.remove("active");

  appState.currentHeroIndex = (appState.currentHeroIndex + step + slides.length) % slides.length;

  slides[appState.currentHeroIndex].classList.add("active");
  if (dots[appState.currentHeroIndex]) dots[appState.currentHeroIndex].classList.add("active");
}

function jumpToSlide(index) {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  if (slides.length === 0) return;

  slides[appState.currentHeroIndex].classList.remove("active");
  if (dots[appState.currentHeroIndex]) dots[appState.currentHeroIndex].classList.remove("active");

  appState.currentHeroIndex = index;

  slides[appState.currentHeroIndex].classList.add("active");
  if (dots[appState.currentHeroIndex]) dots[appState.currentHeroIndex].classList.add("active");
  startHeroTimer();
}

// ============================================================
// 11. REVIEWS RENDERING
// ============================================================
function renderReviews() {
  const grid = document.getElementById("reviewsGrid");
  if (!grid) return;

  grid.innerHTML = STORE_REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-stars">
        ${Array(r.rating).fill('<i class="fa-solid fa-star"></i>').join("")}
      </div>
      <p class="review-text">"${r.comment}"</p>
      <div class="review-author">
        <div>
          <div class="author-name">${r.name}</div>
          <div class="author-city">${r.city} • ${r.date}</div>
        </div>
        ${r.verified ? `
          <div class="verified-buyer-badge">
            <i class="fa-solid fa-circle-check"></i> Verified Buyer
          </div>
        ` : ''}
      </div>
    </div>
  `).join("");
}

// ============================================================
// 12. NEWSLETTER & COUPON VOUCHER
// ============================================================
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const input = document.getElementById("newsletterEmail");
  if (!input) return;

  const email = input.value.trim();
  if (!email) return;

  input.value = "";
  showToast("🎉 Thanks for subscribing! Use coupon AMART100 for ₹100 off!", "success");
}

// ============================================================
// 13. AUTHENTICATION MODAL (LOGIN / REGISTER)
// ============================================================
function openAuthModal() {
  const modal = document.getElementById("authModalOverlay");
  if (modal) modal.classList.add("active");
}

function closeAuthModal(e) {
  if (e && e.target !== document.getElementById("authModalOverlay")) return;
  const modal = document.getElementById("authModalOverlay");
  if (modal) modal.classList.remove("active");
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("authNameInput").value.trim();
  const phone = document.getElementById("authMobileInput").value.trim();

  if (!name || !phone) return;

  saveUserDataToStorage({ name, phone });
  closeAuthModal();
  showToast(`Welcome to A-Mart, ${name}!`, "success");
}

function demoLogin() {
  saveUserDataToStorage({ name: "Rahul Sharma", phone: "9876543210" });
  closeAuthModal();
  showToast("Signed in as Demo User: Rahul Sharma", "success");
}

// ============================================================
// 14. SIZE GUIDE & POLICY MODALS
// ============================================================
function openSizeGuideModal() {
  const modal = document.getElementById("sizeGuideModalOverlay");
  if (modal) modal.classList.add("active");
}

function closeSizeGuideModal(e) {
  if (e && e.target !== document.getElementById("sizeGuideModalOverlay")) return;
  const modal = document.getElementById("sizeGuideModalOverlay");
  if (modal) modal.classList.remove("active");
}

function openPolicyModal(type) {
  const modal = document.getElementById("policyModalOverlay");
  const title = document.getElementById("policyModalTitle");
  const body = document.getElementById("policyModalBody");

  if (!modal || !title || !body) return;

  if (type === "returns") {
    title.innerHTML = `<i class="fa-solid fa-rotate-left" style="color: var(--primary-red);"></i> 7-Day Easy Return & Exchange Policy`;
    body.innerHTML = `
      <h4>Hassle-Free Retail Exchange Policy</h4>
      <p style="margin: 0.5rem 0 1rem;">At A-Mart, we want you to love everything you wear. If the size or fit isn't right, we offer a straightforward 7-day exchange window from the date of delivery.</p>
      
      <h5 style="font-weight: 700; margin-top: 1rem;">Exchange Guidelines:</h5>
      <ul style="list-style: disc; margin-left: 1.5rem; margin-top: 0.5rem;">
        <li>Items must be unworn, unwashed, and returned with original tags intact.</li>
        <li>Footwear must be tried indoors and returned in its original box.</li>
        <li>To initiate an exchange, simply drop a message on our official WhatsApp at <strong>+91 7355415447</strong> with your Order ID and photo of the product.</li>
        <li>Our courier partner will arrange pick-up from your doorstep.</li>
      </ul>
    `;
  } else if (type === "shipping") {
    title.innerHTML = `<i class="fa-solid fa-truck-fast" style="color: var(--primary-red);"></i> Shipping & Delivery Information`;
    body.innerHTML = `
      <h4>Fast Nationwide Delivery Across India</h4>
      <p style="margin: 0.5rem 0 1rem;">We ship across all pin codes in India through top logistics partners (BlueDart, Delhivery, DTDC, XpressBees).</p>
      
      <h5 style="font-weight: 700; margin-top: 1rem;">Shipping Fees & Timeline:</h5>
      <ul style="list-style: disc; margin-left: 1.5rem; margin-top: 0.5rem;">
        <li><strong>Free Delivery:</strong> All orders above ₹999 qualify for zero delivery fees!</li>
        <li><strong>Standard Shipping:</strong> A nominal ₹49 fee applies on orders below ₹999.</li>
        <li><strong>Metro Cities:</strong> Delivered in 2 to 3 business days.</li>
        <li><strong>Rest of India:</strong> Delivered in 3 to 5 business days.</li>
      </ul>
    `;
  } else if (type === "privacy") {
    title.innerHTML = `<i class="fa-solid fa-user-shield" style="color: var(--primary-red);"></i> Privacy & Data Policy`;
    body.innerHTML = `
      <h4>Your Privacy is Safe with A-Mart</h4>
      <p style="margin: 0.5rem 0 1rem;">We respect your personal information. When you place an order via our WhatsApp system, your contact details, address, and mobile number are used exclusively to process and deliver your shipment.</p>
      <p>We do not sell, rent, or lease customer data to third-party marketing companies.</p>
    `;
  } else if (type === "terms") {
    title.innerHTML = `<i class="fa-solid fa-file-contract" style="color: var(--primary-red);"></i> Terms & Conditions`;
    body.innerHTML = `
      <h4>A-Mart Store Terms</h4>
      <p style="margin: 0.5rem 0 1rem;">All orders placed through our website and WhatsApp ordering line are subject to stock availability and address verification by our fulfillment centers.</p>
      <p>Prices and promotional offers are subject to change without prior notice during seasonal sales.</p>
    `;
  } else if (type === "track") {
    title.innerHTML = `<i class="fa-solid fa-location-crosshairs" style="color: var(--primary-red);"></i> Track Your Shipment`;
    body.innerHTML = `
      <h4>Instant WhatsApp Tracking</h4>
      <p style="margin: 0.5rem 0 1rem;">Since all orders are routed through our official business line <strong>+91 7355415447</strong>, you receive direct tracking links and dispatch alerts right inside your WhatsApp inbox.</p>
      <div style="margin-top: 1.5rem; text-align: center;">
        <a href="https://wa.me/917355415447?text=Hi%20A-Mart!%20Please%20share%20tracking%20update%20for%20my%20order." target="_blank" class="hero-cta-btn">
          <i class="fa-brands fa-whatsapp"></i> Ask Tracking on WhatsApp
        </a>
      </div>
    `;
  }

  modal.classList.add("active");
}

function closePolicyModal(e) {
  if (e && e.target !== document.getElementById("policyModalOverlay")) return;
  const modal = document.getElementById("policyModalOverlay");
  if (modal) modal.classList.remove("active");
}

// ============================================================
// 15. TOAST NOTIFICATIONS HELPER
// ============================================================
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = '<i class="fa-solid fa-circle-check" style="color: var(--accent-green);"></i>';
  if (type === "error") {
    icon = '<i class="fa-solid fa-circle-exclamation" style="color: var(--primary-red);"></i>';
  } else if (type === "info") {
    icon = '<i class="fa-solid fa-circle-info" style="color: #60a5fa;"></i>';
  }

  toast.innerHTML = `
    ${icon}
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function escapeHtml(text) {
  if (!text) return "";
  return text.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}
