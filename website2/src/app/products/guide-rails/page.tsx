import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function GuideRails() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Guide Rails</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Precision-Engineered for Smooth Operation</h2>
          <p className="mb-4">
            Our guide rails are the backbone of any elevator system, ensuring smooth and silent operation. 
            Engineered to the highest standards, they provide unparalleled stability and durability.
          </p>
          <ul className="space-y-2 mb-6">
            {['High-grade steel construction', 'Precision machined surfaces', 'Vibration-reducing design', 'Long-lasting performance'].map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
          <Button asChild>
            <Link href="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <Image 
            src="/images/clear.png" 
            width={600} 
            height={400} 
            alt="Samax Engineering Guide Rails" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Guide Rail Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>T127-1/B</CardTitle>
            <CardDescription>Standard Guide Rail</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Weight: 16.7 kg/m</li>
              <li>Width: 127 mm</li>
              <li>Depth: 89 mm</li>
              <li>Moment of Inertia: 368.5 cm⁴</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>T127-2/B</CardTitle>
            <CardDescription>Heavy-Duty Guide Rail</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Weight: 23.8 kg/m</li>
              <li>Width: 127 mm</li>
              <li>Depth: 114 mm</li>
              <li>Moment of Inertia: 758.7 cm⁴</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>T89/B</CardTitle>
            <CardDescription>Compact Guide Rail</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Weight: 10.8 kg/m</li>
              <li>Width: 89 mm</li>
              <li>Depth: 62 mm</li>
              <li>Moment of Inertia: 121.8 cm⁴</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Why Choose Samax Guide Rails?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Samax Engineering guide rails are the preferred choice for elevator manufacturers and maintenance companies worldwide. Our commitment to quality and innovation ensures that your elevators will operate smoothly and safely for years to come.
          </p>
          <Button asChild>
            <Link href="/contact">Contact Our Sales Team</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

