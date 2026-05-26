import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Instagram, Facebook, Heart, Leaf, Award } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-balance">
                Stay Toasty,
                <br />
                Stay Cozy.
              </h1>
              <p className="text-muted-foreground text-lg max-w-md text-pretty leading-relaxed">
                Say goodbye to cold feet! Our Socks are made with super-soft wool to keep you warm all winter/rainy season. Perfect for lounging or snowy adventures.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/shop">
                  Shop Now
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=800&h=800&fit=crop"
                alt="Person wearing cozy wool socks by a fire"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Mission</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            At Toasty Toes Socks, we believe everyone deserves warm, comfortable feet. 
            We craft premium wool socks that combine timeless quality with modern comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
              <Heart className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-serif">Crafted with Care</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every pair is made with attention to detail, ensuring maximum comfort and durability 
              that lasts through countless wears and washes.
            </p>
          </div>

          <div className="text-center space-y-4 p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
              <Leaf className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-serif">Sustainably Sourced</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our premium wool comes from ethically-raised sheep on family farms. 
              We prioritize sustainable practices in every step of production.
            </p>
          </div>

          <div className="text-center space-y-4 p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full">
              <Award className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-serif">Quality Guaranteed</h3>
            <p className="text-muted-foreground leading-relaxed">
              We stand behind every pair. If you are not completely satisfied, 
              we offer a hassle-free 30-day return policy.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                alt="Premium wool material close-up"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif">Why Choose Our Wool?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our socks are crafted from 100% premium Merino wool, known for its exceptional 
                softness, breathability, and natural temperature regulation.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5" />
                  <span className="text-muted-foreground">Naturally moisture-wicking to keep feet dry</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5" />
                  <span className="text-muted-foreground">Odor-resistant for all-day freshness</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5" />
                  <span className="text-muted-foreground">Temperature regulating in hot and cold weather</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5" />
                  <span className="text-muted-foreground">Hypoallergenic and gentle on sensitive skin</span>
                </li>
              </ul>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to Stay Cozy?</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Browse our collection of premium wool socks and find your perfect pair today.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/shop">Browse Collection</Link>
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-serif text-lg">Toasty Toesies</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Keeping your feet cozy since 2024. Premium wool socks for every occasion.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-sm">Shop</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Shop All
                </Link>
                <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cozy Socks
                </Link>
                <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sports Socks
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-sm">Help</h4>
              <nav className="flex flex-col gap-2">
                <Link href="/track-order" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Track Order
                </Link>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Our Wool
                </Link>
                <Link href="/reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Reviews
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-sm">Trust & Security</h4>
              <Link href="/secure-checkout" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Shield className="h-4 w-4" />
                Secure Checkout
              </Link>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              2026 Toasty Toes Sock Co. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
