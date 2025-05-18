import AddToCartButton from "@/components/add-to-cart-button"
import ProductReviews from "@/components/product-reviews"
import RelatedProducts from "@/components/related-products"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { products } from "@/lib/data"
import { ArrowLeft, Leaf, ShieldCheck, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  // Get related products from the same category
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="container px-4 py-8 md:py-12 animate-fade-in">
      <Link
        href={`/${product.category}`}
        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-green-600 mb-6 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-4">
            <Badge className="mb-2 bg-green-100 text-green-800 hover:bg-green-200">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Badge>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold mt-2">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Leaf className="h-5 w-5 text-green-600" />
              <span>Organic ingredients</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ShieldCheck className="h-5 w-5 text-green-600" />
              <span>Quality guaranteed</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Truck className="h-5 w-5 text-green-600" />
              <span>Free shipping on orders over $50</span>
            </div>
          </div>

          <AddToCartButton product={product} className="w-full md:w-auto" />

          <Separator className="my-8" />

          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <div className="text-sm text-gray-600 space-y-4">
                <p>
                  {product.description} Our {product.name} is carefully prepared using the freshest ingredients to
                  ensure maximum flavor and nutritional value.
                </p>
                <p>
                  Perfect for those looking to maintain a healthy lifestyle without compromising on taste. Each serving
                  is packed with essential nutrients to fuel your day.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="nutrition" className="mt-4">
              <div className="text-sm text-gray-600">
                <h3 className="font-medium mb-2">Nutrition Facts (per serving)</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between border-b pb-1">
                    <span>Calories</span>
                    <span>320 kcal</span>
                  </li>
                  <li className="flex justify-between border-b pb-1">
                    <span>Protein</span>
                    <span>12g</span>
                  </li>
                  <li className="flex justify-between border-b pb-1">
                    <span>Carbohydrates</span>
                    <span>42g</span>
                  </li>
                  <li className="flex justify-between border-b pb-1">
                    <span>Fat</span>
                    <span>14g</span>
                  </li>
                  <li className="flex justify-between border-b pb-1">
                    <span>Fiber</span>
                    <span>8g</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sodium</span>
                    <span>120mg</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="ingredients" className="mt-4">
              <div className="text-sm text-gray-600">
                <p className="mb-2">All ingredients are organic and sustainably sourced:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Whole grain flour</li>
                  <li>Fresh vegetables</li>
                  <li>Plant-based proteins</li>
                  <li>Cold-pressed oils</li>
                  <li>Natural sweeteners</li>
                  <li>Herbs and spices</li>
                </ul>
                <p className="mt-4 text-xs">
                  Allergen information: May contain traces of nuts, soy, and gluten. Please check with our customer
                  service for detailed allergen information.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <ProductReviews productId={product.id} />
      <RelatedProducts products={relatedProducts} />
    </div>
  )
}
