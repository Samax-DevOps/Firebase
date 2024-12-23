import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link href="/about" className="hover:underline">About Us</Link>
              </li>
              <li className="mt-2">
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
              <li className="mt-2">
                <Link href="/careers" className="hover:underline">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Products</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link href="/products/guide-rails" className="hover:underline">Guide Rails</Link>
              </li>
              <li className="mt-2">
                <Link href="/products/machines" className="hover:underline">Machines</Link>
              </li>
              <li className="mt-2">
                <Link href="/products/chips" className="hover:underline">Chips</Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Support</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link href="/support" className="hover:underline">Help Center</Link>
              </li>
              <li className="mt-2">
                <Link href="/support#faq" className="hover:underline">FAQ</Link>
              </li>
              <li className="mt-2">
                <Link href="/documentation" className="hover:underline">Documentation</Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4 flex justify-center md:justify-start">
              <li className="mr-4">
                <a href="#" className="hover:text-gray-400"><Facebook /></a>
              </li>
              <li className="mr-4">
                <a href="#" className="hover:text-gray-400"><Twitter /></a>
              </li>
              <li className="mr-4">
                <a href="#" className="hover:text-gray-400"><Instagram /></a>
              </li>
              <li className="mr-4">
                <a href="#" className="hover:text-gray-400"><Linkedin /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-white font-bold mb-2">
              © 2023 Samax Engineering
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

