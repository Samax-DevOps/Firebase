'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CableCarIcon as Elevator, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/support', label: 'Support' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center text-gray-800 hover:text-gray-700">
            <Elevator className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">Samax Engineering</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-800 hover:text-gray-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className='md:hidden'>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  View page as u go
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-800 hover:text-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}























// import Link from 'next/link'
// import { CableCarIcon as Elevator } from 'lucide-react'
// import { Button } from "@/components/ui/button"

// export default function Header() {
//   return (
//     <header className="bg-white shadow-md">
//       <nav className="container mx-auto px-6 py-3">
//         <div className="flex items-center justify-between">
//           <Link href="/" className="flex items-center text-gray-800 hover:text-gray-700">
//             <Elevator className="w-8 h-8 mr-2" />
//             <span className="text-xl font-bold">Samax Engineering</span>
//           </Link>
//           <div className="hidden md:flex items-center space-x-4 font-semibold">
//             <Link href="/" className="text-gray-800 hover:text-gray-400">Home</Link>
//             <Link href="/products" className="text-gray-800 hover:text-gray-400">Products</Link>
//             <Link href="/about" className="text-gray-800 hover:text-gray-400">About</Link>
//             <Link href="/contact" className="text-gray-800 hover:text-gray-400">Contact</Link>
//             <Link href="/support" className="text-gray-800 hover:text-gray-400">Support</Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   )
// }

