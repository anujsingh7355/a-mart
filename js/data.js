// A-MART - Complete Product Catalog & Store Configuration
// Tagline: Fashion for Everyone
// WhatsApp Order Line: +91 7355415447

const STORE_CONFIG = {
  storeName: "A-MART",
  tagline: "Fashion for Everyone",
  whatsappNumber: "917355415447",
  displayPhone: "+91 7355415447",
  email: "orders@amartfashion.in",
  supportEmail: "support@amartfashion.in",
  address: "A-Mart Retail Plaza, Commercial Complex, Sector 18, Noida, Uttar Pradesh - 201301",
  workingHours: "Mon - Sun: 9:00 AM - 9:00 PM",
  freeShippingThreshold: 999,
  standardShippingFee: 49,
  coupons: {
    "AMART100": { discount: 100, minOrder: 899, type: "flat", desc: "₹100 Off on orders above ₹899" },
    "FIRST50": { discount: 50, minOrder: 499, type: "flat", desc: "₹50 Off on your first order" },
    "FESTIVE15": { discount: 15, minOrder: 1299, type: "percent", desc: "15% Off on orders above ₹1299" },
    "SALE200": { discount: 200, minOrder: 1999, type: "flat", desc: "₹200 Mega Savings above ₹1999" }
  }
};

const CATEGORIES_LIST = [
  { id: "all", name: "All Products", icon: "fa-tags" },
  { id: "men", name: "Men", icon: "fa-person" },
  { id: "women", name: "Women", icon: "fa-person-dress" },
  { id: "kids", name: "Kids", icon: "fa-child" },
  { id: "boys", name: "Boys", icon: "fa-child-reaching" },
  { id: "girls", name: "Girls", icon: "fa-child-dress" },
  { id: "ethnic-wear", name: "Ethnic Wear", icon: "fa-gem" },
  { id: "western-wear", name: "Western Wear", icon: "fa-shirt" },
  { id: "t-shirts", name: "T-Shirts", icon: "fa-vest-patches" },
  { id: "shirts", name: "Shirts", icon: "fa-user-tie" },
  { id: "jeans", name: "Jeans", icon: "fa-vest" },
  { id: "trousers", name: "Trousers", icon: "fa-socks" },
  { id: "dresses", name: "Dresses", icon: "fa-person-dress" },
  { id: "footwear", name: "Footwear", icon: "fa-shoe-prints" },
  { id: "accessories", name: "Accessories", icon: "fa-glasses" },
  { id: "sale", name: "Sale", icon: "fa-fire", badge: "Up to 70% Off" }
];

