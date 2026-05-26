import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-serif">About Our Wool</h1>
            <p className="text-muted-foreground leading-relaxed">
              At Toasty Toes Socks, we believe that comfort starts from the ground up. Our premium wool socks are crafted with care using only the finest materials sourced from sustainable farms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each pair is designed to provide maximum warmth, breathability, and durability. Whether you&apos;re lounging at home, hitting the trails, or running a marathon, we have the perfect sock for every occasion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to quality means your feet will stay toasty and cozy, no matter the weather. Join thousands of happy customers who have discovered the joy of truly comfortable socks.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/">
                Shop Our Collection
              </Link>
            </Button>
          </div>
          <div className="aspect-square rounded-lg overflow-hidden bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
              alt="Wool being processed"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-serif text-center mb-12">Why Choose Our Wool?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="font-medium">Sustainably Sourced</h3>
              <p className="text-sm text-muted-foreground">
                Our wool comes from farms that prioritize animal welfare and environmental responsibility.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🧵</span>
              </div>
              <h3 className="font-medium">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">
                Each sock is crafted with attention to detail, ensuring long-lasting comfort and durability.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="font-medium">Made with Love</h3>
              <p className="text-sm text-muted-foreground">
                Every pair is made by skilled artisans who take pride in their craft.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
