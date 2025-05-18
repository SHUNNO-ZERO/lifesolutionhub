"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Healthy Breakfast Options",
    description: "Start your day right with our nutritious breakfast selection",
    cta: "Shop Breakfast",
    link: "/breakfast",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Fresh Lunch Ideas",
    description: "Energize your afternoon with our fresh and delicious lunch options",
    cta: "Shop Lunch",
    link: "/lunch",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=1200",
    title: "Wholesome Dinners",
    description: "End your day with our wholesome and satisfying dinner meals",
    cta: "Shop Dinner",
    link: "/dinner",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  const prevSlide = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  useEffect(() => {
    setIsMounted(true)

    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative min-w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex flex-col items-start justify-center text-left p-8 md:p-16">
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-xl ${isMounted ? "animate-fade-in-up" : ""}`}
                style={isMounted ? { animationDelay: "0.2s" } : undefined}
              >
                {slide.title}
              </h2>
              <p
                className={`text-lg md:text-xl text-white max-w-xl mb-6 ${isMounted ? "animate-fade-in-up" : ""}`}
                style={isMounted ? { animationDelay: "0.4s" } : undefined}
              >
                {slide.description}
              </p>
              <Button
                size="lg"
                className={`bg-green-600 hover:bg-green-700 ${isMounted ? "animate-fade-in-up" : ""}`}
                style={isMounted ? { animationDelay: "0.6s" } : undefined}
                asChild
              >
                <a href={slide.link}>{slide.cta}</a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md transition-transform hover:scale-110 hover:bg-white"
        aria-label="Previous slide"
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md transition-transform hover:scale-110 hover:bg-white"
        aria-label="Next slide"
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full transition-all ${
              currentSlide === index ? "bg-white w-8" : "bg-white/50 w-4"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
