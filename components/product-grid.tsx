"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { useCart, Product } from "@/lib/cart-context"
import { products } from "@/lib/products"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export function ProductGrid() {
  const { addToCart } = useCart()
  const [open, setOpen] = useState(false)
  const [addedProduct, setAddedProduct] = useState<Product | null>(null)

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    setAddedProduct(product)
    setOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md bg-card border border-border">
          <DialogHeader>
            <DialogTitle className="text-xl text-center text-card-foreground flex items-center justify-center gap-2">
              <CheckCircle className="h-6 w-6 text-accent" />
              Added to Cart
            </DialogTitle>
          </DialogHeader>
          <div className="p-4 space-y-4">
            {addedProduct && (
              <p className="text-muted-foreground text-center">
                <span className="font-medium text-foreground">{addedProduct.name}</span> has been added to your cart.
              </p>
            )}
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
    </>
  )
}
