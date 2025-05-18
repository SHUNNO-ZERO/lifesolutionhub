import CategorySlider from "@/components/category-slider"
import FeaturedGrid from "@/components/featured-grid"
import HeroCarousel from "@/components/hero-carousel"
import ProductGrid from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { categories, getProductsByCategory } from "@/lib/data"

export default function Home() {
  const breakfastProducts = getProductsByCategory("breakfast").slice(0, 4)
  const lunchProducts = getProductsByCategory("lunch").slice(0, 4)
  const dinnerProducts = getProductsByCategory("dinner").slice(0, 4)

  return (
    <div className="flex flex-col gap-12 pb-12">
      <FeaturedGrid />
      <HeroCarousel />

      <div className="container px-4 md:px-6">
        <CategorySlider categories={categories} />
      </div>

      <section className="container px-4 md:px-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Breakfast</h2>
          <Button variant="link" className="text-green-600" asChild>
            <a href="/breakfast">View all</a>
          </Button>
        </div>
        <ProductGrid products={breakfastProducts} />
      </section>

      <section className="container px-4 md:px-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Lunch</h2>
          <Button variant="link" className="text-green-600" asChild>
            <a href="/lunch">View all</a>
          </Button>
        </div>
        <ProductGrid products={lunchProducts} />
      </section>

      <section className="container px-4 md:px-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Dinner</h2>
          <Button variant="link" className="text-green-600" asChild>
            <a href="/dinner">View all</a>
          </Button>
        </div>
        <ProductGrid products={dinnerProducts} />
      </section>
    </div>
  )
}
