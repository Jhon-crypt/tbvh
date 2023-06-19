import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import HonestBoxesSection from "../components/section/honestBoxesSection";
//import EmptyHero from "../components/hero/emptyHero"
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {

    const supabase = createServerComponentClient({
        cookies
    })

    const {
        data: { session },
      } = await supabase.auth.getSession()
    
      if (!session) {
        // this is a protected route - only users who are signed in can view this route
        redirect('/login')
      }

    return (

        <>

            
            <HonestBoxesSection />
                

            <br /><br /><br /><br />

        </>

    )

}