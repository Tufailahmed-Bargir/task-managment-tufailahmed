"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, LoginSchema } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import axios from "axios"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [loginError, setLoginError] = useState<string | null>(null)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginSchema) => {
    setIsSubmitting(true)
    setLoginError(null)
    // Here you would typically send the data to your backend
    // For this example, we'll just simulate a delay and a successful login
    try {
      const response = await axios.post('/api/login', data)
      setLoginSuccess(true)
      if(response.status){
        toast({
          title:'login success!',
          description:"you have successfully login to your account",
          variant:'default'
        })
        router.push('/')
      }
    } catch (error) {
      setLoginError("Invalid email or password. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Log In</CardTitle>
        <CardDescription>Enter your credentials to access your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register("password")} />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Log In"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        {loginSuccess && (
          <Alert className="w-full">
            <AlertDescription>
              Login successful! Redirecting to your dashboard...
            </AlertDescription>
          </Alert>
        )}
        {loginError && (
          <Alert className="w-full" variant="destructive">
            <AlertDescription>{loginError}</AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  )
}

