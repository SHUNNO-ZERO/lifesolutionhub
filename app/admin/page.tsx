"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { mockOrders, products } from "@/lib/data"
import { BarChart3, Package, Search, ShoppingBag, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function AdminPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)

    // Check if user is logged in and is admin (mock check)
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
      toast({
        title: "Access denied",
        description: "You must be logged in to access the admin dashboard.",
        variant: "destructive",
      })
      router.push("/login")
      return
    }

    setIsLoading(false)
  }, [router, toast])

  if (!isMounted || isLoading) {
    return (
      <div className="container flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="animate-spin h-8 w-8 border-4 border-green-600 rounded-full border-t-transparent"></div>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:px-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <Package className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-xl mb-2">{products.length}</CardTitle>
            <CardDescription>Total Products</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 mb-4">
              <ShoppingBag className="h-6 w-6 text-yellow-600" />
            </div>
            <CardTitle className="text-xl mb-2">{mockOrders.length}</CardTitle>
            <CardDescription>Total Orders</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle className="text-xl mb-2">24</CardTitle>
            <CardDescription>Total Users</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 mb-4">
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
            <CardTitle className="text-xl mb-2">$4,289</CardTitle>
            <CardDescription>Total Revenue</CardDescription>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="products" className="space-y-8">
        <TabsList>
          <TabsTrigger value="products" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            Products
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Users
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="Search products..." className="pl-8" />
            </div>
            <Button className="bg-green-600 hover:bg-green-700">Add Product</Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="h-12 px-4 text-left font-medium">Name</th>
                      <th className="h-12 px-4 text-left font-medium">Category</th>
                      <th className="h-12 px-4 text-left font-medium">Price</th>
                      <th className="h-12 px-4 text-left font-medium">Stock</th>
                      <th className="h-12 px-4 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.slice(0, 5).map((product) => (
                      <tr key={product.id} className="border-b">
                        <td className="p-4 align-middle">{product.name}</td>
                        <td className="p-4 align-middle capitalize">{product.category}</td>
                        <td className="p-4 align-middle">${product.price.toFixed(2)}</td>
                        <td className="p-4 align-middle">{product.stock}</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-500">
                              Delete
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="Search orders..." className="pl-8" />
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="h-12 px-4 text-left font-medium">Order ID</th>
                      <th className="h-12 px-4 text-left font-medium">Date</th>
                      <th className="h-12 px-4 text-left font-medium">Customer</th>
                      <th className="h-12 px-4 text-left font-medium">Total</th>
                      <th className="h-12 px-4 text-left font-medium">Status</th>
                      <th className="h-12 px-4 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockOrders.map((order) => (
                      <tr key={order.id} className="border-b">
                        <td className="p-4 align-middle">#{order.id}</td>
                        <td className="p-4 align-middle">{order.date}</td>
                        <td className="p-4 align-middle">{order.customer}</td>
                        <td className="p-4 align-middle">${order.total.toFixed(2)}</td>
                        <td className="p-4 align-middle">{order.status}</td>
                        <td className="p-4 align-middle">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input placeholder="Search users..." className="pl-8" />
            </div>
            <Button className="bg-green-600 hover:bg-green-700">Add User</Button>
          </div>

          <Card>
            <CardContent className="p-0">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="h-12 px-4 text-left font-medium">Name</th>
                      <th className="h-12 px-4 text-left font-medium">Email</th>
                      <th className="h-12 px-4 text-left font-medium">Role</th>
                      <th className="h-12 px-4 text-left font-medium">Joined</th>
                      <th className="h-12 px-4 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 align-middle">John Doe</td>
                      <td className="p-4 align-middle">john@example.com</td>
                      <td className="p-4 align-middle">Admin</td>
                      <td className="p-4 align-middle">Jan 10, 2023</td>
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-500">
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 align-middle">Jane Smith</td>
                      <td className="p-4 align-middle">jane@example.com</td>
                      <td className="p-4 align-middle">Customer</td>
                      <td className="p-4 align-middle">Mar 15, 2023</td>
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-500">
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 align-middle">Mike Johnson</td>
                      <td className="p-4 align-middle">mike@example.com</td>
                      <td className="p-4 align-middle">Customer</td>
                      <td className="p-4 align-middle">Apr 22, 2023</td>
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-500">
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
