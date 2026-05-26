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
    image: "https://kommodo.ai/i/5JPi7VUCtqEr6ERqpQ4v",
    category: "Crew Socks",
    description: "Socsation crew socks are all about making a stylish statement without sacrificing comfort. They hit that perfect mid-calf height, offering a secure and comfortable fit that pairs well with a wide range of outfits, from casual jeans to your favorite athleisure wear.",
    rating: 4,
    reviews: 89,
  },
  {
    id: 3,
    name: "Cozy Cloud",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1579170053380-58064b2dee67?w=400&h=400&fit=crop",
    category: "Crew Socks",
    description: "Made with the plushest materials, they offer a unique level of softness and warmth, making them ideal for those moments.",
    rating: 5,
    reviews: 56,
  },
  {
    id: 4,
    name: "Spocks",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&h=400&fit=crop",
    category: "Crew Socks",
    description: "Spocks athletic socks are built to support your every move. They offer enhanced cushioning in key areas and a snug fit that stays in place ensuring your feet are comfortable and protected during intense workouts.",
    rating: 5,
    reviews: 203,
  },
  {
    id: 5,
    name: "Hastey",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=400&fit=crop",
    category: "Crew Socks",
    description: "Hastey crew socks deliver reliable comfort and durability. They provide a secure fit and enough cushioning for daily activities, ensuring your feet are well supported.",
    rating: 5,
    reviews: 167,
  },
  {
    id: 6,
    name: "Willow",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?w=400&h=400&fit=crop",
    category: "Crew Socks",
    description: "Inspired by the gentle sway of willow branches, these socks offer a naturally soft and breathable comfort. They're designed to feel light and airy on your feet, providing a soothing sensation that makes them perfect for a relaxed day out.",
    rating: 4,
    reviews: 312,
  },
  {
    id: 7,
    name: "Healove",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
    category: "Crew Socks",
    description: "Healove athletic socks combine the care your feet deserve with the demands of an active lifestyle. These socks provide targeted support and compression to aid in recovery and boost performance, all while feeling incredibly comfortable and take care of your feet.",
    rating: 5,
    reviews: 78,
  },
  {
    id: 8,
    name: "Charme",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop",
    category: "Ankle Socks",
    description: "These Charme ankle socks offer a touch of style and comfort. Cut low to be with your footwear, they provide a smooth, comfortable layer that adds a hint of comfiness to any casual or athletic without being too much.",
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