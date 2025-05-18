import type { BlogPost, Category, Order, Product } from "./types"

export const products: Product[] = [
  {
    id: "1",
    name: "Avocado Toast",
    description: "Whole grain toast topped with fresh avocado, cherry tomatoes, and microgreens",
    price: 9.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "breakfast",
    stock: 50,
  },
  {
    id: "2",
    name: "Acai Bowl",
    description: "Blended acai berries topped with granola, fresh fruit, and honey",
    price: 12.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "breakfast",
    stock: 30,
  },
  {
    id: "3",
    name: "Overnight Oats",
    description: "Rolled oats soaked overnight with almond milk, chia seeds, and berries",
    price: 8.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "breakfast",
    stock: 45,
  },
  {
    id: "4",
    name: "Green Smoothie",
    description: "Spinach, kale, banana, and pineapple blended with coconut water",
    price: 7.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "breakfast",
    stock: 60,
  },
  {
    id: "5",
    name: "Protein Pancakes",
    description: "Fluffy pancakes made with protein powder, topped with fresh berries",
    price: 11.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "breakfast",
    stock: 25,
  },
  {
    id: "6",
    name: "Quinoa Salad",
    description: "Quinoa with roasted vegetables, feta cheese, and lemon vinaigrette",
    price: 13.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "lunch",
    stock: 40,
  },
  {
    id: "7",
    name: "Chicken Wrap",
    description: "Grilled chicken with avocado, lettuce, and chipotle mayo in a whole wheat wrap",
    price: 10.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "lunch",
    stock: 35,
  },
  {
    id: "8",
    name: "Buddha Bowl",
    description: "Brown rice, roasted sweet potatoes, chickpeas, kale, and tahini dressing",
    price: 14.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "lunch",
    stock: 30,
  },
  {
    id: "9",
    name: "Mediterranean Salad",
    description: "Mixed greens with cucumber, tomatoes, olives, feta, and Greek dressing",
    price: 12.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "lunch",
    stock: 45,
  },
  {
    id: "10",
    name: "Veggie Burger",
    description: "Plant-based patty with lettuce, tomato, and vegan mayo on a whole grain bun",
    price: 13.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "lunch",
    stock: 25,
  },
  {
    id: "11",
    name: "Salmon Bowl",
    description: "Grilled salmon with brown rice, steamed broccoli, and ginger sauce",
    price: 16.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "dinner",
    stock: 20,
  },
  {
    id: "12",
    name: "Vegetable Stir Fry",
    description: "Mixed vegetables stir-fried with tofu and served with brown rice",
    price: 14.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "dinner",
    stock: 30,
  },
  {
    id: "13",
    name: "Lentil Curry",
    description: "Spiced lentils with coconut milk, served with brown rice and cilantro",
    price: 13.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "dinner",
    stock: 35,
  },
  {
    id: "14",
    name: "Zucchini Pasta",
    description: "Spiralized zucchini with cherry tomatoes, basil, and olive oil",
    price: 12.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "dinner",
    stock: 40,
  },
  {
    id: "15",
    name: "Stuffed Bell Peppers",
    description: "Bell peppers stuffed with quinoa, black beans, corn, and spices",
    price: 15.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "dinner",
    stock: 25,
  },
]

export const categories: Category[] = [
  {
    id: "1",
    name: "Breakfast",
    slug: "breakfast",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "2",
    name: "Lunch",
    slug: "lunch",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: "3",
    name: "Dinner",
    slug: "dinner",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Benefits of a Plant-Based Diet",
    excerpt:
      "Discover how incorporating more plant-based foods into your diet can improve your health and the environment.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "May 15, 2023",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Meal Prep Tips for Busy Professionals",
    excerpt:
      "Learn how to efficiently meal prep for the week to save time and maintain a healthy diet even with a busy schedule.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "June 2, 2023",
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "The Importance of Hydration",
    excerpt:
      "Understand why staying hydrated is crucial for your overall health and how to ensure you're drinking enough water daily.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "July 10, 2023",
    readTime: "4 min read",
  },
  {
    id: "4",
    title: "Sustainable Eating Practices",
    excerpt:
      "Explore how your food choices impact the environment and learn sustainable eating practices you can adopt.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "August 5, 2023",
    readTime: "6 min read",
  },
  {
    id: "5",
    title: "Mindful Eating: A Guide",
    excerpt: "Learn about the practice of mindful eating and how it can transform your relationship with food.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "September 20, 2023",
    readTime: "8 min read",
  },
  {
    id: "6",
    title: "Seasonal Eating: Why It Matters",
    excerpt:
      "Discover the benefits of eating seasonally and how it can enhance both your health and culinary experiences.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 12, 2023",
    readTime: "5 min read",
  },
]

export const mockOrders: Order[] = [
  {
    id: "1001",
    date: "May 10, 2023",
    customer: "John Doe",
    items: [
      { productId: "1", quantity: 2 },
      { productId: "6", quantity: 1 },
    ],
    total: 33.97,
    status: "Delivered",
  },
  {
    id: "1002",
    date: "June 15, 2023",
    customer: "Jane Smith",
    items: [
      { productId: "3", quantity: 1 },
      { productId: "8", quantity: 1 },
      { productId: "11", quantity: 1 },
    ],
    total: 40.97,
    status: "Delivered",
  },
  {
    id: "1003",
    date: "July 22, 2023",
    customer: "Mike Johnson",
    items: [
      { productId: "2", quantity: 2 },
      { productId: "7", quantity: 1 },
    ],
    total: 36.97,
    status: "Delivered",
  },
  {
    id: "1004",
    date: "August 5, 2023",
    customer: "Sarah Williams",
    items: [
      { productId: "4", quantity: 1 },
      { productId: "9", quantity: 1 },
      { productId: "13", quantity: 1 },
    ],
    total: 34.97,
    status: "Delivered",
  },
  {
    id: "1005",
    date: "September 18, 2023",
    customer: "David Brown",
    items: [
      { productId: "5", quantity: 1 },
      { productId: "10", quantity: 1 },
      { productId: "15", quantity: 1 },
    ],
    total: 41.97,
    status: "Processing",
  },
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}
