import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import prisma from "@/lib/db";
import jwt from "jsonwebtoken";
export async function POST(req: NextRequest) {
    try {
        // Parse the request body
        const data = await req.json();
        console.log('data is', data);

        const { email, password, name } = data;

        // Validate input fields
        if (!email || !password || !name) {
            return NextResponse.json({
                msg: 'Please fill all input fields',
                success: false,
            });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create the user in the database
        const createUser = await prisma.user.create({
            data: {
                name,
                email,
                password:hashPassword // Use 'password' instead of 'hashPassword'
            },
        });

        const token = jwt.sign({ name }, process.env.JWT_PASSWORD);
        // Return success response
        return NextResponse.json({
            msg: 'User created successfully!',
            success: true,
            createUser,
            token:token
        });
    } catch (e:unknown) {
        console.error('Error creating user:', error); // Log the error for debugging
        return NextResponse.json({
            msg: 'An error occurred while creating the user.',
            error: e.message,
            success: false,
        });
    }
}