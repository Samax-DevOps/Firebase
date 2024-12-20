import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { name: 'Guide Rails', description: 'Precision-engineered for smooth operation', image: '/images/rail.png', link: '/products/guide-rails' },
  { name: 'Elevator Machines', description: 'Powerful and efficient elevator motors', image: '/images/2.png', link: '/products/machines' },
  { name: 'Control Chips', description: 'Advanced technology for smart elevators', image: '/images/chip.png', link: '/products/chips' },
  { name: 'Elevator Ropes', description: 'High-strength ropes for reliable performance', image: '/images/rope.png', link: '/products/guide-rails' },
  { name: 'Safety Gears', description: 'Ensuring passenger safety in all situations', image: '/images/Safety.png', link: '/products/guide-rails' },
  { name: 'Door Systems', description: 'Smooth and secure elevator entrances', image: '/images/door.png', link: '/products/guide-rails' },
]

export default function Products() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-centre items-center">
              <Link href={product.link}>
                <Image src={product.image} width={300} height={200} alt={product.name} className="rounded-lg w-80 h-72" />
              </Link>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={product.link}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

