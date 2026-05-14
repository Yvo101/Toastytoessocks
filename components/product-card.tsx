"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Product } from "@/lib/cart-context"
import { ShoppingCart, Star } from "lucide-react"

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted mb-4 rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {product.category}
        </p>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-foreground hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        {product.rating && (
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < product.rating! ? "fill-primary text-primary" : "text-muted"}`}
              />
            ))}
            {product.reviews && (
              <span className="text-xs text-muted-foreground ml-1">
                ({product.reviews})
              </span>
            )}
          </div>
        )}
        <div className="flex items-center justify-between">
          <p className="text-foreground font-medium">${product.price.toFixed(2)}</p>
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.preventDefault()
              onAddToCart(product)
            }}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}
