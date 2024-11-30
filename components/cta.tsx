import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Productivity?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied users and start managing your tasks more efficiently today.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full sm:w-auto bg-primary-foreground text-primary"
          />
          <Button size="lg" variant="secondary">
            Get Started
          </Button>
        </form>
      </div>
    </section>
  )
}

