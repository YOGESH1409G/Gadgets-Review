// Product Database
export const products = [
  // Smartphones
  {
    id: 1,
    name: "SpectraFlow Pro",
    category: "smartphones",
    brand: "Apple",
    price: 159900,
    originalPrice: 169900,
    rating: 4.8,
    reviews: 2847,
    image: "/api/placeholder/400/300",
    description: "An exceptional blend of performance and elegance",
    shortDescription: "Premium smartphone with cutting-edge technology",
    specifications: {
      display: "6.7\" OLED, 120Hz",
      processor: "A17 Pro Chip",
      storage: "256GB",
      battery: "Up to 29 hours video",
      camera: "48MP Triple System",
      connectivity: "5G, WiFi 6E, Bluetooth 5.3"
    },
    features: [
      "Titanium Design",
      "Action Button",
      "USB-C Connectivity",
      "Dynamic Island",
      "Face ID"
    ],
    pros: [
      "Stunning OLED display with vibrant colors and excellent brightness",
      "Exceptional battery life that easily lasts over a week on a single charge",
      "Premium build quality with durable titanium and scratch-resistant sapphire glass",
      "Fast and responsive performance, handling all tasks effortlessly"
    ],
    cons: [
      "Proprietary charging cable is a minor inconvenience",
      "Limited backward compatibility compared to some competitors",
      "Initial setup can be slightly complex for new users"
    ],
    inDepthReview: "The SpectraFlow Pro sets a formidable contender in the high-end wearable market, marrying a blend of robust health features, a sleek design, and an incredibly long-lasting battery. From the moment you unbox it, the X Pro exudes premium quality, with its brushed titanium casing and smooth, vibrant display that remains clearly visible even in the brightest conditions.",
    affiliateLinks: {
      amazon: "https://amzn.to/spectraflow-pro",
      flipkart: "https://fkrt.it/spectraflow-pro"
    },
    inStock: true,
    trending: true
  },
  {
    id: 2,
    name: "ChronoPulse Elite",
    category: "smartphones",
    brand: "Samsung",
    price: 129999,
    originalPrice: 139999,
    rating: 4.6,
    reviews: 1923,
    image: "/api/placeholder/400/300",
    description: "The ChronoPulse Elite redefines cutting-edge features with seamless smart home integration",
    shortDescription: "Elite smartwatch with advanced health monitoring",
    specifications: {
      display: "6.8\" Dynamic AMOLED, 120Hz",
      processor: "Snapdragon 8 Gen 3",
      storage: "512GB",
      battery: "5000mAh, 45W charging",
      camera: "200MP Quad System",
      connectivity: "5G, WiFi 7, Bluetooth 5.4"
    },
    features: [
      "S Pen Included",
      "Ultra Wideband",
      "Satellite Connectivity",
      "IP68 Rating",
      "Wireless PowerShare"
    ],
    pros: [
      "Incredible 200MP camera system with outstanding zoom capabilities",
      "S Pen functionality for productivity and creativity",
      "Excellent display quality with vibrant colors",
      "Fast charging and wireless power sharing"
    ],
    cons: [
      "Large size may not be comfortable for all users",
      "Battery life could be better with heavy usage",
      "Expensive compared to competitors"
    ],
    inDepthReview: "The ChronoPulse Elite represents Samsung's flagship excellence with cutting-edge technology and premium design. The device excels in camera performance, productivity features, and overall user experience.",
    affiliateLinks: {
      amazon: "https://amzn.to/chronopulse-elite",
      flipkart: "https://fkrt.it/chronopulse-elite"
    },
    inStock: true,
    trending: false
  },
  
  // Laptops
  {
    id: 3,
    name: "SonicWave X-Pro",
    category: "laptops",
    brand: "Apple",
    price: 114900,
    originalPrice: 124900,
    rating: 4.9,
    reviews: 3421,
    image: "/api/placeholder/400/300",
    description: "Immersive audio quality and unparalleled comfort",
    shortDescription: "Ultra-lightweight laptop with exceptional performance",
    specifications: {
      display: "13.6\" Liquid Retina, 2560x1664",
      processor: "Apple M3 Chip",
      storage: "512GB SSD",
      battery: "Up to 18 hours",
      memory: "16GB Unified Memory",
      connectivity: "2x Thunderbolt, MagSafe 3"
    },
    features: [
      "M3 Chip Performance",
      "Fanless Design",
      "MagSafe Charging",
      "1080p FaceTime Camera",
      "Six-Speaker Sound System"
    ],
    pros: [
      "Incredible battery life lasting full work days",
      "Silent operation with fanless design",
      "Exceptional build quality and premium materials",
      "Fast performance for both work and creative tasks"
    ],
    cons: [
      "Limited port selection may require adapters",
      "No Face ID, only Touch ID",
      "Price premium compared to Windows alternatives"
    ],
    inDepthReview: "The SonicWave X-Pro delivers exceptional performance in an ultra-portable package. The M3 chip provides remarkable efficiency and power, making it perfect for professionals and creatives alike.",
    affiliateLinks: {
      amazon: "https://amzn.to/sonicwave-xpro",
      flipkart: "https://fkrt.it/sonicwave-xpro"
    },
    inStock: true,
    trending: true
  },
  {
    id: 4,
    name: "QuantumBook Air",
    category: "laptops",
    brand: "Dell",
    price: 135990,
    originalPrice: 145990,
    rating: 4.7,
    reviews: 2156,
    image: "/api/placeholder/400/300",
    description: "Lightweight yet powerful, the QuantumBook Air is engineered for professionals",
    shortDescription: "Premium ultrabook with stunning display",
    specifications: {
      display: "13.4\" InfinityEdge OLED, 3456x2160",
      processor: "Intel Core i7-1360P",
      storage: "1TB SSD",
      battery: "Up to 12 hours",
      memory: "32GB LPDDR5",
      connectivity: "2x Thunderbolt 4, USB-C"
    },
    features: [
      "OLED InfinityEdge Display",
      "CNC Machined Aluminum",
      "Gorilla Glass Palmrest",
      "Killer WiFi 6E",
      "Windows Hello"
    ],
    pros: [
      "Stunning OLED display with perfect blacks",
      "Premium build quality with attention to detail",
      "Excellent keyboard and trackpad experience",
      "Strong performance for productivity tasks"
    ],
    cons: [
      "Battery life shorter than competitors",
      "Can get warm under heavy load",
      "Limited upgradeability"
    ],
    inDepthReview: "The QuantumBook Air represents Dell's premium ultrabook excellence with a gorgeous OLED display and premium build quality that rivals the best in the industry.",
    affiliateLinks: {
      amazon: "https://amzn.to/quantumbook-air",
      flipkart: "https://fkrt.it/quantumbook-air"
    },
    inStock: true,
    trending: false
  },

  // Earphones
  {
    id: 5,
    name: "EchoBeam 360",
    category: "earphones",
    brand: "Apple",
    price: 26900,
    originalPrice: 29900,
    rating: 4.8,
    reviews: 5431,
    image: "/api/placeholder/400/300",
    description: "Experience rich, room-filling sound and seamless smart home integration",
    shortDescription: "Premium wireless earbuds with active noise cancellation",
    specifications: {
      drivers: "Custom 11mm drivers",
      battery: "Up to 6 hours + 24 with case",
      connectivity: "Bluetooth 5.3, USB-C",
      features: "Active Noise Cancellation",
      water: "IPX4 Water Resistant",
      audio: "Spatial Audio, Adaptive EQ"
    },
    features: [
      "Active Noise Cancellation",
      "Transparency Mode",
      "Spatial Audio",
      "Adaptive EQ",
      "Hey Siri"
    ],
    pros: [
      "Industry-leading noise cancellation technology",
      "Exceptional sound quality with rich bass and clear highs",
      "Seamless integration with Apple ecosystem",
      "Comfortable fit for extended listening sessions"
    ],
    cons: [
      "Premium pricing compared to alternatives",
      "Limited customization options for Android users",
      "Case can be slippery and prone to drops"
    ],
    inDepthReview: "The EchoBeam 360 sets the gold standard for wireless earbuds with exceptional audio quality, advanced noise cancellation, and seamless device integration.",
    affiliateLinks: {
      amazon: "https://amzn.to/echobeam-360",
      flipkart: "https://fkrt.it/echobeam-360"
    },
    inStock: true,
    trending: true
  },
  {
    id: 6,
    name: "AeroBuds Pro",
    category: "earphones",
    brand: "Sony",
    price: 29990,
    originalPrice: 34990,
    rating: 4.9,
    reviews: 4287,
    image: "/api/placeholder/400/300",
    description: "Crystal-clear calls and comfortable fit make these wireless earbuds a top choice",
    shortDescription: "Professional wireless headphones with superior noise canceling",
    specifications: {
      drivers: "30mm Drivers",
      battery: "Up to 30 hours total",
      connectivity: "Bluetooth 5.2, NFC, 3.5mm",
      features: "Industry-leading NC",
      controls: "Touch Controls",
      audio: "360 Reality Audio, LDAC"
    },
    features: [
      "Industry-Leading Noise Canceling",
      "30-Hour Battery Life",
      "Quick Charge (3min = 3hrs)",
      "Multipoint Connection",
      "Speak-to-Chat"
    ],
    pros: [
      "Best-in-class noise cancellation performance",
      "Exceptional 30-hour battery life",
      "Superior sound quality with custom EQ options",
      "Comfortable for long listening sessions"
    ],
    cons: [
      "Bulky design may not suit all preferences",
      "Touch controls can be overly sensitive",
      "Premium price point"
    ],
    inDepthReview: "The AeroBuds Pro delivers audiophile-quality sound with industry-leading noise cancellation, making them perfect for both travel and daily use.",
    affiliateLinks: {
      amazon: "https://amzn.to/aerobuds-pro",
      flipkart: "https://fkrt.it/aerobuds-pro"
    },
    inStock: true,
    trending: false
  },

  // Tablets
  {
    id: 7,
    name: "GameStream Mini",
    category: "tablets",
    brand: "Apple",
    price: 112900,
    originalPrice: 119900,
    rating: 4.7,
    reviews: 1876,
    image: "/api/placeholder/400/300",
    description: "Unleash your gaming on the go with this compact and powerful device",
    shortDescription: "Professional tablet with M2 chip and stunning display",
    specifications: {
      display: "12.9\" Liquid Retina XDR",
      processor: "Apple M2 Chip",
      storage: "512GB",
      connectivity: "WiFi 6E, 5G option",
      camera: "12MP Ultra Wide front",
      battery: "Up to 10 hours"
    },
    features: [
      "M2 Chip Performance",
      "Apple Pencil Support",
      "Magic Keyboard Compatible",
      "ProMotion Technology",
      "Face ID"
    ],
    pros: [
      "Desktop-class performance in tablet form",
      "Stunning XDR display with incredible brightness",
      "Excellent Apple Pencil integration for creativity",
      "Premium build quality and design"
    ],
    cons: [
      "Very expensive, especially with accessories",
      "iPadOS limitations compared to macOS",
      "Heavy when used with Magic Keyboard"
    ],
    inDepthReview: "The GameStream Mini represents the pinnacle of tablet technology with M2 chip performance and a gorgeous XDR display that's perfect for both productivity and creativity.",
    affiliateLinks: {
      amazon: "https://amzn.to/gamestream-mini",
      flipkart: "https://fkrt.it/gamestream-mini"
    },
    inStock: true,
    trending: true
  },
  {
    id: 8,
    name: "CleanBot X1",
    category: "tablets",
    brand: "Samsung",
    price: 103999,
    originalPrice: 109999,
    rating: 4.5,
    reviews: 1234,
    image: "/api/placeholder/400/300",
    description: "Effortless cleaning and intelligent mapping make the CleanBot X1 a smart choice",
    shortDescription: "Large premium Android tablet with S Pen",
    specifications: {
      display: "14.6\" Super AMOLED",
      processor: "Snapdragon 8 Gen 2",
      storage: "256GB + microSD",
      connectivity: "WiFi 6E, 5G option",
      battery: "11,200mAh",
      features: "S Pen Included"
    },
    features: [
      "Largest Galaxy Tab Display",
      "S Pen Included",
      "DeX Mode",
      "Quad Speakers by AKG",
      "Multi-Window Support"
    ],
    pros: [
      "Massive 14.6-inch display perfect for productivity",
      "S Pen included with excellent palm rejection",
      "Great for media consumption and multitasking",
      "Good value compared to iPad Pro"
    ],
    cons: [
      "Android tablet app ecosystem still limited",
      "Can feel unwieldy due to large size",
      "Battery life varies significantly with usage"
    ],
    inDepthReview: "The CleanBot X1 offers the largest display in Samsung's tablet lineup with excellent S Pen integration, making it ideal for productivity and creative work.",
    affiliateLinks: {
      amazon: "https://amzn.to/cleanbot-x1",
      flipkart: "https://fkrt.it/cleanbot-x1"
    },
    inStock: true,
    trending: false
  }
];

