import ProfileSection from "../components/section/profileSection"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function ProfilePage(){

    const supabase = createServerComponentClient({
        cookies
    })

    const {
        data: { session },
      } = await supabase.auth.getSession()
    
      if (!session) {
        // this is a protected route - only users who are signed in can view this route
        window.location.href = "http://localhost:3000/login";

      }

    return (

        <>
        
            <ProfileSection />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        
        </>

    )

}