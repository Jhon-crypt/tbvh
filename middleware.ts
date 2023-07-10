import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"; 
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {

    if(req.nextUrl.pathname.startsWith('/chat')){

        return "Working"

    }else{

        const res = NextResponse.next()

        const supabase = createMiddlewareClient({ req, res })

        await supabase.auth.getSession()

        return res

    }

}