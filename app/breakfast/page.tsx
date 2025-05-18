import ProductGrid from "@/components/product-grid"
import { getProductsByCategory } from "@/lib/data"

export default function BreakfastPage() {
  const breakfastProducts = getProductsByCategory("breakfast")

  return (
    <div className="container px-4 py-12 md:px-6">
      <h1 className="mb-8 text-3xl font-bold">Breakfast</h1>
      <p className="mb-8 text-gray-600 max-w-3xl">
        Start your day right with our nutritious breakfast options. From energizing smoothie bowls to hearty oatmeal, we
        have everything you need for a healthy morning.
      </p>
      <ProductGrid products={breakfastProducts} />
    </div>
  )
}
