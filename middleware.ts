import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"; 
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {

    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })

    const {
        data : { user },
    } = await supabase.auth.getUser()

    if(user && req.nextUrl.pathname === "/login" ) {

        return NextResponse.redirect(new URL('/home', req.url))

    }

    if(!user && req.nextUrl.pathname === "/login" ) {

        return NextResponse.redirect(new URL('/login', req.url))

    }

    if(!user && req.nextUrl.pathname === "/create" ) {

        return NextResponse.redirect(new URL('/login', req.url))

    }

    if(!user && req.nextUrl.pathname === "/profile" ) {

        return NextResponse.redirect(new URL('/login', req.url))

    }

    if(!user && req.nextUrl.pathname === "/settings" ) {

        return NextResponse.redirect(new URL('/login', req.url))

    }

    return res

}

export const config = {
    matcher: ['/login', '/create', '/profile', '/settings'],
}