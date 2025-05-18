"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useToast } from "@/components/ui/use-toast"
import { Check, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useCart } from "./cart-provider"

export default function CartSidebar({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()
  const { toast } = useToast()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [checkoutComplete, setCheckoutComplete] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleCheckout = () => {
    if (!isMounted) return

    // Simulate checkout process
    setIsCheckingOut(true)

    setTimeout(() => {
      setIsCheckingOut(false)
      setCheckoutComplete(true)

      setTimeout(() => {
        clearCart()
        setCheckoutComplete(false)
        onClose()

        toast({
          title: "Order placed successfully!",
          description: "Thank you for your purchase.",
        })
      }, 1500)
    }, 2000)
  }

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {checkoutComplete ? (
          <div className="flex flex-col items-center justify-center h-[70vh] animate-fade-in">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Order Confirmed!</h3>
            <p className="text-gray-500 text-center mb-6">
              Your order has been placed successfully. You will receive a confirmation email shortly.
            </p>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh] animate-fade-in">
            <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <ShoppingBag className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Button variant="outline" onClick={onClose}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-auto py-6">
              <ul className="space-y-6">
                {cartItems.map((item, index) => (
                  <li
                    key={`${item.product.id}-${index}`}
                    className="flex gap-4 animate-fade-in-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-20 w-20 overflow-hidden rounded-md bg-gray-100">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.product.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </button>
                      </div>
                      <p className="text-sm text-gray-500">${item.product.price.toFixed(2)}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 rounded-full"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Decrease quantity</span>
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7 rounded-full"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Increase quantity</span>
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-6 animate-fade-in-up">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-medium text-lg pt-2">
                  <span>Total</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
              </div>

              <Button
                className="w-full bg-green-600 hover:bg-green-700 relative overflow-hidden"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? (
                  <>
                    <div className="absolute inset-0 bg-green-700 animate-progress"></div>
                    <span className="relative">Processing...</span>
                  </>
                ) : (
                  "Checkout"
                )}
              </Button>

              <Button variant="outline" className="w-full mt-2" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
