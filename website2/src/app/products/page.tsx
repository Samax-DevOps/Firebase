import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { name: 'Guide Rails', description: 'Precision-engineered for smooth operation', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Elevator Machines', description: 'Powerful and efficient elevator motors', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Control Chips', description: 'Advanced technology for smart elevators', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Elevator Ropes', description: 'High-strength ropes for reliable performance', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Safety Gears', description: 'Ensuring passenger safety in all situations', image: '/placeholder.svg?height=200&width=300' },
  { name: 'Door Systems', description: 'Smooth and secure elevator entrances', image: '/placeholder.svg?height=200&width=300' },
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
            <CardContent>
              <Image src={product.image} width={300} height={200} alt={product.name} className="rounded-lg" />
            </CardContent>
            <CardFooter>
              <Button asChild>
                {product.name === 'Guide Rails' ? <Link href={`/products/guide-rails`}>Learn More</Link> :
                product.name === 'Elevator Machines' ? <Link href={`/products/machines`}>Learn More</Link> :
                product.name === 'Control Chips' ? <Link href={`/products/chips`}>Learn More</Link> :
                <Link href={`/products/${product.name.toLowerCase().replace(' ', '-')}`}>Learn More</Link>}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

