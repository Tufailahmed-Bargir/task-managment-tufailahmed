import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Zap } from 'lucide-react'

const features = [
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: "Task Organization",
    description: "Easily create, categorize, and prioritize your tasks."
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Time Tracking",
    description: "Monitor the time spent on each task to improve productivity."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Team Collaboration",
    description: "Share tasks and projects with your team for seamless cooperation."
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Automation",
    description: "Set up automated workflows to save time and reduce errors."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

