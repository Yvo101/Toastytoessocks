import { Shield, Lock, CreditCard, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SecureCheckoutPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-serif mb-4">Secure Checkout</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Your security is our top priority. Learn how we protect your information during checkout.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Lock className="h-6 w-6 text-primary" />
            <h2 className="text-lg font-medium">SSL Encryption</h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            All data transmitted between your browser and our servers is encrypted using 256-bit SSL 
            encryption. This is the same level of security used by banks and financial institutions.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-3">
            <CreditCard className="h-6 w-6 text-primary" />
            <h2 className="text-lg font-medium">Secure Payments</h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We never store your full credit card details. All payments are processed through PCI-DSS 
            compliant payment processors to ensure your financial information stays safe.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-primary" />
            <h2 className="text-lg font-medium">Privacy Protected</h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Your personal information is never sold or shared with third parties. We only use your 
            data to process orders and improve your shopping experience.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-primary" />
            <h2 className="text-lg font-medium">Money-Back Guarantee</h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Not satisfied with your purchase? We offer a 30-day money-back guarantee on all orders. 
            No questions asked returns for your peace of mind.
          </p>
        </div>
      </div>

      <div className="bg-secondary rounded-lg p-8 text-center">
        <h2 className="text-xl font-serif mb-4">Ready to Shop?</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Browse our collection of premium wool socks and checkout with confidence.
        </p>
        <Button asChild size="lg">
          <Link href="/shop">Shop Now</Link>
        </Button>
      </div>
    </main>
  )
}
