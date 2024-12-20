import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Book, Video, Download } from 'lucide-react'

export default function Documentation() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Documentation</h1>
      
      <p className="text-xl text-center mb-12">
        Access comprehensive guides, technical specifications, and support materials for all Samax Engineering products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardHeader>
            <FileText className="w-10 h-10 text-blue-500 mb-2" />
            <CardTitle>Product Manuals</CardTitle>
            <CardDescription>Detailed guides for all our products</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-4">
              <li>Guide Rails Installation Manual</li>
              <li>Elevator Machines User Guide</li>
              <li>Control Chips Programming Guide</li>
            </ul>
            <Button asChild>
              <Link href="/documentation/manuals">View Manuals</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Book className="w-10 h-10 text-blue-500 mb-2" />
            <CardTitle>Technical Specifications</CardTitle>
            <CardDescription>Detailed specs for engineers and technicians</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-4">
              <li>Guide Rails Technical Data</li>
              <li>Elevator Machines Specifications</li>
              <li>Control Chips Datasheets</li>
            </ul>
            <Button asChild>
              <Link href="/documentation/specs">View Specifications</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Video className="w-10 h-10 text-blue-500 mb-2" />
            <CardTitle>Video Tutorials</CardTitle>
            <CardDescription>Step-by-step visual guides</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-4">
              <li>Guide Rail Installation Process</li>
              <li>Elevator Machine Maintenance</li>
              <li>Control Chip Programming Basics</li>
            </ul>
            <Button asChild>
              <Link href="/documentation/tutorials">Watch Tutorials</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">Featured Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Elevator System Integration Guide</CardTitle>
            <CardDescription>Comprehensive guide for system integrators</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Learn how to seamlessly integrate Samax Engineering components into a complete elevator system. 
              This guide covers everything from initial planning to final testing and commissioning.
            </p>
            <Button asChild>
              <Link href="/documentation/integration-guide">
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Troubleshooting and Maintenance Handbook</CardTitle>
            <CardDescription>Essential resource for maintenance teams</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              A comprehensive handbook covering common issues, troubleshooting procedures, and 
              preventive maintenance schedules for all Samax Engineering products.
            </p>
            <Button asChild>
              <Link href="/documentation/maintenance-handbook">
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Need Additional Support?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            If you can't find the information you need in our documentation, our support team is here to help. 
            Contact us for personalized assistance with your Samax Engineering products.
          </p>
          <Button asChild>
            <Link href="/support">Contact Support</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

