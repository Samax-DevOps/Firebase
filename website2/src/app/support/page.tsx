import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, FileText, MessageCircle, Phone } from 'lucide-react'

export default function Support() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Support Center</h1>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">How can we help you?</h2>
        <div className="flex">
          <Input type="search" placeholder="Search for help..." className="flex-grow mr-2" />
          <Button>
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              Documentation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Access our comprehensive documentation for detailed product information and guides.</p>
            <Button asChild>
              <Link href="/documentation">View Documentation</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="w-6 h-6 mr-2" />
              Live Chat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Chat with our support team in real-time for immediate assistance.</p>
            <Button>Start Chat</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="w-6 h-6 mr-2" />
              Phone Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Call our support line for direct help from our expert team.</p>
            <Button>Call Now</Button>
          </CardContent>
        </Card>
      </div>

      <h2 id="faq" className="text-2xl font-semibold mb-8 text-center pt-16">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          'How do I place an order?',
          'What is your return policy?',
          'How can I track my order?',
          'Do you offer international shipping?',
          'How can I request a product demo?'
        ].map((question, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

