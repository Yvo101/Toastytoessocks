"use client"

import Link from "next/link"
import { ShoppingCart, Menu, X, Truck, Shield } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const { totalItems } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="bg-primary text-primary-foreground text-center py-2 px-4">
        <p className="text-sm font-medium flex items-center justify-center gap-2">
          <Truck className="h-4 w-4" />
          Free Shipping on orders over $30!
        </p>
      </div>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-serif font-medium tracking-tight">
              Toasty Toes Socks
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Shop
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Our Wool
              </Link>
              <Link href="/track-order" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Track Order
              </Link>
              <Link href="/reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Reviews
              </Link>
              <Link href="/secure-checkout" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                <Shield className="h-3.5 w-3.5" />
                Secure Checkout
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link href="/cart" className="relative">
                <ShoppingCart className="h-5 w-5 text-foreground" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="flex flex-col p-4 gap-4">
              <Link
                href="/shop"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Our Wool
              </Link>
              <Link
                href="/track-order"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Track Order
              </Link>
              <Link
                href="/reviews"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/secure-checkout"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Shield className="h-3.5 w-3.5" />
                Secure Checkout
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
