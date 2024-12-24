'use client'

import { useState, useEffect } from 'react'
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

type ExchangeRate = {
  date: string
  rate: number
}

export default function ExchangeRateChart() {
  const [data, setData] = useState<ExchangeRate[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
        const result = await response.json()
        const rate = result.rates.INR

        // Generate mock historical data for the past 7 days
        const today = new Date()
        const mockData = Array.from({ length: 7 }, (_, i) => {
          const date = new Date(today)
          date.setDate(date.getDate() - i)
          return {
            date: date.toISOString().split('T')[0],
            rate: rate + (Math.random() - 0.5) * 2 // Add some random fluctuation
          }
        }).reverse()

        setData(mockData)
      } catch (error) {
        console.error('Error fetching exchange rate:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl md:text-2xl">USD to INR Exchange Rate</CardTitle>
        <CardDescription>Last 7 days</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ChartContainer
          config={{
            rate: {
              label: "Exchange Rate",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return `${date.getMonth() + 1}/${date.getDate()}`;
                }}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                width={50}
                tickFormatter={(value) => value.toFixed(2)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend wrapperStyle={{ fontSize: '12px', marginTop: '10px' }} />
              <Line type="monotone" dataKey="rate" stroke="var(--color-rate)" name="Exchange Rate" />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

