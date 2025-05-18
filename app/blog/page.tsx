import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { blogPosts } from "@/lib/data"
import { CalendarIcon, Clock } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <p className="mb-8 text-gray-600 max-w-3xl">
        Discover tips, recipes, and insights for a healthier lifestyle. Our blog is dedicated to helping you make
        informed choices about nutrition and wellness.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription className="flex items-center gap-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  {post.readTime}
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
