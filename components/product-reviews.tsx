"use client"

import type React from "react"
import { useId } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Star } from "lucide-react"
import { useState } from "react"

// Mock reviews data
const mockReviews = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2 months ago",
    comment:
      "Absolutely love this! The quality is exceptional and it tastes amazing. Will definitely be ordering again.",
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "1 month ago",
    comment: "Great product, very fresh and flavorful. The only reason I'm not giving 5 stars is the portion size.",
  },
  {
    id: "3",
    name: "Emma Williams",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "3 weeks ago",
    comment: "This has become a staple in my weekly meal plan. Healthy, delicious, and convenient!",
  },
]

interface ProductReviewsProps {
  productId: string
}

export default function ProductReviews({ productId }: ProductReviewsProps) {
  const [reviewText, setReviewText] = useState("")
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const { toast } = useToast()
  const reviewId = useId()

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()

    if (rating === 0) {
      toast({
        title: "Please select a rating",
        description: "You must select a star rating to submit your review.",
        variant: "destructive",
      })
      return
    }

    if (reviewText.trim() === "") {
      toast({
        title: "Please enter a review",
        description: "You must write a review comment to submit.",
        variant: "destructive",
      })
      return
    }

    // In a real app, we would submit the review to an API
    toast({
      title: "Review submitted",
      description: "Thank you for your feedback!",
    })

    // Reset form
    setReviewText("")
    setRating(0)
  }

  return (
    <section className="mt-16 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {mockReviews.map((review, index) => (
              <Card key={`${reviewId}-${index}`} className="overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{review.name}</h4>
                        <div className="flex items-center mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="mt-4 text-gray-600">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Write a Review</h3>
              <form onSubmit={handleSubmitReview}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className="focus:outline-none"
                        onClick={() => setRating(i + 1)}
                        onMouseEnter={() => setHoveredRating(i + 1)}
                        onMouseLeave={() => setHoveredRating(0)}
                      >
                        <Star
                          className={`h-6 w-6 transition-colors ${
                            i < (hoveredRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="review" className="block text-sm font-medium mb-2">
                    Your Review
                  </label>
                  <Textarea
                    id="review"
                    placeholder="Share your experience with this product..."
                    rows={4}
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-8" />
    </section>
  )
}
