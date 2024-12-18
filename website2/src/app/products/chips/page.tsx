import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Cpu, Shield, Zap, Wifi } from 'lucide-react'

export default function Chips() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Control Chips</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Advanced Technology for Smart Elevators</h2>
          <p className="mb-4">
            Our cutting-edge control chips are at the heart of modern smart elevator systems. 
            Designed for optimal performance, safety, and efficiency, these chips enable 
            advanced features and seamless integration with building management systems.
          </p>
          <ul className="space-y-2 mb-6">
            {['High-speed processing', 'Advanced safety algorithms', 'Energy optimization', 'IoT connectivity'].map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
          <Button asChild>
            <Link href="/contact">Inquire About Integration <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <Image 
            src="/placeholder.svg?height=400&width=600&text=Control+Chip" 
            width={600} 
            height={400} 
            alt="Samax Engineering Control Chip" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Our Chip Series</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>SC-1000</CardTitle>
            <CardDescription>Standard Control Chip</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Processor: Dual-core 1.2 GHz</li>
              <li>Memory: 2 GB RAM</li>
              <li>Storage: 16 GB Flash</li>
              <li>Connectivity: Ethernet, CAN</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>SC-2000</CardTitle>
            <CardDescription>Advanced Control Chip</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Processor: Quad-core 2.0 GHz</li>
              <li>Memory: 4 GB RAM</li>
              <li>Storage: 32 GB Flash</li>
              <li>Connectivity: Ethernet, CAN, Wi-Fi</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>SC-3000</CardTitle>
            <CardDescription>Premium Control Chip</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Processor: Octa-core 2.5 GHz</li>
              <li>Memory: 8 GB RAM</li>
              <li>Storage: 64 GB Flash</li>
              <li>Connectivity: Ethernet, CAN, Wi-Fi, 5G</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <Card>
          <CardHeader>
            <Cpu className="w-10 h-10 text-blue-500" />
            <CardTitle>High Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our chips deliver lightning-fast processing power for smooth elevator operation and quick response times.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Shield className="w-10 h-10 text-blue-500" />
            <CardTitle>Enhanced Safety</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Advanced algorithms ensure fail-safe operation and real-time monitoring of all elevator systems.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Zap className="w-10 h-10 text-blue-500" />
            <CardTitle>Energy Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Intelligent power management features optimize energy consumption without compromising performance.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Wifi className="w-10 h-10 text-blue-500" />
            <CardTitle>IoT Ready</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Seamless integration with building management systems and support for remote monitoring and diagnostics.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upgrade Your Elevator's Intelligence</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Samax Engineering's control chips are the brain of modern elevator systems. Whether you're 
            developing new smart elevators or upgrading existing ones, our chips provide the intelligence 
            and connectivity needed for next-generation vertical transportation solutions.
          </p>
          <Button asChild>
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

