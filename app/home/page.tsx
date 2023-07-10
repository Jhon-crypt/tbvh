import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import HonestBoxesSection from "../components/section/honestBoxesSection";
import { cookies } from 'next/headers'

export default async function Home() {

    const supabase = createServerComponentClient({
        cookies
    })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
        // this is a protected route - only users who are signed in can view this route
        window.location.href = "https://tbvh.vercel.app/login";

    }
    

    return (

        <>


            <HonestBoxesSection />

            <br /><br /><br /><br />

        </>

    )

}