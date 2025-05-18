"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import type { Product } from "@/lib/types"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useCart } from "./cart-provider"

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [isHovered, setIsHovered] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsAdding(true)

    setTimeout(() => {
      addToCart(product)
      setIsAdding(false)

      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
        duration: 2000,
      })
    }, 300)
  }

  return (
    <Link
      href={`/product/${product.id}`}
      className="group relative overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium group-hover:text-green-600 transition-colors">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-medium">${product.price.toFixed(2)}</span>
          <Button
            size="sm"
            className={`bg-green-600 hover:bg-green-700 transition-all ${isAdding ? "scale-105" : ""}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            <ShoppingBag className={`h-4 w-4 ${isAdding ? "animate-bounce" : ""}`} />
            <span className="sr-only md:not-sr-only md:ml-2">Add</span>
          </Button>
        </div>
      </div>
      <div
        className={`absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full transition-transform duration-300 ${
          isHovered ? "translate-x-0" : "translate-x-12"
        }`}
      >
        In Stock
      </div>
    </Link>
  )
}
