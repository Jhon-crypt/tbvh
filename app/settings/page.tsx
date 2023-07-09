import SettingsSection from "../components/section/settingsSection"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function SettingsPage(){

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
        
            <SettingsSection />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        
        </>

    )

}