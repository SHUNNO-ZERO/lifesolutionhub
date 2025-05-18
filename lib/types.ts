export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  readTime: string
}

export interface Order {
  id: string
  date: string
  customer: string
  items: {
    productId: string
    quantity: number
  }[]
  total: number
  status: string
}
