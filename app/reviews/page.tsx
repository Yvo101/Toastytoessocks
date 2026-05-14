import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    date: "November 28, 2024",
    title: "Best socks I&apos;ve ever owned!",
    content: "These wool socks are incredible. My feet have never been warmer during winter. I&apos;ve already ordered three more pairs!",
    product: "The Ultimate Winter Woolie",
  },
  {
    id: 2,
    name: "James K.",
    rating: 5,
    date: "November 25, 2024",
    title: "Perfect for marathon training",
    content: "The Marathon Elite socks have completely changed my running game. No more blisters and my feet stay dry the entire run.",
    product: "Marathon Elite",
  },
  {
    id: 3,
    name: "Emily R.",
    rating: 4,
    date: "November 20, 2024",
    title: "Love the thigh-highs!",
    content: "These are so cozy and they actually stay up all day. Perfect for wearing with boots. Would love more color options!",
    product: "Thigh-High Warmers",
  },
  {
    id: 4,
    name: "Michael T.",
    rating: 5,
    date: "November 18, 2024",
    title: "Great everyday socks",
    content: "The ankle socks are now my go-to for everyday wear. Comfortable, breathable, and they last wash after wash.",
    product: "Classic Ankle Comfort",
  },
  {
    id: 5,
    name: "Lisa P.",
    rating: 5,
    date: "November 15, 2024",
    title: "Fuzzy heaven!",
    content: "The Fireside Fuzzy socks are like walking on clouds! The non-slip grips are a great safety feature too.",
    product: "Fireside Fuzzy",
  },
  {
    id: 6,
    name: "David W.",
    rating: 5,
    date: "November 10, 2024",
    title: "Fast shipping, great quality",
    content: "Ordered on Monday, received by Wednesday. The socks exceeded my expectations. Will definitely be ordering more!",
    product: "Pro Performance Runner",
  },
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
          {averageRating.toFixed(1)} out of 5 based on {reviews.length} reviews
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
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              {review.product}
            </p>
            <h3 className="font-medium mb-2">{review.title}</h3>
            <p className="text-muted-foreground">{review.content}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
