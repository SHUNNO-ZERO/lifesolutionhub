import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FeaturedGrid() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-12 gap-4 px-4 pt-8 md:px-6">
      <Link
        href="/breakfast"
        className="relative overflow-hidden rounded-lg group md:col-span-6 lg:col-span-8 animate-fade-in"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="relative aspect-[4/3] md:aspect-[16/9]">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Breakfast options"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col items-start justify-end p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Breakfast Essentials</h2>
            <p className="text-white/90 mb-4 max-w-md hidden md:block">
              Start your day right with our nutritious and delicious breakfast options
            </p>
            <Button
              variant="outline"
              className="bg-white/20 text-white border-white hover:bg-white hover:text-black transition-colors"
            >
              Explore <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Link>

      <div className="md:col-span-6 lg:col-span-4 grid grid-cols-1 gap-4">
        <Link
          href="/lunch"
          className="relative overflow-hidden rounded-lg group animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative aspect-[4/3]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Lunch options"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col items-start justify-end p-6">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Lunch Favorites</h2>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/20 text-white border-white hover:bg-white hover:text-black transition-colors"
              >
                View All
              </Button>
            </div>
          </div>
        </Link>

        <Link
          href="/dinner"
          className="relative overflow-hidden rounded-lg group animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative aspect-[4/3]">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Dinner options"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col items-start justify-end p-6">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Dinner Collections</h2>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/20 text-white border-white hover:bg-white hover:text-black transition-colors"
              >
                View All
              </Button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
