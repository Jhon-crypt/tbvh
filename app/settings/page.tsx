import SettingsSection from "../components/section/settingsSection"
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function SettingsPage(){

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
        
            <SettingsSection />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        
        </>

    )

}