const PRODUCTS_DATA = [
  // 1. Men Casual Shirt
  {
    id: "am-01",
    name: "Men Slim Fit Cotton Mandarin Collar Shirt",
    category: "Men",
    categories: ["Men", "Shirts", "Western Wear", "Sale"],
    originalPrice: 1199,
    discountedPrice: 499,
    discountPct: 58,
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "Olive Green", hex: "#3f6212" },
      { name: "Classic White", hex: "#f8fafc" }
    ],
    rating: 4.4,
    reviewsCount: 248,
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isSale: true,
    badge: "BESTSELLER",
    description: "Upgrade your casual wardrobe with this pure breathable cotton shirt. Features a modern mandarin collar, curved hemline, and full roll-up sleeves for an effortless weekend or office casual look.",
    details: {
      "Fabric": "100% Breathable Cotton",
      "Fit": "Slim Fit",
      "Collar": "Mandarin / Band Collar",
      "Sleeve": "Long Sleeves with Roll-up Tab",
      "Occasion": "Casual & Smart Casual",
      "Wash Care": "Machine wash cold, tumble dry low",
      "Country of Origin": "India"
    }
  },

  // 2. Women Floral Printed Kurta
  {
    id: "am-02",
    name: "Women Floral Printed Rayon Anarkali Kurta",
    category: "Women",
    categories: ["Women", "Ethnic Wear", "Dresses", "Sale"],
    originalPrice: 1499,
    discountedPrice: 649,
    discountPct: 57,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colors: [
      { name: "Ruby Red", hex: "#b91c1c" },
      { name: "Mustard Yellow", hex: "#d97706" },
      { name: "Teal Green", hex: "#0f766e" }
    ],
    rating: 4.6,
    reviewsCount: 312,
    isNew: true,
    isTrending: true,
    isBestSeller: true,
    isSale: true,
    badge: "57% OFF",
    description: "Flaunt an elegant festive look with this flowy flared rayon Anarkali kurta. Features hand-block inspired floral motifs, subtle gota-patti border work, and a sweetheart neck.",
    details: {
      "Fabric": "Premium Viscose Rayon",
      "Fit": "Flared Anarkali",
      "Neck": "Sweetheart Neck with Gota Lace",
      "Sleeve": "3/4th Sleeves",
      "Length": "Calf Length (48 inches)",
      "Occasion": "Festive, Daily & Festive Wear",
      "Country of Origin": "India"
    }
  },

  // 3. Men Graphic T-Shirt
  {
    id: "am-03",
    name: "Men Oversized Pure Cotton Graphic T-Shirt",
    category: "Men",
    categories: ["Men", "T-Shirts", "Western Wear", "Sale"],
    originalPrice: 799,
    discountedPrice: 349,
    discountPct: 56,
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Pitch Black", hex: "#0f172a" },
      { name: "Slate Grey", hex: "#475569" },
      { name: "Brick Red", hex: "#991b1b" }
    ],
    rating: 4.3,
    reviewsCount: 189,
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    isSale: true,
    badge: "TRENDING",
    description: "Stay in trend with our ultra-comfy streetwear oversized tee. Crafted from 220 GSM heavyweight combed cotton that holds its shape wash after wash.",
    details: {
      "Fabric": "100% Combed Heavy Cotton (220 GSM)",
      "Fit": "Drop Shoulder Oversized Fit",
      "Neck": "Ribbed Crew Neck",
      "Sleeve": "Half Sleeve",
      "Occasion": "Casual Streetwear",
      "Wash Care": "Hand or machine wash inside out",
      "Country of Origin": "India"
    }
  },

  // 4. Women Denim Jeans
  {
    id: "am-04",
    name: "Women High-Rise Stretchable Slim Fit Jeans",
    category: "Women",
    categories: ["Women", "Jeans", "Western Wear"],
    originalPrice: 1799,
    discountedPrice: 799,
    discountPct: 55,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["26", "28", "30", "32", "34"],
    colors: [
      { name: "Mid Stone Blue", hex: "#2563eb" },
      { name: "Dark Indigo", hex: "#1e3a8a" },
      { name: "Carbon Black", hex: "#18181b" }
    ],
    rating: 4.5,
    reviewsCount: 220,
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isSale: false,
    badge: "TOP RATED",
    description: "Sculpt and define your silhouette with our high-waist stretch denim. Engineered with elastane blend for 360-degree all-day comfort without sagging.",
    details: {
      "Fabric": "98% Cotton, 2% Spandex",
      "Fit": "Slim Fit High Rise",
      "Closure": "Button & Zip Fly",
      "Pockets": "5 Pocket Classic Styling",
      "Occasion": "Daily Casual / College / Work",
      "Country of Origin": "India"
    }
  },

  // 5. Men Washed Slim Fit Jeans
  {
    id: "am-05",
    name: "Men Mid-Rise Mild Distress Slim Fit Denim Jeans",
    category: "Men",
    categories: ["Men", "Jeans", "Western Wear", "Sale"],
    originalPrice: 1899,
    discountedPrice: 749,
    discountPct: 60,
    images: [
      "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Washed Blue", hex: "#3b82f6" },
      { name: "Charcoal Grey", hex: "#334155" },
      { name: "Jet Black", hex: "#09090b" }
    ],
    rating: 4.4,
    reviewsCount: 410,
    isNew: false,
    isTrending: false,
    isBestSeller: true,
    isSale: true,
    badge: "60% OFF",
    description: "A staple in every man's collection. Made from soft stretch denim with subtle whiskering and light distressing, perfect paired with t-shirts or casual shirts.",
    details: {
      "Fabric": "Cotton Rich Stretch Denim",
      "Fit": "Slim Fit",
      "Waist Rise": "Mid Rise",
      "Length": "Regular Length (40 inches)",
      "Pockets": "5-Pocket Styling",
      "Country of Origin": "India"
    }
  },

  // 6. Boys Graphic Cotton T-Shirt
  {
    id: "am-06",
    name: "Boys Dinosaur Printed Pure Cotton Round Neck T-Shirt",
    category: "Kids",
    categories: ["Kids", "Boys", "T-Shirts", "Western Wear", "Sale"],
    originalPrice: 599,
    discountedPrice: 249,
    discountPct: 58,
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"],
    colors: [
      { name: "Sunshine Yellow", hex: "#eab308" },
      { name: "Royal Blue", hex: "#2563eb" },
      { name: "Fire Red", hex: "#dc2626" }
    ],
    rating: 4.7,
    reviewsCount: 165,
    isNew: true,
    isTrending: true,
    isBestSeller: true,
    isSale: true,
    badge: "UNDER ₹299",
    description: "Keep your little champ comfortable and playful! Crafted from 100% bio-washed soft cotton featuring high-density dino graphic prints that won't fade or peel.",
    details: {
      "Fabric": "100% Bio-Washed Combed Cotton",
      "Fit": "Regular Kid Fit",
      "Neck": "Soft Ribbed Crew Neck",
      "Safety": "Non-toxic azo-free dyes",
      "Occasion": "Playwear & Daily Wear",
      "Country of Origin": "India"
    }
  },

  // 7. Girls Festive Flared Frock / Dress
  {
    id: "am-07",
    name: "Girls Floral Embroidered Net Party Wear Flared Frock",
    category: "Kids",
    categories: ["Kids", "Girls", "Dresses", "Ethnic Wear", "Sale"],
    originalPrice: 1299,
    discountedPrice: 599,
    discountPct: 54,
    images: [
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    colors: [
      { name: "Baby Pink", hex: "#f472b6" },
      { name: "Sky Blue", hex: "#38bdf8" },
      { name: "Lilac Lavender", hex: "#c084fc" }
    ],
    rating: 4.8,
    reviewsCount: 142,
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    isSale: true,
    badge: "FESTIVE HIT",
    description: "Make her look like a princess at birthday parties and festive celebrations. Double-layered soft net with comfortable 100% cotton inner lining to prevent itching.",
    details: {
      "Fabric": "Premium Soft Net with Cotton Lining",
      "Fit": "Fit and Flare",
      "Closure": "Back Concealed Zipper & Satin Sash",
      "Embellishment": "Hand-stitched sequins & floral embroidery",
      "Occasion": "Birthday, Weddings, Parties",
      "Country of Origin": "India"
    }
  },

  // 8. Women Western A-Line Dress
  {
    id: "am-08",
    name: "Women Floral Printed Tiered Bohemian Maxi Dress",
    category: "Women",
    categories: ["Women", "Dresses", "Western Wear", "Sale"],
    originalPrice: 1699,
    discountedPrice: 699,
    discountPct: 59,
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Pastel Mint", hex: "#6ee7b7" },
      { name: "Coral Peach", hex: "#fb923c" },
      { name: "Classic Black", hex: "#18181b" }
    ],
    rating: 4.5,
    reviewsCount: 204,
    isNew: true,
    isTrending: true,
    isBestSeller: true,
    isSale: true,
    badge: "59% OFF",
    description: "Chic, breezy, and effortlessly stylish. This tiered maxi dress features delicate botanical florals, puff sleeves, and a flattering cinch waist for vacations and brunch outings.",
    details: {
      "Fabric": "Airy Poly Georgette with Crepe Lining",
      "Fit": "Tiered Flared Maxi",
      "Neck": "V-Neck with Tie-up Tassels",
      "Sleeve": "Short Elasticated Puff Sleeves",
      "Occasion": "Resort wear, Casual Outing, Date",
      "Country of Origin": "India"
    }
  },

  // 9. Men Formal Trousers
  {
    id: "am-09",
    name: "Men Slim Fit Flat Front Formal Poly-Viscose Trousers",
    category: "Men",
    categories: ["Men", "Trousers", "Western Wear"],
    originalPrice: 1499,
    discountedPrice: 599,
    discountPct: 60,
    images: [
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["30", "32", "34", "36", "38"],
    colors: [
      { name: "Charcoal Grey", hex: "#374151" },
      { name: "Deep Khaki", hex: "#78716c" },
      { name: "Midnight Navy", hex: "#1e293b" }
    ],
    rating: 4.3,
    reviewsCount: 175,
    isNew: false,
    isTrending: false,
    isBestSeller: true,
    isSale: false,
    badge: "OFFICE ESSENTIAL",
    description: "Sharpen your professional appearance with wrinkle-resistant Poly-Viscose fabric. Features clean flat-front tailoring, slant front pockets, and buttoned rear welt pockets.",
    details: {
      "Fabric": "Poly-Viscose Blend (Wrinkle Resistant)",
      "Fit": "Slim Fit Flat Front",
      "Closure": "Hook and Bar with Heavy Duty YKK Zipper",
      "Occasion": "Office, Interviews, Formal Events",
      "Country of Origin": "India"
    }
  },

  // 10. Women Chanderi Silk Kurta Set
  {
    id: "am-10",
    name: "Women Embroidered Chanderi Silk Kurta with Dupatta Set",
    category: "Women",
    categories: ["Women", "Ethnic Wear", "Sale"],
    originalPrice: 2499,
    discountedPrice: 999,
    discountPct: 60,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Emerald Green", hex: "#065f46" },
      { name: "Royal Purple", hex: "#6b21a8" },
      { name: "Dusty Rose", hex: "#be185d" }
    ],
    rating: 4.7,
    reviewsCount: 388,
    isNew: true,
    isTrending: true,
    isBestSeller: true,
    isSale: true,
    badge: "FESTIVE SALE",
    description: "Complete 3-piece ethnic set including an embroidered Chanderi silk straight kurta, matching comfortable pants, and a digitally printed sheer organza dupatta.",
    details: {
      "Set Contents": "1 Kurta, 1 Pant, 1 Dupatta",
      "Fabric": "Chanderi Silk with Shantoon Lining",
      "Embroidery": "Zari and Thread work neckline",
      "Dupatta": "Digital floral printed organza (2.25m)",
      "Occasion": "Festivals, Weddings, Family Functions",
      "Country of Origin": "India"
    }
  },

  // 11. Men Casual Sneaker Shoes
  {
    id: "am-11",
    name: "Men Lightweight Breathable Cushioned Everyday Sneakers",
    category: "Footwear",
    categories: ["Men", "Footwear", "Western Wear", "Sale"],
    originalPrice: 1599,
    discountedPrice: 699,
    discountPct: 56,
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["6", "7", "8", "9", "10"],
    colors: [
      { name: "Triple White", hex: "#f8fafc" },
      { name: "Core Black", hex: "#18181b" },
      { name: "Grey Red Combo", hex: "#64748b" }
    ],
    rating: 4.4,
    reviewsCount: 290,
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isSale: true,
    badge: "POPULAR",
    description: "Step out with all-day ease! Engineered with lightweight mesh upper for superior ventilation and an ultra-soft EVA cushion sole that absorbs impact on city streets.",
    details: {
      "Upper Material": "Breathable Engineered Knit Mesh",
      "Sole Material": "EVA Cushion Bounce Sole",
      "Closure": "Lace-Up",
      "Insole": "Removable Memory Foam Footbed",
      "Weight": "Superlight (~240g per shoe)",
      "Country of Origin": "India"
    }
  },

  // 12. Women Kolhapuri Ethnic Flats
  {
    id: "am-12",
    name: "Women Handcrafted Embroidered Kolhapuri Flats",
    category: "Footwear",
    categories: ["Women", "Footwear", "Ethnic Wear", "Sale"],
    originalPrice: 999,
    discountedPrice: 399,
    discountPct: 60,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["4", "5", "6", "7", "8", "9"],
    colors: [
      { name: "Metallic Gold", hex: "#eab308" },
      { name: "Rose Gold", hex: "#fb7185" },
      { name: "Chestnut Tan", hex: "#9a3412" }
    ],
    rating: 4.5,
    reviewsCount: 167,
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    isSale: true,
    badge: "UNDER ₹499",
    description: "Traditional charm meets modern comfort. Embellished with braided straps, golden thread tassels, and cushioned footbed to complement sarees and salwar suits seamlessly.",
    details: {
      "Type": "Toe Ring Kolhapuri Flat",
      "Upper": "Vegan Leather with Hand Braiding",
      "Sole": "Anti-Slip TPR Sheet Sole",
      "Insole": "Double Padded Comfort Foam",
      "Occasion": "Festive, Ethnic, Daily Wear",
      "Country of Origin": "India"
    }
  },

  // 13. Accessories - Reversible Leather Belt
  {
    id: "am-13",
    name: "Men Reversible Genuine Leather Dual-Shade Belt",
    category: "Accessories",
    categories: ["Men", "Accessories", "Sale"],
    originalPrice: 899,
    discountedPrice: 349,
    discountPct: 61,
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["28-32", "34-38", "40-44"],
    colors: [
      { name: "Black / Dark Brown", hex: "#292524" }
    ],
    rating: 4.6,
    reviewsCount: 215,
    isNew: false,
    isTrending: false,
    isBestSeller: true,
    isSale: true,
    badge: "VALUE PACK",
    description: "Two classic belts in one! Features a 360-degree rotating alloy buckle that twists effortlessly between formal Black and casual Rich Tan Brown leather sides.",
    details: {
      "Material": "100% Genuine Full-Grain Bonded Leather",
      "Buckle": "Heavy Duty Zinc Alloy Swivel Buckle",
      "Width": "35 mm (Standard Belt Loops)",
      "Warranty": "6 Months Buckle Guarantee",
      "Country of Origin": "India"
    }
  },

  // 14. Accessories - Women Printed Silk Dupatta
  {
    id: "am-14",
    name: "Women Banarasi Art Silk Jacquard Zari Woven Dupatta",
    category: "Accessories",
    categories: ["Women", "Accessories", "Ethnic Wear", "Sale"],
    originalPrice: 999,
    discountedPrice: 399,
    discountPct: 60,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Free Size (2.3m)"],
    colors: [
      { name: "Royal Magenta", hex: "#9d174d" },
      { name: "Marigold Yellow", hex: "#ca8a04" },
      { name: "Bottle Green", hex: "#14532d" }
    ],
    rating: 4.8,
    reviewsCount: 180,
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    isSale: true,
    badge: "UNDER ₹499",
    description: "Transform any simple solid kurta into a grand wedding outfit. Lavishly woven with intricate antique golden zari paisleys and finished with handcrafted corner tassels.",
    details: {
      "Fabric": "Banarasi Art Silk Jacquard",
      "Length": "2.3 Meters (Full Length)",
      "Width": "36 Inches",
      "Border": "Heavy Floral Zari Border & Latkan Tassels",
      "Occasion": "Puja, Sangeet, Festive Celebrations",
      "Country of Origin": "India"
    }
  },

  // 15. Boys Denim Shorts & Shirt Combo
  {
    id: "am-15",
    name: "Boys Washed Denim Shorts with Elasticated Waist",
    category: "Kids",
    categories: ["Kids", "Boys", "Jeans", "Western Wear", "Sale"],
    originalPrice: 799,
    discountedPrice: 349,
    discountPct: 56,
    images: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    colors: [
      { name: "Ice Blue Wash", hex: "#93c5fd" },
      { name: "Mid Blue", hex: "#3b82f6" }
    ],
    rating: 4.4,
    reviewsCount: 98,
    isNew: false,
    isTrending: false,
    isBestSeller: true,
    isSale: true,
    badge: "SUMMER ESSENTIAL",
    description: "Durable cotton denim shorts tailored for energetic kids. Equipped with a soft inner rib elastic waist and adjustable drawstring so it stays snug without pinching.",
    details: {
      "Fabric": "98% Cotton Denim, 2% Spandex",
      "Waist": "Elastic Waistband with Drawstring",
      "Pockets": "4 Functional Pockets",
      "Wash Care": "Machine Wash Warm",
      "Country of Origin": "India"
    }
  },

  // 16. Girls Cotton Kurti Sharara Set
  {
    id: "am-16",
    name: "Girls Bandhani Print Cotton Kurti with Sharara Pants",
    category: "Kids",
    categories: ["Kids", "Girls", "Ethnic Wear", "Dresses", "Sale"],
    originalPrice: 1399,
    discountedPrice: 549,
    discountPct: 61,
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    colors: [
      { name: "Jaipur Pink", hex: "#ec4899" },
      { name: "Bright Orange", hex: "#f97316" },
      { name: "Royal Blue", hex: "#1d4ed8" }
    ],
    rating: 4.7,
    reviewsCount: 134,
    isNew: true,
    isTrending: true,
    isBestSeller: true,
    isSale: true,
    badge: "BESTSELLER",
    description: "Bright, cheerful traditional wear for festivals and family gatherings. Made of breathable cotton with traditional Rajasthani bandhani prints and laced hem sharara.",
    details: {
      "Contents": "1 Peplum Kurti, 1 Flared Sharara",
      "Fabric": "100% Breathable Cambric Cotton",
      "Print": "Traditional Hand-Look Bandhani",
      "Closure": "Back Button Placket & Elastic Waist",
      "Occasion": "Diwali, Eid, Rakhi, Family Pujas",
      "Country of Origin": "India"
    }
  },

  // 17. Men Solid Polo T-Shirt
  {
    id: "am-17",
    name: "Men Classic Pique Cotton Solid Polo T-Shirt",
    category: "Men",
    categories: ["Men", "T-Shirts", "Western Wear", "Sale"],
    originalPrice: 899,
    discountedPrice: 399,
    discountPct: 56,
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Maroon", hex: "#881337" },
      { name: "Dark Green", hex: "#14532d" },
      { name: "Charcoal", hex: "#334155" },
      { name: "Snow White", hex: "#f8fafc" }
    ],
    rating: 4.5,
    reviewsCount: 340,
    isNew: false,
    isTrending: false,
    isBestSeller: true,
    isSale: true,
    badge: "STEAL DEAL",
    description: "Timeless classic styling crafted in premium honey-comb pique cotton. Keeps you cool under the sun while the structured ribbed collar maintains crisp shape.",
    details: {
      "Fabric": "100% Heavy Pique Combed Cotton",
      "Fit": "Regular Smart Fit",
      "Collar": "Ribbed Flat-Knit Polo Collar with 2 Buttons",
      "Sleeve": "Half Sleeve with Ribbed Armband",
      "Occasion": "Weekend, Golf, Smart Casual",
      "Country of Origin": "India"
    }
  },

  // 18. Women Rayon Straight Casual Pants / Trousers
  {
    id: "am-18",
    name: "Women High-Waist Straight Fit Cotton-Linen Trousers",
    category: "Women",
    categories: ["Women", "Trousers", "Western Wear"],
    originalPrice: 1299,
    discountedPrice: 549,
    discountPct: 58,
    images: [
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Beige Cream", hex: "#d6d3d1" },
      { name: "Olive", hex: "#4d7c0f" },
      { name: "Matte Black", hex: "#18181b" }
    ],
    rating: 4.4,
    reviewsCount: 156,
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    isSale: false,
    badge: "NEW ARRIVAL",
    description: "Effortlessly chic and comfortable for long workdays or casual outings. Features an elastic back waist with front pleats and deep functional side pockets.",
    details: {
      "Fabric": "70% Cotton, 30% Linen Blend",
      "Fit": "Relaxed Straight Leg",
      "Waist": "Semi-Elasticated Waistband with Belt Loops",
      "Pockets": "Two Deep Slant Pockets",
      "Length": "Ankle Length (37 inches)",
      "Country of Origin": "India"
    }
  },

  // 19. Men Ethnic Nehru Jacket / Kurta
  {
    id: "am-19",
    name: "Men Woven Jute Silk Festive Nehru Sleeveless Jacket",
    category: "Men",
    categories: ["Men", "Ethnic Wear", "Sale"],
    originalPrice: 1999,
    discountedPrice: 799,
    discountPct: 60,
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["38", "40", "42", "44", "46"],
    colors: [
      { name: "Royal Maroon", hex: "#991b1b" },
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "Pistachio Green", hex: "#65a30d" }
    ],
    rating: 4.6,
    reviewsCount: 220,
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isSale: true,
    badge: "FESTIVE READY",
    description: "Instantly elevate any plain kurta pajama or formal shirt with this rich structured Nehru jacket. Adorned with regal metallic antique buttons and a breast pocket.",
    details: {
      "Fabric": "Rich Woven Jute Silk Blend",
      "Collar": "Classic Mandarin Collar",
      "Pockets": "1 Chest Pocket, 2 Welt Waist Pockets",
      "Buttons": "Antique Brass Metal Embossed",
      "Lining": "Full Satin Inner Lining",
      "Occasion": "Festivals, Haldi, Sangeet, Weddings",
      "Country of Origin": "India"
    }
  },

  // 20. Women Traditional Saree
  {
    id: "am-20",
    name: "Women Woven Kanjivaram Style Soft Silk Saree with Blouse",
    category: "Women",
    categories: ["Women", "Ethnic Wear", "Sale"],
    originalPrice: 2999,
    discountedPrice: 999,
    discountPct: 67,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Free Size (5.5m + 0.8m Blouse)"],
    colors: [
      { name: "Crimson Red & Gold", hex: "#991b1b" },
      { name: "Royal Peacock Blue", hex: "#0369a1" },
      { name: "Dark Green & Gold", hex: "#14532d" }
    ],
    rating: 4.7,
    reviewsCount: 420,
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isSale: true,
    badge: "67% OFF",
    description: "Experience the royal heritage of Indian weaves. Lightweight soft silk saree featuring grand golden zari pallu with traditional temple borders. Includes matching unstitched blouse piece.",
    details: {
      "Saree Fabric": "Soft Litchi Silk (Lightweight & Drape-Friendly)",
      "Blouse Fabric": "Matching Silk with Zari Border (Unstitched 80cm)",
      "Saree Length": "5.5 Meters",
      "Work": "Jacquard Golden Zari Weaving",
      "Occasion": "Festivals, Weddings, Pujas",
      "Country of Origin": "India"
    }
  },

  // 21. Boys Formal / Casual Check Shirt
  {
    id: "am-21",
    name: "Boys 100% Cotton Buffalo Checked Casual Full Sleeve Shirt",
    category: "Kids",
    categories: ["Kids", "Boys", "Shirts", "Western Wear", "Sale"],
    originalPrice: 899,
    discountedPrice: 379,
    discountPct: 58,
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    colors: [
      { name: "Red & Navy Check", hex: "#b91c1c" },
      { name: "Green & Blue Check", hex: "#15803d" }
    ],
    rating: 4.5,
    reviewsCount: 110,
    isNew: false,
    isTrending: false,
    isBestSeller: true,
    isSale: true,
    badge: "BESTSELLER",
    description: "A smart mini-gentleman shirt made from soft brushed cotton flannel. Ideal for family outings, school functions, and festive gatherings.",
    details: {
      "Fabric": "100% Brushed Soft Cotton",
      "Pattern": "Classic Buffalo Checks",
      "Sleeve": "Full Sleeves with Buttoned Cuffs",
      "Collar": "Turn-down Spread Collar",
      "Pocket": "1 Chest Patch Pocket",
      "Country of Origin": "India"
    }
  },

  // 22. Men Formal Oxford Shoes
  {
    id: "am-22",
    name: "Men Formal Lace-Up Derby Oxford Dress Shoes",
    category: "Footwear",
    categories: ["Men", "Footwear", "Western Wear"],
    originalPrice: 1999,
    discountedPrice: 849,
    discountPct: 58,
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["6", "7", "8", "9", "10"],
    colors: [
      { name: "Glossy Black", hex: "#09090b" },
      { name: "Burnished Brown", hex: "#78350f" }
    ],
    rating: 4.3,
    reviewsCount: 135,
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    isSale: false,
    badge: "OFFICE WEAR",
    description: "Complete your sharp business attire with these sleek derby shoes. Engineered with premium synthetic leather, anti-skid TPR sole, and cushioned inner lining for all-day comfort.",
    details: {
      "Upper": "Synthetic High-Gloss Dress Leather",
      "Sole": "Non-Slip Lightweight TPR Sole",
      "Closure": "Blind Eyelet Lace-Up",
      "Toe": "Classic Almond Cap Toe",
      "Occasion": "Office, Interviews, Formal Celebrations",
      "Country of Origin": "India"
    }
  },

  // 23. Accessories - Backpack
  {
    id: "am-23",
    name: "Unisex Water-Resistant 30L Multi-Pocket Laptop Backpack",
    category: "Accessories",
    categories: ["Accessories", "Sale"],
    originalPrice: 1499,
    discountedPrice: 599,
    discountPct: 60,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["One Size (30L)"],
    colors: [
      { name: "Space Grey", hex: "#475569" },
      { name: "Midnight Navy", hex: "#1e3a8a" },
      { name: "All Black", hex: "#0f172a" }
    ],
    rating: 4.6,
    reviewsCount: 310,
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isSale: true,
    badge: "POPULAR",
    description: "Your daily partner for college, office, and weekend trips. Features a padded 15.6-inch laptop compartment, bottle holders, USB charging port cutout, and rainproof polyester.",
    details: {
      "Capacity": "30 Litres (Fits 15.6 Inch Laptop)",
      "Fabric": "Heavy-Duty 900D Water-Repellent Polyester",
      "Compartments": "3 Main Zip Compartments + 2 Side Mesh Pockets",
      "Straps": "Breathable Air-Mesh Padded Shoulder Straps",
      "Country of Origin": "India"
    }
  },

  // 24. Women Chic Handbag / Tote
  {
    id: "am-24",
    name: "Women Structured Saffiano Vegan Leather Shoulder Tote Bag",
    category: "Accessories",
    categories: ["Women", "Accessories", "Sale"],
    originalPrice: 1799,
    discountedPrice: 699,
    discountPct: 61,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Regular Size"],
    colors: [
      { name: "Rich Tan", hex: "#9a3412" },
      { name: "Blush Pink", hex: "#f472b6" },
      { name: "Classic Noir", hex: "#18181b" }
    ],
    rating: 4.5,
    reviewsCount: 198,
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    isSale: true,
    badge: "61% OFF",
    description: "Elevate your daily look with this structured shoulder tote. Spacious enough for tablet, makeup pouch, water bottle, and wallet, secured with smooth gold-tone zippers.",
    details: {
      "Material": "Scratch-Resistant Saffiano PU Leather",
      "Closure": "Top Metal Zip Closure",
      "Compartments": "2 Main Compartments + 1 Centre Zip Divider",
      "Strap": "Comfort Dual Shoulder Handles + Detachable Sling",
      "Country of Origin": "India"
    }
  },

  // 25. Men Cotton Casual Trousers / Chinos
  {
    id: "am-25",
    name: "Men Stretchable Cotton Twill Slim Fit Casual Chino Trousers",
    category: "Men",
    categories: ["Men", "Trousers", "Western Wear", "Sale"],
    originalPrice: 1599,
    discountedPrice: 649,
    discountPct: 59,
    images: [
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["30", "32", "34", "36", "38"],
    colors: [
      { name: "Warm Khaki", hex: "#b45309" },
      { name: "Army Olive", hex: "#3f6212" },
      { name: "Navy Blue", hex: "#1e3a8a" }
    ],
    rating: 4.5,
    reviewsCount: 260,
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isSale: true,
    badge: "HOT SELLER",
    description: "The ideal balance between smart and casual. Crafted from durable cotton twill infused with stretch for unrestricted movement whether at your desk or out for dinner.",
    details: {
      "Fabric": "98% Cotton Twill, 2% Elastane",
      "Fit": "Modern Slim Fit",
      "Pockets": "4 Pockets (2 Slash, 2 Back Buttoned)",
      "Wash Care": "Machine Washable",
      "Country of Origin": "India"
    }
  },

  // 26. Women Denim Jacket
  {
    id: "am-26",
    name: "Women Classic Washed Crop Denim Trucker Jacket",
    category: "Women",
    categories: ["Women", "Western Wear", "Sale"],
    originalPrice: 1999,
    discountedPrice: 849,
    discountPct: 58,
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Vintage Light Blue", hex: "#60a5fa" },
      { name: "Dark Indigo Wash", hex: "#1d4ed8" }
    ],
    rating: 4.6,
    reviewsCount: 178,
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    isSale: true,
    badge: "TRENDING",
    description: "Layer like a street-style icon! Features classic silver metal buttons, front flap chest pockets, and a flattering cropped cut that pairs effortlessly with dresses and jeans.",
    details: {
      "Fabric": "100% Rigid Heavy Cotton Denim",
      "Fit": "Regular Cropped Fit",
      "Closure": "Button Front Closure",
      "Collar": "Turn-Down Spread Collar",
      "Country of Origin": "India"
    }
  },

  // 27. Girls Western Denim Skirt & Top Set
  {
    id: "am-27",
    name: "Girls Striped Crop Rib Top with Washed Denim Skirt Set",
    category: "Kids",
    categories: ["Kids", "Girls", "Western Wear", "Dresses", "Sale"],
    originalPrice: 1199,
    discountedPrice: 499,
    discountPct: 58,
    images: [
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y", "12-13Y"],
    colors: [
      { name: "Candy Pink & Blue", hex: "#f472b6" },
      { name: "Yellow & Blue", hex: "#eab308" }
    ],
    rating: 4.5,
    reviewsCount: 88,
    isNew: true,
    isTrending: false,
    isBestSeller: false,
    isSale: true,
    badge: "UNDER ₹499",
    description: "Super trendy coordinated 2-piece set for fashion-forward girls. Includes a stretchy ribbed cotton crop top paired with an adorable button-down front denim mini skirt.",
    details: {
      "Set Contents": "1 Ribbed Top + 1 Denim Skirt",
      "Fabric": "Cotton Rib (Top) & Soft Cotton Denim (Skirt)",
      "Waist": "Internal adjustable elastic band",
      "Occasion": "Picnics, Casual outings, Birthday parties",
      "Country of Origin": "India"
    }
  },

  // 28. Men Cotton Printed Kurta
  {
    id: "am-28",
    name: "Men Pure Cotton Handloom Printed Short Ethnic Kurta",
    category: "Men",
    categories: ["Men", "Ethnic Wear", "Shirts", "Sale"],
    originalPrice: 999,
    discountedPrice: 399,
    discountPct: 60,
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Indigo Blue", hex: "#1e3a8a" },
      { name: "Terracotta Rust", hex: "#c2410c" },
      { name: "Sage Green", hex: "#4d7c0f" }
    ],
    rating: 4.4,
    reviewsCount: 230,
    isNew: false,
    isTrending: true,
    isBestSeller: true,
    isSale: true,
    badge: "UNDER ₹399",
    description: "Authentic Indian traditional flair for modern men. Made from light breathable cotton handloom fabric with subtle geometric prints, side slits, and a mandarin button neck.",
    details: {
      "Fabric": "100% Breathable Khadi Cotton",
      "Length": "Short Hip Length (30 inches)",
      "Neck": "Mandarin Collar with Wooden Buttons",
      "Sleeve": "Roll-up Full Sleeves",
      "Occasion": "Festivals, Puja, Casual Ethnic Days",
      "Country of Origin": "India"
    }
  },

  // 29. Women Printed Western T-Shirt
  {
    id: "am-29",
    name: "Women Oversized Graphic Typography Cotton T-Shirt",
    category: "Women",
    categories: ["Women", "T-Shirts", "Western Wear", "Sale"],
    originalPrice: 699,
    discountedPrice: 299,
    discountPct: 57,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Lavender Lilac", hex: "#c084fc" },
      { name: "Cream Off-White", hex: "#fef3c7" },
      { name: "Charcoal Grey", hex: "#374151" }
    ],
    rating: 4.6,
    reviewsCount: 310,
    isNew: true,
    isTrending: true,
    isBestSeller: true,
    isSale: true,
    badge: "UNDER ₹299",
    description: "Relaxed, aesthetic, and ultra soft! Features aesthetic typographic back print and minimalist chest logo. Perfect when styled with high-waist jeans or bike shorts.",
    details: {
      "Fabric": "100% Pure Super-Combed Cotton",
      "Fit": "Relaxed Baggy Fit",
      "Neck": "Ribbed Round Neck",
      "Sleeve": "Half Drop-Shoulder Sleeves",
      "Country of Origin": "India"
    }
  },

  // 30. Men Casual Check Shirt
  {
    id: "am-30",
    name: "Men Regular Fit Cotton Madras Check Casual Shirt",
    category: "Men",
    categories: ["Men", "Shirts", "Western Wear", "Sale"],
    originalPrice: 1299,
    discountedPrice: 529,
    discountPct: 59,
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Red & Grey Check", hex: "#b91c1c" },
      { name: "Blue & White Check", hex: "#2563eb" }
    ],
    rating: 4.3,
    reviewsCount: 140,
    isNew: false,
    isTrending: false,
    isBestSeller: true,
    isSale: true,
    badge: "59% OFF",
    description: "Classic yarn-dyed cotton check shirt that never goes out of style. Features dual chest pockets with button flaps, curved hem, and soft pre-washed finish.",
    details: {
      "Fabric": "100% Yarn-Dyed Cotton",
      "Fit": "Regular Comfort Fit",
      "Collar": "Point Collar",
      "Pockets": "Two Chest Button Pockets",
      "Country of Origin": "India"
    }
  },

  // 31. Women Ethnic Palazzo Pants
  {
    id: "am-31",
    name: "Women Flared Rayon Embroidered Ethnic Palazzo",
    category: "Women",
    categories: ["Women", "Ethnic Wear", "Trousers", "Sale"],
    originalPrice: 899,
    discountedPrice: 349,
    discountPct: 61,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["Free Size (Waist 28-40)"],
    colors: [
      { name: "Golden Beige", hex: "#d97706" },
      { name: "Pure White", hex: "#f8fafc" },
      { name: "Jet Black", hex: "#0f172a" }
    ],
    rating: 4.4,
    reviewsCount: 172,
    isNew: false,
    isTrending: false,
    isBestSeller: true,
    isSale: true,
    badge: "UNDER ₹399",
    description: "Pair with any kurti or ethnic top! Beautiful wide-leg palazzo with delicate chikankari-style embroidered hem and an ultra-soft elastic waistband with drawstring.",
    details: {
      "Fabric": "Heavy Viscose Rayon (No Transparency)",
      "Waist": "Elastic Waistband with Drawstring",
      "Hem": "Intricate Cutwork & Zari Lace",
      "Length": "38 Inches",
      "Country of Origin": "India"
    }
  },

  // 32. Kids Unisex Warm Hoodie
  {
    id: "am-32",
    name: "Kids Unisex Fleece Lined Kangaroo Pocket Pullover Hoodie",
    category: "Kids",
    categories: ["Kids", "Boys", "Girls", "Western Wear", "Sale"],
    originalPrice: 1199,
    discountedPrice: 499,
    discountPct: 58,
    images: [
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    colors: [
      { name: "Crimson Red", hex: "#dc2626" },
      { name: "Heather Grey", hex: "#64748b" },
      { name: "Navy Blue", hex: "#1e3a8a" }
    ],
    rating: 4.7,
    reviewsCount: 115,
    isNew: true,
    isTrending: true,
    isBestSeller: false,
    isSale: true,
    badge: "COZY WEAR",
    description: "Keep little ones snug and cheerful during cool evenings. Made from brushed fleece cotton with double-layered hood and front pouch pocket for warming little hands.",
    details: {
      "Fabric": "80% Cotton, 20% Brushed Poly Fleece",
      "Neck": "Attached Hood with Drawcords (Child-Safe)",
      "Cuffs": "Ribbed Spandex Cuffs & Hem",
      "Occasion": "Winter Casual / Travel",
      "Country of Origin": "India"
    }
  }
];

