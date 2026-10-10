# A-MART – Fashion for Everyone 🛍️
### Modern Indian Retail E-Commerce Website (Inspired by V-Mart Retail Experience)

Welcome to **A-MART**, a modern, responsive fashion and lifestyle retail e-commerce website crafted with an authentic Indian value-retail shopping experience inspired by V-Mart.

---

## 🌟 Key Features Overview

### 1. Website Branding & Design
- **Brand Name:** A-MART
- **Tagline:** Fashion for Everyone
- **Color Palette:** Retail Red (`#E31E24`), Clean White, Deep Charcoal (`#111827`), Light Grey (`#F8FAFC`), and WhatsApp Green (`#25D366`).
- **Typography:** High-readability modern fonts (*Outfit* and *Plus Jakarta Sans*).
- **Responsive Layout:** Optimized for mobile phones, tablets, laptops, and ultra-wide desktops.

---

### 2. WhatsApp Direct Ordering System (Core Feature)
- **Official Order Line:** **+91 7355415447** (`https://wa.me/917355415447`)
- **Seamless Flow:**
  1. Customer selects size, color, and clicks **"Buy Now"** or proceeds from the **Shopping Cart**.
  2. A clean checkout modal opens to collect customer details:
     - Full Name
     - 10-digit WhatsApp Mobile Number
     - Delivery Address (House no, Street, Landmark)
     - City & State
     - 6-digit PIN code
     - Payment Preference (Cash on Delivery / UPI)
     - Delivery Instructions
  3. Form automatically formats an order message and encodes it via `encodeURIComponent()`.
  4. WhatsApp Web / App opens with the message pre-filled to **7355415447**.
  5. The customer sends the message directly to A-Mart.
  6. Transparent Store Policy: A-Mart verifies item availability and confirms delivery once the message is received.

#### Example Formatted Order Message:
```text
Hello A-Mart! I want to place an order.

Customer Name: Rahul Sharma
Mobile: 9876543210
Delivery Address: Flat 201, Shanti Niketan, Lucknow, Uttar Pradesh - PIN: 226001

Products:
1. Men Slim Fit Cotton Mandarin Collar Shirt
   • Size: L | Color: Navy Blue
   • Quantity: 1 | Price: ₹499 (Total: ₹499)

Total Quantity: 1 Item(s)
Delivery Charges: FREE Delivery
Total Amount: ₹499
Payment Method: Cash on Delivery (COD)

Please confirm my order and delivery details.
```

---

### 3. Complete Navigation (All 15 Required Categories)
Browse and filter across all 15 categories:
1. **Men** (Shirts, T-Shirts, Jeans, Trousers, Nehru Jackets, Footwear)
2. **Women** (Anarkalis, Kurtas, Sarees, Dresses, Jeans, Flats, Bags)
3. **Kids** (Boys & Girls casuals, party frocks, festive sets)
4. **Boys** (Graphic tees, casual check shirts, denim shorts)
5. **Girls** (Floral net frocks, bandhani sharara sets, denim skirts)
6. **Ethnic Wear** (Banarasi sarees, Chanderi kurtas, Nehru jackets, Palazzos)
7. **Western Wear** (Oversized tees, denim jackets, boho maxi dresses)
8. **T-Shirts** (Crew necks, polos, graphic oversized tees)
9. **Shirts** (Mandarin collar shirts, buffalo checks, formal dress shirts)
10. **Jeans** (Slim fit stretch jeans, high-rise women jeans)
11. **Trousers** (Poly-viscose office trousers, cotton chinos, linen pants)
12. **Dresses** (Boho maxi dresses, tiered frocks, party dresses)
13. **Footwear** (Everyday sneakers, Kolhapuri flats, derby dress shoes)
14. **Accessories** (Reversible leather belts, Banarasi dupattas, backpacks, tote bags)
15. **Sale** (Deals up to 70% Off)

---

### 4. Interactive Shopping Cart & Storage
- Add, adjust quantity, and remove items with instant updates.
- **Persistent Data:** Stored in `localStorage` (`amart_cart`, `amart_wishlist`).
- **Free Shipping Meter:** Dynamic progress bar showing how much more to add for Free Shipping (Orders above ₹999).
- **Coupon Code Engine:**
  - `AMART100` – ₹100 Off on orders above ₹899
  - `FIRST50` – ₹50 Off on orders above ₹499
  - `FESTIVE15` – 15% Off on orders above ₹1299
  - `SALE200` – ₹200 Mega Savings above ₹1999

---

### 5. Product Details Modal & Quick View
- Multi-photo image gallery with interactive thumbnail switcher.
- Real-time size and color selection.
- **Pincode Delivery Estimator:** Enter 6-digit pin code to check delivery timeline.
- Fabric, fit, care instructions, and detailed specifications table.
- Direct **Add to Cart** and **Buy Now on WhatsApp** buttons.
- Size Guide measurement charts for Men, Women, and Kids.

---

### 6. Additional E-Commerce Features
- **Live Search & Autocomplete:** Real-time search suggestions with product images, pricing, and matched keywords.
- **Wishlist System:** Save products with one click and move them to cart later.
- **Recently Viewed Products:** Automatically tracks recently browsed items.
- **Customer Reviews:** Real reviews from verified buyers across Indian cities.
- **Policies:** 7-Day Easy Exchange Policy, Shipping Information, Privacy Policy, Terms & Conditions.
- **Mobile Bottom Navigation Bar:** Quick access to Home, Shop, Wishlist, Cart, and WhatsApp.

---

## 🚀 How to Run the Website Locally

You can open `index.html` directly in any web browser, or run a local HTTP server:

### Option A: Using Python (Installed on your system)
```bash
python -m http.server 8080
```
Then visit: `http://localhost:8080`

### Option B: Using Node.js (npx serve)
```bash
npx serve .
```

---

## 📁 Project Directory Structure
```
e commerce/
├── index.html          # Semantic HTML5 single-page e-commerce storefront
├── css/
│   └── style.css       # Complete modern CSS3 with A-Mart styling & responsiveness
├── js/
│   ├── data.js         # Curated catalog of 32+ products across all 15 categories
│   └── app.js          # Interactive cart, WhatsApp order engine, search, filters & modals
└── README.md           # Documentation and user guide
```

---

## 📞 Store Contact
- **WhatsApp Order Line:** [+91 7355415447](https://wa.me/917355415447)
- **Customer Helpline:** +91 7355415447 (9:00 AM – 9:00 PM IST)
- **Support Email:** orders@amartfashion.in
- **Address:** A-Mart Retail Plaza, Commercial Complex, Sector 18, Noida, UP - 201301
