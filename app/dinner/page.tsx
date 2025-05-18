import ProductGrid from "@/components/product-grid"
import { getProductsByCategory } from "@/lib/data"

export default function DinnerPage() {
  const dinnerProducts = getProductsByCategory("dinner")

  return (
    <div className="container px-4 py-12 md:px-6">
      <h1 className="mb-8 text-3xl font-bold">Dinner</h1>
      <p className="mb-8 text-gray-600 max-w-3xl">
        End your day with our wholesome dinner options. From plant-based proteins to sustainably sourced seafood, our
        dinner selections are designed to nourish your body and satisfy your taste buds.
      </p>
      <ProductGrid products={dinnerProducts} />
    </div>
  )
}
