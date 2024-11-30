import * as z from "zod"

// Existing signup schema
export const signupSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" })
    
})

// New login schema
export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
})

export type SignupSchema = z.infer<typeof signupSchema>
export type LoginSchema = z.infer<typeof loginSchema>

