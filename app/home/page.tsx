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

      const fetch_user_chatboxes = await fetch("http://localhost:3000/api/chatbox/fetchChatBoxes")

      const user_chatboxes_response = await fetch_user_chatboxes.json()

      console.log(user_chatboxes_response.honestBox)

    return (

        <>

            
            <HonestBoxesSection />
                

            <br /><br /><br /><br />

        </>

    )

}