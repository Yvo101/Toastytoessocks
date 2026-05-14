"use client"

import { ProductGrid } from "@/components/product-grid"

export default function ShopPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-serif mb-4">Our Collection</h1>
        <p className="text-muted-foreground max-w-2xl">
          Browse our full range of premium wool socks. From cozy loungewear to performance sports socks, 
          we have the perfect pair for every occasion.
        </p>
      </div>
      <div className="flex items-center justify-between mb-8">
        <span className="text-sm text-muted-foreground">8 products</span>
      </div>
      <ProductGrid />
    </main>
  )
}
