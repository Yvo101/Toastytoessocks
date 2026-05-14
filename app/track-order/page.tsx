"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Package, Truck, CheckCircle, Search } from "lucide-react"

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [tracked, setTracked] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (orderNumber) {
      setTracked(true)
    }
  }

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif mb-4">Track Your Order</h1>
        <p className="text-muted-foreground">
          Enter your order number to see the status of your cozy socks delivery.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 mb-12">
        <div className="space-y-2">
          <Label htmlFor="orderNumber">Order Number</Label>
          <div className="flex gap-4">
            <Input
              id="orderNumber"
              placeholder="e.g., TT-12345"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Search className="h-4 w-4 mr-2" />
              Track
            </Button>
          </div>
        </div>
      </form>

      {tracked && (
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm text-muted-foreground">Order Number</p>
              <p className="font-medium">{orderNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Estimated Delivery</p>
              <p className="font-medium">Dec 15, 2024</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1 pb-6 border-l-2 border-primary ml-5 pl-8 -mt-1">
                <p className="font-medium">Order Confirmed</p>
                <p className="text-sm text-muted-foreground">Dec 10, 2024 - 2:30 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Package className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1 pb-6 border-l-2 border-primary ml-5 pl-8 -mt-1">
                <p className="font-medium">Shipped</p>
                <p className="text-sm text-muted-foreground">Dec 11, 2024 - 10:15 AM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-muted-foreground">Out for Delivery</p>
                <p className="text-sm text-muted-foreground">Estimated: Dec 15, 2024</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-8 text-center">
            This is a demo tracking page. In production, this would connect to a real shipping API.
          </p>
        </div>
      )}

      {!tracked && (
        <div className="text-center text-muted-foreground">
          <p>Can&apos;t find your order number? Check your confirmation email or contact us.</p>
        </div>
      )}
    </main>
  )
}
