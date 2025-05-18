"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingBag, User, Menu, Search } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useCart } from "./cart-provider"
import CartSidebar from "./cart-sidebar"
import { Input } from "./ui/input"

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { cartItems } = useCart()
  const [cartOpen, setCartOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    // Set mounted state
    setIsMounted(true)

    // Check if user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loggedIn)

    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 md:gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-2xl font-bold text-green-600 mb-4">
                    LifeSolutionHub
                  </Link>
                  <nav className="flex flex-col gap-4">
                    <Link href="/" className="text-lg font-medium hover:text-green-600 transition-colors">
                      Home
                    </Link>
                    <Link href="/breakfast" className="text-lg font-medium hover:text-green-600 transition-colors">
                      Breakfast
                    </Link>
                    <Link href="/lunch" className="text-lg font-medium hover:text-green-600 transition-colors">
                      Lunch
                    </Link>
                    <Link href="/dinner" className="text-lg font-medium hover:text-green-600 transition-colors">
                      Dinner
                    </Link>
                    <Link href="/blog" className="text-lg font-medium hover:text-green-600 transition-colors">
                      Blog
                    </Link>
                    {isLoggedIn ? (
                      <Link href="/account" className="text-lg font-medium hover:text-green-600 transition-colors">
                        My Account
                      </Link>
                    ) : (
                      <Link href="/login" className="text-lg font-medium hover:text-green-600 transition-colors">
                        Login
                      </Link>
                    )}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl text-green-600 hidden sm:inline-block">LifeSolutionHub</span>
              <span className="font-bold text-xl text-green-600 sm:hidden">LSH</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/breakfast" className="text-sm font-medium hover:text-green-600 transition-colors">
              Breakfast
            </Link>
            <Link href="/lunch" className="text-sm font-medium hover:text-green-600 transition-colors">
              Lunch
            </Link>
            <Link href="/dinner" className="text-sm font-medium hover:text-green-600 transition-colors">
              Dinner
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-green-600 transition-colors">
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-green-600 text-xs text-white flex items-center justify-center animate-in zoom-in">
                  {cartItems.length}
                </span>
              )}
            </Button>

            {isMounted ? (
              isLoggedIn ? (
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/account">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                  </Link>
                </Button>
              ) : (
                <Button variant="outline" asChild className="hidden sm:flex">
                  <Link href="/login">Login</Link>
                </Button>
              )
            ) : (
              // Render a placeholder with the same dimensions to prevent layout shift
              <Button variant="outline" asChild className="hidden sm:flex">
                <Link href="/login">Login</Link>
              </Button>
            )}
          </div>
        </div>

        {/* Search bar */}
        <div
          className={`container px-4 md:px-6 overflow-hidden transition-all duration-300 ${
            searchOpen ? "h-16 opacity-100 border-t" : "h-0 opacity-0"
          }`}
        >
          <div className="py-4 flex items-center">
            <Input placeholder="Search for products..." className="flex-1" autoFocus={searchOpen} />
            <Button className="ml-2 bg-green-600 hover:bg-green-700">Search</Button>
          </div>
        </div>
      </header>

      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}
