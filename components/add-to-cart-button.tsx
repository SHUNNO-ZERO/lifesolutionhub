"use client"

import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"
import { ShoppingBag } from "lucide-react"
import { useState } from "react"
import { useCart } from "./cart-provider"

interface AddToCartButtonProps {
  product: Product
  className?: string
}

export default function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)

    // Add the product to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }

    // Reset and show animation
    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex items-center border rounded-md">
        <button
          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="w-10 text-center">{quantity}</span>
        <button
          className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors"
          onClick={() => setQuantity(quantity + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <Button
        onClick={handleAddToCart}
        className={`bg-green-600 hover:bg-green-700 transition-all transform ${isAdding ? "scale-105" : ""} ${className}`}
        disabled={isAdding}
      >
        <ShoppingBag className={`mr-2 h-4 w-4 ${isAdding ? "animate-bounce" : ""}`} />
        {isAdding ? "Adding..." : "Add to Cart"}
      </Button>
    </div>
  )
}
