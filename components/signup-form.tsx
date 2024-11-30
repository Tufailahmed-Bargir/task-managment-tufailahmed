"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema, SignupSchema } from "@/lib/schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import axios from "axios"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

export function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {toast} = useToast()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = async (data: SignupSchema) => {
    setIsSubmitting(true)
    reset()
    try{
      const response = await axios.post('/api/signup', data)
    console.log(response.data);
    if (response.status) {
      toast({
        title: "Success!",
        description: "Your account has been created.",
        variant: "default",
      });
      router.push('/');
    } else {
      throw new Error("Failed to create portfolio");
    }
    }catch(e:any){
      console.log(e.message);
      
    }finally{
      setIsSubmitting(false)
      setSubmitSuccess(true)
      toast({
        title: "signup success",
        description: "Your account has been created success",
        variant: "destructive",
      });
      router.push('/')

    }
   
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create your account to get started.</CardDescription>
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
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register("name")} />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
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
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        {submitSuccess && (
          <Alert className="w-full">
            <AlertDescription>
              Sign up successful! Check your email for further instructions.
            </AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  )
}

