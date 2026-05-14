"use client"

import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Shield, CreditCard, Lock } from "lucide-react"

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()

  const shippingCost = totalPrice >= 30 ? 0 : 4.99
  const finalTotal = totalPrice + shippingCost

  if (items.length === 0) {
    return (
      <main className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-serif">Your cart is empty</h1>
          <p className="text-muted-foreground">
            Add some cozy socks to your cart before checking out!
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your order! This is a demo checkout.")
    clearCart()
  }

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
      <Link
        href="/cart"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Cart
      </Link>

      <h1 className="text-3xl font-serif mb-10">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-medium text-lg">Contact Information</h2>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" required />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-medium text-lg">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="123 Main St" required />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="City" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="State" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP Code</Label>
                <Input id="zip" placeholder="12345" required />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-medium text-lg">Payment Details</h2>
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" required />
              </div>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Lock className="h-4 w-4 mr-2" />
            Place Order - ${finalTotal.toFixed(2)}
          </Button>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              Secure Checkout
            </span>
            <span className="flex items-center gap-1">
              <CreditCard className="h-4 w-4" />
              SSL Encrypted
            </span>
          </div>
        </form>

        <div>
          <div className="bg-card border border-border p-6 rounded-lg sticky top-24">
            <h2 className="font-medium mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3 border-t border-border pt-4 text-sm">
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
              <div className="flex justify-between font-medium text-base pt-2 border-t border-border">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
