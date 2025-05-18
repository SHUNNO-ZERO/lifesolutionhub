import ProductGrid from "@/components/product-grid"
import { getProductsByCategory } from "@/lib/data"

export default function LunchPage() {
  const lunchProducts = getProductsByCategory("lunch")

  return (
    <div className="container px-4 py-12 md:px-6">
      <h1 className="mb-8 text-3xl font-bold">Lunch</h1>
      <p className="mb-8 text-gray-600 max-w-3xl">
        Fuel your day with our delicious and nutritious lunch options. From protein-packed salads to hearty grain bowls,
        we have meals that will keep you energized all afternoon.
      </p>
      <ProductGrid products={lunchProducts} />
    </div>
  )
}
