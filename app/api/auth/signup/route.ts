import { NextResponse } from "next/server";
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { headers,cookies } from 'next/headers'

type User_Data = {
    name?: string,
    email?: string,
    password?: string
}

export async function POST(request: Request){

    const supabase = createServerComponentClient({ 
        
        cookies 
    })

    //console.log(Supabase)

    const info: User_Data = await request.json()

    const { name, email, password } = info

    const { data, error } = await supabase.auth.signUp({
        email: `${email}`,
        password: `${password}`,
        options: {
            data: {
                full_name: `${name}`,
            }
        }
    })

    if(error){

        console.log(error)

    }else{

        console.log('You have been signed up successfully, check your email')

        return NextResponse.json({ name, email, password })

    }
 
}