"use client"

import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2, ArrowLeft, Shield, CreditCard } from "lucide-react"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()

  const shippingCost = totalPrice >= 30 ? 0 : 4.99
  const finalTotal = totalPrice + shippingCost

  if (items.length === 0) {
    return (
      <main className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-serif">Your cart is empty</h1>
          <p className="text-muted-foreground">
            Looks like you haven&apos;t added any socks yet. Time to get toasty!
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Shop Now
            </Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-serif">Shopping Cart</h1>
        <Button variant="ghost" size="sm" onClick={clearCart} className="text-muted-foreground">
          Clear all
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 pb-6 border-b border-border"
            >
              <Link href={`/product/${item.id}`} className="w-24 h-24 bg-muted overflow-hidden flex-shrink-0 rounded-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <div>
                    <Link href={`/product/${item.id}`}>
                      <h3 className="font-medium hover:text-primary transition-colors">{item.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card border border-border p-6 sticky top-24 rounded-lg">
            <h2 className="font-medium mb-6">Order Summary</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                {shippingCost === 0 ? (
                  <span className="text-primary font-medium">Free</span>
                ) : (
                  <span>${shippingCost.toFixed(2)}</span>
                )}
              </div>
              {shippingCost > 0 && (
                <p className="text-xs text-muted-foreground">
                  Add ${(30 - totalPrice).toFixed(2)} more for free shipping!
                </p>
              )}
              <div className="border-t border-border pt-4 flex justify-between font-medium">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
            <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/checkout">
                Proceed to Checkout
              </Link>
            </Button>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Secure Checkout
              </span>
              <span className="flex items-center gap-1">
                <CreditCard className="h-3 w-3" />
                Visa/PayPal
              </span>
            </div>
            <Button variant="link" asChild className="w-full mt-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
