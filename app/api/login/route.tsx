import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export async function POST(req:NextRequest) {
    
    const data = await req.json()

    const {email, password}= data;
    console.log('data is');
   
    if(!email || !password){
        return NextResponse.json({
            msg:"provide input fields"
        })
        
    }

    const checkUserExists = await prisma.user.findUnique({
        where:{
            email
        }
    })
    if(!checkUserExists){
        return NextResponse.json({
            msg:'user not exists login please',
        })
    }
    
    return NextResponse.json({
        msg:"user login success!",
        status:true
    })
    
}