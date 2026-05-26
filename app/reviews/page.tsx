import { Star } from "lucide-react"

// Reviews strictly sorted by date in descending order (May 24, 2026 down to April 27, 2026)
const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    date: "May 24, 2026",
    title: "Like a gentle hug for your feet!",
    content: "These Snocks are designed for ultimate everyday comfort. They provide that perfect balance of softness and support, ensuring my feet feel happy all day long. I've already ordered three more pairs!",
    product: "Snocks",
    reviewCount: "128 reviews",
  },
  {
    id: 2,
    name: "James K.",
    rating: 5,
    date: "May 22, 2026",
    title: "Perfect for intense workouts",
    content: "Spocks athletic socks are built to support your every move. They offer enhanced cushioning in key areas and a snug fit that stays in place ensuring your feet are comfortable and protected during intense workouts.",
    product: "Spocks",
    reviewCount: "203 reviews",
  },
  {
    id: 3,
    name: "Robert H.",
    rating: 5,
    date: "May 19, 2026",
    title: "Unbelievably soft",
    content: "These Snocks are designed for ultimate everyday comfort, like a gentle hug for your feet. They provide that perfect balance of softness and support, ensuring your feet feel happy all day long.",
    product: "Snocks",
    reviewCount: "128 reviews",
  },
  {
    id: 4,
    name: "Emily R.",
    rating: 4,  
    date: "May 18, 2026",
    title: "Light, airy, and beautiful",
    content: "Inspired by the gentle sway of willow branches, these socks offer a naturally soft and breathable comfort. They're designed to feel light and airy on your feet, providing a soothing sensation that makes them perfect for a relaxed day out.",
    product: "Willow",
    reviewCount: "312 reviews",
  },
  {
    id: 5,
    name: "Michael T.",
    rating: 5,
    date: "May 15, 2026",
    title: "Great low-profile comfort",
    content: "These Charme ankle socks offer a touch of style and comfort. Cut low to be with your footwear, they provide a smooth, comfortable layer that adds a hint of comfiness to any casual or athletic without being too much.",
    product: "Charme",
    reviewCount: "145 reviews",
  },
  {
    id: 6,
    name: "Linda T.",
    rating: 5,
    date: "May 14, 2026",
    title: "No more slipping during runs",
    content: "Spocks athletic socks are built to support your every move. They offer enhanced cushioning in key areas and a snug fit that stays in place ensuring your feet are comfortable and protected.",
    product: "Spocks",
    reviewCount: "203 reviews",
  },
  {
    id: 7,
    name: "Sophia W.",
    rating: 5,
    date: "May 11, 2026",
    title: "Perfect for a relaxed day out",
    content: "Inspired by the gentle sway of willow branches, these socks offer a naturally soft and breathable comfort. They're designed to feel light and airy on your feet, providing a soothing sensation.",
    product: "Willow",
    reviewCount: "312 reviews",
  },
  {
    id: 8,
    name: "Lisa P.",
    rating: 5,
    date: "May 10, 2026",
    title: "Pure lounge perfection",
    content: "Made with the plushest materials, they offer a unique level of softness and warmth, making them ideal for those moments. The Cozy Cloud socks feel incredibly premium.",
    product: "Cozy Cloud",
    reviewCount: "56 reviews",
  },
  {
    id: 9,
    name: "Daniel C.",
    rating: 4,
    date: "May 09, 2026",
    title: "Invisible layer of comfort",
    content: "These Charme ankle socks offer a touch of style and comfort. Cut low to be with your footwear, they provide a smooth, comfortable layer that adds a hint of comfiness to any casual or athletic setup.",
    product: "Charme",
    reviewCount: "145 reviews",
  },
  {
    id: 10,
    name: "David W.",
    rating: 5,
    date: "May 06, 2026",
    title: "Amazing active recovery & support",
    content: "Healove athletic socks combine the care your feet deserve with the demands of an active lifestyle. These socks provide targeted support and compression to aid in recovery and boost performance, all while feeling incredibly comfortable and take care of your feet.",
    product: "Healove",
    reviewCount: "78 reviews",
  },
  {
    id: 11,
    name: "Jessica L.",
    rating: 5,
    date: "May 04, 2026",
    title: "The perfect stylish statement",
    content: "Socsation crew socks are all about making a stylish statement without sacrificing comfort. They hit that perfect mid-calf height, offering a secure and comfortable fit that pairs well with a wide range of outfits, from casual jeans to your favorite athleisure wear.",
    product: "Socsation",
    reviewCount: "89 reviews",
  },
  {
    id: 12,
    name: "Amanda K.",
    rating: 5,
    date: "May 03, 2026",
    title: "Incredible softness and warmth",
    content: "Made with the plushest materials, they offer a unique level of softness and warmth, making them ideal for those moments where you just want to sit back and relax.",
    product: "Cozy Cloud",
    reviewCount: "56 reviews",
  },
  {
    id: 13,
    name: "Marcus V.",
    rating: 4,
    date: "May 02, 2026",
    title: "Reliable and highly durable",
    content: "Hastey crew socks deliver reliable comfort and durability. They provide a secure fit and enough cushioning for daily activities, ensuring your feet are well supported.",
    product: "Hastey",
    reviewCount: "167 reviews",
  },
  {
    id: 14,
    name: "Elena R.",
    rating: 5,
    date: "April 29, 2026",
    title: "Stays secure through long shifts",
    content: "Hastey crew socks deliver reliable comfort and durability. They provide a secure fit and enough cushioning for daily activities, ensuring your feet are well supported through long shifts.",
    product: "Hastey",
    reviewCount: "167 reviews",
  },
  {
    id: 15,
    name: "Brian M.",
    rating: 5,
    date: "April 28, 2026",
    title: "Boosts performance and recovery",
    content: "Healove athletic socks combine the care your feet deserve with the demands of an active lifestyle. These socks provide targeted support and compression to aid in recovery and boost performance.",
    product: "Healove",
    reviewCount: "78 reviews",
  },
  {
    id: 16,
    name: "Rachel G.",
    rating: 5,
    date: "April 27, 2026",
    title: "Love the mid-calf height",
    content: "Socsation crew socks are all about making a stylish statement without sacrificing comfort. They hit that perfect mid-calf height, offering a secure and comfortable fit that pairs well with a wide range of outfits.",
    product: "Socsation",
    reviewCount: "89 reviews",
  }
]

export default function ReviewsPage() {
  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif mb-4">Customer Reviews</h1>
        <div className="flex items-center justify-center gap-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-6 w-6 ${i < Math.round(averageRating) ? "fill-primary text-primary" : "text-muted"}`}
            />
          ))}
        </div>
        <p className="text-muted-foreground">
          {averageRating.toFixed(1)} out of 5 based on global product ratings
        </p>
      </div>

      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-medium">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted"}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                {review.product}
              </p>
              <p className="text-xs text-muted-foreground italic">
                ({review.reviewCount})
              </p>
            </div>
            <h3 className="font-medium mb-2">{review.title}</h3>
            <p className="text-muted-foreground">{review.content}</p>
          </div>
        ))}
      </div>
    </main>
  )
}