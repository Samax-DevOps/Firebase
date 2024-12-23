import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Zap, BarChart } from 'lucide-react'
import ExchangeRateChart from './components/exchange-rate-chart'

export default function Home() {

  const cards = [
    {
      title: "Guide Rails",
      description: "Precision-engineered for smooth operation",
      image: { src: "/images/rail.png", width: 250, height: 200, alt: "Guide Rails" },
      link: "/products/guide-rails",
    },
    {
      title: "Elevator Machines",
      description: "Powerful and efficient elevator motors",
      image: { src: "/images/2.png", width: 250, height: 200, alt: "Elevator Machines" },
      link: "/products/machines",
    },
    {
      title: "Control Chips",
      description: "Advanced technology for smart elevators",
      image: { src: "/images/chip.png", width: 250, height: 200, alt: "Control Chips" },
      link: "/products/chips",
    },
  ];

  return (
    <div className="gradient-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[900px] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/back.png"
          alt="Elevator Background"
          fill
          style={{ objectFit: 'fill' }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/50" style={{ backdropFilter: "blur(3  px)" }}></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Elevating Your Elevator Solutions</h1>
          <p className="text-lg sm:text-xl mb-8">Premium elevator components for seamless vertical transportation</p>
          <Button asChild className="lg bg-buttonf text-primary-foreground px-4 py-2 rounded">
        
            <Link href="/products">
              Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-11">

          {cards.map((card, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent className="justify-items-center">
                <Link href={card.link}>
                  <Image
                    src={card.image.src}
                    width={card.image.width}
                    height={card.image.height}
                    alt={card.image.alt}
                    className="rounded-lg w-80 h-72"
                  />
                </Link>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={card.link} className="bg-primary text-primary-foreground hover:bg-gray-500 px-4 py-2 rounded">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Samax Engineering?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Shield className="w-16 h-16 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p>Our products meet the highest industry standards for safety and reliability.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="w-16 h-16 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>We continuously innovate to bring you the latest in elevator technology.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BarChart className="w-16 h-16 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Global Expertise</h3>
              <p>With years of experience, we offer solutions tailored to your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Exchange Rate */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Live USD to INR Exchange Rate</h2>
        <ExchangeRateChart />
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">"Samax Engineering has consistently delivered top-notch elevator components. Their guide rails have significantly improved the performance of our elevators."</p>
                <p className="font-semibold">- Sam Patel, Chief Engineer at SkyScraper Co.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="italic mb-4">"The control chips from Samax have revolutionized our smart elevator systems. We couldn't be happier with the results."</p>
                <p className="font-semibold">- Rekha Patel, CTO at Elevatetech</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Project?</h2>
        <p className="text-xl mb-8">Contact us today to discuss your elevator component needs.</p>
        <Button asChild size="lg">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>
    </div>
  )
}