// Categories configuration
export const categories = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    icon: '📱',
    description: 'Latest smartphones with cutting-edge technology'
  },
  {
    id: 'laptops',
    name: 'Laptops',
    icon: '💻',
    description: 'Powerful laptops for work and gaming'
  },
  {
    id: 'earphones',
    name: 'Earphones',
    icon: '🎧',
    description: 'Premium audio devices for immersive experience'
  },
  {
    id: 'tablets',
    name: 'Tablets',
    icon: '📱',
    description: 'Versatile tablets for productivity and entertainment'
  }
];

// Brands configuration
export const brands = [
  'Apple',
  'Samsung',
  'Google',
  'Sony',
  'Bose',
  'Dell',
  'HP',
  'Lenovo',
  'Microsoft'
];

// Price ranges for filters
export const priceRanges = [
  { id: 'under-25000', label: 'Under ₹25,000', min: 0, max: 25000 },
  { id: '25000-50000', label: '₹25,000 - ₹50,000', min: 25000, max: 50000 },
  { id: '50000-100000', label: '₹50,000 - ₹1,00,000', min: 50000, max: 100000 },
  { id: 'over-100000', label: 'Over ₹1,00,000', min: 100000, max: Infinity }
];

// Reviews data
export const reviews = [
  {
    id: 1,
    productId: 1,
    title: "SpectraFlow Pro - A Game Changer in Smartphone Technology",
    content: "The SpectraFlow Pro has completely revolutionized my smartphone experience. The titanium build quality feels incredibly premium, and the new Action Button adds so much functionality to daily use. The camera system, especially in low light conditions, has significantly improved with the 48MP main sensor producing stunning photos.",
    rating: 5,
    author: "TechAurex Team",
    date: "2025-08-08",
    category: "smartphones",
    featured: true
  },
  {
    id: 2,
    productId: 3,
    title: "SonicWave X-Pro - Perfect Balance of Performance and Portability",
    content: "The M3 chip in the SonicWave X-Pro delivers outstanding performance while maintaining incredible battery life. The fanless design keeps it completely silent during operation, making it perfect for both intensive work sessions and creative projects. The build quality is exceptional.",
    rating: 5,
    author: "TechAurex Team",
    date: "2025-08-05",
    category: "laptops",
    featured: true
  },
  {
    id: 3,
    productId: 6,
    title: "AeroBuds Pro - Audio Excellence Redefined",
    content: "These headphones set the gold standard for noise cancellation and audio quality. The 30-hour battery life is remarkable, and the quick charge feature is a lifesaver during long journeys. The sound signature is perfectly balanced with excellent bass response.",
    rating: 5,
    author: "TechAurex Team",
    date: "2025-08-02",
    category: "earphones",
    featured: true
  },
  {
    id: 4,
    productId: 7,
    title: "GameStream Mini - The Future of Tablets",
    content: "The M2 chip performance in a tablet form factor is simply incredible. Whether you're editing videos, playing games, or using it for productivity with the Magic Keyboard, this tablet handles everything effortlessly. The XDR display is breathtaking.",
    rating: 4,
    author: "TechAurex Team",
    date: "2025-07-30",
    category: "tablets",
    featured: false
  },
  {
    id: 5,
    productId: 2,
    title: "ChronoPulse Elite - Samsung's Flagship Excellence",
    content: "The 200MP camera system is absolutely incredible, especially the zoom capabilities. The S Pen functionality adds tremendous value for productivity users. The display quality is among the best I've ever seen on a smartphone.",
    rating: 4,
    author: "TechAurex Team",
    date: "2025-07-28",
    category: "smartphones",
    featured: false
  }
];

// Utility functions
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.trending);
};

export const getLatestReviews = (limit = 3) => {
  return reviews
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

export const filterProducts = (products, filters) => {
  let filtered = [...products];

  // Filter by category
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(product => product.category === filters.category);
  }

  // Filter by brand
  if (filters.brands && filters.brands.length > 0) {
    filtered = filtered.filter(product => filters.brands.includes(product.brand));
  }

  // Filter by price range
  if (filters.priceRange) {
    const range = priceRanges.find(range => range.id === filters.priceRange);
    if (range) {
      filtered = filtered.filter(product => 
        product.price >= range.min && product.price <= range.max
      );
    }
  }

  // Filter by search query
  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query)
    );
  }

  // Sort products
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Keep original order
        break;
    }
  }

  return filtered;
};