// Promotional Banners Configuration
const HERO_BANNERS = [
  {
    id: 1,
    tag: "GREAT INDIAN FASHION SALE",
    title: "Fashion For Everyone",
    subtitle: "Trendy Styles for Men, Women & Kids at Unbeatable Factory Prices!",
    discountText: "FLAT 50% - 70% OFF",
    buttonText: "Shop The Sale",
    categoryTarget: "sale",
    bgGradient: "linear-gradient(135deg, #b91c1c 0%, #7f1d1d 60%, #450a0a 100%)",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    tag: "FESTIVE & ETHNIC COLLECTION",
    title: "Pure Tradition & Grace",
    subtitle: "Kurtas, Anarkalis, Sarees & Nehru Jackets starting at just ₹399",
    discountText: "SPECIAL FESTIVE DEALS",
    buttonText: "Explore Ethnic",
    categoryTarget: "ethnic-wear",
    bgGradient: "linear-gradient(135deg, #c2410c 0%, #9a3412 60%, #431407 100%)",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    tag: "EVERYDAY VALUE STORE",
    title: "Daily Casuals Under ₹499",
    subtitle: "T-Shirts, Jeans, Trousers & Kids Wear designed for maximum comfort",
    discountText: "STARTING @ ₹249",
    buttonText: "Shop Deals Under ₹499",
    categoryTarget: "t-shirts",
    bgGradient: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 60%, #172554 100%)",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80"
  }
];

