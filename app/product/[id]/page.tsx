"use client"

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { use, useState } from "react"
import { useCart } from "@/lib/cart-context"
import { getProductById, products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Minus, Plus, ShoppingCart, Star, CheckCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = getProductById(parseInt(id))
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [open, setOpen] = useState(false)

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    setOpen(true)
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3)

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-serif mb-4">{product.name}</h1>
              {product.rating && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < product.rating! ? "fill-primary text-primary" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  {product.reviews && (
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  )}
                </div>
              )}
              <p className="text-2xl font-medium">${product.price.toFixed(2)}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            </div>

            <div className="border-t border-border pt-6 space-y-3">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="text-primary">✓</span> Free shipping on orders over $30
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="text-primary">✓</span> 30-day return policy
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="text-primary">✓</span> Secure checkout
              </p>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-serif mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/product/${p.id}`} className="group">
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-muted-foreground">${p.price.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md bg-card border border-border">
          <DialogHeader>
            <DialogTitle className="text-xl text-center text-card-foreground flex items-center justify-center gap-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              Added to Cart
            </DialogTitle>
          </DialogHeader>
          <div className="p-4 space-y-4">
            <p className="text-muted-foreground text-center">
              <span className="font-medium text-foreground">{product.name}</span> ({quantity}) has been added to your cart.
            </p>
            <DialogDescription className="sr-only">
              Product added to cart successfully
            </DialogDescription>
            <div className="flex flex-col gap-3 pt-2">
              <Button
                onClick={() => setOpen(false)}
                variant="outline"
                className="w-full"
              >
                Continue Shopping
              </Button>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/cart">
                  Go to Cart
                </Link>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  )
}
