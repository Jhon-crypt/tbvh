import { NextResponse } from "next/server";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

type User_login_data = {
    email?: string,
    password?: string
}

export async function POST(request: Request){

    const supabase = createServerComponentClient({
         
         cookies 
    })

    const login_data:User_login_data = await request.json()

    const {email, password} = login_data

    const { data, error }: any = await supabase.auth.signInWithPassword({
        email: `${email}`,
        password: `${password}`,
    })

    if(error){

        console.log(error)

        let login_status = false

        return NextResponse.json({"message" : login_status})

    }else{

        let login_status = true

        console.log("Logged In Successfully")

        return NextResponse.json({"message" : login_status})

        
        
    }

}