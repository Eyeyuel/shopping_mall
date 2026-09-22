import { Shop } from '../types';

export const mockShops: Shop[] = [
  {
    id: "shop-1",
    name: "Aura Boutique",
    category: "Fashion",
    logoUrl: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=200&h=200&fit=crop",
    heroImageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=800&fit=crop",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "Aura Boutique brings the latest European fashion trends straight to the runway of your daily life. Experience high-end luxury with our curated seasonal collections.",
    floor: "Level 1, North Wing",
    shopNumber: "Unit 412",
    hours: "10:00 AM - 9:00 PM",
    tags: ["Luxury", "Womenswear", "Accessories"],
    gallery: [
      { type: 'video',
        url: 'I2UkiDIYWWM' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&fit=crop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&fit=crop' }
    ]
  },
  {
    id: "shop-2",
    name: "TechHaven",
    category: "Electronics",
    logoUrl: "https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?w=200&h=200&fit=crop",
    heroImageUrl: "/images/techhaven_hero.jpg",
    videoUrl: "",
    description: "Your ultimate destination for cutting-edge electronics, smart home devices, and premium audio equipment. Experience the future today.",
    floor: "Level 2, Center Plaza",
    shopNumber: "Unit 793",
    hours: "10:00 AM - 10:00 PM",
    tags: ["Gadgets", "Smart Home", "Audio"],
    gallery: [
      { type: 'video',
        url: 'I2UkiDIYWWM' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&fit=crop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&fit=crop' }
    ]
  },
  {
    id: "shop-3",
    name: "The Obsidian Grill",
    category: "Dining",
    logoUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=200&h=200&fit=crop",
    heroImageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    description: "An unforgettable dining experience featuring dry-aged steaks, an award-winning wine list, and panoramic views of the city skyline.",
    floor: "Level 5, Sky Deck",
    shopNumber: "Unit 803",
    hours: "12:00 PM - 11:30 PM",
    tags: ["Fine Dining", "Steakhouse", "Wine Bar"],
    gallery: [
      { type: 'video',
        url: 'I2UkiDIYWWM' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&fit=crop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&fit=crop' }
    ]
  },
  {
    id: "shop-4",
    name: "Lumina Spa",
    category: "Services",
    logoUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=200&h=200&fit=crop",
    heroImageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop",
    videoUrl: "",
    description: "Rejuvenate your body and mind in our state-of-the-art wellness facility. Lumina Spa offers holistic treatments, hydrotherapy, and personalized care.",
    floor: "Level 4, Quiet Zone",
    shopNumber: "Unit 271",
    hours: "9:00 AM - 8:00 PM",
    tags: ["Wellness", "Massage", "Beauty"],
    gallery: [
      { type: 'video',
        url: 'I2UkiDIYWWM' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&fit=crop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&fit=crop' }
    ]
  },
  {
    id: "shop-5",
    name: "Apex Cinema",
    category: "Entertainment",
    logoUrl: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=200&h=200&fit=crop",
    heroImageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=800&fit=crop",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    description: "Experience the magic of cinema in ultra-high definition. Featuring IMAX screens, Dolby Atmos sound, and premium reclining seats.",
    floor: "Level 3, East Wing",
    shopNumber: "Unit 353",
    hours: "11:00 AM - 1:00 AM",
    tags: ["Movies", "IMAX", "Premium"],
    gallery: [
      { type: 'video',
        url: 'I2UkiDIYWWM' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&fit=crop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&fit=crop' }
    ]
  },
  {
    id: "shop-6",
    name: "Velvet Caffe",
    category: "Dining",
    logoUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=200&h=200&fit=crop",
    heroImageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=800&fit=crop",
    videoUrl: "",
    description: "Artisanal coffee, freshly baked pastries, and a cozy atmosphere perfect for remote work or catching up with friends.",
    floor: "Level 1, Center Plaza",
    shopNumber: "Unit 578",
    hours: "7:00 AM - 9:00 PM",
    tags: ["Coffee", "Bakery", "Cafe"],
    gallery: [
      { type: 'video',
        url: 'I2UkiDIYWWM' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&fit=crop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&fit=crop' }
    ]
  },
  {
    id: "shop-7",
    name: "Nova Athletics",
    category: "Fashion",
    logoUrl: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=200&h=200&fit=crop",
    heroImageUrl: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&h=800&fit=crop",
    videoUrl: "",
    description: "Premium activewear and athletic footwear designed for performance and style. Push your limits with Nova.",
    floor: "Level 2, South Wing",
    shopNumber: "Unit 678",
    hours: "10:00 AM - 9:00 PM",
    tags: ["Activewear", "Sneakers", "Sports"],
    gallery: [
      { type: 'video',
        url: 'I2UkiDIYWWM' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&fit=crop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&fit=crop' }
    ]
  },
  {
    id: "shop-8",
    name: "Chrono Timepieces",
    category: "Fashion",
    logoUrl: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=200&h=200&fit=crop",
    heroImageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&h=800&fit=crop",
    videoUrl: "",
    description: "An exclusive collection of luxury watches from the world's most prestigious horological houses.",
    floor: "Level 1, North Wing",
    shopNumber: "Unit 496",
    hours: "10:00 AM - 8:00 PM",
    tags: ["Watches", "Luxury", "Jewelry"],
    gallery: [
      { type: 'video',
        url: 'I2UkiDIYWWM' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&fit=crop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&fit=crop' }
    ]
  },
  {
    id: "shop-9",
    name: "Echo Sound",
    category: "Electronics",
    logoUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
    heroImageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=800&fit=crop",
    videoUrl: "",
    description: "Audiophile-grade headphones, speakers, and turntables. Hear every detail exactly as the artist intended.",
    floor: "Level 2, East Wing",
    shopNumber: "Unit 655",
    hours: "10:00 AM - 9:00 PM",
    tags: ["Audio", "Headphones", "Music"],
    gallery: [
      { type: 'video',
        url: 'I2UkiDIYWWM' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&fit=crop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&fit=crop' }
    ]
  },
  {
    id: "shop-10",
    name: "Zenith Virtual",
    category: "Entertainment",
    logoUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=200&h=200&fit=crop",
    heroImageUrl: "/images/zenith_virtual_hero.jpg",
    videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "Step into another world at our cutting-edge Virtual Reality arcade. Multiplayer arenas, immersive escape rooms, and more.",
    floor: "Level 3, South Wing",
    shopNumber: "Unit 508",
    hours: "12:00 PM - 10:00 PM",
    tags: ["VR", "Gaming", "Arcade"],
    gallery: [
      { type: 'video',
        url: 'I2UkiDIYWWM' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&fit=crop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&fit=crop' }
    ]
  },
  {
    id: "shop-11",
    name: "The Floral Studio",
    category: "Services",
    logoUrl: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=200&h=200&fit=crop",
    heroImageUrl: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1200&h=800&fit=crop",
    videoUrl: "",
    description: "Bespoke floral arrangements for every occasion. Fresh, seasonal blooms crafted by master florists.",
    floor: "Level 1, South Wing",
    shopNumber: "Unit 766",
    hours: "10:00 AM - 7:00 PM",
    tags: ["Florist", "Gifts", "Events"],
    gallery: [
      { type: 'video',
        url: 'I2UkiDIYWWM' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&fit=crop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&fit=crop' }
    ]
  },
  {
    id: "shop-12",
    name: "Maison de Parfum",
    category: "Fashion",
    logoUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200&h=200&fit=crop",
    heroImageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200&h=800&fit=crop",
    videoUrl: "",
    description: "Discover signature scents and exclusive fragrances from master perfumers around the globe.",
    floor: "Level 1, Center Plaza",
    shopNumber: "Unit 336",
    hours: "10:00 AM - 9:00 PM",
    tags: ["Perfume", "Beauty", "Luxury"],
    gallery: [
      { type: 'video',
        url: 'I2UkiDIYWWM' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&fit=crop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&fit=crop' }
    ]
  },
  {
    id: "shop-13",
    name: "Byte & Bite",
    category: "Dining",
    logoUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=200&fit=crop",
    heroImageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop",
    videoUrl: "",
    description: "A modern fusion restaurant offering tech-inspired dishes and robotic service in a cyberpunk atmosphere.",
    floor: "Level 4, Food Court",
    shopNumber: "Unit 501",
    hours: "11:00 AM - 10:00 PM",
    tags: ["Fusion", "Modern", "Restaurant"],
    gallery: [
      { type: 'video',
        url: 'I2UkiDIYWWM' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&fit=crop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&fit=crop' }
    ]
  },
  {
    id: "shop-14",
    name: "Pixel Play",
    category: "Electronics",
    logoUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=200&fit=crop",
    heroImageUrl: "/images/pixel_play_hero.jpg",
    videoUrl: "",
    description: "The ultimate destination for gamers. Consoles, PC hardware, retro games, and exclusive merchandise.",
    floor: "Level 3, North Wing",
    shopNumber: "Unit 977",
    hours: "10:00 AM - 9:00 PM",
    tags: ["Gaming", "Consoles", "PC"],
    gallery: [
      { type: 'video',
        url: 'I2UkiDIYWWM' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&fit=crop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&fit=crop' }
    ]
  },
  {
    id: "shop-15",
    name: "Luxe Optical",
    category: "Services",
    logoUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=200&h=200&fit=crop",
    heroImageUrl: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=800&fit=crop",
    videoUrl: "",
    description: "Designer eyewear and comprehensive eye care. See the world clearly and in style.",
    floor: "Level 2, West Wing",
    shopNumber: "Unit 401",
    hours: "10:00 AM - 8:00 PM",
    tags: ["Eyewear", "Optician", "Health"],
    gallery: [
      { type: 'video',
        url: 'I2UkiDIYWWM' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&fit=crop' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&fit=crop' }
    ]
  }
];
