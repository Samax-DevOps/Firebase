import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Samax Engineering</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Samax Engineering was founded in 1995 with a vision to revolutionize the elevator industry. 
            What started as a small workshop has now grown into a global leader in elevator components, 
            serving clients across the world.
          </p>
          <p>
            Our commitment to quality, innovation, and customer satisfaction has been the driving force 
            behind our success. We continually strive to push the boundaries of what's possible in 
            elevator technology.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image 
            src="/placeholder.svg?height=300&width=400" 
            width={400} 
            height={300} 
            alt="Samax Engineering Headquarters" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-8 text-center">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p>We are constantly innovating to bring cutting-edge solutions to the elevator industry.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p>We maintain the highest standards of quality in all our products and services.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
            <p>Our customers' needs are at the heart of everything we do.</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {['CEO', 'CTO', 'Head of Engineering', 'Head of Sales'].map((role, index) => (
          <Card key={index}>
            <CardContent className="pt-6 flex flex-col items-center">
              <Image 
                src={`/placeholder.svg?height=150&width=150&text=${role}`} 
                width={150} 
                height={150} 
                alt={role} 
                className="rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">John Doe</h3>
              <p className="text-gray-600">{role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

