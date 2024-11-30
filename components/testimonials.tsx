import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "TaskMaster has revolutionized how our team manages projects. It's intuitive and powerful!",
    author: "Jane Doe",
    role: "Project Manager",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    quote: "I've tried many task management tools, but TaskMaster stands out with its user-friendly interface and robust features.",
    author: "John Smith",
    role: "Freelance Developer",
    avatar: "/placeholder.svg?height=40&width=40"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <CardContent>
                  <p className="text-lg italic">"{testimonial.quote}"</p>
                </CardContent>
              </CardHeader>
              <CardFooter className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

