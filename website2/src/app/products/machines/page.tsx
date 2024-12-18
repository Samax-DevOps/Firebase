import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Zap, Gauge, Volume2, Leaf } from 'lucide-react'

export default function Machines() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Elevator Machines</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Powerful and Efficient Elevator Motors</h2>
          <p className="mb-4">
            Our state-of-the-art elevator machines are designed to deliver exceptional performance, 
            energy efficiency, and reliability. Whether you're building a new elevator or upgrading 
            an existing one, our machines provide the power and precision you need.
          </p>
          <ul className="space-y-2 mb-6">
            {['High energy efficiency', 'Low noise operation', 'Compact design', 'Long service life'].map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
          <Button asChild>
            <Link href="/contact">Get a Custom Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <Image 
            src="/placeholder.svg?height=400&width=600&text=Elevator+Machine" 
            width={600} 
            height={400} 
            alt="Samax Engineering Elevator Machine" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Our Machine Range</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>SM-100</CardTitle>
            <CardDescription>Gearless Traction Machine</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Capacity: 630-1000 kg</li>
              <li>Speed: Up to 1.75 m/s</li>
              <li>Motor Type: Permanent Magnet Synchronous</li>
              <li>Efficiency: 95%</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>SM-200</CardTitle>
            <CardDescription>High-Speed Traction Machine</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Capacity: 1000-1600 kg</li>
              <li>Speed: Up to 3.0 m/s</li>
              <li>Motor Type: Permanent Magnet Synchronous</li>
              <li>Efficiency: 97%</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>SM-300</CardTitle>
            <CardDescription>Heavy-Duty Traction Machine</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Capacity: 1600-2500 kg</li>
              <li>Speed: Up to 2.5 m/s</li>
              <li>Motor Type: Permanent Magnet Synchronous</li>
              <li>Efficiency: 96%</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <Card>
          <CardHeader>
            <Zap className="w-10 h-10 text-blue-500" />
            <CardTitle>Energy Efficient</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our machines use up to 50% less energy than conventional systems, reducing operating costs and environmental impact.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Gauge className="w-10 h-10 text-blue-500" />
            <CardTitle>Precise Control</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Advanced motor design ensures smooth acceleration, deceleration, and floor leveling for passenger comfort.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Volume2 className="w-10 h-10 text-blue-500" />
            <CardTitle>Quiet Operation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Innovative design and high-quality materials result in whisper-quiet operation, enhancing the user experience.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Leaf className="w-10 h-10 text-blue-500" />
            <CardTitle>Eco-Friendly</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our machines are designed with sustainability in mind, using recyclable materials and energy-efficient technologies.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Elevate Your Project with Samax Machines</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Whether you're working on a new construction project or modernizing an existing elevator system, 
            Samax Engineering has the perfect machine solution for you. Our team of experts is ready to help 
            you choose the right machine for your specific needs.
          </p>
          <Button asChild>
            <Link href="/contact">Speak with an Expert</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

