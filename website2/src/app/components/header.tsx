import Link from 'next/link'
import { CableCarIcon as Elevator } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center text-gray-800 hover:text-gray-700">
            <Elevator className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">Samax Engineering</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4 font-semibold">
            <Link href="/" className="text-gray-800 hover:text-gray-400">Home</Link>
            <Link href="/products" className="text-gray-800 hover:text-gray-400">Products</Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-400">About</Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-400">Contact</Link>
            <Link href="/support" className="text-gray-800 hover:text-gray-400">Support</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

