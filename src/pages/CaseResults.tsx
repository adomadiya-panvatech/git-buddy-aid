
import React from 'react'
import { DollarSign, TrendingUp, Award, Users } from 'lucide-react'

const CaseResults: React.FC = () => {
  const results = [
    {
      amount: "$15.2M",
      category: "Medical Malpractice",
      description: "Birth injury case resulting in cerebral palsy",
      year: "2023"
    },
    {
      amount: "$8.7M",
      category: "Product Liability",
      description: "Defective medical device causing permanent injury",
      year: "2023"
    },
    {
      amount: "$6.3M",
      category: "Personal Injury",
      description: "Trucking accident with multiple injuries",
      year: "2022"
    },
    {
      amount: "$4.9M",
      category: "Workers' Compensation",
      description: "Construction site accident with permanent disability",
      year: "2022"
    },
    {
      amount: "$3.8M",
      category: "Medical Malpractice",
      description: "Misdiagnosis leading to delayed treatment",
      year: "2022"
    },
    {
      amount: "$2.1M",
      category: "Insurance Claims",
      description: "Bad faith insurance denial case",
      year: "2021"
    }
  ]

  const stats = [
    { icon: DollarSign, value: "$500M+", label: "Total Recovered" },
    { icon: Award, value: "1,000+", label: "Cases Won" },
    { icon: Users, value: "5,000+", label: "Clients Served" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" }
  ]

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Case Results
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our track record speaks for itself. We've secured millions in compensation for our clients across various practice areas.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center shadow-lg border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Results */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Recent Verdicts & Settlements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border"
              >
                <div className="text-3xl font-bold text-primary mb-3">
                  {result.amount}
                </div>
                <div className="text-lg font-semibold mb-2">
                  {result.category}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {result.description}
                </p>
                <div className="text-sm text-muted-foreground">
                  {result.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-muted/50 rounded-2xl p-6 md:p-8 mb-16">
          <h3 className="text-lg font-semibold mb-4">Important Disclaimer</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Past results do not guarantee future outcomes. Every case is unique and depends on various factors including the specific facts, applicable law, venue, and other circumstances. The results shown represent gross recoveries before deduction of expenses and attorney fees. Attorney fees and expenses can significantly reduce a client's recovery. These results should not be taken as a guarantee, promise, or prediction of the outcome of your case.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Could Your Case Be Next?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Every case is different, but our commitment to fighting for maximum compensation remains the same. Let us evaluate your case today.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Get Free Case Evaluation
          </button>
        </div>
      </div>
    </div>
  )
}

export default CaseResults
