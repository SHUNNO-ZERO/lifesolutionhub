"use client"

import type { Category } from "@/lib/types"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

export default function CategorySlider({ categories }: { categories: Category[] }) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    updateScrollState()

    // Add resize listener to update scroll state when window size changes
    window.addEventListener("resize", updateScrollState)
    return () => window.removeEventListener("resize", updateScrollState)
  }, [])

  const updateScrollState = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setScrollPosition(scrollLeft)
      setMaxScroll(scrollWidth - clientWidth)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { current } = sliderRef
      const scrollAmount = direction === "left" ? -current.offsetWidth / 2 : current.offsetWidth / 2

      current.scrollBy({ left: scrollAmount, behavior: "smooth" })

      // Update scroll position after animation
      setTimeout(updateScrollState, 500)
    }
  }

  return (
    <div className="relative animate-fade-in">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Categories</h2>

      <div className="relative">
        {isMounted && scrollPosition > 10 && (
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-opacity duration-300 ${
              scrollPosition <= 10 ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:bg-gray-100"
            }`}
            aria-label="Scroll left"
            disabled={scrollPosition <= 10}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <div
          ref={sliderRef}
          className="flex space-x-6 overflow-x-auto pb-6 pt-2 px-2 scrollbar-hide snap-x"
          onScroll={updateScrollState}
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/${category.slug}`}
              className="flex-shrink-0 group snap-start transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48 w-48 sm:h-56 sm:w-56 overflow-hidden rounded-xl shadow-md">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6">
                  <h3 className="text-xl font-bold text-white text-center">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {isMounted && scrollPosition < maxScroll - 10 && (
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-opacity duration-300 ${
              scrollPosition >= maxScroll - 10 ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:bg-gray-100"
            }`}
            aria-label="Scroll right"
            disabled={scrollPosition >= maxScroll - 10}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  )
}
