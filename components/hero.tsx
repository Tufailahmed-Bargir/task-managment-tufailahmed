import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Manage Tasks with Ease
        </h1>
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto">
          Boost your productivity and streamline your workflow with TaskMaster, the ultimate task management solution.
        </p>
        <Link href={'/tasks'}>
        <Button size="lg" variant="secondary">
          Get Started for Free
        </Button>
         </Link>
      </div>
    </section>
  )
}

