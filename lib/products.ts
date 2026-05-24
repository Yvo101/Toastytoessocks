import { Product } from "./cart-context"

export const products: Product[] = [
  {
    id: 1,
    name: "The Snocks",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=400&fit=crop",
    category: "Cozy Socks",
    description: "These Snocks are designed for ultimate everyday comfort, like a gentle hug for your feet. They provide that perfect balance of softness and support, ensuring your feet feel happy all day long.",
    rating: 5,
    reviews: 128,
  },
  {
    id: 2,
    name: "Socsation",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=400&fit=crop",
    category: "Crew Socks",
    description: "Socsation crew socks are all about making a stylish statement without sacrificing comfort. They hit that perfect mid-calf height, offering a secure and comfortable fit that pairs well with a wide range of outfits, from casual jeans to your favorite athleisure wear.
",
    rating: 4,
    reviews: 89,
  },
  {
    id: 3, 
    name: "Thigh-High Warmers",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?w=400&h=400&fit=crop",
    category: "Thigh Socks",
    description: "Stay extra cozy with our thigh-high socks. Soft cotton blend with a ribbed top that stays up all day.",
    rating: 5,
    reviews: 56,
  },
  {
    id: 4,
    name: "Pro Performance Runner",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop",
    category: "Sports Socks",
    description: "Engineered for athletes. Moisture-wicking fabric with arch support and blister prevention technology.",
    rating: 5,
    reviews: 203,
  },
  {
    id: 5,
    name: "Fireside Fuzzy",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=400&fit=crop",
    category: "Cozy Socks",
    description: "Ultra-plush fuzzy socks that feel like walking on clouds. Non-slip grips on the bottom for safety.",
    rating: 5,
    reviews: 167,
  },
  {
    id: 6,
    name: "Everyday Ankle Essential",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&h=400&fit=crop",
    category: "Ankle Socks",
    description: "A wardrobe staple. Soft cotton blend ankle socks that go with everything. Available in multiple colors.",
    rating: 4,
    reviews: 312,
  },
  {
    id: 7,
    name: "Over-the-Knee Cable Knit",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
    category: "Thigh Socks",
    description: "Elegant cable knit pattern that looks as good as it feels. Perfect for boots or cozy nights in.",
    rating: 5,
    reviews: 78,
  },
  {
    id: 8,
    name: "Marathon Elite",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop",
    category: "Sports Socks",
    description: "Compression socks designed for long-distance runners. Reduces fatigue and improves circulation.",
    rating: 5,
    reviews: 145,
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export const categories = [
  "Cozy Socks",
  "Ankle Socks",
  "Thigh Socks",
  "Sports Socks",
]