// Budget categories
const BUDGET_ZONES = [
  { label: "Deals Under ₹299", maxPrice: 299, icon: "fa-bolt", badge: "Super Steal" },
  { label: "Deals Under ₹499", maxPrice: 499, icon: "fa-tags", badge: "Most Popular" },
  { label: "Deals Under ₹699", maxPrice: 699, icon: "fa-star", badge: "Value Pick" },
  { label: "Deals Under ₹999", maxPrice: 999, icon: "fa-gem", badge: "Premium Styles" }
];

// Customer Reviews data
const STORE_REVIEWS = [
  {
    id: 1,
    name: "Pooja Sharma",
    city: "Lucknow",
    rating: 5,
    date: "2 days ago",
    comment: "Ordered via WhatsApp and received the Anarkali Kurta within 3 days. Fabric is pure rayon and looks even better than the photos! Fantastic service by A-Mart.",
    verified: true
  },
  {
    id: 2,
    name: "Amitabh Verma",
    city: "Kanpur",
    rating: 5,
    date: "1 week ago",
    comment: "The WhatsApp ordering was so fast and easy! Sent my address and the A-Mart team confirmed immediately. The cotton shirt fits perfectly.",
    verified: true
  },
  {
    id: 3,
    name: "Neha Gupta",
    city: "Varanasi",
    rating: 5,
    date: "2 weeks ago",
    comment: "Great quality kids t-shirts and frock at V-Mart style affordable prices! Soft material, fast shipping, and COD was available.",
    verified: true
  }
];
