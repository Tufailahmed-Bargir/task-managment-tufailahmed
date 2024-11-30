import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-muted mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TaskMaster. All rights reserved.
          </p>
        </div>
        <nav className="flex space-x-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  )
}

